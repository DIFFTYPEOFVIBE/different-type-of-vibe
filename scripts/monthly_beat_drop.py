import os
import sys
import json
import time
import requests
import datetime
from dotenv import load_dotenv

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LOG_FILE = os.path.join(BASE_DIR, "scripts", "monthly_beat_drops_log.json")

load_dotenv(os.path.join(BASE_DIR, ".env"))
if not os.getenv("RESEND_API_KEY") and os.path.exists(r"C:\Users\Onzieb\beat-store-automation\.env"):
    load_dotenv(r"C:\Users\Onzieb\beat-store-automation\.env")

RESEND_API_KEY = os.getenv("RESEND_API_KEY")
RESEND_FROM_EMAIL = os.getenv("RESEND_FROM_EMAIL", "Onzieb <music@mail.differenttypeofvibe.com>")
MONTHLY_DROP_ZIP_URL = os.getenv("MONTHLY_DROP_ZIP_URL", "https://www.dropbox.com/scl/fi/forf156uvalla161tvjsr/STANDARD-PASS-5-WAV-COMMERCIAL-LEASES-UNTAGGED.zip?rlkey=sg8xi2iajsa5lhb975by77oda&st=yohnami0&dl=1")

def load_subscribers():
    subscribers = set()
    
    # ONLY load from verified paid post-purchase state file
    state_path = os.path.join(BASE_DIR, "scripts", "post_purchase_state.json")
    if os.path.exists(state_path):
        try:
            with open(state_path, "r", encoding="utf-8") as f:
                data = json.load(f)
                for email in data.keys():
                    if "@" in email:
                        subscribers.add(email.strip().lower())
        except Exception:
            pass

    return list(subscribers)

def send_monthly_beat_drop_email(subscribers):
    if not RESEND_API_KEY or not subscribers:
        print("⚠️ No Resend API Key or subscribers found for monthly drop.")
        return 0

    now = datetime.datetime.now()
    month_name = now.strftime("%B %Y")
    
    subject = f"🔥 Your New 5 Untagged WAV Beats for {month_name} Are Here!"

    html = f"""
    <div style="background-color: #0b071a; color: #f1ecff; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 40px 20px; max-width: 600px; margin: 0 auto; border-radius: 12px; border: 1px solid #2d1b4e;">
        <div style="text-align: center; margin-bottom: 25px;">
            <h1 style="color: #c084fc; font-size: 26px; margin: 0; letter-spacing: 1px;">DIFFERENT TYPE OF VIBE</h1>
            <p style="color: #9333ea; font-size: 12px; letter-spacing: 2px; margin: 5px 0 0 0; text-transform: uppercase;">1ST OF THE MONTH VIP BEAT DROP • {month_name.upper()}</p>
        </div>
        <div style="background-color: #120c2a; border-radius: 8px; padding: 30px; border: 1px solid #1f1440; line-height: 1.6; font-size: 16px;">
            <p>Hey VIP Artist 👋,</p>
            <p>Happy 1st of the month! Your fresh batch of <strong>5 Untagged 24-Bit WAV Beat Leases</strong> for <strong>{month_name}</strong> is officially live and ready for download.</p>

            <div style="background-color: #1e133e; border: 1px solid #7c3aed; padding: 25px; border-radius: 8px; margin: 25px 0; text-align: center;">
                <h3 style="color: #c084fc; margin-top: 0;">🎁 {month_name.upper()} 5 WAV BEAT LEASES BUNDLE</h3>
                <p style="color: #d8b4fe; font-size: 14px; margin-bottom: 20px;">100% untagged studio-quality WAV audio with commercial licensing rights up to 100,000 streams:</p>
                
                <a href="{MONTHLY_DROP_ZIP_URL}" style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: #ffffff; text-decoration: none; padding: 16px 36px; border-radius: 6px; font-weight: bold; font-size: 16px; display: inline-block; box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4);">📥 Download Your New 5 WAV Beats (.ZIP)</a>
            </div>

            <p style="font-size: 14px; color: #a78bfa;">If you record a hit on any of these new beats and want to get featured on our official store playlist, just reply directly to this email with your song!</p>

            <p style="margin-top: 25px;">Happy recording,<br><strong>Onzieb</strong><br><span style="color: #a78bfa; font-size: 13px;">Different Type of Vibe</span></p>
        </div>
    </div>
    """

    headers = {
        "Authorization": f"Bearer {RESEND_API_KEY}",
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
    }

    sent_count = 0
    for email in subscribers[:50]: # Batch limit
        payload = {
            "from": RESEND_FROM_EMAIL,
            "to": [email],
            "subject": subject,
            "html": html
        }
        try:
            res = requests.post("https://api.resend.com/emails", headers=headers, json=payload, timeout=10)
            if res.status_code in [200, 201]:
                print(f"   [✓] Monthly Beat Drop email delivered to: {email}")
                sent_count += 1
                time.sleep(0.5)
        except Exception as e:
            print(f"⚠️ Error sending monthly drop email to {email}: {e}")

    return sent_count

def run_monthly_beat_drop():
    print("======================================================================")
    print("      1ST OF THE MONTH AUTOMATED VIP BEAT DROP ENGINE")
    print("======================================================================\n")

    subscribers = load_subscribers()
    print(f"👥 Found {len(subscribers)} active VIP subscribers for monthly drop.")

    if subscribers:
        delivered = send_monthly_beat_drop_email(subscribers)
        print(f"\n✨ Monthly Beat Drop Completed! Delivered to {delivered} subscribers.")

if __name__ == "__main__":
    run_monthly_beat_drop()
