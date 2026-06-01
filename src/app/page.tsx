import Hero from '@/components/Hero';
import StatCard from '@/components/StatCard';
import ServiceCard from '@/components/ServiceCard';
import TestCard from '@/components/TestCard';
import PackageCard from '@/components/PackageCard';
import TestimonialCard from '@/components/TestimonialCard';
import { tests, packages, services, testimonials, branches } from '@/data/mock-data';

export const metadata = {
  title: 'MediCare Diagnostics - Professional Healthcare Laboratory',
  description: 'Leading diagnostic laboratory providing comprehensive health testing services with home collection facilities.',
};

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Your Health, Our Priority"
        subtitle="Professional diagnostic laboratory services with accurate results and compassionate care"
        cta={{ text: 'Book Appointment', href: '/appointment' }}
        image="🏥"
      />

      {/* Stats Section */}
      <section className="py-12 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose MediCare?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <StatCard icon="👥" title="Patients Served" value="50K+" />
            <StatCard icon="🔬" title="Tests Available" value="100+" />
            <StatCard icon="📍" title="Lab Branches" value="5" />
            <StatCard icon="⭐" title="Success Rate" value="99.9%" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tests */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Popular Tests</h2>
          <p className="text-center text-gray-600 mb-12">Quick, accurate, and affordable diagnostic tests</p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
            {tests.slice(0, 8).map((test) => (
              <TestCard key={test.id} test={test} />
            ))}
          </div>
          <div className="text-center">
            <a
              href="/tests"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-bold"
            >
              View All Tests
            </a>
          </div>
        </div>
      </section>

      {/* Health Packages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Health Packages</h2>
          <p className="text-center text-gray-600 mb-12">Customized packages for different health needs</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} package={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Patients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Branches */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Branches</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center">
            {branches.map((branch) => (
              <div key={branch.id} className="bg-light p-4 rounded-lg">
                <p className="font-bold text-primary mb-2">{branch.city}</p>
                <p className="text-sm text-gray-600">{branch.address}</p>
                <a href={`tel:${branch.phone}`} className="text-xs text-primary hover:underline block mt-2">
                  {branch.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-medical text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Your Test?</h2>
          <p className="text-lg mb-8">Schedule an appointment or request home collection today</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="/appointment"
              className="bg-white text-primary px-8 py-3 rounded-lg hover:shadow-lg transition font-bold"
            >
              Book Appointment
            </a>
            <a
              href="/home-collection"
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-primary transition font-bold"
            >
              Request Home Collection
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
