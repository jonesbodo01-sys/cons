import { Phone } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/c2.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-900/75 to-gray-800/40" />

      <div
        className={`relative z-10 max-w-7xl mx-auto px-6 sm:px-10 pt-24 pb-16 transition-all duration-1000 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <p className="text-gray-300 text-sm sm:text-base tracking-widest uppercase mb-3 font-medium">
          Trusted Construction Services in Zambia
        </p>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-4 max-w-2xl">
          ACHIMWENE<br />
          NEAT CONSTRUCTION<br />
          <span className="text-white">GROUP</span>
        </h1>

        <p className="text-gray-200 text-lg sm:text-xl mb-8 font-light">
          Building Your Dreams <span className="font-bold italic text-white">into a Reality</span>
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <button className="group relative bg-green-700 hover:bg-green-600 text-white font-bold px-8 py-3 rounded border-2 border-green-600 hover:border-green-400 transition-all duration-300 hover:shadow-xl hover:shadow-green-900/50 overflow-hidden">
            <span className="relative z-10 tracking-widest text-sm">GET A QUOTE</span>
            <span className="absolute inset-0 bg-green-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 opacity-30" />
          </button>

          <a
            href="tel:+260976759948"
            className="flex items-center gap-2 text-white hover:text-green-400 transition-colors duration-200 group"
          >
            <div className="bg-red-700 group-hover:bg-red-600 p-2 rounded-full transition-colors duration-200">
              <Phone className="w-4 h-4" />
            </div>
            <span className="font-bold text-lg tracking-wide">+260 976 759 948</span>
          </a>
        </div>

      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-white/70 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
