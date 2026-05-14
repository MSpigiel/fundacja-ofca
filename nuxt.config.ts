export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
  ],

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'pl' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Fundacja OFCA — wspieramy rozwój współczesnej sztuki cyrkowej w Polsce.' },
        { name: 'theme-color', content: '#9364A3' },
      ],
      link: [
        // Preconnect to Google Fonts for faster font loading
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        // Load fonts via <link> instead of CSS @import (non-render-blocking)
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Antonio:wght@400;500;600;700&family=Lato:wght@300;400;700;900&display=swap',
        },
      ],
    },
  },

  i18n: {
    locales: [
      { code: 'pl', name: 'Polski', file: 'pl.json' },
      { code: 'en', name: 'English', file: 'en.json' },
    ],
    defaultLocale: 'pl',
    lazy: true,
    langDir: '../i18n/',
    strategy: 'prefix_except_default',
  },

  // Optimize production build
  nitro: {
    compressPublicAssets: true,
  },
})
