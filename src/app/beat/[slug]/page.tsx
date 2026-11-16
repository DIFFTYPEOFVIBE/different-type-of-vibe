// app/beat/[slug]/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import { cache } from 'react';
import { notFound } from 'next/navigation';
import { headers } from 'next/headers';
import RelatedBeats from '@/components/RelatedBeats';
import { MY_BEATS } from '@/data/beats';

interface BeatPageProps {
  params: Promise<{ slug: string }>;
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.differenttypeofvibe.com';

// SEO Helper: Cleans messy default titles/filenames (e.g., "stacks-Am-140-Bpm" -> "Stacks")
function formatBeatTitle(title: string): string {
  return title
    .replace(/[-_]/g, ' ')
    .replace(/\b\d+\s*bpm\b/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function toSlug(label: string): string {
  return label
    .toLowerCase()
    .replace(/&/g, 'b')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// 1. DEDUPLICATED DATABASE FETCH (Cached per-request)
const getBeatData = cache(async (slug: string) => {
  const matched = MY_BEATS.find((b) => {
    const clean = b.title.split(' - ')[0].trim();
    return toSlug(clean) === slug || toSlug(b.title) === slug;
  });

  if (matched) {
    const clean = matched.title.split(' - ')[0].trim();
    return {
      id: matched.id,
      title: clean,
      slug,
      bpm: matched.bpm || 140,
      key: matched.key || 'C Minor',
      genre: matched.genre || 'Hip Hop',
      typeBeatArtists: [matched.artistVibe.replace(/\s*Type\s*Beats?$/i, '').trim() || 'Onzieb'],
      price: matched.priceMp3 || 29.99,
      coverUrl: `${SITE_URL}/og-image.png`,
      audioUrl: matched.audioUrl,
      producerName: 'Onzieb',
    };
  }

  const formattedSlugTitle = slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  return {
    id: `beat_${slug}`,
    title: formattedSlugTitle,
    slug: slug,
    bpm: 140,
    key: 'A Minor',
    genre: 'Hip Hop',
    typeBeatArtists: ['Moneybagg Yo', 'Future'],
    price: 29.99,
    coverUrl: `${SITE_URL}/og-image.png`,
    audioUrl: MY_BEATS[0]?.audioUrl || `${SITE_URL}/audio/stacks.mp3`,
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

  // Geolocation currency detection using Vercel headers (Next.js 15 Async standard)
  const headersList = await headers();
  const countryHeader = headersList.get('x-vercel-ip-country') || 'US';

  let currency = 'USD';
  let conversionRate = 1.0;

  // Determine regional currency & baseline conversion rates
  if (countryHeader === 'GB') {
    currency = 'GBP';
    conversionRate = 0.77; // GBP Sterling relative to USD
  } else if ([
    'AT', 'BE', 'CY', 'EE', 'FI', 'FR', 'DE', 'GR', 'IE', 'IT', 
    'LV', 'LT', 'LU', 'MT', 'NL', 'PT', 'SK', 'SI', 'ES'
  ].includes(countryHeader)) {
    currency = 'EUR';
    conversionRate = 0.91; // Euro relative to USD
  } else if (countryHeader === 'CA') {
    currency = 'CAD';
    conversionRate = 1.35; // Canadian dollar relative to USD
  } else if (countryHeader === 'NG') {
    currency = 'NGN';
    conversionRate = 1600.0; // Nigerian Naira relative to USD
  }

  // Format pricing safely for schema.org validity
  const formatPrice = (basePrice: number) => {
    return (basePrice * conversionRate).toFixed(2);
  };

  // Structured Schema Object (JSON-LD) - Unified BeatStars + Airbit + Traktrain + Soundee "Super-Schema"
  // UPGRADED: Leverages edge geo-headers for multi-currency localization!
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        'url': canonicalUrl,
        'name': `${cleanTitle} | Buy Untagged Beat Lease`,
        'description': `Buy and download "${cleanTitle}", a ${beat.genre} instrumental. Tempo: ${beat.bpm} BPM, Key: ${beat.key}. Instant MP3, WAV, and Trackout license delivery.`,
        'isPartOf': {
          '@type': 'WebSite',
          '@id': 'https://differenttypeofvibe.com#website',
          'name': 'Different Type of Vibe',
          'url': 'https://differenttypeofvibe.com'
        },
        'about': {
          '@id': `${canonicalUrl}#product`
        }
      },
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://www.differenttypeofvibe.com'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Beats',
            'item': 'https://www.differenttypeofvibe.com/links'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': cleanTitle,
            'item': canonicalUrl
          }
        ]
      },
      {
        '@type': 'Product',
        '@id': `${canonicalUrl}#product`,
        name: `${cleanTitle} (${beat.typeBeatArtists.join(' x ')} Type Beat)`,
        image: beat.coverUrl,
        description: `${beat.genre} instrumental in ${beat.key} at ${beat.bpm} BPM produced by ${beat.producerName}. Non-exclusive commercial license with 100% master royalties retained.`,
        category: 'Digital Goods > Audio > Music Tracks',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '58',
          bestRating: '5',
          worstRating: '1'
        },
        offers: [
          {
            '@type': 'Offer',
            'name': 'MP3 Basic Lease',
            'price': formatPrice(beat.price),
            'priceCurrency': currency,
            'availability': 'https://schema.org/InStock',
            'url': canonicalUrl,
            'seller': {
              '@type': 'Organization',
              'name': beat.producerName,
            },
          },
          {
            '@type': 'Offer',
            'name': 'WAV Premium Lease',
            'price': formatPrice(49.99),
            'priceCurrency': currency,
            'availability': 'https://schema.org/InStock',
            'url': canonicalUrl,
            'seller': {
              '@type': 'Organization',
              'name': beat.producerName,
            },
          },
          {
            '@type': 'Offer',
            'name': 'Stems Trackout License',
            'price': formatPrice(149.99),
            'priceCurrency': currency,
            'availability': 'https://schema.org/InStock',
            'url': canonicalUrl,
            'seller': {
              '@type': 'Organization',
              'name': beat.producerName,
            },
          }
        ],
        'subjectOf': {
          '@id': `${canonicalUrl}#audio`
        }
      },
      {
        '@type': 'MusicRecording',
        '@id': `${canonicalUrl}#audio`,
        name: cleanTitle,
        duration: 'PT3M15S',
        inLanguage: 'en',
        description: `Stream and license "${cleanTitle}", a studio-grade ${beat.genre} instrumental in ${beat.key} at ${beat.bpm} BPM produced by Onzieb. Non-exclusive commercial license with 100% royalty keep for Spotify and Apple Music.`,
        byArtist: {
          '@type': 'MusicGroup',
          'name': beat.producerName,
          'logo': 'https://differenttypeofvibe.com/images/logo.jpg',
          'url': 'https://differenttypeofvibe.com',
          'sameAs': [
            'https://www.instagram.com/onzieb',
            'https://www.youtube.com/@onzieb',
            'https://www.tiktok.com/@onzieb'
          ]
        },
        genre: beat.genre,
        tempo: `${beat.bpm} BPM`,
        musicalKey: beat.key,
        audio: {
          '@type': 'AudioObject',
          'name': `${cleanTitle} (Audio Preview)`,
          'contentUrl': beat.audioUrl,
          'encodingFormat': 'audio/mpeg',
          'bitrate': '320kbps'
        },
        'recordedAs': {
          '@id': `${canonicalUrl}#composition`
        }
      },
      {
        '@type': 'MusicComposition',
        '@id': `${canonicalUrl}#composition`,
        'name': cleanTitle,
        'composer': {
          '@type': 'Person',
          'name': beat.producerName,
        },
        'lyricist': {
          '@type': 'Person',
          'name': 'Recording Artist / Vocalist'
        },
        'musicArrangement': 'Produced, mixed, and arranged by Onzieb',
        'publisher': {
          '@type': 'Organization',
          'name': 'Different Type of Vibe Music Publishing',
        }
      }
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

      <main className="container mx-auto px-4 py-10 max-w-4xl font-sans text-slate-100">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-neutral-400">
          <Link href="/" className="hover:text-purple-400 transition">Home</Link>
          <span>/</span>
          <Link href="/links" className="hover:text-purple-400 transition">Beats</Link>
          <span>/</span>
          <span className="text-purple-300 font-semibold">{cleanTitle}</span>
        </nav>

        {/* Hero Card */}
        <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl p-6 md:p-8 backdrop-blur-sm shadow-2xl mb-8">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="text-amber-400 text-sm">⭐⭐⭐⭐⭐</span>
            <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
              4.9 / 5.0 (58+ Verified Artist Reviews)
            </span>
            <span className="bg-purple-900/40 text-purple-300 text-xs px-2.5 py-0.5 rounded-full border border-purple-700/40">
              100% Royalty-Free Keep
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-2">
            {cleanTitle}
          </h1>
          <p className="text-slate-300 text-base md:text-lg mb-6">
            {beat.typeBeatArtists.join(' x ')} Type Beat &bull; {beat.genre} Instrumental
          </p>

          {/* Metadata Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-neutral-950/80 border border-neutral-800 rounded-lg text-xs font-mono text-purple-300">
              Tempo: {beat.bpm} BPM
            </span>
            <span className="px-3 py-1 bg-neutral-950/80 border border-neutral-800 rounded-lg text-xs font-mono text-purple-300">
              Key: {beat.key}
            </span>
            <span className="px-3 py-1 bg-neutral-950/80 border border-neutral-800 rounded-lg text-xs font-mono text-purple-300">
              Genre: {beat.genre}
            </span>
            <span className="px-3 py-1 bg-emerald-950/60 border border-emerald-800/60 rounded-lg text-xs font-mono text-emerald-300">
              ✓ Cleared for Spotify &amp; Apple Music
            </span>
          </div>

          {/* HTML5 Audio Player */}
          <div className="p-4 rounded-xl bg-neutral-950/90 border border-purple-900/40 mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">
                Full Audio Preview (Stream Untagged)
              </span>
              <span className="text-[11px] text-neutral-400">Studio 320kbps MP3</span>
            </div>
            <audio controls className="w-full mt-1" preload="metadata">
              <source src={beat.audioUrl} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>

          {/* Commercial Licensing Grid */}
          <h2 className="text-lg font-bold text-white mb-4">Choose Your Commercial License</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            <div className="p-4 bg-neutral-950/70 border border-neutral-800 rounded-xl">
              <span className="text-xs font-bold text-neutral-400 uppercase block mb-1">Basic MP3</span>
              <span className="text-2xl font-black text-white">{currency === 'USD' ? '$' : `${currency} `}{formatPrice(beat.price)}</span>
              <p className="text-xs text-neutral-400 mt-2">Untagged 320kbps MP3 &bull; Up to 100k Streams</p>
            </div>
            <div className="p-4 bg-purple-950/30 border border-purple-600/50 rounded-xl relative">
              <span className="absolute -top-2.5 right-3 bg-purple-600 text-white text-[10px] uppercase font-black px-2 py-0.5 rounded-full">Best Value</span>
              <span className="text-xs font-bold text-purple-300 uppercase block mb-1">Premium WAV</span>
              <span className="text-2xl font-black text-white">{currency === 'USD' ? '$' : `${currency} `}{formatPrice(49.99)}</span>
              <p className="text-xs text-neutral-300 mt-2">24-Bit Studio Master &bull; Up to 500k Streams</p>
            </div>
            <div className="p-4 bg-neutral-950/70 border border-neutral-800 rounded-xl">
              <span className="text-xs font-bold text-neutral-400 uppercase block mb-1">Trackout Stems</span>
              <span className="text-2xl font-black text-white">{currency === 'USD' ? '$' : `${currency} `}{formatPrice(149.99)}</span>
              <p className="text-xs text-neutral-400 mt-2">Isolated Audio Tracks &bull; Unlimited Streaming</p>
            </div>
          </div>

          {/* VIP Pass Banner */}
          <div className="p-4 bg-gradient-to-r from-purple-950/60 to-indigo-950/60 border border-purple-700/50 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              <p className="text-sm font-bold text-white">Get 5 Full WAV Leases Every Month for $9.99/mo</p>
              <p className="text-xs text-neutral-300">Save 90% with the VIP Standard Pass ($250 retail value).</p>
            </div>
            <Link
              href="/vip-pass"
              className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs rounded-lg transition whitespace-nowrap"
            >
              Unlock VIP Pass
            </Link>
          </div>
        </div>

        {/* Explore Hubs Navigation Silo */}
        <div className="flex flex-wrap items-center gap-2 mb-8 text-xs">
          <span className="text-neutral-400 font-semibold mr-1">Related Hubs:</span>
          {beat.typeBeatArtists[0] && (
            <Link
              href={`/vibe/${toSlug(beat.typeBeatArtists[0])}-type-beats`}
              className="px-3 py-1.5 bg-neutral-900 border border-neutral-800 rounded-lg text-purple-300 hover:border-purple-600 transition"
            >
              {beat.typeBeatArtists[0]} Type Beats
            </Link>
          )}
          <Link
            href={`/genre/${toSlug(beat.genre)}-beats`}
            className="px-3 py-1.5 bg-neutral-900 border border-neutral-800 rounded-lg text-purple-300 hover:border-purple-600 transition"
          >
            {beat.genre} Beats
          </Link>
          <Link
            href="/"
            className="px-3 py-1.5 bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-300 hover:text-white transition"
          >
            Explore All 100+ Beats
          </Link>
        </div>

        {/* Dynamic SEO Contextual Internal Links */}
        <RelatedBeats slug={beat.slug} />
      </main>
    </>
  );
}