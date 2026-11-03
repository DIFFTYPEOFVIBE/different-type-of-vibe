import os
import sys
import json
import time
import requests
from dotenv import load_dotenv

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
load_dotenv(os.path.join(BASE_DIR, ".env"))

META_ACCESS_TOKEN = os.getenv("META_PAGE_ACCESS_TOKEN") or os.getenv("META_ACCESS_TOKEN")
AD_ACCOUNT_ID = os.getenv("META_AD_ACCOUNT_ID", "303230040458733")
if not AD_ACCOUNT_ID.startswith("act_"):
    AD_ACCOUNT_ID = f"act_{AD_ACCOUNT_ID}"

RESEND_API_KEY = os.getenv("RESEND_API_KEY")
RESEND_FROM_EMAIL = os.getenv("RESEND_FROM_EMAIL", "Onzieb <music@mail.differenttypeofvibe.com>")

# Guardrail Thresholds
MAX_SPEND_NO_CLICKS = 15.0  # Pause if spent > $15 with 0 clicks
MIN_CTR_THRESHOLD = 0.5     # Pause if spend > $15 and CTR < 0.5%
SCALE_CTR_THRESHOLD = 3.0   # Scale +15% budget if CTR > 3.0% and spend >= $5
MAX_DAILY_BUDGET_CAP = 5000 # Max cap $50.00/day in cents (5000 cents)

def send_alert_email(subject, details):
    if not RESEND_API_KEY:
        return
    html = f"""
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 25px; background: #0b071a; color: #f1ecff; border-radius: 12px; border: 1px solid #2d1b4e;">
      <h2 style="color: #c084fc; margin-top: 0;">🛡️ Meta Ads Guardrail & Budget Scaler Alert</h2>
      <p style="font-size: 15px; line-height: 1.6;">{details}</p>
      <div style="text-align: center; margin-top: 25px;">
        <a href="https://differenttypeofvibe.com" style="background: #34d399; color: #000; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">View Storefront Portal</a>
      </div>
    </div>
    """
    payload = {
        "from": RESEND_FROM_EMAIL,
        "to": ["onzieb@gmail.com"],
        "subject": subject,
        "html": html
    }
    headers = {"Authorization": f"Bearer {RESEND_API_KEY}", "Content-Type": "application/json", "User-Agent": "Mozilla/5.0"}
    try:
        res = requests.post("https://api.resend.com/emails", json=payload, headers=headers, timeout=10)
        if res.status_code in [200, 201]:
            print(f"✅ Guardrail alert email sent to onzieb@gmail.com! [ID: {res.json().get('id')}]")
    except Exception as e:
        print(f"⚠️ Email alert error: {e}")
def run_ad_guardrails():
    print("======================================================================")
    print("      META ADS AUTOMATED BUDGET GUARDRAILS & SCALING ENGINE")
    print("======================================================================\n")

    if not META_ACCESS_TOKEN:
        print("❌ Error: META_ACCESS_TOKEN / META_PAGE_ACCESS_TOKEN missing in .env")
        return

    base_url = "https://graph.facebook.com/v19.0"
    url = f"{base_url}/{AD_ACCOUNT_ID}/adsets?fields=id,name,status,daily_budget,targeting&limit=200&access_token={META_ACCESS_TOKEN}"

    try:
        res = requests.get(url, timeout=15)
        if res.status_code != 200:
            print(f"❌ Meta API Error fetching ad sets: {res.text}")
            return
        adsets = res.json().get("data", [])
    except Exception as e:
        print(f"❌ Exception fetching ad sets: {e}")
        return

    active_adsets = [a for a in adsets if a.get("status") == "ACTIVE"]
    print(f"📡 Found {len(active_adsets)} active ad set(s) in account {AD_ACCOUNT_ID}.\n")

    if not active_adsets:
        print("💤 No active ad sets found to monitor today.")
        return

    paused_actions = []
    scaled_actions = []

    for adset in active_adsets:
        adset_id = adset["id"]
        adset_name = adset["name"]
        curr_budget = int(adset.get("daily_budget", 0) or 0)

        insights_url = f"{base_url}/{adset_id}/insights?fields=spend,clicks,ctr,cpc,impressions,actions&date_preset=last_3d&access_token={META_ACCESS_TOKEN}"
        try:
            i_res = requests.get(insights_url, timeout=10)
            if i_res.status_code != 200:
                continue
            ins_data = i_res.json().get("data", [])
            if not ins_data:
                print(f"ℹ️ {adset_name} [ID: {adset_id}] — No recent spend data.")
                continue
            
            i = ins_data[0]
            spend = float(i.get("spend", 0) or 0)
            clicks = int(i.get("clicks", 0) or 0)
            ctr = float(i.get("ctr", 0) or 0)
            cpc = float(i.get("cpc", 0) or 0)

            print(f"📊 AdSet: {adset_name} | Spend: ${spend:.2f} | Clicks: {clicks} | CTR: {ctr:.2f}% | CPC: ${cpc:.2f}")

            # Guardrail 1: Auto-Pause Wasted Spend
            if spend >= MAX_SPEND_NO_CLICKS and (clicks == 0 or ctr < MIN_CTR_THRESHOLD):
                print(f"   🛑 AUTO-PAUSING {adset_name} (Spent ${spend:.2f} with {clicks} clicks / {ctr:.2f}% CTR)")
                update_url = f"{base_url}/{adset_id}"
                up_res = requests.post(update_url, data={"status": "PAUSED", "access_token": META_ACCESS_TOKEN}, timeout=10)
                if up_res.status_code == 200:
                    print("   ✅ Successfully paused ad set in Meta!")
                    paused_actions.append(f"• <strong>{adset_name}</strong>: Paused (Spent ${spend:.2f}, {clicks} clicks, {ctr:.2f}% CTR)")

            # Guardrail 2: Auto-Scale Winners
            elif spend >= 5.0 and ctr >= SCALE_CTR_THRESHOLD and curr_budget > 0 and curr_budget < MAX_DAILY_BUDGET_CAP:
                new_budget = int(curr_budget * 1.15) # Scale +15%
                if new_budget > MAX_DAILY_BUDGET_CAP:
                    new_budget = MAX_DAILY_BUDGET_CAP

                print(f"   🚀 AUTO-SCALING {adset_name} (+15% Budget: ${curr_budget/100:.2f}/day ➔ ${new_budget/100:.2f}/day)")
                update_url = f"{base_url}/{adset_id}"
                up_res = requests.post(update_url, data={"daily_budget": new_budget, "access_token": META_ACCESS_TOKEN}, timeout=10)
                if up_res.status_code == 200:
                    print("   ✅ Successfully scaled ad set budget in Meta!")
                    scaled_actions.append(f"• <strong>{adset_name}</strong>: Scaled budget to ${new_budget/100:.2f}/day (CTR: {ctr:.2f}%)")

        except Exception as e:
            print(f"⚠️ Error checking insights for {adset_name}: {e}")

    # Send Alert Email if actions taken
    if paused_actions or scaled_actions:
        details = ""
        if paused_actions:
            details += "<h3>🛑 Paused Ad Sets (Wasted Spend Guardrail):</h3>" + "<br/>".join(paused_actions) + "<br/><br/>"
        if scaled_actions:
            details += "<h3>🚀 Scaled Ad Sets (+15% Budget Scaling):</h3>" + "<br/>".join(scaled_actions)
        
        send_alert_email("🛡️ Meta Ads Guardrail & Budget Scaler Actions Executed", details)

    print("\n✨ Meta Ads Guardrail & Budget Scaler Cycle Completed!")

if __name__ == "__main__":
    run_ad_guardrails()
