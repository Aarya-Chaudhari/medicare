import Hero from '@/components/Hero';

export const metadata = {
  title: 'Privacy Policy - MediCare Diagnostics',
  description: 'Our privacy policy and data protection practices.',
};

export default function PrivacyPage() {
  return (
    <div>
      <Hero
        title="Privacy Policy"
        subtitle="How we protect your personal information"
        image="🔒"
      />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-medical space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
              <p className="text-gray-700 mb-3">
                We collect personal information including:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Name, email, and contact information</li>
                <li>Medical history and health records</li>
                <li>Test results and diagnostic information</li>
                <li>Insurance information</li>
                <li>Payment and billing information</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-700 mb-3">
                Your information is used for:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Providing medical services and tests</li>
                <li>Sending appointment reminders</li>
                <li>Processing payments</li>
                <li>Healthcare research (with consent)</li>
                <li>Compliance with legal requirements</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">3. Data Security</h2>
              <p className="text-gray-700">
                We implement industry-standard security measures including encryption, firewalls, and access controls
                to protect your personal and medical information from unauthorized access and misuse.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">4. Data Retention</h2>
              <p className="text-gray-700">
                We retain your medical records and personal information for the duration required by law (minimum 5 years)
                and longer if needed for ongoing treatment or legal purposes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">5. Third-Party Sharing</h2>
              <p className="text-gray-700">
                We do not share your information with third parties without your consent, except when required by law,
                insurance purposes, or for healthcare providers involved in your treatment.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
              <p className="text-gray-700 mb-3">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Access your personal information</li>
                <li>Request correction of inaccurate data</li>
                <li>Withdraw consent for data processing</li>
                <li>Request deletion of your data</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
              <p className="text-gray-700">
                For privacy concerns, please contact us at support@medicarediagnostics.in or call +91 98765 43210.
              </p>
            </div>

            <div className="bg-light p-4 rounded-lg border-2 border-primary">
              <p className="text-sm text-gray-700">
                <span className="font-bold">Last Updated:</span> January 2024
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
