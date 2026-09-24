import React from 'react';
import { Phone, Mail, MapPin, Wrench, ShieldCheck, ArrowUp } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/plumbingData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#081B33] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1 & 2: Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center text-white shadow-md shadow-orange-950/40">
                <Wrench className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-black text-2xl tracking-tight text-white leading-none">
                  Plumb<span className="text-orange-500">Bix</span>
                </span>
                <span className="text-[10px] uppercase tracking-wider text-slate-300 font-semibold mt-0.5">
                  Plumbing Solutions
                </span>
              </div>
            </a>

            <p className="text-sm text-slate-300 font-body leading-relaxed max-w-sm">
              Reliable plumbing solutions for homes and businesses, delivered with expert craftsmanship, transparent flat-rate pricing, and exceptional customer service.
            </p>

            <div className="pt-2 text-xs text-slate-300 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-orange-400 shrink-0" />
              <span>{COMPANY_INFO.license}</span>
            </div>

            {/* Social Icons */}
            <div className="pt-3 flex items-center gap-3">
              {[
                { name: 'Instagram', icon: 'IG' },
                { name: 'LinkedIn', icon: 'IN' },
                { name: 'Facebook', icon: 'FB' },
                { name: 'Google Business', icon: 'GB' },
              ].map((s) => (
                <span
                  key={s.name}
                  className="w-8 h-8 rounded bg-slate-800/80 hover:bg-orange-500 text-slate-200 hover:text-white flex items-center justify-center text-xs font-bold transition-colors cursor-pointer border border-slate-700"
                  title={s.name}
                >
                  {s.icon}
                </span>
              ))}
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-orange-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-400 transition-colors">
                  All Services
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-orange-400 transition-colors">
                  Completed Projects
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-orange-400 transition-colors">
                  Client Reviews
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-orange-400 transition-colors">
                  Plumbing FAQs
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-orange-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Services */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-orange-400 transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contact Direct */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white mb-4">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`} className="font-semibold text-white hover:text-orange-400">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-orange-400 font-bold">
                <Phone className="w-4 h-4 text-orange-500 fill-orange-500 shrink-0" />
                <a href={`tel:${COMPANY_INFO.emergencyPhone.replace(/[^0-9]/g, '')}`} className="hover:underline">
                  24/7: {COMPANY_INFO.emergencyPhone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-slate-300 hover:text-orange-400">
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} PlumbBix Plumbing & Drain Solutions. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-300 cursor-pointer">Accessibility</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded bg-slate-800 hover:bg-orange-500 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Large Decorative Footer Brand Banner (Inspired by reference bottom section) */}
        <div className="mt-12 pt-6 border-t border-slate-900/60 flex items-center justify-center overflow-hidden select-none opacity-10">
          <span className="font-heading font-black text-6xl sm:text-8xl md:text-9xl tracking-tighter text-white whitespace-nowrap">
            PLUMBIX PLUMBING
          </span>
        </div>
      </div>
    </footer>
  );
};
