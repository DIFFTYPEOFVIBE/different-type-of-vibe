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
    ];
  },
};

export default nextConfig;