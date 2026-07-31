'use client';
// Force Vercel rebuild - Free Beat Pack Opt-In Banner

import { useState } from 'react';

// Sample Beats Data
const BEATS = [
  { id: '1', title: 'Vibe Check', bpm: 140, key: 'C Minor', genre: 'Trap', price: '$29.99' },
  { id: '2', title: 'Midnight City', bpm: 128, key: 'F# Minor', genre: 'Melodic Hip Hop', price: '$29.99' },
  { id: '3', title: 'Harlem Nights', bpm: 95, key: 'A Minor', genre: 'Boom Bap', price: '$29.99' },
];

export default function Home() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [selectedLicense, setSelectedLicense] = useState<string | null>(null);

  const handleOptIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      const res = await fetch('/api/optin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white p-4 md:p-8 max-w-6xl mx-auto font-sans">
      {/* HEADER / BRANDING */}
      <header className="flex justify-between items-center py-6 mb-8 border-b border-slate-800">
        <div>
          <h1 className="text-2xl md:text-3xl font-black tracking-tight text-purple-400">
            DIFFERENT TYPE OF VIBE
          </h1>
          <p className="text-xs md:text-sm text-slate-400">Premium Beats & Sync Licensing Catalog</p>
        </div>
        <button 
          onClick={() => setSelectedLicense('MP3')}
          className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium px-4 py-2 rounded-lg border border-slate-700 transition"
        >
          License Terms
        </button>
      </header>

      {/* FREE BEAT PACK OPT-IN BANNER */}
      <section className="bg-gradient-to-r from-purple-900/50 via-slate-900 to-purple-950/40 border border-purple-500/30 rounded-2xl p-6 md:p-10 mb-12 text-center shadow-2xl relative overflow-hidden">
        <div className="relative z-10">
          <span className="bg-purple-500/20 text-purple-300 text-xs font-bold px-3 py-1 rounded-full border border-purple-500/30 uppercase tracking-widest inline-block mb-3">
            Free Download
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3 text-white">
            🔥 Grab 3 Free Tagged Beats
          </h2>
          <p className="text-slate-300 mb-6 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Join our artist list to get 3 tagged MP3s sent directly to your inbox for write-ups, recording demos, and practice.
          </p>

          {status === 'success' ? (
            <div className="bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 p-4 rounded-xl max-w-md mx-auto text-sm font-semibold">
              🎉 Success! Check your inbox for your 3 free beats download link.
            </div>
          ) : (
            <form onSubmit={handleOptIn} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="Enter your artist email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-slate-900/90 border border-slate-700 focus:border-purple-500 rounded-xl px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white font-bold px-6 py-3 rounded-xl text-sm transition shrink-0 shadow-lg shadow-purple-600/30"
              >
                {status === 'loading' ? 'Sending...' : 'Get Free Beats 🚀'}
              </button>
            </form>
          )}

          {status === 'error' && (
            <p className="text-red-400 text-xs mt-3">Something went wrong. Please try again.</p>
          )}
        </div>
      </section>

      {/* BEAT CATALOG PLAYER SECTION */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 text-slate-200">Latest Beats</h2>
        <div className="space-y-3">
          {BEATS.map((beat) => (
            <div 
              key={beat.id}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 p-4 rounded-xl transition gap-4"
            >
              <div className="flex items-center gap-4">
                <button className="w-10 h-10 bg-purple-600 hover:bg-purple-500 rounded-full flex items-center justify-center shrink-0 font-bold transition">
                  ▶
                </button>
                <div>
                  <h3 className="font-bold text-base text-white">{beat.title}</h3>
                  <p className="text-xs text-slate-400">
                    {beat.bpm} BPM • Key: {beat.key} • {beat.genre}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                <span className="text-xs font-semibold bg-slate-800 text-slate-300 px-3 py-1 rounded-md border border-slate-700">
                  {beat.price}
                </span>
                <button 
                  onClick={() => setSelectedLicense(beat.title)}
                  className="bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs px-4 py-2 rounded-lg transition"
                >
                  Buy License
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LICENSE TERMS MODAL */}
      {selectedLicense && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-lg w-full relative shadow-2xl">
            <h3 className="text-xl font-bold mb-2 text-white">License Terms & Rights</h3>
            <p className="text-xs text-purple-400 mb-4">Selecting terms for: {selectedLicense}</p>
            
            <div className="space-y-4 text-xs text-slate-300 mb-6">
              <div className="p-3 bg-slate-950/60 border border-slate-800 rounded-lg">
                <p className="font-bold text-purple-300 mb-1">🎵 MP3 Lease ($29.99)</p>
                <p>Untagged MP3 • 100,000 Streams • Non-Exclusive</p>
              </div>
              <div className="p-3 bg-slate-950/60 border border-slate-800 rounded-lg">
                <p className="font-bold text-purple-300 mb-1">🎧 WAV Lease ($49.99)</p>
                <p>24-bit WAV + MP3 • 500,000 Streams • Radio Rights</p>
              </div>
              <div className="p-3 bg-slate-950/60 border border-slate-800 rounded-lg">
                <p className="font-bold text-purple-300 mb-1">🎛️ STEMS Lease ($99.99)</p>
                <p>Full Trackouts + WAV + MP3 • Unlimited Streams • Performance Rights</p>
              </div>
            </div>

            <button 
              onClick={() => setSelectedLicense(null)}
              className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-2 rounded-xl text-xs transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}