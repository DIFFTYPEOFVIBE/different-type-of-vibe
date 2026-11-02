import { Metadata } from 'next';
import SubscriptionPricing from '@/components/SubscriptionPricing';
import { Crown, Sparkles, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'VIP Artist Pass ($9.99/mo Untagged Beats) | Different Type of Vibe',
  description: 'Subscribe to the $9.99/mo VIP Artist Pass to receive untagged studio WAV beat leases delivered monthly + 25% off all STEM trackouts.',
  alternates: {
    canonical: 'https://differenttypeofvibe.com/vip-pass',
  },
};

export default function VipPassPage() {
  return (
    <main className="container mx-auto p-6 min-h-screen max-w-6xl">
      <div className="text-center my-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-sm font-semibold mb-4">
          <Crown className="w-4 h-4 text-emerald-400" />
          #1 Preferred Plan for Recording Artists
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          VIP Artist Pass <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Subscriptions</span>
        </h1>
        <p className="text-zinc-400 mt-4 text-lg max-w-2xl mx-auto">
          Unlock commercial untagged WAV beat leases every month for just $9.99. Instant download access and automated license delivery.
        </p>
      </div>

      <SubscriptionPricing />
    </main>
  );
}
