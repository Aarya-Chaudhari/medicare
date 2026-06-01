import Hero from '@/components/Hero';
import FaqItem from '@/components/FaqItem';

export const metadata = {
  title: 'FAQ - MediCare Diagnostics',
  description: 'Frequently asked questions about our services and tests.',
};

const faqs = [
  {
    question: 'How do I book an appointment?',
    answer: 'You can book an appointment through our website by clicking "Book Appointment" or by calling our customer service team at +91 98765 43210. We also offer online booking for home collection services.',
  },
  {
    question: 'What is your home collection service?',
    answer: 'Our home collection service allows professional phlebotomists to collect blood samples from your home at your preferred time. The service is free, and you only pay for the tests you opt for.',
  },
  {
    question: 'Do I need to fast for all tests?',
    answer: 'Not all tests require fasting. Some tests like blood sugar, lipid profile, and liver function tests require 8-12 hours of fasting. Check the specific test details for fasting requirements.',
  },
  {
    question: 'When will I get my test results?',
    answer: 'Most routine tests are completed within 24 hours. Special tests may take 2-3 days. You can view your reports online through our patient portal or receive them via email.',
  },
  {
    question: 'Are your laboratories certified?',
    answer: 'Yes, all our laboratories are ISO 15189 certified, NABL accredited, and follow CAP and CLIA standards. We maintain the highest quality standards in testing.',
  },
  {
    question: 'What insurance companies do you accept?',
    answer: 'We accept most major insurance companies. Please check with us before your appointment or contact our support team for a list of accepted insurance providers.',
  },
  {
    question: 'Can I download my reports?',
    answer: 'Yes, you can download digital copies of your reports from our patient portal after they are ready. We also provide printed reports at our centers.',
  },
  {
    question: 'How accurate are your test results?',
    answer: 'Our accuracy rate is 99.9%. We use advanced equipment, follow strict quality control measures, and have experienced pathologists reviewing all results.',
  },
  {
    question: 'What should I bring to the center?',
    answer: 'Please bring a valid ID proof, insurance card (if applicable), and any relevant medical reports. Arrive 10 minutes early to complete the registration process.',
  },
  {
    question: 'Do you offer same-day reports?',
    answer: 'For routine tests, we offer next-day reports. For urgent cases, we provide expedited testing. Contact our support team to arrange rush delivery.',
  },
];

export default function FAQPage() {
  return (
    <div>
      <Hero
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our services"
        image="❓"
      />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Got Questions?</h2>
            <p className="text-gray-600 text-lg">
              We're here to help. If you don't find your answer below, please contact our support team.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-medical">
            {faqs.map((faq, idx) => (
              <FaqItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 bg-gradient-medical text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
            <p className="mb-6">Contact our support team for immediate assistance.</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-primary px-6 py-3 rounded-lg hover:shadow-lg transition font-bold">
                Contact Us
              </a>
              <a href="tel:+919876543210" className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-primary transition font-bold">
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
