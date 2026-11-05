import { NextResponse } from 'next';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log('[NOWPayments Webhook] Received IPN Payment Notification:', body);

    const { payment_status, customer_email, order_description, order_id, price_amount } = body;

    // Send fulfillment email via Resend ONLY when crypto payment is finished/confirmed
    if (payment_status === 'finished' || payment_status === 'confirmed') {
      const apiKey = process.env.RESEND_API_KEY;
      const toEmail = customer_email;
      const isProTier =
        String(order_id || '').toLowerCase().includes('crypto_pro_') ||
        String(order_description || '').toLowerCase().includes('pro creator') ||
        Number(price_amount || 0) >= 24;

      const downloadUrl = isProTier
        ? process.env.PRO_CREATOR_PASS_DROPBOX_URL ||
          'https://www.dropbox.com/scl/fo/gz83uvvpk1fp5orl8ifab/ADeEPpROgGcQbKTUiGR8YhI?rlkey=hxg03sdeiwkpsq0gcgimm3oo7&st=ndjdcppo&dl=1'
        : 'https://www.dropbox.com/scl/fi/forf156uvalla161tvjsr/STANDARD-PASS-5-WAV-COMMERCIAL-LEASES-UNTAGGED.zip?rlkey=sg8xi2iajsa5lhb975by77oda&st=yohnami0&dl=1';

      if (apiKey && toEmail) {
        const fromEmail = process.env.RESEND_FROM_EMAIL || 'Onzieb <onzieb@mail.differenttypeofvibe.com>';
        const subject = isProTier
          ? '🚀 Crypto Payment Confirmed! Your Pro Creator Pass Unlimited WAV + Stems Vault'
          : '🎉 Crypto Payment Confirmed! Your Untagged WAV Beat Leases & Contract';
        
        const htmlContent = `
        <div style="background-color: #0b071a; color: #f1ecff; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 40px 20px; max-width: 600px; margin: 0 auto; border-radius: 12px; border: 1px solid #2d1b4e;">
            <div style="text-align: center; margin-bottom: 25px;">
                <h1 style="color: #c084fc; font-size: 26px; margin: 0; letter-spacing: 1px;">DIFFERENT TYPE OF VIBE</h1>
                <p style="color: #9333ea; font-size: 13px; letter-spacing: 2px; margin: 5px 0 0 0; text-transform: uppercase;">ONZIEB PRODUCTION • CRYPTO FULFILLMENT</p>
            </div>
            <div style="background-color: #120c2a; border-radius: 8px; padding: 30px; border: 1px solid #1f1440; line-height: 1.6; font-size: 16px;">
                <p>Hey there 👋,</p>
                <p>Thank you for subscribing via <strong>Crypto (USDT / BTC)</strong>! Your blockchain transaction was confirmed.</p>
                <p>Here is your instant download access and official legal licensing rights:</p>

                <div style="background-color: #1e133e; border: 1px solid #7c3aed; padding: 25px; border-radius: 8px; margin: 25px 0; text-align: center;">
                    <h3 style="color: #c084fc; margin-top: 0;">${isProTier ? '🚀 PRO CREATOR UNLIMITED WAV + STEMS VAULT' : '🎁 VIP PASS 5 UNTAGGED WAV COMMERCIAL LEASES'}</h3>
                    <p style="color: #d8b4fe; font-size: 14px; margin-bottom: 20px;">${isProTier ? 'Download your Unlimited 24-bit Untagged WAVs &amp; Full Trackout Stems directly below:' : 'Download your 5 studio-quality 24-bit untagged WAV beat leases directly below:'}</p>
                    
                    <a href="${downloadUrl}" style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: #ffffff; text-decoration: none; padding: 16px 36px; border-radius: 6px; font-weight: bold; font-size: 16px; display: inline-block; box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4);">${isProTier ? '📥 Access Unlimited WAV + Stems Vault (.ZIP)' : '📥 Download 5 Untagged WAV Commercial Leases (.ZIP)'}</a>
                </div>

                <p style="font-size: 14px; color: #a78bfa;">📜 <strong>Licensing Rights Included:</strong> Commercial distribution rights up to ${isProTier ? '500,000' : '100,000'} streams on Spotify & Apple Music, 100% master royalty ownership, and instant clearance against copyright strikes.</p>

                <p style="margin-top: 25px;">Happy recording!<br><strong>Onzieb</strong><br><span style="color: #a78bfa; font-size: 13px;">Different Type of Vibe</span></p>
            </div>
        </div>
        `;

        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: fromEmail,
            to: [toEmail],
            subject: subject,
            html: htmlContent,
          }),
        });
      }
    }

    return NextResponse.json({ status: 'ok' }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
