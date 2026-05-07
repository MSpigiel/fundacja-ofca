<template>
  <footer class="border-t border-dark/10 bg-cream">
    <div class="container mx-auto px-4 py-12">
      <div class="grid gap-10 md:grid-cols-3">
        <!-- Site map -->
        <div>
          <h3 class="mb-4 font-heading text-lg font-bold uppercase">
            {{ $t('footer.siteMap') }}
          </h3>
          <nav aria-label="Footer navigation" class="flex flex-col gap-2 text-sm">
            <NuxtLink :to="localePath('/about')" class="hover:text-dark/70 transition-colors">
              {{ $t('nav.about') }}
            </NuxtLink>
            <NuxtLink :to="localePath('/projects/festival')" class="hover:text-dark/70 transition-colors">
              {{ $t('projects.festival') }}
            </NuxtLink>
            <NuxtLink :to="localePath('/projects/workshops')" class="hover:text-dark/70 transition-colors">
              {{ $t('projects.workshops') }}
            </NuxtLink>
            <NuxtLink :to="localePath('/news')" class="hover:text-dark/70 transition-colors">
              {{ $t('nav.news') }}
            </NuxtLink>
            <NuxtLink :to="localePath('/center/goals')" class="hover:text-dark/70 transition-colors">
              {{ $t('nav.centerShort') }}
            </NuxtLink>
            <NuxtLink :to="localePath('/contact')" class="hover:text-dark/70 transition-colors">
              {{ $t('nav.contact') }}
            </NuxtLink>
          </nav>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="mb-4 font-heading text-lg font-bold uppercase">
            {{ $t('footer.contact') }}
          </h3>
          <div class="flex flex-col gap-1 text-sm">
            <p class="font-bold">Fundacja OFCA</p>
            <p>ul. Ignacego Solarza 2B</p>
            <p>56-400 Oleśnica</p>
            <p class="mt-2">biuro@festiwalofca.pl</p>
          </div>
        </div>

        <!-- Social -->
        <div>
          <h3 class="mb-4 font-heading text-lg font-bold uppercase">
            {{ $t('footer.followUs') }}
          </h3>
          <div class="flex gap-4">
            <a
              href="https://facebook.com/festiwalofca"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              class="flex h-10 w-10 items-center justify-center rounded-full bg-dark text-cream transition-colors hover:bg-dark/80"
            >
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="mt-10 border-t border-dark/10 pt-6 text-center text-xs text-dark/50">
        <p>&copy; {{ new Date().getFullYear() }} Fundacja OFCA. {{ $t('footer.rights') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>
