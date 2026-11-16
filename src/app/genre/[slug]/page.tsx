import Storefront from '@/app/page';

interface GenreSEOConfig {
  metaTitle: string;
  metaDesc: string;
  seoTitle: string;
  seoBadge: string;
  seoDescription: string;
  keywords: string[];
  reviewCount: number;
  faqs: { question: string; answer: string }[];
}

const GENRE_SEO_CONFIGS: Record<string, GenreSEOConfig> = {
  'boom-bap-beats': {
    metaTitle: 'Boom Bap Beats for Sale | Soulful 90s Drum Breaks & Leases | Different Type of Vibe',
    metaDesc: 'Buy untagged boom bap beats for sale. Hard-hitting drum breaks, vinyl chops, and soulful jazz chords. Commercial 24-bit WAV licenses from $29.99.',
    seoTitle: 'Boom Bap Beats for Sale (Classic 90s Drum Breaks & Soulful Chords)',
    seoBadge: '🔥 Classic East Coast & Golden Era Hip-Hop',
    seoDescription: 'Browse and buy untagged boom bap beats for sale produced by Onzieb. Authentic vinyl sampling aesthetics, punchy acoustic kicks, crisp snares, and warm Rhodes keyboards. Cleared for Spotify, Apple Music, and streaming release with 100% royalty keep.',
    reviewCount: 84,
    keywords: [
      'boom bap beats for sale',
      'buy boom bap beats',
      'boom bap instrumentals for sale',
      '90s boom bap type beats',
      'soulful boom bap beats',
      'east coast hip hop beats',
      'boom bap drum loops',
    ],
    faqs: [
      {
        question: 'How do I buy boom bap beats for sale on Different Type of Vibe?',
        answer: 'Select your instrumental, pick an untagged MP3, WAV, or Stems license, and complete 1-click checkout. Your audio files and signed PDF license agreement are emailed immediately.',
      },
      {
        question: 'Are the vintage samples in these boom bap beats cleared for Spotify release?',
        answer: 'Yes! All melodies, chords, and chops are 100% original compositions recorded from scratch by Onzieb with zero third-party uncleared samples. Safe for Spotify, Apple Music, and sync licensing.',
      },
      {
        question: 'What tempos (BPM) are your boom bap beats produced in?',
        answer: 'Our boom bap catalog is produced between 85 and 96 BPM—the golden-era pocket ideal for lyrical delivery, double-time flows, and classic storytelling.',
      },
      {
        question: 'Can I get uncompressed 24-bit WAVs and stem trackouts?',
        answer: 'Yes. WAV licenses include full uncompressed 24-bit studio masters, and Stems licenses deliver separate tracks for drums, bass, keys, and melodic elements for professional mixing.',
      },
      {
        question: 'Can I download boom bap beats with the $9.99/mo VIP Pass?',
        answer: 'Yes! The VIP Standard Pass grants 5 commercial WAV licenses every month for just $9.99/mo, saving you over 90% compared to single purchases.',
      },
    ],
  },
  'trap-beats': {
    metaTitle: 'Trap Beats for Sale | Hard 808s, Dark Melodies & Leases | Different Type of Vibe',
    metaDesc: 'Buy trap beats for sale online. Hard-hitting tuned 808s, rolling hi-hats, and atmospheric synth melodies. Instant untagged WAV licenses from $29.99.',
    seoTitle: 'Trap Beats for Sale (Heavy 808s, Dark Melodies & Commercial Leases)',
    seoBadge: '🔥 Industry Standard 808 Trap',
    seoDescription: 'Stream and buy untagged trap beats for sale produced by Onzieb. Menacing 808 glides, crisp rolling hi-hats, dark synth textures, and high-energy drums. 100% royalty-free commercial licenses cleared for streaming.',
    reviewCount: 96,
    keywords: [
      'trap beats for sale',
      'buy trap beats online',
      'buy trap beats',
      'exclusive trap beats for sale',
      'trap beats buy',
      'hard 808 trap instrumentals',
      'melodic trap beats for sale',
    ],
    faqs: [
      {
        question: 'How much do trap beats cost on Different Type of Vibe?',
        answer: 'Untagged MP3 Basic Leases are $29.99, 24-bit studio WAV Premium Leases are $49.99, and full Trackout STEMs are $149.99. You can also access 5 WAV leases per month for just $9.99/mo with our VIP Pass.',
      },
      {
        question: 'Are these trap beats delivered untagged without voice tags?',
        answer: 'Yes! All purchased licenses are delivered 100% untagged in pristine studio quality immediately after checkout.',
      },
      {
        question: 'Can I release songs on Spotify and monetize YouTube videos?',
        answer: 'Yes! Every lease includes commercial distribution rights for Spotify, Apple Music, YouTube, and TikTok with 100% master royalties retained by the artist.',
      },
      {
        question: 'Are 808 bass slides and kicks mixed with proper vocal headroom?',
        answer: 'Yes. All trap instrumentals are mixed with -6dB to -3dB true peak headroom, ensuring your vocal tracking sits cleanly on top of heavy 808 sub-bass.',
      },
      {
        question: 'Do you offer exclusive trap beats for sale?',
        answer: 'Yes. Exclusive rights buyouts are available for artists requiring complete sole ownership and immediate catalog removal.',
      },
    ],
  },
  'hip-hop-beats': {
    metaTitle: 'Hip Hop Beats for Sale | Buy Industry Instrumentals Online | Different Type of Vibe',
    metaDesc: 'Buy hip hop beats for sale online. Stream premium instrumentals, boom bap, trap, and melodic rap. Instant untagged WAV & Stems delivery from $29.99.',
    seoTitle: 'Hip Hop Beats for Sale (Modern & Golden Era Rap Instrumentals)',
    seoBadge: '🔥 Universal Rap & Hip-Hop Catalog',
    seoDescription: 'Browse the official hip hop beats catalog produced by Onzieb. Diverse sub-genres from soulful boom bap and melodic trap to West Coast and underground rap. 100% royalty-free commercial licenses.',
    reviewCount: 110,
    keywords: [
      'hip hop beats for sale',
      'buy hip hop beats',
      'hip hop instrumentals for sale',
      'best hip hop beats for sale',
      'rap beats for sale',
      'buy beats online',
      'untagged hip hop beats',
    ],
    faqs: [
      {
        question: 'How do I license hip hop beats on Different Type of Vibe?',
        answer: 'Browse the catalog, listen to full previews, select your license tier (MP3, WAV, or STEMs), and check out securely. Downloads and licenses are sent to your email instantly.',
      },
      {
        question: 'What rights are included with a hip hop beat lease?',
        answer: 'You receive non-exclusive commercial streaming distribution rights for Spotify, Apple Music, and streaming platforms, plus music video monetization rights.',
      },
      {
        question: 'What is the difference between MP3, WAV, and STEMS?',
        answer: 'An MP3 is a 320kbps stereo file for demo or basic release. WAV is a studio-grade 24-bit lossless file. STEMS provide individual separated trackouts for vocal mixing.',
      },
      {
        question: 'Can I release on streaming platforms without copyright strikes?',
        answer: 'Yes! 100% of the instrumentation is originally composed. We guarantee zero Content ID strikes or takedowns on Spotify and YouTube.',
      },
    ],
  },
  'rb-instrumentals': {
    metaTitle: 'R&B Instrumentals for Sale | Smooth Melodic & Trap Soul Beats | Different Type of Vibe',
    metaDesc: 'Buy smooth R&B instrumentals and trap soul beats. Warm Rhodes keys, vocal chops, and deep 808 basslines. Instant commercial WAV download from $29.99.',
    seoTitle: 'R&B Instrumentals for Sale (Smooth Soul, R&B & Trap Soul)',
    seoBadge: '🔥 Soulful Vocal & R&B Aesthetics',
    seoDescription: 'Stream and license smooth R&B instrumentals produced by Onzieb. Lush chord voicings, ambient textures, trap soul 808s, and slow-jam vibes. Cleared for commercial release with 100% royalty keep.',
    reviewCount: 78,
    keywords: [
      'r&b instrumentals for sale',
      'buy r&b beats',
      'trap soul beats for sale',
      'smooth r&b type beat',
      'soulful r&b beats',
    ],
    faqs: [
      {
        question: 'What styles of R&B instrumentals do you offer?',
        answer: 'Our R&B catalog spans classic 90s slow jams, modern trap soul (Bryson Tiller / SZA style), ambient alternative R&B (Drake style), and neo-soul.',
      },
      {
        question: 'Are vocal stems and keys separated in trackout licenses?',
        answer: 'Yes. The STEMS license includes isolated tracks for pianos, pads, vocal chops, basslines, and percussion for full mixing flexibility.',
      },
      {
        question: 'Are commercial streaming rights included?',
        answer: 'Yes, all licenses include non-exclusive worldwide distribution rights on Spotify, Apple Music, and all major streaming services.',
      },
    ],
  },
};

