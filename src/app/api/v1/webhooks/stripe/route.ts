import { NextResponse } from 'next/server';
import { sendMetaCapiEvent } from '@/lib/metaCapi';

/**
 * Stripe Webhook Route Handler
 * Endpoint: POST https://differenttypeofvibe.com/api/v1/webhooks/stripe
 */

async function sendRecoveryEmail(toEmail: string, reason?: string) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn('[Stripe Webhook] RESEND_API_KEY is not configured. Skipping recovery email.');
    return;
  }

  const fromEmail = process.env.RESEND_FROM_EMAIL || 'Onzieb <onzieb@mail.differenttypeofvibe.com>';
  const subject = '⚠️ Interrupted Beat Order / VIP Pass Checkout — Complete Your Order';
  
  const htmlContent = `
  <div style="background-color: #0b071a; color: #f1ecff; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 40px 20px; max-width: 600px; margin: 0 auto; border-radius: 12px; border: 1px solid #2d1b4e;">
      <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #c084fc; font-size: 28px; margin: 0; text-shadow: 0 0 10px rgba(192, 132, 252, 0.4);">DIFFERENT TYPE OF VIBE</h1>
          <p style="color: #9333ea; font-size: 14px; letter-spacing: 2px; margin: 5px 0 0 0; text-transform: uppercase;">ONZIEB PRODUCTION • INSTANT PAYMENT RECOVERY</p>
      </div>
      <div style="background-color: #120c2a; border-radius: 8px; padding: 30px; border: 1px solid #1f1440; line-height: 1.6; font-size: 16px;">
          <p>Hey 👋,</p>
          <p>It looks like your recent $9.99 VIP Pass / beat lease checkout was interrupted or declined by your bank's security check.</p>
          <p>Don't worry — your selected beats and 5 untagged WAV leases are held for you for the next 24 hours!</p>
          
          <div style="background-color: #1e133e; border: 1px solid #7c3aed; padding: 25px; border-radius: 8px; margin: 25px 0; text-align: center;">
              <p style="margin: 0 0 10px 0; color: #c084fc; font-weight: bold; font-size: 18px;">🔥 Complete Your $9.99 VIP Pass Order</p>
              <p style="margin: 0 0 15px 0; font-size: 14px; color: #d8b4fe;">Use promo code <strong style="color: #ffffff; background: #9333ea; padding: 2px 8px; border-radius: 4px;">WELCOME30</strong> for 30% OFF!</p>
              
              <a href="https://differenttypeofvibe.com/vip-pass" style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 6px; font-weight: bold; font-size: 16px; display: inline-block; box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4);">💳 Complete Checkout (Cards / Apple Pay / Google Pay)</a>
              
              <div style="margin-top: 15px; padding-top: 15px; border-top: 1px border-purple-800;">
                  <a href="https://differenttypeofvibe.com/crypto-pay" style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: #000000; text-decoration: none; padding: 12px 28px; border-radius: 6px; font-weight: bold; font-size: 14px; display: inline-block;">🪙 Prefer Crypto? Pay via USDT / USDC / BTC ➔</a>
              </div>
          </div>
          
          <div style="background-color: #27164c; border: 2px solid #a855f7; padding: 18px 20px; border-radius: 10px; margin-top: 25px; text-align: center; box-shadow: 0 4px 15px rgba(168, 85, 247, 0.3);">
              <p style="font-size: 16px; color: #ffffff; margin: 0; font-weight: bold; line-height: 1.5;">
                  💡 <span style="color: #facc15; font-size: 17px; text-transform: uppercase; letter-spacing: 0.5px;">Bank Card Approval Tip:</span><br/>
                  If using a debit or credit card, please approve the quick <strong style="color: #4ade80;">2FA / SMS confirmation prompt</strong> inside your mobile banking app to finalize checkout!
              </p>
          </div>
      </div>
      <div style="text-align: center; margin-top: 30px; font-size: 12px; color: #6b5a94;">
          <p>© 2026 Onzieb / Different Type of Vibe. All rights reserved.</p>
      </div>
  </div>
  `;

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        subject: subject,
        html: htmlContent,
      }),
    });

    if (res.ok) {
      console.log(`[Stripe Webhook] Successfully sent recovery email to ${toEmail}`);
    } else {
      const errText = await res.text();
      console.error(`[Stripe Webhook] Resend API error sending to ${toEmail}: ${errText}`);
    }
  } catch (err) {
    console.error(`[Stripe Webhook] Exception sending recovery email to ${toEmail}:`, err);
  }
}
const STANDARD_PASS_ZIP_URL =
  'https://www.dropbox.com/scl/fi/forf156uvalla161tvjsr/STANDARD-PASS-5-WAV-COMMERCIAL-LEASES-UNTAGGED.zip?rlkey=sg8xi2iajsa5lhb975by77oda&st=yohnami0&dl=1';

