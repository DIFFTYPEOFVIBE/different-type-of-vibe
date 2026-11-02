import { Metadata } from 'next';
import Link from 'next/link';
import { Download, Sparkles, CheckCircle2, ArrowRight, Music, Disc } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free Untagged Beats Download (Instant MP3 & WAV) | Different Type of Vibe',
  description: 'Download 3 free untagged beat leases for writing, recording, and demo practice. Instant MP3 download for Trap, Drill, R&B, and Afrobeats.',
  alternates: {
    canonical: 'https://differenttypeofvibe.com/free-downloads',
  },
};

export default function FreeDownloadsPage() {
  return (
    <main className="container mx-auto px-4 py-12 min-h-screen max-w-5xl">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-900/40 border border-indigo-500/30 text-indigo-300 text-sm font-semibold mb-4">
          <Download className="w-4 h-4 text-indigo-400" />
          100% Free Instant Downloads for Artists
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Free Untagged <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-purple-400">Beats & Instrumentals</span>
        </h1>
        <p className="text-zinc-400 mt-4 text-lg max-w-2xl mx-auto">
          Test your vocals on studio-quality instrumentals before buying. Download free tagged & untagged writing beats instantly.
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
    </main>
  );
}
