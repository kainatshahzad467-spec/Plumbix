import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle2, Send, ShieldCheck, AlertCircle } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/plumbingData';

interface ContactSectionProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: preselectedService || 'Emergency Plumbing',
    urgency: 'Same Day',
    address: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Please enter your name and phone number so our dispatcher can call you.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Business Information */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest font-bold text-orange-600 mb-2">
                Get in Touch
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#081B33] tracking-tight leading-tight mb-6 font-heading">
                Ready to Schedule <br />
                Your Next Service?
              </h2>
              <p className="text-slate-600 font-body text-base leading-relaxed mb-10">
                Contact our friendly local team to schedule a diagnostic inspection, request an upfront quote, or dispatch emergency assistance immediately.
              </p>

              {/* Information Cards */}
              <div className="space-y-6 text-sm">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-orange-500 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-bold text-slate-400 block mb-0.5">
                      Main Office & Warehouse
                    </span>
                    <p className="font-semibold text-slate-800">
                      {COMPANY_INFO.address}
                    </p>
                    <span className="text-xs text-slate-500">
                      Central Texas Service Depot #04
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-orange-500 shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-bold text-slate-400 block mb-0.5">
                      Phone Numbers
                    </span>
                    <p className="font-semibold text-slate-800">
                      <a href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`} className="hover:text-orange-600">
                        {COMPANY_INFO.phone} — Main Office
                      </a>
                    </p>
                    <p className="font-semibold text-orange-600 font-mono text-sm mt-0.5">
                      <a href={`tel:${COMPANY_INFO.emergencyPhone.replace(/[^0-9]/g, '')}`}>
                        {COMPANY_INFO.emergencyPhone} — 24/7 Emergency Line
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-orange-500 shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-bold text-slate-400 block mb-0.5">
                      Email Inquiries
                    </span>
                    <p className="font-semibold text-slate-800">
                      <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-orange-600">
                        {COMPANY_INFO.email}
                      </a>
                    </p>
                    <p className="text-xs text-slate-500">
                      <a href={`mailto:${COMPANY_INFO.dispatchEmail}`} className="hover:text-orange-600">
                        {COMPANY_INFO.dispatchEmail}
                      </a>
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-orange-500 shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-bold text-slate-400 block mb-0.5">
                      Operating Hours
                    </span>
                    <p className="font-semibold text-slate-800">
                      {COMPANY_INFO.regularHours}
                    </p>
                    <span className="text-xs font-bold text-orange-600">
                      {COMPANY_INFO.serviceHours}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* License Box */}
            <div className="mt-8 p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-orange-500 shrink-0" />
              <span>{COMPANY_INFO.license}</span>
            </div>
          </div>

          {/* Right Column: Professional Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 p-6 sm:p-10 rounded-2xl border border-slate-200/90 shadow-sm">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-heading font-extrabold text-2xl text-[#081B33]">
                    Service Request Received!
                  </h3>
                  <p className="text-slate-600 font-body text-sm max-w-md mx-auto">
                    Thank you, <span className="font-bold text-slate-900">{formData.name}</span>. A licensed plumbing coordinator is reviewing your request and will call you at <span className="font-bold font-mono text-slate-900">{formData.phone}</span> within 15 minutes.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          service: 'Emergency Plumbing',
                          urgency: 'Same Day',
                          address: '',
                          message: '',
                        });
                      }}
                      className="px-6 py-2.5 rounded-md bg-[#081B33] text-white text-xs font-bold hover:bg-slate-800 transition-colors"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-heading font-bold text-xl text-[#081B33] mb-2">
                    Request an Estimate or Callback
                  </h3>
                  <p className="text-xs text-slate-500 mb-6">
                    Fill out the form below. For immediate active water emergencies, please call our 24/7 hotline directly.
                  </p>

                  {errorMsg && (
                    <div className="p-3 rounded-md bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="jane@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(512) 555-0199"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Service Needed & Urgency */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Service Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="General Inspection">General Inspection / Maintenance</option>
                        <option value="Other Plumbing Need">Other Custom Plumbing Need</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Timing / Urgency
                      </label>
                      <select
                        value={formData.urgency}
                        onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                      >
                        <option value="Immediate Emergency">Emergency (Need plumber right away)</option>
                        <option value="Same Day">Same-Day Service</option>
                        <option value="Next 24-48 Hours">Next 24–48 Hours</option>
                        <option value="Flexible / Estimate Only">Flexible / Written Quote Only</option>
                      </select>
                    </div>
                  </div>

                  {/* Address / Zip */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Service Address or Zip Code
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 78704 or South Austin"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Message / Describe Your Plumbing Issue
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Briefly describe what is happening (e.g., leaking pipe under kitchen sink, water heater leaking at the base, slow toilet drain)..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-lg bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-bold text-sm tracking-wide shadow-md shadow-orange-950/20 transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Submit Service Request</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-slate-400 text-center">
                    🔒 We respect your privacy. Your information is never sold or shared.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
