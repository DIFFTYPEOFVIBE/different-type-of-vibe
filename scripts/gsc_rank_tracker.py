import os
import datetime
import pandas as pd
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
from googleapiclient.discovery import build

SCOPES = ['https://www.googleapis.com/auth/webmasters.readonly']
SITE_URL = 'sc-domain:differenttypeofvibe.com'  # Make sure this matches your verified property
DAYS_TO_FETCH = 90  # Increased to 90 days to capture more data
ROW_LIMIT = 100

def get_gsc_service():
    creds = None
    token_path = 'token.json'

    # Support environment variable GSC_TOKEN_JSON for GitHub Actions
    env_token = os.getenv("GSC_TOKEN_JSON")
    if env_token:
        try:
            with open(token_path, "w", encoding="utf-8") as f:
                f.write(env_token)
        except Exception as e:
            print(f"⚠️ Notice writing GSC token from env: {e}")

    if os.path.exists(token_path):
        creds = Credentials.from_authorized_user_file(token_path, SCOPES)

    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file('credentials.json', SCOPES)
            creds = flow.run_local_server(port=0)

        with open(token_path, 'w') as token_file:
            token_file.write(creds.to_json())

    return build('searchconsole', 'v1', credentials=creds)

def fetch_query_performance(service, site_url, days=90, limit=100):
    end_date = datetime.date.today() - datetime.timedelta(days=2)
    start_date = end_date - datetime.timedelta(days=days)

    print(f"Querying Search Console from {start_date} to {end_date}...")

    request_body = {
        'startDate': start_date.strftime('%Y-%m-%d'),
        'endDate': end_date.strftime('%Y-%m-%d'),
        'dimensions': ['query'],
        'rowLimit': limit,
    }

    try:
        response = service.searchanalytics().query(siteUrl=site_url, body=request_body).execute()
        rows = response.get('rows', [])

        if not rows:
            print("⚠️ No query data found in Google Search Console for this site/date range.")
            # Create an empty CSV so you can confirm file generation works
            df_empty = pd.DataFrame(columns=['Search Query', 'Clicks', 'Impressions', 'CTR (%)', 'Avg Position'])
            df_empty.to_csv('gsc_keywords_report.csv', index=False)
            print("Created empty 'gsc_keywords_report.csv' file.")
            return None

        data = []
        for row in rows:
            data.append({
                'Search Query': row['keys'][0],
                'Clicks': row['clicks'],
                'Impressions': row['impressions'],
                'CTR (%)': round(row['ctr'] * 100, 2),
                'Avg Position': round(row['position'], 1)
            })

        df = pd.DataFrame(data)
        return df.sort_values(by='Impressions', ascending=False).reset_index(drop=True)

    except Exception as e:
        print(f"❌ Error querying Search Console API: {e}")
        return None

if __name__ == '__main__':
    print("Authenticating with Google Search Console API...")
    gsc_service = get_gsc_service()

    print(f"Fetching search performance for {SITE_URL}...")
    df_rankings = fetch_query_performance(gsc_service, SITE_URL, days=DAYS_TO_FETCH, limit=ROW_LIMIT)

    if df_rankings is not None:
        print("\n=== TOP PERFORMING SEARCH QUERIES ===")
        print(df_rankings.to_string(index=False))

        output_file = 'gsc_keywords_report.csv'
        df_rankings.to_csv(output_file, index=False)
        print(f"\n✅ Report successfully saved to {output_file}")