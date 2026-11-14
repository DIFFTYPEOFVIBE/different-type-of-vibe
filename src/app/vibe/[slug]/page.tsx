import Storefront from '@/app/page';

interface StrikingDistanceConfig {
  metaTitle: string;
  metaDesc: string;
  seoTitle: string;
  seoBadge: string;
  seoDescription: string;
  keywords: string[];
  faqs: { question: string; answer: string }[];
}

const STRIKING_DISTANCE_CONFIGS: Record<string, StrikingDistanceConfig> = {
  'metro-boomin-type-beats': {
    metaTitle: 'Metro Boomin Beats for Sale | Dark 808 Trap & Leases | Different Type of Vibe',
    metaDesc: 'Buy untagged Metro Boomin beats for sale. Studio 24-bit WAV & STEM trackouts for dark 808 trap, Future & 21 Savage vibes. Instant licenses from $29.99.',
    seoTitle: 'Metro Boomin Beats for Sale (Dark 808 Trap & Leases)',
    seoBadge: '🔥 Top Ranked Dark Trap Sound',
    seoDescription: 'Stream and buy untagged Metro Boomin beats for sale produced by Onzieb. Heavy 808 sub bass, menacing synth melodies, and crisp rolling hi-hats. Commercial WAV leases and STEM trackouts cleared for Spotify, Apple Music, and YouTube.',
    keywords: [
      'metro boomin beats for sale',
      'metro boomin type beat',
      'buy metro boomin beat',
      'how much for a metro boomin beat',
      'metro boomin beat price',
      'metro boomin beat pack',
      'dark 808 trap beats',
      'future 21 savage type beat',
    ],
    faqs: [
      {
        question: 'How much are Metro Boomin beats for sale on Different Type of Vibe?',
        answer: 'Untagged MP3 Basic Leases are $29.99, WAV Premium Leases are $49.99, and full Trackout STEMs are $149.99. You can also unlock unlimited leases for only $9.99/mo with our VIP Standard Pass.',
      },
      {
        question: 'Can I release songs made with these Metro Boomin style beats on Spotify and Apple Music?',
        answer: 'Yes! All beat licenses include non-exclusive commercial streaming distribution rights across Spotify, Apple Music, YouTube Music, and Tidal with 100% master royalties retained by the artist.',
      },
      {
        question: 'Do these Metro Boomin instrumentals include separate stem trackouts?',
        answer: 'Yes. Stems licenses include isolated 24-bit studio WAV tracks for tuned 808 bass, kick, snare, hi-hats, melodies, and sound design layers for professional mixing.',
      },
    ],
  },
  'travis-scott-type-beats': {
    metaTitle: 'Travis Scott Type Beats for Sale | Psychedelic Trap & Heavy 808s | Different Type of Vibe',
    metaDesc: 'Buy untagged Travis Scott type beats for sale. High-energy distorted 808s, Mike Dean synth layers, and WAV trackouts. Instant licenses from $29.99.',
    seoTitle: 'Travis Scott Type Beats for Sale (Psychedelic Dark Trap)',
    seoBadge: '🔥 Top 10 Ranked Vibe',
    seoDescription: 'Stream & license untagged Travis Scott type beats produced by Onzieb. Analog synth textures, ambient beat switches, and punchy 808s. Includes signed commercial PDF contracts and 24-bit WAV files.',
    keywords: [
      'type beats travis scott type beat',
      'travis scott type beat',
      'travis scott type beats for sale',
      'buy travis scott beats',
      'travis scott vibes',
      'astroworld type beat',
      'psychedelic trap beats',
    ],
    faqs: [
      {
        question: 'Can I upload songs made with these Travis Scott beats to Spotify and YouTube?',
        answer: 'Yes. Commercial monetization and distribution rights are 100% cleared worldwide. You will never receive copyright strikes or Content ID takedowns.',
      },
      {
        question: 'Are beat switches and vocal tag removal included?',
        answer: 'Yes! All leased versions are delivered 100% untagged in pristine 24-bit WAV audio quality immediately after checkout.',
      },
      {
        question: 'How do I get commercial stems for a Travis Scott instrumental?',
        answer: 'Choose the STEMS license at checkout for an instant ZIP download containing all separate melodic layers, 808s, and drum tracks.',
      },
    ],
  },
  'j-cole-type-beats': {
    metaTitle: 'J. Cole Type Beats for Sale | Soulful Boom Bap & Lofi Leases | Different Type of Vibe',
    metaDesc: 'Buy untagged J. Cole type beats for sale. Warm vinyl chops, boom bap drums, and soulful melodic chords. Instant commercial WAV download from $29.99.',
    seoTitle: 'J. Cole Type Beats for Sale (Soulful Boom Bap & Lofi)',
    seoBadge: '🔥 #1 Organic Search Demand',
    seoDescription: 'Stream & buy untagged J. Cole type beats for sale produced by Onzieb. Warm Rhodes keys, soulful vocal samples, acoustic basslines, and punchy drum breaks. Commercial leases cleared for streaming and radio.',
    keywords: [
      'j cole type beats',
      'j cole type beat',
      'j cole beats for sale',
      'j cole drums',
      'j cole drum loops',
      'buy boom bap beats',
      'soulful boom bap beats',
    ],
    faqs: [
      {
        question: 'How do I buy J. Cole type beats online?',
        answer: 'Select your preferred license (MP3 Basic, WAV Premium, or Stems) and complete 1-click checkout with Apple Pay, Google Pay, or card. Files are sent instantly to your email.',
      },
      {
        question: 'Are these J. Cole style samples cleared for commercial release?',
        answer: 'Yes! All compositions are 100% original productions by Onzieb with zero third-party uncleared samples. Safe for Spotify, Apple Music, and sync licensing.',
      },
    ],
  },
};

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

