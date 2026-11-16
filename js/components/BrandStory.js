// VOUVRY GENÈVE - Brand Story / About Section
import { BRAND_STATS } from '../data/products.js';

export function BrandStory({ onContactClick }) {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[#0c0d10] text-white relative overflow-hidden border-t border-neutral-900">
      
      {/* Background Graphic Lines */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] border border-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] border border-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Editorial Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Horological Atelier Photography */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative group overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-900">
              <div className="w-full h-[440px] sm:h-[500px] flex items-center justify-center p-6 sm:p-10 bg-gradient-to-b from-white via-neutral-50 to-neutral-100 relative">
                <img
                  src="assets/images/girard-perregaux-laureato-green.webp"
                  alt="Girard-Perregaux Laureato Automatic 42mm"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 filter drop-shadow-2xl z-10"
                  onError={(e) => {
                    e.currentTarget.src = "assets/images/hero-watch.svg";
                  }}
                />
              </div>
              
              {/* Floating Horology Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-neutral-950/90 backdrop-blur-md border border-neutral-800 flex items-center justify-between z-20">
                <div>
                  <p className="text-sm font-bold text-white uppercase">
                    Girard-Perregaux Laureato
                  </p>
                  <p className="text-base font-black text-white tracking-tight mt-1">
                    ₹ 11,66,319.25
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-neutral-400 font-mono block">
                    Calibre GP01800
                  </span>
                  <span className="text-[0.62rem] uppercase tracking-wider text-neutral-500 mt-0.5 block">
                    Incl. Taxes
                  </span>
                </div>
              </div>
            </div>

            {/* Secondary Supporting Macro Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 bg-neutral-900/60 border border-neutral-800">
                <p className="text-[#DA291C] text-xs font-bold tracking-widest uppercase">Materials</p>
                <h4 className="text-sm font-bold text-white uppercase mt-1">316L &amp; 904L Steel</h4>
                <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                  High-corrosion resistance forged alloys with hand-satin brushing and mirror anglage.
                </p>
              </div>

              <div className="p-5 bg-neutral-900/60 border border-neutral-800">
                <p className="text-[#DA291C] text-xs font-bold tracking-widest uppercase">Escapement</p>
                <h4 className="text-sm font-bold text-white uppercase mt-1">Nivachron Balance</h4>
                <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                  Titanium-based alloy spring impervious to magnetic fields and thermal variations.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Heritage Stats */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-8">
            
            <div>
              <div className="inline-flex items-center space-x-2.5 text-xs font-bold tracking-[0.25em] text-[#DA291C] uppercase mb-3">
                <span className="w-4 h-[1px] bg-[#DA291C]"></span>
                <span>The ÉLVOR Philosophy</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[1.02]">
                CRAFTED FOR <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400">
                  EVERY SECOND.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-neutral-300 font-light tracking-[0.08em] mt-6 leading-relaxed">
                Founded in 1888 in the cradle of Swiss horology, ÉLVOR was born from a singular obsession: to create watches that embody the pinnacle of micro-mechanical precision and the power of elegance.
              </p>

              <div className="space-y-4 text-sm text-neutral-400 font-light leading-relaxed mt-6">
                <p>
                  Every timepiece that leaves our Geneva atelier passes through the rigorous hands of master artisans. From the delicate perlage on our mainplates to the chamfered bridges and anti-reflective sapphire crystals, nothing is left to chance.
                </p>
                <p>
                  We believe luxury is not merely an ornament—it is an enduring promise of reliability, precision engineering, and understated power that accompanies the wearer through life's most defining milestones.
                </p>
              </div>
            </div>

            {/* Heritage Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-neutral-800">
              {BRAND_STATS.slice(0, 3).map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-xs font-bold tracking-[0.16em] uppercase text-neutral-300 mt-1">
                    {stat.label}
                  </p>
                  <p className="text-[0.65rem] text-neutral-500 mt-0.5">
                    {stat.sublabel}
                  </p>
                </div>
              ))}
            </div>

            {/* Action Link */}
            <div className="pt-2">
              <button
                onClick={onContactClick}
                className="btn-luxury-outline"
              >
                <span>Schedule Private Atelier Tour</span>
                <span className="ml-3">→</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
