<template>
  <div class="px-6 py-16 lg:px-[5vw] xl:px-28">
    <h1 class="mb-10 text-4xl font-bold uppercase">{{ $t('projects.center') }}</h1>

    <div class="max-w-3xl space-y-6 text-base leading-relaxed text-dark">
      <p>
        Centrum Wspierania Organizacji Pozarządowych to projekt dofinansowany przez Miasto Gminę
        Oleśnica, którego celem jest kompleksowe wsparcie dla lokalnych organizacji społecznych
        posiadających siedzibę w Oleśnicy, w szczególności dla nowopowstających inicjatyw,
        stowarzyszeń oraz fundacji rozwijających swoją działalność.
      </p>

      <p>
        Mieszkańcy Oleśnicy uzyskają kompleksową pomoc i bezpłatny dostęp do informacji w zakresie
        zakładania, wyboru formy prawnej organizacji oraz sposobu rejestracji podmiotu.
      </p>

      <p>
        Oprócz profesjonalnego doradztwa, na potrzeby organizacji spotkań, pracy organizacyjnej
        lub przygotowania dokumentów, oleśnickim organizacjom zostanie udostępniony lokal biurowy
        znajdujący się w Rynku, po wcześniejszym uzgodnieniu terminu.
      </p>
    </div>

    <!-- Links to sub-pages -->
    <nav class="mt-12 max-w-3xl" aria-label="Sekcje Centrum Wspierania">
      <ul class="grid gap-4 sm:grid-cols-2">
        <li>
          <NuxtLink
            :to="localePath('/center/goals')"
            class="block border border-dark/10 px-6 py-4 transition-colors hover:border-purple hover:bg-purple/5"
          >
            <span class="font-heading text-sm font-bold uppercase tracking-wider">{{ $t('center.goals') }}</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            :to="localePath('/center/hours')"
            class="block border border-dark/10 px-6 py-4 transition-colors hover:border-purple hover:bg-purple/5"
          >
            <span class="font-heading text-sm font-bold uppercase tracking-wider">{{ $t('center.hours') }}</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            :to="localePath('/center/reservation')"
            class="block border border-dark/10 px-6 py-4 transition-colors hover:border-purple hover:bg-purple/5"
          >
            <span class="font-heading text-sm font-bold uppercase tracking-wider">{{ $t('center.reservation') }}</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            :to="localePath('/center/contact')"
            class="block border border-dark/10 px-6 py-4 transition-colors hover:border-purple hover:bg-purple/5"
          >
            <span class="font-heading text-sm font-bold uppercase tracking-wider">{{ $t('center.contact') }}</span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()

useHead({ title: 'Centrum Wspierania Organizacji Pozarządowych' })
</script>
