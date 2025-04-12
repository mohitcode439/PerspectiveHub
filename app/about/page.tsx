import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">About This Blog</h1>

        <div className="relative w-full h-[300px] rounded-lg overflow-hidden mb-8">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Blog author"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p>
            Welcome to my blog! This platform is dedicated to sharing insights, tutorials, and thoughts on web
            development, design, and technology.
          </p>

          <h2>Our Mission</h2>
          <p>
            Our mission is to provide valuable content that helps developers and designers improve their skills and stay
            up-to-date with the latest trends and technologies in the industry.
          </p>

          <h2>The Author</h2>
          <p>
            I'm a passionate web developer with over 5 years of experience in building modern web applications. I
            specialize in React, Next.js, and front-end development. When I'm not coding, I enjoy hiking, reading, and
            experimenting with new technologies.
          </p>

          <h2>Contact</h2>
          <p>
            Have questions, suggestions, or want to collaborate? Feel free to reach out to me at{" "}
            <a href="mailto:contact@myblog.com">contact@myblog.com</a>.
          </p>
        </div>
      </div>
    </div>
  )
}
