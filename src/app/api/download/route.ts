import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { generateDownloadUrl } from '@/lib/s3';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16' as any,
});

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const sessionId = searchParams.get('session_id');

  if (!sessionId) {
    return NextResponse.json({ error: 'Missing session ID' }, { status: 400 });
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    if (session.payment_status !== 'paid') {
      return NextResponse.json({ error: 'Payment incomplete' }, { status: 403 });
    }

    const key = session.metadata?.s3Key || 'beats/default.mp3';
    const downloadUrl = await generateDownloadUrl(key);

    return NextResponse.redirect(downloadUrl);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}