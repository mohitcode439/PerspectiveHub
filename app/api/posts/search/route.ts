import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Post from '@/models/Post';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q');
    const tag = searchParams.get('tag');

    await connectDB();

    if (tag) {
      const posts = await Post.find({ tags: tag }).sort({ date: -1 });
      return NextResponse.json(posts);
    }

    if (query) {
      const searchTerms = query.toLowerCase().split(' ');
      const posts = await Post.find({
        $or: [
          { title: { $regex: searchTerms.join('|'), $options: 'i' } },
          { content: { $regex: searchTerms.join('|'), $options: 'i' } },
          { tags: { $in: searchTerms } }
        ]
      }).sort({ date: -1 });
      return NextResponse.json(posts);
    }

    const posts = await Post.find().sort({ date: -1 });
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to search posts' }, { status: 500 });
  }
} 