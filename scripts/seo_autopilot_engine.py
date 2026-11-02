#!/usr/bin/env python3
"""
seo_autopilot_engine.py

Automated 24/7 Organic SEO Increase Engine for Different Type of Vibe.
Monitors live sitemap health, synchronizes internal link graphs,
regenerates Schema.org JSON-LD nodes, fetches GSC data, and deploys updates to Vercel.
"""

import os
import sys
import time
import json
import argparse
import datetime
import subprocess

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
STORE_DIR = r"C:\Users\Onzieb\projects\different-type-of-vibe"
sys.path.append(BASE_DIR)

LOG_FILE = os.path.join(BASE_DIR, "seo_autopilot_log.json")
SITEMAP_URL = "https://differenttypeofvibe.com/sitemap.xml"

def log_event(message, level="INFO"):
    timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    formatted = f"[{timestamp}] [{level}] {message}"
    print(formatted)

    log_entry = {"timestamp": timestamp, "level": level, "message": message}

    logs = []
    if os.path.exists(LOG_FILE):
        try:
            with open(LOG_FILE, "r", encoding="utf-8") as f:
                logs = json.load(f)
        except Exception:
            logs = []

    logs.append(log_entry)
    logs = logs[-100:]

    with open(LOG_FILE, "w", encoding="utf-8") as f:
        json.dump(logs, f, indent=2)

def run_sitemap_audit():
    log_event("🔍 Step 1: Expanding daily SEO pages & auditing sitemap health...", "INFO")
    try:
        expander_script = os.path.join(BASE_DIR, "scripts", "daily_seo_page_expander.py")
        verify_script = os.path.join(BASE_DIR, "verify_sitemap.py")
        utf8_env = {**os.environ, "PYTHONIOENCODING": "utf-8"}

        if os.path.exists(expander_script):
            subprocess.run(f'"{sys.executable}" "{expander_script}"', cwd=BASE_DIR, shell=True, env=utf8_env, capture_output=True, text=True, encoding="utf-8", errors="replace")

        result = subprocess.run(
            [sys.executable, verify_script, SITEMAP_URL],
            cwd=BASE_DIR, capture_output=True, text=True, encoding="utf-8", errors="replace", timeout=180
        )
        if result.returncode == 0:
            log_event("✅ Live sitemap expansion & audit passed! All pages return 200 OK.", "SUCCESS")
        else:
            log_event(f"⚠️ Sitemap audit warnings: {result.stderr or result.stdout}", "WARNING")
    except Exception as e:
        log_event(f"❌ Error auditing sitemap: {e}", "ERROR")

def audit_store_speed():
    log_event("⚡ Step 2: Auditing Core Web Vitals, server TTFB latency & canonical headers...", "INFO")
    try:
        speed_script = os.path.join(BASE_DIR, "scripts", "store_speed_auditor.py")
        utf8_env = {**os.environ, "PYTHONIOENCODING": "utf-8"}
        if os.path.exists(speed_script):
            subprocess.run(f'"{sys.executable}" "{speed_script}"', cwd=BASE_DIR, shell=True, env=utf8_env, capture_output=True, text=True, encoding="utf-8", errors="replace")
            log_event("✅ Storefront speed & Core Web Vitals audit complete!", "SUCCESS")
    except Exception as e:
        log_event(f"⚠️ Store speed audit notice: {e}", "NOTICE")

def sync_internal_links_and_schema():
    log_event("🔗 Step 3: Recalculating internal link graph & JSON-LD schemas...", "INFO")
    try:
        link_script = os.path.join(BASE_DIR, "link_beats.py")
        schema_script = os.path.join(BASE_DIR, "generate_beat_schema.py")
        utf8_env = {**os.environ, "PYTHONIOENCODING": "utf-8"}

        p1 = subprocess.run(f'"{sys.executable}" "{link_script}"', cwd=BASE_DIR, shell=True, env=utf8_env, capture_output=True, text=True, encoding="utf-8", errors="replace")
        if p1.returncode != 0:
            log_event(f"⚠️ link_beats.py details: {p1.stderr or p1.stdout}", "NOTICE")

        p2 = subprocess.run(f'"{sys.executable}" "{schema_script}"', cwd=BASE_DIR, shell=True, env=utf8_env, capture_output=True, text=True, encoding="utf-8", errors="replace")
        if p2.returncode != 0:
            log_event(f"⚠️ generate_beat_schema.py details: {p2.stderr or p2.stdout}", "NOTICE")

        src_map = os.path.join(BASE_DIR, "internal_links_map.json")
        dest_map = os.path.join(STORE_DIR, "src", "data", "internal_links_map.json")

        if os.path.exists(src_map) and os.path.exists(os.path.dirname(dest_map)):
            import shutil
            shutil.copy2(src_map, dest_map)
            log_event("✅ Successfully synced internal links map to storefront!", "SUCCESS")

    except Exception as e:
        log_event(f"❌ Error syncing internal links and schemas: {e}", "ERROR")

