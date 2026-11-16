'use client';

import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingWhatsAppWidget() {
  const [showTooltip, setShowTooltip] = useState(true);
  const phoneNumber = '17577150140';
  const defaultMessage = encodeURIComponent("Yo Onzieb! I'm listening to your beats on Different Type of Vibe and want to connect 🔥");
  const waUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  const handleClick = () => {
    try {
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('trackCustom', 'WhatsAppChatClick', {
          platform: 'WhatsApp Business',
          action: 'inbound_artist_chat',
        });
      }
    } catch {
      // Fallback
    }
  };

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 z-40 flex items-center gap-2 group">
      {/* Tooltip Pill */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-neutral-900/95 border border-emerald-500/40 text-white text-xs px-3 py-2 rounded-full shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-right duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Chat with Onzieb 💬</span>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-neutral-400 hover:text-white ml-1 p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Circular WhatsApp Button */}
      <a
        href={waUrl}
        onClick={handleClick}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Producer Onzieb"
        className="w-13 h-13 sm:w-14 sm:h-14 bg-gradient-to-tr from-[#25D366] to-[#128C7E] hover:from-[#20bd5a] hover:to-[#0f7a6e] text-white rounded-full flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all duration-200 border-2 border-white/20"
      >
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-current" />
      </a>
    </div>
  );
}
