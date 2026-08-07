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

    const body = await req.json();

    // Support both multi-item cart payloads and legacy single-beat payloads
    let lineItems = [];
    let sessionMetadata: Record<string, string> = {};

    if (body.items && Array.isArray(body.items)) {
      // Multi-item cart checkout with bulk discount handling
      const { items } = body;

      // Calculate lowest price for Buy 2 Get 1 Free logic if 3+ items
      let lowestPriceIndex = -1;
      if (items.length >= 3) {
        let minPrice = Infinity;
        items.forEach((item: any, idx: number) => {
          if (item.price < minPrice) {
            minPrice = item.price;
            lowestPriceIndex = idx;
          }
        });
      }

      lineItems = items.map((item: any, idx: number) => {
        const isFreeItem = idx === lowestPriceIndex;
        const finalPrice = isFreeItem ? 0 : item.price;

        return {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `${item.trackTitle || item.beatTitle} (${(item.licenseType || 'MP3').toUpperCase()} License)${isFreeItem ? ' [BUY 2 GET 1 FREE]' : ''}`,
            },
            unit_amount: Math.round(finalPrice * 100),
          },
          quantity: 1,
        };
      });

      sessionMetadata = {
        cartCount: items.length.toString(),
        itemIds: items.map((i: any) => i.trackId || i.beatId).join(','),
      };
    } else {
      // Legacy single-item payload fallback
      const { beatId, beatTitle, licenseType, priceAmount } = body;

      lineItems = [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `${beatTitle} (${(licenseType || 'MP3').toUpperCase()} License)`,
            },
            unit_amount: Math.round(priceAmount * 100),
          },
          quantity: 1,
        },
      ];

      sessionMetadata = { beatId, licenseType };
    }

    const origin = req.headers.get('origin') || 'https://differenttypeofvibe.com';

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      metadata: sessionMetadata,
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}