<template>
  <div class="flex min-h-[60vh] items-center justify-center px-4">
    <div class="w-full max-w-sm">
      <h1 class="mb-8 text-center text-2xl font-bold uppercase">Panel administracyjny</h1>

      <form class="space-y-4" @submit.prevent="handleLogin">
        <div>
          <label for="password" class="mb-1 block text-sm font-bold">Hasło</label>
          <input
            id="password"
            v-model="password"
            type="password"
            required
            autocomplete="current-password"
            class="w-full border border-dark/20 bg-white px-4 py-3 text-dark focus:border-purple focus:outline-none"
            placeholder="Wprowadź hasło"
            :disabled="loading"
          >
        </div>

        <p v-if="error" class="text-sm text-red-600" role="alert">
          {{ error }}
        </p>

        <button
          type="submit"
          :disabled="loading || !password"
          class="w-full bg-purple py-3 font-heading text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-purple/80 disabled:opacity-50"
        >
          {{ loading ? 'Logowanie...' : 'Zaloguj się' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
const { login } = useAuth()

const password = ref('')
const loading = ref(false)
const error = ref('')

async function handleLogin() {
  loading.value = true
  error.value = ''

  const success = await login(password.value)

  if (success) {
    router.push('/admin')
  }
  else {
    error.value = 'Nieprawidłowe hasło'
    password.value = ''
  }

  loading.value = false
}

useHead({ title: 'Logowanie — Admin' })
</script>
