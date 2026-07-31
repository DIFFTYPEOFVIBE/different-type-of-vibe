import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Your GoHighLevel Inbound Webhook URL
    const GHL_WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/lldFXvWMNSAaPk368zJb/webhook-trigger/40336c67-48a7-40e7-8be7-b339a52fcce9';

    const ghlResponse = await fetch(GHL_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        source: 'Different Type of Vibe',
        tags: ['free-beat-pack'],
      }),
    });

    if (!ghlResponse.ok) {
      const errorText = await ghlResponse.text();
      console.error('GHL Webhook Error Response:', errorText);
      return NextResponse.json({ error: 'Failed to trigger GHL webhook' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Opt-in API Route Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}