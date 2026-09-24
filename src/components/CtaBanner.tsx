import React from 'react';
import { ArrowRight, Phone, ShieldCheck, Clock } from 'lucide-react';
import { ASSETS, COMPANY_INFO } from '../data/plumbingData';

interface CtaBannerProps {
  onOpenEstimate: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenEstimate }) => {
  return (
    <section className="bg-orange-500 py-16 lg:py-20 relative overflow-hidden">
      {/* Background Subtle Geometric Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text & CTAs */}
          <div className="lg:col-span-6 text-white">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-orange-950 mb-3 bg-white/20 px-3 py-1 rounded-full w-fit">
              <Clock className="w-3.5 h-3.5 text-white" />
              <span>Same-Day Plumbing Appointments Available</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 font-heading">
              Let's Solve Your Plumbing Problem Today
            </h2>

            <p className="text-base text-orange-50 leading-relaxed mb-8 font-body max-w-xl">
              Don’t let a minor drip turn into severe foundation damage or high water bills. Our fully equipped mobile plumbers arrive on time with upfront pricing.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenEstimate}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-md text-sm font-bold text-white bg-[#081B33] hover:bg-[#051224] active:bg-black shadow-xl shadow-black/25 transition-all cursor-pointer"
              >
                <span>Get Free Estimate</span>
                <ArrowRight className="w-4 h-4 text-orange-400" />
              </button>

              <a
                href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-md text-sm font-bold text-[#081B33] bg-white hover:bg-orange-50 active:bg-slate-100 shadow-md transition-all"
              >
                <Phone className="w-4 h-4 text-orange-600 fill-orange-600" />
                <span>Call Now {COMPANY_INFO.phone}</span>
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-xs text-orange-100 font-medium">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-white" />
                No Overtime Charges
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-white" />
                Upfront Written Quotes
              </span>
            </div>
          </div>

          {/* Right Image: Branded Fleet Truck Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 bg-slate-900 group">
              <img
                src={ASSETS.vanBanner}
                alt="PlumbBix Plumbing Mobile Fleet Van"
                className="w-full h-auto object-cover object-center group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-lg text-slate-800 text-xs flex items-center justify-between">
                <div>
                  <span className="font-heading font-black text-sm text-[#081B33] block">
                    Mobile Warehouse On Wheels
                  </span>
                  <span className="text-slate-500 text-[11px]">
                    Carries 2,000+ OEM replacement parts for immediate fixes
                  </span>
                </div>
                <span className="font-bold text-orange-600 text-xs shrink-0">
                  Ready to Roll
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
