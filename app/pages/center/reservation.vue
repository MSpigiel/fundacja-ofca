<template>
  <div class="container mx-auto px-4 py-16">
    <h1 class="mb-10 text-4xl font-bold uppercase">{{ $t('center.reservation') }}</h1>

    <div class="max-w-3xl space-y-6 text-lg leading-relaxed text-dark/80">
      <p>
        Zapraszamy wszystkie oleśnickie organizacje pozarządowe nieposiadające własnej przestrzeni
        lokalowej do bezpłatnego współkorzystania z przestrzeni biurowej znajdującej się w lokalu
        <strong>Rynek 26/II w Oleśnicy</strong>.
      </p>

      <p>
        Lokal może zostać udostępniony na potrzeby organizacji spotkań, pracy organizacyjnej
        lub przygotowania dokumentów, po wcześniejszym uzgodnieniu terminu.
      </p>

      <div class="mt-8 border border-dark/10 px-6 py-5">
        <h2 class="mb-3 text-xl font-bold uppercase">Umów termin</h2>
        <p class="mb-4 text-dark/60">
          Aby zarezerwować przestrzeń, prosimy o kontakt mailowy lub telefoniczny.
        </p>
        <div class="space-y-1">
          <p>
            <a href="mailto:biuro@fundacjaofca.pl" class="text-purple underline hover:text-purple/70">
              biuro@fundacjaofca.pl
            </a>
          </p>
          <p>
            <a href="tel:+48696930766" class="text-purple underline hover:text-purple/70">
              696 930 766
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Rezerwacja sali' })
</script>
