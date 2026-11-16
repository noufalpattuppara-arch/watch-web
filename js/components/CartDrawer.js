// VOUVRY GENÈVE - Shopping Bag Drawer
export function CartDrawer({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem,
  onCheckout,
  onSelectProduct 
}) {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const formattedSubtotal = `₹ ${subtotal.toLocaleString('en-IN')}.00`;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm animate-fadeIn">
      
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Slide-out Panel */}
      <div className="relative w-full max-w-md bg-neutral-950 text-white h-full shadow-2xl border-l border-neutral-800 flex flex-col justify-between z-10 animate-slideLeft">
        
        {/* Drawer Header */}
        <div className="p-6 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <h3 className="font-bold text-sm tracking-[0.2em] uppercase text-white">
              Shopping Bag ({cartItems.reduce((acc, i) => acc + i.quantity, 0)})
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Drawer Body */}
        <div className="p-6 flex-1 overflow-y-auto space-y-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-20 space-y-4">
              <span className="text-4xl text-neutral-600 block">👜</span>
              <p className="text-sm font-light text-neutral-400 uppercase tracking-widest">
                Your bag is empty
              </p>
              <p className="text-xs text-neutral-500 max-w-xs mx-auto">
                Discover our exceptional Swiss timepieces and add them to your collection.
              </p>
              <button
                onClick={onClose}
                className="btn-luxury-outline text-xs mt-4"
              >
                Discover Collection
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div 
                key={item.id}
                className="bg-neutral-900 border border-neutral-800 p-4 flex items-center space-x-4"
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
                    className="w-full h-full object-contain filter drop-shadow hover:scale-105 transition-transform" 
                    onError={(e) => {
                      e.currentTarget.src = "assets/images/watch-silver-chrono.svg";
                    }}
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h4 
                    onClick={() => {
                      onClose();
                      onSelectProduct(item);
                    }}
                    className="text-xs font-bold text-white uppercase truncate cursor-pointer hover:text-neutral-300"
                  >
                    {item.name}
                  </h4>
                  <p className="text-[0.65rem] text-neutral-400 font-mono mt-0.5">{item.model}</p>
                  <p className="text-xs font-bold text-white mt-1">
                    ₹ {(item.price * item.quantity).toLocaleString('en-IN')}.00
                  </p>

                  {/* Quantity & Delete */}
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-neutral-800">
                    <div className="flex items-center space-x-2 border border-neutral-700 bg-neutral-950 px-2 py-0.5 text-xs">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="text-neutral-400 hover:text-white px-1"
                      >
                        -
                      </button>
                      <span className="font-bold text-white px-1">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="text-neutral-400 hover:text-white px-1"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-[0.65rem] text-neutral-500 hover:text-red-400 uppercase tracking-widest"
                    >
                      Remove
                    </button>
                  </div>
                </div>

              </div>
            ))
          )}
        </div>

        {/* Drawer Footer / Subtotal & Checkout */}
        {cartItems.length > 0 && (
          <div className="p-6 border-t border-neutral-800 bg-neutral-950 space-y-4">
            
            {/* Free Shipping Announcement */}
            <div className="p-2.5 bg-neutral-900 border border-neutral-800 text-[0.68rem] text-neutral-300 flex items-center space-x-2">
              <span className="text-[#DA291C]">✓</span>
              <span>Complimentary insured express delivery included across India.</span>
            </div>

            {/* Subtotal */}
            <div className="flex items-center justify-between text-sm">
              <span className="text-neutral-400 uppercase tracking-wider text-xs">Estimated Total</span>
              <span className="font-extrabold text-lg text-white">{formattedSubtotal}</span>
            </div>

            {/* Checkout Button */}
            <button
              onClick={onCheckout}
              className="btn-luxury-primary w-full text-center py-3.5"
            >
              Proceed to Luxury Checkout
            </button>

            <p className="text-[0.6rem] text-neutral-500 text-center tracking-widest uppercase">
              256-bit Encrypted Swiss Horological Concierge Checkout
            </p>

          </div>
        )}

      </div>
    </div>
  );
}
