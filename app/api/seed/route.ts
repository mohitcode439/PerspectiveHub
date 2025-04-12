import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Post from '@/models/Post';
import { samplePosts } from '@/lib/seed-data';

export async function POST() {
  try {
    await connectDB();
    
    // Clear existing posts
    await Post.deleteMany({});
    
    // Insert sample posts
    await Post.insertMany(samplePosts);
    
    return NextResponse.json({ message: 'Database seeded successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to seed database' }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectDB();
    
    // Clear existing posts
    await Post.deleteMany({});
    
    // Insert sample posts
    await Post.insertMany(samplePosts);
    
    return NextResponse.json({ message: 'Database seeded successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to seed database' }, { status: 500 });
  }
} 