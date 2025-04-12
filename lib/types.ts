export interface Post {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  date: string
  readTime: number
  coverImage: string
  tags: string[]
}

export interface Comment {
  id: string
  postId: string
  name: string
  message: string
  date: string
}

export interface Recipe {
  id: string
  name: string
  ingredients: string[]
  steps: string[]
  cookTime: number
  image: string
  createdAt: number
}

export interface Song {
  id: string
  title: string
  artist: string
  album: string
  url: string
  coverUrl: string
}
