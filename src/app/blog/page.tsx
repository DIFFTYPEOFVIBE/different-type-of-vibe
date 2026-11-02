import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock, Tag, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Artist Guides & Beat Licensing Articles | Different Type of Vibe',
  description: 'In-depth music production guides, beat licensing breakdowns, vocal mixing tips, and industry advice for independent artists.',
  keywords: ['music licensing guide', 'how to buy beats online', 'vocal mixing guide', 'mp3 vs wav beat lease', 'onzieb blog'],
  alternates: { canonical: 'https://differenttypeofvibe.com/blog' },
  openGraph: {
    title: 'Artist Guides & Music Production Blog | Different Type of Vibe',
    description: 'Master beat licensing, vocal mixing, and music distribution.',
    url: 'https://differenttypeofvibe.com/blog',
    siteName: 'Different Type of Vibe',
    images: [{ url: 'https://differenttypeofvibe.com/og-image.png', width: 1200, height: 630, alt: 'Blog Preview' }],
    type: 'website',
  },
};

const ARTICLES = [
  {
    slug: 'how-to-buy-beats-online',
    title: 'How to Buy Beats Online in 2026: MP3 vs WAV vs STEMS Lease Breakdown',
    description: 'Learn the exact differences between MP3 Basic Leases, WAV Premium Leases, and Stems Trackout licenses before buying instrumentals.',
    category: 'Beat Licensing',
    readTime: '6 min read',
    date: 'October 19, 2026',
  },
  {
    slug: 'vocal-mixing-guide-for-artists',
    title: 'Vocal Mixing Blueprint: How to Make Your Vocals Sit Perfectly in a Beat',
    description: '5 professional studio techniques for EQ carving, compression, and vocal reverb buses when recording over pre-mixed beats.',
    category: 'Studio Mixing',
    readTime: '8 min read',
    date: 'October 15, 2026',
  },
  {
    slug: 'music-licensing-guide-for-independent-artists',
    title: 'Spotify Clearance Guide: Avoid Copyright Strikes & Keep Royalties',
    description: 'A complete breakdown of beat licensing agreements, publishing splits, Content ID registration, and distributing leased tracks.',
    category: 'Music Rights',
    readTime: '7 min read',
    date: 'October 10, 2026',
  },
];

export default function BlogHubPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Blog',
        'name': 'Different Type of Vibe Artist Guides',
        'url': 'https://differenttypeofvibe.com/blog',
        'publisher': { '@type': 'Organization', 'name': 'Different Type of Vibe', 'url': 'https://differenttypeofvibe.com' },
      },
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://differenttypeofvibe.com' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Blog', 'item': 'https://differenttypeofvibe.com/blog' },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-[#0d0f12] text-slate-100 font-sans antialiased">
        <header className="border-b border-neutral-800/80 bg-black/60 backdrop-blur-md sticky top-0 z-40">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/links" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-purple-400 font-medium group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Catalog</span>
            </Link>
            <span className="text-purple-400 text-xs font-bold tracking-widest uppercase font-mono">ONZIEB BLOG</span>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-900/30 text-purple-400 text-xs font-bold border border-purple-500/20 mb-4 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Producer Insights
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">Artist & Licensing Guides</h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">Master beat licensing rights, studio vocal recording, and Spotify clearance strategies.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ARTICLES.map((article) => (
              <article key={article.slug} className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-purple-500/40 shadow-xl group">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                    <span className="flex items-center gap-1 text-purple-400 font-semibold"><Tag className="w-3 h-3" /> {article.category}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 leading-snug">
                    <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                  </h2>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">{article.description}</p>
                </div>
                <div className="border-t border-slate-800 pt-4 flex items-center justify-between text-xs text-slate-400">
                  <span>{article.date}</span>
                  <Link href={`/blog/${article.slug}`} className="text-purple-400 font-semibold hover:text-purple-300">Read Guide &rarr;</Link>
                </div>
              </article>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
