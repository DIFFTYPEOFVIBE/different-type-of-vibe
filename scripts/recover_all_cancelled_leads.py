import os
import time
import requests
import stripe
from dotenv import load_dotenv

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
load_dotenv(os.path.join(BASE_DIR, ".env"))

stripe.api_key = os.getenv("STRIPE_SECRET_KEY")
RESEND_API_KEY = os.getenv("RESEND_API_KEY")
LEMONSQUEEZY_API_KEY = os.getenv("LEMONSQUEEZY_API_KEY")
LEMONSQUEEZY_STORE_ID = os.getenv("LEMONSQUEEZY_STORE_ID")

RECOVERY_EMAIL_TEMPLATE = """
<div style="background-color: #0b071a; color: #f1ecff; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 40px 20px; max-width: 600px; margin: 0 auto; border-radius: 12px; border: 1px solid #2d1b4e;">
    <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="color: #c084fc; font-size: 28px; margin: 0; text-shadow: 0 0 10px rgba(192, 132, 252, 0.4);">DIFFERENT TYPE OF VIBE</h1>
        <p style="color: #9333ea; font-size: 14px; letter-spacing: 2px; margin: 5px 0 0 0; text-transform: uppercase;">ONZIEB PRODUCTION • PAYMENT RECOVERY</p>
    </div>
    <div style="background-color: #120c2a; border-radius: 8px; padding: 30px; border: 1px solid #1f1440; line-height: 1.6; font-size: 16px;">
        <p>Hey 👋,</p>
        <p>It looks like your recent beat order / subscription checkout was interrupted or declined by your bank's security check.</p>
        <p>Don't worry — your selected beats and VIP Pass benefits are held for you for the next 24 hours!</p>
        
        <div style="background-color: #1e133e; border: 1px solid #7c3aed; padding: 25px; border-radius: 8px; margin: 25px 0; text-align: center;">
            <p style="margin: 0 0 10px 0; color: #c084fc; font-weight: bold; font-size: 18px;">🔥 Complete Your $9.99 VIP Pass Order</p>
            <p style="margin: 0 0 15px 0; font-size: 14px; color: #d8b4fe;">Use promo code <strong style="color: #ffffff; background: #9333ea; padding: 2px 8px; border-radius: 4px;">WELCOME30</strong> for 30% OFF!</p>
            
            <a href="https://differenttypeofvibe.com/vip-pass" style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 6px; font-weight: bold; font-size: 16px; display: inline-block; box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4);">💳 Complete Checkout (Cards / Apple Pay / Google Pay / Lemon Squeezy)</a>
            
            <div style="margin-top: 15px; padding-top: 15px; border-top: 1px border-purple-800;">
                <a href="https://differenttypeofvibe.com/crypto-pay" style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: #000000; text-decoration: none; padding: 12px 28px; border-radius: 6px; font-weight: bold; font-size: 14px; display: inline-block;">🪙 Prefer Crypto? Pay via USDT / USDC / BTC ➔</a>
            </div>
        </div>
        
        <div style="background-color: #27164c; border: 2px solid #a855f7; padding: 18px 20px; border-radius: 10px; margin-top: 25px; text-align: center; box-shadow: 0 4px 15px rgba(168, 85, 247, 0.3);">
            <p style="font-size: 16px; color: #ffffff; margin: 0; font-weight: bold; line-height: 1.5;">
                💡 <span style="color: #facc15; font-size: 17px; text-transform: uppercase; letter-spacing: 0.5px;">Bank Card Approval Tip:</span><br/>
                If using a debit or credit card, please approve the quick <strong style="color: #4ade80;">2FA / SMS confirmation prompt</strong> inside your mobile banking app to finalize checkout!
            </p>
        </div>
    </div>
    <div style="text-align: center; margin-top: 30px; font-size: 12px; color: #6b5a94;">
        <p>© 2026 Onzieb / Different Type of Vibe. All rights reserved.</p>
    </div>
</div>
"""

