#!/usr/bin/env python3
"""
scripts/recover_all_cancelled_leads.py
Automated 24/7 Checkout & Payment Recovery Engine.
"""

import os
import sys
import time
import csv
import argparse
import datetime
import requests
import stripe
from dotenv import load_dotenv

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
load_dotenv(os.path.join(BASE_DIR, ".env"))

stripe.api_key = os.getenv("STRIPE_SECRET_KEY")
RESEND_API_KEY = os.getenv("RESEND_API_KEY")
LEMONSQUEEZY_API_KEY = os.getenv("LEMONSQUEEZY_API_KEY")
LEMONSQUEEZY_STORE_ID = os.getenv("LEMONSQUEEZY_STORE_ID")
FROM_EMAIL = os.getenv("RESEND_FROM_EMAIL", "Onzieb <onzieb@mail.differenttypeofvibe.com>")

LOG_PATH = os.path.join(BASE_DIR, "reports", "payment_recovery_sent_log.csv")
AUDIT_PATH = os.path.join(BASE_DIR, "reports", "license_delivery_audit_log.csv")
META_CSV_PATH = os.path.join(BASE_DIR, "attempted_subscriber_leads_meta.csv")

BLACKLIST = {"onzieb@gmail.com", "abcdef@gmail.com", "test@test.com", "example@gmail.com", "test@example.com"}

