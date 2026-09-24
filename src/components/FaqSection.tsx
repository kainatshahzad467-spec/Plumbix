import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, Phone, ArrowRight } from 'lucide-react';
import { FAQS, ASSETS, COMPANY_INFO } from '../data/plumbingData';

interface FaqSectionProps {
  onOpenEstimate: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenEstimate }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-1.5 text-xs uppercase tracking-widest font-bold text-orange-600 mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-orange-500" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#081B33] tracking-tight font-heading mb-4">
            Need a Reliable Plumber?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-body">
            Whether it's an emergency repair or a planned installation, our experienced team is ready to help. Here are the most common questions our clients ask.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Accordion Questions */}
          <div className="lg:col-span-7 space-y-4">
            {FAQS.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <div
                  key={faq.id}
                  className={`rounded-xl border transition-all duration-200 ${
                    isOpen
                      ? 'bg-slate-50/80 border-orange-500/40 shadow-sm'
                      : 'bg-white border-slate-200/80 hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading font-bold text-base sm:text-lg text-[#081B33] pr-4">
                      {faq.question}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? 'bg-orange-500 text-white'
                          : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                      }`}
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-96 px-6 pb-6 pt-0 opacity-100' : 'max-h-0 px-6 pb-0 pt-0 opacity-0'
                    }`}
                  >
                    <div className="text-xs font-semibold text-orange-600 uppercase tracking-wider mb-2">
                      {faq.category}
                    </div>
                    <p className="text-sm text-slate-600 font-body leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Local Facility & Direct Dispatch Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-[#081B33] text-white">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={ASSETS.vanBanner}
                  alt="PlumbBix Dispatch & Service Fleet"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081B33] via-transparent to-transparent" />
                <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded shadow">
                  Fleet Ready
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-heading font-extrabold text-xl text-white mb-2">
                  Have a question not listed here?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-body mb-6 leading-relaxed">
                  Our live local dispatch team in Austin is on call 24 hours a day to answer diagnostic questions and provide immediate scheduling.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-md bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call {COMPANY_INFO.phone}</span>
                  </a>
                  <button
                    onClick={onOpenEstimate}
                    className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-md border border-slate-600 hover:border-slate-400 text-white font-bold text-sm transition-colors cursor-pointer"
                  >
                    <span>Message Us</span>
                    <ArrowRight className="w-4 h-4 text-orange-400" />
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Service Areas List */}
            <div id="service-areas" className="p-6 rounded-xl bg-slate-50 border border-slate-200">
              <h4 className="font-heading font-bold text-sm text-[#081B33] uppercase tracking-wider mb-3">
                Primary Service Coverage Zones
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
                {COMPANY_INFO.serviceAreas.map((area) => (
                  <div key={area} className="flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-slate-400 mt-4 italic">
                *Don't see your neighborhood? Call us—we frequently service surrounding Travis and Williamson counties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
