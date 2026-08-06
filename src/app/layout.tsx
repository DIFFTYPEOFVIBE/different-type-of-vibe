import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://different-type-of-vibe-v2.vercel.app"),
  title: {
    default: "Different Type of Vibe | Instrumental Beat Catalog by Onzieb",
    template: "%s | Different Type of Vibe",
  },
  description:
    "Explore premium Boom Bap, Lofi, and Melodic Hip-Hop instrumental beats produced by Onzieb. License untagged MP3, WAV, and STEMS for your next project.",

  // SEO Keywords Array
  keywords: [
    "Onzieb",
    "Different Type of Vibe",
    "Beat Store",
    "Hip Hop Beats",
    "Boom Bap Instrumentals",
    "Lofi Beats",
    "Melodic Hip Hop",
    "Beat Licensing",
    "Buy Beats Online",
    "Untagged Instrumentals",
    "Level Up Beat",
    "Sip of Me",
    "Badin M 2",
    "Sync Licensing",
    "Music Producer",
  ],

  authors: [{ name: "Onzieb", url: "https://different-type-of-vibe-v2.vercel.app" }],
  creator: "Onzieb",
  publisher: "Different Type of Vibe LLC",

  // Open Graph Preview Card Settings
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://different-type-of-vibe-v2.vercel.app",
    siteName: "Different Type of Vibe",
    title: "Different Type of Vibe | Premium Beats & Instrumentals by Onzieb",
    description:
      "Instant MP3, WAV, and STEMS licensing for independent artists. Stream top tracks like Level Up, Sip of Me, and Badin M 2.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Different Type of Vibe - Official Beat Store Preview",
      },
    ],
  },

  // Twitter / X Card Settings
  twitter: {
    card: "summary_large_image",
    title: "Different Type of Vibe | Premium Beats by Onzieb",
    description:
      "Instant beat licensing for Boom Bap, Lofi, and Hip Hop artists. Stream and license untagged instrumentals now.",
    images: ["/og-image.png"],
  },

  // Search Engine Indexing Instructions
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#0d0f12] text-white min-h-screen antialiased selection:bg-purple-600 selection:text-white`}>
        <div className="relative min-h-screen w-full purple-gradient-bg">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}