def build_recovery_html(email, is_african=False):
    african_payment_section = """
        <div style="background-color: #111827; border: 2px solid #10b981; padding: 22px; border-radius: 10px; margin: 20px 0; text-align: left;">
            <p style="margin: 0 0 10px 0; color: #34d399; font-weight: bold; font-size: 16px; text-align: center;">🇳🇬 In Nigeria, Ghana, or Africa? Here is How to Complete Your Order:</p>
            <p style="margin: 0 0 12px 0; font-size: 13px; color: #e5e7eb; line-height: 1.5;">
                Due to CBN international spending limits, standard local African debit cards decline on international websites. You have 3 easy ways to get your beats instantly:
            </p>
            
            <div style="background: #1f2937; padding: 12px 14px; border-radius: 8px; margin-bottom: 12px; border-left: 4px solid #3b82f6;">
                <p style="margin: 0; font-size: 13px; color: #ffffff; font-weight: bold;">Option 1: Virtual Dollar Card (Approves 100% on Stripe)</p>
                <p style="margin: 4px 0 0 0; font-size: 12px; color: #9ca3af; line-height: 1.4;">
                    Create a free Virtual Dollar Card in 2 minutes on <strong>Geegpay (geegpay.africa)</strong>, <strong>Chipper Cash</strong>, or <strong>Grey.co</strong>. Fund it with your local Naira via bank transfer, then use that card on our checkout.
                </p>
                <div style="text-align: center; margin-top: 10px;">
                    <a href="https://www.differenttypeofvibe.com/vip-pass" style="background: #3b82f6; color: #ffffff; text-decoration: none; padding: 8px 20px; border-radius: 6px; font-weight: bold; font-size: 13px; display: inline-block;">Pay with Virtual Card ($9.99/mo) ➔</a>
                </div>
            </div>

            <div style="background: #1f2937; padding: 12px 14px; border-radius: 8px; margin-bottom: 12px; border-left: 4px solid #f59e0b;">
                <p style="margin: 0; font-size: 13px; color: #ffffff; font-weight: bold;">Option 2: Pay with Crypto (USDT on TRC-20 / BEP-20)</p>
                <p style="margin: 4px 0 0 0; font-size: 12px; color: #9ca3af; line-height: 1.4;">
                    Send $9.99 in USDT directly from your Binance, Bybit, or Trust Wallet. Instant automated beat delivery in under 60 seconds with zero bank issues.
                </p>
                <div style="text-align: center; margin-top: 10px;">
                    <a href="https://www.differenttypeofvibe.com/crypto-pay" style="background: #f59e0b; color: #111827; text-decoration: none; padding: 8px 20px; border-radius: 6px; font-weight: bold; font-size: 13px; display: inline-block;">⚡ Pay via USDT / Crypto ($9.99) ➔</a>
                </div>
            </div>

            <div style="background: #1f2937; padding: 12px 14px; border-radius: 8px; border-left: 4px solid #10b981;">
                <p style="margin: 0; font-size: 13px; color: #ffffff; font-weight: bold;">Option 3: Chat Directly with Onzieb on WhatsApp</p>
                <p style="margin: 4px 0 0 0; font-size: 12px; color: #9ca3af; line-height: 1.4;">
                    Need a direct invoice, manual activation, or alternative payment? Message Onzieb directly on WhatsApp and we will get your untagged WAV files unlocked immediately!
                </p>
                <div style="text-align: center; margin-top: 10px;">
                    <a href="https://wa.me/17577150140?text=Hi%20Onzieb%2C%20my%20card%20declined%20for%20the%20VIP%20Beat%20Pass.%20I%20want%20to%20complete%20my%20order" style="background: #10b981; color: #ffffff; text-decoration: none; padding: 8px 20px; border-radius: 6px; font-weight: bold; font-size: 13px; display: inline-block;">💬 Chat on WhatsApp (+1 757-715-0140) ➔</a>
                </div>
            </div>
        </div>
    """

    return f"""
    <div style="background-color: #0b071a; color: #f1ecff; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 35px 20px; max-width: 600px; margin: 0 auto; border-radius: 12px; border: 1px solid #2d1b4e;">
        <div style="text-align: center; margin-bottom: 25px;">
            <h1 style="color: #c084fc; font-size: 26px; margin: 0; letter-spacing: 1px;">DIFFERENT TYPE OF VIBE</h1>
            <p style="color: #9333ea; font-size: 13px; letter-spacing: 2px; margin: 5px 0 0 0; text-transform: uppercase;">ONZIEB PRODUCTION • ORDER RECOVERY</p>
        </div>
        <div style="background-color: #120c2a; border-radius: 8px; padding: 25px; border: 1px solid #1f1440; line-height: 1.6; font-size: 15px;">
            <p>Hey there 👋,</p>
            <p>I noticed your recent beat order / $9.99 VIP Pass checkout was interrupted or declined by your bank's security check.</p>
            <p>Don't worry — your selected beats and pass benefits are reserved for the next 24 hours.</p>

            <div style="background-color: #1e133e; border: 1px solid #7c3aed; padding: 22px; border-radius: 8px; margin: 20px 0; text-align: center;">
                <p style="margin: 0 0 8px 0; color: #c084fc; font-weight: bold; font-size: 18px;">🔥 Complete Your Order &amp; Save 30%</p>
                <p style="margin: 0 0 14px 0; font-size: 14px; color: #d8b4fe;">Use promo code <strong style="color: #ffffff; background: #9333ea; padding: 2px 8px; border-radius: 4px;">WELCOME30</strong> at checkout!</p>
                <a href="https://www.differenttypeofvibe.com/vip-pass" style="background: linear-gradient(135deg, #a855f7 0%, #7c3aed 100%); color: #ffffff; text-decoration: none; padding: 13px 30px; border-radius: 6px; font-weight: bold; font-size: 15px; display: inline-block;">💳 Pay with International Card / Apple Pay / Google Pay</a>
            </div>

            {african_payment_section if is_african else ""}

            <div style="text-align: center; margin: 15px 0;">
                <a href="https://differenttypeofvibe.com/crypto-pay" style="color: #fbbf24; font-size: 13px; text-decoration: underline;">Prefer Crypto? Pay via USDT / USDC / BTC ➔</a>
            </div>

            <div style="background-color: #27164c; border: 1px solid #a855f7; padding: 14px 16px; border-radius: 8px; margin-top: 20px; font-size: 13px; color: #e9d5ff;">
                💡 <strong>Bank Approval Tip:</strong> If using a debit or credit card, please approve the quick 2FA SMS confirmation prompt inside your mobile banking app.
            </div>

            <p style="margin-top: 20px; font-size: 14px; color: #c4b5fd;">Need help or a custom invoice? Simply reply directly to this email and I'll send your untagged WAV files immediately!</p>

            <p style="margin-top: 25px; font-size: 14px;">Best regards,<br/><strong>Onzieb</strong><br/><span style="color: #a78bfa; font-size: 12px;">Different Type of Vibe</span></p>
        </div>
    </div>
    """

def get_suppressed_emails():
    suppressed = set(BLACKLIST)
    if os.path.exists(AUDIT_PATH):
        try:
            with open(AUDIT_PATH, "r", encoding="utf-8") as f:
                reader = csv.DictReader(f)
                for r in reader:
                    em = r.get("buyer_email")
                    if em: suppressed.add(em.strip().lower())
        except Exception: pass

    if os.path.exists(LOG_PATH):
        try:
            now = datetime.datetime.now()
            with open(LOG_PATH, "r", encoding="utf-8") as f:
                reader = csv.DictReader(f)
                for r in reader:
                    em = r.get("email")
                    ts = r.get("sent_at")
                    if em and ts:
                        try:
                            sent_date = datetime.datetime.fromisoformat(ts)
                            if (now - sent_date).days < 7:
                                suppressed.add(em.strip().lower())
                        except Exception:
                            suppressed.add(em.strip().lower())
        except Exception: pass

    return suppressed

