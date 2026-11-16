// VOUVRY GENÈVE - Contact & VIP Concierge Section
export function ContactSection({ onShowToast }) {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Private Boutique Appointment',
    message: ''
  });

  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please provide brief details of your inquiry';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      onShowToast('Please complete all required fields correctly', 'error');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      onShowToast('Concierge inquiry received. Our VIP specialist will contact you shortly.', 'success');
    }, 1000);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      inquiryType: 'Private Boutique Appointment',
      message: ''
    });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-neutral-900 text-white relative border-t border-neutral-800">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-[#DA291C] text-xs font-bold tracking-[0.25em] uppercase mb-3">
            <span>●</span>
            <span>Client Services &amp; Appointments</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
            VIP CONCIERGE &amp; CONTACT
          </h2>
          
          <p className="text-xs sm:text-sm font-light text-neutral-400 tracking-[0.16em] uppercase mt-2">
            Schedule a Private Boutique Viewing or Inquire About a Timepiece
          </p>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Boutique Information & Concierge */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            
            <div className="space-y-6">
              <h3 className="text-xl font-bold uppercase tracking-wider text-white border-b border-neutral-800 pb-3">
                Flagship Boutiques
              </h3>

              {/* Geneva Headquarters */}
              <div className="space-y-1">
                <p className="text-xs font-bold tracking-widest text-[#DA291C] uppercase">
                  Geneva Flagship Atelier
                </p>
                <p className="text-sm font-semibold text-white">
                  Rue du Rhône 42, 1204 Genève, Switzerland
                </p>
                <p className="text-xs text-neutral-400">
                  Tel: +41 22 819 1888 • atelier@elvor-watches.com
                </p>
              </div>

              {/* Mumbai Flagship */}
              <div className="space-y-1 pt-2">
                <p className="text-xs font-bold tracking-widest text-[#DA291C] uppercase">
                  Mumbai Luxury Salon
                </p>
                <p className="text-sm font-semibold text-white">
                  Palladium Mall, Senapati Bapat Marg, Lower Parel, Mumbai 400013
                </p>
                <p className="text-xs text-neutral-400">
                  Tel: +91 (0) 22 6844 1888 • concierge.in@elvor-watches.com
                </p>
              </div>

              {/* Concierge Hours */}
              <div className="pt-2 border-t border-neutral-800/80">
                <p className="text-xs font-bold tracking-widest text-neutral-300 uppercase">
                  Boutique &amp; Fitting Hours
                </p>
                <p className="text-xs text-neutral-400 mt-1">
                  Monday to Saturday: 10:00 AM – 8:30 PM IST <br />
                  Sunday: By VIP Private Appointment Only
                </p>
              </div>
            </div>

            {/* Social Media Channels */}
            <div className="pt-6 border-t border-neutral-800">
              <p className="text-xs font-bold tracking-[0.2em] text-neutral-300 uppercase mb-4">
                Connect With ÉLVOR
              </p>
              
              <div className="flex items-center space-x-4">
                {/* Instagram */}
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-none bg-neutral-950 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-500 transition-colors"
                  title="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* Facebook */}
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-none bg-neutral-950 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-500 transition-colors"
                  title="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.595 0 9 1.583 9 4.615V8z"/>
                  </svg>
                </a>

                {/* YouTube */}
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-none bg-neutral-950 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-500 transition-colors"
                  title="YouTube"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-none bg-neutral-950 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-500 transition-colors"
                  title="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                  </svg>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Concierge Form */}
          <div className="lg:col-span-7 bg-neutral-950 border border-neutral-800 p-8 sm:p-12 relative">
            
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4 animate-fadeIn">
                <div className="w-16 h-16 bg-neutral-900 border border-neutral-700 text-[#DA291C] rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-2xl font-black uppercase text-white tracking-wide">
                  Appointment Request Confirmed
                </h3>
                <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-bold text-white">{formData.name}</span>. Your private concierge request has been prioritized. Our boutique director will contact you within 2 business hours.
                </p>
                <div className="pt-6">
                  <button
                    onClick={resetForm}
                    className="btn-luxury-outline text-xs"
                  >
                    Send Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <h3 className="text-lg font-bold uppercase tracking-wider text-white mb-2">
                  Inquire with Our Concierge
                </h3>

                {/* Name */}
                <div>
                  <label className="block text-xs font-bold tracking-[0.18em] uppercase text-neutral-400 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    className={`w-full bg-neutral-900 border ${
                      errors.name ? 'border-red-500' : 'border-neutral-800 focus:border-white'
                    } text-white px-4 py-3 text-sm focus:outline-none transition-colors`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-400 mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold tracking-[0.18em] uppercase text-neutral-400 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. rahul@example.com"
                      className={`w-full bg-neutral-900 border ${
                        errors.email ? 'border-red-500' : 'border-neutral-800 focus:border-white'
                      } text-white px-4 py-3 text-sm focus:outline-none transition-colors`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold tracking-[0.18em] uppercase text-neutral-400 mb-2">
                      Phone Number *
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 bg-neutral-800 border border-r-0 border-neutral-700 text-xs font-semibold text-neutral-300">
                        +91
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="98765 43210"
                        className={`w-full bg-neutral-900 border ${
                          errors.phone ? 'border-red-500' : 'border-neutral-800 focus:border-white'
                        } text-white px-4 py-3 text-sm focus:outline-none transition-colors`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-xs text-red-400 mt-1">{errors.phone}</p>
                    )}
                  </div>

                </div>

                {/* Inquiry Type */}
                <div>
                  <label className="block text-xs font-bold tracking-[0.18em] uppercase text-neutral-400 mb-2">
                    Inquiry Reason
                  </label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full bg-neutral-900 border border-neutral-800 text-white px-4 py-3 text-sm focus:outline-none focus:border-white transition-colors"
                  >
                    <option value="Private Boutique Appointment">Private Boutique Appointment (Mumbai / Geneva)</option>
                    <option value="Product Availability & Order">Product Availability &amp; Order</option>
                    <option value="Custom Hand Engraving">Bespoke Engraving &amp; Personalization</option>
                    <option value="Official Service & Overhaul">Swiss Horological Service &amp; Overhaul</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold tracking-[0.18em] uppercase text-neutral-400 mb-2">
                    Message / Preferred Date *
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Specify the watch model of interest or preferred fitting appointment date..."
                    className={`w-full bg-neutral-900 border ${
                      errors.message ? 'border-red-500' : 'border-neutral-800 focus:border-white'
                    } text-white px-4 py-3 text-sm focus:outline-none transition-colors`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-xs text-red-400 mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit CTA */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-luxury-primary w-full text-center py-3.5"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center space-x-2">
                        <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                        <span>Transmitting to Concierge...</span>
                      </span>
                    ) : (
                      <span>Request VIP Appointment</span>
                    )}
                  </button>
                </div>

                <p className="text-[0.62rem] text-neutral-500 text-center uppercase tracking-widest mt-2">
                  Complimentary Champagne Reception &amp; Private Salon Viewing Included
                </p>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
