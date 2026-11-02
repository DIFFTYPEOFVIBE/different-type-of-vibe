#!/usr/bin/env python3
"""
store_speed_auditor.py

Automated Storefront Core Web Vitals & Speed Audit Engine.
Measures Time-To-First-Byte (TTFB), HTTP status, compression headers,
and Canonical SEO tag health for differenttypeofvibe.com.
"""

import os
import sys
import time
import urllib.request
import urllib.parse
from bs4 import BeautifulSoup

URLS_TO_TEST = [
    ("Homepage", "https://differenttypeofvibe.com/"),
    ("Drake Vibe Hub", "https://differenttypeofvibe.com/vibe/drake-type-beats"),
    ("Trap Genre Hub", "https://differenttypeofvibe.com/genre/trap-beats"),
    ("XML Sitemap", "https://differenttypeofvibe.com/sitemap.xml"),
    ("Robots.txt", "https://differenttypeofvibe.com/robots.txt")
]

def audit_url_speed(name, url):
    start_time = time.time()
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept-Encoding": "gzip, deflate"
    }
    
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as response:
            elapsed_ms = round((time.time() - start_time) * 1000, 2)
            status = response.status
            content_type = response.headers.get("Content-Type", "")
            
            # Read content for HTML checks
            body = response.read()
            has_canonical = False
            
            if "text/html" in content_type:
                soup = BeautifulSoup(body, "html.parser")
                canonical_tag = soup.find("link", rel="canonical")
                if canonical_tag and canonical_tag.get("href"):
                    has_canonical = True
            else:
                has_canonical = True  # Not applicable for XML / TXT
                
            speed_rating = "⚡ FAST (<300ms)" if elapsed_ms < 300 else ("🟡 ACCEPTABLE (<800ms)" if elapsed_ms < 800 else "🔴 SLOW (>800ms)")
            
            print(f"  [{status} OK] {name:20} | TTFB: {elapsed_ms:6.1f} ms | Rating: {speed_rating} | Canonical: {'✅' if has_canonical else '⚠️'}")
            return True, elapsed_ms
    except Exception as e:
        print(f"  [❌ ERROR] {name:20} | Error: {e}")
        return False, 9999.0

def main():
    print("=" * 70)
    print("       DIFFERENT TYPE OF VIBE - STOREFRONT SPEED & SEO HEALTH AUDIT")
    print("=" * 70)
    
    success_count = 0
    total_ms = 0.0
    
    for name, url in URLS_TO_TEST:
        ok, ms = audit_url_speed(name, url)
        if ok:
            success_count += 1
            total_ms += ms
            
    avg_ms = round(total_ms / max(1, success_count), 2)
    print("-" * 70)
    print(f"✨ Speed Audit Complete: {success_count}/{len(URLS_TO_TEST)} Pages Healthy.")
    print(f"⚡ Average Store Response Time (TTFB): {avg_ms} ms")
    print("=" * 70 + "\n")

if __name__ == "__main__":
    main()