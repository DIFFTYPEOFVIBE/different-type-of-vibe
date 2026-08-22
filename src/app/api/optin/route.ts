import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, firstName } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // 1. Add contact to Resend Contacts
    await resend.contacts.create({
      email: email,
      firstName: firstName || '',
      unsubscribed: false,
    });

    // 2. Deliver Instant Beat Pack Email
    const { data, error } = await resend.emails.send({
      from: 'Onzieb <beats@differenttypeofvibe.com>', // Update with verified sender
      to: [email],
      subject: '🔥 Your 3 Free Beats + Untagged License',
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #111;">
          <h2>Your 3 Free Beats Are Ready!</h2>
          <p>Thanks for tapping in! You can download your untagged MP3s and free promotional license below:</p>
          <p style="margin: 30px 0;">
            <a href="https://differenttypeofvibe.com/download/free-pack" 
               style="background-color: #e11d48; color: #fff; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
              Download Free Beat Pack
            </a>
          </p>
          <p>If you have any questions about licensing or custom work, hit reply to this email.</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error('Server Error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
