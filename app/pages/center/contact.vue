<template>
  <div class="container mx-auto px-4 py-16">
    <h1 class="mb-10 text-4xl font-bold uppercase">{{ $t('center.contact') }}</h1>

    <div class="max-w-3xl space-y-4 text-base text-dark">
      <p>
        <a href="mailto:biuro@fundacjaofca.pl" class="text-purple underline hover:text-purple/70">
          biuro@fundacjaofca.pl
        </a>
      </p>
      <p>
        <a href="tel:+48696930766" class="text-purple underline hover:text-purple/70">
          tel. 696 930 766
        </a>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Kontakt — Centrum Wspierania' })
</script>