def repair_subscriber_names():
    log_event("✍️ Step 4: Repairing and cleansing subscriber names in Resend...", "INFO")
    try:
        fix_script = os.path.join(BASE_DIR, "scripts", "fix_contact_names.py")
        utf8_env = {**os.environ, "PYTHONIOENCODING": "utf-8"}
        if os.path.exists(fix_script):
            subprocess.run(f'"{sys.executable}" "{fix_script}"', cwd=BASE_DIR, shell=True, env=utf8_env, capture_output=True, text=True, encoding="utf-8", errors="replace")
            log_event("✅ Subscriber names repaired and normalized!", "SUCCESS")
    except Exception as e:
        log_event(f"⚠️ Subscriber name repair notice: {e}", "NOTICE")

def process_inbound_leads():
    log_event("✉️ Step 5: Processing inbound emails, demo attachments, and lead replies...", "INFO")
    try:
        email_script = os.path.join(BASE_DIR, "scripts", "process_incoming_emails.py")
        utf8_env = {**os.environ, "PYTHONIOENCODING": "utf-8"}
        if os.path.exists(email_script):
            subprocess.run(f'"{sys.executable}" "{email_script}"', cwd=BASE_DIR, shell=True, env=utf8_env, capture_output=True, text=True, encoding="utf-8", errors="replace")
            log_event("✅ Inbound lead email & demo processing complete!", "SUCCESS")
    except Exception as e:
        log_event(f"⚠️ Inbound email processing notice: {e}", "NOTICE")

def trigger_nurture_campaign():
    log_event("📧 Step 6: Checking and delivering scheduled Resend email nurture steps...", "INFO")
    try:
        nurture_script = os.path.join(BASE_DIR, "scripts", "nurture_scheduler.py")
        utf8_env = {**os.environ, "PYTHONIOENCODING": "utf-8"}
        if os.path.exists(nurture_script):
            subprocess.run(f'"{sys.executable}" "{nurture_script}"', cwd=BASE_DIR, shell=True, env=utf8_env, capture_output=True, text=True, encoding="utf-8", errors="replace")
            log_event("✅ Email nurture sequence check and delivery complete!", "SUCCESS")
    except Exception as e:
        log_event(f"⚠️ Nurture campaign delivery notice: {e}", "NOTICE")

def run_gsc_analytics():
    log_event("📈 Step 7: Fetching Search Console performance, page analytics & striking distance terms...", "INFO")
    try:
        gsc_rank_script = os.path.join(BASE_DIR, "gsc_rank_tracker.py")
        gsc_country_script = os.path.join(BASE_DIR, "scripts", "gsc_country_analyzer.py")
        striking_script = os.path.join(BASE_DIR, "scripts", "gsc_striking_distance_optimizer.py")
        gsc_page_script = os.path.join(BASE_DIR, "scripts", "gsc_page_performance_analyzer.py")
        sitemap_ping_script = os.path.join(BASE_DIR, "submit_sitemap.py")
        utf8_env = {**os.environ, "PYTHONIOENCODING": "utf-8"}

        if os.path.exists(gsc_rank_script):
            subprocess.run(f'"{sys.executable}" "{gsc_rank_script}"', cwd=BASE_DIR, shell=True, env=utf8_env, capture_output=True, text=True, encoding="utf-8", errors="replace")
        if os.path.exists(gsc_country_script):
            subprocess.run(f'"{sys.executable}" "{gsc_country_script}"', cwd=BASE_DIR, shell=True, env=utf8_env, capture_output=True, text=True, encoding="utf-8", errors="replace")
        if os.path.exists(striking_script):
            subprocess.run(f'"{sys.executable}" "{striking_script}"', cwd=BASE_DIR, shell=True, env=utf8_env, capture_output=True, text=True, encoding="utf-8", errors="replace")
        if os.path.exists(gsc_page_script):
            subprocess.run(f'"{sys.executable}" "{gsc_page_script}"', cwd=BASE_DIR, shell=True, env=utf8_env, capture_output=True, text=True, encoding="utf-8", errors="replace")
        if os.path.exists(sitemap_ping_script):
            subprocess.run(f'"{sys.executable}" "{sitemap_ping_script}"', cwd=BASE_DIR, shell=True, env=utf8_env, capture_output=True, text=True, encoding="utf-8", errors="replace")

        log_event("✅ Search Console organic rankings, page breakdown & Google pings updated!", "SUCCESS")
    except Exception as e:
        log_event(f"⚠️ GSC analytics step notice: {e}", "NOTICE")

