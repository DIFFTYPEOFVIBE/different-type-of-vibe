import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  skipTrailingSlashRedirect: false,
  trailingSlash: false, // Enforces standard clean URLs (no trailing slash)
};

export default nextConfig;