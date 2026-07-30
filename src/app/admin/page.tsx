// src/app/admin/page.tsx
'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');

  // Form states
  const [title, setTitle] = useState('');
  const [bpm, setBpm] = useState(120);
  const [genre, setGenre] = useState('Trap / Hip-Hop');
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [mp3Price, setMp3Price] = useState(29.99);
  const [wavPrice, setWavPrice] = useState(49.99);
  const [stemsPrice, setStemsPrice] = useState(149.99);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Password verification
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Compare password against public environment variable
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('❌ Incorrect admin password.');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!audioFile) {
      setMessage('❌ Please select an audio file to upload.');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      // 1. Upload audio file to Supabase Storage
      const fileExt = audioFile.name.split('.').pop();
      const fileName = `${Date.now()}_${title.replace(/[^a-zA-Z0-9]/g, '_')}.${fileExt}`;
      const filePath = `previews/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('beats')
        .upload(filePath, audioFile);

      if (uploadError) throw uploadError;

      // 2. Get Public Audio URL
      const { data: urlData } = supabase.storage.from('beats').getPublicUrl(filePath);
      const publicAudioUrl = urlData.publicUrl;

      // 3. Save beat in Supabase database
      const { error: dbError } = await supabase.from('beats').insert([
        {
          title,
          bpm: Number(bpm),
          genre,
          audio_url: publicAudioUrl,
          mp3_price: Number(mp3Price),
          wav_price: Number(wavPrice),
          stems_price: Number(stemsPrice),
        },
      ]);

      if (dbError) throw dbError;

      setMessage('✅ Beat uploaded & published successfully!');
      setTitle('');
      setAudioFile(null);
    } catch (err: any) {
      setMessage(`❌ Upload failed: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  // 🔒 Login Gate Screen
  if (!isAuthenticated) {
    return (
      <main className="max-w-md mx-auto mt-20 p-6 bg-zinc-900 border border-zinc-800 rounded-xl text-white">
        <h1 className="text-2xl font-bold mb-2">Admin Access</h1>
        <p className="text-zinc-400 text-sm mb-6">Enter admin password to manage beats and sales.</p>

        {authError && <p className="text-xs text-red-400 mb-4">{authError}</p>}

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="password"
            placeholder="Admin Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-emerald-500"
          />
          <button
            type="submit"
            className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-lg transition"
          >
            Unlock Admin Panel
          </button>
        </form>
      </main>
    );
  }

  // 🔓 Authenticated Uploader Interface
  return (
    <main className="max-w-2xl mx-auto p-6 text-white space-y-6">
      <div className="flex justify-between items-center border-b border-zinc-800 pb-4">
        <div>
          <h1 className="text-3xl font-bold">Admin Panel: Upload Beat</h1>
          <p className="text-zinc-400 text-sm mt-1">Upload MP3/WAV files directly to Supabase Storage.</p>
        </div>
        <button
          onClick={() => setIsAuthenticated(false)}
          className="text-xs px-3 py-1 bg-zinc-800 hover:bg-zinc-700 rounded text-zinc-400"
        >
          Lock / Logout
        </button>
      </div>

      {message && (
        <div className="p-4 bg-zinc-800 border border-zinc-700 rounded-lg text-sm">{message}</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 bg-zinc-900 border border-zinc-800 p-6 rounded-xl">
        <div>
          <label className="block text-xs font-semibold text-zinc-400 mb-1">Beat Title</label>
          <input
            type="text"
            required
            placeholder="e.g. Level Up - Travis Scott Type Beat"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-emerald-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-zinc-400 mb-1">BPM</label>
            <input
              type="number"
              required
              value={bpm}
              onChange={(e) => setBpm(Number(e.target.value))}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-400 mb-1">Genre</label>
            <input
              type="text"
              required
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-emerald-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-zinc-400 mb-1">Audio File (.mp3 or .wav)</label>
          <input
            type="file"
            accept="audio/*"
            required
            onChange={(e) => setAudioFile(e.target.files?.[0] || null)}
            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-emerald-500 file:text-black hover:file:bg-emerald-400"
          />
        </div>

        <div className="grid grid-cols-3 gap-3 pt-2">
          <div>
            <label className="block text-xs font-semibold text-zinc-400 mb-1">MP3 Price ($)</label>
            <input
              type="number"
              step="0.01"
              value={mp3Price}
              onChange={(e) => setMp3Price(Number(e.target.value))}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-400 mb-1">WAV Price ($)</label>
            <input
              type="number"
              step="0.01"
              value={wavPrice}
              onChange={(e) => setWavPrice(Number(e.target.value))}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-400 mb-1">STEMS Price ($)</label>
            <input
              type="number"
              step="0.01"
              value={stemsPrice}
              onChange={(e) => setStemsPrice(Number(e.target.value))}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full mt-4 py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-lg transition"
        >
          {loading ? 'Uploading & Publishing...' : 'Upload & Publish Beat'}
        </button>
      </form>
    </main>
  );
}
// Inside src/app/admin/page.tsx
import AdminDashboard from '@/components/admindashboard';

// Add tab state near top of AdminPage component:
const [activeTab, setActiveTab] = useState<'upload' | 'analytics'>('analytics');

// Render tab buttons above form:
<div className="flex gap-2 border-b border-zinc-800 pb-3 mb-6">
  <button
    onClick={() => setActiveTab('analytics')}
    className={`px-4 py-2 rounded-lg text-xs font-bold transition ${
      activeTab === 'analytics'
        ? 'bg-emerald-500 text-black'
        : 'bg-zinc-800 text-zinc-400 hover:text-white'
    }`}
  >
    📊 Sales Analytics
  </button>
  <button
    onClick={() => setActiveTab('upload')}
    className={`px-4 py-2 rounded-lg text-xs font-bold transition ${
      activeTab === 'upload'
        ? 'bg-emerald-500 text-black'
        : 'bg-zinc-800 text-zinc-400 hover:text-white'
    }`}
  >
    🎵 Upload New Beat
  </button>
</div>

// Conditionally render views:
{activeTab === 'analytics' ? <AdminDashboard /> : null}