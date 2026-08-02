import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <head>
        {/* Fail-safe Inline Theme Injection */}
        <style>{`
          html, body {
            background-color: #0d0f12 !important;
            background: radial-gradient(circle at top center, #2e1065 0%, #1a102f 40%, #0d0f12 90%) !important;
            color: #ffffff !important;
            margin: 0;
            padding: 0;
            min-height: 100vh;
            font-family: system-ui, -apple-system, sans-serif;
          }
        `}</style>
      </head>
      <body>
        <div className="min-h-screen w-full">
          {children}
        </div>
      </body>
    </html>
  );
}