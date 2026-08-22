import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Meta Webhook Verification (GET Request)
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const mode = searchParams.get('hub.mode');
  const token = searchParams.get('hub.verify_token');
  const challenge = searchParams.get('hub.challenge');

  const VERIFY_TOKEN = process.env.META_WEBHOOK_VERIFY_TOKEN || 'beat_store_lead_token';

  if (mode === 'subscribe' && token === VERIFY_TOKEN) {
    console.log('Meta Webhook Verified Successfully!');
    return new Response(challenge, { status: 200 });
  }

  return NextResponse.json({ error: 'Verification failed' }, { status: 403 });
}

// Meta Webhook Event Processing (POST Request)
export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Verify it's a leadgen entry
    if (body.object === 'page') {
      for (const entry of body.entry) {
        for (const change of entry.changes) {
          if (change.field === 'leadgen') {
            const leadgenId = change.value.leadgen_id;
            console.log(`Received Meta Lead ID: ${leadgenId}`);

            // Fetch lead details using Meta Graph API
            const pageAccessToken = process.env.META_PAGE_ACCESS_TOKEN;
            const leadRes = await fetch(
              `https://graph.facebook.com/v19.0/${leadgenId}?access_token=${pageAccessToken}`
            );

            if (leadRes.ok) {
              const leadData = await leadRes.json();
              
              // Extract Email and Name from Meta field data
              let email = '';
              let firstName = '';

              for (const field of leadData.field_data) {
                if (field.name === 'email') email = field.values[0];
                if (field.name === 'first_name' || field.name === 'full_name') {
                  firstName = field.values[0].split(' ')[0];
                }
              }

              if (email) {
                // 1. Add contact to Resend
                await resend.contacts.create({
                  email: email,
                  firstName: firstName || '',
                  unsubscribed: false,
                });

                // 2. Deliver Instant Beat Pack Email
                await resend.emails.send({
                  from: 'Onzieb <beats@differenttypeofvibe.com>',
                  to: [email],
                  subject: '🔥 Your 3 Free Beats + Untagged License',
                  html: `
                    <div style="font-family: sans-serif; padding: 20px; color: #111;">
                      <h2>Your 3 Free Beats Are Ready!</h2>
                      <p>Hey ${firstName || 'there'}, thanks for tapping in from Instagram/Facebook!</p>
                      <p>You can download your untagged MP3s and free promotional license below:</p>
                      <p style="margin: 30px 0;">
                        <a href="https://differenttypeofvibe.com/download/free-pack" 
                           style="background-color: #e11d48; color: #fff; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
                          Download Free Beat Pack
                        </a>
                      </p>
                    </div>
                  `,
                });
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
