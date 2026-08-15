import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://differenttypeofvibe.com"),
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

  authors: [{ name: "Onzieb", url: "https://differenttypeofvibe.com" }],
  creator: "Onzieb",
  publisher: "Different Type of Vibe LLC",

  // Open Graph Preview Card Settings
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://differenttypeofvibe.com",
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
      <head>
        {/* Google Ads Tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-985653416"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-985653416');
          `}
        </Script>

        {/* Google Tag Manager Script */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-K9N3X2P');
            `,
          }}
        />

        {/* Meta (Facebook/Instagram) Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'YOUR_PIXEL_ID');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body
        className={`${inter.className} bg-[#0d0f12] text-white min-h-screen antialiased selection:bg-purple-600 selection:text-white`}
      >
        {/* GTM Noscript Fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K9N3X2P"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <div className="relative min-h-screen w-full purple-gradient-bg">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}