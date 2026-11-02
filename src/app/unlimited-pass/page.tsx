import { Metadata } from 'next';
import SubscriptionPricing from '@/components/SubscriptionPricing';
import { Crown, Zap, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Unlimited Artist Pass & Pro Beat Membership | Different Type of Vibe',
  description: 'Subscribe to the Pro & Unlimited VIP Passes for unlimited streaming rights, separated WAV stems, and radio clearance.',
  alternates: {
    canonical: 'https://differenttypeofvibe.com/unlimited-pass',
  },
};

export default function UnlimitedPassPage() {
  return (
    <main className="container mx-auto p-6 min-h-screen max-w-6xl">
      <div className="text-center my-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300 text-sm font-semibold mb-4">
          <Zap className="w-4 h-4 text-purple-400" />
          Unlimited Commercial Streaming & Trackout Stems
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Unlimited <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-purple-400">Artist Pass</span>
        </h1>
        <p className="text-zinc-400 mt-4 text-lg max-w-2xl mx-auto">
          Built for serious recording artists, audio engineers, and labels. Includes WAV trackouts, stems, and unlimited digital distribution.
        </p>
      </div>

      <SubscriptionPricing />
    </main>
  );
}
