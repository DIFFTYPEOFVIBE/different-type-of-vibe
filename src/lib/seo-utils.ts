// Sanitize raw metadata into clean, keyword-optimized strings
export function formatBeatTitle(title: string): string {
  return title
    .replace(/[-_]/g, ' ') // Replace underscores/dashes with spaces
    .replace(/\b\d+\s*bpm\b/gi, '') // Remove redundant "140bpm" text if present in raw title
    .replace(/\s+/g, ' ')
    .trim();
}

export function buildSeoTitle(title: string, artists: string[], bpm: number, genre: string): string {
  const cleanTitle = formatBeatTitle(title);
  const artistFormatted = artists.length > 0 ? `${artists.join(' x ')} Type Beat` : 'Type Beat';
  
  // Clean Output: "Homeward Bound | Drake x Future Type Beat | Hard Trap Instrumental (140 BPM)"
  return `${cleanTitle} | ${artistFormatted} | ${genre} Instrumental (${bpm} BPM)`;
}