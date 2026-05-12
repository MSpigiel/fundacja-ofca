import { Redis } from '@upstash/redis'
import type { Article, ArticlesData } from '~/types/article'

const ARTICLES_KEY = 'articles'

let _redis: Redis | null = null

function getRedis() {
  if (_redis) return _redis

  const url = process.env.KV_REST_API_URL
  const token = process.env.KV_REST_API_TOKEN

  if (!url || !token) {
    throw new Error('Missing KV_REST_API_URL or KV_REST_API_TOKEN environment variables')
  }

  _redis = new Redis({ url, token })
  return _redis
}

export async function readArticles(): Promise<Article[]> {
  try {
    const redis = getRedis()
    const data = await redis.get<ArticlesData>(ARTICLES_KEY)
    return data?.articles || []
  }
  catch (error) {
    console.error('Failed to read articles from Redis:', error)
    return []
  }
}

export async function writeArticles(articles: Article[]): Promise<void> {
  const redis = getRedis()
  const data: ArticlesData = { articles }
  await redis.set(ARTICLES_KEY, data)
}

export function generateId(): string {
  return crypto.randomUUID().slice(0, 8)
}

export function slugify(text: string): string {
  const polishChars: Record<string, string> = {
    'ą': 'a', 'ć': 'c', 'ę': 'e', 'ł': 'l', 'ń': 'n',
    'ó': 'o', 'ś': 's', 'ź': 'z', 'ż': 'z',
    'Ą': 'A', 'Ć': 'C', 'Ę': 'E', 'Ł': 'L', 'Ń': 'N',
    'Ó': 'O', 'Ś': 'S', 'Ź': 'Z', 'Ż': 'Z',
  }

  return text
    .replace(/[ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/g, char => polishChars[char] || char)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

export function sanitizeHtml(html: string): string {
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/on\w+\s*=\s*"[^"]*"/gi, '')
    .replace(/on\w+\s*=\s*'[^']*'/gi, '')
    .replace(/javascript\s*:/gi, '')
}
