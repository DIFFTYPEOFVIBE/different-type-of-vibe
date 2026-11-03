import os
import sys
import requests
import re

# Base directory setup
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.append(BASE_DIR)

from dotenv import load_dotenv
load_dotenv(os.path.join(BASE_DIR, ".env"))

RESEND_API_KEY = os.getenv("RESEND_API_KEY")

# Exact, high-accuracy name mapping based on their email handles
EXACT_NAME_MAP = {
    "jchapter37@gmail.com": ("Jchapter", "Artist"),
    "itzwoozyentertainment@gmail.com": ("Woozy", "Entertainment"),
    "antprockafelon@gmail.com": ("Antp", "Rockafelon"),
    "mr.ck357@gmail.com": ("CK", "Artist"),
    "bearprints999@gmail.com": ("Bearprints", "Artist"),
    "joelbthomasmusic@gmail.com": ("Joel", "Thomas"),
    "shybusy424@gmail.com": ("Shybusy", "Artist"),
    "sbarna0@hotmail.com": ("Sbarna", "Artist"),
    "birdiebuchanan@hotmail.com": ("Birdie", "Buchanan"),
    "loverboy_clarence@yahoo.com": ("Clarence", "Artist"),
    "junderwood1187@gmail.com": ("Underwood", "Artist"),
    "johntyayo20@gmail.com": ("Johntyayo", "Artist"),
    "hydropuck@gmail.com": ("Hydro", "Puck"),
    "kendrick.lawrence25@gmail.com": ("Kendrick", "Lawrence"),
    "ryan.degeorge95@gmail.com": ("Ryan", "DeGeorge"),
    "jeremiahmilo1998@gmail.com": ("Jeremiah", "Milo"),
    "gregst94@icloud.com": ("Greg", "St"),
    "jeffgworge2000@gmail.com": ("Jeff", "George"),
    "naybluemonique@gmail.com": ("Nayblue", "Monique"),
    "teddyxtune@gmail.com": ("Teddy", "Tune"),
    "cuhzloccthablue@gmail.com": ("Cuhzlocc", "Thablue"),
    "ace90bdby@gmail.com": ("Ace", "Bdby"),
    "kirkrazykirk@gmail.com": ("Kirk", "Razykirk"),
    "jokpoplazer@gmail.com": ("Jokpoplazer", "Artist"),
    "afields_1@yahoo.com": ("Afields", "Artist"),
    "sedrickgamble3@gmail.com": ("Sedrick", "Gamble"),
    "harper014.jj@gmail.com": ("Harper", "Jj"),
    "anthonysmithjr@aol.com": ("Anthony", "Smith Jr"),
    "marquese1804@gmail.com": ("Marquese", "Artist"),
    "officialwest90@gmail.com": ("West", "Artist"),
    "officialwest90@gmsil.com": ("West", "Artist"),
    "lamont_2420002@yahoo.com": ("Lamont", "Artist"),
    "casioroland65@gmail.com": ("Casio", "Roland"),
    "donellbandy7@gmail.com": ("Donell", "Bandy")
}

PLACEHOLDER_NAMES = {"there", "steve", "none", "null", "undefined", "-", "hey there", "hi there", "there!", "there.", "there,"}

def is_placeholder_name(name_str):
    """Returns True if the name is a placeholder such as 'there', 'steve', empty, or similar."""
    if not name_str:
        return True
    cleaned = name_str.strip().lower()
    if cleaned in PLACEHOLDER_NAMES:
        return True
    if re.fullmatch(r"(hey\s+|hi\s+)?there[!.?,]?", cleaned):
        return True
    return False

def extract_name_from_email(email):
    """Fallback parser to extract clean First/Last names from any email handle."""
    if not email or "@" not in email:
        return "Artist", ""

    username = email.split("@")[0]
    # Remove numbers
    name_part = "".join([c for c in username if not c.isdigit()])
    # Split by dots, underscores or dashes
    parts = [p for p in re.split(r"[._-]", name_part) if p]

    if len(parts) > 1:
        if parts[0].lower() in ["loverboy", "prod", "official", "dj", "mc", "the"]:
            first = parts[1].capitalize()
            last = parts[0].capitalize()
        else:
            first = parts[0].capitalize()
            last = parts[1].capitalize()
        if is_placeholder_name(first):
            first = parts[1].capitalize() if len(parts) > 1 else "Artist"
        if is_placeholder_name(last) or last.strip() in ["-", "Wozniak", "wozniak"]:
            last = ""
        return first, last
    elif len(parts) == 1:
        part = parts[0]
        # Common names detection
        for common_name in ["birdie", "jeremiah", "nayblue", "teddy", "cuhzlocc", "kendrick", "johntyayo", "clarence"]:
            if part.lower().startswith(common_name):
                first = common_name.capitalize()
                remaining = part[len(common_name):].capitalize()
                last = remaining if remaining and remaining != "-" and not is_placeholder_name(remaining) else ""
                return first, last
        if is_placeholder_name(part):
            return "Artist", ""
        return part.capitalize(), ""
    return "Artist", ""

