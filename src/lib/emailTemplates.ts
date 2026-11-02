// src/lib/emailTemplates.ts

const FREE_PACK_URL = "https://www.dropbox.com/scl/fo/zb9g27t6yq1md5ezxjmyj/AJ_lLNhOGcsGazYu4Rd9MxA?rlkey=24sdbulhqybwd8wlp6ghgqzpf&st=i4hjurif&dl=1";

interface EmailProps {
  firstName: string;
}

export function getEmail1Html({ firstName }: EmailProps): string {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111111; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h2>Your 3 Free Beats Are Ready!</h2>
      <p>Hey ${firstName},</p>
      <p>Thanks for tapping in! Click below to download your 3 free beats along with your promotional license agreement:</p>
      <div style="margin: 30px 0; text-align: center;">
        <a href="${FREE_PACK_URL}" style="background-color: #e11d48; color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">
          🎁 Download Free Beat Pack (.ZIP)
        </a>
        <p style="margin-top: 12px; font-size: 13px;">
          <a href="${FREE_PACK_URL}" style="color: #7c3aed; text-decoration: underline;">📲 Mobile / Unzipped Direct Access (Dropbox Folder)</a>
        </p>
      </div>
      <p><strong>License Terms:</strong> You can use these beats for non-profit projects, mixtapes, soundcloud releases, and writing sessions.</p>
      <p style="margin-top: 30px; border-top: 1px solid #eeeeee; padding-top: 15px; font-size: 14px; color: #666666;">— Onzieb<br><em>Different Type of Vibe</em></p>
    </div>
  `;
}

export function getEmail2Html({ firstName }: EmailProps): string {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111111; max-width: 600px; margin: 0 auto; padding: 20px;">
      <p>Hey ${firstName},</p>
      <p>Just checking in — did you have a chance to vibe to those 3 free beats yet?</p>
      <div style="margin: 25px 0; text-align: center;">
        <a href="${FREE_PACK_URL}" style="background-color: #e11d48; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">
          🎁 Download 3 Free Beats
        </a>
      </div>
      <p>Here is a quick 3-step tip before hitting the booth:</p>
      <ol style="padding-left: 20px;">
        <li><strong>Keep headroom:</strong> Aim for vocal peaks around -6dB to keep room for mixing.</li>
        <li><strong>Carve out space:</strong> Cut a tiny bit of 1kHz to 3kHz on the beat track EQ if your vocal feels lost.</li>
        <li><strong>WAV vs MP3:</strong> Always record over uncompressed WAV stems for official streaming releases.</li>
      </ol>
      <p>What genre are you working on right now? Reply to this email — I read every message.</p>
      <p style="margin-top: 30px; font-size: 14px; color: #666666;">— Onzieb</p>
    </div>
  `;
}

export function getEmail3Html({ firstName }: EmailProps): string {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111111; max-width: 600px; margin: 0 auto; padding: 20px;">
      <p>Hey ${firstName},</p>
      <p>An independent artist reached out last month after grabbing a lease on one of my beats. They dropped their single on Spotify and broke past 20,000 streams in under 30 days.</p>
      <p>The secret wasn't a massive budget — it was high mix quality and an uncompressed WAV file that stood out on curator playlists.</p>
      
      <div style="background-color: #09090b; color: #ffffff; padding: 20px; border-radius: 8px; margin: 25px 0; border: 1px solid #27272a;">
        <h3 style="color: #10b981; margin-top: 0;">🎟️ VIP Artist Pass Offer</h3>
        <p style="font-size: 14px; color: #d4d4d8;">Instead of paying $49+ for single WAV leases, you can now get <strong>5 Untagged WAV Commercial Leases every month for just $9.99/mo</strong>!</p>
        <div style="text-align: center; margin-top: 15px;">
          <a href="https://differenttypeofvibe.com" style="background-color: #10b981; color: #000000; padding: 10px 20px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block; font-size: 14px;">
            Start $9.99/mo VIP Pass
          </a>
        </div>
      </div>

      <p style="margin: 30px 0; text-align: center;">
        <a href="https://differenttypeofvibe.com" style="background-color: #111111; color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">Listen to Full Beat Catalog</a>
      </p>
      <p style="margin-top: 30px; font-size: 14px; color: #666666;">— Onzieb</p>
    </div>
  `;
}

export function getEmail4Html({ firstName }: EmailProps): string {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111111; max-width: 600px; margin: 0 auto; padding: 20px;">
      <p>Hey ${firstName},</p>
      <p>For the next 48 hours, I'm giving you <strong>50% off any MP3, WAV, or Unlimited Lease</strong> in my store.</p>
      <div style="background-color: #f4f4f5; padding: 20px; border-radius: 8px; text-align: center; margin: 25px 0;">
        <p style="margin: 0; font-size: 14px; color: #666666;">Use Code At Checkout:</p>
        <p style="font-size: 24px; font-weight: bold; color: #e11d48; margin: 10px 0; letter-spacing: 2px;">FIRSTVIBE50</p>
      </div>
      <p style="text-align: center;">
        <a href="https://differenttypeofvibe.com" style="background-color: #e11d48; color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">Claim Your 50% Off</a>
      </p>
      <p style="margin-top: 30px; font-size: 14px; color: #666666;">— Onzieb</p>
    </div>
  `;
}

export function getEmail5Html({ firstName }: EmailProps): string {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111111; max-width: 600px; margin: 0 auto; padding: 20px;">
      <p>Hey ${firstName},</p>
      <p>Just a quick heads up — your exclusive 50% off coupon code (<code>FIRSTVIBE50</code>) expires at midnight tonight.</p>
      <p style="margin: 30px 0; text-align: center;">
        <a href="https://differenttypeofvibe.com" style="background-color: #e11d48; color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">Use Code FIRSTVIBE50</a>
      </p>
      <p style="margin-top: 30px; font-size: 14px; color: #666666;">— Onzieb</p>
    </div>
  `;
}
