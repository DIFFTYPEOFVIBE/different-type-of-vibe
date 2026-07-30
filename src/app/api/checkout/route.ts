import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(req: Request) {
  try {
    const stripeSecret = process.env.STRIPE_SECRET_KEY;
    if (!stripeSecret) {
      return NextResponse.json({ error: 'Stripe API key missing' }, { status: 500 });
    }

    const stripe = new Stripe(stripeSecret, {
      apiVersion: '2023-10-16' as any,
    });

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
            unit_amount: Math.round(priceAmount * 100),
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      metadata: { beatId, licenseType },
      success_url: `${req.headers.get('origin')}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get('origin')}/`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}