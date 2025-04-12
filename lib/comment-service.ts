"use client"

import type { Comment } from "./types"

const STORAGE_KEY = "blog-comments"

// Get all comments
export function getAllComments(): Comment[] {
  if (typeof window === "undefined") {
    return []
  }

  try {
    const commentsJson = localStorage.getItem(STORAGE_KEY)
    if (!commentsJson) {
      return []
    }

    return JSON.parse(commentsJson) as Comment[]
  } catch (error) {
    console.error("Error getting comments from localStorage:", error)
    return []
  }
}

// Get comments for a specific post
export function getCommentsByPostId(postId: string): Comment[] {
  const comments = getAllComments()
  return comments
    .filter((comment) => comment.postId === postId)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

// Add a new comment
export function addComment(comment: Comment): void {
  const comments = getAllComments()
  const updatedComments = [...comments, comment]

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedComments))
    // Dispatch a storage event to notify other components
    window.dispatchEvent(new Event("storage"))
  } catch (error) {
    console.error("Error saving comment to localStorage:", error)
  }
}

// Delete a comment
export function deleteComment(id: string): void {
  const comments = getAllComments()
  const updatedComments = comments.filter((comment) => comment.id !== id)

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedComments))
    // Dispatch a storage event to notify other components
    window.dispatchEvent(new Event("storage"))
  } catch (error) {
    console.error("Error deleting comment from localStorage:", error)
  }
}
