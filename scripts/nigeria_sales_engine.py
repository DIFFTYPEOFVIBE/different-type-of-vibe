#!/usr/bin/env python3
import os, sys, json, subprocess, webbrowser
from datetime import datetime

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TRACKER_FILE = os.path.join(BASE_DIR, "scripts", "nigerian_leads_tracker.json")
WHATSAPP_NUM = "17577150140"

def copy_to_clipboard(text):
    try:
        cmd = f'Set-Clipboard -Value @\'\n{text}\n\'@'
        subprocess.run(['powershell', '-NoProfile', '-Command', cmd], input=text.encode('utf-8'), check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        return True
    except Exception:
        try:
            p = subprocess.Popen(['clip'], stdin=subprocess.PIPE)
            p.communicate(input=text.encode('utf-8'))
            return True
        except Exception:
            return False

def print_box(title, content):
    print("\n" + "="*80)
    print(f"👉 {title.upper()} (COPIED TO CLIPBOARD!)")
    print("="*80)
    print(content)
    print("="*80 + "\n")

def check_meta_whatsapp_ad_performance():
    print("\n📢 META AD CAMPAIGN MONITOR: 🇳🇬 [WHATSAPP NIGERIA 2026]")
    from dotenv import load_dotenv
    import requests
    load_dotenv(os.path.join(BASE_DIR, ".env"))
    
    meta_token = os.getenv("META_ACCESS_TOKEN")
    if not meta_token:
        print("⚠️ META_ACCESS_TOKEN not found in .env")
        return
        
    campaign_ids = ["120252856225260624", "120253713892310750"]
    for cid in campaign_ids:
        try:
            url = f"https://graph.facebook.com/v20.0/{cid}"
            params = {
                'access_token': meta_token,
                'fields': 'name,status,effective_status,adsets{name,status,effective_status,ads{name,status,effective_status}}'
            }
            res = requests.get(url, params=params)
            if res.status_code == 200:
                c = res.json()
                print(f"   [✓] Campaign: '{c.get('name')}' [ID: {cid}]")
                print(f"       Status: {c.get('status')} | Effective: {c.get('effective_status')}")
                for adset in c.get('adsets', {}).get('data', []):
                    print(f"       ├─ 🎯 AdSet: {adset.get('name')} (Status: {adset.get('status')})")
                    for ad in adset.get('ads', {}).get('data', []):
                        print(f"       │   └─ 🎬 Ad: {ad.get('name')} (Status: {ad.get('effective_status')})")
            else:
                print(f"   ℹ️ Meta API Note ({res.status_code}): Session token check required.")
        except Exception as e:
            print(f"   [!] Meta API note: {e}")

def whatsapp_inbound_auto_responder():
    print("\n🤖 WHATSAPP AUTOMATED INBOUND RESPONDER (Select Inquiry Type)")
    print("1. Free 3 Beats Starter Pack Request")
    print("2. Paystack NGN Local Currency & Pricing Options")
    print("3. Custom Afrobeats / Exclusive Production Inquiry")
    print("4. Streaming Clearance & License Terms Summary")
    
    sub_choice = input("Select Inquiry Type (1-4): ").strip()
    
    if sub_choice == '1':
        reply = (
            "Yo! Thanks for tapping in with Onzieb / Different Type of Vibe 🎹🔥\n\n"
            "Here is instant access to your 3 Free Beats Starter Pack (Melodic, Trap, and Chill vibes):\n"
            "🎁 Direct Dropbox Download : https://www.dropbox.com/scl/fo/zb9g27t6yq1md5ezxjmyj/AJ_lLNhOGcsGazYu4Rd9MxA?rlkey=24sdbulhqybwd8wlp6ghgqzpf&st=i4hjurif&dl=1\n"
            "🌐 Web Storefront          : https://differenttypeofvibe.com/free-beats\n\n"
            "Take your time listening! What genre or style are you cooking up right now? (Afrobeats / Street Pop / Drill / R&B)"
        )
    elif sub_choice == '2':
        reply = (
            "🇳🇬 LOCAL NAIRA (NGN) LEASE & SUBSCRIPTION OPTIONS\n"
            "====================================================\n"
            "🎟️ Standard Pass ($9.99/mo ~ ₦15,000/mo) : 5 Untagged WAV Leases/mo\n"
            "👉 https://buy.stripe.com/bJe5kCgKebCq3Ipg8vcZa2p\n\n"
            "🚀 Pro Creator    ($24.99/mo ~ ₦38,000/mo) : UNLIMITED WAV Downloads + STEMS\n"
            "👉 https://buy.stripe.com/14A00ifGadKyceV6xVcZa2q\n\n"
            "🔥 Annual VIP     ($89.99/yr ~ ₦135,000/yr) : 60 WAV Leases Upfront for 1 Year\n"
            "👉 https://buy.stripe.com/4gMeVc2To5e2en3e0ncZa2r\n"
            "====================================================\n\n"
            "Let me know which pass works best for you so I can send your clean WAV download immediately! 🚀"
        )
    elif sub_choice == '3':
        reply = (
            "Yo! Onzieb here. I'd love to produce an exclusive custom beat for your project! 🎹🔥\n\n"
            "To help me craft the exact bounce you need, reply back with:\n"
            "1. Reference track link (YouTube/SoundCloud/Spotify)\n"
            "2. Target BPM & Vibe (Afrobeats / Amapiano / Street Pop / Drill)\n"
            "3. Your target release date & budget\n\n"
            "Let's cook up something crazy! 🚀"
        )
    elif sub_choice == '4':
        reply = (
            "📜 UNTAGGED BEAT LICENSE & CLEARANCE SUMMARY\n"
            "====================================================\n"
            "• 100% Untagged Audio: Zero producer voiceovers on lease downloads.\n"
            "• Spotify & Apple Music Ready: Fully cleared for commercial streaming.\n"
            "• Keep Licenses Forever: All released songs remain licensed in perpetuity.\n"
            "• Instant Delivery: Audio files delivered to your inbox & WhatsApp immediately upon payment.\n"
            "===================================================="
        )
    else:
        return

    copy_to_clipboard(reply)
    print_box("Automated WhatsApp Inbound Reply", reply)
    print("\n📱 CREATE CUSTOM 1-CLICK WHATSAPP CHAT LINK")
    custom_text = input("Enter pre-filled artist message (e.g. Yo Onzieb! I want 5 WAV leases for ₦15,000): ").strip()
    if not custom_text:
        custom_text = "Yo Onzieb! I want to license beats for my next project"
        
    encoded_msg = custom_text.replace(' ', '%20').replace('\n', '%0A')
    wa_link = f"https://wa.me/{WHATSAPP_NUM}?text={encoded_msg}"
    
    copy_to_clipboard(wa_link)
    print_box("1-Click Direct WhatsApp Chat Link", wa_link)
    print("💡 Share this link anywhere (Instagram Bio, Audiomack, DMs). When artists click it, WhatsApp opens directly to your phone!")

def whatsapp_sales_pitch():
    print("\n💬 WHATSAPP INSTANT SALES & OFFER GENERATOR")
    artist_name = input("Enter Artist Name / Alias: ").strip() or "fam"
    beat_title = input("Enter Beat Title (e.g. Level Up / Deep End): ").strip() or "the instrumental"
    
    msg = (
        f"Yo {artist_name}! Onzieb here from Different Type of Vibe 🎹🔥\n\n"
        f"Thanks for reaching out about '{beat_title}'. I've got the 100% untagged 24-bit WAV file and commercial license ready for you!\n\n"
        "💳 Instant Checkout Options:\n"
        " • Paystack NGN (Local Debit Card / Transfer / USSD) : https://buy.stripe.com/bJe5kCgKebCq3Ipg8vcZa2p\n"
        " • Stripe USD (International Card)                  : https://buy.stripe.com/bJe5kCgKebCq3Ipg8vcZa2p\n\n"
        "🎟️ VIP Pass Offer ($9.99/mo ~ ₦15,000/mo): Get 5 Untagged WAV Leases every month for Spotify/Apple Music releases.\n\n"
        "Let me know when you're ready so I can send your clean WAV download immediately! 🚀"
    )
    copy_to_clipboard(msg)
    print_box(f"WhatsApp Offer for {artist_name}", msg)
    
    wa_url = f"https://wa.me/{WHATSAPP_NUM}?text={msg.replace(' ', '%20').replace('\n', '%0A')}"
    open_browser = input("Open WhatsApp Web chat? (y/n): ").strip().lower()
    if open_browser == 'y':
        webbrowser.open(wa_url)


def audiomack_description_generator():
    print("\n🎧 AUDIOMACK TRACK DESCRIPTION & META LINK GENERATOR")
    beat_title = input("Beat Title: ").strip() or "Afrobeats Instrumental"
    bpm = input("BPM: ").strip() or "112"
    key = input("Key: ").strip() or "Amin"
    style = input("Style/Vibe (Afrobeats / Amapiano / Street Pop / Drill): ").strip() or "Afrobeats"
    
    desc = (
        f"🔥 '{beat_title}' — Official {style} Instrumental ({bpm} BPM • {key})\n"
        f"Produced by Onzieb | Different Type of Vibe\n\n"
        "🎧 STREAM & DOWNLOAD 3 FREE BEATS:\n"
        "👉 https://differenttypeofvibe.com/free-beats\n\n"
        "💬 INSTANT WHATSAPP LICENSING CHAT:\n"
        f"👉 https://wa.me/{WHATSAPP_NUM}?text=Yo%20Onzieb!%20I'm%20interested%20in%20licensing%20'{beat_title.replace(' ', '%20')}'\n\n"
        "🎟️ UNTAGGED WAV VIP PASS ($9.99/mo ~ ₦15,000/mo):\n"
        "👉 https://buy.stripe.com/bJe5kCgKebCq3Ipg8vcZa2p\n\n"
        "#Afrobeats #Amapiano #StreetPop #BeatStore #Onzieb #NigeriaMusic"
    )
    copy_to_clipboard(desc)
    print_box(f"Audiomack Description for '{beat_title}'", desc)
    webbrowser.open("https://audiomack.com/dashboard")

def afrobeats_dm_pitcher():
    print("\n🇳🇬 AFROBEATS & AMAPIANO DM PITCHER (Instagram / Audiomack / TikTok)")
    artist_name = input("Artist First Name: ").strip() or "fam"
    platform = input("Platform (Instagram / Audiomack / TikTok): ").strip() or "Instagram"
    vibe = input("Vibe (Afrobeats / Amapiano / Street Pop / Gospel): ").strip().lower() or "afrobeats"
    
    pitch = (
        f"Yo {artist_name}, saw your music on {platform}—vocal energy and afro bounce are crazy! 🇳🇬🔥\n\n"
        f"I'm Onzieb from Different Type of Vibe. I put together a starter pack of 3 free {vibe} instrumentals ready for vocals.\n\n"
        "🎁 Grab your free beats here:\n"
        "👉 https://differenttypeofvibe.com/free-beats\n\n"
        "💬 Chat on WhatsApp:\n"
        f"👉 https://wa.me/{WHATSAPP_NUM}\n\n"
        "Let's cook up something crazy! 🎹🚀"
    )
    copy_to_clipboard(pitch)
    print_box(f"DM Pitch for {artist_name}", pitch)

def paystack_info_generator():
    print("\n💳 PAYSTACK NGN & LOCAL CURRENCY INFO GENERATOR")
    info = (
        "🇳🇬 LOCAL NIGERIAN NAIRA (NGN) PAYMENT OPTIONS\n"
        "====================================================\n"
        "🎟️ Standard VIP Pass ($9.99/mo ~ ₦15,000/mo) :\n"
        "👉 https://buy.stripe.com/bJe5kCgKebCq3Ipg8vcZa2p\n\n"
        "🚀 Pro Creator Pass  ($24.99/mo ~ ₦38,000/mo) :\n"
        "👉 https://buy.stripe.com/14A00ifGadKyceV6xVcZa2q\n\n"
        "🔥 Annual VIP Pass   ($89.99/yr ~ ₦135,000/yr) :\n"
        "👉 https://buy.stripe.com/4gMeVc2To5e2en3e0ncZa2r\n\n"
        "💬 Instant WhatsApp Order Chat:\n"
        f"👉 https://wa.me/{WHATSAPP_NUM}\n"
        "===================================================="
    )
    copy_to_clipboard(info)
    print_box("Paystack NGN & WhatsApp Info", info)


def log_lead():
    print("\n📝 LOG NIGERIAN ARTIST LEAD")
    name = input("Artist Name: ").strip()
    city = input("Location/City (Lagos / Abuja / PH / Ibadan / Other): ").strip() or "Nigeria"
    handle = input("Social Handle / Phone: ").strip()
    vibe = input("Music Vibe (Afrobeats / Amapiano / Drill / Gospel): ").strip() or "Afrobeats"
    status = input("Status (New / Contacted / In Negotiation / Closed Subscriber): ").strip() or "New"
    
    tracker = []
    if os.path.exists(TRACKER_FILE):
        try:
            with open(TRACKER_FILE, "r", encoding="utf-8") as f:
                tracker = json.load(f)
        except Exception:
            tracker = []
            
    lead = {
        "id": len(tracker) + 1,
        "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "name": name,
        "city": city,
        "handle": handle,
        "vibe": vibe,
        "status": status
    }
    tracker.append(lead)
    with open(TRACKER_FILE, "w", encoding="utf-8") as f:
        json.dump(tracker, f, indent=2)
        
    print(f"\n✅ Lead Logged Successfully! (Lead ID #{lead['id']})")

def view_leads():
    if not os.path.exists(TRACKER_FILE):
        print("\n📭 No Nigerian leads logged yet.")
        return
    try:
        with open(TRACKER_FILE, "r", encoding="utf-8") as f:
            tracker = json.load(f)
        print(f"\n📋 NIGERIAN LEADS TRACKER ({len(tracker)} total)\n" + "-"*80)
        for l in tracker:
            print(f"[{l['date']}] #{l['id']} {l['name']} ({l['city']}) | Vibe: {l['vibe']} | Status: {l['status']}")
        print("-"*80 + "\n")
    except Exception as e:
        print(f"⚠️ Error reading tracker: {e}")

def main():
    while True:
        print("\n======================================================================")
        print("    🇳🇬 DIFFERENT TYPE OF VIBE — NIGERIAN SALES & REVENUE ENGINE 🇳🇬")
        print("======================================================================")
        print("1. 🤖 WhatsApp Automated Inbound Responder (Select Inquiry & 1-Click Reply)")
        print("2. 📢 Meta Ad Campaign Monitor (🇳🇬 WHATSAPP NIGERIA 2026)")
        print("3. 📱 Create Custom 1-Click WhatsApp Direct Chat Link")
        print("4. 💬 WhatsApp Instant Sales & Offer Generator (1-Click Chat)")
        print("5. 🎧 Audiomack Track Description & Meta Link Generator")
        print("6. 🇳🇬 Afrobeats, Amapiano, Street Pop & Gospel DM Pitcher")
        print("7. 💳 Paystack NGN Local Currency & Transfer Info Generator")
        print("8. 📝 Log Nigerian Artist Lead")
        print("9. 📋 View Nigerian Leads Tracker Log")
        print("10. Exit")
        print("======================================================================")
        
        choice = input("Select Option (1-10): ").strip()
        if choice == '1': whatsapp_inbound_auto_responder()
        elif choice == '2': check_meta_whatsapp_ad_performance()
        elif choice == '3': custom_whatsapp_link_generator()
        elif choice == '4': whatsapp_sales_pitch()
        elif choice == '5': audiomack_description_generator()
        elif choice == '6': afrobeats_dm_pitcher()
        elif choice == '7': paystack_info_generator()
        elif choice == '8': log_lead()
        elif choice == '9': view_leads()
        elif choice == '10':
            print("\n👋 Exiting Nigerian Sales Engine. Let's close some deals! 🚀\n")
            break
        else:
            print("⚠️ Invalid option! Select 1-10.")

if __name__ == "__main__":
    main()
