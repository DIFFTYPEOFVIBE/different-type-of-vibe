import os
from facebook_business.api import FacebookAdsApi
from facebook_business.adobjects.adaccount import AdAccount
from facebook_business.adobjects.campaign import Campaign

# 1. Initialize Meta API Credentials
ACCESS_TOKEN = os.getenv("META_PAGE_ACCESS_TOKEN", "YOUR_NEW_ACCESS_TOKEN")
RAW_ACCOUNT_ID = os.getenv("META_AD_ACCOUNT_ID", "605173171191750").replace("act_", "")
AD_ACCOUNT_ID = f"act_{RAW_ACCOUNT_ID}"

FacebookAdsApi.init(access_token=ACCESS_TOKEN)

def inspect_campaigns():
    account = AdAccount(AD_ACCOUNT_ID)
    
    fields = [
        Campaign.Field.id,
        Campaign.Field.name,
        Campaign.Field.status,
        Campaign.Field.effective_status,
        Campaign.Field.daily_budget,
        Campaign.Field.created_time,
    ]

    print(f"\n--- Inspecting Campaigns for Account: {AD_ACCOUNT_ID} ---")
    try:
        campaigns = account.get_campaigns(fields=fields)

        if not campaigns:
            print("No campaigns found in this account.")
            return

        for campaign in campaigns:
            daily_budget = float(campaign.get('daily_budget', 0)) / 100 if 'daily_budget' in campaign else "N/A"
            effective_status = campaign.get('effective_status', 'UNKNOWN')
            
            indicator = "🟢 ACTIVE" if effective_status == "ACTIVE" else "🟡 IN REVIEW / PAUSED" if effective_status in ["IN_PROCESS", "PAUSED"] else "🔴 INACTIVE"

            print(f"\nCampaign: {campaign.get('name')}")
            print(f" ├─ ID:               {campaign.get('id')}")
            print(f" ├─ Configured State: {campaign.get('status')}")
            print(f" ├─ Live Status:      {effective_status} {indicator}")
            print(f" ├─ Daily Budget:     ${daily_budget}")
            print(f" └─ Created At:       {campaign.get('created_time')}")

    except Exception as e:
        print(f"❌ Error fetching campaigns: {e}")

if __name__ == "__main__":
    inspect_campaigns()