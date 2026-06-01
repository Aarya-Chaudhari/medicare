import { Branch } from '@/types';

interface BranchCardProps {
  branch: Branch;
}

export default function BranchCard({ branch }: BranchCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-medical overflow-hidden hover:shadow-lg transition">
      <div className="bg-gradient-medical text-white p-6">
        <h3 className="text-2xl font-bold">{branch.name}</h3>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <p className="text-sm text-gray-600 font-bold mb-1">📍 Address</p>
          <p className="text-gray-800">{branch.address}</p>
          <p className="text-gray-800">{branch.city}</p>
        </div>

        <div>
          <p className="text-sm text-gray-600 font-bold mb-1">⏰ Working Hours</p>
          <p className="text-gray-800">{branch.hours}</p>
        </div>

        <div className="space-y-2">
          <a
            href={`tel:${branch.phone}`}
            className="block text-primary hover:underline font-bold"
          >
            📞 {branch.phone}
          </a>
          <a
            href={`https://maps.google.com/?q=${branch.coordinates.lat},${branch.coordinates.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-primary hover:underline font-bold"
          >
            🗺️ Get Directions
          </a>
        </div>

        <div className="bg-light p-4 rounded-lg">
          <p className="text-xs text-gray-600 font-bold mb-2">📱 Google Maps Coordinates</p>
          <p className="text-sm text-gray-800">
            {branch.coordinates.lat}, {branch.coordinates.lng}
          </p>
        </div>
      </div>
    </div>
  );
}
