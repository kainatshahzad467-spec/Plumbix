import React from 'react';
import { STATS } from '../data/plumbingData';

export const StatisticsSection: React.FC = () => {
  return (
    <section className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {STATS.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center md:items-start text-center md:text-left ${
                idx !== 0 ? 'pt-6 md:pt-0 md:pl-8' : ''
              }`}
            >
              <div className="flex items-baseline gap-1 mb-1">
                <span className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-[#081B33] tracking-tight tabular-nums">
                  {stat.value.replace(/[^0-9.]/g, '')}
                </span>
                <span className="font-heading font-black text-2xl sm:text-3xl text-orange-500">
                  {stat.value.replace(/[0-9.]/g, '')}
                </span>
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-1">
                {stat.label}
              </h3>
              <p className="text-xs text-slate-500 font-body max-w-[220px]">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
