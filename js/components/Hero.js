// VOUVRY GENÈVE - Fullscreen Cinematic Hero Section
export function Hero({ onExploreClick, onDiscoverClick }) {
  const videoRef = React.useRef(null);

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20 pb-16">
      
      {/* Background Cinematic Watch Video Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="assets/images/hero-watch.svg"
          className="w-full h-full object-cover object-center filter brightness-90 contrast-105"
        >
          <source src="assets/videos/hero-watch.mp4" type="video/mp4" />
          <source src="assets/videos/hero-watch.mov" type="video/quicktime" />
          {/* Fallback image */}
          <img
            src="assets/images/hero-watch.svg"
            alt="Swiss Haute Horlogerie Timepiece"
            className="w-full h-full object-cover object-center opacity-60"
          />
        </video>
        
        {/* Cinematic Vignette Overlays & Radial Dark Lighting */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent pointer-events-none"></div>
        <div className="absolute inset-0 bg-radial-vignette opacity-80 pointer-events-none"></div>
      </div>



      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          
          {/* Brand Logo Showcase */}
          <div className="mb-8">
            <img 
              src="assets/images/elvor-logo-transparent.png" 
              alt="ÉLVOR - The Power of Elegance" 
              className="h-12 sm:h-16 md:h-20 w-auto object-contain filter drop-shadow-[0_4px_24px_rgba(212,175,55,0.35)]" 
            />
          </div>

          {/* Hero Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight sm:tracking-tight leading-[0.95] mb-6">
            TIME DEFINES <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400">
              YOUR STYLE.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl font-light text-neutral-300 tracking-[0.14em] uppercase mb-10 max-w-xl">
            Precision. Elegance. Timeless Craftsmanship.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-5">
            
            {/* Primary CTA */}
            <button
              onClick={onExploreClick}
              className="btn-luxury-primary group"
            >
              <span>Explore Collection</span>
              <svg className="w-4 h-4 ml-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            {/* Secondary CTA */}
            <button
              onClick={onDiscoverClick}
              className="btn-luxury-outline group"
            >
              <span>Discover More</span>
              <svg className="w-4 h-4 ml-2 opacity-70 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
