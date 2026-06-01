import Hero from '@/components/Hero';

export const metadata = {
  title: 'Refund Policy - MediCare Diagnostics',
  description: 'Our refund and cancellation policy.',
};

export default function RefundPage() {
  return (
    <div>
      <Hero
        title="Refund Policy"
        subtitle="Our policy on refunds and cancellations"
        image="💰"
      />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-medical space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">1. Cancellation Policy</h2>
              <p className="text-gray-700 mb-3">
                You may cancel your appointment or test booking under the following conditions:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Cancellation done 24 hours before the appointment - Full refund</li>
                <li>Cancellation done 12-24 hours before - 50% refund</li>
                <li>Cancellation done less than 12 hours before - No refund</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">2. Refund Process</h2>
              <p className="text-gray-700 mb-3">
                Refunds will be processed to the original payment method within 7-10 business days.
                The following steps are followed:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Verify the cancellation request</li>
                <li>Calculate refundable amount as per policy</li>
                <li>Process refund to original payment method</li>
                <li>Send confirmation email</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">3. Sample Collection Cancellations</h2>
              <p className="text-gray-700">
                If a sample has already been collected, no refund will be provided as per standard medical practice.
                However, if there's a genuine issue with sample collection, please contact us immediately.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">4. Test Result Issues</h2>
              <p className="text-gray-700">
                If you're not satisfied with the test results due to a technical error on our part, we will:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Re-conduct the test free of charge</li>
                <li>Provide a full refund if re-testing is not possible</li>
                <li>Compensate for any additional inconvenience</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">5. Package Cancellations</h2>
              <p className="text-gray-700">
                Health packages can be cancelled within 7 days of purchase for a full refund if no tests have been conducted.
                Partial package cancellations are not allowed.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">6. No-Show Policy</h2>
              <p className="text-gray-700">
                If you miss your scheduled appointment without cancellation notification:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>No refund will be provided</li>
                <li>Advance payment will be forfeited</li>
                <li>You may rebook with new payment</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">7. Payment Method Issues</h2>
              <p className="text-gray-700">
                If your refund cannot be processed due to issues with your payment method, please contact us immediately.
                We will make alternate arrangements for refund.
              </p>
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-200 p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                <span className="font-bold">Important:</span> For urgent refund issues or disputes, please contact our support team
                at support@medicarediagnostics.in within 30 days of the transaction.
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