const SLUG_MAP: Record<string, string> = {
  'trap-beats': 'Trap Beats',
  'boom-bap-beats': 'Boom Bap Beats',
  'rb-instrumentals': 'R&B Instrumentals',
  'hip-hop-beats': 'Hip-Hop Beats',
  'lofi-hip-hop-beats': 'Lo-Fi Beats',
  'drill-beats': 'Drill Beats',
  'synthwave-instrumentals': 'Synthwave Instrumentals',
};

function resolveGenreCategory(slug: string): string {
  if (SLUG_MAP[slug]) return SLUG_MAP[slug];
  return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const categoryName = resolveGenreCategory(slug);
  const pageUrl = `https://www.differenttypeofvibe.com/genre/${slug}`;
  const genreConfig = GENRE_SEO_CONFIGS[slug];

  if (genreConfig) {
    return {
      title: genreConfig.metaTitle,
      description: genreConfig.metaDesc,
      keywords: genreConfig.keywords,
      alternates: { canonical: pageUrl },
      openGraph: {
        title: genreConfig.metaTitle,
        description: genreConfig.metaDesc,
        url: pageUrl,
        siteName: 'Different Type of Vibe',
        images: [{ url: 'https://www.differenttypeofvibe.com/og-image.png', width: 1200, height: 630, alt: genreConfig.metaTitle }],
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: genreConfig.metaTitle,
        description: genreConfig.metaDesc,
        images: ['https://www.differenttypeofvibe.com/og-image.png'],
      },
    };
  }
  
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
      title: `Buy ${categoryName} Online | Different Type of Vibe`,
      description: `Stream and license high-quality ${categoryName} produced by Onzieb.`,
      images: ['https://www.differenttypeofvibe.com/og-image.png'],
    },
  };
}

