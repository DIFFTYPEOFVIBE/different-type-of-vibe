import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Globe, Music, Layers } from 'lucide-react';
import { MY_BEATS } from '@/data/beats';

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

export const metadata: Metadata = {
  title: 'HTML Sitemap & Directory | Different Type of Vibe',
  description: 'Complete page directory and beat catalog index for Different Type of Vibe.',
  alternates: { canonical: 'https://differenttypeofvibe.com/sitemap-links' },
};

const GENRES = [
  { name: 'Trap Beats', slug: 'trap-beats' },
  { name: 'Boom Bap Beats', slug: 'boom-bap-beats' },
  { name: 'R&B Instrumentals', slug: 'rb-instrumentals' },
  { name: 'Hip-Hop Beats', slug: 'hip-hop-beats' },
  { name: 'Lo-Fi Beats', slug: 'lofi-hip-hop-beats' },
  { name: 'Drill Beats', slug: 'drill-beats' },
  { name: 'Synthwave Instrumentals', slug: 'synthwave-instrumentals' },
];

const VIBES = [
  { name: 'Drake Type Beats', slug: 'drake-type-beats' },
  { name: 'Travis Scott Type Beats', slug: 'travis-scott-type-beats' },
  { name: 'Metro Boomin Type Beats', slug: 'metro-boomin-type-beats' },
  { name: 'J. Cole Type Beats', slug: 'j-cole-type-beats' },
  { name: 'Future Type Beats', slug: 'future-type-beats' },
  { name: 'Playboi Carti Type Beats', slug: 'playboi-carti-type-beats' },
  { name: '21 Savage Type Beats', slug: '21-savage-type-beats' },
  { name: 'Gunna Type Beats', slug: 'gunna-type-beats' },
  { name: 'Lil Baby Type Beats', slug: 'lil-baby-type-beats' },
  { name: 'Don Toliver Type Beats', slug: 'don-toliver-type-beats' },
  { name: 'SZA Type Beats', slug: 'sza-type-beats' },
  { name: 'Bryson Tiller Type Beats', slug: 'bryson-tiller-type-beats' },
];

export default function HtmlSitemapPage() {
  return (
    <div className="min-h-screen bg-[#0d0f12] text-slate-100 font-sans">
      <header className="border-b border-neutral-800 bg-black/60 sticky top-0 z-40">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/links" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-purple-400 font-medium">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Store</span>
          </Link>
          <span className="text-purple-400 text-xs font-bold uppercase font-mono">HTML DIRECTORY</span>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">Storefront Index</h1>
        <p className="text-slate-400 text-sm mb-10">Direct crawlable directory of all active beat pages, genre hubs, and artist guides.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <section className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2"><Globe className="w-5 h-5" /> Main Pages</h2>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link href="/">Home Storefront</Link></li>
              <li><Link href="/links">Beat Catalog</Link></li>
              <li><Link href="/loops">Free Loops</Link></li>
              <li><Link href="/beatstarz-alternative">BeatStars Alternative Guide</Link></li>
              <li><Link href="/blog">Artist Guides Blog</Link></li>
              <li><Link href="/blog/how-to-buy-beats-online">How to Buy Beats Online</Link></li>
              <li><Link href="/blog/vocal-mixing-guide-for-artists">Vocal Mixing Guide</Link></li>
              <li><Link href="/blog/music-licensing-guide-for-independent-artists">Spotify Clearance Guide</Link></li>
            </ul>
          </section>

          <section className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2"><Layers className="w-5 h-5" /> Genres &amp; Vibes</h2>
            <ul className="space-y-1.5 text-sm text-slate-300">
              {GENRES.map((g) => <li key={g.slug}><Link href={`/genre/${g.slug}`}>{g.name}</Link></li>)}
              {VIBES.map((v) => <li key={v.slug}><Link href={`/vibe/${v.slug}`}>{v.name}</Link></li>)}
            </ul>
          </section>

          <section className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2"><Music className="w-5 h-5" /> Beats ({MY_BEATS.length})</h2>
            <ul className="space-y-2 text-sm text-slate-300 max-h-96 overflow-y-auto pr-2">
              {MY_BEATS.map((beat) => {
                const slug = slugify(beat.title.split(' - ')[0]);
                return <li key={beat.id}><Link href={`/beat/${slug}`}>{beat.title}</Link></li>;
              })}
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
