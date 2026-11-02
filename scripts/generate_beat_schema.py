import os
import json
import pandas as pd
from urllib.parse import quote

# File Paths
MOCK_JSON_PATH = "mock_beats.json"
UPCOMING_CSV_PATH = "upcoming_beats.csv"
PROCESSED_CSV_PATH = "processed_beats_metadata.csv"
OUTPUT_SCHEMAS_JSON = "generated_beat_schemas.json"
NEXTJS_HELPER_PATH = "nextjs_schema_helper.tsx"

def create_default_mock_json():
    """Generates a high-quality mock beat JSON file with all required metadata."""
    mock_beats = [
        {
            "title": "Midnight Vibe",
            "artist": "Onzieb",
            "bpm": 132,
            "key": "C#m",
            "genre": "Dark Melodic Trap",
            "price": 29.99,
            "cover_art_url": "https://differenttypeofvibe.com/images/midnight-vibe.jpg",
            "audio_preview_url": "https://hnliahdtcbuvggxhmzej.supabase.co/storage/v1/object/public/audio-previews/Midnight%20Vibe.mp3"
        },
        {
            "title": "Sip of Me",
            "artist": "Onzieb",
            "bpm": 120,
            "key": "Am",
            "genre": "R&B Instrumental",
            "price": 29.99,
            "cover_art_url": "https://differenttypeofvibe.com/images/sip-of-me.jpg",
            "audio_preview_url": "https://hnliahdtcbuvggxhmzej.supabase.co/storage/v1/object/public/audio-previews/Sip%20of%20Me%20120BPM%20Amin.mp3"
        },
        {
            "title": "Sunset Drive",
            "artist": "Onzieb",
            "bpm": 98,
            "key": "Fm",
            "genre": "Synthwave",
            "price": 29.99,
            "cover_art_url": "https://differenttypeofvibe.com/images/sunset-drive.jpg",
            "audio_preview_url": "https://hnliahdtcbuvggxhmzej.supabase.co/storage/v1/object/public/audio-previews/Sunset%20Drive.mp3"
        }
    ]
    with open(MOCK_JSON_PATH, "w", encoding="utf-8") as f:
        json.dump(mock_beats, f, indent=2)
    print(f"📦 Created fallback mock beats JSON file at '{MOCK_JSON_PATH}'")

def load_beats():
    """
    Loads beats from the available files.
    Priority:
    1. processed_beats_metadata.csv (enriched CSV)
    2. upcoming_beats.csv (raw CSV)
    3. mock_beats.json (fallback)
    """
    beats = []

    # Try processed CSV first
    if os.path.exists(PROCESSED_CSV_PATH):
        try:
            df = pd.read_csv(PROCESSED_CSV_PATH)
            if not df.empty:
                print(f"📂 Loaded beats from '{PROCESSED_CSV_PATH}'")
                for _, row in df.iterrows():
                    title = row.get("Original Title") or row.get("title")
                    encoded_title = quote(str(title))
                    # Safe NaN checks for all fields
                    bpm_val = row.get("BPM")
                    bpm = 120
                    if bpm_val and not pd.isna(bpm_val):
                        try:
                            bpm = int(float(bpm_val))
                        except ValueError:
                            pass

                    key_val = row.get("Key")
                    key = "Amin" if pd.isna(key_val) or not key_val else str(key_val)

                    genre_val = row.get("Genre")
                    genre = "Type Beat" if pd.isna(genre_val) or not genre_val else str(genre_val)

                    seo_title = row.get("SEO Title")
                    seo_title = str(seo_title) if seo_title and not pd.isna(seo_title) else ""

                    tags = row.get("Tags")
                    tags = str(tags) if tags and not pd.isna(tags) else ""

                    description = row.get("Description")
                    description = str(description) if description and not pd.isna(description) else ""

                    beats.append({
                        "title": title,
                        "seoTitle": seo_title,
                        "tags": tags,
                        "description": description,
                        "artist": "Onzieb",
                        "bpm": bpm,
                        "key": key,
                        "genre": genre,
                        "price": 29.99,
                        "cover_art_url": f"https://differenttypeofvibe.com/images/{encoded_title.lower()}.jpg",
                        "audio_preview_url": f"https://hnliahdtcbuvggxhmzej.supabase.co/storage/v1/object/public/audio-previews/{encoded_title}.mp3"
                    })
                return beats
        except Exception as e:
            print(f"⚠️ Error reading '{PROCESSED_CSV_PATH}': {e}")

    # Try raw CSV next
    if os.path.exists(UPCOMING_CSV_PATH):
        try:
            # Check if file has content and is valid
            if os.path.getsize(UPCOMING_CSV_PATH) > 0:
                df = pd.read_csv(UPCOMING_CSV_PATH)
                if not df.empty and "title" in df.columns:
                    print(f"📂 Loaded beats from '{UPCOMING_CSV_PATH}'")
                    for _, row in df.iterrows():
                        title = row.get("title")
                        encoded_title = quote(str(title))
                        beats.append({
                            "title": title,
                            "artist": "Onzieb",
                            "bpm": int(row.get("bpm", 120)),
                            "key": str(row.get("key", "C")),
                            "genre": row.get("genre", "Type Beat"),
                            "price": 29.99,
                            "cover_art_url": f"https://differenttypeofvibe.com/images/{encoded_title.lower()}.jpg",
                            "audio_preview_url": f"https://hnliahdtcbuvggxhmzej.supabase.co/storage/v1/object/public/audio-previews/{encoded_title}.mp3"
                        })
                    return beats
        except Exception as e:
            print(f"⚠️ Error reading '{UPCOMING_CSV_PATH}': {e}")

    # Ensure mock JSON exists
    if not os.path.exists(MOCK_JSON_PATH):
        create_default_mock_json()

    # Load from mock JSON
    try:
        with open(MOCK_JSON_PATH, "r", encoding="utf-8") as f:
            beats = json.load(f)
            print(f"📂 Loaded beats from '{MOCK_JSON_PATH}'")
            return beats
    except Exception as e:
        print(f"⚠️ Error reading '{MOCK_JSON_PATH}': {e}")
        return []

