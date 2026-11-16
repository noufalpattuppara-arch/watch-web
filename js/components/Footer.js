// VOUVRY GENÈVE - Premium Black Footer
// Directly replicating the architecture, typography, and commitments from Reference Screenshot 2

export function Footer({ onNavClick }) {
  const [showSocialModal, setShowSocialModal] = React.useState(false);
  const [showCountryModal, setShowCountryModal] = React.useState(false);

  return (
    <footer className="bg-black text-white relative pt-20 pb-0 border-t border-neutral-900 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 5 Structured Columns (Directly from Reference Screenshot 2) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10 pb-16">
          
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white">
              Brand
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400 font-light">
              <li><a href="#about" onClick={(e) => onNavClick(e, '#about')} className="hover:text-white transition-colors">About us</a></li>
              <li><a href="#men" onClick={(e) => onNavClick(e, '#men')} className="hover:text-white transition-colors">Men</a></li>
              <li><a href="#collection" onClick={(e) => onNavClick(e, '#collection')} className="hover:text-white transition-colors">Chronographs</a></li>
              <li><a href="#collection" onClick={(e) => onNavClick(e, '#collection')} className="hover:text-white transition-colors">Collection</a></li>
              <li><a href="#new-arrivals" onClick={(e) => onNavClick(e, '#new-arrivals')} className="hover:text-white transition-colors">Selection</a></li>
              <li><a href="#collection" onClick={(e) => onNavClick(e, '#collection')} className="hover:text-white transition-colors">Straps &amp; Bracelets</a></li>
              <li><a href="#about" onClick={(e) => onNavClick(e, '#about')} className="hover:text-white transition-colors">Heritage News</a></li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400 font-light">
              <li><a href="#contact" onClick={(e) => onNavClick(e, '#contact')} className="hover:text-white transition-colors">Find a boutique</a></li>
              <li><a href="#contact" onClick={(e) => onNavClick(e, '#contact')} className="hover:text-white transition-colors">Customer service</a></li>
              <li><a href="#about" onClick={(e) => onNavClick(e, '#about')} className="hover:text-white transition-colors">Stop fake &amp; Counterfeit</a></li>
              <li><a href="#contact" onClick={(e) => onNavClick(e, '#contact')} className="hover:text-white transition-colors">Register your watch</a></li>
              <li><a href="#contact" onClick={(e) => onNavClick(e, '#contact')} className="hover:text-white transition-colors">Corporate gifting</a></li>
              <li><a href="#collection" onClick={(e) => onNavClick(e, '#collection')} className="hover:text-white transition-colors">Watch Finder</a></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white">
              Legal
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400 font-light">
              <li><a href="#legal" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">Conditions of sales</a></li>
              <li><a href="#privacy" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">Privacy notice</a></li>
              <li><a href="#cookies" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">Cookie notice</a></li>
              <li><a href="#settings" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">Cookie settings</a></li>
              <li><a href="#terms" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">Terms of use</a></li>
            </ul>
          </div>

          {/* Column 4: Help and contacts */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white">
              Help and contacts
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400 font-light">
              <li><a href="#contact" onClick={(e) => onNavClick(e, '#contact')} className="hover:text-white transition-colors">Need help?</a></li>
              <li><a href="#contact" onClick={(e) => onNavClick(e, '#contact')} className="hover:text-white transition-colors">Request a return</a></li>
              <li><a href="#contact" onClick={(e) => onNavClick(e, '#contact')} className="hover:text-white transition-colors">Track an order</a></li>
              <li><a href="#about" onClick={(e) => onNavClick(e, '#about')} className="hover:text-white transition-colors">Careers in Geneva</a></li>
            </ul>
          </div>

          {/* Column 5: Our Commitments (Directly from Reference Screenshot 2 with Icons) */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white">
              Our commitments
            </h4>
            
            <div className="space-y-3.5 text-xs text-neutral-300">
              
              {/* Commitment 1: Free Delivery */}
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4 text-neutral-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
                <span className="font-light">Free delivery in India &amp; global</span>
              </div>

              {/* Commitment 2: Swiss Made watches (Red Cross Icon) */}
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-[#DA291C] flex items-center justify-center text-white font-black text-[0.65rem] flex-shrink-0">
                  +
                </div>
                <span className="font-medium text-white">Swiss made watches</span>
              </div>

              {/* Commitment 3: Safe & secure payments */}
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4 text-neutral-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="font-light">Safe &amp; secure payments</span>
              </div>

              {/* Commitment 4: Easy returns */}
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4 text-neutral-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span className="font-light">Easy 30-day returns</span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Utility Row (Reference Screenshot 2) */}
        <div className="pt-8 pb-10 border-t border-neutral-900 flex flex-col md:flex-row items-start md:items-center justify-between text-xs text-neutral-400 gap-4">
          
          {/* Country Selector */}
          <button
            onClick={() => setShowCountryModal(true)}
            className="flex items-center space-x-2 text-neutral-300 hover:text-white transition-colors"
          >
            <span className="text-base">🇮🇳</span>
            <span className="font-semibold text-white">India</span>
            <span className="text-neutral-500">|</span>
            <span className="underline underline-offset-4">Change country &gt;</span>
          </button>

          {/* Social Media Trigger */}
          <button 
            onClick={() => setShowSocialModal(!showSocialModal)}
            className="text-neutral-300 hover:text-white font-medium transition-colors"
          >
            + Follow us on social media
          </button>

          {/* Copyright notice */}
          <div className="text-neutral-500 font-mono text-[0.7rem]">
            ÉLVOR © 2026. The Power of Elegance. All Rights Reserved.
          </div>

        </div>

        {/* Social Media Quick Bar if Toggled */}
        {showSocialModal && (
          <div className="py-4 border-t border-neutral-900 flex items-center space-x-6 animate-fadeIn">
            <span className="text-xs uppercase tracking-widest text-neutral-500">Official Channels:</span>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-xs text-neutral-400 hover:text-white">Instagram</a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-xs text-neutral-400 hover:text-white">YouTube</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-xs text-neutral-400 hover:text-white">Facebook</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-xs text-neutral-400 hover:text-white">LinkedIn</a>
          </div>
        )}

      </div>

      {/* GIANT MONUMENTAL BRAND LOGO */}
      <div className="w-full overflow-hidden select-none pointer-events-none mt-10 mb-4 py-8 border-t border-neutral-900/60 bg-gradient-to-b from-transparent via-neutral-950/40 to-transparent">
        <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-center">
          <img 
            src="assets/images/elvor-logo-transparent.png" 
            alt="ÉLVOR - The Power of Elegance" 
            className="w-full max-w-md sm:max-w-xl md:max-w-2xl h-auto object-contain filter drop-shadow-[0_4px_30px_rgba(212,175,55,0.22)] opacity-95" 
          />
        </div>
      </div>

      {/* Country Modal Popup */}
      {showCountryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-neutral-950 border border-neutral-800 p-8 max-w-md w-full relative">
            <button 
              onClick={() => setShowCountryModal(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white text-xl"
            >
              ✕
            </button>
            <h3 className="text-lg font-bold uppercase text-white mb-4">Select Region &amp; Currency</h3>
            <div className="space-y-3">
              <button 
                onClick={() => setShowCountryModal(false)}
                className="w-full text-left p-3 bg-neutral-900 border border-neutral-700 flex items-center justify-between text-white"
              >
                <span>🇮🇳 India (INR - ₹)</span>
                <span className="text-[#DA291C]">Active</span>
              </button>
              <button 
                onClick={() => setShowCountryModal(false)}
                className="w-full text-left p-3 hover:bg-neutral-900 border border-transparent hover:border-neutral-800 flex items-center justify-between text-neutral-300"
              >
                <span>🇨🇭 Switzerland (CHF - CHF)</span>
              </button>
              <button 
                onClick={() => setShowCountryModal(false)}
                className="w-full text-left p-3 hover:bg-neutral-900 border border-transparent hover:border-neutral-800 flex items-center justify-between text-neutral-300"
              >
                <span>🇺🇸 United States (USD - $)</span>
              </button>
              <button 
                onClick={() => setShowCountryModal(false)}
                className="w-full text-left p-3 hover:bg-neutral-900 border border-transparent hover:border-neutral-800 flex items-center justify-between text-neutral-300"
              >
                <span>🇦🇪 United Arab Emirates (AED - AED)</span>
              </button>
              <button 
                onClick={() => setShowCountryModal(false)}
                className="w-full text-left p-3 hover:bg-neutral-900 border border-transparent hover:border-neutral-800 flex items-center justify-between text-neutral-300"
              >
                <span>🇬🇧 United Kingdom (GBP - £)</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </footer>
  );
}
