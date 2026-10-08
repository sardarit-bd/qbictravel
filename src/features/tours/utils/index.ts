/**
 * Tour feature specific utilities (e.g. duration formatting, itinerary calculator)
 */
export function formatTourDuration(days: number): string {
  if (days <= 0) return "";
  if (days === 1) return "1 Day";
  const nights = days - 1;
  return `${days} Days / ${nights} Nights`;
}
