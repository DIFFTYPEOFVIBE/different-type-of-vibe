// app/deals/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Beat Store Special Deals & BOGO Discounts | Buy Beats',
  description: 'Exclusive beat deals: Buy 1 Get 3 Free, 90% off beat bundles, and free tagged beat downloads for non-profit projects.',
  alternates: {
    canonical: 'https://yourstore.com/deals',
  },
};

export default function DealsPage() {
  return (
    <main className="container mx-auto p-6">
      <h1 className="text-4xl font-extrabold">Active Beat Deals & Discounts</h1>
      <p className="text-gray-400 mt-2">
        Add beats to your cart to trigger automatic bulk pricing discounts at checkout.
      </p>
      
      {/* Grid of beats on sale */}
    </main>
  );
}