<template>
  <div class="flex gap-3 text-sm text-stone-400">
    <NuxtLink
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
      class="transition-colors hover:text-stone-700"
      :class="{ 'font-medium text-stone-700': locale.code === currentLocale }"
    >
      {{ locale.name }}
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
