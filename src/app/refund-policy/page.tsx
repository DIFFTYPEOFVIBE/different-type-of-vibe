import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Refund & Subscription Cancellation Policy | Different Type of Vibe',
  description: 'Digital Audio Download Refund Policy and VIP Pass Subscription Cancellation Terms for Different Type of Vibe (Onzieb).',
  alternates: {
    canonical: 'https://www.differenttypeofvibe.com/refund-policy',
  },
};

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-[#0b071a] text-[#f1ecff] py-16 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="border-b border-purple-900/60 pb-6">
          <p className="text-purple-400 text-xs uppercase tracking-widest font-semibold">Different Type of Vibe • Onzieb Production</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mt-2">
            Digital Download Refund & Subscription Cancellation Policy
          </h1>
          <p className="text-sm text-purple-300/80 mt-2">Last Updated: November 2026</p>
        </header>

        <section className="space-y-3 bg-[#120c2a] p-6 rounded-xl border border-purple-900/40">
          <h2 className="text-xl font-bold text-purple-300">1. Instant Digital Audio Deliveries Are Final & Non-Refundable</h2>
          <p className="text-sm leading-relaxed text-purple-100/90">
            Because our products consist of irrevocable, untagged digital master audio files (MP3, 24-Bit WAV, and Trackout Stems ZIP archives) and commercial license certificates that are delivered immediately upon checkout, <strong>all single beat lease purchases and completed subscription billing periods are final and non-refundable</strong> once download links have been issued.
          </p>
        </section>

        <section className="space-y-3 bg-[#120c2a] p-6 rounded-xl border border-purple-900/40">
          <h2 className="text-xl font-bold text-purple-300">2. VIP Pass Subscriptions ($9.99/mo Standard & $24.99/mo Pro Creator)</h2>
          <p className="text-sm leading-relaxed text-purple-100/90">
            Subscribers may cancel their recurring membership at any time prior to their next monthly renewal date via their customer portal link or by emailing <strong>onzieb@mail.differenttypeofvibe.com</strong>. Upon cancellation, no future monthly charges will occur, and the subscriber retains perpetual non-exclusive commercial rights to all beat packs and licenses delivered during paid billing cycles.
          </p>
        </section>

        <section className="space-y-3 bg-[#120c2a] p-6 rounded-xl border border-purple-900/40">
          <h2 className="text-xl font-bold text-purple-300">3. Fraudulent Chargebacks & Dispute Resolution</h2>
          <p className="text-sm leading-relaxed text-purple-100/90">
            Every order and monthly pack delivery is logged with timestamped delivery confirmation and a unique License ID. Filing an unauthorized chargeback after downloading untagged master audio files immediately revokes all commercial licenses granted under that order and may result in DMCA takedowns of any unauthorized releases using those instrumentals. If you experience any technical issue accessing your files, contact us and we will resolve it within 24 hours.
          </p>
        </section>
      </div>
    </main>
  );
}
