import { Metadata } from 'next';
import SubscriptionPricing from '@/components/SubscriptionPricing';
import { Tag, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'First Order Discount - 30% Off Beat Leases | Different Type of Vibe',
  description: 'Use code WELCOME30 for 30% off your first beat lease purchase or subscribe to the $9.99/mo VIP Pass.',
  alternates: { canonical: 'https://differenttypeofvibe.com/first-order-discount' },
};

export default function FirstOrderDiscountPage() {
  return (
    <main className="container mx-auto p-6 min-h-screen max-w-6xl">
      <div className="text-center my-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300 text-sm font-semibold mb-4">
          <Tag className="w-4 h-4 text-purple-400" />
          Welcome Discount Code: WELCOME30
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          30% Off <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">Your First Beat Order</span>
        </h1>
        <p className="text-zinc-400 mt-4 text-lg max-w-2xl mx-auto">
          Save 30% on any beat lease with code <code className="text-purple-300 font-bold">WELCOME30</code> or select a $9.99/mo VIP Pass below for maximum savings.
        </p>
      </div>

      <SubscriptionPricing />
    </main>
  );
}
