export interface ArticleImage {
  src: string
  alt: string
}

export interface Article {
  id: string
  slug: string
  title: string
  subtitle: string
  content: string
  previewImage: string
  galleryImages: ArticleImage[]
  createdAt: string
  updatedAt: string
}

export interface ArticlesData {
  articles: Article[]
}
