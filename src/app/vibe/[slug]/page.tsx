import Storefront from '@/app/page';
import Link from 'next/link';

interface StrikingDistanceConfig {
  metaTitle: string;
  metaDesc: string;
  seoTitle: string;
  seoBadge: string;
  seoDescription: string;
  keywords: string[];
  reviewCount: number;
  faqs: { question: string; answer: string }[];
}

const STRIKING_DISTANCE_CONFIGS: Record<string, StrikingDistanceConfig> = {
  'metro-boomin-type-beats': {
    metaTitle: 'Metro Boomin Beats for Sale | Dark 808 Trap & Leases | Different Type of Vibe',
    metaDesc: 'Buy untagged Metro Boomin beats for sale. Studio 24-bit WAV & STEM trackouts for dark 808 trap, Future & 21 Savage vibes. Instant licenses from $29.99.',
    seoTitle: 'Metro Boomin Beats for Sale (Dark 808 Trap & Leases)',
    seoBadge: '🔥 Top Ranked Dark Trap Sound',
    seoDescription: 'Stream and buy untagged Metro Boomin beats for sale produced by Onzieb. Heavy 808 sub bass, menacing synth melodies, and crisp rolling hi-hats. Commercial WAV leases and STEM trackouts cleared for Spotify, Apple Music, and YouTube.',
    reviewCount: 74,
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
        answer: 'Untagged MP3 Basic Leases are $29.99, uncompressed 24-bit WAV Premium Leases are $49.99, and full Trackout STEMs are $149.99. You can also unlock unlimited leases for only $9.99/mo with our VIP Standard Pass.',
      },
      {
        question: 'Can I release songs made with these Metro Boomin style beats on Spotify and Apple Music?',
        answer: 'Yes! All beat licenses include non-exclusive commercial streaming distribution rights across Spotify, Apple Music, YouTube Music, and Tidal with 100% master royalties retained by the artist.',
      },
      {
        question: 'Do these Metro Boomin instrumentals include separate stem trackouts?',
        answer: 'Yes. Stems licenses include isolated 24-bit studio WAV tracks for tuned 808 bass, kick, snare, hi-hats, melodies, and sound design layers for professional vocal mixing and mastering.',
      },
      {
        question: 'How do I get unlimited Metro Boomin style beats for $9.99/month?',
        answer: 'Our VIP Standard Pass provides 5 uncompressed WAV leases every month ($250 value) for just $9.99/mo, with commercial rights, signed PDF contracts, and full streaming clearance.',
      },
      {
        question: 'Are these Metro Boomin type beats untagged with instant download?',
        answer: 'Yes. Immediately upon completing checkout via Apple Pay, Google Pay, Stripe, or Lemon Squeezy, an untagged high-definition 24-bit WAV file and license contract are delivered straight to your email inbox.',
      },
    ],
  },
  'travis-scott-type-beats': {
    metaTitle: 'Travis Scott Type Beats for Sale | Psychedelic Trap & Heavy 808s | Different Type of Vibe',
    metaDesc: 'Buy untagged Travis Scott type beats for sale. High-energy distorted 808s, Mike Dean synth layers, and WAV trackouts. Instant licenses from $29.99.',
    seoTitle: 'Travis Scott Type Beats for Sale (Psychedelic Dark Trap)',
    seoBadge: '🔥 Top 10 Ranked Vibe',
    seoDescription: 'Stream & license untagged Travis Scott type beats produced by Onzieb. Analog synth textures, ambient beat switches, and punchy 808s. Includes signed commercial PDF contracts and 24-bit WAV files.',
    reviewCount: 56,
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
      {
        question: 'Can I get Travis Scott style beats with the $9.99/mo VIP Pass?',
        answer: 'Yes, our VIP Standard Pass grants 5 commercial WAV licenses each month across our entire catalog including all Travis Scott style instrumentals.',
      },
    ],
  },
  'j-cole-type-beats': {
    metaTitle: 'J. Cole Type Beats for Sale | Soulful Boom Bap & Lofi Leases | Different Type of Vibe',
    metaDesc: 'Buy untagged J. Cole type beats for sale. Warm vinyl chops, boom bap drums, and soulful melodic chords. Instant commercial WAV download from $29.99.',
    seoTitle: 'J. Cole Type Beats for Sale (Soulful Boom Bap & Lofi)',
    seoBadge: '🔥 #1 Organic Search Demand',
    seoDescription: 'Stream & buy untagged J. Cole type beats for sale produced by Onzieb. Warm Rhodes keys, soulful vocal samples, acoustic basslines, and punchy drum breaks. Commercial leases cleared for streaming and radio.',
    reviewCount: 68,
    keywords: [
      'j cole type beats',
      'j cole type beat',
      'j cole beats for sale',
      'j cole beats',
      'jcole type beat',
      'j cole drums',
      'j cole drum loops',
      'buy boom bap beats',
      'soulful boom bap beats',
      'dreamville type beat',
      'buy j cole type beat',
    ],
    faqs: [
      {
        question: 'How do I buy J. Cole type beats online?',
        answer: 'Select your preferred license (MP3 Basic, WAV Premium, or Stems) and complete 1-click checkout with Apple Pay, Google Pay, or card. Files and PDF license agreements are sent instantly to your email.',
      },
      {
        question: 'Are these J. Cole style samples cleared for commercial release?',
        answer: 'Yes! All compositions are 100% original productions by Onzieb with zero third-party uncleared samples. Safe for Spotify, Apple Music, and sync licensing with 0% risk of Content ID strikes.',
      },
      {
        question: 'What audio formats and licenses do you provide for J. Cole boom bap beats?',
        answer: 'We provide untagged 320kbps MP3s, uncompressed 24-bit studio WAVs, and full trackout stem ZIP files. All tiers include commercial streaming clearance for independent artists.',
      },
      {
        question: 'Can I access J. Cole type beats with the $9.99/mo VIP Standard Pass?',
        answer: 'Yes! The VIP Standard Pass grants you 5 full WAV licenses every single month with commercial streaming rights for only $9.99/month, saving you over 90% compared to single beat purchases.',
      },
      {
        question: 'Are isolated stems included for mixing and mastering vocals?',
        answer: 'Yes. Choosing the Stems license delivers individual WAV tracks for bass, kick, snare, sample loops, piano/Rhodes, and percussion so your recording engineer has total mixing flexibility.',
      },
    ],
  },
  'drake-type-beats': {
    metaTitle: 'Drake Type Beats for Sale | Melodic OVO Trap & R&B Leases | Different Type of Vibe',
    metaDesc: 'Buy untagged Drake type beats for sale. Atmospheric filtered pads, melodic 808s, and OVO sound textures. Instant commercial WAV download from $29.99.',
    seoTitle: 'Drake Type Beats for Sale (Melodic OVO Trap & R&B)',
    seoBadge: '🔥 Top 3 Ranked Vibe',
    seoDescription: 'Stream & buy untagged Drake type beats produced by Onzieb. Smooth melodic keys, atmospheric reverb layers, punchy drums, and deep 808s. Includes signed commercial PDF contracts and 24-bit WAV files.',
    reviewCount: 92,
    keywords: [
      'drake type beats',
      'drake type beat',
      'drake beats for sale',
      'buy drake type beat',
      'ovo type beats',
      'melodic trap beats',
      'certified lover boy type beat',
    ],
    faqs: [
      {
        question: 'Where can I buy untagged Drake type beats online?',
        answer: 'Different Type of Vibe provides direct producer-to-artist licensing with 0% marketplace markups. Select any Drake style instrumental to download untagged 24-bit WAVs immediately after checkout.',
      },
      {
        question: 'Are Drake type beats commercial-use cleared with 100% royalty keep?',
        answer: 'Yes! You keep 100% of your streaming royalties from Spotify, Apple Music, and TIDAL with no backend percentage cuts or royalties owed to the producer.',
      },
      {
        question: 'What tempos (BPM) and keys are your Drake OVO style beats produced in?',
        answer: 'Our Drake catalog ranges from 85 to 140 BPM in signature minor keys (A minor, C minor, F minor) optimized for emotional rap, melodic trap, and late-night R&B vocals.',
      },
      {
        question: 'Can I get isolated trackout stems for professional vocal mixing?',
        answer: 'Yes, our STEMS license delivers separate WAV channels for 808 bass, melody loops, drum tracks, and vocal chops for seamless studio mixing and arrangement adjustments.',
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
  const ogImageUrl = `https://www.differenttypeofvibe.com/api/og?title=${encodeURIComponent(striking ? striking.seoTitle : `Buy ${categoryName} 2026`)}&subtitle=${encodeURIComponent('Untagged 24-Bit WAV Leases & VIP Pass')}&badge=Top+Ranked+Vibe`;

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
        images: [{ url: ogImageUrl, width: 1200, height: 630, alt: striking.metaTitle }],
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: striking.metaTitle,
        description: striking.metaDesc,
        images: [ogImageUrl],
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
          url: ogImageUrl,
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
      images: [ogImageUrl],
    },
  };
}