def send_recovery_email(email):
    url = "https://api.resend.com/emails"
    headers = {
        "Authorization": f"Bearer {RESEND_API_KEY}",
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
    }
    payload = {
        "from": "Onzieb <onzieb@mail.differenttypeofvibe.com>",
        "to": [email],
        "subject": "⚠️ Interrupted Beat Order / VIP Pass Checkout — Complete Your Order",
        "html": RECOVERY_EMAIL_TEMPLATE
    }
    try:
        res = requests.post(url, json=payload, headers=headers, timeout=10)
        if res.status_code in [200, 201]:
            print(f"   [✓] Recovery email sent successfully to: {email}")
            return True
        else:
            print(f"   [!] Resend Error for {email}: {res.text}")
    except Exception as e:
        print(f"   [!] Exception sending recovery email to {email}: {e}")
    return False

def get_stripe_cancelled_emails():
    emails = set()
    if not stripe.api_key:
        print("⚠️ STRIPE_SECRET_KEY missing in .env")
        return emails

    try:
        sessions = stripe.checkout.Session.list(limit=100)
        for s in sessions.data:
            email = None
            if s.customer_details and s.customer_details.email:
                email = s.customer_details.email
            elif s.customer_email:
                email = s.customer_email
            
            if email and "@" in email:
                emails.add(email.strip().lower())
        print(f"📡 [Stripe] Found {len(emails)} emails from recent checkout attempts")
    except Exception as e:
        print(f"❌ Error fetching Stripe sessions: {e}")

    return emails

def get_lemonsqueezy_cancelled_emails():
    emails = set()
    if not LEMONSQUEEZY_API_KEY or not LEMONSQUEEZY_STORE_ID:
        print("⚠️ LEMONSQUEEZY_API_KEY or LEMONSQUEEZY_STORE_ID missing in .env")
        return emails

    headers = {
        "Authorization": f"Bearer {LEMONSQUEEZY_API_KEY}",
        "Accept": "application/vnd.api+json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
    }

    # Fetch Orders
    try:
        url = f"https://api.lemonsqueezy.com/v1/orders?filter[store_id]={LEMONSQUEEZY_STORE_ID}"
        res = requests.get(url, headers=headers, timeout=10)
        if res.status_code == 200:
            data = res.json().get("data", [])
            for item in data:
                attrs = item.get("attributes", {})
                status = attrs.get("status")
                user_email = attrs.get("user_email")
                if status in ["pending", "failed", "unpaid"] and user_email and "@" in user_email:
                    emails.add(user_email.strip().lower())
    except Exception as e:
        print(f"❌ Error fetching Lemon Squeezy orders: {e}")

    # Fetch Subscriptions
    try:
        url = f"https://api.lemonsqueezy.com/v1/subscriptions?filter[store_id]={LEMONSQUEEZY_STORE_ID}"
        res = requests.get(url, headers=headers, timeout=10)
        if res.status_code == 200:
            data = res.json().get("data", [])
            for item in data:
                attrs = item.get("attributes", {})
                status = attrs.get("status")
                user_email = attrs.get("user_email")
                if status in ["past_due", "unpaid", "cancelled", "expired"] and user_email and "@" in user_email:
                    emails.add(user_email.strip().lower())
    except Exception as e:
        print(f"❌ Error fetching Lemon Squeezy subscriptions: {e}")

    print(f"🍋 [Lemon Squeezy] Found {len(emails)} emails from unpaid/failed orders/subscriptions")
    return emails

def recover_all_cancelled_leads():
    print("======================================================================")
    print("      AUTOMATED FAILED & CANCELLED CHECKOUT PAYMENT RECOVERY")
    print("======================================================================\n")

    stripe_emails = get_stripe_cancelled_emails()
    ls_emails = get_lemonsqueezy_cancelled_emails()

    all_emails = stripe_emails.union(ls_emails)

    print(f"\n📡 Total unique customer emails for recovery across Stripe + Lemon Squeezy: {len(all_emails)}\n")

    for email in all_emails:
        print(f"✉️ Processing recovery for: {email}")
        send_recovery_email(email)
        time.sleep(1)

    print("\n✨ Payment Recovery Process Completed!")

if __name__ == "__main__":
    recover_all_cancelled_leads()
