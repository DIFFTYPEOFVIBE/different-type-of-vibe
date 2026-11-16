import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service & Non-Exclusive Beat License Agreement | Different Type of Vibe',
  description: 'Official Terms of Service, Non-Exclusive Instrumental Lease Agreement, Publishing Splits, and Content ID Policy for Different Type of Vibe (Onzieb).',
  alternates: {
    canonical: 'https://www.differenttypeofvibe.com/terms',
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0b071a] text-[#f1ecff] py-16 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="border-b border-purple-900/60 pb-6">
          <p className="text-purple-400 text-xs uppercase tracking-widest font-semibold">Different Type of Vibe • Onzieb Production</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mt-2">
            Terms of Service & Non-Exclusive Beat License Agreement
          </h1>
          <p className="text-sm text-purple-300/80 mt-2">Last Updated: November 2026</p>
        </header>

        <section className="space-y-3 bg-[#120c2a] p-6 rounded-xl border border-purple-900/40">
          <h2 className="text-xl font-bold text-purple-300">1. Master Ownership & Grant of Non-Exclusive Rights</h2>
          <p className="text-sm leading-relaxed text-purple-100/90">
            All instrumentals, beats, audio stems, and sound recordings available on <strong>differenttypeofvibe.com</strong> are 100% owned and controlled by <strong>Onzieb (Different Type of Vibe)</strong> (&ldquo;Licensor&rdquo;). Purchasing a Single Beat Lease or subscribing to the Standard Pass ($9.99/mo) or Pro Creator Pass ($24.99/mo) grants the purchaser (&ldquo;Licensee&rdquo;) a <strong>non-exclusive license</strong> to record original vocals over the licensed instrumental to create one (1) new musical composition (&ldquo;New Song&rdquo;). Licensee does not acquire ownership of the underlying instrumental master and may not resell, sub-license, or redistribute the standalone beat or stems.
          </p>
        </section>

        <section className="space-y-3 bg-[#120c2a] p-6 rounded-xl border border-purple-900/40">
          <h2 className="text-xl font-bold text-purple-300">2. Monetized Stream Caps by License Tier</h2>
          <ul className="list-disc pl-5 text-sm space-y-2 text-purple-100/90">
            <li><strong>Free Tagged Starter Beats:</strong> Non-profit demo, writing, and audition use only. Not cleared for monetized streaming on Spotify, Apple Music, or YouTube until upgraded to an active lease or VIP Pass.</li>
            <li><strong>MP3 Lease ($29.99) / WAV Lease ($49.99) / Standard Pass ($9.99/mo):</strong> Cleared for commercial release up to <strong>100,000 monetized audio streams</strong> across DSPs (Spotify, Apple Music, Tidal, Amazon Music) and 1 monetized music video.</li>
            <li><strong>Trackout Stems Lease ($149.99) / Pro Creator Pass ($24.99/mo):</strong> Cleared for commercial release up to <strong>500,000 monetized audio streams</strong> across DSPs, unlimited non-monetized performances, and full stem mixing rights.</li>
          </ul>
        </section>

        <section className="space-y-3 bg-[#120c2a] p-6 rounded-xl border border-purple-900/40">
          <h2 className="text-xl font-bold text-purple-300">3. Publishing & Royalties Split (ASCAP)</h2>
          <p className="text-sm leading-relaxed text-purple-100/90">
            For all New Songs created under a non-exclusive license, songwriting and publishing rights shall be split <strong>50% to Licensor (Onzieb / ASCAP)</strong> and <strong>50% to Licensee</strong>. Licensee agrees to register Licensor&apos;s 50% writer/publisher share with their Performing Rights Organization (ASCAP, BMI, SESAC, PRS, etc.) and include the producer credit <strong>&ldquo;Prod. by Onzieb&rdquo;</strong> on all metadata, credits, and descriptions.
          </p>
        </section>

        <section className="space-y-3 bg-[#120c2a] p-6 rounded-xl border border-red-500/40">
          <h2 className="text-xl font-bold text-yellow-400">4. Strict Prohibition on Content ID & Fingerprinting</h2>
          <p className="text-sm leading-relaxed text-purple-100/90">
            Because non-exclusive beats remain available for other artists to license, <strong>Licensee is strictly prohibited from registering the New Song or Instrumental with YouTube Content ID, DistroKid &ldquo;YouTube Money&rdquo;, TuneCore Content ID, Facebook/Instagram Rights Manager, TikTok Commercial Music Library automated claim systems, or any third-party audio fingerprinting service</strong>. Violation of this clause results in immediate termination of the license and liability for any resulting claims.
          </p>
        </section>

        <section className="space-y-3 bg-[#120c2a] p-6 rounded-xl border border-purple-900/40">
          <h2 className="text-xl font-bold text-purple-300">5. Third-Party Samples & Indemnification</h2>
          <p className="text-sm leading-relaxed text-purple-100/90">
            Licensee is solely responsible for clearing any third-party samples, interpolations, or vocal recordings added by Licensee. Licensee agrees to indemnify, defend, and hold harmless Onzieb and Different Type of Vibe from any claims, damages, or legal fees arising out of Licensee&apos;s breach of this Agreement.
          </p>
        </section>
      </div>
    </main>
  );
}
