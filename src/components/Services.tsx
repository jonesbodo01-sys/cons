import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Building Construction',
    description:
      'From foundation to finishing, we deliver reliable, high-quality construction solutions tailored to your vision and budget.',
    image: '/images/c1.jpg',
  },
  {
    id: 2,
    title: 'Renovations & Remodeling',
    description:
      'Breathe new life into existing spaces with high-end renovation and complete remodeling services for residential and commercial properties.',
    image: '/images/c10.jpg',
  },
  {
    id: 3,
    title: 'Concrete & Masonry Work',
    description:
      'Expert concrete and masonry craftsmanship ensuring durable, structurally sound foundations and finishes that stand the test of time.',
    image: '/images/c3.jpg',
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            OUR <span className="text-red-700">SERVICES</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            We offer a wide range of professional construction services tailored to meet your needs.
            Quality, reliability and customer satisfaction are our top priorities.
          </p>
          <div className="mt-4 flex justify-center gap-2">
            <div className="h-1 w-12 bg-red-700 rounded-full" />
            <div className="h-1 w-4 bg-green-700 rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className={`group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: visible ? `${idx * 120}ms` : '0ms' }}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="p-6">
                <div className="w-10 h-1 bg-red-700 rounded mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.description}</p>
                <button className="flex items-center gap-2 bg-red-700 hover:bg-red-600 text-white text-xs font-bold px-5 py-2.5 rounded transition-all duration-200 hover:shadow-lg hover:shadow-red-900/30 group/btn">
                  LEARN MORE
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
