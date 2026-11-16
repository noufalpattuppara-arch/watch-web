// VOUVRY GENÈVE - Premium Navigation Bar
export function Navbar({ 
  wishlistCount, 
  cartCount, 
  onOpenWishlist, 
  onOpenCart, 
  onOpenSearch, 
  isScrolled,
  activeSection 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Men", href: "#men" },
    { label: "Collection", href: "#collection" },
    { label: "New Arrivals", href: "#new-arrivals" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'nav-glass-scrolled py-3 shadow-2xl' : 'bg-gradient-to-b from-black/85 via-black/40 to-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo - Top Left */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center group py-0.5"
            aria-label="ÉLVOR - The Power of Elegance"
          >
            <img 
              src="assets/images/elvor-logo-transparent.png" 
              alt="ÉLVOR - The Power of Elegance" 
              className="h-10 sm:h-12 md:h-13 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_12px_rgba(212,175,55,0.3)]" 
            />
          </a>

          {/* Desktop Navigation Links - Centered */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-300 relative py-1 ${
                    isActive 
                      ? 'text-white font-bold' 
                      : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#DA291C] animate-pulse"></span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Utility Action Icons - Top Right */}
          <div className="flex items-center space-x-4 sm:space-x-6 text-white">
            
            {/* Search Icon */}
            <button 
              onClick={onOpenSearch}
              className="p-1.5 text-neutral-300 hover:text-white transition-colors"
              title="Search Timepieces"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Currency Selector (India / INR) */}
            <div className="hidden sm:flex items-center space-x-1.5 text-xs font-semibold tracking-wider text-neutral-300 border border-neutral-700/80 px-2.5 py-1 rounded-sm bg-black/40">
              <span className="text-sm">🇮🇳</span>
              <span className="text-neutral-200">₹ INR</span>
            </div>

            {/* Wishlist Heart with Counter */}
            <button 
              onClick={onOpenWishlist}
              className="relative p-1.5 text-neutral-300 hover:text-[#DA291C] transition-colors"
              title="View Wishlist"
            >
              <svg className="w-5 h-5" fill={wishlistCount > 0 ? "#DA291C" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#DA291C] text-white text-[0.62rem] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-heart-pulse">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Shopping Bag with Counter */}
            <button 
              onClick={onOpenCart}
              className="relative p-1.5 text-neutral-300 hover:text-white transition-colors"
              title="Shopping Bag"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-white text-black text-[0.62rem] font-extrabold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 text-neutral-300 hover:text-white transition-colors focus:outline-none"
              title="Toggle Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-neutral-950/98 backdrop-blur-2xl border-b border-neutral-800 px-6 py-8 animate-fadeIn">
          <nav className="flex flex-col space-y-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-bold tracking-[0.2em] uppercase text-neutral-200 hover:text-white transition-colors flex items-center justify-between border-b border-neutral-800/60 pb-3"
              >
                <span>{link.label}</span>
                <span className="text-neutral-500 text-xs">→</span>
              </a>
            ))}
          </nav>

          <div className="mt-8 pt-6 border-t border-neutral-800 flex flex-col space-y-4">
            <div className="flex items-center justify-between text-xs text-neutral-400">
              <span>Currency &amp; Region</span>
              <span className="text-white font-bold">🇮🇳 India (₹ INR)</span>
            </div>
            <a 
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn-luxury-primary text-center w-full mt-2"
            >
              Book Private Fitting
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
