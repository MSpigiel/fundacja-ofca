<template>
  <div class="px-6 py-16 lg:px-[5vw] xl:px-28">
    <h1 class="mb-10 text-4xl font-bold uppercase">{{ $t('nav.news') }}</h1>

    <div v-if="pending" class="text-dark/40">
      Ładowanie...
    </div>

    <div v-else-if="!articles?.length" class="text-dark/50">
      Brak aktualności.
    </div>

    <div v-else class="grid gap-6 sm:grid-cols-3 lg:grid-cols-4">
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