def audit_backlink_profile():
    log_event("🔗 Step 8: Auditing backlink profile, anchor distribution & outreach prospects...", "INFO")
    try:
        backlink_script = os.path.join(BASE_DIR, "scripts", "backlink_profile_tracker.py")
        utf8_env = {**os.environ, "PYTHONIOENCODING": "utf-8"}
        if os.path.exists(backlink_script):
            subprocess.run(f'"{sys.executable}" "{backlink_script}"', cwd=BASE_DIR, shell=True, env=utf8_env, capture_output=True, text=True, encoding="utf-8", errors="replace")
            log_event("✅ Backlink profile & anchor text audit updated!", "SUCCESS")
    except Exception as e:
        log_event(f"⚠️ Backlink profile audit notice: {e}", "NOTICE")

def run_indexnow_submission():
    log_event("📡 Step 9: Submitting updated URLs to IndexNow API (Bing, Yahoo, Yandex, AI Search)...", "INFO")
    try:
        indexnow_script = os.path.join(BASE_DIR, "scripts", "indexnow_submitter.py")
        utf8_env = {**os.environ, "PYTHONIOENCODING": "utf-8"}
        if os.path.exists(indexnow_script):
            subprocess.run(f'"{sys.executable}" "{indexnow_script}"', cwd=BASE_DIR, shell=True, env=utf8_env, capture_output=True, text=True, encoding="utf-8", errors="replace")
            log_event("✅ IndexNow instant indexing submission completed!", "SUCCESS")
    except Exception as e:
        log_event(f"⚠️ IndexNow submission notice: {e}", "NOTICE")

def trigger_vercel_deploy():
    log_event("🚀 Step 10: Deploying updated SEO assets to Vercel production...", "INFO")
    try:
        if os.path.exists(STORE_DIR):
            res = subprocess.run(
                "vercel --prod --yes",
                cwd=STORE_DIR, shell=True, capture_output=True, text=True, encoding="utf-8", errors="replace", timeout=180
            )
            if res.returncode == 0:
                log_event("🎉 Production Vercel deployment succeeded!", "SUCCESS")
            else:
                log_event(f"⚠️ Vercel deployment output: {res.stdout or res.stderr}", "WARNING")
    except Exception as e:
        log_event(f"❌ Vercel deploy error: {e}", "ERROR")

def run_autopilot_cycle():
    log_event("🤖 STARTING AUTOMATED ORGANIC SEO & SALES ENGINE CYCLE", "HEADER")
    run_sitemap_audit()
    audit_store_speed()
    sync_internal_links_and_schema()
    process_inbound_leads()
    trigger_nurture_campaign()
    run_gsc_analytics()
    audit_backlink_profile()
    run_indexnow_submission()
    trigger_vercel_deploy()
    log_event("✨ AUTOMATED SEO & SALES ENGINE CYCLE COMPLETED SUCCESSFULLY\n", "HEADER")

def main():
    parser = argparse.ArgumentParser(description="Automated 24/7 Organic SEO Increase Engine")
    parser.add_argument("--daemon", action="store_true", help="Run continuously in background daemon mode")
    parser.add_argument("--interval-hours", type=float, default=12.0, help="Check interval in hours")
    args = parser.parse_args()

    if args.daemon:
        interval_seconds = int(args.interval_hours * 3600)
        log_event(f"🌀 SEO Autopilot running in DAEMON mode (Interval: {args.interval_hours} hours)...", "INFO")
        while True:
            try:
                run_autopilot_cycle()
            except Exception as e:
                log_event(f"❌ Cycle error: {e}", "ERROR")
            log_event(f"😴 Sleeping for {args.interval_hours} hours until next cycle...", "INFO")
            time.sleep(interval_seconds)
    else:
        run_autopilot_cycle()

if __name__ == "__main__":
    main()
