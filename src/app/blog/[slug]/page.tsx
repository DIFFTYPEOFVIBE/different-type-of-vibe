import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, BookOpen, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';
import sitemap from '@/app/sitemap';
import { formatBlogTitle, resolveGuideCategory } from '@/lib/seo/blogGuideHelper';

let cachedBlogSlugs: Set<string> | null = null;
async function getValidBlogSlugs(): Promise<Set<string>> {
  if (cachedBlogSlugs) return cachedBlogSlugs;
  const entries = await sitemap();
  const slugs = new Set<string>();
  for (const entry of entries) {
    const match = entry.url.match(/\/blog\/([^/?#]+)$/);
    if (match) {
      slugs.add(match[1]);
    }
  }
  cachedBlogSlugs = slugs;
  return slugs;
}

const BLOG_SLUG_PATTERN =
  /^(how-|top-|best-|understanding-|free-|music-|independent-|vocal-|sound-|afrobeats-|amapiano-|fl-studio-|boomplay-|audiomack-|paystack-)/i;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const validSlugs = await getValidBlogSlugs();

  if (!validSlugs.has(slug) && !BLOG_SLUG_PATTERN.test(slug)) {
    return { title: 'Article Not Found' };
  }

  const title = formatBlogTitle(slug);
  const pageUrl = `https://www.differenttypeofvibe.com/blog/${slug}`;

  return {
    title: `${title} (2026 Artist & Producer Guide)`,
    description: `Complete step-by-step 2026 guide on ${title}. Actionable tips on music licensing, studio mixing, royalties, and independent artist growth by Onzieb.`,
    keywords: [
      title.toLowerCase(),
      slug.replace(/-/g, ' '),
      'independent artist guide 2026',
      'music licensing guide',
      'onzieb beats',
    ],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${title} | Different Type of Vibe`,
      description: `Actionable 2026 blueprint for ${title} by Onzieb.`,
      url: pageUrl,
      siteName: 'Different Type of Vibe',
      images: [
        {
          url: 'https://www.differenttypeofvibe.com/og-image.png',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Different Type of Vibe`,
      description: `Complete 2026 guide on ${title} for independent artists and producers.`,
      images: ['https://www.differenttypeofvibe.com/og-image.png'],
    },
  };
}

export default async function DynamicBlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const validSlugs = await getValidBlogSlugs();

  if (!validSlugs.has(slug) && !BLOG_SLUG_PATTERN.test(slug)) {
    notFound();
  }

  const title = formatBlogTitle(slug);
  const pageUrl = `https://www.differenttypeofvibe.com/blog/${slug}`;
  const guide = resolveGuideCategory(slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: `${title} (2026 Blueprint)`,
        description: `Complete guide on ${title} for independent artists and producers.`,
        author: { '@type': 'Person', name: 'Onzieb', url: 'https://www.differenttypeofvibe.com' },
        publisher: { '@type': 'Organization', name: 'Different Type of Vibe' },
        mainEntityOfPage: pageUrl,
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: guide.faq1Q, acceptedAnswer: { '@type': 'Answer', text: guide.faq1A } },
          { '@type': 'Question', name: guide.faq2Q, acceptedAnswer: { '@type': 'Answer', text: guide.faq2A } },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.differenttypeofvibe.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.differenttypeofvibe.com/blog' },
          { '@type': 'ListItem', position: 3, name: title, item: pageUrl },
        ],
      },
    ],
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
            <span className="text-purple-400 text-xs font-bold uppercase font-mono">{guide.category}</span>
          </div>
        </header>
        <main className="container mx-auto px-4 py-12 max-w-3xl">
          <article>
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-900/30 text-purple-400 text-xs font-bold border border-purple-500/20 mb-4 uppercase">
                <BookOpen className="w-3.5 h-3.5" /> {guide.category}
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">{title}</h1>
              <p className="text-slate-400 text-sm">Published by Onzieb • Updated 2026 • 6 min read</p>
            </div>
            <div className="prose prose-invert max-w-none text-slate-300 text-base space-y-6">
              <p>Navigating <strong>{title}</strong> is one of the highest-leverage moves an independent artist or producer can make in 2026. Below is a practical breakdown covering audio standards, licensing, and release strategy.</p>
              <h2 className="text-2xl font-bold text-white pt-4">{guide.section1Title}</h2>
              <p>{guide.section1Body}</p>
              <h2 className="text-2xl font-bold text-white pt-4">{guide.section2Title}</h2>
              <p>{guide.section2Body}</p>
              <h2 className="text-2xl font-bold text-white pt-4">{guide.section3Title}</h2>
              <p>{guide.section3Body}</p>
            </div>

            {/* Internal Link Silo & Catalog Navigation */}
            <div className="my-10 p-6 rounded-2xl bg-neutral-900/90 border border-neutral-800 space-y-4">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                <span className="text-purple-400 font-bold text-xs uppercase tracking-wider">🎧 Recommended Sound Catalogs</span>
                <span className="text-[11px] text-neutral-400 font-medium">Untagged 24-bit WAV &amp; Stems</span>
              </div>
              <p className="text-xs text-neutral-300">
                Explore studio-grade instrumentals pre-cleared for Spotify, Apple Music, and YouTube with 100% royalty keep:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                <Link href="/vibe/metro-boomin-type-beats" className="p-3 bg-neutral-950/80 border border-neutral-800/80 rounded-xl hover:border-purple-600 transition group">
                  <span className="block text-xs font-bold text-white group-hover:text-purple-400">Metro Boomin</span>
                  <span className="block text-[10px] text-neutral-400">Dark 808 Trap</span>
                </Link>
                <Link href="/vibe/j-cole-type-beats" className="p-3 bg-neutral-950/80 border border-neutral-800/80 rounded-xl hover:border-purple-600 transition group">
                  <span className="block text-xs font-bold text-white group-hover:text-purple-400">J. Cole Vibes</span>
                  <span className="block text-[10px] text-neutral-400">Soulful Boom Bap</span>
                </Link>
                <Link href="/vibe/drake-type-beats" className="p-3 bg-neutral-950/80 border border-neutral-800/80 rounded-xl hover:border-purple-600 transition group">
                  <span className="block text-xs font-bold text-white group-hover:text-purple-400">Drake OVO</span>
                  <span className="block text-[10px] text-neutral-400">Melodic Trap &amp; R&amp;B</span>
                </Link>
                <Link href="/vibe/travis-scott-type-beats" className="p-3 bg-neutral-950/80 border border-neutral-800/80 rounded-xl hover:border-purple-600 transition group">
                  <span className="block text-xs font-bold text-white group-hover:text-purple-400">Travis Scott</span>
                  <span className="block text-[10px] text-neutral-400">Psychedelic Trap</span>
                </Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                <Link href="/genre/trap-beats" className="text-center p-2.5 bg-neutral-950/50 border border-neutral-800/60 rounded-xl text-xs font-semibold text-neutral-300 hover:text-purple-300 hover:border-purple-800 transition">
                  Trap Beats
                </Link>
                <Link href="/genre/boom-bap-beats" className="text-center p-2.5 bg-neutral-950/50 border border-neutral-800/60 rounded-xl text-xs font-semibold text-neutral-300 hover:text-purple-300 hover:border-purple-800 transition">
                  Boom Bap Beats
                </Link>
                <Link href="/genre/hip-hop-beats" className="text-center p-2.5 bg-neutral-950/50 border border-neutral-800/60 rounded-xl text-xs font-semibold text-neutral-300 hover:text-purple-300 hover:border-purple-800 transition">
                  Hip-Hop Beats
                </Link>
                <Link href="/genre/rb-instrumentals" className="text-center p-2.5 bg-neutral-950/50 border border-neutral-800/60 rounded-xl text-xs font-semibold text-neutral-300 hover:text-purple-300 hover:border-purple-800 transition">
                  R&amp;B Beats
                </Link>
                <Link href="/genre/drill-beats" className="text-center p-2.5 bg-neutral-950/50 border border-neutral-800/60 rounded-xl text-xs font-semibold text-neutral-300 hover:text-purple-300 hover:border-purple-800 transition">
                  Drill Beats
                </Link>
                <Link href="/genre/lofi-hip-hop-beats" className="text-center p-2.5 bg-neutral-950/50 border border-neutral-800/60 rounded-xl text-xs font-semibold text-neutral-300 hover:text-purple-300 hover:border-purple-800 transition">
                  Lo-Fi Beats
                </Link>
                <Link href="/genre/synthwave-instrumentals" className="text-center p-2.5 bg-neutral-950/50 border border-neutral-800/60 rounded-xl text-xs font-semibold text-neutral-300 hover:text-purple-300 hover:border-purple-800 transition">
                  Synthwave
                </Link>
                <Link href="/deals" className="text-center p-2.5 bg-purple-950/40 border border-purple-800/60 rounded-xl text-xs font-bold text-purple-300 hover:text-white hover:bg-purple-900/60 transition">
                  VIP Deals ($9.99)
                </Link>
              </div>
            </div>
            <section className="mt-10 bg-neutral-900/70 border border-neutral-800 rounded-2xl p-6 space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-purple-400" /> Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <div className="border-b border-neutral-800 pb-4">
                  <h3 className="font-semibold text-white text-sm">{guide.faq1Q}</h3>
                  <p className="text-slate-400 text-sm mt-1">{guide.faq1A}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm">{guide.faq2Q}</h3>
                  <p className="text-slate-400 text-sm mt-1">{guide.faq2A}</p>
                </div>
              </div>
            </section>
            <div className="mt-12 bg-purple-950/40 border border-purple-600/30 rounded-2xl p-6 text-center">
              <div className="inline-flex items-center gap-1.5 text-xs text-purple-300 font-semibold mb-2">
                <Sparkles className="w-4 h-4 text-purple-400" /> Instant Untagged Delivery
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Need Untagged Studio Beats for Your Next Release?</h3>
              <p className="text-slate-300 text-sm mb-6">Stream our catalog with instant MP3, WAV, and STEMS licensing or unlock 5 WAV leases/month with the $9.99 VIP Beat Pass.</p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="/" className="bg-purple-600 hover:bg-purple-500 text-white font-bold px-6 py-2.5 rounded-xl text-sm">Browse Beat Catalog</Link>
                <Link href="/999-beat-pass" className="bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold px-6 py-2.5 rounded-xl text-sm flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> $9.99/mo VIP Beat Pass
                </Link>
              </div>
            </div>
          </article>
        </main>
      </div>
    </>
  );
}

