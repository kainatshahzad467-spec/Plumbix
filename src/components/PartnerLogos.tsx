import React from 'react';

export const PartnerLogos: React.FC = () => {
  const brands = [
    {
      name: 'BRADFORD WHITE',
      sub: 'WATER HEATERS',
      spec: 'Built to be the Best®',
    },
    {
      name: 'Rheem',
      sub: 'WATER HEATING',
      spec: 'The New Degree of Comfort®',
    },
    {
      name: 'KOHLER',
      sub: 'SINCE 1873',
      spec: 'Commercial & Residential',
    },
    {
      name: 'MOEN',
      sub: 'BUY IT FOR LOOKS',
      spec: 'Buy It For Life®',
    },
    {
      name: 'DELTA',
      sub: 'FAUCET COMPANY',
      spec: 'see what Did can do™',
    },
    {
      name: 'FERGUSON',
      sub: 'PLUMBING SUPPLY',
      spec: 'Trade Partner',
    },
    {
      name: 'PHCC',
      sub: 'CONTRACTORS ASSN',
      spec: 'Best People. Best Practices.',
    },
    {
      name: 'BBB ACCREDITED',
      sub: 'A+ RATING',
      spec: 'Ethical Business Standard',
    },
  ];

  return (
    <section className="bg-slate-50 py-8 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-6">
          <p className="text-xs uppercase tracking-widest font-bold text-slate-400 text-center">
            Authorized Installers & Certified Industry Partners
          </p>
        </div>

        {/* Clean Grayscale Partner Logo Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6 items-center">
          {brands.map((b) => (
            <div
              key={b.name}
              className="flex flex-col items-center justify-center p-3 rounded bg-white/70 border border-slate-200/80 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 hover:border-orange-300 transition-all duration-200"
            >
              <span className="font-heading font-black text-sm tracking-tight text-slate-800 text-center">
                {b.name}
              </span>
              <span className="text-[9px] uppercase tracking-wider text-slate-500 font-semibold text-center">
                {b.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
