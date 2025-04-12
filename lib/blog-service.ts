import type { Post } from "./types"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'

// Get all posts
export async function getAllPosts(): Promise<Post[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/posts`, {
      cache: 'no-store'
    });
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

// Get a single post by slug
export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/posts/${slug}`, {
      cache: 'no-store'
    });
    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error('Failed to fetch post');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

// Search posts by title, content, or tags
export async function searchPosts(query: string): Promise<Post[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/posts/search?q=${encodeURIComponent(query)}`, {
      cache: 'no-store'
    });
    if (!response.ok) {
      throw new Error('Failed to search posts');
    }
    return response.json();
  } catch (error) {
    console.error('Error searching posts:', error);
    return [];
  }
}

// Get posts by tag
export async function getPostsByTag(tag: string): Promise<Post[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/posts/search?tag=${encodeURIComponent(tag)}`, {
      cache: 'no-store'
    });
    if (!response.ok) {
      throw new Error('Failed to fetch posts by tag');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching posts by tag:', error);
    return [];
  }
}
