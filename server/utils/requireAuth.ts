import type { H3Event } from 'h3'

/**
 * Throw 401 if the request doesn't have a valid admin session.
 * Call at the top of any protected API route.
 */
export function requireAuth(event: H3Event): void {
  if (!validateSession(event)) {
    throw createError({ statusCode: 401, message: 'Wymagane zalogowanie' })
  }
}
