import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { variantId, email, custom } = await req.json();

    if (!variantId) {
      return NextResponse.json({ error: 'variantId is required' }, { status: 400 });
    }

    const res = await fetch('https://api.lemonsqueezy.com/v1/checkouts', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.LEMONSQUEEZY_API_KEY}`,
        'Content-Type': 'application/vnd.api+json',
        Accept: 'application/vnd.api+json',
      },
      body: JSON.stringify({
        data: {
          type: 'checkouts',
          attributes: {
            checkout_data: {
              email: email || undefined,
              custom: custom || {},
            },
          },
          relationships: {
            store: { data: { type: 'stores', id: String(process.env.LEMONSQUEEZY_STORE_ID) } },
            variant: { data: { type: 'variants', id: String(variantId) } },
          },
        },
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error('[Lemon Squeezy] Checkout creation failed:', data);
      return NextResponse.json({ error: 'Failed to create checkout' }, { status: 500 });
    }

    const checkoutUrl = data?.data?.attributes?.url;
    if (!checkoutUrl) {
      return NextResponse.json({ error: 'No checkout URL returned' }, { status: 500 });
    }

    return NextResponse.json({ url: checkoutUrl });
  } catch (err: any) {
    console.error('[Lemon Squeezy Checkout Error]:', err);
    return NextResponse.json({ error: err.message || 'Checkout failed' }, { status: 500 });
  }
}
