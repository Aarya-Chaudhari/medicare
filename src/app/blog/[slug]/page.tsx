import { blogPosts } from '@/data/mock-data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';

interface BlogSlugPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogSlugPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  
  return {
    title: `${post.title} - MediCare Diagnostics`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogSlugPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((p) => p.category === post.category && p.id !== post.id).slice(0, 3);

  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Link href="/blog" className="text-primary hover:underline mb-4 block">
          ← Back to Blog
        </Link>

        <div className="bg-gradient-medical text-white p-8 rounded-lg text-center mb-8">
          <div className="text-6xl mb-4">{post.image}</div>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex justify-center items-center space-x-4 text-blue-100">
            <span className="bg-blue-400 bg-opacity-50 px-3 py-1 rounded-full">{post.category}</span>
            <span>By {post.author}</span>
            <span>{formatDate(post.date)}</span>
            <span>📖 {post.readTime} min read</span>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white p-8 rounded-lg shadow-medical mb-12">
          <div className="prose prose-lg max-w-none">
            {post.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="text-gray-700 mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Author Info */}
        <div className="bg-light p-8 rounded-lg mb-12">
          <h3 className="font-bold text-lg mb-2">✍️ About the Author</h3>
          <p className="text-gray-700">
            {post.author} is a senior pathologist at MediCare Diagnostics with extensive experience in diagnostic medicine
            and laboratory management.
          </p>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relPost) => (
                <Link
                  key={relPost.id}
                  href={`/blog/${relPost.slug}`}
                  className="bg-white p-4 rounded-lg shadow-medical hover:shadow-lg transition"
                >
                  <div className="text-3xl mb-2">{relPost.image}</div>
                  <h4 className="font-bold text-sm line-clamp-2 mb-2">{relPost.title}</h4>
                  <p className="text-xs text-primary hover:underline">{relPost.category}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
