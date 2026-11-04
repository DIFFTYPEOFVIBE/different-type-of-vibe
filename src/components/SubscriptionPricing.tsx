'use client';
import React, { useState } from 'react';
import { Crown } from 'lucide-react';
import BuyStandardPass from './BuyStandardPass';

export default function SubscriptionPricing() {
  const [loading, setLoading] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [inputEmail, setInputEmail] = useState('');
  const [cryptoLoading, setCryptoLoading] = useState(false);

  const handleCryptoCheckout = async () => {
    if (!inputEmail || !inputEmail.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }

    setCryptoLoading(true);
    try {
      const res = await fetch('/api/crypto/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ planTier: selectedPlan || 'standard', email: inputEmail }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || 'Failed to initialize crypto checkout.');
      }
    } catch (err) {
      alert('Error connecting to NOWPayments service.');
    } finally {
      setCryptoLoading(false);
    }
  };

  const handleOpenPlanModal = (planTier: string) => {
    setSelectedPlan(planTier);
  };

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
        body: JSON.stringify({ planTier: selectedPlan || 'standard', email: inputEmail }),
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
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-white">VIP Artist Pass Subscriptions</h2>
        <p className="text-zinc-400 mt-2">Get high-quality WAV beat leases delivered monthly for pennies per track.</p>
        
        {/* Card & Express Pay Notice */}
        <div className="mt-4 max-w-2xl mx-auto bg-purple-950/60 border border-purple-800/80 rounded-lg p-5 text-xs text-purple-200 space-y-3 text-center">
          <p className="text-amber-300 font-bold animate-pulse text-base">⚡ PEAK HOURS FLASH DEAL: Use code WELCOME30 for 30% OFF at Checkout!</p>
          
          <div className="pt-2 border-t border-purple-800/50 bg-zinc-950/60 p-3.5 rounded-xl border border-purple-500/30 text-center">
            <p className="text-emerald-400 font-bold mb-1 text-sm">⚡ 1-Tap Express Pay & Global Gateways Active</p>
            <p className="text-zinc-300 text-xs">Pay via <strong>Credit/Debit Card, PayPal, Apple Pay, or Google Pay</strong> for instant WAV beat lease delivery!</p>
          </div>
          
          {/* Prominent High-Visibility 2FA Card Approval Box */}
          <div className="bg-purple-900/40 border-2 border-purple-500/60 p-3.5 rounded-xl text-center shadow-lg">
            <p className="text-white font-extrabold text-sm sm:text-base leading-snug">
              💳 <span className="text-yellow-300 uppercase tracking-wide">Bank Card Approval Notice:</span><br/>
              Please approve the quick <strong className="text-emerald-400">2FA / SMS confirmation prompt</strong> inside your mobile banking app when completing checkout!
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Standard Pass */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-emerald-400">Standard Pass</h3>
            <div className="text-4xl font-black text-white my-4">$9.99 <span className="text-sm font-normal text-zinc-400">/ mo</span></div>
            <ul className="text-sm text-zinc-300 space-y-3 mb-6">
              <li>✅ <strong>5 WAV Commercial Leases</strong> / month</li>
              <li>🔥 <strong>New Untagged Beats Added Every Month</strong></li>
              <li>✅ Unlimited MP3 Previews</li>
              <li>✅ Commercial Rights (Up to 100k Streams)</li>
              <li>✅ 100% Untagged Audio Files</li>
              <li>🚫 No Stems / Trackouts</li>
            </ul>
          </div>
          <BuyStandardPass variantId={2326670} />
          <button
            onClick={() => handleOpenPlanModal('standard')}
            className="w-full mt-2 text-xs text-zinc-400 hover:text-white underline"
          >
            Prefer Stripe or Crypto? Click here
          </button>
        </div>

        {/* Pro Pass (Featured) */}
        <div className="bg-zinc-900 border-2 border-emerald-500 rounded-xl p-6 flex flex-col justify-between relative shadow-2xl shadow-emerald-950">
          <span className="absolute -top-3 right-4 bg-emerald-500 text-black text-xs font-bold uppercase px-3 py-1 rounded-full">Most Popular</span>
          <div>
            <h3 className="text-xl font-bold text-white">Pro Creator Pass</h3>
            <div className="text-4xl font-black text-white my-4">$24.99 <span className="text-sm font-normal text-zinc-400">/ mo</span></div>
            <ul className="text-sm text-zinc-300 space-y-3 mb-6">
              <li>🚀 <strong>UNLIMITED WAV Downloads</strong></li>
              <li>🔥 <strong>First Access to Fresh Monthly Beat Drops</strong></li>
              <li>✅ Includes <strong>Full Stems / Trackouts</strong></li>
              <li>✅ Higher Stream Caps (500k Streams)</li>
              <li>✅ Priority Email Support</li>
              <li>✅ 100% Untagged Audio Files</li>
            </ul>
          </div>
          <button
            onClick={() => handleOpenPlanModal('pro')}
            className="w-full bg-white hover:bg-zinc-200 text-black font-bold py-3 rounded-lg transition-all"
          >
            Go Pro Unlimited
          </button>
        </div>
      </div>

      {/* Styled Email Checkout Modal (Replaces browser prompt) */}
      {selectedPlan && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-zinc-900 border border-purple-500/40 rounded-2xl p-6 w-full max-w-sm shadow-2xl text-center relative animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setSelectedPlan(null)}
              className="absolute top-3 right-3 text-zinc-400 hover:text-white text-lg font-bold"
            >
              ✕
            </button>
            <Crown className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
            <h3 className="text-xl font-extrabold text-white">Start Your {selectedPlan === 'pro' ? 'Pro Creator' : 'Standard'} Pass</h3>
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
                {loading ? 'Initializing Secure Checkout...' : '💳 Proceed to Secure Stripe Checkout ➔'}
              </button>

            <div className="my-3 flex items-center justify-center gap-2 text-zinc-600 text-xs font-bold uppercase tracking-wider">
              <span className="w-12 h-px bg-zinc-800"></span> OR <span className="w-12 h-px bg-zinc-800"></span>
            </div>

            <button
              type="button"
              onClick={handleCryptoCheckout}
              disabled={cryptoLoading}
              className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-black font-extrabold py-3 rounded-xl text-xs shadow-lg transition-all flex items-center justify-center gap-2"
            >
              {cryptoLoading ? 'Generating Crypto Invoice...' : '🪙 Pay via Crypto (USDT / USDC / BTC) ➔'}
            </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}