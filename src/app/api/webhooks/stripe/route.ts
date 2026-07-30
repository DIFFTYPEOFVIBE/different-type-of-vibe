// src/app/api/webhooks/stripe/route.ts
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // Uses Service Role to bypass RLS
);

export async function POST(req: Request) {
  const body = await req.text();
  const signature = req.headers.get('stripe-signature')!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error(`Webhook signature verification failed: ${err.message}`);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;

    const beatId = session.metadata?.beatId;
    const licenseType = session.metadata?.licenseType;
    const customerEmail = session.customer_details?.email;

    // Record the purchase in Supabase DB
    const { error } = await supabaseAdmin.from('orders').insert({
      stripe_session_id: session.id,
      customer_email: customerEmail,
      beat_id: beatId,
      license_type: licenseType,
      amount_paid: session.amount_total,
      status: 'completed',
    });

    if (error) {
      console.error('Error saving order to Supabase:', error);
      return NextResponse.json({ error: 'Database insert failed' }, { status: 500 });
    }
  }

  return NextResponse.json({ received: true });
}// app/api/webhooks/stripe/route.ts
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { Resend } from 'resend';
import { ReceiptEmail } from '@/emails/ReceiptEmail';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16' as any,
});

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  const body = await req.text();
  const signature = req.headers.get('stripe-signature') as string;

  let event: Stripe.Event;

  // 1. Verify the Stripe Webhook signature
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error(`Webhook signature verification failed: ${err.message}`);
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }

  // 2. Handle successful checkout completion
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;

    const customerEmail = session.customer_details?.email;
    const customerName = session.customer_details?.name || 'Valued Customer';
    const amountTotal = (session.amount_total ?? 0) / 100;
    const currency = session.currency?.toUpperCase() || 'USD';

    if (customerEmail) {
      try {
        // 3. Send receipt via Resend
        await resend.emails.send({
          from: 'Your Store <receipts@yourdomain.com>',
          to: customerEmail,
          subject: 'Your Download Receipt',
          react: ReceiptEmail({
            customerName,
            productName: 'Digital Product', // Pass from session metadata if needed
            downloadUrl: 'https://yourdomain.com/downloads/file-id-123',
            amountPaid: `$${amountTotal.toFixed(2)} ${currency}`,
          }),
        });

        console.log(`Receipt sent to ${customerEmail}`);
      } catch (error) {
        console.error('Error sending email via Resend:', error);
        return new NextResponse('Error sending email', { status: 500 });
      }
    }
  }

  return NextResponse.json({ received: true });
}
// Inside src/app/api/webhooks/stripe/route.ts
import { Resend } from 'resend';
import { generateLicensePDF } from '@/lib/pdf';

const resend = new Resend(process.env.RESEND_API_KEY);

// Inside: if (event.type === 'checkout.session.completed')
const session = event.data.object as Stripe.Checkout.Session;

const beatTitle = session.metadata?.productName || 'Purchased Beat';
const licenseType = session.metadata?.licenseType || 'Standard';
const customerEmail = session.customer_details?.email;

if (customerEmail) {
  // 1. Generate the PDF buffer
  const pdfBytes = await generateLicensePDF({
    customerEmail,
    beatTitle,
    licenseType,
    purchaseDate: new Date().toLocaleDateString(),
  });

  // 2. Email buyer with Resend
  await resend.emails.send({
    from: 'Beatstore <orders@yourdomain.com>',
    to: customerEmail,
    subject: `Your License Agreement & Beat - ${beatTitle}`,
    html: `<p>Thank you for your purchase! Attached is your official <strong>${licenseType.toUpperCase()}</strong> license agreement.</p>`,
    attachments: [
      {
        filename: `${beatTitle.replace(/[^a-zA-Z0-0]/g, '_')}_License.pdf`,
        content: Buffer.from(pdfBytes),
      },
    ],
  });
}