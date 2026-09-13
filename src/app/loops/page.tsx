'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Music2, Download, CheckCircle2, ArrowRight, ShieldCheck, Mail, Sparkles, Layers, FileAudio } from 'lucide-react';

export default function LoopsPage() {
  const [email, setEmail] = useState('');
  const [producerName, setProducerName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [optInSuccess, setOptInSuccess] = useState(false);

  const handleLoopsOptIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    const eventId = 'lead_loops_' + Math.random().toString(36).substring(2, 9) + '_' + Date.now();

    try {
      // Opt-in hooks into your existing Resend contact logic
      const response = await fetch('/api/optin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          firstName: producerName || 'Producer Partner',
          eventId: eventId,
          tags: ['producer', 'b2b_loops'], // Tagged as producer for B2B targeting
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to opt in via API');
      }

      // Fire Meta Lead Event if pixel is active
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'Lead', {
          content_name: 'B2B Loops Optin - Vibe Vol 1',
          value: 0.00,
          currency: 'USD',
        }, { eventID: eventId });
      }

      setOptInSuccess(true);
      setEmail('');
      setProducerName('');
    } catch (error) {
      console.error('Opt-in Error:', error);
      setOptInSuccess(true);
      setEmail('');
      setProducerName('');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col items-center px-4 py-16 relative overflow-hidden">
      {/* Background Cyber Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] md:w-[800px] md:h-[800px] rounded-full bg-purple-900/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] md:w-[800px] md:h-[800px] rounded-full bg-pink-900/10 blur-[100px] pointer-events-none" />

      <div className="w-full max-w-4xl flex flex-col items-center z-10 space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-4 max-w-2xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-purple-900/30 border border-purple-500/20 text-xs text-purple-400 font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Producer Collaboration Hub</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
            Royalty-Free Melody Loops for Producers
          </h1>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
            Get instant access to dark, ambient, and highly melodic sample packs designed to land placements. Key-labeled, BPM-tagged, with STEMS and MIDI included.
          </p>
        </div>

        {/* Two-Column Grid: Loop Pack Opt-In & Collab Terms */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Sample Pack Sign-up */}
          <div className="rounded-2xl bg-neutral-900/40 border border-neutral-800/80 p-6 md:p-8 flex flex-col justify-between shadow-xl backdrop-blur-md relative">
            <div className="space-y-6">
              {/* Cover Card */}
              <div className="w-full h-48 rounded-xl bg-gradient-to-br from-purple-800/30 via-neutral-950 to-pink-900/20 border border-purple-600/20 flex flex-col items-center justify-center space-y-3 relative overflow-hidden shadow-inner">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.05),transparent)] pointer-events-none" />
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <FileAudio className="w-6 h-6 text-purple-400" />
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-lg text-white">Vibe Loops Vol. 1</h3>
                  <p className="text-[10px] text-purple-400 uppercase tracking-widest font-semibold">10 Free Melody Loops • Stems & MIDI</p>
                </div>
              </div>
              {/* Loop Pack Details */}
              <div className="space-y-3">
                <h4 className="font-bold text-sm text-neutral-200">What is inside this pack:</h4>
                <ul className="space-y-2.5 text-xs text-neutral-400">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    <span>10 Original High-Quality WAV Melodies (ambient, dark, R&B)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    <span>Individual Audio Track STEMS for ultimate mixing flexibility</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    <span>Full MIDI Files included to change chords, synths, or instruments</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    <span>100% Key & BPM Labeled (ready to drag-and-drop into FL Studio/Logic)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Form Opt-In Block */}
            <div className="mt-8 pt-6 border-t border-neutral-800/60">
              {optInSuccess ? (
                <div className="flex flex-col items-center justify-center text-center p-4 bg-purple-950/20 border border-purple-800/30 rounded-xl space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                  <p className="text-sm font-bold text-white">Awesome! Check Your Inbox</p>
                  <p className="text-xs text-neutral-400">
                    We just sent your download link for "Vibe Loops Vol. 1" straight to your email.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleLoopsOptIn} className="space-y-3">
                  <div className="grid grid-cols-1 gap-3">
                    <input
                      type="text"
                      placeholder="Your Producer Name / Alias"
                      value={producerName}
                      onChange={(e) => setProducerName(e.target.value)}
                      disabled={isSubmitting}
                      className="w-full bg-neutral-950/80 border border-neutral-800 rounded-xl px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-purple-500 text-white placeholder-neutral-500"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Your Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isSubmitting}
                      className="w-full bg-neutral-950/80 border border-neutral-800 rounded-xl px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-purple-500 text-white placeholder-neutral-500"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-purple-600 hover:bg-purple-500 transition-all duration-300 text-white font-bold text-xs py-3.5 rounded-xl shadow-lg flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Generating link...' : 'Get Vibe Loops Vol. 1'}</span>
                    <Download className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Card 2: Collaboration & Split Terms */}
          <div className="rounded-2xl bg-neutral-900/40 border border-neutral-800/80 p-6 md:p-8 flex flex-col justify-between shadow-xl backdrop-blur-md">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 pb-4 border-b border-neutral-800/60">
                <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-white">Co-Production Rules</h3>
                  <p className="text-[10px] text-neutral-400">Fair splits. Easy placement. Zero legal headaches.</p>
                </div>
              </div>


              <div className="space-y-6">
                {/* Rule 1: Online Beat Sales */}
                <div className="space-y-1.5">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 text-[10px] font-bold flex items-center justify-center">1</div>
                    <h4 className="font-bold text-xs text-neutral-200">Online Beat Store Sales (50/50 Splits)</h4>
                  </div>
                  <p className="text-xs text-neutral-400 pl-7 leading-relaxed">
                    If you use my loops to sell beats on **BeatStars**, **Airbit**, or **Traktrain**, splits are set to **50/50**. Simply add my username (**`onzieb`**) as a collaborator with 50% profit share on your upload.
                  </p>
                </div>

                {/* Rule 2: Independent Artists */}
                <div className="space-y-1.5">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 text-[10px] font-bold flex items-center justify-center">2</div>
                    <h4 className="font-bold text-xs text-neutral-200">Indie Artists & Streaming (Royalty-Free)</h4>
                  </div>
                  <p className="text-xs text-neutral-400 pl-7 leading-relaxed">
                    These loops are completely **Royalty-Free** for independent artist lease licensing, online distribution, and streams up to 1 million plays. Beyond 1M plays, standard mechanical and performance royalty splits apply.
                  </p>
                </div>

                {/* Rule 3: Major Labels */}
                <div className="space-y-1.5">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 text-[10px] font-bold flex items-center justify-center">3</div>
                    <h4 className="font-bold text-xs text-neutral-200">Major/Indie Label Placements (50/50 Split)</h4>
                  </div>
                  <p className="text-xs text-neutral-400 pl-7 leading-relaxed">
                    If a beat using one of these loops lands on a major label release or major television/film sync, all publishing, master royalties, and advance splits are split **50/50** between us.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA to get in touch */}
            <div className="mt-8 pt-6 border-t border-neutral-800/60 flex flex-col space-y-3">
              <p className="text-[10px] text-neutral-500 leading-relaxed text-center">
                Need custom loops or want to submit completed co-productions back to me for placements?
              </p>
              <a
                href="mailto:music@mail.differenttypeofvibe.com"
                className="w-full bg-neutral-900 hover:bg-neutral-950 border border-neutral-800 text-neutral-300 font-bold text-xs py-3 rounded-xl flex items-center justify-center space-x-2 transition-all duration-300 hover:border-purple-500/30"
              >
                <Mail className="w-4 h-4 text-neutral-400" />
                <span>Submit Collabs / Contact Onzieb</span>
              </a>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="text-center pt-8 text-xs text-neutral-500 flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
          <Link href="/" className="hover:text-purple-400 transition-colors">🎹 Back to Beat Store</Link>
          <span className="hidden sm:inline text-neutral-700">|</span>
          <Link href="/links" className="hover:text-purple-400 transition-colors">📱 Social Directory</Link>
          <span className="hidden sm:inline text-neutral-700">|</span>
          <p>© 2026 Onzieb / Different Type of Vibe. All rights reserved.</p>
        </div>
      </div>
    </main>
  );
}