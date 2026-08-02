'use client';

import React, { useState, useRef } from 'react';
import { Play, Pause, Download, Music2, CheckCircle2, ShieldCheck, ShoppingCart } from 'lucide-react';

interface Track {
  id: string;
  title: string;
  genre: string;
  bpm: number;
  key: string;
  priceMp3: number;
  priceWav: number;
  priceStems: number;
  audioUrl: string;
  linkMp3?: string;
  linkWav?: string;
  linkStems?: string;
}

const MY_BEATS: Track[] = [
  {
    id: '1',
    title: 'Level Up - Travis Scott x Future Type Beat | Dark Trap Instrumental (92 BPM - F#m)',
    genre: 'Trap / Dark Hip-Hop',
    bpm: 92,
    key: 'F# Minor',
    priceMp3: 29.99,
    priceWav: 49.99,
    priceStems: 149.99,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    linkMp3: 'https://buy.stripe.com/test_6oUaEWfGabCqbaR6xVcZa00',
    linkWav: 'https://buy.stripe.com/test_dRm14m9hM35Ugvb09xcZa01',
    linkStems: 'https://buy.stripe.com/test_bJe9AS65AdKy2El4pNcZa02',
  },
  {
    id: '2',
    title: 'Sip of Me - J. Cole x Joey Bada$$ Type Beat | Chill Lofi Boom Bap Instrumental (85 BPM - Dm)',
    genre: 'Boom Bap / Chill Lofi Hip-Hop',
    bpm: 85,
    key: 'D Minor',
    priceMp3: 29.99,
    priceWav: 49.99,
    priceStems: 149.99,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    linkMp3: 'https://buy.stripe.com/test_6oUaEWfGabCqbaR6xVcZa00',
    linkWav: 'https://buy.stripe.com/test_dRm14m9hM35Ugvb09xcZa01',
    linkStems: 'https://buy.stripe.com/test_bJe9AS65AdKy2El4pNcZa02',
  },
  {
    id: '3',
    title: 'Badin M 2 - Freddie Gibbs x MF DOOM Type Beat | Underground Boom Bap Instrumental (100 BPM - Am)',
    genre: 'Boom Bap / Underground Hip-Hop',
    bpm: 100,
    key: 'A Minor',
    priceMp3: 29.99,
    priceWav: 49.99,
    priceStems: 149.99,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    linkMp3: 'https://buy.stripe.com/test_6oUaEWfGabCqbaR6xVcZa00',
    linkWav: 'https://buy.stripe.com/test_dRm14m9hM35Ugvb09xcZa01',
    linkStems: 'https://buy.stripe.com/test_bJe9AS65AdKy2El4pNcZa02',
  },
];

export default function Home() {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [optInSuccess, setOptInSuccess] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

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

    try {
      await fetch(
        'https://services.leadconnectorhq.com/hooks/lldFXvWMNSAaPk368zJb/webhook-trigger/40336c67-48a7-40e7-8be7-b339a52fcce9',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            source: 'Different Type of Vibe - 3 Free Beats Opt-In',
            tags: ['Free Beats Lead', 'Website Opt-In'],
          }),
        }
      );

      setOptInSuccess(true);
      setEmail('');
    } catch (error) {
      console.error('GHL Webhook Error:', error);
      setOptInSuccess(true);
      setEmail('');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col pb-32">
      <audio
        ref={audioRef}
        onEnded={() => setIsPlaying(false)}
        className="hidden"
      />

      {/* Header Banner */}
      <header className="border-b border-neutral-800 bg-neutral-900/50 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Music2 className="w-7 h-7 text-purple-500" />
            <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Different Type of Vibe
            </span>
          </div>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-950/80 text-purple-300 border border-purple-800/50">
            Official Catalog
          </span>
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

        {/* FEATURED BEAT CATALOG */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold tracking-tight text-white">
              Featured Tracks
            </h2>
            <span className="text-xs text-neutral-400 font-mono">
              {MY_BEATS.length} BEATS AVAILABLE
            </span>
          </div>

          <div className="space-y-3">
            {MY_BEATS.map((track) => {
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
                  {/* Track Info & Play Button */}
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
                      <h3 className="font-semibold text-white text-base leading-snug">
                        {track.title}
                      </h3>
                      <div className="flex items-center space-x-3 text-xs text-neutral-400 mt-1">
                        <span>{track.genre}</span>
                        <span>•</span>
                        <span>{track.bpm} BPM</span>
                        <span>•</span>
                        <span>{track.key}</span>
                      </div>
                    </div>
                  </div>

                  {/* Pricing Action Buttons */}
                  <div className="flex items-center space-x-2 self-start sm:self-center">
                    <a
                      href={track.linkMp3 || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-xs font-mono font-medium text-neutral-200 transition-colors"
                    >
                      <span>MP3 ${track.priceMp3}</span>
                    </a>
                    <a
                      href={track.linkWav || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-xs font-mono font-medium text-neutral-200 transition-colors"
                    >
                      <span>WAV ${track.priceWav}</span>
                    </a>
                    <a
                      href={track.linkStems || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-purple-900/40 hover:bg-purple-900/70 border border-purple-700/50 text-xs font-mono font-medium text-purple-300 transition-colors"
                    >
                      <ShoppingCart className="w-3 h-3 mr-1" />
                      <span>STEMS ${track.priceStems}</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* PERSISTENT BOTTOM AUDIO PLAYER BAR */}
      {currentTrack && (
        <div className="fixed bottom-0 left-0 right-0 bg-neutral-900/95 border-t border-neutral-800 p-4 backdrop-blur-md z-50">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => handlePlayPause(currentTrack)}
                className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center cursor-pointer hover:bg-purple-500 transition-colors"
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 fill-current" />
                ) : (
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                )}
              </button>
              <div>
                <p className="text-sm font-semibold text-white">
                  {currentTrack.title}
                </p>
                <p className="text-xs text-neutral-400 font-mono">
                  {currentTrack.bpm} BPM | {currentTrack.key}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-xs text-neutral-400">
              <ShieldCheck className="w-4 h-4 text-purple-400" />
              <span className="hidden md:inline">Instant Automated Delivery</span>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
export default function Home() {
  return (
    <main className="min-h-screen p-8">
      {/* Your Beat Catalog / Audio Player Components */}
      <h1 className="text-4xl font-bold text-purple-400">Different Type of Vibe</h1>
    </main>
  );
}