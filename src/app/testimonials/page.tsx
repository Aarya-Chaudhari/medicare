import Hero from '@/components/Hero';
import TestimonialCard from '@/components/TestimonialCard';
import { testimonials } from '@/data/mock-data';

export const metadata = {
  title: 'Testimonials - MediCare Diagnostics',
  description: 'Read what our satisfied patients have to say about our services.',
};

export default function TestimonialsPage() {
  return (
    <div>
      <Hero
        title="Patient Testimonials"
        subtitle="Real stories from our happy customers"
        image="⭐"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Patients Say</h2>
            <p className="text-gray-600 text-lg">
              Join thousands of satisfied patients who trust MediCare Diagnostics for accurate and reliable healthcare services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          {/* Statistics */}
          <div className="bg-light p-12 rounded-lg text-center mb-12">
            <h3 className="text-2xl font-bold mb-8">Patient Satisfaction</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-5xl font-bold text-primary mb-2">⭐ 4.9/5</p>
                <p className="text-gray-700">Average Rating</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-primary mb-2">99%</p>
                <p className="text-gray-700">Patient Satisfaction</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-primary mb-2">50K+</p>
                <p className="text-gray-700">Happy Patients</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Why Patients Choose MediCare?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-medical">
                <p className="text-2xl mb-3">✓</p>
                <h4 className="font-bold mb-2">Accurate Results</h4>
                <p className="text-sm text-gray-700">
                  Our state-of-the-art laboratories ensure highly accurate test results you can trust.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-medical">
                <p className="text-2xl mb-3">✓</p>
                <h4 className="font-bold mb-2">Quick Reports</h4>
                <p className="text-sm text-gray-700">
                  Get your test reports within 24 hours for most routine tests.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-medical">
                <p className="text-2xl mb-3">✓</p>
                <h4 className="font-bold mb-2">Expert Pathologists</h4>
                <p className="text-sm text-gray-700">
                  Our experienced and qualified doctors ensure thorough analysis of your tests.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-medical">
                <p className="text-2xl mb-3">✓</p>
                <h4 className="font-bold mb-2">Home Collection</h4>
                <p className="text-sm text-gray-700">
                  Convenient home collection service without any additional charges.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-medical">
                <p className="text-2xl mb-3">✓</p>
                <h4 className="font-bold mb-2">Affordable Pricing</h4>
                <p className="text-sm text-gray-700">
                  Competitive pricing with special packages and discounts available.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-medical">
                <p className="text-2xl mb-3">✓</p>
                <h4 className="font-bold mb-2">24/7 Support</h4>
                <p className="text-sm text-gray-700">
                  Round-the-clock customer support for all your queries and concerns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
