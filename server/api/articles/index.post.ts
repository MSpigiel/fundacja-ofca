import type { Article } from '~/types/article'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  if (!body.title) {
    throw createError({ statusCode: 400, message: 'Title is required' })
  }

  const articles = await readArticles()
  const id = generateId()
  let slug = slugify(body.title)

  // Ensure unique slug
  if (articles.some(a => a.slug === slug)) {
    slug = `${slug}-${id}`
  }

  const now = new Date().toISOString()

  const article: Article = {
    id,
    slug,
    title: body.title,
    subtitle: body.subtitle || '',
    content: sanitizeHtml(body.content || ''),
    previewImage: body.previewImage || '',
    galleryImages: body.galleryImages || [],
    createdAt: now,
    updatedAt: now,
  }

  articles.push(article)
  await writeArticles(articles)

  return article
})
