import { Metadata } from 'next';
import Link from 'next/link';
import { Bitcoin, ShieldCheck, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import SubscriptionPricing from '@/components/SubscriptionPricing';

export const metadata: Metadata = {
  title: 'Pay Beats via Crypto (USDT, USDC, BTC) | Different Type of Vibe',
  description: 'Buy untagged beat leases and VIP Artist Pass subscriptions using USDT, USDC, or Bitcoin. Instant 1-click blockchain checkout for global artists.',
  alternates: { canonical: 'https://differenttypeofvibe.com/crypto-pay' },
};

export default function CryptoPayPage() {
  return (
    <main className="container mx-auto px-4 py-12 min-h-screen max-w-6xl">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 text-sm font-semibold mb-4">
          <Bitcoin className="w-4 h-4 text-amber-400" />
          Zero Bank Limits • Instant Crypto Beat Licensing
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Pay Beats via <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">Crypto (USDT / BTC)</span>
        </h1>
        <p className="text-zinc-400 mt-4 text-lg max-w-2xl mx-auto">
          Bypass international card limits and 2FA bank prompts. Unlock $9.99/mo VIP Passes and beat leases using USDT (TRC20/Solana), USDC, or Bitcoin.
        </p>
      </div>

      <div className="bg-zinc-900 border border-amber-500/30 rounded-3xl p-8 mb-12 shadow-2xl text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-2">⚡ How Crypto Beat Payment Works</h2>
        <p className="text-zinc-400 text-sm mb-6">Select your pass or beat lease below, or send USDT directly to receive instant download access!</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left text-xs text-zinc-300 mb-6">
          <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800">
            <span className="text-amber-400 font-bold text-sm block mb-1">1. Pick Your Lease</span>
            <span>Choose any $9.99 VIP Pass, WAV lease, or STEMS trackout.</span>
          </div>
          <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800">
            <span className="text-amber-400 font-bold text-sm block mb-1">2. Send USDT / BTC</span>
            <span>Pay via NOWPayments crypto gateway or direct wallet transfer.</span>
          </div>
          <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800">
            <span className="text-amber-400 font-bold text-sm block mb-1">3. Instant Download</span>
            <span>Receive 100% untagged audio files & legal contracts in your email!</span>
          </div>
        </div>
      </div>

      <SubscriptionPricing />
    </main>
  );
}
