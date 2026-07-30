// src/app/api/checkout/route.ts
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

// Map license types to price amounts (in cents)
const LICENSE_PRICES: Record<string, number> = {
  mp3: 2999,   // $29.99
  wav: 4999,   // $49.99
  stems: 14999, // $149.99
};

export async function POST(req: Request) {
  try {
    const { beatId, beatTitle, licenseType } = await req.json();

    const unitAmount = LICENSE_PRICES[licenseType];
    if (!unitAmount) {
      return NextResponse.json({ error: 'Invalid license type' }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `${beatTitle} (${licenseType.toUpperCase()} License)`,
              description: `Digital download license for ${beatTitle}`,
            },
            unit_amount: unitAmount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/`,
      // Attach metadata so we know what file to unlock in the webhook
      metadata: {
        beatId,
        licenseType,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error('Stripe session creation error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
// Inside src/app/api/checkout/route.ts
export async function POST(req: Request) {
  try {
    const { beatId, beatTitle, licenseType, priceAmount } = await req.json();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `${beatTitle} (${licenseType.toUpperCase()} License)`,
            },
            unit_amount: priceAmount || 2999, // Dynamic price in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/`,
      metadata: {
        beatId: beatId,
        licenseType: licenseType,
        productName: `${beatTitle} (${licenseType.toUpperCase()} License)`,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}