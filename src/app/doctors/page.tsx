import Hero from '@/components/Hero';
import DoctorCard from '@/components/DoctorCard';
import { doctors } from '@/data/mock-data';

export const metadata = {
  title: 'Our Doctors - MediCare Diagnostics',
  description: 'Meet our team of experienced pathologists and medical professionals.',
};

export default function DoctorsPage() {
  return (
    <div>
      <Hero
        title="Our Expert Doctors"
        subtitle="Experienced pathologists and medical professionals committed to your health"
        image="👨‍⚕️"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Medical Excellence</h2>
            <p className="text-gray-600 text-lg">
              Our team comprises highly qualified and experienced medical professionals dedicated to providing
              accurate diagnoses and exceptional patient care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>

          {/* Expertise */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Areas of Expertise</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-light p-6 rounded-lg">
                <h3 className="font-bold text-primary mb-3">Clinical Pathology</h3>
                <p className="text-sm text-gray-700">
                  Comprehensive analysis of blood, urine, and body fluids for disease detection and monitoring.
                </p>
              </div>

              <div className="bg-light p-6 rounded-lg">
                <h3 className="font-bold text-primary mb-3">Hematology</h3>
                <p className="text-sm text-gray-700">
                  Specialized testing for blood disorders, infections, and hematological malignancies.
                </p>
              </div>

              <div className="bg-light p-6 rounded-lg">
                <h3 className="font-bold text-primary mb-3">Biochemistry</h3>
                <p className="text-sm text-gray-700">
                  Analysis of proteins, enzymes, and metabolites for organ function assessment.
                </p>
              </div>

              <div className="bg-light p-6 rounded-lg">
                <h3 className="font-bold text-primary mb-3">Immunology</h3>
                <p className="text-sm text-gray-700">
                  Testing for immune system disorders and infectious diseases.
                </p>
              </div>

              <div className="bg-light p-6 rounded-lg">
                <h3 className="font-bold text-primary mb-3">Microbiology</h3>
                <p className="text-sm text-gray-700">
                  Culture and identification of bacteria, viruses, and fungi.
                </p>
              </div>

              <div className="bg-light p-6 rounded-lg">
                <h3 className="font-bold text-primary mb-3">Genetic Pathology</h3>
                <p className="text-sm text-gray-700">
                  Advanced genetic testing for hereditary conditions and disease risk assessment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