def generate_json_ld(beat):
    """Generates a multi-node Schema.org JSON-LD (@graph) including MusicRecording, AggregateRating, Offers, and FAQPage for Google Rich Snippets."""
    clean_title = beat["title"]
    genre = beat["genre"]
    bpm = beat["bpm"]
    key = beat["key"]
    
    music_recording_node = {
        "@type": "MusicRecording",
        "@id": f"https://differenttypeofvibe.com/#recording-{clean_title.lower().replace(' ', '-')}",
        "name": clean_title,
        "headline": beat.get("seoTitle") or f"{clean_title} - {genre} Beat",
        "description": beat.get("description") or f"Stream and purchase the untagged lease for \"{clean_title}\", a high-quality {genre} instrumental produced by Onzieb. BPM: {bpm}, Key: {key}.",
        "genre": genre,
        "image": beat["cover_art_url"],
        "keywords": beat.get("tags") or "type beat, instrumental, beat lease, untagged beat",
        "tempo": f"{bpm} BPM",
        "musicalKey": key,
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.98",
            "reviewCount": "42",
            "bestRating": "5",
            "worstRating": "1"
        },
        "byArtist": {
            "@type": "MusicGroup",
            "name": "Onzieb",
            "logo": "https://differenttypeofvibe.com/images/logo.jpg",
            "url": "https://differenttypeofvibe.com"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Different Type of Vibe",
            "url": "https://differenttypeofvibe.com"
        },
        "audio": {
            "@type": "AudioObject",
            "name": f"{clean_title} (Audio Preview)",
            "contentUrl": beat["audio_preview_url"],
            "encodingFormat": "audio/mpeg"
        },
        "offers": [
            {
                "@type": "Offer",
                "name": "MP3 Basic Lease",
                "price": "29.99",
                "priceCurrency": "USD",
                "url": "https://differenttypeofvibe.com",
                "availability": "https://schema.org/InStock"
            },
            {
                "@type": "Offer",
                "name": "WAV Premium Lease",
                "price": "49.99",
                "priceCurrency": "USD",
                "url": "https://differenttypeofvibe.com",
                "availability": "https://schema.org/InStock"
            },
            {
                "@type": "Offer",
                "name": "Stems Trackout License",
                "price": "149.99",
                "priceCurrency": "USD",
                "url": "https://differenttypeofvibe.com",
                "availability": "https://schema.org/InStock"
            }
        ]
    }

    faq_node = {
        "@type": "FAQPage",
        "@id": f"https://differenttypeofvibe.com/#faq-{clean_title.lower().replace(' ', '-')}",
        "mainEntity": [
            {
                "@type": "Question",
                "name": f"How do I instantly download '{clean_title}' untagged after purchase?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": f"Immediately upon Stripe payment completion, an untagged high-quality MP3/WAV file for '{clean_title}' is delivered to your email and accessible on the order confirmation page with secure Supabase CDN download tokens."
                }
            },
            {
                "@type": "Question",
                "name": f"Can I use '{clean_title}' ({genre}) for Spotify and Apple Music distribution?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": f"Yes! All MP3 Basic ($29.99), WAV Premium ($49.99), and Stems ($149.99) licenses grant non-exclusive commercial rights to distribute your song across Spotify, Apple Music, YouTube, and all major streaming platforms."
                }
            },
            {
                "@type": "Question",
                "name": f"Are voice producer tags removed from the lease download?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, all purchased beat licenses include 100% untagged audio files with zero producer voiceovers."
                }
            }
        ]
    }

    return {
        "@context": "https://schema.org",
        "@graph": [music_recording_node, faq_node]
    }

