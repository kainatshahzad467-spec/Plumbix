import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS } from '../data/plumbingData';

interface ProcessSectionProps {
  onOpenEstimate: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenEstimate }) => {
  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Heading and Value Proposition */}
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-widest font-bold text-orange-600 mb-2">
              How We Work
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#081B33] tracking-tight leading-tight mb-6 font-heading">
              A Simple Process, <br />
              Exceptional Results
            </h2>
            <p className="text-slate-600 font-body text-base leading-relaxed mb-8">
              From your initial call to the final safety check and clean-up, we make every step straightforward, predictable, and 100% hassle-free. No surprise invoices, no messy job sites.
            </p>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/80 mb-8 space-y-3">
              <div className="flex items-center gap-2.5 text-sm font-bold text-[#081B33]">
                <CheckCircle2 className="w-4 h-4 text-orange-500" />
                <span>Upfront Flat-Rate Pricing</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-bold text-[#081B33]">
                <CheckCircle2 className="w-4 h-4 text-orange-500" />
                <span>Fully Stocked Service Trucks</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-bold text-[#081B33]">
                <CheckCircle2 className="w-4 h-4 text-orange-500" />
                <span>Written Warranty on All Work</span>
              </div>
            </div>

            <button
              onClick={onOpenEstimate}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md text-sm font-bold text-white bg-orange-500 hover:bg-orange-600 active:bg-orange-700 shadow-md transition-all cursor-pointer"
            >
              <span>Schedule Your Service Today</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Column: Clean Vertical Timeline */}
          <div className="lg:col-span-7">
            <div className="relative pl-6 sm:pl-10 space-y-12 before:absolute before:left-3 sm:before:left-5 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-200">
              {PROCESS_STEPS.map((step) => (
                <div key={step.step} className="relative group">
                  {/* Timeline Node */}
                  <div className="absolute -left-6 sm:-left-10 top-0 w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-white border-2 border-orange-500 flex items-center justify-center shadow-sm">
                    <span className="font-heading font-black text-xs sm:text-sm text-orange-600">
                      {step.step}
                    </span>
                  </div>

                  <div className="bg-slate-50/70 p-6 rounded-xl border border-slate-200/70 hover:border-orange-300 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-heading font-black text-2xl text-orange-500">
                        {step.step}
                      </span>
                      <h3 className="font-heading font-bold text-xl text-[#081B33]">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-600 font-body leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
