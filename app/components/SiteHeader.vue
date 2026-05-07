<template>
  <header class="border-b border-dark/10">
    <div class="container mx-auto px-4">
      <!-- Mobile header -->
      <div class="flex items-center justify-between py-4 lg:hidden">
        <NuxtLink :to="localePath('/')" class="font-heading text-2xl font-bold uppercase">
          {{ $t('site.title') }}
        </NuxtLink>
        <button
          :aria-expanded="mobileOpen"
          aria-label="Menu"
          class="p-2"
          @click="mobileOpen = !mobileOpen"
        >
          <svg v-if="!mobileOpen" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Desktop nav -->
      <nav class="hidden lg:block" aria-label="Main navigation">
        <div class="grid grid-cols-3 items-center py-5">
          <!-- Left nav items -->
          <div class="flex items-center gap-8">
            <NuxtLink :to="localePath('/about')" class="nav-link">
              {{ $t('nav.about') }}
            </NuxtLink>

            <NavDropdown>
              <template #trigger>{{ $t('nav.projects') }}</template>
              <NuxtLink :to="localePath('/projects/festival')" class="dropdown-link" role="menuitem">
                {{ $t('projects.festival') }}
              </NuxtLink>
              <NuxtLink :to="localePath('/projects/workshops')" class="dropdown-link" role="menuitem">
                {{ $t('projects.workshops') }}
              </NuxtLink>
              <NuxtLink :to="localePath('/projects/center')" class="dropdown-link" role="menuitem">
                {{ $t('projects.center') }}
              </NuxtLink>
            </NavDropdown>

            <NuxtLink :to="localePath('/news')" class="nav-link">
              {{ $t('nav.news') }}
            </NuxtLink>
          </div>

          <!-- Center logo -->
          <div class="flex justify-center">
            <NuxtLink :to="localePath('/')" class="font-heading text-3xl font-bold uppercase leading-tight text-center">
              Fundacja<br>OFCA
            </NuxtLink>
          </div>

          <!-- Right nav items -->
          <div class="flex items-center justify-end gap-8">
            <NavDropdown>
              <template #trigger>{{ $t('nav.centerShort') }}</template>
              <NuxtLink :to="localePath('/center/goals')" class="dropdown-link" role="menuitem">
                {{ $t('center.goals') }}
              </NuxtLink>
              <NuxtLink :to="localePath('/center/hours')" class="dropdown-link" role="menuitem">
                {{ $t('center.hours') }}
              </NuxtLink>
              <NuxtLink :to="localePath('/center/reservation')" class="dropdown-link" role="menuitem">
                {{ $t('center.reservation') }}
              </NuxtLink>
              <NuxtLink :to="localePath('/center/contact')" class="dropdown-link" role="menuitem">
                {{ $t('center.contact') }}
              </NuxtLink>
            </NavDropdown>

            <NuxtLink :to="localePath('/contact')" class="nav-link">
              {{ $t('nav.contact') }}
            </NuxtLink>

            <LangSwitcher />
          </div>
        </div>
      </nav>

      <!-- Mobile nav -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <nav v-show="mobileOpen" class="border-t border-dark/10 pb-6 lg:hidden" aria-label="Mobile navigation">
          <div class="flex flex-col gap-1 pt-4">
            <NuxtLink :to="localePath('/about')" class="mobile-link" @click="mobileOpen = false">
              {{ $t('nav.about') }}
            </NuxtLink>

            <div class="flex flex-col">
              <button class="mobile-link flex items-center justify-between" @click="projectsOpen = !projectsOpen">
                {{ $t('nav.projects') }}
                <svg class="h-4 w-4 transition-transform" :class="{ 'rotate-180': projectsOpen }" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div v-show="projectsOpen" class="flex flex-col pl-4">
                <NuxtLink :to="localePath('/projects/festival')" class="mobile-link text-sm" @click="mobileOpen = false">
                  {{ $t('projects.festival') }}
                </NuxtLink>
                <NuxtLink :to="localePath('/projects/workshops')" class="mobile-link text-sm" @click="mobileOpen = false">
                  {{ $t('projects.workshops') }}
                </NuxtLink>
                <NuxtLink :to="localePath('/projects/center')" class="mobile-link text-sm" @click="mobileOpen = false">
                  {{ $t('projects.center') }}
                </NuxtLink>
              </div>
            </div>

            <NuxtLink :to="localePath('/news')" class="mobile-link" @click="mobileOpen = false">
              {{ $t('nav.news') }}
            </NuxtLink>

            <div class="flex flex-col">
              <button class="mobile-link flex items-center justify-between" @click="centerOpen = !centerOpen">
                {{ $t('nav.centerShort') }}
                <svg class="h-4 w-4 transition-transform" :class="{ 'rotate-180': centerOpen }" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div v-show="centerOpen" class="flex flex-col pl-4">
                <NuxtLink :to="localePath('/center/goals')" class="mobile-link text-sm" @click="mobileOpen = false">
                  {{ $t('center.goals') }}
                </NuxtLink>
                <NuxtLink :to="localePath('/center/hours')" class="mobile-link text-sm" @click="mobileOpen = false">
                  {{ $t('center.hours') }}
                </NuxtLink>
                <NuxtLink :to="localePath('/center/reservation')" class="mobile-link text-sm" @click="mobileOpen = false">
                  {{ $t('center.reservation') }}
                </NuxtLink>
                <NuxtLink :to="localePath('/center/contact')" class="mobile-link text-sm" @click="mobileOpen = false">
                  {{ $t('center.contact') }}
                </NuxtLink>
              </div>
            </div>

            <NuxtLink :to="localePath('/contact')" class="mobile-link" @click="mobileOpen = false">
              {{ $t('nav.contact') }}
            </NuxtLink>

            <div class="mt-4 border-t border-dark/10 pt-4">
              <LangSwitcher />
            </div>
          </div>
        </nav>
      </Transition>
    </div>
  </header>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const mobileOpen = ref(false)
const projectsOpen = ref(false)
const centerOpen = ref(false)
</script>
