// Rate limit: 5 login attempts per 15 minutes per IP
const loginLimiter = createRateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 5,
})

export default defineEventHandler(async (event) => {
  // Check rate limit before anything else
  checkRateLimit(event, loginLimiter)

  const body = await readBody(event)

  if (!body.password) {
    throw createError({ statusCode: 400, message: 'Password is required' })
  }

  if (!checkAdminPassword(body.password)) {
    throw createError({ statusCode: 401, message: 'Nieprawidłowe hasło' })
  }

  createSession(event)

  return { success: true }
})
