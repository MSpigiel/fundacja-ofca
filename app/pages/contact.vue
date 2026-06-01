<template>
  <div class="px-6 py-16 lg:px-[5vw] xl:px-28">
    <h1 class="mb-10 text-4xl font-bold uppercase">{{ $t('nav.contact') }}</h1>

    <div class="max-w-3xl">
      <div class="grid gap-12 md:grid-cols-2">
        <!-- Contact info -->
        <div class="space-y-6">
          <div>
            <h2 class="mb-2 text-sm font-bold uppercase tracking-wider text-dark/40">E-mail</h2>
            <a href="mailto:biuro@fundacjaofca.pl" class="text-lg text-purple underline hover:text-purple/70">
              biuro@fundacjaofca.pl
            </a>
          </div>

          <div>
            <h2 class="mb-2 text-sm font-bold uppercase tracking-wider text-dark/40">Telefon</h2>
            <a href="tel:+48696930766" class="text-lg text-purple underline hover:text-purple/70">
              696 930 766
            </a>
          </div>

          <div>
            <h2 class="mb-2 text-sm font-bold uppercase tracking-wider text-dark/40">Prezes Fundacji</h2>
            <p class="text-lg text-dark/80">Tomasz Czyżewski</p>
          </div>
        </div>

        <!-- Address & legal -->
        <div class="space-y-6">
          <div>
            <h2 class="mb-2 text-sm font-bold uppercase tracking-wider text-dark/40">Adres</h2>
            <address class="text-lg not-italic text-dark/80">
              Fundacja OFCA<br>
              Ignacego Solarza 2B<br>
              56-400 Oleśnica
            </address>
          </div>

          <div>
            <h2 class="mb-2 text-sm font-bold uppercase tracking-wider text-dark/40">Dane rejestrowe</h2>
            <p class="text-lg text-dark/80">KRS 559954</p>
            <p class="text-lg text-dark/80">NIP 9112010907</p>
          </div>

          <div>
            <h2 class="mb-2 text-sm font-bold uppercase tracking-wider text-dark/40">Nr konta</h2>
            <p class="text-lg text-dark/80">66 1240 4025 1111 0010 6358 0744</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Kontakt' })
</script>
