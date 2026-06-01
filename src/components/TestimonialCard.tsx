import { Testimonial } from '@/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-medical p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h4 className="font-bold text-lg">{testimonial.name}</h4>
          <p className="text-sm text-gray-600">{testimonial.city}</p>
        </div>
        <div className="text-2xl">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <span key={i}>⭐</span>
          ))}
        </div>
      </div>

      <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>

      <p className="text-xs text-gray-500">{new Date(testimonial.date).toLocaleDateString()}</p>
    </div>
  );
}
