import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Post } from "@/lib/types"

interface FeaturedPostProps {
  post: Post
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="md:flex">
        <div className="md:w-1/2 relative h-64 md:h-auto">
          <Image
            src={post.coverImage || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        <div className="md:w-1/2 p-6 md:p-8">
          <div className="flex items-center text-gray-500 text-sm mb-3">
            <Calendar className="h-4 w-4 mr-1" />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span className="mx-2">•</span>
            <Clock className="h-4 w-4 mr-1" />
            <span>{post.readTime} min read</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{post.title}</h2>
          <p className="text-gray-600 mb-6 line-clamp-3 md:line-clamp-4">{post.excerpt}</p>
          <Link href={`/posts/${post.slug}`}>
            <Button className="bg-purple-600 hover:bg-purple-700">Read Article</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
