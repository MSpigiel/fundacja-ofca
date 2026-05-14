<template>
  <div class="container mx-auto px-4 py-10">
    <div class="mb-8 flex items-center justify-between">
      <h1 class="text-3xl font-bold uppercase">Aktualności — zarządzanie</h1>
      <div class="flex items-center gap-3">
        <NuxtLink
          to="/admin/articles/create"
          class="bg-purple px-5 py-2 font-heading text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-purple/80"
        >
          + Dodaj artykuł
        </NuxtLink>
        <button
          class="px-4 py-2 text-sm text-dark/50 transition-colors hover:text-dark"
          @click="handleLogout"
        >
          Wyloguj
        </button>
      </div>
    </div>

    <div v-if="pending" class="text-dark/40">Ładowanie...</div>

    <div v-else-if="!articles?.length" class="text-dark/50">
      Brak artykułów. Dodaj pierwszy!
    </div>

    <table v-else class="w-full text-left text-sm">
      <thead>
        <tr class="border-b border-dark/10">
          <th class="py-3 pr-4 font-heading text-xs uppercase tracking-wider">Zdjęcie</th>
          <th class="py-3 pr-4 font-heading text-xs uppercase tracking-wider">Tytuł</th>
          <th class="py-3 pr-4 font-heading text-xs uppercase tracking-wider">Data</th>
          <th class="py-3 font-heading text-xs uppercase tracking-wider">Akcje</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="article in articles" :key="article.id" class="border-b border-dark/5">
          <td class="py-3 pr-4">
            <img
              v-if="article.previewImage"
              :src="article.previewImage"
              :alt="article.title"
              class="h-12 w-16 object-cover"
            >
            <div v-else class="flex h-12 w-16 items-center justify-center bg-dark/5 text-xs text-dark/20">—</div>
          </td>
          <td class="py-3 pr-4 font-bold">{{ article.title }}</td>
          <td class="py-3 pr-4 text-dark/50">{{ formatDate(article.createdAt) }}</td>
          <td class="py-3">
            <div class="flex gap-3">
              <NuxtLink
                :to="`/admin/articles/${article.slug}`"
                class="text-purple underline hover:text-purple/70"
              >
                Edytuj
              </NuxtLink>
              <button
                class="text-red-600 underline hover:text-red-500"
                @click="confirmDelete(article)"
              >
                Usuń
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import type { Article } from '~/types/article'

definePageMeta({ middleware: 'admin-auth' })

const router = useRouter()
const { logout } = useAuth()
const { data: articles, pending, refresh } = useArticlesList()

async function handleLogout() {
  await logout()
  router.push('/admin/login')
}

async function confirmDelete(article: Article) {
  if (!confirm(`Czy na pewno chcesz usunąć "${article.title}"?`)) return

  try {
    await $fetch(`/api/articles/${article.slug}`, { method: 'DELETE' })
    await refresh()
  }
  catch (e: any) {
    alert(e.data?.message || 'Błąd usuwania artykułu')
  }
}
</script>
