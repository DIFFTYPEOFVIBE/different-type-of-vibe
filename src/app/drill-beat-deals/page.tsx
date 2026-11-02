import { Metadata } from 'next';
import SubscriptionPricing from '@/components/SubscriptionPricing';
import { ShieldCheck, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'UK & NY Drill Beat Deals & VIP Pass | Different Type of Vibe',
  description: 'Download untagged Central Cee, Pop Smoke, and UK/NY Drill beat leases for $9.99/mo. Instant WAV delivery & commercial license.',
  alternates: { canonical: 'https://differenttypeofvibe.com/drill-beat-deals' },
};

export default function DrillBeatDealsPage() {
  return (
    <main className="container mx-auto p-6 min-h-screen max-w-6xl">
      <div className="text-center my-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-950/80 border border-blue-500/40 text-blue-300 text-sm font-semibold mb-4">
          <Zap className="w-4 h-4 text-blue-400" />
          UK, NY & Sample Drill Beat Discount Hub
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Drill Beat Deals & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">VIP Pass</span>
        </h1>
        <p className="text-zinc-400 mt-4 text-lg max-w-2xl mx-auto">
          Hard sliding 808s and aggressive brass drill instrumentals. Get 5 untagged WAV leases monthly for $9.99.
        </p>
      </div>

      <SubscriptionPricing />
    </main>
  );
}
