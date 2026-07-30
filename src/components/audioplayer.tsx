// src/components/AudioPlayer.tsx
'use client';

import { useAudio } from '@/context/AudioContext';

export default function AudioPlayer() {
  const { currentBeat, isPlaying, togglePlay } = useAudio();

  if (!currentBeat) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-zinc-800 p-4 text-white flex items-center justify-between z-50">
      <div>
        <p className="font-bold">{currentBeat.title}</p>
        <p className="text-xs text-zinc-400">{currentBeat.bpm} BPM</p>
      </div>

      <button
        onClick={togglePlay}
        className="px-6 py-2 bg-emerald-500 text-black font-bold rounded-full hover:bg-emerald-400 transition"
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
}