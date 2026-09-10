'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Play, Pause, Download, Music2, CheckCircle2, ShoppingCart, Trash2, Tag, X, Gift, Filter, User, Disc } from 'lucide-react';

// ==========================================
// INLINE EXIT-INTENT MODAL COMPONENT
// ==========================================
function ExitIntentModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasDismissed) {
        setIsVisible(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasDismissed]);

  const handleClose = () => {
    setIsVisible(false);
    setHasDismissed(true);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md rounded-2xl bg-neutral-900 border border-purple-600/40 p-6 shadow-2xl text-center">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-12 h-12 rounded-full bg-purple-600/20 text-purple-400 flex items-center justify-center mx-auto mb-4 border border-purple-500/30">
          <Gift className="w-6 h-6" />
        </div>

        <h3 className="text-xl font-bold text-white mb-2">
          Before You Leave...
        </h3>
        <p className="text-neutral-300 text-sm mb-6">
          Take <span className="text-purple-400 font-semibold">10% OFF</span> your entire order today! Use promo code <span className="bg-neutral-800 px-2 py-1 rounded text-purple-300 font-mono text-xs border border-purple-700/50">VIBE10</span> at checkout.
        </p>

        <div className="flex flex-col gap-3">
          <button
            onClick={handleClose}
            className="w-full bg-purple-600 hover:bg-purple-500 text-white font-medium py-2.5 rounded-xl transition-colors text-sm cursor-pointer"
          >
            Claim Discount
          </button>
          <button
            onClick={handleClose}
            className="text-xs text-neutral-400 hover:text-neutral-200 transition-colors cursor-pointer"
          >
            No thanks, I'll pay full price
          </button>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// TYPES & TRACK DATA
// ==========================================
import { MY_BEATS, Track } from '@/data/beats';

interface CartItem {
  trackId: string;
  trackTitle: string;
  licenseType: 'MP3' | 'WAV' | 'STEMS';
  price: number;
  stripeLink?: string;
}

const ARTIST_VIBES = [
  { name: 'Drake Type Beats', slug: 'drake-type-beats' },
  { name: 'Travis Scott Type Beats', slug: 'travis-scott-type-beats' },
  { name: 'Metro Boomin Type Beats', slug: 'metro-boomin-type-beats' },
  { name: 'J. Cole Type Beats', slug: 'j-cole-type-beats' },
] as const;

const GENRE_CATEGORIES = [
  { name: 'Trap Beats', slug: 'trap-beats' },
  { name: 'Boom Bap Beats', slug: 'boom-bap-beats' },
  { name: 'R&B Instrumentals', slug: 'rb-instrumentals' },
  { name: 'Hip-Hop Beats', slug: 'hip-hop-beats' },
] as const;

interface StorefrontProps {
  initialFilter?: string;
}

export default function Storefront({ initialFilter = 'All' }: StorefrontProps) {
  const router = useRouter();
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string>(initialFilter);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [optInSuccess, setOptInSuccess] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setSelectedFilter(initialFilter);
  }, [initialFilter]);

  const filteredBeats = useMemo(() => {
    if (selectedFilter === 'All') return MY_BEATS;
    return MY_BEATS.filter(
      (beat) => beat.artistVibe === selectedFilter || beat.genre === selectedFilter
    );
  }, [selectedFilter]);

  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'MusicGroup',
    '@id': 'https://differenttypeofvibe.com#musicgroup',
    name: 'Different Type of Vibe',
    url: 'https://differenttypeofvibe.com',
    logo: 'https://differenttypeofvibe.com/images/logo.jpg',
    description: 'Premier beat storefront by Onzieb. Stream and purchase untagged instrumental leases, custom beats, and stems for Drake, Travis Scott, and Boom Bap type beats.',
    genre: ['Hip-Hop', 'Trap', 'Boom Bap', 'R&B'],
    aggregateRating: {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '142',
      'bestRating': '5',
      'worstRating': '1'
    },
    track: MY_BEATS.map((track) => ({
      '@type': 'MusicRecording',
      name: track.title,
      genre: track.genre,
      audio: track.audioUrl,
      offers: [
        {
          '@type': 'Offer',
          name: 'MP3 Basic Lease',
          price: track.priceMp3,
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: track.linkMp3,
        },
        {
          '@type': 'Offer',
          name: 'WAV Premium Lease',
          price: track.priceWav,
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: track.linkWav,
        },
        {
          '@type': 'Offer',
          name: 'STEMS Trackout License',
          price: track.priceStems,
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: track.linkStems,
        },
      ],
    })),
  };

  const calculateCartTotals = () => {
    if (cart.length === 0) return { subtotal: 0, discount: 0, total: 0 };

    const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
    let discount = 0;

    if (cart.length >= 3) {
      const lowestPrice = Math.min(...cart.map((item) => item.price));
      discount = lowestPrice;
    }

    return {
      subtotal: parseFloat(subtotal.toFixed(2)),
      discount: parseFloat(discount.toFixed(2)),
      total: parseFloat((subtotal - discount).toFixed(2)),
    };
  };

  const addToCart = (track: Track, licenseType: 'MP3' | 'WAV' | 'STEMS', price: number, stripeLink?: string) => {
    const newItem: CartItem = {
      trackId: track.id,
      trackTitle: track.title,
      licenseType,
      price,
      stripeLink,
    };
    setCart((prev) => [...prev, newItem]);
    setIsCartOpen(true);
  };

  const removeFromCart = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const handlePlayPause = (track: Track) => {
    if (currentTrack?.id === track.id) {
      if (isPlaying) {
        audioRef.current?.pause();
        setIsPlaying(false);
      } else {
        audioRef.current?.play();
        setIsPlaying(true);
      }
    } else {
      setCurrentTrack(track);
      setIsPlaying(true);
      if (audioRef.current) {
        audioRef.current.src = track.audioUrl;
        audioRef.current.play();
      }
    }
  };

  const handleFreeOptIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    // Generate unique event ID for Meta Pixel and CAPI deduplication
    const eventId = 'lead_' + Math.random().toString(36).substring(2, 9) + '_' + Date.now();

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

      // Fire Meta Lead Event with browser eventID for deduplication
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'Lead', {
          content_name: '3 Free Beats Pack',
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

  const resetFilter = () => {
    setSelectedFilter('All');
    router.push('/');
  };

  const { subtotal, discount, total } = calculateCartTotals();

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col pb-32">
      <ExitIntentModal />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      <audio
        ref={audioRef}
        onEnded={() => setIsPlaying(false)}
        className="hidden"
      />

      {/* Header Banner */}
      <header className="border-b border-neutral-800 bg-neutral-900/50 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Music2 className="w-7 h-7 text-purple-500" />
            <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Different Type of Vibe
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <div className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-950/80 text-purple-300 border border-purple-800/50 text-center">
              Buy Direct From The Producer • Zero Marketplace Fees • Instant Untagged Delivery
            </div>

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-neutral-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Open Cart"
            >
              <ShoppingCart className="w-6 h-6" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-neutral-950">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 w-full mt-8 space-y-10">
        {/* FREE BEATS OPT-IN BANNER */}
        <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-900/60 via-purple-950 to-neutral-900 border border-purple-800/40 p-6 md:p-8 shadow-2xl">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-medium">
              <span>🔥 Exclusive Producer Pack</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
              Grab 3 Free Tagged Beats
            </h1>
            <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
              Enter your email below to instantly receive 3 high-quality MP3 tagged beats straight to your inbox for demoing and writing.
            </p>

            {optInSuccess ? (
              <div className="flex items-center space-x-2 text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 p-4 rounded-xl">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-medium">
                  Success! Check your inbox shortly for your 3 free beats download link.
                </span>
              </div>
            ) : (
              <form onSubmit={handleFreeOptIn} className="flex flex-col sm:flex-row gap-3 pt-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                  className="flex-1 bg-neutral-900/90 border border-neutral-700/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-neutral-500 disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-purple-600 hover:bg-purple-500 transition-colors text-white font-medium text-sm px-6 py-3 rounded-xl shadow-lg flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Claim Beats'}</span>
                  <Download className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </section>

        {/* BULK DISCOUNT ANNOUNCEMENT BANNER */}
        <div className="flex items-center justify-between p-3 rounded-xl bg-purple-950/40 border border-purple-800/50 text-xs text-purple-300">
          <div className="flex items-center space-x-2">
            <Tag className="w-4 h-4 text-purple-400" />
            <span><strong>AUTOMATIC BULK DEAL:</strong> Add 3 licenses to your cart to get 1 FREE automatically!</span>
          </div>
        </div>

        {/* CATEGORY & ARTIST VIBE NAVIGATION WITH DYNAMIC LINKS */}
        <section className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-5 space-y-5">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-purple-400" />
              <h3 className="text-sm font-bold tracking-wider text-neutral-200 uppercase">
                Filter Catalog
              </h3>
            </div>
            {selectedFilter !== 'All' && (
              <button
                onClick={resetFilter}
                className="text-xs text-purple-400 hover:text-purple-300 transition-colors underline cursor-pointer"
              >
                Reset Filter (Show All)
              </button>
            )}
          </div>

          {/* Browse By Artist Vibe */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-xs font-semibold text-neutral-400">
              <User className="w-3.5 h-3.5 text-purple-400" />
              <span>Browse By Artist Vibe</span>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {ARTIST_VIBES.map((vibe) => {
                const isActive = selectedFilter === vibe.name;
                return (
                  <Link
                    key={vibe.slug}
                    href={`/vibe/${vibe.slug}`}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      isActive
                        ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30 border border-purple-500'
                        : 'bg-neutral-950 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700'
                    }`}
                  >
                    {vibe.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Browse By Genre */}
          <div className="space-y-2 pt-2 border-t border-neutral-800/60">
            <div className="flex items-center space-x-2 text-xs font-semibold text-neutral-400">
              <Disc className="w-3.5 h-3.5 text-purple-400" />
              <span>Browse By Genre</span>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {GENRE_CATEGORIES.map((genre) => {
                const isActive = selectedFilter === genre.name;
                return (
                  <Link
                    key={genre.slug}
                    href={`/genre/${genre.slug}`}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      isActive
                        ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30 border border-purple-500'
                        : 'bg-neutral-950 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700'
                    }`}
                  >
                    {genre.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* FEATURED BEAT CATALOG */}
        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h2 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
              <span>{selectedFilter === 'All' ? 'All Tracks' : selectedFilter}</span>
            </h2>
            <span className="text-xs text-neutral-400 font-mono">
              SHOWING {filteredBeats.length} OF {MY_BEATS.length} BEATS
            </span>
          </div>

          <div className="space-y-3">
            {filteredBeats.map((track) => {
              const isCurrent = currentTrack?.id === track.id;
              const isThisPlaying = isCurrent && isPlaying;

              return (
                <div
                  key={track.id}
                  className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border transition-all ${
                    isCurrent
                      ? 'bg-purple-950/30 border-purple-700/60 shadow-md'
                      : 'bg-neutral-900/60 border-neutral-800/80 hover:border-neutral-700'
                  }`}
                >
                  <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                    <button
                      onClick={() => handlePlayPause(track)}
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors flex-shrink-0 cursor-pointer ${
                        isThisPlaying
                          ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/30'
                          : 'bg-neutral-800 text-neutral-200 hover:bg-purple-600 hover:text-white'
                      }`}
                    >
                      {isThisPlaying ? (
                        <Pause className="w-5 h-5 fill-current" />
                      ) : (
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      )}
                    </button>

                    <div>
                      <h3 className="font-semibold text-sm md:text-base text-white leading-snug">
                        {track.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-xs text-neutral-400 mt-1">
                        <span className="bg-neutral-800 px-2 py-0.5 rounded text-purple-300 font-medium">
                          {track.bpm} BPM
                        </span>
                        <span>•</span>
                        <span className="text-neutral-300">{track.key}</span>
                        <span>•</span>
                        <span className="text-neutral-400">{track.genre}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap justify-end">
                    <button
                      onClick={() => addToCart(track, 'MP3', track.priceMp3, track.linkMp3)}
                      className="px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold text-neutral-200 border border-neutral-700/80 transition-colors cursor-pointer flex items-center space-x-1"
                    >
                      <span>MP3</span>
                      <span className="text-purple-400">${track.priceMp3}</span>
                    </button>

                    <button
                      onClick={() => addToCart(track, 'WAV', track.priceWav, track.linkWav)}
                      className="px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold text-neutral-200 border border-neutral-700/80 transition-colors cursor-pointer flex items-center space-x-1"
                    >
                      <span>WAV</span>
                      <span className="text-purple-400">${track.priceWav}</span>
                    </button>

                    <button
                      onClick={() => addToCart(track, 'STEMS', track.priceStems, track.linkStems)}
                      className="px-3 py-1.5 rounded-lg bg-purple-950/80 hover:bg-purple-900 text-xs font-semibold text-purple-200 border border-purple-800/80 transition-colors cursor-pointer flex items-center space-x-1"
                    >
                      <span>STEMS</span>
                      <span className="text-purple-300">${track.priceStems}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* PERSISTENT AUDIO PLAYER BOTTOM BAR */}
      {currentTrack && (
        <div className="fixed bottom-0 left-0 right-0 bg-neutral-900/95 backdrop-blur-md border-t border-purple-900/50 p-4 z-40 shadow-2xl">
          <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center space-x-3 overflow-hidden">
              <button
                onClick={() => handlePlayPause(currentTrack)}
                className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center flex-shrink-0 cursor-pointer shadow-lg shadow-purple-600/30"
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 fill-current" />
                ) : (
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                )}
              </button>

              <div className="truncate">
                <p className="text-sm font-semibold text-white truncate">
                  {currentTrack.title}
                </p>
                <p className="text-xs text-purple-400">
                  {currentTrack.bpm} BPM • Key: {currentTrack.key}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2 flex-shrink-0">
              <button
                onClick={() => addToCart(currentTrack, 'WAV', currentTrack.priceWav, currentTrack.linkWav)}
                className="bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors cursor-pointer flex items-center space-x-1"
              >
                <ShoppingCart className="w-3.5 h-3.5" />
                <span>Buy WAV (${currentTrack.priceWav})</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SHOPPING CART SIDEBAR MODAL */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm">
          <div className="w-full max-w-md bg-neutral-900 border-l border-neutral-800 h-full flex flex-col p-6 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-4">
              <div className="flex items-center space-x-2">
                <ShoppingCart className="w-5 h-5 text-purple-400" />
                <h2 className="font-bold text-lg text-white">Your Cart</h2>
                <span className="text-xs bg-purple-950 text-purple-300 border border-purple-800 px-2 py-0.5 rounded-full font-mono">
                  {cart.length} items
                </span>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center p-6 space-y-3">
                <ShoppingCart className="w-12 h-12 text-neutral-600" />
                <p className="text-neutral-400 text-sm">Your cart is currently empty.</p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-2 text-xs bg-purple-600 text-white font-medium px-4 py-2 rounded-xl"
                >
                  Browse Beats
                </button>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto space-y-3 pr-1">
                  {cart.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 rounded-xl bg-neutral-950 border border-neutral-800"
                    >
                      <div className="truncate mr-2">
                        <p className="text-xs font-semibold text-white truncate">
                          {item.trackTitle}
                        </p>
                        <span className="inline-block mt-1 text-[10px] bg-purple-950 text-purple-300 border border-purple-800/60 px-2 py-0.5 rounded font-mono">
                          {item.licenseType} LICENSE
                        </span>
                      </div>

                      <div className="flex items-center space-x-3">
                        <span className="text-sm font-bold text-purple-400">
                          ${item.price}
                        </span>
                        <button
                          onClick={() => removeFromCart(idx)}
                          className="text-neutral-500 hover:text-red-400 transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-neutral-800 pt-4 mt-4 space-y-3">
                  {discount > 0 && (
                    <div className="flex justify-between text-xs text-emerald-400 bg-emerald-950/30 p-2.5 rounded-lg border border-emerald-800/40">
                      <span>3+ Bulk Discount (1 Free)</span>
                      <span className="font-mono">-${discount.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-sm text-neutral-400">
                    <span>Subtotal</span>
                    <span className="font-mono text-white">${subtotal.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between text-base font-bold text-white border-t border-neutral-800 pt-2">
                    <span>Total</span>
                    <span className="font-mono text-purple-400">${total.toFixed(2)}</span>
                  </div>

                  <a
                    href={cart[0]?.stripeLink || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 rounded-xl transition-colors text-center text-sm block cursor-pointer shadow-lg shadow-purple-600/20"
                  >
                    Proceed to Stripe Checkout
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
}