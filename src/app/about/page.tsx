import Hero from '@/components/Hero';
import StatCard from '@/components/StatCard';
import DoctorCard from '@/components/DoctorCard';
import { doctors } from '@/data/mock-data';

export const metadata = {
  title: 'About Us - MediCare Diagnostics',
  description: 'Learn about MediCare Diagnostics and our mission to provide quality healthcare.',
};

export default function AboutPage() {
  return (
    <div>
      <Hero
        title="About MediCare Diagnostics"
        subtitle="Committed to providing accurate diagnosis and quality healthcare since 2010"
        image="Lab"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-light p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
              <p className="text-gray-700">
                To provide accurate, timely, and cost-effective diagnostic services to every individual,
                ensuring they have access to quality healthcare. We believe in making healthcare accessible
                to everyone through innovation and compassionate care.
              </p>
            </div>

            <div className="bg-light p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
              <p className="text-gray-700">
                To be the most trusted diagnostic laboratory in the region, known for accuracy, reliability,
                and patient-centric services. We aim to leverage advanced technology and expert professionals
                to deliver healthcare solutions that make a real difference in people&apos;s lives.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Our Journey</h2>
            <p className="text-gray-700 mb-4">
              MediCare Diagnostics was founded in 2010 with a simple mission: to bring quality diagnostic services
              to every household. Starting with a single laboratory in Pune, we have grown to operate 5 state-of-the-art
              branches across Maharashtra.
            </p>
            <p className="text-gray-700 mb-4">
              Over the years, we have served more than 50,000 patients and conducted over 500,000 diagnostic tests.
              Our commitment to excellence, accuracy, and customer satisfaction has made us a trusted name in healthcare diagnostics.
            </p>
            <p className="text-gray-700">
              Today, we are equipped with the latest technology, a team of experienced pathologists, and a strong commitment
              to patient care. We continue to innovate and expand our services to better serve the community.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">By The Numbers</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <StatCard icon="Patients" title="Patients Served" value="50K+" />
              <StatCard icon="Tests" title="Tests Conducted" value="500K+" />
              <StatCard icon="Labs" title="Lab Branches" value="5" />
              <StatCard icon="Accuracy" title="Accuracy Rate" value="99.9%" />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Our Core Values</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-medical text-center">
                <p className="text-4xl mb-3">A+</p>
                <h4 className="font-bold mb-2">Accuracy</h4>
                <p className="text-sm text-gray-700">
                  Precise and reliable test results you can trust
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-medical text-center">
                <p className="text-4xl mb-3">Care</p>
                <h4 className="font-bold mb-2">Compassion</h4>
                <p className="text-sm text-gray-700">
                  Patient-centric care with empathy and respect
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-medical text-center">
                <p className="text-4xl mb-3">New</p>
                <h4 className="font-bold mb-2">Innovation</h4>
                <p className="text-sm text-gray-700">
                  Latest technology and modern practices
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-medical text-center">
                <p className="text-4xl mb-3">Trust</p>
                <h4 className="font-bold mb-2">Integrity</h4>
                <p className="text-sm text-gray-700">
                  Transparent and honest in all dealings
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Certifications & Accreditations</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-light p-6 rounded-lg">
                <p className="text-3xl mb-2">OK</p>
                <p className="font-bold text-sm">ISO 15189 Certified</p>
              </div>
              <div className="bg-light p-6 rounded-lg">
                <p className="text-3xl mb-2">OK</p>
                <p className="font-bold text-sm">NABL Accredited</p>
              </div>
              <div className="bg-light p-6 rounded-lg">
                <p className="text-3xl mb-2">OK</p>
                <p className="font-bold text-sm">CAP Certified</p>
              </div>
              <div className="bg-light p-6 rounded-lg">
                <p className="text-3xl mb-2">OK</p>
                <p className="font-bold text-sm">CLIA Accredited</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Expert Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
