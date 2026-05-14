export default defineEventHandler((event) => {
  return { authenticated: validateSession(event) }
})
