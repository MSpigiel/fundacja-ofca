/**
 * Format a date string to Polish locale (e.g. "12 maja 2026")
 */
export function formatDate(dateStr: string, options?: Intl.DateTimeFormatOptions): string {
  return new Date(dateStr).toLocaleDateString('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    ...options,
  })
}
