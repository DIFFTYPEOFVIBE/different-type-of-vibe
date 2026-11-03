import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripeSecret = process.env.STRIPE_SECRET_KEY;

export async function POST(req: Request) {
  if (!stripeSecret) {
    return NextResponse.json({ error: 'Stripe configuration missing.' }, { status: 500 });
  }

  const stripe = new Stripe(stripeSecret, { apiVersion: '2023-10-16' as any });

  try {
    const { planTier, email } = await req.json(); // 'standard', 'pro', or 'annual'
    const origin = req.headers.get('origin') || 'https://differenttypeofvibe.com';

    // Stripe Price IDs or line items fallback
    const priceMap: Record<string, { unitAmount: number; interval: 'month' | 'year'; name: string; credits: number }> = {
      standard: { unitAmount: 999, interval: 'month', name: 'Standard Pass Subscription ($9.99/mo)', credits: 5 },
      pro: { unitAmount: 2499, interval: 'month', name: 'Pro Creator Pass Subscription ($24.99/mo)', credits: 999 },
      annual: { unitAmount: 8999, interval: 'year', name: 'Annual VIP Pass Subscription ($89.99/yr)', credits: 5 },
    };

    const targetPlan = priceMap[planTier.toLowerCase()];
    if (!targetPlan) {
      return NextResponse.json({ error: 'Invalid plan tier selected.' }, { status: 400 });
    }

    // Keep recurring-compatible methods but exclude Cash App Pay
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'paypal'],
      customer_email: email || undefined,
      allow_promotion_codes: true,
      payment_method_options: {
        card: {
          request_three_d_secure: 'any', // Automatic smart 3DS fallback matching Beatstars routing
        },
      },
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: targetPlan.name,
              description: `Includes ${targetPlan.credits === 999 ? 'Unlimited' : targetPlan.credits} WAV leases per billing period with 100% untagged audio files.`,
            },
            unit_amount: targetPlan.unitAmount,
            recurring: {
              interval: targetPlan.interval,
            },
          },
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${origin}/success?subscription=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/deals`,
      metadata: {
        planTier: planTier.toLowerCase(),
        monthlyCredits: targetPlan.credits.toString(),
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error('Subscription checkout error:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}