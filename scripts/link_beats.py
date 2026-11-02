#!/usr/bin/env python3
"""
link_beats.py

An automated script that reads beat data from a CSV or mock JSON file,
implements an advanced matching algorithm, generates top 3-5 related internal links
with diverse contextual anchor text, and exports the mapped relationships into
internal_links_map.json and an HTML snippet file internal_links.html.
"""

import os
import json
import re
import math

# File Paths
INPUT_JSON_PATH = "mock_beats_db.json"
OUTPUT_JSON_MAP = "internal_links_map.json"
OUTPUT_HTML_SNIPPET = "internal_links.html"

# Stopwords for Title Matching
STOPWORDS = {
    "a", "an", "the", "and", "or", "but", "if", "then", "of", "on", "in", "by", 
    "for", "with", "to", "at", "from", "type", "beat", "instrumental", "vibe", "vibes"
}

# Contextual anchor text templates (using HTML format with high-intent SEO long-tail anchors)
ANCHOR_TEMPLATES = [
    "If you like this, check out our untagged <a href=\"https://differenttypeofvibe.com/beats/{slug}\">{title} ({genre})</a> instrumental lease.",
    "Love these vibes? Stream and purchase the <a href=\"https://differenttypeofvibe.com/beats/{slug}\">{title} ({bpm} BPM)</a> beat.",
    "Looking for more heat? Listen to the untagged <a href=\"https://differenttypeofvibe.com/beats/{slug}\">{title} instrumental</a> next.",
    "If you are vibing with this, download our <a href=\"https://differenttypeofvibe.com/beats/{slug}\">{title} type beat</a>.",
    "For a similar vibe, check out the <a href=\"https://differenttypeofvibe.com/beats/{slug}\">{title} beat lease</a>."
]

def load_beat_data(filepath=INPUT_JSON_PATH):
    """
    Loads beat data from available sources.
    Priority:
    1. processed_beats_metadata.csv (all catalog beats)
    2. INPUT_JSON_PATH (mock_beats_db.json fallback)
    """
    csv_path = "processed_beats_metadata.csv"
    if os.path.exists(csv_path):
        try:
            import pandas as pd
            df = pd.read_csv(csv_path)
            if not df.empty:
                beats = []
                for _, row in df.iterrows():
                    raw_title = str(row.get("Original Title") or row.get("title") or "Beat")
                    clean_title = raw_title.split(" - ")[0].strip()
                    
                    # Create clean URL slug
                    slug = re.sub(r'[^a-z0-9]+', '-', clean_title.lower()).strip('-')
                    if not slug:
                        slug = "beat"

                    tags_str = str(row.get("Tags") or "")
                    tags = [t.strip() for t in tags_str.split(",") if t.strip()]

                    bpm_val = row.get("BPM")
                    try:
                        bpm = int(float(bpm_val)) if bpm_val and not pd.isna(bpm_val) else 120
                    except (ValueError, TypeError):
                        bpm = 120

                    genre = str(row.get("Genre") or "Hip Hop")

                    beats.append({
                        "id": slug,
                        "title": clean_title,
                        "slug": slug,
                        "genre": genre,
                        "bpm": bpm,
                        "tags": tags
                    })
                print(f"📂 Loaded {len(beats)} beats from '{csv_path}'")
                return beats
        except Exception as e:
            print(f"⚠️ Error reading CSV '{csv_path}': {e}. Falling back to JSON.")

    if not os.path.exists(filepath):
        raise FileNotFoundError(f"❌ Input data file not found at: {filepath}")
    
    with open(filepath, "r", encoding="utf-8") as f:
        data = json.load(f)
    print(f"📂 Loaded {len(data)} beats from {filepath}")
    return data

def clean_title_words(title):
    """Splits title into lowercase alphanumeric words, filtering out stopwords."""
    words = re.findall(r'\b\w+\b', title.lower())
    return {w for w in words if w not in STOPWORDS}

def calculate_similarity(beat_a, beat_b):
    """
    Computes a hybrid similarity score between two beats.
    
    Weights:
    - Tag overlap (Jaccard Similarity): 5.0
    - Genre match: 3.0 (full match) or 1.5 (partial word match)
    - Title word overlap: 2.0
    - BPM proximity: 1.0 (inverse distance normalized over 50 BPM maximum diff)
    """
    # 1. Tag similarity (Jaccard Index)
    tags_a = set(beat_a.get("tags", []))
    tags_b = set(beat_b.get("tags", []))
    union_tags = tags_a | tags_b
    tag_score = 0.0
    if union_tags:
        tag_score = len(tags_a & tags_b) / len(union_tags)
    
    # 2. Genre match
    genre_a = beat_a.get("genre", "").lower()
    genre_b = beat_b.get("genre", "").lower()
    if genre_a == genre_b:
        genre_score = 1.0
    else:
        # Check for partial word overlap in genres
        words_a = set(re.findall(r'\b\w+\b', genre_a))
        words_b = set(re.findall(r'\b\w+\b', genre_b))
        common_genre_words = words_a & words_b - {"beat", "instrumental", "type"}
        genre_score = 0.5 if common_genre_words else 0.0

    # 3. Title word overlap
    title_words_a = clean_title_words(beat_a.get("title", ""))
    title_words_b = clean_title_words(beat_b.get("title", ""))
    title_overlap = len(title_words_a & title_words_b)
    title_score = min(title_overlap / max(len(title_words_a), 1), 1.0) # normalized

    # 4. BPM proximity
    bpm_a = beat_a.get("bpm", 120)
    bpm_b = beat_b.get("bpm", 120)
    bpm_diff = abs(bpm_a - bpm_b)
    bpm_score = max(0.0, 1.0 - (bpm_diff / 50.0))

    # Calculate final hybrid weighted score
    final_score = (tag_score * 5.0) + (genre_score * 3.0) + (title_score * 2.0) + (bpm_score * 1.0)
    return round(final_score, 2)

