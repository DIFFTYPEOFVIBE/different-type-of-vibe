import os, csv, sys
from datetime import datetime

LEADS_FILE = os.path.join(os.path.dirname(__file__), 'outreach_leads.csv')

TEMPLATES = {
    'melodic': "Yo {name}, saw your track '{song}' on {plat}—melodies are crazy. I run Different Type of Vibe & put together 3 free melodic beats that fit your style perfectly. Grab them here: https://differenttypeofvibe.com/downloads/free-pack-01 No strings attached!",
    'dark': "Yo {name}, heard your track '{song}' on {plat} and that dark atmosphere was crazy. I run Different Type of Vibe and have 3 heavy dark trap beats that fit your style. Grab them un-tagged for free here: https://differenttypeofvibe.com/downloads/free-pack-01",
    'aggressive': "Yo {name}, your energy on '{song}' is absolute madness. I run Different Type of Vibe and put together 3 aggressive, hard trap beats that would suit your delivery. Grab them un-tagged free: https://differenttypeofvibe.com/downloads/free-pack-01",
    'chill': "Hey {name}, vibing to your song '{song}' on {plat}—laids back flow is super smooth. I run Different Type of Vibe & wanted to send 3 chill/ambient beats your way free. No catch, grab them here: https://differenttypeofvibe.com/downloads/free-pack-01",
    'general': "Yo {name}, saw your page on {plat} and your flow is clean. I run Different Type of Vibe and put together 3 free high-quality beats for demoing. No catch, grab them here: https://differenttypeofvibe.com/downloads/free-pack-01 Let's cook up!"
}

def init_db():
    if not os.path.exists(LEADS_FILE):
        with open(LEADS_FILE, 'w', newline='', encoding='utf-8') as f:
            csv.writer(f).writerow(['ID', 'Date', 'Name', 'Platform', 'Username', 'Song', 'Vibe', 'Status'])

def read_leads():
    init_db()
    with open(LEADS_FILE, 'r', newline='', encoding='utf-8') as f:
        return list(csv.DictReader(f))

def save_leads(leads):
    with open(LEADS_FILE, 'w', newline='', encoding='utf-8') as f:
        w = csv.writer(f)
        w.writerow(['ID', 'Date', 'Name', 'Platform', 'Username', 'Song', 'Vibe', 'Status'])
        for l in leads: w.writerow([l['ID'], l['Date'], l['Name'], l['Platform'], l['Username'], l['Song'], l['Vibe'], l['Status']])

def add_lead(name, platform, username, song, vibe):
    leads = read_leads()
    lead = {
        'ID': str(len(leads) + 1), 'Date': datetime.now().strftime('%Y-%m-%d'),
        'Name': name, 'Platform': platform, 'Username': username, 'Song': song,
        'Vibe': vibe.lower() if vibe in TEMPLATES else 'general', 'Status': 'To Contact'
    }
    leads.append(lead)
    save_leads(leads)
    print(f"\n✅ Added lead #{lead['ID']}: {name} ({username})")
    print_dm(lead)

def print_dm(lead):
    template = TEMPLATES.get(lead['Vibe'], TEMPLATES['general'])
    dm = template.format(name=lead['Name'], song=lead['Song'], plat=lead['Platform'].capitalize())
    print("\n" + "="*80 + f"\n👉 COPY-PASTE DM FOR {lead['Name'].upper()} ({lead['Username']})\n" + "="*80 + f"\n{dm}\n" + "="*80)

def list_leads():
    leads = read_leads()
    if not leads: print("\n📭 No leads in pipeline."); return
    print("\n" + "="*80 + f"\n{'ID':<4} | {'Name':<12} | {'Username':<12} | {'Platform':<8} | {'Vibe':<10} | {'Status':<12}\n" + "="*80)
    for l in leads: print(f"{l['ID']:<4} | {l['Name'][:12]:<12} | {l['Username'][:12]:<12} | {l['Platform'][:8]:<8} | {l['Vibe'][:10]:<10} | {l['Status']:<12}")
    print("="*80)

def update_status(lead_id, status):
    leads = read_leads()
    for l in leads:
        if l['ID'] == lead_id:
            l['Status'] = status
            save_leads(leads)
            print(f"\n✅ Lead #{lead_id} updated to '{status}'")
            return
    print("\n❌ Lead not found.")

def main():
    init_db()
    if len(sys.argv) > 1:
        action = sys.argv[1]
        if action == 'list': list_leads()
        elif action == 'dm' and len(sys.argv) > 2:
            lead = next((l for l in read_leads() if l['ID'] == sys.argv[2]), None)
            if lead: print_dm(lead)
            else: print("❌ Lead not found.")
        elif action == 'status' and len(sys.argv) > 3: update_status(sys.argv[2], sys.argv[3])
        return

    while True:
        print("\n🔥 VIBE STORE OUTREACH MANAGER 🔥\n1. Add Lead\n2. List Leads\n3. Get DM Copy\n4. Update Status\n5. Exit")
        c = input("Option (1-5): ").strip()
        if c == '1':
            name = input("Artist First Name: ").strip()
            username = input("Username: ").strip()
            plat = input("Platform (TikTok/IG/Spotify): ").strip()
            song = input("Song Name: ").strip()
            vibe = input("Vibe (melodic/dark/aggressive/chill/general): ").strip()
            if name and username and plat and song: add_lead(name, plat, username, song, vibe)
            else: print("❌ Missing fields.")
        elif c == '2': list_leads()
        elif c == '3':
            lead = next((l for l in read_leads() if l['ID'] == input("ID: ").strip()), None)
            if lead: print_dm(lead)
            else: print("❌ Lead not found.")
        elif c == '4': update_status(input("ID: ").strip(), input("New Status: ").strip())
        elif c == '5': break

if __name__ == '__main__': main()
