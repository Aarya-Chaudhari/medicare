import { BlogPost } from '@/types';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="bg-white rounded-lg shadow-medical hover:shadow-lg transition overflow-hidden cursor-pointer flex flex-col h-full">
        <div className="bg-gradient-medical text-white p-8 text-center text-5xl">{post.image}</div>

        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs bg-primary text-white px-3 py-1 rounded-full">{post.category}</span>
            <span className="text-xs text-gray-500">📖 {post.readTime} min read</span>
          </div>

          <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
          <p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-3">{post.excerpt}</p>

          <div className="flex items-center justify-between text-sm text-gray-500 border-t pt-4">
            <span>By {post.author}</span>
            <span>{formatDate(post.date)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
