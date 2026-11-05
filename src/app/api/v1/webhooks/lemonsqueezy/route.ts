import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { createClient } from '@supabase/supabase-js';
import { sendMetaCapiEvent } from '@/lib/metaCapi';

const DEFAULT_STANDARD_PASS_DROPBOX_URL =
  'https://www.dropbox.com/scl/fi/forf156uvalla161tvjsr/STANDARD-PASS-5-WAV-COMMERCIAL-LEASES-UNTAGGED.zip?rlkey=sg8xi2iajsa5lhb975by77oda&st=yohnami0&dl=1';

const DEFAULT_PRO_PASS_DROPBOX_URL =
  'https://www.dropbox.com/scl/fo/gz83uvvpk1fp5orl8ifab/ADeEPpROgGcQbKTUiGR8YhI?rlkey=hxg03sdeiwkpsq0gcgimm3oo7&st=ndjdcppo&dl=1';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || 'https://hnliahdtcbuvggxhmzej.supabase.co';
const SUPABASE_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhubGlhaGR0Y2J1dmdneGhtemVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ2Njg4NTcsImV4cCI6MjEwMDI0NDg1N30.Nh0Bi_Nw3IR3V27dLN3PAEC6e2wrYQK1YeIzOCm_pXc';

async function resolveBeatDownloadUrl(
  beatTitle: string,
  tier?: string,
  fallbackAudioUrl?: string
): Promise<{ primaryUrl: string; bonusVaultUrl?: string }> {
  const cleanTitle = beatTitle.split(' - ')[0].replace(/\(.*?\)/g, '').trim();
  const normalizedBase = cleanTitle.toLowerCase().replace(/[^a-z0-9]/g, '');
  const normalizedTier = (tier || 'wav').toLowerCase();

  try {
    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
    const { data: files } = await supabase.storage.from('audio-previews').list('', { limit: 200 });

    if (files && files.length > 0) {
      const matchingFiles = files
        .map((f) => f.name)
        .filter((name) => name.toLowerCase().replace(/[^a-z0-9]/g, '').includes(normalizedBase));

      if (matchingFiles.length > 0) {
        let bestFile = matchingFiles[0];

        if (normalizedTier === 'stems') {
          bestFile =
            matchingFiles.find((n) => n.toLowerCase().endsWith('.zip')) ||
            matchingFiles.find((n) => n.toLowerCase().includes('wav_lease')) ||
            matchingFiles.find((n) => n.toLowerCase().endsWith('.wav')) ||
            bestFile;
        } else if (normalizedTier === 'wav') {
          bestFile =
            matchingFiles.find((n) => n.toLowerCase().includes('wav_lease')) ||
            matchingFiles.find((n) => n.toLowerCase().endsWith('.wav')) ||
            bestFile;
        } else {
          bestFile =
            matchingFiles.find((n) => n.toLowerCase().includes('mp3_lease')) ||
            matchingFiles.find((n) => n.toLowerCase().endsWith('.mp3') && !n.toLowerCase().includes('preview')) ||
            bestFile;
        }

        const { data: pub } = supabase.storage.from('audio-previews').getPublicUrl(bestFile);
        if (pub?.publicUrl) {
          return {
            primaryUrl: pub.publicUrl,
            ...(normalizedTier === 'stems'
              ? { bonusVaultUrl: process.env.PRO_CREATOR_PASS_DROPBOX_URL || DEFAULT_PRO_PASS_DROPBOX_URL }
              : {}),
          };
        }
      }
    }
  } catch (err) {
    console.error('[Lemon Squeezy] Error resolving beat file from Supabase:', err);
  }

  const encoded = encodeURIComponent(`${cleanTitle} - Onzieb.mp3`);
  return {
    primaryUrl:
      fallbackAudioUrl ||
      `https://hnliahdtcbuvggxhmzej.supabase.co/storage/v1/object/public/audio-previews/${encoded}`,
    ...(normalizedTier === 'stems'
      ? { bonusVaultUrl: process.env.PRO_CREATOR_PASS_DROPBOX_URL || DEFAULT_PRO_PASS_DROPBOX_URL }
      : {}),
  };
}

