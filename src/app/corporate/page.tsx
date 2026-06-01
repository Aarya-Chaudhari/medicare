import Hero from '@/components/Hero';

export const metadata = {
  title: 'Corporate Health Services - MediCare Diagnostics',
  description: 'Comprehensive health screening programs for corporate clients.',
};

export default function CorporateHealthPage() {
  return (
    <div>
      <Hero
        title="Corporate Health Services"
        subtitle="Comprehensive employee health screening and wellness programs"
        image="🏢"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Overview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Tailored Health Solutions for Your Business</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-light p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-primary">Our Services</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center space-x-3">
                    <span className="font-bold text-primary">✓</span>
                    <span>Employee health screening programs</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="font-bold text-primary">✓</span>
                    <span>Customized health packages</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="font-bold text-primary">✓</span>
                    <span>On-site health camps</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="font-bold text-primary">✓</span>
                    <span>Health reports and analytics</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="font-bold text-primary">✓</span>
                    <span>Wellness consultations</span>
                  </li>
                </ul>
              </div>

              <div className="bg-light p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-primary">Benefits</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center space-x-3">
                    <span className="font-bold text-primary">💼</span>
                    <span>Improved employee productivity</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="font-bold text-primary">💪</span>
                    <span>Reduced absenteeism</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="font-bold text-primary">❤️</span>
                    <span>Enhanced employee wellness</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="font-bold text-primary">📊</span>
                    <span>Detailed health reports</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="font-bold text-primary">💰</span>
                    <span>Cost-effective programs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Corporate Packages */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8">Standard Corporate Packages</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-medical">
                <h4 className="text-xl font-bold mb-4 text-primary">Basic Wellness</h4>
                <p className="text-3xl font-bold text-gray-700 mb-4">₹500<span className="text-lg text-gray-600">/employee</span></p>
                <ul className="space-y-2 text-sm text-gray-700 mb-6">
                  <li>✓ CBC Test</li>
                  <li>✓ Blood Sugar</li>
                  <li>✓ Lipid Profile</li>
                  <li>✓ Health Report</li>
                </ul>
                <button className="w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-bold">
                  Request Quote
                </button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-medical border-2 border-primary">
                <h4 className="text-xl font-bold mb-4 text-primary">Standard Checkup</h4>
                <p className="text-3xl font-bold text-gray-700 mb-4">₹1200<span className="text-lg text-gray-600">/employee</span></p>
                <ul className="space-y-2 text-sm text-gray-700 mb-6">
                  <li>✓ CBC, LFT, KFT</li>
                  <li>✓ Thyroid Profile</li>
                  <li>✓ Lipid Profile</li>
                  <li>✓ Doctor Consultation</li>
                  <li>✓ Detailed Report</li>
                </ul>
                <button className="w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-bold">
                  Request Quote
                </button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-medical">
                <h4 className="text-xl font-bold mb-4 text-primary">Executive Health</h4>
                <p className="text-3xl font-bold text-gray-700 mb-4">₹2500<span className="text-lg text-gray-600">/employee</span></p>
                <ul className="space-y-2 text-sm text-gray-700 mb-6">
                  <li>✓ Full Health Panel</li>
                  <li>✓ Specialized Tests</li>
                  <li>✓ Preventive Screening</li>
                  <li>✓ Expert Consultation</li>
                  <li>✓ Wellness Plan</li>
                </ul>
                <button className="w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-bold">
                  Request Quote
                </button>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-light p-12 rounded-lg text-center mb-12">
            <h3 className="text-2xl font-bold mb-8">Why Companies Choose Us</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <p className="text-4xl font-bold text-primary mb-2">500+</p>
                <p className="text-sm text-gray-700">Corporate Clients</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary mb-2">1M+</p>
                <p className="text-sm text-gray-700">Tests Conducted</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary mb-2">99%</p>
                <p className="text-sm text-gray-700">Satisfaction Rate</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary mb-2">24/7</p>
                <p className="text-sm text-gray-700">Support Available</p>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-gradient-medical text-white p-12 rounded-lg text-center">
            <h3 className="text-3xl font-bold mb-4">Partner With Us</h3>
            <p className="text-lg mb-8">
              Invest in your employees' health and wellbeing with our comprehensive corporate health programs.
            </p>
            <a
              href="mailto:corporate@medicarediagnostics.in"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg hover:shadow-lg transition font-bold"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
