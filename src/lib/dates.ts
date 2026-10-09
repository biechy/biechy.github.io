const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** "09/2025" -> "Sep 2025" */
export function formatMonth(value: string): string {
  const [month, year] = value.split("/");
  return `${MONTHS[Number(month) - 1] ?? month} ${year}`;
}

/** "2024", null -> "2024 - now", identical years collapse to one. */
export function formatRange(start: string | number, end?: string | number | null): string {
  if (end === undefined || end === null) return `${start} - now`;
  return String(start) === String(end) ? String(start) : `${start} - ${end}`;
}
