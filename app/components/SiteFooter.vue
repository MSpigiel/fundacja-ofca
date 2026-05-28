<template>
  <footer class="bg-purple text-white">
    <div class="container mx-auto px-4 py-12">
      <div class="grid gap-10 md:grid-cols-3">
        <!-- Site map -->
        <div>
          <h3 class="mb-3 font-heading text-sm font-bold uppercase">
            {{ $t('footer.siteMap') }}
          </h3>
          <nav aria-label="Footer navigation" class="flex flex-col gap-0.5 text-xs">
            <NuxtLink :to="localePath('/about')" class="transition-colors hover:text-white/70">
              {{ $t('nav.about') }}
            </NuxtLink>
            <NuxtLink :to="localePath('/projects/festival')" class="transition-colors hover:text-white/70">
              {{ $t('projects.festival') }}
            </NuxtLink>
            <NuxtLink :to="localePath('/projects/workshops')" class="transition-colors hover:text-white/70">
              {{ $t('projects.workshops') }}
            </NuxtLink>
            <NuxtLink :to="localePath('/news')" class="transition-colors hover:text-white/70">
              {{ $t('nav.news') }}
            </NuxtLink>
            <NuxtLink :to="localePath('/center/goals')" class="transition-colors hover:text-white/70">
              {{ $t('nav.center') }}
            </NuxtLink>
            <NuxtLink :to="localePath('/contact')" class="transition-colors hover:text-white/70">
              {{ $t('nav.contact') }}
            </NuxtLink>
          </nav>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="mb-3 font-heading text-sm font-bold uppercase">
            {{ $t('footer.contact') }}
          </h3>
          <div class="flex flex-col gap-0.5 text-xs">
            <p class="font-bold">Fundacja OFCA</p>
            <p>ul. Ignacego Solarza 2B</p>
            <p>56-400 Oleśnica</p>
            <p class="mt-2">biuro@festiwalofca.pl</p>
          </div>
        </div>

        <!-- Social -->
        <div>
          <h3 class="mb-3 font-heading text-sm font-bold uppercase">
            {{ $t('footer.followUs') }}
          </h3>
          <div class="flex gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61590458697969"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              class="icon-link flex h-9 w-9 items-center justify-center rounded-full border-2 border-white text-white transition-colors hover:bg-white/10"
            >
              <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="mt-8 border-t border-white/20 pt-4 text-center text-xs text-white/60">
        <p>&copy; {{ new Date().getFullYear() }} Fundacja OFCA. {{ $t('footer.rights') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>
