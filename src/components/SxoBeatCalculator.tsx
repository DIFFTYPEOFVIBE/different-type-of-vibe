'use client';

import React, { useState } from 'react';
import { Calculator, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Download, Tag, Loader2 } from 'lucide-react';

interface SxoBeatCalculatorProps {
  countryName?: string;
  flag?: string;
  currencyCode?: string;
}

export default function SxoBeatCalculator({
  countryName = 'Worldwide',
  flag = '🌐',
  currencyCode = 'USD',
}: SxoBeatCalculatorProps) {
  const [projectType, setProjectType] = useState<'single' | 'album' | 'video' | 'demo'>('single');
  const [expectedStreams, setExpectedStreams] = useState<'100k' | '500k' | 'unlimited'>('100k');
  const [audioFormat, setAudioFormat] = useState<'wav' | 'stems' | 'mp3'>('wav');

  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [optInError, setOptInError] = useState('');

  const calculateRecommendation = () => {
    if (projectType === 'demo') {
      return {
        badge: 'Free Audition Starter',
        title: '3 Free Untagged Beats Pack',
        priceDisplay: '$0.00',
        cadence: 'Instant Download',
        summary: 'Best for vocal audition, demo songwriting, and testing your flow before studio release.',
        deliverables: ['3 Full Untagged MP3s', 'Instant download link', 'Demo songwriting rights'],
      };
    }

    if (projectType === 'album' || audioFormat === 'stems') {
      return {
        badge: 'Best Value for Pro Creators',
        title: 'Pro Creator Pass (Unlimited)',
        priceDisplay: '$24.99',
        cadence: '/ month',
        savings: 'Save $125+ per track',
        summary: 'Includes unlimited 24-bit WAV downloads and full separated STEM trackouts.',
        deliverables: [
          'Unlimited WAV Beat Downloads',
          'Full Trackout STEMS on every beat',
          'Unlimited Spotify & Apple Music streams',
          'Monetized music video rights',
        ],
      };
    }

    if (expectedStreams === '500k' || audioFormat === 'wav') {
      return {
        badge: 'Most Popular Recommendation',
        title: 'VIP Standard Pass (5 WAVs/Mo)',
        priceDisplay: '$9.99',
        cadence: '/ month',
        savings: 'Only $2.00 per WAV (vs $49.99)',
        summary: `Ideal for singles in ${countryName}. 5 studio WAV leases every month with 100% royalty keep.`,
        deliverables: [
          '5 Studio WAV Leases every month',
          'Up to 100,000 streams per release',
          'Keep 100% of master royalties',
          'Signed commercial license PDF',
        ],
      };
    }

    return {
      badge: 'Single Track License',
      title: 'MP3 Basic Lease',
      priceDisplay: '$29.99',
      cadence: 'One-time lease',
      summary: 'Ideal for an indie single release on Spotify, SoundCloud, and YouTube.',
      deliverables: [
        'Untagged 320kbps MP3',
        '100,000 commercial DSP streams',
        '1 Monitored YouTube music video',
        'Signed commercial license',
      ],
    };
  };

  const rec = calculateRecommendation();

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setOptInError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setOptInError('');
    const eventId = 'sxo_calc_' + Math.random().toString(36).substring(2, 9) + '_' + Date.now();

    try {
      const response = await fetch('/api/optin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, firstName: '', eventId }),
      });

      if (!response.ok) throw new Error('Failed to opt in');

      if (typeof window !== 'undefined' && (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq) {
        (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq?.('track', 'Lead', {
          content_name: `SXO Calculator Lead - ${projectType}`,
          currency: currencyCode,
          value: 0.00,
        }, { eventID: eventId });
      }

      setIsSubmitted(true);
      setEmail('');
    } catch {
      setIsSubmitted(true);
      setEmail('');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="my-8 bg-gradient-to-b from-zinc-900/95 via-zinc-900 to-zinc-950 border border-purple-500/40 rounded-3xl p-5 md:p-7 shadow-2xl relative overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-5 border-b border-zinc-800">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-2">
            <Calculator className="w-3.5 h-3.5 text-purple-400" />
            <span>Interactive License & Budget Matcher</span>
          </div>
          <h2 className="text-xl md:text-2xl font-extrabold text-white tracking-tight">
            Calculate the Perfect Beat License for Your Project
          </h2>
          <p className="text-zinc-400 text-xs md:text-sm mt-0.5">
            Clear licensing and instant download for recording artists in {flag} {countryName}.
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-3 py-1.5 rounded-xl self-start md:self-auto">
          <ShieldCheck className="w-4 h-4 shrink-0" />
          <span>100% Royalty Clearance</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
        <div className="lg:col-span-7 space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
              1. Project Type
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'single', label: 'Single Track', icon: '🎵' },
                { id: 'album', label: 'EP / Album', icon: '💿' },
                { id: 'video', label: 'Music Video', icon: '🎬' },
                { id: 'demo', label: 'Demo Audition', icon: '✍️' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setProjectType(item.id as typeof projectType)}
                  className={`p-2.5 rounded-xl border text-left transition cursor-pointer flex flex-col justify-between ${
                    projectType === item.id
                      ? 'bg-purple-600/25 border-purple-500 text-white'
                      : 'bg-zinc-950/60 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                  }`}
                >
                  <span className="text-base mb-1">{item.icon}</span>
                  <span className="text-xs font-semibold">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
              2. Audio Quality & Files
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'wav', label: '24-bit WAV', sub: 'Studio Master' },
                { id: 'stems', label: 'Trackout Stems', sub: 'Separate Tracks' },
                { id: 'mp3', label: '320kbps MP3', sub: 'Standard Audio' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setAudioFormat(item.id as typeof audioFormat)}
                  className={`p-2.5 rounded-xl border text-left transition cursor-pointer ${
                    audioFormat === item.id
                      ? 'bg-purple-600/25 border-purple-500 text-white'
                      : 'bg-zinc-950/60 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                  }`}
                >
                  <div className="text-xs font-semibold">{item.label}</div>
                  <div className="text-[10px] text-zinc-500">{item.sub}</div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
              3. Target Distribution Streams
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: '100k', label: 'Up to 100k', desc: 'Indie Release' },
                { id: '500k', label: 'Up to 500k', desc: 'Growing Buzz' },
                { id: 'unlimited', label: 'Unlimited', desc: 'Major Release' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setExpectedStreams(item.id as typeof expectedStreams)}
                  className={`p-2.5 rounded-xl border text-left transition cursor-pointer ${
                    expectedStreams === item.id
                      ? 'bg-purple-600/25 border-purple-500 text-white'
                      : 'bg-zinc-950/60 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                  }`}
                >
                  <div className="text-xs font-semibold">{item.label}</div>
                  <div className="text-[10px] text-zinc-500">{item.desc}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-between bg-zinc-950/90 border border-purple-600/50 rounded-2xl p-5 shadow-xl">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-[11px] font-semibold border border-purple-500/30">
                <Sparkles className="w-3 h-3 text-purple-400" />
                {rec.badge}
              </span>
              {rec.savings && (
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-md">
                  {rec.savings}
                </span>
              )}
            </div>

            <h3 className="text-lg font-black text-white">{rec.title}</h3>
            <div className="flex items-baseline gap-1 my-1.5">
              <span className="text-2xl font-black text-white">{rec.priceDisplay}</span>
              <span className="text-xs text-zinc-400 font-medium">{rec.cadence}</span>
            </div>
            <p className="text-zinc-300 text-xs leading-relaxed mb-3">{rec.summary}</p>

            <div className="space-y-1 border-t border-zinc-800 pt-3 mb-3">
              {rec.deliverables.map((d, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{d}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-zinc-800/80 pt-3 mt-1">
            {!isSubmitted ? (
              <form onSubmit={handleLeadSubmit} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-zinc-300 flex items-center gap-1">
                    <Download className="w-3 h-3 text-indigo-400" />
                    Get 3 Free Untagged Beats First
                  </span>
                  <span className="text-[10px] text-purple-400 font-medium flex items-center gap-0.5">
                    <Tag className="w-2.5 h-2.5" /> +20% Code
                  </span>
                </div>
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter artist email..."
                    className="flex-1 bg-zinc-900 border border-zinc-700 focus:border-purple-500 text-white text-xs px-3 py-2 rounded-xl outline-none placeholder:text-zinc-500 transition"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 disabled:opacity-50 text-white font-bold text-xs px-3 py-2 rounded-xl transition flex items-center gap-1 shrink-0 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <>
                        <span>Get Pack</span>
                        <ArrowRight className="w-3 h-3" />
                      </>
                    )}
                  </button>
                </div>
                {optInError && <p className="text-red-400 text-[10px]">{optInError}</p>}
              </form>
            ) : (
              <div className="bg-emerald-950/40 border border-emerald-500/40 rounded-xl p-2.5 text-center">
                <div className="inline-flex items-center gap-1 text-emerald-400 font-bold text-xs mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>3 Free Beats Pack Sent!</span>
                </div>
                <p className="text-zinc-300 text-[10px] mb-2">Check your email or download immediately below.</p>
                <a
                  href="/Your_3_Free_Tagged_Beats.zip"
                  download
                  className="inline-flex items-center gap-1 bg-emerald-600 hover:bg-emerald-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg transition"
                >
                  <Download className="w-3 h-3" />
                  Instant Direct Download (.zip)
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
