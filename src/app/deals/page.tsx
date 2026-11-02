// app/deals/page.tsx
import { Metadata } from 'next';
import SubscriptionPricing from '@/components/SubscriptionPricing';

export const metadata: Metadata = {
  title: 'VIP Artist Pass Subscriptions & Beat Deals | Different Type of Vibe',
  description: 'Subscribe for $9.99/mo to get untagged WAV beat leases delivered monthly, or get exclusive BOGO beat discounts.',
  alternates: {
    canonical: 'https://differenttypeofvibe.com/deals',
  },
};

export default function DealsPage() {
  return (
    <main className="container mx-auto p-6 min-h-screen">
      <h1 className="text-4xl font-extrabold text-white text-center">Active Beat Deals & VIP Subscriptions</h1>
      <p className="text-zinc-400 mt-2 text-center">
        Select a VIP Artist Pass for $9.99/mo recurring WAV leases or add beats to your cart for instant BOGO discounts.
      </p>
      
      <SubscriptionPricing />
    </main>
  );
}