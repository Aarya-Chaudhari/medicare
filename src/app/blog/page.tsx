import Hero from '@/components/Hero';
import BlogCard from '@/components/BlogCard';
import { blogPosts } from '@/data/mock-data';

export const metadata = {
  title: 'Health Blog - MediCare Diagnostics',
  description: 'Read articles on health, nutrition, and medical tests.',
};

export default function BlogPage() {
  return (
    <div>
      <Hero
        title="Health Blog"
        subtitle="Tips, insights, and information about health and diagnostic testing"
        image="📝"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Latest Articles</h2>
            <p className="text-gray-600 text-lg">
              Stay informed about health topics, medical tests, and wellness tips from our expert team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {/* Categories */}
          <div className="mt-16 p-8 bg-light rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Categories</h3>
            <div className="flex flex-wrap gap-3">
              {['Health Tips', 'Health Awareness', 'Disease Information', 'Disease Management', 'Nutrition'].map(
                (category) => (
                  <button
                    key={category}
                    className="px-4 py-2 bg-white border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition font-bold"
                  >
                    {category}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
