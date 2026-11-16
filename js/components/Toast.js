// VOUVRY GENÈVE - Floating Luxury Notification Toast
export function Toast({ toast, onClose }) {
  if (!toast) return null;

  return (
    <div className="fixed bottom-8 right-6 z-50 max-w-sm w-full bg-neutral-950 border border-neutral-800 text-white p-4 shadow-2xl toast-enter flex items-start space-x-3">
      {/* Icon */}
      <div className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#DA291C] font-bold">
        {toast.type === 'error' ? '✕' : '✓'}
      </div>

      {/* Message */}
      <div className="flex-1 text-xs font-medium leading-relaxed text-neutral-200">
        {toast.message}
      </div>

      {/* Close button */}
      <button 
        onClick={onClose}
        className="text-neutral-500 hover:text-white text-xs transition-colors"
      >
        ✕
      </button>
    </div>
  );
}
