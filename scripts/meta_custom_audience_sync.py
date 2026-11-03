import os
import sys
import json
import time
import hashlib
import requests
import stripe
from dotenv import load_dotenv

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
load_dotenv(os.path.join(BASE_DIR, ".env"))

META_ACCESS_TOKEN = os.getenv("META_PAGE_ACCESS_TOKEN") or os.getenv("META_ACCESS_TOKEN")
AD_ACCOUNT_ID = os.getenv("META_AD_ACCOUNT_ID", "303230040458733")
if not AD_ACCOUNT_ID.startswith("act_"):
    AD_ACCOUNT_ID = f"act_{AD_ACCOUNT_ID}"

stripe.api_key = os.getenv("STRIPE_SECRET_KEY")
LEMONSQUEEZY_API_KEY = os.getenv("LEMONSQUEEZY_API_KEY")
LEMONSQUEEZY_STORE_ID = os.getenv("LEMONSQUEEZY_STORE_ID")
RESEND_API_KEY = os.getenv("RESEND_API_KEY")
RESEND_FROM_EMAIL = os.getenv("RESEND_FROM_EMAIL", "Onzieb <music@mail.differenttypeofvibe.com>")

def hash_email(email):
    """SHA-256 hash required by Meta Custom Audience API."""
    return hashlib.sha256(email.strip().lower().encode("utf-8")).hexdigest()

def get_or_create_custom_audience(audience_name, description=""):
    """Fetches or creates a Meta Custom Audience by name."""
    url = f"https://graph.facebook.com/v19.0/{AD_ACCOUNT_ID}/customaudiences"
    params = {"fields": "id,name", "access_token": META_ACCESS_TOKEN}
    try:
        res = requests.get(url, params=params, timeout=15)
        if res.status_code == 200:
            audiences = res.json().get("data", [])
            for a in audiences:
                if a.get("name") == audience_name:
                    return a["id"]
        
        # Create new audience if not found
        payload = {
            "name": audience_name,
            "subtype": "CUSTOM",
            "description": description or "Automated Sync from Storefront & Resend",
            "customer_file_source": "USER_PROVIDED_ONLY",
            "access_token": META_ACCESS_TOKEN
        }
        c_res = requests.post(url, data=payload, timeout=15)
        if c_res.status_code in [200, 201]:
            new_id = c_res.json().get("id")
            print(f"✨ Created new Meta Custom Audience: '{audience_name}' [ID: {new_id}]")
            return new_id
    except Exception as e:
        print(f"⚠️ Error getting/creating Custom Audience '{audience_name}': {e}")
    return None

def push_users_to_custom_audience(audience_id, email_list):
    if not audience_id or not email_list:
        return 0

    hashed_emails = [hash_email(e) for e in email_list if "@" in e]
    if not hashed_emails:
        return 0

    url = f"https://graph.facebook.com/v19.0/{audience_id}/users"
    payload = {
        "payload": json.dumps({
            "schema": ["EMAIL"],
            "data": [[h] for h in hashed_emails]
        }),
        "access_token": META_ACCESS_TOKEN
    }

    try:
        res = requests.post(url, data=payload, timeout=15)
        if res.status_code in [200, 201]:
            num_received = res.json().get("num_received", len(hashed_emails))
            print(f"✅ Successfully synced {num_received} hashed email(s) to Meta Custom Audience [ID: {audience_id}]")
            return num_received
        else:
            print(f"⚠️ Meta Custom Audience Sync Response: {res.text}")
    except Exception as e:
        print(f"❌ Exception syncing to Meta Custom Audience: {e}")
    return 0

def fetch_purchaser_emails():
    emails = set()
    # Stripe Purchasers
    if stripe.api_key:
        try:
            sessions = stripe.checkout.Session.list(limit=100)
            for s in sessions.data:
                if s.payment_status == "paid":
                    e = (s.customer_details and s.customer_details.email) or s.customer_email
                    if e:
                        emails.add(e.strip().lower())
        except Exception as e:
            print(f"⚠️ Stripe purchaser fetch notice: {e}")

    # Lemon Squeezy Purchasers
    if LEMONSQUEEZY_API_KEY and LEMONSQUEEZY_STORE_ID:
        headers = {"Authorization": f"Bearer {LEMONSQUEEZY_API_KEY}", "Accept": "application/vnd.api+json", "User-Agent": "Mozilla/5.0"}
        try:
            url = f"https://api.lemonsqueezy.com/v1/orders?filter[store_id]={LEMONSQUEEZY_STORE_ID}"
            res = requests.get(url, headers=headers, timeout=10)
            if res.status_code == 200:
                for item in res.json().get("data", []):
                    if item.get("attributes", {}).get("status") == "paid":
                        e = item.get("attributes", {}).get("user_email")
                        if e:
                            emails.add(e.strip().lower())
        except Exception as e:
            print(f"⚠️ Lemon Squeezy purchaser fetch notice: {e}")

    return list(emails)

def sync_meta_audiences():
    print("======================================================================")
    print("      META CUSTOM AUDIENCE & LOOKALIKE AUTOMATED SYNC ENGINE")
    print("======================================================================\n")

    if not META_ACCESS_TOKEN:
        print("❌ Error: META_ACCESS_TOKEN / META_PAGE_ACCESS_TOKEN missing in .env")
        return

    # 1. Sync Purchasers (Exclusion & Lookalike seed)
    purchasers = fetch_purchaser_emails()
    print(f"💳 Found {len(purchasers)} verified storefront purchaser email(s).")
    
    if purchasers:
        purchasers_aud_id = get_or_create_custom_audience("VIP Pass & Beat Purchasers (Auto-Sync)", "Verified Storefront Buyers for Exclusions & Lookalikes")
        if purchasers_aud_id:
            push_users_to_custom_audience(purchasers_aud_id, purchasers)

    print("\n✨ Meta Custom Audience & Lookalike Sync Cycle Completed!")

if __name__ == "__main__":
    sync_meta_audiences()
