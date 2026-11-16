import { Metadata } from 'next';
import Storefront from '@/app/page';

function formatKeyTitle(slug: string): string {
  return slug
    .split('-')
    .map((w) => (w.toLowerCase() === 'rnb' ? 'R&B' : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(' ');
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const keyTitle = formatKeyTitle(slug);
  const pageUrl = `https://www.differenttypeofvibe.com/key/${slug}`;

  return {
    title: `${keyTitle} | Harmonic Key-Matched Beats for Artists`,
    description: `Browse ${keyTitle} produced by Onzieb. Key-labeled instrumentals for effortless Auto-Tune vocal tuning and instant untagged WAV/MP3/STEMS licensing.`,
    keywords: [
      keyTitle.toLowerCase(),
      `buy ${keyTitle.toLowerCase()}`,
      'key labeled beats',
      'autotune key matched beats',
      'onzieb beats',
    ],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${keyTitle} | Different Type of Vibe`,
      description: `Stream and license key-labeled ${keyTitle} produced by Onzieb. Instant WAV, MP3, and STEMS delivery.`,
      url: pageUrl,
      siteName: 'Different Type of Vibe',
      images: [
        {
          url: 'https://www.differenttypeofvibe.com/og-image.png',
          width: 1200,
          height: 630,
          alt: `${keyTitle} - Different Type of Vibe`,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${keyTitle} | Different Type of Vibe`,
      description: `Stream and license ${keyTitle} produced by Onzieb.`,
      images: ['https://www.differenttypeofvibe.com/og-image.png'],
    },
  };
}

export default async function KeySignaturePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const keyTitle = formatKeyTitle(slug);
  const pageUrl = `https://www.differenttypeofvibe.com/key/${slug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: keyTitle,
        description: `Harmonic key-matched ${keyTitle} produced by Onzieb with instant untagged MP3, WAV, and STEMS delivery.`,
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
            name: keyTitle,
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
        seoBadge="Musical Key Signature Catalog"
        seoTitle={`${keyTitle} — Key-Labeled Studio Instrumentals`}
        seoDescription={`Dial in your Auto-Tune, Melodyne, and vocal harmonies immediately with ${keyTitle} produced by Onzieb. Includes instant untagged MP3, 24-bit WAV, and Trackout STEMS licensing.`}
      />
    </>
  );
}
