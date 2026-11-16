import { Metadata } from 'next';
import Storefront from '@/app/page';

function formatTitle(slug: string): string {
  return slug
    .split('-')
    .map((w) => (w.toLowerCase() === 'rnb' ? 'R&B' : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(' ');
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const moodName = formatTitle(slug);
  const pageUrl = `https://www.differenttypeofvibe.com/mood/${slug}`;

  return {
    title: `${moodName} | Stream & Buy Untagged Instrumentals`,
    description: `Browse ${moodName} produced by Onzieb. Instant MP3, 24-bit WAV, and STEMS trackout leases cleared for Spotify, Apple Music, and YouTube.`,
    keywords: [
      moodName.toLowerCase(),
      `buy ${moodName.toLowerCase()}`,
      `${moodName.toLowerCase()} 2026`,
      'mood beats',
      'untagged instrumentals',
      'onzieb beats',
    ],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${moodName} | Different Type of Vibe`,
      description: `Stream and license studio-quality ${moodName} produced by Onzieb. Instant WAV, MP3, and STEMS delivery.`,
      url: pageUrl,
      siteName: 'Different Type of Vibe',
      images: [
        {
          url: 'https://www.differenttypeofvibe.com/og-image.png',
          width: 1200,
          height: 630,
          alt: `${moodName} - Different Type of Vibe`,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${moodName} | Different Type of Vibe`,
      description: `Stream and license studio-quality ${moodName} produced by Onzieb.`,
      images: ['https://www.differenttypeofvibe.com/og-image.png'],
    },
  };
}

export default async function MoodPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const moodName = formatTitle(slug);
  const pageUrl = `https://www.differenttypeofvibe.com/mood/${slug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: `${moodName} Catalog`,
        description: `Browse ${moodName} produced by Onzieb. Instant untagged MP3, WAV, and STEMS audio leases.`,
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
            name: moodName,
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
        seoBadge="Mood & Atmosphere Catalog"
        seoTitle={`${moodName} — Untagged Studio Instrumentals`}
        seoDescription={`Write and record over curated ${moodName} crafted by Onzieb. Every beat includes instant untagged MP3, 24-bit WAV, or full Trackout STEMS licensing cleared for Spotify, Apple Music, and commercial release.`}
      />
    </>
  );
}
