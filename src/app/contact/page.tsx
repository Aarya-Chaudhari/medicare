import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import { siteConfig } from '@/lib/config';
import { branches } from '@/data/mock-data';

export const metadata = {
  title: 'Contact Us - MediCare Diagnostics',
  description: 'Get in touch with us for any inquiries or support.',
};

export default function ContactPage() {
  return (
    <div>
      <Hero
        title="Contact Us"
        subtitle="We're here to help. Reach out to us anytime"
        image="📞"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info */}
            <div className="bg-light p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-6 text-primary">General Inquiries</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-bold mb-1">📧 Email</p>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-primary hover:underline">
                    {siteConfig.contact.email}
                  </a>
                </div>
                <div>
                  <p className="font-bold mb-1">📞 Phone</p>
                  <a href={`tel:${siteConfig.contact.phone}`} className="text-primary hover:underline">
                    {siteConfig.contact.phone}
                  </a>
                </div>
                <div>
                  <p className="font-bold mb-1">🚨 Emergency</p>
                  <a href={`tel:${siteConfig.contact.emergency}`} className="text-primary hover:underline">
                    {siteConfig.contact.emergency}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-light p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-6 text-primary">Support</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-bold mb-1">📧 Support Email</p>
                  <a href={`mailto:${siteConfig.contact.support}`} className="text-primary hover:underline">
                    {siteConfig.contact.support}
                  </a>
                </div>
                <div>
                  <p className="font-bold mb-1">🕐 Working Hours</p>
                  <p className="text-gray-700">Mon-Sun: 7:00 AM - 8:00 PM</p>
                </div>
                <div>
                  <p className="font-bold mb-1">📍 Address</p>
                  <p className="text-gray-700 text-sm">{siteConfig.contact.address}</p>
                </div>
              </div>
            </div>

            <div className="bg-light p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-6 text-primary">Follow Us</h3>
              <div className="space-y-3">
                <a
                  href={siteConfig.links.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-primary hover:underline font-bold"
                >
                  📘 Facebook
                </a>
                <a
                  href={siteConfig.links.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-primary hover:underline font-bold"
                >
                  𝕏 Twitter
                </a>
                <a
                  href={siteConfig.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-primary hover:underline font-bold"
                >
                  📷 Instagram
                </a>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-primary hover:underline font-bold"
                >
                  💼 LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
            <div className="max-w-2xl">
              <ContactForm />
            </div>
          </div>

          {/* Branch Locations */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Our Branches</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {branches.map((branch) => (
                <div key={branch.id} className="bg-white p-6 rounded-lg shadow-medical">
                  <h3 className="text-xl font-bold text-primary mb-4">{branch.name}</h3>
                  <p className="text-gray-700 mb-2">
                    <span className="font-bold">Address:</span> {branch.address}, {branch.city}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <span className="font-bold">Hours:</span> {branch.hours}
                  </p>
                  <a href={`tel:${branch.phone}`} className="text-primary hover:underline font-bold">
                    📞 {branch.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
