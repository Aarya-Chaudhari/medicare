'use client';

import Link from 'next/link';
import { siteConfig } from '@/lib/config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
              <span className="text-2xl">🏥</span>
              <span>MediCare</span>
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Leading diagnostic laboratory committed to providing quality healthcare services.
            </p>
            <div className="flex space-x-4">
              <a href={siteConfig.links.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                f
              </a>
              <a href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                𝕏
              </a>
              <a href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                📷
              </a>
              <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                in
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-primary transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/tests" className="hover:text-primary transition">
                  Tests
                </Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-primary transition">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="/appointment" className="hover:text-primary transition">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link href="/home-collection" className="hover:text-primary transition">
                  Home Collection
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-primary transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/branches" className="hover:text-primary transition">
                  Branches
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="hover:text-primary transition">
                  Our Doctors
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-primary transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/corporate" className="hover:text-primary transition">
                  Corporate Health
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-start space-x-2">
                <span>📧</span>
                <span>{siteConfig.contact.email}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span>📞</span>
                <span>{siteConfig.contact.phone}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span>🚨</span>
                <span>{siteConfig.contact.emergency}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span>📍</span>
                <span>{siteConfig.contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="border-t border-gray-700 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-400 mb-4">
            <Link href="/privacy" className="hover:text-primary transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition">
              Terms & Conditions
            </Link>
            <Link href="/refund" className="hover:text-primary transition">
              Refund Policy
            </Link>
          </div>

          <div className="text-center text-gray-500 text-sm">
            <p>&copy; {currentYear} MediCare Diagnostics. All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* Floating Buttons */}
      <div className="fixed bottom-4 right-4 flex flex-col space-y-3 z-40">
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg transition"
          title="WhatsApp"
        >
          💬
        </a>
        <button
          onClick={() => {
            // Chatbot trigger
            console.log('Chatbot triggered');
          }}
          className="bg-primary hover:bg-blue-700 text-white rounded-full p-3 shadow-lg transition"
          title="AI Chatbot"
        >
          🤖
        </button>
      </div>
    </footer>
  );
}
