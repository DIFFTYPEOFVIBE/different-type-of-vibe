// Converts seconds (e.g., 195) to ISO 8601 duration format ("PT3M15S")
function formatISO8601Duration(totalSeconds: number): string {
  if (!totalSeconds || isNaN(totalSeconds)) return 'PT0M0S'
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = Math.floor(totalSeconds % 60)
  return `PT${minutes}M${seconds}S`
}