function resolveVibeCategory(slug: string): string {
  if (SLUG_MAP[slug]) return SLUG_MAP[slug];
  if (slug.endsWith('-type-beats')) {
    const artistPart = slug.replace(/-type-beats$/, '').split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    return `${artistPart} Type Beats`;
  }
  return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const categoryName = resolveVibeCategory(slug);
  const pageUrl = `https://www.differenttypeofvibe.com/vibe/${slug}`;
  const striking = STRIKING_DISTANCE_CONFIGS[slug];

  if (striking) {
    return {
      title: striking.metaTitle,
      description: striking.metaDesc,
      keywords: striking.keywords,
      alternates: { canonical: pageUrl },
      openGraph: {
        title: striking.metaTitle,
        description: striking.metaDesc,
        url: pageUrl,
        siteName: 'Different Type of Vibe',
        images: [{ url: 'https://www.differenttypeofvibe.com/og-image.png', width: 1200, height: 630, alt: striking.metaTitle }],
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: striking.metaTitle,
        description: striking.metaDesc,
        images: ['https://www.differenttypeofvibe.com/og-image.png'],
      },
    };
  }
  
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
          url: 'https://www.differenttypeofvibe.com/og-image.png',
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
      images: ['https://www.differenttypeofvibe.com/og-image.png'],
    },
  };
}

export default async function VibePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const categoryName = resolveVibeCategory(slug);
  const initialCategory = categoryName !== 'Artist Vibe Beats' ? categoryName : 'All';
  const pageUrl = `https://www.differenttypeofvibe.com/vibe/${slug}`;
  const striking = STRIKING_DISTANCE_CONFIGS[slug];

  const graphNodes: any[] = [
    {
      '@type': 'CollectionPage',
      'name': striking ? striking.seoTitle : `Buy ${categoryName} 2026`,
      'description': striking ? striking.seoDescription : `Stream and license high-quality ${categoryName} produced by Onzieb. Download instant untagged MP3, WAV, and STEMS audio leases.`,
      'url': pageUrl,
      'publisher': {
        '@type': 'Organization',
        'name': 'Different Type of Vibe',
        'url': 'https://www.differenttypeofvibe.com'
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
          'name': categoryName,
          'item': pageUrl
        }
      ]
    }
  ];

  if (striking && striking.faqs && striking.faqs.length > 0) {
    graphNodes.push({
      '@type': 'FAQPage',
      'mainEntity': striking.faqs.map(faq => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer
        }
      }))
    });
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': graphNodes
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Storefront
        initialFilter={initialCategory}
        seoBadge={striking ? striking.seoBadge : "Artist Vibe Catalog"}
        seoTitle={striking ? striking.seoTitle : `Buy ${categoryName} (2026 Catalog)`}
        seoDescription={striking ? striking.seoDescription : `Explore and license custom ${categoryName} produced by Onzieb. Instant untagged MP3, 24-bit WAV, and STEMS trackout with commercial streaming clearance.`}
      />
    </>
  );
}