def main():
    if not RESEND_API_KEY:
        print("❌ Error: RESEND_API_KEY is not configured in your .env file.")
        return

    headers = {
        "Authorization": f"Bearer {RESEND_API_KEY}",
        "Content-Type": "application/json"
    }

    # 1. Fetch active Audience ID
    print("📡 Connecting to Resend to fetch your Audience details...")
    try:
        res = requests.get("https://api.resend.com/audiences", headers=headers)
        if res.status_code != 200:
            print(f"❌ Failed to fetch audiences: {res.text}")
            return
        audiences = res.json().get("data", [])
        if not audiences:
            print("❌ No active audiences found.")
            return
        audience_id = audiences[0]["id"]
        audience_name = audiences[0]["name"]
        print(f"✅ Found Audience: '{audience_name}' [ID: {audience_id}]\n")
    except Exception as e:
        print(f"❌ Error fetching audience list: {e}")
        return

    # 2. Fetch all contacts inside this Audience
    print("👥 Fetching subscriber contacts from Resend...")
    try:
        url = f"https://api.resend.com/audiences/{audience_id}/contacts"
        contacts_res = requests.get(url, headers=headers)
        if contacts_res.status_code != 200:
            print(f"❌ Failed to retrieve contacts: {contacts_res.text}")
            return
        contacts = contacts_res.json().get("data", [])
    except Exception as e:
        print(f"❌ Error fetching contacts: {e}")
        return

    if not contacts:
        print("ℹ️ Your Resend audience is currently empty.")
        return

    print(f"ℹ️ Found {len(contacts)} total contacts in Resend.")

    # 3. Process and update each contact
    print("\n🛠️ Analyzing and correcting contact names...")
    updates_performed = 0
    
    for contact in contacts:
        email = contact.get("email")
        contact_id = contact.get("id")
        current_first = (contact.get("first_name") or "").strip()
        current_last = (contact.get("last_name") or "").strip()

        first_is_placeholder = is_placeholder_name(current_first)
        last_is_placeholder = current_last in ["-", "wozniak", "Wozniak"] or is_placeholder_name(current_last)

        needs_fix = first_is_placeholder or last_is_placeholder or (email in EXACT_NAME_MAP)

        if needs_fix:
            if email in EXACT_NAME_MAP:
                new_first, new_last = EXACT_NAME_MAP[email]
            else:
                new_first, new_last = extract_name_from_email(email)

            if new_last in ["-", "Wozniak", "wozniak"]:
                new_last = ""

            # Skip if current state matches target
            if current_first == new_first and (current_last == new_last or (not current_last and not new_last)):
                continue

            print(f"✍️ Updating '{email}': '{current_first}' '{current_last}' ➔ '{new_first}' '{new_last}'")
            
            # 2. PATCH the contact's name in Resend
            patch_url = f"https://api.resend.com/audiences/{audience_id}/contacts/{contact_id}"
            payload = {
                "first_name": new_first,
                "last_name": new_last
            }
            try:
                patch_res = requests.patch(patch_url, headers=headers, json=payload)
                if patch_res.status_code in [200, 201]:
                    print(f"   [✓] Successfully updated {email} in Resend!")
                    updates_performed += 1
                else:
                    print(f"   [!] Failed to update {email}: {patch_res.text}")
            except Exception as e:
                print(f"   [!] Exception updating {email}: {e}")

    print(f"\n✨ Correction complete! Updated {updates_performed} contact profiles in your Resend account.")
    print("👉 When your next nurture campaign email triggers, it will greet them with their actual first names!")

if __name__ == "__main__":
    import time
    print("======================================================================")
    print("    24/7 AUTOMATED RESEND SUBSCRIBER NAME UPDATER (Every 5 mins)")
    print("======================================================================\n")
    while True:
        main()
        print("\n⏳ Waiting 5 minutes for next subscriber name check...\n")
        time.sleep(300)
