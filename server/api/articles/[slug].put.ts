export default defineEventHandler(async (event) => {
  requireAuth(event)
  const slug = getRouterParam(event, 'slug')
  const body = await readBody(event)

  if (!slug) {
    throw createError({ statusCode: 400, message: 'Slug is required' })
  }

  const articles = await readArticles()
  const index = articles.findIndex(a => a.slug === slug)

  if (index === -1) {
    throw createError({ statusCode: 404, message: 'Article not found' })
  }

  const existing = articles[index]

  articles[index] = {
    ...existing,
    title: body.title ?? existing.title,
    subtitle: body.subtitle ?? existing.subtitle,
    content: body.content ? sanitizeHtml(body.content) : existing.content,
    previewImage: body.previewImage ?? existing.previewImage,
    galleryImages: body.galleryImages ?? existing.galleryImages,
    updatedAt: new Date().toISOString(),
  }

  // Update slug if title changed
  if (body.title && body.title !== existing.title) {
    let newSlug = slugify(body.title)
    if (articles.some((a, i) => i !== index && a.slug === newSlug)) {
      newSlug = `${newSlug}-${existing.id}`
    }
    articles[index].slug = newSlug
  }

  await writeArticles(articles)

  return articles[index]
})
