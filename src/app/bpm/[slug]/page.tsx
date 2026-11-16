import { Metadata } from 'next';
import Storefront from '@/app/page';

function formatBpmTitle(slug: string): { title: string; bpmValue: string } {
  const match = slug.match(/^(\d+)-bpm-(.+)$/i);
  if (match) {
    const bpmValue = match[1];
    const style = match[2]
      .split('-')
      .map((w) => (w.toLowerCase() === 'rnb' ? 'R&B' : w.charAt(0).toUpperCase() + w.slice(1)))
      .join(' ');
    return { title: `${bpmValue} BPM ${style}`, bpmValue };
  }
  const fallback = slug
    .split('-')
    .map((w) => (w.toLowerCase() === 'bpm' ? 'BPM' : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(' ');
  return { title: fallback, bpmValue: '140' };
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const { title, bpmValue } = formatBpmTitle(slug);
  const pageUrl = `https://www.differenttypeofvibe.com/bpm/${slug}`;

  return {
    title: `${title} | Untagged ${bpmValue} BPM Instrumentals for Sale`,
    description: `Stream and license ${title} produced by Onzieb. Tempo-locked ${bpmValue} BPM untagged MP3, 24-bit WAV, and STEMS trackouts for recording artists.`,
    keywords: [
      title.toLowerCase(),
      `${bpmValue} bpm beats`,
      `${bpmValue} bpm instrumentals`,
      'tempo locked beats',
      'onzieb beats',
    ],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${title} | Different Type of Vibe`,
      description: `Stream and license ${title} (${bpmValue} BPM) produced by Onzieb. Instant WAV, MP3, and STEMS delivery.`,
      url: pageUrl,
      siteName: 'Different Type of Vibe',
      images: [
        {
          url: 'https://www.differenttypeofvibe.com/og-image.png',
          width: 1200,
          height: 630,
          alt: `${title} - Different Type of Vibe`,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Different Type of Vibe`,
      description: `Stream and license ${title} produced by Onzieb.`,
      images: ['https://www.differenttypeofvibe.com/og-image.png'],
    },
  };
}

export default async function BpmPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { title, bpmValue } = formatBpmTitle(slug);
  const pageUrl = `https://www.differenttypeofvibe.com/bpm/${slug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: title,
        description: `Tempo-locked ${title} (${bpmValue} BPM) produced by Onzieb. Instant untagged MP3, WAV, and STEMS leases.`,
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
            name: title,
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
        seoBadge={`${bpmValue} BPM Tempo Catalog`}
        seoTitle={`${title} (${bpmValue} BPM Studio Instrumentals)`}
        seoDescription={`Lock in your vocal cadence with ${title} produced by Onzieb. Precision-arranged at ${bpmValue} BPM for seamless DAW session grid alignment in FL Studio, Logic Pro, Ableton, and Pro Tools.`}
      />
    </>
  );
}
