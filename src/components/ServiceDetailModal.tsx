import React from 'react';
import { X, CheckCircle, Clock, ShieldCheck, Phone, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';
import { COMPANY_INFO } from '../data/plumbingData';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookService,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        {/* Header Image */}
        <div className="relative h-56 sm:h-64 bg-slate-900">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#081B33] via-[#081B33]/60 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 text-white hover:bg-black/80 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-400 block mb-1">
              PlumbBix Master Service
            </span>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-body">
            {service.description}
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs">
            <div>
              <span className="text-slate-400 uppercase tracking-wider font-bold block mb-1">
                Typical Response
              </span>
              <div className="flex items-center gap-1.5 font-bold text-slate-900">
                <Clock className="w-4 h-4 text-orange-500" />
                <span>{service.responseTime}</span>
              </div>
            </div>
            <div>
              <span className="text-slate-400 uppercase tracking-wider font-bold block mb-1">
                Labor & Parts Warranty
              </span>
              <div className="flex items-center gap-1.5 font-bold text-slate-900">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>{service.warranty}</span>
              </div>
            </div>
          </div>

          {/* What's Included */}
          <div>
            <h4 className="font-heading font-bold text-sm text-[#081B33] uppercase tracking-wider mb-3">
              Included in this Service:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Common Symptoms / Issues Solved */}
          <div>
            <h4 className="font-heading font-bold text-sm text-[#081B33] uppercase tracking-wider mb-2">
              Common Signs You Need This:
            </h4>
            <ul className="list-disc list-inside text-xs text-slate-600 space-y-1">
              {service.popularIssues.map((issue, idx) => (
                <li key={idx}>{issue}</li>
              ))}
            </ul>
          </div>

          {/* Bottom Actions */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md border border-slate-300 text-slate-800 text-xs font-bold hover:bg-slate-50 transition-colors"
            >
              <Phone className="w-4 h-4 text-orange-500" />
              <span>Call For Questions</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onBookService(service.title);
              }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold shadow-md transition-colors cursor-pointer"
            >
              <span>Book {service.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
