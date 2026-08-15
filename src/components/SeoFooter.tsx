import Link from "next/link";

const TOP_TYPE_BEATS = [
  { slug: "drake", label: "Drake Type Beats" },
  { slug: "travis-scott", label: "Travis Scott Type Beats" },
  { slug: "metro-boomin", label: "Metro Boomin Type Beats" },
  { slug: "j-cole", label: "J. Cole Type Beats" },
];

const TOP_GENRES = [
  { slug: "trap", label: "Trap Beats" },
  { slug: "boom-bap", label: "Boom Bap Beats" },
  { slug: "r-and-b", label: "R&B Instrumentals" },
  { slug: "hip-hop", label: "Hip-Hop Beats" },
];

export default function SeoFooter() {
  return (
    <footer className="w-full bg-zinc-950 border-t border-zinc-900 py-12 px-4 mt-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand Column */}
        <div>
          <h3 className="text-white font-bold text-lg">Different Type of Vibe</h3>
          <p className="text-zinc-400 text-sm mt-2">
            Premium untagged hip-hop, trap, and boom bap instrumentals produced by Onzieb. Instant MP3, WAV, and STEMS licensing.
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
                  href={`/beats/type-beat/${artist.slug}`}
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
                  href={`/beats/genre/${genre.slug}`}
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  {genre.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>

      <div className="container mx-auto mt-8 pt-6 border-t border-zinc-900 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} Different Type of Vibe. All rights reserved.
      </div>
    </footer>
  );
}