import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Vocal Mixing Blueprint: How to Make Vocals Sit Perfectly in a Beat',
  description: '5 studio mixing techniques for EQ carving, compression, and vocal reverb buses when recording over pre-mixed Hip-Hop beats.',
  keywords: ['vocal mixing guide', 'how to mix vocals on beats', 'vocal eq for rap', 'recording over type beats'],
  alternates: { canonical: 'https://differenttypeofvibe.com/blog/vocal-mixing-guide-for-artists' },
};

export default function VocalMixingGuidePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        'headline': 'Vocal Mixing Blueprint: How to Make Your Vocals Sit Perfectly in a Beat',
        'author': { '@type': 'Person', 'name': 'Onzieb', 'url': 'https://differenttypeofvibe.com' },
        'publisher': { '@type': 'Organization', 'name': 'Different Type of Vibe' },
      },
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://differenttypeofvibe.com' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Blog', 'item': 'https://differenttypeofvibe.com/blog' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Vocal Mixing Blueprint', 'item': 'https://differenttypeofvibe.com/blog/vocal-mixing-guide-for-artists' }
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
            <span className="text-purple-400 text-xs font-bold uppercase font-mono">STUDIO MIXING GUIDE</span>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12 max-w-3xl">
          <article>
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-900/30 text-purple-400 text-xs font-bold border border-purple-500/20 mb-4 uppercase">
                <BookOpen className="w-3.5 h-3.5" /> Mixing Guide
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                Vocal Mixing Blueprint: How to Make Your Vocals Sit Perfectly in a Beat
              </h1>
              <p className="text-slate-400 text-sm">Published by Onzieb • 8 min read</p>
            </div>

            <div className="prose prose-invert max-w-none text-slate-300 text-base space-y-6">
              <p>When recording over pre-mastered Hip-Hop or R&B instrumentals, getting vocals to sound punchy and clear without competing against the beat requires specific EQ and dynamic techniques.</p>

              <h2 className="text-2xl font-bold text-white pt-4">1. High-Pass Filter Low-End Mud</h2>
              <p>Apply a clean high-pass filter curve around 80Hz–100Hz on your lead vocal track to remove low-end rumble and leave space for the 808 and kick drum bounce.</p>

              <h2 className="text-2xl font-bold text-white pt-4">2. Carve Mid-Range Frequencies</h2>
              <p>Slightly attenuate 1kHz–3kHz on the beat stereo track or use dynamic EQ so the vocal presence frequencies shine through naturally.</p>

              <h2 className="text-2xl font-bold text-white pt-4">3. Serial Vocal Compression</h2>
              <p>Use a fast peak limiter (FET compressor) to catch vocal spikes followed by an opto-compressor for smooth, warm leveling.</p>
            </div>

            <div className="mt-12 bg-purple-950/40 border border-purple-600/30 rounded-2xl p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-2">Want STEMS for Full Vocal Control?</h3>
              <p className="text-slate-300 text-sm mb-6">Upgrade to STEMS trackouts on any beat to mix individual drums, synths, and bass around your vocal stack.</p>
              <Link href="/links" className="bg-purple-600 hover:bg-purple-500 text-white font-bold px-6 py-2.5 rounded-xl text-sm inline-block">Explore Beats with STEMS</Link>
            </div>
          </article>
        </main>
      </div>
    </>
  );
}
