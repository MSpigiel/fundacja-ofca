<template>
  <div class="pb-10 lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:flex-col lg:items-center lg:justify-center lg:overflow-hidden lg:p-8 lg:pb-24 lg:pt-[10.5rem]">
    <!-- Single image -->
    <div v-if="images.length === 1" class="flex min-h-0 flex-1 items-center justify-center pt-10 lg:pt-0">
      <button
        class="min-h-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
        :aria-label="`Powiększ zdjęcie: ${title}`"
        @click="openLightbox(0)"
      >
        <img
          :src="images[0].src"
          :alt="images[0].alt || title"
          class="max-h-full max-w-full object-contain"
        >
      </button>
    </div>

    <!-- Multiple images: show first, with gallery thumbnails -->
    <div v-else-if="images.length > 1" class="flex min-h-0 flex-1 flex-col items-center justify-center pt-10 lg:pt-0">
      <button
        class="min-h-0 flex-1 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
        aria-label="Otwórz galerię"
        @click="openLightbox(0)"
      >
        <img
          :src="images[0].src"
          :alt="images[0].alt || title"
          class="max-h-full w-auto max-w-full object-contain"
        >
      </button>
      <div class="mt-3 flex shrink-0 gap-2">
        <button
          v-for="(img, index) in images.slice(0, 4)"
          :key="index"
          class="h-16 w-16 overflow-hidden border-2 border-white shadow-lg transition-transform hover:scale-105"
          :class="{ 'ring-2 ring-purple': index === 0 }"
          :aria-label="`Zdjęcie ${index + 1}`"
          @click="openLightbox(index)"
        >
          <img
            :src="img.src"
            :alt="img.alt || ''"
            loading="lazy"
            class="h-full w-full object-cover"
          >
        </button>
        <button
          v-if="images.length > 4"
          class="flex h-16 w-16 items-center justify-center border-2 border-white bg-dark/70 text-sm font-bold text-white shadow-lg"
          aria-label="Pokaż wszystkie zdjęcia"
          @click="openLightbox(4)"
        >
          +{{ images.length - 4 }}
        </button>
      </div>
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
defineProps<{
  images: { src: string; alt?: string }[]
  title: string
}>()

const lightboxOpen = ref(false)
const lightboxIndex = ref(0)

function openLightbox(index: number) {
  lightboxIndex.value = index
  lightboxOpen.value = true
}
</script>
