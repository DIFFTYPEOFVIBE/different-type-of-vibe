// src/components/LicenseModal.tsx
'use client';

import { useState } from 'react';

export interface LicenseTier {
  id: string;
  name: string;
  price: number;
  features: string[];
}

const LICENSES: LicenseTier[] = [
  {
    id: 'mp3',
    name: 'MP3 Lease',
    price: 29.99,
    features: ['Tagged MP3 File', 'Up to 50,000 Streams', 'Non-Exclusive'],
  },
  {
    id: 'wav',
    name: 'WAV Lease',
    price: 49.99,
    features: ['Untagged WAV + MP3', 'Up to 100,000 Streams', 'Non-Exclusive'],
  },
  {
    id: 'stems',
    name: 'Trackout Stems',
    price: 99.99,
    features: ['Separated Track Stems (ZIP)', 'Up to 500,000 Streams', 'Non-Exclusive'],
  },
];

interface LicenseModalProps {
  beat: { id: string; title: string };
  isOpen: boolean;
  onClose: () => void;
}

export default function LicenseModal({ beat, isOpen, onClose }: LicenseModalProps) {
  const [loading, setLoading] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCheckout = async (license: LicenseTier) => {
    setLoading(license.id);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          beatId: beat.id,
          beatTitle: beat.title,
          licenseType: license.id,
          priceAmount: Math.round(license.price * 100), // Convert to cents for Stripe
        }),
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      console.error('Checkout error:', err);
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
      <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl max-w-lg w-full space-y-4">
        <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
          <h2 className="text-xl font-bold text-white">Select License: {beat.title}</h2>
          <button onClick={onClose} className="text-zinc-400 hover:text-white">✕</button>
        </div>

        <div className="space-y-3">
          {LICENSES.map((lic) => (
            <div
              key={lic.id}
              className="p-4 bg-zinc-800/50 border border-zinc-700/50 rounded-lg flex items-center justify-between hover:border-emerald-500/50 transition"
            >
              <div>
                <h3 className="font-bold text-white">{lic.name}</h3>
                <ul className="text-xs text-zinc-400 mt-1 space-y-0.5">
                  {lic.features.map((feat, i) => (
                    <li key={i}>• {feat}</li>
                  ))}
                </ul>
              </div>

              <button
                disabled={loading === lic.id}
                onClick={() => handleCheckout(lic)}
                className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-sm rounded-lg transition"
              >
                {loading === lic.id ? 'Loading...' : `$${lic.price}`}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}