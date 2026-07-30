'use client';

import { useState, useRef, useEffect } from 'react';
import { getBeats, Beat } from '@/lib/beats';

interface Track {
  id: string;
  title: string;
  bpm: number;
  key: string;
  genre: string;
  duration: string;
  audioUrl: string;
  priceMp3: string;
  priceWav: string;
  priceStems: string;
}

const FALLBACK_TRACKS: Track[] = [
  {
    id: '1',
    title: 'Level Up - Travis Scott x Future Type Beat | Dark Trap Instrumental (92 BPM - F#m)',
    bpm: 92,
    key: 'F# Minor',
    genre: 'Trap / Dark Hip-Hop',
    duration: '0:53',
    audioUrl: 'https://hnliahdtcbuvggxhmzej.supabase.co/storage/v1/object/public/audio-previews/Level%20Up.mp3',
    priceMp3: '$29.99',
    priceWav: '$49.99',
    priceStems: '$149.99',
  },
  {
    id: '2',
    title: 'Sip of Me - J. Cole x Joey Bada$$ Type Beat | Chill Lofi Boom Bap Instrumental (85 BPM - Dm)',
    bpm: 85,
    key: 'D Minor',
    genre: 'Boom Bap / Chill Lofi Hip-Hop',
    duration: '0:54',
    audioUrl: 'https://hnliahdtcbuvggxhmzej.supabase.co/storage/v1/object/public/audio-previews/Sip%20of%20Me.mp3',
    priceMp3: '$29.99',
    priceWav: '$49.99',
    priceStems: '$149.99',
  },
  {
    id: '3',
    title: 'Badin M 2 - Freddie Gibbs x MF DOOM Type Beat | Underground Boom Bap Instrumental (100 BPM - Am)',
    bpm: 100,
    key: 'A Minor',
    genre: 'Boom Bap / Underground Hip-Hop',
    duration: '0:49',
    audioUrl: 'https://hnliahdtcbuvggxhmzej.supabase.co/storage/v1/object/public/audio-previews/Badin%20M%202.mp3',
    priceMp3: '$29.99',
    priceWav: '$49.99',
    priceStems: '$149.99',
  },
];

