"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import BlogList from "@/components/blog-list"
import SearchBar from "@/components/search-bar"
import { searchPosts } from "@/lib/blog-service"
import type { Post } from "@/lib/types"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const [results, setResults] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (query) {
      setLoading(true)
      const foundPosts = searchPosts(query)
      setResults(foundPosts)
      setLoading(false)
    } else {
      setResults([])
      setLoading(false)
    }
  }, [query])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Search Results</h1>

      <div className="mb-8">
        <SearchBar initialQuery={query} />
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
        </div>
      ) : (
        <>
          {query ? (
            <>
              <p className="text-gray-600 mb-8">
                {results.length === 0
                  ? `No results found for "${query}"`
                  : `Found ${results.length} result${results.length === 1 ? "" : "s"} for "${query}"`}
              </p>
              {results.length > 0 && <BlogList posts={results} />}
            </>
          ) : (
            <p className="text-gray-600">Enter a search term to find posts</p>
          )}
        </>
      )}
    </div>
  )
}
