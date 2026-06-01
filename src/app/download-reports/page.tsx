'use client';

import Hero from '@/components/Hero';
import { useState } from 'react';

export default function DownloadReportsPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [reports, setReports] = useState<any[]>([]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login
    setLoggedIn(true);
    setReports([
      {
        id: 1,
        testName: 'Complete Blood Count (CBC)',
        date: '2024-01-20',
        status: 'Completed',
        reportFile: 'CBC_20240120.pdf',
      },
      {
        id: 2,
        testName: 'Liver Function Test (LFT)',
        date: '2024-01-18',
        status: 'Completed',
        reportFile: 'LFT_20240118.pdf',
      },
      {
        id: 3,
        testName: 'Thyroid Profile',
        date: '2024-01-15',
        status: 'Processing',
        reportFile: null,
      },
    ]);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setEmail('');
    setPassword('');
    setReports([]);
  };

  return (
    <div>
      <Hero
        title="Download Reports"
        subtitle="Access and download your test reports online"
        image="📄"
      />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {!loggedIn ? (
            <div className="bg-white p-8 rounded-lg shadow-medical max-w-md mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center">Login to Your Account</h2>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold mb-2">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary transition"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-bold"
                >
                  Login
                </button>
              </form>

              <div className="mt-6 p-4 bg-light rounded-lg">
                <p className="text-sm text-gray-700">
                  Don't have an account? Register using your appointment details. First time? Use your registered mobile number as password.
                </p>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold">Your Reports</h2>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition font-bold"
                >
                  Logout
                </button>
              </div>

              {reports.length > 0 ? (
                <div className="space-y-4">
                  {reports.map((report) => (
                    <div key={report.id} className="bg-white p-6 rounded-lg shadow-medical hover:shadow-lg transition">
                      <div className="flex justify-between items-start md:items-center">
                        <div>
                          <h3 className="font-bold text-lg mb-2">{report.testName}</h3>
                          <p className="text-sm text-gray-600 mb-2">
                            Tested: {new Date(report.date).toLocaleDateString()}
                          </p>
                          <div className="flex items-center space-x-2">
                            {report.status === 'Completed' ? (
                              <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">
                                ✓ {report.status}
                              </span>
                            ) : (
                              <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-bold">
                                ⟳ {report.status}
                              </span>
                            )}
                          </div>
                        </div>

                        {report.reportFile && (
                          <div className="text-right">
                            <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-bold">
                              📥 Download
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-xl text-gray-600">No reports found</p>
                </div>
              )}

              {/* Information Section */}
              <div className="mt-12 grid md:grid-cols-3 gap-6">
                <div className="bg-light p-6 rounded-lg">
                  <h3 className="font-bold mb-3">📧 Report Delivery</h3>
                  <p className="text-sm text-gray-700">
                    Reports are typically available within 24 hours of sample collection.
                  </p>
                </div>

                <div className="bg-light p-6 rounded-lg">
                  <h3 className="font-bold mb-3">🔒 Security</h3>
                  <p className="text-sm text-gray-700">
                    Your reports are encrypted and secured. Only you can access them.
                  </p>
                </div>

                <div className="bg-light p-6 rounded-lg">
                  <h3 className="font-bold mb-3">🩺 Doctor Consultation</h3>
                  <p className="text-sm text-gray-700">
                    Consult our doctors for report interpretation and guidance.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
