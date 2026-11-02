import { Metadata } from 'next';
import Link from 'next/link';
import { Star, ShieldCheck, CheckCircle2, Music, Crown } from 'lucide-react';
import SubscriptionPricing from '@/components/SubscriptionPricing';

export const metadata: Metadata = {
  title: 'Artist Reviews & Testimonials | Different Type of Vibe',
  description: 'See what independent artists and producers say about Onzieb beats, $9.99 VIP Pass subscriptions, and studio audio quality.',
  alternates: { canonical: 'https://differenttypeofvibe.com/testimonials' },
};

const REVIEWS = [
  {
    name: 'Marcus "JayVibe" Sterling',
    location: 'Atlanta, GA 🇺🇸',
    rating: 5,
    role: 'Recording Artist',
    text: 'The 808s and frequency pockets on Onzieb beats lock in with my vocals automatically. Joined the $9.99 VIP Pass and downloaded 5 studio WAV leases on day one!',
  },
  {
    name: 'Liam O\'Connor',
    location: 'London, UK 🇬🇧',
    rating: 5,
    role: 'Drill & Rap Vocalist',
    text: 'Hard sliding UK drill beats. The legal clearance contracts came straight to my email inbox immediately after Stripe checkout. 10/10 service!',
  },
  {
    name: 'Kofi Mensah',
    location: 'Accra, Ghana 🇬🇭',
    rating: 5,
    role: 'Afrobeats Recording Artist',
    text: 'Paystack Mobile Money (MoMo) checkout worked seamlessly! I bought the WAV lease and submitted my track to Spotify distributors with zero copyright issues.',
  },
];

export default function TestimonialsPage() {
  return (
    <main className="container mx-auto px-4 py-12 min-h-screen max-w-6xl">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 text-sm font-semibold mb-4">
          <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
          5.0 Star Rated Beat Store & Production Studio
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Artist <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">Reviews & Success Stories</span>
        </h1>
        <p className="text-zinc-400 mt-4 text-lg max-w-2xl mx-auto">
          Over 650+ independent artists, singers, and rappers trust Different Type of Vibe for industry-ready instrumentals and licensing.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {REVIEWS.map((rev, idx) => (
          <div key={idx} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-1 text-amber-400 mb-3">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-zinc-300 text-sm italic mb-6 leading-relaxed">"{rev.text}"</p>
            </div>
            <div className="border-t border-zinc-800 pt-4 flex items-center justify-between">
              <div>
                <h3 className="text-white font-bold text-sm">{rev.name}</h3>
                <p className="text-zinc-500 text-xs">{rev.role} • {rev.location}</p>
              </div>
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            </div>
          </div>
        ))}
      </div>

      <SubscriptionPricing />
    </main>
  );
}
