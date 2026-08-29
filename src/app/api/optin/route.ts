import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import {
  getEmail1Html,
  getEmail2Html,
  getEmail3Html,
  getEmail4Html,
  getEmail5Html,
} from '@/lib/emailTemplates';
import { sendMetaCapiEvent } from '@/lib/metaCapi';

export async function POST(req: Request) {
  console.log('--- [OPT-IN ROUTE TRIGGERED] ---');
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error('❌ ERROR: RESEND_API_KEY is missing from environment variables.');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const resend = new Resend(apiKey);
    const { email, firstName, eventId } = await req.json();

    if (!email) {
      console.error('❌ ERROR: No email provided in request body.');
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const userFirstName = firstName || 'there';

    // Use your custom sender address:
    const sender = 'Different Type of Vibe <music@mail.differenttypeofvibe.com>';

    // 1. Create or Update Contact
    console.log(`1. Adding contact to Resend: ${email}`);
    try {
      const audienceId = process.env.RESEND_AUDIENCE_ID || 'd755a756-5ffd-45ea-a7d9-ef634c672b17';
      await resend.contacts.create({
        email,
        firstName: userFirstName,
        unsubscribed: false,
        audienceId: audienceId,
      });
      console.log('✅ Contact created successfully.');
    } catch (contactErr) {
      console.warn('⚠️ Contact creation warning (may already exist):', contactErr);
    }

    // 2. Calculate Timestamps
    const now = new Date();
    const day2 = new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000).toISOString();
    const day4 = new Date(now.getTime() + 4 * 24 * 60 * 60 * 1000).toISOString();
    const day6 = new Date(now.getTime() + 6 * 24 * 60 * 60 * 1000).toISOString();
    const day7 = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000).toISOString();

    console.log('2. Scheduling dates calculated:');
    console.log(`   Day 2: ${day2}`);
    console.log(`   Day 4: ${day4}`);

    // 3. Fire Batch Send
    console.log('3. Sending batch payload to Resend API...');
    const { data, error } = await resend.batch.send([
      {
        from: sender,
        to: [email],
        subject: '🔥 Your 3 Free Beats + Untagged License',
        html: getEmail1Html({ firstName: userFirstName }),
      },
      {
        from: sender,
        to: [email],
        subject: 'Quick question about your project...',
        html: getEmail2Html({ firstName: userFirstName }),
        scheduledAt: day2,
      },
      {
        from: sender,
        to: [email],
        subject: 'How artists are getting streams on these beats...',
        html: getEmail3Html({ firstName: userFirstName }),
        scheduledAt: day4,
      },
      {
        from: sender,
        to: [email],
        subject: '🎁 Exclusive 50% Off Your First Beat Lease',
        html: getEmail4Html({ firstName: userFirstName }),
        scheduledAt: day6,
      },
      {
        from: sender,
        to: [email],
        subject: '⏰ Final Call: Your 50% discount expires tonight',
        html: getEmail5Html({ firstName: userFirstName }),
        scheduledAt: day7,
      },
    ]);

    if (error) {
      console.error('❌ RESEND API REJECTED BATCH:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    console.log('🚀 BATCH QUEUED SUCCESSFULLY! IDs:', data);

    // 4. Extract client IP & User-Agent for better Meta Match Quality
    const clientIp = req.headers.get('x-forwarded-for')?.split(',')[0] || '';
    const userAgent = req.headers.get('user-agent') || '';

    // 5. Fire Meta CAPI Lead Event
    const finalEventId = eventId || 'lead_' + Math.random().toString(36).substring(2, 9) + '_' + Date.now();
    await sendMetaCapiEvent({
      eventName: 'Lead',
      eventId: finalEventId, // Pass the same UUID generated on the frontend
      email: email,
      sourceUrl: req.headers.get('referer') || '',
      clientIp,
      userAgent,
      customData: {
        content_name: '3 Free Beats Pack',
        value: 0.00,
        currency: 'USD',
      },
    });

    return NextResponse.json({ success: true, batchIds: data });

  } catch (err) {
    console.error('❌ UNCAUGHT SERVER ERROR:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
