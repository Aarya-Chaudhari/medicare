import Hero from '@/components/Hero';
import PackageCard from '@/components/PackageCard';
import { packages } from '@/data/mock-data';

export const metadata = {
  title: 'Health Packages - MediCare Diagnostics',
  description: 'Choose from our tailored health packages designed for different health needs.',
};

export default function PackagesPage() {
  return (
    <div>
      <Hero
        title="Health Packages"
        subtitle="Specially designed packages for comprehensive health screening"
        image="💊"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Packages</h2>
            <p className="text-gray-600 text-lg">
              We offer comprehensive health packages tailored to meet different health needs and budgets.
              Each package includes multiple tests and a detailed health report.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} package={pkg} />
            ))}
          </div>

          {/* Package Comparison */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8">Package Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="border p-4 text-left">Package</th>
                    <th className="border p-4 text-center">Price</th>
                    <th className="border p-4 text-center">Tests</th>
                    <th className="border p-4 text-center">Validity</th>
                  </tr>
                </thead>
                <tbody>
                  {packages.map((pkg) => (
                    <tr key={pkg.id} className="hover:bg-light">
                      <td className="border p-4 font-bold">{pkg.name}</td>
                      <td className="border p-4 text-center">₹{pkg.price}</td>
                      <td className="border p-4 text-center">{pkg.tests.length}</td>
                      <td className="border p-4 text-center">{pkg.validity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
