import os
import sys
import json
import datetime
import subprocess
import requests

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TARGET_DATE = datetime.date(2027, 1, 1)

def check_gsc_impressions():
    """Checks if Google Search Console 7-day impressions crossed 500+."""
    gsc_report_path = os.path.join(BASE_DIR, "gsc_country_report.csv")
    if os.path.exists(gsc_report_path):
        try:
            import csv
            with open(gsc_report_path, "r", encoding="utf-8") as f:
                reader = csv.DictReader(f)
                total_impressions = sum(int(row.get("Impressions", 0)) for row in reader if row.get("Impressions"))
                print(f"📊 Live GSC Total Impressions Check: {total_impressions}")
                return total_impressions >= 500
        except Exception as e:
            print(f"⚠️ Notice checking GSC impressions: {e}")
    return False

def run_full_expansion():
    print("🚀 TARGET CONDITION MET! TRIGGERING AUTOMATED 60-DAY pSEO PAGE EXPANSION...")
    
    expander_script = os.path.join(BASE_DIR, "scripts", "daily_seo_page_expander.py")
    schema_script = os.path.join(BASE_DIR, "scripts", "generate_beat_schema.py")
    link_script = os.path.join(BASE_DIR, "scripts", "link_beats.py")
    indexnow_script = os.path.join(BASE_DIR, "scripts", "indexnow_submitter.py")
    utf8_env = {**os.environ, "PYTHONIOENCODING": "utf-8"}

    # 1. Expand Pages
    if os.path.exists(expander_script):
        print("📄 Running daily_seo_page_expander.py...")
        subprocess.run([sys.executable, expander_script], cwd=BASE_DIR, env=utf8_env)

    # 2. Recalculate Links & Schema
    if os.path.exists(link_script):
        print("🔗 Running link_beats.py...")
        subprocess.run([sys.executable, link_script], cwd=BASE_DIR, env=utf8_env)

    if os.path.exists(schema_script):
        print("🏷️ Running generate_beat_schema.py...")
        subprocess.run([sys.executable, schema_script], cwd=BASE_DIR, env=utf8_env)

    # 3. Submit IndexNow Pings
    if os.path.exists(indexnow_script):
        print("📡 Submitting IndexNow Pings...")
        subprocess.run([sys.executable, indexnow_script], cwd=BASE_DIR, env=utf8_env)

    print("🎉 pSEO Expansion Cycle Completed Successfully!")

def main():
    today = datetime.date.today()
    print("======================================================================")
    print("         AUTOMATED 60-DAY pSEO EXPANSION TIMER CHECK")
    print(f"         Today's Date : {today.isoformat()}")
    print(f"         Target Date  : {TARGET_DATE.isoformat()}")
    print("======================================================================\n")

    force_trigger = "--force" in sys.argv or os.getenv("FORCE_EXPANSION") == "true"
    date_reached = today >= TARGET_DATE
    impressions_reached = check_gsc_impressions()

    if force_trigger or date_reached or impressions_reached:
        print(f"✅ Trigger Activated! (Force: {force_trigger}, Date Reached: {date_reached}, GSC Impressions: {impressions_reached})")
        run_full_expansion()
    else:
        days_left = (TARGET_DATE - today).days
        print(f"⏳ Standby Mode: Expansion scheduled for {TARGET_DATE.isoformat()} ({days_left} days remaining) or when GSC impressions cross 500+.")

if __name__ == "__main__":
    main()
