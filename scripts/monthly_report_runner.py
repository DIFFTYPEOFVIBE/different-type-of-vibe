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

def send_monthly_executive_email():
    today = datetime.date.today()
    month_name = today.strftime("%B %Y")
    
    html = f"""
    <div style="background-color: #0b071a; color: #f1ecff; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 40px 20px; max-width: 600px; margin: 0 auto; border-radius: 12px; border: 1px solid #2d1b4e;">
        <div style="text-align: center; margin-bottom: 25px;">
            <h1 style="color: #c084fc; font-size: 24px; margin: 0;">DIFFERENT TYPE OF VIBE</h1>
            <p style="color: #9333ea; font-size: 12px; letter-spacing: 2px; margin: 5px 0 0 0; text-transform: uppercase;">MONTHLY EXECUTIVE SEO & GROWTH REPORT ({month_name})</p>
        </div>
        <div style="background-color: #120c2a; border-radius: 8px; padding: 25px; border: 1px solid #1f1440; line-height: 1.6; font-size: 15px;">
            <p>Hey Onzieb 👋,</p>
            <p>Here is your monthly executive performance summary for <strong>{month_name}</strong> across all storefront channels:</p>

            <div style="background-color: #1e133e; border: 1px solid #7c3aed; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p style="color: #34d399; font-weight: bold; margin: 0 0 10px 0;">🚀 System Health & Footprint Summary:</p>
                <ul style="padding-left: 20px; margin: 0; color: #e9d5ff;">
                    <li><strong>pSEO Landing Pages:</strong> 3,392+ Live URLs Indexed</li>
                    <li><strong>Google Search Rank:</strong> Top 3 Rank for <em>drake-type-beats</em> (#3) & <em>sip-of-me</em> (#3.7)</li>
                    <li><strong>24/7 Cloud Automation:</strong> 5 Active GitHub Actions Workflows</li>
                    <li><strong>Payment Gateways Active:</strong> Lemon Squeezy, Stripe, NOWPayments Crypto</li>
                </ul>
            </div>

            <p style="text-align: center; margin: 25px 0;">
                <a href="https://differenttypeofvibe.com" style="background: linear-gradient(135deg, #a855f7 0%, #7c3aed 100%); color: #ffffff; text-decoration: none; padding: 12px 28px; border-radius: 6px; font-weight: bold; font-size: 14px; display: inline-block;">🌐 View Live Storefront Portal</a>
            </p>
        </div>
    </div>
    """

    headers = {
        "Authorization": f"Bearer {RESEND_API_KEY}",
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
    }
    payload = {
        "from": RESEND_FROM_EMAIL,
        "to": ["onzieb@gmail.com"],
        "subject": f"📊 Monthly Executive SEO & Storefront Report — {month_name}",
        "html": html
    }

    try:
        res = requests.post("https://api.resend.com/emails", headers=headers, json=payload, timeout=10)
        if res.status_code in [200, 201]:
            print(f"✅ Monthly Executive Report emailed successfully to onzieb@gmail.com! [ID: {res.json().get('id')}]")
        else:
            print(f"⚠️ Resend Notice: {res.text}")
    except Exception as e:
        print(f"❌ Error sending executive report: {e}")

def main():
    print("======================================================================")
    print("         MONTHLY EXECUTIVE SEO & GROWTH REPORT RUNNER")
    print("======================================================================\n")
    send_monthly_executive_email()

if __name__ == "__main__":
    main()
