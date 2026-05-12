export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const limit = query.limit ? Number(query.limit) : undefined

  const articles = await readArticles()
  const sorted = articles.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  )

  return limit ? sorted.slice(0, limit) : sorted
})
