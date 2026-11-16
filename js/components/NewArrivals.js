// VOUVRY GENÈVE - New Arrivals Modern Product Carousel
// Inspired by Reference Screenshot 3 ("Our Magazine" centered novelty showcase with minimal arrows)

import { NEW_ARRIVALS } from '../data/products.js';

export function NewArrivals({ onSelectProduct, onAddToCart }) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const totalSlides = NEW_ARRIVALS.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const currentItem = NEW_ARRIVALS[currentIndex];

  return (
    <section id="new-arrivals" className="py-24 bg-black text-white relative overflow-hidden border-t border-neutral-900">
      
      {/* Background Subtle Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,30,35,0.4)_0%,rgba(0,0,0,0.95)_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Editorial Header (Echoing Reference 3 "Our Magazine") */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-[#DA291C] text-xs font-bold tracking-[0.25em] uppercase mb-3">
            <span>●</span>
            <span>Novelties &amp; Limited Editions</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
            NEW ARRIVALS
          </h2>
          
          <p className="text-xs sm:text-sm font-light text-neutral-400 tracking-[0.16em] uppercase mt-2">
            Discover ÉLVOR's Latest Complications and Modern Icons
          </p>
        </div>

        {/* Carousel Showcase Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Main Slide Card */}
          <div className="bg-neutral-950/80 border border-neutral-800 rounded-none overflow-hidden p-6 sm:p-12 transition-all duration-500 shadow-2xl">
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Watch Studio Product Imagery */}
              <div className="md:col-span-7 flex items-center justify-center relative p-4 group">
                
                {/* Subtle Radial Glow */}
                <div className="absolute w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>

                <div 
                  className="w-full h-72 sm:h-96 flex items-center justify-center cursor-pointer overflow-hidden relative"
                  onClick={() => onSelectProduct(currentItem)}
                >
                  <img
                    key={currentItem.id}
                    src={currentItem.image}
                    alt={currentItem.name}
                    className="w-full h-full object-contain filter drop-shadow-2xl transition-all duration-700 transform group-hover:scale-105 animate-fadeIn"
                    onError={(e) => {
                      e.currentTarget.src = "assets/images/watch-black-skeleton.svg";
                    }}
                  />
                </div>

                {/* Badge */}
                <div className="absolute top-2 left-2">
                  <span className="text-[0.6rem] font-bold tracking-[0.2em] uppercase px-2.5 py-1 bg-[#DA291C] text-white">
                    {currentItem.badge}
                  </span>
                </div>
              </div>

              {/* Watch Story & Novelty Details (Reference 3 caption style) */}
              <div className="md:col-span-5 flex flex-col justify-center space-y-4 text-left">
                
                {/* Release Date */}
                <div className="flex items-center space-x-2 text-[0.65rem] font-semibold text-neutral-400 tracking-widest uppercase">
                  <span>RELEASE DATE:</span>
                  <span className="text-neutral-200">{currentItem.date}</span>
                </div>

                {/* Model Title */}
                <h3 
                  onClick={() => onSelectProduct(currentItem)}
                  className="text-xl sm:text-2xl font-black uppercase text-white hover:text-neutral-300 cursor-pointer tracking-wide transition-colors leading-tight"
                >
                  {currentItem.name}
                </h3>

                {/* Specification */}
                <p className="text-xs text-[#DA291C] font-semibold tracking-wider uppercase">
                  {currentItem.specs}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                  {currentItem.description}
                </p>

                {/* Price */}
                <div className="pt-2">
                  <p className="text-2xl font-black text-white tracking-tight">
                    {currentItem.priceFormatted}
                  </p>
                  <p className="text-[0.62rem] text-neutral-500 uppercase tracking-widest mt-0.5">
                    Official Swiss Boutique Price (Inclusive of all duties)
                  </p>
                </div>

                {/* Action CTAs */}
                <div className="pt-4 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                  <button
                    onClick={() => onSelectProduct(currentItem)}
                    className="btn-luxury-primary text-center py-2.5 px-5 text-xs"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => onAddToCart(currentItem)}
                    className="btn-luxury-outline text-center py-2.5 px-5 text-xs"
                  >
                    Add to Bag
                  </button>
                </div>

              </div>

            </div>

          </div>

          {/* Minimalist Carousel Arrows (< and > directly from Screenshot 3) */}
          <button
            onClick={prevSlide}
            className="absolute -left-4 sm:-left-12 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-black/80 hover:bg-neutral-900 border border-neutral-700 text-white flex items-center justify-center transition-all duration-300 z-20 group"
            title="Previous Novelty"
          >
            <span className="text-xl font-light group-hover:-translate-x-0.5 transition-transform">‹</span>
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-4 sm:-right-12 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-black/80 hover:bg-neutral-900 border border-neutral-700 text-white flex items-center justify-center transition-all duration-300 z-20 group"
            title="Next Novelty"
          >
            <span className="text-xl font-light group-hover:translate-x-0.5 transition-transform">›</span>
          </button>

          {/* Carousel Pagination Progress Dots */}
          <div className="flex items-center justify-center space-x-3 mt-8">
            {NEW_ARRIVALS.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 ${
                  currentIndex === idx
                    ? 'w-8 h-1 bg-white'
                    : 'w-2 h-1 bg-neutral-700 hover:bg-neutral-500'
                }`}
                title={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-3 text-xs text-neutral-500 font-mono tracking-widest">
            0{currentIndex + 1} / 0{totalSlides}
          </div>

        </div>

      </div>
    </section>
  );
}
