import os
import requests
import xml.etree.ElementTree as ET
import time
import random

SITE_URL = "https://www.differenttypeofvibe.com"
SITEMAP_URL = f"{SITE_URL}/sitemap.xml"

# High-authority Web2/Web3 Ping Aggregators for Instant Backlink Discovery
PING_SERVICES = [
    "http://rpc.pingomatic.com/",
    "http://ping.feedburner.com",
    "http://rpc.weblogs.com/RPC2",
    "http://api.feedster.com/ping",
    "http://blogsearch.google.com/ping/RPC2",
]

def fetch_live_urls():
    """Fetch all live URLs from the production sitemap."""
    try:
        r = requests.get(SITEMAP_URL, timeout=15)
        if r.status_code == 200:
            root = ET.fromstring(r.content)
            urls = []
            for url_elem in root.findall("{http://www.sitemaps.org/schemas/sitemap/0.9}url"):
                loc = url_elem.find("{http://www.sitemaps.org/schemas/sitemap/0.9}loc")
                if loc is not None and loc.text:
                    urls.append(loc.text)
            print(f"✅ Fetched {len(urls)} live URLs from sitemap!")
            return urls
    except Exception as e:
        print(f"⚠️ Error fetching sitemap: {e}")
    return []

def ping_search_engines_and_aggregators(urls):
    """Pings ping services with random daily batches of live SEO URLs."""
    selected_batch = random.sample(urls, min(20, len(urls)))
    print(f"📡 Building automated daily backlinks & pinging crawlers for {len(selected_batch)} URLs...")

    success_count = 0
    for url in selected_batch:
        for ping_service in PING_SERVICES:
            try:
                # Standard XML-RPC Ping payload
                payload = f"""<?xml version="1.0"?>
                <methodCall>
                  <methodName>weblogUpdates.ping</methodName>
                  <params>
                    <param><value>Different Type Of Vibe Beat Store</value></param>
                    <param><value>{url}</value></param>
                  </params>
                </methodCall>"""
                headers = {'Content-Type': 'text/xml'}
                res = requests.post(ping_service, data=payload, headers=headers, timeout=5)
                if res.status_code == 200:
                    success_count += 1
            except Exception:
                pass

    print(f"🚀 Successfully sent {success_count} automated backlink ping notifications across web aggregators!")

if __name__ == "__main__":
    live_urls = fetch_live_urls()
    if live_urls:
        ping_search_engines_and_aggregators(live_urls)
