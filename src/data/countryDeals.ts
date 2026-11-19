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
  },
  "toronto": {
  "name": "Toronto – Dark R&B & Hip Hop",
  "flag": "🇨🇦",
  "currency": "CAD ($)",
  "currencyCode": "CAD",
  "gateways": "Apple Pay, Google Pay, Interac, Cards",
  "pro": "SOCAN",
  "proFullName": "Society of Composers, Authors and Music Publishers of Canada (SOCAN)",
  "proGuide": "SOCAN compliant for Canadian artists. 100% master streaming royalties.",
  "headline": "Toronto Beat Deals & VIP Subscription Pass",
  "description": "Untagged commercial WAV beat leases and stem trackouts for artists in Toronto and Ontario.",
  "popularGenres": [
    "Toronto R&B",
    "OVO Sound",
    "Dark Melodic Trap"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "6",
    "2"
  ],
  "faqs": [
    {
      "question": "Are these beats compatible with SOCAN in Canada?",
      "answer": "Yes! All licenses include composer credits for SOCAN registration."
    },
    {
      "question": "Can I release on Spotify Canada with 100% royalties?",
      "answer": "Yes, artists retain 100% of their master streaming royalties."
    }
  ]
},
  "johannesburg": {
  "name": "Johannesburg – Amapiano & SA Hip Hop",
  "flag": "🇿🇦",
  "currency": "ZAR (R)",
  "currencyCode": "ZAR",
  "gateways": "Cards, Apple Pay, Google Pay",
  "pro": "SAMRO & CAPASSO",
  "proFullName": "Southern African Music Rights Organisation (SAMRO)",
  "proGuide": "SAMRO & CAPASSO cleared for South African vocalists and producers.",
  "headline": "Johannesburg Beat Deals & VIP Subscription Pass",
  "description": "Untagged commercial WAV beat leases and stem trackouts for recording artists in South Africa.",
  "popularGenres": [
    "SA Hip Hop",
    "Amapiano Vibes",
    "Trap Beats"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "6",
    "2"
  ],
  "faqs": [
    {
      "question": "Can I monetize on Spotify and Boomplay in South Africa?",
      "answer": "Yes! All leases include commercial streaming distribution rights."
    },
    {
      "question": "How fast are beats delivered?",
      "answer": "Immediately upon checkout, 24-bit WAVs are delivered to your email."
    }
  ]
},
  "sydney": {
  "name": "Sydney – Drill & Australian Hip Hop",
  "flag": "🇦🇺",
  "currency": "AUD ($)",
  "currencyCode": "AUD",
  "gateways": "Apple Pay, Google Pay, Cards",
  "pro": "APRA AMCOS",
  "proFullName": "Australasian Performing Right Association (APRA AMCOS)",
  "proGuide": "APRA AMCOS compliant for Australian recording artists.",
  "headline": "Sydney Beat Deals & VIP Subscription Pass",
  "description": "Untagged commercial WAV beat leases and stem trackouts for artists in Sydney, Melbourne, and Australia.",
  "popularGenres": [
    "Sydney Drill",
    "Australian Hip Hop",
    "Melodic Trap"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "6",
    "2"
  ],
  "faqs": [
    {
      "question": "Are these beats cleared for APRA AMCOS registration?",
      "answer": "Yes, all tracks include full songwriter/composer splits for APRA registration."
    },
    {
      "question": "Can I monetize music videos on YouTube in Australia?",
      "answer": "Yes, worldwide commercial video monetization is 100% cleared."
    }
  ]
},
  "jp": {
  "name": "Japan – Tokyo Hip Hop & Lo-Fi Beats",
  "flag": "🇯🇵",
  "currency": "JPY (¥)",
  "currencyCode": "JPY",
  "gateways": "Apple Pay, Google Pay, Credit Cards",
  "pro": "JASRAC",
  "proFullName": "Japanese Society for Rights of Authors, Composers and Publishers (JASRAC)",
  "proGuide": "JASRAC compliant for Japanese artists and anime/game creators.",
  "headline": "Japan Beat Deals & Tokyo Lo-Fi VIP Pass",
  "description": "Untagged commercial WAV beat leases, Lo-Fi hip hop, and dark trap instrumentals for artists in Japan.",
  "popularGenres": [
    "Lo-Fi Hip Hop",
    "Tokyo Trap",
    "Anime Chill Vibes"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "6",
    "2"
  ],
  "faqs": [
    {
      "question": "Can I release on Spotify Japan with 100% royalties?",
      "answer": "Yes! All licenses grant commercial streaming clearance with 100% master royalties retained."
    },
    {
      "question": "Are separated stems available?",
      "answer": "Yes, Stems licenses include uncompressed 24-bit WAV tracks for every musical element."
    }
  ]
},
  "japan": {
  "name": "Japan – Tokyo Hip Hop & Lo-Fi Beats",
  "flag": "🇯🇵",
  "currency": "JPY (¥)",
  "currencyCode": "JPY",
  "gateways": "Apple Pay, Google Pay, Credit Cards",
  "pro": "JASRAC",
  "proFullName": "Japanese Society for Rights of Authors, Composers and Publishers (JASRAC)",
  "proGuide": "JASRAC compliant for Japanese artists and anime/game creators.",
  "headline": "Japan Beat Deals & Tokyo Lo-Fi VIP Pass",
  "description": "Untagged commercial WAV beat leases, Lo-Fi hip hop, and dark trap instrumentals for artists in Japan.",
  "popularGenres": [
    "Lo-Fi Hip Hop",
    "Tokyo Trap",
    "Anime Chill Vibes"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "6",
    "2"
  ],
  "faqs": [
    {
      "question": "Can I release on Spotify Japan with 100% royalties?",
      "answer": "Yes! All licenses grant commercial streaming clearance with 100% master royalties retained."
    },
    {
      "question": "Are separated stems available?",
      "answer": "Yes, Stems licenses include uncompressed 24-bit WAV tracks for every musical element."
    }
  ]
},
  "br": {
  "name": "Brazil – Trap Brasileiro & Drill",
  "flag": "🇧🇷",
  "currency": "BRL (R$)",
  "currencyCode": "BRL",
  "gateways": "Credit Card, Apple Pay, Google Pay, Crypto",
  "pro": "ECAD & UBC",
  "proFullName": "Escritório Central de Arrecadação e Distribuição (ECAD)",
  "proGuide": "ECAD & UBC compliant for Brazilian recording artists and MCs.",
  "headline": "Beats de Trap para Comprar no Brasil",
  "description": "Bases de trap, drill e boom bap sem tag com entrega imediata em WAV 24-bit para artistas e MCs no Brasil.",
  "popularGenres": [
    "Trap Brasileiro",
    "Brazilian Drill",
    "Boom Bap"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "6",
    "2"
  ],
  "faqs": [
    {
      "question": "Posso lançar no Spotify e YouTube com esses beats?",
      "answer": "Sim! Todas as licenças incluem direitos comerciais de streaming com 100% dos royalties para o artista."
    },
    {
      "question": "Os beats vêm sem voz e sem tag?",
      "answer": "Sim, todos os arquivos WAV e MP3 comprados são entregues 100% sem tags promocionais."
    }
  ]
},
  "brazil": {
  "name": "Brazil – Trap Brasileiro & Drill",
  "flag": "🇧🇷",
  "currency": "BRL (R$)",
  "currencyCode": "BRL",
  "gateways": "Credit Card, Apple Pay, Google Pay, Crypto",
  "pro": "ECAD & UBC",
  "proFullName": "Escritório Central de Arrecadação e Distribuição (ECAD)",
  "proGuide": "ECAD & UBC compliant for Brazilian recording artists and MCs.",
  "headline": "Beats de Trap para Comprar no Brasil",
  "description": "Bases de trap, drill e boom bap sem tag com entrega imediata em WAV 24-bit para artistas e MCs no Brasil.",
  "popularGenres": [
    "Trap Brasileiro",
    "Brazilian Drill",
    "Boom Bap"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "6",
    "2"
  ],
  "faqs": [
    {
      "question": "Posso lançar no Spotify e YouTube com esses beats?",
      "answer": "Sim! Todas as licenças incluem direitos comerciais de streaming com 100% dos royalties para o artista."
    },
    {
      "question": "Os beats vêm sem voz e sem tag?",
      "answer": "Sim, todos os arquivos WAV e MP3 comprados são entregues 100% sem tags promocionais."
    }
  ]
},
  "mx": {
  "name": "Mexico – Trap Latino & Hip Hop",
  "flag": "🇲🇽",
  "currency": "MXN ($)",
  "currencyCode": "MXN",
  "gateways": "Apple Pay, Google Pay, Cards",
  "pro": "SACM",
  "proFullName": "Sociedad de Autores y Compositores de México (SACM)",
  "proGuide": "SACM compliant para artistas y productores independientes en México.",
  "headline": "Bases y Pistas de Trap en México",
  "description": "Pistas de trap, drill y hip-hop sin tags con entrega instantánea en WAV 24-bit para artistas en México.",
  "popularGenres": [
    "Trap Latino",
    "Boom Bap en Español",
    "Dark Trap 808s"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "6",
    "2"
  ],
  "faqs": [
    {
      "question": "¿Puedo monetizar mis canciones en Spotify y YouTube México?",
      "answer": "¡Sí! Todas las licencias incluyen derechos comerciales con 100% de regalías para el artista."
    },
    {
      "question": "¿Cómo se reciben los archivos después de la compra?",
      "answer": "Inmediatamente por correo electrónico en formato WAV de 24 bits y contrato en PDF firmado."
    }
  ]
},
  "mexico": {
  "name": "Mexico – Trap Latino & Hip Hop",
  "flag": "🇲🇽",
  "currency": "MXN ($)",
  "currencyCode": "MXN",
  "gateways": "Apple Pay, Google Pay, Cards",
  "pro": "SACM",
  "proFullName": "Sociedad de Autores y Compositores de México (SACM)",
  "proGuide": "SACM compliant para artistas y productores independientes en México.",
  "headline": "Bases y Pistas de Trap en México",
  "description": "Pistas de trap, drill y hip-hop sin tags con entrega instantánea en WAV 24-bit para artistas en México.",
  "popularGenres": [
    "Trap Latino",
    "Boom Bap en Español",
    "Dark Trap 808s"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "6",
    "2"
  ],
  "faqs": [
    {
      "question": "¿Puedo monetizar mis canciones en Spotify y YouTube México?",
      "answer": "¡Sí! Todas las licencias incluyen derechos comerciales con 100% de regalías para el artista."
    },
    {
      "question": "¿Cómo se reciben los archivos después de la compra?",
      "answer": "Inmediatamente por correo electrónico en formato WAV de 24 bits y contrato en PDF firmado."
    }
  ]
},
  "ke": {
  "name": "Kenya – Gengetone & Afrobeats Hub",
  "flag": "🇰🇪",
  "currency": "KES (KSh)",
  "currencyCode": "KES",
  "gateways": "Cards, Apple Pay, Google Pay, Crypto",
  "pro": "MCSK & PRISK",
  "proFullName": "Music Copyright Society of Kenya (MCSK)",
  "proGuide": "MCSK & PRISK compliant for East African recording artists.",
  "headline": "Kenya Beat Deals & VIP Subscription Pass",
  "description": "Untagged commercial WAV beat leases and stem trackouts for artists in Nairobi and East Africa.",
  "popularGenres": [
    "Gengetone Beats",
    "Afrobeats",
    "Trap Beats"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "6",
    "2"
  ],
  "faqs": [
    {
      "question": "Can I distribute songs to Boomplay and Spotify Kenya?",
      "answer": "Yes! All licenses grant commercial streaming clearance with 100% master earnings retained."
    },
    {
      "question": "Are the beats untagged?",
      "answer": "Yes, all purchased beats are delivered 100% untagged in studio WAV quality."
    }
  ]
},
  "kenya": {
  "name": "Kenya – Gengetone & Afrobeats Hub",
  "flag": "🇰🇪",
  "currency": "KES (KSh)",
  "currencyCode": "KES",
  "gateways": "Cards, Apple Pay, Google Pay, Crypto",
  "pro": "MCSK & PRISK",
  "proFullName": "Music Copyright Society of Kenya (MCSK)",
  "proGuide": "MCSK & PRISK compliant for East African recording artists.",
  "headline": "Kenya Beat Deals & VIP Subscription Pass",
  "description": "Untagged commercial WAV beat leases and stem trackouts for artists in Nairobi and East Africa.",
  "popularGenres": [
    "Gengetone Beats",
    "Afrobeats",
    "Trap Beats"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "6",
    "2"
  ],
  "faqs": [
    {
      "question": "Can I distribute songs to Boomplay and Spotify Kenya?",
      "answer": "Yes! All licenses grant commercial streaming clearance with 100% master earnings retained."
    },
    {
      "question": "Are the beats untagged?",
      "answer": "Yes, all purchased beats are delivered 100% untagged in studio WAV quality."
    }
  ]
},
  "spain/comprar-bases-rap": {
  "name": "España – Comprar Bases de Rap & Trap",
  "flag": "🇪🇸",
  "currency": "EUR (€)",
  "currencyCode": "EUR",
  "gateways": "Apple Pay, Google Pay, Tarjetas (€)",
  "pro": "SGAE",
  "proFullName": "Sociedad General de Autores y Editores (SGAE)",
  "proGuide": "SGAE compliant para artistas en España. 100% de derechos máster comerciales.",
  "headline": "Comprar Bases de Rap y Trap Online (Sin Tags)",
  "description": "Bases de rap, boom bap y trap sin voces comerciales con entrega instantánea en WAV 24-bit y pistas separadas.",
  "popularGenres": [
    "Bases de Rap",
    "Trap Español",
    "Boom Bap Clásico"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "6",
    "2"
  ],
  "faqs": [
    {
      "question": "¿Las bases son libres de derechos para Spotify y YouTube?",
      "answer": "¡Sí! Todas las licencias incluyen derechos de distribución digital con 100% de regalías para el cantante/artista."
    },
    {
      "question": "¿Se incluyen las pistas por separado (stems)?",
      "answer": "Sí, la licencia de stems incluye todas las pistas en WAV de 24 bits para mezcla profesional de voces."
    }
  ]
},
  "italy/comprare-basi-trap": {
  "name": "Italia – Comprare Basi Trap & Rap",
  "flag": "🇮🇹",
  "currency": "EUR (€)",
  "currencyCode": "EUR",
  "gateways": "Apple Pay, Google Pay, Carte di Credito (€)",
  "pro": "SIAE",
  "proFullName": "Società Italiana degli Autori ed Editori (SIAE)",
  "proGuide": "Conforme alle normative SIAE per artisti e rapper italiani.",
  "headline": "Comprare Basi Trap e Rap Online (Senza Tag)",
  "description": "Basi trap, drill e hip-hop senza tag promozionali con consegna istantanea in WAV a 24-bit per artisti in Italia.",
  "popularGenres": [
    "Basi Trap",
    "Italian Drill",
    "Boom Bap"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "6",
    "2"
  ],
  "faqs": [
    {
      "question": "Posso pubblicare su Spotify e Apple Music con queste basi?",
      "answer": "Sì! Tutte le licenze includono la liberatoria commerciale completa con il 100% delle royalty per l'artista."
    },
    {
      "question": "I file audio sono ad alta risoluzione senza voce?",
      "answer": "Sì, i beat acquistati vengono inviati immediatamente via email in formato WAV a 24-bit puliti senza tag."
    }
  ]
},
  "france/acheter-instru": {
  "name": "France – Acheter une Instru Rap",
  "flag": "🇫🇷",
  "currency": "EUR (€)",
  "currencyCode": "EUR",
  "gateways": "Carte Bancaire, Apple Pay, Google Pay (€)",
  "pro": "SACEM",
  "proFullName": "Société des Auteurs, Compositeurs et Éditeurs de Musique (SACEM)",
  "proGuide": "Conforme aux déclarations SACEM pour les rappeurs et chanteurs francophones.",
  "headline": "Acheter une Instru Rap & Trap en Ligne (Sans Tag)",
  "description": "Téléchargez des prods de rap, drill et boom bap sans tag avec livraison instantanée en WAV 24-bit de qualité studio.",
  "popularGenres": [
    "Instru Rap Français",
    "Drill Melodique",
    "Boom Bap 90s"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "6",
    "2"
  ],
  "faqs": [
    {
      "question": "Puis-je sortir mes morceaux sur Spotify avec 100% des royalties?",
      "answer": "Oui! Vous conservez 100% de vos revenus de streaming master sur Spotify, Apple Music et Deezer."
    },
    {
      "question": "Les pistes séparées (stems) sont-elles incluses?",
      "answer": "Oui, la licence Stems comprend toutes les pistes audio WAV 24-bit isolées pour le mixage voix en studio."
    }
  ]
},
  "us/atlanta": {
  "name": "USA \u2013 Atlanta Trap Scene",
  "flag": "\ud83c\uddfa\ud83c\uddf8",
  "currency": "USD ($)",
  "currencyCode": "USD",
  "gateways": "Apple Pay, Google Pay, Credit/Debit Cards, Cash App Pay",
  "pro": "ASCAP & BMI",
  "proFullName": "American Society of Composers, Authors and Publishers (ASCAP) & Broadcast Music, Inc. (BMI)",
  "proGuide": "When releasing tracks in USA \u2013 Atlanta Trap Scene with Different Type of Vibe beats, you keep 100% of your artist streaming royalties on Spotify, Apple Music, and Tidal.",
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
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "Atlanta 808 Trap Deals",
      "slug": "us/atlanta-trap",
      "description": "Hard-hitting dark 808s and Future style bounce."
    },
    {
      "name": "Metro Boomin Style",
      "slug": "../../vibe/metro-boomin-dark-trap",
      "description": "Dark cinematic trap instrumentals with heavy low-end."
    },
    {
      "name": "Lil Baby 4PF Trap",
      "slug": "../../vibe/lil-baby-4pf-trap",
      "description": "Fast-paced melodic piano trap bounces."
    }
  ],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify and Apple Music in USA \u2013 Atlanta Trap Scene?",
      "answer": "Yes! All WAV and MP3 leases purchased through Different Type of Vibe include commercial streaming rights for Spotify, Apple Music, YouTube, and worldwide distribution. You keep 100% of your artist streaming royalties."
    },
    {
      "question": "How do I register my songs with ASCAP or BMI in the United States?",
      "answer": "When registering your copyright or work with ASCAP or BMI, list yourself as 100% owner of your lyrics and performance, and designate Onzieb (Different Type of Vibe) as the music producer/composer according to your signed PDF license contract."
    },
    {
      "question": "How fast do I receive my untagged audio files?",
      "answer": "Immediately upon checkout via Apple Pay, Google Pay, or Credit/Debit Card, an untagged 24-bit WAV file, MP3 version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "us/los-angeles": {
  "name": "USA \u2013 Los Angeles & West Coast",
  "flag": "\ud83c\uddfa\ud83c\uddf8",
  "currency": "USD ($)",
  "currencyCode": "USD",
  "gateways": "Apple Pay, Google Pay, Credit/Debit Cards, Cash App Pay",
  "pro": "ASCAP & BMI",
  "proFullName": "American Society of Composers, Authors and Publishers (ASCAP) & Broadcast Music, Inc. (BMI)",
  "proGuide": "When releasing tracks in USA \u2013 Los Angeles & West Coast with Different Type of Vibe beats, you keep 100% of your artist streaming royalties on Spotify, Apple Music, and Tidal.",
  "headline": "Los Angeles Rap Beats for Sale: West Coast Bounce & Melodic Synths",
  "description": "West Coast rap instrumentals crafted with authentic California bounce, crisp claps, and melodic chord progressions inspired by Kendrick Lamar, Mustard, and Larry June.",
  "popularGenres": [
    "West Coast Rap",
    "LA Melodic Trap",
    "Mustard Bounce"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "West Coast Scene Hub",
      "slug": "../../scene/la-melodic-rap-beats",
      "description": "Authentic California bounce and synth leads."
    },
    {
      "name": "Kendrick Lamar Style",
      "slug": "../../vibe/kendrick-lamar-west-coast",
      "description": "Dynamic lyrical rap and progressive West Coast production."
    }
  ],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify and Apple Music in USA \u2013 Los Angeles & West Coast?",
      "answer": "Yes! All WAV and MP3 leases purchased through Different Type of Vibe include commercial streaming rights for Spotify, Apple Music, YouTube, and worldwide distribution. You keep 100% of your artist streaming royalties."
    },
    {
      "question": "How do I register my songs with ASCAP or BMI in the United States?",
      "answer": "When registering your copyright or work with ASCAP or BMI, list yourself as 100% owner of your lyrics and performance, and designate Onzieb (Different Type of Vibe) as the music producer/composer according to your signed PDF license contract."
    },
    {
      "question": "How fast do I receive my untagged audio files?",
      "answer": "Immediately upon checkout via Apple Pay, Google Pay, or Credit/Debit Card, an untagged 24-bit WAV file, MP3 version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "us/new-york": {
  "name": "USA \u2013 New York City Drill & Boom Bap",
  "flag": "\ud83c\uddfa\ud83c\uddf8",
  "currency": "USD ($)",
  "currencyCode": "USD",
  "gateways": "Apple Pay, Google Pay, Credit/Debit Cards, Cash App Pay",
  "pro": "ASCAP & BMI",
  "proFullName": "American Society of Composers, Authors and Publishers (ASCAP) & Broadcast Music, Inc. (BMI)",
  "proGuide": "When releasing tracks in USA \u2013 New York City Drill & Boom Bap with Different Type of Vibe beats, you keep 100% of your artist streaming royalties on Spotify, Apple Music, and Tidal.",
  "headline": "NYC Drill & Boom Bap Beats for Sale: Gritty 808 Slides & Classic Samples",
  "description": "Authentic New York instrumentals ranging from aggressive Brooklyn/Bronx sliding drill 808s to dusty soulful boom bap chops inspired by Pop Smoke and Griselda.",
  "popularGenres": [
    "NYC Drill",
    "Brooklyn 808 Slides",
    "East Coast Boom Bap"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "NYC Drill Scene Hub",
      "slug": "../../scene/nyc-drill-beats",
      "description": "Aggressive sliding 808s and syncopated drill percussion."
    },
    {
      "name": "Soulful Boom Bap Hub",
      "slug": "../../genre/soulful-boom-bap",
      "description": "Dusty vinyl chops and heavy punchy boom bap drums."
    }
  ],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify and Apple Music in USA \u2013 New York City Drill & Boom Bap?",
      "answer": "Yes! All WAV and MP3 leases purchased through Different Type of Vibe include commercial streaming rights for Spotify, Apple Music, YouTube, and worldwide distribution. You keep 100% of your artist streaming royalties."
    },
    {
      "question": "How do I register my songs with ASCAP or BMI in the United States?",
      "answer": "When registering your copyright or work with ASCAP or BMI, list yourself as 100% owner of your lyrics and performance, and designate Onzieb (Different Type of Vibe) as the music producer/composer according to your signed PDF license contract."
    },
    {
      "question": "How fast do I receive my untagged audio files?",
      "answer": "Immediately upon checkout via Apple Pay, Google Pay, or Credit/Debit Card, an untagged 24-bit WAV file, MP3 version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "us/chicago": {
  "name": "USA \u2013 Chicago Drill & Soul Trap",
  "flag": "\ud83c\uddfa\ud83c\uddf8",
  "currency": "USD ($)",
  "currencyCode": "USD",
  "gateways": "Apple Pay, Google Pay, Credit/Debit Cards, Cash App Pay",
  "pro": "ASCAP & BMI",
  "proFullName": "American Society of Composers, Authors and Publishers (ASCAP) & Broadcast Music, Inc. (BMI)",
  "proGuide": "When releasing tracks in USA \u2013 Chicago Drill & Soul Trap with Different Type of Vibe beats, you keep 100% of your artist streaming royalties on Spotify, Apple Music, and Tidal.",
  "headline": "Chicago Drill & Soulful Trap Beats for Sale: Hard Snares & Emotional Keys",
  "description": "Chicago style beats featuring hard-hitting drill bounce and emotional soul-infused melodic piano loops inspired by Lil Durk, Polo G, and Juice WRLD.",
  "popularGenres": [
    "Chicago Drill",
    "Piano Trap",
    "Soul Trap"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "Chicago Drill Scene",
      "slug": "../../scene/chicago-drill-beats",
      "description": "Aggressive drill 808s and authentic Chicago bounce."
    },
    {
      "name": "Polo G Piano Trap",
      "slug": "../../vibe/polo-g-piano-trap",
      "description": "Emotional acoustic piano melodies and hard rolling 808s."
    }
  ],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify and Apple Music in USA \u2013 Chicago Drill & Soul Trap?",
      "answer": "Yes! All WAV and MP3 leases purchased through Different Type of Vibe include commercial streaming rights for Spotify, Apple Music, YouTube, and worldwide distribution. You keep 100% of your artist streaming royalties."
    },
    {
      "question": "How do I register my songs with ASCAP or BMI in the United States?",
      "answer": "When registering your copyright or work with ASCAP or BMI, list yourself as 100% owner of your lyrics and performance, and designate Onzieb (Different Type of Vibe) as the music producer/composer according to your signed PDF license contract."
    },
    {
      "question": "How fast do I receive my untagged audio files?",
      "answer": "Immediately upon checkout via Apple Pay, Google Pay, or Credit/Debit Card, an untagged 24-bit WAV file, MP3 version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "us/houston": {
  "name": "USA \u2013 Houston & Texas Chopped Trap",
  "flag": "\ud83c\uddfa\ud83c\uddf8",
  "currency": "USD ($)",
  "currencyCode": "USD",
  "gateways": "Apple Pay, Google Pay, Credit/Debit Cards, Cash App Pay",
  "pro": "ASCAP & BMI",
  "proFullName": "American Society of Composers, Authors and Publishers (ASCAP) & Broadcast Music, Inc. (BMI)",
  "proGuide": "When releasing tracks in USA \u2013 Houston & Texas Chopped Trap with Different Type of Vibe beats, you keep 100% of your artist streaming royalties on Spotify, Apple Music, and Tidal.",
  "headline": "Houston Chopped Trap Beats for Sale: Psychedelic 808s & Low-End Bounce",
  "description": "Texas trap instrumentals blending chopped-and-screwed atmospheres, heavy rolling basslines, and psychedelic synth layers inspired by Travis Scott and Don Toliver.",
  "popularGenres": [
    "Houston Chopped Trap",
    "Psychedelic Trap",
    "Texas 808s"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "Houston Chopped Trap Scene",
      "slug": "../../scene/houston-chopped-trap",
      "description": "Deep slowed melodies and aggressive 808 bounce."
    },
    {
      "name": "Travis Scott Psychedelic Trap",
      "slug": "../../vibe/travis-scott-psychedelic-trap",
      "description": "Cinematic Mike Dean synth layers and hard trap beats."
    }
  ],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify and Apple Music in USA \u2013 Houston & Texas Chopped Trap?",
      "answer": "Yes! All WAV and MP3 leases purchased through Different Type of Vibe include commercial streaming rights for Spotify, Apple Music, YouTube, and worldwide distribution. You keep 100% of your artist streaming royalties."
    },
    {
      "question": "How do I register my songs with ASCAP or BMI in the United States?",
      "answer": "When registering your copyright or work with ASCAP or BMI, list yourself as 100% owner of your lyrics and performance, and designate Onzieb (Different Type of Vibe) as the music producer/composer according to your signed PDF license contract."
    },
    {
      "question": "How fast do I receive my untagged audio files?",
      "answer": "Immediately upon checkout via Apple Pay, Google Pay, or Credit/Debit Card, an untagged 24-bit WAV file, MP3 version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "us/memphis": {
  "name": "USA \u2013 Memphis Dark 808 Trap",
  "flag": "\ud83c\uddfa\ud83c\uddf8",
  "currency": "USD ($)",
  "currencyCode": "USD",
  "gateways": "Apple Pay, Google Pay, Credit/Debit Cards, Cash App Pay",
  "pro": "ASCAP & BMI",
  "proFullName": "American Society of Composers, Authors and Publishers (ASCAP) & Broadcast Music, Inc. (BMI)",
  "proGuide": "When releasing tracks in USA \u2013 Memphis Dark 808 Trap with Different Type of Vibe beats, you keep 100% of your artist streaming royalties on Spotify, Apple Music, and Tidal.",
  "headline": "Memphis Dark Trap Beats for Sale: Menacing Bells, Cowbells & Punchy 808s",
  "description": "Raw, aggressive Memphis rap instrumentals featuring dark piano chords, punchy kicks, and triplet hi-hats inspired by Pooh Shiesty, GloRilla, and Moneybagg Yo.",
  "popularGenres": [
    "Memphis Dark Trap",
    "Aggressive 808s",
    "Street Rap Beats"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "Memphis Dark Trap Scene",
      "slug": "../../scene/memphis-dark-trap",
      "description": "Menacing melodies and thunderous 808 basslines."
    },
    {
      "name": "Moneybagg Yo Memphis Vibe",
      "slug": "../../vibe/moneybagg-yo-memphis-trap",
      "description": "Heavy brass and punchy southern street beats."
    }
  ],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify and Apple Music in USA \u2013 Memphis Dark 808 Trap?",
      "answer": "Yes! All WAV and MP3 leases purchased through Different Type of Vibe include commercial streaming rights for Spotify, Apple Music, YouTube, and worldwide distribution. You keep 100% of your artist streaming royalties."
    },
    {
      "question": "How do I register my songs with ASCAP or BMI in the United States?",
      "answer": "When registering your copyright or work with ASCAP or BMI, list yourself as 100% owner of your lyrics and performance, and designate Onzieb (Different Type of Vibe) as the music producer/composer according to your signed PDF license contract."
    },
    {
      "question": "How fast do I receive my untagged audio files?",
      "answer": "Immediately upon checkout via Apple Pay, Google Pay, or Credit/Debit Card, an untagged 24-bit WAV file, MP3 version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "us/detroit": {
  "name": "USA \u2013 Detroit & Michigan Off-Beat Trap",
  "flag": "\ud83c\uddfa\ud83c\uddf8",
  "currency": "USD ($)",
  "currencyCode": "USD",
  "gateways": "Apple Pay, Google Pay, Credit/Debit Cards, Cash App Pay",
  "pro": "ASCAP & BMI",
  "proFullName": "American Society of Composers, Authors and Publishers (ASCAP) & Broadcast Music, Inc. (BMI)",
  "proGuide": "When releasing tracks in USA \u2013 Detroit & Michigan Off-Beat Trap with Different Type of Vibe beats, you keep 100% of your artist streaming royalties on Spotify, Apple Music, and Tidal.",
  "headline": "Detroit Style Beats for Sale: Fast Off-Beat Basslines & Punchy Percussion",
  "description": "Authentic Detroit and Flint instrumentals with signature syncopated basslines, fast 190-200 BPM bounce, and bells inspired by Babyface Ray, Veeze, and 42 Dugg.",
  "popularGenres": [
    "Detroit Style",
    "Flint Beats",
    "Off-Beat Bass"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "Detroit Scene Hub",
      "slug": "../../scene/detroit-style-beats",
      "description": "Off-beat 808 bounce and fast syncopated piano runs."
    },
    {
      "name": "Veeze Detroit Wavy Trap",
      "slug": "../../vibe/veeze-detroit-wavy-trap",
      "description": "Chill wavy synths and signature Detroit percussion."
    }
  ],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify and Apple Music in USA \u2013 Detroit & Michigan Off-Beat Trap?",
      "answer": "Yes! All WAV and MP3 leases purchased through Different Type of Vibe include commercial streaming rights for Spotify, Apple Music, YouTube, and worldwide distribution. You keep 100% of your artist streaming royalties."
    },
    {
      "question": "How do I register my songs with ASCAP or BMI in the United States?",
      "answer": "When registering your copyright or work with ASCAP or BMI, list yourself as 100% owner of your lyrics and performance, and designate Onzieb (Different Type of Vibe) as the music producer/composer according to your signed PDF license contract."
    },
    {
      "question": "How fast do I receive my untagged audio files?",
      "answer": "Immediately upon checkout via Apple Pay, Google Pay, or Credit/Debit Card, an untagged 24-bit WAV file, MP3 version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "us/miami": {
  "name": "USA \u2013 Miami & South Florida Trap",
  "flag": "\ud83c\uddfa\ud83c\uddf8",
  "currency": "USD ($)",
  "currencyCode": "USD",
  "gateways": "Apple Pay, Google Pay, Credit/Debit Cards, Cash App Pay",
  "pro": "ASCAP & BMI",
  "proFullName": "American Society of Composers, Authors and Publishers (ASCAP) & Broadcast Music, Inc. (BMI)",
  "proGuide": "When releasing tracks in USA \u2013 Miami & South Florida Trap with Different Type of Vibe beats, you keep 100% of your artist streaming royalties on Spotify, Apple Music, and Tidal.",
  "headline": "Miami Trap Beats for Sale: High-Energy Bass, 808s & Island Bounce",
  "description": "High-octane South Florida trap instrumentals featuring heavy distorted low-end, bouncy percussion, and vibrant melodies inspired by Kodak Black and Denzel Curry.",
  "popularGenres": [
    "Miami Trap",
    "Florida Street Rap",
    "High-Energy 808s"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "Miami South Florida Scene",
      "slug": "../../scene/miami-south-florida-beats",
      "description": "Heavy sub bass and bouncy Florida percussion."
    },
    {
      "name": "Kodak Black Florida Blues",
      "slug": "../../vibe/kodak-black-florida-blues",
      "description": "Emotional guitar chords and raw street trap bounce."
    }
  ],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify and Apple Music in USA \u2013 Miami & South Florida Trap?",
      "answer": "Yes! All WAV and MP3 leases purchased through Different Type of Vibe include commercial streaming rights for Spotify, Apple Music, YouTube, and worldwide distribution. You keep 100% of your artist streaming royalties."
    },
    {
      "question": "How do I register my songs with ASCAP or BMI in the United States?",
      "answer": "When registering your copyright or work with ASCAP or BMI, list yourself as 100% owner of your lyrics and performance, and designate Onzieb (Different Type of Vibe) as the music producer/composer according to your signed PDF license contract."
    },
    {
      "question": "How fast do I receive my untagged audio files?",
      "answer": "Immediately upon checkout via Apple Pay, Google Pay, or Credit/Debit Card, an untagged 24-bit WAV file, MP3 version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "us/philadelphia": {
  "name": "USA \u2013 Philadelphia Club & Drill",
  "flag": "\ud83c\uddfa\ud83c\uddf8",
  "currency": "USD ($)",
  "currencyCode": "USD",
  "gateways": "Apple Pay, Google Pay, Credit/Debit Cards, Cash App Pay",
  "pro": "ASCAP & BMI",
  "proFullName": "American Society of Composers, Authors and Publishers (ASCAP) & Broadcast Music, Inc. (BMI)",
  "proGuide": "When releasing tracks in USA \u2013 Philadelphia Club & Drill with Different Type of Vibe beats, you keep 100% of your artist streaming royalties on Spotify, Apple Music, and Tidal.",
  "headline": "Philly Club & Drill Beats for Sale: Fast Bouncy Kicks & Dark Melodies",
  "description": "Philly street instrumentals combining fast-paced club kick patterns, dark trap synth layers, and hard drill slides inspired by Lil Uzi Vert and OT7 Quanny.",
  "popularGenres": [
    "Philly Club Trap",
    "Philly Drill",
    "Fast BPM Bounce"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "Philly Club Drill Scene",
      "slug": "../../scene/philly-club-drill",
      "description": "Fast syncopated kicks and dark street melodies."
    }
  ],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify and Apple Music in USA \u2013 Philadelphia Club & Drill?",
      "answer": "Yes! All WAV and MP3 leases purchased through Different Type of Vibe include commercial streaming rights for Spotify, Apple Music, YouTube, and worldwide distribution. You keep 100% of your artist streaming royalties."
    },
    {
      "question": "How do I register my songs with ASCAP or BMI in the United States?",
      "answer": "When registering your copyright or work with ASCAP or BMI, list yourself as 100% owner of your lyrics and performance, and designate Onzieb (Different Type of Vibe) as the music producer/composer according to your signed PDF license contract."
    },
    {
      "question": "How fast do I receive my untagged audio files?",
      "answer": "Immediately upon checkout via Apple Pay, Google Pay, or Credit/Debit Card, an untagged 24-bit WAV file, MP3 version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "us/dmv": {
  "name": "USA \u2013 DMV Crank & Flow",
  "flag": "\ud83c\uddfa\ud83c\uddf8",
  "currency": "USD ($)",
  "currencyCode": "USD",
  "gateways": "Apple Pay, Google Pay, Credit/Debit Cards, Cash App Pay",
  "pro": "ASCAP & BMI",
  "proFullName": "American Society of Composers, Authors and Publishers (ASCAP) & Broadcast Music, Inc. (BMI)",
  "proGuide": "When releasing tracks in USA \u2013 DMV Crank & Flow with Different Type of Vibe beats, you keep 100% of your artist streaming royalties on Spotify, Apple Music, and Tidal.",
  "headline": "DMV Beats for Sale: Signature Off-Beat Crank, Triplet Snares & Heavy Bass",
  "description": "Distinct DMV area instrumentals engineered for fast off-beat flows, aggressive triplet snares, and rolling sub bass inspired by DC and Maryland street rap.",
  "popularGenres": [
    "DMV Crank",
    "Off-Beat Flow",
    "DC Street Beats"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "DMV Crank Flow Scene",
      "slug": "../../scene/dmv-crank-flow-beats",
      "description": "Signature DMV rolling hi-hats and punchy sub bass."
    }
  ],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify and Apple Music in USA \u2013 DMV Crank & Flow?",
      "answer": "Yes! All WAV and MP3 leases purchased through Different Type of Vibe include commercial streaming rights for Spotify, Apple Music, YouTube, and worldwide distribution. You keep 100% of your artist streaming royalties."
    },
    {
      "question": "How do I register my songs with ASCAP or BMI in the United States?",
      "answer": "When registering your copyright or work with ASCAP or BMI, list yourself as 100% owner of your lyrics and performance, and designate Onzieb (Different Type of Vibe) as the music producer/composer according to your signed PDF license contract."
    },
    {
      "question": "How fast do I receive my untagged audio files?",
      "answer": "Immediately upon checkout via Apple Pay, Google Pay, or Credit/Debit Card, an untagged 24-bit WAV file, MP3 version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "us/dallas": {
  "name": "USA \u2013 Dallas & North Texas Trap",
  "flag": "\ud83c\uddfa\ud83c\uddf8",
  "currency": "USD ($)",
  "currencyCode": "USD",
  "gateways": "Apple Pay, Google Pay, Credit/Debit Cards, Cash App Pay",
  "pro": "ASCAP & BMI",
  "proFullName": "American Society of Composers, Authors and Publishers (ASCAP) & Broadcast Music, Inc. (BMI)",
  "proGuide": "When releasing tracks in USA \u2013 Dallas & North Texas Trap with Different Type of Vibe beats, you keep 100% of your artist streaming royalties on Spotify, Apple Music, and Tidal.",
  "headline": "Dallas Trap Beats for Sale: Bouncy 808s & Catchy Melodic Leads",
  "description": "Texas melodic bounce engineered with crisp clapping snares and bright synth lines for radio-ready southern anthems.",
  "popularGenres": [
    "Dallas Trap",
    "Texas Bounce",
    "Melodic 808s"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify and Apple Music in USA \u2013 Dallas & North Texas Trap?",
      "answer": "Yes! All WAV and MP3 leases purchased through Different Type of Vibe include commercial streaming rights for Spotify, Apple Music, YouTube, and worldwide distribution. You keep 100% of your artist streaming royalties."
    },
    {
      "question": "How do I register my songs with ASCAP or BMI in the United States?",
      "answer": "When registering your copyright or work with ASCAP or BMI, list yourself as 100% owner of your lyrics and performance, and designate Onzieb (Different Type of Vibe) as the music producer/composer according to your signed PDF license contract."
    },
    {
      "question": "How fast do I receive my untagged audio files?",
      "answer": "Immediately upon checkout via Apple Pay, Google Pay, or Credit/Debit Card, an untagged 24-bit WAV file, MP3 version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "us/baton-rouge": {
  "name": "USA \u2013 Louisiana & Baton Rouge Melodic Trap",
  "flag": "\ud83c\uddfa\ud83c\uddf8",
  "currency": "USD ($)",
  "currencyCode": "USD",
  "gateways": "Apple Pay, Google Pay, Credit/Debit Cards, Cash App Pay",
  "pro": "ASCAP & BMI",
  "proFullName": "American Society of Composers, Authors and Publishers (ASCAP) & Broadcast Music, Inc. (BMI)",
  "proGuide": "When releasing tracks in USA \u2013 Louisiana & Baton Rouge Melodic Trap with Different Type of Vibe beats, you keep 100% of your artist streaming royalties on Spotify, Apple Music, and Tidal.",
  "headline": "Baton Rouge Trap Beats for Sale: Pain Melodies, Acoustic Guitars & Hard 808s",
  "description": "Heartfelt southern street instrumentals with emotional guitar progressions and driving 808 percussion inspired by NBA YoungBoy and Kevin Gates.",
  "popularGenres": [
    "Baton Rouge Trap",
    "Pain Beats",
    "Louisiana Street Rap"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "Louisiana Baton Rouge Scene",
      "slug": "../../scene/louisiana-baton-rouge-beats",
      "description": "Emotional guitars and aggressive southern 808s."
    },
    {
      "name": "NBA YoungBoy Louisiana Vibe",
      "slug": "../../vibe/nba-youngboy-louisiana-trap",
      "description": "Raw pain acoustic progressions with hard punchy drums."
    }
  ],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify and Apple Music in USA \u2013 Louisiana & Baton Rouge Melodic Trap?",
      "answer": "Yes! All WAV and MP3 leases purchased through Different Type of Vibe include commercial streaming rights for Spotify, Apple Music, YouTube, and worldwide distribution. You keep 100% of your artist streaming royalties."
    },
    {
      "question": "How do I register my songs with ASCAP or BMI in the United States?",
      "answer": "When registering your copyright or work with ASCAP or BMI, list yourself as 100% owner of your lyrics and performance, and designate Onzieb (Different Type of Vibe) as the music producer/composer according to your signed PDF license contract."
    },
    {
      "question": "How fast do I receive my untagged audio files?",
      "answer": "Immediately upon checkout via Apple Pay, Google Pay, or Credit/Debit Card, an untagged 24-bit WAV file, MP3 version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "us/charlotte": {
  "name": "USA \u2013 Charlotte & Carolinas 808 Trap",
  "flag": "\ud83c\uddfa\ud83c\uddf8",
  "currency": "USD ($)",
  "currencyCode": "USD",
  "gateways": "Apple Pay, Google Pay, Credit/Debit Cards, Cash App Pay",
  "pro": "ASCAP & BMI",
  "proFullName": "American Society of Composers, Authors and Publishers (ASCAP) & Broadcast Music, Inc. (BMI)",
  "proGuide": "When releasing tracks in USA \u2013 Charlotte & Carolinas 808 Trap with Different Type of Vibe beats, you keep 100% of your artist streaming royalties on Spotify, Apple Music, and Tidal.",
  "headline": "Carolinas 808 Trap Beats for Sale: High-Energy Bounce & Fast Flutes",
  "description": "Up-tempo bouncy street beats with bouncing flute leads and driving 808 basslines inspired by the North Carolina rap explosion.",
  "popularGenres": [
    "Carolinas Trap",
    "Charlotte Bounces",
    "High-Energy 808s"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify and Apple Music in USA \u2013 Charlotte & Carolinas 808 Trap?",
      "answer": "Yes! All WAV and MP3 leases purchased through Different Type of Vibe include commercial streaming rights for Spotify, Apple Music, YouTube, and worldwide distribution. You keep 100% of your artist streaming royalties."
    },
    {
      "question": "How do I register my songs with ASCAP or BMI in the United States?",
      "answer": "When registering your copyright or work with ASCAP or BMI, list yourself as 100% owner of your lyrics and performance, and designate Onzieb (Different Type of Vibe) as the music producer/composer according to your signed PDF license contract."
    },
    {
      "question": "How fast do I receive my untagged audio files?",
      "answer": "Immediately upon checkout via Apple Pay, Google Pay, or Credit/Debit Card, an untagged 24-bit WAV file, MP3 version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "us/bay-area": {
  "name": "USA \u2013 Bay Area & Northern California Hyphy",
  "flag": "\ud83c\uddfa\ud83c\uddf8",
  "currency": "USD ($)",
  "currencyCode": "USD",
  "gateways": "Apple Pay, Google Pay, Credit/Debit Cards, Cash App Pay",
  "pro": "ASCAP & BMI",
  "proFullName": "American Society of Composers, Authors and Publishers (ASCAP) & Broadcast Music, Inc. (BMI)",
  "proGuide": "When releasing tracks in USA \u2013 Bay Area & Northern California Hyphy with Different Type of Vibe beats, you keep 100% of your artist streaming royalties on Spotify, Apple Music, and Tidal.",
  "headline": "Bay Area Hyphy & West Coast Bounce Beats for Sale: Funky Basslines & Claps",
  "description": "Northern California slaps featuring warm synth chords, funky slap basslines, and uptempo party bounce inspired by Larry June and E-40.",
  "popularGenres": [
    "Bay Area Hyphy",
    "West Coast Slaps",
    "California Funk"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "Bay Area Rap Scene",
      "slug": "../../scene/bay-area-rap-beats",
      "description": "Bouncy West Coast tempo and warm California analog synths."
    }
  ],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify and Apple Music in USA \u2013 Bay Area & Northern California Hyphy?",
      "answer": "Yes! All WAV and MP3 leases purchased through Different Type of Vibe include commercial streaming rights for Spotify, Apple Music, YouTube, and worldwide distribution. You keep 100% of your artist streaming royalties."
    },
    {
      "question": "How do I register my songs with ASCAP or BMI in the United States?",
      "answer": "When registering your copyright or work with ASCAP or BMI, list yourself as 100% owner of your lyrics and performance, and designate Onzieb (Different Type of Vibe) as the music producer/composer according to your signed PDF license contract."
    },
    {
      "question": "How fast do I receive my untagged audio files?",
      "answer": "Immediately upon checkout via Apple Pay, Google Pay, or Credit/Debit Card, an untagged 24-bit WAV file, MP3 version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "us/st-louis": {
  "name": "USA \u2013 St. Louis Melodic Trap",
  "flag": "\ud83c\uddfa\ud83c\uddf8",
  "currency": "USD ($)",
  "currencyCode": "USD",
  "gateways": "Apple Pay, Google Pay, Credit/Debit Cards, Cash App Pay",
  "pro": "ASCAP & BMI",
  "proFullName": "American Society of Composers, Authors and Publishers (ASCAP) & Broadcast Music, Inc. (BMI)",
  "proGuide": "When releasing tracks in USA \u2013 St. Louis Melodic Trap with Different Type of Vibe beats, you keep 100% of your artist streaming royalties on Spotify, Apple Music, and Tidal.",
  "headline": "St. Louis Melodic Trap Beats for Sale: Catchy Hooks & Mid-West Bounce",
  "description": "Smooth melodic trap with clean 808 patterns and crisp hooks designed for Midwest recording vocalists.",
  "popularGenres": [
    "St. Louis Trap",
    "Midwest Bounce",
    "Melodic Hip Hop"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify and Apple Music in USA \u2013 St. Louis Melodic Trap?",
      "answer": "Yes! All WAV and MP3 leases purchased through Different Type of Vibe include commercial streaming rights for Spotify, Apple Music, YouTube, and worldwide distribution. You keep 100% of your artist streaming royalties."
    },
    {
      "question": "How do I register my songs with ASCAP or BMI in the United States?",
      "answer": "When registering your copyright or work with ASCAP or BMI, list yourself as 100% owner of your lyrics and performance, and designate Onzieb (Different Type of Vibe) as the music producer/composer according to your signed PDF license contract."
    },
    {
      "question": "How fast do I receive my untagged audio files?",
      "answer": "Immediately upon checkout via Apple Pay, Google Pay, or Credit/Debit Card, an untagged 24-bit WAV file, MP3 version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "us/cleveland": {
  "name": "USA \u2013 Cleveland Melodic Hip Hop",
  "flag": "\ud83c\uddfa\ud83c\uddf8",
  "currency": "USD ($)",
  "currencyCode": "USD",
  "gateways": "Apple Pay, Google Pay, Credit/Debit Cards, Cash App Pay",
  "pro": "ASCAP & BMI",
  "proFullName": "American Society of Composers, Authors and Publishers (ASCAP) & Broadcast Music, Inc. (BMI)",
  "proGuide": "When releasing tracks in USA \u2013 Cleveland Melodic Hip Hop with Different Type of Vibe beats, you keep 100% of your artist streaming royalties on Spotify, Apple Music, and Tidal.",
  "headline": "Cleveland Beats for Sale: Atmospheric Synths, Melodic Harmonies & Trap Drums",
  "description": "Spacey melodic trap and soulful hip hop instrumentals tailored for deep storytelling and dynamic vocal performances.",
  "popularGenres": [
    "Cleveland Hip Hop",
    "Atmospheric Trap",
    "Melodic Soundscapes"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify and Apple Music in USA \u2013 Cleveland Melodic Hip Hop?",
      "answer": "Yes! All WAV and MP3 leases purchased through Different Type of Vibe include commercial streaming rights for Spotify, Apple Music, YouTube, and worldwide distribution. You keep 100% of your artist streaming royalties."
    },
    {
      "question": "How do I register my songs with ASCAP or BMI in the United States?",
      "answer": "When registering your copyright or work with ASCAP or BMI, list yourself as 100% owner of your lyrics and performance, and designate Onzieb (Different Type of Vibe) as the music producer/composer according to your signed PDF license contract."
    },
    {
      "question": "How fast do I receive my untagged audio files?",
      "answer": "Immediately upon checkout via Apple Pay, Google Pay, or Credit/Debit Card, an untagged 24-bit WAV file, MP3 version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "us/nashville": {
  "name": "USA \u2013 Nashville Hip Hop & Soul Trap",
  "flag": "\ud83c\uddfa\ud83c\uddf8",
  "currency": "USD ($)",
  "currencyCode": "USD",
  "gateways": "Apple Pay, Google Pay, Credit/Debit Cards, Cash App Pay",
  "pro": "ASCAP & BMI",
  "proFullName": "American Society of Composers, Authors and Publishers (ASCAP) & Broadcast Music, Inc. (BMI)",
  "proGuide": "When releasing tracks in USA \u2013 Nashville Hip Hop & Soul Trap with Different Type of Vibe beats, you keep 100% of your artist streaming royalties on Spotify, Apple Music, and Tidal.",
  "headline": "Nashville Hip Hop Beats for Sale: Live Instrumentation & Modern Trap Bounce",
  "description": "Soulful southern rap instrumentals blending organic guitars, live Rhodes keys, and modern punchy 808 rhythms.",
  "popularGenres": [
    "Nashville Hip Hop",
    "Live Instrument Trap",
    "Soul Trap"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify and Apple Music in USA \u2013 Nashville Hip Hop & Soul Trap?",
      "answer": "Yes! All WAV and MP3 leases purchased through Different Type of Vibe include commercial streaming rights for Spotify, Apple Music, YouTube, and worldwide distribution. You keep 100% of your artist streaming royalties."
    },
    {
      "question": "How do I register my songs with ASCAP or BMI in the United States?",
      "answer": "When registering your copyright or work with ASCAP or BMI, list yourself as 100% owner of your lyrics and performance, and designate Onzieb (Different Type of Vibe) as the music producer/composer according to your signed PDF license contract."
    },
    {
      "question": "How fast do I receive my untagged audio files?",
      "answer": "Immediately upon checkout via Apple Pay, Google Pay, or Credit/Debit Card, an untagged 24-bit WAV file, MP3 version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "us/phoenix": {
  "name": "USA \u2013 Phoenix & Southwest Rap",
  "flag": "\ud83c\uddfa\ud83c\uddf8",
  "currency": "USD ($)",
  "currencyCode": "USD",
  "gateways": "Apple Pay, Google Pay, Credit/Debit Cards, Cash App Pay",
  "pro": "ASCAP & BMI",
  "proFullName": "American Society of Composers, Authors and Publishers (ASCAP) & Broadcast Music, Inc. (BMI)",
  "proGuide": "When releasing tracks in USA \u2013 Phoenix & Southwest Rap with Different Type of Vibe beats, you keep 100% of your artist streaming royalties on Spotify, Apple Music, and Tidal.",
  "headline": "Phoenix Southwest Rap Beats for Sale: Crisp Hi-Hats & Desert Melodies",
  "description": "Southwestern modern trap beats with tight rhythmic bounce and atmospheric vocal pads.",
  "popularGenres": [
    "Southwest Rap",
    "Desert Trap",
    "Modern Hip Hop"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify and Apple Music in USA \u2013 Phoenix & Southwest Rap?",
      "answer": "Yes! All WAV and MP3 leases purchased through Different Type of Vibe include commercial streaming rights for Spotify, Apple Music, YouTube, and worldwide distribution. You keep 100% of your artist streaming royalties."
    },
    {
      "question": "How do I register my songs with ASCAP or BMI in the United States?",
      "answer": "When registering your copyright or work with ASCAP or BMI, list yourself as 100% owner of your lyrics and performance, and designate Onzieb (Different Type of Vibe) as the music producer/composer according to your signed PDF license contract."
    },
    {
      "question": "How fast do I receive my untagged audio files?",
      "answer": "Immediately upon checkout via Apple Pay, Google Pay, or Credit/Debit Card, an untagged 24-bit WAV file, MP3 version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "us/seattle": {
  "name": "USA \u2013 Seattle Pacific Northwest Hip Hop",
  "flag": "\ud83c\uddfa\ud83c\uddf8",
  "currency": "USD ($)",
  "currencyCode": "USD",
  "gateways": "Apple Pay, Google Pay, Credit/Debit Cards, Cash App Pay",
  "pro": "ASCAP & BMI",
  "proFullName": "American Society of Composers, Authors and Publishers (ASCAP) & Broadcast Music, Inc. (BMI)",
  "proGuide": "When releasing tracks in USA \u2013 Seattle Pacific Northwest Hip Hop with Different Type of Vibe beats, you keep 100% of your artist streaming royalties on Spotify, Apple Music, and Tidal.",
  "headline": "Seattle Hip Hop Beats for Sale: Moody Lofi Chords & Punchy Underground Drums",
  "description": "Atmospheric, introspective hip-hop instrumentals featuring rainy lofi textures, jazz piano samples, and uncompressed drums.",
  "popularGenres": [
    "Pacific Northwest Rap",
    "Moody Hip Hop",
    "Underground Lofi"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify and Apple Music in USA \u2013 Seattle Pacific Northwest Hip Hop?",
      "answer": "Yes! All WAV and MP3 leases purchased through Different Type of Vibe include commercial streaming rights for Spotify, Apple Music, YouTube, and worldwide distribution. You keep 100% of your artist streaming royalties."
    },
    {
      "question": "How do I register my songs with ASCAP or BMI in the United States?",
      "answer": "When registering your copyright or work with ASCAP or BMI, list yourself as 100% owner of your lyrics and performance, and designate Onzieb (Different Type of Vibe) as the music producer/composer according to your signed PDF license contract."
    },
    {
      "question": "How fast do I receive my untagged audio files?",
      "answer": "Immediately upon checkout via Apple Pay, Google Pay, or Credit/Debit Card, an untagged 24-bit WAV file, MP3 version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "us/denver": {
  "name": "USA \u2013 Denver Mountain Rap",
  "flag": "\ud83c\uddfa\ud83c\uddf8",
  "currency": "USD ($)",
  "currencyCode": "USD",
  "gateways": "Apple Pay, Google Pay, Credit/Debit Cards, Cash App Pay",
  "pro": "ASCAP & BMI",
  "proFullName": "American Society of Composers, Authors and Publishers (ASCAP) & Broadcast Music, Inc. (BMI)",
  "proGuide": "When releasing tracks in USA \u2013 Denver Mountain Rap with Different Type of Vibe beats, you keep 100% of your artist streaming royalties on Spotify, Apple Music, and Tidal.",
  "headline": "Denver Rap Beats for Sale: Chill Cloud Trap & Elevated Bass",
  "description": "Spacious, reverberant cloud trap beats and clean 808 bounce tailored for smooth lyrical delivery.",
  "popularGenres": [
    "Denver Rap",
    "Cloud Trap",
    "Chill Melodic Beats"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify and Apple Music in USA \u2013 Denver Mountain Rap?",
      "answer": "Yes! All WAV and MP3 leases purchased through Different Type of Vibe include commercial streaming rights for Spotify, Apple Music, YouTube, and worldwide distribution. You keep 100% of your artist streaming royalties."
    },
    {
      "question": "How do I register my songs with ASCAP or BMI in the United States?",
      "answer": "When registering your copyright or work with ASCAP or BMI, list yourself as 100% owner of your lyrics and performance, and designate Onzieb (Different Type of Vibe) as the music producer/composer according to your signed PDF license contract."
    },
    {
      "question": "How fast do I receive my untagged audio files?",
      "answer": "Immediately upon checkout via Apple Pay, Google Pay, or Credit/Debit Card, an untagged 24-bit WAV file, MP3 version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "us/california": {
  "name": "USA \u2013 California Rap & West Coast Hub",
  "flag": "\ud83c\uddfa\ud83c\uddf8",
  "currency": "USD ($)",
  "currencyCode": "USD",
  "gateways": "Apple Pay, Google Pay, Credit/Debit Cards, Cash App Pay",
  "pro": "ASCAP & BMI",
  "proFullName": "American Society of Composers, Authors and Publishers (ASCAP) & Broadcast Music, Inc. (BMI)",
  "proGuide": "When releasing tracks in USA \u2013 California Rap & West Coast Hub with Different Type of Vibe beats, you keep 100% of your artist streaming royalties on Spotify, Apple Music, and Tidal.",
  "headline": "California Rap Beats for Sale: West Coast Bounce, LA Melodic & Bay Area Slaps",
  "description": "Premium commercial WAV beat leases for recording artists in California. Instant untagged MP3, 24-bit WAV, and STEM trackouts cleared for ASCAP, BMI, and commercial streaming on Spotify & Apple Music.",
  "popularGenres": [
    "West Coast Bounce",
    "LA Melodic Rap",
    "Bay Area Hyphy",
    "Compton 808s"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "Los Angeles Beat Deals",
      "slug": "us/los-angeles",
      "description": "Melodic California synth trap and commercial bounce."
    },
    {
      "name": "Bay Area Hyphy Slaps",
      "slug": "us/bay-area",
      "description": "Funky baseline bounce inspired by E-40 and Larry June."
    },
    {
      "name": "Kendrick West Coast Style",
      "slug": "../../vibe/kendrick-lamar-west-coast",
      "description": "Deep lyrical hip-hop and dynamic California rhythm."
    }
  ],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify and Apple Music in USA \u2013 California Rap & West Coast Hub?",
      "answer": "Yes! All WAV and MP3 leases purchased through Different Type of Vibe include full commercial streaming rights for Spotify, Apple Music, YouTube, and worldwide distribution. You keep 100% of your artist streaming royalties."
    },
    {
      "question": "How do I register my songs with ASCAP or BMI in the United States?",
      "answer": "When registering your copyright or work with ASCAP or BMI, list yourself as 100% owner of your lyrics and performance, and designate Onzieb (Different Type of Vibe) as the music producer/composer according to your signed PDF license contract."
    },
    {
      "question": "How fast do I receive my untagged audio files?",
      "answer": "Immediately upon checkout via Apple Pay, Google Pay, or Credit/Debit Card, an untagged 24-bit WAV file, MP3 version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "us/texas": {
  "name": "USA \u2013 Texas Trap & Southern Bounce Hub",
  "flag": "\ud83c\uddfa\ud83c\uddf8",
  "currency": "USD ($)",
  "currencyCode": "USD",
  "gateways": "Apple Pay, Google Pay, Credit/Debit Cards, Cash App Pay",
  "pro": "ASCAP & BMI",
  "proFullName": "American Society of Composers, Authors and Publishers (ASCAP) & Broadcast Music, Inc. (BMI)",
  "proGuide": "When releasing tracks in USA \u2013 Texas Trap & Southern Bounce Hub with Different Type of Vibe beats, you keep 100% of your artist streaming royalties on Spotify, Apple Music, and Tidal.",
  "headline": "Texas Trap Beats for Sale: Houston Chopped 808s & Dallas Melodic Bounce",
  "description": "Hard-hitting southern trap beats for recording artists in Texas. Uncompressed 24-bit WAV leases and stem trackouts cleared for Spotify, Apple Music, and YouTube.",
  "popularGenres": [
    "Houston Chopped Trap",
    "Dallas Melodic",
    "Southern 808s",
    "Texas Street Rap"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "Houston Chopped Trap Deals",
      "slug": "us/houston",
      "description": "Atmospheric, psychedelic 808 trap."
    },
    {
      "name": "Dallas Trap Deals",
      "slug": "us/dallas",
      "description": "Fast energetic bounce with catchy synth melodies."
    },
    {
      "name": "Travis Scott Style Hub",
      "slug": "../../vibe/travis-scott-psychedelic-trap",
      "description": "Cinematic Mike Dean analog synth layers."
    }
  ],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify and Apple Music in USA \u2013 Texas Trap & Southern Bounce Hub?",
      "answer": "Yes! All WAV and MP3 leases purchased through Different Type of Vibe include full commercial streaming rights for Spotify, Apple Music, YouTube, and worldwide distribution. You keep 100% of your artist streaming royalties."
    },
    {
      "question": "How do I register my songs with ASCAP or BMI in the United States?",
      "answer": "When registering your copyright or work with ASCAP or BMI, list yourself as 100% owner of your lyrics and performance, and designate Onzieb (Different Type of Vibe) as the music producer/composer according to your signed PDF license contract."
    },
    {
      "question": "How fast do I receive my untagged audio files?",
      "answer": "Immediately upon checkout via Apple Pay, Google Pay, or Credit/Debit Card, an untagged 24-bit WAV file, MP3 version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "us/georgia": {
  "name": "USA \u2013 Georgia & Atlanta Trap Capital",
  "flag": "\ud83c\uddfa\ud83c\uddf8",
  "currency": "USD ($)",
  "currencyCode": "USD",
  "gateways": "Apple Pay, Google Pay, Credit/Debit Cards, Cash App Pay",
  "pro": "ASCAP & BMI",
  "proFullName": "American Society of Composers, Authors and Publishers (ASCAP) & Broadcast Music, Inc. (BMI)",
  "proGuide": "When releasing tracks in USA \u2013 Georgia & Atlanta Trap Capital with Different Type of Vibe beats, you keep 100% of your artist streaming royalties on Spotify, Apple Music, and Tidal.",
  "headline": "Georgia Trap Beats for Sale: Authentic Atlanta 808s & Commercial Leases",
  "description": "Authentic Atlanta trap beats crafted with rolling hi-hats, hard 808 kicks, and menacing brass. Cleared for ASCAP & BMI streaming royalties.",
  "popularGenres": [
    "Atlanta Trap",
    "Dark 808s",
    "Future Style",
    "Metro Boomin Sound"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "Atlanta Metro Deals",
      "slug": "us/atlanta",
      "description": "The capital of modern trap instrumentals."
    },
    {
      "name": "Metro Boomin Trap Vibe",
      "slug": "../../vibe/metro-boomin-dark-trap",
      "description": "Heavy low-end dark 808 trap."
    },
    {
      "name": "Lil Baby 4PF Trap",
      "slug": "../../vibe/lil-baby-4pf-trap",
      "description": "Fast-paced piano trap bounce."
    }
  ],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify and Apple Music in USA \u2013 Georgia & Atlanta Trap Capital?",
      "answer": "Yes! All WAV and MP3 leases purchased through Different Type of Vibe include full commercial streaming rights for Spotify, Apple Music, YouTube, and worldwide distribution. You keep 100% of your artist streaming royalties."
    },
    {
      "question": "How do I register my songs with ASCAP or BMI in the United States?",
      "answer": "When registering your copyright or work with ASCAP or BMI, list yourself as 100% owner of your lyrics and performance, and designate Onzieb (Different Type of Vibe) as the music producer/composer according to your signed PDF license contract."
    },
    {
      "question": "How fast do I receive my untagged audio files?",
      "answer": "Immediately upon checkout via Apple Pay, Google Pay, or Credit/Debit Card, an untagged 24-bit WAV file, MP3 version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "us/florida": {
  "name": "USA \u2013 Florida Street & Club Trap Hub",
  "flag": "\ud83c\uddfa\ud83c\uddf8",
  "currency": "USD ($)",
  "currencyCode": "USD",
  "gateways": "Apple Pay, Google Pay, Credit/Debit Cards, Cash App Pay",
  "pro": "ASCAP & BMI",
  "proFullName": "American Society of Composers, Authors and Publishers (ASCAP) & Broadcast Music, Inc. (BMI)",
  "proGuide": "When releasing tracks in USA \u2013 Florida Street & Club Trap Hub with Different Type of Vibe beats, you keep 100% of your artist streaming royalties on Spotify, Apple Music, and Tidal.",
  "headline": "Florida Beats for Sale: Miami High-Energy Bass & South Florida Street Rap",
  "description": "High-octane Florida trap beats featuring distorted 808s, island bounce, and blues guitars inspired by Kodak Black and Denzel Curry.",
  "popularGenres": [
    "Miami Club Trap",
    "South Florida Bass",
    "Blues Guitar Trap"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "Miami Trap Deals",
      "slug": "us/miami",
      "description": "High energy club trap and distorted basslines."
    },
    {
      "name": "Kodak Black Florida Blues",
      "slug": "../../vibe/kodak-black-florida-blues",
      "description": "Melodic blues guitar chords with raw 808 bounce."
    }
  ],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify and Apple Music in USA \u2013 Florida Street & Club Trap Hub?",
      "answer": "Yes! All WAV and MP3 leases purchased through Different Type of Vibe include full commercial streaming rights for Spotify, Apple Music, YouTube, and worldwide distribution. You keep 100% of your artist streaming royalties."
    },
    {
      "question": "How do I register my songs with ASCAP or BMI in the United States?",
      "answer": "When registering your copyright or work with ASCAP or BMI, list yourself as 100% owner of your lyrics and performance, and designate Onzieb (Different Type of Vibe) as the music producer/composer according to your signed PDF license contract."
    },
    {
      "question": "How fast do I receive my untagged audio files?",
      "answer": "Immediately upon checkout via Apple Pay, Google Pay, or Credit/Debit Card, an untagged 24-bit WAV file, MP3 version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "us/illinois": {
  "name": "USA \u2013 Illinois & Chicago Music Scene",
  "flag": "\ud83c\uddfa\ud83c\uddf8",
  "currency": "USD ($)",
  "currencyCode": "USD",
  "gateways": "Apple Pay, Google Pay, Credit/Debit Cards, Cash App Pay",
  "pro": "ASCAP & BMI",
  "proFullName": "American Society of Composers, Authors and Publishers (ASCAP) & Broadcast Music, Inc. (BMI)",
  "proGuide": "When releasing tracks in USA \u2013 Illinois & Chicago Music Scene with Different Type of Vibe beats, you keep 100% of your artist streaming royalties on Spotify, Apple Music, and Tidal.",
  "headline": "Illinois Beats for Sale: Hard Chicago Drill & Emotional Piano Trap",
  "description": "Chicago style drill and melodic pain instrumentals for Illinois vocalists and producers. Full 100% master royalty retention on Spotify and Apple Music.",
  "popularGenres": [
    "Chicago Drill",
    "Emotional Piano Trap",
    "Midwest Street Rap"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "Chicago Deals Hub",
      "slug": "us/chicago",
      "description": "Aggressive drill percussion and soul trap chords."
    },
    {
      "name": "Polo G Piano Trap",
      "slug": "../../vibe/polo-g-piano-trap",
      "description": "Acoustic piano leads and punchy drums."
    }
  ],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify and Apple Music in USA \u2013 Illinois & Chicago Music Scene?",
      "answer": "Yes! All WAV and MP3 leases purchased through Different Type of Vibe include full commercial streaming rights for Spotify, Apple Music, YouTube, and worldwide distribution. You keep 100% of your artist streaming royalties."
    },
    {
      "question": "How do I register my songs with ASCAP or BMI in the United States?",
      "answer": "When registering your copyright or work with ASCAP or BMI, list yourself as 100% owner of your lyrics and performance, and designate Onzieb (Different Type of Vibe) as the music producer/composer according to your signed PDF license contract."
    },
    {
      "question": "How fast do I receive my untagged audio files?",
      "answer": "Immediately upon checkout via Apple Pay, Google Pay, or Credit/Debit Card, an untagged 24-bit WAV file, MP3 version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "us/pennsylvania": {
  "name": "USA \u2013 Pennsylvania & Philly Music Hub",
  "flag": "\ud83c\uddfa\ud83c\uddf8",
  "currency": "USD ($)",
  "currencyCode": "USD",
  "gateways": "Apple Pay, Google Pay, Credit/Debit Cards, Cash App Pay",
  "pro": "ASCAP & BMI",
  "proFullName": "American Society of Composers, Authors and Publishers (ASCAP) & Broadcast Music, Inc. (BMI)",
  "proGuide": "When releasing tracks in USA \u2013 Pennsylvania & Philly Music Hub with Different Type of Vibe beats, you keep 100% of your artist streaming royalties on Spotify, Apple Music, and Tidal.",
  "headline": "Pennsylvania Rap Beats for Sale: Philly Club Drill & Gritty East Coast Drums",
  "description": "Fast-paced Philly club kick patterns and dark drill slides for recording artists in Philadelphia and Pittsburgh. Cleared for commercial streaming.",
  "popularGenres": [
    "Philly Club Drill",
    "East Coast Rap",
    "High-Energy Kicks"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "Philly Club Drill Deals",
      "slug": "us/philadelphia",
      "description": "Fast syncopated kicks and dark melodies."
    }
  ],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify and Apple Music in USA \u2013 Pennsylvania & Philly Music Hub?",
      "answer": "Yes! All WAV and MP3 leases purchased through Different Type of Vibe include full commercial streaming rights for Spotify, Apple Music, YouTube, and worldwide distribution. You keep 100% of your artist streaming royalties."
    },
    {
      "question": "How do I register my songs with ASCAP or BMI in the United States?",
      "answer": "When registering your copyright or work with ASCAP or BMI, list yourself as 100% owner of your lyrics and performance, and designate Onzieb (Different Type of Vibe) as the music producer/composer according to your signed PDF license contract."
    },
    {
      "question": "How fast do I receive my untagged audio files?",
      "answer": "Immediately upon checkout via Apple Pay, Google Pay, or Credit/Debit Card, an untagged 24-bit WAV file, MP3 version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "us/north-carolina": {
  "name": "USA \u2013 North Carolina & Carolinas 808 Trap",
  "flag": "\ud83c\uddfa\ud83c\uddf8",
  "currency": "USD ($)",
  "currencyCode": "USD",
  "gateways": "Apple Pay, Google Pay, Credit/Debit Cards, Cash App Pay",
  "pro": "ASCAP & BMI",
  "proFullName": "American Society of Composers, Authors and Publishers (ASCAP) & Broadcast Music, Inc. (BMI)",
  "proGuide": "When releasing tracks in USA \u2013 North Carolina & Carolinas 808 Trap with Different Type of Vibe beats, you keep 100% of your artist streaming royalties on Spotify, Apple Music, and Tidal.",
  "headline": "North Carolina Beats for Sale: Charlotte 808s & Bouncy Carolina Flutes",
  "description": "High-energy Carolina trap beats with bouncy flute leads, rapid rolling hi-hats, and punchy 808 kicks for recording vocalists in Charlotte and Raleigh.",
  "popularGenres": [
    "Carolina Trap",
    "Charlotte Bounces",
    "High-Energy Flutes"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "Charlotte Trap Deals",
      "slug": "us/charlotte",
      "description": "Uptempo bounce and driving basslines."
    }
  ],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify and Apple Music in USA \u2013 North Carolina & Carolinas 808 Trap?",
      "answer": "Yes! All WAV and MP3 leases purchased through Different Type of Vibe include full commercial streaming rights for Spotify, Apple Music, YouTube, and worldwide distribution. You keep 100% of your artist streaming royalties."
    },
    {
      "question": "How do I register my songs with ASCAP or BMI in the United States?",
      "answer": "When registering your copyright or work with ASCAP or BMI, list yourself as 100% owner of your lyrics and performance, and designate Onzieb (Different Type of Vibe) as the music producer/composer according to your signed PDF license contract."
    },
    {
      "question": "How fast do I receive my untagged audio files?",
      "answer": "Immediately upon checkout via Apple Pay, Google Pay, or Credit/Debit Card, an untagged 24-bit WAV file, MP3 version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "us/tennessee": {
  "name": "USA \u2013 Tennessee Memphis & Nashville Hub",
  "flag": "\ud83c\uddfa\ud83c\uddf8",
  "currency": "USD ($)",
  "currencyCode": "USD",
  "gateways": "Apple Pay, Google Pay, Credit/Debit Cards, Cash App Pay",
  "pro": "ASCAP & BMI",
  "proFullName": "American Society of Composers, Authors and Publishers (ASCAP) & Broadcast Music, Inc. (BMI)",
  "proGuide": "When releasing tracks in USA \u2013 Tennessee Memphis & Nashville Hub with Different Type of Vibe beats, you keep 100% of your artist streaming royalties on Spotify, Apple Music, and Tidal.",
  "headline": "Tennessee Rap Beats for Sale: Memphis Dark 808s & Nashville Soulful Trap",
  "description": "Dark aggressive Memphis 808s and live instrumentation soul trap for recording artists in Memphis and Nashville. Uncompressed WAV leases.",
  "popularGenres": [
    "Memphis Dark Trap",
    "Nashville Soul Rap",
    "Heavy Brass 808s"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "Memphis Dark Trap Deals",
      "slug": "us/memphis",
      "description": "Menacing bells and punchy street rap beats."
    },
    {
      "name": "Nashville Hip Hop Deals",
      "slug": "us/nashville",
      "description": "Live instrumentation mixed with modern trap drums."
    }
  ],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify and Apple Music in USA \u2013 Tennessee Memphis & Nashville Hub?",
      "answer": "Yes! All WAV and MP3 leases purchased through Different Type of Vibe include full commercial streaming rights for Spotify, Apple Music, YouTube, and worldwide distribution. You keep 100% of your artist streaming royalties."
    },
    {
      "question": "How do I register my songs with ASCAP or BMI in the United States?",
      "answer": "When registering your copyright or work with ASCAP or BMI, list yourself as 100% owner of your lyrics and performance, and designate Onzieb (Different Type of Vibe) as the music producer/composer according to your signed PDF license contract."
    },
    {
      "question": "How fast do I receive my untagged audio files?",
      "answer": "Immediately upon checkout via Apple Pay, Google Pay, or Credit/Debit Card, an untagged 24-bit WAV file, MP3 version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "us/michigan": {
  "name": "USA \u2013 Michigan Detroit & Flint Off-Beat Hub",
  "flag": "\ud83c\uddfa\ud83c\uddf8",
  "currency": "USD ($)",
  "currencyCode": "USD",
  "gateways": "Apple Pay, Google Pay, Credit/Debit Cards, Cash App Pay",
  "pro": "ASCAP & BMI",
  "proFullName": "American Society of Composers, Authors and Publishers (ASCAP) & Broadcast Music, Inc. (BMI)",
  "proGuide": "When releasing tracks in USA \u2013 Michigan Detroit & Flint Off-Beat Hub with Different Type of Vibe beats, you keep 100% of your artist streaming royalties on Spotify, Apple Music, and Tidal.",
  "headline": "Michigan Style Beats for Sale: Fast Syncopated 808s & Detroit Off-Beat Bounce",
  "description": "Signature Detroit and Flint style beats engineered with fast 190-200 BPM tempo, dark bells, and off-beat basslines for Michigan rappers.",
  "popularGenres": [
    "Detroit Style",
    "Flint Off-Beat",
    "Fast Midwest Trap"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "Detroit Beat Deals",
      "slug": "us/detroit",
      "description": "Signature off-beat syncopation and bells."
    }
  ],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify and Apple Music in USA \u2013 Michigan Detroit & Flint Off-Beat Hub?",
      "answer": "Yes! All WAV and MP3 leases purchased through Different Type of Vibe include full commercial streaming rights for Spotify, Apple Music, YouTube, and worldwide distribution. You keep 100% of your artist streaming royalties."
    },
    {
      "question": "How do I register my songs with ASCAP or BMI in the United States?",
      "answer": "When registering your copyright or work with ASCAP or BMI, list yourself as 100% owner of your lyrics and performance, and designate Onzieb (Different Type of Vibe) as the music producer/composer according to your signed PDF license contract."
    },
    {
      "question": "How fast do I receive my untagged audio files?",
      "answer": "Immediately upon checkout via Apple Pay, Google Pay, or Credit/Debit Card, an untagged 24-bit WAV file, MP3 version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "us/louisiana": {
  "name": "USA \u2013 Louisiana Baton Rouge & NOLA Hub",
  "flag": "\ud83c\uddfa\ud83c\uddf8",
  "currency": "USD ($)",
  "currencyCode": "USD",
  "gateways": "Apple Pay, Google Pay, Credit/Debit Cards, Cash App Pay",
  "pro": "ASCAP & BMI",
  "proFullName": "American Society of Composers, Authors and Publishers (ASCAP) & Broadcast Music, Inc. (BMI)",
  "proGuide": "When releasing tracks in USA \u2013 Louisiana Baton Rouge & NOLA Hub with Different Type of Vibe beats, you keep 100% of your artist streaming royalties on Spotify, Apple Music, and Tidal.",
  "headline": "Louisiana Beats for Sale: Baton Rouge Pain Guitars & New Orleans Bounce",
  "description": "Emotional southern pain music instrumentals with acoustic guitar progressions, moving pianos, and hard 808s for Louisiana indie artists.",
  "popularGenres": [
    "Baton Rouge Pain Trap",
    "Louisiana Street Rap",
    "Acoustic Guitars"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "Baton Rouge Trap Deals",
      "slug": "us/baton-rouge",
      "description": "Heartfelt guitars and heavy 808 drums."
    },
    {
      "name": "NBA YoungBoy Vibe Hub",
      "slug": "../../vibe/nba-youngboy-louisiana-trap",
      "description": "Raw emotional melodies and driving southern bounce."
    }
  ],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify and Apple Music in USA \u2013 Louisiana Baton Rouge & NOLA Hub?",
      "answer": "Yes! All WAV and MP3 leases purchased through Different Type of Vibe include full commercial streaming rights for Spotify, Apple Music, YouTube, and worldwide distribution. You keep 100% of your artist streaming royalties."
    },
    {
      "question": "How do I register my songs with ASCAP or BMI in the United States?",
      "answer": "When registering your copyright or work with ASCAP or BMI, list yourself as 100% owner of your lyrics and performance, and designate Onzieb (Different Type of Vibe) as the music producer/composer according to your signed PDF license contract."
    },
    {
      "question": "How fast do I receive my untagged audio files?",
      "answer": "Immediately upon checkout via Apple Pay, Google Pay, or Credit/Debit Card, an untagged 24-bit WAV file, MP3 version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "us/maryland-virginia": {
  "name": "USA \u2013 DMV (DC, Maryland, Virginia) Scene",
  "flag": "\ud83c\uddfa\ud83c\uddf8",
  "currency": "USD ($)",
  "currencyCode": "USD",
  "gateways": "Apple Pay, Google Pay, Credit/Debit Cards, Cash App Pay",
  "pro": "ASCAP & BMI",
  "proFullName": "American Society of Composers, Authors and Publishers (ASCAP) & Broadcast Music, Inc. (BMI)",
  "proGuide": "When releasing tracks in USA \u2013 DMV (DC, Maryland, Virginia) Scene with Different Type of Vibe beats, you keep 100% of your artist streaming royalties on Spotify, Apple Music, and Tidal.",
  "headline": "DMV Beats for Sale: Signature Off-Beat Crank, Triplet Snares & Heavy Bass",
  "description": "Authentic DMV crank beats engineered for rapid off-beat delivery and heavy bass for artists in DC, Baltimore, Richmond, and Virginia Beach.",
  "popularGenres": [
    "DMV Crank",
    "DC Flow",
    "Baltimore Street Rap"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "DMV Deals Hub",
      "slug": "us/dmv",
      "description": "Signature rolling hi-hats and punchy sub bass."
    }
  ],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify and Apple Music in USA \u2013 DMV (DC, Maryland, Virginia) Scene?",
      "answer": "Yes! All WAV and MP3 leases purchased through Different Type of Vibe include full commercial streaming rights for Spotify, Apple Music, YouTube, and worldwide distribution. You keep 100% of your artist streaming royalties."
    },
    {
      "question": "How do I register my songs with ASCAP or BMI in the United States?",
      "answer": "When registering your copyright or work with ASCAP or BMI, list yourself as 100% owner of your lyrics and performance, and designate Onzieb (Different Type of Vibe) as the music producer/composer according to your signed PDF license contract."
    },
    {
      "question": "How fast do I receive my untagged audio files?",
      "answer": "Immediately upon checkout via Apple Pay, Google Pay, or Credit/Debit Card, an untagged 24-bit WAV file, MP3 version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "us/new-jersey": {
  "name": "USA \u2013 New Jersey Club & Drill Hub",
  "flag": "\ud83c\uddfa\ud83c\uddf8",
  "currency": "USD ($)",
  "currencyCode": "USD",
  "gateways": "Apple Pay, Google Pay, Credit/Debit Cards, Cash App Pay",
  "pro": "ASCAP & BMI",
  "proFullName": "American Society of Composers, Authors and Publishers (ASCAP) & Broadcast Music, Inc. (BMI)",
  "proGuide": "When releasing tracks in USA \u2013 New Jersey Club & Drill Hub with Different Type of Vibe beats, you keep 100% of your artist streaming royalties on Spotify, Apple Music, and Tidal.",
  "headline": "New Jersey Beats for Sale: Jersey Club Bounces, Fast Kicks & Dark Drill",
  "description": "Fast-paced Jersey club rap beats with signature 5-beat kick patterns and dark melodic drill chords for Newark, Jersey City, and Paterson artists.",
  "popularGenres": [
    "Jersey Club Rap",
    "NJ Drill",
    "Fast BPM Club"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify and Apple Music in USA \u2013 New Jersey Club & Drill Hub?",
      "answer": "Yes! All WAV and MP3 leases purchased through Different Type of Vibe include full commercial streaming rights for Spotify, Apple Music, YouTube, and worldwide distribution. You keep 100% of your artist streaming royalties."
    },
    {
      "question": "How do I register my songs with ASCAP or BMI in the United States?",
      "answer": "When registering your copyright or work with ASCAP or BMI, list yourself as 100% owner of your lyrics and performance, and designate Onzieb (Different Type of Vibe) as the music producer/composer according to your signed PDF license contract."
    },
    {
      "question": "How fast do I receive my untagged audio files?",
      "answer": "Immediately upon checkout via Apple Pay, Google Pay, or Credit/Debit Card, an untagged 24-bit WAV file, MP3 version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "us/ohio": {
  "name": "USA \u2013 Ohio Midwest Rap Hub",
  "flag": "\ud83c\uddfa\ud83c\uddf8",
  "currency": "USD ($)",
  "currencyCode": "USD",
  "gateways": "Apple Pay, Google Pay, Credit/Debit Cards, Cash App Pay",
  "pro": "ASCAP & BMI",
  "proFullName": "American Society of Composers, Authors and Publishers (ASCAP) & Broadcast Music, Inc. (BMI)",
  "proGuide": "When releasing tracks in USA \u2013 Ohio Midwest Rap Hub with Different Type of Vibe beats, you keep 100% of your artist streaming royalties on Spotify, Apple Music, and Tidal.",
  "headline": "Ohio Beats for Sale: Cleveland Melodic Trap, Columbus & Cincinnati Bounce",
  "description": "Midwest trap and soulful melodic hip hop instrumentals tailored for deep storytelling and dynamic vocal delivery for Ohio artists.",
  "popularGenres": [
    "Cleveland Melodic",
    "Ohio Trap",
    "Soulful Midwest"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "Cleveland Beat Deals",
      "slug": "us/cleveland",
      "description": "Atmospheric synths and punchy drums."
    }
  ],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify and Apple Music in USA \u2013 Ohio Midwest Rap Hub?",
      "answer": "Yes! All WAV and MP3 leases purchased through Different Type of Vibe include full commercial streaming rights for Spotify, Apple Music, YouTube, and worldwide distribution. You keep 100% of your artist streaming royalties."
    },
    {
      "question": "How do I register my songs with ASCAP or BMI in the United States?",
      "answer": "When registering your copyright or work with ASCAP or BMI, list yourself as 100% owner of your lyrics and performance, and designate Onzieb (Different Type of Vibe) as the music producer/composer according to your signed PDF license contract."
    },
    {
      "question": "How fast do I receive my untagged audio files?",
      "answer": "Immediately upon checkout via Apple Pay, Google Pay, or Credit/Debit Card, an untagged 24-bit WAV file, MP3 version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "us/missouri": {
  "name": "USA \u2013 Missouri St. Louis & KC Hub",
  "flag": "\ud83c\uddfa\ud83c\uddf8",
  "currency": "USD ($)",
  "currencyCode": "USD",
  "gateways": "Apple Pay, Google Pay, Credit/Debit Cards, Cash App Pay",
  "pro": "ASCAP & BMI",
  "proFullName": "American Society of Composers, Authors and Publishers (ASCAP) & Broadcast Music, Inc. (BMI)",
  "proGuide": "When releasing tracks in USA \u2013 Missouri St. Louis & KC Hub with Different Type of Vibe beats, you keep 100% of your artist streaming royalties on Spotify, Apple Music, and Tidal.",
  "headline": "Missouri Beats for Sale: St. Louis Catchy Melodic Trap & Kansas City Bounce",
  "description": "Smooth melodic trap with clean 808 patterns and crisp hooks designed for Midwest recording vocalists across Missouri.",
  "popularGenres": [
    "St. Louis Trap",
    "Midwest Melodic",
    "Catchy Hook Beats"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "St. Louis Beat Deals",
      "slug": "us/st-louis",
      "description": "Clean 808 patterns and melodic hooks."
    }
  ],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify and Apple Music in USA \u2013 Missouri St. Louis & KC Hub?",
      "answer": "Yes! All WAV and MP3 leases purchased through Different Type of Vibe include full commercial streaming rights for Spotify, Apple Music, YouTube, and worldwide distribution. You keep 100% of your artist streaming royalties."
    },
    {
      "question": "How do I register my songs with ASCAP or BMI in the United States?",
      "answer": "When registering your copyright or work with ASCAP or BMI, list yourself as 100% owner of your lyrics and performance, and designate Onzieb (Different Type of Vibe) as the music producer/composer according to your signed PDF license contract."
    },
    {
      "question": "How fast do I receive my untagged audio files?",
      "answer": "Immediately upon checkout via Apple Pay, Google Pay, or Credit/Debit Card, an untagged 24-bit WAV file, MP3 version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "us/colorado": {
  "name": "USA \u2013 Colorado Mountain Cloud Rap",
  "flag": "\ud83c\uddfa\ud83c\uddf8",
  "currency": "USD ($)",
  "currencyCode": "USD",
  "gateways": "Apple Pay, Google Pay, Credit/Debit Cards, Cash App Pay",
  "pro": "ASCAP & BMI",
  "proFullName": "American Society of Composers, Authors and Publishers (ASCAP) & Broadcast Music, Inc. (BMI)",
  "proGuide": "When releasing tracks in USA \u2013 Colorado Mountain Cloud Rap with Different Type of Vibe beats, you keep 100% of your artist streaming royalties on Spotify, Apple Music, and Tidal.",
  "headline": "Colorado Beats for Sale: Denver Cloud Trap, Reverb Synths & Elevated 808s",
  "description": "Spacious, reverberant cloud trap beats and clean 808 bounce tailored for smooth lyrical delivery for Colorado recording artists.",
  "popularGenres": [
    "Denver Cloud Rap",
    "Elevated Trap",
    "Atmospheric Synths"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "Denver Rap Deals",
      "slug": "us/denver",
      "description": "Chill cloud trap and elevated bass."
    }
  ],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify and Apple Music in USA \u2013 Colorado Mountain Cloud Rap?",
      "answer": "Yes! All WAV and MP3 leases purchased through Different Type of Vibe include full commercial streaming rights for Spotify, Apple Music, YouTube, and worldwide distribution. You keep 100% of your artist streaming royalties."
    },
    {
      "question": "How do I register my songs with ASCAP or BMI in the United States?",
      "answer": "When registering your copyright or work with ASCAP or BMI, list yourself as 100% owner of your lyrics and performance, and designate Onzieb (Different Type of Vibe) as the music producer/composer according to your signed PDF license contract."
    },
    {
      "question": "How fast do I receive my untagged audio files?",
      "answer": "Immediately upon checkout via Apple Pay, Google Pay, or Credit/Debit Card, an untagged 24-bit WAV file, MP3 version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "de/berlin": {
  "name": "Deutschland \u2013 Berlin Deutschrap & Drill Scene",
  "flag": "\ud83c\udde9\ud83c\uddea",
  "currency": "EUR (\u20ac)",
  "currencyCode": "EUR",
  "gateways": "Klarna, Sofort, Giropay, Apple Pay, Google Pay, Kreditkarte",
  "pro": "GEMA",
  "proFullName": "Gesellschaft f\u00fcr musikalische Auff\u00fchrungs- und mechanische Vervielf\u00e4ltigungsrechte (GEMA)",
  "proGuide": "100% GEMA-konform. Alle Beats sind Originalkompositionen ohne ungekl\u00e4rte Samples. Du beh\u00e4ltst alle Streaming-Erl\u00f6se.",
  "headline": "Berlin Beats Kaufen: Aggressiver Drill, Cloud Trap & Boom Bap Leases",
  "description": "Exklusive ungetaggte WAV Beat Lizenzen f\u00fcr Rapper und Produzenten in Berlin. 100% GEMA-konform, unkomprimierte Studio-Audiospuren (Stems) und sofortige Freigabe f\u00fcr Spotify, Apple Music & YouTube.",
  "popularGenres": [
    "Berlin Drill",
    "Deutschrap Trap",
    "Underground Boom Bap",
    "Luciano Style"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "Berlin Drill Scene Hub",
      "slug": "../../scene/berlin-drill-beats",
      "description": "Schwere 808-Slides und aggressiver Drill-Sound."
    },
    {
      "name": "Pashanim Style Hub",
      "slug": "../../vibe/pashanim-berlin-summer-beats",
      "description": "Sommerliche 2000er Melodien und melodischer Bounce."
    },
    {
      "name": "Luciano Drill Vibe",
      "slug": "../../vibe/luciano-drill-type-beats",
      "description": "Majestic UK/German Drill mit harten B\u00e4ssen."
    }
  ],
  "faqs": [
    {
      "question": "Darf ich Songs mit diesen Beats auf Spotify, Apple Music und YouTube in Deutschland \u2013 Berlin Deutschrap & Drill Scene ver\u00f6ffentlichen?",
      "answer": "Ja, absolut! Alle WAV- und MP3-Leases von Different Type of Vibe enthalten 100% kommerzielle Streaming-Rechte f\u00fcr Spotify, Apple Music, YouTube, Deezer, TikTok und weltweiten Vertrieb. Du beh\u00e4ltst 100% deiner Artist-Einnahmen."
    },
    {
      "question": "Sind die Beats 100% GEMA-frei und sample-cleared in Deutschland?",
      "answer": "Ja! Alle Instrumentals wurden von Onzieb original komponiert und produziert. Es gibt keine ungekl\u00e4rten Fremdsamples. Wenn du bei der GEMA als Urheber gemeldet bist, kannst du deinen Text und deine Performance zu 100% abrechnen."
    },
    {
      "question": "Welche Zahlungsmethoden stehen in Deutschland zur Verf\u00fcgung?",
      "answer": "Du kannst bequem und sicher per Klarna / Sofort\u00fcberweisung, Giropay, Apple Pay, Google Pay, Kreditkarte (Visa, Mastercard) sowie PayPal und Stripe bezahlen."
    },
    {
      "question": "Wie schnell erhalte ich die ungetaggten Beat-Dateien?",
      "answer": "Sofort nach dem Bezahlvorgang werden die ungetaggten 24-Bit WAV-Dateien, die MP3-Audiodatei und der rechtsg\u00fcltig unterzeichnete PDF-Lizenzvertrag direkt per Download-Link an deine E-Mail gesendet."
    }
  ]
},
  "de/hamburg": {
  "name": "Deutschland \u2013 Hamburg Street Drill & Boom Bap",
  "flag": "\ud83c\udde9\ud83c\uddea",
  "currency": "EUR (\u20ac)",
  "currencyCode": "EUR",
  "gateways": "Klarna, Sofort, Giropay, Apple Pay, Google Pay, Kreditkarte",
  "pro": "GEMA",
  "proFullName": "Gesellschaft f\u00fcr musikalische Auff\u00fchrungs- und mechanische Vervielf\u00e4ltigungsrechte (GEMA)",
  "proGuide": "100% GEMA-konform. Alle Beats sind Originalkompositionen ohne ungekl\u00e4rte Samples. Du beh\u00e4ltst alle Streaming-Erl\u00f6se.",
  "headline": "Hamburg Beats Kaufen: 187 Strassen-Sound, UK Drill & GEMA-freie Instrumentals",
  "description": "Authentische Hamburger Deutschrap Beats. Druckvolle 808 Kicks, d\u00fcstere Streicher und energiegeladener Stra\u00dfen-Rap Sound f\u00fcr K\u00fcnstler in Hamburg, St. Pauli und Altona.",
  "popularGenres": [
    "Hamburg Drill",
    "187 Sound",
    "Stra\u00dfenrap",
    "Boom Bap"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "Hamburg Drill Hub",
      "slug": "../../scene/hamburg-street-drill",
      "description": "Dunkle 808 B\u00e4sse und treibende Percussion."
    },
    {
      "name": "Bonez MC Afro-Trap Vibe",
      "slug": "../../vibe/bonez-mc-187-dancehall-trap",
      "description": "Tanzbare Afro-Trap und Dancehall Beats."
    }
  ],
  "faqs": [
    {
      "question": "Darf ich Songs mit diesen Beats auf Spotify, Apple Music und YouTube in Deutschland \u2013 Hamburg Street Drill & Boom Bap ver\u00f6ffentlichen?",
      "answer": "Ja, absolut! Alle WAV- und MP3-Leases von Different Type of Vibe enthalten 100% kommerzielle Streaming-Rechte f\u00fcr Spotify, Apple Music, YouTube, Deezer, TikTok und weltweiten Vertrieb. Du beh\u00e4ltst 100% deiner Artist-Einnahmen."
    },
    {
      "question": "Sind die Beats 100% GEMA-frei und sample-cleared in Deutschland?",
      "answer": "Ja! Alle Instrumentals wurden von Onzieb original komponiert und produziert. Es gibt keine ungekl\u00e4rten Fremdsamples. Wenn du bei der GEMA als Urheber gemeldet bist, kannst du deinen Text und deine Performance zu 100% abrechnen."
    },
    {
      "question": "Welche Zahlungsmethoden stehen in Deutschland zur Verf\u00fcgung?",
      "answer": "Du kannst bequem und sicher per Klarna / Sofort\u00fcberweisung, Giropay, Apple Pay, Google Pay, Kreditkarte (Visa, Mastercard) sowie PayPal und Stripe bezahlen."
    },
    {
      "question": "Wie schnell erhalte ich die ungetaggten Beat-Dateien?",
      "answer": "Sofort nach dem Bezahlvorgang werden die ungetaggten 24-Bit WAV-Dateien, die MP3-Audiodatei und der rechtsg\u00fcltig unterzeichnete PDF-Lizenzvertrag direkt per Download-Link an deine E-Mail gesendet."
    }
  ]
},
  "de/frankfurt": {
  "name": "Deutschland \u2013 Frankfurt am Main (FFM) Street Trap",
  "flag": "\ud83c\udde9\ud83c\uddea",
  "currency": "EUR (\u20ac)",
  "currencyCode": "EUR",
  "gateways": "Klarna, Sofort, Giropay, Apple Pay, Google Pay, Kreditkarte",
  "pro": "GEMA",
  "proFullName": "Gesellschaft f\u00fcr musikalische Auff\u00fchrungs- und mechanische Vervielf\u00e4ltigungsrechte (GEMA)",
  "proGuide": "100% GEMA-konform. Alle Beats sind Originalkompositionen ohne ungekl\u00e4rte Samples. Du beh\u00e4ltst alle Streaming-Erl\u00f6se.",
  "headline": "Frankfurt Beats Kaufen: D\u00fcstere Azzlackz B\u00e4sse, Harter Trap & Boom Bap",
  "description": "Kompromissloser Frankfurter Rap Sound. Schwere Sub-B\u00e4sse, bedrohliche Klaviermelodien und punchige Drums inspiriert von FFM Legenden wie Haftbefehl und Olexesh.",
  "popularGenres": [
    "FFM Street Trap",
    "Dunkle 808s",
    "Haftbefehl Style",
    "Azzlackz Sound"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "Frankfurt Dark Trap Scene",
      "slug": "../../scene/frankfurt-dark-trap",
      "description": "Brachiale Drums und d\u00fcstere Kl\u00e4nge aus Mainhatten."
    },
    {
      "name": "Haftbefehl Dark Trap Vibe",
      "slug": "../../vibe/haftbefehl-dark-street-trap",
      "description": "Filmreife Orchester-Hits und kompromissloser Stra\u00dfen-Trap."
    }
  ],
  "faqs": [
    {
      "question": "Darf ich Songs mit diesen Beats auf Spotify, Apple Music und YouTube in Deutschland \u2013 Frankfurt am Main (FFM) Street Trap ver\u00f6ffentlichen?",
      "answer": "Ja, absolut! Alle WAV- und MP3-Leases von Different Type of Vibe enthalten 100% kommerzielle Streaming-Rechte f\u00fcr Spotify, Apple Music, YouTube, Deezer, TikTok und weltweiten Vertrieb. Du beh\u00e4ltst 100% deiner Artist-Einnahmen."
    },
    {
      "question": "Sind die Beats 100% GEMA-frei und sample-cleared in Deutschland?",
      "answer": "Ja! Alle Instrumentals wurden von Onzieb original komponiert und produziert. Es gibt keine ungekl\u00e4rten Fremdsamples. Wenn du bei der GEMA als Urheber gemeldet bist, kannst du deinen Text und deine Performance zu 100% abrechnen."
    },
    {
      "question": "Welche Zahlungsmethoden stehen in Deutschland zur Verf\u00fcgung?",
      "answer": "Du kannst bequem und sicher per Klarna / Sofort\u00fcberweisung, Giropay, Apple Pay, Google Pay, Kreditkarte (Visa, Mastercard) sowie PayPal und Stripe bezahlen."
    },
    {
      "question": "Wie schnell erhalte ich die ungetaggten Beat-Dateien?",
      "answer": "Sofort nach dem Bezahlvorgang werden die ungetaggten 24-Bit WAV-Dateien, die MP3-Audiodatei und der rechtsg\u00fcltig unterzeichnete PDF-Lizenzvertrag direkt per Download-Link an deine E-Mail gesendet."
    }
  ]
},
  "de/koeln": {
  "name": "Deutschland \u2013 K\u00f6ln & Rheinland Melodic Rap Hub",
  "flag": "\ud83c\udde9\ud83c\uddea",
  "currency": "EUR (\u20ac)",
  "currencyCode": "EUR",
  "gateways": "Klarna, Sofort, Giropay, Apple Pay, Google Pay, Kreditkarte",
  "pro": "GEMA",
  "proFullName": "Gesellschaft f\u00fcr musikalische Auff\u00fchrungs- und mechanische Vervielf\u00e4ltigungsrechte (GEMA)",
  "proGuide": "100% GEMA-konform. Alle Beats sind Originalkompositionen ohne ungekl\u00e4rte Samples. Du beh\u00e4ltst alle Streaming-Erl\u00f6se.",
  "headline": "K\u00f6ln Beats Kaufen: Melodischer Trap, R&B Vibes & Moderner Club Sound",
  "description": "Catchy Synth-Melodien, warme Gitarrenakkorde und tanzbare Trap Bounces f\u00fcr Rapper und S\u00e4nger im Rheinland. Sofortiger WAV Download und GEMA Freigabe.",
  "popularGenres": [
    "K\u00f6ln Melodic Rap",
    "R&B Trap",
    "Club Bounce",
    "Afro-Pop"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "K\u00f6ln Melodic Rap Hub",
      "slug": "../../scene/koeln-melodic-rap",
      "description": "Eing\u00e4ngige Melodien und moderne Rhythmen."
    }
  ],
  "faqs": [
    {
      "question": "Darf ich Songs mit diesen Beats auf Spotify, Apple Music und YouTube in Deutschland \u2013 K\u00f6ln & Rheinland Melodic Rap Hub ver\u00f6ffentlichen?",
      "answer": "Ja, absolut! Alle WAV- und MP3-Leases von Different Type of Vibe enthalten 100% kommerzielle Streaming-Rechte f\u00fcr Spotify, Apple Music, YouTube, Deezer, TikTok und weltweiten Vertrieb. Du beh\u00e4ltst 100% deiner Artist-Einnahmen."
    },
    {
      "question": "Sind die Beats 100% GEMA-frei und sample-cleared in Deutschland?",
      "answer": "Ja! Alle Instrumentals wurden von Onzieb original komponiert und produziert. Es gibt keine ungekl\u00e4rten Fremdsamples. Wenn du bei der GEMA als Urheber gemeldet bist, kannst du deinen Text und deine Performance zu 100% abrechnen."
    },
    {
      "question": "Welche Zahlungsmethoden stehen in Deutschland zur Verf\u00fcgung?",
      "answer": "Du kannst bequem und sicher per Klarna / Sofort\u00fcberweisung, Giropay, Apple Pay, Google Pay, Kreditkarte (Visa, Mastercard) sowie PayPal und Stripe bezahlen."
    },
    {
      "question": "Wie schnell erhalte ich die ungetaggten Beat-Dateien?",
      "answer": "Sofort nach dem Bezahlvorgang werden die ungetaggten 24-Bit WAV-Dateien, die MP3-Audiodatei und der rechtsg\u00fcltig unterzeichnete PDF-Lizenzvertrag direkt per Download-Link an deine E-Mail gesendet."
    }
  ]
},
  "de/muenchen": {
  "name": "Deutschland \u2013 M\u00fcnchen & Bayern Hip-Hop Hub",
  "flag": "\ud83c\udde9\ud83c\uddea",
  "currency": "EUR (\u20ac)",
  "currencyCode": "EUR",
  "gateways": "Klarna, Sofort, Giropay, Apple Pay, Google Pay, Kreditkarte",
  "pro": "GEMA",
  "proFullName": "Gesellschaft f\u00fcr musikalische Auff\u00fchrungs- und mechanische Vervielf\u00e4ltigungsrechte (GEMA)",
  "proGuide": "100% GEMA-konform. Alle Beats sind Originalkompositionen ohne ungekl\u00e4rte Samples. Du beh\u00e4ltst alle Streaming-Erl\u00f6se.",
  "headline": "M\u00fcnchen Beats Kaufen: High-End Trap, Melodic Hip-Hop & Commercial WAV Leases",
  "description": "Glasklar produzierte 24-Bit Studio-Beats f\u00fcr Recording Artists in M\u00fcnchen und Bayern. Volle kommerzielle Rechte f\u00fcr alle Streaming-Plattformen weltweit.",
  "popularGenres": [
    "M\u00fcnchen Trap",
    "Commercial Hip-Hop",
    "Melodische Beats"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "M\u00fcnchen Hip-Hop Hub",
      "slug": "../../scene/muenchen-hiphop-beats",
      "description": "Edle Synth-Fl\u00e4chen und moderne Trap Drums."
    }
  ],
  "faqs": [
    {
      "question": "Darf ich Songs mit diesen Beats auf Spotify, Apple Music und YouTube in Deutschland \u2013 M\u00fcnchen & Bayern Hip-Hop Hub ver\u00f6ffentlichen?",
      "answer": "Ja, absolut! Alle WAV- und MP3-Leases von Different Type of Vibe enthalten 100% kommerzielle Streaming-Rechte f\u00fcr Spotify, Apple Music, YouTube, Deezer, TikTok und weltweiten Vertrieb. Du beh\u00e4ltst 100% deiner Artist-Einnahmen."
    },
    {
      "question": "Sind die Beats 100% GEMA-frei und sample-cleared in Deutschland?",
      "answer": "Ja! Alle Instrumentals wurden von Onzieb original komponiert und produziert. Es gibt keine ungekl\u00e4rten Fremdsamples. Wenn du bei der GEMA als Urheber gemeldet bist, kannst du deinen Text und deine Performance zu 100% abrechnen."
    },
    {
      "question": "Welche Zahlungsmethoden stehen in Deutschland zur Verf\u00fcgung?",
      "answer": "Du kannst bequem und sicher per Klarna / Sofort\u00fcberweisung, Giropay, Apple Pay, Google Pay, Kreditkarte (Visa, Mastercard) sowie PayPal und Stripe bezahlen."
    },
    {
      "question": "Wie schnell erhalte ich die ungetaggten Beat-Dateien?",
      "answer": "Sofort nach dem Bezahlvorgang werden die ungetaggten 24-Bit WAV-Dateien, die MP3-Audiodatei und der rechtsg\u00fcltig unterzeichnete PDF-Lizenzvertrag direkt per Download-Link an deine E-Mail gesendet."
    }
  ]
},
  "de/stuttgart": {
  "name": "Deutschland \u2013 Stuttgart & 0711 Cloud Trap Hub",
  "flag": "\ud83c\udde9\ud83c\uddea",
  "currency": "EUR (\u20ac)",
  "currencyCode": "EUR",
  "gateways": "Klarna, Sofort, Giropay, Apple Pay, Google Pay, Kreditkarte",
  "pro": "GEMA",
  "proFullName": "Gesellschaft f\u00fcr musikalische Auff\u00fchrungs- und mechanische Vervielf\u00e4ltigungsrechte (GEMA)",
  "proGuide": "100% GEMA-konform. Alle Beats sind Originalkompositionen ohne ungekl\u00e4rte Samples. Du beh\u00e4ltst alle Streaming-Erl\u00f6se.",
  "headline": "Stuttgart Beats Kaufen: Vintage Synths, Cloud Rap & Melodischer Trap",
  "description": "Atmosph\u00e4rische Soundscapes, analoge Synth-Texturen und emotionale 808 Grooves inspiriert vom Stuttgarter Sound (RIN, Bausa).",
  "popularGenres": [
    "Stuttgart Cloud Rap",
    "Melodischer Trap",
    "Vintage Synths"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "Stuttgart Cloud Rap Hub",
      "slug": "../../scene/stuttgart-cloud-rap",
      "description": "Tr\u00e4umerische Akkorde und spacige Beats."
    },
    {
      "name": "RIN Cloud Rap Vibe",
      "slug": "../../vibe/rin-cloud-rap-beats",
      "description": "Emotionale Melodien und unverwechselbarer Cloud Sound."
    }
  ],
  "faqs": [
    {
      "question": "Darf ich Songs mit diesen Beats auf Spotify, Apple Music und YouTube in Deutschland \u2013 Stuttgart & 0711 Cloud Trap Hub ver\u00f6ffentlichen?",
      "answer": "Ja, absolut! Alle WAV- und MP3-Leases von Different Type of Vibe enthalten 100% kommerzielle Streaming-Rechte f\u00fcr Spotify, Apple Music, YouTube, Deezer, TikTok und weltweiten Vertrieb. Du beh\u00e4ltst 100% deiner Artist-Einnahmen."
    },
    {
      "question": "Sind die Beats 100% GEMA-frei und sample-cleared in Deutschland?",
      "answer": "Ja! Alle Instrumentals wurden von Onzieb original komponiert und produziert. Es gibt keine ungekl\u00e4rten Fremdsamples. Wenn du bei der GEMA als Urheber gemeldet bist, kannst du deinen Text und deine Performance zu 100% abrechnen."
    },
    {
      "question": "Welche Zahlungsmethoden stehen in Deutschland zur Verf\u00fcgung?",
      "answer": "Du kannst bequem und sicher per Klarna / Sofort\u00fcberweisung, Giropay, Apple Pay, Google Pay, Kreditkarte (Visa, Mastercard) sowie PayPal und Stripe bezahlen."
    },
    {
      "question": "Wie schnell erhalte ich die ungetaggten Beat-Dateien?",
      "answer": "Sofort nach dem Bezahlvorgang werden die ungetaggten 24-Bit WAV-Dateien, die MP3-Audiodatei und der rechtsg\u00fcltig unterzeichnete PDF-Lizenzvertrag direkt per Download-Link an deine E-Mail gesendet."
    }
  ]
},
  "de/duesseldorf": {
  "name": "Deutschland \u2013 D\u00fcsseldorf & NRW Trap Hub",
  "flag": "\ud83c\udde9\ud83c\uddea",
  "currency": "EUR (\u20ac)",
  "currencyCode": "EUR",
  "gateways": "Klarna, Sofort, Giropay, Apple Pay, Google Pay, Kreditkarte",
  "pro": "GEMA",
  "proFullName": "Gesellschaft f\u00fcr musikalische Auff\u00fchrungs- und mechanische Vervielf\u00e4ltigungsrechte (GEMA)",
  "proGuide": "100% GEMA-konform. Alle Beats sind Originalkompositionen ohne ungekl\u00e4rte Samples. Du beh\u00e4ltst alle Streaming-Erl\u00f6se.",
  "headline": "D\u00fcsseldorf Beats Kaufen: Punchige 808s, Trap & Moderner Stra\u00dfenrap",
  "description": "Moderne Club- und Stra\u00dfenrap Beats f\u00fcr K\u00fcnstler in D\u00fcsseldorf und Nordrhein-Westfalen. 100% GEMA-konforme Vertr\u00e4ge und sofortiger Trackout-Download.",
  "popularGenres": [
    "NRW Trap",
    "D\u00fcsseldorf Street Rap",
    "Melodische 808s"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [],
  "faqs": [
    {
      "question": "Darf ich Songs mit diesen Beats auf Spotify, Apple Music und YouTube in Deutschland \u2013 D\u00fcsseldorf & NRW Trap Hub ver\u00f6ffentlichen?",
      "answer": "Ja, absolut! Alle WAV- und MP3-Leases von Different Type of Vibe enthalten 100% kommerzielle Streaming-Rechte f\u00fcr Spotify, Apple Music, YouTube, Deezer, TikTok und weltweiten Vertrieb. Du beh\u00e4ltst 100% deiner Artist-Einnahmen."
    },
    {
      "question": "Sind die Beats 100% GEMA-frei und sample-cleared in Deutschland?",
      "answer": "Ja! Alle Instrumentals wurden von Onzieb original komponiert und produziert. Es gibt keine ungekl\u00e4rten Fremdsamples. Wenn du bei der GEMA als Urheber gemeldet bist, kannst du deinen Text und deine Performance zu 100% abrechnen."
    },
    {
      "question": "Welche Zahlungsmethoden stehen in Deutschland zur Verf\u00fcgung?",
      "answer": "Du kannst bequem und sicher per Klarna / Sofort\u00fcberweisung, Giropay, Apple Pay, Google Pay, Kreditkarte (Visa, Mastercard) sowie PayPal und Stripe bezahlen."
    },
    {
      "question": "Wie schnell erhalte ich die ungetaggten Beat-Dateien?",
      "answer": "Sofort nach dem Bezahlvorgang werden die ungetaggten 24-Bit WAV-Dateien, die MP3-Audiodatei und der rechtsg\u00fcltig unterzeichnete PDF-Lizenzvertrag direkt per Download-Link an deine E-Mail gesendet."
    }
  ]
},
  "de/ruhrgebiet": {
  "name": "Deutschland \u2013 Ruhrgebiet (Pott) Hardcore & Drill",
  "flag": "\ud83c\udde9\ud83c\uddea",
  "currency": "EUR (\u20ac)",
  "currencyCode": "EUR",
  "gateways": "Klarna, Sofort, Giropay, Apple Pay, Google Pay, Kreditkarte",
  "pro": "GEMA",
  "proFullName": "Gesellschaft f\u00fcr musikalische Auff\u00fchrungs- und mechanische Vervielf\u00e4ltigungsrechte (GEMA)",
  "proGuide": "100% GEMA-konform. Alle Beats sind Originalkompositionen ohne ungekl\u00e4rte Samples. Du beh\u00e4ltst alle Streaming-Erl\u00f6se.",
  "headline": "Ruhrpott Beats Kaufen: Dreckige Basslines, Hardcore Stra\u00dfenrap & Drill",
  "description": "Rohe, ungeschliffene Drums und d\u00fcstere Melodien f\u00fcr K\u00fcnstler in Dortmund, Essen, Bochum und Duisburg. Perfekt f\u00fcr harte Punchlines und Real Talk.",
  "popularGenres": [
    "Ruhrpott Rap",
    "Hardcore Stra\u00dfenrap",
    "Pott Drill"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "Ruhrpott Rap Scene Hub",
      "slug": "../../scene/ruhrpott-hardcore-rap",
      "description": "Dunkle, druckvolle Beats aus dem Kohlenpott."
    }
  ],
  "faqs": [
    {
      "question": "Darf ich Songs mit diesen Beats auf Spotify, Apple Music und YouTube in Deutschland \u2013 Ruhrgebiet (Pott) Hardcore & Drill ver\u00f6ffentlichen?",
      "answer": "Ja, absolut! Alle WAV- und MP3-Leases von Different Type of Vibe enthalten 100% kommerzielle Streaming-Rechte f\u00fcr Spotify, Apple Music, YouTube, Deezer, TikTok und weltweiten Vertrieb. Du beh\u00e4ltst 100% deiner Artist-Einnahmen."
    },
    {
      "question": "Sind die Beats 100% GEMA-frei und sample-cleared in Deutschland?",
      "answer": "Ja! Alle Instrumentals wurden von Onzieb original komponiert und produziert. Es gibt keine ungekl\u00e4rten Fremdsamples. Wenn du bei der GEMA als Urheber gemeldet bist, kannst du deinen Text und deine Performance zu 100% abrechnen."
    },
    {
      "question": "Welche Zahlungsmethoden stehen in Deutschland zur Verf\u00fcgung?",
      "answer": "Du kannst bequem und sicher per Klarna / Sofort\u00fcberweisung, Giropay, Apple Pay, Google Pay, Kreditkarte (Visa, Mastercard) sowie PayPal und Stripe bezahlen."
    },
    {
      "question": "Wie schnell erhalte ich die ungetaggten Beat-Dateien?",
      "answer": "Sofort nach dem Bezahlvorgang werden die ungetaggten 24-Bit WAV-Dateien, die MP3-Audiodatei und der rechtsg\u00fcltig unterzeichnete PDF-Lizenzvertrag direkt per Download-Link an deine E-Mail gesendet."
    }
  ]
},
  "de/leipzig": {
  "name": "Deutschland \u2013 Leipzig & Sachsen Underground Hub",
  "flag": "\ud83c\udde9\ud83c\uddea",
  "currency": "EUR (\u20ac)",
  "currencyCode": "EUR",
  "gateways": "Klarna, Sofort, Giropay, Apple Pay, Google Pay, Kreditkarte",
  "pro": "GEMA",
  "proFullName": "Gesellschaft f\u00fcr musikalische Auff\u00fchrungs- und mechanische Vervielf\u00e4ltigungsrechte (GEMA)",
  "proGuide": "100% GEMA-konform. Alle Beats sind Originalkompositionen ohne ungekl\u00e4rte Samples. Du beh\u00e4ltst alle Streaming-Erl\u00f6se.",
  "headline": "Leipzig Beats Kaufen: Authentischer Boom Bap, Lofi & Underground Trap",
  "description": "Klassische Vinyl-Samples, staubige MPC-Drums und atmosph\u00e4rischer Underground Trap f\u00fcr die Leipziger und Dresdner Hip-Hop Szene.",
  "popularGenres": [
    "Leipzig Underground",
    "Staubiger Boom Bap",
    "Lofi Hip-Hop"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "Leipzig Underground Hub",
      "slug": "../../scene/leipzig-underground-boombap",
      "description": "Vintage Akustik-Chops und schwere Kicks."
    }
  ],
  "faqs": [
    {
      "question": "Darf ich Songs mit diesen Beats auf Spotify, Apple Music und YouTube in Deutschland \u2013 Leipzig & Sachsen Underground Hub ver\u00f6ffentlichen?",
      "answer": "Ja, absolut! Alle WAV- und MP3-Leases von Different Type of Vibe enthalten 100% kommerzielle Streaming-Rechte f\u00fcr Spotify, Apple Music, YouTube, Deezer, TikTok und weltweiten Vertrieb. Du beh\u00e4ltst 100% deiner Artist-Einnahmen."
    },
    {
      "question": "Sind die Beats 100% GEMA-frei und sample-cleared in Deutschland?",
      "answer": "Ja! Alle Instrumentals wurden von Onzieb original komponiert und produziert. Es gibt keine ungekl\u00e4rten Fremdsamples. Wenn du bei der GEMA als Urheber gemeldet bist, kannst du deinen Text und deine Performance zu 100% abrechnen."
    },
    {
      "question": "Welche Zahlungsmethoden stehen in Deutschland zur Verf\u00fcgung?",
      "answer": "Du kannst bequem und sicher per Klarna / Sofort\u00fcberweisung, Giropay, Apple Pay, Google Pay, Kreditkarte (Visa, Mastercard) sowie PayPal und Stripe bezahlen."
    },
    {
      "question": "Wie schnell erhalte ich die ungetaggten Beat-Dateien?",
      "answer": "Sofort nach dem Bezahlvorgang werden die ungetaggten 24-Bit WAV-Dateien, die MP3-Audiodatei und der rechtsg\u00fcltig unterzeichnete PDF-Lizenzvertrag direkt per Download-Link an deine E-Mail gesendet."
    }
  ]
},
  "de/hannover": {
  "name": "Deutschland \u2013 Hannover & Niedersachsen Trap",
  "flag": "\ud83c\udde9\ud83c\uddea",
  "currency": "EUR (\u20ac)",
  "currencyCode": "EUR",
  "gateways": "Klarna, Sofort, Giropay, Apple Pay, Google Pay, Kreditkarte",
  "pro": "GEMA",
  "proFullName": "Gesellschaft f\u00fcr musikalische Auff\u00fchrungs- und mechanische Vervielf\u00e4ltigungsrechte (GEMA)",
  "proGuide": "100% GEMA-konform. Alle Beats sind Originalkompositionen ohne ungekl\u00e4rte Samples. Du beh\u00e4ltst alle Streaming-Erl\u00f6se.",
  "headline": "Hannover Beats Kaufen: Moderner Trap, Melodischer Rap & GEMA-frei",
  "description": "Vielseitige Instrumentals f\u00fcr K\u00fcnstler in Niedersachsen. Unkomprimierte 24-Bit WAV Audio-Leases inklusive kommerzieller Streaming-Lizenz.",
  "popularGenres": [
    "Hannover Trap",
    "Melodic Rap",
    "Moderne 808s"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [],
  "faqs": [
    {
      "question": "Darf ich Songs mit diesen Beats auf Spotify, Apple Music und YouTube in Deutschland \u2013 Hannover & Niedersachsen Trap ver\u00f6ffentlichen?",
      "answer": "Ja, absolut! Alle WAV- und MP3-Leases von Different Type of Vibe enthalten 100% kommerzielle Streaming-Rechte f\u00fcr Spotify, Apple Music, YouTube, Deezer, TikTok und weltweiten Vertrieb. Du beh\u00e4ltst 100% deiner Artist-Einnahmen."
    },
    {
      "question": "Sind die Beats 100% GEMA-frei und sample-cleared in Deutschland?",
      "answer": "Ja! Alle Instrumentals wurden von Onzieb original komponiert und produziert. Es gibt keine ungekl\u00e4rten Fremdsamples. Wenn du bei der GEMA als Urheber gemeldet bist, kannst du deinen Text und deine Performance zu 100% abrechnen."
    },
    {
      "question": "Welche Zahlungsmethoden stehen in Deutschland zur Verf\u00fcgung?",
      "answer": "Du kannst bequem und sicher per Klarna / Sofort\u00fcberweisung, Giropay, Apple Pay, Google Pay, Kreditkarte (Visa, Mastercard) sowie PayPal und Stripe bezahlen."
    },
    {
      "question": "Wie schnell erhalte ich die ungetaggten Beat-Dateien?",
      "answer": "Sofort nach dem Bezahlvorgang werden die ungetaggten 24-Bit WAV-Dateien, die MP3-Audiodatei und der rechtsg\u00fcltig unterzeichnete PDF-Lizenzvertrag direkt per Download-Link an deine E-Mail gesendet."
    }
  ]
},
  "de/nuernberg": {
  "name": "Deutschland \u2013 N\u00fcrnberg & Franken Hip-Hop",
  "flag": "\ud83c\udde9\ud83c\uddea",
  "currency": "EUR (\u20ac)",
  "currencyCode": "EUR",
  "gateways": "Klarna, Sofort, Giropay, Apple Pay, Google Pay, Kreditkarte",
  "pro": "GEMA",
  "proFullName": "Gesellschaft f\u00fcr musikalische Auff\u00fchrungs- und mechanische Vervielf\u00e4ltigungsrechte (GEMA)",
  "proGuide": "100% GEMA-konform. Alle Beats sind Originalkompositionen ohne ungekl\u00e4rte Samples. Du beh\u00e4ltst alle Streaming-Erl\u00f6se.",
  "headline": "N\u00fcrnberg Beats Kaufen: Fr\u00e4nkischer Trap, Melodische Keys & Drill",
  "description": "Dynamische Instrumentals mit tiefen 808 Kicks und eing\u00e4ngigen Melodien f\u00fcr Aufnahmen im Tonstudio und Spotify Releases.",
  "popularGenres": [
    "Franken Trap",
    "Melodische Keys",
    "German Drill"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [],
  "faqs": [
    {
      "question": "Darf ich Songs mit diesen Beats auf Spotify, Apple Music und YouTube in Deutschland \u2013 N\u00fcrnberg & Franken Hip-Hop ver\u00f6ffentlichen?",
      "answer": "Ja, absolut! Alle WAV- und MP3-Leases von Different Type of Vibe enthalten 100% kommerzielle Streaming-Rechte f\u00fcr Spotify, Apple Music, YouTube, Deezer, TikTok und weltweiten Vertrieb. Du beh\u00e4ltst 100% deiner Artist-Einnahmen."
    },
    {
      "question": "Sind die Beats 100% GEMA-frei und sample-cleared in Deutschland?",
      "answer": "Ja! Alle Instrumentals wurden von Onzieb original komponiert und produziert. Es gibt keine ungekl\u00e4rten Fremdsamples. Wenn du bei der GEMA als Urheber gemeldet bist, kannst du deinen Text und deine Performance zu 100% abrechnen."
    },
    {
      "question": "Welche Zahlungsmethoden stehen in Deutschland zur Verf\u00fcgung?",
      "answer": "Du kannst bequem und sicher per Klarna / Sofort\u00fcberweisung, Giropay, Apple Pay, Google Pay, Kreditkarte (Visa, Mastercard) sowie PayPal und Stripe bezahlen."
    },
    {
      "question": "Wie schnell erhalte ich die ungetaggten Beat-Dateien?",
      "answer": "Sofort nach dem Bezahlvorgang werden die ungetaggten 24-Bit WAV-Dateien, die MP3-Audiodatei und der rechtsg\u00fcltig unterzeichnete PDF-Lizenzvertrag direkt per Download-Link an deine E-Mail gesendet."
    }
  ]
},
  "de/bremen": {
  "name": "Deutschland \u2013 Bremen Nord-Sound & Trap",
  "flag": "\ud83c\udde9\ud83c\uddea",
  "currency": "EUR (\u20ac)",
  "currencyCode": "EUR",
  "gateways": "Klarna, Sofort, Giropay, Apple Pay, Google Pay, Kreditkarte",
  "pro": "GEMA",
  "proFullName": "Gesellschaft f\u00fcr musikalische Auff\u00fchrungs- und mechanische Vervielf\u00e4ltigungsrechte (GEMA)",
  "proGuide": "100% GEMA-konform. Alle Beats sind Originalkompositionen ohne ungekl\u00e4rte Samples. Du beh\u00e4ltst alle Streaming-Erl\u00f6se.",
  "headline": "Bremen Beats Kaufen: Norddeutscher Stra\u00dfenrap & Treibender Drill",
  "description": "Frischer, harter Sound aus dem Norden mit treibenden Hi-Hats und tiefen B\u00e4ssen f\u00fcr Streaming-Erfolge in ganz Deutschland.",
  "popularGenres": [
    "Bremen Street Rap",
    "Nord Drill",
    "Dark 808s"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [],
  "faqs": [
    {
      "question": "Darf ich Songs mit diesen Beats auf Spotify, Apple Music und YouTube in Deutschland \u2013 Bremen Nord-Sound & Trap ver\u00f6ffentlichen?",
      "answer": "Ja, absolut! Alle WAV- und MP3-Leases von Different Type of Vibe enthalten 100% kommerzielle Streaming-Rechte f\u00fcr Spotify, Apple Music, YouTube, Deezer, TikTok und weltweiten Vertrieb. Du beh\u00e4ltst 100% deiner Artist-Einnahmen."
    },
    {
      "question": "Sind die Beats 100% GEMA-frei und sample-cleared in Deutschland?",
      "answer": "Ja! Alle Instrumentals wurden von Onzieb original komponiert und produziert. Es gibt keine ungekl\u00e4rten Fremdsamples. Wenn du bei der GEMA als Urheber gemeldet bist, kannst du deinen Text und deine Performance zu 100% abrechnen."
    },
    {
      "question": "Welche Zahlungsmethoden stehen in Deutschland zur Verf\u00fcgung?",
      "answer": "Du kannst bequem und sicher per Klarna / Sofort\u00fcberweisung, Giropay, Apple Pay, Google Pay, Kreditkarte (Visa, Mastercard) sowie PayPal und Stripe bezahlen."
    },
    {
      "question": "Wie schnell erhalte ich die ungetaggten Beat-Dateien?",
      "answer": "Sofort nach dem Bezahlvorgang werden die ungetaggten 24-Bit WAV-Dateien, die MP3-Audiodatei und der rechtsg\u00fcltig unterzeichnete PDF-Lizenzvertrag direkt per Download-Link an deine E-Mail gesendet."
    }
  ]
},
  "de/nordrhein-westfalen": {
  "name": "Deutschland \u2013 Nordrhein-Westfalen (NRW)",
  "flag": "\ud83c\udde9\ud83c\uddea",
  "currency": "EUR (\u20ac)",
  "currencyCode": "EUR",
  "gateways": "Klarna, Sofort, Giropay, Apple Pay, Google Pay, Kreditkarte",
  "pro": "GEMA",
  "proFullName": "Gesellschaft f\u00fcr musikalische Auff\u00fchrungs- und mechanische Vervielf\u00e4ltigungsrechte (GEMA)",
  "proGuide": "100% GEMA-konform. Alle Beats sind Originalkompositionen ohne ungekl\u00e4rte Samples. Du beh\u00e4ltst 100% deiner Master-Erl\u00f6se.",
  "headline": "NRW Deutschrap Beats Kaufen: K\u00f6ln, D\u00fcsseldorf & Ruhrpott Sound",
  "description": "Premium 24-Bit Studio-WAV Beat Leases f\u00fcr K\u00fcnstler in Nordrhein-Westfalen. Druckvolle 808s, tanzbare Club Bounces und harter Stra\u00dfenrap f\u00fcr Spotify und Apple Music.",
  "popularGenres": [
    "NRW Street Trap",
    "K\u00f6ln Melodic Rap",
    "D\u00fcsseldorf Bounces",
    "Pott Drill"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "K\u00f6ln Beat Hub",
      "slug": "de/koeln",
      "description": "Melodischer Rap und moderne Club Bounces."
    },
    {
      "name": "D\u00fcsseldorf Beat Deals",
      "slug": "de/duesseldorf",
      "description": "Punchige 808s und moderner Sound."
    },
    {
      "name": "Ruhrgebiet Hardcore Drill",
      "slug": "de/ruhrgebiet",
      "description": "Dunkle B\u00e4sse und roher Stra\u00dfenrap."
    }
  ],
  "faqs": [
    {
      "question": "Darf ich Songs mit diesen Beats auf Spotify, Apple Music und YouTube in Deutschland \u2013 Nordrhein-Westfalen (NRW) ver\u00f6ffentlichen?",
      "answer": "Ja, absolut! Alle WAV- und MP3-Leases von Different Type of Vibe enthalten 100% weltweite kommerzielle Streaming-Rechte f\u00fcr Spotify, Apple Music, YouTube, Deezer, TikTok und Radio. Du beh\u00e4ltst 100% deiner Artist-Einnahmen."
    },
    {
      "question": "Sind die Beats mit GEMA konform und sample-cleared?",
      "answer": "Ja! Alle Instrumentals wurden von Onzieb original komponiert und produziert. Es gibt keine ungekl\u00e4rten Fremdsamples. Wenn du bei GEMA als Urheber gemeldet bist, kannst du deinen Text und deine Performance zu 100% abrechnen."
    },
    {
      "question": "Welche Zahlungsmethoden stehen zur Verf\u00fcgung?",
      "answer": "Du kannst sicher und schnell mit Klarna, Sofort, Giropay, Apple Pay, Google Pay, Kreditkarte bezahlen."
    },
    {
      "question": "Wie schnell erhalte ich die ungetaggten Beat-Dateien?",
      "answer": "Sofort nach dem Bezahlvorgang werden die ungetaggten 24-Bit WAV-Dateien, die MP3-Audiodatei und der rechtsg\u00fcltig unterzeichnete PDF-Lizenzvertrag direkt per Download-Link an deine E-Mail gesendet."
    }
  ]
},
  "de/bayern": {
  "name": "Deutschland \u2013 Bayern & M\u00fcnchen Hip-Hop Hub",
  "flag": "\ud83c\udde9\ud83c\uddea",
  "currency": "EUR (\u20ac)",
  "currencyCode": "EUR",
  "gateways": "Klarna, Sofort, Giropay, Apple Pay, Google Pay, Kreditkarte",
  "pro": "GEMA",
  "proFullName": "Gesellschaft f\u00fcr musikalische Auff\u00fchrungs- und mechanische Vervielf\u00e4ltigungsrechte (GEMA)",
  "proGuide": "100% GEMA-konform. Alle Beats sind Originalkompositionen ohne ungekl\u00e4rte Samples.",
  "headline": "Bayern Beats Kaufen: M\u00fcnchen High-End Trap & Fr\u00e4nkische Instrumentals",
  "description": "Glasklar gemasterte WAV Leases und Trackout Stems f\u00fcr Recording Artists in Bayern (M\u00fcnchen, N\u00fcrnberg, Augsburg). Sofortiger digitaler Download.",
  "popularGenres": [
    "M\u00fcnchen Trap",
    "Fr\u00e4nkischer Hip-Hop",
    "Melodische Keys",
    "Commercial Rap"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "M\u00fcnchen Beat Deals",
      "slug": "de/muenchen",
      "description": "Edle Synth-Fl\u00e4chen und moderne Trap Drums."
    },
    {
      "name": "N\u00fcrnberg Franken Hub",
      "slug": "de/nuernberg",
      "description": "Dynamische Instrumentals mit tiefen 808s."
    }
  ],
  "faqs": [
    {
      "question": "Darf ich Songs mit diesen Beats auf Spotify, Apple Music und YouTube in Deutschland \u2013 Bayern & M\u00fcnchen Hip-Hop Hub ver\u00f6ffentlichen?",
      "answer": "Ja, absolut! Alle WAV- und MP3-Leases von Different Type of Vibe enthalten 100% weltweite kommerzielle Streaming-Rechte f\u00fcr Spotify, Apple Music, YouTube, Deezer, TikTok und Radio. Du beh\u00e4ltst 100% deiner Artist-Einnahmen."
    },
    {
      "question": "Sind die Beats mit GEMA konform und sample-cleared?",
      "answer": "Ja! Alle Instrumentals wurden von Onzieb original komponiert und produziert. Es gibt keine ungekl\u00e4rten Fremdsamples. Wenn du bei GEMA als Urheber gemeldet bist, kannst du deinen Text und deine Performance zu 100% abrechnen."
    },
    {
      "question": "Welche Zahlungsmethoden stehen zur Verf\u00fcgung?",
      "answer": "Du kannst sicher und schnell mit Klarna, Sofort, Giropay, Apple Pay, Google Pay, Kreditkarte bezahlen."
    },
    {
      "question": "Wie schnell erhalte ich die ungetaggten Beat-Dateien?",
      "answer": "Sofort nach dem Bezahlvorgang werden die ungetaggten 24-Bit WAV-Dateien, die MP3-Audiodatei und der rechtsg\u00fcltig unterzeichnete PDF-Lizenzvertrag direkt per Download-Link an deine E-Mail gesendet."
    }
  ]
},
  "de/baden-wuerttemberg": {
  "name": "Deutschland \u2013 Baden-W\u00fcrttemberg (0711)",
  "flag": "\ud83c\udde9\ud83c\uddea",
  "currency": "EUR (\u20ac)",
  "currencyCode": "EUR",
  "gateways": "Klarna, Sofort, Giropay, Apple Pay, Google Pay, Kreditkarte",
  "pro": "GEMA",
  "proFullName": "Gesellschaft f\u00fcr musikalische Auff\u00fchrungs- und mechanische Vervielf\u00e4ltigungsrechte (GEMA)",
  "proGuide": "100% GEMA-konform. Alle Beats sind Originalkompositionen ohne ungekl\u00e4rte Samples.",
  "headline": "Baden-W\u00fcrttemberg Beats Kaufen: Stuttgart Cloud Rap & Mannheim Street Sound",
  "description": "Atmosph\u00e4rische Soundscapes, analoge Synth-Melodien und treibende 808 Grooves f\u00fcr K\u00fcnstler in Stuttgart, Mannheim, Karlsruhe und Heidelberg.",
  "popularGenres": [
    "Stuttgart Cloud Rap",
    "Mannheim Street Rap",
    "Vintage Synths",
    "Melodic Trap"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "Stuttgart Beat Hub",
      "slug": "de/stuttgart",
      "description": "Spacige Akkorde und Cloud Rap Vibes."
    }
  ],
  "faqs": [
    {
      "question": "Darf ich Songs mit diesen Beats auf Spotify, Apple Music und YouTube in Deutschland \u2013 Baden-W\u00fcrttemberg (0711) ver\u00f6ffentlichen?",
      "answer": "Ja, absolut! Alle WAV- und MP3-Leases von Different Type of Vibe enthalten 100% weltweite kommerzielle Streaming-Rechte f\u00fcr Spotify, Apple Music, YouTube, Deezer, TikTok und Radio. Du beh\u00e4ltst 100% deiner Artist-Einnahmen."
    },
    {
      "question": "Sind die Beats mit GEMA konform und sample-cleared?",
      "answer": "Ja! Alle Instrumentals wurden von Onzieb original komponiert und produziert. Es gibt keine ungekl\u00e4rten Fremdsamples. Wenn du bei GEMA als Urheber gemeldet bist, kannst du deinen Text und deine Performance zu 100% abrechnen."
    },
    {
      "question": "Welche Zahlungsmethoden stehen zur Verf\u00fcgung?",
      "answer": "Du kannst sicher und schnell mit Klarna, Sofort, Giropay, Apple Pay, Google Pay, Kreditkarte bezahlen."
    },
    {
      "question": "Wie schnell erhalte ich die ungetaggten Beat-Dateien?",
      "answer": "Sofort nach dem Bezahlvorgang werden die ungetaggten 24-Bit WAV-Dateien, die MP3-Audiodatei und der rechtsg\u00fcltig unterzeichnete PDF-Lizenzvertrag direkt per Download-Link an deine E-Mail gesendet."
    }
  ]
},
  "de/hessen": {
  "name": "Deutschland \u2013 Hessen & Frankfurt Azzlackz Hub",
  "flag": "\ud83c\udde9\ud83c\uddea",
  "currency": "EUR (\u20ac)",
  "currencyCode": "EUR",
  "gateways": "Klarna, Sofort, Giropay, Apple Pay, Google Pay, Kreditkarte",
  "pro": "GEMA",
  "proFullName": "Gesellschaft f\u00fcr musikalische Auff\u00fchrungs- und mechanische Vervielf\u00e4ltigungsrechte (GEMA)",
  "proGuide": "100% GEMA-konform. Alle Beats sind Originalkompositionen ohne ungekl\u00e4rte Samples.",
  "headline": "Hessen Beats Kaufen: Frankfurter Stra\u00dfenrap, D\u00fcstere Orchester & Mainhatten 808s",
  "description": "Brachiale B\u00e4sse, filmreife Orchester-Hits und kompromissloser Stra\u00dfen-Trap f\u00fcr Rapper in Frankfurt am Main, Offenbach, Wiesbaden und Kassel.",
  "popularGenres": [
    "FFM Dark Trap",
    "Haftbefehl Style",
    "Orchester Trap",
    "Azzlackz Sound"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "Frankfurt Beat Deals",
      "slug": "de/frankfurt",
      "description": "Dunkle B\u00e4sse und Stra\u00dfenrap-Drums."
    }
  ],
  "faqs": [
    {
      "question": "Darf ich Songs mit diesen Beats auf Spotify, Apple Music und YouTube in Deutschland \u2013 Hessen & Frankfurt Azzlackz Hub ver\u00f6ffentlichen?",
      "answer": "Ja, absolut! Alle WAV- und MP3-Leases von Different Type of Vibe enthalten 100% weltweite kommerzielle Streaming-Rechte f\u00fcr Spotify, Apple Music, YouTube, Deezer, TikTok und Radio. Du beh\u00e4ltst 100% deiner Artist-Einnahmen."
    },
    {
      "question": "Sind die Beats mit GEMA konform und sample-cleared?",
      "answer": "Ja! Alle Instrumentals wurden von Onzieb original komponiert und produziert. Es gibt keine ungekl\u00e4rten Fremdsamples. Wenn du bei GEMA als Urheber gemeldet bist, kannst du deinen Text und deine Performance zu 100% abrechnen."
    },
    {
      "question": "Welche Zahlungsmethoden stehen zur Verf\u00fcgung?",
      "answer": "Du kannst sicher und schnell mit Klarna, Sofort, Giropay, Apple Pay, Google Pay, Kreditkarte bezahlen."
    },
    {
      "question": "Wie schnell erhalte ich die ungetaggten Beat-Dateien?",
      "answer": "Sofort nach dem Bezahlvorgang werden die ungetaggten 24-Bit WAV-Dateien, die MP3-Audiodatei und der rechtsg\u00fcltig unterzeichnete PDF-Lizenzvertrag direkt per Download-Link an deine E-Mail gesendet."
    }
  ]
},
  "de/niedersachsen": {
  "name": "Deutschland \u2013 Niedersachsen & Hannover Trap",
  "flag": "\ud83c\udde9\ud83c\uddea",
  "currency": "EUR (\u20ac)",
  "currencyCode": "EUR",
  "gateways": "Klarna, Sofort, Giropay, Apple Pay, Google Pay, Kreditkarte",
  "pro": "GEMA",
  "proFullName": "Gesellschaft f\u00fcr musikalische Auff\u00fchrungs- und mechanische Vervielf\u00e4ltigungsrechte (GEMA)",
  "proGuide": "100% GEMA-konform. Alle Beats sind Originalkompositionen ohne ungekl\u00e4rte Samples.",
  "headline": "Niedersachsen Beats Kaufen: Hannover Hip-Hop & Moderner Trap",
  "description": "Vielseitige 24-Bit WAV Audio-Leases inklusive legalem PDF-Lizenzvertrag f\u00fcr Rapper und Produzenten in Niedersachsen (Hannover, Braunschweig, Osnabr\u00fcck).",
  "popularGenres": [
    "Hannover Trap",
    "Melodic Rap",
    "Moderne 808s"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "Hannover Beat Deals",
      "slug": "de/hannover",
      "description": "Moderne Beats und GEMA-freie WAV Lizenzen."
    }
  ],
  "faqs": [
    {
      "question": "Darf ich Songs mit diesen Beats auf Spotify, Apple Music und YouTube in Deutschland \u2013 Niedersachsen & Hannover Trap ver\u00f6ffentlichen?",
      "answer": "Ja, absolut! Alle WAV- und MP3-Leases von Different Type of Vibe enthalten 100% weltweite kommerzielle Streaming-Rechte f\u00fcr Spotify, Apple Music, YouTube, Deezer, TikTok und Radio. Du beh\u00e4ltst 100% deiner Artist-Einnahmen."
    },
    {
      "question": "Sind die Beats mit GEMA konform und sample-cleared?",
      "answer": "Ja! Alle Instrumentals wurden von Onzieb original komponiert und produziert. Es gibt keine ungekl\u00e4rten Fremdsamples. Wenn du bei GEMA als Urheber gemeldet bist, kannst du deinen Text und deine Performance zu 100% abrechnen."
    },
    {
      "question": "Welche Zahlungsmethoden stehen zur Verf\u00fcgung?",
      "answer": "Du kannst sicher und schnell mit Klarna, Sofort, Giropay, Apple Pay, Google Pay, Kreditkarte bezahlen."
    },
    {
      "question": "Wie schnell erhalte ich die ungetaggten Beat-Dateien?",
      "answer": "Sofort nach dem Bezahlvorgang werden die ungetaggten 24-Bit WAV-Dateien, die MP3-Audiodatei und der rechtsg\u00fcltig unterzeichnete PDF-Lizenzvertrag direkt per Download-Link an deine E-Mail gesendet."
    }
  ]
},
  "de/sachsen": {
  "name": "Deutschland \u2013 Sachsen & Leipzig Underground",
  "flag": "\ud83c\udde9\ud83c\uddea",
  "currency": "EUR (\u20ac)",
  "currencyCode": "EUR",
  "gateways": "Klarna, Sofort, Giropay, Apple Pay, Google Pay, Kreditkarte",
  "pro": "GEMA",
  "proFullName": "Gesellschaft f\u00fcr musikalische Auff\u00fchrungs- und mechanische Vervielf\u00e4ltigungsrechte (GEMA)",
  "proGuide": "100% GEMA-konform. Alle Beats sind Originalkompositionen ohne ungekl\u00e4rte Samples.",
  "headline": "Sachsen Beats Kaufen: Leipzig & Dresden Underground Boom Bap & Trap",
  "description": "Staubige Vinyl-Chops, ungeschliffene Drums und atmosph\u00e4rischer Untergrund-Trap f\u00fcr K\u00fcnstler in Leipzig, Dresden und Chemnitz.",
  "popularGenres": [
    "Leipzig Underground",
    "Staubiger Boom Bap",
    "Lofi Hip-Hop"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "Leipzig Underground Hub",
      "slug": "de/leipzig",
      "description": "Vintage Akustik-Chops und schwere Kicks."
    }
  ],
  "faqs": [
    {
      "question": "Darf ich Songs mit diesen Beats auf Spotify, Apple Music und YouTube in Deutschland \u2013 Sachsen & Leipzig Underground ver\u00f6ffentlichen?",
      "answer": "Ja, absolut! Alle WAV- und MP3-Leases von Different Type of Vibe enthalten 100% weltweite kommerzielle Streaming-Rechte f\u00fcr Spotify, Apple Music, YouTube, Deezer, TikTok und Radio. Du beh\u00e4ltst 100% deiner Artist-Einnahmen."
    },
    {
      "question": "Sind die Beats mit GEMA konform und sample-cleared?",
      "answer": "Ja! Alle Instrumentals wurden von Onzieb original komponiert und produziert. Es gibt keine ungekl\u00e4rten Fremdsamples. Wenn du bei GEMA als Urheber gemeldet bist, kannst du deinen Text und deine Performance zu 100% abrechnen."
    },
    {
      "question": "Welche Zahlungsmethoden stehen zur Verf\u00fcgung?",
      "answer": "Du kannst sicher und schnell mit Klarna, Sofort, Giropay, Apple Pay, Google Pay, Kreditkarte bezahlen."
    },
    {
      "question": "Wie schnell erhalte ich die ungetaggten Beat-Dateien?",
      "answer": "Sofort nach dem Bezahlvorgang werden die ungetaggten 24-Bit WAV-Dateien, die MP3-Audiodatei und der rechtsg\u00fcltig unterzeichnete PDF-Lizenzvertrag direkt per Download-Link an deine E-Mail gesendet."
    }
  ]
},
  "at/wien": {
  "name": "\u00d6sterreich \u2013 Wien Deutschrap & Afro-Trap Hub",
  "flag": "\ud83c\udde6\ud83c\uddf9",
  "currency": "EUR (\u20ac)",
  "currencyCode": "EUR",
  "gateways": "Klarna, EPS, Apple Pay, Google Pay, Kreditkarte",
  "pro": "AKM & Austro Mechana",
  "proFullName": "Staatlich genehmigte Gesellschaft der Autoren, Komponisten und Musikverleger (AKM)",
  "proGuide": "100% AKM und Austro Mechana konform. Du beh\u00e4ltst 100% deiner Tantiemen auf Spotify, Apple Music und FM4 Airplay.",
  "headline": "Wien Beats Kaufen: Wiener Afro-Trap, Cloud Rap & Melodischer Trap",
  "description": "Premium Beats f\u00fcr Recording Artists in Wien und ganz \u00d6sterreich. Inspiriert vom Wiener Sound (RAF Camora, Yung Hurn). Sofortiger Download von 24-Bit WAV-Dateien und Stems.",
  "popularGenres": [
    "Wiener Afro-Trap",
    "Cloud Rap",
    "Dancehall Trap",
    "Melodischer Rap"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "Wien Deutschrap Scene Hub",
      "slug": "../../scene/wien-austria-deutschrap",
      "description": "Mediterrane Gitarren und Wiener Afro-Trap Bounces."
    },
    {
      "name": "RAF Camora Vibe Hub",
      "slug": "../../vibe/raf-camora-afro-trap-beats",
      "description": "Dancehall und Afro-Trap Bounces mit treibenden 808s."
    },
    {
      "name": "Yung Hurn Cloud Vibe",
      "slug": "../../vibe/yung-hurn-wien-cloud-rap",
      "description": "Spacige Cloud Melodien und minimalistische 808 Drums."
    }
  ],
  "faqs": [
    {
      "question": "Darf ich Songs mit diesen Beats auf Spotify, Apple Music und YouTube in \u00d6sterreich \u2013 Wien Deutschrap & Afro-Trap Hub ver\u00f6ffentlichen?",
      "answer": "Ja, absolut! Alle WAV- und MP3-Leases von Different Type of Vibe enthalten 100% weltweite kommerzielle Streaming-Rechte f\u00fcr Spotify, Apple Music, YouTube, Deezer, TikTok und Radio. Du beh\u00e4ltst 100% deiner Artist-Einnahmen."
    },
    {
      "question": "Sind die Beats mit AKM & Austro Mechana konform und sample-cleared?",
      "answer": "Ja! Alle Instrumentals wurden von Onzieb original komponiert und produziert. Es gibt keine ungekl\u00e4rten Fremdsamples. Wenn du bei AKM & Austro Mechana als Urheber gemeldet bist, kannst du deinen Text und deine Performance zu 100% abrechnen."
    },
    {
      "question": "Welche Zahlungsmethoden stehen zur Verf\u00fcgung?",
      "answer": "Du kannst sicher und schnell mit Klarna, EPS, Apple Pay, Google Pay, Kreditkarte bezahlen."
    },
    {
      "question": "Wie schnell erhalte ich die ungetaggten Beat-Dateien?",
      "answer": "Sofort nach dem Bezahlvorgang werden die ungetaggten 24-Bit WAV-Dateien, die MP3-Audiodatei und der rechtsg\u00fcltig unterzeichnete PDF-Lizenzvertrag direkt per Download-Link an deine E-Mail gesendet."
    }
  ]
},
  "ch/zuerich": {
  "name": "Schweiz \u2013 Z\u00fcrich Hip-Hop & Trap Scene",
  "flag": "\ud83c\udde8\ud83c\udded",
  "currency": "CHF / EUR",
  "currencyCode": "CHF",
  "gateways": "Apple Pay, Google Pay, TWINT, Kreditkarte, Stripe",
  "pro": "SUISA",
  "proFullName": "Genossenschaft der Urheber und Verleger von Musik (SUISA)",
  "proGuide": "100% SUISA-konform f\u00fcr Schweizer Musiker. Alle Lizenzen umfassen weltweite kommerzielle Streaming-Rechte.",
  "headline": "Z\u00fcrich Beats Kaufen: Schweizer Trap, Drill & High-End Instrumentals",
  "description": "High-Definition 24-Bit Studio WAV Leases f\u00fcr K\u00fcnstler in Z\u00fcrich, Basel, Bern und der gesamten Schweiz. Veredelte Produktionen mit vollen Urheberrechten.",
  "popularGenres": [
    "Schweizer Trap",
    "Z\u00fcrich Drill",
    "Melodic Hip-Hop",
    "High-End Stems"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "Z\u00fcrich Swiss Trap Scene",
      "slug": "../../scene/zuerich-schweiz-trap",
      "description": "Pr\u00e4zise 808-Produktionen und luxuri\u00f6se Synth-Harmonien."
    }
  ],
  "faqs": [
    {
      "question": "Darf ich Songs mit diesen Beats auf Spotify, Apple Music und YouTube in Schweiz \u2013 Z\u00fcrich Hip-Hop & Trap Scene ver\u00f6ffentlichen?",
      "answer": "Ja, absolut! Alle WAV- und MP3-Leases von Different Type of Vibe enthalten 100% weltweite kommerzielle Streaming-Rechte f\u00fcr Spotify, Apple Music, YouTube, Deezer, TikTok und Radio. Du beh\u00e4ltst 100% deiner Artist-Einnahmen."
    },
    {
      "question": "Sind die Beats mit SUISA konform und sample-cleared?",
      "answer": "Ja! Alle Instrumentals wurden von Onzieb original komponiert und produziert. Es gibt keine ungekl\u00e4rten Fremdsamples. Wenn du bei SUISA als Urheber gemeldet bist, kannst du deinen Text und deine Performance zu 100% abrechnen."
    },
    {
      "question": "Welche Zahlungsmethoden stehen zur Verf\u00fcgung?",
      "answer": "Du kannst sicher und schnell mit Apple Pay, Google Pay, TWINT, Kreditkarte, Stripe bezahlen."
    },
    {
      "question": "Wie schnell erhalte ich die ungetaggten Beat-Dateien?",
      "answer": "Sofort nach dem Bezahlvorgang werden die ungetaggten 24-Bit WAV-Dateien, die MP3-Audiodatei und der rechtsg\u00fcltig unterzeichnete PDF-Lizenzvertrag direkt per Download-Link an deine E-Mail gesendet."
    }
  ]
},
  "gb/london": {
  "name": "United Kingdom \u2013 London UK Drill & Rap Capital",
  "flag": "\ud83c\uddec\ud83c\udde7",
  "currency": "GBP (\u00a3)",
  "currencyCode": "GBP",
  "gateways": "Apple Pay, Google Pay, UK Cards, Revolut, Clearpay, Klarna",
  "pro": "PRS for Music & PPL",
  "proFullName": "Performing Right Society (PRS for Music) & Phonographic Performance Limited (PPL)",
  "proGuide": "100% PRS & PPL compliant for UK music artists. Fully cleared for BBC Radio 1Xtra, Spotify UK, Apple Music, and UK sync licensing.",
  "headline": "London UK Drill & Rap Beats for Sale: Sliding 808s & Studio WAV Leases",
  "description": "Authentic London UK Drill, Afroswing, and Grime instrumentals for recording vocalists in London (Brixton, Tottenham, Croydon, Hackney, West London). Instant untagged 24-bit WAV & STEM trackouts.",
  "popularGenres": [
    "UK Drill",
    "London Afroswing",
    "Central Cee Style",
    "Grime 140 BPM"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "London Drill Scene Hub",
      "slug": "../../scene/london-uk-drill-beats",
      "description": "Aggressive sliding 808s and syncopated UK percussion."
    },
    {
      "name": "Central Cee Melodic Drill",
      "slug": "../../vibe/central-cee-melodic-drill-beats",
      "description": "High-energy acoustic strings and fast sliding 808 bounce."
    },
    {
      "name": "Dave Piano Rap Vibe",
      "slug": "../../vibe/dave-santandave-piano-rap",
      "description": "Cinematic emotional piano chords and storytelling rap."
    }
  ],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify UK, Apple Music, and YouTube in United Kingdom \u2013 London UK Drill & Rap Capital?",
      "answer": "Yes! All WAV and MP3 licenses include full commercial streaming rights across Spotify, Apple Music, YouTube, Deezer, and TikTok. You retain 100% of your artist master streaming royalties."
    },
    {
      "question": "How do I register my release with PRS for Music and PPL in the United Kingdom?",
      "answer": "Register your release with PRS for Music & PPL by listing yourself as the lyricist/performer (retaining 100% writer share of lyrics) and crediting Onzieb (Different Type of Vibe) as the music producer/composer per your countersigned PDF license contract."
    },
    {
      "question": "Which UK payment methods are supported?",
      "answer": "You can pay easily in British Pounds (\u00a3 / GBP) via Apple Pay, Google Pay, UK Debit/Credit Cards, Revolut, Clearpay, and Klarna."
    },
    {
      "question": "How quickly do I receive my untagged audio files?",
      "answer": "Immediately upon checkout, an untagged studio 24-bit WAV file, MP3 audio, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "gb/birmingham": {
  "name": "United Kingdom \u2013 Birmingham (0121) Drill & Rap",
  "flag": "\ud83c\uddec\ud83c\udde7",
  "currency": "GBP (\u00a3)",
  "currencyCode": "GBP",
  "gateways": "Apple Pay, Google Pay, UK Cards, Revolut, Clearpay",
  "pro": "PRS for Music & PPL",
  "proFullName": "Performing Right Society (PRS for Music) & Phonographic Performance Limited (PPL)",
  "proGuide": "Register with PRS for Music & PPL. Retain 100% of your artist streaming royalties across Spotify UK, YouTube, and BBC 1Xtra.",
  "headline": "Birmingham Beats for Sale: 0121 Drill, Trap & Melodic Rap Leases",
  "description": "Heavyweight Birmingham rap and drill instrumentals featuring fast punchy 808s and dark melodies inspired by Mist, Jaykae, and M1llionz.",
  "popularGenres": [
    "0121 Drill",
    "Birmingham Rap",
    "Dark 808s",
    "UK Trap"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "Birmingham Scene Hub",
      "slug": "../../scene/birmingham-0121-drill",
      "description": "Midlands heavyweight bounce and punchy bass."
    }
  ],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify UK, Apple Music, and YouTube in United Kingdom \u2013 Birmingham (0121) Drill & Rap?",
      "answer": "Yes! All WAV and MP3 licenses include full commercial streaming rights across Spotify, Apple Music, YouTube, Deezer, and TikTok. You retain 100% of your artist master streaming royalties."
    },
    {
      "question": "How do I register my release with PRS for Music and PPL in the United Kingdom?",
      "answer": "Register your release with PRS for Music & PPL by listing yourself as the lyricist/performer (retaining 100% writer share of lyrics) and crediting Onzieb (Different Type of Vibe) as the music producer/composer per your countersigned PDF license contract."
    },
    {
      "question": "Which UK payment methods are supported?",
      "answer": "You can pay easily in British Pounds (\u00a3 / GBP) via Apple Pay, Google Pay, UK Debit/Credit Cards, Revolut, Clearpay, and Klarna."
    },
    {
      "question": "How quickly do I receive my untagged audio files?",
      "answer": "Immediately upon checkout, an untagged studio 24-bit WAV file, MP3 audio, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "gb/manchester": {
  "name": "United Kingdom \u2013 Manchester (0161) Rap & Bounce",
  "flag": "\ud83c\uddec\ud83c\udde7",
  "currency": "GBP (\u00a3)",
  "currencyCode": "GBP",
  "gateways": "Apple Pay, Google Pay, UK Cards, Revolut, Clearpay",
  "pro": "PRS for Music & PPL",
  "proFullName": "Performing Right Society (PRS for Music) & Phonographic Performance Limited (PPL)",
  "proGuide": "100% PRS & PPL compliant for UK music creators. Keep all your master royalties on commercial releases.",
  "headline": "Manchester Beats for Sale: 0161 Melodic Rap, Wavy Drill & Grime",
  "description": "Chill wavy melodic trap, fast bounce, and grime instrumentals inspired by Aitch, Nemzzz, and Bugzy Malone for Manchester vocalists.",
  "popularGenres": [
    "0161 Melodic Rap",
    "Manchester Bounce",
    "Nemzzz Vibe",
    "UK Grime"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "Manchester Scene Hub",
      "slug": "../../scene/manchester-0161-rap-beats",
      "description": "Wavy melodic flows and crisp 808 kicks."
    },
    {
      "name": "Nemzzz Bounce Style",
      "slug": "../../vibe/nemzzz-manchester-bounce-beats",
      "description": "Floating synths and light punchy drums."
    }
  ],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify UK, Apple Music, and YouTube in United Kingdom \u2013 Manchester (0161) Rap & Bounce?",
      "answer": "Yes! All WAV and MP3 licenses include full commercial streaming rights across Spotify, Apple Music, YouTube, Deezer, and TikTok. You retain 100% of your artist master streaming royalties."
    },
    {
      "question": "How do I register my release with PRS for Music and PPL in the United Kingdom?",
      "answer": "Register your release with PRS for Music & PPL by listing yourself as the lyricist/performer (retaining 100% writer share of lyrics) and crediting Onzieb (Different Type of Vibe) as the music producer/composer per your countersigned PDF license contract."
    },
    {
      "question": "Which UK payment methods are supported?",
      "answer": "You can pay easily in British Pounds (\u00a3 / GBP) via Apple Pay, Google Pay, UK Debit/Credit Cards, Revolut, Clearpay, and Klarna."
    },
    {
      "question": "How quickly do I receive my untagged audio files?",
      "answer": "Immediately upon checkout, an untagged studio 24-bit WAV file, MP3 audio, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "gb/liverpool": {
  "name": "United Kingdom \u2013 Liverpool Scouse Rap & Drill",
  "flag": "\ud83c\uddec\ud83c\udde7",
  "currency": "GBP (\u00a3)",
  "currencyCode": "GBP",
  "gateways": "Apple Pay, Google Pay, UK Cards, Revolut, Clearpay",
  "pro": "PRS for Music & PPL",
  "proFullName": "Performing Right Society (PRS for Music) & Phonographic Performance Limited (PPL)",
  "proGuide": "100% cleared for Spotify UK, Apple Music, and UK commercial radio.",
  "headline": "Liverpool Beats for Sale: Scouse Rap, Drill & Melodic Trap",
  "description": "Fast-paced syncopated beats with melodic guitar riffs and heavy sub bass for independent recording artists in Merseyside and Liverpool.",
  "popularGenres": [
    "Liverpool Scouse Rap",
    "Merseyside Drill",
    "Melodic Trap"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify UK, Apple Music, and YouTube in United Kingdom \u2013 Liverpool Scouse Rap & Drill?",
      "answer": "Yes! All WAV and MP3 licenses include full commercial streaming rights across Spotify, Apple Music, YouTube, Deezer, and TikTok. You retain 100% of your artist master streaming royalties."
    },
    {
      "question": "How do I register my release with PRS for Music and PPL in the United Kingdom?",
      "answer": "Register your release with PRS for Music & PPL by listing yourself as the lyricist/performer (retaining 100% writer share of lyrics) and crediting Onzieb (Different Type of Vibe) as the music producer/composer per your countersigned PDF license contract."
    },
    {
      "question": "Which UK payment methods are supported?",
      "answer": "You can pay easily in British Pounds (\u00a3 / GBP) via Apple Pay, Google Pay, UK Debit/Credit Cards, Revolut, Clearpay, and Klarna."
    },
    {
      "question": "How quickly do I receive my untagged audio files?",
      "answer": "Immediately upon checkout, an untagged studio 24-bit WAV file, MP3 audio, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "gb/leeds": {
  "name": "United Kingdom \u2013 Leeds & Yorkshire Rap Hub",
  "flag": "\ud83c\uddec\ud83c\udde7",
  "currency": "GBP (\u00a3)",
  "currencyCode": "GBP",
  "gateways": "Apple Pay, Google Pay, UK Cards, Revolut, Clearpay",
  "pro": "PRS for Music & PPL",
  "proFullName": "Performing Right Society (PRS for Music) & Phonographic Performance Limited (PPL)",
  "proGuide": "100% royalty-free original compositions. Cleared for BBC 1Xtra and streaming.",
  "headline": "Leeds Beats for Sale: Yorkshire UK Drill, Bassline & Street Rap",
  "description": "Heavy northern bounce, dark sliding 808s, and fast syncopation for recording artists across Leeds and Yorkshire.",
  "popularGenres": [
    "Yorkshire Drill",
    "Bassline Rap",
    "Northern Bounce"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify UK, Apple Music, and YouTube in United Kingdom \u2013 Leeds & Yorkshire Rap Hub?",
      "answer": "Yes! All WAV and MP3 licenses include full commercial streaming rights across Spotify, Apple Music, YouTube, Deezer, and TikTok. You retain 100% of your artist master streaming royalties."
    },
    {
      "question": "How do I register my release with PRS for Music and PPL in the United Kingdom?",
      "answer": "Register your release with PRS for Music & PPL by listing yourself as the lyricist/performer (retaining 100% writer share of lyrics) and crediting Onzieb (Different Type of Vibe) as the music producer/composer per your countersigned PDF license contract."
    },
    {
      "question": "Which UK payment methods are supported?",
      "answer": "You can pay easily in British Pounds (\u00a3 / GBP) via Apple Pay, Google Pay, UK Debit/Credit Cards, Revolut, Clearpay, and Klarna."
    },
    {
      "question": "How quickly do I receive my untagged audio files?",
      "answer": "Immediately upon checkout, an untagged studio 24-bit WAV file, MP3 audio, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "gb/nottingham": {
  "name": "United Kingdom \u2013 Nottingham East Midlands Melodic Rap",
  "flag": "\ud83c\uddec\ud83c\udde7",
  "currency": "GBP (\u00a3)",
  "currencyCode": "GBP",
  "gateways": "Apple Pay, Google Pay, UK Cards, Revolut, Clearpay",
  "pro": "PRS for Music & PPL",
  "proFullName": "Performing Right Society (PRS for Music) & Phonographic Performance Limited (PPL)",
  "proGuide": "100% PRS & PPL compliant with signed legal PDF license contracts.",
  "headline": "Nottingham Beats for Sale: Melodic Wave, Afroswing & Drill",
  "description": "Catchy melodic hooks, acoustic guitar loops, and rolling Afroswing bounce inspired by Young T & Bugsey.",
  "popularGenres": [
    "Nottingham Melodic",
    "East Midlands Afroswing",
    "UK Wave"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify UK, Apple Music, and YouTube in United Kingdom \u2013 Nottingham East Midlands Melodic Rap?",
      "answer": "Yes! All WAV and MP3 licenses include full commercial streaming rights across Spotify, Apple Music, YouTube, Deezer, and TikTok. You retain 100% of your artist master streaming royalties."
    },
    {
      "question": "How do I register my release with PRS for Music and PPL in the United Kingdom?",
      "answer": "Register your release with PRS for Music & PPL by listing yourself as the lyricist/performer (retaining 100% writer share of lyrics) and crediting Onzieb (Different Type of Vibe) as the music producer/composer per your countersigned PDF license contract."
    },
    {
      "question": "Which UK payment methods are supported?",
      "answer": "You can pay easily in British Pounds (\u00a3 / GBP) via Apple Pay, Google Pay, UK Debit/Credit Cards, Revolut, Clearpay, and Klarna."
    },
    {
      "question": "How quickly do I receive my untagged audio files?",
      "answer": "Immediately upon checkout, an untagged studio 24-bit WAV file, MP3 audio, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "gb/bristol": {
  "name": "United Kingdom \u2013 Bristol Bass & UK Drill",
  "flag": "\ud83c\uddec\ud83c\udde7",
  "currency": "GBP (\u00a3)",
  "currencyCode": "GBP",
  "gateways": "Apple Pay, Google Pay, UK Cards, Revolut, Clearpay",
  "pro": "PRS for Music & PPL",
  "proFullName": "Performing Right Society (PRS for Music) & Phonographic Performance Limited (PPL)",
  "proGuide": "100% PRS & PPL compliant for UK distribution.",
  "headline": "Bristol Beats for Sale: Heavy Sub Bass, Trip-Hop Atmospheric & Drill",
  "description": "Deep atmospheric sound design, heavy sub bass, and crisp syncopated percussion for Bristol recording vocalists.",
  "popularGenres": [
    "Bristol Sub Bass",
    "Atmospheric Drill",
    "UK Trap"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify UK, Apple Music, and YouTube in United Kingdom \u2013 Bristol Bass & UK Drill?",
      "answer": "Yes! All WAV and MP3 licenses include full commercial streaming rights across Spotify, Apple Music, YouTube, Deezer, and TikTok. You retain 100% of your artist master streaming royalties."
    },
    {
      "question": "How do I register my release with PRS for Music and PPL in the United Kingdom?",
      "answer": "Register your release with PRS for Music & PPL by listing yourself as the lyricist/performer (retaining 100% writer share of lyrics) and crediting Onzieb (Different Type of Vibe) as the music producer/composer per your countersigned PDF license contract."
    },
    {
      "question": "Which UK payment methods are supported?",
      "answer": "You can pay easily in British Pounds (\u00a3 / GBP) via Apple Pay, Google Pay, UK Debit/Credit Cards, Revolut, Clearpay, and Klarna."
    },
    {
      "question": "How quickly do I receive my untagged audio files?",
      "answer": "Immediately upon checkout, an untagged studio 24-bit WAV file, MP3 audio, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "gb/glasgow": {
  "name": "United Kingdom \u2013 Glasgow & Scottish Rap Scene",
  "flag": "\ud83c\uddec\ud83c\udde7",
  "currency": "GBP (\u00a3)",
  "currencyCode": "GBP",
  "gateways": "Apple Pay, Google Pay, UK Cards, Revolut, Clearpay",
  "pro": "PRS for Music & PPL",
  "proFullName": "Performing Right Society (PRS for Music) & Phonographic Performance Limited (PPL)",
  "proGuide": "100% cleared for commercial streaming in Scotland, UK, and worldwide.",
  "headline": "Glasgow Beats for Sale: Scottish Drill, Hard Trap & Boom Bap",
  "description": "Hard-hitting drill kicks, dark synth arpeggios, and uncompressed 24-bit WAV trackouts for Scottish recording artists.",
  "popularGenres": [
    "Scottish Drill",
    "Glasgow Street Rap",
    "Hard Trap"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify UK, Apple Music, and YouTube in United Kingdom \u2013 Glasgow & Scottish Rap Scene?",
      "answer": "Yes! All WAV and MP3 licenses include full commercial streaming rights across Spotify, Apple Music, YouTube, Deezer, and TikTok. You retain 100% of your artist master streaming royalties."
    },
    {
      "question": "How do I register my release with PRS for Music and PPL in the United Kingdom?",
      "answer": "Register your release with PRS for Music & PPL by listing yourself as the lyricist/performer (retaining 100% writer share of lyrics) and crediting Onzieb (Different Type of Vibe) as the music producer/composer per your countersigned PDF license contract."
    },
    {
      "question": "Which UK payment methods are supported?",
      "answer": "You can pay easily in British Pounds (\u00a3 / GBP) via Apple Pay, Google Pay, UK Debit/Credit Cards, Revolut, Clearpay, and Klarna."
    },
    {
      "question": "How quickly do I receive my untagged audio files?",
      "answer": "Immediately upon checkout, an untagged studio 24-bit WAV file, MP3 audio, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "gb/cardiff": {
  "name": "United Kingdom \u2013 Cardiff & Welsh Hip-Hop Hub",
  "flag": "\ud83c\uddec\ud83c\udde7",
  "currency": "GBP (\u00a3)",
  "currencyCode": "GBP",
  "gateways": "Apple Pay, Google Pay, UK Cards, Revolut, Clearpay",
  "pro": "PRS for Music & PPL",
  "proFullName": "Performing Right Society (PRS for Music) & Phonographic Performance Limited (PPL)",
  "proGuide": "100% PRS & PPL compliant with instant download.",
  "headline": "Cardiff Beats for Sale: Welsh Rap, Drill & Melodic 808s",
  "description": "Dynamic instrumentals for Welsh recording artists and music producers. Cleared for Spotify UK, Apple Music, and YouTube.",
  "popularGenres": [
    "Welsh Rap",
    "Cardiff Drill",
    "Melodic 808s"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify UK, Apple Music, and YouTube in United Kingdom \u2013 Cardiff & Welsh Hip-Hop Hub?",
      "answer": "Yes! All WAV and MP3 licenses include full commercial streaming rights across Spotify, Apple Music, YouTube, Deezer, and TikTok. You retain 100% of your artist master streaming royalties."
    },
    {
      "question": "How do I register my release with PRS for Music and PPL in the United Kingdom?",
      "answer": "Register your release with PRS for Music & PPL by listing yourself as the lyricist/performer (retaining 100% writer share of lyrics) and crediting Onzieb (Different Type of Vibe) as the music producer/composer per your countersigned PDF license contract."
    },
    {
      "question": "Which UK payment methods are supported?",
      "answer": "You can pay easily in British Pounds (\u00a3 / GBP) via Apple Pay, Google Pay, UK Debit/Credit Cards, Revolut, Clearpay, and Klarna."
    },
    {
      "question": "How quickly do I receive my untagged audio files?",
      "answer": "Immediately upon checkout, an untagged studio 24-bit WAV file, MP3 audio, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "gb/coventry": {
  "name": "United Kingdom \u2013 Coventry Afro-Drill Scene",
  "flag": "\ud83c\uddec\ud83c\udde7",
  "currency": "GBP (\u00a3)",
  "currencyCode": "GBP",
  "gateways": "Apple Pay, Google Pay, UK Cards, Revolut, Clearpay",
  "pro": "PRS for Music & PPL",
  "proFullName": "Performing Right Society (PRS for Music) & Phonographic Performance Limited (PPL)",
  "proGuide": "100% PRS & PPL compliant with full streaming rights.",
  "headline": "Coventry Beats for Sale: Afro-Drill, Heavy Tribal Percussion & 808s",
  "description": "Raw, energetic African tribal percussion fused with heavy sliding drill basslines inspired by Pa Salieu.",
  "popularGenres": [
    "Coventry Afro-Drill",
    "Tribal Percussion",
    "Raw UK Drill"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "Pa Salieu Afro-Drill Style",
      "slug": "../../vibe/pa-salieu-afro-drill-beats",
      "description": "Raw African drums and heavy drill low-end."
    }
  ],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify UK, Apple Music, and YouTube in United Kingdom \u2013 Coventry Afro-Drill Scene?",
      "answer": "Yes! All WAV and MP3 licenses include full commercial streaming rights across Spotify, Apple Music, YouTube, Deezer, and TikTok. You retain 100% of your artist master streaming royalties."
    },
    {
      "question": "How do I register my release with PRS for Music and PPL in the United Kingdom?",
      "answer": "Register your release with PRS for Music & PPL by listing yourself as the lyricist/performer (retaining 100% writer share of lyrics) and crediting Onzieb (Different Type of Vibe) as the music producer/composer per your countersigned PDF license contract."
    },
    {
      "question": "Which UK payment methods are supported?",
      "answer": "You can pay easily in British Pounds (\u00a3 / GBP) via Apple Pay, Google Pay, UK Debit/Credit Cards, Revolut, Clearpay, and Klarna."
    },
    {
      "question": "How quickly do I receive my untagged audio files?",
      "answer": "Immediately upon checkout, an untagged studio 24-bit WAV file, MP3 audio, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "gb/sheffield": {
  "name": "United Kingdom \u2013 Sheffield & South Yorkshire Bassline Hub",
  "flag": "\ud83c\uddec\ud83c\udde7",
  "currency": "GBP (\u00a3)",
  "currencyCode": "GBP",
  "gateways": "Apple Pay, Google Pay, UK Cards, Revolut, Clearpay",
  "pro": "PRS for Music & PPL",
  "proFullName": "Performing Right Society (PRS for Music) & Phonographic Performance Limited (PPL)",
  "proGuide": "100% PRS & PPL compliant for UK music artists. Fully cleared for commercial streaming and radio play.",
  "headline": "Sheffield Beats for Sale: Bassline Rap, 140 BPM Grime & Heavy Drill",
  "description": "Heavyweight bassline-infused rap and aggressive UK drill instrumentals for recording vocalists in Sheffield and South Yorkshire. Instant uncompressed 24-bit WAV leases.",
  "popularGenres": [
    "Sheffield Bassline Rap",
    "UK Drill",
    "140 BPM Grime",
    "Yorkshire Street Rap"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "Sheffield Scene Hub",
      "slug": "../../scene/sheffield-grime-beats",
      "description": "High-energy 140 BPM bass and punchy UK drums."
    }
  ],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify UK, Apple Music, and YouTube in United Kingdom \u2013 Sheffield & South Yorkshire Bassline Hub?",
      "answer": "Yes! All WAV and MP3 licenses include full commercial streaming rights across Spotify, Apple Music, YouTube, Deezer, and TikTok. You retain 100% of your artist master streaming royalties."
    },
    {
      "question": "How do I register my release with PRS for Music and PPL in the United Kingdom?",
      "answer": "Register your release with PRS for Music & PPL by listing yourself as the lyricist/performer (retaining 100% writer share of lyrics) and crediting Onzieb (Different Type of Vibe) as the music producer/composer per your countersigned PDF license contract."
    },
    {
      "question": "Which UK payment methods are supported?",
      "answer": "You can pay easily in British Pounds (\u00a3 / GBP) via Apple Pay, Google Pay, UK Debit/Credit Cards, Revolut, Clearpay, and Klarna."
    },
    {
      "question": "How quickly do I receive my untagged audio files?",
      "answer": "Immediately upon checkout, an untagged studio 24-bit WAV file, MP3 audio, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "gb/newcastle": {
  "name": "United Kingdom \u2013 Newcastle & North East Rap Hub",
  "flag": "\ud83c\uddec\ud83c\udde7",
  "currency": "GBP (\u00a3)",
  "currencyCode": "GBP",
  "gateways": "Apple Pay, Google Pay, UK Cards, Revolut, Clearpay",
  "pro": "PRS for Music & PPL",
  "proFullName": "Performing Right Society (PRS for Music) & Phonographic Performance Limited (PPL)",
  "proGuide": "100% PRS & PPL compliant with signed legal PDF agreements.",
  "headline": "Newcastle Beats for Sale: North East UK Drill, Trap & Grime Leases",
  "description": "Fast syncopated drill percussion, dark sliding 808s, and melodic keys for independent recording artists across Newcastle and the North East.",
  "popularGenres": [
    "North East Drill",
    "Newcastle Street Rap",
    "Melodic 808s"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify UK, Apple Music, and YouTube in United Kingdom \u2013 Newcastle & North East Rap Hub?",
      "answer": "Yes! All WAV and MP3 licenses include full commercial streaming rights across Spotify, Apple Music, YouTube, Deezer, and TikTok. You retain 100% of your artist master streaming royalties."
    },
    {
      "question": "How do I register my release with PRS for Music and PPL in the United Kingdom?",
      "answer": "Register your release with PRS for Music & PPL by listing yourself as the lyricist/performer (retaining 100% writer share of lyrics) and crediting Onzieb (Different Type of Vibe) as the music producer/composer per your countersigned PDF license contract."
    },
    {
      "question": "Which UK payment methods are supported?",
      "answer": "You can pay easily in British Pounds (\u00a3 / GBP) via Apple Pay, Google Pay, UK Debit/Credit Cards, Revolut, Clearpay, and Klarna."
    },
    {
      "question": "How quickly do I receive my untagged audio files?",
      "answer": "Immediately upon checkout, an untagged studio 24-bit WAV file, MP3 audio, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "gb/brighton": {
  "name": "United Kingdom \u2013 Brighton & South Coast Melodic Rap",
  "flag": "\ud83c\uddec\ud83c\udde7",
  "currency": "GBP (\u00a3)",
  "currencyCode": "GBP",
  "gateways": "Apple Pay, Google Pay, UK Cards, Revolut, Clearpay",
  "pro": "PRS for Music & PPL",
  "proFullName": "Performing Right Society (PRS for Music) & Phonographic Performance Limited (PPL)",
  "proGuide": "100% PRS & PPL compliant with instant digital download.",
  "headline": "Brighton Beats for Sale: Commercial UK Rap, Catchy Melodic Drill & Club Trap",
  "description": "Bouncy commercial UK rap instrumentals with infectious acoustic hooks and fast 808 bounce inspired by ArrDee for South Coast recording vocalists.",
  "popularGenres": [
    "Brighton Commercial Rap",
    "Melodic Drill",
    "Catchy Hook Beats"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "ArrDee Style Hub",
      "slug": "../../vibe/arrdee-brighton-club-rap-beats",
      "description": "High energy club rap and fast melodic drill."
    }
  ],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify UK, Apple Music, and YouTube in United Kingdom \u2013 Brighton & South Coast Melodic Rap?",
      "answer": "Yes! All WAV and MP3 licenses include full commercial streaming rights across Spotify, Apple Music, YouTube, Deezer, and TikTok. You retain 100% of your artist master streaming royalties."
    },
    {
      "question": "How do I register my release with PRS for Music and PPL in the United Kingdom?",
      "answer": "Register your release with PRS for Music & PPL by listing yourself as the lyricist/performer (retaining 100% writer share of lyrics) and crediting Onzieb (Different Type of Vibe) as the music producer/composer per your countersigned PDF license contract."
    },
    {
      "question": "Which UK payment methods are supported?",
      "answer": "You can pay easily in British Pounds (\u00a3 / GBP) via Apple Pay, Google Pay, UK Debit/Credit Cards, Revolut, Clearpay, and Klarna."
    },
    {
      "question": "How quickly do I receive my untagged audio files?",
      "answer": "Immediately upon checkout, an untagged studio 24-bit WAV file, MP3 audio, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "gb/edinburgh": {
  "name": "United Kingdom \u2013 Edinburgh & Scottish Hip-Hop Hub",
  "flag": "\ud83c\uddec\ud83c\udde7",
  "currency": "GBP (\u00a3)",
  "currencyCode": "GBP",
  "gateways": "Apple Pay, Google Pay, UK Cards, Revolut, Clearpay",
  "pro": "PRS for Music & PPL",
  "proFullName": "Performing Right Society (PRS for Music) & Phonographic Performance Limited (PPL)",
  "proGuide": "100% cleared for Spotify UK, Apple Music, and BBC Scotland broadcast.",
  "headline": "Edinburgh Beats for Sale: Scottish Hip-Hop, Drill & Soulful Boom Bap",
  "description": "Atmospheric, introspective hip-hop instrumentals and hard drill slides for recording artists in Edinburgh and Scotland.",
  "popularGenres": [
    "Scottish Hip-Hop",
    "Edinburgh Drill",
    "Soulful Boom Bap"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify UK, Apple Music, and YouTube in United Kingdom \u2013 Edinburgh & Scottish Hip-Hop Hub?",
      "answer": "Yes! All WAV and MP3 licenses include full commercial streaming rights across Spotify, Apple Music, YouTube, Deezer, and TikTok. You retain 100% of your artist master streaming royalties."
    },
    {
      "question": "How do I register my release with PRS for Music and PPL in the United Kingdom?",
      "answer": "Register your release with PRS for Music & PPL by listing yourself as the lyricist/performer (retaining 100% writer share of lyrics) and crediting Onzieb (Different Type of Vibe) as the music producer/composer per your countersigned PDF license contract."
    },
    {
      "question": "Which UK payment methods are supported?",
      "answer": "You can pay easily in British Pounds (\u00a3 / GBP) via Apple Pay, Google Pay, UK Debit/Credit Cards, Revolut, Clearpay, and Klarna."
    },
    {
      "question": "How quickly do I receive my untagged audio files?",
      "answer": "Immediately upon checkout, an untagged studio 24-bit WAV file, MP3 audio, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "gb/belfast": {
  "name": "United Kingdom \u2013 Belfast & Northern Ireland Rap",
  "flag": "\ud83c\uddec\ud83c\udde7",
  "currency": "GBP (\u00a3)",
  "currencyCode": "GBP",
  "gateways": "Apple Pay, Google Pay, UK Cards, Revolut, Clearpay",
  "pro": "PRS for Music & PPL / IMRO",
  "proFullName": "Performing Right Society (PRS for Music) & Irish Music Rights Organisation (IMRO)",
  "proGuide": "100% PRS and IMRO compliant with instant commercial clearance.",
  "headline": "Belfast Beats for Sale: Northern Irish Drill, Trap & Street Instrumentals",
  "description": "Hard-hitting drill kicks, dark synth arpeggios, and uncompressed 24-bit WAV trackouts for Northern Irish recording artists.",
  "popularGenres": [
    "Belfast Drill",
    "Northern Irish Rap",
    "Dark 808s"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify UK, Apple Music, and YouTube in United Kingdom \u2013 Belfast & Northern Ireland Rap?",
      "answer": "Yes! All WAV and MP3 licenses include full commercial streaming rights across Spotify, Apple Music, YouTube, Deezer, and TikTok. You retain 100% of your artist master streaming royalties."
    },
    {
      "question": "How do I register my release with PRS for Music and PPL in the United Kingdom?",
      "answer": "Register your release with PRS for Music & PPL by listing yourself as the lyricist/performer (retaining 100% writer share of lyrics) and crediting Onzieb (Different Type of Vibe) as the music producer/composer per your countersigned PDF license contract."
    },
    {
      "question": "Which UK payment methods are supported?",
      "answer": "You can pay easily in British Pounds (\u00a3 / GBP) via Apple Pay, Google Pay, UK Debit/Credit Cards, Revolut, Clearpay, and Klarna."
    },
    {
      "question": "How quickly do I receive my untagged audio files?",
      "answer": "Immediately upon checkout, an untagged studio 24-bit WAV file, MP3 audio, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "gb/leicester": {
  "name": "United Kingdom \u2013 Leicester & East Midlands Rap",
  "flag": "\ud83c\uddec\ud83c\udde7",
  "currency": "GBP (\u00a3)",
  "currencyCode": "GBP",
  "gateways": "Apple Pay, Google Pay, UK Cards, Revolut, Clearpay",
  "pro": "PRS for Music & PPL",
  "proFullName": "Performing Right Society (PRS for Music) & Phonographic Performance Limited (PPL)",
  "proGuide": "100% PRS & PPL compliant with instant download.",
  "headline": "Leicester Beats for Sale: East Midlands Drill, Trap & Afroswing",
  "description": "Dynamic instrumentals for East Midlands recording artists and producers. Cleared for Spotify UK, Apple Music, and YouTube.",
  "popularGenres": [
    "East Midlands Drill",
    "Leicester Rap",
    "Afroswing"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify UK, Apple Music, and YouTube in United Kingdom \u2013 Leicester & East Midlands Rap?",
      "answer": "Yes! All WAV and MP3 licenses include full commercial streaming rights across Spotify, Apple Music, YouTube, Deezer, and TikTok. You retain 100% of your artist master streaming royalties."
    },
    {
      "question": "How do I register my release with PRS for Music and PPL in the United Kingdom?",
      "answer": "Register your release with PRS for Music & PPL by listing yourself as the lyricist/performer (retaining 100% writer share of lyrics) and crediting Onzieb (Different Type of Vibe) as the music producer/composer per your countersigned PDF license contract."
    },
    {
      "question": "Which UK payment methods are supported?",
      "answer": "You can pay easily in British Pounds (\u00a3 / GBP) via Apple Pay, Google Pay, UK Debit/Credit Cards, Revolut, Clearpay, and Klarna."
    },
    {
      "question": "How quickly do I receive my untagged audio files?",
      "answer": "Immediately upon checkout, an untagged studio 24-bit WAV file, MP3 audio, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "gb/southampton": {
  "name": "United Kingdom \u2013 Southampton & South Coast Trap",
  "flag": "\ud83c\uddec\ud83c\udde7",
  "currency": "GBP (\u00a3)",
  "currencyCode": "GBP",
  "gateways": "Apple Pay, Google Pay, UK Cards, Revolut, Clearpay",
  "pro": "PRS for Music & PPL",
  "proFullName": "Performing Right Society (PRS for Music) & Phonographic Performance Limited (PPL)",
  "proGuide": "100% PRS & PPL compliant for UK distribution.",
  "headline": "Southampton Beats for Sale: Coastal Melodic Rap, Drill & Heavy 808s",
  "description": "Clean melodic trap and punchy drill rhythms for artists across the South Coast and Hampshire.",
  "popularGenres": [
    "South Coast Rap",
    "Southampton Drill",
    "Melodic 808s"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify UK, Apple Music, and YouTube in United Kingdom \u2013 Southampton & South Coast Trap?",
      "answer": "Yes! All WAV and MP3 licenses include full commercial streaming rights across Spotify, Apple Music, YouTube, Deezer, and TikTok. You retain 100% of your artist master streaming royalties."
    },
    {
      "question": "How do I register my release with PRS for Music and PPL in the United Kingdom?",
      "answer": "Register your release with PRS for Music & PPL by listing yourself as the lyricist/performer (retaining 100% writer share of lyrics) and crediting Onzieb (Different Type of Vibe) as the music producer/composer per your countersigned PDF license contract."
    },
    {
      "question": "Which UK payment methods are supported?",
      "answer": "You can pay easily in British Pounds (\u00a3 / GBP) via Apple Pay, Google Pay, UK Debit/Credit Cards, Revolut, Clearpay, and Klarna."
    },
    {
      "question": "How quickly do I receive my untagged audio files?",
      "answer": "Immediately upon checkout, an untagged studio 24-bit WAV file, MP3 audio, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "gb/luton": {
  "name": "United Kingdom \u2013 Luton & Bedfordshire Drill",
  "flag": "\ud83c\uddec\ud83c\udde7",
  "currency": "GBP (\u00a3)",
  "currencyCode": "GBP",
  "gateways": "Apple Pay, Google Pay, UK Cards, Revolut, Clearpay",
  "pro": "PRS for Music & PPL",
  "proFullName": "Performing Right Society (PRS for Music) & Phonographic Performance Limited (PPL)",
  "proGuide": "100% PRS & PPL compliant with signed legal contracts.",
  "headline": "Luton Beats for Sale: Heavy Sliding Drill, Dark 808s & Street Rap",
  "description": "Aggressive sliding 808 basslines and fast syncopated hats for recording artists in Luton and Bedfordshire.",
  "popularGenres": [
    "Luton Drill",
    "Heavy 808s",
    "Street Rap"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify UK, Apple Music, and YouTube in United Kingdom \u2013 Luton & Bedfordshire Drill?",
      "answer": "Yes! All WAV and MP3 licenses include full commercial streaming rights across Spotify, Apple Music, YouTube, Deezer, and TikTok. You retain 100% of your artist master streaming royalties."
    },
    {
      "question": "How do I register my release with PRS for Music and PPL in the United Kingdom?",
      "answer": "Register your release with PRS for Music & PPL by listing yourself as the lyricist/performer (retaining 100% writer share of lyrics) and crediting Onzieb (Different Type of Vibe) as the music producer/composer per your countersigned PDF license contract."
    },
    {
      "question": "Which UK payment methods are supported?",
      "answer": "You can pay easily in British Pounds (\u00a3 / GBP) via Apple Pay, Google Pay, UK Debit/Credit Cards, Revolut, Clearpay, and Klarna."
    },
    {
      "question": "How quickly do I receive my untagged audio files?",
      "answer": "Immediately upon checkout, an untagged studio 24-bit WAV file, MP3 audio, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "gb/reading": {
  "name": "United Kingdom \u2013 Reading & Thames Valley Hip-Hop",
  "flag": "\ud83c\uddec\ud83c\udde7",
  "currency": "GBP (\u00a3)",
  "currencyCode": "GBP",
  "gateways": "Apple Pay, Google Pay, UK Cards, Revolut, Clearpay",
  "pro": "PRS for Music & PPL",
  "proFullName": "Performing Right Society (PRS for Music) & Phonographic Performance Limited (PPL)",
  "proGuide": "100% PRS & PPL compliant for commercial release.",
  "headline": "Reading Beats for Sale: Thames Valley Rap, Melodic Trap & Drill",
  "description": "Atmospheric synth trap and energetic drill instrumentals for recording vocalists in Berkshire and Reading.",
  "popularGenres": [
    "Thames Valley Rap",
    "Reading Drill",
    "Melodic Wave"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify UK, Apple Music, and YouTube in United Kingdom \u2013 Reading & Thames Valley Hip-Hop?",
      "answer": "Yes! All WAV and MP3 licenses include full commercial streaming rights across Spotify, Apple Music, YouTube, Deezer, and TikTok. You retain 100% of your artist master streaming royalties."
    },
    {
      "question": "How do I register my release with PRS for Music and PPL in the United Kingdom?",
      "answer": "Register your release with PRS for Music & PPL by listing yourself as the lyricist/performer (retaining 100% writer share of lyrics) and crediting Onzieb (Different Type of Vibe) as the music producer/composer per your countersigned PDF license contract."
    },
    {
      "question": "Which UK payment methods are supported?",
      "answer": "You can pay easily in British Pounds (\u00a3 / GBP) via Apple Pay, Google Pay, UK Debit/Credit Cards, Revolut, Clearpay, and Klarna."
    },
    {
      "question": "How quickly do I receive my untagged audio files?",
      "answer": "Immediately upon checkout, an untagged studio 24-bit WAV file, MP3 audio, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "gb/wolverhampton": {
  "name": "United Kingdom \u2013 Wolverhampton & Black Country Drill",
  "flag": "\ud83c\uddec\ud83c\udde7",
  "currency": "GBP (\u00a3)",
  "currencyCode": "GBP",
  "gateways": "Apple Pay, Google Pay, UK Cards, Revolut, Clearpay",
  "pro": "PRS for Music & PPL",
  "proFullName": "Performing Right Society (PRS for Music) & Phonographic Performance Limited (PPL)",
  "proGuide": "100% PRS & PPL compliant with full streaming rights.",
  "headline": "Wolverhampton Beats for Sale: Black Country Drill, Trap & Grime",
  "description": "Raw, energetic Midlands drill and heavyweight 808 trap instrumentals for artists in Wolverhampton and the Black Country.",
  "popularGenres": [
    "Black Country Drill",
    "Midlands Trap",
    "Heavy 808s"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify UK, Apple Music, and YouTube in United Kingdom \u2013 Wolverhampton & Black Country Drill?",
      "answer": "Yes! All WAV and MP3 licenses include full commercial streaming rights across Spotify, Apple Music, YouTube, Deezer, and TikTok. You retain 100% of your artist master streaming royalties."
    },
    {
      "question": "How do I register my release with PRS for Music and PPL in the United Kingdom?",
      "answer": "Register your release with PRS for Music & PPL by listing yourself as the lyricist/performer (retaining 100% writer share of lyrics) and crediting Onzieb (Different Type of Vibe) as the music producer/composer per your countersigned PDF license contract."
    },
    {
      "question": "Which UK payment methods are supported?",
      "answer": "You can pay easily in British Pounds (\u00a3 / GBP) via Apple Pay, Google Pay, UK Debit/Credit Cards, Revolut, Clearpay, and Klarna."
    },
    {
      "question": "How quickly do I receive my untagged audio files?",
      "answer": "Immediately upon checkout, an untagged studio 24-bit WAV file, MP3 audio, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "fr/paris": {
  "name": "France \u2013 Paris & \u00cele-de-France (75, 93, 92, 94)",
  "flag": "\ud83c\uddeb\ud83c\uddf7",
  "currency": "EUR (\u20ac)",
  "currencyCode": "EUR",
  "gateways": "Carte Bancaire, Apple Pay, Google Pay, PayPal, Cartes de Cr\u00e9dit",
  "pro": "SACEM",
  "proFullName": "Soci\u00e9t\u00e9 des Auteurs, Compositeurs et \u00c9diteurs de Musique (SACEM)",
  "proGuide": "100% conforme SACEM en France. Tous les beats sont des compositions originales sans samples non lib\u00e9r\u00e9s. Tu conserves 100% de tes royalties d'artiste sur Spotify et Apple Music.",
  "headline": "Paris Beats & Prods \u00e0 Vendre: Drill FR, Trap 808 & Licences WAV",
  "description": "Instrumentales exclusives non tagu\u00e9es en WAV 24-bit studio et pistes s\u00e9par\u00e9es (Stems) pour rappeurs et chanteurs \u00e0 Paris et en \u00cele-de-France. T\u00e9l\u00e9chargement imm\u00e9diat et contrat de licence PDF.",
  "popularGenres": [
    "Drill FR",
    "Trap 93",
    "Rap Fran\u00e7ais M\u00e9lodique",
    "Gazo Style"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "Drill FR Scene Hub",
      "slug": "../../scene/paris-drill-fr-beats",
      "description": "Basses 808 glissantes et ambiance sombre."
    },
    {
      "name": "Gazo Drill FR Style",
      "slug": "../../vibe/gazo-drill-fr-type-beats",
      "description": "Drill agressive avec synth\u00e9s lourds et percussions rapides."
    },
    {
      "name": "Ninho Piano Trap Vibe",
      "slug": "../../vibe/ninho-destin-melodic-piano-trap",
      "description": "Piano acoustique \u00e9motionnel et 808s puissantes."
    }
  ],
  "faqs": [
    {
      "question": "Puis-je diffuser des morceaux enregistr\u00e9s avec ces prods sur Spotify, Apple Music et YouTube en France \u2013 Paris & \u00cele-de-France (75, 93, 92, 94) ?",
      "answer": "Oui, absolument ! Toutes les licences WAV et MP3 de Different Type of Vibe incluent 100% des droits de diffusion commerciale pour Spotify, Apple Music, YouTube, Deezer, TikTok et les radios fran\u00e7aises. Tu conserves 100% de tes revenus d'artiste."
    },
    {
      "question": "Les prods sont-elles conformes avec la SACEM et libres de tout sample non autoris\u00e9 ?",
      "answer": "Oui ! Toutes nos instrumentales sont des compositions 100% originales produites par Onzieb. Aucun sample tiers non lib\u00e9r\u00e9. Tu peux d\u00e9poser ton texte et ton interpr\u00e9tation aupr\u00e8s de la SACEM en toute s\u00e9curit\u00e9."
    },
    {
      "question": "Quels sont les moyens de paiement accept\u00e9s ?",
      "answer": "Tu peux r\u00e9gler instantan\u00e9ment et en toute s\u00e9curit\u00e9 par Carte Bancaire, Apple Pay, Google Pay, PayPal, Cartes de Cr\u00e9dit."
    },
    {
      "question": "En combien de temps re\u00e7ois-je les fichiers audio non tagu\u00e9s ?",
      "answer": "Imm\u00e9diatement apr\u00e8s le paiement, tes fichiers WAV 24-bit studio non tagu\u00e9s, la version MP3 haute qualit\u00e9 et ton contrat de cession de droits d'auteur au format PDF sont envoy\u00e9s directement par email."
    }
  ]
},
  "fr/marseille": {
  "name": "France \u2013 Marseille & PACA (13)",
  "flag": "\ud83c\uddeb\ud83c\uddf7",
  "currency": "EUR (\u20ac)",
  "currencyCode": "EUR",
  "gateways": "Carte Bancaire, Apple Pay, Google Pay, PayPal, Cartes de Cr\u00e9dit",
  "pro": "SACEM",
  "proFullName": "Soci\u00e9t\u00e9 des Auteurs, Compositeurs et \u00c9diteurs de Musique (SACEM)",
  "proGuide": "100% conforme SACEM. Conserve l'int\u00e9gralit\u00e9 de tes droits sur tes sorties streaming.",
  "headline": "Marseille Beats \u00e0 Vendre: Bounces Afro-Trap, Rythmes Jul & SCH Sound",
  "description": "Le son marseillais authentique: guitares m\u00e9diterran\u00e9ennes entra\u00eenantes, claps rapides \u00e0 130 BPM et trap cin\u00e9matographique sombre pour rappeurs marseillais.",
  "popularGenres": [
    "Marseille Afro-Trap",
    "Jul Bounce",
    "SCH Trap Cin\u00e9matique",
    "Rap 13"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "Marseille Scene Hub",
      "slug": "../../scene/marseille-afro-trap-beats",
      "description": "Guitares ensoleill\u00e9es et tempo rapide."
    },
    {
      "name": "Jul Afro Bounce Vibe",
      "slug": "../../vibe/jul-marseille-afro-bounce-beats",
      "description": "Bounces dansants \u00e0 130 BPM avec synth\u00e9s chauds."
    },
    {
      "name": "SCH Autobahn Trap",
      "slug": "../../vibe/sch-autobahn-cinematic-trap",
      "description": "Cuivres de film noir et 808s profondes."
    }
  ],
  "faqs": [
    {
      "question": "Puis-je diffuser des morceaux enregistr\u00e9s avec ces prods sur Spotify, Apple Music et YouTube en France \u2013 Marseille & PACA (13) ?",
      "answer": "Oui, absolument ! Toutes les licences WAV et MP3 de Different Type of Vibe incluent 100% des droits de diffusion commerciale pour Spotify, Apple Music, YouTube, Deezer, TikTok et les radios fran\u00e7aises. Tu conserves 100% de tes revenus d'artiste."
    },
    {
      "question": "Les prods sont-elles conformes avec la SACEM et libres de tout sample non autoris\u00e9 ?",
      "answer": "Oui ! Toutes nos instrumentales sont des compositions 100% originales produites par Onzieb. Aucun sample tiers non lib\u00e9r\u00e9. Tu peux d\u00e9poser ton texte et ton interpr\u00e9tation aupr\u00e8s de la SACEM en toute s\u00e9curit\u00e9."
    },
    {
      "question": "Quels sont les moyens de paiement accept\u00e9s ?",
      "answer": "Tu peux r\u00e9gler instantan\u00e9ment et en toute s\u00e9curit\u00e9 par Carte Bancaire, Apple Pay, Google Pay, PayPal, Cartes de Cr\u00e9dit."
    },
    {
      "question": "En combien de temps re\u00e7ois-je les fichiers audio non tagu\u00e9s ?",
      "answer": "Imm\u00e9diatement apr\u00e8s le paiement, tes fichiers WAV 24-bit studio non tagu\u00e9s, la version MP3 haute qualit\u00e9 et ton contrat de cession de droits d'auteur au format PDF sont envoy\u00e9s directement par email."
    }
  ]
},
  "fr/lyon": {
  "name": "France \u2013 Lyon & Rh\u00f4ne-Alpes (69)",
  "flag": "\ud83c\uddeb\ud83c\uddf7",
  "currency": "EUR (\u20ac)",
  "currencyCode": "EUR",
  "gateways": "Carte Bancaire, Apple Pay, Google Pay, PayPal, Cartes de Cr\u00e9dit",
  "pro": "SACEM",
  "proFullName": "Soci\u00e9t\u00e9 des Auteurs, Compositeurs et \u00c9diteurs de Musique (SACEM)",
  "proGuide": "D\u00e9claration SACEM garantie sans litige de droits d'auteur.",
  "headline": "Lyon Prods Rap \u00e0 Vendre: Drill Sombre 69, Trap Agressif & Stems WAV",
  "description": "Prods de rap et drill lyonnaise inspir\u00e9es d'ASHE 22 et Lyonzon. Basses 808 lourdes et m\u00e9lodies t\u00e9n\u00e9breuses pour artistes ind\u00e9pendants \u00e0 Lyon.",
  "popularGenres": [
    "Lyon Drill",
    "Trap 69",
    "Dark Drill",
    "Basses 808 Glissantes"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "Lyon Drill Scene Hub",
      "slug": "../../scene/lyon-dark-drill-beats",
      "description": "Percussions syncop\u00e9es et ambiance crue."
    }
  ],
  "faqs": [
    {
      "question": "Puis-je diffuser des morceaux enregistr\u00e9s avec ces prods sur Spotify, Apple Music et YouTube en France \u2013 Lyon & Rh\u00f4ne-Alpes (69) ?",
      "answer": "Oui, absolument ! Toutes les licences WAV et MP3 de Different Type of Vibe incluent 100% des droits de diffusion commerciale pour Spotify, Apple Music, YouTube, Deezer, TikTok et les radios fran\u00e7aises. Tu conserves 100% de tes revenus d'artiste."
    },
    {
      "question": "Les prods sont-elles conformes avec la SACEM et libres de tout sample non autoris\u00e9 ?",
      "answer": "Oui ! Toutes nos instrumentales sont des compositions 100% originales produites par Onzieb. Aucun sample tiers non lib\u00e9r\u00e9. Tu peux d\u00e9poser ton texte et ton interpr\u00e9tation aupr\u00e8s de la SACEM en toute s\u00e9curit\u00e9."
    },
    {
      "question": "Quels sont les moyens de paiement accept\u00e9s ?",
      "answer": "Tu peux r\u00e9gler instantan\u00e9ment et en toute s\u00e9curit\u00e9 par Carte Bancaire, Apple Pay, Google Pay, PayPal, Cartes de Cr\u00e9dit."
    },
    {
      "question": "En combien de temps re\u00e7ois-je les fichiers audio non tagu\u00e9s ?",
      "answer": "Imm\u00e9diatement apr\u00e8s le paiement, tes fichiers WAV 24-bit studio non tagu\u00e9s, la version MP3 haute qualit\u00e9 et ton contrat de cession de droits d'auteur au format PDF sont envoy\u00e9s directement par email."
    }
  ]
},
  "fr/lille": {
  "name": "France \u2013 Lille & Hauts-de-France (59)",
  "flag": "\ud83c\uddeb\ud83c\uddf7",
  "currency": "EUR (\u20ac)",
  "currencyCode": "EUR",
  "gateways": "Carte Bancaire, Apple Pay, Google Pay, PayPal, Cartes de Cr\u00e9dit",
  "pro": "SACEM",
  "proFullName": "Soci\u00e9t\u00e9 des Auteurs, Compositeurs et \u00c9diteurs de Musique (SACEM)",
  "proGuide": "100% conforme SACEM avec t\u00e9l\u00e9chargement direct du contrat de cession.",
  "headline": "Lille Beats \u00e0 Vendre: Drill Nordique, Trap Sombre & Prods Rap Fran\u00e7ais",
  "description": "Instrumentales percutantes avec grosses basses et m\u00e9lodies froides pour rappeurs et studios d'enregistrement \u00e0 Lille et dans le Nord.",
  "popularGenres": [
    "Lille Drill",
    "Trap Nord",
    "Rap Fran\u00e7ais Sombre"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [],
  "faqs": [
    {
      "question": "Puis-je diffuser des morceaux enregistr\u00e9s avec ces prods sur Spotify, Apple Music et YouTube en France \u2013 Lille & Hauts-de-France (59) ?",
      "answer": "Oui, absolument ! Toutes les licences WAV et MP3 de Different Type of Vibe incluent 100% des droits de diffusion commerciale pour Spotify, Apple Music, YouTube, Deezer, TikTok et les radios fran\u00e7aises. Tu conserves 100% de tes revenus d'artiste."
    },
    {
      "question": "Les prods sont-elles conformes avec la SACEM et libres de tout sample non autoris\u00e9 ?",
      "answer": "Oui ! Toutes nos instrumentales sont des compositions 100% originales produites par Onzieb. Aucun sample tiers non lib\u00e9r\u00e9. Tu peux d\u00e9poser ton texte et ton interpr\u00e9tation aupr\u00e8s de la SACEM en toute s\u00e9curit\u00e9."
    },
    {
      "question": "Quels sont les moyens de paiement accept\u00e9s ?",
      "answer": "Tu peux r\u00e9gler instantan\u00e9ment et en toute s\u00e9curit\u00e9 par Carte Bancaire, Apple Pay, Google Pay, PayPal, Cartes de Cr\u00e9dit."
    },
    {
      "question": "En combien de temps re\u00e7ois-je les fichiers audio non tagu\u00e9s ?",
      "answer": "Imm\u00e9diatement apr\u00e8s le paiement, tes fichiers WAV 24-bit studio non tagu\u00e9s, la version MP3 haute qualit\u00e9 et ton contrat de cession de droits d'auteur au format PDF sont envoy\u00e9s directement par email."
    }
  ]
},
  "fr/toulouse": {
  "name": "France \u2013 Toulouse & Occitanie (31)",
  "flag": "\ud83c\uddeb\ud83c\uddf7",
  "currency": "EUR (\u20ac)",
  "currencyCode": "EUR",
  "gateways": "Carte Bancaire, Apple Pay, Google Pay, PayPal, Cartes de Cr\u00e9dit",
  "pro": "SACEM",
  "proFullName": "Soci\u00e9t\u00e9 des Auteurs, Compositeurs et \u00c9diteurs de Musique (SACEM)",
  "proGuide": "100% conforme SACEM avec cession de droits non exclusive.",
  "headline": "Toulouse Beats \u00e0 Vendre: Rap M\u00e9lodique, Trap Cyberpunk & Cloud Rap",
  "description": "Synth\u00e9tiseurs spatiaux, m\u00e9lodies autotun\u00e9es et rythmiques percutantes inspir\u00e9es de Laylow et Bigflo & Oli pour artistes toulousains.",
  "popularGenres": [
    "Toulouse Rap M\u00e9lodique",
    "Trap Cyberpunk",
    "Cloud Rap"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [],
  "faqs": [
    {
      "question": "Puis-je diffuser des morceaux enregistr\u00e9s avec ces prods sur Spotify, Apple Music et YouTube en France \u2013 Toulouse & Occitanie (31) ?",
      "answer": "Oui, absolument ! Toutes les licences WAV et MP3 de Different Type of Vibe incluent 100% des droits de diffusion commerciale pour Spotify, Apple Music, YouTube, Deezer, TikTok et les radios fran\u00e7aises. Tu conserves 100% de tes revenus d'artiste."
    },
    {
      "question": "Les prods sont-elles conformes avec la SACEM et libres de tout sample non autoris\u00e9 ?",
      "answer": "Oui ! Toutes nos instrumentales sont des compositions 100% originales produites par Onzieb. Aucun sample tiers non lib\u00e9r\u00e9. Tu peux d\u00e9poser ton texte et ton interpr\u00e9tation aupr\u00e8s de la SACEM en toute s\u00e9curit\u00e9."
    },
    {
      "question": "Quels sont les moyens de paiement accept\u00e9s ?",
      "answer": "Tu peux r\u00e9gler instantan\u00e9ment et en toute s\u00e9curit\u00e9 par Carte Bancaire, Apple Pay, Google Pay, PayPal, Cartes de Cr\u00e9dit."
    },
    {
      "question": "En combien de temps re\u00e7ois-je les fichiers audio non tagu\u00e9s ?",
      "answer": "Imm\u00e9diatement apr\u00e8s le paiement, tes fichiers WAV 24-bit studio non tagu\u00e9s, la version MP3 haute qualit\u00e9 et ton contrat de cession de droits d'auteur au format PDF sont envoy\u00e9s directement par email."
    }
  ]
},
  "fr/bordeaux": {
  "name": "France \u2013 Bordeaux & Nouvelle-Aquitaine (33)",
  "flag": "\ud83c\uddeb\ud83c\uddf7",
  "currency": "EUR (\u20ac)",
  "currencyCode": "EUR",
  "gateways": "Carte Bancaire, Apple Pay, Google Pay, PayPal, Cartes de Cr\u00e9dit",
  "pro": "SACEM",
  "proFullName": "Soci\u00e9t\u00e9 des Auteurs, Compositeurs et \u00c9diteurs de Musique (SACEM)",
  "proGuide": "100% conforme SACEM pour diffusion sur Spotify et radios fran\u00e7aises.",
  "headline": "Bordeaux Prods Rap \u00e0 Vendre: Trap Chill, Boom Bap Moderne & R&B",
  "description": "Prods \u00e9l\u00e9gantes, pianos jazzy et basses rondes pour rappeurs et interpr\u00e8tes \u00e0 Bordeaux et en Gironde.",
  "popularGenres": [
    "Bordeaux Chill Trap",
    "Boom Bap Moderne",
    "R&B Rap"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [],
  "faqs": [
    {
      "question": "Puis-je diffuser des morceaux enregistr\u00e9s avec ces prods sur Spotify, Apple Music et YouTube en France \u2013 Bordeaux & Nouvelle-Aquitaine (33) ?",
      "answer": "Oui, absolument ! Toutes les licences WAV et MP3 de Different Type of Vibe incluent 100% des droits de diffusion commerciale pour Spotify, Apple Music, YouTube, Deezer, TikTok et les radios fran\u00e7aises. Tu conserves 100% de tes revenus d'artiste."
    },
    {
      "question": "Les prods sont-elles conformes avec la SACEM et libres de tout sample non autoris\u00e9 ?",
      "answer": "Oui ! Toutes nos instrumentales sont des compositions 100% originales produites par Onzieb. Aucun sample tiers non lib\u00e9r\u00e9. Tu peux d\u00e9poser ton texte et ton interpr\u00e9tation aupr\u00e8s de la SACEM en toute s\u00e9curit\u00e9."
    },
    {
      "question": "Quels sont les moyens de paiement accept\u00e9s ?",
      "answer": "Tu peux r\u00e9gler instantan\u00e9ment et en toute s\u00e9curit\u00e9 par Carte Bancaire, Apple Pay, Google Pay, PayPal, Cartes de Cr\u00e9dit."
    },
    {
      "question": "En combien de temps re\u00e7ois-je les fichiers audio non tagu\u00e9s ?",
      "answer": "Imm\u00e9diatement apr\u00e8s le paiement, tes fichiers WAV 24-bit studio non tagu\u00e9s, la version MP3 haute qualit\u00e9 et ton contrat de cession de droits d'auteur au format PDF sont envoy\u00e9s directement par email."
    }
  ]
},
  "be/bruxelles": {
  "name": "Belgique \u2013 Bruxelles Rap Francophone Hub",
  "flag": "\ud83c\udde7\ud83c\uddea",
  "currency": "EUR (\u20ac)",
  "currencyCode": "EUR",
  "gateways": "Bancontact, Apple Pay, Google Pay, PayPal, Cartes de Cr\u00e9dit",
  "pro": "SABAM",
  "proFullName": "Soci\u00e9t\u00e9 Belge des Auteurs, Compositeurs et \u00c9diteurs (SABAM)",
  "proGuide": "100% conforme SABAM pour artistes belges. Cession claire des droits de diffusion commerciale.",
  "headline": "Bruxelles Prods Rap \u00e0 Vendre: Trap Belge, R&B Sombre & Vibe Damso",
  "description": "Le son percutant du rap belge francophone: atmosph\u00e8res m\u00e9lancoliques, accords R&B nocturnes et basses profondes inspir\u00e9es de Damso, Hamza et Green Montana.",
  "popularGenres": [
    "Rap Belge",
    "R&B Sombre",
    "Hamza Vibe",
    "Damso Sound"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "Bruxelles Scene Hub",
      "slug": "../../scene/bruxelles-rap-francophone",
      "description": "Atmosph\u00e8res nocturnes et sonorit\u00e9s l\u00e9ch\u00e9es."
    },
    {
      "name": "Damso Introspectif Vibe",
      "slug": "../../vibe/damso-dark-introspective-rnb-trap",
      "description": "Accords riches et trap m\u00e9lancolique."
    },
    {
      "name": "Hamza Saucegod Vibe",
      "slug": "../../vibe/hamza-saucegod-smooth-trap",
      "description": "Synth\u00e9s futuristes et bounce a\u00e9rien."
    }
  ],
  "faqs": [
    {
      "question": "Puis-je diffuser des morceaux enregistr\u00e9s avec ces prods sur Spotify, Apple Music et YouTube en Belgique \u2013 Bruxelles Rap Francophone Hub ?",
      "answer": "Oui, absolument ! Toutes les licences WAV et MP3 de Different Type of Vibe incluent 100% des droits de diffusion commerciale pour Spotify, Apple Music, YouTube, Deezer, TikTok et les radios fran\u00e7aises. Tu conserves 100% de tes revenus d'artiste."
    },
    {
      "question": "Les prods sont-elles conformes avec la SABAM et libres de tout sample non autoris\u00e9 ?",
      "answer": "Oui ! Toutes nos instrumentales sont des compositions 100% originales produites par Onzieb. Aucun sample tiers non lib\u00e9r\u00e9. Tu peux d\u00e9poser ton texte et ton interpr\u00e9tation aupr\u00e8s de la SABAM en toute s\u00e9curit\u00e9."
    },
    {
      "question": "Quels sont les moyens de paiement accept\u00e9s ?",
      "answer": "Tu peux r\u00e9gler instantan\u00e9ment et en toute s\u00e9curit\u00e9 par Bancontact, Apple Pay, Google Pay, PayPal, Cartes de Cr\u00e9dit."
    },
    {
      "question": "En combien de temps re\u00e7ois-je les fichiers audio non tagu\u00e9s ?",
      "answer": "Imm\u00e9diatement apr\u00e8s le paiement, tes fichiers WAV 24-bit studio non tagu\u00e9s, la version MP3 haute qualit\u00e9 et ton contrat de cession de droits d'auteur au format PDF sont envoy\u00e9s directement par email."
    }
  ]
},
  "ca/montreal": {
  "name": "Canada \u2013 Montr\u00e9al Rap Qu\u00e9b\u00e9cois Hub",
  "flag": "\ud83c\udde8\ud83c\udde6",
  "currency": "CAD / EUR",
  "currencyCode": "CAD",
  "gateways": "Apple Pay, Google Pay, Interac, Cartes de Cr\u00e9dit, Stripe",
  "pro": "SOCAN",
  "proFullName": "Soci\u00e9t\u00e9 Canadienne des Auteurs, Compositeurs et \u00c9diteurs de Musique (SOCAN)",
  "proGuide": "100% conforme SOCAN et \u00e9ligible aux bourses FACTOR et Musicaction.",
  "headline": "Montr\u00e9al Beats \u00e0 Vendre: Rap Qu\u00e9b\u00e9cois, Drill FR & Trap M\u00e9lodique",
  "description": "Instrumentales studio haute d\u00e9finition pour artistes ind\u00e9pendants \u00e0 Montr\u00e9al et au Qu\u00e9bec. Fichiers WAV 24-bit non tagu\u00e9s avec droits de streaming commerciaux.",
  "popularGenres": [
    "Rap Qu\u00e9b\u00e9cois",
    "Montr\u00e9al Drill",
    "Trap M\u00e9lodique"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "Montr\u00e9al Scene Hub",
      "slug": "../../scene/montreal-rap-quebecois",
      "description": "Bounces nord-am\u00e9ricains avec plume francophone."
    }
  ],
  "faqs": [
    {
      "question": "Puis-je diffuser des morceaux enregistr\u00e9s avec ces prods sur Spotify, Apple Music et YouTube en Canada \u2013 Montr\u00e9al Rap Qu\u00e9b\u00e9cois Hub ?",
      "answer": "Oui, absolument ! Toutes les licences WAV et MP3 de Different Type of Vibe incluent 100% des droits de diffusion commerciale pour Spotify, Apple Music, YouTube, Deezer, TikTok et les radios fran\u00e7aises. Tu conserves 100% de tes revenus d'artiste."
    },
    {
      "question": "Les prods sont-elles conformes avec la SOCAN et libres de tout sample non autoris\u00e9 ?",
      "answer": "Oui ! Toutes nos instrumentales sont des compositions 100% originales produites par Onzieb. Aucun sample tiers non lib\u00e9r\u00e9. Tu peux d\u00e9poser ton texte et ton interpr\u00e9tation aupr\u00e8s de la SOCAN en toute s\u00e9curit\u00e9."
    },
    {
      "question": "Quels sont les moyens de paiement accept\u00e9s ?",
      "answer": "Tu peux r\u00e9gler instantan\u00e9ment et en toute s\u00e9curit\u00e9 par Apple Pay, Google Pay, Interac, Cartes de Cr\u00e9dit, Stripe."
    },
    {
      "question": "En combien de temps re\u00e7ois-je les fichiers audio non tagu\u00e9s ?",
      "answer": "Imm\u00e9diatement apr\u00e8s le paiement, tes fichiers WAV 24-bit studio non tagu\u00e9s, la version MP3 haute qualit\u00e9 et ton contrat de cession de droits d'auteur au format PDF sont envoy\u00e9s directement par email."
    }
  ]
},
  "fr/seine-saint-denis-93": {
  "name": "France \u2013 Seine-Saint-Denis (93) Capitale du Rap Hardcore",
  "flag": "\ud83c\uddeb\ud83c\uddf7",
  "currency": "EUR (\u20ac)",
  "currencyCode": "EUR",
  "gateways": "Carte Bancaire, Apple Pay, Google Pay, PayPal, Cartes de Cr\u00e9dit",
  "pro": "SACEM",
  "proFullName": "Soci\u00e9t\u00e9 des Auteurs, Compositeurs et \u00c9diteurs de Musique (SACEM)",
  "proGuide": "100% conforme SACEM en France. Cession l\u00e9gale compl\u00e8te des droits d'exploitation commerciale.",
  "headline": "Seine-Saint-Denis (93) Prods \u00e0 Vendre: Drill FR, Sevran 808s & Trap Sombre",
  "description": "Le son l\u00e9gendaire du 93 (Sevran, Saint-Denis, Montreuil, Aulnay). Basses 808 satur\u00e9es, pianos m\u00e9lancoliques et percussions tranchantes pour artistes du 93.",
  "popularGenres": [
    "Sevran Hardcore",
    "Drill 93",
    "Trap Sombre",
    "Piano M\u00e9lodique 93"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "Sevran 93 Scene Hub",
      "slug": "../../scene/sevran-93-hardcore-trap",
      "description": "L'\u00e9picentre du rap hardcore fran\u00e7ais et de la drill."
    },
    {
      "name": "Kaaris Sevran Hardcore",
      "slug": "../../vibe/kaaris-sevran-hardcore-trap",
      "description": "Basses 808 brutales et cuivres sombres."
    }
  ],
  "faqs": [
    {
      "question": "Puis-je diffuser des morceaux enregistr\u00e9s avec ces prods sur Spotify, Apple Music et YouTube en France \u2013 Seine-Saint-Denis (93) Capitale du Rap Hardcore ?",
      "answer": "Oui, absolument ! Toutes les licences WAV et MP3 de Different Type of Vibe incluent 100% des droits de diffusion commerciale pour Spotify, Apple Music, YouTube, Deezer, TikTok et les radios fran\u00e7aises. Tu conserves 100% de tes revenus d'artiste."
    },
    {
      "question": "Les prods sont-elles conformes avec la SACEM et libres de tout sample non autoris\u00e9 ?",
      "answer": "Oui ! Toutes nos instrumentales sont des compositions 100% originales produites par Onzieb. Aucun sample tiers non lib\u00e9r\u00e9. Tu peux d\u00e9poser ton texte et ton interpr\u00e9tation aupr\u00e8s de la SACEM en toute s\u00e9curit\u00e9."
    },
    {
      "question": "Quels sont les moyens de paiement accept\u00e9s ?",
      "answer": "Tu peux r\u00e9gler instantan\u00e9ment et en toute s\u00e9curit\u00e9 par Carte Bancaire, Apple Pay, Google Pay, PayPal, Cartes de Cr\u00e9dit."
    },
    {
      "question": "En combien de temps re\u00e7ois-je les fichiers audio non tagu\u00e9s ?",
      "answer": "Imm\u00e9diatement apr\u00e8s le paiement, tes fichiers WAV 24-bit studio non tagu\u00e9s, la version MP3 haute qualit\u00e9 et ton contrat de cession de droits d'auteur au format PDF sont envoy\u00e9s directement par email."
    }
  ]
},
  "fr/hauts-de-seine-92": {
  "name": "France \u2013 Hauts-de-Seine (92) Trap & Drill \u00c9l\u00e9gant",
  "flag": "\ud83c\uddeb\ud83c\uddf7",
  "currency": "EUR (\u20ac)",
  "currencyCode": "EUR",
  "gateways": "Carte Bancaire, Apple Pay, Google Pay, PayPal, Cartes de Cr\u00e9dit",
  "pro": "SACEM",
  "proFullName": "Soci\u00e9t\u00e9 des Auteurs, Compositeurs et \u00c9diteurs de Musique (SACEM)",
  "proGuide": "100% conforme SACEM pour diffusion Spotify, Deezer et YouTube.",
  "headline": "Hauts-de-Seine (92) Beats \u00e0 Vendre: Trap Sombre, Drill & Bounces 92i",
  "description": "Instrumentales d'\u00e9lite inspir\u00e9es de Booba, SDM et PLK. Synth\u00e9s luxueux, basses 808 pr\u00e9cises et rythmiques percutantes pour artistes du 92.",
  "popularGenres": [
    "Trap 92",
    "Drill M\u00e9lodique 92",
    "Bounces SDM",
    "Synth\u00e9s Luxueux"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "SDM Style Vibe",
      "slug": "../../vibe/sdm-liens-du-100-melodic-drill",
      "description": "Basses glissantes et m\u00e9lodies prenantes inspir\u00e9es de Bolide Allemand."
    }
  ],
  "faqs": [
    {
      "question": "Puis-je diffuser des morceaux enregistr\u00e9s avec ces prods sur Spotify, Apple Music et YouTube en France \u2013 Hauts-de-Seine (92) Trap & Drill \u00c9l\u00e9gant ?",
      "answer": "Oui, absolument ! Toutes les licences WAV et MP3 de Different Type of Vibe incluent 100% des droits de diffusion commerciale pour Spotify, Apple Music, YouTube, Deezer, TikTok et les radios fran\u00e7aises. Tu conserves 100% de tes revenus d'artiste."
    },
    {
      "question": "Les prods sont-elles conformes avec la SACEM et libres de tout sample non autoris\u00e9 ?",
      "answer": "Oui ! Toutes nos instrumentales sont des compositions 100% originales produites par Onzieb. Aucun sample tiers non lib\u00e9r\u00e9. Tu peux d\u00e9poser ton texte et ton interpr\u00e9tation aupr\u00e8s de la SACEM en toute s\u00e9curit\u00e9."
    },
    {
      "question": "Quels sont les moyens de paiement accept\u00e9s ?",
      "answer": "Tu peux r\u00e9gler instantan\u00e9ment et en toute s\u00e9curit\u00e9 par Carte Bancaire, Apple Pay, Google Pay, PayPal, Cartes de Cr\u00e9dit."
    },
    {
      "question": "En combien de temps re\u00e7ois-je les fichiers audio non tagu\u00e9s ?",
      "answer": "Imm\u00e9diatement apr\u00e8s le paiement, tes fichiers WAV 24-bit studio non tagu\u00e9s, la version MP3 haute qualit\u00e9 et ton contrat de cession de droits d'auteur au format PDF sont envoy\u00e9s directement par email."
    }
  ]
},
  "fr/val-de-marne-94": {
  "name": "France \u2013 Val-de-Marne (94) Mafia K'1 Fry Sound",
  "flag": "\ud83c\uddeb\ud83c\uddf7",
  "currency": "EUR (\u20ac)",
  "currencyCode": "EUR",
  "gateways": "Carte Bancaire, Apple Pay, Google Pay, PayPal, Cartes de Cr\u00e9dit",
  "pro": "SACEM",
  "proFullName": "Soci\u00e9t\u00e9 des Auteurs, Compositeurs et \u00c9diteurs de Musique (SACEM)",
  "proGuide": "100% conforme SACEM avec t\u00e9l\u00e9chargement direct du contrat l\u00e9gal PDF.",
  "headline": "Val-de-Marne (94) Prods \u00e0 Vendre: Street Rap Brut, Drill & Pianos M\u00e9lancoliques",
  "description": "Le berceau historique du rap de rue fran\u00e7ais (Vitry, Cr\u00e9teil, Champigny). Grosses caisses percutantes et m\u00e9lodies de piano pour le 94.",
  "popularGenres": [
    "Street Rap 94",
    "Drill Val-de-Marne",
    "Pianos M\u00e9lancoliques"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [],
  "faqs": [
    {
      "question": "Puis-je diffuser des morceaux enregistr\u00e9s avec ces prods sur Spotify, Apple Music et YouTube en France \u2013 Val-de-Marne (94) Mafia K'1 Fry Sound ?",
      "answer": "Oui, absolument ! Toutes les licences WAV et MP3 de Different Type of Vibe incluent 100% des droits de diffusion commerciale pour Spotify, Apple Music, YouTube, Deezer, TikTok et les radios fran\u00e7aises. Tu conserves 100% de tes revenus d'artiste."
    },
    {
      "question": "Les prods sont-elles conformes avec la SACEM et libres de tout sample non autoris\u00e9 ?",
      "answer": "Oui ! Toutes nos instrumentales sont des compositions 100% originales produites par Onzieb. Aucun sample tiers non lib\u00e9r\u00e9. Tu peux d\u00e9poser ton texte et ton interpr\u00e9tation aupr\u00e8s de la SACEM en toute s\u00e9curit\u00e9."
    },
    {
      "question": "Quels sont les moyens de paiement accept\u00e9s ?",
      "answer": "Tu peux r\u00e9gler instantan\u00e9ment et en toute s\u00e9curit\u00e9 par Carte Bancaire, Apple Pay, Google Pay, PayPal, Cartes de Cr\u00e9dit."
    },
    {
      "question": "En combien de temps re\u00e7ois-je les fichiers audio non tagu\u00e9s ?",
      "answer": "Imm\u00e9diatement apr\u00e8s le paiement, tes fichiers WAV 24-bit studio non tagu\u00e9s, la version MP3 haute qualit\u00e9 et ton contrat de cession de droits d'auteur au format PDF sont envoy\u00e9s directement par email."
    }
  ]
},
  "fr/essonne-91": {
  "name": "France \u2013 Essonne (91) Binks & Drill Masqu\u00e9e",
  "flag": "\ud83c\uddeb\ud83c\uddf7",
  "currency": "EUR (\u20ac)",
  "currencyCode": "EUR",
  "gateways": "Carte Bancaire, Apple Pay, Google Pay, PayPal, Cartes de Cr\u00e9dit",
  "pro": "SACEM",
  "proFullName": "Soci\u00e9t\u00e9 des Auteurs, Compositeurs et \u00c9diteurs de Musique (SACEM)",
  "proGuide": "100% conforme SACEM avec droits d'exploitation streaming.",
  "headline": "Essonne (91) Beats \u00e0 Vendre: Drill Sombre, Rythmiques \u00c9nergiques & Binks",
  "description": "Rythmiques syncop\u00e9es explosives inspir\u00e9es de Koba LaD, Niska et Ziak. Basses 808 distordues pour artistes ind\u00e9pendants du 91.",
  "popularGenres": [
    "Drill 91",
    "Trap Binks",
    "808s Glissantes"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "\u00c9vry 91 Scene Hub",
      "slug": "../../scene/evry-91-melodic-drill",
      "description": "Drill m\u00e9lodique et \u00e9nergie brute de l'Essonne."
    }
  ],
  "faqs": [
    {
      "question": "Puis-je diffuser des morceaux enregistr\u00e9s avec ces prods sur Spotify, Apple Music et YouTube en France \u2013 Essonne (91) Binks & Drill Masqu\u00e9e ?",
      "answer": "Oui, absolument ! Toutes les licences WAV et MP3 de Different Type of Vibe incluent 100% des droits de diffusion commerciale pour Spotify, Apple Music, YouTube, Deezer, TikTok et les radios fran\u00e7aises. Tu conserves 100% de tes revenus d'artiste."
    },
    {
      "question": "Les prods sont-elles conformes avec la SACEM et libres de tout sample non autoris\u00e9 ?",
      "answer": "Oui ! Toutes nos instrumentales sont des compositions 100% originales produites par Onzieb. Aucun sample tiers non lib\u00e9r\u00e9. Tu peux d\u00e9poser ton texte et ton interpr\u00e9tation aupr\u00e8s de la SACEM en toute s\u00e9curit\u00e9."
    },
    {
      "question": "Quels sont les moyens de paiement accept\u00e9s ?",
      "answer": "Tu peux r\u00e9gler instantan\u00e9ment et en toute s\u00e9curit\u00e9 par Carte Bancaire, Apple Pay, Google Pay, PayPal, Cartes de Cr\u00e9dit."
    },
    {
      "question": "En combien de temps re\u00e7ois-je les fichiers audio non tagu\u00e9s ?",
      "answer": "Imm\u00e9diatement apr\u00e8s le paiement, tes fichiers WAV 24-bit studio non tagu\u00e9s, la version MP3 haute qualit\u00e9 et ton contrat de cession de droits d'auteur au format PDF sont envoy\u00e9s directement par email."
    }
  ]
},
  "fr/nice": {
  "name": "France \u2013 Nice & C\u00f4te d'Azur (06)",
  "flag": "\ud83c\uddeb\ud83c\uddf7",
  "currency": "EUR (\u20ac)",
  "currencyCode": "EUR",
  "gateways": "Carte Bancaire, Apple Pay, Google Pay, PayPal, Cartes de Cr\u00e9dit",
  "pro": "SACEM",
  "proFullName": "Soci\u00e9t\u00e9 des Auteurs, Compositeurs et \u00c9diteurs de Musique (SACEM)",
  "proGuide": "100% conforme SACEM avec cession claire des droits.",
  "headline": "Nice Prods Rap \u00e0 Vendre: Trap M\u00e9diterran\u00e9en, Guitares & Bounces C\u00f4te d'Azur",
  "description": "M\u00e9lodies de guitares estivales, basses rondes et rythmiques entra\u00eenantes pour artistes de Nice, Cannes et la C\u00f4te d'Azur.",
  "popularGenres": [
    "Trap C\u00f4te d'Azur",
    "Guitares M\u00e9diterran\u00e9ennes",
    "Club Bounce"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "Nice M\u00e9diterran\u00e9e Scene Hub",
      "slug": "../../scene/nice-mediterranee-rap",
      "description": "Guitares chaudes et rythmiques solaires."
    }
  ],
  "faqs": [
    {
      "question": "Puis-je diffuser des morceaux enregistr\u00e9s avec ces prods sur Spotify, Apple Music et YouTube en France \u2013 Nice & C\u00f4te d'Azur (06) ?",
      "answer": "Oui, absolument ! Toutes les licences WAV et MP3 de Different Type of Vibe incluent 100% des droits de diffusion commerciale pour Spotify, Apple Music, YouTube, Deezer, TikTok et les radios fran\u00e7aises. Tu conserves 100% de tes revenus d'artiste."
    },
    {
      "question": "Les prods sont-elles conformes avec la SACEM et libres de tout sample non autoris\u00e9 ?",
      "answer": "Oui ! Toutes nos instrumentales sont des compositions 100% originales produites par Onzieb. Aucun sample tiers non lib\u00e9r\u00e9. Tu peux d\u00e9poser ton texte et ton interpr\u00e9tation aupr\u00e8s de la SACEM en toute s\u00e9curit\u00e9."
    },
    {
      "question": "Quels sont les moyens de paiement accept\u00e9s ?",
      "answer": "Tu peux r\u00e9gler instantan\u00e9ment et en toute s\u00e9curit\u00e9 par Carte Bancaire, Apple Pay, Google Pay, PayPal, Cartes de Cr\u00e9dit."
    },
    {
      "question": "En combien de temps re\u00e7ois-je les fichiers audio non tagu\u00e9s ?",
      "answer": "Imm\u00e9diatement apr\u00e8s le paiement, tes fichiers WAV 24-bit studio non tagu\u00e9s, la version MP3 haute qualit\u00e9 et ton contrat de cession de droits d'auteur au format PDF sont envoy\u00e9s directement par email."
    }
  ]
},
  "fr/strasbourg": {
  "name": "France \u2013 Strasbourg & Grand Est (67)",
  "flag": "\ud83c\uddeb\ud83c\uddf7",
  "currency": "EUR (\u20ac)",
  "currencyCode": "EUR",
  "gateways": "Carte Bancaire, Apple Pay, Google Pay, PayPal, Cartes de Cr\u00e9dit",
  "pro": "SACEM",
  "proFullName": "Soci\u00e9t\u00e9 des Auteurs, Compositeurs et \u00c9diteurs de Musique (SACEM)",
  "proGuide": "100% conforme SACEM pour diffusion commerciale.",
  "headline": "Strasbourg Beats \u00e0 Vendre: Trap Sombre, Drill & Rap Grand Est",
  "description": "Basses 808 profondes et atmosph\u00e8res intenses pour rappeurs et interpr\u00e8tes \u00e0 Strasbourg, Mulhouse et en Alsace.",
  "popularGenres": [
    "Grand Est Trap",
    "Strasbourg Drill",
    "Rap Sombre"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "Strasbourg Grand Est Hub",
      "slug": "../../scene/strasbourg-grand-est-trap",
      "description": "Atmosph\u00e8res froides et 808s massives."
    }
  ],
  "faqs": [
    {
      "question": "Puis-je diffuser des morceaux enregistr\u00e9s avec ces prods sur Spotify, Apple Music et YouTube en France \u2013 Strasbourg & Grand Est (67) ?",
      "answer": "Oui, absolument ! Toutes les licences WAV et MP3 de Different Type of Vibe incluent 100% des droits de diffusion commerciale pour Spotify, Apple Music, YouTube, Deezer, TikTok et les radios fran\u00e7aises. Tu conserves 100% de tes revenus d'artiste."
    },
    {
      "question": "Les prods sont-elles conformes avec la SACEM et libres de tout sample non autoris\u00e9 ?",
      "answer": "Oui ! Toutes nos instrumentales sont des compositions 100% originales produites par Onzieb. Aucun sample tiers non lib\u00e9r\u00e9. Tu peux d\u00e9poser ton texte et ton interpr\u00e9tation aupr\u00e8s de la SACEM en toute s\u00e9curit\u00e9."
    },
    {
      "question": "Quels sont les moyens de paiement accept\u00e9s ?",
      "answer": "Tu peux r\u00e9gler instantan\u00e9ment et en toute s\u00e9curit\u00e9 par Carte Bancaire, Apple Pay, Google Pay, PayPal, Cartes de Cr\u00e9dit."
    },
    {
      "question": "En combien de temps re\u00e7ois-je les fichiers audio non tagu\u00e9s ?",
      "answer": "Imm\u00e9diatement apr\u00e8s le paiement, tes fichiers WAV 24-bit studio non tagu\u00e9s, la version MP3 haute qualit\u00e9 et ton contrat de cession de droits d'auteur au format PDF sont envoy\u00e9s directement par email."
    }
  ]
},
  "fr/montpellier": {
  "name": "France \u2013 Montpellier & Sud de France (34)",
  "flag": "\ud83c\uddeb\ud83c\uddf7",
  "currency": "EUR (\u20ac)",
  "currencyCode": "EUR",
  "gateways": "Carte Bancaire, Apple Pay, Google Pay, PayPal, Cartes de Cr\u00e9dit",
  "pro": "SACEM",
  "proFullName": "Soci\u00e9t\u00e9 des Auteurs, Compositeurs et \u00c9diteurs de Musique (SACEM)",
  "proGuide": "100% conforme SACEM avec t\u00e9l\u00e9chargement direct.",
  "headline": "Montpellier Beats \u00e0 Vendre: Afro-Trap du Sud, Bounces M\u00e9lodiques & Drill",
  "description": "Rythmes dansants, percussions carib\u00e9ennes et trap percutant pour la sc\u00e8ne montpelli\u00e9raine et le Sud de la France.",
  "popularGenres": [
    "Montpellier Afro-Trap",
    "Bounces du Sud",
    "Rap M\u00e9lodique"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "Montpellier Bounces Hub",
      "slug": "../../scene/montpellier-afro-bounces",
      "description": "Percussions dansantes et basses l\u00e9g\u00e8res."
    }
  ],
  "faqs": [
    {
      "question": "Puis-je diffuser des morceaux enregistr\u00e9s avec ces prods sur Spotify, Apple Music et YouTube en France \u2013 Montpellier & Sud de France (34) ?",
      "answer": "Oui, absolument ! Toutes les licences WAV et MP3 de Different Type of Vibe incluent 100% des droits de diffusion commerciale pour Spotify, Apple Music, YouTube, Deezer, TikTok et les radios fran\u00e7aises. Tu conserves 100% de tes revenus d'artiste."
    },
    {
      "question": "Les prods sont-elles conformes avec la SACEM et libres de tout sample non autoris\u00e9 ?",
      "answer": "Oui ! Toutes nos instrumentales sont des compositions 100% originales produites par Onzieb. Aucun sample tiers non lib\u00e9r\u00e9. Tu peux d\u00e9poser ton texte et ton interpr\u00e9tation aupr\u00e8s de la SACEM en toute s\u00e9curit\u00e9."
    },
    {
      "question": "Quels sont les moyens de paiement accept\u00e9s ?",
      "answer": "Tu peux r\u00e9gler instantan\u00e9ment et en toute s\u00e9curit\u00e9 par Carte Bancaire, Apple Pay, Google Pay, PayPal, Cartes de Cr\u00e9dit."
    },
    {
      "question": "En combien de temps re\u00e7ois-je les fichiers audio non tagu\u00e9s ?",
      "answer": "Imm\u00e9diatement apr\u00e8s le paiement, tes fichiers WAV 24-bit studio non tagu\u00e9s, la version MP3 haute qualit\u00e9 et ton contrat de cession de droits d'auteur au format PDF sont envoy\u00e9s directement par email."
    }
  ]
},
  "ch/geneve": {
  "name": "Suisse \u2013 Gen\u00e8ve Rap Romand Hub",
  "flag": "\ud83c\udde8\ud83c\udded",
  "currency": "CHF / EUR",
  "currencyCode": "CHF",
  "gateways": "Apple Pay, Google Pay, TWINT, Cartes de Cr\u00e9dit, Stripe",
  "pro": "SUISA / SACEM",
  "proFullName": "Genossenschaft der Urheber und Verleger von Musik (SUISA)",
  "proGuide": "100% conforme SUISA pour musiciens suisses romands. Pleine propri\u00e9t\u00e9 des royalties de streaming.",
  "headline": "Gen\u00e8ve Beats \u00e0 Vendre: Rap Suisse Romand, Trap Nocturne & Drill",
  "description": "Fichiers studio 24-bit WAV de haute pr\u00e9cision pour rappeurs \u00e0 Gen\u00e8ve, Lausanne et en Suisse romande. Cession commerciale compl\u00e8te.",
  "popularGenres": [
    "Rap Suisse Romand",
    "Gen\u00e8ve Trap",
    "Drill Romande"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [],
  "faqs": [
    {
      "question": "Puis-je diffuser des morceaux enregistr\u00e9s avec ces prods sur Spotify, Apple Music et YouTube en Suisse \u2013 Gen\u00e8ve Rap Romand Hub ?",
      "answer": "Oui, absolument ! Toutes les licences WAV et MP3 de Different Type of Vibe incluent 100% des droits de diffusion commerciale pour Spotify, Apple Music, YouTube, Deezer, TikTok et les radios fran\u00e7aises. Tu conserves 100% de tes revenus d'artiste."
    },
    {
      "question": "Les prods sont-elles conformes avec la SUISA / SACEM et libres de tout sample non autoris\u00e9 ?",
      "answer": "Oui ! Toutes nos instrumentales sont des compositions 100% originales produites par Onzieb. Aucun sample tiers non lib\u00e9r\u00e9. Tu peux d\u00e9poser ton texte et ton interpr\u00e9tation aupr\u00e8s de la SUISA / SACEM en toute s\u00e9curit\u00e9."
    },
    {
      "question": "Quels sont les moyens de paiement accept\u00e9s ?",
      "answer": "Tu peux r\u00e9gler instantan\u00e9ment et en toute s\u00e9curit\u00e9 par Apple Pay, Google Pay, TWINT, Cartes de Cr\u00e9dit, Stripe."
    },
    {
      "question": "En combien de temps re\u00e7ois-je les fichiers audio non tagu\u00e9s ?",
      "answer": "Imm\u00e9diatement apr\u00e8s le paiement, tes fichiers WAV 24-bit studio non tagu\u00e9s, la version MP3 haute qualit\u00e9 et ton contrat de cession de droits d'auteur au format PDF sont envoy\u00e9s directement par email."
    }
  ]
},
  "be/liege": {
  "name": "Belgique \u2013 Li\u00e8ge & Wallonie Rap Hub",
  "flag": "\ud83c\udde7\ud83c\uddea",
  "currency": "EUR (\u20ac)",
  "currencyCode": "EUR",
  "gateways": "Bancontact, Apple Pay, Google Pay, PayPal, Cartes de Cr\u00e9dit",
  "pro": "SABAM",
  "proFullName": "Soci\u00e9t\u00e9 Belge des Auteurs, Compositeurs et \u00c9diteurs (SABAM)",
  "proGuide": "100% conforme SABAM pour artistes wallons et belges francophones.",
  "headline": "Li\u00e8ge Prods Rap \u00e0 Vendre: Trap Sombre Wallon, R&B & Drill Belge",
  "description": "Ambiance t\u00e9n\u00e9breuse et m\u00e9lodies m\u00e9lancoliques pour la vibrante sc\u00e8ne rap de Li\u00e8ge, Charleroi et de Wallonie.",
  "popularGenres": [
    "Rap Wallon",
    "Li\u00e8ge Trap",
    "Drill Belge"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [],
  "faqs": [
    {
      "question": "Puis-je diffuser des morceaux enregistr\u00e9s avec ces prods sur Spotify, Apple Music et YouTube en Belgique \u2013 Li\u00e8ge & Wallonie Rap Hub ?",
      "answer": "Oui, absolument ! Toutes les licences WAV et MP3 de Different Type of Vibe incluent 100% des droits de diffusion commerciale pour Spotify, Apple Music, YouTube, Deezer, TikTok et les radios fran\u00e7aises. Tu conserves 100% de tes revenus d'artiste."
    },
    {
      "question": "Les prods sont-elles conformes avec la SABAM et libres de tout sample non autoris\u00e9 ?",
      "answer": "Oui ! Toutes nos instrumentales sont des compositions 100% originales produites par Onzieb. Aucun sample tiers non lib\u00e9r\u00e9. Tu peux d\u00e9poser ton texte et ton interpr\u00e9tation aupr\u00e8s de la SABAM en toute s\u00e9curit\u00e9."
    },
    {
      "question": "Quels sont les moyens de paiement accept\u00e9s ?",
      "answer": "Tu peux r\u00e9gler instantan\u00e9ment et en toute s\u00e9curit\u00e9 par Bancontact, Apple Pay, Google Pay, PayPal, Cartes de Cr\u00e9dit."
    },
    {
      "question": "En combien de temps re\u00e7ois-je les fichiers audio non tagu\u00e9s ?",
      "answer": "Imm\u00e9diatement apr\u00e8s le paiement, tes fichiers WAV 24-bit studio non tagu\u00e9s, la version MP3 haute qualit\u00e9 et ton contrat de cession de droits d'auteur au format PDF sont envoy\u00e9s directement par email."
    }
  ]
},
  "ca/toronto": {
  "name": "Canada \u2013 Toronto & The 6ix (GTA)",
  "flag": "\ud83c\udde8\ud83c\udde6",
  "currency": "CAD ($)",
  "currencyCode": "CAD",
  "gateways": "Apple Pay, Google Pay, Interac, Credit/Debit Cards, Stripe",
  "pro": "SOCAN",
  "proFullName": "Society of Composers, Authors and Music Publishers of Canada (SOCAN)",
  "proGuide": "100% SOCAN compliant and FACTOR grant eligible for Canadian music artists. You retain 100% artist master streaming royalties across Spotify, Apple Music, and Canadian commercial radio.",
  "headline": "Toronto Beats for Sale: The 6ix Nocturnal Ambient Trap & OVO Vibes",
  "description": "Authentic Toronto soundscapes: dark ambient pads, underwater filtered synths, and heavy 808 bounce inspired by Drake, The Weeknd, and Tory Lanez. Instant uncompressed 24-bit WAV leases & stem trackouts.",
  "popularGenres": [
    "Toronto Ambient Trap",
    "OVO Style",
    "Dark Nocturnal R&B",
    "GTA 808s"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "Toronto Sound Scene Hub",
      "slug": "../../scene/toronto-sound-dark-ambient-trap",
      "description": "Filtered pads, reverbs and nocturnal 808 bounce."
    },
    {
      "name": "Drake Melodic Trap Vibe",
      "slug": "../../vibe/drake-certified-lover-melodic-trap",
      "description": "Lush chords and smooth storytelling trap bounce."
    },
    {
      "name": "The Weeknd Dark Synth Vibe",
      "slug": "../../vibe/the-weeknd-dark-synth-trap",
      "description": "80s analog synthwave blended with modern trap drums."
    }
  ],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify, Apple Music, and YouTube in Canada \u2013 Toronto & The 6ix (GTA)?",
      "answer": "Yes! All WAV and MP3 licenses include full commercial streaming rights across Spotify Canada, Apple Music, YouTube, Tidal, and commercial radio. You retain 100% of your artist master streaming royalties."
    },
    {
      "question": "How do I register my songs with SOCAN and apply for FACTOR / Canada Council music grants?",
      "answer": "When registering your work with SOCAN, list yourself as 100% lyricist/performer and credit Onzieb (Different Type of Vibe) as the music producer/composer per your countersigned PDF license agreement. Our licenses satisfy FACTOR, Canada Council for the Arts, and provincial grant delivery requirements."
    },
    {
      "question": "Which Canadian payment methods are supported?",
      "answer": "You can pay easily in Canadian Dollars (CAD $) via Apple Pay, Google Pay, Interac e-Transfer, Credit/Debit Cards, PayPal, and Stripe."
    },
    {
      "question": "How quickly do I receive my untagged audio files?",
      "answer": "Immediately upon checkout, an untagged studio 24-bit WAV file, MP3 audio version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "ca/vancouver": {
  "name": "Canada \u2013 Vancouver & British Columbia (YVR)",
  "flag": "\ud83c\udde8\ud83c\udde6",
  "currency": "CAD ($)",
  "currencyCode": "CAD",
  "gateways": "Apple Pay, Google Pay, Interac, Credit/Debit Cards",
  "pro": "SOCAN",
  "proFullName": "Society of Composers, Authors and Music Publishers of Canada (SOCAN)",
  "proGuide": "100% SOCAN compliant and Creative BC / FACTOR grant eligible.",
  "headline": "Vancouver Beats for Sale: Coastal Melodic Trap, Chill R&B & Lofi Rap",
  "description": "Smooth Pacific Northwest hip-hop instrumentals featuring lush acoustic guitar riffs, warm Rhodes keys, and modern 808 bounce for artists across British Columbia.",
  "popularGenres": [
    "Vancouver Melodic Trap",
    "Coastal R&B",
    "Chill Lofi Rap"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "Vancouver Scene Hub",
      "slug": "../../scene/vancouver-coastal-melodic-trap",
      "description": "Warm ocean vibes and laid-back 808 bounce."
    }
  ],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify, Apple Music, and YouTube in Canada \u2013 Vancouver & British Columbia (YVR)?",
      "answer": "Yes! All WAV and MP3 licenses include full commercial streaming rights across Spotify Canada, Apple Music, YouTube, Tidal, and commercial radio. You retain 100% of your artist master streaming royalties."
    },
    {
      "question": "How do I register my songs with SOCAN and apply for FACTOR / Canada Council music grants?",
      "answer": "When registering your work with SOCAN, list yourself as 100% lyricist/performer and credit Onzieb (Different Type of Vibe) as the music producer/composer per your countersigned PDF license agreement. Our licenses satisfy FACTOR, Canada Council for the Arts, and provincial grant delivery requirements."
    },
    {
      "question": "Which Canadian payment methods are supported?",
      "answer": "You can pay easily in Canadian Dollars (CAD $) via Apple Pay, Google Pay, Interac e-Transfer, Credit/Debit Cards, PayPal, and Stripe."
    },
    {
      "question": "How quickly do I receive my untagged audio files?",
      "answer": "Immediately upon checkout, an untagged studio 24-bit WAV file, MP3 audio version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "ca/ottawa": {
  "name": "Canada \u2013 Ottawa Capital Region & Dark Underground",
  "flag": "\ud83c\udde8\ud83c\udde6",
  "currency": "CAD ($)",
  "currencyCode": "CAD",
  "gateways": "Apple Pay, Google Pay, Interac, Credit/Debit Cards",
  "pro": "SOCAN",
  "proFullName": "Society of Composers, Authors and Music Publishers of Canada (SOCAN)",
  "proGuide": "100% SOCAN compliant with signed legal PDF agreements.",
  "headline": "Ottawa Beats for Sale: Dark Underground Bass, Eerie Trap & Melodic Rap",
  "description": "Subterranean distorted 808s, eerie atmospheric textures, and hard-hitting drums inspired by Night Lovell and Belly for artists in the National Capital Region.",
  "popularGenres": [
    "Ottawa Dark Trap",
    "Underground Bass",
    "Eerie Ambient"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "Night Lovell Style Hub",
      "slug": "../../vibe/night-lovell-dark-underground-bass",
      "description": "Deep distorted 808s and haunting vocal ambiance."
    }
  ],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify, Apple Music, and YouTube in Canada \u2013 Ottawa Capital Region & Dark Underground?",
      "answer": "Yes! All WAV and MP3 licenses include full commercial streaming rights across Spotify Canada, Apple Music, YouTube, Tidal, and commercial radio. You retain 100% of your artist master streaming royalties."
    },
    {
      "question": "How do I register my songs with SOCAN and apply for FACTOR / Canada Council music grants?",
      "answer": "When registering your work with SOCAN, list yourself as 100% lyricist/performer and credit Onzieb (Different Type of Vibe) as the music producer/composer per your countersigned PDF license agreement. Our licenses satisfy FACTOR, Canada Council for the Arts, and provincial grant delivery requirements."
    },
    {
      "question": "Which Canadian payment methods are supported?",
      "answer": "You can pay easily in Canadian Dollars (CAD $) via Apple Pay, Google Pay, Interac e-Transfer, Credit/Debit Cards, PayPal, and Stripe."
    },
    {
      "question": "How quickly do I receive my untagged audio files?",
      "answer": "Immediately upon checkout, an untagged studio 24-bit WAV file, MP3 audio version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "ca/calgary": {
  "name": "Canada \u2013 Calgary & Alberta Hip-Hop Hub",
  "flag": "\ud83c\udde8\ud83c\udde6",
  "currency": "CAD ($)",
  "currencyCode": "CAD",
  "gateways": "Apple Pay, Google Pay, Interac, Credit/Debit Cards",
  "pro": "SOCAN",
  "proFullName": "Society of Composers, Authors and Music Publishers of Canada (SOCAN)",
  "proGuide": "100% SOCAN compliant with instant digital delivery.",
  "headline": "Calgary Beats for Sale: Alberta Trap, Heavy Drill & Melodic 808s",
  "description": "Heavyweight western Canadian trap beats with driving basslines and crisp percussion for independent recording vocalists in Calgary and Edmonton.",
  "popularGenres": [
    "Alberta Trap",
    "Western Canadian Drill",
    "Melodic 808s"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify, Apple Music, and YouTube in Canada \u2013 Calgary & Alberta Hip-Hop Hub?",
      "answer": "Yes! All WAV and MP3 licenses include full commercial streaming rights across Spotify Canada, Apple Music, YouTube, Tidal, and commercial radio. You retain 100% of your artist master streaming royalties."
    },
    {
      "question": "How do I register my songs with SOCAN and apply for FACTOR / Canada Council music grants?",
      "answer": "When registering your work with SOCAN, list yourself as 100% lyricist/performer and credit Onzieb (Different Type of Vibe) as the music producer/composer per your countersigned PDF license agreement. Our licenses satisfy FACTOR, Canada Council for the Arts, and provincial grant delivery requirements."
    },
    {
      "question": "Which Canadian payment methods are supported?",
      "answer": "You can pay easily in Canadian Dollars (CAD $) via Apple Pay, Google Pay, Interac e-Transfer, Credit/Debit Cards, PayPal, and Stripe."
    },
    {
      "question": "How quickly do I receive my untagged audio files?",
      "answer": "Immediately upon checkout, an untagged studio 24-bit WAV file, MP3 audio version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "ca/edmonton": {
  "name": "Canada \u2013 Edmonton & Northern Alberta Rap",
  "flag": "\ud83c\udde8\ud83c\udde6",
  "currency": "CAD ($)",
  "currencyCode": "CAD",
  "gateways": "Apple Pay, Google Pay, Interac, Credit/Debit Cards",
  "pro": "SOCAN",
  "proFullName": "Society of Composers, Authors and Music Publishers of Canada (SOCAN)",
  "proGuide": "100% SOCAN compliant with full streaming rights.",
  "headline": "Edmonton Beats for Sale: Northern Trap, Hard Drill & Street Rap",
  "description": "Cold, aggressive drill sliding 808s and melodic trap instrumentals for recording artists in Edmonton and Northern Alberta.",
  "popularGenres": [
    "Edmonton Drill",
    "Northern Trap",
    "Street Rap"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify, Apple Music, and YouTube in Canada \u2013 Edmonton & Northern Alberta Rap?",
      "answer": "Yes! All WAV and MP3 licenses include full commercial streaming rights across Spotify Canada, Apple Music, YouTube, Tidal, and commercial radio. You retain 100% of your artist master streaming royalties."
    },
    {
      "question": "How do I register my songs with SOCAN and apply for FACTOR / Canada Council music grants?",
      "answer": "When registering your work with SOCAN, list yourself as 100% lyricist/performer and credit Onzieb (Different Type of Vibe) as the music producer/composer per your countersigned PDF license agreement. Our licenses satisfy FACTOR, Canada Council for the Arts, and provincial grant delivery requirements."
    },
    {
      "question": "Which Canadian payment methods are supported?",
      "answer": "You can pay easily in Canadian Dollars (CAD $) via Apple Pay, Google Pay, Interac e-Transfer, Credit/Debit Cards, PayPal, and Stripe."
    },
    {
      "question": "How quickly do I receive my untagged audio files?",
      "answer": "Immediately upon checkout, an untagged studio 24-bit WAV file, MP3 audio version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "ca/winnipeg": {
  "name": "Canada \u2013 Winnipeg & Manitoba Hip-Hop",
  "flag": "\ud83c\udde8\ud83c\udde6",
  "currency": "CAD ($)",
  "currencyCode": "CAD",
  "gateways": "Apple Pay, Google Pay, Interac, Credit/Debit Cards",
  "pro": "SOCAN",
  "proFullName": "Society of Composers, Authors and Music Publishers of Canada (SOCAN)",
  "proGuide": "100% SOCAN and Manitoba Film & Music grant compliant.",
  "headline": "Winnipeg Beats for Sale: Prairie Trap, Underground Boom Bap & Drill",
  "description": "Punchy underground hip-hop, soulful boom bap samples, and driving trap 808s for artists across Manitoba and the Canadian Prairies.",
  "popularGenres": [
    "Winnipeg Hip-Hop",
    "Underground Boom Bap",
    "Prairie Trap"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify, Apple Music, and YouTube in Canada \u2013 Winnipeg & Manitoba Hip-Hop?",
      "answer": "Yes! All WAV and MP3 licenses include full commercial streaming rights across Spotify Canada, Apple Music, YouTube, Tidal, and commercial radio. You retain 100% of your artist master streaming royalties."
    },
    {
      "question": "How do I register my songs with SOCAN and apply for FACTOR / Canada Council music grants?",
      "answer": "When registering your work with SOCAN, list yourself as 100% lyricist/performer and credit Onzieb (Different Type of Vibe) as the music producer/composer per your countersigned PDF license agreement. Our licenses satisfy FACTOR, Canada Council for the Arts, and provincial grant delivery requirements."
    },
    {
      "question": "Which Canadian payment methods are supported?",
      "answer": "You can pay easily in Canadian Dollars (CAD $) via Apple Pay, Google Pay, Interac e-Transfer, Credit/Debit Cards, PayPal, and Stripe."
    },
    {
      "question": "How quickly do I receive my untagged audio files?",
      "answer": "Immediately upon checkout, an untagged studio 24-bit WAV file, MP3 audio version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "ca/hamilton": {
  "name": "Canada \u2013 Hamilton & Golden Horseshoe Rap",
  "flag": "\ud83c\udde8\ud83c\udde6",
  "currency": "CAD ($)",
  "currencyCode": "CAD",
  "gateways": "Apple Pay, Google Pay, Interac, Credit/Debit Cards",
  "pro": "SOCAN",
  "proFullName": "Society of Composers, Authors and Music Publishers of Canada (SOCAN)",
  "proGuide": "100% SOCAN compliant with signed legal PDF agreements.",
  "headline": "Hamilton Beats for Sale: Steel City Trap, Heavy 808s & Melodic Drill",
  "description": "Raw, gritty trap and dark drill instrumentals for independent recording vocalists in Hamilton, Niagara, and Ontario.",
  "popularGenres": [
    "Steel City Trap",
    "Hamilton Drill",
    "Heavy 808s"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify, Apple Music, and YouTube in Canada \u2013 Hamilton & Golden Horseshoe Rap?",
      "answer": "Yes! All WAV and MP3 licenses include full commercial streaming rights across Spotify Canada, Apple Music, YouTube, Tidal, and commercial radio. You retain 100% of your artist master streaming royalties."
    },
    {
      "question": "How do I register my songs with SOCAN and apply for FACTOR / Canada Council music grants?",
      "answer": "When registering your work with SOCAN, list yourself as 100% lyricist/performer and credit Onzieb (Different Type of Vibe) as the music producer/composer per your countersigned PDF license agreement. Our licenses satisfy FACTOR, Canada Council for the Arts, and provincial grant delivery requirements."
    },
    {
      "question": "Which Canadian payment methods are supported?",
      "answer": "You can pay easily in Canadian Dollars (CAD $) via Apple Pay, Google Pay, Interac e-Transfer, Credit/Debit Cards, PayPal, and Stripe."
    },
    {
      "question": "How quickly do I receive my untagged audio files?",
      "answer": "Immediately upon checkout, an untagged studio 24-bit WAV file, MP3 audio version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "ca/quebec-city": {
  "name": "Canada \u2013 Qu\u00e9bec Hip-Hop & Rap Franco",
  "flag": "\ud83c\udde8\ud83c\udde6",
  "currency": "CAD ($)",
  "currencyCode": "CAD",
  "gateways": "Apple Pay, Google Pay, Interac, Credit/Debit Cards",
  "pro": "SOCAN",
  "proFullName": "Soci\u00e9t\u00e9 Canadienne des Auteurs, Compositeurs et \u00c9diteurs de Musique (SOCAN)",
  "proGuide": "100% conforme SOCAN et \u00e9ligible aux bourses Musicaction.",
  "headline": "Qu\u00e9bec Beats \u00e0 Vendre: Rap Franco, Trap M\u00e9lodique & Drill Qu\u00e9b\u00e9cois",
  "description": "Instrumentales studio haute d\u00e9finition pour artistes ind\u00e9pendants \u00e0 Qu\u00e9bec et dans l'est de la province. Fichiers WAV 24-bit non tagu\u00e9s.",
  "popularGenres": [
    "Rap Franco",
    "Qu\u00e9bec Trap",
    "Drill Qu\u00e9b\u00e9cois"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify, Apple Music, and YouTube in Canada \u2013 Qu\u00e9bec Hip-Hop & Rap Franco?",
      "answer": "Yes! All WAV and MP3 licenses include full commercial streaming rights across Spotify Canada, Apple Music, YouTube, Tidal, and commercial radio. You retain 100% of your artist master streaming royalties."
    },
    {
      "question": "How do I register my songs with SOCAN and apply for FACTOR / Canada Council music grants?",
      "answer": "When registering your work with SOCAN, list yourself as 100% lyricist/performer and credit Onzieb (Different Type of Vibe) as the music producer/composer per your countersigned PDF license agreement. Our licenses satisfy FACTOR, Canada Council for the Arts, and provincial grant delivery requirements."
    },
    {
      "question": "Which Canadian payment methods are supported?",
      "answer": "You can pay easily in Canadian Dollars (CAD $) via Apple Pay, Google Pay, Interac e-Transfer, Credit/Debit Cards, PayPal, and Stripe."
    },
    {
      "question": "How quickly do I receive my untagged audio files?",
      "answer": "Immediately upon checkout, an untagged studio 24-bit WAV file, MP3 audio version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "ca/halifax": {
  "name": "Canada \u2013 Halifax & Atlantic Canada Rap",
  "flag": "\ud83c\udde8\ud83c\udde6",
  "currency": "CAD ($)",
  "currencyCode": "CAD",
  "gateways": "Apple Pay, Google Pay, Interac, Credit/Debit Cards",
  "pro": "SOCAN",
  "proFullName": "Society of Composers, Authors and Music Publishers of Canada (SOCAN)",
  "proGuide": "100% SOCAN compliant and Music Nova Scotia grant eligible.",
  "headline": "Halifax Beats for Sale: Atlantic Coast Boom Bap, Melodic Rap & Trap",
  "description": "East Coast Canadian hip-hop instrumentals blending organic instrumentation, soulful chops, and modern trap drums for Nova Scotia artists.",
  "popularGenres": [
    "East Coast Hip-Hop",
    "Halifax Rap",
    "Soulful Boom Bap"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify, Apple Music, and YouTube in Canada \u2013 Halifax & Atlantic Canada Rap?",
      "answer": "Yes! All WAV and MP3 licenses include full commercial streaming rights across Spotify Canada, Apple Music, YouTube, Tidal, and commercial radio. You retain 100% of your artist master streaming royalties."
    },
    {
      "question": "How do I register my songs with SOCAN and apply for FACTOR / Canada Council music grants?",
      "answer": "When registering your work with SOCAN, list yourself as 100% lyricist/performer and credit Onzieb (Different Type of Vibe) as the music producer/composer per your countersigned PDF license agreement. Our licenses satisfy FACTOR, Canada Council for the Arts, and provincial grant delivery requirements."
    },
    {
      "question": "Which Canadian payment methods are supported?",
      "answer": "You can pay easily in Canadian Dollars (CAD $) via Apple Pay, Google Pay, Interac e-Transfer, Credit/Debit Cards, PayPal, and Stripe."
    },
    {
      "question": "How quickly do I receive my untagged audio files?",
      "answer": "Immediately upon checkout, an untagged studio 24-bit WAV file, MP3 audio version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "ca/ontario": {
  "name": "Canada \u2013 Ontario & Greater Toronto Area (GTA)",
  "flag": "\ud83c\udde8\ud83c\udde6",
  "currency": "CAD ($)",
  "currencyCode": "CAD",
  "gateways": "Apple Pay, Google Pay, Interac e-Transfer, Credit/Debit Cards, Stripe",
  "pro": "SOCAN",
  "proFullName": "Society of Composers, Authors and Music Publishers of Canada (SOCAN)",
  "proGuide": "100% SOCAN compliant and Ontario Creates / FACTOR grant eligible. Full master royalty ownership for Spotify Canada and international streaming.",
  "headline": "Ontario Beats for Sale: The 6ix Nocturnal Ambient Trap & Ontario Creates Grants",
  "description": "Canada's largest music market. Atmospheric filtered synths, underwater pads, and heavy 808s for recording artists across Ontario (Toronto, Mississauga, Brampton, Ottawa, Hamilton).",
  "popularGenres": [
    "Ontario Ambient Trap",
    "OVO Style",
    "Peel Region R&B",
    "GTA 808s"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "Toronto Deal Hub",
      "slug": "ca/toronto",
      "description": "The capital of the Canadian 6ix ambient trap sound."
    },
    {
      "name": "Brampton Trap Hub",
      "slug": "ca/brampton",
      "description": "Melodic street trap and heavy Canadian drill."
    },
    {
      "name": "Mississauga R&B Hub",
      "slug": "ca/mississauga",
      "description": "Late night dark ambient R&B and melodic trap."
    }
  ],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify, Apple Music, and YouTube in Canada \u2013 Ontario & Greater Toronto Area (GTA)?",
      "answer": "Yes! All WAV and MP3 licenses include full commercial streaming rights across Spotify Canada, Apple Music, YouTube, Tidal, and commercial radio. You retain 100% of your artist master streaming royalties."
    },
    {
      "question": "How do I register my songs with SOCAN and apply for FACTOR / Canada Council music grants?",
      "answer": "When registering your work with SOCAN, list yourself as 100% lyricist/performer and credit Onzieb (Different Type of Vibe) as the music producer/composer per your countersigned PDF license agreement. Our licenses satisfy FACTOR, Canada Council for the Arts, and provincial grant delivery requirements."
    },
    {
      "question": "Which Canadian payment methods are supported?",
      "answer": "You can pay easily in Canadian Dollars (CAD $) via Apple Pay, Google Pay, Interac e-Transfer, Credit/Debit Cards, PayPal, and Stripe."
    },
    {
      "question": "How quickly do I receive my untagged audio files?",
      "answer": "Immediately upon checkout, an untagged studio 24-bit WAV file, MP3 audio version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "ca/brampton": {
  "name": "Canada \u2013 Brampton (Peel Region) Rap & Drill",
  "flag": "\ud83c\udde8\ud83c\udde6",
  "currency": "CAD ($)",
  "currencyCode": "CAD",
  "gateways": "Apple Pay, Google Pay, Interac e-Transfer, Credit/Debit Cards",
  "pro": "SOCAN",
  "proFullName": "Society of Composers, Authors and Music Publishers of Canada (SOCAN)",
  "proGuide": "100% SOCAN compliant with signed legal contracts.",
  "headline": "Brampton Beats for Sale: Peel Region Drill, Melodic Trap & Heavy 808s",
  "description": "Fast-paced Canadian drill sliding basslines and emotional acoustic guitar trap inspired by Tory Lanez and Northsidebenji for Brampton vocalists.",
  "popularGenres": [
    "Brampton Drill",
    "Peel Region Melodic",
    "Heavy 808 Slides"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "Northsidebenji Melodic Vibe",
      "slug": "../../vibe/northsidebenji-melodic-toronto-trap",
      "description": "Heartfelt guitar arpeggios and driving 808 bounce."
    }
  ],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify, Apple Music, and YouTube in Canada \u2013 Brampton (Peel Region) Rap & Drill?",
      "answer": "Yes! All WAV and MP3 licenses include full commercial streaming rights across Spotify Canada, Apple Music, YouTube, Tidal, and commercial radio. You retain 100% of your artist master streaming royalties."
    },
    {
      "question": "How do I register my songs with SOCAN and apply for FACTOR / Canada Council music grants?",
      "answer": "When registering your work with SOCAN, list yourself as 100% lyricist/performer and credit Onzieb (Different Type of Vibe) as the music producer/composer per your countersigned PDF license agreement. Our licenses satisfy FACTOR, Canada Council for the Arts, and provincial grant delivery requirements."
    },
    {
      "question": "Which Canadian payment methods are supported?",
      "answer": "You can pay easily in Canadian Dollars (CAD $) via Apple Pay, Google Pay, Interac e-Transfer, Credit/Debit Cards, PayPal, and Stripe."
    },
    {
      "question": "How quickly do I receive my untagged audio files?",
      "answer": "Immediately upon checkout, an untagged studio 24-bit WAV file, MP3 audio version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "ca/mississauga": {
  "name": "Canada \u2013 Mississauga Nocturnal R&B & Trap",
  "flag": "\ud83c\udde8\ud83c\udde6",
  "currency": "CAD ($)",
  "currencyCode": "CAD",
  "gateways": "Apple Pay, Google Pay, Interac e-Transfer, Credit/Debit Cards",
  "pro": "SOCAN",
  "proFullName": "Society of Composers, Authors and Music Publishers of Canada (SOCAN)",
  "proGuide": "100% SOCAN compliant for commercial release.",
  "headline": "Mississauga Beats for Sale: Dark Ambient R&B, Lush Keys & Trap Bounces",
  "description": "Late-night filtered chords, warm Rhodes progressions, and heavy 808 drums inspired by PartyNextDoor and Ali Gatie for Mississauga artists.",
  "popularGenres": [
    "Mississauga Dark R&B",
    "Ambient Trap",
    "Warm Rhodes Melodies"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "PartyNextDoor R&B Vibe",
      "slug": "../../vibe/partynextdoor-mississauga-dark-rnb",
      "description": "Nocturnal chords and filtered trap drums."
    }
  ],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify, Apple Music, and YouTube in Canada \u2013 Mississauga Nocturnal R&B & Trap?",
      "answer": "Yes! All WAV and MP3 licenses include full commercial streaming rights across Spotify Canada, Apple Music, YouTube, Tidal, and commercial radio. You retain 100% of your artist master streaming royalties."
    },
    {
      "question": "How do I register my songs with SOCAN and apply for FACTOR / Canada Council music grants?",
      "answer": "When registering your work with SOCAN, list yourself as 100% lyricist/performer and credit Onzieb (Different Type of Vibe) as the music producer/composer per your countersigned PDF license agreement. Our licenses satisfy FACTOR, Canada Council for the Arts, and provincial grant delivery requirements."
    },
    {
      "question": "Which Canadian payment methods are supported?",
      "answer": "You can pay easily in Canadian Dollars (CAD $) via Apple Pay, Google Pay, Interac e-Transfer, Credit/Debit Cards, PayPal, and Stripe."
    },
    {
      "question": "How quickly do I receive my untagged audio files?",
      "answer": "Immediately upon checkout, an untagged studio 24-bit WAV file, MP3 audio version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "ca/scarborough": {
  "name": "Canada \u2013 Scarborough (East Toronto) Street Trap",
  "flag": "\ud83c\udde8\ud83c\udde6",
  "currency": "CAD ($)",
  "currencyCode": "CAD",
  "gateways": "Apple Pay, Google Pay, Interac e-Transfer, Credit/Debit Cards",
  "pro": "SOCAN",
  "proFullName": "Society of Composers, Authors and Music Publishers of Canada (SOCAN)",
  "proGuide": "100% SOCAN compliant with instant digital delivery.",
  "headline": "Scarborough Beats for Sale: East Toronto Drill, Street Rap & 808s",
  "description": "Raw, energetic Scarborough street rap and drill instrumentals featuring sliding 808s and dark synth melodies for East Toronto artists.",
  "popularGenres": [
    "Scarborough Drill",
    "East Toronto Trap",
    "Raw Street Rap"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify, Apple Music, and YouTube in Canada \u2013 Scarborough (East Toronto) Street Trap?",
      "answer": "Yes! All WAV and MP3 licenses include full commercial streaming rights across Spotify Canada, Apple Music, YouTube, Tidal, and commercial radio. You retain 100% of your artist master streaming royalties."
    },
    {
      "question": "How do I register my songs with SOCAN and apply for FACTOR / Canada Council music grants?",
      "answer": "When registering your work with SOCAN, list yourself as 100% lyricist/performer and credit Onzieb (Different Type of Vibe) as the music producer/composer per your countersigned PDF license agreement. Our licenses satisfy FACTOR, Canada Council for the Arts, and provincial grant delivery requirements."
    },
    {
      "question": "Which Canadian payment methods are supported?",
      "answer": "You can pay easily in Canadian Dollars (CAD $) via Apple Pay, Google Pay, Interac e-Transfer, Credit/Debit Cards, PayPal, and Stripe."
    },
    {
      "question": "How quickly do I receive my untagged audio files?",
      "answer": "Immediately upon checkout, an untagged studio 24-bit WAV file, MP3 audio version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "ca/british-columbia": {
  "name": "Canada \u2013 British Columbia & West Coast Hub",
  "flag": "\ud83c\udde8\ud83c\udde6",
  "currency": "CAD ($)",
  "currencyCode": "CAD",
  "gateways": "Apple Pay, Google Pay, Interac e-Transfer, Credit/Debit Cards",
  "pro": "SOCAN",
  "proFullName": "Society of Composers, Authors and Music Publishers of Canada (SOCAN)",
  "proGuide": "100% SOCAN and Amplify BC / FACTOR grant eligible.",
  "headline": "British Columbia Beats for Sale: Vancouver Coastal Trap & Lofi Rap",
  "description": "Chill, atmospheric Pacific Northwest hip-hop and energetic west coast bounce for artists across British Columbia (Vancouver, Victoria, Surrey, Burnaby).",
  "popularGenres": [
    "BC Coastal Trap",
    "Pacific Northwest R&B",
    "Chill Lofi Rap"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "Vancouver Deals Hub",
      "slug": "ca/vancouver",
      "description": "Coastal trap and melodic hip-hop."
    }
  ],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify, Apple Music, and YouTube in Canada \u2013 British Columbia & West Coast Hub?",
      "answer": "Yes! All WAV and MP3 licenses include full commercial streaming rights across Spotify Canada, Apple Music, YouTube, Tidal, and commercial radio. You retain 100% of your artist master streaming royalties."
    },
    {
      "question": "How do I register my songs with SOCAN and apply for FACTOR / Canada Council music grants?",
      "answer": "When registering your work with SOCAN, list yourself as 100% lyricist/performer and credit Onzieb (Different Type of Vibe) as the music producer/composer per your countersigned PDF license agreement. Our licenses satisfy FACTOR, Canada Council for the Arts, and provincial grant delivery requirements."
    },
    {
      "question": "Which Canadian payment methods are supported?",
      "answer": "You can pay easily in Canadian Dollars (CAD $) via Apple Pay, Google Pay, Interac e-Transfer, Credit/Debit Cards, PayPal, and Stripe."
    },
    {
      "question": "How quickly do I receive my untagged audio files?",
      "answer": "Immediately upon checkout, an untagged studio 24-bit WAV file, MP3 audio version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "ca/alberta": {
  "name": "Canada \u2013 Alberta Prairie Trap & Drill",
  "flag": "\ud83c\udde8\ud83c\udde6",
  "currency": "CAD ($)",
  "currencyCode": "CAD",
  "gateways": "Apple Pay, Google Pay, Interac e-Transfer, Credit/Debit Cards",
  "pro": "SOCAN",
  "proFullName": "Society of Composers, Authors and Music Publishers of Canada (SOCAN)",
  "proGuide": "100% SOCAN compliant with full commercial streaming rights.",
  "headline": "Alberta Beats for Sale: Calgary Energy, Edmonton Drill & Western Trap",
  "description": "High-octane Western Canadian rap beats with hard punchy drums and cold melodic synthesizers for recording artists across Alberta.",
  "popularGenres": [
    "Alberta Trap",
    "Western Drill",
    "Heavy 808s"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "Calgary Deals Hub",
      "slug": "ca/calgary",
      "description": "High energy trap and modern drill."
    },
    {
      "name": "Edmonton Deals Hub",
      "slug": "ca/edmonton",
      "description": "Cold sliding drill and street rap."
    }
  ],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify, Apple Music, and YouTube in Canada \u2013 Alberta Prairie Trap & Drill?",
      "answer": "Yes! All WAV and MP3 licenses include full commercial streaming rights across Spotify Canada, Apple Music, YouTube, Tidal, and commercial radio. You retain 100% of your artist master streaming royalties."
    },
    {
      "question": "How do I register my songs with SOCAN and apply for FACTOR / Canada Council music grants?",
      "answer": "When registering your work with SOCAN, list yourself as 100% lyricist/performer and credit Onzieb (Different Type of Vibe) as the music producer/composer per your countersigned PDF license agreement. Our licenses satisfy FACTOR, Canada Council for the Arts, and provincial grant delivery requirements."
    },
    {
      "question": "Which Canadian payment methods are supported?",
      "answer": "You can pay easily in Canadian Dollars (CAD $) via Apple Pay, Google Pay, Interac e-Transfer, Credit/Debit Cards, PayPal, and Stripe."
    },
    {
      "question": "How quickly do I receive my untagged audio files?",
      "answer": "Immediately upon checkout, an untagged studio 24-bit WAV file, MP3 audio version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "ca/saskatchewan": {
  "name": "Canada \u2013 Saskatchewan & Prairie Hip-Hop",
  "flag": "\ud83c\udde8\ud83c\udde6",
  "currency": "CAD ($)",
  "currencyCode": "CAD",
  "gateways": "Apple Pay, Google Pay, Interac e-Transfer, Credit/Debit Cards",
  "pro": "SOCAN",
  "proFullName": "Society of Composers, Authors and Music Publishers of Canada (SOCAN)",
  "proGuide": "100% SOCAN and SaskMusic grant eligible.",
  "headline": "Saskatchewan Beats for Sale: Prairie Underground Rap & Melodic Drill",
  "description": "Gritty underground boom bap and modern melodic trap instrumentals for artists in Saskatoon, Regina, and Saskatchewan.",
  "popularGenres": [
    "Prairie Underground",
    "Saskatoon Rap",
    "Melodic Drill"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify, Apple Music, and YouTube in Canada \u2013 Saskatchewan & Prairie Hip-Hop?",
      "answer": "Yes! All WAV and MP3 licenses include full commercial streaming rights across Spotify Canada, Apple Music, YouTube, Tidal, and commercial radio. You retain 100% of your artist master streaming royalties."
    },
    {
      "question": "How do I register my songs with SOCAN and apply for FACTOR / Canada Council music grants?",
      "answer": "When registering your work with SOCAN, list yourself as 100% lyricist/performer and credit Onzieb (Different Type of Vibe) as the music producer/composer per your countersigned PDF license agreement. Our licenses satisfy FACTOR, Canada Council for the Arts, and provincial grant delivery requirements."
    },
    {
      "question": "Which Canadian payment methods are supported?",
      "answer": "You can pay easily in Canadian Dollars (CAD $) via Apple Pay, Google Pay, Interac e-Transfer, Credit/Debit Cards, PayPal, and Stripe."
    },
    {
      "question": "How quickly do I receive my untagged audio files?",
      "answer": "Immediately upon checkout, an untagged studio 24-bit WAV file, MP3 audio version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "ca/nova-scotia": {
  "name": "Canada \u2013 Nova Scotia & Atlantic Hip-Hop Hub",
  "flag": "\ud83c\udde8\ud83c\udde6",
  "currency": "CAD ($)",
  "currencyCode": "CAD",
  "gateways": "Apple Pay, Google Pay, Interac e-Transfer, Credit/Debit Cards",
  "pro": "SOCAN",
  "proFullName": "Society of Composers, Authors and Music Publishers of Canada (SOCAN)",
  "proGuide": "100% SOCAN and Music Nova Scotia grant eligible.",
  "headline": "Nova Scotia Beats for Sale: Atlantic Boom Bap, Soul Chops & Modern Trap",
  "description": "Soulful East Coast hip-hop samples and punchy uncompressed drums for recording vocalists in Halifax and Nova Scotia.",
  "popularGenres": [
    "Nova Scotia Hip-Hop",
    "East Coast Boom Bap",
    "Soulful Trap"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "Halifax Deals Hub",
      "slug": "ca/halifax",
      "description": "Organic boom bap and soulful trap."
    }
  ],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify, Apple Music, and YouTube in Canada \u2013 Nova Scotia & Atlantic Hip-Hop Hub?",
      "answer": "Yes! All WAV and MP3 licenses include full commercial streaming rights across Spotify Canada, Apple Music, YouTube, Tidal, and commercial radio. You retain 100% of your artist master streaming royalties."
    },
    {
      "question": "How do I register my songs with SOCAN and apply for FACTOR / Canada Council music grants?",
      "answer": "When registering your work with SOCAN, list yourself as 100% lyricist/performer and credit Onzieb (Different Type of Vibe) as the music producer/composer per your countersigned PDF license agreement. Our licenses satisfy FACTOR, Canada Council for the Arts, and provincial grant delivery requirements."
    },
    {
      "question": "Which Canadian payment methods are supported?",
      "answer": "You can pay easily in Canadian Dollars (CAD $) via Apple Pay, Google Pay, Interac e-Transfer, Credit/Debit Cards, PayPal, and Stripe."
    },
    {
      "question": "How quickly do I receive my untagged audio files?",
      "answer": "Immediately upon checkout, an untagged studio 24-bit WAV file, MP3 audio version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "ca/surrey-bc": {
  "name": "Canada \u2013 Surrey & Metro Vancouver Trap Hub",
  "flag": "\ud83c\udde8\ud83c\udde6",
  "currency": "CAD ($)",
  "currencyCode": "CAD",
  "gateways": "Apple Pay, Google Pay, Interac e-Transfer, Credit/Debit Cards",
  "pro": "SOCAN",
  "proFullName": "Society of Composers, Authors and Music Publishers of Canada (SOCAN)",
  "proGuide": "100% SOCAN compliant with instant digital download.",
  "headline": "Surrey Beats for Sale: Metro Vancouver Trap, Punjabi-Trap & Melodic Drill",
  "description": "High-energy fusion of modern trap 808s, rhythmic tumbi/flute melodies, and sliding drill basslines for artists in Surrey and Metro Vancouver.",
  "popularGenres": [
    "Surrey Trap",
    "Punjabi-Trap Bounce",
    "Metro Vancouver Drill"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify, Apple Music, and YouTube in Canada \u2013 Surrey & Metro Vancouver Trap Hub?",
      "answer": "Yes! All WAV and MP3 licenses include full commercial streaming rights across Spotify Canada, Apple Music, YouTube, Tidal, and commercial radio. You retain 100% of your artist master streaming royalties."
    },
    {
      "question": "How do I register my songs with SOCAN and apply for FACTOR / Canada Council music grants?",
      "answer": "When registering your work with SOCAN, list yourself as 100% lyricist/performer and credit Onzieb (Different Type of Vibe) as the music producer/composer per your countersigned PDF license agreement. Our licenses satisfy FACTOR, Canada Council for the Arts, and provincial grant delivery requirements."
    },
    {
      "question": "Which Canadian payment methods are supported?",
      "answer": "You can pay easily in Canadian Dollars (CAD $) via Apple Pay, Google Pay, Interac e-Transfer, Credit/Debit Cards, PayPal, and Stripe."
    },
    {
      "question": "How quickly do I receive my untagged audio files?",
      "answer": "Immediately upon checkout, an untagged studio 24-bit WAV file, MP3 audio version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "ca/london-ontario": {
  "name": "Canada \u2013 London & Southwestern Ontario Rap",
  "flag": "\ud83c\udde8\ud83c\udde6",
  "currency": "CAD ($)",
  "currencyCode": "CAD",
  "gateways": "Apple Pay, Google Pay, Interac e-Transfer, Credit/Debit Cards",
  "pro": "SOCAN",
  "proFullName": "Society of Composers, Authors and Music Publishers of Canada (SOCAN)",
  "proGuide": "100% SOCAN compliant for commercial release.",
  "headline": "London Ontario Beats for Sale: Forest City Trap, Melodic Keys & Drill",
  "description": "Dynamic instrumentals featuring clean piano progressions and hard-hitting 808s for recording artists in London, Windsor, and Southwestern Ontario.",
  "popularGenres": [
    "Forest City Trap",
    "Southwestern Ontario Rap",
    "Melodic Keys"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify, Apple Music, and YouTube in Canada \u2013 London & Southwestern Ontario Rap?",
      "answer": "Yes! All WAV and MP3 licenses include full commercial streaming rights across Spotify Canada, Apple Music, YouTube, Tidal, and commercial radio. You retain 100% of your artist master streaming royalties."
    },
    {
      "question": "How do I register my songs with SOCAN and apply for FACTOR / Canada Council music grants?",
      "answer": "When registering your work with SOCAN, list yourself as 100% lyricist/performer and credit Onzieb (Different Type of Vibe) as the music producer/composer per your countersigned PDF license agreement. Our licenses satisfy FACTOR, Canada Council for the Arts, and provincial grant delivery requirements."
    },
    {
      "question": "Which Canadian payment methods are supported?",
      "answer": "You can pay easily in Canadian Dollars (CAD $) via Apple Pay, Google Pay, Interac e-Transfer, Credit/Debit Cards, PayPal, and Stripe."
    },
    {
      "question": "How quickly do I receive my untagged audio files?",
      "answer": "Immediately upon checkout, an untagged studio 24-bit WAV file, MP3 audio version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "au/sydney": {
  "name": "Australia \u2013 Sydney & Western Sydney (2770)",
  "flag": "\ud83c\udde6\ud83c\uddfa",
  "currency": "AUD ($)",
  "currencyCode": "AUD",
  "gateways": "Apple Pay, Google Pay, Cards, Afterpay, Stripe",
  "pro": "APRA AMCOS",
  "proFullName": "Australasian Performing Right Association & Australasian Mechanical Copyright Owners Society (APRA AMCOS)",
  "proGuide": "100% APRA AMCOS compliant for Australian recording artists. Cleared for Triple J Unearthed airplay, festival performances, and international streaming on Spotify & Apple Music.",
  "headline": "Sydney Beats for Sale: Western Sydney Aussie Drill, Sliding 808s & Leases",
  "description": "The capital of Aussie Drill (Mount Druitt, Campbelltown, Western Sydney). Heavy sliding 808s, dark aggressive synths, and raw street bounce inspired by ONEFOUR and HP Boyz. Instant 24-bit WAV & STEM trackouts.",
  "popularGenres": [
    "Aussie Drill",
    "Western Sydney Drill",
    "The Kid LAROI Style",
    "ONEFOUR Bounce"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "Aussie Drill Scene Hub",
      "slug": "../../scene/sydney-aussie-drill-beats",
      "description": "Aggressive sliding 808s and raw Pacific Islander bounce."
    },
    {
      "name": "ONEFOUR Mount Druitt Style",
      "slug": "../../vibe/onefour-mount-druitt-aussie-drill",
      "description": "Heavy syncopated drill with dark cinematic brass."
    },
    {
      "name": "The Kid LAROI Melodic Vibe",
      "slug": "../../vibe/the-kid-laroi-melodic-guitar-trap",
      "description": "Radio-ready acoustic guitars and emotional pop-trap bounce."
    }
  ],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify, Apple Music, and YouTube in Australia \u2013 Sydney & Western Sydney (2770)?",
      "answer": "Yes! All WAV and MP3 licenses include full commercial streaming rights across Spotify, Apple Music, YouTube, Deezer, and commercial radio. You retain 100% of your artist master streaming royalties."
    },
    {
      "question": "How do I register my release with APRA AMCOS and submit to Triple J Unearthed in Australia?",
      "answer": "When registering your work with APRA AMCOS, list yourself as 100% lyricist/performer and credit Onzieb (Different Type of Vibe) as the music producer/composer per your countersigned PDF license agreement. Our licenses are fully cleared for Triple J Unearthed airplay, national radio, and festival performances."
    },
    {
      "question": "Which Australian payment methods are supported?",
      "answer": "You can pay easily in Australian Dollars (AUD $) via Apple Pay, Google Pay, Credit/Debit Cards, Afterpay, PayPal, and Stripe."
    },
    {
      "question": "How quickly do I receive my untagged audio files?",
      "answer": "Immediately upon checkout, an untagged studio 24-bit WAV file, MP3 audio version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "au/melbourne": {
  "name": "Australia \u2013 Melbourne & Victoria Hip-Hop Hub",
  "flag": "\ud83c\udde6\ud83c\uddfa",
  "currency": "AUD ($)",
  "currencyCode": "AUD",
  "gateways": "Apple Pay, Google Pay, Cards, Afterpay",
  "pro": "APRA AMCOS",
  "proFullName": "Australasian Performing Right Association & Australasian Mechanical Copyright Owners Society (APRA AMCOS)",
  "proGuide": "100% APRA AMCOS compliant and Creative Victoria / Triple J Unearthed eligible.",
  "headline": "Melbourne Beats for Sale: Melodic Trap, Underground Boom Bap & Drill",
  "description": "Atmospheric soundscapes, smooth jazz-infused boom bap, and wavy modern trap 808s for recording artists across Melbourne and Victoria.",
  "popularGenres": [
    "Melbourne Melodic Trap",
    "Underground Boom Bap",
    "ChillinIT Style",
    "Victoria Drill"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "Melbourne Scene Hub",
      "slug": "../../scene/melbourne-melodic-trap-beats",
      "description": "Lush Rhodes chords, acoustic guitars and crisp drums."
    },
    {
      "name": "ChillinIT Lyrical Vibe",
      "slug": "../../vibe/chillinit-fast-lyrical-grime-trap",
      "description": "Fast double-time rap flows and punchy trap drums."
    }
  ],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify, Apple Music, and YouTube in Australia \u2013 Melbourne & Victoria Hip-Hop Hub?",
      "answer": "Yes! All WAV and MP3 licenses include full commercial streaming rights across Spotify, Apple Music, YouTube, Deezer, and commercial radio. You retain 100% of your artist master streaming royalties."
    },
    {
      "question": "How do I register my release with APRA AMCOS and submit to Triple J Unearthed in Australia?",
      "answer": "When registering your work with APRA AMCOS, list yourself as 100% lyricist/performer and credit Onzieb (Different Type of Vibe) as the music producer/composer per your countersigned PDF license agreement. Our licenses are fully cleared for Triple J Unearthed airplay, national radio, and festival performances."
    },
    {
      "question": "Which Australian payment methods are supported?",
      "answer": "You can pay easily in Australian Dollars (AUD $) via Apple Pay, Google Pay, Credit/Debit Cards, Afterpay, PayPal, and Stripe."
    },
    {
      "question": "How quickly do I receive my untagged audio files?",
      "answer": "Immediately upon checkout, an untagged studio 24-bit WAV file, MP3 audio version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "au/brisbane": {
  "name": "Australia \u2013 Brisbane & Queensland Rap Scene",
  "flag": "\ud83c\udde6\ud83c\uddfa",
  "currency": "AUD ($)",
  "currencyCode": "AUD",
  "gateways": "Apple Pay, Google Pay, Cards, Afterpay",
  "pro": "APRA AMCOS",
  "proFullName": "Australasian Performing Right Association & Australasian Mechanical Copyright Owners Society (APRA AMCOS)",
  "proGuide": "100% APRA AMCOS compliant with instant digital download.",
  "headline": "Brisbane Beats for Sale: Queensland Club Trap, Energetic Rap & Drill",
  "description": "High-octane club trap beats and energetic party drill rhythms with heavy 808 kicks for recording vocalists in Brisbane and the Gold Coast.",
  "popularGenres": [
    "Queensland Trap",
    "Brisbane Rap",
    "High-Energy Drill"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [
    {
      "name": "Brisbane Scene Hub",
      "slug": "../../scene/brisbane-queensland-trap-beats",
      "description": "Punchy 808 kicks and sun-drenched melodic bounce."
    }
  ],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify, Apple Music, and YouTube in Australia \u2013 Brisbane & Queensland Rap Scene?",
      "answer": "Yes! All WAV and MP3 licenses include full commercial streaming rights across Spotify, Apple Music, YouTube, Deezer, and commercial radio. You retain 100% of your artist master streaming royalties."
    },
    {
      "question": "How do I register my release with APRA AMCOS and submit to Triple J Unearthed in Australia?",
      "answer": "When registering your work with APRA AMCOS, list yourself as 100% lyricist/performer and credit Onzieb (Different Type of Vibe) as the music producer/composer per your countersigned PDF license agreement. Our licenses are fully cleared for Triple J Unearthed airplay, national radio, and festival performances."
    },
    {
      "question": "Which Australian payment methods are supported?",
      "answer": "You can pay easily in Australian Dollars (AUD $) via Apple Pay, Google Pay, Credit/Debit Cards, Afterpay, PayPal, and Stripe."
    },
    {
      "question": "How quickly do I receive my untagged audio files?",
      "answer": "Immediately upon checkout, an untagged studio 24-bit WAV file, MP3 audio version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "au/perth": {
  "name": "Australia \u2013 Perth & Western Australia (WA)",
  "flag": "\ud83c\udde6\ud83c\uddfa",
  "currency": "AUD ($)",
  "currencyCode": "AUD",
  "gateways": "Apple Pay, Google Pay, Cards, Afterpay",
  "pro": "APRA AMCOS",
  "proFullName": "Australasian Performing Right Association & Australasian Mechanical Copyright Owners Society (APRA AMCOS)",
  "proGuide": "100% APRA AMCOS compliant with signed legal PDF contracts.",
  "headline": "Perth Beats for Sale: WA Underground Drill, Electronic Trap & Melodic Rap",
  "description": "Cold, futuristic synth trap, heavy electronic basslines, and syncopated drill percussion for independent artists across Western Australia.",
  "popularGenres": [
    "Perth Drill",
    "WA Electronic Trap",
    "Underground Rap"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify, Apple Music, and YouTube in Australia \u2013 Perth & Western Australia (WA)?",
      "answer": "Yes! All WAV and MP3 licenses include full commercial streaming rights across Spotify, Apple Music, YouTube, Deezer, and commercial radio. You retain 100% of your artist master streaming royalties."
    },
    {
      "question": "How do I register my release with APRA AMCOS and submit to Triple J Unearthed in Australia?",
      "answer": "When registering your work with APRA AMCOS, list yourself as 100% lyricist/performer and credit Onzieb (Different Type of Vibe) as the music producer/composer per your countersigned PDF license agreement. Our licenses are fully cleared for Triple J Unearthed airplay, national radio, and festival performances."
    },
    {
      "question": "Which Australian payment methods are supported?",
      "answer": "You can pay easily in Australian Dollars (AUD $) via Apple Pay, Google Pay, Credit/Debit Cards, Afterpay, PayPal, and Stripe."
    },
    {
      "question": "How quickly do I receive my untagged audio files?",
      "answer": "Immediately upon checkout, an untagged studio 24-bit WAV file, MP3 audio version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "au/adelaide": {
  "name": "Australia \u2013 Adelaide & South Australia Rap",
  "flag": "\ud83c\udde6\ud83c\uddfa",
  "currency": "AUD ($)",
  "currencyCode": "AUD",
  "gateways": "Apple Pay, Google Pay, Cards, Afterpay",
  "pro": "APRA AMCOS",
  "proFullName": "Australasian Performing Right Association & Australasian Mechanical Copyright Owners Society (APRA AMCOS)",
  "proGuide": "100% APRA AMCOS compliant with full commercial streaming rights.",
  "headline": "Adelaide Beats for Sale: South Australian Hip-Hop, Gutter Rap & Trap",
  "description": "Raw street rap drums, dark piano chords, and driving 808 basslines for independent artists in Adelaide and South Australia.",
  "popularGenres": [
    "Adelaide Hip-Hop",
    "South Aussie Rap",
    "Heavy 808s"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify, Apple Music, and YouTube in Australia \u2013 Adelaide & South Australia Rap?",
      "answer": "Yes! All WAV and MP3 licenses include full commercial streaming rights across Spotify, Apple Music, YouTube, Deezer, and commercial radio. You retain 100% of your artist master streaming royalties."
    },
    {
      "question": "How do I register my release with APRA AMCOS and submit to Triple J Unearthed in Australia?",
      "answer": "When registering your work with APRA AMCOS, list yourself as 100% lyricist/performer and credit Onzieb (Different Type of Vibe) as the music producer/composer per your countersigned PDF license agreement. Our licenses are fully cleared for Triple J Unearthed airplay, national radio, and festival performances."
    },
    {
      "question": "Which Australian payment methods are supported?",
      "answer": "You can pay easily in Australian Dollars (AUD $) via Apple Pay, Google Pay, Credit/Debit Cards, Afterpay, PayPal, and Stripe."
    },
    {
      "question": "How quickly do I receive my untagged audio files?",
      "answer": "Immediately upon checkout, an untagged studio 24-bit WAV file, MP3 audio version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "au/gold-coast": {
  "name": "Australia \u2013 Gold Coast Melodic Trap & Club Rap",
  "flag": "\ud83c\udde6\ud83c\uddfa",
  "currency": "AUD ($)",
  "currencyCode": "AUD",
  "gateways": "Apple Pay, Google Pay, Cards, Afterpay",
  "pro": "APRA AMCOS",
  "proFullName": "Australasian Performing Right Association & Australasian Mechanical Copyright Owners Society (APRA AMCOS)",
  "proGuide": "100% APRA AMCOS compliant for Spotify and festival broadcast.",
  "headline": "Gold Coast Beats for Sale: Sun-Drenched Melodic Trap & Party Bounce",
  "description": "Bouncy acoustic guitar melodies, tropical percussion, and energetic 808s for recording vocalists on the Gold Coast.",
  "popularGenres": [
    "Gold Coast Trap",
    "Coastal Melodic Rap",
    "Party Bounce"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify, Apple Music, and YouTube in Australia \u2013 Gold Coast Melodic Trap & Club Rap?",
      "answer": "Yes! All WAV and MP3 licenses include full commercial streaming rights across Spotify, Apple Music, YouTube, Deezer, and commercial radio. You retain 100% of your artist master streaming royalties."
    },
    {
      "question": "How do I register my release with APRA AMCOS and submit to Triple J Unearthed in Australia?",
      "answer": "When registering your work with APRA AMCOS, list yourself as 100% lyricist/performer and credit Onzieb (Different Type of Vibe) as the music producer/composer per your countersigned PDF license agreement. Our licenses are fully cleared for Triple J Unearthed airplay, national radio, and festival performances."
    },
    {
      "question": "Which Australian payment methods are supported?",
      "answer": "You can pay easily in Australian Dollars (AUD $) via Apple Pay, Google Pay, Credit/Debit Cards, Afterpay, PayPal, and Stripe."
    },
    {
      "question": "How quickly do I receive my untagged audio files?",
      "answer": "Immediately upon checkout, an untagged studio 24-bit WAV file, MP3 audio version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "au/canberra": {
  "name": "Australia \u2013 Canberra & ACT Hip-Hop",
  "flag": "\ud83c\udde6\ud83c\uddfa",
  "currency": "AUD ($)",
  "currencyCode": "AUD",
  "gateways": "Apple Pay, Google Pay, Cards, Afterpay",
  "pro": "APRA AMCOS",
  "proFullName": "Australasian Performing Right Association & Australasian Mechanical Copyright Owners Society (APRA AMCOS)",
  "proGuide": "100% APRA AMCOS compliant with instant delivery.",
  "headline": "Canberra Beats for Sale: ACT Indie Hip-Hop, Drill & Melodic Keys",
  "description": "Spacious, reverberant trap beats and clean 808 bounce for artists in Canberra and the Australian Capital Territory.",
  "popularGenres": [
    "ACT Hip-Hop",
    "Canberra Trap",
    "Melodic Keys"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify, Apple Music, and YouTube in Australia \u2013 Canberra & ACT Hip-Hop?",
      "answer": "Yes! All WAV and MP3 licenses include full commercial streaming rights across Spotify, Apple Music, YouTube, Deezer, and commercial radio. You retain 100% of your artist master streaming royalties."
    },
    {
      "question": "How do I register my release with APRA AMCOS and submit to Triple J Unearthed in Australia?",
      "answer": "When registering your work with APRA AMCOS, list yourself as 100% lyricist/performer and credit Onzieb (Different Type of Vibe) as the music producer/composer per your countersigned PDF license agreement. Our licenses are fully cleared for Triple J Unearthed airplay, national radio, and festival performances."
    },
    {
      "question": "Which Australian payment methods are supported?",
      "answer": "You can pay easily in Australian Dollars (AUD $) via Apple Pay, Google Pay, Credit/Debit Cards, Afterpay, PayPal, and Stripe."
    },
    {
      "question": "How quickly do I receive my untagged audio files?",
      "answer": "Immediately upon checkout, an untagged studio 24-bit WAV file, MP3 audio version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "au/newcastle-nsw": {
  "name": "Australia \u2013 Newcastle & Hunter Region (NSW)",
  "flag": "\ud83c\udde6\ud83c\uddfa",
  "currency": "AUD ($)",
  "currencyCode": "AUD",
  "gateways": "Apple Pay, Google Pay, Cards, Afterpay",
  "pro": "APRA AMCOS",
  "proFullName": "Australasian Performing Right Association & Australasian Mechanical Copyright Owners Society (APRA AMCOS)",
  "proGuide": "100% APRA AMCOS compliant with signed legal contracts.",
  "headline": "Newcastle NSW Beats for Sale: Hunter Region Rap, Heavy Drill & Trap",
  "description": "Hard-hitting drill kicks, dark synth arpeggios, and uncompressed 24-bit WAV trackouts for artists across Newcastle and the Hunter.",
  "popularGenres": [
    "Newcastle Drill",
    "Hunter Rap",
    "Heavy Trap"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify, Apple Music, and YouTube in Australia \u2013 Newcastle & Hunter Region (NSW)?",
      "answer": "Yes! All WAV and MP3 licenses include full commercial streaming rights across Spotify, Apple Music, YouTube, Deezer, and commercial radio. You retain 100% of your artist master streaming royalties."
    },
    {
      "question": "How do I register my release with APRA AMCOS and submit to Triple J Unearthed in Australia?",
      "answer": "When registering your work with APRA AMCOS, list yourself as 100% lyricist/performer and credit Onzieb (Different Type of Vibe) as the music producer/composer per your countersigned PDF license agreement. Our licenses are fully cleared for Triple J Unearthed airplay, national radio, and festival performances."
    },
    {
      "question": "Which Australian payment methods are supported?",
      "answer": "You can pay easily in Australian Dollars (AUD $) via Apple Pay, Google Pay, Credit/Debit Cards, Afterpay, PayPal, and Stripe."
    },
    {
      "question": "How quickly do I receive my untagged audio files?",
      "answer": "Immediately upon checkout, an untagged studio 24-bit WAV file, MP3 audio version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "au/geelong": {
  "name": "Australia \u2013 Geelong & Regional Victoria Rap",
  "flag": "\ud83c\udde6\ud83c\uddfa",
  "currency": "AUD ($)",
  "currencyCode": "AUD",
  "gateways": "Apple Pay, Google Pay, Cards, Afterpay",
  "pro": "APRA AMCOS",
  "proFullName": "Australasian Performing Right Association & Australasian Mechanical Copyright Owners Society (APRA AMCOS)",
  "proGuide": "100% APRA AMCOS compliant for commercial streaming.",
  "headline": "Geelong Beats for Sale: Regional Victorian Hip-Hop, Drill & Melodic 808s",
  "description": "Punchy underground hip-hop, soulful boom bap samples, and driving trap 808s for artists across regional Victoria.",
  "popularGenres": [
    "Geelong Hip-Hop",
    "Regional Drill",
    "Melodic 808s"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify, Apple Music, and YouTube in Australia \u2013 Geelong & Regional Victoria Rap?",
      "answer": "Yes! All WAV and MP3 licenses include full commercial streaming rights across Spotify, Apple Music, YouTube, Deezer, and commercial radio. You retain 100% of your artist master streaming royalties."
    },
    {
      "question": "How do I register my release with APRA AMCOS and submit to Triple J Unearthed in Australia?",
      "answer": "When registering your work with APRA AMCOS, list yourself as 100% lyricist/performer and credit Onzieb (Different Type of Vibe) as the music producer/composer per your countersigned PDF license agreement. Our licenses are fully cleared for Triple J Unearthed airplay, national radio, and festival performances."
    },
    {
      "question": "Which Australian payment methods are supported?",
      "answer": "You can pay easily in Australian Dollars (AUD $) via Apple Pay, Google Pay, Credit/Debit Cards, Afterpay, PayPal, and Stripe."
    },
    {
      "question": "How quickly do I receive my untagged audio files?",
      "answer": "Immediately upon checkout, an untagged studio 24-bit WAV file, MP3 audio version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
  "au/hobart": {
  "name": "Australia \u2013 Hobart & Tasmanian Hip-Hop",
  "flag": "\ud83c\udde6\ud83c\uddfa",
  "currency": "AUD ($)",
  "currencyCode": "AUD",
  "gateways": "Apple Pay, Google Pay, Cards, Afterpay",
  "pro": "APRA AMCOS",
  "proFullName": "Australasian Performing Right Association & Australasian Mechanical Copyright Owners Society (APRA AMCOS)",
  "proGuide": "100% APRA AMCOS compliant with instant digital download.",
  "headline": "Hobart Beats for Sale: Tasmanian Underground Boom Bap, Trap & Drill",
  "description": "Atmospheric, introspective hip-hop instrumentals and hard drill slides for recording artists in Hobart and Tasmania.",
  "popularGenres": [
    "Tasmanian Hip-Hop",
    "Hobart Boom Bap",
    "Introspective Trap"
  ],
  "featuredBeatIds": [
    "1",
    "5",
    "7",
    "6",
    "2"
  ],
  "subClusters": [],
  "faqs": [
    {
      "question": "Can I release songs recorded with these beats on Spotify, Apple Music, and YouTube in Australia \u2013 Hobart & Tasmanian Hip-Hop?",
      "answer": "Yes! All WAV and MP3 licenses include full commercial streaming rights across Spotify, Apple Music, YouTube, Deezer, and commercial radio. You retain 100% of your artist master streaming royalties."
    },
    {
      "question": "How do I register my release with APRA AMCOS and submit to Triple J Unearthed in Australia?",
      "answer": "When registering your work with APRA AMCOS, list yourself as 100% lyricist/performer and credit Onzieb (Different Type of Vibe) as the music producer/composer per your countersigned PDF license agreement. Our licenses are fully cleared for Triple J Unearthed airplay, national radio, and festival performances."
    },
    {
      "question": "Which Australian payment methods are supported?",
      "answer": "You can pay easily in Australian Dollars (AUD $) via Apple Pay, Google Pay, Credit/Debit Cards, Afterpay, PayPal, and Stripe."
    },
    {
      "question": "How quickly do I receive my untagged audio files?",
      "answer": "Immediately upon checkout, an untagged studio 24-bit WAV file, MP3 audio version, and countersigned legal license agreement are delivered directly to your email inbox."
    }
  ]
},
};
