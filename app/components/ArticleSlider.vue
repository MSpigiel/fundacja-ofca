<template>
  <section
    v-if="articles?.length"
    class="relative mx-6 my-8 overflow-hidden lg:mx-12 lg:my-12"
    role="region"
    aria-roledescription="carousel"
    aria-label="Najnowsze aktualności"
    @mouseenter="paused = true"
    @mouseleave="paused = false"
    @focusin="paused = true"
    @focusout="paused = false"
  >
    <!-- Slides -->
    <div class="relative h-[28rem]">
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
          class="flex h-full w-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
          :aria-label="`${article.title} — czytaj więcej`"
          role="group"
          :aria-roledescription="'slide'"
          :aria-label-suffix="` (${index + 1} z ${articles.length})`"
        >
          <!-- Image half -->
          <div class="aspect-square shrink-0">
            <img
              v-if="article.previewImage"
              :src="article.previewImage"
              :alt="article.title"
              class="h-full w-full object-cover"
              :loading="index === 0 ? 'eager' : 'lazy'"
            >
            <div v-else class="flex h-full items-center justify-center bg-dark/5">
              <span class="font-heading text-sm uppercase text-dark/20">Brak zdjęcia</span>
            </div>
          </div>

          <!-- Text half -->
          <div class="flex min-w-0 flex-1 flex-col justify-center px-10 lg:px-16">
            <h3 class="mb-3 text-3xl font-bold uppercase leading-tight lg:text-4xl">
              {{ article.title }}
            </h3>
            <p v-if="article.subtitle" class="text-lg text-dark/60">
              {{ article.subtitle }}
            </p>
          </div>
        </NuxtLink>
      </TransitionGroup>
    </div>

    <!-- Navigation arrows -->
    <button
      v-if="articles.length > 1"
      class="absolute left-4 top-1/2 z-10 -translate-y-1/2 bg-white/80 p-2 transition-colors hover:bg-white"
      aria-label="Poprzedni slajd"
      @click="prev"
    >
      <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    <button
      v-if="articles.length > 1"
      class="absolute right-4 top-1/2 z-10 -translate-y-1/2 bg-white/80 p-2 transition-colors hover:bg-white"
      aria-label="Następny slajd"
      @click="next"
    >
      <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>

    <!-- Dots -->
    <div v-if="articles.length > 1" class="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
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

onMounted(() => startAutoAdvance())
onUnmounted(() => stopAutoAdvance())
</script>
