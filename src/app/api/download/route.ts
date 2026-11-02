import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripeSecret = process.env.STRIPE_SECRET_KEY;

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const sessionId = searchParams.get('session_id');

  if (!sessionId) {
    return NextResponse.redirect('https://differenttypeofvibe.com/#beats');
  }

  try {
    if (stripeSecret) {
      const stripe = new Stripe(stripeSecret, { apiVersion: '2023-10-16' as any });
      const session = await stripe.checkout.sessions.retrieve(sessionId);

      if (session.payment_status === 'paid' || session.mode === 'subscription') {
        return NextResponse.redirect('https://differenttypeofvibe.com/#beats');
      }
    }
  } catch (err: any) {
    console.error('Download route session check error:', err);
  }

  return NextResponse.redirect('https://differenttypeofvibe.com/#beats');
}
