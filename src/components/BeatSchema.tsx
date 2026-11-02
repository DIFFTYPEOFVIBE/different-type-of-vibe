import React from 'react';

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
 * Place this component in your Page component (e.g., src/app/beat/[slug]/page.tsx).
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