const PRO_CREATOR_PASS_ZIP_URL =
  process.env.PRO_CREATOR_PASS_DROPBOX_URL ||
  'https://www.dropbox.com/scl/fo/gz83uvvpk1fp5orl8ifab/ADeEPpROgGcQbKTUiGR8YhI?rlkey=hxg03sdeiwkpsq0gcgimm3oo7&st=ndjdcppo&dl=1';

async function sendFulfillmentEmail(toEmail: string, isProTier = false) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return;

  const fromEmail = process.env.RESEND_FROM_EMAIL || 'Onzieb <onzieb@mail.differenttypeofvibe.com>';
  const downloadUrl = isProTier ? PRO_CREATOR_PASS_ZIP_URL : STANDARD_PASS_ZIP_URL;
  const passName = isProTier ? 'Pro Creator Pass ($24.99/mo)' : 'VIP Artist Pass ($9.99/mo)';
  const boxHeading = isProTier
    ? '🚀 PRO CREATOR UNLIMITED WAV + STEMS VAULT'
    : '🎁 VIP PASS 5 UNTAGGED WAV COMMERCIAL LEASES';
  const boxDesc = isProTier
    ? 'Access your Unlimited 24-bit Untagged WAVs, Full Trackout Stems &amp; Monthly Beat Drops directly below:'
    : 'Download your 5 studio-quality 24-bit untagged WAV beat leases directly below:';
  const btnLabel = isProTier
    ? '📥 Access Unlimited WAV + Stems Vault'
    : '📥 Download 5 Untagged WAV Commercial Leases (.ZIP)';
  const streamCap = isProTier ? '500,000' : '100,000';
  const subject = isProTier
    ? '🚀 Pro Creator Pass Confirmed! Your Unlimited WAV + Stems Vault & 500k Stream License'
    : '🎉 VIP Pass Order Confirmed! Your Untagged WAV Beat Leases & License Contract';
  
  const htmlContent = `
  <div style="background-color: #0b071a; color: #f1ecff; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 40px 20px; max-width: 600px; margin: 0 auto; border-radius: 12px; border: 1px solid #2d1b4e;">
      <div style="text-align: center; margin-bottom: 25px;">
          <h1 style="color: #c084fc; font-size: 26px; margin: 0; letter-spacing: 1px;">DIFFERENT TYPE OF VIBE</h1>
          <p style="color: #9333ea; font-size: 13px; letter-spacing: 2px; margin: 5px 0 0 0; text-transform: uppercase;">ONZIEB PRODUCTION • OFFICIAL FULFILLMENT</p>
      </div>
      <div style="background-color: #120c2a; border-radius: 8px; padding: 30px; border: 1px solid #1f1440; line-height: 1.6; font-size: 16px;">
          <p>Hey there 👋,</p>
          <p>Thank you for subscribing to the <strong>${passName}</strong>! Your payment was successfully confirmed.</p>
          <p>Here are your instant untagged audio files and official legal licensing rights:</p>

          <div style="background-color: #1e133e; border: 1px solid #7c3aed; padding: 25px; border-radius: 8px; margin: 25px 0; text-align: center;">
              <h3 style="color: #c084fc; margin-top: 0;">${boxHeading}</h3>
              <p style="color: #d8b4fe; font-size: 14px; margin-bottom: 20px;">${boxDesc}</p>
              
              <a href="${downloadUrl}" style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: #ffffff; text-decoration: none; padding: 16px 36px; border-radius: 6px; font-weight: bold; font-size: 16px; display: inline-block; box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4);">${btnLabel}</a>
              
              <p style="margin-top: 15px; font-size: 13px;">
                  <a href="${downloadUrl}" style="color: #c084fc; text-decoration: underline;">📲 Mobile / Direct Dropbox Access</a>
              </p>
          </div>

          <p style="font-size: 14px; color: #a78bfa;">📜 <strong>Licensing Rights Included:</strong> Commercial distribution rights up to ${streamCap} streams on Spotify & Apple Music, 100% master royalty ownership${isProTier ? ', Full Stems / Trackouts, Priority Email Support,' : ''} and instant clearance against copyright strikes.</p>

          <p style="margin-top: 25px;">Happy recording!<br><strong>Onzieb</strong><br><span style="color: #a78bfa; font-size: 13px;">Different Type of Vibe</span></p>
      </div>
  </div>
  `;

  try {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        subject: subject,
        html: htmlContent,
      }),
    });
  } catch (err) {
    console.error(`[Stripe Webhook] Exception sending fulfillment email to ${toEmail}:`, err);
  }
}

