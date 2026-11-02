import { Metadata } from 'next';
import SubscriptionPricing from '@/components/SubscriptionPricing';
import { Layers, Percent, Sparkles, ShoppingBag } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Beat Bundle Deals & BOGO Discounts | Different Type of Vibe',
  description: 'Get Buy 2 Get 1 Free, Buy 3 Get 2 Free, or subscribe for $9.99/mo to get monthly untagged WAV beat leases.',
  alternates: {
    canonical: 'https://differenttypeofvibe.com/bundle-deals',
  },
};

export default function BundleDealsPage() {
  return (
    <main className="container mx-auto p-6 min-h-screen max-w-6xl">
      <div className="text-center my-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-950/80 border border-blue-500/40 text-blue-300 text-sm font-semibold mb-4">
          <Layers className="w-4 h-4 text-blue-400" />
          Automatic BOGO Discounts Applied in Cart
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Beat Bundles & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">VIP Pass Savings</span>
        </h1>
        <p className="text-zinc-400 mt-4 text-lg max-w-2xl mx-auto">
          Save up to 50% on beat leases with automatic bulk deals or subscribe to the $9.99/mo VIP Pass for recurring monthly leases.
        </p>
      </div>

      <SubscriptionPricing />
    </main>
  );
}
