import { Metadata } from 'next';
import SubscriptionPricing from '@/components/SubscriptionPricing';
import { Music, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hip-Hop & Boom Bap Beat Deals | Different Type of Vibe',
  description: 'Untagged Boom Bap, Soulful Hip-Hop, and East Coast instrumentals for $9.99/mo. Commercial streaming rights included.',
  alternates: { canonical: 'https://differenttypeofvibe.com/hip-hop-deals' },
};

export default function HipHopDealsPage() {
  return (
    <main className="container mx-auto p-6 min-h-screen max-w-6xl">
      <div className="text-center my-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 text-sm font-semibold mb-4">
          <Music className="w-4 h-4 text-amber-400" />
          Classic Boom Bap & Soulful Hip-Hop Deals
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Hip-Hop Beat Deals & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">VIP Pass</span>
        </h1>
        <p className="text-zinc-400 mt-4 text-lg max-w-2xl mx-auto">
          Crate-dug sample chops and crisp vinyl drums. Get monthly untagged WAV leases for $9.99/mo.
        </p>
      </div>

      <SubscriptionPricing />
    </main>
  );
}
