import { Metadata } from 'next';
import Storefront from '@/app/page';

function formatSceneTitle(slug: string): string {
  return slug
    .split('-')
    .map((w) => {
      const lower = w.toLowerCase();
      if (lower === 'uk') return 'UK';
      if (lower === 'ny') return 'NY';
      if (lower === 'la') return 'LA';
      if (lower === 'dmv') return 'DMV';
      if (lower === 'rnb') return 'R&B';
      return w.charAt(0).toUpperCase() + w.slice(1);
    })
    .join(' ');
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const sceneName = formatSceneTitle(slug);
  const pageUrl = `https://www.differenttypeofvibe.com/scene/${slug}`;

  return {
    title: `${sceneName} | Buy Untagged Beats & Instrumentals`,
    description: `Explore authentic ${sceneName} produced by Onzieb. Instant untagged MP3, 24-bit WAV, and STEMS trackout leases cleared for Spotify and Apple Music.`,
    keywords: [
      sceneName.toLowerCase(),
      `buy ${sceneName.toLowerCase()}`,
      `${sceneName.toLowerCase()} 2026`,
      'regional type beats',
      'untagged instrumentals',
      'onzieb beats',
    ],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${sceneName} | Different Type of Vibe`,
      description: `Stream and license ${sceneName} produced by Onzieb. Instant WAV, MP3, and STEMS delivery.`,
      url: pageUrl,
      siteName: 'Different Type of Vibe',
      images: [
        {
          url: 'https://www.differenttypeofvibe.com/og-image.png',
          width: 1200,
          height: 630,
          alt: `${sceneName} - Different Type of Vibe`,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${sceneName} | Different Type of Vibe`,
      description: `Stream and license ${sceneName} produced by Onzieb.`,
      images: ['https://www.differenttypeofvibe.com/og-image.png'],
    },
  };
}

export default async function ScenePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sceneName = formatSceneTitle(slug);
  const pageUrl = `https://www.differenttypeofvibe.com/scene/${slug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: sceneName,
        description: `Explore ${sceneName} produced by Onzieb. Instant untagged MP3, WAV, and STEMS audio leases.`,
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
            name: sceneName,
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
        seoBadge="Regional Sound & Artist Scene"
        seoTitle={`${sceneName} — Official Beat Catalog`}
        seoDescription={`Stream and license studio-mixed ${sceneName} produced by Onzieb. Engineered with authentic drum bounce, clear vocal pockets, and instant untagged MP3, WAV, and STEMS delivery.`}
      />
    </>
  );
}
