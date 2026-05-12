<template>
  <div class="container mx-auto px-4 py-16">
    <h1 class="mb-10 text-4xl font-bold uppercase">{{ $t('nav.news') }}</h1>

    <div v-if="pending" class="text-dark/40">
      Ładowanie...
    </div>

    <div v-else-if="!articles?.length" class="text-dark/50">
      Brak aktualności.
    </div>

    <div v-else class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <ArticleCard
        v-for="article in articles"
        :key="article.id"
        :article="article"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: articles, pending } = useArticlesList()

useHead({ title: 'Aktualności' })
</script>
