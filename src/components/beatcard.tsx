// src/components/BeatCard.tsx
'use client';

import { useAudio } from '@/context/AudioContext';

export default function BeatCard({ beat }: { beat: { id: string; title: string; bpm: number; audioUrl: string } }) {
  const { playBeat, currentBeat, isPlaying } = useAudio();

  const handleBuy = async (licenseType: string) => {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        beatId: beat.id,
        beatTitle: beat.title,
        licenseType,
      }),
    });
    const data = await res.json();
    if (data.url) window.location.href = data.url;
  };

  return (
    <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg text-white flex items-center justify-between">
      <div>
        <h3 className="font-bold">{beat.title}</h3>
        <span className="text-xs text-zinc-400">{beat.bpm} BPM</span>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => playBeat(beat)}
          className="px-3 py-1 bg-zinc-800 hover:bg-zinc-700 text-sm rounded-md"
        >
          {currentBeat?.id === beat.id && isPlaying ? 'Pause' : 'Preview'}
        </button>

        <button
          onClick={() => handleBuy('mp3')}
          className="px-3 py-1 bg-emerald-500 text-black text-sm font-semibold rounded-md hover:bg-emerald-400"
        >
          Buy MP3 ($29.99)
        </button>
      </div>
    </div>
  );
}