import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(req: Request) {
  try {
    const { email, beatId, beatTitle } = await req.json();

    if (!email || !beatTitle) {
      return NextResponse.json({ error: 'Email and Beat Title are required.' }, { status: 400 });
    }

    // 1. Check Subscriber Account in Supabase
    const { data: sub, error } = await supabase
      .from('subscriptions')
      .select('*')
      .eq('user_email', email)
      .eq('status', 'active')
      .single();

    if (error || !sub) {
      return NextResponse.json({
        error: 'Active subscription not found for this email address. Please verify your email or subscribe to a VIP pass.'
      }, { status: 403 });
    }

    if (sub.credits_remaining <= 0) {
      return NextResponse.json({
        error: 'You have used all 5 WAV credits for this billing period. Upgrade to Pro for Unlimited downloads!'
      }, { status: 400 });
    }

    // 2. Deduct 1 Credit (Unless Pro/Unlimited >= 900)
    const newRemaining = sub.credits_remaining >= 900 ? 999 : sub.credits_remaining - 1;
    if (sub.credits_remaining < 900) {
      await supabase
        .from('subscriptions')
        .update({ credits_remaining: newRemaining, updated_at: new Date().toISOString() })
        .eq('user_email', email);
    }

    // 3. Log Download
    await supabase.from('subscription_download_logs').insert({
      user_email: email,
      beat_id: beatId || 'unknown',
      beat_title: beatTitle,
      license_type: 'Subscription WAV Lease',
    });

    // 4. Generate Temporary Supabase CDN Signed Download Token (Valid for 2 Hours)
    const encodedTitle = encodeURIComponent(beatTitle);
    const filePath = `wav-leases/${beatTitle}.wav`;
    
    let signedUrl = `https://hnliahdtcbuvggxhmzej.supabase.co/storage/v1/object/public/wav-leases/${encodedTitle}.wav`;

    try {
      const { data: signedData } = await supabase
        .storage
        .from('wav-leases')
        .createSignedUrl(`${beatTitle}.wav`, 7200);

      if (signedData?.signedUrl) {
        signedUrl = signedData.signedUrl;
      }
    } catch (sErr) {
      console.warn('Fallback to public URL:', sErr);
    }

    return NextResponse.json({
      downloadUrl: signedUrl,
      creditsRemaining: newRemaining >= 900 ? 'Unlimited' : newRemaining,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Internal Server Error' }, { status: 500 });
  }
}