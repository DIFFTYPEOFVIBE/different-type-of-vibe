import { Metadata } from 'next';
import SubscriptionPricing from '@/components/SubscriptionPricing';
import { Sparkles, Music } from 'lucide-react';

export const metadata: Metadata = {
  title: 'R&B & Soulful Instrumental Deals | Different Type of Vibe',
  description: 'Download untagged R&B, Trapsoul, and Neo-Soul beat leases for $9.99/mo. Instant WAV delivery & commercial streaming rights.',
  alternates: { canonical: 'https://differenttypeofvibe.com/rb-beat-deals' },
};

export default function RbBeatDealsPage() {
  return (
    <main className="container mx-auto p-6 min-h-screen max-w-6xl">
      <div className="text-center my-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-950/80 border border-indigo-500/40 text-indigo-300 text-sm font-semibold mb-4">
          <Music className="w-4 h-4 text-indigo-400" />
          Smooth Trapsoul & Modern R&B Beat Deals
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          R&B Beat Deals & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-300">VIP Pass</span>
        </h1>
        <p className="text-zinc-400 mt-4 text-lg max-w-2xl mx-auto">
          Silky electric keys, lush vocal harmonies, and warm basslines. Subscribe for $9.99/mo to download untagged WAV leases monthly.
        </p>
      </div>

      <SubscriptionPricing />
    </main>
  );
}
