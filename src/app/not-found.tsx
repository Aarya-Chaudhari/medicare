import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-light">
      <div className="text-center px-4">
        <div className="text-9xl font-bold text-primary mb-4">404</div>
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8 text-lg">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <div className="space-y-4">
          <Link href="/" className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-bold mr-4">
            Go Home
          </Link>
          <Link href="/contact" className="inline-block border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-light transition font-bold">
            Contact Us
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 bg-white p-8 rounded-lg shadow-medical max-w-md mx-auto">
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="text-left space-y-2">
            <li>
              <Link href="/tests" className="text-primary hover:underline">
                🔬 Browse Tests
              </Link>
            </li>
            <li>
              <Link href="/packages" className="text-primary hover:underline">
                💊 View Packages
              </Link>
            </li>
            <li>
              <Link href="/appointment" className="text-primary hover:underline">
                📅 Book Appointment
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-primary hover:underline">
                ❓ FAQs
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
