<template>
  <div class="px-6 py-16 lg:px-[5vw] xl:px-28">
    <h1 class="mb-10 text-4xl font-bold uppercase">{{ $t('center.hours') }}</h1>

    <div class="max-w-3xl space-y-6 text-base leading-relaxed text-dark">
      <p>Centrum działa w następujących dniach i godzinach:</p>

      <div class="border border-dark/10 px-6 py-4">
        <p class="text-xl font-bold">Poniedziałek — Czwartek</p>
        <p class="text-2xl font-bold text-purple">8:30 — 13:30</p>
      </div>

      <p>
        Dodatkowo istnieje możliwość umówienia się w innym terminie, po wcześniejszym ustaleniu
        dostępności lokalu i doradcy.
      </p>

      <p>
        W celu umówienia spotkania prosimy o kontakt mailowy lub telefoniczny.
      </p>

      <div class="mt-4 space-y-1">
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
</template>

<script setup lang="ts">
useHead({ title: 'Godziny pracy' })
</script>
