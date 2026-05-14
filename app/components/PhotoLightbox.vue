<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="open"
        ref="dialogEl"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
        role="dialog"
        aria-modal="true"
        :aria-label="`Zdjęcie ${currentIndex + 1} z ${images.length}`"
        tabindex="-1"
        @keydown.escape="$emit('close')"
        @keydown.left="prev"
        @keydown.right="next"
        @click.self="$emit('close')"
      >
        <!-- Close button -->
        <button
          ref="closeBtn"
          class="absolute right-4 top-4 z-10 p-2 text-white/70 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-label="Zamknij galerię"
          @click="$emit('close')"
        >
          <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Previous button -->
        <button
          v-if="images.length > 1"
          class="absolute left-4 z-10 p-2 text-white/70 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-label="Poprzednie zdjęcie"
          @click="prev"
        >
          <svg class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <!-- Image -->
        <img
          :src="images[currentIndex]?.src"
          :alt="images[currentIndex]?.alt || `Zdjęcie ${currentIndex + 1}`"
          class="max-h-[90vh] max-w-[90vw] object-contain"
        >

        <!-- Next button -->
        <button
          v-if="images.length > 1"
          class="absolute right-4 z-10 p-2 text-white/70 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-label="Następne zdjęcie"
          @click="next"
        >
          <svg class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <!-- Counter -->
        <div
          v-if="images.length > 1"
          class="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/60"
          aria-live="polite"
        >
          {{ currentIndex + 1 }} / {{ images.length }}
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import type { ArticleImage } from '~/types/article'

const props = defineProps<{
  images: ArticleImage[]
  startIndex?: number
  open: boolean
}>()

defineEmits<{
  close: []
}>()

const currentIndex = ref(props.startIndex ?? 0)
const closeBtn = ref<HTMLButtonElement | null>(null)
const dialogEl = ref<HTMLElement | null>(null)

watch(() => props.startIndex, (val) => {
  currentIndex.value = val ?? 0
})

// Focus management + body scroll lock
watch(() => props.open, (val) => {
  if (val) {
    nextTick(() => closeBtn.value?.focus())
    document.body.style.overflow = 'hidden'
  }
  else {
    document.body.style.overflow = ''
  }
})

// Clean up scroll lock on unmount
onUnmounted(() => {
  document.body.style.overflow = ''
})

function prev() {
  currentIndex.value = currentIndex.value > 0
    ? currentIndex.value - 1
    : props.images.length - 1
}

function next() {
  currentIndex.value = currentIndex.value < props.images.length - 1
    ? currentIndex.value + 1
    : 0
}
</script>
