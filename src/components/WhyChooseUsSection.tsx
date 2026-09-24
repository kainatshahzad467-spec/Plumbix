import React, { useState } from 'react';
import { ArrowRight, Check, Award, ShieldCheck } from 'lucide-react';
import { BENEFITS, ASSETS } from '../data/plumbingData';

export const WhyChooseUsSection: React.FC = () => {
  const [activeBenefit, setActiveBenefit] = useState<number>(0);

  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-1.5 text-xs uppercase tracking-widest font-bold text-orange-600 mb-2">
              <ShieldCheck className="w-4 h-4 text-orange-500" />
              <span>Why Choose Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#081B33] tracking-tight font-heading">
              Built on Trust. <br />
              Driven by Quality.
            </h2>
          </div>

          <p className="text-slate-600 text-sm sm:text-base max-w-md font-body">
            Discover what sets our team apart—from certified expertise and transparent flat-rate pricing to rapid response times and dependable master craftsmanship.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Numbered benefits list */}
          <div className="lg:col-span-7 space-y-3">
            {BENEFITS.map((item, index) => {
              const isActive = activeBenefit === index;
              return (
                <div
                  key={item.number}
                  onClick={() => setActiveBenefit(index)}
                  className={`group p-5 rounded-lg border transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-slate-50 border-orange-500/50 shadow-sm'
                      : 'bg-white border-slate-200/80 hover:border-slate-300 hover:bg-slate-50/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="font-heading font-black text-xl sm:text-2xl text-orange-500 tracking-tight">
                        {item.number}.
                      </span>
                      <h3 className="font-heading font-bold text-lg sm:text-xl text-[#081B33]">
                        {item.title}
                      </h3>
                    </div>

                    <ArrowRight
                      className={`w-5 h-5 transition-transform duration-200 ${
                        isActive
                          ? 'text-orange-500 translate-x-1'
                          : 'text-slate-400 group-hover:text-slate-700 group-hover:translate-x-0.5'
                      }`}
                    />
                  </div>

                  {/* Expandable / active description */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isActive ? 'max-h-32 mt-3 pt-3 border-t border-slate-200/60 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-sm text-slate-600 leading-relaxed font-body">
                      {item.description}
                    </p>
                    <div className="mt-2 flex items-center gap-2 text-xs font-semibold text-orange-600">
                      <Check className="w-3.5 h-3.5" />
                      <span>{item.badge}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Professional image of technician */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
              <img
                src={ASSETS.vanTech}
                alt="PlumbBix Master Plumber in front of service van"
                className="w-full h-auto object-cover object-center max-h-[580px] group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081B33]/85 via-transparent to-transparent" />

              {/* Floating Trust Card over photo bottom */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/20 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-500 text-white flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-[#081B33]">
                      Master Plumber Supervision
                    </h4>
                    <p className="text-xs text-slate-500">
                      Texas State Board Licensed #M-41908
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
