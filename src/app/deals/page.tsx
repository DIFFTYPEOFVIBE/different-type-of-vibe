// app/deals/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import SubscriptionPricing from '@/components/SubscriptionPricing';
import SxoBeatCalculator from '@/components/SxoBeatCalculator';
import SiloInterlinkingMesh from '@/components/SiloInterlinkingMesh';
import { Tag, Sparkles, ShieldCheck, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Beat Deals & VIP Subscriptions (Official Beat Store) | Different Type of Vibe',
  description: 'Top beat deals online: Unlock 5 uncompressed 24-bit WAV beat leases every month for only $9.99/mo, or claim automatic Buy-3-Get-1-Free bulk discounts.',
  keywords: [
    'beatdeals',
    'beat deals',
    'buy beat deals',
    'cheap beat leases',
    'vip beat pass',
    'bogo beat deals',
    'different type of vibe deals',
  ],
  alternates: {
    canonical: 'https://www.differenttypeofvibe.com/deals',
  },
};

export default function DealsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.differenttypeofvibe.com' },
          { '@type': 'ListItem', position: 2, name: 'Beat Deals', item: 'https://www.differenttypeofvibe.com/deals' },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What are the best beat deals on Different Type of Vibe?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The best beat deal is our VIP Standard Pass ($9.99/month), delivering 5 studio 24-bit WAV beat leases every month (only $2.00 per beat compared to $49.99 retail). We also offer an automatic Buy 3 Get 1 Free bulk discount across all individual cart items.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does the Buy 3 Get 1 Free BOGO deal work?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Add 4 or more beat leases to your cart. The system automatically discounts 1 beat 100% free at checkout with zero coupon codes required.',
            },
          },
          {
            '@type': 'Question',
            name: 'Are beat deals cleared for commercial release on Spotify?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes! All beats purchased through our deals include full commercial streaming clearance and 100% master royalty retention for the artist.',
            },
          },
        ],
      },
    ],
  };

  return (
    <main className="container mx-auto p-4 md:p-6 min-h-screen max-w-6xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav aria-label="Breadcrumb" className="my-4 text-xs text-zinc-400 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-purple-400 transition">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
        <span className="text-zinc-200 font-medium">Beat Deals &amp; VIP Passes</span>
      </nav>

      <div className="text-center my-8 md:my-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300 text-sm font-semibold mb-4 shadow-lg shadow-purple-950/40">
          <Tag className="w-4 h-4 text-purple-400" />
          <span>Official Storefront Beat Deals &amp; BOGO Discounts</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          Active Beat Deals &amp; VIP Subscriptions
        </h1>
        <p className="text-zinc-400 mt-4 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
          Get uncompressed 24-bit WAV leases starting at just <span className="text-purple-400 font-bold">$2.00 per beat</span> ($9.99/mo VIP Pass) or take advantage of automatic Buy 3 Get 1 Free cart discounts.
        </p>

        <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 md:gap-4 bg-zinc-900/90 border border-zinc-800 rounded-2xl p-4 text-xs md:text-sm text-zinc-300 max-w-3xl shadow-md">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span><strong>Bulk Deal:</strong> Buy 3 Get 1 Free Auto-Applied</span>
          </div>
          <span className="hidden md:inline text-zinc-600">&bull;</span>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span><strong>VIP Pass:</strong> 5 WAV Leases / Mo ($9.99/mo)</span>
          </div>
        </div>
      </div>

      <SxoBeatCalculator />

      <section className="my-12">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">
            Choose Your Beat Licensing Deal
          </h2>
          <p className="text-zinc-400 text-sm mt-1">
            Zero marketplace middleman markups. Commercial clearance included on every pass.
          </p>
        </div>
        <SubscriptionPricing />
      </section>

      <SiloInterlinkingMesh />
    </main>
  );
}
