'use client';

import React, { useState, useEffect } from 'react';
import { X, Gift } from 'lucide-react';

export default function ExitIntentModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Triggers when cursor moves above the browser viewport (exit intent)
      if (e.clientY <= 0 && !hasDismissed) {
        setIsVisible(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasDismissed]);

  const handleClose = () => {
    setIsVisible(false);
    setHasDismissed(true);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md rounded-2xl bg-neutral-900 border border-purple-600/40 p-6 shadow-2xl text-center">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-12 h-12 rounded-full bg-purple-600/20 text-purple-400 flex items-center justify-center mx-auto mb-4 border border-purple-500/30">
          <Gift className="w-6 h-6" />
        </div>

        <h3 className="text-xl font-bold text-white mb-2">
          Before You Leave...
        </h3>
        <p className="text-neutral-300 text-sm mb-6">
          Take <span className="text-purple-400 font-semibold">10% OFF</span> your entire order today! Use promo code <span className="bg-neutral-800 px-2 py-1 rounded text-purple-300 font-mono text-xs border border-purple-700/50">VIBE10</span> at checkout, or grab your 3 free tagged beats below.
        </p>

        <div className="flex flex-col gap-3">
          <button
            onClick={handleClose}
            className="w-full bg-purple-600 hover:bg-purple-500 text-white font-medium py-2.5 rounded-xl transition-colors text-sm"
          >
            Claim Discount
          </button>
          <button
            onClick={handleClose}
            className="text-xs text-neutral-400 hover:text-neutral-200 transition-colors"
          >
            No thanks, I'll pay full price later
          </button>
        </div>
      </div>
    </div>
  );
}