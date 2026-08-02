import type { Metadata } from "next";
import "./globals.css";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export const metadata: Metadata = {
  metadataBase: new URL("https://different-type-of-vibe-v2.vercel.app"),
  title: "Different Type of Vibe | Instrumental Beat Catalog by Onzieb",
  description: "Explore premium Boom Bap, Lofi, and Melodic Hip-Hop instrumental beats produced by Onzieb.",
  openGraph: {
    title: "Different Type of Vibe | Premium Beats & Instrumentals by Onzieb",
    description: "Instant MP3, WAV, and STEMS licensing for independent artists.",
    url: "https://different-type-of-vibe-v2.vercel.app",
    siteName: "Different Type of Vibe",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Different Type of Vibe | Premium Beats by Onzieb",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0d0f12] text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}