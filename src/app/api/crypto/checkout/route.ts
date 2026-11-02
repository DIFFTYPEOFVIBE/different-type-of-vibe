import { NextResponse } from 'next/server';

const NOWPAYMENTS_API_KEY = process.env.NOWPAYMENTS_API_KEY || '8W3JYYM-D984TDZ-GBDY7MQ-VRQM8EA';

export async function POST(req: Request) {
  try {
    const { planTier, email } = await req.json();

    const priceMap: Record<string, { amount: number; name: string }> = {
      standard: { amount: 9.99, name: 'Standard VIP Pass Subscription ($9.99/mo)' },
      pro: { amount: 24.99, name: 'Pro Creator Pass Subscription ($24.99/mo)' },
      annual: { amount: 89.99, name: 'Annual VIP Pass Subscription ($89.99/yr)' },
    };

    const plan = priceMap[planTier?.toLowerCase() || 'standard'] || priceMap.standard;

    const payload = {
      price_amount: plan.amount,
      price_currency: 'usd',
      order_id: `crypto_${planTier || 'standard'}_${Date.now()}`,
      order_description: `${plan.name} - Different Type of Vibe`,
      ipn_callback_url: 'https://differenttypeofvibe.com/api/v1/webhooks/nowpayments',
      success_url: 'https://differenttypeofvibe.com/success',
      cancel_url: 'https://differenttypeofvibe.com/crypto-pay',
      customer_email: email || undefined,
    };

    const res = await fetch('https://api.nowpayments.io/v1/invoice', {
      method: 'POST',
      headers: {
        'x-api-key': NOWPAYMENTS_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (data.invoice_url) {
      return NextResponse.json({ url: data.invoice_url }, { status: 200 });
    }

    return NextResponse.json({ error: data.message || 'Failed to generate crypto invoice' }, { status: 400 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Crypto checkout error' }, { status: 500 });
  }
}
