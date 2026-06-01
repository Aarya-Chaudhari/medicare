import Hero from '@/components/Hero';

export const metadata = {
  title: 'Careers - MediCare Diagnostics',
  description: 'Join our team. We are hiring talented professionals.',
};

const jobs = [
  {
    title: 'Senior Pathologist',
    department: 'Laboratory',
    location: 'Pune',
    experience: '5+ years',
  },
  {
    title: 'Laboratory Technician',
    department: 'Laboratory',
    location: 'Multiple',
    experience: '1-3 years',
  },
  {
    title: 'Phlebotomist',
    department: 'Collection Center',
    location: 'Multiple',
    experience: 'Certification required',
  },
  {
    title: 'Customer Support Executive',
    department: 'Support',
    location: 'Pune',
    experience: 'Fresh graduates welcome',
  },
  {
    title: 'Sales Executive',
    department: 'Business Development',
    location: 'Multiple',
    experience: '2-4 years',
  },
  {
    title: 'Data Entry Operator',
    department: 'Administration',
    location: 'Pune',
    experience: 'Freshers',
  },
];

export default function CareersPage() {
  return (
    <div>
      <Hero
        title="Careers at MediCare"
        subtitle="Join our team and make a difference in healthcare"
        image="💼"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* About Working Here */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Why Work With Us?</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-light p-6 rounded-lg text-center">
                <p className="text-3xl mb-3">🎯</p>
                <h4 className="font-bold mb-2">Growth</h4>
                <p className="text-sm text-gray-700">
                  Continuous learning and career development opportunities
                </p>
              </div>

              <div className="bg-light p-6 rounded-lg text-center">
                <p className="text-3xl mb-3">💰</p>
                <h4 className="font-bold mb-2">Benefits</h4>
                <p className="text-sm text-gray-700">
                  Competitive salaries and comprehensive benefits package
                </p>
              </div>

              <div className="bg-light p-6 rounded-lg text-center">
                <p className="text-3xl mb-3">🤝</p>
                <h4 className="font-bold mb-2">Culture</h4>
                <p className="text-sm text-gray-700">
                  Inclusive and collaborative work environment
                </p>
              </div>

              <div className="bg-light p-6 rounded-lg text-center">
                <p className="text-3xl mb-3">❤️</p>
                <h4 className="font-bold mb-2">Purpose</h4>
                <p className="text-sm text-gray-700">
                  Make a real impact on people's health and wellbeing
                </p>
              </div>
            </div>
          </div>

          {/* Open Positions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Open Positions</h2>
            <div className="space-y-4">
              {jobs.map((job, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-medical hover:shadow-lg transition">
                  <div className="flex flex-col md:flex-row justify-between md:items-center">
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">{job.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">
                        {job.department} • {job.location}
                      </p>
                      <p className="text-sm text-gray-700">
                        <span className="font-bold">Experience:</span> {job.experience}
                      </p>
                    </div>
                    <button className="mt-4 md:mt-0 bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-bold">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Application Process */}
          <div className="bg-light p-12 rounded-lg mb-12">
            <h3 className="text-2xl font-bold mb-8 text-center">Application Process</h3>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                  1
                </div>
                <h4 className="font-bold mb-2">Apply Online</h4>
                <p className="text-sm text-gray-700">Submit your resume and details</p>
              </div>
              <div>
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                  2
                </div>
                <h4 className="font-bold mb-2">Screening</h4>
                <p className="text-sm text-gray-700">Initial resume screening</p>
              </div>
              <div>
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                  3
                </div>
                <h4 className="font-bold mb-2">Interview</h4>
                <p className="text-sm text-gray-700">One or more interview rounds</p>
              </div>
              <div>
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                  4
                </div>
                <h4 className="font-bold mb-2">Offer</h4>
                <p className="text-sm text-gray-700">Receive offer and join us</p>
              </div>
            </div>
          </div>

          {/* Contact HR */}
          <div className="bg-gradient-medical text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-3">Ready to Join Our Team?</h3>
            <p className="mb-6">Send your resume to careers@medicarediagnostics.in</p>
            <a
              href="mailto:careers@medicarediagnostics.in"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg hover:shadow-lg transition font-bold"
            >
              Send Your Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
