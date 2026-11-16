import { NextResponse } from 'next/server';

const STRIPE_STANDARD_LINK = 'https://buy.stripe.com/bJe5kCgKebCq3Ipg8vcZa2p';
const STRIPE_PRO_LINK = 'https://buy.stripe.com/14A00ifGadKyceV6xVcZa2q';
const STRIPE_ANNUAL_LINK = 'https://buy.stripe.com/4gMeVc2To5e2en3e0ncZa2r';

/**
 * Lemon Squeezy Migration Fallback Router
 * Since Lemon Squeezy is under review/shutting down, this route intercepts all
 * legacy links, buttons, and API requests and routes them directly to live Stripe Checkout!
 */
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const tier = (searchParams.get('tier') || '').toLowerCase();
    const variantId = String(searchParams.get('variantId') || '');

    if (tier === 'pro' || variantId === '2342061') {
      return NextResponse.redirect(STRIPE_PRO_LINK, 302);
    }
    if (tier === 'annual') {
      return NextResponse.redirect(STRIPE_ANNUAL_LINK, 302);
    }
    return NextResponse.redirect(STRIPE_STANDARD_LINK, 302);
  } catch {
    return NextResponse.redirect(STRIPE_STANDARD_LINK, 302);
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const tier = (body.tier || '').toLowerCase();
    const variantId = String(body.variantId || '');

    let redirectUrl = STRIPE_STANDARD_LINK;
    if (tier === 'pro' || variantId === '2342061') {
      redirectUrl = STRIPE_PRO_LINK;
    } else if (tier === 'annual') {
      redirectUrl = STRIPE_ANNUAL_LINK;
    }

    return NextResponse.json({ url: redirectUrl, status: 200 });
  } catch {
    return NextResponse.json({ url: STRIPE_STANDARD_LINK, status: 200 });
  }
}
