import BlogForm from '@/components/blog-form';

export default function NewPost() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Create New Post</h1>
        <BlogForm />
      </div>
    </div>
  );
} 