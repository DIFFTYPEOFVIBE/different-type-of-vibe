import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How to Buy Beats Online in 2026: MP3 vs WAV vs STEMS',
  description: 'Guide for independent artists on buying beats online safely. MP3 vs WAV vs STEMS.',
  keywords: ['how to buy beats online', 'mp3 vs wav beat lease', 'stems trackout license'],
  alternates: { canonical: 'https://differenttypeofvibe.com/blog/how-to-buy-beats-online' },
};

export default function HowToBuyBeatsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        'headline': 'How to Buy Beats Online in 2026: MP3 vs WAV vs STEMS Lease Breakdown',
        'author': { '@type': 'Person', 'name': 'Onzieb', 'url': 'https://differenttypeofvibe.com' },
        'publisher': { '@type': 'Organization', 'name': 'Different Type of Vibe' },
      },
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'What is the difference between MP3 Lease and WAV Lease?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'MP3 leases provide compressed audio for demos. WAV leases provide uncompressed 24-bit audio for Spotify and Apple Music.' }
          },
          {
            '@type': 'Question',
            'name': 'Why upgrade to STEMS Trackout?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'STEMS licenses deliver individual instrument tracks for mixing.' }
          }
        ]
      },
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://differenttypeofvibe.com' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Blog', 'item': 'https://differenttypeofvibe.com/blog' },
          { '@type': 'ListItem', 'position': 3, 'name': 'How to Buy Beats Online', 'item': 'https://differenttypeofvibe.com/blog/how-to-buy-beats-online' }
        ]
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-[#0d0f12] text-slate-100 font-sans">
        <header className="border-b border-neutral-800 bg-black/60 sticky top-0 z-40">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/blog" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-purple-400 font-medium">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Articles</span>
            </Link>
            <span className="text-purple-400 text-xs font-bold uppercase font-mono">BEAT LICENSING GUIDE</span>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12 max-w-3xl">
          <article>
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-900/30 text-purple-400 text-xs font-bold border border-purple-500/20 mb-4 uppercase">
                <BookOpen className="w-3.5 h-3.5" /> Buying Guide
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                How to Buy Beats Online in 2026: MP3 vs WAV vs STEMS Lease Breakdown
              </h1>
              <p className="text-slate-400 text-sm">Published by Onzieb • 6 min read</p>
            </div>

            <div className="prose prose-invert max-w-none text-slate-300 text-base space-y-6">
              <p>Buying beats online has revolutionized independent music creation. Picking the right license tier ensures your final mix meets professional streaming standards on Spotify and Apple Music.</p>

              <h2 className="text-2xl font-bold text-white pt-4">1. MP3 Basic Lease ($29.99)</h2>
              <p>The MP3 Basic Lease delivers a 320kbps untagged audio file suitable for demos, social media promotional clips, or non-commercial mixtapes.</p>

              <h2 className="text-2xl font-bold text-white pt-4">2. WAV Premium Lease ($49.99)</h2>
              <p>The WAV Premium Lease delivers uncompressed 24-bit studio audio required for commercial distribution on Spotify and Apple Music.</p>

              <h2 className="text-2xl font-bold text-white pt-4">3. Stems Trackout License ($149.99)</h2>
              <p>A Stems License provides every individual instrument channel as separate WAV files, giving your audio engineer total mixing freedom around your vocals.</p>
            </div>

            <div className="mt-12 bg-purple-950/40 border border-purple-600/30 rounded-2xl p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-2">Ready to License Studio-Ready Beats?</h3>
              <p className="text-slate-300 text-sm mb-6">Explore our catalog with instant untagged delivery in MP3, WAV, and STEMS options.</p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="/links" className="bg-purple-600 hover:bg-purple-500 text-white font-bold px-6 py-2.5 rounded-xl text-sm">Browse Beat Catalog</Link>
                <Link href="/beatstarz-alternative" className="bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold px-6 py-2.5 rounded-xl text-sm">Why Direct Storefronts Win</Link>
              </div>
            </div>
          </article>
        </main>
      </div>
    </>
  );
}
