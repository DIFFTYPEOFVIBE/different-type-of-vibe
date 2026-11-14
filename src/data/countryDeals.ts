export interface CountryFAQ {
  question: string;
  answer: string;
}

export interface SubClusterLink {
  name: string;
  slug: string;
  description: string;
}

export interface CountryDealInfo {
  name: string;
  flag: string;
  currency: string;
  currencyCode: string;
  gateways: string;
  pro: string;
  proFullName: string;
  proGuide: string;
  headline: string;
  description: string;
  popularGenres: string[];
  featuredBeatIds: string[];
  subClusters?: SubClusterLink[];
  faqs: CountryFAQ[];
}


export const COUNTRY_DATA: Record<string, CountryDealInfo> = {
  "us": {
    "name": "United States",
    "flag": "🇺🇸",
    "currency": "USD ($)",
    "currencyCode": "USD",
    "gateways": "Apple Pay, Google Pay, Cards",
    "pro": "ASCAP & BMI",
    "proFullName": "American Society of Composers, Authors and Publishers (ASCAP) & Broadcast Music, Inc. (BMI)",
    "proGuide": "Register with ASCAP or BMI for 100% writer and master streaming royalties. List Onzieb as music producer/composer per license.",
    "headline": "USA Beat Deals & VIP Subscription Pass",
    "description": "Untagged commercial WAV beat leases and stem trackouts for recording artists in United States. Cleared for ASCAP & BMI and instant download.",
    "popularGenres": [
      "Trap Beats",
      "Boom Bap Beats",
      "Melodic Hip Hop"
    ],
    "featuredBeatIds": [
      "1",
      "5",
      "6",
      "2"
    ],
    "subClusters": [
      {
        "name": "Atlanta Trap Beat Deals",
        "slug": "atlanta",
        "description": "Heavy 808s, rolling hi-hats, and melodic bounce."
      },
      {
        "name": "Los Angeles Melodic Deals",
        "slug": "los-angeles",
        "description": "West Coast melodic synths and rap instrumentals."
      },
      {
        "name": "Trap Deals Hub",
        "slug": "../trap-beat-deals",
        "description": "All dark, melodic, and hard trap leases."
      }
    ],
    "faqs": [
      {
        "question": "Can I distribute songs recorded with these beats to Spotify and Apple Music in United States?",
        "answer": "Yes. All WAV and MP3 leases include full commercial streaming rights for Spotify, Apple Music, YouTube, and local streaming platforms in United States and worldwide."
      },
      {
        "question": "How do I register my release with ASCAP & BMI?",
        "answer": "Register your track with ASCAP & BMI by listing your artist/writer information for your lyrics and designating Onzieb (Different Type of Vibe) as the music producer/composer as specified in your PDF license agreement."
      },
      {
        "question": "Are the beats 100% royalty-free and clear of uncleared samples?",
        "answer": "Yes. Every instrumental is an original composition produced by Onzieb. You will never encounter copyright takedowns, strikes, or sample clearance disputes."
      },
      {
        "question": "How quickly do I receive my untagged audio files?",
        "answer": "Immediately upon checkout, your untagged 24-bit WAV file, MP3 version, and countersigned legal PDF license agreement are delivered directly to your email."
      }
    ]
  },
  "ca": {
    "name": "Canada",
    "flag": "🇨🇦",
    "currency": "CAD ($)",
    "currencyCode": "CAD",
    "gateways": "Apple Pay, Google Pay, Cards",
    "pro": "SOCAN",
    "proFullName": "Society of Composers, Authors and Music Publishers of Canada (SOCAN)",
    "proGuide": "Register with SOCAN for Canadian streaming, radio airplay, and FACTOR grant eligibility. Keep 100% of your artist royalties.",
    "headline": "Canada Beat Deals & VIP Subscription Pass",
    "description": "Untagged commercial WAV beat leases and stem trackouts for recording artists in Canada. Cleared for SOCAN and instant download.",
    "popularGenres": [
      "Toronto Dark R&B",
      "Trap Beats",
      "Melodic Hip Hop"
    ],
    "featuredBeatIds": [
      "1",
      "5",
      "6",
      "2"
    ],
    "subClusters": [
      {
        "name": "Toronto Dark R&B Deals",
        "slug": "toronto",
        "description": "Atmospheric pads and late-night Canadian sounds."
      },
      {
        "name": "R&B Beats Collection",
        "slug": "../rb-beat-deals",
        "description": "Soulful and modern R&B instrumentals."
      }
    ],
    "faqs": [
      {
        "question": "Can I distribute songs recorded with these beats to Spotify and Apple Music in Canada?",
        "answer": "Yes. All WAV and MP3 leases include full commercial streaming rights for Spotify, Apple Music, YouTube, and local streaming platforms in Canada and worldwide."
      },
      {
        "question": "How do I register my release with SOCAN?",
        "answer": "Register your track with SOCAN by listing your artist/writer information for your lyrics and designating Onzieb (Different Type of Vibe) as the music producer/composer as specified in your PDF license agreement."
      },
      {
        "question": "Are the beats 100% royalty-free and clear of uncleared samples?",
        "answer": "Yes. Every instrumental is an original composition produced by Onzieb. You will never encounter copyright takedowns, strikes, or sample clearance disputes."
      },
      {
        "question": "How quickly do I receive my untagged audio files?",
        "answer": "Immediately upon checkout, your untagged 24-bit WAV file, MP3 version, and countersigned legal PDF license agreement are delivered directly to your email."
      }
    ]
  },
  "gb": {
    "name": "United Kingdom",
    "flag": "🇬🇧",
    "currency": "GBP (£)",
    "currencyCode": "GBP",
    "gateways": "Apple Pay, Cards",
    "pro": "PRS for Music",
    "proFullName": "Performing Right Society (PRS for Music) & Phonographic Performance Limited (PPL)",
    "proGuide": "Register with PRS for Music & PPL in the UK. Fully cleared for BBC Radio 1Xtra, Spotify UK, and UK commercial licensing.",
    "headline": "UK Beat Deals & VIP Subscription Pass",
    "description": "Untagged commercial WAV beat leases and stem trackouts for recording artists in United Kingdom. Cleared for PRS for Music and instant download.",
    "popularGenres": [
      "UK Drill",
      "Grime Instrumentals",
      "Trap Beats"
    ],
    "featuredBeatIds": [
      "1",
      "5",
      "6",
      "2"
    ],
    "subClusters": [
      {
        "name": "London Drill & Grime Deals",
        "slug": "london",
        "description": "Signature London drill sliding 808s and raw cadence."
      },
      {
        "name": "Drill Beat Deals Hub",
        "slug": "../drill-beat-deals",
        "description": "High-octane drill instrumentals with sliding bass."
      }
    ],
    "faqs": [
      {
        "question": "Can I distribute songs recorded with these beats to Spotify and Apple Music in United Kingdom?",
        "answer": "Yes. All WAV and MP3 leases include full commercial streaming rights for Spotify, Apple Music, YouTube, and local streaming platforms in United Kingdom and worldwide."
      },
      {
        "question": "How do I register my release with PRS for Music?",
        "answer": "Register your track with PRS for Music by listing your artist/writer information for your lyrics and designating Onzieb (Different Type of Vibe) as the music producer/composer as specified in your PDF license agreement."
      },
      {
        "question": "Are the beats 100% royalty-free and clear of uncleared samples?",
        "answer": "Yes. Every instrumental is an original composition produced by Onzieb. You will never encounter copyright takedowns, strikes, or sample clearance disputes."
      },
      {
        "question": "How quickly do I receive my untagged audio files?",
        "answer": "Immediately upon checkout, your untagged 24-bit WAV file, MP3 version, and countersigned legal PDF license agreement are delivered directly to your email."
      }
    ]
  },
  "ie": {
    "name": "Ireland",
    "flag": "🇮🇪",
    "currency": "EUR (€)",
    "currencyCode": "EUR",
    "gateways": "Apple Pay, Cards",
    "pro": "IMRO",
    "proFullName": "Irish Recorded Music Organisation (IMRO)",
    "proGuide": "Register with IMRO for RTÉ radio airplay and worldwide digital streaming royalties.",
    "headline": "Ireland Beat Deals & VIP Subscription Pass",
    "description": "Untagged commercial WAV beat leases and stem trackouts for recording artists in Ireland. Cleared for IMRO and instant download.",
    "popularGenres": [
      "Trap Beats",
      "Hip-Hop Beats",
      "Melodic Beats"
    ],
    "featuredBeatIds": [
      "1",
      "5",
      "6",
      "2"
    ],
    "subClusters": [],
    "faqs": [
      {
        "question": "Can I distribute songs recorded with these beats to Spotify and Apple Music in Ireland?",
        "answer": "Yes. All WAV and MP3 leases include full commercial streaming rights for Spotify, Apple Music, YouTube, and local streaming platforms in Ireland and worldwide."
      },
      {
        "question": "How do I register my release with IMRO?",
        "answer": "Register your track with IMRO by listing your artist/writer information for your lyrics and designating Onzieb (Different Type of Vibe) as the music producer/composer as specified in your PDF license agreement."
      },
      {
        "question": "Are the beats 100% royalty-free and clear of uncleared samples?",
        "answer": "Yes. Every instrumental is an original composition produced by Onzieb. You will never encounter copyright takedowns, strikes, or sample clearance disputes."
      },
      {
        "question": "How quickly do I receive my untagged audio files?",
        "answer": "Immediately upon checkout, your untagged 24-bit WAV file, MP3 version, and countersigned legal PDF license agreement are delivered directly to your email."
      }
    ]
  },
  "de": {
    "name": "Germany",
    "flag": "🇩🇪",
    "currency": "EUR (€)",
    "currencyCode": "EUR",
    "gateways": "Sofort, Giropay, Cards",
    "pro": "GEMA",
    "proFullName": "Gesellschaft für musikalische Aufführungs- und mechanische Vervielfältigungsrechte (GEMA)",
    "proGuide": "100% GEMA-konform. Alle Beats sind Originalkompositionen ohne ungeklärte Samples.",
    "headline": "Deutschland Beats Kaufen & VIP Pass Deals",
    "description": "Untagged commercial WAV beat leases and stem trackouts for recording artists in Germany. Cleared for GEMA and instant download.",
    "popularGenres": [
      "German Trap",
      "Boom Bap Beats",
      "Dark Melodic"
    ],
    "featuredBeatIds": [
      "1",
      "5",
      "6",
      "2"
    ],
    "subClusters": [
      {
        "name": "Berlin Hip-Hop Beats",
        "slug": "berlin",
        "description": "Underground Boom Bap und aggressiver Trap für Berlin."
      }
    ],
    "faqs": [
      {
        "question": "Can I distribute songs recorded with these beats to Spotify and Apple Music in Germany?",
        "answer": "Yes. All WAV and MP3 leases include full commercial streaming rights for Spotify, Apple Music, YouTube, and local streaming platforms in Germany and worldwide."
      },
      {
        "question": "How do I register my release with GEMA?",
        "answer": "Register your track with GEMA by listing your artist/writer information for your lyrics and designating Onzieb (Different Type of Vibe) as the music producer/composer as specified in your PDF license agreement."
      },
      {
        "question": "Are the beats 100% royalty-free and clear of uncleared samples?",
        "answer": "Yes. Every instrumental is an original composition produced by Onzieb. You will never encounter copyright takedowns, strikes, or sample clearance disputes."
      },
      {
        "question": "How quickly do I receive my untagged audio files?",
        "answer": "Immediately upon checkout, your untagged 24-bit WAV file, MP3 version, and countersigned legal PDF license agreement are delivered directly to your email."
      }
    ]
  },
  "nl": {
    "name": "Netherlands",
    "flag": "🇳🇱",
    "currency": "EUR (€)",
    "currencyCode": "EUR",
    "gateways": "iDEAL, Cards",
    "pro": "Buma/Stemra",
    "proFullName": "Buma/Stemra (Vereniging Buma en Stichting Stemra)",
    "proGuide": "Aanmelden bij Buma/Stemra met volledige auteur- en compositierechten. iDEAL betaling beschikbaar.",
    "headline": "Nederland Beats Kopen & VIP Pass Deals",
    "description": "Untagged commercial WAV beat leases and stem trackouts for recording artists in Netherlands. Cleared for Buma/Stemra and instant download.",
    "popularGenres": [
      "Dutch Trap",
      "Urban Hip Hop",
      "Melodic Beats"
    ],
    "featuredBeatIds": [
      "1",
      "5",
      "6",
      "2"
    ],
    "subClusters": [],
    "faqs": [
      {
        "question": "Can I distribute songs recorded with these beats to Spotify and Apple Music in Netherlands?",
        "answer": "Yes. All WAV and MP3 leases include full commercial streaming rights for Spotify, Apple Music, YouTube, and local streaming platforms in Netherlands and worldwide."
      },
      {
        "question": "How do I register my release with Buma/Stemra?",
        "answer": "Register your track with Buma/Stemra by listing your artist/writer information for your lyrics and designating Onzieb (Different Type of Vibe) as the music producer/composer as specified in your PDF license agreement."
      },
      {
        "question": "Are the beats 100% royalty-free and clear of uncleared samples?",
        "answer": "Yes. Every instrumental is an original composition produced by Onzieb. You will never encounter copyright takedowns, strikes, or sample clearance disputes."
      },
      {
        "question": "How quickly do I receive my untagged audio files?",
        "answer": "Immediately upon checkout, your untagged 24-bit WAV file, MP3 version, and countersigned legal PDF license agreement are delivered directly to your email."
      }
    ]
  },
  "fr": {
    "name": "France",
    "flag": "🇫🇷",
    "currency": "EUR (€)",
    "currencyCode": "EUR",
    "gateways": "Carte Bancaire, Cards",
    "pro": "SACEM",
    "proFullName": "Société des Auteurs, Compositeurs et Éditeurs de Musique (SACEM)",
    "proGuide": "Déclaration SACEM garantie sans samples non autorisés. Téléchargement WAV immédiat.",
    "headline": "France Beats & VIP Pass Deals",
    "description": "Untagged commercial WAV beat leases and stem trackouts for recording artists in France. Cleared for SACEM and instant download.",
    "popularGenres": [
      "Afro-Trap",
      "French Rap",
      "Melodic Trap"
    ],
    "featuredBeatIds": [
      "1",
      "5",
      "6",
      "2"
    ],
    "subClusters": [],
    "faqs": [
      {
        "question": "Can I distribute songs recorded with these beats to Spotify and Apple Music in France?",
        "answer": "Yes. All WAV and MP3 leases include full commercial streaming rights for Spotify, Apple Music, YouTube, and local streaming platforms in France and worldwide."
      },
      {
        "question": "How do I register my release with SACEM?",
        "answer": "Register your track with SACEM by listing your artist/writer information for your lyrics and designating Onzieb (Different Type of Vibe) as the music producer/composer as specified in your PDF license agreement."
      },
      {
        "question": "Are the beats 100% royalty-free and clear of uncleared samples?",
        "answer": "Yes. Every instrumental is an original composition produced by Onzieb. You will never encounter copyright takedowns, strikes, or sample clearance disputes."
      },
      {
        "question": "How quickly do I receive my untagged audio files?",
        "answer": "Immediately upon checkout, your untagged 24-bit WAV file, MP3 version, and countersigned legal PDF license agreement are delivered directly to your email."
      }
    ]
  },
  "be": {
    "name": "Belgium",
    "flag": "🇧🇪",
    "currency": "EUR (€)",
    "currencyCode": "EUR",
    "gateways": "Bancontact, Cards",
    "pro": "SABAM",
    "proFullName": "Société d'Auteurs Belge – Belgische Auteurs Maatschappij (SABAM)",
    "proGuide": "Conforme aux normes SABAM en Belgique pour streaming commercial et passages radio.",
    "headline": "Belgium Beats & VIP Pass Deals",
    "description": "Untagged commercial WAV beat leases and stem trackouts for recording artists in Belgium. Cleared for SABAM and instant download.",
    "popularGenres": [
      "Trap Beats",
      "Hip-Hop Beats",
      "Melodic Beats"
    ],
    "featuredBeatIds": [
      "1",
      "5",
      "6",
      "2"
    ],
    "subClusters": [],
    "faqs": [
      {
        "question": "Can I distribute songs recorded with these beats to Spotify and Apple Music in Belgium?",
        "answer": "Yes. All WAV and MP3 leases include full commercial streaming rights for Spotify, Apple Music, YouTube, and local streaming platforms in Belgium and worldwide."
      },
      {
        "question": "How do I register my release with SABAM?",
        "answer": "Register your track with SABAM by listing your artist/writer information for your lyrics and designating Onzieb (Different Type of Vibe) as the music producer/composer as specified in your PDF license agreement."
      },
      {
        "question": "Are the beats 100% royalty-free and clear of uncleared samples?",
        "answer": "Yes. Every instrumental is an original composition produced by Onzieb. You will never encounter copyright takedowns, strikes, or sample clearance disputes."
      },
      {
        "question": "How quickly do I receive my untagged audio files?",
        "answer": "Immediately upon checkout, your untagged 24-bit WAV file, MP3 version, and countersigned legal PDF license agreement are delivered directly to your email."
      }
    ]
  },
  "ch": {
    "name": "Switzerland",
    "flag": "🇨🇭",
    "currency": "CHF",
    "currencyCode": "CHF",
    "gateways": "Apple Pay, Cards",
    "pro": "SUISA",
    "proFullName": "SUISA (Cooperative Society of Music Authors and Publishers)",
    "proGuide": "SUISA-konform für Schweizer Künstler mit vollständiger Master-Rechtefreigabe.",
    "headline": "Switzerland Beats & VIP Pass Deals",
    "description": "Untagged commercial WAV beat leases and stem trackouts for recording artists in Switzerland. Cleared for SUISA and instant download.",
    "popularGenres": [
      "Trap Beats",
      "Hip-Hop Beats",
      "Melodic Beats"
    ],
    "featuredBeatIds": [
      "1",
      "5",
      "6",
      "2"
    ],
    "subClusters": [],
    "faqs": [
      {
        "question": "Can I distribute songs recorded with these beats to Spotify and Apple Music in Switzerland?",
        "answer": "Yes. All WAV and MP3 leases include full commercial streaming rights for Spotify, Apple Music, YouTube, and local streaming platforms in Switzerland and worldwide."
      },
      {
        "question": "How do I register my release with SUISA?",
        "answer": "Register your track with SUISA by listing your artist/writer information for your lyrics and designating Onzieb (Different Type of Vibe) as the music producer/composer as specified in your PDF license agreement."
      },
      {
        "question": "Are the beats 100% royalty-free and clear of uncleared samples?",
        "answer": "Yes. Every instrumental is an original composition produced by Onzieb. You will never encounter copyright takedowns, strikes, or sample clearance disputes."
      },
      {
        "question": "How quickly do I receive my untagged audio files?",
        "answer": "Immediately upon checkout, your untagged 24-bit WAV file, MP3 version, and countersigned legal PDF license agreement are delivered directly to your email."
      }
    ]
  },
  "se": {
    "name": "Sweden",
    "flag": "🇸🇪",
    "currency": "SEK",
    "currencyCode": "SEK",
    "gateways": "Apple Pay, Cards",
    "pro": "STIM",
    "proFullName": "Swedish Performing Rights Society (STIM)",
    "proGuide": "Full STIM-registrering för svenska artister och producenter.",
    "headline": "Sweden Beats & VIP Pass Deals",
    "description": "Untagged commercial WAV beat leases and stem trackouts for recording artists in Sweden. Cleared for STIM and instant download.",
    "popularGenres": [
      "Trap Beats",
      "Hip-Hop Beats",
      "Melodic Beats"
    ],
    "featuredBeatIds": [
      "1",
      "5",
      "6",
      "2"
    ],
    "subClusters": [],
    "faqs": [
      {
        "question": "Can I distribute songs recorded with these beats to Spotify and Apple Music in Sweden?",
        "answer": "Yes. All WAV and MP3 leases include full commercial streaming rights for Spotify, Apple Music, YouTube, and local streaming platforms in Sweden and worldwide."
      },
      {
        "question": "How do I register my release with STIM?",
        "answer": "Register your track with STIM by listing your artist/writer information for your lyrics and designating Onzieb (Different Type of Vibe) as the music producer/composer as specified in your PDF license agreement."
      },
      {
        "question": "Are the beats 100% royalty-free and clear of uncleared samples?",
        "answer": "Yes. Every instrumental is an original composition produced by Onzieb. You will never encounter copyright takedowns, strikes, or sample clearance disputes."
      },
      {
        "question": "How quickly do I receive my untagged audio files?",
        "answer": "Immediately upon checkout, your untagged 24-bit WAV file, MP3 version, and countersigned legal PDF license agreement are delivered directly to your email."
      }
    ]
  },
  "dk": {
    "name": "Denmark",
    "flag": "🇩🇰",
    "currency": "DKK",
    "currencyCode": "DKK",
    "gateways": "Apple Pay, Cards",
    "pro": "KODA",
    "proFullName": "KODA (Danish Performing Rights Society)",
    "proGuide": "KODA-godkendte rettigheder for uafhængige danske kunstnere.",
    "headline": "Denmark Beats & VIP Pass Deals",
    "description": "Untagged commercial WAV beat leases and stem trackouts for recording artists in Denmark. Cleared for KODA and instant download.",
    "popularGenres": [
      "Trap Beats",
      "Hip-Hop Beats",
      "Melodic Beats"
    ],
    "featuredBeatIds": [
      "1",
      "5",
      "6",
      "2"
    ],
    "subClusters": [],
    "faqs": [
      {
        "question": "Can I distribute songs recorded with these beats to Spotify and Apple Music in Denmark?",
        "answer": "Yes. All WAV and MP3 leases include full commercial streaming rights for Spotify, Apple Music, YouTube, and local streaming platforms in Denmark and worldwide."
      },
      {
        "question": "How do I register my release with KODA?",
        "answer": "Register your track with KODA by listing your artist/writer information for your lyrics and designating Onzieb (Different Type of Vibe) as the music producer/composer as specified in your PDF license agreement."
      },
      {
        "question": "Are the beats 100% royalty-free and clear of uncleared samples?",
        "answer": "Yes. Every instrumental is an original composition produced by Onzieb. You will never encounter copyright takedowns, strikes, or sample clearance disputes."
      },
      {
        "question": "How quickly do I receive my untagged audio files?",
        "answer": "Immediately upon checkout, your untagged 24-bit WAV file, MP3 version, and countersigned legal PDF license agreement are delivered directly to your email."
      }
    ]
  },
  "at": {
    "name": "Austria",
    "flag": "🇦🇹",
    "currency": "EUR (€)",
    "currencyCode": "EUR",
    "gateways": "Sofort, Cards",
    "pro": "AKM",
    "proFullName": "AKM (Staatlich genehmigte Gesellschaft der Autoren, Komponisten und Musikverleger)",
    "proGuide": "AKM-Freigabe für österreichische Rapper und Musikschaffende.",
    "headline": "Österreich Beats Kaufen & VIP Pass Deals",
    "description": "Untagged commercial WAV beat leases and stem trackouts for recording artists in Austria. Cleared for AKM and instant download.",
    "popularGenres": [
      "Trap Beats",
      "Hip-Hop Beats",
      "Melodic Beats"
    ],
    "featuredBeatIds": [
      "1",
      "5",
      "6",
      "2"
    ],
    "subClusters": [],
    "faqs": [
      {
        "question": "Can I distribute songs recorded with these beats to Spotify and Apple Music in Austria?",
        "answer": "Yes. All WAV and MP3 leases include full commercial streaming rights for Spotify, Apple Music, YouTube, and local streaming platforms in Austria and worldwide."
      },
      {
        "question": "How do I register my release with AKM?",
        "answer": "Register your track with AKM by listing your artist/writer information for your lyrics and designating Onzieb (Different Type of Vibe) as the music producer/composer as specified in your PDF license agreement."
      },
      {
        "question": "Are the beats 100% royalty-free and clear of uncleared samples?",
        "answer": "Yes. Every instrumental is an original composition produced by Onzieb. You will never encounter copyright takedowns, strikes, or sample clearance disputes."
      },
      {
        "question": "How quickly do I receive my untagged audio files?",
        "answer": "Immediately upon checkout, your untagged 24-bit WAV file, MP3 version, and countersigned legal PDF license agreement are delivered directly to your email."
      }
    ]
  },
  "it": {
    "name": "Italy",
    "flag": "🇮🇹",
    "currency": "EUR (€)",
    "currencyCode": "EUR",
    "gateways": "Apple Pay, Cards",
    "pro": "SIAE",
    "proFullName": "Società Italiana degli Autori ed Editori (SIAE)",
    "proGuide": "Deposito SIAE e Soundreef garantito con contratto di licenza commerciale.",
    "headline": "Italia Basi Musicali & VIP Pass Deals",
    "description": "Untagged commercial WAV beat leases and stem trackouts for recording artists in Italy. Cleared for SIAE and instant download.",
    "popularGenres": [
      "Trap Beats",
      "Hip-Hop Beats",
      "Melodic Beats"
    ],
    "featuredBeatIds": [
      "1",
      "5",
      "6",
      "2"
    ],
    "subClusters": [],
    "faqs": [
      {
        "question": "Can I distribute songs recorded with these beats to Spotify and Apple Music in Italy?",
        "answer": "Yes. All WAV and MP3 leases include full commercial streaming rights for Spotify, Apple Music, YouTube, and local streaming platforms in Italy and worldwide."
      },
      {
        "question": "How do I register my release with SIAE?",
        "answer": "Register your track with SIAE by listing your artist/writer information for your lyrics and designating Onzieb (Different Type of Vibe) as the music producer/composer as specified in your PDF license agreement."
      },
      {
        "question": "Are the beats 100% royalty-free and clear of uncleared samples?",
        "answer": "Yes. Every instrumental is an original composition produced by Onzieb. You will never encounter copyright takedowns, strikes, or sample clearance disputes."
      },
      {
        "question": "How quickly do I receive my untagged audio files?",
        "answer": "Immediately upon checkout, your untagged 24-bit WAV file, MP3 version, and countersigned legal PDF license agreement are delivered directly to your email."
      }
    ]
  },
  "es": {
    "name": "Spain",
    "flag": "🇪🇸",
    "currency": "EUR (€)",
    "currencyCode": "EUR",
    "gateways": "Apple Pay, Cards",
    "pro": "SGAE",
    "proFullName": "Sociedad General de Autores y Editores (SGAE)",
    "proGuide": "Registro sin problemas en SGAE para España y plataformas de streaming.",
    "headline": "España Base de Beats & VIP Pass Deals",
    "description": "Untagged commercial WAV beat leases and stem trackouts for recording artists in Spain. Cleared for SGAE and instant download.",
    "popularGenres": [
      "Trap Beats",
      "Hip-Hop Beats",
      "Melodic Beats"
    ],
    "featuredBeatIds": [
      "1",
      "5",
      "6",
      "2"
    ],
    "subClusters": [],
    "faqs": [
      {
        "question": "Can I distribute songs recorded with these beats to Spotify and Apple Music in Spain?",
        "answer": "Yes. All WAV and MP3 leases include full commercial streaming rights for Spotify, Apple Music, YouTube, and local streaming platforms in Spain and worldwide."
      },
      {
        "question": "How do I register my release with SGAE?",
        "answer": "Register your track with SGAE by listing your artist/writer information for your lyrics and designating Onzieb (Different Type of Vibe) as the music producer/composer as specified in your PDF license agreement."
      },
      {
        "question": "Are the beats 100% royalty-free and clear of uncleared samples?",
        "answer": "Yes. Every instrumental is an original composition produced by Onzieb. You will never encounter copyright takedowns, strikes, or sample clearance disputes."
      },
      {
        "question": "How quickly do I receive my untagged audio files?",
        "answer": "Immediately upon checkout, your untagged 24-bit WAV file, MP3 version, and countersigned legal PDF license agreement are delivered directly to your email."
      }
    ]
  },
  "no": {
    "name": "Norway",
    "flag": "🇳🇴",
    "currency": "NOK",
    "currencyCode": "NOK",
    "gateways": "Apple Pay, Cards",
    "pro": "TONO",
    "proFullName": "TONO (Norwegian Performing Rights Society)",
    "proGuide": "TONO-klarert lisens for uavhengige artister i Norge.",
    "headline": "Norway Beats & VIP Pass Deals",
    "description": "Untagged commercial WAV beat leases and stem trackouts for recording artists in Norway. Cleared for TONO and instant download.",
    "popularGenres": [
      "Trap Beats",
      "Hip-Hop Beats",
      "Melodic Beats"
    ],
    "featuredBeatIds": [
      "1",
      "5",
      "6",
      "2"
    ],
    "subClusters": [],
    "faqs": [
      {
        "question": "Can I distribute songs recorded with these beats to Spotify and Apple Music in Norway?",
        "answer": "Yes. All WAV and MP3 leases include full commercial streaming rights for Spotify, Apple Music, YouTube, and local streaming platforms in Norway and worldwide."
      },
      {
        "question": "How do I register my release with TONO?",
        "answer": "Register your track with TONO by listing your artist/writer information for your lyrics and designating Onzieb (Different Type of Vibe) as the music producer/composer as specified in your PDF license agreement."
      },
      {
        "question": "Are the beats 100% royalty-free and clear of uncleared samples?",
        "answer": "Yes. Every instrumental is an original composition produced by Onzieb. You will never encounter copyright takedowns, strikes, or sample clearance disputes."
      },
      {
        "question": "How quickly do I receive my untagged audio files?",
        "answer": "Immediately upon checkout, your untagged 24-bit WAV file, MP3 version, and countersigned legal PDF license agreement are delivered directly to your email."
      }
    ]
  },
  "au": {
    "name": "Australia",
    "flag": "🇦🇺",
    "currency": "AUD ($)",
    "currencyCode": "AUD",
    "gateways": "Apple Pay, Cards",
    "pro": "APRA AMCOS",
    "proFullName": "Australasian Performing Right Association & Australasian Mechanical Copyright Owners Society (APRA AMCOS)",
    "proGuide": "APRA AMCOS cleared for Triple J Unearthed broadcast, festivals, and global streaming.",
    "headline": "Australia Beat Deals & VIP Subscription Pass",
    "description": "Untagged commercial WAV beat leases and stem trackouts for recording artists in Australia. Cleared for APRA AMCOS and instant download.",
    "popularGenres": [
      "Aussie Drill",
      "Boom Bap Beats",
      "Melodic Trap"
    ],
    "featuredBeatIds": [
      "1",
      "5",
      "6",
      "2"
    ],
    "subClusters": [],
    "faqs": [
      {
        "question": "Can I distribute songs recorded with these beats to Spotify and Apple Music in Australia?",
        "answer": "Yes. All WAV and MP3 leases include full commercial streaming rights for Spotify, Apple Music, YouTube, and local streaming platforms in Australia and worldwide."
      },
      {
        "question": "How do I register my release with APRA AMCOS?",
        "answer": "Register your track with APRA AMCOS by listing your artist/writer information for your lyrics and designating Onzieb (Different Type of Vibe) as the music producer/composer as specified in your PDF license agreement."
      },
      {
        "question": "Are the beats 100% royalty-free and clear of uncleared samples?",
        "answer": "Yes. Every instrumental is an original composition produced by Onzieb. You will never encounter copyright takedowns, strikes, or sample clearance disputes."
      },
      {
        "question": "How quickly do I receive my untagged audio files?",
        "answer": "Immediately upon checkout, your untagged 24-bit WAV file, MP3 version, and countersigned legal PDF license agreement are delivered directly to your email."
      }
    ]
  },
  "gh": {
    "name": "Ghana",
    "flag": "🇬🇭",
    "currency": "GHS (₵)",
    "currencyCode": "GHS",
    "gateways": "Paystack MoMo & Cards",
    "pro": "GHAMRO",
    "proFullName": "Ghana Music Rights Organization (GHAMRO)",
    "proGuide": "Cleared for GHAMRO registration in Ghana. Instant MTN MoMo and Vodafone Cash payment.",
    "headline": "Ghana Beat Deals & VIP Subscription Pass",
    "description": "Untagged commercial WAV beat leases and stem trackouts for recording artists in Ghana. Cleared for GHAMRO and instant download.",
    "popularGenres": [
      "Ghanaian Drill",
      "Afrobeats",
      "Highlife Fusion"
    ],
    "featuredBeatIds": [
      "1",
      "5",
      "6",
      "2"
    ],
    "subClusters": [],
    "faqs": [
      {
        "question": "Can I distribute songs recorded with these beats to Spotify and Apple Music in Ghana?",
        "answer": "Yes. All WAV and MP3 leases include full commercial streaming rights for Spotify, Apple Music, YouTube, and local streaming platforms in Ghana and worldwide."
      },
      {
        "question": "How do I register my release with GHAMRO?",
        "answer": "Register your track with GHAMRO by listing your artist/writer information for your lyrics and designating Onzieb (Different Type of Vibe) as the music producer/composer as specified in your PDF license agreement."
      },
      {
        "question": "Are the beats 100% royalty-free and clear of uncleared samples?",
        "answer": "Yes. Every instrumental is an original composition produced by Onzieb. You will never encounter copyright takedowns, strikes, or sample clearance disputes."
      },
      {
        "question": "How quickly do I receive my untagged audio files?",
        "answer": "Immediately upon checkout, your untagged 24-bit WAV file, MP3 version, and countersigned legal PDF license agreement are delivered directly to your email."
      }
    ]
  },
  "ng": {
    "name": "Nigeria",
    "flag": "🇳🇬",
    "currency": "NGN (₦)",
    "currencyCode": "NGN",
    "gateways": "Paystack Transfer & Cards",
    "pro": "COSON",
    "proFullName": "Copyright Society of Nigeria (COSON) & Musical Copyright Society Nigeria (MCSN)",
    "proGuide": "Cleared for COSON & MCSN. Instant Naira (₦) checkout via Paystack bank transfer.",
    "headline": "Nigeria Beat Deals & VIP Subscription Pass",
    "description": "Untagged commercial WAV beat leases and stem trackouts for recording artists in Nigeria. Cleared for COSON and instant download.",
    "popularGenres": [
      "Afrobeats",
      "Afropop",
      "Alte Vibes"
    ],
    "featuredBeatIds": [
      "1",
      "5",
      "6",
      "2"
    ],
    "subClusters": [
      {
        "name": "Lagos Afrobeats Deals",
        "slug": "lagos",
        "description": "Catchy log drums and smooth Afro-Fusion grooves."
      },
      {
        "name": "Afrobeats Deals Catalog",
        "slug": "../afrobeats-deals",
        "description": "Afrobeats and melodic fusion instrumentals."
      }
    ],
    "faqs": [
      {
        "question": "Can I distribute songs recorded with these beats to Spotify and Apple Music in Nigeria?",
        "answer": "Yes. All WAV and MP3 leases include full commercial streaming rights for Spotify, Apple Music, YouTube, and local streaming platforms in Nigeria and worldwide."
      },
      {
        "question": "How do I register my release with COSON?",
        "answer": "Register your track with COSON by listing your artist/writer information for your lyrics and designating Onzieb (Different Type of Vibe) as the music producer/composer as specified in your PDF license agreement."
      },
      {
        "question": "Are the beats 100% royalty-free and clear of uncleared samples?",
        "answer": "Yes. Every instrumental is an original composition produced by Onzieb. You will never encounter copyright takedowns, strikes, or sample clearance disputes."
      },
      {
        "question": "How quickly do I receive my untagged audio files?",
        "answer": "Immediately upon checkout, your untagged 24-bit WAV file, MP3 version, and countersigned legal PDF license agreement are delivered directly to your email."
      }
    ]
  },
  "za": {
    "name": "South Africa",
    "flag": "🇿🇦",
    "currency": "ZAR (R)",
    "currencyCode": "ZAR",
    "gateways": "Paystack EFT & Cards",
    "pro": "SAMRO",
    "proFullName": "South African Music Rights Organisation (SAMRO) & CAPASSO",
    "proGuide": "SAMRO & CAPASSO compliant for South African artists. Instant EFT checkout in ZAR via Paystack.",
    "headline": "South Africa Beat Deals & VIP Subscription Pass",
    "description": "Untagged commercial WAV beat leases and stem trackouts for recording artists in South Africa. Cleared for SAMRO and instant download.",
    "popularGenres": [
      "Amapiano Vibes",
      "SA Hip Hop",
      "Trap Beats"
    ],
    "featuredBeatIds": [
      "1",
      "5",
      "6",
      "2"
    ],
    "subClusters": [
      {
        "name": "Johannesburg Rap & Amapiano",
        "slug": "johannesburg",
        "description": "Log drum grooves and authentic South African cadence."
      },
      {
        "name": "Hip-Hop Deals Hub",
        "slug": "../hip-hop-deals",
        "description": "Boom bap and melodic hip-hop leases."
      }
    ],
    "faqs": [
      {
        "question": "Can I distribute songs recorded with these beats to Spotify and Apple Music in South Africa?",
        "answer": "Yes. All WAV and MP3 leases include full commercial streaming rights for Spotify, Apple Music, YouTube, and local streaming platforms in South Africa and worldwide."
      },
      {
        "question": "How do I register my release with SAMRO?",
        "answer": "Register your track with SAMRO by listing your artist/writer information for your lyrics and designating Onzieb (Different Type of Vibe) as the music producer/composer as specified in your PDF license agreement."
      },
      {
        "question": "Are the beats 100% royalty-free and clear of uncleared samples?",
        "answer": "Yes. Every instrumental is an original composition produced by Onzieb. You will never encounter copyright takedowns, strikes, or sample clearance disputes."
      },
      {
        "question": "How quickly do I receive my untagged audio files?",
        "answer": "Immediately upon checkout, your untagged 24-bit WAV file, MP3 version, and countersigned legal PDF license agreement are delivered directly to your email."
      }
    ]
  },
  "united-states": {
    "name": "United States",
    "flag": "🇺🇸",
    "currency": "USD ($)",
    "currencyCode": "USD",
    "gateways": "Apple Pay, Google Pay, Cards",
    "pro": "ASCAP & BMI",
    "proFullName": "American Society of Composers, Authors and Publishers (ASCAP) & Broadcast Music, Inc. (BMI)",
    "proGuide": "Register with ASCAP or BMI for 100% writer and master streaming royalties. List Onzieb as music producer/composer per license.",
    "headline": "USA Beat Deals & VIP Subscription Pass",
    "description": "Untagged commercial WAV beat leases and stem trackouts for recording artists in United States. Cleared for ASCAP & BMI and instant download.",
    "popularGenres": [
      "Trap Beats",
      "Boom Bap Beats",
      "Melodic Hip Hop"
    ],
    "featuredBeatIds": [
      "1",
      "5",
      "6",
      "2"
    ],
    "subClusters": [
      {
        "name": "Atlanta Trap Beat Deals",
        "slug": "atlanta",
        "description": "Heavy 808s, rolling hi-hats, and melodic bounce."
      },
      {
        "name": "Los Angeles Melodic Deals",
        "slug": "los-angeles",
        "description": "West Coast melodic synths and rap instrumentals."
      },
      {
        "name": "Trap Deals Hub",
        "slug": "../trap-beat-deals",
        "description": "All dark, melodic, and hard trap leases."
      }
    ],
    "faqs": [
      {
        "question": "Can I distribute songs recorded with these beats to Spotify and Apple Music in United States?",
        "answer": "Yes. All WAV and MP3 leases include full commercial streaming rights for Spotify, Apple Music, YouTube, and local streaming platforms in United States and worldwide."
      },
      {
        "question": "How do I register my release with ASCAP & BMI?",
        "answer": "Register your track with ASCAP & BMI by listing your artist/writer information for your lyrics and designating Onzieb (Different Type of Vibe) as the music producer/composer as specified in your PDF license agreement."
      },
      {
        "question": "Are the beats 100% royalty-free and clear of uncleared samples?",
        "answer": "Yes. Every instrumental is an original composition produced by Onzieb. You will never encounter copyright takedowns, strikes, or sample clearance disputes."
      },
      {
        "question": "How quickly do I receive my untagged audio files?",
        "answer": "Immediately upon checkout, your untagged 24-bit WAV file, MP3 version, and countersigned legal PDF license agreement are delivered directly to your email."
      }
    ]
  },
  "canada": {
    "name": "Canada",
    "flag": "🇨🇦",
    "currency": "CAD ($)",
    "currencyCode": "CAD",
    "gateways": "Apple Pay, Google Pay, Cards",
    "pro": "SOCAN",
    "proFullName": "Society of Composers, Authors and Music Publishers of Canada (SOCAN)",
    "proGuide": "Register with SOCAN for Canadian streaming, radio airplay, and FACTOR grant eligibility. Keep 100% of your artist royalties.",
    "headline": "Canada Beat Deals & VIP Subscription Pass",
    "description": "Untagged commercial WAV beat leases and stem trackouts for recording artists in Canada. Cleared for SOCAN and instant download.",
    "popularGenres": [
      "Toronto Dark R&B",
      "Trap Beats",
      "Melodic Hip Hop"
    ],
    "featuredBeatIds": [
      "1",
      "5",
      "6",
      "2"
    ],
    "subClusters": [
      {
        "name": "Toronto Dark R&B Deals",
        "slug": "toronto",
        "description": "Atmospheric pads and late-night Canadian sounds."
      },
      {
        "name": "R&B Beats Collection",
        "slug": "../rb-beat-deals",
        "description": "Soulful and modern R&B instrumentals."
      }
    ],
    "faqs": [
      {
        "question": "Can I distribute songs recorded with these beats to Spotify and Apple Music in Canada?",
        "answer": "Yes. All WAV and MP3 leases include full commercial streaming rights for Spotify, Apple Music, YouTube, and local streaming platforms in Canada and worldwide."
      },
      {
        "question": "How do I register my release with SOCAN?",
        "answer": "Register your track with SOCAN by listing your artist/writer information for your lyrics and designating Onzieb (Different Type of Vibe) as the music producer/composer as specified in your PDF license agreement."
      },
      {
        "question": "Are the beats 100% royalty-free and clear of uncleared samples?",
        "answer": "Yes. Every instrumental is an original composition produced by Onzieb. You will never encounter copyright takedowns, strikes, or sample clearance disputes."
      },
      {
        "question": "How quickly do I receive my untagged audio files?",
        "answer": "Immediately upon checkout, your untagged 24-bit WAV file, MP3 version, and countersigned legal PDF license agreement are delivered directly to your email."
      }
    ]
  },
  "united-kingdom": {
    "name": "United Kingdom",
    "flag": "🇬🇧",
    "currency": "GBP (£)",
    "currencyCode": "GBP",
    "gateways": "Apple Pay, Cards",
    "pro": "PRS for Music",
    "proFullName": "Performing Right Society (PRS for Music) & Phonographic Performance Limited (PPL)",
    "proGuide": "Register with PRS for Music & PPL in the UK. Fully cleared for BBC Radio 1Xtra, Spotify UK, and UK commercial licensing.",
    "headline": "UK Beat Deals & VIP Subscription Pass",
    "description": "Untagged commercial WAV beat leases and stem trackouts for recording artists in United Kingdom. Cleared for PRS for Music and instant download.",
    "popularGenres": [
      "UK Drill",
      "Grime Instrumentals",
      "Trap Beats"
    ],
    "featuredBeatIds": [
      "1",
      "5",
      "6",
      "2"
    ],
    "subClusters": [
      {
        "name": "London Drill & Grime Deals",
        "slug": "london",
        "description": "Signature London drill sliding 808s and raw cadence."
      },
      {
        "name": "Drill Beat Deals Hub",
        "slug": "../drill-beat-deals",
        "description": "High-octane drill instrumentals with sliding bass."
      }
    ],
    "faqs": [
      {
        "question": "Can I distribute songs recorded with these beats to Spotify and Apple Music in United Kingdom?",
        "answer": "Yes. All WAV and MP3 leases include full commercial streaming rights for Spotify, Apple Music, YouTube, and local streaming platforms in United Kingdom and worldwide."
      },
      {
        "question": "How do I register my release with PRS for Music?",
        "answer": "Register your track with PRS for Music by listing your artist/writer information for your lyrics and designating Onzieb (Different Type of Vibe) as the music producer/composer as specified in your PDF license agreement."
      },
      {
        "question": "Are the beats 100% royalty-free and clear of uncleared samples?",
        "answer": "Yes. Every instrumental is an original composition produced by Onzieb. You will never encounter copyright takedowns, strikes, or sample clearance disputes."
      },
      {
        "question": "How quickly do I receive my untagged audio files?",
        "answer": "Immediately upon checkout, your untagged 24-bit WAV file, MP3 version, and countersigned legal PDF license agreement are delivered directly to your email."
      }
    ]
  },
  "ireland": {
    "name": "Ireland",
    "flag": "🇮🇪",
    "currency": "EUR (€)",
    "currencyCode": "EUR",
    "gateways": "Apple Pay, Cards",
    "pro": "IMRO",
    "proFullName": "Irish Recorded Music Organisation (IMRO)",
    "proGuide": "Register with IMRO for RTÉ radio airplay and worldwide digital streaming royalties.",
    "headline": "Ireland Beat Deals & VIP Subscription Pass",
    "description": "Untagged commercial WAV beat leases and stem trackouts for recording artists in Ireland. Cleared for IMRO and instant download.",
    "popularGenres": [
      "Trap Beats",
      "Hip-Hop Beats",
      "Melodic Beats"
    ],
    "featuredBeatIds": [
      "1",
      "5",
      "6",
      "2"
    ],
    "subClusters": [],
    "faqs": [
      {
        "question": "Can I distribute songs recorded with these beats to Spotify and Apple Music in Ireland?",
        "answer": "Yes. All WAV and MP3 leases include full commercial streaming rights for Spotify, Apple Music, YouTube, and local streaming platforms in Ireland and worldwide."
      },
      {
        "question": "How do I register my release with IMRO?",
        "answer": "Register your track with IMRO by listing your artist/writer information for your lyrics and designating Onzieb (Different Type of Vibe) as the music producer/composer as specified in your PDF license agreement."
      },
      {
        "question": "Are the beats 100% royalty-free and clear of uncleared samples?",
        "answer": "Yes. Every instrumental is an original composition produced by Onzieb. You will never encounter copyright takedowns, strikes, or sample clearance disputes."
      },
      {
        "question": "How quickly do I receive my untagged audio files?",
        "answer": "Immediately upon checkout, your untagged 24-bit WAV file, MP3 version, and countersigned legal PDF license agreement are delivered directly to your email."
      }
    ]
  },
  "germany": {
    "name": "Germany",
    "flag": "🇩🇪",
    "currency": "EUR (€)",
    "currencyCode": "EUR",
    "gateways": "Sofort, Giropay, Cards",
    "pro": "GEMA",
    "proFullName": "Gesellschaft für musikalische Aufführungs- und mechanische Vervielfältigungsrechte (GEMA)",
    "proGuide": "100% GEMA-konform. Alle Beats sind Originalkompositionen ohne ungeklärte Samples.",
    "headline": "Deutschland Beats Kaufen & VIP Pass Deals",
    "description": "Untagged commercial WAV beat leases and stem trackouts for recording artists in Germany. Cleared for GEMA and instant download.",
    "popularGenres": [
      "German Trap",
      "Boom Bap Beats",
      "Dark Melodic"
    ],
    "featuredBeatIds": [
      "1",
      "5",
      "6",
      "2"
    ],
    "subClusters": [
      {
        "name": "Berlin Hip-Hop Beats",
        "slug": "berlin",
        "description": "Underground Boom Bap und aggressiver Trap für Berlin."
      }
    ],
    "faqs": [
      {
        "question": "Can I distribute songs recorded with these beats to Spotify and Apple Music in Germany?",
        "answer": "Yes. All WAV and MP3 leases include full commercial streaming rights for Spotify, Apple Music, YouTube, and local streaming platforms in Germany and worldwide."
      },
      {
        "question": "How do I register my release with GEMA?",
        "answer": "Register your track with GEMA by listing your artist/writer information for your lyrics and designating Onzieb (Different Type of Vibe) as the music producer/composer as specified in your PDF license agreement."
      },
      {
        "question": "Are the beats 100% royalty-free and clear of uncleared samples?",
        "answer": "Yes. Every instrumental is an original composition produced by Onzieb. You will never encounter copyright takedowns, strikes, or sample clearance disputes."
      },
      {
        "question": "How quickly do I receive my untagged audio files?",
        "answer": "Immediately upon checkout, your untagged 24-bit WAV file, MP3 version, and countersigned legal PDF license agreement are delivered directly to your email."
      }
    ]
  },
  "netherlands": {
    "name": "Netherlands",
    "flag": "🇳🇱",
    "currency": "EUR (€)",
    "currencyCode": "EUR",
    "gateways": "iDEAL, Cards",
    "pro": "Buma/Stemra",
    "proFullName": "Buma/Stemra (Vereniging Buma en Stichting Stemra)",
    "proGuide": "Aanmelden bij Buma/Stemra met volledige auteur- en compositierechten. iDEAL betaling beschikbaar.",
    "headline": "Nederland Beats Kopen & VIP Pass Deals",
    "description": "Untagged commercial WAV beat leases and stem trackouts for recording artists in Netherlands. Cleared for Buma/Stemra and instant download.",
    "popularGenres": [
      "Dutch Trap",
      "Urban Hip Hop",
      "Melodic Beats"
    ],
    "featuredBeatIds": [
      "1",
      "5",
      "6",
      "2"
    ],
    "subClusters": [],
    "faqs": [
      {
        "question": "Can I distribute songs recorded with these beats to Spotify and Apple Music in Netherlands?",
        "answer": "Yes. All WAV and MP3 leases include full commercial streaming rights for Spotify, Apple Music, YouTube, and local streaming platforms in Netherlands and worldwide."
      },
      {
        "question": "How do I register my release with Buma/Stemra?",
        "answer": "Register your track with Buma/Stemra by listing your artist/writer information for your lyrics and designating Onzieb (Different Type of Vibe) as the music producer/composer as specified in your PDF license agreement."
      },
      {
        "question": "Are the beats 100% royalty-free and clear of uncleared samples?",
        "answer": "Yes. Every instrumental is an original composition produced by Onzieb. You will never encounter copyright takedowns, strikes, or sample clearance disputes."
      },
      {
        "question": "How quickly do I receive my untagged audio files?",
        "answer": "Immediately upon checkout, your untagged 24-bit WAV file, MP3 version, and countersigned legal PDF license agreement are delivered directly to your email."
      }
    ]
  },
  "france": {
    "name": "France",
    "flag": "🇫🇷",
    "currency": "EUR (€)",
    "currencyCode": "EUR",
    "gateways": "Carte Bancaire, Cards",
    "pro": "SACEM",
    "proFullName": "Société des Auteurs, Compositeurs et Éditeurs de Musique (SACEM)",
    "proGuide": "Déclaration SACEM garantie sans samples non autorisés. Téléchargement WAV immédiat.",
    "headline": "France Beats & VIP Pass Deals",
    "description": "Untagged commercial WAV beat leases and stem trackouts for recording artists in France. Cleared for SACEM and instant download.",
    "popularGenres": [
      "Afro-Trap",
      "French Rap",
      "Melodic Trap"
    ],
    "featuredBeatIds": [
      "1",
      "5",
      "6",
      "2"
    ],
    "subClusters": [],
    "faqs": [
      {
        "question": "Can I distribute songs recorded with these beats to Spotify and Apple Music in France?",
        "answer": "Yes. All WAV and MP3 leases include full commercial streaming rights for Spotify, Apple Music, YouTube, and local streaming platforms in France and worldwide."
      },
      {
        "question": "How do I register my release with SACEM?",
        "answer": "Register your track with SACEM by listing your artist/writer information for your lyrics and designating Onzieb (Different Type of Vibe) as the music producer/composer as specified in your PDF license agreement."
      },
      {
        "question": "Are the beats 100% royalty-free and clear of uncleared samples?",
        "answer": "Yes. Every instrumental is an original composition produced by Onzieb. You will never encounter copyright takedowns, strikes, or sample clearance disputes."
      },
      {
        "question": "How quickly do I receive my untagged audio files?",
        "answer": "Immediately upon checkout, your untagged 24-bit WAV file, MP3 version, and countersigned legal PDF license agreement are delivered directly to your email."
      }
    ]
  },
  "belgium": {
    "name": "Belgium",
    "flag": "🇧🇪",
    "currency": "EUR (€)",
    "currencyCode": "EUR",
    "gateways": "Bancontact, Cards",
    "pro": "SABAM",
    "proFullName": "Société d'Auteurs Belge – Belgische Auteurs Maatschappij (SABAM)",
    "proGuide": "Conforme aux normes SABAM en Belgique pour streaming commercial et passages radio.",
    "headline": "Belgium Beats & VIP Pass Deals",
    "description": "Untagged commercial WAV beat leases and stem trackouts for recording artists in Belgium. Cleared for SABAM and instant download.",
    "popularGenres": [
      "Trap Beats",
      "Hip-Hop Beats",
      "Melodic Beats"
    ],
    "featuredBeatIds": [
      "1",
      "5",
      "6",
      "2"
    ],
    "subClusters": [],
    "faqs": [
      {
        "question": "Can I distribute songs recorded with these beats to Spotify and Apple Music in Belgium?",
        "answer": "Yes. All WAV and MP3 leases include full commercial streaming rights for Spotify, Apple Music, YouTube, and local streaming platforms in Belgium and worldwide."
      },
      {
        "question": "How do I register my release with SABAM?",
        "answer": "Register your track with SABAM by listing your artist/writer information for your lyrics and designating Onzieb (Different Type of Vibe) as the music producer/composer as specified in your PDF license agreement."
      },
      {
        "question": "Are the beats 100% royalty-free and clear of uncleared samples?",
        "answer": "Yes. Every instrumental is an original composition produced by Onzieb. You will never encounter copyright takedowns, strikes, or sample clearance disputes."
      },
      {
        "question": "How quickly do I receive my untagged audio files?",
        "answer": "Immediately upon checkout, your untagged 24-bit WAV file, MP3 version, and countersigned legal PDF license agreement are delivered directly to your email."
      }
    ]
  },
  "switzerland": {
    "name": "Switzerland",
    "flag": "🇨🇭",
    "currency": "CHF",
    "currencyCode": "CHF",
    "gateways": "Apple Pay, Cards",
    "pro": "SUISA",
    "proFullName": "SUISA (Cooperative Society of Music Authors and Publishers)",
    "proGuide": "SUISA-konform für Schweizer Künstler mit vollständiger Master-Rechtefreigabe.",
    "headline": "Switzerland Beats & VIP Pass Deals",
    "description": "Untagged commercial WAV beat leases and stem trackouts for recording artists in Switzerland. Cleared for SUISA and instant download.",
    "popularGenres": [
      "Trap Beats",
      "Hip-Hop Beats",
      "Melodic Beats"
    ],
    "featuredBeatIds": [
      "1",
      "5",
      "6",
      "2"
    ],
    "subClusters": [],
    "faqs": [
      {
        "question": "Can I distribute songs recorded with these beats to Spotify and Apple Music in Switzerland?",
        "answer": "Yes. All WAV and MP3 leases include full commercial streaming rights for Spotify, Apple Music, YouTube, and local streaming platforms in Switzerland and worldwide."
      },
      {
        "question": "How do I register my release with SUISA?",
        "answer": "Register your track with SUISA by listing your artist/writer information for your lyrics and designating Onzieb (Different Type of Vibe) as the music producer/composer as specified in your PDF license agreement."
      },
      {
        "question": "Are the beats 100% royalty-free and clear of uncleared samples?",
        "answer": "Yes. Every instrumental is an original composition produced by Onzieb. You will never encounter copyright takedowns, strikes, or sample clearance disputes."
      },
      {
        "question": "How quickly do I receive my untagged audio files?",
        "answer": "Immediately upon checkout, your untagged 24-bit WAV file, MP3 version, and countersigned legal PDF license agreement are delivered directly to your email."
      }
    ]
  },
  "sweden": {
    "name": "Sweden",
    "flag": "🇸🇪",
    "currency": "SEK",
    "currencyCode": "SEK",
    "gateways": "Apple Pay, Cards",
    "pro": "STIM",
    "proFullName": "Swedish Performing Rights Society (STIM)",
    "proGuide": "Full STIM-registrering för svenska artister och producenter.",
    "headline": "Sweden Beats & VIP Pass Deals",
    "description": "Untagged commercial WAV beat leases and stem trackouts for recording artists in Sweden. Cleared for STIM and instant download.",
    "popularGenres": [
      "Trap Beats",
      "Hip-Hop Beats",
      "Melodic Beats"
    ],
    "featuredBeatIds": [
      "1",
      "5",
      "6",
      "2"
    ],
    "subClusters": [],
    "faqs": [
      {
        "question": "Can I distribute songs recorded with these beats to Spotify and Apple Music in Sweden?",
        "answer": "Yes. All WAV and MP3 leases include full commercial streaming rights for Spotify, Apple Music, YouTube, and local streaming platforms in Sweden and worldwide."
      },
      {
        "question": "How do I register my release with STIM?",
        "answer": "Register your track with STIM by listing your artist/writer information for your lyrics and designating Onzieb (Different Type of Vibe) as the music producer/composer as specified in your PDF license agreement."
      },
      {
        "question": "Are the beats 100% royalty-free and clear of uncleared samples?",
        "answer": "Yes. Every instrumental is an original composition produced by Onzieb. You will never encounter copyright takedowns, strikes, or sample clearance disputes."
      },
      {
        "question": "How quickly do I receive my untagged audio files?",
        "answer": "Immediately upon checkout, your untagged 24-bit WAV file, MP3 version, and countersigned legal PDF license agreement are delivered directly to your email."
      }
    ]
  },
  "denmark": {
    "name": "Denmark",
    "flag": "🇩🇰",
    "currency": "DKK",
    "currencyCode": "DKK",
    "gateways": "Apple Pay, Cards",
    "pro": "KODA",
    "proFullName": "KODA (Danish Performing Rights Society)",
    "proGuide": "KODA-godkendte rettigheder for uafhængige danske kunstnere.",
    "headline": "Denmark Beats & VIP Pass Deals",
    "description": "Untagged commercial WAV beat leases and stem trackouts for recording artists in Denmark. Cleared for KODA and instant download.",
    "popularGenres": [
      "Trap Beats",
      "Hip-Hop Beats",
      "Melodic Beats"
    ],
    "featuredBeatIds": [
      "1",
      "5",
      "6",
      "2"
    ],
    "subClusters": [],
    "faqs": [
      {
        "question": "Can I distribute songs recorded with these beats to Spotify and Apple Music in Denmark?",
        "answer": "Yes. All WAV and MP3 leases include full commercial streaming rights for Spotify, Apple Music, YouTube, and local streaming platforms in Denmark and worldwide."
      },
      {
        "question": "How do I register my release with KODA?",
        "answer": "Register your track with KODA by listing your artist/writer information for your lyrics and designating Onzieb (Different Type of Vibe) as the music producer/composer as specified in your PDF license agreement."
      },
      {
        "question": "Are the beats 100% royalty-free and clear of uncleared samples?",
        "answer": "Yes. Every instrumental is an original composition produced by Onzieb. You will never encounter copyright takedowns, strikes, or sample clearance disputes."
      },
      {
        "question": "How quickly do I receive my untagged audio files?",
        "answer": "Immediately upon checkout, your untagged 24-bit WAV file, MP3 version, and countersigned legal PDF license agreement are delivered directly to your email."
      }
    ]
  },
  "austria": {
    "name": "Austria",
    "flag": "🇦🇹",
    "currency": "EUR (€)",
    "currencyCode": "EUR",
    "gateways": "Sofort, Cards",
    "pro": "AKM",
    "proFullName": "AKM (Staatlich genehmigte Gesellschaft der Autoren, Komponisten und Musikverleger)",
    "proGuide": "AKM-Freigabe für österreichische Rapper und Musikschaffende.",
    "headline": "Österreich Beats Kaufen & VIP Pass Deals",
    "description": "Untagged commercial WAV beat leases and stem trackouts for recording artists in Austria. Cleared for AKM and instant download.",
    "popularGenres": [
      "Trap Beats",
      "Hip-Hop Beats",
      "Melodic Beats"
    ],
    "featuredBeatIds": [
      "1",
      "5",
      "6",
      "2"
    ],
    "subClusters": [],
    "faqs": [
      {
        "question": "Can I distribute songs recorded with these beats to Spotify and Apple Music in Austria?",
        "answer": "Yes. All WAV and MP3 leases include full commercial streaming rights for Spotify, Apple Music, YouTube, and local streaming platforms in Austria and worldwide."
      },
      {
        "question": "How do I register my release with AKM?",
        "answer": "Register your track with AKM by listing your artist/writer information for your lyrics and designating Onzieb (Different Type of Vibe) as the music producer/composer as specified in your PDF license agreement."
      },
      {
        "question": "Are the beats 100% royalty-free and clear of uncleared samples?",
        "answer": "Yes. Every instrumental is an original composition produced by Onzieb. You will never encounter copyright takedowns, strikes, or sample clearance disputes."
      },
      {
        "question": "How quickly do I receive my untagged audio files?",
        "answer": "Immediately upon checkout, your untagged 24-bit WAV file, MP3 version, and countersigned legal PDF license agreement are delivered directly to your email."
      }
    ]
  },
  "italy": {
    "name": "Italy",
    "flag": "🇮🇹",
    "currency": "EUR (€)",
    "currencyCode": "EUR",
    "gateways": "Apple Pay, Cards",
    "pro": "SIAE",
    "proFullName": "Società Italiana degli Autori ed Editori (SIAE)",
    "proGuide": "Deposito SIAE e Soundreef garantito con contratto di licenza commerciale.",
    "headline": "Italia Basi Musicali & VIP Pass Deals",
    "description": "Untagged commercial WAV beat leases and stem trackouts for recording artists in Italy. Cleared for SIAE and instant download.",
    "popularGenres": [
      "Trap Beats",
      "Hip-Hop Beats",
      "Melodic Beats"
    ],
    "featuredBeatIds": [
      "1",
      "5",
      "6",
      "2"
    ],
    "subClusters": [],
    "faqs": [
      {
        "question": "Can I distribute songs recorded with these beats to Spotify and Apple Music in Italy?",
        "answer": "Yes. All WAV and MP3 leases include full commercial streaming rights for Spotify, Apple Music, YouTube, and local streaming platforms in Italy and worldwide."
      },
      {
        "question": "How do I register my release with SIAE?",
        "answer": "Register your track with SIAE by listing your artist/writer information for your lyrics and designating Onzieb (Different Type of Vibe) as the music producer/composer as specified in your PDF license agreement."
      },
      {
        "question": "Are the beats 100% royalty-free and clear of uncleared samples?",
        "answer": "Yes. Every instrumental is an original composition produced by Onzieb. You will never encounter copyright takedowns, strikes, or sample clearance disputes."
      },
      {
        "question": "How quickly do I receive my untagged audio files?",
        "answer": "Immediately upon checkout, your untagged 24-bit WAV file, MP3 version, and countersigned legal PDF license agreement are delivered directly to your email."
      }
    ]
  },
  "spain": {
    "name": "Spain",
    "flag": "🇪🇸",
    "currency": "EUR (€)",
    "currencyCode": "EUR",
    "gateways": "Apple Pay, Cards",
    "pro": "SGAE",
    "proFullName": "Sociedad General de Autores y Editores (SGAE)",
    "proGuide": "Registro sin problemas en SGAE para España y plataformas de streaming.",
    "headline": "España Base de Beats & VIP Pass Deals",
    "description": "Untagged commercial WAV beat leases and stem trackouts for recording artists in Spain. Cleared for SGAE and instant download.",
    "popularGenres": [
      "Trap Beats",
      "Hip-Hop Beats",
      "Melodic Beats"
    ],
    "featuredBeatIds": [
      "1",
      "5",
      "6",
      "2"
    ],
    "subClusters": [],
    "faqs": [
      {
        "question": "Can I distribute songs recorded with these beats to Spotify and Apple Music in Spain?",
        "answer": "Yes. All WAV and MP3 leases include full commercial streaming rights for Spotify, Apple Music, YouTube, and local streaming platforms in Spain and worldwide."
      },
      {
        "question": "How do I register my release with SGAE?",
        "answer": "Register your track with SGAE by listing your artist/writer information for your lyrics and designating Onzieb (Different Type of Vibe) as the music producer/composer as specified in your PDF license agreement."
      },
      {
        "question": "Are the beats 100% royalty-free and clear of uncleared samples?",
        "answer": "Yes. Every instrumental is an original composition produced by Onzieb. You will never encounter copyright takedowns, strikes, or sample clearance disputes."
      },
      {
        "question": "How quickly do I receive my untagged audio files?",
        "answer": "Immediately upon checkout, your untagged 24-bit WAV file, MP3 version, and countersigned legal PDF license agreement are delivered directly to your email."
      }
    ]
  },
  "norway": {
    "name": "Norway",
    "flag": "🇳🇴",
    "currency": "NOK",
    "currencyCode": "NOK",
    "gateways": "Apple Pay, Cards",
    "pro": "TONO",
    "proFullName": "TONO (Norwegian Performing Rights Society)",
    "proGuide": "TONO-klarert lisens for uavhengige artister i Norge.",
    "headline": "Norway Beats & VIP Pass Deals",
    "description": "Untagged commercial WAV beat leases and stem trackouts for recording artists in Norway. Cleared for TONO and instant download.",
    "popularGenres": [
      "Trap Beats",
      "Hip-Hop Beats",
      "Melodic Beats"
    ],
    "featuredBeatIds": [
      "1",
      "5",
      "6",
      "2"
    ],
    "subClusters": [],
    "faqs": [
      {
        "question": "Can I distribute songs recorded with these beats to Spotify and Apple Music in Norway?",
        "answer": "Yes. All WAV and MP3 leases include full commercial streaming rights for Spotify, Apple Music, YouTube, and local streaming platforms in Norway and worldwide."
      },
      {
        "question": "How do I register my release with TONO?",
        "answer": "Register your track with TONO by listing your artist/writer information for your lyrics and designating Onzieb (Different Type of Vibe) as the music producer/composer as specified in your PDF license agreement."
      },
      {
        "question": "Are the beats 100% royalty-free and clear of uncleared samples?",
        "answer": "Yes. Every instrumental is an original composition produced by Onzieb. You will never encounter copyright takedowns, strikes, or sample clearance disputes."
      },
      {
        "question": "How quickly do I receive my untagged audio files?",
        "answer": "Immediately upon checkout, your untagged 24-bit WAV file, MP3 version, and countersigned legal PDF license agreement are delivered directly to your email."
      }
    ]
  },
  "australia": {
    "name": "Australia",
    "flag": "🇦🇺",
    "currency": "AUD ($)",
    "currencyCode": "AUD",
    "gateways": "Apple Pay, Cards",
    "pro": "APRA AMCOS",
    "proFullName": "Australasian Performing Right Association & Australasian Mechanical Copyright Owners Society (APRA AMCOS)",
    "proGuide": "APRA AMCOS cleared for Triple J Unearthed broadcast, festivals, and global streaming.",
    "headline": "Australia Beat Deals & VIP Subscription Pass",
    "description": "Untagged commercial WAV beat leases and stem trackouts for recording artists in Australia. Cleared for APRA AMCOS and instant download.",
    "popularGenres": [
      "Aussie Drill",
      "Boom Bap Beats",
      "Melodic Trap"
    ],
    "featuredBeatIds": [
      "1",
      "5",
      "6",
      "2"
    ],
    "subClusters": [],
    "faqs": [
      {
        "question": "Can I distribute songs recorded with these beats to Spotify and Apple Music in Australia?",
        "answer": "Yes. All WAV and MP3 leases include full commercial streaming rights for Spotify, Apple Music, YouTube, and local streaming platforms in Australia and worldwide."
      },
      {
        "question": "How do I register my release with APRA AMCOS?",
        "answer": "Register your track with APRA AMCOS by listing your artist/writer information for your lyrics and designating Onzieb (Different Type of Vibe) as the music producer/composer as specified in your PDF license agreement."
      },
      {
        "question": "Are the beats 100% royalty-free and clear of uncleared samples?",
        "answer": "Yes. Every instrumental is an original composition produced by Onzieb. You will never encounter copyright takedowns, strikes, or sample clearance disputes."
      },
      {
        "question": "How quickly do I receive my untagged audio files?",
        "answer": "Immediately upon checkout, your untagged 24-bit WAV file, MP3 version, and countersigned legal PDF license agreement are delivered directly to your email."
      }
    ]
  },
  "ghana": {
    "name": "Ghana",
    "flag": "🇬🇭",
    "currency": "GHS (₵)",
    "currencyCode": "GHS",
    "gateways": "Paystack MoMo & Cards",
    "pro": "GHAMRO",
    "proFullName": "Ghana Music Rights Organization (GHAMRO)",
    "proGuide": "Cleared for GHAMRO registration in Ghana. Instant MTN MoMo and Vodafone Cash payment.",
    "headline": "Ghana Beat Deals & VIP Subscription Pass",
    "description": "Untagged commercial WAV beat leases and stem trackouts for recording artists in Ghana. Cleared for GHAMRO and instant download.",
    "popularGenres": [
      "Ghanaian Drill",
      "Afrobeats",
      "Highlife Fusion"
    ],
    "featuredBeatIds": [
      "1",
      "5",
      "6",
      "2"
    ],
    "subClusters": [],
    "faqs": [
      {
        "question": "Can I distribute songs recorded with these beats to Spotify and Apple Music in Ghana?",
        "answer": "Yes. All WAV and MP3 leases include full commercial streaming rights for Spotify, Apple Music, YouTube, and local streaming platforms in Ghana and worldwide."
      },
      {
        "question": "How do I register my release with GHAMRO?",
        "answer": "Register your track with GHAMRO by listing your artist/writer information for your lyrics and designating Onzieb (Different Type of Vibe) as the music producer/composer as specified in your PDF license agreement."
      },
      {
        "question": "Are the beats 100% royalty-free and clear of uncleared samples?",
        "answer": "Yes. Every instrumental is an original composition produced by Onzieb. You will never encounter copyright takedowns, strikes, or sample clearance disputes."
      },
      {
        "question": "How quickly do I receive my untagged audio files?",
        "answer": "Immediately upon checkout, your untagged 24-bit WAV file, MP3 version, and countersigned legal PDF license agreement are delivered directly to your email."
      }
    ]
  },
  "nigeria": {
    "name": "Nigeria",
    "flag": "🇳🇬",
    "currency": "NGN (₦)",
    "currencyCode": "NGN",
    "gateways": "Paystack Transfer & Cards",
    "pro": "COSON",
    "proFullName": "Copyright Society of Nigeria (COSON) & Musical Copyright Society Nigeria (MCSN)",
    "proGuide": "Cleared for COSON & MCSN. Instant Naira (₦) checkout via Paystack bank transfer.",
    "headline": "Nigeria Beat Deals & VIP Subscription Pass",
    "description": "Untagged commercial WAV beat leases and stem trackouts for recording artists in Nigeria. Cleared for COSON and instant download.",
    "popularGenres": [
      "Afrobeats",
      "Afropop",
      "Alte Vibes"
    ],
    "featuredBeatIds": [
      "1",
      "5",
      "6",
      "2"
    ],
    "subClusters": [
      {
        "name": "Lagos Afrobeats Deals",
        "slug": "lagos",
        "description": "Catchy log drums and smooth Afro-Fusion grooves."
      },
      {
        "name": "Afrobeats Deals Catalog",
        "slug": "../afrobeats-deals",
        "description": "Afrobeats and melodic fusion instrumentals."
      }
    ],
    "faqs": [
      {
        "question": "Can I distribute songs recorded with these beats to Spotify and Apple Music in Nigeria?",
        "answer": "Yes. All WAV and MP3 leases include full commercial streaming rights for Spotify, Apple Music, YouTube, and local streaming platforms in Nigeria and worldwide."
      },
      {
        "question": "How do I register my release with COSON?",
        "answer": "Register your track with COSON by listing your artist/writer information for your lyrics and designating Onzieb (Different Type of Vibe) as the music producer/composer as specified in your PDF license agreement."
      },
      {
        "question": "Are the beats 100% royalty-free and clear of uncleared samples?",
        "answer": "Yes. Every instrumental is an original composition produced by Onzieb. You will never encounter copyright takedowns, strikes, or sample clearance disputes."
      },
      {
        "question": "How quickly do I receive my untagged audio files?",
        "answer": "Immediately upon checkout, your untagged 24-bit WAV file, MP3 version, and countersigned legal PDF license agreement are delivered directly to your email."
      }
    ]
  },
  "south-africa": {
    "name": "South Africa",
    "flag": "🇿🇦",
    "currency": "ZAR (R)",
    "currencyCode": "ZAR",
    "gateways": "Paystack EFT & Cards",
    "pro": "SAMRO",
    "proFullName": "South African Music Rights Organisation (SAMRO) & CAPASSO",
    "proGuide": "SAMRO & CAPASSO compliant for South African artists. Instant EFT checkout in ZAR via Paystack.",
    "headline": "South Africa Beat Deals & VIP Subscription Pass",
    "description": "Untagged commercial WAV beat leases and stem trackouts for recording artists in South Africa. Cleared for SAMRO and instant download.",
    "popularGenres": [
      "Amapiano Vibes",
      "SA Hip Hop",
      "Trap Beats"
    ],
    "featuredBeatIds": [
      "1",
      "5",
      "6",
      "2"
    ],
    "subClusters": [
      {
        "name": "Johannesburg Rap & Amapiano",
        "slug": "johannesburg",
        "description": "Log drum grooves and authentic South African cadence."
      },
      {
        "name": "Hip-Hop Deals Hub",
        "slug": "../hip-hop-deals",
        "description": "Boom bap and melodic hip-hop leases."
      }
    ],
    "faqs": [
      {
        "question": "Can I distribute songs recorded with these beats to Spotify and Apple Music in South Africa?",
        "answer": "Yes. All WAV and MP3 leases include full commercial streaming rights for Spotify, Apple Music, YouTube, and local streaming platforms in South Africa and worldwide."
      },
      {
        "question": "How do I register my release with SAMRO?",
        "answer": "Register your track with SAMRO by listing your artist/writer information for your lyrics and designating Onzieb (Different Type of Vibe) as the music producer/composer as specified in your PDF license agreement."
      },
      {
        "question": "Are the beats 100% royalty-free and clear of uncleared samples?",
        "answer": "Yes. Every instrumental is an original composition produced by Onzieb. You will never encounter copyright takedowns, strikes, or sample clearance disputes."
      },
      {
        "question": "How quickly do I receive my untagged audio files?",
        "answer": "Immediately upon checkout, your untagged 24-bit WAV file, MP3 version, and countersigned legal PDF license agreement are delivered directly to your email."
      }
    ]
  },
  "uk/drill": {
    "name": "United Kingdom – UK Drill Scene",
    "flag": "🇬🇧",
    "currency": "GBP (£)",
    "currencyCode": "GBP",
    "gateways": "Apple Pay, Google Pay, UK Debit/Credit Cards",
    "pro": "PRS for Music & PPL",
    "proFullName": "Performing Right Society (PRS for Music) & Phonographic Performance Limited (PPL)",
    "proGuide": "UK drill recording artists can register their tracks with PRS for Music and PPL without administrative hassle. Complete cue sheet clearance for BBC Radio 1Xtra, Spotify UK playlists, and commercial licensing.",
    "headline": "UK Drill Instrumentals & Beats for Sale (WAV + Stems)",
    "description": "Dark sliding 808s, stuttering drill hi-hats, and gritty London atmospheric melodies. Official PRS for Music clearance for UK drill artists, BBC 1Xtra airplay, and streaming.",
    "popularGenres": [
      "UK Drill",
      "London Drill",
      "Dark 808 Drill",
      "Grime"
    ],
    "featuredBeatIds": [
      "1",
      "7",
      "5",
      "3"
    ],
    "subClusters": [
      {
        "name": "London Drill Deals",
        "slug": "london",
        "description": "Authentic London underground drill beats."
      },
      {
        "name": "UK Pillar Hub",
        "slug": "united-kingdom",
        "description": "Explore the full UK beat store collection and PRS clearances."
      },
      {
        "name": "Drill Deals Catalog",
        "slug": "../../drill-beat-deals",
        "description": "Browse our complete drill beats collection."
      }
    ],
    "faqs": [
      {
        "question": "Can I upload UK drill tracks recorded to these beats to Spotify and YouTube?",
        "answer": "Yes. All WAV leases include full commercial streaming rights for Spotify UK, Apple Music, and YouTube without copyright claims or strikes."
      },
      {
        "question": "Do these UK drill beats include the sliding 808 audio stems?",
        "answer": "Yes! Both our WAV leases and STEM licenses include high-definition 24-bit audio stems with isolated sliding 808 sub bass, kicks, snares, and melodies."
      },
      {
        "question": "How do I register my UK drill song with PRS for Music?",
        "answer": "Submit your release to the PRS portal entering your artist name for 100% of your lyricist royalties and crediting Onzieb as composer according to the license."
      }
    ]
  },
  "nigeria/paystack": {
    "name": "Nigeria – Paystack Instant Checkout",
    "flag": "🇳🇬",
    "currency": "NGN (₦)",
    "currencyCode": "NGN",
    "gateways": "Paystack Bank Transfer, USSD, Verve/Mastercard/Visa (Naira ₦)",
    "pro": "COSON & MCSN",
    "proFullName": "Copyright Society of Nigeria (COSON) & Musical Copyright Society Nigeria (MCSN)",
    "proGuide": "Nigerian recording artists can purchase directly in Naira (₦) using Paystack instant bank transfer or local debit cards. Cleared for Audiomack, Boomplay, Spotify, and COSON.",
    "headline": "Buy Untagged Beats with Naira (₦) Bank Transfer & Paystack",
    "description": "Instant beat leases for Nigerian recording artists. Pay in Naira (₦) with local debit card (Verve/Mastercard/Visa), USSD, or direct bank transfer via Paystack.",
    "popularGenres": [
      "Afrobeats",
      "Afropop",
      "Alte Vibes",
      "Afro-Fusion"
    ],
    "featuredBeatIds": [
      "1",
      "4",
      "6",
      "2"
    ],
    "subClusters": [
      {
        "name": "Lagos Afrobeats Hub",
        "slug": "lagos",
        "description": "Log drums and tropical melodies crafted for the Lagos scene."
      },
      {
        "name": "Nigeria Country Pillar",
        "slug": "nigeria",
        "description": "Main Nigerian beat store storefront."
      },
      {
        "name": "Afrobeats Deals Catalog",
        "slug": "../../afrobeats-deals",
        "description": "Explore all Afrobeats and fusion instrumentals."
      }
    ],
    "faqs": [
      {
        "question": "Can I pay using any Nigerian bank card or direct bank transfer?",
        "answer": "Yes! Paystack allows instant checkout with cards from GTBank, Access, Zenith, UBA, FirstBank, Kuda, OPay, and all Nigerian commercial banks in Naira (₦)."
      },
      {
        "question": "Can I distribute my music to Boomplay, Audiomack, and Apple Music Nigeria?",
        "answer": "Yes. Your untagged WAV lease grants full commercial distribution rights across Boomplay, Audiomack, Spotify, and YouTube with 100% master earnings retained."
      },
      {
        "question": "How quickly are untagged WAV beats delivered after payment?",
        "answer": "Instantly! As soon as Paystack confirms your payment, your high-resolution 24-bit WAV file and official license agreement are delivered to your email."
      }
    ]
  },
  "germany/beats-kaufen": {
    "name": "Deutschland – Beats Kaufen (GEMA-frei)",
    "flag": "🇩🇪",
    "currency": "EUR (€)",
    "currencyCode": "EUR",
    "gateways": "Sofortüberweisung, Giropay, Apple Pay, Kreditkarte (€ Euro)",
    "pro": "GEMA",
    "proFullName": "Gesellschaft für musikalische Aufführungs- und mechanische Vervielfältigungsrechte (GEMA)",
    "proGuide": "Deutsche Rapper und Produzenten können ihre Werke ohne GEMA-Probleme veröffentlichen. 100% GEMA-konform ohne ungeklärte Fremdsamples.",
    "headline": "Beats Kaufen: Untagged WAV Instrumentals & GEMA-Freigabe",
    "description": "Professionelle Deutschrap-, Boom-Bap- und Trap-Instrumentals für deutsche Rapper und Sänger. 100% GEMA-konform mit Sofort-Download.",
    "popularGenres": [
      "Deutschrap",
      "German Trap",
      "Underground Boom Bap"
    ],
    "featuredBeatIds": [
      "1",
      "3",
      "5",
      "7"
    ],
    "subClusters": [
      {
        "name": "Berlin Hip-Hop Hub",
        "slug": "berlin",
        "description": "Dunkle Beats für Berliner Rapper."
      },
      {
        "name": "Deutschland Hauptseite",
        "slug": "germany",
        "description": "Alle Angebote für den deutschen Markt."
      },
      {
        "name": "Hip-Hop Deals Katalog",
        "slug": "../../hip-hop-deals",
        "description": "Boom-Bap- und Rap-Beats entdecken."
      }
    ],
    "faqs": [
      {
        "question": "Sind die Beats für Spotify und die GEMA freigegeben?",
        "answer": "Ja. Alle Beats sind 100% Eigenkompositionen ohne Fremdsamples mit vollständiger Urheberrechtsfreigabe."
      },
      {
        "question": "Kann ich per Sofortüberweisung oder Giropay in Euro zahlen?",
        "answer": "Ja, Sie können sicher per Sofortüberweisung, Giropay, Apple Pay oder Kreditkarte in Euro (€) bezahlen."
      }
    ]
  },
  "france/instru-rap": {
    "name": "France – Instru Rap Français & Afro-Trap",
    "flag": "🇫🇷",
    "currency": "EUR (€)",
    "currencyCode": "EUR",
    "gateways": "Carte Bancaire, Apple Pay, Cartes (€ Euro)",
    "pro": "SACEM",
    "proFullName": "Société des Auteurs, Compositeurs et Éditeurs de Musique (SACEM)",
    "proGuide": "Tous les artistes en France peuvent déclarer leurs œuvres auprès de la SACEM en toute conformité. 100% des redevances master streaming vous reviennent.",
    "headline": "Acheter Instru Rap Français Non Taggée (WAV & Stems)",
    "description": "Prods de rap français, afro-trap et boom bap de qualité studio. Téléchargement immédiat de fichiers WAV non taggués et pistes séparées (Stems).",
    "popularGenres": [
      "Rap Français",
      "Afro-Trap",
      "Drill Français"
    ],
    "featuredBeatIds": [
      "1",
      "4",
      "6",
      "7"
    ],
    "subClusters": [
      {
        "name": "Paris Afro-Trap Hub",
        "slug": "paris",
        "description": "Prods percutantes pour la scène parisienne."
      },
      {
        "name": "France Hub Principal",
        "slug": "france",
        "description": "Page principale des deals en France."
      }
    ],
    "faqs": [
      {
        "question": "Puis-je déposer mon morceau à la SACEM avec ce contrat ?",
        "answer": "Oui. Le contrat de licence commercial détaille clairement les parts compositeur et auteur pour un dépôt SACEM sans aucun litige."
      },
      {
        "question": "Puis-je payer par Carte Bancaire en France ?",
        "answer": "Oui, toutes les Cartes Bancaires (CB, Visa, Mastercard) ainsi qu Apple Pay sont acceptées."
      }
    ]
  },
  "us/atlanta-trap": {
    "name": "USA – Atlanta 808 Trap Scene",
    "flag": "🇺🇸",
    "currency": "USD ($)",
    "currencyCode": "USD",
    "gateways": "Apple Pay, Google Pay, Credit/Debit Cards, Cash App Pay",
    "pro": "ASCAP & BMI",
    "proFullName": "American Society of Composers, Authors and Publishers (ASCAP) & Broadcast Music, Inc. (BMI)",
    "proGuide": "When releasing Atlanta trap records made with Different Type of Vibe beats, you keep 100% of your artist streaming royalties on Spotify and Apple Music.",
    "headline": "Atlanta Trap Beats for Sale: Heavy 808s & Commercial WAV Leases",
    "description": "Authentic Atlanta trap instrumentals inspired by Metro Boomin, Future, and Lil Baby. Hard-hitting 808 sub bass, crisp rolling hi-hats, and melodic bounce.",
    "popularGenres": [
      "Atlanta Trap",
      "Dark 808s",
      "Metro Boomin Style"
    ],
    "featuredBeatIds": [
      "1",
      "5",
      "7",
      "6"
    ],
    "subClusters": [
      {
        "name": "Atlanta City Deals Hub",
        "slug": "atlanta",
        "description": "Direct Atlanta scene deals page."
      },
      {
        "name": "United States Pillar Hub",
        "slug": "united-states",
        "description": "US nationwide beat licensing hub."
      }
    ],
    "faqs": [
      {
        "question": "Can I monetize my song on Spotify and Apple Music in the US?",
        "answer": "Yes! All MP3 and WAV leases grant full commercial digital streaming rights across Spotify, Apple Music, and YouTube."
      },
      {
        "question": "Are the 808s tuned and mixed for club systems?",
        "answer": "Yes. Every 808 is digitally tuned to the root musical key and saturated for heavy translation on all sound systems."
      }
    ]
  },
  "uk-drill": {
    "name": "United Kingdom – UK Drill Scene",
    "flag": "🇬🇧",
    "currency": "GBP (£)",
    "currencyCode": "GBP",
    "gateways": "Apple Pay, Google Pay, UK Debit/Credit Cards",
    "pro": "PRS for Music & PPL",
    "proFullName": "Performing Right Society (PRS for Music) & Phonographic Performance Limited (PPL)",
    "proGuide": "UK drill recording artists can register their tracks with PRS for Music and PPL without administrative hassle. Complete cue sheet clearance for BBC Radio 1Xtra, Spotify UK playlists, and commercial licensing.",
    "headline": "UK Drill Instrumentals & Beats for Sale (WAV + Stems)",
    "description": "Dark sliding 808s, stuttering drill hi-hats, and gritty London atmospheric melodies. Official PRS for Music clearance for UK drill artists, BBC 1Xtra airplay, and streaming.",
    "popularGenres": [
      "UK Drill",
      "London Drill",
      "Dark 808 Drill",
      "Grime"
    ],
    "featuredBeatIds": [
      "1",
      "7",
      "5",
      "3"
    ],
    "subClusters": [
      {
        "name": "London Drill Deals",
        "slug": "london",
        "description": "Authentic London underground drill beats."
      },
      {
        "name": "UK Pillar Hub",
        "slug": "united-kingdom",
        "description": "Explore the full UK beat store collection and PRS clearances."
      },
      {
        "name": "Drill Deals Catalog",
        "slug": "../../drill-beat-deals",
        "description": "Browse our complete drill beats collection."
      }
    ],
    "faqs": [
      {
        "question": "Can I upload UK drill tracks recorded to these beats to Spotify and YouTube?",
        "answer": "Yes. All WAV leases include full commercial streaming rights for Spotify UK, Apple Music, and YouTube without copyright claims or strikes."
      },
      {
        "question": "Do these UK drill beats include the sliding 808 audio stems?",
        "answer": "Yes! Both our WAV leases and STEM licenses include high-definition 24-bit audio stems with isolated sliding 808 sub bass, kicks, snares, and melodies."
      },
      {
        "question": "How do I register my UK drill song with PRS for Music?",
        "answer": "Submit your release to the PRS portal entering your artist name for 100% of your lyricist royalties and crediting Onzieb as composer according to the license."
      }
    ]
  },
  "nigeria-paystack": {
    "name": "Nigeria – Paystack Instant Checkout",
    "flag": "🇳🇬",
    "currency": "NGN (₦)",
    "currencyCode": "NGN",
    "gateways": "Paystack Bank Transfer, USSD, Verve/Mastercard/Visa (Naira ₦)",
    "pro": "COSON & MCSN",
    "proFullName": "Copyright Society of Nigeria (COSON) & Musical Copyright Society Nigeria (MCSN)",
    "proGuide": "Nigerian recording artists can purchase directly in Naira (₦) using Paystack instant bank transfer or local debit cards. Cleared for Audiomack, Boomplay, Spotify, and COSON.",
    "headline": "Buy Untagged Beats with Naira (₦) Bank Transfer & Paystack",
    "description": "Instant beat leases for Nigerian recording artists. Pay in Naira (₦) with local debit card (Verve/Mastercard/Visa), USSD, or direct bank transfer via Paystack.",
    "popularGenres": [
      "Afrobeats",
      "Afropop",
      "Alte Vibes",
      "Afro-Fusion"
    ],
    "featuredBeatIds": [
      "1",
      "4",
      "6",
      "2"
    ],
    "subClusters": [
      {
        "name": "Lagos Afrobeats Hub",
        "slug": "lagos",
        "description": "Log drums and tropical melodies crafted for the Lagos scene."
      },
      {
        "name": "Nigeria Country Pillar",
        "slug": "nigeria",
        "description": "Main Nigerian beat store storefront."
      },
      {
        "name": "Afrobeats Deals Catalog",
        "slug": "../../afrobeats-deals",
        "description": "Explore all Afrobeats and fusion instrumentals."
      }
    ],
    "faqs": [
      {
        "question": "Can I pay using any Nigerian bank card or direct bank transfer?",
        "answer": "Yes! Paystack allows instant checkout with cards from GTBank, Access, Zenith, UBA, FirstBank, Kuda, OPay, and all Nigerian commercial banks in Naira (₦)."
      },
      {
        "question": "Can I distribute my music to Boomplay, Audiomack, and Apple Music Nigeria?",
        "answer": "Yes. Your untagged WAV lease grants full commercial distribution rights across Boomplay, Audiomack, Spotify, and YouTube with 100% master earnings retained."
      },
      {
        "question": "How quickly are untagged WAV beats delivered after payment?",
        "answer": "Instantly! As soon as Paystack confirms your payment, your high-resolution 24-bit WAV file and official license agreement are delivered to your email."
      }
    ]
  },
  "germany-beats-kaufen": {
    "name": "Deutschland – Beats Kaufen (GEMA-frei)",
    "flag": "🇩🇪",
    "currency": "EUR (€)",
    "currencyCode": "EUR",
    "gateways": "Sofortüberweisung, Giropay, Apple Pay, Kreditkarte (€ Euro)",
    "pro": "GEMA",
    "proFullName": "Gesellschaft für musikalische Aufführungs- und mechanische Vervielfältigungsrechte (GEMA)",
    "proGuide": "Deutsche Rapper und Produzenten können ihre Werke ohne GEMA-Probleme veröffentlichen. 100% GEMA-konform ohne ungeklärte Fremdsamples.",
    "headline": "Beats Kaufen: Untagged WAV Instrumentals & GEMA-Freigabe",
    "description": "Professionelle Deutschrap-, Boom-Bap- und Trap-Instrumentals für deutsche Rapper und Sänger. 100% GEMA-konform mit Sofort-Download.",
    "popularGenres": [
      "Deutschrap",
      "German Trap",
      "Underground Boom Bap"
    ],
    "featuredBeatIds": [
      "1",
      "3",
      "5",
      "7"
    ],
    "subClusters": [
      {
        "name": "Berlin Hip-Hop Hub",
        "slug": "berlin",
        "description": "Dunkle Beats für Berliner Rapper."
      },
      {
        "name": "Deutschland Hauptseite",
        "slug": "germany",
        "description": "Alle Angebote für den deutschen Markt."
      },
      {
        "name": "Hip-Hop Deals Katalog",
        "slug": "../../hip-hop-deals",
        "description": "Boom-Bap- und Rap-Beats entdecken."
      }
    ],
    "faqs": [
      {
        "question": "Sind die Beats für Spotify und die GEMA freigegeben?",
        "answer": "Ja. Alle Beats sind 100% Eigenkompositionen ohne Fremdsamples mit vollständiger Urheberrechtsfreigabe."
      },
      {
        "question": "Kann ich per Sofortüberweisung oder Giropay in Euro zahlen?",
        "answer": "Ja, Sie können sicher per Sofortüberweisung, Giropay, Apple Pay oder Kreditkarte in Euro (€) bezahlen."
      }
    ]
  },
  "france-instru-rap": {
    "name": "France – Instru Rap Français & Afro-Trap",
    "flag": "🇫🇷",
    "currency": "EUR (€)",
    "currencyCode": "EUR",
    "gateways": "Carte Bancaire, Apple Pay, Cartes (€ Euro)",
    "pro": "SACEM",
    "proFullName": "Société des Auteurs, Compositeurs et Éditeurs de Musique (SACEM)",
    "proGuide": "Tous les artistes en France peuvent déclarer leurs œuvres auprès de la SACEM en toute conformité. 100% des redevances master streaming vous reviennent.",
    "headline": "Acheter Instru Rap Français Non Taggée (WAV & Stems)",
    "description": "Prods de rap français, afro-trap et boom bap de qualité studio. Téléchargement immédiat de fichiers WAV non taggués et pistes séparées (Stems).",
    "popularGenres": [
      "Rap Français",
      "Afro-Trap",
      "Drill Français"
    ],
    "featuredBeatIds": [
      "1",
      "4",
      "6",
      "7"
    ],
    "subClusters": [
      {
        "name": "Paris Afro-Trap Hub",
        "slug": "paris",
        "description": "Prods percutantes pour la scène parisienne."
      },
      {
        "name": "France Hub Principal",
        "slug": "france",
        "description": "Page principale des deals en France."
      }
    ],
    "faqs": [
      {
        "question": "Puis-je déposer mon morceau à la SACEM avec ce contrat ?",
        "answer": "Oui. Le contrat de licence commercial détaille clairement les parts compositeur et auteur pour un dépôt SACEM sans aucun litige."
      },
      {
        "question": "Puis-je payer par Carte Bancaire en France ?",
        "answer": "Oui, toutes les Cartes Bancaires (CB, Visa, Mastercard) ainsi qu Apple Pay sont acceptées."
      }
    ]
  },
  "atlanta-trap": {
    "name": "USA – Atlanta 808 Trap Scene",
    "flag": "🇺🇸",
    "currency": "USD ($)",
    "currencyCode": "USD",
    "gateways": "Apple Pay, Google Pay, Credit/Debit Cards, Cash App Pay",
    "pro": "ASCAP & BMI",
    "proFullName": "American Society of Composers, Authors and Publishers (ASCAP) & Broadcast Music, Inc. (BMI)",
    "proGuide": "When releasing Atlanta trap records made with Different Type of Vibe beats, you keep 100% of your artist streaming royalties on Spotify and Apple Music.",
    "headline": "Atlanta Trap Beats for Sale: Heavy 808s & Commercial WAV Leases",
    "description": "Authentic Atlanta trap instrumentals inspired by Metro Boomin, Future, and Lil Baby. Hard-hitting 808 sub bass, crisp rolling hi-hats, and melodic bounce.",
    "popularGenres": [
      "Atlanta Trap",
      "Dark 808s",
      "Metro Boomin Style"
    ],
    "featuredBeatIds": [
      "1",
      "5",
      "7",
      "6"
    ],
    "subClusters": [
      {
        "name": "Atlanta City Deals Hub",
        "slug": "atlanta",
        "description": "Direct Atlanta scene deals page."
      },
      {
        "name": "United States Pillar Hub",
        "slug": "united-states",
        "description": "US nationwide beat licensing hub."
      }
    ],
    "faqs": [
      {
        "question": "Can I monetize my song on Spotify and Apple Music in the US?",
        "answer": "Yes! All MP3 and WAV leases grant full commercial digital streaming rights across Spotify, Apple Music, and YouTube."
      },
      {
        "question": "Are the 808s tuned and mixed for club systems?",
        "answer": "Yes. Every 808 is digitally tuned to the root musical key and saturated for heavy translation on all sound systems."
      }
    ]
  }
};
