import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, Phone, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/plumbingData';

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const EstimateModal: React.FC<EstimateModalProps> = ({
  isOpen,
  onClose,
  defaultService,
}) => {
  const [selectedService, setSelectedService] = useState(defaultService || 'Emergency Plumbing');
  const [urgency, setUrgency] = useState('Today (Same-Day)');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [zip, setZip] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    setZip('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-heading font-extrabold text-2xl text-[#081B33]">
              Estimate Request Confirmed!
            </h3>
            <p className="text-sm text-slate-600 font-body max-w-md mx-auto">
              Thanks <span className="font-bold text-slate-900">{name}</span>. We’ve locked in your request for <span className="font-bold text-orange-600">{selectedService}</span>. A master dispatcher is reviewing your details and will call you at <span className="font-bold font-mono text-slate-900">{phone}</span> shortly.
            </p>
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-600 max-w-sm mx-auto text-left space-y-1">
              <div className="flex justify-between">
                <span>Requested Urgency:</span>
                <span className="font-bold text-slate-800">{urgency}</span>
              </div>
              <div className="flex justify-between">
                <span>Service Depot:</span>
                <span className="font-bold text-slate-800">Austin Central #04</span>
              </div>
              <div className="flex justify-between">
                <span>Diagnostic Policy:</span>
                <span className="font-bold text-emerald-700">Fee Waived with Any Repair</span>
              </div>
            </div>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-md bg-orange-500 text-white font-bold text-sm hover:bg-orange-600 transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-orange-600 mb-1">
                <Clock className="w-3.5 h-3.5" />
                <span>Fast Free Diagnostic Estimate</span>
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-[#081B33]">
                Schedule Plumbing Service
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-body">
                Get upfront, flat-rate pricing before work begins. No hidden trip fees or weekend markups.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Plumbing Service Needed
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="General Inspection">General Inspection / Maintenance</option>
                  <option value="Bathroom / Kitchen Remodel">Bathroom / Kitchen Remodel</option>
                </select>
              </div>

              {/* Urgency */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  How Soon Do You Need Us?
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Emergency (Now)', 'Today (Same-Day)', 'Next 2-3 Days'].map((u) => (
                    <button
                      key={u}
                      type="button"
                      onClick={() => setUrgency(u)}
                      className={`py-2 px-2 text-xs font-semibold rounded-lg border text-center transition-colors cursor-pointer ${
                        urgency === u
                          ? 'bg-[#081B33] text-white border-[#081B33]'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {u}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(512) 555-0199"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>

              {/* Zip Code */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Service Zip Code (Central Texas)
                </label>
                <input
                  type="text"
                  placeholder="e.g. 78704"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-lg bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-bold text-sm tracking-wide shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Request Free Upfront Estimate</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-orange-500" />
                  Licensed & Insured #{COMPANY_INFO.license.split('|')[0].trim()}
                </span>
                <span>or call <a href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`} className="font-bold text-[#081B33]">{COMPANY_INFO.phone}</a></span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
