import os
from facebook_business.api import FacebookAdsApi
from facebook_business.adobjects.adaccount import AdAccount
from facebook_business.adobjects.adcreative import AdCreative
from facebook_business.adobjects.ad import Ad

# 1. Credentials
ACCESS_TOKEN = os.getenv("META_PAGE_ACCESS_TOKEN", "YOUR_ACCESS_TOKEN")
RAW_ACCOUNT_ID = os.getenv("META_AD_ACCOUNT_ID", "605173171191750").replace("act_", "")
AD_ACCOUNT_ID = f"act_{RAW_ACCOUNT_ID}"
PAGE_ID = os.getenv("META_PAGE_ID", "YOUR_FACEBOOK_PAGE_ID")  # Your Different Type of Vibe Page ID

# List of AdSet IDs output by setup_fb_campaign.py
ADSET_IDS = [
    "YOUR_ADSET_ID_1",  # e.g., '120210000000000000'
    "YOUR_ADSET_ID_2",
]

FacebookAdsApi.init(access_token=ACCESS_TOKEN)

def create_ad_for_adset(adset_id):
    account = AdAccount(AD_ACCOUNT_ID)
    
    # Step A: Create the Ad Creative
    creative_params = {
        'name': 'Free 3 Beat Pack - Creative v1',
        'object_story_spec': {
            'page_id': PAGE_ID,
            'link_data': {
                'link': 'https://differenttypeofvibe.com',
                'message': '🔥 Free 3 Beat Pack + Untagged Commercial License! Download instantly for your next project.',
                'name': 'Download 3 Free Studio Beats',
                'description': 'High quality, untagged WAV/MP3 downloads. Ready for instant recording.',
                'call_to_action': {
                    'type': 'DOWNLOAD',
                    'value': {
                        'link': 'https://differenttypeofvibe.com'
                    }
                }
            }
        }
    }
    
    print(f"Creating Creative for Ad Set {adset_id}...")
    creative = account.create_ad_creative(params=creative_params)
    creative_id = creative['id']
    print(f"✅ Creative Created: {creative_id}")

    # Step B: Attach the Creative to the Ad Set via an Ad object
    ad_params = {
        'name': 'Free 3 Beats Ad - Lead Magnet',
        'adset_id': adset_id,
        'creative': {'creative_id': creative_id},
        'status': 'PAUSED',  # Keep paused until ready
    }

    print(f"Attaching Ad to Ad Set {adset_id}...")
    new_ad = account.create_ad(params=ad_params)
    print(f"🚀 Ad Successfully Created! ID: {new_ad['id']}")

if __name__ == "__main__":
    for adset_id in ADSET_IDS:
        try:
            create_ad_for_adset(adset_id)
        except Exception as e:
            print(f"❌ Error creating ad for {adset_id}: {e}")