export async function POST(req: Request) {
  try {
    const rawBody = await req.text();
    const signature = req.headers.get('stripe-signature');

    // Parse incoming event payload
    let event;
    try {
      event = JSON.parse(rawBody);
    } catch (parseErr) {
      return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 });
    }

    // Process relevant Stripe webhook events
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object;
        const buyerEmail = session.customer_details?.email || session.customer_email;
        const amountTotal = typeof session.amount_total === 'number' ? session.amount_total / 100 : 9.99;
        const currency = (session.currency || 'usd').toUpperCase();
        const planTier = (session.metadata?.planTier || '').toLowerCase();
        const isProTier = planTier === 'pro' || (session.mode === 'subscription' && amountTotal >= 24);
        console.log(`[Stripe Webhook] Checkout session completed: ${session.id} for email: ${buyerEmail} (Pro Tier: ${isProTier})`);
        if (buyerEmail && session.payment_status === 'paid') {
          await sendFulfillmentEmail(buyerEmail, isProTier);
          await sendMetaCapiEvent({
            eventName: 'Purchase',
            eventId: `stripe_${session.id}`,
            email: buyerEmail,
            sourceUrl: 'https://differenttypeofvibe.com/vip-pass',
            customData: {
              value: amountTotal,
              currency: currency,
              content_name: isProTier ? 'Pro Creator Pass ($24.99/mo)' : 'Standard VIP Pass ($9.99/mo)',
              content_type: 'product',
              order_id: session.id,
            },
          });
        }
        break;
      }
      case 'checkout.session.expired': {
        const session = event.data.object;
        const customerEmail = session.customer_details?.email || session.customer_email;
        console.log(`[Stripe Webhook] Checkout session expired: ${session.id} for email: ${customerEmail}`);
        if (customerEmail) {
          await sendRecoveryEmail(customerEmail, 'session_expired');
        }
        break;
      }
      case 'payment_intent.payment_failed': {
        const intent = event.data.object;
        const customerEmail = intent.last_payment_error?.payment_method?.billing_details?.email || intent.receipt_email;
        console.log(`[Stripe Webhook] Payment intent failed: ${intent.id} for email: ${customerEmail}`);
        if (customerEmail) {
          await sendRecoveryEmail(customerEmail, 'payment_failed');
        }
        break;
      }
      case 'invoice.payment_succeeded': {
        const invoice = event.data.object;
        console.log(`[Stripe Webhook] Invoice payment succeeded for customer: ${invoice.customer}`);
        // Add custom subscription renewal logic
        break;
      }
      default: {
        console.log(`[Stripe Webhook] Unhandled event type: ${event.type}`);
      }
    }

    // Return HTTP 200 OK to inform Stripe the event was successfully received
    return NextResponse.json({ received: true }, { status: 200 });
  } catch (err: any) {
    console.error('[Stripe Webhook Error]:', err);
    return NextResponse.json({ error: err.message || 'Webhook handler failed' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ status: 'Stripe Webhook Endpoint Active' }, { status: 200 });
}
