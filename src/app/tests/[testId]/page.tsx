import Hero from '@/components/Hero';
import { tests } from '@/data/mock-data';
import { notFound } from 'next/navigation';

interface TestSlugPageProps {
  params: {
    testId: string;
  };
}

export async function generateStaticParams() {
  return tests.map((test) => ({
    testId: test.id,
  }));
}

export async function generateMetadata({ params }: TestSlugPageProps) {
  const test = tests.find((t) => t.id === params.testId);
  if (!test) return {};
  
  return {
    title: `${test.name} - MediCare Diagnostics`,
    description: test.description,
  };
}

export default function TestDetailPage({ params }: TestSlugPageProps) {
  const test = tests.find((t) => t.id === params.testId);

  if (!test) {
    notFound();
  }

  const relatedTests = tests.filter((t) => t.category === test.category && t.id !== test.id).slice(0, 4);

  return (
    <div>
      <Hero
        title={test.name}
        subtitle={test.description}
        image="🔬"
      />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Main Content */}
            <div className="md:col-span-2">
              {/* Basic Info */}
              <div className="bg-light p-8 rounded-lg mb-8">
                <h2 className="text-2xl font-bold mb-6">Test Details</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-gray-600 font-bold mb-1">Category</p>
                    <p className="text-lg text-primary font-bold">{test.category}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-bold mb-1">Duration</p>
                    <p className="text-lg text-gray-800">{test.duration}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-bold mb-1">Sample Type</p>
                    <p className="text-lg text-gray-800">{test.sample}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-bold mb-1">Report Time</p>
                    <p className="text-lg text-gray-800">{test.reportTime}</p>
                  </div>
                </div>
              </div>

              {/* Fasting Instructions */}
              <div className="bg-white p-8 rounded-lg shadow-medical mb-8">
                <h3 className="text-2xl font-bold mb-4">📋 Preparation Instructions</h3>
                <div className={`p-4 rounded-lg mb-6 ${test.fasting ? 'bg-red-50 border-2 border-red-200' : 'bg-green-50 border-2 border-green-200'}`}>
                  <p className="font-bold mb-2">
                    {test.fasting ? '🚫 Fasting Required' : '✅ No Fasting Required'}
                  </p>
                  {test.fasting && <p className="text-sm text-gray-700">Please fast for 8-12 hours before the test.</p>}
                </div>

                <h4 className="font-bold mb-3">Pre-Test Instructions:</h4>
                <ul className="space-y-2 mb-6">
                  {test.preparation.map((prep, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <span className="text-primary font-bold">✓</span>
                      <span className="text-gray-700">{prep}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* General Info */}
              <div className="bg-white p-8 rounded-lg shadow-medical">
                <h3 className="text-2xl font-bold mb-4">ℹ️ What is This Test?</h3>
                <p className="text-gray-700 mb-4">{test.description}</p>

                <h4 className="font-bold mb-3">Why is this test done?</h4>
                <p className="text-gray-700 mb-6">
                  This test helps in screening, diagnosis, and monitoring of {test.category.toLowerCase()} disorders.
                  It provides valuable information about your health status and helps in early detection of potential issues.
                </p>

                <h4 className="font-bold mb-3">What does the test measure?</h4>
                <p className="text-gray-700">
                  The test measures various parameters specific to {test.name}. The results are compared with reference ranges
                  to determine if your values are within the normal range or indicate any health concern.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Price Card */}
              <div className="bg-gradient-medical text-white p-8 rounded-lg mb-8 sticky top-20">
                <h3 className="text-2xl font-bold mb-4">Test Price</h3>
                <p className="text-5xl font-bold mb-6">₹{test.price}</p>
                <a
                  href="/appointment"
                  className="block w-full bg-white text-primary px-6 py-3 rounded-lg hover:shadow-lg transition font-bold text-center"
                >
                  Book Now
                </a>
              </div>

              {/* Quick Facts */}
              <div className="bg-light p-6 rounded-lg">
                <h4 className="font-bold mb-4">Quick Facts</h4>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      <span className="font-bold">Result:</span> {test.reportTime}
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      <span className="font-bold">Sample:</span> {test.sample}
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      <span className="font-bold">Duration:</span> {test.duration}
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      <span className="font-bold">Fasting:</span> {test.fasting ? 'Required' : 'Not Required'}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Related Tests */}
          {relatedTests.length > 0 && (
            <div>
              <h2 className="text-3xl font-bold mb-8">Related Tests</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedTests.map((relTest) => (
                  <a key={relTest.id} href={`/tests/${relTest.id}`} className="bg-white p-4 rounded-lg shadow-medical hover:shadow-lg transition">
                    <p className="text-3xl mb-2">🧬</p>
                    <h4 className="font-bold text-sm line-clamp-2 mb-2">{relTest.name}</h4>
                    <p className="text-primary font-bold">₹{relTest.price}</p>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
