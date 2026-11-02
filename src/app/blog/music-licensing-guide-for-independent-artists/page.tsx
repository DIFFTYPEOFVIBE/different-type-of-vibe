import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Spotify Clearance Guide: Avoid Copyright Strikes & Keep Royalties',
  description: 'Complete breakdown of beat licensing agreements, publishing splits, Content ID registration, and distributing leased tracks.',
  keywords: ['spotify music clearance', 'beat lease rights', 'publishing splits beatstars', 'avoid copyright strikes spotify'],
  alternates: { canonical: 'https://differenttypeofvibe.com/blog/music-licensing-guide-for-independent-artists' },
};

export default function MusicLicensingGuidePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        'headline': 'Spotify Clearance Guide: Avoid Copyright Strikes & Keep Royalties',
        'author': { '@type': 'Person', 'name': 'Onzieb', 'url': 'https://differenttypeofvibe.com' },
        'publisher': { '@type': 'Organization', 'name': 'Different Type of Vibe' },
      },
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://differenttypeofvibe.com' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Blog', 'item': 'https://differenttypeofvibe.com/blog' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Spotify Clearance Guide', 'item': 'https://differenttypeofvibe.com/blog/music-licensing-guide-for-independent-artists' }
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
            <span className="text-purple-400 text-xs font-bold uppercase font-mono">MUSIC RIGHTS GUIDE</span>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12 max-w-3xl">
          <article>
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-900/30 text-purple-400 text-xs font-bold border border-purple-500/20 mb-4 uppercase">
                <BookOpen className="w-3.5 h-3.5" /> Rights Guide
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                Spotify Clearance Guide: Avoid Copyright Strikes & Keep Royalties
              </h1>
              <p className="text-slate-400 text-sm">Published by Onzieb • 7 min read</p>
            </div>

            <div className="prose prose-invert max-w-none text-slate-300 text-base space-y-6">
              <p>Releasing music on Spotify, Apple Music, and YouTube requires understanding beat licensing rights to prevent copyright strikes or muted audio streams.</p>

              <h2 className="text-2xl font-bold text-white pt-4">1. Master Streaming vs Publishing Splits</h2>
              <p>When you purchase a beat lease, you own 100% of your vocal performance recording royalties while the producer retains beat publishing ownership (50/50 songwriter split standard).</p>

              <h2 className="text-2xl font-bold text-white pt-4">2. YouTube Content ID Rules</h2>
              <p>Do not upload leased beats to automated Content ID matching services (like TuneCore Content ID or DistroKid Content ID) unless you own Exclusive Rights, as this triggers false copyright claims against other artists who leased the same beat.</p>

              <h2 className="text-2xl font-bold text-white pt-4">3. Stream Limits & Upgrades</h2>
              <p>Track your stream counts on DistroKid or Spotify for Artists. Once your song reaches your lease limit (e.g. 100,000 streams), upgrade your license seamlessly to keep accumulating royalties.</p>
            </div>

            <div className="mt-12 bg-purple-950/40 border border-purple-600/30 rounded-2xl p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-2">Need Royalty-Free Beats with Instant Clearances?</h3>
              <p className="text-slate-300 text-sm mb-6">All beat leases on Different Type of Vibe come with pre-cleared, automated license agreements.</p>
              <Link href="/links" className="bg-purple-600 hover:bg-purple-500 text-white font-bold px-6 py-2.5 rounded-xl text-sm inline-block">View Cleared Beat Catalog</Link>
            </div>
          </article>
        </main>
      </div>
    </>
  );
}
