import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { sendMetaCapiEvent } from '@/lib/metaCapi';

async function sendDownloadEmail(toEmail: string, productName?: string, orderId?: string) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn('[Lemon Squeezy] RESEND_API_KEY not configured. Skipping download email.');
    return;
  }

  const fromEmail = process.env.RESEND_FROM_EMAIL || 'Onzieb <onzieb@mail.differenttypeofvibe.com>';
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #0b071a; color: #f1ecff; border-radius: 12px;">
      <h1 style="color: #c084fc;">DIFFERENT TYPE OF VIBE</h1>
      <p>Thanks for your order${productName ? ` of <strong>${productName}</strong>` : ''}!${orderId ? ` (Order #${orderId})` : ''}</p>
      <p>Your files are ready. Click below to access your downloads:</p>
      <p style="text-align: center; margin: 28px 0;">
        <a href="https://app.lemonsqueezy.com/my-orders" style="background: #34d399; color: #000; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: bold;">Download Your Beats</a>
      </p>
      <p>If you have any trouble, just reply to this email and I’ll help you out.</p>
      <p>Best,<br><strong>Onzieb</strong><br>Different Type of Vibe</p>
    </div>
  `;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      'User-Agent': 'Mozilla/5.0',
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      subject: 'Your Different Type of Vibe downloads are ready',
      html,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    console.error(`[Lemon Squeezy] Resend error sending to ${toEmail}: ${text}`);
  } else {
    console.log(`[Lemon Squeezy] Download email sent to ${toEmail}`);
  }
}

export async function POST(req: Request) {
  try {
    const rawBody = await req.text();
    const signature = req.headers.get('x-signature');

    if (!signature || !process.env.LEMONSQUEEZY_WEBHOOK_SECRET) {
      return NextResponse.json({ error: 'Missing signature or secret' }, { status: 401 });
    }

    const hmac = crypto
      .createHmac('sha256', process.env.LEMONSQUEEZY_WEBHOOK_SECRET)
      .update(rawBody)
      .digest('hex');

    if (hmac !== signature) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
    }

    const event = JSON.parse(rawBody);
    const eventName = event?.meta?.event_name;

    console.log(`[Lemon Squeezy Webhook] Event: ${eventName}`);

    if (eventName === 'order_created') {
      const attrs = event?.data?.attributes || {};
      const email = attrs.user_email;
      const orderId = event?.data?.id;
      const firstItem = attrs.first_order_item || {};
      const variantId = firstItem.variant_id;
      const productName = firstItem.product_name;

      console.log(`[Lemon Squeezy] Order ${orderId} from ${email} for ${productName} (variant ${variantId})`);

      if (email) {
        await sendDownloadEmail(email, productName, orderId);
        const totalCents = typeof attrs.total === 'number' ? attrs.total : 999;
        await sendMetaCapiEvent({
          eventName: 'Purchase',
          eventId: `ls_order_${orderId}`,
          email: email,
          sourceUrl: 'https://differenttypeofvibe.com/vip-pass',
          customData: {
            value: Number((totalCents / 100).toFixed(2)),
            currency: (attrs.currency || 'USD').toUpperCase(),
            content_name: productName || 'Standard VIP Pass',
            content_ids: variantId ? [String(variantId)] : undefined,
            content_type: 'product',
            order_id: String(orderId),
          },
        });
      }
    }

    if (eventName === 'subscription_created' || eventName === 'subscription_updated') {
      const attrs = event?.data?.attributes || {};
      console.log(`[Lemon Squeezy] Subscription ${eventName}: ${attrs.user_email} - ${attrs.status}`);
      // TODO: Grant/revoke membership access
    }

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (err: any) {
    console.error('[Lemon Squeezy Webhook Error]:', err);
    return NextResponse.json({ error: err.message || 'Webhook failed' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ status: 'Lemon Squeezy Webhook Active' }, { status: 200 });
}
