export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-18">
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="w-10 h-10 rounded-lg overflow-hidden bg-red-700/30 border border-red-0/0 flex-shrink-0">
              <img
                src="/images/achimwene.png"
                alt="Logo Icon"
                className="w-full h-full object-cover"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.visibility = 'hidden'; }}
              />
            </div>
            <div className="w-32 h-8 rounded overflow-hidden bg-white/5 border border-white/10 flex-shrink-0">
              <img
                src="/images/"
                alt=""
                className="w-full h-full object-contain"
                onError={(e) => {
                  const el = e.currentTarget as HTMLImageElement;
                  el.style.display = 'none';
                  const wrapper = el.parentElement as HTMLElement;
                  wrapper.classList.add('flex', 'flex-col', 'justify-center', 'px-2');
                  wrapper.innerHTML = `<span class="text-white font-extrabold text-sm tracking-wide leading-none">ACHIMWENE</span><span class="text-gray-300 text-xs tracking-widest uppercase leading-none mt-0.5">Neat Construction Group</span>`;
                }}
              />
            </div>
          </div>

          <div className="flex items-center gap-1 sm:gap-6 overflow-x-auto scrollbar-hide flex-shrink-0">
            {['Home', 'About Us', 'Services', 'Gallery'].map((item) => (
              <a
                key={item}
                href="#"
                className="relative text-gray-300 hover:text-white text-xs sm:text-sm font-medium whitespace-nowrap px-1 sm:px-2 py-1 transition-colors duration-200 group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
