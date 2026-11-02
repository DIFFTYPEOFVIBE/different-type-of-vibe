import { Metadata } from 'next';
import Link from 'next/link';
import { Tag, Sparkles, ArrowRight, Percent } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Verified Beat Promo Codes & Coupon Discounts 2026 | Different Type of Vibe',
  description: 'Official active promo codes and discount coupons for Different Type of Vibe. Use code WELCOME30 for 30% off beat leases or grab the $9.99 VIP Artist Pass.',
  alternates: {
    canonical: 'https://differenttypeofvibe.com/promo-codes',
  },
};

const PROMO_CODES = [
  {
    code: 'WELCOME30',
    discount: '30% OFF',
    description: 'Save 30% instantly on any MP3 Lease, WAV Lease, or Stems Trackout order across the entire beat catalog.',
    badge: 'MOST POPULAR',
    badgeColor: 'bg-purple-600 text-white',
    category: 'All Beat Leases',
  },
  {
    code: 'VIPPASS',
    discount: 'ONLY $9.99/MO',
    description: 'Get untagged WAV beat leases delivered monthly + 25% off all STEMS & Unlimited licenses.',
    badge: 'BEST VALUE',
    badgeColor: 'bg-emerald-600 text-white',
    category: 'VIP Membership',
  },
  {
    code: 'BUY2GET1',
    discount: 'BUY 2 GET 1 FREE',
    description: 'Add 3 beats of the same license tier to your cart and the 3rd beat will be 100% free at checkout.',
    badge: 'AUTO-APPLIED IN CART',
    badgeColor: 'bg-blue-600 text-white',
    category: 'Automatic Bundle',
  },
  {
    code: 'BUY3GET2',
    discount: 'BUY 3 GET 2 FREE',
    description: 'Add 5 beats of the same license tier to your cart and get 2 beats completely free.',
    badge: 'AUTO-APPLIED IN CART',
    badgeColor: 'bg-amber-600 text-white',
    category: 'Automatic Bundle',
  },
];

export default function PromoCodesPage() {
  return (
    <main className="container mx-auto px-4 py-12 min-h-screen max-w-5xl">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/40 border border-purple-500/30 text-purple-300 text-sm font-semibold mb-4">
          <Tag className="w-4 h-4 text-purple-400" />
          Official 2026 Discount Store
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Beat Store <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-indigo-400">Promo Codes & Discounts</span>
        </h1>
        <p className="text-zinc-400 mt-4 text-lg max-w-2xl mx-auto">
          Save big on high-quality untagged instrumental leases, stem trackouts, and exclusive VIP artist passes with our verified coupons.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {PROMO_CODES.map((item) => (
          <div key={item.code} className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 relative flex flex-col justify-between hover:border-purple-500/40 transition-all duration-300 shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-400">{item.category}</span>
                <span className={`text-xs font-extrabold px-3 py-1 rounded-full uppercase ${item.badgeColor}`}>{item.badge}</span>
              </div>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-3xl font-extrabold text-white">{item.discount}</span>
              </div>
              <p className="text-zinc-400 text-sm mb-6 leading-relaxed">{item.description}</p>
            </div>
            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Percent className="w-4 h-4 text-purple-400" />
                <code className="text-purple-300 font-mono font-bold text-lg">{item.code}</code>
              </div>
              <Link href="/#beats" className="inline-flex items-center gap-1.5 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs px-4 py-2 rounded-lg transition-colors">
                Use Code <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-purple-900/40 via-zinc-900 to-indigo-900/40 border border-purple-500/30 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-3">How to Apply Coupon Codes</h2>
        <p className="text-zinc-400 text-sm max-w-xl mx-auto mb-6">Browse our catalog, pick your beats, and enter <code className="text-purple-300 font-bold">WELCOME30</code> at checkout for instant 30% savings!</p>
        <Link href="/#beats" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-extrabold px-8 py-3.5 rounded-xl shadow-lg transition-all">
          <Sparkles className="w-5 h-5" />
          Browse Full Beat Catalog Now
        </Link>
      </div>
    </main>
  );
}
