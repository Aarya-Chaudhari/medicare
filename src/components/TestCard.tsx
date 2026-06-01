import { Test } from '@/types';
import { formatPrice } from '@/lib/utils';
import Link from 'next/link';

interface TestCardProps {
  test: Test;
  featured?: boolean;
}

export default function TestCard({ test, featured = false }: TestCardProps) {
  return (
    <Link href={`/tests/${test.id}`}>
      <div
        className={`bg-white rounded-lg shadow-medical hover:shadow-lg transition cursor-pointer h-full overflow-hidden ${
          featured ? 'md:col-span-2 md:row-span-2' : ''
        }`}
      >
        <div className={`bg-gradient-medical text-white p-6 text-center ${featured ? 'py-8' : ''}`}>
          <p className={`${featured ? 'text-5xl' : 'text-3xl'}`}>🧬</p>
        </div>

        <div className="p-6">
          <h3 className={`font-bold mb-2 ${featured ? 'text-2xl' : 'text-lg'}`}>{test.name}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{test.description}</p>

          <div className="space-y-2 mb-4 text-sm text-gray-700">
            <p className="flex items-center space-x-2">
              <span>⏱️</span>
              <span>{test.duration}</span>
            </p>
            <p className="flex items-center space-x-2">
              <span>{test.fasting ? '🚫' : '✅'}</span>
              <span>{test.fasting ? 'Fasting Required' : 'No Fasting'}</span>
            </p>
            <p className="flex items-center space-x-2">
              <span>📋</span>
              <span>{test.sample}</span>
            </p>
          </div>

          <div className="flex items-center justify-between">
            <span className={`font-bold text-primary ${featured ? 'text-3xl' : 'text-2xl'}`}>
              {formatPrice(test.price)}
            </span>
            <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm font-bold">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
