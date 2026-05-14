<template>
  <div
    ref="wrapper"
    class="relative"
    @mouseenter="open = true"
    @mouseleave="open = false"
  >
    <button
      ref="triggerBtn"
      :aria-expanded="open"
      aria-haspopup="true"
      class="nav-link flex items-center gap-1"
      @click="open = !open"
      @keydown.escape="close"
      @keydown.down.prevent="openAndFocusFirst"
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
        ref="menuEl"
        class="absolute left-0 top-full z-50 mt-1 min-w-56 bg-white py-2 shadow-lg"
        role="menu"
        @keydown.escape="close"
        @keydown.up.prevent="focusPrev"
        @keydown.down.prevent="focusNext"
        @keydown.tab="close"
      >
        <slot />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const open = ref(false)
const triggerBtn = ref<HTMLButtonElement | null>(null)
const menuEl = ref<HTMLElement | null>(null)

function close() {
  open.value = false
  triggerBtn.value?.focus()
}

function getMenuItems(): HTMLElement[] {
  if (!menuEl.value) return []
  return Array.from(menuEl.value.querySelectorAll<HTMLElement>('[role="menuitem"]'))
}

function openAndFocusFirst() {
  open.value = true
  nextTick(() => {
    const items = getMenuItems()
    items[0]?.focus()
  })
}

function focusNext() {
  const items = getMenuItems()
  const idx = items.indexOf(document.activeElement as HTMLElement)
  const next = items[(idx + 1) % items.length]
  next?.focus()
}

function focusPrev() {
  const items = getMenuItems()
  const idx = items.indexOf(document.activeElement as HTMLElement)
  const prev = items[(idx - 1 + items.length) % items.length]
  prev?.focus()
}

// Close when clicking outside
onMounted(() => {
  const handler = (e: MouseEvent) => {
    const wrapper = triggerBtn.value?.closest('.relative')
    if (wrapper && !wrapper.contains(e.target as Node)) {
      open.value = false
    }
  }
  document.addEventListener('click', handler)
  onUnmounted(() => document.removeEventListener('click', handler))
})
</script>
