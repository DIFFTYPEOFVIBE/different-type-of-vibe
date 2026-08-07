"use client";
import { useState, useEffect } from "react";

export default function ExitPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasTriggered) {
        setIsVisible(true);
        setHasTriggered(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasTriggered]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="relative bg-[#141923] border border-purple-500/30 rounded-xl p-8 max-w-md w-full text-center shadow-2xl">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
        >
          ✕
        </button>
        <span className="bg-purple-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full text-white">
          Wait! Don't Leave Empty Handed
        </span>
        <h3 className="text-2xl font-extrabold text-white mt-4">
          Get 20% Off Your First Beat Lease
        </h3>
        <p className="text-gray-300 text-sm mt-2">
          Use promo code <span className="text-purple-400 font-mono font-bold">VIBE20</span> at checkout, or grab our 3 Free Starter Beats right now.
        </p>
        <div className="mt-6 flex flex-col gap-3">
          <a
            href="#starter-pack"
            onClick={() => setIsVisible(false)}
            className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition"
          >
            Claim 3 Free Beats
          </a>
          <button
            onClick={() => setIsVisible(false)}
            className="text-xs text-gray-400 hover:underline"
          >
            No thanks, I prefer paying full price on BeatStars
          </button>
        </div>
      </div>
    </div>
  );
}