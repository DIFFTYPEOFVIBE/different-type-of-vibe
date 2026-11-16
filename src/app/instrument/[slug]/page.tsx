import { Metadata } from 'next';
import Storefront from '@/app/page';

function formatInstrumentTitle(slug: string): string {
  return slug
    .split('-')
    .map((w) => (w.toLowerCase() === 'rnb' ? 'R&B' : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(' ');
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const instrumentTitle = formatInstrumentTitle(slug);
  const pageUrl = `https://www.differenttypeofvibe.com/instrument/${slug}`;

  return {
    title: `${instrumentTitle} | Buy Untagged Instrumentals Online`,
    description: `Stream and license ${instrumentTitle} produced by Onzieb. Rich melodic layers, punchy drums, and instant untagged MP3, WAV, and STEMS delivery.`,
    keywords: [
      instrumentTitle.toLowerCase(),
      `buy ${instrumentTitle.toLowerCase()}`,
      `${instrumentTitle.toLowerCase()} 2026`,
      'untagged instrumentals',
      'onzieb beats',
    ],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${instrumentTitle} | Different Type of Vibe`,
      description: `Stream and license ${instrumentTitle} produced by Onzieb. Instant WAV, MP3, and STEMS delivery.`,
      url: pageUrl,
      siteName: 'Different Type of Vibe',
      images: [
        {
          url: 'https://www.differenttypeofvibe.com/og-image.png',
          width: 1200,
          height: 630,
          alt: `${instrumentTitle} - Different Type of Vibe`,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${instrumentTitle} | Different Type of Vibe`,
      description: `Stream and license ${instrumentTitle} produced by Onzieb.`,
      images: ['https://www.differenttypeofvibe.com/og-image.png'],
    },
  };
}

export default async function InstrumentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const instrumentTitle = formatInstrumentTitle(slug);
  const pageUrl = `https://www.differenttypeofvibe.com/instrument/${slug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: instrumentTitle,
        description: `Browse ${instrumentTitle} produced by Onzieb. Instant untagged MP3, WAV, and STEMS leases.`,
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
            name: instrumentTitle,
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
        seoBadge="Instrument & Sound Design Catalog"
        seoTitle={`${instrumentTitle} — Studio Instrumental Catalog`}
        seoDescription={`Explore ${instrumentTitle} arranged and mixed by Onzieb. Designed with wide stereo imaging and open midrange vocal headroom, ready for instant MP3, WAV, or STEMS licensing.`}
      />
    </>
  );
}
