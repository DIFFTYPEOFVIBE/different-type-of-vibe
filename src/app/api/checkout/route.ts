// src/app/api/checkout/route.ts
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripeSecret = process.env.STRIPE_SECRET_KEY;

export async function POST(req: Request) {
  if (!stripeSecret) {
    return NextResponse.json(
      { error: 'Stripe secret key missing.' },
      { status: 500 }
    );
  }

  const stripe = new Stripe(stripeSecret, {
    apiVersion: '2023-10-16' as any,
  });

  try {
    const { beatId, beatTitle, licenseType } = await req.json();

    const origin = req.headers.get('origin') || 'http://localhost:3000';

    // Map license types to price amounts (in cents)
    const priceMap: Record<string, number> = {
      mp3: 2999, // $29.99
      wav: 4999, // $49.99
      unlimited: 19999, // $199.99
    };

    const unitAmount = priceMap[licenseType.toLowerCase()] || 2999;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `${beatTitle} (${licenseType.toUpperCase()} License)`,
            },
            unit_amount: unitAmount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/`,
      // Attach metadata for the webhook & Meta CAPI
      metadata: {
        beatId: beatId,
        beatTitle: beatTitle,
        licenseType: licenseType,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error('Error creating Stripe checkout session:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}