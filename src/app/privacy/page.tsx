import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy & Data Protection | Different Type of Vibe',
  description: 'Privacy Policy, Cookie & Meta Pixel Disclosure, and Email Marketing Terms for Different Type of Vibe (Onzieb).',
  alternates: {
    canonical: 'https://www.differenttypeofvibe.com/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0b071a] text-[#f1ecff] py-16 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="border-b border-purple-900/60 pb-6">
          <p className="text-purple-400 text-xs uppercase tracking-widest font-semibold">Different Type of Vibe • Onzieb Production</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mt-2">Privacy Policy</h1>
          <p className="text-sm text-purple-300/80 mt-2">Last Updated: November 2026</p>
        </header>

        <section className="space-y-3 bg-[#120c2a] p-6 rounded-xl border border-purple-900/40">
          <h2 className="text-xl font-bold text-purple-300">1. Information We Collect</h2>
          <p className="text-sm leading-relaxed text-purple-100/90">
            When you download free beats, subscribe to our artist newsletter, or purchase a beat lease or VIP Pass on <strong>differenttypeofvibe.com</strong>, we collect your name, email address, and order metadata. Payment card details are processed securely by our PCI-compliant payment processors (<strong>Stripe</strong>, <strong>Lemon Squeezy</strong>, and <strong>NOWPayments</strong>) and are never stored on our servers.
          </p>
        </section>

        <section className="space-y-3 bg-[#120c2a] p-6 rounded-xl border border-purple-900/40">
          <h2 className="text-xl font-bold text-purple-300">2. Cookies, Meta Pixel & Analytics</h2>
          <p className="text-sm leading-relaxed text-purple-100/90">
            We use cookies, <strong>Meta Pixel</strong>, and analytics tools to measure ad campaign effectiveness, optimize storefront performance, and deliver relevant beat previews and offers on Instagram, Facebook, and YouTube. You may opt out of targeted advertising cookies at any time through your browser settings or Meta Ad Preferences.
          </p>
        </section>

        <section className="space-y-3 bg-[#120c2a] p-6 rounded-xl border border-purple-900/40">
          <h2 className="text-xl font-bold text-purple-300">3. Email Communications & Unsubscribe Policy (CAN-SPAM / GDPR)</h2>
          <p className="text-sm leading-relaxed text-purple-100/90">
            By opting into the Free Beat Starter Pack or purchasing a license, you consent to receive transactional download/license emails and studio updates via <strong>Resend</strong>. You may unsubscribe from promotional emails at any time using the 1-click unsubscribe link included in our emails or by replying &ldquo;UNSUBSCRIBE&rdquo;.
          </p>
        </section>
      </div>
    </main>
  );
}
