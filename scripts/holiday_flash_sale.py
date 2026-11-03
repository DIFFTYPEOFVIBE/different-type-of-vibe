import os
import sys
import json
import datetime
import requests
from dotenv import load_dotenv

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
load_dotenv(os.path.join(BASE_DIR, ".env"))

RESEND_API_KEY = os.getenv("RESEND_API_KEY")
RESEND_FROM_EMAIL = os.getenv("RESEND_FROM_EMAIL", "Onzieb <music@mail.differenttypeofvibe.com>")

HOLIDAY_SALES = [
    {
        "name": "Black Friday & Cyber Monday 50% OFF Flash Sale",
        "month": 11,
        "days": [27, 28, 29, 30],
        "code": "BF50",
        "discount": "50% OFF",
        "subject": "🔥 BLACK FRIDAY 50% OFF FLASH SALE: Code BF50 Inside!"
    },
    {
        "name": "New Year Music Production Surge 40% OFF VIP Pass",
        "month": 12,
        "days": [31],
        "code": "NEWYEAR40",
        "discount": "40% OFF",
        "subject": "🎉 NEW YEAR MUSIC SURGE: 40% OFF VIP Pass & Beat Licenses!"
    },
    {
        "name": "New Year Music Production Surge (Jan 1-3)",
        "month": 1,
        "days": [1, 2, 3],
        "code": "NEWYEAR40",
        "discount": "40% OFF",
        "subject": "🎉 2027 Music Production Surge: Claim 40% OFF VIP Pass!"
    },
    {
        "name": "Spring Album Campaign Surge",
        "month": 3,
        "days": [15, 16, 17, 18],
        "code": "SPRING30",
        "discount": "30% OFF",
        "subject": "🌸 Spring Album Campaign Surge: 30% OFF All Beat Leases!"
    }
]

def send_sale_announcement(sale):
    if not RESEND_API_KEY:
        print("⚠️ RESEND_API_KEY missing in .env. Skipping sale broadcast.")
        return

    print(f"🎉 ACTIVE SALE DETECTED: {sale['name']} (Code: {sale['code']})")
    
    html = f"""
    <div style="background-color: #0b071a; color: #f1ecff; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 40px 20px; max-width: 600px; margin: 0 auto; border-radius: 12px; border: 1px solid #2d1b4e;">
        <div style="text-align: center; margin-bottom: 25px;">
            <h1 style="color: #c084fc; font-size: 26px; margin: 0;">DIFFERENT TYPE OF VIBE</h1>
            <p style="color: #9333ea; font-size: 12px; letter-spacing: 2px; margin: 5px 0 0 0; text-transform: uppercase;">SEASONAL FLASH SALE</p>
        </div>
        <div style="background-color: #120c2a; border-radius: 8px; padding: 25px; border: 1px solid #1f1440; line-height: 1.6; font-size: 15px;">
            <p>Hey there 👋,</p>
            <p>To help you lock in production for your upcoming projects, we're running a limited <strong>{sale['discount']} Flash Sale</strong> across the store!</p>

            <div style="background-color: #1e133e; border: 2px dashed #a855f7; padding: 20px; border-radius: 8px; text-align: center; margin: 25px 0;">
                <p style="margin: 0 0 8px 0; color: #d8b4fe; font-size: 14px;">Promo Code:</p>
                <span style="font-size: 26px; font-weight: bold; color: #34d399; letter-spacing: 2px;">{sale['code']}</span>
            </div>

            <p style="text-align: center; margin: 30px 0;">
                <a href="https://differenttypeofvibe.com" style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 6px; font-weight: bold; font-size: 16px; display: inline-block;">🔥 Claim Your {sale['discount']} Discount Now</a>
            </p>

            <p style="font-size: 13px; color: #a78bfa; text-align: center;">Applies to all untagged MP3, WAV, STEMS leases and VIP Pass subscriptions.</p>
        </div>
    </div>
    """

    # Query nurture state or contacts list to send
    state_file = os.path.join(BASE_DIR, "scripts", "nurture_state.json")
    if os.path.exists(state_file):
        try:
            with open(state_file, "r", encoding="utf-8") as f:
                state = json.load(f)
            recipients = list(state.keys())[:50] # Safety limit per batch
            print(f"📧 Sending seasonal flash sale broadcast to {len(recipients)} subscribers...")
            
            headers = {
                "Authorization": f"Bearer {RESEND_API_KEY}",
                "Content-Type": "application/json",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
            }

            for email in recipients:
                payload = {
                    "from": RESEND_FROM_EMAIL,
                    "to": [email],
                    "subject": sale["subject"],
                    "html": html
                }
                res = requests.post("https://api.resend.com/emails", headers=headers, json=payload, timeout=10)
                if res.status_code in [200, 201]:
                    print(f"   [✓] Sale broadcast sent to: {email}")
                time.sleep(0.5)
        except Exception as e:
            print(f"❌ Error sending broadcast: {e}")

def main():
    today = datetime.date.today()
    print("======================================================================")
    print("         HOLIDAY & SEASONAL FLASH SALE TIMER CHECK")
    print(f"         Today's Date: {today.isoformat()}")
    print("======================================================================\n")

    force_sale = os.getenv("FORCE_SALE") == "true" or "--force" in sys.argv

    active_sale = None
    for sale in HOLIDAY_SALES:
        if (today.month == sale["month"] and today.day in sale["days"]) or force_sale:
            active_sale = sale
            break

    if active_sale:
        send_sale_announcement(active_sale)
    else:
        print("⏳ No active holiday flash sale for today. Standby mode active.")

if __name__ == "__main__":
    main()
