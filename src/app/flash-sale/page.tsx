import { Metadata } from 'next';
import SubscriptionPricing from '@/components/SubscriptionPricing';
import { Flame, Sparkles, Timer } from 'lucide-react';

export const metadata: Metadata = {
  title: '24-Hour Beat Store Flash Sale & VIP Pass | Different Type of Vibe',
  description: 'Limited 24-hour beat store flash sale! Get untagged studio WAV beat leases for $9.99/mo + 30% off with promo code WELCOME30.',
  alternates: { canonical: 'https://differenttypeofvibe.com/flash-sale' },
};

export default function FlashSalePage() {
  return (
    <main className="container mx-auto p-6 min-h-screen max-w-6xl">
      <div className="text-center my-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-950/80 border border-red-500/40 text-red-300 text-sm font-semibold mb-4 animate-pulse">
          <Flame className="w-4 h-4 text-red-400" />
          ⚡ 24-Hour Flash Sale Active - Save Up to 50%
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Beat Store <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-300 to-yellow-400">Flash Sale</span>
        </h1>
        <p className="text-zinc-400 mt-4 text-lg max-w-2xl mx-auto">
          Claim instant VIP Pass access for $9.99/mo or use code <code className="text-amber-300 font-bold">WELCOME30</code> at checkout for 30% off single leases!
        </p>
      </div>

      <SubscriptionPricing />
    </main>
  );
}
