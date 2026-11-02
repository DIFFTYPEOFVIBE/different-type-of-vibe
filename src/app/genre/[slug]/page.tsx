import Storefront from '@/app/page';

const SLUG_MAP: Record<string, string> = {
  'trap-beats': 'Trap Beats',
  'boom-bap-beats': 'Boom Bap Beats',
  'rb-instrumentals': 'R&B Instrumentals',
  'hip-hop-beats': 'Hip-Hop Beats',
  'lofi-hip-hop-beats': 'Lo-Fi Beats',
  'drill-beats': 'Drill Beats',
  'synthwave-instrumentals': 'Synthwave Instrumentals',
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const categoryName = SLUG_MAP[slug] || 'Genre Beats';
  const pageUrl = `https://differenttypeofvibe.com/genre/${slug}`;
  
  return {
    title: `Buy ${categoryName} Online | Instrumentals for Sale`,
    description: `Browse premium ${categoryName} produced by Onzieb. Download instant untagged MP3, WAV, and STEMS audio leases for Spotify and Apple Music.`,
    keywords: [
      categoryName.toLowerCase(),
      `buy ${categoryName.toLowerCase()}`,
      `${categoryName.toLowerCase()} for sale`,
      'untagged beat leases',
      'onzieb beats',
      'buy beats online'
    ],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `Buy ${categoryName} Online | Different Type of Vibe`,
      description: `Stream and license high-quality ${categoryName} produced by Onzieb. Instant WAV, MP3, and STEMS trackout delivery.`,
      url: pageUrl,
      siteName: 'Different Type of Vibe',
      images: [
        {
          url: 'https://differenttypeofvibe.com/og-image.png',
          width: 1200,
          height: 630,
          alt: `${categoryName} Catalog - Different Type of Vibe`,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Buy ${categoryName} Online | Different Type of Vibe`,
      description: `Stream and license high-quality ${categoryName} produced by Onzieb.`,
      images: ['https://differenttypeofvibe.com/og-image.png'],
    },
  };
}

export default async function GenrePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const initialCategory = SLUG_MAP[slug] || 'All';
  const categoryName = SLUG_MAP[slug] || 'Genre Beats';
  const pageUrl = `https://differenttypeofvibe.com/genre/${slug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        'name': `Buy ${categoryName} Online`,
        'description': `Browse premium ${categoryName} produced by Onzieb. Download instant untagged MP3, WAV, and STEMS audio leases.`,
        'url': pageUrl,
        'publisher': {
          '@type': 'Organization',
          'name': 'Different Type of Vibe',
          'url': 'https://differenttypeofvibe.com'
        }
      },
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://differenttypeofvibe.com'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': categoryName,
            'item': pageUrl
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Storefront initialFilter={initialCategory} />
    </>
  );
}
