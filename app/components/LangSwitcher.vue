<template>
  <div class="flex gap-2 text-sm">
    <NuxtLink
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
      class="font-heading uppercase tracking-wider transition-colors hover:text-dark/60"
      :class="locale.code === currentLocale ? 'font-bold text-dark' : 'text-dark/40'"
      :aria-label="`Switch to ${locale.name}`"
      :aria-current="locale.code === currentLocale ? 'true' : undefined"
    >
      {{ locale.code }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { locale: currentLocale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() =>
  locales.value.filter((l): l is { code: string; name: string } => typeof l !== 'string')
)
</script>
