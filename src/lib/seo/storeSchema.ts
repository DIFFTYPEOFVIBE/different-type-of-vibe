// src/lib/seo/storeSchema.ts

export function generateStoreSchema() {
  const baseUrl = "https://www.differenttypeofvibe.com";

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
        "@type": ["MusicStore", "LocalBusiness", "ProfessionalService"],
        "@id": `${baseUrl}/#store`,
        "name": "Different Type of Vibe - Onzieb Music Production Studio",
        "url": baseUrl,
        "image": `${baseUrl}/og-image.png`,
        "description": "Independent music production studio and commercial beat catalog produced by Onzieb in Indianapolis, IN. Untagged hip-hop, trap, and boom bap beats, vocal mixing, and instant commercial licensing.",
        "email": "music@mail.differenttypeofvibe.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Downtown Indianapolis",
          "addressLocality": "Indianapolis",
          "addressRegion": "IN",
          "postalCode": "46204",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "39.7684",
          "longitude": "-86.1581"
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Indianapolis",
            "sameAs": "https://en.wikipedia.org/wiki/Indianapolis"
          },
          {
            "@type": "State",
            "name": "Indiana"
          },
          {
            "@type": "Country",
            "name": "United States"
          }
        ],
        "publisher": {
          "@id": `${baseUrl}/#organization`,
        },
        "currenciesAccepted": "USD",
        "paymentAccepted": "Credit Card, Stripe, Apple Pay, Google Pay, Cash App",
        "priceRange": "$$",
      },
    ],
  };
}