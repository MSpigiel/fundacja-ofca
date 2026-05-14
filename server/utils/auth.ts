import { createHmac, randomBytes } from 'node:crypto'
import type { H3Event } from 'h3'

const SESSION_COOKIE = 'admin_session'
const SESSION_MAX_AGE = 60 * 60 * 24 * 7 // 7 days in seconds

/**
 * Hash a password with a salt using HMAC-SHA256.
 * Format: salt:hash
 */
export function hashPassword(password: string): string {
  const salt = randomBytes(16).toString('hex')
  const hash = createHmac('sha256', salt).update(password).digest('hex')
  return `${salt}:${hash}`
}

/**
 * Verify a password against a stored hash (salt:hash format).
 */
export function verifyPassword(password: string, storedHash: string): boolean {
  const [salt, hash] = storedHash.split(':')
  if (!salt || !hash) return false
  const computed = createHmac('sha256', salt).update(password).digest('hex')
  return computed === hash
}

/**
 * Generate a random session token.
 */
export function generateSessionToken(): string {
  return randomBytes(32).toString('hex')
}

/**
 * Get the admin password hash from env.
 * If ADMIN_PASSWORD_HASH is not set, falls back to hashing ADMIN_PASSWORD on the fly.
 */
function getAdminPasswordHash(): string | null {
  if (process.env.ADMIN_PASSWORD_HASH) {
    return process.env.ADMIN_PASSWORD_HASH
  }
  // Fallback: if raw password is set (dev convenience), hash it
  if (process.env.ADMIN_PASSWORD) {
    return hashPassword(process.env.ADMIN_PASSWORD)
  }
  return null
}

/**
 * Check if a password matches the admin password.
 */
export function checkAdminPassword(password: string): boolean {
  const storedHash = process.env.ADMIN_PASSWORD_HASH
  if (storedHash) {
    return verifyPassword(password, storedHash)
  }
  // Dev fallback: plain text comparison
  const plainPassword = process.env.ADMIN_PASSWORD
  if (plainPassword) {
    return password === plainPassword
  }
  return false
}

// Simple in-memory session store (resets on server restart, which is fine for a small site)
const sessions = new Map<string, { createdAt: number }>()

export function createSession(event: H3Event): string {
  const token = generateSessionToken()
  sessions.set(token, { createdAt: Date.now() })

  setCookie(event, SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: SESSION_MAX_AGE,
  })

  return token
}

export function validateSession(event: H3Event): boolean {
  const token = getCookie(event, SESSION_COOKIE)
  if (!token) return false

  const session = sessions.get(token)
  if (!session) return false

  // Check expiry
  const age = (Date.now() - session.createdAt) / 1000
  if (age > SESSION_MAX_AGE) {
    sessions.delete(token)
    return false
  }

  return true
}

export function destroySession(event: H3Event): void {
  const token = getCookie(event, SESSION_COOKIE)
  if (token) {
    sessions.delete(token)
  }
  deleteCookie(event, SESSION_COOKIE, { path: '/' })
}
