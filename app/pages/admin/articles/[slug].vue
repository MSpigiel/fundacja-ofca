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

    <h1 class="mb-8 text-3xl font-bold uppercase">Edytuj artykuł</h1>

    <div v-if="pending" class="text-dark/40">Ładowanie...</div>

    <div v-else-if="article" class="max-w-2xl">
      <AdminArticleForm :article="article" @saved="onSaved" />
    </div>

    <div v-else class="text-dark/50">Nie znaleziono artykułu.</div>
  </div>
</template>

<script setup lang="ts">
import type { Article } from '~/types/article'

definePageMeta({ middleware: 'admin-auth' })

const route = useRoute()
const router = useRouter()
const { logout } = useAuth()
const slug = route.params.slug as string

const { data: article, pending } = useArticle(slug)

function onSaved(_article: Article) {
  router.push('/admin')
}

async function handleLogout() {
  await logout()
  router.push('/admin/login')
}
</script>
