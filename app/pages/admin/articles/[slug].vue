<template>
  <div class="container mx-auto px-4 py-10">
    <div class="mb-6 bg-orange/20 px-4 py-2 text-sm text-dark/70">
      Panel administracyjny (wersja deweloperska — bez autoryzacji)
    </div>

    <NuxtLink to="/admin" class="mb-6 inline-flex items-center gap-1 text-sm text-dark/50 hover:text-dark">
      <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
      Wróć do listy
    </NuxtLink>

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

const route = useRoute()
const router = useRouter()
const slug = route.params.slug as string

const { data: article, pending } = useArticle(slug)

function onSaved(_article: Article) {
  router.push('/admin')
}
</script>
