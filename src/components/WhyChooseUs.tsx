import { useEffect, useRef, useState } from 'react';

const features = [
  {
    image: '/images/i1.png',
    title: 'Experienced Professionals',
    description:
      'Our skilled team brings decades of hands-on construction expertise, ensuring every project is completed to the highest standard.',
  },
  {
    image: '/images/i3.png',
    title: 'Quality Workmanship',
    description:
      'We are committed to delivering outstanding build quality on every project — from small renovations to large commercial builds.',
  },
  {
    image: '/images/i5.png',
    title: 'Reliable & Trustworthy',
    description:
      'Dependability is at the core of everything we do. We show up, communicate clearly, and deliver on our promises every time.',
  },
  {
    image: '/images/i2.png',
    title: 'Customer Satisfaction',
    description:
      'Your satisfaction drives us. We work closely with clients from planning through completion to ensure expectations are exceeded.',
  },
  {
    image: '/images/i4.png.jpg',
    title: 'Inspection Utilities',
    description:
      'Rigorous quality checks and structured inspections are integrated throughout every phase of the construction process.',
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/c2.jpg')" }}
      />
      <div className="absolute inset-0 bg-gray-950/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            WHY CHOOSE <span className="text-white">US?</span>
          </h2>
          <div className="flex justify-center gap-2 mt-3">
            <div className="h-1 w-12 bg-red-600 rounded-full" />
            <div className="h-1 w-4 bg-green-500 rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className={`flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: visible ? `${idx * 100}ms` : '0ms' }}
            >
              <div className="flex-shrink-0 h-fit">
                <div className="w-14 h-14 rounded-xl overflow-hidden bg-white/10 border border-white/20">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = 'none';
                      (e.currentTarget.parentElement as HTMLElement).classList.add('flex', 'items-center', 'justify-center');
                    }}
                  />
                </div>
              </div>
              <div>
                <h3 className="text-white font-bold text-base mb-1.5">{feature.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`text-center transition-all duration-700 delay-500 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <button className="group relative bg-red-700 hover:bg-red-600 text-white font-bold px-10 py-3.5 rounded text-sm tracking-widest transition-all duration-300 hover:shadow-xl hover:shadow-red-900/40 overflow-hidden">
            <span className="relative z-10">GET A QUOTE</span>
            <span className="absolute inset-0 bg-red-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 opacity-30" />
          </button>
        </div>
      </div>
    </section>
  );
}
