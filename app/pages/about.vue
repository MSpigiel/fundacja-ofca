<template>
  <div class="container mx-auto px-4 py-16">
    <h1 class="mb-10 text-4xl font-bold uppercase">{{ $t('nav.about') }}</h1>

    <div class="max-w-3xl space-y-6 text-lg leading-relaxed text-dark/80">
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
    <section class="mt-16 max-w-3xl">
      <h2 class="mb-6 text-2xl font-bold uppercase">Zarząd Fundacji</h2>
      <ul class="space-y-2 text-lg text-dark/80">
        <li><strong>Tomasz Czyżewski</strong> — Prezes Zarządu</li>
        <li><strong>Aleksandra Czyżewska</strong> — Wiceprezes Zarządu</li>
        <li><strong>Marta Smolak</strong> — Członek Zarządu</li>
      </ul>
    </section>

    <!-- Documents -->
    <section class="mt-16 max-w-3xl">
      <h2 class="mb-6 text-4xl font-bold uppercase">Dokumenty</h2>
      <ul class="space-y-3 text-lg">
        <li>
          <span class="text-dark/80">Statut Fundacji</span>
          <span class="ml-2 text-sm text-dark/40">— do pobrania (wkrótce)</span>
        </li>
        <li>
          <span class="text-dark/80">Sprawozdania finansowe</span>
          <span class="ml-2 text-sm text-dark/40">— do pobrania (wkrótce)</span>
        </li>
        <li>
          <span class="text-dark/80">Sprawozdania merytoryczne</span>
          <span class="ml-2 text-sm text-dark/40">— do pobrania (wkrótce)</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'O Fundacji' })
</script>
