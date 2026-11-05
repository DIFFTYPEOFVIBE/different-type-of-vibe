// src/app/api/webhooks/stripe/route.ts
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { Resend } from 'resend';
import { sendMetaCapiEvent } from '@/lib/metaCapi';
import { createClient } from '@supabase/supabase-js';

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const stripeSecret = process.env.STRIPE_SECRET_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!stripeSecret || !webhookSecret) {
    return NextResponse.json(
      { error: 'Stripe configuration missing.' },
      { status: 500 }
    );
  }

  const stripe = new Stripe(stripeSecret, {
    apiVersion: '2023-10-16' as any,
  });

  const resend = apiKey ? new Resend(apiKey) : null;

  const body = await req.text();
  const signature = req.headers.get('stripe-signature') as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err: any) {
    return NextResponse.json(
      { error: `Webhook Error: ${err.message}` },
      { status: 400 }
    );
  }

  // Handle Subscription & One-time Purchase Webhooks
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
  const supabase = createClient(supabaseUrl, supabaseKey);

  if (event.type === 'invoice.payment_succeeded') {
    const invoice = event.data.object as any;
    const customerEmail = invoice.customer_email || invoice.customer_details?.email;
    const subscriptionId = invoice.subscription as string;

    if (customerEmail) {
      const defaultCredits = invoice.amount_paid >= 2000 ? 999 : 5; // $24.99+ = Unlimited, $9.99 = 5 credits

      try {
        await supabase.from('subscriptions').upsert({
          user_email: customerEmail,
          stripe_subscription_id: subscriptionId,
          stripe_customer_id: invoice.customer as string,
          plan_tier: defaultCredits === 999 ? 'pro' : 'standard',
          status: 'active',
          monthly_wav_credits: defaultCredits,
          credits_remaining: defaultCredits, // Refill credits on successful billing cycle
          updated_at: new Date().toISOString(),
        }, { onConflict: 'user_email' });

        console.log(`✅ Refilled ${defaultCredits} credits for subscriber: ${customerEmail}`);
      } catch (subErr) {
        console.error('Supabase subscription upsert error:', subErr);
      }
    }
  }

  if (event.type === 'customer.subscription.deleted') {
    const sub = event.data.object as Stripe.Subscription;
    const customerId = sub.customer as string;

    try {
      await supabase
        .from('subscriptions')
        .update({ status: 'canceled', credits_remaining: 0, updated_at: new Date().toISOString() })
        .eq('stripe_customer_id', customerId);

      console.log(`⚠️ Subscription canceled for customer ID: ${customerId}`);
    } catch (subErr) {
      console.error('Supabase subscription cancel error:', subErr);
    }
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;

    // Check if session is a subscription
    if (session.mode === 'subscription') {
      const email = session.customer_details?.email || undefined;
      const amountTotal = (session.amount_total || 0) / 100;
      const planTier = (session.metadata?.planTier || (amountTotal >= 24 ? 'pro' : 'standard')).toLowerCase();
      const isProTier = planTier === 'pro' || amountTotal >= 24;
      const defaultCredits = isProTier ? 999 : 5;

      if (email && session.payment_status === 'paid') {
        try {
          await supabase.from('subscriptions').upsert({
            user_email: email,
            stripe_subscription_id: session.subscription as string,
            stripe_customer_id: session.customer as string,
            plan_tier: isProTier ? 'pro' : 'standard',
            status: 'active',
            monthly_wav_credits: defaultCredits,
            credits_remaining: defaultCredits,
            updated_at: new Date().toISOString(),
          }, { onConflict: 'user_email' });

          console.log(`🎉 New subscription activated for ${email} (${planTier})`);
        } catch (sErr) {
          console.error('Failed to log new subscription in Supabase:', sErr);
        }

        if (resend) {
          const downloadUrl = isProTier
            ? process.env.PRO_CREATOR_PASS_DROPBOX_URL ||
              'https://www.dropbox.com/scl/fo/gz83uvvpk1fp5orl8ifab/ADeEPpROgGcQbKTUiGR8YhI?rlkey=hxg03sdeiwkpsq0gcgimm3oo7&st=ndjdcppo&dl=1'
            : 'https://www.dropbox.com/scl/fi/forf156uvalla161tvjsr/STANDARD-PASS-5-WAV-COMMERCIAL-LEASES-UNTAGGED.zip?rlkey=sg8xi2iajsa5lhb975by77oda&st=yohnami0&dl=1';
          const passName = isProTier ? 'Pro Creator Pass ($24.99/mo)' : 'VIP Artist Pass ($9.99/mo)';
          const streamCap = isProTier ? '500,000' : '100,000';
          try {
            await resend.emails.send({
              from: 'Onzieb <onzieb@mail.differenttypeofvibe.com>',
              to: [email],
              subject: isProTier
                ? '🚀 Pro Creator Pass Confirmed! Your Unlimited WAV + Stems Vault & 500k Stream License'
                : '🎉 VIP Pass Order Confirmed! Your Untagged WAV Beat Leases & License Contract',
              html: `
                <div style="background-color: #0b071a; color: #f1ecff; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 40px 20px; max-width: 600px; margin: 0 auto; border-radius: 12px; border: 1px solid #2d1b4e;">
                  <h1 style="color: #c084fc; text-align: center;">DIFFERENT TYPE OF VIBE</h1>
                  <div style="background-color: #120c2a; border-radius: 8px; padding: 30px; border: 1px solid #1f1440; line-height: 1.6; font-size: 16px;">
                    <p>Hey there 👋,</p>
                    <p>Thank you for subscribing to the <strong>${passName}</strong>! Your payment was successfully confirmed.</p>
                    <div style="background-color: #1e133e; border: 1px solid #7c3aed; padding: 25px; border-radius: 8px; margin: 25px 0; text-align: center;">
                      <h3 style="color: #c084fc; margin-top: 0;">${isProTier ? '🚀 PRO CREATOR UNLIMITED WAV + STEMS VAULT' : '🎁 VIP PASS 5 UNTAGGED WAV COMMERCIAL LEASES'}</h3>
                      <a href="${downloadUrl}" style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: #ffffff; text-decoration: none; padding: 16px 36px; border-radius: 6px; font-weight: bold; font-size: 16px; display: inline-block;">${isProTier ? '📥 Access Unlimited WAV + Stems Vault' : '📥 Download 5 Untagged WAV Commercial Leases (.ZIP)'}</a>
                    </div>
                    <p style="font-size: 14px; color: #a78bfa;">📜 <strong>Licensing Rights Included:</strong> Commercial distribution rights up to ${streamCap} streams on Spotify & Apple Music, 100% master royalty ownership${isProTier ? ', Full Stems / Trackouts, Priority Email Support,' : ''} and instant clearance against copyright strikes.</p>
                  </div>
                </div>
              `,
            });
          } catch (emailErr) {
            console.error('Failed to send subscription fulfillment email:', emailErr);
          }
        }
      }
    } else {
      // One-off purchase session
      const email = session.customer_details?.email || undefined;
      const amountTotal = (session.amount_total || 0) / 100;
      const beatTitle = session.metadata?.beatTitle || 'Beat License';
      const beatId = session.metadata?.beatId;
      const licenseType = session.metadata?.licenseType || 'Standard License';

      const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://differenttypeofvibe.com';
      const downloadUrl = `${baseUrl}/api/download?session_id=${session.id}&beat_id=${beatId}`;

      // 1. Process post-purchase email delivery via Resend (Inline HTML)
      if (resend && email) {
        try {
          await resend.emails.send({
            from: 'Different Type of Vibe <music@mail.differenttypeofvibe.com>',
            to: [email],
            subject: `Download: ${beatTitle} (${licenseType.toUpperCase()} License)`,
            html: `
              <div style="font-family: sans-serif; background-color: #09090b; color: #ffffff; padding: 32px;">
                <h1 style="color: #10b981; font-size: 24px; margin-bottom: 16px;">Your Beat Download is Ready!</h1>
                <p style="font-size: 16px; color: #e4e4e7;">
                  Thank you for purchasing <strong>${beatTitle}</strong> (${licenseType.toUpperCase()} License).
                </p>
                <div style="margin: 32px 0;">
                  <a href="${downloadUrl}" style="background-color: #10b981; color: #000000; padding: 12px 24px; border-radius: 6px; font-weight: bold; text-decoration: none; display: inline-block;">
                    Download Beat & License
                  </a>
                </div>
                <p style="font-size: 12px; color: #a1a1aa;">
                  If you have any questions or need custom stems/trackouts, reply directly to this email.
                </p>
              </div>
            `,
          });
        } catch (emailError) {
          console.error('Failed to send Resend email:', emailError);
        }
      }

      // 2. Fire Meta Conversions API (CAPI) Purchase Event
      const userAgent = req.headers.get('user-agent') || undefined;
      const clientIpAddress =
        req.headers.get('x-forwarded-for')?.split(',')[0] || undefined;

      if (email) {
        await sendMetaCapiEvent({
          eventName: 'Purchase',
          eventId: session.id,
          email: email,
          clientIp: clientIpAddress,
          userAgent: userAgent,
          customData: {
            value: amountTotal,
            currency: (session.currency || 'usd').toUpperCase(),
            content_name: beatTitle,
            content_ids: beatId ? [beatId] : [],
            content_type: licenseType,
            order_id: session.id,
          },
        });
      }
    }
  }

  return NextResponse.json({ received: true });
}