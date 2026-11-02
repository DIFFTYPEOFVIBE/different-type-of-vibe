'use client';
import React, { useState } from 'react';
import { Crown, Sparkles, ArrowRight } from 'lucide-react';

export default function StickyMobileVipBar() {
  const [loading, setLoading] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [inputEmail, setInputEmail] = useState('');

  const handleCheckoutSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputEmail || !inputEmail.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/subscription/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ planTier: 'standard', email: inputEmail }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || 'Failed to initialize subscription checkout.');
      }
    } catch (err) {
      alert('Error connecting to checkout service.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-zinc-950/95 backdrop-blur-md border-t border-purple-500/40 p-3 shadow-2xl transition-all duration-300">
        <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
          <div className="flex items-center gap-2">
            <div className="bg-emerald-500/20 text-emerald-400 p-2 rounded-lg">
              <Crown className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-extrabold text-white flex items-center gap-1">
                VIP Pass <span className="text-emerald-400">$9.99/mo</span>
              </div>
              <div className="text-[10px] text-zinc-400">5 Untagged WAV Beats Monthly</div>
            </div>
          </div>

          <button
            onClick={() => setShowEmailModal(true)}
            className="inline-flex items-center gap-1 bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-black font-extrabold text-xs px-4 py-2.5 rounded-xl shadow-lg transition-all"
          >
            Start $9.99 <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Styled Mobile Modal (Replaces browser prompt) */}
      {showEmailModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-zinc-900 border border-purple-500/40 rounded-2xl p-6 w-full max-w-sm shadow-2xl text-center relative animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setShowEmailModal(false)}
              className="absolute top-3 right-3 text-zinc-400 hover:text-white text-lg font-bold"
            >
              ✕
            </button>
            <Crown className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
            <h3 className="text-xl font-extrabold text-white">Start Your VIP Artist Pass</h3>
            <p className="text-zinc-400 text-xs mt-1 mb-4">
              Choose your preferred gateway below for instant license & beat file delivery!
            </p>

            <form onSubmit={handleCheckoutSubmit} className="space-y-3">
              <input
                type="email"
                required
                value={inputEmail}
                onChange={(e) => setInputEmail(e.target.value)}
                placeholder="enter.your.email@gmail.com"
                className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-emerald-400 placeholder:text-zinc-600 text-center"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-black font-extrabold py-3.5 rounded-xl text-sm shadow-lg transition-all flex items-center justify-center gap-2"
              >
                {loading ? 'Initializing Secure Checkout...' : 'Proceed to Secure Checkout ➔'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

