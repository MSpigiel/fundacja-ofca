export default defineNuxtRouteMiddleware(async (to) => {
  // Only protect /admin routes (not the login page itself)
  if (!to.path.startsWith('/admin') || to.path === '/admin/login') {
    return
  }

  const { authenticated, checkAuth } = useAuth()

  // Check session on server/client
  await checkAuth()

  if (!authenticated.value) {
    return navigateTo('/admin/login')
  }
})
