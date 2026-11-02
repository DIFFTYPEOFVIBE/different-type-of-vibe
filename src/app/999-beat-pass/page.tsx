import { Metadata } from 'next';
import SubscriptionPricing from '@/components/SubscriptionPricing';
import { Crown, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: '$9.99 Beat Pass - Unlimited Untagged WAV Beats | Different Type of Vibe',
  description: 'Unlock 5 studio WAV beat leases every month for $9.99. Instant download access, clear commercial licensing, and BOGO discounts.',
  alternates: { canonical: 'https://differenttypeofvibe.com/999-beat-pass' },
};

export default function BeatPass999Page() {
  return (
    <main className="container mx-auto p-6 min-h-screen max-w-6xl">
      <div className="text-center my-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-sm font-semibold mb-4">
          <Crown className="w-4 h-4 text-emerald-400" />
          Official $9.99/mo VIP Subscription Gateway
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          The $9.99 <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">VIP Beat Pass</span>
        </h1>
        <p className="text-zinc-400 mt-4 text-lg max-w-2xl mx-auto">
          Get 5 commercial WAV beat leases delivered automatically to your inbox every month for less than the price of 1 single beat lease!
        </p>
      </div>

      <SubscriptionPricing />
    </main>
  );
}
