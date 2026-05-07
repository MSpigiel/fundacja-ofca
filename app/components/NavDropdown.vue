<template>
  <div
    class="relative"
    @mouseenter="open = true"
    @mouseleave="open = false"
  >
    <button
      :aria-expanded="open"
      :aria-haspopup="true"
      class="nav-link flex items-center gap-1"
      @click="open = !open"
    >
      <slot name="trigger" />
      <svg
        class="h-3 w-3 transition-transform"
        :class="{ 'rotate-180': open }"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <Transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="opacity-0 -translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-1"
    >
      <div
        v-show="open"
        class="absolute left-0 top-full z-50 mt-1 min-w-56 bg-white py-2 shadow-lg"
        role="menu"
      >
        <slot />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const open = ref(false)
</script>
