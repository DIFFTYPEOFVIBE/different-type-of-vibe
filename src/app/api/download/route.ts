// src/app/api/download/route.ts
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const sessionId = searchParams.get('session_id');

  if (!sessionId) {
    return NextResponse.json({ error: 'Missing session_id' }, { status: 400 });
  }

  try {
    // 1. Verify session payment status with Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== 'paid') {
      return NextResponse.json({ error: 'Payment not verified' }, { status: 403 });
    }

    const beatId = session.metadata?.beatId;

    // 2. TODO: Replace with your cloud storage signed URL generator (Supabase/AWS S3)
    // Example: const downloadUrl = await getSignedS3Url(beatId);
    
    // For now, redirect to your private storage endpoint or protected file
    const downloadUrl = `https://your-private-bucket.s3.amazonaws.com/beats/${beatId}.zip`;

    return NextResponse.redirect(downloadUrl);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}// src/app/api/download/route.ts
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { generateDownloadUrl } from '@/lib/s3';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const sessionId = searchParams.get('session_id');

  if (!sessionId) {
    return NextResponse.json({ error: 'Missing session_id' }, { status: 400 });
  }

  try {
    // 1. Verify payment status with Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== 'paid') {
      return NextResponse.json({ error: 'Payment not verified' }, { status: 403 });
    }

    const beatId = session.metadata?.beatId;
    if (!beatId) {
      return NextResponse.json({ error: 'Beat ID missing from session metadata' }, { status: 400 });
    }

    // 2. Generate a 1-hour secure temporary link to the private beat file
    const downloadUrl = await generateDownloadUrl(beatId);

    // 3. Redirect the buyer straight to the secure download
    return NextResponse.redirect(downloadUrl);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}