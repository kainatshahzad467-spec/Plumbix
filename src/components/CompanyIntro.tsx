import React from 'react';
import { ShieldCheck, Award, ThumbsUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/plumbingData';

export const CompanyIntro: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtle kicker without pill enclosure */}
        <div className="flex items-center justify-center gap-2 mb-4 text-xs uppercase tracking-widest font-bold text-orange-600">
          <Award className="w-4 h-4 text-orange-500" />
          <span>Built on Craftsmanship & Local Trust</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#081B33] leading-snug mb-6 font-heading">
          Delivering dependable plumbing solutions with a commitment to quality workmanship, transparent pricing, and exceptional customer care.
        </h2>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-body mb-10 max-w-3xl mx-auto">
          From routine maintenance to urgent emergency repairs, we ensure every job is completed with precision and professionalism. Founded as a family-owned business over two decades ago, {COMPANY_INFO.name} has grown into one of Central Texas’s most reputable plumbing contractors, backed by master-licensed tradesmen and guaranteed upfront pricing.
        </p>

        {/* 3 Core Trust Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-slate-100 text-left">
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/60">
            <div className="flex items-center gap-2 text-slate-900 font-bold mb-1.5 text-sm font-heading">
              <ShieldCheck className="w-4 h-4 text-orange-500" />
              <span>State Licensed Technicians</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed font-body">
              Every plumber on your property holds an active Texas Master or Journeyman license, background cleared and drug tested.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/60">
            <div className="flex items-center gap-2 text-slate-900 font-bold mb-1.5 text-sm font-heading">
              <ThumbsUp className="w-4 h-4 text-orange-500" />
              <span>Customer-First Guarantee</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed font-body">
              If a repair fails to satisfy your expectations or manufacturer specifications, we return immediately at zero cost.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/60">
            <div className="flex items-center gap-2 text-slate-900 font-bold mb-1.5 text-sm font-heading">
              <Award className="w-4 h-4 text-orange-500" />
              <span>26+ Years of Community Service</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed font-body">
              Locally owned and operated, treating your residential or commercial investment with the respect we’d give our own homes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
