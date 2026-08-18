// src/lib/seo/storeSchema.ts

export function generateStoreSchema() {
  const baseUrl = "https://differenttypeofvibe.com";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        "name": "Different Type of Vibe",
        "url": baseUrl,
        "logo": `${baseUrl}/logo.png`, // Path to your logo image
        "founder": {
          "@type": "Person",
          "name": "Onzieb",
          "jobTitle": "Music Producer & Composer",
        },
        "sameAs": [
          "https://open.spotify.com", // Add your Spotify artist link
          "https://instagram.com",     // Add your Instagram handle link
          "https://youtube.com",       // Add your YouTube channel link
        ],
      },
      {
        "@type": "MusicStore",
        "@id": `${baseUrl}/#store`,
        "name": "Different Type of Vibe Beat Store",
        "url": baseUrl,
        "description": "Premium untagged hip-hop, trap, and boom bap beats produced by Onzieb. Instant MP3, WAV, and STEMS licensing.",
        "publisher": {
          "@id": `${baseUrl}/#organization`,
        },
        "currenciesAccepted": "USD",
        "paymentAccepted": "Credit Card, Stripe",
        "priceRange": "$$",
      },
    ],
  };
}