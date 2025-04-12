import BlogList from "@/components/blog-list"
import FeaturedPost from "@/components/featured-post"
import SearchBar from "@/components/search-bar"
import Link from 'next/link'
import connectDB from '@/lib/mongodb'
import Post from '@/models/Post'

export default async function Home() {
  await connectDB();
  const posts = await Post.find().sort({ date: -1 });
  const featuredPost = posts[0];
  const recentPosts = posts.slice(1);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Welcome to My Blog</h1>
          <p className="text-gray-600 max-w-2xl">
            Explore the latest articles on technology, design, and web development. Share your thoughts and join the
            conversation!
          </p>
        </div>
        <Link
          href="/new-post"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Create New Post
        </Link>
      </div>

      <div className="mb-8">
        <SearchBar />
      </div>

      {featuredPost && <FeaturedPost post={featuredPost} />}

      <div className="my-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <span className="mr-2">Recent Articles</span>
          <span className="h-1 flex-grow bg-gray-200 rounded-full ml-4"></span>
        </h2>
        <BlogList posts={recentPosts} />
      </div>
    </div>
  )
}
