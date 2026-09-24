import React from 'react';
import { Star, CheckCircle, Phone, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { ASSETS, COMPANY_INFO } from '../data/plumbingData';

interface HeroSectionProps {
  onOpenEstimate: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenEstimate }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-20 overflow-hidden bg-[#081B33]">
      {/* Background Image with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.hero}
          alt="Professional licensed plumber performing copper pipe repair"
          className="w-full h-full object-cover object-center transform scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Dark Navy Dual Scrim Gradient to guarantee WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#081B33]/95 via-[#081B33]/85 to-[#081B33]/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#081B33] via-transparent to-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 md:py-16">
        <div className="max-w-3xl">
          {/* Small Trust Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white mb-6 shadow-sm">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs sm:text-sm font-semibold text-slate-100 tracking-wide">
              Rated 4.9/5 by Local Homeowners
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6 font-heading">
            Reliable Plumbing Services <br className="hidden sm:inline" />
            <span className="text-white">When You Need Them Most</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-slate-200 leading-relaxed mb-8 max-w-2xl font-body">
            Licensed plumbers providing emergency repairs, drain cleaning, water heater services, leak detection, and commercial plumbing solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <button
              onClick={onOpenEstimate}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-md text-base font-bold text-white bg-orange-500 hover:bg-orange-600 active:bg-orange-700 shadow-lg shadow-orange-950/40 transition-all hover:translate-y-[-1px] cursor-pointer"
            >
              <span>Schedule Service</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-md text-base font-bold text-white bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-sm transition-all hover:translate-y-[-1px]"
            >
              <Phone className="w-4 h-4 text-orange-400 fill-orange-400" />
              <span>Call Now {COMPANY_INFO.phone}</span>
            </a>
          </div>

          {/* Trust Indicators beneath CTA */}
          <div className="pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs sm:text-sm text-slate-200">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-orange-400 shrink-0" />
              <span className="font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-orange-400 shrink-0" />
              <span className="font-medium">Same-Day Service</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-orange-400 shrink-0" />
              <span className="font-medium">Satisfaction Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-orange-400 shrink-0" />
              <span className="font-medium">24/7 Emergency Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
