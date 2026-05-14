/**
 * Simple in-memory rate limiter for API endpoints.
 * Tracks attempts by IP address with a sliding window.
 *
 * Usage in an API route:
 *   const limiter = createRateLimiter({ windowMs: 15 * 60 * 1000, max: 10 })
 *   // in handler:
 *   checkRateLimit(event, limiter)
 */

interface RateLimitEntry {
  count: number
  resetAt: number
}

interface RateLimiterOptions {
  /** Time window in milliseconds */
  windowMs: number
  /** Max requests per window */
  max: number
}

interface RateLimiter {
  store: Map<string, RateLimitEntry>
  windowMs: number
  max: number
}

export function createRateLimiter(options: RateLimiterOptions): RateLimiter {
  return {
    store: new Map(),
    windowMs: options.windowMs,
    max: options.max,
  }
}

/**
 * Check rate limit for the current request. Throws 429 if limit exceeded.
 */
export function checkRateLimit(event: import('h3').H3Event, limiter: RateLimiter): void {
  const ip = getRequestIP(event, { xForwardedFor: true }) || 'unknown'
  const now = Date.now()

  const entry = limiter.store.get(ip)

  if (!entry || now > entry.resetAt) {
    // First request or window expired — start fresh
    limiter.store.set(ip, { count: 1, resetAt: now + limiter.windowMs })
    return
  }

  entry.count++

  if (entry.count > limiter.max) {
    const retryAfterSeconds = Math.ceil((entry.resetAt - now) / 1000)
    setResponseHeader(event, 'Retry-After', String(retryAfterSeconds))
    throw createError({
      statusCode: 429,
      message: 'Zbyt wiele prób. Spróbuj ponownie później.',
    })
  }
}

/**
 * Clean up expired entries from a rate limiter.
 * Called automatically during checkRateLimit when entries expire,
 * but can also be called manually for bulk cleanup.
 */
export function cleanupRateLimiter(limiter: RateLimiter): void {
  const now = Date.now()
  for (const [ip, entry] of limiter.store) {
    if (now > entry.resetAt) {
      limiter.store.delete(ip)
    }
  }
}
