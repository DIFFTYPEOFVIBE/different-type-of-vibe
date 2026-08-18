// app/beat/[slug]/page.tsx
import { Metadata } from 'next';
import { cache } from 'react';
import { notFound } from 'next/navigation';

interface BeatPageProps {
  params: Promise<{ slug: string }>;
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourstore.com';

// SEO Helper: Cleans messy default titles/filenames (e.g., "stacks-Am-140-Bpm" -> "Stacks")
function formatBeatTitle(title: string): string {
  return title
    .replace(/[-_]/g, ' ')
    .replace(/\b\d+\s*bpm\b/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
}

// 1. DEDUPLICATED DATABASE FETCH (Cached per-request)
const getBeatData = cache(async (slug: string) => {
  // Replace with real Supabase query:
  // const { data } = await supabase.from('beats').select('*').eq('slug', slug).single();
  // if (!data) return null;

  return {
    id: 'beat_123',
    title: 'stacks-Am-140-Bpm', // Sanitizer automatically converts this to "Stacks"
    slug: slug,
    bpm: 140,
    key: 'A Minor',
    genre: 'Hip Hop',
    typeBeatArtists: ['Moneybagg Yo', 'Future'],
    price: 29.99,
    coverUrl: `${SITE_URL}/covers/stacks.jpg`,
    audioUrl: `${SITE_URL}/audio/stacks.mp3`,
    producerName: 'Onzieb',
  };
});

// 2. DYNAMIC METADATA GENERATOR
export async function generateMetadata({ params }: BeatPageProps): Promise<Metadata> {
  const { slug } = await params;
  const beat = await getBeatData(slug);

  if (!beat) {
    return { title: 'Beat Not Found' };
  }

  const cleanTitle = formatBeatTitle(beat.title);
  const artists = beat.typeBeatArtists.length > 0 ? `${beat.typeBeatArtists.join(' x ')} Type Beat` : 'Type Beat';
  
  // Standardized SEO Title: "Stacks | Moneybagg Yo x Future Type Beat | Hip Hop Instrumental (140 BPM)"
  const pageTitle = `${cleanTitle} | ${artists} | ${beat.genre} Instrumental (${beat.bpm} BPM)`;
  const pageDescription = `Buy and download "${cleanTitle}", a ${beat.genre} ${artists}. Tempo: ${beat.bpm} BPM, Key: ${beat.key}. Instant MP3, WAV, and Trackout license delivery.`;
  const pageUrl = `${SITE_URL}/beat/${beat.slug}`;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: pageUrl, // Strips auto-tracking URL parameters like ?srsltid=
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: pageUrl,
      siteName: 'Onzieb Beats',
      images: [
        {
          url: beat.coverUrl,
          width: 1200,
          height: 1200,
          alt: `${cleanTitle} Cover Art`,
        },
      ],
      type: 'music.song',
      audio: [
        {
          url: beat.audioUrl,
          type: 'audio/mpeg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [beat.coverUrl],
    },
  };
}

// 3. MAIN SERVER COMPONENT
export default async function BeatPage({ params }: BeatPageProps) {
  const { slug } = await params;
  const beat = await getBeatData(slug);

  if (!beat) {
    notFound();
  }

  const cleanTitle = formatBeatTitle(beat.title);
  const canonicalUrl = `${SITE_URL}/beat/${beat.slug}`;

  // Structured Schema Object (JSON-LD)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Product',
        '@id': `${canonicalUrl}#product`,
        name: `${cleanTitle} (${beat.typeBeatArtists.join(' x ')} Type Beat)`,
        image: beat.coverUrl,
        description: `${beat.genre} instrumental in ${beat.key} at ${beat.bpm} BPM produced by ${beat.producerName}.`,
        category: 'Digital Goods > Audio > Music Tracks',
        offers: {
          '@type': 'Offer',
          price: beat.price,
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: canonicalUrl,
          seller: {
            '@type': 'Organization',
            name: beat.producerName,
          },
        },
      },
      {
        '@type': 'MusicRecording',
        '@id': `${canonicalUrl}#audio`,
        name: cleanTitle,
        byArtist: {
          '@type': 'MusicGroup',
          name: beat.producerName,
        },
        genre: beat.genre,
        tempo: `${beat.bpm} BPM`,
        musicalKey: beat.key,
        audio: {
          '@type': 'AudioObject',
          contentUrl: beat.audioUrl,
          encodingFormat: 'audio/mpeg',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />

      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold">{cleanTitle}</h1>
        <p className="text-gray-400">
          {beat.typeBeatArtists.join(' x ')} Type Beat • {beat.bpm} BPM • {beat.key}
        </p>
      </main>
    </>
  );
}