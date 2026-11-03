import os
import time
import requests
from dotenv import load_dotenv

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
load_dotenv(os.path.join(BASE_DIR, ".env"))

PAGE_ID = os.getenv("META_PAGE_ID", "100112494667444")
AD_ACCOUNT_IDS = ["act_303230040458733", "act_605173171191750"]
STORE_LINK = "https://www.differenttypeofvibe.com"

REPLY_MESSAGE = (
    "Hey! 🎵 Thanks for checking out our beats! Here is your Free 3 Untagged Beats Starter Pack "
    "and 30% OFF Welcome Code (WELCOME30): https://www.differenttypeofvibe.com 🎧 Claim yours now!"
)

REPLIED_COMMENT_IDS = set()

def get_page_access_token(user_token):
    """Automatically exchange user token for official Page Access Token."""
    env_page_token = os.getenv("META_PAGE_ACCESS_TOKEN")
    if env_page_token:
        return env_page_token

    try:
        res = requests.get(
            f"https://graph.facebook.com/v20.0/{PAGE_ID}",
            params={"fields": "access_token", "access_token": user_token},
            timeout=10
        )
        if res.status_code == 200:
            page_token = res.json().get("access_token")
            if page_token:
                return page_token
    except Exception as e:
        print(f"⚠️ Page Token Exchange Warning: {e}")
    return user_token

def auto_reply_to_ad_comments():
    print(f"[{time.strftime('%Y-%m-%d %H:%M:%S')}] 📡 Scanning Active Facebook & Instagram Ad Post Comments...")

    user_token = os.getenv("META_ACCESS_TOKEN")
    if not user_token:
        print("❌ Error: META_ACCESS_TOKEN is missing in .env")
        return

    page_token = get_page_access_token(user_token)

    story_ids = set()

    # 1. Fetch active ad creatives to get exact story/post IDs
    for acc_id in AD_ACCOUNT_IDS:
        try:
            res = requests.get(
                f"https://graph.facebook.com/v20.0/{acc_id}/ads",
                params={"fields": "id,name,effective_status,creative{id,object_story_id}", "access_token": user_token},
                timeout=15
            )
            if res.status_code == 200:
                ads = res.json().get("data", [])
                for ad in ads:
                    story_id = ad.get("creative", {}).get("object_story_id")
                    if story_id:
                        story_ids.add(story_id)
        except Exception as e:
            print(f"   [!] Error fetching ads for {acc_id}: {e}")

    # 2. Also fetch Page posts
    try:
        page_res = requests.get(
            f"https://graph.facebook.com/v20.0/{PAGE_ID}/posts",
            params={"fields": "id", "access_token": page_token},
            timeout=15
        )
        if page_res.status_code == 200:
            posts = page_res.json().get("data", [])
            for p in posts:
                story_ids.add(p.get("id"))
    except Exception:
        pass

    print(f"📡 Monitoring {len(story_ids)} active ad post story targets for 'BEATS' comments...")

    replied_count = 0
    for s_id in story_ids:
        try:
            comments_res = requests.get(
                f"https://graph.facebook.com/v20.0/{s_id}/comments",
                params={"access_token": page_token},
                timeout=10
            )
            if comments_res.status_code == 200:
                comments = comments_res.json().get("data", [])
                for comment in comments:
                    comment_id = comment.get("id")
                    comment_msg = comment.get("message", "").lower()
                    sender_name = comment.get("from", {}).get("name", "Artist")

                    if comment_id in REPLIED_COMMENT_IDS:
                        continue

                    if any(kw in comment_msg for kw in ["beat", "free", "link", "in", "dm", "send", "price", "pack"]):
                        print(f"💬 New comment from {sender_name}: '{comment_msg}' [ID: {comment_id}]")

                        reply_url = f"https://graph.facebook.com/v20.0/{comment_id}/comments"
                        reply_res = requests.post(reply_url, data={
                            "message": f"Hey {sender_name}! {REPLY_MESSAGE}",
                            "access_token": page_token
                        }, timeout=10)

                        REPLIED_COMMENT_IDS.add(comment_id)

                        if reply_res.status_code in [200, 201]:
                            print(f"   [✓] Successfully replied to {sender_name} with storefront link!")
                            replied_count += 1
                        else:
                            print(f"   [!] Reply response: {reply_res.text}")
        except Exception:
            pass

    if replied_count > 0:
        print(f"✅ Replied to {replied_count} new ad comment(s)!")
    else:
        print("💤 Scan completed successfully. Waiting for new unreplied ad comments.")

def run_continuous_loop(interval_seconds=300):
    print("======================================================================")
    print("    24/7 INSTANT AD COMMENT AUTO-RESPONDER (Checking every 5 mins)")
    print("======================================================================\n")
    while True:
        load_dotenv(os.path.join(BASE_DIR, ".env"))
        auto_reply_to_ad_comments()
        print("⏳ Waiting 5 minutes for next comment check...\n")
        time.sleep(interval_seconds)

if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument("--loop", action="store_true", help="Run continuously in a 5-minute loop")
    args = parser.parse_args()

    if args.loop:
        run_continuous_loop()
    else:
        print("======================================================================")
        print("    24/7 INSTANT AD COMMENT AUTO-RESPONDER (Single Scan Cycle)")
        print("======================================================================\n")
        auto_reply_to_ad_comments()


