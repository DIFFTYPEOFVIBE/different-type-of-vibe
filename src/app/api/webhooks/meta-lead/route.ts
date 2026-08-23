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
                const sender = 'Onzieb <beats@differenttypeofvibe.com>';

                // 1. Save or Update Contact in Resend
                await resend.contacts.create({
                  email,
                  firstName: userFirstName,
                  unsubscribed: false,
                });

                // 2. Calculate Scheduled Dates
                const now = new Date();
                const day2 = new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000).toISOString();
                const day4 = new Date(now.getTime() + 4 * 24 * 60 * 60 * 1000).toISOString();
                const day6 = new Date(now.getTime() + 6 * 24 * 60 * 60 * 1000).toISOString();
                const day7 = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000).toISOString();

                // 3. Batch send & schedule the full 5-email sequence
                await resend.batch.send([
                  // Email 1: Instant
                  {
                    from: sender,
                    to: [email],
                    subject: '🔥 Your 3 Free Beats + Untagged License',
                    html: getEmail1Html({ firstName: userFirstName }),
                  },
                  // Email 2: Day 2
                  {
                    from: sender,
                    to: [email],
                    subject: 'Quick question about your project...',
                    html: getEmail2Html({ firstName: userFirstName }),
                    scheduledAt: day2,
                  },
                  // Email 3: Day 4
                  {
                    from: sender,
                    to: [email],
                    subject: 'How artists are getting streams on these beats...',
                    html: getEmail3Html({ firstName: userFirstName }),
                    scheduledAt: day4,
                  },
                  // Email 4: Day 6
                  {
                    from: sender,
                    to: [email],
                    subject: '🎁 Exclusive 50% Off Your First Beat Lease',
                    html: getEmail4Html({ firstName: userFirstName }),
                    scheduledAt: day6,
                  },
                  // Email 5: Day 7
                  {
                    from: sender,
                    to: [email],
                    subject: '⏰ Final Call: Your 50% discount expires tonight',
                    html: getEmail5Html({ firstName: userFirstName }),
                    scheduledAt: day7,
                  },
                ]);
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
