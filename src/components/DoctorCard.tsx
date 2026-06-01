import { Doctor } from '@/types';

interface DoctorCardProps {
  doctor: Doctor;
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-medical hover:shadow-lg transition overflow-hidden">
      <div className="bg-gradient-medical text-white p-8 text-center text-5xl">{doctor.image}</div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{doctor.name}</h3>
        <p className="text-primary font-bold mb-3">{doctor.specialization}</p>

        <div className="space-y-2 text-sm text-gray-600 mb-4">
          <p>
            <span className="font-bold">Experience:</span> {doctor.experience} years
          </p>
          <p>
            <span className="font-bold">Qualification:</span> {doctor.qualification}
          </p>
        </div>

        <div className="space-y-2 text-sm border-t pt-4">
          <a href={`mailto:${doctor.email}`} className="block text-primary hover:underline truncate">
            Mail: {doctor.email}
          </a>
          <a href={`tel:${doctor.phone}`} className="block text-primary hover:underline">
            Phone: {doctor.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
