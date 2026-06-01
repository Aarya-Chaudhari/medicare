import Hero from '@/components/Hero';

export const metadata = {
  title: 'Terms & Conditions - MediCare Diagnostics',
  description: 'Our terms and conditions of service.',
};

export default function TermsPage() {
  return (
    <div>
      <Hero
        title="Terms & Conditions"
        subtitle="Please read these terms carefully before using our services"
        image="📜"
      />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-medical space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700">
                By accessing and using this website and our services, you accept and agree to be bound by the terms,
                conditions, and our privacy policy outlined below.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
              <p className="text-gray-700 mb-3">
                Permission is granted to temporarily download one copy of the materials for personal,
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title,
                and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to decompile or reverse engineer any software</li>
                <li>Remove any copyright or proprietary notations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">3. Disclaimer</h2>
              <p className="text-gray-700">
                The materials on our website are provided "as is". We make no warranties, expressed or implied,
                and hereby disclaim and negate all other warranties including, without limitation, implied warranties
                or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">4. Limitations</h2>
              <p className="text-gray-700">
                In no event shall MediCare Diagnostics be liable for any damages (including, without limitation,
                damages for loss of data or profit) even if we have been notified of the possibility of such damage.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">5. Accuracy of Materials</h2>
              <p className="text-gray-700">
                The materials appearing on our website could include technical, typographical, or photographic errors.
                We do not warrant that any of the materials on our website are accurate, complete, or current.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">6. Modifications</h2>
              <p className="text-gray-700">
                We may revise these terms of service for our website at any time without notice.
                By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">7. Governing Law</h2>
              <p className="text-gray-700">
                These terms and conditions and any separate agreements we provide to you are governed by and construed
                in accordance with the laws of Maharashtra, India, and you irrevocably submit to the exclusive jurisdiction
                of the courts in that location.
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
