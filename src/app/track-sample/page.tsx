'use client';

import Hero from '@/components/Hero';
import { useState } from 'react';

export default function TrackSamplePage() {
  const [trackingId, setTrackingId] = useState('');
  const [result, setResult] = useState<any>(null);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock tracking
    setResult({
      trackingId,
      patientName: 'John Doe',
      tests: ['CBC', 'LFT', 'Blood Sugar'],
      status: 'Under Testing',
      submissionDate: new Date().toLocaleDateString(),
      expectedCompletionDate: new Date(Date.now() + 24 * 60 * 60 * 1000).toLocaleDateString(),
      notes: 'Your samples are being processed. Report will be ready soon.',
    });
  };

  return (
    <div>
      <Hero
        title="Track Sample"
        subtitle="Monitor the status of your test samples in real-time"
        image="📍"
      />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-medical mb-12">
            <h2 className="text-2xl font-bold mb-6">Track Your Sample</h2>

            <form onSubmit={handleTrack} className="space-y-4">
              <div>
                <label className="block text-sm font-bold mb-2">Tracking ID / Sample ID</label>
                <input
                  type="text"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  placeholder="Enter your sample tracking ID"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary transition"
                />
                <p className="text-xs text-gray-600 mt-2">
                  You can find your tracking ID in your appointment confirmation email
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-bold"
              >
                Track Sample
              </button>
            </form>

            {result && (
              <div className="mt-12 pt-12 border-t-2 border-gray-200">
                <h3 className="text-2xl font-bold mb-6">Sample Status</h3>

                <div className="bg-light p-6 rounded-lg mb-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600 font-bold mb-1">Tracking ID</p>
                      <p className="text-lg text-gray-800">{result.trackingId}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-bold mb-1">Patient Name</p>
                      <p className="text-lg text-gray-800">{result.patientName}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-bold mb-1">Submission Date</p>
                      <p className="text-lg text-gray-800">{result.submissionDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-bold mb-1">Expected Completion</p>
                      <p className="text-lg text-gray-800">{result.expectedCompletionDate}</p>
                    </div>
                  </div>
                </div>

                {/* Status Timeline */}
                <div className="mb-6">
                  <p className="font-bold mb-4">Status: {result.status}</p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                        ✓
                      </div>
                      <div>
                        <p className="font-bold">Sample Received</p>
                        <p className="text-sm text-gray-600">Your sample has been received</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 rounded-full bg-yellow-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                        ⟳
                      </div>
                      <div>
                        <p className="font-bold">Testing in Progress</p>
                        <p className="text-sm text-gray-600">Tests are being conducted</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 rounded-full bg-gray-300 text-white flex items-center justify-center font-bold flex-shrink-0">
                        ⏱️
                      </div>
                      <div>
                        <p className="font-bold">Report Generation</p>
                        <p className="text-sm text-gray-600">Report will be generated soon</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tests */}
                <div className="mb-6">
                  <p className="font-bold mb-3">Tests Requested:</p>
                  <div className="flex flex-wrap gap-2">
                    {result.tests.map((test: string, idx: number) => (
                      <span key={idx} className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold">
                        {test}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Notes */}
                <div className="bg-blue-50 border-2 border-blue-200 p-4 rounded-lg">
                  <p className="text-sm"><span className="font-bold">Note:</span> {result.notes}</p>
                </div>
              </div>
            )}
          </div>

          {/* Information */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-light p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">📧 Email Notification</h3>
              <p className="text-sm text-gray-700">
                We will send you email notifications at each stage of testing. Check your inbox and spam folder.
              </p>
            </div>

            <div className="bg-light p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">📱 SMS Alerts</h3>
              <p className="text-sm text-gray-700">
                SMS alerts are sent automatically when your report is ready. Charges apply as per your plan.
              </p>
            </div>

            <div className="bg-light p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">🔐 Secure Access</h3>
              <p className="text-sm text-gray-700">
                Your sample information is secure. Only authorized personnel have access to your data.
              </p>
            </div>

            <div className="bg-light p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">💬 Support</h3>
              <p className="text-sm text-gray-700">
                Contact our support team for any tracking issues at +91 98765 43210.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
