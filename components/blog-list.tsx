import Link from "next/link"
import Image from "next/image"
import { Calendar } from "lucide-react"
import type { Post } from "@/lib/types"

interface BlogListProps {
  posts: Post[]
}

export default function BlogList({ posts }: BlogListProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No posts found</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <Link key={post.id} href={`/posts/${post.slug}`} className="group">
          <article className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
            <div className="relative w-full h-48">
              <Image
                src={post.coverImage || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-5 flex-grow flex flex-col">
              <div className="flex items-center text-gray-500 text-sm mb-3">
                <Calendar className="h-4 w-4 mr-1" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
              </div>
              <h2 className="text-xl font-semibold mb-2 group-hover:text-purple-600 transition-colors duration-300">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
              <div className="mt-auto">
                <span className="text-purple-600 font-medium group-hover:underline">Read more</span>
              </div>
            </div>
          </article>
        </Link>
      ))}
    </div>
  )
}
