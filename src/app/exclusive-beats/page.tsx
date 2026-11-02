import { Metadata } from 'next';
import Link from 'next/link';
import { Crown, Sparkles, CheckCircle2, ArrowRight, Music, Sliders, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Buy Exclusive Beats & Custom Beat Production | Onzieb',
  description: 'Own 100% exclusive rights to industry-ready instrumentals. Full WAV stems, custom beat ordering, and complete royalty ownership.',
  alternates: {
    canonical: 'https://differenttypeofvibe.com/exclusive-beats',
  },
};

const EXCLUSIVE_BENEFITS = [
  '100% Full Ownership & Copyright Transfer',
  'Beat is immediately removed from store catalog',
  'Full Uncompressed 24-Bit WAV Trackout Stems',
  'Unlimited Spotify & Apple Music Streams',
  'Unlimited Commercial Radio & TV Sync Rights',
  'Keep 100% of Master & Publishing Royalties',
];

export default function ExclusiveBeatsPage() {
  return (
    <main className="container mx-auto px-4 py-12 min-h-screen max-w-5xl">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-900/40 border border-amber-500/30 text-amber-300 text-sm font-semibold mb-4">
          <Crown className="w-4 h-4 text-amber-400" />
          100% Full Ownership & Exclusive Rights
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Exclusive Beat Rights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">Custom Production</span>
        </h1>
        <p className="text-zinc-400 mt-4 text-lg max-w-2xl mx-auto">
          Take total control of your music. When you purchase exclusive rights, the beat becomes 100% yours and is permanently taken off the market.
        </p>
      </div>

      <div className="bg-gradient-to-br from-zinc-900 via-amber-950/20 to-zinc-900 border border-amber-500/30 rounded-3xl p-8 md:p-10 mb-12 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-extrabold text-white mb-4">Why Buy Exclusive Rights?</h2>
            <div className="space-y-3 mb-6">
              {EXCLUSIVE_BENEFITS.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span className="text-zinc-200 text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>
            <Link 
              href="/#beats" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-zinc-950 font-extrabold px-8 py-3.5 rounded-xl shadow-lg transition-all"
            >
              <Crown className="w-5 h-5" />
              Browse Catalog for Exclusives
            </Link>
          </div>

          <div className="bg-zinc-950/80 border border-zinc-800 rounded-2xl p-6 text-center">
            <h3 className="text-xl font-bold text-white mb-2">Want a Custom Beat Produced?</h3>
            <p className="text-zinc-400 text-sm mb-6">
              Need a unique sound tailored specifically to your voice, key, BPM, and reference tracks? Onzieb offers custom 1-on-1 beat production.
            </p>
            <div className="p-4 bg-zinc-900 border border-amber-500/20 rounded-xl mb-6 text-left space-y-2 text-xs text-zinc-300">
              <p>✔ Tailored key & BPM to fit your exact vocal range</p>
              <p>✔ Custom structural arrangement & drop edits</p>
              <p>✔ Includes full WAV stems & exclusive rights contract</p>
            </div>
            <a 
              href="mailto:support@differenttypeofvibe.com?subject=Custom%20Beat%20Production%20Inquiry" 
              className="inline-flex items-center justify-center gap-2 w-full bg-zinc-800 hover:bg-zinc-700 text-amber-300 font-bold px-6 py-3 rounded-xl border border-amber-500/30 transition-colors text-sm"
            >
              Request Custom Beat Quote
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
