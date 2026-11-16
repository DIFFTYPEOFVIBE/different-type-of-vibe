import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  skipTrailingSlashRedirect: false,
  trailingSlash: false, // Enforces standard clean URLs (no trailing slash)
  experimental: {
    webpackBuildWorker: false,
  },
  async rewrites() {
    return [
      {
        source: "/api/v1/webhooks/stripe",
        destination: "/api/webhooks/stripe",
      },
    ];
  },
  async redirects() {
    return [
      // 1. Force www canonical domain (Permanent 301 Redirect for Link Equity & PageRank Consolidation)
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "differenttypeofvibe.com",
          },
        ],
        destination: "https://www.differenttypeofvibe.com/:path*",
        permanent: true,
      },
      // 2. Free pack instant download
      {
        source: "/downloads/free-pack-01",
        destination: "/Your_3_Free_Tagged_Beats.zip",
        permanent: false,
      },
      // 2b. BeatStars spelling alias ('s' vs 'z' canonicalization)
      {
        source: "/beatstars-alternative",
        destination: "/beatstarz-alternative",
        permanent: true,
      },
      {
        source: "/beatstars",
        destination: "/beatstarz-alternative",
        permanent: true,
      },
      // 3. Consolidate competing /beats/type-beat/ URLs to canonical /vibe/ hubs (PageRank Transfer)
      {
        source: "/beats/type-beat/drake",
        destination: "/vibe/drake-type-beats",
        permanent: true,
      },
      {
        source: "/beats/type-beat/j-cole",
        destination: "/vibe/j-cole-type-beats",
        permanent: true,
      },
      {
        source: "/beats/type-beat/metro-boomin",
        destination: "/vibe/metro-boomin-type-beats",
        permanent: true,
      },
      {
        source: "/beats/type-beat/travis-scott",
        destination: "/vibe/travis-scott-type-beats",
        permanent: true,
      },
      {
        source: "/beats/type-beat/future",
        destination: "/vibe/future-type-beats",
        permanent: true,
      },
      {
        source: "/beats/type-beat/playboi-carti",
        destination: "/vibe/playboi-carti-type-beats",
        permanent: true,
      },
      {
        source: "/beats/type-beat/21-savage",
        destination: "/vibe/21-savage-type-beats",
        permanent: true,
      },
      {
        source: "/beats/type-beat/gunna",
        destination: "/vibe/gunna-type-beats",
        permanent: true,
      },
      {
        source: "/beats/type-beat/lil-baby",
        destination: "/vibe/lil-baby-type-beats",
        permanent: true,
      },
      {
        source: "/beats/type-beat/don-toliver",
        destination: "/vibe/don-toliver-type-beats",
        permanent: true,
      },
      {
        source: "/beats/type-beat/sza",
        destination: "/vibe/sza-type-beats",
        permanent: true,
      },
      {
        source: "/beats/type-beat/bryson-tiller",
        destination: "/vibe/bryson-tiller-type-beats",
        permanent: true,
      },
      {
        source: "/beats/type-beat/mf-doom",
        destination: "/vibe/mf-doom-type-beats",
        permanent: true,
      },
      {
        source: "/beats/type-beat/joey-badass",
        destination: "/vibe/joey-badass-type-beats",
        permanent: true,
      },
      {
        source: "/beats/type-beat/:slug*-type-beats",
        destination: "/vibe/:slug*-type-beats",
        permanent: true,
      },
      {
        source: "/beats/type-beat/:slug",
        destination: "/vibe/:slug-type-beats",
        permanent: true,
      },
      // 4. Consolidate competing /beats/genre/ URLs to canonical /genre/ hubs (PageRank Transfer)
      {
        source: "/beats/genre/trap",
        destination: "/genre/trap-beats",
        permanent: true,
      },
      {
        source: "/beats/genre/boom-bap",
        destination: "/genre/boom-bap-beats",
        permanent: true,
      },
      {
        source: "/beats/genre/rnb",
        destination: "/genre/rb-instrumentals",
        permanent: true,
      },
      {
        source: "/beats/genre/rb",
        destination: "/genre/rb-instrumentals",
        permanent: true,
      },
      {
        source: "/beats/genre/hip-hop",
        destination: "/genre/hip-hop-beats",
        permanent: true,
      },
      {
        source: "/beats/genre/drill",
        destination: "/genre/drill-beats",
        permanent: true,
      },
      {
        source: "/beats/genre/lofi",
        destination: "/genre/lofi-hip-hop-beats",
        permanent: true,
      },
      {
        source: "/beats/genre/:slug*-beats",
        destination: "/genre/:slug*-beats",
        permanent: true,
      },
      {
        source: "/beats/genre/:slug",
        destination: "/genre/:slug-beats",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
