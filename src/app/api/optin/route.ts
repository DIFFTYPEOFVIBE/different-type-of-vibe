import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address provided.' },
        { status: 400 }
      );
    }

    // Webhook URL (GoHighLevel inbound webhook or Make.com/Zapier endpoint)
    const webhookUrl = process.env.GOHIGHLEVEL_WEBHOOK_URL;

    if (webhookUrl) {
      // Forward lead to GoHighLevel / Webhook
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          source: 'Different Type of Vibe - Free Beat Pack Opt-in',
          tags: ['artist-lead', 'free-beat-pack'],
          date: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        console.error('Webhook payload delivery failed:', await response.text());
      }
    } else {
      console.warn(
        'GOHIGHLEVEL_WEBHOOK_URL is not set. Lead captured locally:',
        email
      );
    }

    return NextResponse.json(
      { success: true, message: 'Opt-in successful!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Opt-in API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process opt-in request.' },
      { status: 500 }
    );
  }
}