def log_sent_recovery(email, source, status, resend_id):
    os.makedirs(os.path.dirname(LOG_PATH), exist_ok=True)
    file_exists = os.path.exists(LOG_PATH)
    with open(LOG_PATH, "a", encoding="utf-8", newline="") as f:
        writer = csv.writer(f)
        if not file_exists:
            writer.writerow(["sent_at", "email", "lead_source", "status", "resend_id"])
        writer.writerow([datetime.datetime.now().isoformat(), email, source, status, resend_id])

def fetch_leads():
    leads = {}
    if os.path.exists(META_CSV_PATH):
        try:
            with open(META_CSV_PATH, "r", encoding="utf-8") as f:
                reader = csv.DictReader(f)
                for r in reader:
                    em = r.get("email")
                    if em and "@" in em:
                        leads[em.strip().lower()] = {"source": "meta_lead", "is_african": True}
        except Exception as e:
            print(f"Notice reading meta leads: {e}")

    if stripe.api_key:
        try:
            sessions = stripe.checkout.Session.list(limit=100)
            for s in sessions.data:
                if s.status in ["expired", "open"] and s.payment_status != "paid":
                    em = (s.customer_details and s.customer_details.email) or s.customer_email
                    if em and "@" in em:
                        em = em.strip().lower()
                        if em not in leads:
                            leads[em] = {"source": "stripe_abandoned", "is_african": False}
        except Exception as e:
            print(f"Notice reading Stripe sessions: {e}")

    return leads

def send_recovery_email(email, is_african=False):
    if not RESEND_API_KEY:
        print("❌ RESEND_API_KEY missing")
        return False, None

    url = "https://api.resend.com/emails"
    headers = {"Authorization": f"Bearer {RESEND_API_KEY}", "Content-Type": "application/json"}
    payload = {
        "from": FROM_EMAIL,
        "to": [email],
        "subject": "⚠️ Interrupted Beat Order / $9.99 VIP Pass — Complete Your Order",
        "html": build_recovery_html(email, is_african=is_african)
    }
    try:
        res = requests.post(url, json=payload, headers=headers, timeout=10)
        if res.status_code in [200, 201]:
            res_id = res.json().get("id", "ok")
            return True, res_id
        else:
            return False, res.text
    except Exception as e:
        return False, str(e)

def main():
    parser = argparse.ArgumentParser(description="Payment Recovery Engine")
    parser.add_argument("--dry-run", action="store_true", help="Preview leads without sending emails")
    parser.add_argument("--limit", type=int, default=10, help="Max emails to send in this run")
    args = parser.parse_args()

    print("======================================================================")
    print("      DIFFERENT TYPE OF VIBE - CHECKOUT PAYMENT RECOVERY ENGINE")
    print(f"      Mode: {'DRY RUN (Preview Only)' if args.dry_run else 'LIVE SEND'} | Batch Limit: {args.limit}")
    print("======================================================================\n")

    suppressed = get_suppressed_emails()
    leads = fetch_leads()
    print(f"📡 Found {len(leads)} total abandoned checkout leads across Stripe & Meta.")
    print(f"🛡️ {len(suppressed)} emails currently suppressed (paid buyers, recent sends, test accounts).")

    eligible = []
    for em, info in leads.items():
        if em not in suppressed:
            eligible.append((em, info))

    print(f"🎯 {len(eligible)} eligible leads ready for recovery.\n")

    sent_count = 0
    for email, info in eligible[:args.limit]:
        source = info["source"]
        is_african = info["is_african"]
        print(f"✉️ Target: {email} | Source: {source} | Localized: {'🇳🇬 Paystack' if is_african else '💳 Stripe/Card'}")

        if args.dry_run:
            print("   [DRY RUN] Skipped sending.")
            continue

        ok, res_id = send_recovery_email(email, is_african=is_african)
        if ok:
            print(f"   ✅ Sent successfully! Resend ID: {res_id}")
            log_sent_recovery(email, source, "sent", res_id)
            sent_count += 1
        else:
            print(f"   ❌ Send failed: {res_id}")
            log_sent_recovery(email, source, "failed", res_id)
        time.sleep(1)

    print(f"\n🎉 Done! Total processed: {sent_count if not args.dry_run else len(eligible[:args.limit])}")

if __name__ == "__main__":
    main()
