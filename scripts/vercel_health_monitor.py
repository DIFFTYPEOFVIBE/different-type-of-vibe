import os
import sys
import time
import requests
import datetime
from dotenv import load_dotenv

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
load_dotenv(os.path.join(BASE_DIR, ".env"))
if not os.getenv("RESEND_API_KEY") and os.path.exists(r"C:\Users\Onzieb\beat-store-automation\.env"):
    load_dotenv(r"C:\Users\Onzieb\beat-store-automation\.env")

RESEND_API_KEY = os.getenv("RESEND_API_KEY")
RESEND_FROM_EMAIL = os.getenv("RESEND_FROM_EMAIL", "Onzieb <music@mail.differenttypeofvibe.com>")

# Endpoints to monitor
MONITOR_ENDPOINTS = [
    {"name": "Homepage", "url": "https://www.differenttypeofvibe.com/", "expected_status": [200]},
    {"name": "Pricing Page", "url": "https://www.differenttypeofvibe.com/pricing", "expected_status": [200]},
    {"name": "Free Downloads Hub", "url": "https://www.differenttypeofvibe.com/free-downloads", "expected_status": [200]},
    {"name": "VIP Pass Hub", "url": "https://www.differenttypeofvibe.com/vip-pass", "expected_status": [200]},
    {"name": "Sitemap XML", "url": "https://www.differenttypeofvibe.com/sitemap.xml", "expected_status": [200]},
    {"name": "Lemon Squeezy Webhook API", "url": "https://www.differenttypeofvibe.com/api/v1/webhooks/lemonsqueezy", "expected_status": [200]},
    {"name": "Stripe Webhook API", "url": "https://www.differenttypeofvibe.com/api/v1/webhooks/stripe", "expected_status": [200]}
]

def send_health_alert(issues):
    if not RESEND_API_KEY or not issues:
        return
    today = datetime.date.today().strftime("%B %d, %Y")
    issue_list = "".join([f"<li style='margin-bottom:8px;'><strong>{i['name']}</strong> ({i['url']}): Status {i['status']} (Latency: {i['latency']}ms) — <em>{i['error']}</em></li>" for i in issues])
    
    html = f"""
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 25px; background: #0b071a; color: #f1ecff; border-radius: 12px; border: 1px solid #2d1b4e;">
      <h2 style="color: #f43f5e; margin-top: 0;">🚨 Vercel Production Health Alert</h2>
      <p style="font-size: 15px;">A health audit run on <strong>{today}</strong> detected <strong>{len(issues)} issue(s)</strong> on your live storefront:</p>
      <div style="background-color: #1f122b; border: 1px solid #f43f5e; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <ul style="padding-left: 20px; color: #fca5a5; margin: 0;">
          {issue_list}
        </ul>
      </div>
      <p style="font-size: 13px; color: #a78bfa; text-align: center;">Please review your Vercel deployment logs at <a href="https://vercel.com" style="color: #34d399;">vercel.com</a>.</p>
    </div>
    """
    payload = {
        "from": RESEND_FROM_EMAIL,
        "to": ["onzieb@gmail.com"],
        "subject": f"🚨 URGENT: Vercel Production Health Issues Detected — {today}",
        "html": html
    }
    headers = {"Authorization": f"Bearer {RESEND_API_KEY}", "Content-Type": "application/json", "User-Agent": "Mozilla/5.0"}
    try:
        res = requests.post("https://api.resend.com/emails", json=payload, headers=headers, timeout=10)
        if res.status_code in [200, 201]:
            print(f"🚨 Urgent health alert email sent to onzieb@gmail.com! [ID: {res.json().get('id')}]")
    except Exception as e:
        print(f"⚠️ Email alert notice: {e}")

def run_health_monitor():
    print("======================================================================")
    print("      VERCEL PRODUCTION HEALTH, LATENCY & 404 MONITOR ENGINE")
    print("======================================================================\n")

    headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) VercelHealthMonitor/1.0"}
    issues = []

    for ep in MONITOR_ENDPOINTS:
        start_time = time.time()
        try:
            res = requests.get(ep["url"], headers=headers, timeout=15)
            latency_ms = int((time.time() - start_time) * 1000)
            
            if res.status_code in ep["expected_status"]:
                print(f"✅ [200 OK] {ep['name']} ({ep['url']}) — Latency: {latency_ms}ms")
            else:
                print(f"❌ [{res.status_code}] {ep['name']} ({ep['url']}) — Unexpected Status Code!")
                issues.append({
                    "name": ep["name"],
                    "url": ep["url"],
                    "status": res.status_code,
                    "latency": latency_ms,
                    "error": f"Returned status {res.status_code} (Expected {ep['expected_status']})"
                })
        except Exception as e:
            latency_ms = int((time.time() - start_time) * 1000)
            print(f"❌ [TIMEOUT/ERROR] {ep['name']} ({ep['url']}): {e}")
            issues.append({
                "name": ep["name"],
                "url": ep["url"],
                "status": "ERROR",
                "latency": latency_ms,
                "error": str(e)
            })

    if issues:
        print(f"\n🚨 {len(issues)} endpoint issue(s) detected. Sending urgent health alert email...")
        send_health_alert(issues)
    else:
        print("\n🎉 All core Vercel production endpoints passed health & latency audit!")

if __name__ == "__main__":
    run_health_monitor()
