'use client';

import React, { useState } from 'react';

interface Track {
  id: string;
  title: string;
  bpm: number;
  key: string;
  priceMp3: number;
  priceWav: number;
  priceStems: number;
}

export default function HomePage() {
  const [tracks] = useState<Track[]>([
    {
      id: '1',
      title: 'Midnight Vibe',
      bpm: 140,
      key: 'C Minor',
      priceMp3: 29.99,
      priceWav: 49.99,
      priceStems: 199.99,
    },
    {
      id: '2',
      title: 'Night Drive',
      bpm: 128,
      key: 'G Major',
      priceMp3: 29.99,
      priceWav: 49.99,
      priceStems: 199.99,
    },
  ]);

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
    <div className="min-h-screen bg-black text-white p-6 md:p-12">
      <div className="max-w-5xl mx-auto space-y-8">
        <header className="text-center space-y-2 py-8">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Different Type of Vibe
          </h1>
          <p className="text-neutral-400 text-lg">
            Premium Instrumentals & Sync Licensing
          </p>
        </header>

        <section className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 space-y-4">
          <h2 className="text-2xl font-bold border-b border-neutral-800 pb-3">
            Available Beats
          </h2>

          <div className="divide-y divide-neutral-800">
            {tracks.map((track) => (
              <div
                key={track.id}
                className="py-4 flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div>
                  <h3 className="text-lg font-semibold">{track.title}</h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    {track.bpm} BPM • Key: {track.key}
                  </p>
                </div>

                <div className="flex items-center gap-2">
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
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}