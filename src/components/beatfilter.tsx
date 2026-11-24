// src/components/beatfilter.tsx
'use client';

import { useState } from 'react';
import BeatCard from './beatcard';

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
      {/* Search and Dropdown Controls */}
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />

        <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
          className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
        >
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>

      {/* Beats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredBeats.length > 0 ? (
          filteredBeats.map((beat) => (
            <BeatCard
              key={beat.id}
              beat={{
                id: beat.id,
                title: beat.title,
                bpm: beat.bpm,
                audioUrl: beat.audio_url,
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
