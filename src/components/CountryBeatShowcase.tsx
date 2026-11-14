'use client';

import React, { useState, useRef } from 'react';
import { Play, Pause, Music2, ShoppingBag, Volume2, Sparkles, Check } from 'lucide-react';
import type { Track } from '@/data/beats';

interface CountryBeatShowcaseProps {
  beats: Track[];
  countryName: string;
  flag: string;
}

export default function CountryBeatShowcase({ beats, countryName, flag }: CountryBeatShowcaseProps) {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleTogglePlay = (beat: Track) => {
    if (playingId === beat.id) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setPlayingId(null);
      return;
    }

    if (!audioRef.current) {
      audioRef.current = new Audio(beat.audioUrl);
    } else {
      audioRef.current.pause();
      audioRef.current.src = beat.audioUrl;
    }

    audioRef.current.play().then(() => {
      setPlayingId(beat.id);
    }).catch((err) => {
      console.warn('Audio playback failed:', err);
    });

    audioRef.current.onended = () => {
      setPlayingId(null);
    };
  };

  if (!beats || beats.length === 0) return null;

  return (
    <section className="my-10 bg-zinc-950/80 border border-zinc-800/90 rounded-2xl p-6 md:p-8 backdrop-blur-sm shadow-xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-zinc-800">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-purple-400 uppercase mb-1">
            <Volume2 className="w-4 h-4 text-purple-400 animate-pulse" />
            <span>Interactive Catalog Preview</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2">
            Trending Instrumentals in {flag} {countryName}
          </h2>
          <p className="text-zinc-400 text-sm mt-1">
            Stream studio audio previews below. Instant untagged WAV delivery upon checkout.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/50 border border-emerald-800/60 px-3 py-1.5 rounded-full w-fit">
          <Sparkles className="w-3.5 h-3.5" />
          <span>100% Royalty Free &bull; Zero Uncleared Samples</span>
        </div>
      </div>

      <div className="space-y-3">
        {beats.map((beat) => {
          const isCurrent = playingId === beat.id;
          return (
            <div
              key={beat.id}
              className={`flex flex-col md:flex-row md:items-center justify-between p-4 rounded-xl border transition-all ${
                isCurrent
                  ? 'bg-purple-950/30 border-purple-500/60 shadow-lg shadow-purple-950/40'
                  : 'bg-zinc-900/60 border-zinc-800/70 hover:border-zinc-700 hover:bg-zinc-900'
              }`}
            >
              <div className="flex items-center gap-4 mb-3 md:mb-0">
                <button
                  type="button"
                  onClick={() => handleTogglePlay(beat)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-transform active:scale-95 ${
                    isCurrent
                      ? 'bg-purple-600 text-white shadow-md shadow-purple-600/50'
                      : 'bg-zinc-800 hover:bg-purple-600 text-zinc-200 hover:text-white'
                  }`}
                  aria-label={isCurrent ? `Pause ${beat.title}` : `Play ${beat.title}`}
                >
                  {isCurrent ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current translate-x-0.5" />}
                </button>

                <div>
                  <h3 className="font-bold text-white text-base md:text-lg line-clamp-1">
                    {beat.title.split(' - ')[0]}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400 mt-1">
                    <span className="bg-zinc-800/80 px-2 py-0.5 rounded text-zinc-300 font-mono">
                      {beat.bpm} BPM
                    </span>
                    <span className="bg-zinc-800/80 px-2 py-0.5 rounded text-zinc-300 font-mono">
                      Key: {beat.key}
                    </span>
                    <span className="text-purple-400 font-medium">
                      {beat.genre}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 self-end md:self-auto">
                {beat.linkMp3 && (
                  <a
                    href={beat.linkMp3}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700/80 transition"
                  >
                    MP3 (${beat.priceMp3 || 29.99})
                  </a>
                )}
                {beat.linkWav && (
                  <a
                    href={beat.linkWav}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 rounded-lg text-xs font-bold bg-purple-600 hover:bg-purple-500 text-white shadow-md shadow-purple-900/30 transition flex items-center gap-1.5"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>WAV Lease (${beat.priceWav || 49.99})</span>
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
