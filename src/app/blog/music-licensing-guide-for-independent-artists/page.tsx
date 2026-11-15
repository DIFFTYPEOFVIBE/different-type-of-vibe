import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, BookOpen, ShieldCheck, CheckCircle2, FileText, Music2, Sparkles, ChevronRight, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Spotify Music Clearance Guide: Avoid Copyright Strikes & Keep 100% Royalties',
  description: 'Complete 2026 guide to beat licensing agreements, master royalties vs publishing splits, YouTube Content ID rules, and DistroKid Spotify clearance.',
  keywords: [
    'spotify music clearance',
    'beat lease rights',
    'publishing splits beatstars',
    'avoid copyright strikes spotify',
    'how to register leased beats with ascap',
    'distrokid content id leased beat',
    'metro boomin beats for sale',
    'travis scott type beat clearance'
  ],
  alternates: { canonical: 'https://www.differenttypeofvibe.com/blog/music-licensing-guide-for-independent-artists' },
  openGraph: {
    title: 'Spotify Clearance Guide: Avoid Strikes & Keep 100% Master Royalties',
    description: 'Learn how to legally clear beat leases for Spotify, Apple Music, and YouTube without copyright strikes or Content ID issues.',
    url: 'https://www.differenttypeofvibe.com/blog/music-licensing-guide-for-independent-artists',
    type: 'article',
  },
};

