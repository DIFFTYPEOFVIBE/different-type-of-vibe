'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShieldCheck, ChevronRight, X } from 'lucide-react';

export default function GermanMarketBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const dismissed = localStorage.getItem('dismissed_de_banner');
      if (dismissed) {
        const dismissedTime = parseInt(dismissed, 10);
        // Dismissed for 7 days
        if (Date.now() - dismissedTime < 7 * 24 * 60 * 60 * 1000) {
          return;
        }
      }

      const lang = navigator.language || '';
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
      
      const isDachVisitor =
        lang.toLowerCase().startsWith('de') ||
        tz.includes('Berlin') ||
        tz.includes('Vienna') ||
        tz.includes('Zurich') ||
        tz.includes('Europe/Busingen');

      if (isDachVisitor) {
        setIsVisible(true);
      }
    } catch {
      // Fallback
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    try {
      localStorage.setItem('dismissed_de_banner', Date.now().toString());
    } catch {
      // Ignore
    }
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Regionales Angebot für Deutschland, Österreich und die Schweiz"
      className="bg-gradient-to-r from-amber-950/90 via-red-950/80 to-zinc-950 border-b border-amber-600/30 text-zinc-100 py-2.5 px-4 sticky top-0 z-50 backdrop-blur-md transition-all animate-fadeIn"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-3 text-xs md:text-sm">
        <div className="flex items-center gap-2.5 flex-wrap">
          <span className="text-base" role="img" aria-label="Deutschland">🇩🇪</span>
          <span className="font-semibold text-white">
            Künstler aus Deutschland, Österreich &amp; der Schweiz:
          </span>
          <span className="hidden sm:inline text-zinc-300">
            100% GEMA-freie Beats leasen mit Sofortüberweisung, Giropay &amp; Apple Pay in € (EUR).
          </span>
          <div className="hidden lg:flex items-center gap-1 text-emerald-400 font-medium text-xs bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-800/40">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>GEMA-konform</span>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <Link
            href="/deals/germany/beats-kaufen"
            className="inline-flex items-center gap-1 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs px-3 py-1.5 rounded-full transition shadow-sm"
          >
            <span>Zu den Deals</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
          <button
            type="button"
            onClick={handleDismiss}
            className="text-zinc-400 hover:text-white p-1 rounded-full transition"
            aria-label="Banner schließen"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
