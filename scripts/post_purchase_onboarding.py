import os
import sys
import json
import time
import requests
import datetime
from dotenv import load_dotenv

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
STATE_FILE = os.path.join(BASE_DIR, "scripts", "post_purchase_state.json")

load_dotenv(os.path.join(BASE_DIR, ".env"))
if not os.getenv("RESEND_API_KEY") and os.path.exists(r"C:\Users\Onzieb\beat-store-automation\.env"):
    load_dotenv(r"C:\Users\Onzieb\beat-store-automation\.env")

RESEND_API_KEY = os.getenv("RESEND_API_KEY")
RESEND_FROM_EMAIL = os.getenv("RESEND_FROM_EMAIL", "Onzieb <music@mail.differenttypeofvibe.com>")

POST_PURCHASE_SEQUENCE = [
    {
        "step": 1,
        "delay_days": 1,
        "subject": "📜 How to upload your track to Spotify & Apple Music (Credit & Clearance Guide)",
        "html": """
        <div style="background-color: #0b071a; color: #f1ecff; font-family: sans-serif; padding: 30px 20px; max-width: 600px; margin: 0 auto; border-radius: 12px;">
            <h2 style="color: #c084fc;">DIFFERENT TYPE OF VIBE</h2>
            <p>Hey {first_name} 👋,</p>
            <p>Hope you're enjoying your new beats! Here is a quick guide to ensure your release goes live smoothly on Spotify, Apple Music, and YouTube without copyright claims:</p>
            <ul>
                <li><strong>Producer Credit:</strong> Credit <strong>Onzieb</strong> as Producer/Composer in DistroKid/TuneCore.</li>
                <li><strong>YouTube Content ID:</strong> Do NOT opt into YouTube Content Match for leases.</li>
                <li><strong>Stream Caps:</strong> Your commercial lease covers up to 100,000 streams.</li>
            </ul>
            <p><a href="https://differenttypeofvibe.com/licensing-terms" style="color: #34d399; font-weight: bold;">View Full Licensing Terms ➔</a></p>
        </div>
        """
    },
    {
        "step": 2,
        "delay_days": 4,
        "subject": "🎙️ Vocal mixing & headroom tips for your new Onzieb beats",
        "html": """
        <div style="background-color: #0b071a; color: #f1ecff; font-family: sans-serif; padding: 30px 20px; max-width: 600px; margin: 0 auto; border-radius: 12px;">
            <h2 style="color: #c084fc;">DIFFERENT TYPE OF VIBE</h2>
            <p>Hey {first_name} 👋,</p>
            <p>Here are 3 studio tips to get a radio-ready mix over Onzieb production:</p>
            <ul>
                <li><strong>Keep Headroom:</strong> Record lead vocal peaks between <strong>-6dB and -12dB</strong>.</li>
                <li><strong>EQ Vocal Pocket:</strong> Cut 1dB–2dB at 1kHz–2kHz on the instrumental EQ.</li>
                <li><strong>Use Uncompressed 24-Bit WAV:</strong> Always mix over uncompressed WAV audio.</li>
            </ul>
        </div>
        """
    },
    {
        "step": 3,
        "delay_days": 7,
        "subject": "⭐ Send me your finished track for store playlist spotlight!",
        "html": """
def load_state():
    if os.path.exists(STATE_FILE):
        try:
            with open(STATE_FILE, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception:
            pass
    return {}

def save_state(state):
    os.makedirs(os.path.dirname(STATE_FILE), exist_ok=True)
    with open(STATE_FILE, "w", encoding="utf-8") as f:
        json.dump(state, f, indent=2)

def add_purchaser(email, name="Artist", product_name="Beat Order"):
    state = load_state()
    email_clean = email.strip().lower()
    first_name = name.split()[0].title() if name else email_clean.split("@")[0].title()
    
    if email_clean not in state:
        state[email_clean] = {
            "first_name": first_name,
            "product_name": product_name,
            "purchased_at": datetime.datetime.now(datetime.timezone.utc).isoformat(),
            "last_step_sent": 0,
            "last_sent_at": None
        }
        save_state(state)
        print(f"✅ Added new purchaser to onboarding pipeline: {email_clean} ({first_name})")

def run_onboarding_cycle():
    print("======================================================================")
    print("      POST-PURCHASE CUSTOMER ONBOARDING & RETENTION ENGINE")
    print("======================================================================\n")

    if not RESEND_API_KEY:
        print("❌ Error: RESEND_API_KEY missing in .env")
        return

    state = load_state()
    print(f"👥 Total purchasers in onboarding pipeline: {len(state)}")

    now_utc = datetime.datetime.now(datetime.timezone.utc)
    sent_count = 0

    headers = {
        "Authorization": f"Bearer {RESEND_API_KEY}",
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
    }

    for email, data in state.items():
        try:
            purchased_at = datetime.datetime.fromisoformat(data["purchased_at"])
            days_since = (now_utc - purchased_at).days
            last_step = data.get("last_step_sent", 0)

            for step in POST_PURCHASE_SEQUENCE:
                if step["step"] > last_step and days_since >= step["delay_days"]:
                    first_name = data.get("first_name", "Artist")
                    subject = step["subject"]
                    html = step["html"].replace("{first_name}", first_name)

                    payload = {
                        "from": RESEND_FROM_EMAIL,
                        "to": [email],
                        "subject": subject,
                        "html": html
                    }

                    res = requests.post("https://api.resend.com/emails", headers=headers, json=payload, timeout=10)
                    if res.status_code in [200, 201]:
                        print(f"   [✓] Step {step['step']} delivered to: {email} ({first_name})")
                        data["last_step_sent"] = step["step"]
                        data["last_sent_at"] = now_utc.isoformat()
                        sent_count += 1
                        time.sleep(0.5)
                        break
        except Exception as e:
            print(f"⚠️ Notice onboarding {email}: {e}")

    save_state(state)
    print(f"\n✨ Post-Purchase Onboarding Cycle Completed! ({sent_count} emails delivered)")

if __name__ == "__main__":
    if len(sys.argv) >= 3 and sys.argv[1] == "--add":
        add_purchaser(sys.argv[2], sys.argv[3] if len(sys.argv) > 3 else "Artist")
    else:
        run_onboarding_cycle()
        <div style="background-color: #0b071a; color: #f1ecff; font-family: sans-serif; padding: 30px 20px; max-width: 600px; margin: 0 auto; border-radius: 12px;">
            <h2 style="color: #c084fc;">DIFFERENT TYPE OF VIBE</h2>
            <p>Hey {first_name} 👋,</p>
            <p>I wanted to follow up and see how your song is coming along!</p>
            <p>If you've finished recording or have a private streaming link, <strong>reply directly to this email with your track</strong> to get featured on our official playlist!</p>
        </div>
        """
    }
]
