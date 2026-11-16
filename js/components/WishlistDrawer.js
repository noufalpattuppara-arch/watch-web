// VOUVRY GENÈVE - Wishlist Slide-out Drawer
export function WishlistDrawer({ 
  isOpen, 
  onClose, 
  wishlistItems, 
  onRemoveFromWishlist, 
  onAddToCart,
  onSelectProduct 
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-sm animate-fadeIn">
      
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Slide-out Panel */}
      <div className="relative w-full max-w-md bg-neutral-950 text-white h-full shadow-2xl border-l border-neutral-800 flex flex-col justify-between z-10 animate-slideLeft">
        
        {/* Drawer Header */}
        <div className="p-6 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-[#DA291C] font-bold text-lg">♥</span>
            <h3 className="font-bold text-sm tracking-[0.2em] uppercase text-white">
              Your Wishlist ({wishlistItems.length})
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Drawer Content */}
        <div className="p-6 flex-1 overflow-y-auto space-y-4">
          {wishlistItems.length === 0 ? (
            <div className="text-center py-20 space-y-4">
              <span className="text-4xl text-neutral-600 block">♡</span>
              <p className="text-sm font-light text-neutral-400 uppercase tracking-widest">
                Your wishlist is empty
              </p>
              <p className="text-xs text-neutral-500 max-w-xs mx-auto">
                Explore our Swiss horological collection and save your preferred timepieces.
              </p>
              <button
                onClick={onClose}
                className="btn-luxury-outline text-xs mt-4"
              >
                Explore Watches
              </button>
            </div>
          ) : (
            wishlistItems.map((item) => (
              <div 
                key={item.id}
                className="bg-neutral-900 border border-neutral-800 p-4 flex items-center space-x-4 group"
              >
                {/* Watch Thumbnail */}
                <div 
                  className="w-20 h-20 bg-neutral-950 p-2 border border-neutral-800 flex-shrink-0 cursor-pointer"
                  onClick={() => {
                    onClose();
                    onSelectProduct(item);
                  }}
                >
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-contain filter drop-shadow group-hover:scale-105 transition-transform" 
                    onError={(e) => {
                      e.currentTarget.src = "assets/images/watch-silver-chrono.svg";
                    }}
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <span className="text-[0.6rem] font-bold text-[#DA291C] tracking-widest uppercase block">
                    {item.category}
                  </span>
                  <h4 
                    onClick={() => {
                      onClose();
                      onSelectProduct(item);
                    }}
                    className="text-xs font-bold text-white uppercase truncate cursor-pointer hover:text-neutral-300"
                  >
                    {item.name}
                  </h4>
                  <p className="text-xs font-semibold text-neutral-300 mt-0.5">
                    {item.priceFormatted}
                  </p>
                  
                  {/* Action buttons */}
                  <div className="flex items-center space-x-4 mt-2">
                    <button
                      onClick={() => onAddToCart(item)}
                      className="text-[0.65rem] font-bold tracking-widest uppercase text-white hover:text-[#DA291C] transition-colors"
                    >
                      + Move to Bag
                    </button>
                    <button
                      onClick={() => onRemoveFromWishlist(item.id)}
                      className="text-[0.65rem] font-medium tracking-widest uppercase text-neutral-500 hover:text-red-400 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>

              </div>
            ))
          )}
        </div>

        {/* Drawer Footer */}
        {wishlistItems.length > 0 && (
          <div className="p-6 border-t border-neutral-800 bg-neutral-950 space-y-3">
            <button
              onClick={() => {
                wishlistItems.forEach(item => onAddToCart(item));
                onClose();
              }}
              className="btn-luxury-primary w-full text-center py-3 text-xs"
            >
              Add All to Shopping Bag
            </button>
            <p className="text-[0.62rem] text-neutral-500 text-center tracking-widest uppercase">
              Swiss Insured Shipping Available Across India
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
