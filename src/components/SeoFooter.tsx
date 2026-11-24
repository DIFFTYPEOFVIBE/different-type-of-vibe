import Link from "next/link";

const TOP_TYPE_BEATS = [
  { slug: "metro-boomin-type-beats", label: "Metro Boomin Beats for Sale (Dark 808 Trap)" },
  { slug: "j-cole-type-beats", label: "J. Cole Type Beats (Soulful Boom Bap)" },
  { slug: "travis-scott-type-beats", label: "Travis Scott Type Beats (Psychedelic 808s)" },
  { slug: "drake-type-beats", label: "Drake Type Beats (OVO R&B & Melodic Trap)" },
];

const TOP_GENRES = [
  { slug: "trap-beats", label: "Trap Beats for Sale (Buy Online)" },
  { slug: "boom-bap-beats", label: "Buy Boom Bap Beats (90s Chops)" },
  { slug: "hip-hop-beats", label: "Hip Hop Beats for Sale (Untagged)" },
  { slug: "rb-instrumentals", label: "R&B Instrumentals & Melodies" },
];

const LEGAL_LINKS = [
  { href: "/terms", label: "Terms of Service & License Agreement" },
  { href: "/refund-policy", label: "Digital Refund & Cancellation Policy" },
  { href: "/privacy", label: "Privacy & Cookie Policy" },
  { href: "/licensing-terms", label: "Licensing Tiers & Stream Caps" },
];

const INTERNATIONAL_HUBS = [
  { href: "/deals/us/atlanta-trap", label: "🇺🇸 Atlanta 808 Trap Deals" },
  { href: "/deals/uk/drill", label: "🇬🇧 UK Drill Beats (PRS Cleared)" },
  { href: "/deals/nigeria/paystack", label: "🇳🇬 Nigeria Paystack Beat Store" },
  { href: "/deals/germany/beats-kaufen", label: "🇩🇪 Beats Kaufen (GEMA-frei)" },
  { href: "/deals/france/instru-rap", label: "🇫🇷 Instru Rap Français (SACEM)" },
  { href: "/deals/toronto", label: "🇨🇦 Toronto Dark R&B (SOCAN)" },
  { href: "/deals/johannesburg", label: "🇿🇦 South Africa Amapiano (SAMRO)" },
  { href: "/deals/sydney", label: "🇦🇺 Sydney Drill & Hip-Hop (APRA)" },
  { href: "/deals/japan", label: "🇯🇵 Japan Lo-Fi & Beats (JASRAC)" },
  { href: "/deals/brazil", label: "🇧🇷 Brazil Trap & Drill (ECAD)" },
  { href: "/deals/mexico", label: "🇲🇽 Mexico Trap Latino (SACM)" },
  { href: "/deals/kenya", label: "🇰🇪 Kenya Gengetone (MCSK)" },
  { href: "/deals", label: "🌍 Global Currency & Deals Hub" },
];

export default function SeoFooter() {
  return (
    <footer className="w-full bg-zinc-950 border-t border-zinc-900 py-12 px-4 mt-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Column */}
        <div>
          <h3 className="text-white font-bold text-lg">Different Type of Vibe</h3>
          <p className="text-zinc-400 text-sm mt-2">
            Premium untagged hip-hop, trap, and boom bap instrumentals produced by Onzieb (ASCAP). Instant MP3, WAV, and STEMS licensing.
          </p>
        </div>

        {/* Type Beats Links */}
        <div>
          <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">
            Browse By Artist Vibe
          </h4>
          <ul className="space-y-2 text-sm">
            {TOP_TYPE_BEATS.map((artist) => (
              <li key={artist.slug}>
                <Link
                  href={`/vibe/${artist.slug}`}
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  {artist.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Genre Links */}
        <div>
          <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">
            Browse By Genre
          </h4>
          <ul className="space-y-2 text-sm">
            {TOP_GENRES.map((genre) => (
              <li key={genre.slug}>
                <Link
                  href={`/genre/${genre.slug}`}
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  {genre.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal & Protection Links */}
        <div>
          <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">
            Legal & Licensing Protection
          </h4>
          <ul className="space-y-2 text-sm">
            {LEGAL_LINKS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Global Regional & Country Deals Lattice (Topical Authority Network) */}
      <div className="container mx-auto mt-10 pt-6 border-t border-zinc-900">
        <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-4 text-center md:text-left">
          International Beat Store Hubs &amp; Regional Music Scenes
        </h4>
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
          {INTERNATIONAL_HUBS.map((hub) => (
            <Link
              key={hub.href}
              href={hub.href}
              className="text-xs text-zinc-400 hover:text-purple-300 bg-zinc-900/80 hover:bg-purple-950/60 border border-zinc-800 hover:border-purple-500/50 px-3 py-1.5 rounded-lg transition-all"
            >
              {hub.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="container mx-auto mt-8 pt-6 border-t border-zinc-900 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} Different Type of Vibe LLC • All Masters &amp; Compositions Registered with ASCAP (Onzieb). Content ID Registration by Non-Exclusive Licensees Strictly Prohibited.
      </div>
    </footer>
  );
}

