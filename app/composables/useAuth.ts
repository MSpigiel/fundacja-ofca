export function useAuth() {
  const authenticated = useState('auth', () => false)
  const checking = ref(true)

  async function checkAuth() {
    try {
      const { authenticated: isAuth } = await $fetch<{ authenticated: boolean }>('/api/auth/check')
      authenticated.value = isAuth
    }
    catch {
      authenticated.value = false
    }
    finally {
      checking.value = false
    }
  }

  async function login(password: string): Promise<boolean> {
    try {
      await $fetch('/api/auth/login', {
        method: 'POST',
        body: { password },
      })
      authenticated.value = true
      return true
    }
    catch {
      authenticated.value = false
      return false
    }
  }

  async function logout() {
    try {
      await $fetch('/api/auth/logout', { method: 'POST' })
    }
    catch {
      // ignore
    }
    authenticated.value = false
  }

  return { authenticated, checking, checkAuth, login, logout }
}
