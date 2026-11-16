'use client';

import React from 'react';

const STRIPE_VIP_LINK = 'https://buy.stripe.com/bJe5kCgKebCq3Ipg8vcZa2p';

export default function BuyStandardPass({ variantId }: { variantId?: number }) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    try {
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'InitiateCheckout', {
          content_name: 'Standard VIP Pass ($9.99/mo)',
          content_ids: ['standard_vip_pass'],
          content_type: 'product',
          value: 9.99,
          currency: 'USD',
        });
      }
    } catch {
      // Fallback
    }
  };

  return (
    <a
      href={STRIPE_VIP_LINK}
      onClick={handleClick}
      className="w-full block text-center bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold py-3.5 rounded-lg transition-all shadow-lg shadow-emerald-500/20 text-sm tracking-wide cursor-pointer"
    >
      Start $9.99 Pass (Instant Download)
    </a>
  );
}

