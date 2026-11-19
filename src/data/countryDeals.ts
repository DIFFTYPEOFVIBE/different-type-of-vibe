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
};
