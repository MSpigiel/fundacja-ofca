<template>
  <div class="flex min-h-screen flex-col items-center justify-center px-6">
    <div class="max-w-lg text-center">
      <h1 class="mb-4 text-5xl font-light tracking-tight text-stone-900">
        {{ $t('site.title') }}
      </h1>

      <div class="mx-auto mb-8 h-px w-16 bg-stone-300" />

      <p class="mb-2 text-lg font-medium uppercase tracking-widest text-stone-500">
        {{ $t('site.subtitle') }}
      </p>

      <p class="mb-8 text-stone-600">
        {{ $t('site.comingSoon') }}
      </p>

      <p class="text-sm text-stone-400">
        {{ $t('site.stayTuned') }}
      </p>
    </div>

    <div class="absolute bottom-6">
      <LangSwitcher />
    </div>
  </div>
</template>