def generate_internal_links(beats):
    """Maps every beat to 3-5 top related beats with contextual internal links."""
    mapped_relationships = {}

    for i, current_beat in enumerate(beats):
        current_slug = current_beat["slug"]
        scores = []
        
        # Compare current beat against all other beats
        for j, other_beat in enumerate(beats):
            if i == j:
                continue
            score = calculate_similarity(current_beat, other_beat)
            scores.append((score, other_beat))
        
        # Sort by score descending, then by BPM difference ascending, then by slug
        scores.sort(key=lambda x: (-x[0], abs(x[1].get("bpm", 120) - current_beat.get("bpm", 120)), x[1]["slug"]))
        
        # Take top 3 to 5 (using 4 as optimal target, up to 5)
        top_matches = scores[:min(5, max(3, len(scores)))]
        
        related_links = []
        for idx, (score, match) in enumerate(top_matches):
            template = ANCHOR_TEMPLATES[idx % len(ANCHOR_TEMPLATES)]
            
            # Form clean contextual text
            clean_title = match["title"].split(" - ")[0] # Use shorter/cleaner title in anchor text for natural look
            match_genre = match.get("genre", "Type Beat")
            match_bpm = match.get("bpm", 120)
            anchor_html = template.format(slug=match["slug"], title=clean_title, genre=match_genre, bpm=match_bpm)
            
            # Markdown version using regex to perfectly convert <a href="URL">TEXT</a> to [TEXT](URL)
            anchor_md = re.sub(r'<a href="([^"]+)">([^<]+)</a>', r'[\2](\1)', anchor_html)
            
            related_links.append({
                "slug": match["slug"],
                "title": match["title"],
                "score": score,
                "anchor_html": anchor_html,
                "anchor_markdown": anchor_md
            })
            
        mapped_relationships[current_slug] = {
            "title": current_beat["title"],
            "genre": current_beat["genre"],
            "bpm": current_beat["bpm"],
            "tags": current_beat["tags"],
            "related_links": related_links
        }
        
    return mapped_relationships

def export_json_map(data, filepath=OUTPUT_JSON_MAP):
    """Exports the relationships into a JSON file."""
    with open(filepath, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2)
    print(f"✅ Successfully exported internal links map JSON to: {filepath}")

def export_html_snippet(data, filepath=OUTPUT_HTML_SNIPPET):
    """Generates an HTML snippet file ready for rendering on differenttypeofvibe.com."""
    html_lines = []
    html_lines.append("<!-- START: Related Internal Links Snippet for differenttypeofvibe.com -->")
    html_lines.append("<style>")
    html_lines.append("  .related-beats-box {")
    html_lines.append("    background: #11111b;")
    html_lines.append("    border: 1px solid #222235;")
    html_lines.append("    border-radius: 8px;")
    html_lines.append("    padding: 20px;")
    html_lines.append("    margin: 24px 0;")
    html_lines.append("    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;")
    html_lines.append("    color: #e2e8f0;")
    html_lines.append("  }")
    html_lines.append("  .related-beats-box h4 {")
    html_lines.append("    margin-top: 0;")
    html_lines.append("    margin-bottom: 12px;")
    html_lines.append("    color: #a78bfa;")
    html_lines.append("    font-size: 1.1rem;")
    html_lines.append("  }")
    html_lines.append("  .related-beats-list {")
    html_lines.append("    list-style-type: none;")
    html_lines.append("    padding-left: 0;")
    html_lines.append("    margin: 0;")
    html_lines.append("  }")
    html_lines.append("  .related-beats-list li {")
    html_lines.append("    margin-bottom: 10px;")
    html_lines.append("    line-height: 1.5;")
    html_lines.append("    font-size: 0.95rem;")
    html_lines.append("  }")
    html_lines.append("  .related-beats-list li a {")
    html_lines.append("    color: #a78bfa;")
    html_lines.append("    text-decoration: none;")
    html_lines.append("    font-weight: 600;")
    html_lines.append("  }")
    html_lines.append("  .related-beats-list li a:hover {")
    html_lines.append("    text-decoration: underline;")
    html_lines.append("    color: #c084fc;")
    html_lines.append("  }")
    html_lines.append("</style>\n")
    
    # Generate hidden blocks per slug, easily toggled by router or dynamic page logic
    for slug, info in data.items():
        html_lines.append(f"<div id=\"related-links-{slug}\" class=\"related-beats-box\" data-slug=\"{slug}\">")
        html_lines.append(f"  <h4>Recommended For You (Inspired by '{info['title'].split(' - ')[0]}')</h4>")
        html_lines.append("  <ul class=\"related-beats-list\">")
        for link_obj in info["related_links"]:
            html_lines.append(f"    <li>{link_obj['anchor_html']}</li>")
        html_lines.append("  </ul>")
        html_lines.append("</div>\n")
        
    html_lines.append("<!-- END: Related Internal Links Snippet -->")
    
    with open(filepath, "w", encoding="utf-8") as f:
        f.write("\n".join(html_lines))
    print(f"✅ Successfully generated HTML snippet file: {filepath}")

def main():
    print("🚀 Running link_beats.py pipeline...")
    try:
        beats = load_beat_data()
        relationships = generate_internal_links(beats)
        export_json_map(relationships)
        export_html_snippet(relationships)
        print("🎉 Pipeline finished successfully!")
    except Exception as e:
        print(f"❌ Error in link_beats pipeline: {e}")

if __name__ == "__main__":
    main()
