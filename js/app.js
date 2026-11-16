// VOUVRY GENÈVE - Main Application Orchestrator
import { PRODUCTS, NEW_ARRIVALS } from './data/products.js';
import { Navbar } from './components/Navbar.js';
import { Hero } from './components/Hero.js';
import { FeaturedCollection } from './components/FeaturedCollection.js';
import { MensCollection } from './components/MensCollection.js';
import { BrandStory } from './components/BrandStory.js';
import { NewArrivals } from './components/NewArrivals.js';
import { BrandExperience } from './components/BrandExperience.js';
import { ContactSection } from './components/ContactSection.js';
import { Footer } from './components/Footer.js';
import { ProductModal } from './components/ProductModal.js';
import { WishlistDrawer } from './components/WishlistDrawer.js';
import { CartDrawer } from './components/CartDrawer.js';
import { Toast } from './components/Toast.js';

export function App() {
  // State Management
  const [wishlist, setWishlist] = React.useState(() => {
    try {
      const saved = localStorage.getItem('vouvry_wishlist');
      return saved ? JSON.parse(saved) : ['vouvry-tradition-roman-40'];
    } catch (e) {
      return ['vouvry-tradition-roman-40'];
    }
  });

  const [cart, setCart] = React.useState(() => {
    try {
      const saved = localStorage.getItem('vouvry_cart');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const [isWishlistOpen, setIsWishlistOpen] = React.useState(false);
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [toast, setToast] = React.useState(null);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('home');
  const [checkoutSuccess, setCheckoutSuccess] = React.useState(false);

  // Sync to local storage
  React.useEffect(() => {
    try {
      localStorage.setItem('vouvry_wishlist', JSON.stringify(wishlist));
    } catch (e) {}
  }, [wishlist]);

  React.useEffect(() => {
    try {
      localStorage.setItem('vouvry_cart', JSON.stringify(cart));
    } catch (e) {}
  }, [cart]);

  // Scroll listener for glassmorphism navbar & section highlight
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'men', 'collection', 'new-arrivals', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toast Helper
  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  // Wishlist Toggle
  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      if (prev.includes(product.id)) {
        showToast(`Removed "${product.name}" from your wishlist`, 'info');
        return prev.filter((id) => id !== product.id);
      } else {
        showToast(`Added "${product.name}" to your wishlist`, 'success');
        return [...prev, product.id];
      }
    });
  };

  // Cart Add
  const addToCart = (product, qty = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        showToast(`Updated "${product.name}" quantity in bag (${existing.quantity + qty})`, 'success');
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + qty } : item
        );
      } else {
        showToast(`Added "${product.name}" to your shopping bag`, 'success');
        return [...prev, { ...product, quantity: qty }];
      }
    });
  };

  const updateCartQuantity = (productId, newQty) => {
    if (newQty <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, quantity: newQty } : item))
    );
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
    showToast('Timepiece removed from bag', 'info');
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setCheckoutSuccess(true);
    setCart([]);
  };

  // Smooth Scroll handler
  const scrollTo = (targetId) => {
    const el = document.querySelector(targetId);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Filtered search results across catalog & novelties
  const allWatches = [...PRODUCTS, ...NEW_ARRIVALS];
  const searchResults = searchQuery.trim()
    ? allWatches.filter((w) =>
        w.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        w.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (w.specs && w.specs.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : [];

  // Wishlist items full object lookup
  const wishlistFullItems = allWatches.filter((w) => wishlist.includes(w.id));

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-[#DA291C] selection:text-white">
      
      {/* Premium Header Navigation */}
      <Navbar
        wishlistCount={wishlist.length}
        cartCount={cart.reduce((total, item) => total + item.quantity, 0)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        isScrolled={isScrolled}
        activeSection={activeSection}
      />

      {/* 1. Fullscreen Cinematic Hero Section */}
      <Hero
        onExploreClick={() => scrollTo('#collection')}
        onDiscoverClick={() => scrollTo('#about')}
      />

      {/* 2. Featured Watch Collection (4-Watch Grid inspired by Reference Screenshot 6) */}
      <FeaturedCollection
        products={PRODUCTS}
        wishlist={wishlist}
        onToggleWishlist={toggleWishlist}
        onSelectProduct={(p) => setSelectedProduct(p)}
        onAddToCart={addToCart}
      />

      {/* 3. Men's Collection Full-Width Luxury Editorial Banner (Reference 1 & 4) */}
      <MensCollection
        products={PRODUCTS}
        onExploreClick={() => scrollTo('#collection')}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      {/* 4. Brand Story / About Atelier Section */}
      <BrandStory
        onContactClick={() => scrollTo('#contact')}
      />

      {/* 5. New Arrivals Modern Product Carousel (Reference 3 & 4) */}
      <NewArrivals
        onSelectProduct={(p) => setSelectedProduct(p)}
        onAddToCart={addToCart}
      />

      {/* 6. VIP Concierge & Contact Section */}
      <ContactSection
        onShowToast={showToast}
      />

      {/* 8. Iconic Jet-Black Swiss Luxury Footer (Reference 2) */}
      <Footer
        onNavClick={(e, href) => {
          e.preventDefault();
          scrollTo(href);
        }}
      />

      {/* Quick View Product Details Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={addToCart}
        onToggleWishlist={toggleWishlist}
        isWishlisted={selectedProduct ? wishlist.includes(selectedProduct.id) : false}
        onBookAppointment={() => {
          setSelectedProduct(null);
          scrollTo('#contact');
        }}
      />

      {/* Wishlist Slide-out Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistItems={wishlistFullItems}
        onRemoveFromWishlist={(id) => {
          setWishlist((prev) => prev.filter((item) => item !== id));
          showToast('Timepiece removed from wishlist', 'info');
        }}
        onAddToCart={(p) => {
          addToCart(p);
        }}
        onSelectProduct={(p) => {
          setSelectedProduct(p);
        }}
      />

      {/* Shopping Bag Slide-out Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={updateCartQuantity}
        onRemoveItem={removeFromCart}
        onCheckout={handleCheckout}
        onSelectProduct={(p) => {
          setSelectedProduct(p);
        }}
      />

      {/* Global Interactive Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/85 backdrop-blur-md p-4 sm:p-10">
          <div className="bg-neutral-950 border border-neutral-800 text-white w-full max-w-3xl mt-12 p-6 sm:p-8 relative shadow-2xl animate-fadeIn">
            <button
              onClick={() => {
                setIsSearchOpen(false);
                setSearchQuery('');
              }}
              className="absolute top-6 right-6 text-neutral-400 hover:text-white text-xl"
            >
              ✕
            </button>

            <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-[#DA291C] mb-2">
              Timepiece Search
            </h3>

            <div className="relative mb-6">
              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by collection, chronograph, automatic, gold, 41mm..."
                className="w-full bg-neutral-900 border border-neutral-700 text-white px-4 py-3.5 text-base sm:text-lg focus:outline-none focus:border-white transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white text-sm"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Results */}
            <div className="max-h-96 overflow-y-auto space-y-3">
              {searchQuery.trim() === '' ? (
                <div className="text-xs text-neutral-500 py-6">
                  <p className="uppercase tracking-widest font-semibold text-neutral-400 mb-2">Popular Searches:</p>
                  <div className="flex flex-wrap gap-2">
                    {['Chronomaster', 'Skeleton Valjoux', 'Monarch 18K', 'Nautilus Diver', 'PRX Special Edition'].map(
                      (tag) => (
                        <button
                          key={tag}
                          onClick={() => setSearchQuery(tag)}
                          className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-600"
                        >
                          {tag}
                        </button>
                      )
                    )}
                  </div>
                </div>
              ) : searchResults.length === 0 ? (
                <div className="text-center py-10 text-neutral-400 text-sm">
                  No timepieces found matching "{searchQuery}".
                </div>
              ) : (
                searchResults.map((watch) => (
                  <div
                    key={watch.id}
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchQuery('');
                      setSelectedProduct(watch);
                    }}
                    className="flex items-center space-x-4 p-3 bg-neutral-900/60 hover:bg-neutral-900 border border-neutral-800 cursor-pointer transition-colors"
                  >
                    <div className="w-14 h-14 bg-neutral-950 p-1 flex-shrink-0">
                      <img
                        src={watch.image}
                        alt={watch.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.currentTarget.src = 'assets/images/watch-silver-chrono.svg';
                        }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[0.62rem] font-bold text-[#DA291C] tracking-widest uppercase">
                        {watch.category}
                      </p>
                      <h4 className="text-xs font-bold text-white uppercase truncate">{watch.name}</h4>
                      <p className="text-xs text-neutral-400">{watch.specs}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-white">{watch.priceFormatted}</p>
                      <span className="text-[0.62rem] text-neutral-500 uppercase tracking-widest">View →</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* Checkout Success Confirmation Modal */}
      {checkoutSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4">
          <div className="bg-neutral-950 border border-neutral-800 text-white max-w-lg w-full p-8 text-center space-y-6 animate-fadeIn shadow-2xl">
            <div className="flex justify-center mb-2">
              <img 
                src="assets/images/elvor-logo-transparent.png" 
                alt="ÉLVOR" 
                className="h-11 w-auto object-contain mx-auto" 
              />
            </div>
            <div className="w-14 h-14 bg-[#DA291C]/20 text-[#DA291C] border border-[#DA291C]/50 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
              ✓
            </div>
            <h3 className="text-2xl font-black uppercase text-white tracking-wide">
              Luxury Order Confirmed
            </h3>
            <p className="text-xs font-mono text-neutral-400">
              Reference: <span className="text-white font-bold">ELVOR-2026-8849</span>
            </p>
            <p className="text-sm text-neutral-300 leading-relaxed font-light">
              Thank you for choosing ÉLVOR. Your handcrafted timepiece is being prepared by our horological specialists. Our VIP courier will contact you with secure transit tracking credentials.
            </p>
            <div className="pt-4">
              <button
                onClick={() => setCheckoutSuccess(false)}
                className="btn-luxury-primary w-full text-center py-3 text-xs"
              >
                Return to ÉLVOR Atelier
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Global Floating Toast */}
      <Toast toast={toast} onClose={() => setToast(null)} />

    </div>
  );
}
