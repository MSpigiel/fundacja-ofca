<template>
  <div v-if="images.length > 0">
    <!-- Single image -->
    <div v-if="images.length === 1" class="overflow-hidden">
      <button
        class="w-full cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
        aria-label="Powiększ zdjęcie"
        @click="openLightbox(0)"
      >
        <img
          :src="images[0].src"
          :alt="images[0].alt || ''"
          class="w-full object-cover"
          loading="lazy"
        >
      </button>
    </div>

    <!-- Grid gallery -->
    <div v-else class="grid grid-cols-2 gap-3 md:grid-cols-3">
      <button
        v-for="(image, index) in images"
        :key="index"
        class="aspect-square cursor-pointer overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
        :aria-label="`Powiększ zdjęcie ${index + 1} z ${images.length}`"
        @click="openLightbox(index)"
      >
        <img
          :src="image.src"
          :alt="image.alt || ''"
          class="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        >
      </button>
    </div>

    <PhotoLightbox
      :images="images"
      :start-index="lightboxIndex"
      :open="lightboxOpen"
      @close="lightboxOpen = false"
    />
  </div>
</template>

<script setup lang="ts">
import type { ArticleImage } from '~/types/article'

defineProps<{
  images: ArticleImage[]
}>()

const lightboxOpen = ref(false)
const lightboxIndex = ref(0)

function openLightbox(index: number) {
  lightboxIndex.value = index
  lightboxOpen.value = true
}
</script>
