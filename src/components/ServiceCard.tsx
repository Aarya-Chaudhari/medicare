import { ServiceCard as ServiceCardType } from '@/types';

interface ServiceCardProps {
  service: ServiceCardType;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-medical p-6 hover:shadow-lg transition">
      <div className="text-4xl mb-4">{service.icon}</div>
      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
      <p className="text-gray-600 text-sm mb-4">{service.description}</p>
      
      <ul className="space-y-2">
        {service.features.map((feature, idx) => (
          <li key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
            <span className="text-primary font-bold">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
