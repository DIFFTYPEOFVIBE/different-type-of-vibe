import { Metadata } from 'next';
import Link from 'next/link';
import { Download, Sparkles, CheckCircle2, ArrowRight, Music, Disc } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free Untagged Beats Download (Instant MP3 & WAV) | Different Type of Vibe',
  description: 'Download 3 free untagged beat leases for writing, recording, and demo practice. Instant MP3 download for Trap, Drill, R&B, and Afrobeats.',
  keywords: [
    'free untagged beats',
    'free beats download',
    'free rap instrumentals',
    'free trap beats 2026',
    'free boom bap beats',
    'demo beat lease free',
    'different type of vibe',
  ],
  alternates: {
    canonical: 'https://www.differenttypeofvibe.com/free-downloads',
  },
};

export default function FreeDownloadsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Product',
        name: 'Free 3-Beat Starter Pack (Untagged MP3s)',
        image: 'https://www.differenttypeofvibe.com/og-image.png',
        description: 'Instant download of 3 free studio-quality untagged beat leases for songwriting, demo recording, and vocal testing.',
        brand: { '@type': 'Brand', name: 'Different Type of Vibe' },
        offers: {
          '@type': 'Offer',
          price: '0.00',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: 'https://www.differenttypeofvibe.com/free-downloads',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Are these free beats completely untagged?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes! The starter pack includes untagged 320kbps MP3 audio files with zero voice producer tags for clean vocal recording.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I release songs made with free beats on Spotify and Apple Music?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Free downloads are for non-commercial demo writing and audition practice. To monetize on Spotify, Apple Music, and YouTube, upgrade to our $9.99/mo VIP Pass or a commercial WAV lease.',
            },
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.differenttypeofvibe.com' },
          { '@type': 'ListItem', position: 2, name: 'Free Downloads', item: 'https://www.differenttypeofvibe.com/free-downloads' },
        ],
      },
    ],
  };
  return (
    <main className="container mx-auto px-4 py-12 min-h-screen max-w-5xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-900/40 border border-indigo-500/30 text-indigo-300 text-sm font-semibold mb-4">
          <Download className="w-4 h-4 text-indigo-400" />
          100% Free Instant Downloads for Artists
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Free Untagged <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-purple-400">Beats &amp; Instrumentals</span>
        </h1>
        <p className="text-zinc-400 mt-4 text-lg max-w-2xl mx-auto">
          Test your vocals on studio-quality instrumentals before buying. Download free tagged &amp; untagged writing beats instantly.
        </p>
      </div>

      <div className="bg-zinc-900/90 border border-indigo-500/30 rounded-3xl p-8 md:p-10 mb-12 shadow-xl text-center">
        <h2 className="text-2xl font-bold text-white mb-3">🔥 Get 3 Free Untagged Beats Sent to Your Inbox</h2>
        <p className="text-zinc-400 text-sm max-w-xl mx-auto mb-8">
          Join 650+ independent artists who receive free beat packs, exclusive discount codes, and vocal mixing guides every week.
        </p>
        <Link 
          href="/free-beats" 
          className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-extrabold px-8 py-4 rounded-xl shadow-lg transition-all text-base"
        >
          <Sparkles className="w-5 h-5" />
          Claim Your 3 Free Beats Now
        </Link>
      </div>

      {/* Internal Link Silo to Commercial Catalogs */}
      <div className="my-10 p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 space-y-4">
        <span className="text-purple-400 font-bold text-xs uppercase tracking-wider block">🎧 Ready to Release on Spotify? Browse Commercial Catalogs</span>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          <Link href="/vibe/metro-boomin-type-beats" className="p-3 bg-neutral-950/80 border border-neutral-800 rounded-xl hover:border-purple-600 transition group">
            <span className="block text-xs font-bold text-white group-hover:text-purple-400">Metro Boomin</span>
            <span className="block text-[10px] text-neutral-400">Dark 808 Trap</span>
          </Link>
          <Link href="/vibe/drake-type-beats" className="p-3 bg-neutral-950/80 border border-neutral-800 rounded-xl hover:border-purple-600 transition group">
            <span className="block text-xs font-bold text-white group-hover:text-purple-400">Drake OVO</span>
            <span className="block text-[10px] text-neutral-400">Melodic R&amp;B</span>
          </Link>
          <Link href="/genre/boom-bap-beats" className="p-3 bg-neutral-950/80 border border-neutral-800 rounded-xl hover:border-purple-600 transition group">
            <span className="block text-xs font-bold text-white group-hover:text-purple-400">Boom Bap</span>
            <span className="block text-[10px] text-neutral-400">90s Soul Breaks</span>
          </Link>
          <Link href="/genre/trap-beats" className="p-3 bg-neutral-950/80 border border-neutral-800 rounded-xl hover:border-purple-600 transition group">
            <span className="block text-xs font-bold text-white group-hover:text-purple-400">Trap Beats</span>
            <span className="block text-[10px] text-neutral-400">Heavy 808s</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
