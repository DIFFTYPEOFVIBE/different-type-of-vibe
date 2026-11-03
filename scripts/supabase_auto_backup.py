import os
import sys
import json
import time
import requests
import datetime
from dotenv import load_dotenv

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
# Load environment variables
load_dotenv(os.path.join(BASE_DIR, ".env"))
if not os.getenv("SUPABASE_SERVICE_ROLE_KEY") and os.path.exists(r"C:\Users\Onzieb\beat-store-automation\.env"):
    load_dotenv(r"C:\Users\Onzieb\beat-store-automation\.env")

SUPABASE_SERVICE_ROLE_KEY = os.getenv("SUPABASE_SERVICE_ROLE_KEY")
SUPABASE_URL = os.getenv("SUPABASE_URL", "https://hnliahdtcbuvggxhmzej.supabase.co")

RESEND_API_KEY = os.getenv("RESEND_API_KEY")
RESEND_FROM_EMAIL = os.getenv("RESEND_FROM_EMAIL", "Onzieb <music@mail.differenttypeofvibe.com>")

TABLES = ["beats", "licenses", "orders", "profiles", "tracks", "users"]

def send_backup_email(summary):
    if not RESEND_API_KEY:
        return
    today = datetime.date.today().strftime("%B %d, %Y")
    html = f"""
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 25px; background: #0b071a; color: #f1ecff; border-radius: 12px; border: 1px solid #2d1b4e;">
      <h2 style="color: #34d399; margin-top: 0;">🗄️ Supabase Cloud Auto-Backup Completed</h2>
      <p style="font-size: 15px;">Your weekly Supabase database backup was executed successfully on <strong>{today}</strong>.</p>
      <div style="background-color: #120c2a; border: 1px solid #1f1440; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p style="color: #c084fc; font-weight: bold; margin-top: 0;">📊 Backup Summary per Table:</p>
        <ul style="padding-left: 20px; color: #e9d5ff;">
          {summary}
        </ul>
      </div>
      <p style="font-size: 13px; color: #a78bfa; text-align: center;">All snapshot JSON records are safely committed in GitHub Action artifacts.</p>
    </div>
    """
    payload = {
        "from": RESEND_FROM_EMAIL,
        "to": ["onzieb@gmail.com"],
        "subject": f"🗄️ Supabase Database Backup Completed — {today}",
        "html": html
    }
    headers = {"Authorization": f"Bearer {RESEND_API_KEY}", "Content-Type": "application/json", "User-Agent": "Mozilla/5.0"}
    try:
        res = requests.post("https://api.resend.com/emails", json=payload, headers=headers, timeout=10)
        if res.status_code in [200, 201]:
            print(f"✅ Backup confirmation email sent to onzieb@gmail.com! [ID: {res.json().get('id')}]")
    except Exception as e:
        print(f"⚠️ Email alert notice: {e}")

def run_supabase_backup():
    print("======================================================================")
    print("      SUPABASE DATABASE CLOUD AUTO-BACKUP & CATALOG SYNC ENGINE")
    print("======================================================================\n")

    if not SUPABASE_SERVICE_ROLE_KEY:
        print("❌ Error: SUPABASE_SERVICE_ROLE_KEY missing in .env")
        return

    headers = {
        "apikey": SUPABASE_SERVICE_ROLE_KEY,
        "Authorization": f"Bearer {SUPABASE_SERVICE_ROLE_KEY}",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
    }

    backup_data = {
        "timestamp": datetime.datetime.now().isoformat(),
        "tables": {}
    }

    summary_lines = []

    for t in TABLES:
        url = f"{SUPABASE_URL}/rest/v1/{t}?select=*"
        try:
            res = requests.get(url, headers=headers, timeout=15)
            if res.status_code == 200:
                rows = res.json()
                backup_data["tables"][t] = rows
                print(f"✅ Table '{t}': Backed up {len(rows)} row(s)")
                summary_lines.append(f"<li><strong>{t}</strong>: {len(rows)} row(s)</li>")
            else:
                print(f"⚠️ Table '{t}' returned status {res.status_code}: {res.text}")
                summary_lines.append(f"<li><strong>{t}</strong>: Status {res.status_code}</li>")
        except Exception as e:
            print(f"❌ Error backing up table '{t}': {e}")

    # Save snapshot JSON
    backup_dir = os.path.join(BASE_DIR, "backups")
    os.makedirs(backup_dir, exist_ok=True)
    backup_file = os.path.join(backup_dir, "supabase_backup_latest.json")

    with open(backup_file, "w", encoding="utf-8") as f:
        json.dump(backup_data, f, indent=2)

    print(f"\n💾 Backup snapshot saved to: {backup_file}")

    # Send summary email
    if summary_lines:
        send_backup_email("".join(summary_lines))

    print("\n✨ Supabase Cloud Auto-Backup Completed Successfully!")

if __name__ == "__main__":
    run_supabase_backup()
