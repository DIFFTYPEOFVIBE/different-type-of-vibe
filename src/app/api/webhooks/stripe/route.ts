// src/app/api/webhooks/stripe/route.ts
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { Resend } from 'resend';
import { sendCapiPurchaseEvent } from '@/lib/metaCapi';

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

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;

    const email = session.customer_details?.email || undefined;
    const amountTotal = (session.amount_total || 0) / 100;
    const beatTitle = session.metadata?.beatTitle || 'Beat License';
    const beatId = session.metadata?.beatId;
    const licenseType = session.metadata?.licenseType || 'Standard License';

    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://yourdomain.com';
    const downloadUrl = `${baseUrl}/api/download?session_id=${session.id}&beat_id=${beatId}`;

    // 1. Process post-purchase email delivery via Resend (Inline HTML)
    if (resend && email) {
      try {
        await resend.emails.send({
          from: 'Onzieb Beats <licenses@yourdomain.com>',
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

    await sendCapiPurchaseEvent({
      eventId: session.id,
      user: {
        email,
        clientIpAddress,
        userAgent,
      },
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

  return NextResponse.json({ received: true });
}