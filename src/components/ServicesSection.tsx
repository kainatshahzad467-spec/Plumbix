import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { SERVICES } from '../data/plumbingData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenEstimate: (serviceTitle?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onOpenEstimate,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredServices = activeFilter === 'all'
    ? SERVICES
    : SERVICES.filter((s) =>
        activeFilter === 'emergency' ? s.id === 'emergency-plumbing' :
        activeFilter === 'residential' ? s.id !== 'commercial-plumbing' :
        activeFilter === 'commercial' ? s.id === 'commercial-plumbing' : true
      );

  return (
    <section id="services" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs uppercase tracking-widest font-bold text-orange-600 mb-2">
              Our Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#081B33] tracking-tight font-heading">
              Expert Plumbing Services <br className="hidden sm:inline" />
              for Every Need
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenEstimate()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-bold text-white bg-orange-500 hover:bg-orange-600 active:bg-orange-700 transition-colors cursor-pointer shadow-sm"
            >
              <span>See All Services & Book</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const isFeatured = index === 0; // Emergency Plumbing is marquee featured
            return (
              <div
                key={service.id}
                onClick={() => onSelectService(service)}
                className={`group relative overflow-hidden rounded-xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col ${
                  isFeatured ? 'md:col-span-2 lg:col-span-1 lg:row-span-2 min-h-[480px]' : 'min-h-[290px]'
                }`}
              >
                {/* Background Image Container */}
                <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-slate-900 shrink-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out opacity-90 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081B33] via-[#081B33]/40 to-transparent" />

                  {/* Corner Action Icon */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 text-slate-800 flex items-center justify-center shadow-md group-hover:bg-orange-500 group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>

                  {/* Badge text without pill styling */}
                  {service.badge && (
                    <div className="absolute top-4 left-4 text-[11px] font-bold uppercase tracking-wider text-orange-400 bg-[#081B33]/80 px-2.5 py-1 rounded backdrop-blur-sm border border-white/10">
                      {service.badge}
                    </div>
                  )}

                  {/* Service Title over image bottom */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white tracking-tight leading-snug drop-shadow-sm">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Card Content & Features */}
                <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <p className="text-sm text-slate-600 font-body leading-relaxed mb-4">
                      {service.description}
                    </p>

                    <div className="space-y-1.5 mb-6">
                      {service.features.slice(0, 3).map((f, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1 font-medium text-slate-700">
                      <Clock className="w-3.5 h-3.5 text-orange-500" />
                      {service.responseTime}
                    </span>
                    <span className="font-bold text-orange-600 group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
                      Learn More <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Emergency Notice Bar beneath services */}
        <div className="mt-12 p-6 rounded-xl bg-[#081B33] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md border border-slate-800">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg text-white">
                Facing an Urgent Water Emergency Right Now?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Main water shut-off assistance, emergency drain augering, and slab leak containment available 24/7.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:8005552473"
              className="px-6 py-3 rounded-md bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm tracking-wide transition-colors"
            >
              Call 24/7 Emergency Dispatch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
