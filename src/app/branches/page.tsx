import Hero from '@/components/Hero';
import BranchCard from '@/components/BranchCard';
import { branches } from '@/data/mock-data';

export const metadata = {
  title: 'Our Branches - MediCare Diagnostics',
  description: 'Find our diagnostic centers across Maharashtra with addresses and contact information.',
};

export default function BranchesPage() {
  return (
    <div>
      <Hero
        title="Our Branches"
        subtitle="Visit our state-of-the-art diagnostic centers across Maharashtra"
        image="📍"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Branch Locations</h2>
            <p className="text-gray-600 text-lg">
              MediCare Diagnostics has multiple branches across Maharashtra, all equipped with modern facilities
              and experienced professionals. Find the branch nearest to you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {branches.map((branch) => (
              <BranchCard key={branch.id} branch={branch} />
            ))}
          </div>

          {/* Statistics */}
          <div className="bg-light p-12 rounded-lg text-center mb-16">
            <h3 className="text-2xl font-bold mb-8">Branch Statistics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <p className="text-4xl font-bold text-primary mb-2">5</p>
                <p className="text-gray-700">Active Branches</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary mb-2">50K+</p>
                <p className="text-gray-700">Patients Served</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary mb-2">500K+</p>
                <p className="text-gray-700">Tests Conducted</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary mb-2">24/7</p>
                <p className="text-gray-700">Support Available</p>
              </div>
            </div>
          </div>

          {/* Expansion Plans */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Coming Soon</h3>
            <p className="text-gray-600 mb-6">
              We are expanding our services to reach more patients. New branches opening in:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-primary text-white p-6 rounded-lg text-center">
                <p className="text-2xl font-bold mb-2">Solapur</p>
                <p className="text-sm">Coming Q2 2024</p>
              </div>
              <div className="bg-primary text-white p-6 rounded-lg text-center">
                <p className="text-2xl font-bold mb-2">Kolhapur</p>
                <p className="text-sm">Coming Q3 2024</p>
              </div>
              <div className="bg-primary text-white p-6 rounded-lg text-center">
                <p className="text-2xl font-bold mb-2">Akola</p>
                <p className="text-sm">Coming Q4 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
