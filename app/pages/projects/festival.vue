<template>
  <div class="container mx-auto px-4 py-16">
    <h1 class="mb-10 text-4xl font-bold uppercase">{{ $t('projects.festival') }}</h1>

    <div class="max-w-3xl space-y-6 text-lg leading-relaxed text-dark/80">
      <p>
        Festiwal cyrku współczesnego OFCA to wydarzenie promujące współczesną sztukę cyrkową, które
        od 2014 roku odbywa się w Oleśnicy. Jest realizowane przez Fundację OFCA we współpracy
        z władzami miasta, partnerami oraz wolontariuszami. W jeden z sierpniowych weekendów miasto
        zamienia się w otwartą scenę Nowego Cyrku, oferując publiczności dostęp do spektakli
        ulicznych, widowisk scenicznych, warsztatów cyrkowych, przestrzeni dla highlinerów. W sumie
        w ciągu trzech dni odbywa się blisko 80 wydarzeń.
      </p>

      <p>
        Festiwal tworzy otwartą przestrzeń spotkań, gdzie tradycje cyrkowe łączą się z nowoczesnymi
        trendami w teatrze i performansie, oferując różnorodną tematykę spektakli — od klasycznych
        po eksperymentalne formy sztuki. To także ważne wydarzenie dla samej społeczności cyrkowej.
        Festiwal jest przyjaznym miejscem do integracji międzynarodowych twórców, wymiany pomysłów,
        doświadczeń, a także nawiązania współpracy.
      </p>

      <p>
        OFCA to również dobrze zorganizowana baza noclegowa, strefa food trucków oraz klub
        festiwalowy, gdzie odbywają się koncerty, występy artystyczne i spotkania "po godzinach".
        Stałym punktem festiwalu jest również pamiątkowy mural tworzony przez młodych artystów,
        który pozostaje śladem każdej edycji.
      </p>

      <p>
        W 2024 roku festiwal obchodził swój jubileusz. Na przestrzeni dziesięciu lat na jego scenach
        wystąpili uznani twórcy międzynarodowi, tacy jak Wes Peden, Matthias Romir, Stefan Sing,
        Cirque Inextremiste, czy Akoreacro, a także liczne grono polskich artystów. Na przestrzeni
        lat Festiwal OFCA zyskał uznanie jako jedno z najważniejszych wydarzeń cyrkowych w Polsce.
      </p>
    </div>

    <!-- Links -->
    <section class="mt-12 max-w-3xl">
      <h2 class="mb-4 text-2xl font-bold uppercase">Więcej informacji</h2>
      <ul class="space-y-2 text-lg">
        <li>
          <a
            href="https://www.festiwalofca.pl"
            target="_blank"
            rel="noopener noreferrer"
            class="text-purple underline transition-colors hover:text-purple/70"
          >
            www.festiwalofca.pl
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/festiwalofca"
            target="_blank"
            rel="noopener noreferrer"
            class="text-purple underline transition-colors hover:text-purple/70"
          >
            Facebook: festiwalofca
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/festiwalofca"
            target="_blank"
            rel="noopener noreferrer"
            class="text-purple underline transition-colors hover:text-purple/70"
          >
            Instagram: festiwalofca
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Festiwal OFCA' })
</script>
