import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Globe, Music, Layers, Sparkles } from 'lucide-react';
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
  alternates: { canonical: 'https://www.differenttypeofvibe.com/sitemap-links' },
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

const GLOBAL_DEALS = [
  { name: '🇺🇸 United States Deals', slug: 'us' },
  { name: '🇬🇧 United Kingdom Drill', slug: 'uk-drill' },
  { name: '🇨🇦 Canada & Toronto R&B', slug: 'toronto' },
  { name: '🇩🇪 Germany (Beats Kaufen)', slug: 'germany-beats-kaufen' },
  { name: '🇫🇷 France (Instru Rap)', slug: 'france-instru-rap' },
  { name: '🇯🇵 Japan (Tokyo Lo-Fi)', slug: 'japan' },
  { name: '🇧🇷 Brazil (Trap Brasileiro)', slug: 'brazil' },
  { name: '🇲🇽 Mexico (Trap Latino)', slug: 'mexico' },
  { name: '🇦🇺 Australia & Sydney', slug: 'sydney' },
  { name: '🇳🇬 Nigeria (Paystack Store)', slug: 'nigeria-paystack' },
  { name: '🇿🇦 South Africa (Amapiano)', slug: 'johannesburg' },
  { name: '🇰🇪 Kenya (Gengetone)', slug: 'kenya' },
];

export default function HtmlSitemapPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: 'HTML Sitemap & Complete Beat Directory',
        description: 'Complete page directory and beat catalog index for Different Type of Vibe.',
        url: 'https://www.differenttypeofvibe.com/sitemap-links',
        publisher: {
          '@type': 'Organization',
          name: 'Different Type of Vibe',
          url: 'https://www.differenttypeofvibe.com',
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.differenttypeofvibe.com' },
          { '@type': 'ListItem', position: 2, name: 'Sitemap Directory', item: 'https://www.differenttypeofvibe.com/sitemap-links' },
        ],
      },
    ],
  };
  return (
    <div className="min-h-screen bg-[#0d0f12] text-slate-100 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="border-b border-neutral-800 bg-black/60 sticky top-0 z-40">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/links" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-purple-400 transition font-medium">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Store</span>
          </Link>
          <span className="text-purple-400 text-xs font-bold uppercase font-mono">HTML DIRECTORY</span>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">Storefront Index &amp; Directory</h1>
        <p className="text-slate-400 text-sm mb-10">Direct crawlable directory of all active beat pages, genre hubs, global markets, and comparison guides.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Column 1: Core Pages & Comparison Hubs */}
          <section className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-purple-400 mb-4 flex items-center gap-2"><Globe className="w-4 h-4" /> Portals &amp; Guides</h2>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link href="/" className="hover:text-purple-400">Home Storefront</Link></li>
              <li><Link href="/links" className="hover:text-purple-400">Beat Catalog</Link></li>
              <li><Link href="/vip-pass" className="hover:text-purple-400 text-emerald-400 font-semibold">$9.99/mo VIP Pass</Link></li>
              <li><Link href="/free-downloads" className="hover:text-purple-400">Free 3-Beat Starter Pack</Link></li>
              <li><Link href="/crypto-pay" className="hover:text-purple-400 text-amber-300">Crypto Checkout (USDT)</Link></li>
              <li className="pt-2 border-t border-slate-800"><Link href="/beatstarz-alternative" className="hover:text-purple-400">BeatStars Alternative</Link></li>
              <li><Link href="/airbit-alternative" className="hover:text-purple-400">Airbit Alternative</Link></li>
              <li><Link href="/traktrain-alternative" className="hover:text-purple-400">Traktrain Alternative</Link></li>
              <li className="pt-2 border-t border-slate-800"><Link href="/blog" className="hover:text-purple-400">Artist Guides Blog</Link></li>
              <li><Link href="/blog/music-licensing-guide-for-independent-artists" className="hover:text-purple-400">Spotify Clearance Guide</Link></li>
              <li><Link href="/blog/vocal-mixing-guide-for-artists" className="hover:text-purple-400">Vocal Mixing Guide</Link></li>
              <li><Link href="/blog/how-to-buy-beats-online" className="hover:text-purple-400">How to Buy Beats Online</Link></li>
            </ul>
          </section>

          {/* Column 2: Genres & Styles */}
          <section className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-purple-400 mb-4 flex items-center gap-2"><Layers className="w-4 h-4" /> Genre Hubs</h2>
            <ul className="space-y-1.5 text-sm text-slate-300">
              {GENRES.map((g) => (
                <li key={g.slug}><Link href={`/genre/${g.slug}`} className="hover:text-purple-400">{g.name}</Link></li>
              ))}
            </ul>
            <h3 className="text-sm font-bold text-purple-300 uppercase tracking-wider mt-6 mb-2">Artist Vibes</h3>
            <ul className="space-y-1 text-xs text-slate-400">
              {VIBES.slice(0, 8).map((v) => (
                <li key={v.slug}><Link href={`/vibe/${v.slug}`} className="hover:text-purple-400">{v.name}</Link></li>
              ))}
            </ul>
          </section>

          {/* Column 3: Global Regional Hubs */}
          <section className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-purple-400 mb-4 flex items-center gap-2"><Sparkles className="w-4 h-4" /> Global Markets</h2>
            <ul className="space-y-2 text-sm text-slate-300">
              {GLOBAL_DEALS.map((d) => (
                <li key={d.slug}><Link href={`/deals/${d.slug}`} className="hover:text-purple-400">{d.name}</Link></li>
              ))}
            </ul>
          </section>

          {/* Column 4: Direct Beat Catalog */}
          <section className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-purple-400 mb-4 flex items-center gap-2"><Music className="w-4 h-4" /> Beats ({MY_BEATS.length})</h2>
            <ul className="space-y-2 text-sm text-slate-300 max-h-[460px] overflow-y-auto pr-2">
              {MY_BEATS.map((beat) => {
                const slug = slugify(beat.title.split(' - ')[0]);
                return (
                  <li key={beat.id}>
                    <Link href={`/beat/${slug}`} className="hover:text-purple-400 block truncate" title={beat.title}>
                      {beat.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
