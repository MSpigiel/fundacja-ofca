<template>
  <div>
    <!-- Slider -->
    <ArticleSlider />

    <!-- About excerpt -->
    <section class="container mx-auto px-4 py-16">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="mb-6 text-4xl font-bold uppercase">{{ $t('site.title') }}</h2>
        <p class="text-lg leading-relaxed text-dark/70">
          {{ $t('site.description') }}
        </p>
      </div>
    </section>
  </div>
</template>
