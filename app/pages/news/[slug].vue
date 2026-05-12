<template>
  <div v-if="pending" class="container mx-auto px-4 py-16 text-dark/40">
    Ładowanie...
  </div>

  <template v-else-if="article">
    <div class="lg:flex lg:items-start">
      <!-- Left: article content (normal flow, scrolls with page) -->
      <div class="px-6 py-10 lg:w-1/2 lg:px-12 lg:py-16">
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
            class="prose prose-lg max-w-none font-body"
            v-html="article.content"
          />
        </article>
      </div>

      <!-- Right: sticky image — sticks while scrolling, stops when it hits its own bottom -->
      <div class="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:flex-col lg:items-center lg:justify-center lg:p-8">
        <!-- Single image -->
        <div v-if="article.galleryImages.length === 1" class="flex items-center justify-center pt-10 lg:pt-0">
          <button
            class="cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
            aria-label="Powiększ zdjęcie"
            @click="openLightbox(0)"
          >
            <img
              :src="article.galleryImages[0].src"
              :alt="article.galleryImages[0].alt || article.title"
              class="max-h-[85vh] max-w-full object-contain"
            >
          </button>
        </div>

        <!-- Multiple images: show first, with gallery thumbnails -->
        <div v-else-if="article.galleryImages.length > 1" class="flex max-h-screen flex-col items-center justify-center pt-10 lg:pt-0">
          <button
            class="min-h-0 flex-1 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
            aria-label="Otwórz galerię"
            @click="openLightbox(0)"
          >
            <img
              :src="article.galleryImages[0].src"
              :alt="article.galleryImages[0].alt || article.title"
              class="h-full max-h-[calc(100vh-10rem)] w-auto max-w-full object-contain"
            >
          </button>
          <div class="mt-3 flex shrink-0 gap-2">
            <button
              v-for="(img, index) in article.galleryImages.slice(0, 4)"
              :key="index"
              class="h-16 w-16 overflow-hidden border-2 border-white shadow-lg transition-transform hover:scale-105"
              :class="{ 'ring-2 ring-purple': index === 0 }"
              :aria-label="`Zdjęcie ${index + 1}`"
              @click="openLightbox(index)"
            >
              <img
                :src="img.src"
                :alt="img.alt || ''"
                class="h-full w-full object-cover"
              >
            </button>
            <button
              v-if="article.galleryImages.length > 4"
              class="flex h-16 w-16 items-center justify-center border-2 border-white bg-dark/70 text-sm font-bold text-white shadow-lg"
              aria-label="Pokaż wszystkie zdjęcia"
              @click="openLightbox(4)"
            >
              +{{ article.galleryImages.length - 4 }}
            </button>
          </div>
        </div>

        <PhotoLightbox
          :images="article.galleryImages"
          :start-index="lightboxIndex"
          :open="lightboxOpen"
          @close="lightboxOpen = false"
        />
      </div>
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

const lightboxOpen = ref(false)
const lightboxIndex = ref(0)

function openLightbox(index: number) {
  lightboxIndex.value = index
  lightboxOpen.value = true
}

useHead({
  title: () => article.value?.title || 'Aktualności',
})
</script>
