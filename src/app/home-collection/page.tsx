import Hero from '@/components/Hero';
import HomeCollectionForm from '@/components/HomeCollectionForm';

export const metadata = {
  title: 'Book Home Collection - MediCare Diagnostics',
  description: 'Request professional blood sample collection at your doorstep.',
};

export default function HomeCollectionPage() {
  return (
    <div>
      <Hero
        title="Home Collection Service"
        subtitle="Professional phlebotomists at your doorstep with complete safety measures"
        image="🏠"
      />

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Request Home Collection</h2>
            <p className="text-gray-600 mb-8">
              Our trained phlebotomists will collect samples from your home at your preferred time.
              Safe, convenient, and completely professional.
            </p>
          </div>

          <HomeCollectionForm />

          {/* Benefits Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">Why Home Collection?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-light p-6 rounded-lg">
                <p className="text-2xl mb-3">🏥</p>
                <h4 className="font-bold mb-2">Professional & Safe</h4>
                <p className="text-sm text-gray-700">
                  Our trained phlebotomists use sterile equipment and follow all safety protocols.
                </p>
              </div>

              <div className="bg-light p-6 rounded-lg">
                <p className="text-2xl mb-3">⏰</p>
                <h4 className="font-bold mb-2">Convenient Timing</h4>
                <p className="text-sm text-gray-700">
                  Choose a time that suits your schedule. Early morning, evening, or weekend.
                </p>
              </div>

              <div className="bg-light p-6 rounded-lg">
                <p className="text-2xl mb-3">📊</p>
                <h4 className="font-bold mb-2">Accurate Results</h4>
                <p className="text-sm text-gray-700">
                  Samples are handled with care and analyzed in our certified laboratories.
                </p>
              </div>

              <div className="bg-light p-6 rounded-lg">
                <p className="text-2xl mb-3">💰</p>
                <h4 className="font-bold mb-2">No Extra Charges</h4>
                <p className="text-sm text-gray-700">
                  Home collection is absolutely free. Pay only for the tests you opt for.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
            <div className="space-y-4">
              <div className="bg-white border rounded-lg p-4">
                <h4 className="font-bold mb-2">Q: What is the collection timing?</h4>
                <p className="text-sm text-gray-700">
                  A: We offer morning collection between 7 AM to 9 AM, and evening collection from 4 PM to 6 PM.
                </p>
              </div>

              <div className="bg-white border rounded-lg p-4">
                <h4 className="font-bold mb-2">Q: Are samples properly stored and transported?</h4>
                <p className="text-sm text-gray-700">
                  A: Yes, all samples are collected in sterile containers and transported in temperature-controlled boxes.
                </p>
              </div>

              <div className="bg-white border rounded-lg p-4">
                <h4 className="font-bold mb-2">Q: Can I request collection on specific days?</h4>
                <p className="text-sm text-gray-700">
                  A: Yes, we provide collection services on weekdays, weekends, and holidays based on your preference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
