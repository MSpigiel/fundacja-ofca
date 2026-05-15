<template>
  <form class="space-y-6" @submit.prevent="handleSubmit">
    <!-- Title -->
    <div>
      <label for="title" class="mb-1 block text-sm font-bold">Tytuł *</label>
      <input
        id="title"
        v-model="form.title"
        type="text"
        required
        class="w-full border border-dark/20 bg-white px-4 py-2 text-dark focus:border-purple focus:outline-none"
        placeholder="Tytuł artykułu"
      >
    </div>

    <!-- Subtitle -->
    <div>
      <label for="subtitle" class="mb-1 block text-sm font-bold">Podtytuł (opcjonalny)</label>
      <input
        id="subtitle"
        v-model="form.subtitle"
        type="text"
        class="w-full border border-dark/20 bg-white px-4 py-2 text-dark focus:border-purple focus:outline-none"
        placeholder="Krótki opis"
      >
    </div>

    <!-- Preview image -->
    <div>
      <label for="previewImage" class="mb-1 block text-sm font-bold">Zdjęcie podglądowe *</label>
      <input
        id="previewImage"
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif"
        class="w-full text-sm"
        :disabled="uploadingPreview"
        @change="handlePreviewUpload"
      >
      <div v-if="uploadingPreview" class="mt-2 flex items-center gap-2 text-sm text-dark/50">
        <svg class="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
        Przesyłanie zdjęcia...
      </div>
      <div v-else-if="form.previewImage" class="mt-2">
        <img :src="form.previewImage" alt="Podgląd" class="h-32 w-auto object-cover">
      </div>
    </div>

    <!-- Content -->
    <div>
      <label class="mb-1 block text-sm font-bold">Treść artykułu</label>
      <AdminTiptapEditor v-model="form.content" />
    </div>

    <!-- Gallery images -->
    <div>
      <label for="gallery" class="mb-1 block text-sm font-bold">Galeria zdjęć (opcjonalnie)</label>
      <input
        id="gallery"
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif"
        multiple
        class="w-full text-sm"
        :disabled="uploadingGallery"
        @change="handleGalleryUpload"
      >
      <div v-if="uploadingGallery" class="mt-2 flex items-center gap-2 text-sm text-dark/50">
        <svg class="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
        Przesyłanie {{ galleryUploadCount }} {{ galleryUploadCount === 1 ? 'zdjęcia' : 'zdjęć' }}...
      </div>
      <div v-if="form.galleryImages.length > 0" class="mt-3 flex flex-wrap gap-2">
        <div
          v-for="(img, index) in form.galleryImages"
          :key="index"
          class="relative"
        >
          <img :src="img.src" :alt="img.alt" class="h-20 w-20 object-cover">
          <button
            type="button"
            class="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white"
            :aria-label="`Usuń zdjęcie ${index + 1}`"
            @click="removeGalleryImage(index)"
          >
            &times;
          </button>
        </div>
      </div>
    </div>

    <!-- Submit -->
    <div class="flex items-center gap-4">
      <button
        type="submit"
        :disabled="submitting"
        class="bg-purple px-6 py-2 font-heading text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-purple/80 disabled:opacity-50"
      >
        {{ submitting ? 'Zapisywanie...' : (editing ? 'Zapisz zmiany' : 'Dodaj artykuł') }}
      </button>
      <p v-if="error" class="text-sm text-red-600">{{ error }}</p>
    </div>
  </form>
</template>

<script setup lang="ts">
import type { Article, ArticleImage } from '~/types/article'
import { compressImage } from '~/utils/compressImage'

const props = defineProps<{
  article?: Article
}>()

const emit = defineEmits<{
  saved: [article: Article]
}>()

const editing = computed(() => !!props.article)

const form = reactive({
  title: props.article?.title || '',
  subtitle: props.article?.subtitle || '',
  content: props.article?.content || '',
  previewImage: props.article?.previewImage || '',
  galleryImages: [...(props.article?.galleryImages || [])] as ArticleImage[],
})

const submitting = ref(false)
const uploadingPreview = ref(false)
const uploadingGallery = ref(false)
const galleryUploadCount = ref(0)
const error = ref('')

async function uploadCompressedFiles(
  files: FileList,
  options?: { maxDimension?: number, quality?: number },
): Promise<string[]> {
  const formData = new FormData()
  for (const file of files) {
    const compressed = await compressImage(file, options)
    formData.append('file', compressed)
  }
  const result = await $fetch<{ urls: string[] }>('/api/upload', {
    method: 'POST',
    body: formData,
  })
  return result.urls
}

async function handlePreviewUpload(event: Event) {
  const input = event.target as HTMLInputElement
  if (!input.files?.length) return

  try {
    error.value = ''
    uploadingPreview.value = true
    // Preview images used in slider + cards — 1200px for sharp rendering on Retina screens
    const urls = await uploadCompressedFiles(input.files, { maxDimension: 1200, quality: 0.82 })
    if (urls[0]) form.previewImage = urls[0]
  }
  catch (e: any) {
    error.value = e.data?.message || 'Błąd przesyłania zdjęcia'
  }
  finally {
    uploadingPreview.value = false
  }
}

async function handleGalleryUpload(event: Event) {
  const input = event.target as HTMLInputElement
  if (!input.files?.length) return

  try {
    error.value = ''
    galleryUploadCount.value = input.files.length
    uploadingGallery.value = true
    // Gallery images shown large — 1920px max, good quality
    const urls = await uploadCompressedFiles(input.files, { maxDimension: 1920, quality: 0.82 })
    for (const url of urls) {
      form.galleryImages.push({ src: url, alt: '' })
    }
  }
  catch (e: any) {
    error.value = e.data?.message || 'Błąd przesyłania zdjęć'
  }
  finally {
    uploadingGallery.value = false
  }
}

function removeGalleryImage(index: number) {
  form.galleryImages.splice(index, 1)
}

async function handleSubmit() {
  if (!form.title) {
    error.value = 'Tytuł jest wymagany'
    return
  }

  submitting.value = true
  error.value = ''

  try {
    const url = editing.value
      ? `/api/articles/${props.article!.slug}`
      : '/api/articles'

    const saved = await $fetch<Article>(url, {
      method: editing.value ? 'PUT' : 'POST',
      body: {
        title: form.title,
        subtitle: form.subtitle,
        content: form.content,
        previewImage: form.previewImage,
        galleryImages: form.galleryImages,
      },
    })

    emit('saved', saved)
  }
  catch (e: any) {
    error.value = e.data?.message || 'Wystąpił błąd'
  }
  finally {
    submitting.value = false
  }
}
</script>
