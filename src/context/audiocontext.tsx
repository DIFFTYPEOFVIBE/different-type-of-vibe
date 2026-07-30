// src/context/AudioContext.tsx
'use client';

import React, { createContext, useContext, useState, useRef } from 'react';

interface Beat {
  id: string;
  title: string;
  bpm: number;
  audioUrl: string;
}

interface AudioContextType {
  currentBeat: Beat | null;
  isPlaying: boolean;
  playBeat: (beat: Beat) => void;
  togglePlay: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [currentBeat, setCurrentBeat] = useState<Beat | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playBeat = (beat: Beat) => {
    if (currentBeat?.id === beat.id) {
      togglePlay();
      return;
    }
    setCurrentBeat(beat);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <AudioContext.Provider value={{ currentBeat, isPlaying, playBeat, togglePlay }}>
      {children}
      {currentBeat && (
        <audio
          ref={audioRef}
          src={currentBeat.audioUrl}
          autoPlay
          onEnded={() => setIsPlaying(false)}
        />
      )}
    </AudioContext.Provider>
  );
}

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) throw new Error('useAudio must be used within AudioProvider');
  return context;
};