"use client";

import { reportConversion } from "@/utils/gtag";

interface BuyButtonProps {
  stripeUrl: string;
  beatTitle: string;
}

export default function BuyButton({ stripeUrl, beatTitle }: BuyButtonProps) {
  const handleCheckoutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Fires Google Ads conversion event, then safely redirects to Stripe checkout
    reportConversion(stripeUrl);
  };

  return (
    <a
      href={stripeUrl}
      onClick={handleCheckoutClick}
      className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition"
    >
      License {beatTitle}
    </a>
  );
}