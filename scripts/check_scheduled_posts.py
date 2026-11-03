import os
import requests
import json
from dotenv import load_dotenv

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
load_dotenv(os.path.join(BASE_DIR, ".env"))

ACCESS_TOKEN = os.getenv("META_PAGE_ACCESS_TOKEN") or os.getenv("META_ACCESS_TOKEN")
PAGE_ID = os.getenv("META_PAGE_ID", "100112494667444")
RESEND_API_KEY = os.getenv("RESEND_API_KEY")
RESEND_FROM_EMAIL = os.getenv("RESEND_FROM_EMAIL", "Onzieb <music@mail.differenttypeofvibe.com>")

def send_alert_email(count):
    if not RESEND_API_KEY:
        return
    html = f"""
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 25px; background: #0b071a; color: #f1ecff; border-radius: 12px;">
      <h2 style="color: #f59e0b;">⚠️ Social Media Queue Buffer Alert</h2>
      <p>Your Instagram & Facebook scheduled content queue currently has <strong>{count} scheduled post(s)</strong> remaining.</p>
      <p>To maintain 24/7 consistency, consider running <code>start_evergreen_carousel.bat</code> on your laptop to render and queue new vertical Reels!</p>
      <p style="text-align: center; margin-top: 25px;">
        <a href="https://differenttypeofvibe.com" style="background: #a855f7; color: #fff; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">View Storefront</a>
      </p>
    </div>
    """
    payload = {
        "from": RESEND_FROM_EMAIL,
        "to": ["onzieb@gmail.com"],
        "subject": f"⚠️ Social Media Queue Alert: Only {count} Scheduled Post(s) Left",
        "html": html
    }
    headers = {"Authorization": f"Bearer {RESEND_API_KEY}", "Content-Type": "application/json", "User-Agent": "Mozilla/5.0"}
    try:
        res = requests.post("https://api.resend.com/emails", json=payload, headers=headers, timeout=10)
        if res.status_code in [200, 201]:
            print(f"✅ Alert email sent to onzieb@gmail.com! [ID: {res.json().get('id')}]")
    except Exception as e:
        print(f"⚠️ Email alert error: {e}")

def main():
    if not ACCESS_TOKEN:
        print("❌ ERROR: META_PAGE_ACCESS_TOKEN environment variable missing!")
        return

    print(f"\n==========================================")
    print(f"   CHECKING SCHEDULED MEDIA QUEUE        ")
    print(f"==========================================")

    # 1. Fetch Connected Instagram Business ID
    ig_acc_url = f"https://graph.facebook.com/v19.0/{PAGE_ID}"
    ig_acc_params = {'access_token': ACCESS_TOKEN, 'fields': 'instagram_business_account'}
    try:
        ig_res = requests.get(ig_acc_url, params=ig_acc_params, timeout=10).json()
        ig_id = ig_res.get('instagram_business_account', {}).get('id')
    except Exception as e:
        print(f"⚠️ Error fetching IG account: {e}")
        ig_id = None

    scheduled_count = 0

    if ig_id:
        # 2. Query Scheduled IG Media Containers
        ig_scheduled_url = f"https://graph.facebook.com/v19.0/{ig_id}/scheduled_posts"
        ig_scheduled_params = {'access_token': ACCESS_TOKEN, 'fields': 'id,caption,scheduled_publish_time,status_code'}
        try:
            scheduled_res = requests.get(ig_scheduled_url, params=ig_scheduled_params, timeout=10).json()
            if 'data' in scheduled_res:
                scheduled_count += len(scheduled_res['data'])
                print(f"📅 Scheduled Instagram Posts: {len(scheduled_res['data'])}")
        except Exception as e:
            print(f"⚠️ Error fetching IG scheduled posts: {e}")

    print(f"\n📊 Total Scheduled Posts in Queue: {scheduled_count}")

    if scheduled_count < 3:
        print("⚠️ Queue buffer below threshold (< 3 posts). Sending reminder alert email...")
        send_alert_email(scheduled_count)
    else:
        print("✅ Queue buffer healthy! No alert needed.")

if __name__ == "__main__":
    main()
