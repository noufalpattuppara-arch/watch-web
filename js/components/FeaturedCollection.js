// VOUVRY GENÈVE - Featured Watch Collection
// Directly inspired by Reference Screenshot 6 (clean studio background, forward-facing timepieces)

export function FeaturedCollection({ 
  products, 
  wishlist, 
  onToggleWishlist, 
  onSelectProduct,
  onAddToCart 
}) {
  const [activeCategory, setActiveCategory] = React.useState("All");

  const categories = ["All", "Rolex", "Seiko", "Lacoste", "STANDARD", "Men", "Chronograph", "Classic"];

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => 
        p.category.toLowerCase().includes(activeCategory.toLowerCase()) ||
        (p.brand && p.brand.toLowerCase().includes(activeCategory.toLowerCase())) ||
        (p.style && p.style.toLowerCase().includes(activeCategory.toLowerCase()))
      );

  // Local SVG fallback lookup
  const getFallbackImage = (style) => {
    if (style.includes("DiaStar") || style.includes("Skeleton") || style.includes("Hardmetal")) return "assets/images/watch-black-skeleton.svg";
    if (style.includes("Moser") || style.includes("Tourbillon") || style.includes("Jade")) return "assets/images/watch-gold-classic.svg";
    if (style.includes("Daytona") || style.includes("Platinum")) return "assets/images/watch-silver-chrono.svg";
    if (style.includes("GMT")) return "assets/images/watch-steel-diver.svg";
    if (style.includes("Emerald") || style.includes("Diver") || style.includes("Purple") || style.includes("Seiko") || style.includes("Edo")) return "assets/images/watch-steel-diver.svg";
    if (style.includes("Bronze")) return "assets/images/watch-gold-classic.svg";
    if (style.includes("Leather")) return "assets/images/watch-classic-leather.svg";
    if (style.includes("Roman")) return "assets/images/watch-classic-roman.svg";
    if (style.includes("Silver")) return "assets/images/watch-silver-chrono.svg";
    if (style.includes("Black")) return "assets/images/watch-black-skeleton.svg";
    if (style.includes("Gold")) return "assets/images/watch-gold-classic.svg";
    return "assets/images/watch-steel-diver.svg";
  };

  return (
    <section id="collection" className="py-24 bg-white text-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-neutral-200">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="w-2.5 h-2.5 bg-[#DA291C]"></span>
              <span className="text-[0.65rem] font-bold tracking-[0.25em] uppercase text-neutral-500">
                Swiss Masterpieces
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-neutral-900">
              FEATURED WATCHES
            </h2>
            <p className="text-xs sm:text-sm font-medium tracking-[0.15em] text-neutral-500 uppercase mt-1">
              Precision Swiss Chronographs &amp; Automatic Timepieces
            </p>
          </div>

          {/* Filter Categories */}
          <div className="flex items-center space-x-2 sm:space-x-4 mt-6 md:mt-0 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-bold tracking-[0.16em] uppercase px-3 py-1.5 transition-all duration-300 border ${
                  activeCategory === cat
                    ? 'bg-neutral-900 text-white border-neutral-900'
                    : 'bg-transparent text-neutral-600 border-transparent hover:border-neutral-300 hover:text-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 6-Watch Luxury Showcase Grid (3x2 Layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => {
            const isWishlisted = wishlist.includes(product.id);
            const fallbackImg = getFallbackImage(product.style);

            return (
              <div 
                key={product.id}
                className="watch-card group flex flex-col justify-between bg-neutral-50/50 hover:bg-neutral-50 border border-neutral-200/80 transition-all duration-400 p-6 relative"
              >
                {/* Action Buttons: Share & Wishlist (Top Right) */}
                <div className="absolute top-4 right-4 z-20 flex items-center space-x-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (navigator.share) {
                        navigator.share({ title: product.name, text: `${product.name} - ${product.priceFormatted}`, url: window.location.href }).catch(() => {});
                      } else {
                        navigator.clipboard.writeText(window.location.href);
                        alert(`Link copied for ${product.name}`);
                      }
                    }}
                    className="w-9 h-9 rounded-full flex items-center justify-center bg-white/80 text-neutral-400 hover:text-black hover:bg-white shadow-sm transition-all"
                    title="Share timepiece"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleWishlist(product);
                    }}
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isWishlisted 
                        ? 'bg-red-50 text-[#DA291C]' 
                        : 'bg-white/80 text-neutral-400 hover:text-black hover:bg-white shadow-sm'
                    }`}
                    title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                  >
                    <svg 
                      className={`w-5 h-5 transition-transform ${isWishlisted ? 'scale-110 animate-heart-pulse' : 'hover:scale-110'}`} 
                      fill={isWishlisted ? "#DA291C" : "none"} 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="1.8" 
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
                      />
                    </svg>
                  </button>
                </div>

                {/* Badge (Top Left) */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[0.6rem] font-bold tracking-[0.2em] uppercase px-2 py-0.5 bg-neutral-900 text-white">
                    {product.badge}
                  </span>
                </div>

                {/* Watch Studio Image Container */}
                <div 
                  className="w-full h-72 sm:h-80 flex items-center justify-center p-4 cursor-pointer overflow-hidden my-4 relative"
                  onClick={() => onSelectProduct(product)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="watch-img w-full h-full object-contain filter drop-shadow-xl"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback to crisp local SVG artwork
                      e.currentTarget.src = fallbackImg;
                    }}
                  />
                  
                  {/* Subtle Quick Hover Overlay */}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-[0.68rem] font-bold tracking-[0.2em] uppercase bg-white/95 text-black px-3.5 py-1.5 shadow-md">
                      Quick View
                    </span>
                  </div>
                </div>

                {/* Product Metadata (Directly styled like Tissot Screenshot 6) */}
                <div className="pt-4 border-t border-neutral-200/60">
                  
                  {/* Category Tag */}
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[0.62rem] font-semibold tracking-[0.22em] uppercase text-neutral-400">
                      {product.category}
                    </span>
                    <span className="text-[0.62rem] font-mono text-neutral-400">
                      {product.model}
                    </span>
                  </div>

                  {/* Watch Name */}
                  <h3 
                    onClick={() => onSelectProduct(product)}
                    className="font-extrabold text-base tracking-[0.05em] uppercase text-neutral-900 hover:text-neutral-600 cursor-pointer transition-colors line-clamp-1"
                  >
                    {product.name}
                  </h3>

                  {/* Watch Specs (e.g., 41 mm • Quartz Chronograph) */}
                  <p className="text-xs text-neutral-500 font-medium tracking-wide mt-1 line-clamp-1">
                    {product.specs}
                  </p>

                  {/* Price in Indian Rupees */}
                  <div className="mt-3 flex items-baseline justify-between">
                    <p className="text-base font-black text-neutral-900 tracking-tight">
                      {product.priceFormatted}
                    </p>
                    <span className="text-[0.62rem] uppercase tracking-wider text-neutral-400">
                      Incl. Taxes
                    </span>
                  </div>

                  {/* Action Buttons: View Details & Quick Add */}
                  <div className="mt-5 grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="text-center py-2 px-3 text-[0.68rem] font-bold tracking-[0.16em] uppercase border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-all duration-300"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => onAddToCart(product)}
                      className="text-center py-2 px-3 text-[0.68rem] font-bold tracking-[0.16em] uppercase bg-neutral-900 text-white hover:bg-neutral-800 transition-all duration-300 flex items-center justify-center space-x-1"
                    >
                      <span>Add to Bag</span>
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Minimalist Slider Indicator Bar (Recreating Reference 6 bottom bar) */}
        <div className="mt-14 pt-8 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-500">
          <div className="flex items-center space-x-3">
            <span className="font-bold text-neutral-900 tracking-widest text-[0.7rem] uppercase">
              SHOWING {filteredProducts.length} OF {products.length} EXCLUSIVE TIMEPIECES
            </span>
            <span className="h-3 w-[1px] bg-neutral-300"></span>
            <span className="hidden sm:inline tracking-wider">
              Swiss Made in Geneva, Switzerland
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="h-[2px] w-12 bg-neutral-900 inline-block"></span>
            <span className="h-[2px] w-6 bg-neutral-300 inline-block"></span>
          </div>
        </div>

      </div>
    </section>
  );
}
