// src/components/BeatCard.tsx
'use client';

import { useAudio } from '@/context/AudioContext';
import { trackCustomEvent } from '@/lib/gtm';

export default function BeatCard({ beat }: { beat: { id: string; title: string; bpm: number; audioUrl: string } }) {
  const { playBeat, currentBeat, isPlaying } = useAudio();

  const isCurrentlyPlaying = currentBeat?.id === beat.id && isPlaying;

  const handlePlayClick = () => {
    // Fire tracking event only when transitioning from pause to play
    if (!isCurrentlyPlaying) {
      trackCustomEvent({
        eventName: 'play_beat',
        fbEventName: 'ViewContent',
        eventParams: {
          content_name: beat.title,
          content_ids: [beat.id],
          content_type: 'product',
          bpm: beat.bpm,
        },
      });
    }

    playBeat(beat);
  };

  const handleBuy = async (licenseType: string) => {
    // Track checkout initiation before redirecting
    trackCustomEvent({
      eventName: 'initiate_checkout',
      fbEventName: 'InitiateCheckout',
      eventParams: {
        content_name: beat.title,
        content_ids: [beat.id],
        content_type: licenseType,
        value: 29.99,
        currency: 'USD',
      },
    });

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
          onClick={handlePlayClick}
          className="px-3 py-1 bg-zinc-800 hover:bg-zinc-700 text-sm rounded-md"
        >
          {isCurrentlyPlaying ? 'Pause' : 'Preview'}
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