import { Metadata } from 'next';
import SubscriptionPricing from '@/components/SubscriptionPricing';
import { Flame, Sparkles, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Trap Beat Deals & VIP Subscription Pass | Different Type of Vibe',
  description: 'Get untagged hard Trap beat leases, 808 heavy instrumentals, and Lil Baby / Travis Scott type beats for $9.99/mo.',
  alternates: { canonical: 'https://differenttypeofvibe.com/trap-beat-deals' },
};

export default function TrapBeatDealsPage() {
  return (
    <main className="container mx-auto p-6 min-h-screen max-w-6xl">
      <div className="text-center my-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300 text-sm font-semibold mb-4">
          <Flame className="w-4 h-4 text-purple-400" />
          #1 Hard Trap & Dark 808 Instrumental Deals
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Trap Beat Deals & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">VIP Pass</span>
        </h1>
        <p className="text-zinc-400 mt-4 text-lg max-w-2xl mx-auto">
          Unlock commercial untagged WAV trap beat leases delivered monthly or claim BOGO discounts on all dark trap instrumentals.
        </p>
      </div>

      <SubscriptionPricing />
    </main>
  );
}
