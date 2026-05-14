export default defineEventHandler(async (event) => {
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
