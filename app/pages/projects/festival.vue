<template>
  <div class="lg:flex lg:items-start">
    <!-- Left: text content -->
    <div class="px-6 py-10 lg:w-1/2 lg:py-16 lg:pl-[5vw] xl:pl-28 lg:pr-12">
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
            {{ $t('projects.festival') }}
          </h1>
        </header>

        <div class="space-y-5 text-base leading-relaxed text-dark">
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

        <!-- Social links -->
        <div class="mt-10 flex gap-4">
          <!-- Website -->
          <a
            href="https://www.festiwalofca.pl"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Strona festiwalu"
            class="icon-link flex h-10 w-10 items-center justify-center rounded-full bg-dark text-cream transition-colors hover:bg-dark/70"
          >
            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.6 9h16.8M3.6 15h16.8" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3a15.3 15.3 0 014 9 15.3 15.3 0 01-4 9 15.3 15.3 0 01-4-9 15.3 15.3 0 014-9z" />
            </svg>
          </a>
          <!-- Facebook -->
          <a
            href="https://www.facebook.com/festiwalofca"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            class="icon-link flex h-10 w-10 items-center justify-center rounded-full bg-dark text-cream transition-colors hover:bg-dark/70"
          >
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
            </svg>
          </a>
          <!-- Instagram -->
          <a
            href="https://www.instagram.com/festiwalofca"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            class="icon-link flex h-10 w-10 items-center justify-center rounded-full bg-dark text-cream transition-colors hover:bg-dark/70"
          >
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
        </div>
      </article>
    </div>

    <!-- Right: gallery -->
    <PageGallery :images="images" title="Festiwal OFCA" />
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()

const images = [
  { src: '/images/festival/hero.jpg', alt: 'Festiwal OFCA' },
  ...Array.from({ length: 45 }, (_, i) => ({
    src: `/images/festival/festival-${String(i + 1).padStart(2, '0')}.jpg`,
    alt: `Festiwal OFCA — zdjęcie ${i + 1}`,
  })),
]

useHead({ title: 'Festiwal OFCA' })
</script>
