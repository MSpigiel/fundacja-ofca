<template>
  <div v-if="pending" class="container mx-auto px-4 py-16 text-dark/40">
    Ładowanie...
  </div>

  <template v-else-if="article">
    <div class="lg:flex lg:items-start">
      <!-- Left: article content (normal flow, scrolls with page) -->
      <div class="px-6 py-10 lg:w-1/2 lg:py-16 lg:pl-28 lg:pr-12">
        <!-- Back link -->
        <NuxtLink
          :to="localePath('/news')"
          class="mb-8 inline-flex items-center gap-1 text-sm text-dark/50 transition-colors hover:text-dark"
        >
          <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Wróć do aktualności
        </NuxtLink>

        <article>
          <header class="mb-8">
            <time
              :datetime="article.createdAt"
              class="mb-3 block text-sm text-dark/40"
            >
              {{ formatDate(article.createdAt) }}
            </time>
            <h1 class="mb-2 text-4xl font-bold uppercase leading-tight">
              {{ article.title }}
            </h1>
            <p v-if="article.subtitle" class="text-lg text-dark/60">
              {{ article.subtitle }}
            </p>
          </header>

          <div
            class="article-content prose prose-lg max-w-none font-body"
            v-html="article.content"
          />
        </article>
      </div>

      <!-- Right: gallery -->
      <PageGallery :images="article.galleryImages" :title="article.title" />
    </div>
  </template>

  <div v-else class="container mx-auto px-4 py-16 text-dark/50">
    Nie znaleziono artykułu.
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const localePath = useLocalePath()
const slug = route.params.slug as string

const { data: article, pending } = useArticle(slug)

useHead({
  title: () => article.value?.title || 'Aktualności',
})
</script>
