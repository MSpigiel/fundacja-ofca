<template>
  <div class="container mx-auto px-4 py-16">
    <h1 class="mb-10 text-4xl font-bold uppercase">{{ $t('center.goals') }}</h1>

    <div class="max-w-3xl space-y-6 text-lg leading-relaxed text-dark/80">
      <p>
        Centrum Wspierania Organizacji Pozarządowych to miejsce kompleksowego wsparcia dla lokalnych
        organizacji społecznych posiadających siedzibę w Oleśnicy, w szczególności dla
        nowopowstających inicjatyw, stowarzyszeń oraz fundacji rozwijających swoją działalność.
      </p>

      <h2 class="pt-4 text-2xl font-bold uppercase">Kto może skorzystać ze wsparcia?</h2>

      <ul class="list-disc space-y-2 pl-6">
        <li>
          Osoby indywidualne (mieszkańcy miasta Oleśnica) zainteresowane utworzeniem organizacji
          pozarządowej, w tym m.in. stowarzyszenia i fundacji
        </li>
        <li>
          Osoby reprezentujące organizacje pozarządowe (stowarzyszenia, fundacje) posiadające
          siedzibę w mieście Oleśnica
        </li>
      </ul>

      <p>
        Mieszkańcy Oleśnicy uzyskają kompleksową pomoc i bezpłatny dostęp do informacji w zakresie
        zakładania, wyboru formy prawnej organizacji oraz sposobu rejestracji podmiotu.
      </p>

      <h2 class="pt-4 text-2xl font-bold uppercase">Zakres wsparcia dla organizacji</h2>

      <p>
        Organizacje pozarządowe posiadające swoją siedzibę w Oleśnicy dzięki indywidualnie
        dobranemu doradztwu uzyskają możliwość:
      </p>

      <ul class="list-disc space-y-2 pl-6">
        <li>
          Pozyskania wiedzy nt. cyklu życia organizacji — ważne terminy i obowiązki wobec
          różnych organów
        </li>
        <li>
          Otrzymania wsparcia w zakresie poszukiwania nowych źródeł finansowania działalności:
          <ul class="mt-2 list-disc space-y-1 pl-6 text-dark/60">
            <li>Analiza dotychczasowego sposobu finansowania organizacji</li>
            <li>
              Zapoznanie z podstawowymi źródłami finansowania działań podmiotu: granty i dotacje,
              zbiórki publiczne, darowizny, loterie itp.
            </li>
            <li>Pomoc w analizie aktualnych konkursów</li>
          </ul>
        </li>
        <li>
          Zapoznania z zasadami prowadzenia działalności nieodpłatnej i odpłatnej pożytku
          publicznego, a także prowadzenia przez podmiot działalności gospodarczej
        </li>
      </ul>

      <p>
        Dodatkowo na potrzeby organizacji spotkań, pracy organizacyjnej lub przygotowania
        dokumentów, oleśnickim organizacjom zostanie udostępniony lokal biurowy znajdujący się
        w Rynku, po wcześniejszym uzgodnieniu terminu.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Cele i zakres wsparcia' })
</script>
