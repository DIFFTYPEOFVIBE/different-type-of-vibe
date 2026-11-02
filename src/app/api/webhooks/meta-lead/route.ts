import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import {
  getEmail1Html,
  getEmail2Html,
  getEmail3Html,
  getEmail4Html,
  getEmail5Html,
} from '@/lib/emailTemplates';

// Meta Webhook Verification (GET Request)
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const mode = searchParams.get('hub.mode');
  const token = searchParams.get('hub.verify_token');
  const challenge = searchParams.get('hub.challenge');

  const VERIFY_TOKEN = process.env.META_WEBHOOK_VERIFY_TOKEN;

  if (mode === 'subscribe' && token === VERIFY_TOKEN) {
    return new Response(challenge, { status: 200 });
  }

  return NextResponse.json({ error: 'Verification failed' }, { status: 403 });
}

// Meta Webhook Event Processing (POST Request)
export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error('Missing RESEND_API_KEY environment variable');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const resend = new Resend(apiKey);
    const body = await req.json();

    if (body.object === 'page') {
      for (const entry of body.entry) {
        for (const change of entry.changes) {
          if (change.field === 'leadgen') {
            const leadgenId = change.value.leadgen_id;
            const pageAccessToken = process.env.META_PAGE_ACCESS_TOKEN;

            // Fetch lead details from Meta Graph API
            const leadRes = await fetch(
              `https://graph.facebook.com/v19.0/${leadgenId}?access_token=${pageAccessToken}`
            );

            if (leadRes.ok) {
              const leadData = await leadRes.json();
              let email = '';
              let firstName = '';

              for (const field of leadData.field_data) {
                if (field.name === 'email') email = field.values[0];
                if (field.name === 'first_name' || field.name === 'full_name') {
                  firstName = field.values[0].split(' ')[0];
                }
              }

              if (email) {
                const userFirstName = firstName || 'there';
                const sender = 'Different Type of Vibe <music@mail.differenttypeofvibe.com>';

                // 1. Save or Update Contact in Resend
                const audienceId = process.env.RESEND_AUDIENCE_ID || 'd755a756-5ffd-45ea-a7d9-ef634c672b17';
                try {
                  await resend.contacts.create({
                    email,
                    firstName: userFirstName,
                    unsubscribed: false,
                    audienceId: audienceId,
                  });
                  console.log('✅ Meta Lead contact created successfully in Resend.');
                } catch (contactErr) {
                  console.warn('⚠️ Meta Lead contact creation warning (may already exist):', contactErr);
                }

                // 2. Deliver Email 1 instantly via Resend
                try {
                  await resend.emails.send({
                    from: sender,
                    to: [email],
                    subject: '🔥 Your 3 Free Beats + Untagged License',
                    html: getEmail1Html({ firstName: userFirstName }),
                  });
                  console.log(`✅ Instant 3 Free Beats email delivered to Meta Lead: ${email}`);
                } catch (emailErr) {
                  console.error('⚠️ Failed to send instant Meta Lead email:', emailErr);
                }
              }
            }
          }
        }
      }
    }

    return NextResponse.json({ status: 'success' }, { status: 200 });
  } catch (error) {
    console.error('Meta Webhook Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
