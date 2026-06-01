import Hero from '@/components/Hero';

export const metadata = {
  title: 'Franchise Opportunities - MediCare Diagnostics',
  description: 'Join our franchise network and grow your business in healthcare diagnostics.',
};

export default function FranchisePage() {
  return (
    <div>
      <Hero
        title="Franchise Opportunities"
        subtitle="Grow your business with MediCare Diagnostics franchise model"
        image="🏪"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Overview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Why Franchise With MediCare?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-light p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-primary">Opportunities</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center space-x-3">
                    <span className="font-bold text-primary">✓</span>
                    <span>Profitable healthcare business model</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="font-bold text-primary">✓</span>
                    <span>Established brand recognition</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="font-bold text-primary">✓</span>
                    <span>Comprehensive support and training</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="font-bold text-primary">✓</span>
                    <span>Growing demand for diagnostics</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="font-bold text-primary">✓</span>
                    <span>Low operational costs</span>
                  </li>
                </ul>
              </div>

              <div className="bg-light p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-primary">Support Provided</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center space-x-3">
                    <span className="font-bold text-primary">👨‍🏫</span>
                    <span>Training and certification</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="font-bold text-primary">📚</span>
                    <span>Operations manual</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="font-bold text-primary">🛠️</span>
                    <span>Technical support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="font-bold text-primary">📈</span>
                    <span>Marketing support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="font-bold text-primary">🤝</span>
                    <span>Ongoing business guidance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Franchise Models */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8">Franchise Models</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-lg shadow-medical">
                <h4 className="text-xl font-bold mb-4 text-primary">Standard Laboratory</h4>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="flex items-start space-x-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Full-fledged diagnostic center</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Investment: ₹25-40 Lakhs</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Area required: 800-1200 sq ft</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-primary font-bold">•</span>
                    <span>All major tests available</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-primary font-bold">•</span>
                    <span>ROI: 24-36 months</span>
                  </li>
                </ul>
                <button className="w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-bold">
                  Learn More
                </button>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-medical border-2 border-primary">
                <h4 className="text-xl font-bold mb-4 text-primary">Collection Center</h4>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="flex items-start space-x-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Sample collection center</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Investment: ₹5-10 Lakhs</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Area required: 200-400 sq ft</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Sample testing at main lab</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-primary font-bold">•</span>
                    <span>ROI: 18-24 months</span>
                  </li>
                </ul>
                <button className="w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-bold">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Requirements */}
          <div className="bg-light p-12 rounded-lg mb-12">
            <h3 className="text-2xl font-bold mb-8">Franchisee Requirements</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-bold mb-3 text-primary">Financial</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ Minimum investment capacity</li>
                  <li>✓ Working capital reserves</li>
                  <li>✓ Personal funds contribution</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-bold mb-3 text-primary">Professional</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ Business experience</li>
                  <li>✓ Management skills</li>
                  <li>✓ Healthcare interest</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-bold mb-3 text-primary">Location</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ High foot traffic area</li>
                  <li>✓ Proper infrastructure</li>
                  <li>✓ Suitable building layout</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-gradient-medical text-white p-12 rounded-lg text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Join Our Network?</h3>
            <p className="text-lg mb-8">
              Let's discuss franchise opportunities and grow together in the healthcare sector.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a
                href="mailto:franchise@medicarediagnostics.in"
                className="bg-white text-primary px-8 py-3 rounded-lg hover:shadow-lg transition font-bold"
              >
                Send Inquiry
              </a>
              <a
                href="tel:+919876543210"
                className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-primary transition font-bold"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
