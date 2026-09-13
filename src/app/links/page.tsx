'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Music2, Download, CheckCircle2, ArrowRight, Send, ShieldCheck, CreditCard } from 'lucide-react';

export default function LinksPage() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [optInSuccess, setOptInSuccess] = useState(false);

  const handleFreeOptIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    const eventId = 'lead_links_' + Math.random().toString(36).substring(2, 9) + '_' + Date.now();

    try {
      const response = await fetch('/api/optin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          firstName: '',
          eventId: eventId,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to opt in via API');
      }

      // Fire Meta Lead Event if pixel is active
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'Lead', {
          content_name: 'Links Page Free Beats Pack',
          value: 0.00,
          currency: 'USD',
        }, { eventID: eventId });
      }

      setOptInSuccess(true);
      setEmail('');
    } catch (error) {
      console.error('Opt-in Error:', error);
      setOptInSuccess(true);
      setEmail('');
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col items-center px-4 py-12 relative overflow-hidden">
      {/* Dynamic Purple Background Glows */}
      <div className="absolute top-[-10%] left-[-20%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-purple-900/20 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-20%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-purple-900/10 blur-[80px] pointer-events-none" />

      <div className="w-full max-w-md flex flex-col items-center z-10 space-y-8">
        {/* Profile Branded Header */}
        <div className="text-center space-y-3">
          <div className="w-16 h-16 rounded-full bg-purple-600/20 border border-purple-500/30 flex items-center justify-center mx-auto shadow-lg shadow-purple-500/10">
            <Music2 className="w-8 h-8 text-purple-400" />
          </div>
          <div className="space-y-1">
            <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
              Onzieb
            </h1>
            <p className="text-neutral-400 text-xs tracking-widest uppercase">
              Different Type of Vibe Production
            </p>
          </div>
        </div>

        {/* Social Icons Quick Connections */}
        <div className="flex items-center space-x-4">
          <a
            href="https://www.instagram.com/onzieb"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-neutral-900/60 border border-neutral-800 hover:border-purple-500/50 text-neutral-400 hover:text-purple-400 transition-all duration-300"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
          </a>
          <a
            href="https://www.youtube.com/@onzieb"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-neutral-900/60 border border-neutral-800 hover:border-purple-500/50 text-neutral-400 hover:text-purple-400 transition-all duration-300"
            aria-label="YouTube"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
            </svg>
          </a>
          <a
            href="mailto:music@mail.differenttypeofvibe.com"
            className="p-2.5 rounded-full bg-neutral-900/60 border border-neutral-800 hover:border-purple-500/50 text-neutral-400 hover:text-purple-400 transition-all duration-300"
            aria-label="Email"
          >
            <Send className="w-5 h-5" />
          </a>
        </div>

        {/* 3 FREE BEATS EMAIL MAGNET */}
        <div className="w-full rounded-2xl bg-gradient-to-b from-purple-900/40 to-neutral-900/80 border border-purple-800/30 p-5 shadow-2xl relative">
          <div className="space-y-2 text-center mb-4">
            <h2 className="text-lg font-bold text-white">🎁 Claim 3 Free Tagged Beats</h2>
            <p className="text-neutral-400 text-xs">
              Instant untagged-demo folder delivered straight to your email.
            </p>
          </div>

          {optInSuccess ? (
            <div className="flex items-center space-x-2 text-emerald-400 bg-emerald-950/20 border border-emerald-800/30 p-3 rounded-xl">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
              <span className="text-xs font-medium">
                Success! Check your inbox shortly for your download link.
              </span>
            </div>
          ) : (
            <form onSubmit={handleFreeOptIn} className="flex flex-col space-y-2.5">
              <input
                type="email"
                required
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
                className="w-full bg-neutral-950/95 border border-neutral-800 rounded-xl px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-purple-500 text-white placeholder-neutral-500 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-purple-600 hover:bg-purple-500 transition-all duration-300 text-white font-bold text-xs py-3 rounded-xl shadow-lg flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
              >
                <span>{isSubmitting ? 'Sending...' : 'Claim 3 Free Beats'}</span>
                <Download className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>


        {/* SOCIAL LINKS NAVIGATION QUEUE */}
        <div className="w-full flex flex-col space-y-3.5">
          {/* Link 1: Browse Beats Store */}
          <Link
            href="/"
            className="w-full flex items-center justify-between p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80 hover:border-purple-500/50 hover:bg-neutral-900 transition-all duration-300 group"
          >
            <div className="flex items-center space-x-3.5">
              <div className="p-2 rounded-lg bg-purple-600/10 text-purple-400 border border-purple-500/20">
                <Music2 className="w-4.5 h-4.5" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-white group-hover:text-purple-400 transition-colors">🎹 Browse Beat Store</p>
                <p className="text-[10px] text-neutral-400">Stream and license untagged MP3, WAV, & STEMS</p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
          </Link>

          {/* Link 2: VIP All-Access Pass */}
          <a
            href="https://buy.stripe.com/aFafZg3Xs49Y1AhaObcZa1h"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between p-4 rounded-xl bg-neutral-900/60 border border-purple-600/30 hover:border-purple-500/60 hover:bg-neutral-900 transition-all duration-300 group shadow-lg shadow-purple-500/5"
          >
            <div className="flex items-center space-x-3.5">
              <div className="p-2 rounded-lg bg-pink-600/10 text-pink-400 border border-pink-500/20">
                <CreditCard className="w-4.5 h-4.5" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-white group-hover:text-pink-400 transition-colors">🎟️ Join VIP All-Access Pass</p>
                <p className="text-[10px] text-neutral-400">Claim 3 full WAV + STEMS trackouts monthly for $19/mo</p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-pink-400 group-hover:translate-x-1 transition-all" />
          </a>

          {/* Link 3: Licensing & Rates */}
          <Link
            href="/licenses"
            className="w-full flex items-center justify-between p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80 hover:border-purple-500/50 hover:bg-neutral-900 transition-all duration-300 group"
          >
            <div className="flex items-center space-x-3.5">
              <div className="p-2 rounded-lg bg-purple-600/10 text-purple-400 border border-purple-500/20">
                <ShieldCheck className="w-4.5 h-4.5" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-white group-hover:text-purple-400 transition-colors">🛡️ Licensing Terms & Rates</p>
                <p className="text-[10px] text-neutral-400">Review clear legal agreements and streaming limits</p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
          </Link>
        </div>

        {/* Footer */}
        <div className="text-center pt-8 text-[10px] text-neutral-500 tracking-wider">
          <p>© 2026 Onzieb / Different Type of Vibe. All rights reserved.</p>
        </div>
      </div>
    </main>
  );
}