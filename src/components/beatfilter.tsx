// src/components/BeatFilter.tsx
'use client';

import { useState } from 'react';
import BeatCard from './BeatCard';

interface Beat {
  id: string;
  title: string;
  bpm: number;
  genre?: string;
  audio_url: string;
  mp3_price?: number;
  wav_price?: number;
  stems_price?: number;
}

export default function BeatFilter({ beats }: { beats: Beat[] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');

  // Extract unique genres for dropdown filter
  const genres = ['All', ...Array.from(new Set(beats.map((b) => b.genre).filter(Boolean)))];

  // Filter logic based on title search and genre selection
  const filteredBeats = beats.filter((beat) => {
    const matchesSearch = beat.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = selectedGenre === 'All' || beat.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  return (
    <div className="space-y-6">
      {/* Search and Dropdown Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="Search beat title, producer, or style..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition"
        />

        <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
          className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 transition"
        >
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>

      {/* Filtered Beats Output */}
      <div className="space-y-4">
        {filteredBeats.length > 0 ? (
          filteredBeats.map((beat) => (
            <BeatCard
              key={beat.id}
              beat={{
                id: beat.id,
                title: beat.title,
                bpm: beat.bpm,
                genre: beat.genre,
                audioUrl: beat.audio_url,
                mp3Price: beat.mp3_price,
                wavPrice: beat.wav_price,
                stemsPrice: beat.stems_price,
              }}
            />
          ))
        ) : (
          <div className="text-center py-12 text-zinc-500 border border-dashed border-zinc-800 rounded-xl">
            No beats match your search criteria.
          </div>
        )}
      </div>
    </div>
  );
}
// src/app/page.tsx
import { supabase } from '@/lib/supabase';
import BeatFilter from '@/components/BeatFilter';

export const revalidate = 0;

export default async function HomePage() {
  const { data: beats } = await supabase
    .from('beats')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <main className="max-w-4xl mx-auto p-6 space-y-6 text-white">
      <div className="border-b border-zinc-800 pb-4">
        <h1 className="text-3xl font-bold">Beat Catalog</h1>
        <p className="text-zinc-400 text-sm mt-1">
          Browse, listen, and license high-quality beats instantly.
        </p>
      </div>

      <BeatFilter beats={beats || []} />
    </main>
  );
}