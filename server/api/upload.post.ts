import { put } from '@vercel/blob'

export default defineEventHandler(async (event) => {
  const form = await readMultipartFormData(event)

  if (!form || form.length === 0) {
    throw createError({ statusCode: 400, message: 'No file provided' })
  }

  const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']
  const maxSize = 5 * 1024 * 1024 // 5MB

  const urls: string[] = []

  for (const field of form) {
    if (!field.filename || !field.data) continue

    if (!allowedTypes.includes(field.type || '')) {
      throw createError({ statusCode: 400, message: `Invalid file type: ${field.type}. Allowed: ${allowedTypes.join(', ')}` })
    }

    if (field.data.length > maxSize) {
      throw createError({ statusCode: 400, message: `File too large: ${field.filename}. Max 5MB.` })
    }

    const blob = await put(`articles/${Date.now()}-${field.filename}`, field.data, {
      access: 'public',
      contentType: field.type || 'image/jpeg',
    })

    urls.push(blob.url)
  }

  return { urls }
})