export default function Home() {
  const [tracks, setTracks] = useState<Track[]>(FALLBACK_TRACKS);
  const [currentTrack, setCurrentTrack] = useState<Track>(FALLBACK_TRACKS[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [durationTime, setDurationTime] = useState('0:00');
  const [volume, setVolume] = useState(0.8);
  const [loading, setLoading] = useState(true);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Fetch dynamic beats from Supabase on load
  useEffect(() => {
    async function fetchBeats() {
      try {
        const dbBeats: Beat[] = await getBeats();
        if (dbBeats && dbBeats.length > 0) {
          const mappedTracks: Track[] = dbBeats.map((beat) => ({
            id: String(beat.id),
            title: beat.title,
            bpm: beat.bpm || 120,
            key: beat.key || 'C Minor',
            genre: beat.genre || 'Hip-Hop',
            duration: '0:00',
            audioUrl: beat.audio_url || '',
            priceMp3: `$${beat.price || 29.99}`,
            priceWav: `$${((beat.price || 29.99) + 20).toFixed(2)}`,
            priceStems: `$${((beat.price || 29.99) + 120).toFixed(2)}`,
          }));
          setTracks(mappedTracks);
          setCurrentTrack(mappedTracks[0]);
        }
      } catch (err) {
        console.error('Failed to load Supabase beats, using fallbacks:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchBeats();
  }, []);

  // Sync volume with HTML audio tag
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // Handle Play/Pause side-effects cleanly via isPlaying state
  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          // Prevent unhandled promise rejection if browser blocks autoplay or src changes fast
          console.warn('Playback interrupted or blocked by browser:', err);
          setIsPlaying(false);
        });
      }
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentTrack]);

  const togglePlayPause = (track?: Track) => {
    // If selecting a new track
    if (track && track.id !== currentTrack.id) {
      setCurrentTrack(track);
      setProgress(0);
      setCurrentTime('0:00');
      setIsPlaying(true);
      return;
    }

    // Toggle current track play state
    setIsPlaying((prev) => !prev);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const cur = audioRef.current.currentTime;
      const dur = audioRef.current.duration || 1;
      setProgress((cur / dur) * 100);

      const mins = Math.floor(cur / 60);
      const secs = Math.floor(cur % 60);
      setCurrentTime(`${mins}:${secs < 10 ? '0' : ''}${secs}`);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current && audioRef.current.duration) {
      const dur = audioRef.current.duration;
      const mins = Math.floor(dur / 60);
      const secs = Math.floor(dur % 60);
      setDurationTime(`${mins}:${secs < 10 ? '0' : ''}${secs}`);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seekPercent = parseFloat(e.target.value);
    if (audioRef.current && audioRef.current.duration) {
      const newTime = (seekPercent / 100) * audioRef.current.duration;
      audioRef.current.currentTime = newTime;
      setProgress(seekPercent);
    }
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 p-4 md:p-12 pb-32">
      {/* Hidden HTML5 Audio Element */}
      <audio
        ref={audioRef}
        src={currentTrack.audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
      />

      {/* Header */}
      <header className="max-w-5xl mx-auto mb-10 text-center md:text-left border-b border-neutral-800 pb-6">
        <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Different Type Of Vibe
        </h1>
        <p className="text-neutral-400 text-sm md:text-base mt-2">
          Official Instrumental Catalog & Sync Licensing Engine
        </p>
      </header>

      {/* Catalog Table */}
      <section className="max-w-5xl mx-auto bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl">
        <div className="p-6 border-b border-neutral-800 flex justify-between items-center">
          <h2 className="text-xl font-bold tracking-wide">Featured Tracks</h2>
          <span className="text-xs px-3 py-1 bg-purple-950 text-purple-300 border border-purple-800 rounded-full font-mono">
            {loading ? 'LOADING...' : `${tracks.length} BEATS AVAILABLE`}
          </span>
        </div>

        <div className="divide-y divide-neutral-800/60">
          {tracks.map((track) => {
            const isSelected = track.id === currentTrack.id;
            return (
              <div
                key={track.id}
                className={`flex flex-col md:flex-row items-start md:items-center justify-between p-4 md:px-6 transition-colors ${
                  isSelected ? 'bg-neutral-800/50' : 'hover:bg-neutral-800/30'
                }`}
              >
                {/* Track Info & Play Button */}
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                  <button
                    onClick={() => togglePlayPause(track)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-transform active:scale-95 ${
                      isSelected && isPlaying
                        ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/40'
                        : 'bg-neutral-800 hover:bg-neutral-700 text-neutral-200'
                    }`}
                  >
                    {isSelected && isPlaying ? '⏸' : '▶'}
                  </button>
                  <div>
                    <h3 className="font-semibold text-lg text-white">
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

                {/* License Buttons */}
                <div className="flex items-center space-x-2 w-full md:w-auto justify-end">
                  <button className="px-3 py-1.5 text-xs bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-lg text-neutral-300 transition">
                    MP3 {track.priceMp3}
                  </button>
                  <button className="px-3 py-1.5 text-xs bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-lg text-neutral-300 transition">
                    WAV {track.priceWav}
                  </button>
                  <button className="px-3 py-1.5 text-xs bg-purple-600 hover:bg-purple-500 font-medium rounded-lg text-white shadow-md transition">
                    STEMS {track.priceStems}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Persistent Bottom Sticky Player */}
      <div className="fixed bottom-0 left-0 right-0 bg-neutral-900/95 backdrop-blur-md border-t border-neutral-800 p-4 shadow-2xl z-50">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Currently Playing Track Meta */}
          <div className="flex items-center space-x-4 w-full md:w-1/4">
            <div className="w-10 h-10 bg-purple-900/50 border border-purple-700/50 rounded-lg flex items-center justify-center font-bold text-purple-300">
              🎵
            </div>
            <div className="truncate">
              <p className="text-sm font-semibold truncate text-white">
                {currentTrack.title}
              </p>
              <p className="text-xs text-neutral-400">
                {currentTrack.bpm} BPM | {currentTrack.key}
              </p>
            </div>
          </div>

          {/* Controls & Scrubber */}
          <div className="flex flex-col items-center w-full md:w-2/4">
            <div className="flex items-center space-x-6 mb-2">
              <button
                onClick={() => togglePlayPause()}
                className="w-10 h-10 bg-purple-600 hover:bg-purple-500 rounded-full flex items-center justify-center text-white shadow-md active:scale-95 transition"
              >
                {isPlaying ? '⏸' : '▶'}
              </button>
            </div>
            <div className="flex items-center space-x-3 w-full text-xs text-neutral-400">
              <span>{currentTime}</span>
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={handleSeek}
                className="w-full accent-purple-500 h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer"
              />
              <span>{durationTime || currentTrack.duration}</span>
            </div>
          </div>

          {/* Volume Control */}
          <div className="hidden md:flex items-center justify-end space-x-2 w-1/4 text-neutral-400">
            <span className="text-xs">🔊</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="w-24 accent-purple-500 h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
      </div>
    </main>
  );
}const handleBuy = async (track: Track, licenseType: 'mp3' | 'wav' | 'stems') => {
  try {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        beatId: track.id,
        beatTitle: track.title,
        licenseType,
      }),
    });

    const data = await res.json();
    if (data.url) {
      window.location.href = data.url; // Redirect to Stripe Checkout
    }
  } catch (err) {
    console.error('Checkout error:', err);
  }
};<button
  onClick={() => handleBuy(track, 'mp3')}
  className="px-3 py-1.5 text-xs bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-lg text-neutral-300 transition"
>
  MP3 {track.priceMp3}
</button>
<button
  onClick={() => handleBuy(track, 'wav')}
  className="px-3 py-1.5 text-xs bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-lg text-neutral-300 transition"
>
  WAV {track.priceWav}
</button>
<button
  onClick={() => handleBuy(track, 'stems')}
  className="px-3 py-1.5 text-xs bg-purple-600 hover:bg-purple-500 font-medium rounded-lg text-white shadow-md transition"
>
  STEMS {track.priceStems}
</button>