<template>
  <div class="container mx-auto px-4 py-10">
    <div class="mb-6 flex items-center justify-between">
      <NuxtLink to="/admin" class="inline-flex items-center gap-1 text-sm text-dark/50 hover:text-dark">
        <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        Wróć do listy
      </NuxtLink>
      <button
        class="text-sm text-dark/50 transition-colors hover:text-dark"
        @click="handleLogout"
      >
        Wyloguj
      </button>
    </div>

    <h1 class="mb-8 text-3xl font-bold uppercase">Nowy artykuł</h1>

    <div class="max-w-2xl">
      <AdminArticleForm @saved="onSaved" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Article } from '~/types/article'

definePageMeta({ middleware: 'admin-auth' })

const router = useRouter()
const { logout } = useAuth()

function onSaved(_article: Article) {
  router.push('/admin')
}

async function handleLogout() {
  await logout()
  router.push('/admin/login')
}
</script>
