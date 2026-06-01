interface HeroProps {
  title: string;
  subtitle: string;
  cta?: {
    text: string;
    href: string;
  };
  image?: string;
}

export default function Hero({ title, subtitle, cta, image }: HeroProps) {
  return (
    <div className="relative bg-gradient-medical text-white py-20 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">{title}</h1>
            <p className="text-lg md:text-xl text-blue-100">{subtitle}</p>
            {cta && (
              <a
                href={cta.href}
                className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-bold hover:shadow-lg transition mt-4"
              >
                {cta.text}
              </a>
            )}
          </div>

          {image && (
            <div className="hidden md:block text-center text-7xl animate-bounce-slow">
              {image}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
