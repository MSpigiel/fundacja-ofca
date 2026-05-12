import type { Article } from '~/types/article'

export function useArticlesList() {
  return useFetch<Article[]>('/api/articles')
}

export function useArticle(slug: string | Ref<string>) {
  const resolvedSlug = toValue(slug)
  return useFetch<Article>(`/api/articles/${resolvedSlug}`)
}

export function useLatestArticles(limit = 5) {
  return useFetch<Article[]>(`/api/articles?limit=${limit}`)
}
