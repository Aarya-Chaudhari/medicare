import Hero from '@/components/Hero';
import { insurancePartners } from '@/data/mock-data';

export const metadata = {
  title: 'Insurance Partners - MediCare Diagnostics',
  description: 'We accept insurance from major providers for cashless services.',
};

export default function InsurancePage() {
  return (
    <div>
      <Hero
        title="Insurance Partners"
        subtitle="We accept major insurance providers for hassle-free cashless services"
        image="🏦"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Insurance Partners</h2>
            <p className="text-gray-600 text-lg">
              We are empaneled with major insurance companies and health schemes providing cashless diagnostic services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {insurancePartners.map((partner) => (
              <div key={partner.id} className="bg-white p-8 rounded-lg shadow-medical hover:shadow-lg transition">
                <div className="text-5xl mb-4">{partner.logo}</div>
                <h3 className="text-2xl font-bold mb-4">{partner.name}</h3>
                <h4 className="font-bold mb-3 text-primary">Coverage Types:</h4>
                <ul className="space-y-2">
                  {partner.coverageTypes.map((type, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-gray-700">
                      <span className="text-primary font-bold">✓</span>
                      <span>{type}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Information Section */}
          <div className="bg-light p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold mb-6">How Insurance Works</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold mb-3 text-primary">1. Verify Coverage</h4>
                <p className="text-gray-700">
                  Check if your insurance plan covers diagnostic tests at MediCare Diagnostics.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-primary">2. Provide Details</h4>
                <p className="text-gray-700">
                  Share your insurance card and policy number during appointment booking.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-primary">3. Avail Cashless</h4>
                <p className="text-gray-700">
                  Enjoy cashless services and pay only the co-payment amount if applicable.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Insurance FAQs</h3>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg border-l-4 border-primary">
                <h4 className="font-bold mb-2">Q: What documents do I need?</h4>
                <p className="text-gray-700 text-sm">
                  A: You need to provide a valid insurance card, policy document, and valid ID proof during your visit.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-primary">
                <h4 className="font-bold mb-2">Q: Do all tests require pre-authorization?</h4>
                <p className="text-gray-700 text-sm">
                  A: Some tests may require pre-authorization from your insurance provider. Our staff will help coordinate this.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-primary">
                <h4 className="font-bold mb-2">Q: What if my insurance is not listed?</h4>
                <p className="text-gray-700 text-sm">
                  A: Please contact our customer service team. We may be able to process claims for other insurers too.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-primary">
                <h4 className="font-bold mb-2">Q: How long does claim settlement take?</h4>
                <p className="text-gray-700 text-sm">
                  A: Claim settlement depends on your insurance provider, typically 7-30 days from submission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