export default function MusicLicensingGuidePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        'headline': 'Spotify Music Clearance Guide: Avoid Copyright Strikes & Keep 100% Royalties',
        'description': 'A comprehensive legal guide for recording artists releasing songs on Spotify, Apple Music, and YouTube using non-exclusive beat leases.',
        'author': { '@type': 'Person', 'name': 'Onzieb', 'url': 'https://differenttypeofvibe.com' },
        'publisher': { '@type': 'Organization', 'name': 'Different Type of Vibe', 'url': 'https://differenttypeofvibe.com' },
        'datePublished': '2026-08-15T00:00:00Z',
        'dateModified': new Date().toISOString(),
      },
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://differenttypeofvibe.com' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Blog', 'item': 'https://differenttypeofvibe.com/blog' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Spotify Clearance Guide', 'item': 'https://differenttypeofvibe.com/blog/music-licensing-guide-for-independent-artists' }
        ]
      },
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Do I own 100% of my Spotify master royalties when I lease a beat?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes. When you license a non-exclusive beat lease from Different Type of Vibe, you keep 100% of your artist streaming royalties distributed through DistroKid, TuneCore, CD Baby, or UnitedMasters.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Can I enroll my leased song in YouTube Content ID?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'No. Leased beats cannot be enrolled in automated Content ID matching services because multiple artists lease the underlying instrumental. Enrolling leased tracks creates false copyright claims against other creators.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How do I register a leased beat with ASCAP or BMI?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Enter your songwriter/artist information for 100% of the lyricist share (50% of the overall composition) and credit Onzieb as the music producer/composer according to your signed PDF license agreement.'
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-[#0d0f12] text-slate-100 font-sans pb-16">
        <header className="border-b border-neutral-800 bg-black/60 sticky top-0 z-40 backdrop-blur-md">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/blog" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-purple-400 font-medium transition">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Articles</span>
            </Link>
            <span className="text-purple-400 text-xs font-bold uppercase font-mono">INDUSTRY RIGHTS GUIDE</span>
          </div>
        </header>

        <main className="container mx-auto px-4 py-10 max-w-3xl">
          <article>
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-900/30 text-purple-400 text-xs font-bold border border-purple-500/20 mb-4 uppercase">
                <BookOpen className="w-3.5 h-3.5" /> Commercial Music Law &bull; 2026 Edition
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
                Spotify Music Clearance Guide: Avoid Copyright Strikes &amp; Keep 100% Royalties
              </h1>
              <div className="flex items-center gap-3 text-xs text-slate-400">
                <span>By <strong>Onzieb</strong> (Music Producer &amp; ASCAP Publisher)</span>
                <span>&bull;</span>
                <span>8 min read</span>
                <span>&bull;</span>
                <span className="text-emerald-400 font-medium">Updated for 2026 Streaming Rules</span>
              </div>
            </div>

            <div className="my-6 p-5 rounded-2xl bg-gradient-to-r from-purple-950/70 to-neutral-900 border border-purple-700/50 text-sm text-slate-200 shadow-xl space-y-2">
              <div className="flex items-center gap-2 text-purple-300 font-bold uppercase tracking-wider text-xs">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Executive Summary</span>
              </div>
              <p className="leading-relaxed">
                When you buy an untagged commercial beat lease, you own <strong>100% of your master recording royalties</strong> on Spotify, Apple Music, and YouTube. You do not need to give up your streaming revenue. However, you must avoid checking the &ldquo;YouTube Content ID&rdquo; checkbox on your distributor (DistroKid/TuneCore) to prevent false copyright strikes.
              </p>
            </div>

            <div className="prose prose-invert max-w-none text-slate-300 text-base space-y-6 leading-relaxed">
              <p>
                In 2026, over 100,000 new tracks are uploaded to Spotify every day. For independent rappers, singers, and vocalists, non-exclusive beat licensing has democratized chart-ready production. But releasing a track without understanding the legal distinction between <em>Master Rights</em> and <em>Publishing Rights</em> can cost you thousands of dollars in withheld royalties or trigger sudden takedowns.
              </p>

              <h2 className="text-2xl font-bold text-white pt-6 flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-purple-400" />
                <span>1. Master Royalties vs. Songwriter Publishing Splits</span>
              </h2>
              <p>
                Every commercial song contains two distinct copyrights:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-slate-200">
                <li><strong>The Master Recording (Sound Recording):</strong> The actual audio file of your finished vocal performance. When you lease a beat from <Link href="/" className="text-purple-400 hover:underline font-semibold">Different Type of Vibe</Link>, you retain <strong>100% of master royalties</strong>. All money paid out by DistroKid, TuneCore, or Spotify for Artists goes directly to your bank account.</li>
                <li><strong>The Composition / Publishing (Work of Authorship):</strong> The underlying melody, harmony, and lyrics. By music industry convention, publishing is split <strong>50% to the lyricist/vocalist</strong> and <strong>50% to the music producer/composer</strong>.</li>
              </ul>

              <div className="my-8 p-5 rounded-xl bg-zinc-900 border border-purple-900/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-purple-400 uppercase tracking-wider block mb-1">Trending Dark Trap Production</span>
                  <h3 className="text-base font-bold text-white">Looking for Metro Boomin Style 808s?</h3>
                  <p className="text-xs text-zinc-400 mt-1">Pre-cleared commercial WAV leases with isolated stem trackouts available.</p>
                </div>
                <Link
                  href="/vibe/metro-boomin-type-beats"
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs rounded-lg transition shrink-0 flex items-center gap-1.5"
                >
                  <span>Browse Metro Boomin Beats</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <h2 className="text-2xl font-bold text-white pt-6 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-amber-400" />
                <span>2. The YouTube Content ID Trap (Why Artists Get Struck)</span>
              </h2>
              <p>
                The #1 reason independent artists receive copyright warnings on YouTube isn’t from the producer—it’s from other artists mistakenly enrolling in automated Content ID matching services.
              </p>
              <p>
                When uploading to your digital distributor, you will see an optional add-on: <em>“YouTube Content ID ($4.95/yr)”</em>. <strong>DO NOT CHECK THIS BOX</strong> for non-exclusive beat leases. Because multiple artists can legally lease the same instrumental, automated Content ID bots will fingerprint the beat and falsely claim copyright over everyone else’s songs.
              </p>
              <p>
                Our commercial licenses grant you full rights to monetize your YouTube music video directly via YouTube Partner Program ad revenue on your own channel.
              </p>

              <div className="my-8 p-5 rounded-xl bg-zinc-900 border border-amber-900/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">Psychedelic Trap &amp; Heavy 808s</span>
                  <h3 className="text-base font-bold text-white">Need Travis Scott Style Synth Switch-Ups?</h3>
                  <p className="text-xs text-zinc-400 mt-1">Studio 24-bit WAVs with analog synth textures and pitch-shifting bass.</p>
                </div>
                <Link
                  href="/vibe/travis-scott-type-beats"
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs rounded-lg transition shrink-0 flex items-center gap-1.5"
                >
                  <span>Browse Travis Scott Beats</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <h2 className="text-2xl font-bold text-white pt-6 flex items-center gap-2">
                <FileText className="w-6 h-6 text-emerald-400" />
                <span>3. Registering with PROs (ASCAP, BMI, PRS, SOCAN, GEMA)</span>
              </h2>
              <p>
                When your song gets streamed, performed live, or played on radio, Performance Rights Organizations collect mechanical and public performance royalties:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-slate-200">
                <li><strong>United States:</strong> Register your title on <Link href="/deals/united-states" className="text-purple-400 hover:underline">ASCAP or BMI</Link> entering Onzieb as the composer/producer.</li>
                <li><strong>United Kingdom:</strong> Register with <Link href="/deals/uk/drill" className="text-purple-400 hover:underline">PRS for Music &amp; PPL</Link> for radio play on BBC 1Xtra and Kiss FM.</li>
                <li><strong>Germany / DACH:</strong> Cleared for <Link href="/deals/germany/beats-kaufen" className="text-purple-400 hover:underline">GEMA registration</Link> with zero third-party uncleared sample risk.</li>
                <li><strong>Canada:</strong> 100% compliant with <Link href="/deals/canada" className="text-purple-400 hover:underline">SOCAN</Link> for Canadian radio and FACTOR grant submissions.</li>
                <li><strong>Nigeria / Africa:</strong> Cleared for <Link href="/deals/nigeria/paystack" className="text-purple-400 hover:underline">COSON &amp; MCSN</Link> with instant Naira (₦) checkout.</li>
              </ul>

              <div className="my-8 p-5 rounded-xl bg-zinc-900 border border-blue-900/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block mb-1">Soulful Boom Bap &amp; Lofi</span>
                  <h3 className="text-base font-bold text-white">Looking for J. Cole Style Vinyl Chops?</h3>
                  <p className="text-xs text-zinc-400 mt-1">Warm Rhodes keys, acoustic basslines, and punchy drum breaks.</p>
                </div>
                <Link
                  href="/vibe/j-cole-type-beats"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-lg transition shrink-0 flex items-center gap-1.5"
                >
                  <span>Browse J. Cole Beats</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <h2 className="text-2xl font-bold text-white pt-6">4. Stream Limits &amp; When to Upgrade to Stems</h2>
              <p>
                A standard MP3 or WAV lease typically grants between 50,000 to 100,000 commercial audio streams. If your song catches Spotify algorithmic traction on Release Radar or Discover Weekly:
              </p>
              <ol className="list-decimal pl-5 space-y-2 text-sm text-slate-200">
                <li>Check your monthly analytics inside Spotify for Artists.</li>
                <li>When nearing your stream cap, upgrade to an <Link href="/pricing" className="text-purple-400 hover:underline font-semibold">Unlimited Stems License</Link> or join the <Link href="/vip-pass" className="text-purple-400 hover:underline font-semibold">$9.99/mo VIP Pass</Link>.</li>
                <li>Upgrading is retroactive—you keep 100% of your accrued streams, playlist placements, and algorithm data.</li>
              </ol>
            </div>

            <div className="mt-12 bg-gradient-to-br from-purple-950 via-neutral-900 to-black border border-purple-600/40 rounded-2xl p-6 md:p-8 text-center shadow-2xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>100% Royalty Free &bull; Signed Commercial Contracts</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white">Ready to Release Your Next Hit with Zero Legal Stress?</h3>
              <p className="text-slate-300 text-sm max-w-xl mx-auto leading-relaxed">
                Stream over 50+ custom instrumentals produced by Onzieb. Download instant untagged 24-bit WAV trackouts starting at just $9.99/month with our VIP Pass.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <Link href="/" className="bg-purple-600 hover:bg-purple-500 text-white font-bold px-6 py-3 rounded-xl text-sm transition shadow-lg shadow-purple-600/30">
                  Explore Full Beat Catalog
                </Link>
                <Link href="/pricing" className="bg-neutral-800 hover:bg-neutral-700 text-white font-bold px-6 py-3 rounded-xl text-sm border border-neutral-700 transition">
                  View $9.99 VIP Pass Details
                </Link>
              </div>
            </div>
          </article>
        </main>
      </div>
    </>
  );
}
