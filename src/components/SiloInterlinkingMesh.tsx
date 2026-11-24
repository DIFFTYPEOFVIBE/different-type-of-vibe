import React from 'react';
import Link from 'next/link';
import { Music, Disc, Sparkles, Globe, Compass, ArrowRight } from 'lucide-react';

const GENRES = [
  { href: '/genre/trap-beats', name: 'Trap Beats', desc: 'Heavy 808s & Sliding Kicks' },
  { href: '/genre/boom-bap-beats', name: 'Boom Bap Beats', desc: '90s Soul & Vinyl Chops' },
  { href: '/genre/hip-hop-beats', name: 'Hip Hop Beats', desc: 'Golden Era & Modern Rap' },
  { href: '/genre/rb-instrumentals', name: 'R&B Instrumentals', desc: 'Smooth Melodies & Trap Soul' },
  { href: '/genre/drill-beats', name: 'Drill Beats', desc: 'UK & NY Sliding 808s' },
  { href: '/genre/lofi-hip-hop-beats', name: 'Lo-Fi Hip Hop', desc: 'Chill Study & Dusty Keys' },
  { href: '/genre/synthwave-instrumentals', name: 'Synthwave', desc: '80s Retro & Cyberpunk' },
];

const VIBES = [
  { href: '/vibe/metro-boomin-type-beats', name: 'Metro Boomin Beats', tag: 'Dark 808 Trap' },
  { href: '/vibe/j-cole-type-beats', name: 'J. Cole Type Beats', tag: 'Soulful Boom Bap' },
  { href: '/vibe/travis-scott-type-beats', name: 'Travis Scott Beats', tag: 'Psychedelic Trap' },
  { href: '/vibe/drake-type-beats', name: 'Drake Type Beats', tag: 'OVO Melodic R&B' },
  { href: '/vibe/future-type-beats', name: 'Future Type Beats', tag: 'Dark Atlanta Trap' },
  { href: '/vibe/playboi-carti-type-beats', name: 'Playboi Carti Beats', tag: 'Rage & Vamp' },
  { href: '/vibe/21-savage-type-beats', name: '21 Savage Type Beats', tag: 'Slaughterhouse' },
  { href: '/vibe/lil-baby-type-beats', name: 'Lil Baby Type Beats', tag: '4PF Piano Trap' },
];

const GUIDES = [
  { href: '/deals', name: 'Beat Deals & VIP Passes', desc: '$9.99/mo (5 WAVs/Mo)' },
  { href: '/free-downloads', name: '3 Free Untagged Beats', desc: 'Studio MP3 Pack' },
  { href: '/beatstarz-alternative', name: 'BeatStars 0% Fee Alternative', desc: 'Direct Storefront' },
  { href: '/licensing-terms', name: 'Licensing Terms & Contracts', desc: 'Full Royalty Clearance' },
  { href: '/blog/how-to-buy-beats-online', name: 'How to Buy Beats Online', desc: 'Artist Contract Guide' },
  { href: '/blog/vocal-mixing-guide-for-artists', name: 'Vocal Mixing Blueprint', desc: 'Studio Chain Setup' },
];

const HUBS = [
  { href: '/deals/united-states', name: '🇺🇸 United States', label: 'ASCAP/BMI' },
  { href: '/deals/united-kingdom', name: '🇬🇧 United Kingdom', label: 'PRS Cleared' },
  { href: '/deals/canada', name: '🇨🇦 Canada', label: 'SOCAN Cleared' },
  { href: '/deals/nigeria', name: '🇳🇬 Nigeria', label: 'Paystack Naira' },
  { href: '/deals/germany', name: '🇩🇪 Germany', label: 'GEMA-frei' },
  { href: '/deals/south-africa', name: '🇿🇦 South Africa', label: 'SAMRO Cleared' },
  { href: '/deals/france', name: '🇫🇷 France', label: 'SACEM' },
  { href: '/deals/australia', name: '🇦🇺 Australia', label: 'APRA AMCOS' },
];

export default function SiloInterlinkingMesh({ className = '' }: { className?: string }) {
  return (
    <section className={`my-14 bg-gradient-to-b from-zinc-950/90 via-zinc-900/60 to-zinc-950 border border-zinc-800/80 rounded-3xl p-6 md:p-8 shadow-2xl ${className}`}>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-zinc-800">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-2">
            <Compass className="w-3.5 h-3.5 text-purple-400" />
            <span>Topical Catalog Directory &amp; Hubs</span>
          </div>
          <h2 className="text-xl md:text-2xl font-black text-white tracking-tight">Explore Instrumental Catalogs &amp; Artist Styles</h2>
          <p className="text-zinc-400 text-xs md:text-sm mt-0.5">100% original compositions produced by Onzieb. Untagged MP3, 24-bit WAV, and STEM trackouts.</p>
        </div>
        <Link href="/links" className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-400 hover:text-purple-300 transition">
          <span>All Endpoints</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-purple-400 flex items-center gap-1.5"><Music className="w-3.5 h-3.5" /><span>Pillar Genres</span></h3>
          <div className="space-y-1.5">
            {GENRES.map((g) => (
              <Link key={g.href} href={g.href} className="group block p-2.5 rounded-xl bg-zinc-950/70 border border-zinc-800/80 hover:border-purple-500/60 hover:bg-zinc-900/80 transition">
                <div className="text-xs font-bold text-white group-hover:text-purple-300 transition">{g.name}</div>
                <div className="text-[10px] text-zinc-500 mt-0.5">{g.desc}</div>
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-pink-400 flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5" /><span>Artist Vibe Hubs</span></h3>
          <div className="space-y-1.5">
            {VIBES.map((v) => (
              <Link key={v.href} href={v.href} className="group block p-2.5 rounded-xl bg-zinc-950/70 border border-zinc-800/80 hover:border-pink-500/60 hover:bg-zinc-900/80 transition">
                <div className="text-xs font-bold text-white group-hover:text-pink-300 transition">{v.name}</div>
                <div className="text-[10px] text-zinc-500 mt-0.5">{v.tag}</div>
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5"><Disc className="w-3.5 h-3.5" /><span>Deals &amp; Guides</span></h3>
          <div className="space-y-1.5">
            {GUIDES.map((b) => (
              <Link key={b.href} href={b.href} className="group block p-2.5 rounded-xl bg-zinc-950/70 border border-zinc-800/80 hover:border-indigo-500/60 hover:bg-zinc-900/80 transition">
                <div className="text-xs font-bold text-white group-hover:text-indigo-300 transition">{b.name}</div>
                <div className="text-[10px] text-zinc-500 mt-0.5">{b.desc}</div>
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5"><Globe className="w-3.5 h-3.5" /><span>International Hubs</span></h3>
          <div className="grid grid-cols-1 gap-1.5">
            {HUBS.map((h) => (
              <Link key={h.href} href={h.href} className="group flex items-center justify-between p-2.5 rounded-xl bg-zinc-950/70 border border-zinc-800/80 hover:border-emerald-500/60 hover:bg-zinc-900/80 transition text-xs">
                <span className="font-semibold text-zinc-200 group-hover:text-emerald-300 transition">{h.name}</span>
                <span className="text-[10px] font-mono text-zinc-500 bg-zinc-900 px-1.5 py-0.5 rounded border border-zinc-800">{h.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
