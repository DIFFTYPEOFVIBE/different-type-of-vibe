const UPPERCASE_WORDS = new Set([
  'ascap', 'bmi', 'sesac', 'prs', 'ppl', 'gema', 'gvl', 'sacem', 'siae', 'sgae',
  'socan', 'cmrra', 'samro', 'capasso', 'sampra', 'coson', 'mcsn', 'ghamro',
  'buma', 'stemra', 'sabam', 'suisa', 'stim', 'sami', 'koda', 'tono', 'gramo',
  'akm', 'imro', 'ppi', 'apra', 'amcos', 'ppca', 'isrc', 'iswc', 'ipi', 'epk',
  'mp3', 'wav', 'stems', 'daw', 'vst', 'eq', 'fl', 'uk', 'us', 'eu', 'ny', 'la',
  'cad', 'usd', 'eur', 'gbp', 'zar', 'ghs', 'chf', 'sek', 'nok', 'dkk', 'aud',
  'sars', 'hmrc', 'cra', 'irs', 'cac', 'cipc', 'kvk', 'cro', 'cvr', 'tv', 'fm',
]);

export function formatBlogTitle(slug: string): string {
  return slug
    .split('-')
    .map((word, index) => {
      const lower = word.toLowerCase();
      if (lower === 'rnb') return 'R&B';
      if (lower === 'a' && index > 0) return 'a';
      if (UPPERCASE_WORDS.has(lower)) return lower.toUpperCase();
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ')
    .replace(/\bA And Rs\b/gi, 'A&Rs')
    .replace(/\b808S\b/gi, '808s');
}

export function resolveGuideCategory(slug: string) {
  const s = slug.toLowerCase();
  const title = formatBlogTitle(slug);

  if (/(royalt|register|ascap|bmi|prs|gema|sacem|socan|samro|buma|suisa|stim|koda|tono|akm|imro|apra|siae|sgae|split|copyright|clear-samples|publishing)/i.test(s)) {
    return {
      category: 'Music Publishing & Royalty Clearance',
      section1Title: '1. Preparing Your Beat License & Split Sheet Documentation',
      section1Body: `Before completing the steps for ${title}, make sure your instrumental lease agreement is documented. Licensing an untagged WAV or Trackout Stems beat from Different Type of Vibe provides an instant PDF license detailing stream caps and the 50/50 writer/publishing split with Onzieb (ASCAP).`,
      section2Title: '2. Registering Work Metadata, ISRC & ISWC Identifiers',
      section2Body: `Enter exact writer IPI/CAE numbers, match the song title across your distributor (DistroKid, TuneCore, UnitedMasters, or CD Baby) and your PRO, and keep your ISRC code linked to the master recording so performance and mechanical royalties flow cleanly.`,
      section3Title: '3. Avoiding Automated Content ID Conflicts on Leased Instrumentals',
      section3Body: `When releasing a song recorded over a non-exclusive beat lease, never opt into automated YouTube Content ID or audio fingerprinting locks. Register your composition directly with your collection society and distributor for Spotify, Apple Music, radio, and live royalties.`,
      faq1Q: `Do I need a WAV or Stems license before handling ${title}?`,
      faq1A: `Yes. Free tagged demo beats are for writing only. An active MP3 Lease ($29.99), WAV Lease ($49.99), Stems License ($149.99), or $9.99/mo VIP Pass grants commercial distribution rights.`,
      faq2Q: `How are publishing splits structured on Different Type of Vibe beats?`,
      faq2A: `Non-exclusive licenses use a transparent 50% Writer / 50% Producer split (Onzieb / ASCAP) so independent artists can register their songs globally.`,
    };
  }

  if (/(mix|master|808|vocal|monitor|microphone|interface|plugin|vst|fl-studio|logic-pro|cubase|studio|drum|sidechain|autotune|stems)/i.test(s)) {
    return {
      category: 'Studio Engineering, Mixing & Production',
      section1Title: '1. Gain Staging & Headroom Preparation in Your DAW',
      section1Body: `Mastering ${title} starts with proper gain staging. When importing an untagged 24-bit WAV instrumental or Trackout Stems into FL Studio, Logic Pro, Ableton Live, or Pro Tools, leave -6dB of peak headroom before your master bus limiter so vocals and low-end transients stay punchy.`,
      section2Title: '2. Carving Frequency Pockets for Lead Vocals & Low-End Translation',
      section2Body: `Separate the sub-bass (20Hz–60Hz), kick punch (65Hz–110Hz), and vocal presence (1.5kHz–4.5kHz). Using individual WAV Trackout Stems ($149.99 or Pro Creator Pass) lets your engineer duck competing midrange instruments by 1.5dB–3dB dynamically when vocals enter.`,
      section3Title: '3. Loudness Target Standards for Spotify, Apple Music & Club Systems',
      section3Body: `Check your final master across studio monitors, headphones, and mono phone speakers. Aim for -9 to -11 LUFS integrated with a -1.0 dBTP true-peak ceiling so streaming normalization preserves your drum transient snap.`,
      faq1Q: `Why do audio engineers prefer 24-bit WAV and Trackout Stems over MP3 files?`,
      faq1A: `Uncompressed 24-bit WAV files and separated Trackout Stems preserve full studio dynamic range and stereo depth for vocal mixing and mastering.`,
      faq2Q: `Are Onzieb beats pre-mixed with vocal headroom?`,
      faq2A: `Yes. Every instrumental in the Different Type of Vibe catalog is mixed with midrange vocal pockets and balanced low-end for effortless recording.`,
    };
  }

  return {
    category: 'Artist Marketing, Playlist Pitching & Distribution',
    section1Title: '1. Delivering Broadcast-Ready Audio & Complete Metadata',
    section1Body: `Curators, radio programmers, and editorial teams evaluating submissions for ${title} filter out tracks with vocal tags or missing paperwork. Record over an untagged 24-bit WAV or Stems mix and embed complete ISRC, artist, and producer ("Prod. by Onzieb") metadata prior to pitching.`,
    section2Title: '2. Structuring Your Pitch Timeline & Editorial Submission Window',
    section2Body: `Upload your release to your distributor at least 21 to 28 days before release date to pitch via Spotify for Artists, Apple Music for Artists, regional radio portals, and music blogs while building momentum on TikTok, Reels, and YouTube Shorts.`,
    section3Title: '3. Building Consistent Release Velocity Without Breaking Your Budget',
    section3Body: `Streaming algorithms reward artists who release high-quality singles every 3 to 4 weeks. With the $9.99/mo VIP Beat Pass, you receive 5 untagged commercial WAV beat leases monthly so you always have studio-ready instrumentals queued.`,
    faq1Q: `Can I submit songs made with leased beats to Spotify editorial playlists and radio?`,
    faq1A: `Yes. Our WAV Leases, Stems Licenses, and VIP Artist Passes include commercial streaming and radio distribution clearance.`,
    faq2Q: `How can I lower my cost per release when dropping music monthly?`,
    faq2A: `Join the $9.99/mo VIP Beat Pass for 5 WAV leases per month or use our automatic Buy 2 Get 1 Free bulk cart discount.`,
  };
}

