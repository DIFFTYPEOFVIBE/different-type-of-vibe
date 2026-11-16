'use client';

import { useState } from 'react';

export default function BuyStandardPass({ variantId = 2326670 }: { variantId?: number }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleBuy() {
    setLoading(true);
    setError('');
    try {
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'InitiateCheckout', {
          content_name: 'Standard VIP Pass ($9.99/mo)',
          content_ids: [String(variantId)],
          content_type: 'product',
          value: 9.99,
          currency: 'USD',
        });
      }
      // Direct Stripe Subscription Checkout (No Lemon Squeezy dependency)
      const res = await fetch('/api/subscription/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ planTier: 'standard' }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error || 'Failed to start checkout');
      }
    } catch (err) {
      setError('Network error. Please try again or chat on WhatsApp.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <button
        onClick={handleBuy}
        disabled={loading}
        className="w-full bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-black font-bold py-3 rounded-lg transition-all"
      >
        {loading ? 'Starting Checkout...' : 'Start $9.99 Pass (Instant Download)'}
      </button>
      {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
    </div>
  );
}
