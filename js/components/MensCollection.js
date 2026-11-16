// VOUVRY GENÈVE - Men's Collection Full-Width Luxury Editorial Banner
// Inspired by Reference Screenshots 1 & 4 (Ambassador wearing watch + Split editorial layout)

export function MensCollection({ onExploreClick, onSelectProduct, products }) {
  const menTeaser = products[0] || {};
  const skeletonTeaser = products[1] || {};

  return (
    <section id="men" className="relative bg-neutral-950 text-white overflow-hidden py-20 lg:py-28">
      
      {/* Background Subtle Gradient Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neutral-800/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-950/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* MEN'S COLLECTION SPLIT BANNER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Headline, Subtitle, & Watch Teaser Cards */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-8">
            
            <div>
              <div className="inline-flex items-center space-x-2 text-[#DA291C] text-xs font-bold tracking-[0.25em] uppercase mb-3">
                <span>●</span>
                <span>Ambassador Edition</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-none">
                MEN'S WATCHES
              </h2>
              
              <p className="text-lg sm:text-xl font-light text-neutral-300 tracking-[0.14em] uppercase mt-4">
                Designed for those who lead with confidence.
              </p>

              <p className="text-sm text-neutral-400 font-light leading-relaxed mt-4 max-w-lg">
                Forged from solid 316L stainless steel, high-tech ceramic, and scratchproof sapphire crystal, our men’s timepieces combine high-torque chronographs with Le Locle heritage. Engineered for relentless performance and impeccable distinction.
              </p>
            </div>

            {/* Two Integrated Watch Teasers */}
            <div className="grid grid-cols-2 gap-4">
              
              {/* Teaser 1 */}
              <div 
                onClick={() => onSelectProduct(menTeaser)}
                className="bg-neutral-900/90 border border-neutral-800 p-4 hover:border-neutral-600 cursor-pointer transition-all duration-300 group"
              >
                <div className="h-36 flex items-center justify-center p-2">
                  <img 
                    src={menTeaser.image || "assets/images/vouvry-classic-steel-roman.webp"} 
                    alt={menTeaser.name} 
                    className="h-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform"
                    onError={(e) => { e.currentTarget.src = "assets/images/watch-classic-roman.svg"; }}
                  />
                </div>
                <div className="mt-2 pt-2 border-t border-neutral-800">
                  <p className="text-[0.62rem] font-bold tracking-widest text-[#DA291C] uppercase">Classic Dream</p>
                  <p className="text-xs font-bold text-white uppercase truncate">{menTeaser.name || "Tissot Classic Dream"}</p>
                  <p className="text-xs font-semibold text-neutral-300 mt-1">{menTeaser.priceFormatted || "₹ 88,800.00"}</p>
                </div>
              </div>

              {/* Teaser 2 */}
              <div 
                onClick={() => onSelectProduct(skeletonTeaser)}
                className="bg-neutral-900/90 border border-neutral-800 p-4 hover:border-neutral-600 cursor-pointer transition-all duration-300 group"
              >
                <div className="h-36 flex items-center justify-center p-2">
                  <img 
                    src={skeletonTeaser.image || "assets/images/vouvry-bronze-chronograph.webp"} 
                    alt={skeletonTeaser.name} 
                    className="h-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform"
                    onError={(e) => { e.currentTarget.src = "assets/images/watch-gold-classic.svg"; }}
                  />
                </div>
                <div className="mt-2 pt-2 border-t border-neutral-800">
                  <p className="text-[0.62rem] font-bold tracking-widest text-[#DA291C] uppercase">Bronze Edition</p>
                  <p className="text-xs font-bold text-white uppercase truncate">{skeletonTeaser.name || "HYPERCHROME"}</p>
                  <p className="text-xs font-semibold text-neutral-300 mt-1">{skeletonTeaser.priceFormatted || "MRP ₹ 1,212,100.00"}</p>
                </div>
              </div>

            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={onExploreClick}
                className="btn-luxury-primary w-full sm:w-auto text-center"
              >
                <span>Explore Men's Collection</span>
                <svg className="w-4 h-4 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

          </div>

          {/* Right Column: Full-Height Ambassador Editorial Photo */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden border border-neutral-800 group shadow-2xl">
              
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=85"
                alt="ÉLVOR Ambassador wearing luxury chronograph"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-105"
                onError={(e) => {
                  e.currentTarget.src = "assets/images/model-editorial.svg";
                }}
              />

              {/* Editorial Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
