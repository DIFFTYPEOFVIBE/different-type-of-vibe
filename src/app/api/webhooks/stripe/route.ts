import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { Resend } from 'resend';

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const stripeSecret = process.env.STRIPE_SECRET_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!stripeSecret || !webhookSecret) {
    return NextResponse.json(
      { error: 'Stripe configuration missing.' },
      { status: 500 }
    );
  }

  const stripe = new Stripe(stripeSecret, {
    apiVersion: '2023-10-16' as any,
  });

  const resend = apiKey ? new Resend(apiKey) : null;

  const body = await req.text();
  const signature = req.headers.get('stripe-signature') as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err: any) {
    return NextResponse.json(
      { error: `Webhook Error: ${err.message}` },
      { status: 400 }
    );
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    // Process post-purchase email delivery here using `resend` if available
  }

  return NextResponse.json({ received: true });
}