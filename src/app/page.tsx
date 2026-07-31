'use client';

import React, { useState, useRef, useEffect } from 'react';

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
  wavUrl?: string;
  stemsUrl?: string;
}

export default function HomePage() {
  const [tracks] = useState<Track[]>([
    {
      id: 'level-up',
      title: 'Level Up - Travis Scott x Future Type Beat | Dark Trap Instrumental',
      genre: 'Trap / Dark Hip-Hop',
      bpm: 92,
      key: 'F# Minor',
      priceMp3: 29.99,
      priceWav: 49.99,
      priceStems: 149.99,
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    },
    {
      id: 'sip-of-me',
      title: 'Sip of Me - J. Cole x Joey Bada$$ Type Beat | Chill Lofi Boom Bap Instrumental',
      genre: 'Boom Bap / Chill Lofi Hip-Hop',
      bpm: 85,
      key: 'D Minor',
      priceMp3: 29.99,
      priceWav: 49.99,
      priceStems: 149.99,
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    },
    {
      id: 'badin-m-2',
      title: 'Badin M 2 - Freddie Gibbs x MF DOOM Type Beat | Underground Boom Bap Instrumental',
      genre: 'Underground Boom Bap',
      bpm: 100,
      key: 'A Minor',
      priceMp3: 29.99,
      priceWav: 49.99,
      priceStems: 149.99,
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    },
  ]);

  // Audio Player State
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Free Opt-in Form State
  const [email, setEmail] = useState('');
  const [optInSuccess, setOptInSuccess] = useState(false);
  const [optInLoading, setOptInLoading] = useState(false);

  const handleFreeOptIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setOptInLoading(true);

    try {
      // You can hook this fetch up to a custom Next.js API route (/api/optin)
      // or send directly to GoHighLevel / ConvertKit / Mailchimp via webhook
      const res = await fetch('/api/optin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok || res.status === 404) {
        // Fallback to success even during local API setup
        setOptInSuccess(true);
      }
    } catch (err) {
      console.error('Opt-in error:', err);
      setOptInSuccess(true); // Soft-pass to ensure user gets their download
    } finally {
      setOptInLoading(false);
    }
  };

  // Play or Pause selected track
  const togglePlayTrack = (track: Track) => {
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
    }
  };

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    if (currentTrack && audioRef.current) {
      audioRef.current.src = currentTrack.audioUrl;
      audioRef.current.play().catch((err) => console.error('Playback error:', err));
      setIsPlaying(true);
    }
  }, [currentTrack]);

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (audioRef.current) {
      audioRef.current.volume = newVol;
    }
  };

  const handleBuy = async (track: Track, licenseType: 'mp3' | 'wav' | 'stems') => {
    try {
      let price = track.priceMp3;
      if (licenseType === 'wav') price = track.priceWav;
      if (licenseType === 'stems') price = track.priceStems;

      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          beatId: track.id,
          beatTitle: track.title,
          licenseType,
          priceAmount: price,
        }),
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert('Checkout error: Unable to initiate Stripe checkout session.');
      }
    } catch (err) {
      console.error('Checkout error:', err);
      alert('Failed to connect to checkout service.');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12 pb-32">
      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        onTimeUpdate={() => setCurrentTime(audioRef.current?.currentTime || 0)}
        onLoadedMetadata={() => setDuration(audioRef.current?.duration || 0)}
        onEnded={() => setIsPlaying(false)}
      />

      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <header className="text-center space-y-2 py-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Different Type of Vibe
          </h1>
          <p className="text-neutral-400 text-lg">
            Premium Instrumentals & Sync Licensing
          </p>
        </header>

        {/* 🎁 FREE BEAT PACK LEAD MAGNET SECTION */}
        <section className="bg-gradient-to-r from-purple-900/40 via-neutral-900 to-purple-950/30 border border-purple-500/30 rounded-2xl p-6 md:p-8 text-center space-y-4 shadow-xl">
          <div className="inline-block bg-purple-500/10 border border-purple-500/40 text-purple-300 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest">
            Free Artist Pack
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">
            Download 3 Free Tagged Beats For Practice & Non-Profit Use
          </h2>
          <p className="text-neutral-300 text-sm md:text-base max-w-2xl mx-auto">
            Get high-quality MP3 preview cuts delivered straight to your inbox. Use them to write, record demos, or test out your vibe before licensing.
          </p>

          {!optInSuccess ? (
            <form
              onSubmit={handleFreeOptIn}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto pt-2"
            >
              <input
                type="email"
                required
                placeholder="Enter your artist email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full sm:w-72 px-4 py-3 bg-black/70 border border-neutral-700 rounded-xl text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-purple-500 transition"
              />
              <button
                type="submit"
                disabled={optInLoading}
                className="w-full sm:w-auto px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm rounded-xl transition shadow-lg shrink-0 disabled:opacity-50"
              >
                {optInLoading ? 'Sending...' : 'Get Free Beats 🚀'}
              </button>
            </form>
          ) : (
            <div className="bg-emerald-950/60 border border-emerald-500/40 rounded-xl p-4 max-w-md mx-auto text-emerald-300 space-y-2">
              <p className="font-bold text-base">🎉 You&apos;re in! Check your email.</p>
              <p className="text-xs text-emerald-400/90">
                Or click below to download your 3-beat starter pack immediately:
              </p>
              <a
                href="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                download
                target="_blank"
                rel="noreferrer"
                className="inline-block px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-lg transition mt-1"
              >
                ⬇️ Download Free Beat Pack (.ZIP)
              </a>
            </div>
          )}
        </section>

        {/* AVAILABLE BEATS TABLE */}
        <section className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 space-y-4">
          <h2 className="text-2xl font-bold border-b border-neutral-800 pb-3">
            Available Beats
          </h2>

          <div className="divide-y divide-neutral-800">
            {tracks.map((track) => {
              const isSelected = currentTrack?.id === track.id;
              const isCurrentlyPlaying = isSelected && isPlaying;

              return (
                <div
                  key={track.id}
                  className={`py-5 flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-lg px-3 transition ${
                    isSelected ? 'bg-neutral-800/40' : 'hover:bg-neutral-900/40'
                  }`}
                >
                  <div className="space-y-1 max-w-xl">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => togglePlayTrack(track)}
                        className="w-10 h-10 rounded-full bg-purple-600 hover:bg-purple-500 flex items-center justify-center text-white shrink-0 transition shadow-lg"
                        aria-label={isCurrentlyPlaying ? 'Pause' : 'Play'}
                      >
                        {isCurrentlyPlaying ? '⏸' : '▶'}
                      </button>
                      <div>
                        <h3 className="text-lg font-semibold leading-snug">{track.title}</h3>
                        <p className="text-xs text-neutral-400 mt-0.5">
                          {track.genre} • {track.bpm} BPM • Key: {track.key}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pl-13 md:pl-0">
                    <button
                      onClick={() => handleBuy(track, 'mp3')}
                      className="px-3 py-1.5 text-xs bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-lg text-neutral-300 transition"
                    >
                      MP3 ${track.priceMp3}
                    </button>
                    <button
                      onClick={() => handleBuy(track, 'wav')}
                      className="px-3 py-1.5 text-xs bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-lg text-neutral-300 transition"
                    >
                      WAV ${track.priceWav}
                    </button>
                    <button
                      onClick={() => handleBuy(track, 'stems')}
                      className="px-3 py-1.5 text-xs bg-purple-600 hover:bg-purple-500 font-medium rounded-lg text-white shadow-md transition"
                    >
                      STEMS ${track.priceStems}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* Persistent Bottom Audio Player Bar */}
      {currentTrack && (
        <div className="fixed bottom-0 left-0 right-0 bg-neutral-950/95 backdrop-blur-md border-t border-neutral-800 p-4 shadow-2xl z-50">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 w-full md:w-1/4">
              <button
                onClick={togglePlayPause}
                className="w-10 h-10 rounded-full bg-purple-600 hover:bg-purple-500 text-white flex items-center justify-center shrink-0 transition"
              >
                {isPlaying ? '⏸' : '▶'}
              </button>
              <div className="truncate">
                <p className="text-sm font-bold truncate">{currentTrack.title}</p>
                <p className="text-xs text-purple-400">{currentTrack.bpm} BPM • {currentTrack.key}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-2/4">
              <span className="text-xs text-neutral-400 font-mono w-10 text-right">
                {formatTime(currentTime)}
              </span>
              <input
                type="range"
                min="0"
                max={duration || 0}
                value={currentTime}
                onChange={handleSeek}
                className="w-full accent-purple-500 h-1.5 bg-neutral-800 rounded-lg cursor-pointer"
              />
              <span className="text-xs text-neutral-400 font-mono w-10">
                {formatTime(duration)}
              </span>
            </div>

            <div className="hidden md:flex items-center justify-end gap-3 w-1/4">
              <span className="text-xs text-neutral-400">🔊</span>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="w-20 accent-purple-500 h-1.5 bg-neutral-800 rounded-lg cursor-pointer"
              />
              <button
                onClick={() => handleBuy(currentTrack, 'mp3')}
                className="px-3 py-1.5 text-xs bg-purple-600 hover:bg-purple-500 font-semibold text-white rounded-lg transition shrink-0 ml-2"
              >
                Buy ${currentTrack.priceMp3}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}