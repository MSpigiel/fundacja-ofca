<template>
  <NuxtLink
    :to="localePath(`/news/${article.slug}`)"
    class="group block overflow-hidden bg-white transition-shadow hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
  >
    <div class="flex aspect-[16/10] items-center justify-center overflow-hidden bg-dark/5">
      <img
        v-if="article.previewImage"
        :src="article.previewImage"
        :alt="article.title"
        class="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      >
      <div v-else class="flex h-full items-center justify-center bg-dark/5">
        <span class="font-heading text-sm uppercase text-dark/20">Brak zdjęcia</span>
      </div>
    </div>
    <div class="p-5">
      <time
        :datetime="article.createdAt"
        class="mb-2 block text-xs text-dark/40"
      >
        {{ formatDate(article.createdAt) }}
      </time>
      <h3 class="mb-1 font-heading text-lg font-bold uppercase leading-tight">
        {{ article.title }}
      </h3>
      <p v-if="article.subtitle" class="text-sm text-dark/60">
        {{ article.subtitle }}
      </p>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Article } from '~/types/article'

defineProps<{
  article: Article
}>()

const localePath = useLocalePath()
</script>
