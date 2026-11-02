import { Metadata } from 'next';
import SubscriptionPricing from '@/components/SubscriptionPricing';
import { Sparkles, Timer, Flame, Gift } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Limited-Time VIP Artist Special Offer ($9.99/mo) | Different Type of Vibe',
  description: 'Claim your exclusive VIP Artist Pass special offer. Includes 5 untagged WAV beat leases monthly + bonus drum kit sound pack.',
  alternates: {
    canonical: 'https://differenttypeofvibe.com/special-offer',
  },
};

export default function SpecialOfferPage() {
  return (
    <main className="container mx-auto p-6 min-h-screen max-w-6xl">
      <div className="text-center my-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 text-sm font-semibold mb-4">
          <Flame className="w-4 h-4 text-amber-400" />
          Exclusive Subscriber Special Discount
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Limited-Time <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">VIP Pass Offer</span>
        </h1>
        <p className="text-zinc-400 mt-4 text-lg max-w-2xl mx-auto">
          Get full access to untagged commercial WAV beat leases + instant subscriber discounts. Choose your pass tier below to start.
        </p>
      </div>

      <SubscriptionPricing />
    </main>
  );
}
