import Hero from '@/components/Hero';
import AppointmentForm from '@/components/AppointmentForm';

export const metadata = {
  title: 'Book Appointment - MediCare Diagnostics',
  description: 'Schedule your medical test appointment online at your nearest branch.',
};

export default function AppointmentPage() {
  return (
    <div>
      <Hero
        title="Book an Appointment"
        subtitle="Schedule your test at your convenient time and location"
        image="Calendar"
      />

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Schedule Your Test</h2>
            <p className="text-gray-600 mb-8">
              Fill in the form below to book your appointment. We will confirm your booking within 2 hours.
            </p>
          </div>

          <AppointmentForm />

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="bg-light p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-4">What to Bring</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Check: Valid ID proof</li>
                <li>Check: Insurance card (if applicable)</li>
                <li>Check: Previous medical reports</li>
                <li>Check: List of current medications</li>
              </ul>
            </div>

            <div className="bg-light p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-4">Important Notes</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Check: Arrive 10 minutes early</li>
                <li>Check: Follow fasting instructions</li>
                <li>Check: Wear loose sleeves for blood tests</li>
                <li>Check: Reports delivered in 24 hours</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
