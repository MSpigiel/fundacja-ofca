<template>
  <div class="lg:flex lg:items-start">
    <!-- Left: text content -->
    <div class="px-6 py-10 lg:w-1/2 lg:py-16 lg:pl-28 lg:pr-12">
      <!-- Back link -->
      <NuxtLink
        :to="localePath('/')"
        class="mb-8 inline-flex items-center gap-1 text-sm text-dark/50 transition-colors hover:text-dark"
      >
        <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        Strona główna
      </NuxtLink>

      <article>
        <header class="mb-8">
          <h1 class="mb-2 text-4xl font-bold uppercase leading-tight">
            {{ $t('projects.workshops') }}
          </h1>
        </header>

        <div class="space-y-5 text-base leading-relaxed text-dark">
          <p>
            Warsztaty cyrkowe dla dzieci to projekt stworzony z myślą o rozwijaniu pasji, odkrywaniu
            talentów oraz budowaniu więzi wśród młodych mieszkańców naszej społeczności. W ramach
            przedsięwzięcia odbyły się 24 spotkania warsztatowe, podzielone na dwie grupy wiekowe:
            <br>8–10 lat oraz 11–13 lat.
          </p>

          <p>
            Zajęcia prowadzili doświadczeni instruktorzy — Kamil Górski i Tomasz Czyżewski — a ich
            program wzbogacili zaproszeni goście specjalni: Mateusz Czwojdziński oraz Maciej Czarski
            z grupy "Ale Circus Dance Company", Marcin Połoniewicz "Pan Ząbek", Łukasz Witkowski
            "Frikart" oraz Marta Kuczyńska "Kolektyw Kejos".
          </p>

          <p>
            Uczestnicy warsztatów mieli okazję spróbować swoich sił w różnorodnych dziedzinach sztuki
            cyrkowej, takich jak żonglerka piłkami, obręczami i maczugami, chodzenie na szczudłach,
            balansowanie rekwizytami czy podstawy akrobatyki. Każde zajęcia były okazją do rozwijania
            koordynacji, odwagi, kreatywności i współpracy.
          </p>

          <p>
            Zwieńczeniem projektu były spektakle dla rodzin, podczas których młodzi artyści
            zaprezentowali zdobyte umiejętności.
          </p>

          <p class="text-sm text-dark/50">
            Projekt został dofinansowany przez Miasto Gminę Oleśnica.
          </p>
        </div>
      </article>
    </div>

    <!-- Right: gallery -->
    <PageGallery :images="images" title="Warsztaty cyrkowe dla dzieci" />
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()

const images = [
  { src: '/images/workshops/hero.jpg', alt: 'Warsztaty cyrkowe' },
  ...Array.from({ length: 16 }, (_, i) => ({
    src: `/images/workshops/workshop-${String(i + 1).padStart(2, '0')}.jpg`,
    alt: `Warsztaty cyrkowe — zdjęcie ${i + 1}`,
  })),
]

useHead({ title: 'Warsztaty cyrkowe dla dzieci' })
</script>
