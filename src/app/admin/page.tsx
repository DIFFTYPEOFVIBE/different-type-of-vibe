'use client';

import React, { useState } from 'react';
import AdminDashboard from '@/components/admindashboard';

interface Track {
  id: string;
  title: string;
  bpm: number;
  key: string;
  priceMp3: number;
  priceWav: number;
  priceExclusive: number;
}

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<'upload' | 'analytics'>('upload');
  
  // Form State
  const [title, setTitle] = useState('');
  const [bpm, setBpm] = useState('');
  const [key, setKey] = useState('');
  const [priceMp3, setPriceMp3] = useState('29.99');
  const [priceWav, setPriceWav] = useState('49.99');
  const [priceExclusive, setPriceExclusive] = useState('299.99');

  // Sample catalog state
  const [catalog, setCatalog] = useState<Track[]>([
    {
      id: '1',
      title: 'Sample Beat',
      bpm: 140,
      key: 'C Minor',
      priceMp3: 29.99,
      priceWav: 49.99,
      priceExclusive: 299.99,
    },
  ]);

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;

    const newTrack: Track = {
      id: Date.now().toString(),
      title,
      bpm: Number(bpm) || 120,
      key: key || 'C Major',
      priceMp3: Number(priceMp3) || 29.99,
      priceWav: Number(priceWav) || 49.99,
      priceExclusive: Number(priceExclusive) || 299.99,
    };

    setCatalog([newTrack, ...catalog]);
    setTitle('');
    setBpm('');
    setKey('');
    alert('Beat uploaded successfully!');
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Header & Navigation */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-800 pb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Admin Portal</h1>
            <p className="text-neutral-400 text-sm mt-1">Manage catalog uploads and store metrics.</p>
          </div>
          <div className="flex bg-neutral-900 p-1 rounded-lg border border-neutral-800">
            <button
              onClick={() => setActiveTab('upload')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition ${
                activeTab === 'upload'
                  ? 'bg-neutral-800 text-white'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Upload & Catalog
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition ${
                activeTab === 'analytics'
                  ? 'bg-neutral-800 text-white'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Analytics
            </button>
          </div>
        </div>

        {/* Dynamic View Rendering */}
        {activeTab === 'analytics' ? (
          <AdminDashboard />
        ) : (
          <div className="space-y-10">
            
            {/* Beat Upload Form */}
            <form onSubmit={handleUpload} className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-xl space-y-6">
              <h2 className="text-xl font-semibold border-b border-neutral-800 pb-3">Upload New Beat</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-400 mb-1">Track Title</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Midnight Vibe"
                    className="w-full bg-neutral-800 border border-neutral-700 rounded p-2.5 text-sm text-white focus:outline-none focus:border-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-400 mb-1">BPM</label>
                  <input
                    type="number"
                    value={bpm}
                    onChange={(e) => setBpm(e.target.value)}
                    placeholder="140"
                    className="w-full bg-neutral-800 border border-neutral-700 rounded p-2.5 text-sm text-white focus:outline-none focus:border-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-400 mb-1">Key</label>
                  <input
                    type="text"
                    value={key}
                    onChange={(e) => setKey(e.target.value)}
                    placeholder="C Minor"
                    className="w-full bg-neutral-800 border border-neutral-700 rounded p-2.5 text-sm text-white focus:outline-none focus:border-white"
                  />
                </div>
              </div>

              {/* Pricing Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-400 mb-1">MP3 Lease ($)</label>
                  <input
                    type="number"
                    value={priceMp3}
                    onChange={(e) => setPriceMp3(e.target.value)}
                    className="w-full bg-neutral-800 border border-neutral-700 rounded p-2.5 text-sm text-white focus:outline-none focus:border-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-400 mb-1">WAV Lease ($)</label>
                  <input
                    type="number"
                    value={priceWav}
                    onChange={(e) => setPriceWav(e.target.value)}
                    className="w-full bg-neutral-800 border border-neutral-700 rounded p-2.5 text-sm text-white focus:outline-none focus:border-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-400 mb-1">Exclusive ($)</label>
                  <input
                    type="number"
                    value={priceExclusive}
                    onChange={(e) => setPriceExclusive(e.target.value)}
                    className="w-full bg-neutral-800 border border-neutral-700 rounded p-2.5 text-sm text-white focus:outline-none focus:border-white"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-white text-black font-semibold rounded-lg hover:bg-neutral-200 transition"
              >
                Publish Beat
              </button>
            </form>

            {/* Catalog List */}
            <div className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-xl space-y-4">
              <h2 className="text-xl font-semibold border-b border-neutral-800 pb-3">Active Catalog</h2>
              <div className="divide-y divide-neutral-800">
                {catalog.map((track) => (
                  <div key={track.id} className="py-3 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="font-medium text-white">{track.title}</h3>
                      <p className="text-xs text-neutral-400 mt-0.5">
                        {track.bpm} BPM • Key: {track.key}
                      </p>
                    </div>

                    {/* Fixed Pricing Display Badges */}
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1.5 text-xs bg-neutral-800 border border-neutral-700 rounded text-neutral-300">
                        MP3: ${track.priceMp3}
                      </span>
                      <span className="px-3 py-1.5 text-xs bg-neutral-800 border border-neutral-700 rounded text-neutral-300">
                        WAV: ${track.priceWav}
                      </span>
                      <span className="px-3 py-1.5 text-xs bg-neutral-800 border border-neutral-700 rounded text-neutral-300">
                        EXC: ${track.priceExclusive}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}