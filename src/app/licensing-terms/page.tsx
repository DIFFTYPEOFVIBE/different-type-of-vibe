import { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, FileText, CheckCircle2, Music, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Beat Licensing Terms & Contract Breakdown | Different Type of Vibe',
  description: 'Understand MP3 Lease, WAV Lease, Stems Trackout, and Unlimited Licenses. Clear commercial distribution rights, Spotify stream limits, and radio clearance.',
  alternates: {
    canonical: 'https://differenttypeofvibe.com/licensing-terms',
  },
};

const LICENSES = [
  {
    name: 'MP3 Standard Lease',
    price: '$24.99',
    deliverable: 'High Quality 320kbps MP3 (Untagged)',
    streams: 'Up to 100,000 Streams',
    performances: 'Non-Profit / Small Venues',
    radio: 'No Radio Airplay',
    video: '1 Music Video (Non-Monetized)',
    bestFor: 'Writing Sessions, Demos, Mixtapes',
  },
  {
    name: 'WAV Premium Lease',
    price: '$49.99',
    deliverable: '24-Bit Studio Master WAV + MP3',
    streams: 'Up to 500,000 Streams',
    performances: 'Commercial Performances Allowed',
    radio: '2 Radio Stations',
    video: '1 Commercial Music Video',
    bestFor: 'Spotify Singles, Apple Music, YouTube',
    highlight: true,
  },
  {
    name: 'STEMS Trackout License',
    price: '$99.99',
    deliverable: 'Full WAV Stems + Master WAV + MP3',
    streams: 'Up to 1,000,000 Streams',
    performances: 'Unlimited Shows & Touring',
    radio: '10 Radio Stations',
    video: 'Unlimited Music Videos',
    bestFor: 'Pro Studio Vocal Mixing & Mastering',
  },
  {
    name: 'Unlimited License',
    price: '$199.99',
    deliverable: 'Full WAV Stems + Master WAV + MP3',
    streams: 'UNLIMITED Audio Streams',
    performances: 'UNLIMITED Live Shows',
    radio: 'UNLIMITED Commercial Radio Airplay',
    video: 'UNLIMITED Commercial Music Videos',
    bestFor: 'Major Label Pitching, Radio Campaigns',
  },
];

export default function LicensingTermsPage() {
  return (
    <main className="container mx-auto px-4 py-12 min-h-screen max-w-6xl">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/40 border border-purple-500/30 text-purple-300 text-sm font-semibold mb-4">
          <ShieldCheck className="w-4 h-4 text-purple-400" />
          100% Royalty Free & Instant Legal Agreements
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Beat <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Licensing Terms & Rights</span>
        </h1>
        <p className="text-zinc-400 mt-4 text-lg max-w-2xl mx-auto">
          Every purchase comes with an official PDF license contract granting instant digital distribution rights.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {LICENSES.map((lic) => (
          <div key={lic.name} className={`bg-zinc-900/90 border rounded-2xl p-6 flex flex-col justify-between ${lic.highlight ? 'border-purple-500 shadow-purple-900/20 shadow-xl' : 'border-zinc-800'}`}>
            <div>
              <h2 className="text-xl font-bold text-white mb-1">{lic.name}</h2>
              <p className="text-2xl font-extrabold text-purple-400 mb-4">{lic.price}</p>
              <div className="space-y-3 text-xs text-zinc-300">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Deliverables:</strong> {lic.deliverable}</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Streams:</strong> {lic.streams}</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Performances:</strong> {lic.performances}</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Radio:</strong> {lic.radio}</span>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-800">
              <Link href="/#beats" className="block text-center bg-zinc-800 hover:bg-purple-600 text-white font-bold text-xs py-2.5 rounded-lg transition-colors">
                Select {lic.name}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
