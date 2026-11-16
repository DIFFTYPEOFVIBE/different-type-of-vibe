import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Storefront from '@/app/page';
import sitemap from '@/app/sitemap';

const UPPERCASE_TOKENS = new Set([
  'uk', 'us', 'ny', 'la', 'dc', 'bc', 'ab', 'on', 'qc', 'nsw', 'qld', 'vic',
  'wa', 'sa', 'nrw', 'zh', 'ge', 'vd', 'bs', 'be', 'lu', 'ag', 'sg', 'ti',
  'rnb', 'bpm', 'wav', 'mp3', 'stems', 'vip', 'cbd', 'gra', 'fha',
]);

function formatLandingTitle(slug: string): string {
  return slug
    .split('-')
    .map((word) => {
      const lower = word.toLowerCase();
      if (lower === 'rnb') return 'R&B';
      if (UPPERCASE_TOKENS.has(lower)) return lower.toUpperCase();
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

let cachedRootSlugs: Set<string> | null = null;
async function getValidRootSlugs(): Promise<Set<string>> {
  if (cachedRootSlugs) return cachedRootSlugs;
  const entries = await sitemap();
  const slugs = new Set<string>();
  for (const entry of entries) {
    const match = entry.url.match(/^https?:\/\/(?:www\.)?differenttypeofvibe\.com\/([^/?#]+)$/);
    if (match) {
      slugs.add(match[1]);
    }
  }
  cachedRootSlugs = slugs;
  return slugs;
}

function isRecognizedRootSeoSlug(slug: string): boolean {
  return /(beat-store|beats|instrumentals|alternative|custom-store|studio|bounce|amapiano|afrobeats|highlife|drill|trap|rnb|hip-hop|vibes|leases|licensing|download)$/i.test(
    slug
  );
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const validSlugs = await getValidRootSlugs();

  if (!validSlugs.has(slug) && !isRecognizedRootSeoSlug(slug)) {
    return { title: 'Page Not Found' };
  }

  const cleanTitle = formatLandingTitle(slug);
  const pageUrl = `https://www.differenttypeofvibe.com/${slug}`;

  const isAlternative = /alternative|custom-store/i.test(slug);
  const metaTitle = isAlternative
    ? `${cleanTitle} (2026) | Zero-Fee Direct Beat Store & Instant WAV Leases`
    : `${cleanTitle} | Buy Untagged Beats, WAV Leases & Stems Online`;

  const metaDescription = isAlternative
    ? `Compare ${cleanTitle} in 2026. Stream and license untagged MP3, 24-bit WAV, and Trackout STEMS directly from Onzieb with zero marketplace fees and instant delivery.`
    : `Official ${cleanTitle} catalog by Onzieb. Stream and license untagged MP3, 24-bit WAV, and Trackout STEMS instrumentals or join the $9.99/mo VIP Beat Pass.`;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: [
      cleanTitle.toLowerCase(),
      `buy beats ${cleanTitle.toLowerCase()}`,
      'untagged wav beat leases',
      'onzieb beats',
      'different type of vibe',
    ],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${cleanTitle} | Different Type of Vibe`,
      description: metaDescription,
      url: pageUrl,
      siteName: 'Different Type of Vibe',
      images: [
        {
          url: 'https://www.differenttypeofvibe.com/og-image.png',
          width: 1200,
          height: 630,
          alt: `${cleanTitle} - Different Type of Vibe`,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${cleanTitle} | Different Type of Vibe`,
      description: metaDescription,
      images: ['https://www.differenttypeofvibe.com/og-image.png'],
    },
  };
}

export default async function RootSeoLandingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const validSlugs = await getValidRootSlugs();

  if (!validSlugs.has(slug) && !isRecognizedRootSeoSlug(slug)) {
    notFound();
  }

  const cleanTitle = formatLandingTitle(slug);
  const pageUrl = `https://www.differenttypeofvibe.com/${slug}`;
  const isAlternative = /alternative|custom-store/i.test(slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: cleanTitle,
        description: `Official ${cleanTitle} instrumental beat store produced by Onzieb. Instant untagged MP3, 24-bit WAV, and STEMS licensing.`,
        url: pageUrl,
        publisher: {
          '@type': 'Organization',
          name: 'Different Type of Vibe',
          url: 'https://www.differenttypeofvibe.com',
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.differenttypeofvibe.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: cleanTitle,
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Storefront
        initialFilter="All"
        seoBadge={isAlternative ? 'Direct Producer Storefront' : 'Official Regional & Studio Hub'}
        seoTitle={
          isAlternative
            ? `${cleanTitle} — Direct Producer Beat Store (Zero Marketplace Fees)`
            : `${cleanTitle} — Untagged Beats & Studio WAV Leases`
        }
        seoDescription={
          isAlternative
            ? `Skip third-party marketplace fees and license studio-mixed instrumentals directly from Onzieb. Instant automated delivery for MP3 ($29.99), 24-bit WAV ($49.99), Trackout STEMS ($149.99), and the $9.99/mo VIP Beat Pass.`
            : `Stream and license studio-ready instrumentals for ${cleanTitle}. Every beat is produced and mixed by Onzieb with instant untagged MP3, 24-bit WAV, and Trackout STEMS delivery cleared for Spotify, Apple Music, and commercial distribution.`
        }
      />
    </>
  );
}