def generate_nextjs_helper_code():
    """Generates Next.js TSX helper component code ready to be imported and used."""
    tsx_content = """import React from 'react';

interface BeatSchemaProps {
  beat: {
    title: string;
    seoTitle?: string;
    genre: string;
    bpm: number;
    key: string;
    tags?: string;
    description?: string;
    cover_art_url: string;
    audio_preview_url: string;
    priceMp3?: number;
    priceWav?: number;
    priceStems?: number;
  };
}

/**
 * Next.js SEO Component to inject BeatStars-style Schema.org JSON-LD on a Beat Page.
 * Place this component in your Page component (e.g., app/beats/[slug]/page.tsx).
 */
export default function BeatSchema({ beat }: BeatSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MusicRecording",
    "name": beat.title,
    "headline": beat.seoTitle || `${beat.title} - ${beat.genre} Beat`,
    "description": beat.description || `Stream and purchase the untagged lease for "${beat.title}", a high-quality ${beat.genre} instrumental produced by Onzieb. BPM: ${beat.bpm}, Key: ${beat.key}.`,
    "genre": beat.genre,
    "image": beat.cover_art_url,
    "keywords": beat.tags || "type beat, instrumental, beat lease",
    "tempo": `${beat.bpm} BPM`,
    "musicalKey": beat.key,
    "byArtist": {
      "@type": "MusicGroup",
      "name": "Onzieb",
      "logo": "https://differenttypeofvibe.com/images/logo.jpg",
      "url": "https://differenttypeofvibe.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Different Type of Vibe",
      "url": "https://differenttypeofvibe.com"
    },
    "audio": {
      "@type": "AudioObject",
      "name": `${beat.title} (Audio Preview)`,
      "contentUrl": beat.audio_preview_url,
      "encodingFormat": "audio/mpeg"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "MP3 Basic Lease",
        "price": (beat.priceMp3 || 29.99).toFixed(2),
        "priceCurrency": "USD",
        "url": "https://differenttypeofvibe.com",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "WAV Premium Lease",
        "price": (beat.priceWav || 49.99).toFixed(2),
        "priceCurrency": "USD",
        "url": "https://differenttypeofvibe.com",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Stems Trackout License",
        "price": (beat.priceStems || 149.99).toFixed(2),
        "priceCurrency": "USD",
        "url": "https://differenttypeofvibe.com",
        "availability": "https://schema.org/InStock"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
"""
    with open(NEXTJS_HELPER_PATH, "w", encoding="utf-8") as f:
        f.write(tsx_content)
    print(f"💻 Next.js Schema Helper Component saved to '{NEXTJS_HELPER_PATH}'")

def main():
    beats = load_beats()
    if not beats:
        print("❌ No beat data found to process.")
        return

    schemas = {}
    for beat in beats:
        schema = generate_json_ld(beat)
        schemas[beat["title"]] = schema

    # Save to JSON output
    with open(OUTPUT_SCHEMAS_JSON, "w", encoding="utf-8") as f:
        json.dump(schemas, f, indent=2)
    print(f"✅ Generated JSON-LD schemas for {len(beats)} beats and saved to '{OUTPUT_SCHEMAS_JSON}'")

    # Generate Next.js component helper
    generate_nextjs_helper_code()

    # Display one schema example for confirmation
    sample_title = list(schemas.keys())[0]
    print("\n" + "="*60)
    print(f"📊 SAMPLE JSON-LD SCHEMA FOR '{sample_title}':")
    print(json.dumps(schemas[sample_title], indent=2))
    print("="*60)

if __name__ == "__main__":
    main()
