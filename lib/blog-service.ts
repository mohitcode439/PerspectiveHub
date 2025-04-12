import type { Post } from "./types"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'

// Get all posts
export async function getAllPosts(): Promise<Post[]> {
  const response = await fetch(`${API_BASE_URL}/posts`);
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
}

// Get a single post by slug
export async function getPostBySlug(slug: string): Promise<Post | null> {
  const response = await fetch(`${API_BASE_URL}/posts/${slug}`);
  if (!response.ok) {
    if (response.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch post');
  }
  return response.json();
}

// Search posts by title, content, or tags
export async function searchPosts(query: string): Promise<Post[]> {
  const response = await fetch(`${API_BASE_URL}/posts/search?q=${encodeURIComponent(query)}`);
  if (!response.ok) {
    throw new Error('Failed to search posts');
  }
  return response.json();
}

// Get posts by tag
export async function getPostsByTag(tag: string): Promise<Post[]> {
  const response = await fetch(`${API_BASE_URL}/posts/search?tag=${encodeURIComponent(tag)}`);
  if (!response.ok) {
    throw new Error('Failed to fetch posts by tag');
  }
  return response.json();
}
