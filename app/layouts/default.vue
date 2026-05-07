<template>
  <div class="flex min-h-screen flex-col bg-cream text-dark">
    <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-dark focus:px-4 focus:py-2 focus:text-cream">
      Skip to content
    </a>
    <SiteHeader />
    <main id="main-content" class="flex-1">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>
