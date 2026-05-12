<template>
  <div class="tiptap-editor border border-dark/20 bg-white">
    <!-- Toolbar -->
    <div class="flex flex-wrap gap-1 border-b border-dark/10 px-2 py-1.5">
      <button
        v-for="btn in toolbarButtons"
        :key="btn.label"
        type="button"
        class="flex h-8 min-w-8 items-center justify-center rounded px-1.5 text-sm transition-colors hover:bg-dark/10"
        :class="btn.isActive?.() ? 'bg-purple/20 text-purple' : 'text-dark/70'"
        :title="btn.label"
        :aria-label="btn.label"
        :aria-pressed="btn.isActive?.()"
        @click="btn.action"
      >
        <span v-html="btn.icon" />
      </button>

      <!-- Separator -->
      <div class="mx-1 w-px self-stretch bg-dark/10" role="separator" />

      <!-- Link button (special — needs URL input) -->
      <button
        type="button"
        class="flex h-8 min-w-8 items-center justify-center rounded px-1.5 text-sm transition-colors hover:bg-dark/10"
        :class="editor?.isActive('link') ? 'bg-purple/20 text-purple' : 'text-dark/70'"
        title="Link"
        aria-label="Wstaw link"
        @click="handleLink"
      >
        <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      </button>

      <!-- Image button -->
      <button
        type="button"
        class="flex h-8 min-w-8 items-center justify-center rounded px-1.5 text-sm transition-colors hover:bg-dark/10 text-dark/70"
        title="Wstaw zdjęcie"
        aria-label="Wstaw zdjęcie"
        @click="handleImage"
      >
        <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </button>
    </div>

    <!-- Editor content -->
    <EditorContent
      :editor="editor"
      class="tiptap-content prose prose-sm max-w-none px-4 py-3"
    />
  </div>
</template>

<script setup lang="ts">
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'
import Placeholder from '@tiptap/extension-placeholder'

const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const editor = useEditor({
  content: props.modelValue,
  extensions: [
    StarterKit,
    Link.configure({
      openOnClick: false,
      HTMLAttributes: {
        class: 'text-purple underline',
      },
    }),
    Image.configure({
      inline: false,
      HTMLAttributes: {
        class: 'max-w-full h-auto',
      },
    }),
    Placeholder.configure({
      placeholder: 'Zacznij pisać treść artykułu...',
    }),
  ],
  editorProps: {
    attributes: {
      class: 'min-h-[200px] focus:outline-none',
    },
  },
  onUpdate: ({ editor: e }) => {
    emit('update:modelValue', e.getHTML())
  },
})

// Sync external changes
watch(() => props.modelValue, (val) => {
  if (editor.value && editor.value.getHTML() !== val) {
    editor.value.commands.setContent(val, false)
  }
})

onBeforeUnmount(() => {
  editor.value?.destroy()
})

const toolbarButtons = computed(() => {
  if (!editor.value) return []
  const e = editor.value

  return [
    {
      label: 'Pogrubienie',
      icon: '<b>B</b>',
      action: () => e.chain().focus().toggleBold().run(),
      isActive: () => e.isActive('bold'),
    },
    {
      label: 'Kursywa',
      icon: '<i>I</i>',
      action: () => e.chain().focus().toggleItalic().run(),
      isActive: () => e.isActive('italic'),
    },
    {
      label: 'Przekreślenie',
      icon: '<s>S</s>',
      action: () => e.chain().focus().toggleStrike().run(),
      isActive: () => e.isActive('strike'),
    },
    {
      label: 'Nagłówek 2',
      icon: 'H2',
      action: () => e.chain().focus().toggleHeading({ level: 2 }).run(),
      isActive: () => e.isActive('heading', { level: 2 }),
    },
    {
      label: 'Nagłówek 3',
      icon: 'H3',
      action: () => e.chain().focus().toggleHeading({ level: 3 }).run(),
      isActive: () => e.isActive('heading', { level: 3 }),
    },
    {
      label: 'Lista punktowana',
      icon: '<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /><circle cx="2" cy="6" r="1" fill="currentColor"/><circle cx="2" cy="12" r="1" fill="currentColor"/><circle cx="2" cy="18" r="1" fill="currentColor"/></svg>',
      action: () => e.chain().focus().toggleBulletList().run(),
      isActive: () => e.isActive('bulletList'),
    },
    {
      label: 'Lista numerowana',
      icon: '<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>',
      action: () => e.chain().focus().toggleOrderedList().run(),
      isActive: () => e.isActive('orderedList'),
    },
    {
      label: 'Cytat',
      icon: '<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z"/></svg>',
      action: () => e.chain().focus().toggleBlockquote().run(),
      isActive: () => e.isActive('blockquote'),
    },
    {
      label: 'Linia pozioma',
      icon: '—',
      action: () => e.chain().focus().setHorizontalRule().run(),
    },
  ]
})

function handleLink() {
  if (!editor.value) return

  if (editor.value.isActive('link')) {
    editor.value.chain().focus().unsetLink().run()
    return
  }

  const url = window.prompt('Podaj adres URL:')
  if (!url) return

  editor.value.chain().focus().setLink({ href: url }).run()
}

function handleImage() {
  if (!editor.value) return

  const url = window.prompt('Podaj adres URL zdjęcia:')
  if (!url) return

  editor.value.chain().focus().setImage({ src: url }).run()
}
</script>

<style>
/* Tiptap editor content styling */
.tiptap-content .ProseMirror {
  min-height: 200px;
}

.tiptap-content .ProseMirror p.is-editor-empty:first-child::before {
  color: theme('colors.dark / 0.3');
  content: attr(data-placeholder);
  float: left;
  height: 0;
  pointer-events: none;
}

.tiptap-content .ProseMirror img {
  max-width: 100%;
  height: auto;
  margin: 1rem 0;
}

.tiptap-content .ProseMirror blockquote {
  border-left: 3px solid theme('colors.purple');
  padding-left: 1rem;
  color: theme('colors.dark / 0.7');
}
</style>
