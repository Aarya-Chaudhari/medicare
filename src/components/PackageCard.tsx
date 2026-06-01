import { Package } from '@/types';
import { formatPrice, calculateDiscountedPrice } from '@/lib/utils';
import Link from 'next/link';

interface PackageCardProps {
  package: Package;
}

export default function PackageCard({ package: pkg }: PackageCardProps) {
  const discountedPrice = calculateDiscountedPrice(pkg.price, pkg.discount);

  return (
    <div className="bg-white rounded-lg shadow-medical hover:shadow-lg transition overflow-hidden flex flex-col">
      {pkg.discount && (
        <div className="bg-red-500 text-white px-4 py-2 text-center font-bold">
          Save {pkg.discount}% - {formatPrice(pkg.price - discountedPrice)}
        </div>
      )}

      <div className="bg-gradient-medical text-white p-6 text-center">
        <p className="text-4xl">💊</p>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>

        <div className="mb-4">
          <p className="text-sm text-gray-700 mb-2">
            <span className="font-bold">Validity:</span> {pkg.validity}
          </p>
          <p className="text-sm text-gray-700">
            <span className="font-bold">Includes:</span> {pkg.tests.length} tests
          </p>
        </div>

        <div className="mb-4 flex-1">
          <p className="text-xs text-gray-600 font-bold mb-2">Tests:</p>
          <ul className="text-xs text-gray-700 space-y-1">
            {pkg.tests.slice(0, 3).map((test, idx) => (
              <li key={idx} className="flex items-center space-x-2">
                <span>✓</span>
                <span>{test}</span>
              </li>
            ))}
            {pkg.tests.length > 3 && (
              <li className="text-primary font-bold">+{pkg.tests.length - 3} more</li>
            )}
          </ul>
        </div>

        <div className="border-t pt-4">
          <div className="flex items-center justify-between mb-4">
            {pkg.discount && (
              <span className="text-gray-500 line-through">{formatPrice(pkg.price)}</span>
            )}
            <span className="text-3xl font-bold text-primary">{formatPrice(discountedPrice)}</span>
          </div>

          <Link href="/appointment" className="w-full">
            <button className="w-full bg-primary text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition font-bold">
              Book Package
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
