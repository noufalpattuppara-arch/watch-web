// VOUVRY GENÈVE - Luxury Product Quick View & Technical Details Modal
export function ProductModal({ 
  product, 
  isOpen, 
  onClose, 
  onAddToCart, 
  onToggleWishlist, 
  isWishlisted,
  onBookAppointment 
}) {
  if (!isOpen || !product) return null;

  const [activeImage, setActiveImage] = React.useState(product.image);
  const [quantity, setQuantity] = React.useState(1);
  const [isZoomed, setIsZoomed] = React.useState(false);

  React.useEffect(() => {
    setActiveImage(product.image);
    setQuantity(1);
    setIsZoomed(false);
  }, [product]);

  const galleryImages = product.gallery && product.gallery.length > 0 
    ? product.gallery 
    : [product.image];

  const details = product.details || {
    caseSize: "41.00 mm",
    caseThickness: "11.20 mm",
    caseMaterial: "316L Stainless Steel",
    crystal: "Sapphire Crystal with Anti-reflective Treatment",
    movement: "Swiss Calibre Haute Horlogerie",
    powerReserve: "80 Hours Power Reserve",
    waterResistance: "10 bar (100 m / 330 ft)",
    strap: "Integrated 316L Stainless Steel Bracelet",
    origin: "Swiss Made (Genève)"
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      
      {/* Modal Container */}
      <div 
        className="relative bg-white text-black w-full max-w-5xl my-8 overflow-hidden shadow-2xl border border-neutral-200 animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Modal Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-neutral-50">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 bg-[#DA291C]"></span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-neutral-600">
              {product.category || "Swiss Haute Horlogerie"} • {product.model}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-neutral-500 hover:text-black hover:bg-neutral-200 transition-colors"
            title="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[82vh] overflow-y-auto">
          
          {/* Left Column: Image Gallery & Macro Zoom */}
          <div className="lg:col-span-7 p-6 sm:p-10 bg-neutral-50/60 border-b lg:border-b-0 lg:border-r border-neutral-200 flex flex-col justify-between">
            
            {/* Main Stage Image */}
            <div 
              className="relative w-full h-80 sm:h-96 flex items-center justify-center overflow-hidden cursor-crosshair group"
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
            >
              <img
                src={activeImage}
                alt={product.name}
                className={`w-full h-full object-contain filter drop-shadow-2xl transition-transform duration-500 ${
                  isZoomed ? 'scale-125' : 'scale-100'
                }`}
                onError={(e) => {
                  e.currentTarget.src = "assets/images/watch-silver-chrono.svg";
                }}
              />

              <div className="absolute bottom-2 right-2 text-[0.62rem] uppercase tracking-widest text-neutral-400 bg-white/80 px-2 py-0.5 border border-neutral-200">
                {isZoomed ? "Zoom Active" : "Hover to Zoom"}
              </div>
            </div>

            {/* Gallery Thumbnails */}
            <div className="flex items-center justify-center space-x-3 mt-6 pt-4 border-t border-neutral-200">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`w-16 h-16 p-1 border transition-all ${
                    activeImage === img ? 'border-neutral-900 bg-white shadow-md' : 'border-neutral-300 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="Thumbnail" className="w-full h-full object-contain" />
                </button>
              ))}
            </div>

            {/* Swiss Origin Seal */}
            <div className="mt-6 flex items-center justify-between text-xs text-neutral-500 pt-4 border-t border-neutral-200/80">
              <span className="font-bold text-neutral-800 tracking-wider uppercase">
                🇨🇭 Swiss Made Official Certified
              </span>
              <span>5-Year International Warranty</span>
            </div>

          </div>

          {/* Right Column: Watch Details, Specs & Actions */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            
            <div>
              {/* Badge */}
              <span className="inline-block text-[0.62rem] font-bold tracking-[0.2em] uppercase px-2.5 py-0.5 bg-[#DA291C] text-white mb-2">
                {product.badge || "New Release"}
              </span>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-900">
                {product.name}
              </h2>

              {/* Sub-specs */}
              <p className="text-xs font-semibold text-neutral-500 tracking-wider uppercase mt-1">
                {product.specs}
              </p>

              {/* Price */}
              <div className="mt-4 pb-4 border-b border-neutral-200">
                <p className="text-3xl font-black text-neutral-900 tracking-tight">
                  {product.priceFormatted}
                </p>
                <p className="text-xs text-neutral-500 mt-1">
                  Inclusive of all Indian import duties, Swiss transit insurance &amp; GST.
                </p>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed mt-4">
                {product.description}
              </p>

              {/* Technical Specifications Table */}
              <div className="mt-6 space-y-2 border-t border-neutral-200 pt-4 text-xs">
                <h4 className="font-bold uppercase tracking-wider text-neutral-900 text-xs mb-3">
                  Technical Specifications
                </h4>
                
                <div className="grid grid-cols-2 gap-2 text-[0.72rem]">
                  <div className="text-neutral-500">Case Diameter:</div>
                  <div className="font-semibold text-neutral-800 text-right">{details.caseSize}</div>

                  <div className="text-neutral-500">Thickness:</div>
                  <div className="font-semibold text-neutral-800 text-right">{details.caseThickness}</div>

                  <div className="text-neutral-500">Case Material:</div>
                  <div className="font-semibold text-neutral-800 text-right">{details.caseMaterial}</div>

                  <div className="text-neutral-500">Crystal Glass:</div>
                  <div className="font-semibold text-neutral-800 text-right">{details.crystal}</div>

                  <div className="text-neutral-500">Movement / Calibre:</div>
                  <div className="font-semibold text-neutral-800 text-right">{details.movement}</div>

                  <div className="text-neutral-500">Power Reserve:</div>
                  <div className="font-semibold text-neutral-800 text-right">{details.powerReserve}</div>

                  <div className="text-neutral-500">Water Resistance:</div>
                  <div className="font-semibold text-neutral-800 text-right">{details.waterResistance}</div>

                  <div className="text-neutral-500">Strap / Clasp:</div>
                  <div className="font-semibold text-neutral-800 text-right">{details.strap}</div>
                </div>
              </div>
            </div>

            {/* Purchase & Action Controls */}
            <div className="space-y-3 pt-4 border-t border-neutral-200">
              
              {/* Quantity & Wishlist Row */}
              <div className="flex items-center space-x-3">
                <div className="flex items-center border border-neutral-300">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-sm hover:bg-neutral-100"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 text-sm font-bold">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-sm hover:bg-neutral-100"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => onToggleWishlist(product)}
                  className={`flex-1 flex items-center justify-center space-x-2 py-2.5 px-4 border text-xs font-bold uppercase tracking-wider transition-colors ${
                    isWishlisted 
                      ? 'border-[#DA291C] text-[#DA291C] bg-red-50' 
                      : 'border-neutral-300 text-neutral-700 hover:border-black'
                  }`}
                >
                  <span>♥</span>
                  <span>{isWishlisted ? "Saved to Wishlist" : "Add to Wishlist"}</span>
                </button>
              </div>

              {/* Add to Bag CTA */}
              <button
                onClick={() => {
                  onAddToCart(product, quantity);
                  onClose();
                }}
                className="btn-luxury-dark w-full text-center py-3.5"
              >
                Add {quantity} to Shopping Bag • ₹ {(product.price * quantity).toLocaleString('en-IN')}.00
              </button>

              {/* Book Boutique Fitting */}
              <button
                onClick={() => {
                  onClose();
                  onBookAppointment();
                }}
                className="w-full text-center py-2.5 text-xs font-bold tracking-widest uppercase text-neutral-600 hover:text-black transition-colors"
              >
                Schedule Private Boutique Viewing in Mumbai / Geneva →
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
