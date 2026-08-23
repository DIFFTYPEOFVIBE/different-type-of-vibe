import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import {
  getEmail1Html,
  getEmail2Html,
  getEmail3Html,
  getEmail4Html,
  getEmail5Html,
} from '@/lib/emailTemplates';

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error('RESEND_API_KEY missing.');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const resend = new Resend(apiKey);
    const { email, firstName } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const userFirstName = firstName || 'there';
    const sender = 'Onzieb <beats@differenttypeofvibe.com>';

    // 1. Add contact to Resend Audience/Contacts
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
    const { data, error } = await resend.batch.send([
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

    if (error) {
      console.error('Resend Batch Error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, batchIds: data });
  } catch (err) {
    console.error('Opt-in Server Error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
