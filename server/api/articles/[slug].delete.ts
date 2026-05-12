import { del } from '@vercel/blob'

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')

  if (!slug) {
    throw createError({ statusCode: 400, message: 'Slug is required' })
  }

  const articles = await readArticles()
  const index = articles.findIndex(a => a.slug === slug)

  if (index === -1) {
    throw createError({ statusCode: 404, message: 'Article not found' })
  }

  const article = articles[index]

  // Delete blob images (best effort, don't fail if blob delete fails)
  try {
    const urlsToDelete: string[] = []
    if (article.previewImage) urlsToDelete.push(article.previewImage)
    for (const img of article.galleryImages) {
      if (img.src) urlsToDelete.push(img.src)
    }
    if (urlsToDelete.length > 0) {
      await del(urlsToDelete)
    }
  }
  catch {
    // Blob deletion failed silently — article still gets removed
  }

  articles.splice(index, 1)
  await writeArticles(articles)

  return { success: true }
})
