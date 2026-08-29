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
  async redirects() {
    return [
      {
        source: "/downloads/free-pack-01",
        destination: "/Your_3_Free_Tagged_Beats.zip",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;