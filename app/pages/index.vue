<template>
  <div>
    <!-- Slider -->
    <ArticleSlider />


    <!-- Separator -->
    <div class="mx-auto mt-12 max-w-xs border-t border-dark/10" />

    <!-- About excerpt -->
    <section class="container mx-auto px-4 py-8">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="mb-8 text-4xl font-bold uppercase">{{ $t('site.title') }}</h2>
        <p class="text-sm leading-relaxed text-dark">
          {{ $t('site.description') }}
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Fundacja OFCA — Współczesna Sztuka Cyrkowa',
  meta: [
    { name: 'description', content: 'Fundacja OFCA wspiera rozwój współczesnej sztuki cyrkowej w Polsce. Organizujemy Festiwal OFCA, warsztaty cyrkowe i prowadzimy Centrum Wspierania Twórczości Cyrkowej.' },
  ],
})
</script>
