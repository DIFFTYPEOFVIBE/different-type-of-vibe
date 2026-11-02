import sys
import csv
import urllib.request
import xml.etree.ElementTree as ET
from urllib.parse import urlparse
import re

# Since we might not have external packages pre-installed or we want maximum robustness/speed,
# we can use standard library packages: urllib for fetching, xml.etree.ElementTree or regex/html.parser for parsing.
# But let's check if we can use BeautifulSoup and requests. We can import them and fallback to standard libraries or use them.
# Let's write a robust script using standard library or requests/beautifulsoup. Let's write it with requests and BeautifulSoup,
# and if they are not installed, we can run a pip install or use standard library fallback.
# Actually, let's use requests and beautifulsoup4 because they are standard for HTML parsing, and if needed we can run pip install.
# Let's inspect if they are in the environment by writing a clean script.

import warnings
import requests
from bs4 import BeautifulSoup
from bs4 import XMLParsedAsHTMLWarning

# Filter the warning from BS4 when parsing sitemap XML as HTML
warnings.filterwarnings("ignore", category=XMLParsedAsHTMLWarning)

def crawl_sitemap(sitemap_url):
    print(f"Fetching sitemap: {sitemap_url}")
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    }
    response = requests.get(sitemap_url, headers=headers, timeout=15)
    response.raise_for_status()
    
    # Sitemaps can be XML. Let's parse it.
    # We use html.parser since it does not require lxml to be installed.
    soup = BeautifulSoup(response.content, "html.parser")
    
    # Look for <loc> tags inside <url> tags
    urls = []
    for loc in soup.find_all("loc"):
        url = loc.text.strip()
        if url:
            urls.append(url)
            
    return urls

def audit_url(url):
    print(f"Auditing URL: {url}")
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    }
    
    result = {
        "url": url,
        "status_code": None,
        "title": "Missing",
        "description": "Missing",
        "keywords": "Missing",
        "og_title": "Missing",
        "og_description": "Missing",
        "og_image": "Missing",
        "og_url": "Missing",
        "error": ""
    }
    
    try:
        response = requests.get(url, headers=headers, timeout=15, allow_redirects=True)
        result["status_code"] = response.status_code
        
        if response.status_code == 200:
            # Parse HTML
            soup = BeautifulSoup(response.content, "html.parser")
            
            # 1. Verify <title>
            title_tag = soup.find("title")
            if title_tag and title_tag.text.strip():
                result["title"] = "Present"
            
            # 2. Verify <meta name="description">
            desc_tag = soup.find("meta", attrs={"name": re.compile(r"^description$", re.I)})
            if desc_tag and desc_tag.get("content", "").strip():
                result["description"] = "Present"
                
            # 3. Verify <meta name="keywords">
            keywords_tag = soup.find("meta", attrs={"name": re.compile(r"^keywords$", re.I)})
            if keywords_tag and keywords_tag.get("content", "").strip():
                result["keywords"] = "Present"
                
            # 4. Verify OpenGraph tags
            og_title = soup.find("meta", attrs={"property": "og:title"})
            if og_title and og_title.get("content", "").strip():
                result["og_title"] = "Present"
                
            og_desc = soup.find("meta", attrs={"property": "og:description"})
            if og_desc and og_desc.get("content", "").strip():
                result["og_description"] = "Present"
                
            og_img = soup.find("meta", attrs={"property": "og:image"})
            if og_img and og_img.get("content", "").strip():
                result["og_image"] = "Present"
                
            og_url = soup.find("meta", attrs={"property": "og:url"})
            if og_url and og_url.get("content", "").strip():
                result["og_url"] = "Present"
        else:
            result["error"] = f"Non-200 status code: {response.status_code}"
            
    except Exception as e:
        result["error"] = str(e)
        
    return result

def main():
    default_sitemap = "https://differenttypeofvibe.com/sitemap.xml"
    # Check command-line arguments first, then fall back to input if stdin is interactive
    if len(sys.argv) > 1:
        sitemap_url = sys.argv[1].strip()
    elif sys.stdin.isatty():
        sitemap_url = input(f"Enter sitemap URL (default: {default_sitemap}): ").strip()
    else:
        sitemap_url = ""
        
    if not sitemap_url:
        sitemap_url = default_sitemap
        
    try:
        urls = crawl_sitemap(sitemap_url)
        print(f"Found {len(urls)} URLs in sitemap.")
    except Exception as e:
        print(f"Error fetching/parsing sitemap: {e}")
        sys.exit(1)
        
    if not urls:
        print("No URLs found in the sitemap.")
        sys.exit(0)
        
    report_file = "sitemap_audit_report.csv"
    fieldnames = [
        "url", 
        "status_code", 
        "title", 
        "description", 
        "keywords", 
        "og_title", 
        "og_description", 
        "og_image", 
        "og_url", 
        "error"
    ]
    
    print(f"Starting parallel audit (10 workers). Report will be saved to {report_file}...")
    
    from concurrent.futures import ThreadPoolExecutor, as_completed

    results = []
    with ThreadPoolExecutor(max_workers=10) as executor:
        future_to_url = {executor.submit(audit_url, url): url for url in urls}
        for future in as_completed(future_to_url):
            try:
                res = future.result()
                results.append(res)
            except Exception as exc:
                print(f"URL generated an exception: {exc}")

    with open(report_file, mode="w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        for res in sorted(results, key=lambda x: x["url"]):
            writer.writerow(res)
            
    print(f"\nAudit completed successfully! Audited {len(results)} URLs. Report saved to {report_file}")

if __name__ == "__main__":
    main()
