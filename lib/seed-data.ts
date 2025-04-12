import { Post } from "./types";

export const samplePosts: Post[] = [
  {
    id: "1",
    title: "Getting Started with Next.js",
    slug: "getting-started-with-nextjs",
    excerpt: "Learn the basics of Next.js and how to build modern web applications with this powerful React framework.",
    content: "Next.js is a React framework that enables server-side rendering and static site generation...",
    date: "2024-01-15",
    readTime: 5,
    coverImage: "/placeholder.svg",
    tags: ["Next.js", "React", "JavaScript"]
  },
  {
    id: "2",
    title: "Building a Blog with MongoDB",
    slug: "building-blog-with-mongodb",
    excerpt: "Discover how to create a modern blog using MongoDB as your database backend.",
    content: "MongoDB is a NoSQL database that provides high performance, high availability, and easy scalability...",
    date: "2024-02-20",
    readTime: 7,
    coverImage: "/placeholder.svg",
    tags: ["MongoDB", "Database", "Backend"]
  },
  {
    id: "3",
    title: "Modern Web Development Tools",
    slug: "modern-web-development-tools",
    excerpt: "Explore the latest tools and technologies that are shaping the future of web development.",
    content: "The web development landscape is constantly evolving with new tools and technologies...",
    date: "2024-03-10",
    readTime: 6,
    coverImage: "/placeholder.svg",
    tags: ["Web Development", "Tools", "Technology"]
  }
]; 