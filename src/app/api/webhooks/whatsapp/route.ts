import { NextResponse } from 'next/server';

const VALID_TOKENS = new Set([
  'beat_store_lead_token',
  process.env.META_WEBHOOK_VERIFY_TOKEN,
].filter(Boolean));

/**
 * 1. Meta Webhook Verification Handshake (GET)
 * Meta calls this endpoint when configuring WhatsApp Cloud API Webhooks.
 */
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const mode = searchParams.get('hub.mode');
  const token = searchParams.get('hub.verify_token');
  const challenge = searchParams.get('hub.challenge');

  if (mode === 'subscribe' && token && VALID_TOKENS.has(token)) {
    return new Response(challenge, {
      status: 200,
      headers: { 'Content-Type': 'text/plain' },
    });
  }

  return NextResponse.json({ error: 'Webhook verification token mismatch' }, { status: 403 });
}

/**
 * 2. Automated WhatsApp Inbound Message Listener & Auto-Closer (POST)
 * Receives incoming messages from recording artists and sends automated
 * conversational replies, beat links, and checkout instructions via Meta Cloud API.
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (body.object !== 'whatsapp_business_account') {
      return NextResponse.json({ status: 'ignored' }, { status: 200 });
    }

    const entry = body.entry?.[0];
    const changes = entry?.changes?.[0]?.value;
    const messages = changes?.messages;

    if (!messages || messages.length === 0) {
      return NextResponse.json({ status: 'no_messages' }, { status: 200 });
    }

    const message = messages[0];
    const senderPhone = message.from;
    const messageText = (message.text?.body || '').toLowerCase().trim();
    const phoneNumberId = changes?.metadata?.phone_number_id || process.env.WHATSAPP_PHONE_NUMBER_ID;
    const metaToken = process.env.META_ACCESS_TOKEN || process.env.META_PAGE_ACCESS_TOKEN;

    if (!phoneNumberId || !metaToken) {
      console.warn('⚠️ WhatsApp API credentials missing (WHATSAPP_PHONE_NUMBER_ID / META_ACCESS_TOKEN)');
      return NextResponse.json({ status: 'credentials_missing' }, { status: 200 });
    }

    let replyText = '';

    if (messageText.includes('free') || messageText.includes('starter') || messageText.includes('pack')) {
      replyText = `Yo! Here is your 3 Free Untagged Beats Starter Pack:\n👉 https://www.differenttypeofvibe.com/free-downloads\n\nDownload them, load them into your DAW, and see how your vocals sound! What genre are you cooking right now? (Afrobeats, Trap, Drill, or R&B?) 🎹🔥`;
    } else if (
      messageText.includes('pay') ||
      messageText.includes('buy') ||
      messageText.includes('price') ||
      messageText.includes('pass') ||
      messageText.includes('cost') ||
      messageText.includes('naira') ||
      messageText.includes('card')
    ) {
      replyText = `🇳🇬 VIP PASS & CHECKOUT OPTIONS\n==================================\n🎟️ Standard VIP Pass ($9.99/mo ~ ₦15,000/mo):\n• 5 Untagged 24-bit WAV Leases every month\n• 100% Master Royalties kept by you\n👉 https://buy.stripe.com/bJe5kCgKebCq3Ipg8vcZa2p\n\n⚡ Prefer Crypto? (USDT):\n👉 https://www.differenttypeofvibe.com/crypto-pay\n\n💡 If local bank card declined: Use a free Virtual Dollar Card on Geegpay (geegpay.africa) or Chipper Cash—it clears Stripe instantly!\n==================================\nLet me know which option you prefer! 🚀`;
    } else if (messageText.includes('license') || messageText.includes('rights') || messageText.includes('spotify')) {
      replyText = `📜 LICENSE & STREAMING CLEARANCE\n==================================\n• 100% Untagged: Zero voiceovers on downloads.\n• Spotify & Apple Music: Cleared for commercial streaming.\n• Keep 100% Master Royalties: Zero backend cuts.\n• Lifetime Rights: Perpetual release coverage.\n==================================\nGrab the $9.99 pass to unlock licenses: https://buy.stripe.com/bJe5kCgKebCq3Ipg8vcZa2p 🎹`;
    } else {
      replyText = `Yo! Onzieb here from Different Type of Vibe 🎹🔥\n\nThanks for reaching out! Here is instant access to your 3 Free Untagged Starter Beats:\n👉 https://www.differenttypeofvibe.com/free-downloads\n\n🎟️ Want 5 WAV Leases every month for Spotify/Apple Music releases?\nUnlock the $9.99/mo VIP Pass: https://buy.stripe.com/bJe5kCgKebCq3Ipg8vcZa2p\n\n(In Nigeria? Use a Geegpay USD card or pay USDT Crypto at /crypto-pay)\n\nWhat kind of vibe or artist sound are you working on right now? 🚀`;
    }

    const sendRes = await fetch(`https://graph.facebook.com/v20.0/${phoneNumberId}/messages`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${metaToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        recipient_type: 'individual',
        to: senderPhone,
        type: 'text',
        text: { body: replyText },
      }),
    });

    const sendData = await sendRes.json();
    return NextResponse.json({ status: 'success', data: sendData }, { status: 200 });
  } catch (err: any) {
    console.error('❌ WhatsApp Webhook Processing Error:', err);
    return NextResponse.json({ error: err.message || 'Webhook failed' }, { status: 500 });
  }
}