async function sendDownloadEmail(
  toEmail: string,
  productName?: string,
  orderId?: string,
  isProTier = false,
  customData?: Record<string, any>
) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn('[Lemon Squeezy] RESEND_API_KEY not configured. Skipping download email.');
    return;
  }

  const fromEmail = process.env.RESEND_FROM_EMAIL || 'Onzieb <onzieb@mail.differenttypeofvibe.com>';
  const beatTitle = customData?.clean_beat_title || customData?.beat_title;

  if (beatTitle) {
    const tier = customData?.tier || 'wav';
    const licenseType = customData?.license_type || productName || 'Commercial Beat Lease';
    const { primaryUrl, bonusVaultUrl } = await resolveBeatDownloadUrl(
      String(beatTitle),
      String(tier),
      customData?.audio_url
    );

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #0b071a; color: #f1ecff; border-radius: 12px; border: 1px solid #2d1b4e;">
        <h1 style="color: #c084fc; margin-bottom: 4px;">DIFFERENT TYPE OF VIBE</h1>
        <p style="color: #22d3ee; font-weight: bold; font-size: 13px; margin-top: 0;">🎵 OFFICIAL COMMERCIAL BEAT LICENSE — ${String(licenseType).toUpperCase()}</p>
        <p>Thanks for licensing <strong>"${beatTitle}"</strong>!${orderId ? ` (Order #${orderId})` : ''}</p>
        <p>Your untagged studio master files are unlocked and ready for instant download below:</p>
        <p style="text-align: center; margin: 28px 0;">
          <a href="${primaryUrl}" style="background: #34d399; color: #000; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block; margin-bottom: 12px;">
            Download "${beatTitle}" (${licenseType})
          </a>
          ${
            bonusVaultUrl
              ? `<br><a href="${bonusVaultUrl}" style="background: #22d3ee; color: #000; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block; margin-top: 8px; margin-bottom: 12px;">Access Full Trackout Stems Folder</a>`
              : ''
          }
          <br>
          <a href="https://app.lemonsqueezy.com/my-orders" style="color: #a78bfa; font-size: 13px; text-decoration: underline;">
            View Receipt & License Agreement on Lemon Squeezy
          </a>
        </p>
        <p>If you need any custom edits, BPM adjustments, or additional formats, just reply directly to this email and I’ll take care of you personally.</p>
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
        subject: `🎵 Your Untagged Beat "${beatTitle}" (${licenseType}) is Ready!`,
        html,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error(`[Lemon Squeezy] Resend error sending beat lease to ${toEmail}: ${text}`);
    } else {
      console.log(`[Lemon Squeezy] Beat lease email sent to ${toEmail} for "${beatTitle}" (${tier})`);
    }
    return;
  }

  const downloadUrl = isProTier
    ? process.env.PRO_CREATOR_PASS_DROPBOX_URL || DEFAULT_PRO_PASS_DROPBOX_URL
    : DEFAULT_STANDARD_PASS_DROPBOX_URL;
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #0b071a; color: #f1ecff; border-radius: 12px;">
      <h1 style="color: #c084fc;">DIFFERENT TYPE OF VIBE</h1>
      <p>Thanks for your order${productName ? ` of <strong>${productName}</strong>` : ''}!${orderId ? ` (Order #${orderId})` : ''}</p>
      <p>Your ${isProTier ? 'Unlimited WAV + Stems Vault' : '5 Untagged WAV Commercial Beat Leases'} and licensing rights (up to ${isProTier ? '500,000' : '100,000'} streams) are ready below:</p>
      <p style="text-align: center; margin: 28px 0;">
        <a href="${downloadUrl}" style="background: #34d399; color: #000; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: bold;">${isProTier ? 'Access Pro Creator WAV + Stems Vault' : 'Download Your 5 WAV Beats (.ZIP)'}</a>
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
    const customData = event?.meta?.custom_data || {};

    console.log(`[Lemon Squeezy Webhook] Event: ${eventName}`, customData);

    if (eventName === 'order_created') {
      const attrs = event?.data?.attributes || {};
      const email = attrs.user_email;
      const orderId = event?.data?.id;
      const firstItem = attrs.first_order_item || {};
      const variantId = firstItem.variant_id;
      const productName = firstItem.product_name;

      console.log(`[Lemon Squeezy] Order ${orderId} from ${email} for ${productName} (variant ${variantId})`);

      if (email && attrs.status === 'paid') {
        const totalCents = typeof attrs.total === 'number' ? attrs.total : 999;
        const isProTier =
          customData?.tier === 'pro' ||
          totalCents >= 2400 ||
          String(productName || '').toLowerCase().includes('pro creator');
        await sendDownloadEmail(email, productName, orderId, isProTier, customData);
        await sendMetaCapiEvent({
          eventName: 'Purchase',
          eventId: `ls_order_${orderId}`,
          email: email,
          sourceUrl: 'https://differenttypeofvibe.com/vip-pass',
          customData: {
            value: Number((totalCents / 100).toFixed(2)),
            currency: (attrs.currency || 'USD').toUpperCase(),
            content_name: customData?.beat_title || productName || 'Standard VIP Pass',
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
