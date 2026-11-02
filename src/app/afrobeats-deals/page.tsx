import { Metadata } from 'next';
import SubscriptionPricing from '@/components/SubscriptionPricing';
import { Sparkles, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Afrobeats & Amapiano Beat Deals | Different Type of Vibe',
  description: 'Download untagged Burna Boy, Wizkid, and Asake style Afrobeats & Amapiano instrumentals for $9.99/mo with Paystack MoMo & Cards.',
  alternates: { canonical: 'https://differenttypeofvibe.com/afrobeats-deals' },
};

export default function AfrobeatsDealsPage() {
  return (
    <main className="container mx-auto p-6 min-h-screen max-w-6xl">
      <div className="text-center my-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-sm font-semibold mb-4">
          <Globe className="w-4 h-4 text-emerald-400" />
          Afrobeats, Afro-Pop & Amapiano Discount Hub
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Afrobeats Deals & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">VIP Pass</span>
        </h1>
        <p className="text-zinc-400 mt-4 text-lg max-w-2xl mx-auto">
          Melodic percussive rhythms and log-drum Amapiano beats. Subscribe for $9.99/mo or pay via Paystack Mobile Money (MoMo) & Cards.
        </p>
      </div>

      <SubscriptionPricing />
    </main>
  );
}
