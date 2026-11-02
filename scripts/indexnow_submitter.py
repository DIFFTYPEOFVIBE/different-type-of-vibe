#!/usr/bin/env python3
"""
indexnow_submitter.py

Submits updated storefront URLs directly to the IndexNow API protocol
for instant real-time indexing across Bing, Yandex, Seznam, Naver, Yahoo, and AI Search Engines.
"""

import os
import sys
import json
import requests
from bs4 import BeautifulSoup

SITEMAP_URL = "https://differenttypeofvibe.com/sitemap.xml"
INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow"
HOST = "differenttypeofvibe.com"
KEY = "e2c3951f0f29424e93d9a0d828a2a891"

def fetch_sitemap_urls(sitemap_url=SITEMAP_URL):
    try:
        headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        }
        res = requests.get(sitemap_url, headers=headers, timeout=15)
        res.raise_for_status()
        soup = BeautifulSoup(res.content, "html.parser")
        urls = [loc.text.strip() for loc in soup.find_all("loc") if loc.text.strip()]
        return urls
    except Exception as e:
        print(f"⚠️ Error fetching sitemap for IndexNow: {e}")
        return []

def submit_indexnow(urls):
    if not urls:
        print("⚠️ No URLs found to submit to IndexNow.")
        return False

    payload = {
        "host": HOST,
        "key": KEY,
        "keyLocation": f"https://{HOST}/{KEY}.txt",
        "urlList": urls
    }

    headers = {"Content-Type": "application/json; charset=utf-8"}

    print(f"📡 Submitting {len(urls)} URLs to IndexNow API ({INDEXNOW_ENDPOINT})...")
    try:
        res = requests.post(INDEXNOW_ENDPOINT, json=payload, headers=headers, timeout=15)
        if res.status_code in (200, 202):
            print(f"✅ IndexNow Submission Successful! (Status: {res.status_code})")
            print("🚀 Search engines (Bing, Yahoo, Yandex, AI Search) notified of instant index updates!")
            return True
        else:
            print(f"⚠️ IndexNow returned response code {res.status_code}: {res.text}")
            return False
    except Exception as e:
        print(f"❌ Error submitting to IndexNow: {e}")
        return False

def ping_search_engines(sitemap_url=SITEMAP_URL):
    """Pings Google and Bing sitemap submission endpoints directly to trigger instant re-crawls."""
    ping_urls = [
        f"https://www.google.com/ping?sitemap={sitemap_url}",
        f"https://www.bing.com/ping?sitemap={sitemap_url}"
    ]
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    }
    for ping_endpoint in ping_urls:
        engine_name = "Google" if "google" in ping_endpoint else "Bing"
        try:
            res = requests.get(ping_endpoint, headers=headers, timeout=10)
            print(f"📡 Pinged {engine_name} sitemap endpoint... Status: {res.status_code}")
        except Exception as e:
            print(f"⚠️ {engine_name} ping notice: {e}")

def main():
    urls = fetch_sitemap_urls()
    submit_indexnow(urls)
    ping_search_engines()

if __name__ == "__main__":
    main()
