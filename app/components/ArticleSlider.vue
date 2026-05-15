<template>
  <div
    v-if="articles?.length"
    class="relative mt-12 xl:mx-auto xl:max-w-[1400px]"
    @mouseenter="paused = true"
    @mouseleave="paused = false"
    @focusin="paused = true"
    @focusout="paused = false"
    @touchstart.passive="onTouchStart"
    @touchend.passive="onTouchEnd"
  >
    <!-- Arrows outside slider, no background -->
    <button
      v-if="articles.length > 1"
      class="absolute -left-6 top-1/2 z-10 hidden -translate-y-1/2 p-2 text-dark transition-colors hover:text-dark/60 lg:block"
      aria-label="Poprzedni slajd"
      @click="prev"
    >
      <svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    <button
      v-if="articles.length > 1"
      class="absolute -right-6 top-1/2 z-10 hidden -translate-y-1/2 p-2 text-dark transition-colors hover:text-dark/60 lg:block"
      aria-label="Następny slajd"
      @click="next"
    >
      <svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7" />
      </svg>
    </button>

    <!-- Slider content -->
    <section
      class="mx-4 overflow-hidden lg:mx-10"
      role="region"
      aria-roledescription="carousel"
      aria-label="Najnowsze aktualności"
    >
      <!-- Slides -->
      <div class="relative h-auto lg:h-[28rem]" aria-live="polite" aria-atomic="true">
        <TransitionGroup
          enter-active-class="transition duration-500 ease-out"
          enter-from-class="opacity-0 translate-x-8"
          enter-to-class="opacity-100 translate-x-0"
          leave-active-class="transition duration-300 ease-in absolute inset-0"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <NuxtLink
            v-for="(article, index) in articles"
            v-show="index === current"
            :key="article.id"
            :to="localePath(`/news/${article.slug}`)"
            class="flex h-full w-full flex-col lg:flex-row focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
            :aria-label="`${article.title} — czytaj więcej`"
            role="group"
            :aria-roledescription="'slide'"
            :aria-label-suffix="` (${index + 1} z ${articles.length})`"
          >
            <!-- Image — always square, image fills and crops to fit -->
            <div class="relative w-full pb-[100%] lg:pb-0 lg:h-full lg:w-auto lg:shrink-0 lg:aspect-square">
              <img
                v-if="article.previewImage"
                :src="article.previewImage"
                :alt="article.title"
                class="absolute inset-0 h-full w-full object-cover lg:relative"
                :loading="index === 0 ? 'eager' : 'lazy'"
              >
              <div v-else class="absolute inset-0 flex h-full items-center justify-center bg-dark/5 lg:relative">
                <span class="font-heading text-sm uppercase text-dark/20">Brak zdjęcia</span>
              </div>
            </div>

            <!-- Text -->
            <div class="flex min-w-0 flex-1 flex-col justify-center px-6 py-6 lg:px-16 lg:py-0">
              <h3 class="mb-2 text-2xl font-bold uppercase leading-tight lg:mb-3 lg:text-4xl">
                {{ article.title }}
              </h3>
              <p v-if="article.subtitle" class="text-base text-dark/60 lg:text-lg">
                {{ article.subtitle }}
              </p>
            </div>
          </NuxtLink>
        </TransitionGroup>
      </div>

      <!-- Dots -->
      <div v-if="articles.length > 1" class="flex justify-center gap-2 pt-4 lg:absolute lg:bottom-4 lg:left-1/2 lg:z-10 lg:-translate-x-1/2 lg:pt-0">
        <button
          v-for="(_, index) in articles"
          :key="index"
          class="h-2.5 w-2.5 rounded-full transition-colors"
          :class="index === current ? 'bg-dark' : 'bg-dark/20'"
          :aria-label="`Slajd ${index + 1}`"
          :aria-current="index === current ? 'true' : undefined"
          @click="current = index"
        />
      </div>
    </section>
  </div>

  <!-- Empty state -->
  <section v-else class="flex h-80 items-center justify-center bg-dark/5">
    <p class="font-heading text-xl uppercase tracking-wider text-dark/30">
      Brak aktualności
    </p>
  </section>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const { data: articles } = useLatestArticles(5)

const current = ref(0)
const paused = ref(false)

let interval: ReturnType<typeof setInterval> | null = null

function next() {
  if (!articles.value?.length) return
  current.value = (current.value + 1) % articles.value.length
}

function prev() {
  if (!articles.value?.length) return
  current.value = current.value > 0
    ? current.value - 1
    : articles.value.length - 1
}

function startAutoAdvance() {
  stopAutoAdvance()
  interval = setInterval(() => {
    if (!paused.value) next()
  }, 6000)
}

function stopAutoAdvance() {
  if (interval) {
    clearInterval(interval)
    interval = null
  }
}

// Swipe support for mobile
let touchStartX = 0
function onTouchStart(e: TouchEvent) {
  touchStartX = e.touches[0].clientX
}
function onTouchEnd(e: TouchEvent) {
  const diff = touchStartX - e.changedTouches[0].clientX
  if (Math.abs(diff) > 50) {
    if (diff > 0) next()
    else prev()
  }
}

onMounted(() => startAutoAdvance())
onUnmounted(() => stopAutoAdvance())
</script>
