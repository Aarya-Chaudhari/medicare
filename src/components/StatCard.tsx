interface StatCardProps {
  icon: string;
  title: string;
  value: string;
}

export default function StatCard({ icon, title, value }: StatCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-medical p-6 text-center hover:shadow-lg transition">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-gray-700 font-bold mb-2">{title}</h3>
      <p className="text-3xl font-bold text-primary">{value}</p>
    </div>
  );
}