export default async function VibePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const categoryName = resolveVibeCategory(slug);
  const initialCategory = categoryName !== 'Artist Vibe Beats' ? categoryName : 'All';
  const pageUrl = `https://www.differenttypeofvibe.com/vibe/${slug}`;
  const striking = STRIKING_DISTANCE_CONFIGS[slug];
  const reviewCount = striking?.reviewCount || 65;

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
          'name': 'Vibe Hubs',
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
      'name': striking ? striking.seoTitle : `${categoryName} - Commercial Beat Leases`,
      'image': 'https://www.differenttypeofvibe.com/og-image.png',
      'description': striking ? striking.seoDescription : `Stream and license high-quality ${categoryName} produced by Onzieb. Untagged 24-bit WAV & Stems.`,
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

      {striking && striking.faqs && striking.faqs.length > 0 && (
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
              {striking.faqs.map((faq, idx) => (
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
      {/* Sibling Topic Mesh Inter-Linking Ribbon */}
      <section className="container mx-auto px-4 py-10 max-w-4xl">
        <div className="bg-neutral-950/90 border border-neutral-800 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl">
          <div>
            <span className="text-purple-400 font-bold text-xs uppercase tracking-wider block mb-3">
              🔥 Sibling Artist Style Hubs
            </span>
            <div className="flex flex-wrap gap-2">
              {Object.entries(SLUG_MAP).map(([s, name]) => (
                <Link
                  key={s}
                  href={`/vibe/${s}`}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                    s === slug
                      ? 'bg-purple-600 text-white font-bold'
                      : 'bg-neutral-900 text-neutral-300 hover:text-white hover:bg-neutral-800 border border-neutral-800'
                  }`}
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <span className="text-purple-400 font-bold text-xs uppercase tracking-wider block mb-3">
              🎧 Commercial Genre Catalogs
            </span>
            <div className="flex flex-wrap gap-2">
              <Link href="/genre/trap-beats" className="px-3 py-1.5 rounded-lg text-xs font-medium bg-neutral-900 text-neutral-300 hover:text-white hover:bg-neutral-800 border border-neutral-800 transition">Trap Beats</Link>
              <Link href="/genre/boom-bap-beats" className="px-3 py-1.5 rounded-lg text-xs font-medium bg-neutral-900 text-neutral-300 hover:text-white hover:bg-neutral-800 border border-neutral-800 transition">Boom Bap Beats</Link>
              <Link href="/genre/rb-instrumentals" className="px-3 py-1.5 rounded-lg text-xs font-medium bg-neutral-900 text-neutral-300 hover:text-white hover:bg-neutral-800 border border-neutral-800 transition">R&amp;B Beats</Link>
              <Link href="/genre/hip-hop-beats" className="px-3 py-1.5 rounded-lg text-xs font-medium bg-neutral-900 text-neutral-300 hover:text-white hover:bg-neutral-800 border border-neutral-800 transition">Hip-Hop Beats</Link>
              <Link href="/genre/drill-beats" className="px-3 py-1.5 rounded-lg text-xs font-medium bg-neutral-900 text-neutral-300 hover:text-white hover:bg-neutral-800 border border-neutral-800 transition">Drill Beats</Link>
              <Link href="/genre/lofi-hip-hop-beats" className="px-3 py-1.5 rounded-lg text-xs font-medium bg-neutral-900 text-neutral-300 hover:text-white hover:bg-neutral-800 border border-neutral-800 transition">Lo-Fi Beats</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
