import os
import sys
import json
import time
import requests
import datetime
import stripe
from dotenv import load_dotenv

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
load_dotenv(os.path.join(BASE_DIR, ".env"))
if not os.getenv("RESEND_API_KEY") and os.path.exists(r"C:\Users\Onzieb\beat-store-automation\.env"):
    load_dotenv(r"C:\Users\Onzieb\beat-store-automation\.env")

stripe.api_key = os.getenv("STRIPE_SECRET_KEY")
LEMONSQUEEZY_API_KEY = os.getenv("LEMONSQUEEZY_API_KEY")
LEMONSQUEEZY_STORE_ID = os.getenv("LEMONSQUEEZY_STORE_ID")

RESEND_API_KEY = os.getenv("RESEND_API_KEY")
RESEND_AUDIENCE_ID = os.getenv("RESEND_AUDIENCE_ID", "d755a756-5ffd-45ea-a7d9-ef634c672b17")
RESEND_FROM_EMAIL = os.getenv("RESEND_FROM_EMAIL", "Onzieb <music@mail.differenttypeofvibe.com>")

def fetch_purchaser_contacts():
    contacts = {} # email -> {first_name, source}

    # 1. Stripe Paid Sessions
    if stripe.api_key:
        try:
            sessions = stripe.checkout.Session.list(limit=100)
            for s in sessions.data:
                if s.payment_status == "paid":
                    email = (s.customer_details and s.customer_details.email) or s.customer_email
                    name = (s.customer_details and s.customer_details.name) or ""
                    if email and "@" in email:
                        first_name = name.split()[0].title() if name else email.split("@")[0].title()
                        contacts[email.strip().lower()] = {"first_name": first_name, "source": "Stripe"}
        except Exception as e:
            print(f"⚠️ Stripe purchaser fetch notice: {e}")

    # 2. Lemon Squeezy Paid Orders
    if LEMONSQUEEZY_API_KEY and LEMONSQUEEZY_STORE_ID:
        headers = {"Authorization": f"Bearer {LEMONSQUEEZY_API_KEY}", "Accept": "application/vnd.api+json", "User-Agent": "Mozilla/5.0"}
        try:
            url = f"https://api.lemonsqueezy.com/v1/orders?filter[store_id]={LEMONSQUEEZY_STORE_ID}"
            res = requests.get(url, headers=headers, timeout=10)
            if res.status_code == 200:
                for item in res.json().get("data", []):
                    attrs = item.get("attributes", {})
                    if attrs.get("status") == "paid":
                        email = attrs.get("user_email")
                        name = attrs.get("user_name") or ""
                        if email and "@" in email:
                            first_name = name.split()[0].title() if name else email.split("@")[0].title()
                            contacts[email.strip().lower()] = {"first_name": first_name, "source": "Lemon Squeezy"}
        except Exception as e:
            print(f"⚠️ Lemon Squeezy purchaser fetch notice: {e}")

    return contacts

def sync_contacts_to_resend(contacts):
    if not RESEND_API_KEY or not RESEND_AUDIENCE_ID or not contacts:
        return 0

    headers = {
        "Authorization": f"Bearer {RESEND_API_KEY}",
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
    }

    synced_count = 0
    url = f"https://api.resend.com/audiences/{RESEND_AUDIENCE_ID}/contacts"

    for email, info in contacts.items():
        payload = {
            "email": email,
            "first_name": info["first_name"],
            "unsubscribed": False
        }
        try:
            res = requests.post(url, headers=headers, json=payload, timeout=10)
            if res.status_code in [200, 201]:
                print(f"✅ Synced VIP Purchaser to Resend Audience: {email} ({info['first_name']})")
                synced_count += 1
            else:
                # Already exists or minor notice
                pass
        except Exception as e:
            print(f"⚠️ Resend sync notice for {email}: {e}")

    return synced_count

def run_resend_audience_sync():
    print("======================================================================")
    print("      RESEND VIP PURCHASER AUDIENCE AUTOMATED SYNC ENGINE")
    print("======================================================================\n")

    contacts = fetch_purchaser_contacts()
    print(f"💳 Found {len(contacts)} verified storefront purchaser(s) across Stripe & Lemon Squeezy.")

    if contacts:
        synced = sync_contacts_to_resend(contacts)
        print(f"\n✨ Successfully processed {synced} VIP contact syncs to Resend Audience ID: {RESEND_AUDIENCE_ID}")
    else:
        print("\n💤 No new purchaser contacts to sync today.")

if __name__ == "__main__":
    run_resend_audience_sync()
