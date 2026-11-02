import { Metadata } from 'next';
import SubscriptionPricing from '@/components/SubscriptionPricing';
import { Sparkles, Music } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Drake Type Beat Deals & VIP Pass | Different Type of Vibe',
  description: 'Download untagged Drake, OVO, and Melodic R&B/Trap beat leases for $9.99/mo. Commercial streaming rights included.',
  alternates: { canonical: 'https://differenttypeofvibe.com/drake-type-beat-deals' },
};

export default function DrakeTypeBeatDealsPage() {
  return (
    <main className="container mx-auto p-6 min-h-screen max-w-6xl">
      <div className="text-center my-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300 text-sm font-semibold mb-4">
          <Music className="w-4 h-4 text-purple-400" />
          Dark OVO Melodic Trap & R&B Beat Deals
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Drake Type Beat Deals & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">VIP Pass</span>
        </h1>
        <p className="text-zinc-400 mt-4 text-lg max-w-2xl mx-auto">
          Moody synth pads, filtered vocal chops, and crisp drums. Get 5 untagged WAV leases monthly for $9.99/mo.
        </p>
      </div>

      <SubscriptionPricing />
    </main>
  );
}
