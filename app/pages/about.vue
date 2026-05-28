<template>
  <div class="lg:flex lg:items-start">
    <!-- Text content -->
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
            {{ $t('nav.about') }}
          </h1>
        </header>

        <div class="space-y-5 text-base leading-relaxed text-dark">
          <p>
            Fundacja OFCA — oleśnicka fundacja założona w 2015 roku z inicjatywy Tomasza Czyżewskiego,
            który pełni funkcję jej prezesa. Misją fundacji jest promowanie współczesnej sztuki cyrkowej
            oraz wsparcie polskich artystów cyrku współczesnego. Swoje cele fundacja realizuje przede
            wszystkim poprzez organizację Festiwalu OFCA, który co roku prezentuje szerokie spektrum
            sztuki cyrkowej, łącząc ją z elementami teatru i innych sztuk performatywnych. Wydarzenie
            nie tylko promuje Nowy Cyrk, ale także integruje polskie środowisko artystyczne, tworząc
            przestrzeń do współpracy i wymiany doświadczeń.
          </p>

          <p>
            Fundacja rozwija swoją działalność także poza organizacją festiwalu. Zbudowała sprawnie
            działającą sieć wolontariuszy, którzy mocno angażują się w prace na rzecz sztuki i wspierają
            organizację wydarzeń cyrkowych. Dodatkowo fundacja podejmuje starania, aby wzbogacać lokalną
            ofertę kulturalno-edukacyjną, organizując warsztaty cyrkowe dla dzieci i młodzieży w ciągu
            roku, jak również rozwojowe dla swoich wolontariuszy. Działania na rzecz oleśnickiej
            społeczności i skupienie jej uwagi na sztuce cyrkowej jest tu równie ważne, jak promocja
            środowiska i twórców w Polsce i na scenie międzynarodowej.
          </p>

          <p>
            Fundacja stale otrzymuje granty na swoje działania, w szczególności na organizację Festiwalu
            OFCA od takich instytucji jak: Ministerstwo Kultury i Dziedzictwa Narodowego, Urząd
            Marszałkowski Województwa Dolnośląskiego, Miasto Oleśnica, Fundacja Współpracy
            Polsko-Niemieckiej oraz Instytut Francuski. Działalność fundacji opiera się również na
            wsparciu finansowym i organizacyjnym otrzymywanym od lokalnych firm.
          </p>
        </div>

        <!-- Board -->
        <section class="mt-10">
          <h2 class="mb-4 text-2xl font-bold uppercase">Zarząd Fundacji</h2>
          <ul class="space-y-2 text-base text-dark">
            <li><strong>Tomasz Czyżewski</strong> — Prezes Zarządu</li>
            <li><strong>Aleksandra Czyżewska</strong> — Wiceprezes Zarządu</li>
            <li><strong>Marta Smolak</strong> — Członek Zarządu</li>
          </ul>
        </section>

        <!-- Documents -->
        <section class="mt-10">
          <h2 class="mb-6 text-4xl font-bold uppercase">Dokumenty</h2>

          <!-- Statut -->
          <div class="mb-6">
            <h3 class="mb-2 text-2xl font-bold uppercase">
              <a href="/documents/statut-fundacji.pdf" download class="icon-link inline-flex items-center gap-2 transition-colors hover:text-dark/60">
                Statut Fundacji
                <svg class="h-6 w-6 translate-y-[2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3" />
                </svg>
              </a>
            </h3>
          </div>

          <!-- Sprawozdania finansowe -->
          <div class="mb-6">
            <h3 class="mb-2 text-2xl font-bold uppercase">Sprawozdania finansowe</h3>
            <ul class="space-y-2 text-base text-dark">
              <li>
                <a href="/documents/sprawozdania-finansowe/sprawozdanie-2024.pdf" download class="icon-link inline-flex items-center gap-2 transition-colors hover:text-dark/60">
                  Sprawozdanie finansowe za 2024 rok
                  <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="/documents/sprawozdania-finansowe/sprawozdanie-2023.pdf" download class="icon-link inline-flex items-center gap-2 transition-colors hover:text-dark/60">
                  Sprawozdanie finansowe za 2023 rok
                  <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="/documents/sprawozdania-finansowe/sprawozdanie-2022.pdf" download class="icon-link inline-flex items-center gap-2 transition-colors hover:text-dark/60">
                  Sprawozdanie finansowe za 2022 rok
                  <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <!-- Sprawozdania merytoryczne -->
          <div>
            <h3 class="mb-2 text-2xl font-bold uppercase">Sprawozdania merytoryczne</h3>
            <ul class="space-y-2 text-base text-dark">
              <li>
                <a href="/documents/sprawozdania-merytoryczne/sprawozdanie-2024.pdf" download class="icon-link inline-flex items-center gap-2 transition-colors hover:text-dark/60">
                  Sprawozdanie merytoryczne za 2024 rok
                  <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="/documents/sprawozdania-merytoryczne/sprawozdanie-2023.pdf" download class="icon-link inline-flex items-center gap-2 transition-colors hover:text-dark/60">
                  Sprawozdanie merytoryczne za 2023 rok
                  <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="/documents/sprawozdania-merytoryczne/sprawozdanie-2022.pdf" download class="icon-link inline-flex items-center gap-2 transition-colors hover:text-dark/60">
                  Sprawozdanie merytoryczne za 2022 rok
                  <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </article>
    </div>

  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()

useHead({ title: 'O Fundacji' })
</script>
