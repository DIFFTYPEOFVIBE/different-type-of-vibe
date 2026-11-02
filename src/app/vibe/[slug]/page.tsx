import Storefront from '@/app/page';

const SLUG_MAP: Record<string, string> = {
  'drake-type-beats': 'Drake Type Beats',
  'travis-scott-type-beats': 'Travis Scott Type Beats',
  'metro-boomin-type-beats': 'Metro Boomin Type Beats',
  'j-cole-type-beats': 'J. Cole Type Beats',
  'future-type-beats': 'Future Type Beats',
  'playboi-carti-type-beats': 'Playboi Carti Type Beats',
  '21-savage-type-beats': '21 Savage Type Beats',
  'gunna-type-beats': 'Gunna Type Beats',
  'lil-baby-type-beats': 'Lil Baby Type Beats',
  'don-toliver-type-beats': 'Don Toliver Type Beats',
  'sza-type-beats': 'SZA Type Beats',
  'bryson-tiller-type-beats': 'Bryson Tiller Type Beats',
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const categoryName = SLUG_MAP[slug] || 'Artist Vibe Beats';
  const pageUrl = `https://differenttypeofvibe.com/vibe/${slug}`;
  
  return {
    title: `Buy ${categoryName} 2026 | Free Download & Untagged Leases`,
    description: `Stream and license high-quality ${categoryName} produced by Onzieb. Instant MP3, WAV, and STEMS trackout delivery for independent recording artists.`,
    keywords: [
      categoryName.toLowerCase(),
      `buy ${categoryName.toLowerCase()}`,
      `${categoryName.toLowerCase()} 2026`,
      'untagged type beat',
      'onzieb beats',
      'free type beat'
    ],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `Buy ${categoryName} | Different Type of Vibe`,
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
      title: `Buy ${categoryName} | Different Type of Vibe`,
      description: `Stream and license high-quality ${categoryName} produced by Onzieb.`,
      images: ['https://differenttypeofvibe.com/og-image.png'],
    },
  };
}

export default async function VibePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const initialCategory = SLUG_MAP[slug] || 'All';
  const categoryName = SLUG_MAP[slug] || 'Artist Vibe Beats';
  const pageUrl = `https://differenttypeofvibe.com/vibe/${slug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        'name': `Buy ${categoryName} 2026`,
        'description': `Stream and license high-quality ${categoryName} produced by Onzieb. Download instant untagged MP3, WAV, and STEMS audio leases.`,
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
