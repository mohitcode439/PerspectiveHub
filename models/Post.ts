import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  excerpt: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  readTime: {
    type: Number,
    required: true,
  },
  coverImage: {
    type: String,
    required: true,
  },
  tags: [{
    type: String,
  }],
});

export default mongoose.models.Post || mongoose.model('Post', postSchema); 