export default async function GenrePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const categoryName = resolveGenreCategory(slug);
  const initialCategory = categoryName;
  const pageUrl = `https://www.differenttypeofvibe.com/genre/${slug}`;
  const genreConfig = GENRE_SEO_CONFIGS[slug];
  const reviewCount = genreConfig?.reviewCount || 72;

  const graphNodes: any[] = [
    {
      '@type': 'CollectionPage',
      'name': genreConfig ? genreConfig.seoTitle : `Buy ${categoryName} Online`,
      'description': genreConfig ? genreConfig.seoDescription : `Browse premium ${categoryName} produced by Onzieb. Download instant untagged MP3, WAV, and STEMS audio leases.`,
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
          'name': 'Genre Hubs',
          'item': 'https://www.differenttypeofvibe.com/links'
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': categoryName,
          'item': pageUrl
        }
      ]
    },
    {
      '@type': 'Product',
      'name': genreConfig ? genreConfig.seoTitle : `${categoryName} - Commercial Beat Leases`,
      'image': 'https://www.differenttypeofvibe.com/og-image.png',
      'description': genreConfig ? genreConfig.seoDescription : `Stream and license high-quality ${categoryName} produced by Onzieb. Untagged 24-bit WAV & Stems.`,
      'brand': {
        '@type': 'Brand',
        'name': 'Different Type of Vibe'
      },
      'offers': {
        '@type': 'AggregateOffer',
        'priceCurrency': 'USD',
        'lowPrice': '9.99',
        'highPrice': '149.99',
        'offerCount': '15',
        'price': '29.99',
        'availability': 'https://schema.org/InStock',
        'seller': {
          '@type': 'Organization',
          'name': 'Different Type of Vibe'
        }
      },
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.9',
        'reviewCount': reviewCount.toString(),
        'bestRating': '5',
        'worstRating': '1'
      }
    }
  ];

  if (genreConfig && genreConfig.faqs && genreConfig.faqs.length > 0) {
    graphNodes.push({
      '@type': 'FAQPage',
      'mainEntity': genreConfig.faqs.map(faq => ({
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
        seoBadge={genreConfig ? genreConfig.seoBadge : "Genre Catalog"}
        seoTitle={genreConfig ? genreConfig.seoTitle : `Buy ${categoryName} Online`}
        seoDescription={genreConfig ? genreConfig.seoDescription : `Stream and license studio-ready ${categoryName} produced by Onzieb. Instant untagged MP3, 24-bit WAV, and Trackout STEMS delivery cleared for Spotify, Apple Music, and commercial distribution.`}
      />

      {genreConfig && genreConfig.faqs && genreConfig.faqs.length > 0 && (
        <section className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6 md:p-10 backdrop-blur-sm shadow-2xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-amber-400 text-lg">⭐⭐⭐⭐⭐</span>
              <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
                4.9 / 5.0 ({reviewCount} Verified Artist Reviews)
              </span>
              <span className="bg-purple-900/50 text-purple-300 text-xs px-2.5 py-0.5 rounded-full border border-purple-700/50">
                100% Royalty-Free Keep
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
              Frequently Asked Questions: {categoryName}
            </h2>
            <p className="text-neutral-400 text-sm mb-8 leading-relaxed">
              Everything you need to know about licensing {categoryName.toLowerCase()} on Different Type of Vibe, commercial streaming clearance, audio trackouts, and instant downloads.
            </p>

            <div className="space-y-4">
              {genreConfig.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="border border-neutral-800 bg-neutral-950/70 rounded-xl p-5 hover:border-purple-800/60 transition-all duration-200"
                >
                  <h3 className="text-base md:text-lg font-bold text-white mb-2 flex items-start gap-2.5">
                    <span className="text-purple-400 font-mono text-sm mt-0.5">Q:</span>
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-neutral-300 text-sm leading-relaxed pl-6">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-base font-bold text-white">Unlock Unlimited Commercial Beat Leases</p>
                <p className="text-xs text-neutral-400">Get 5 studio WAV leases every month ($250 value) for only $9.99/mo.</p>
              </div>
              <a
                href="/vip-pass"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-sm font-bold rounded-xl shadow-lg shadow-purple-600/30 transition-all text-center whitespace-nowrap"
              >
                Join VIP Pass ($9.99/mo)
              </a>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
