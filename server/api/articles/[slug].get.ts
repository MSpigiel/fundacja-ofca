export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')

  if (!slug) {
    throw createError({ statusCode: 400, message: 'Slug is required' })
  }

  const articles = await readArticles()
  const article = articles.find(a => a.slug === slug)

  if (!article) {
    throw createError({ statusCode: 404, message: 'Article not found' })
  }

  return article
})
