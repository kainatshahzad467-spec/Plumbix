import React, { useState, useEffect } from 'react';
import { Phone, Calendar, ShieldCheck, Clock, MapPin, Wrench } from 'lucide-react';
import { COMPANY_INFO } from '../data/plumbingData';

interface NavbarProps {
  onOpenEstimate: (service?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEstimate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Service Areas', href: '#service-areas' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Emergency Utility Bar */}
      <div className={`transition-colors duration-200 border-b border-white/10 ${
        isScrolled ? 'bg-[#051224] text-slate-300 py-1.5' : 'bg-[#081B33]/90 text-slate-200 py-2 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium text-orange-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              24/7 Live Emergency Dispatch
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-orange-400" />
              <span>Licensed & Insured #{COMPANY_INFO.license.split('|')[0].trim()}</span>
            </span>
            <span className="hidden lg:inline-flex items-center gap-1 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>Avg Response: 45 Mins</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${COMPANY_INFO.emergencyPhone.replace(/[^0-9]/g, '')}`}
              className="flex items-center gap-1.5 font-semibold text-white hover:text-orange-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
              <span className="hidden sm:inline">Emergency Call:</span>
              <span className="font-mono text-orange-400 font-bold">{COMPANY_INFO.emergencyPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Transparent / Sticky Navigation */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-[#081B33] shadow-xl py-3 border-b border-slate-800'
            : 'bg-[#081B33]/85 backdrop-blur-md py-4 sm:py-5 border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Company Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center text-white shadow-md shadow-orange-950/40 group-hover:bg-orange-600 transition-colors">
              <Wrench className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-black text-2xl tracking-tight text-white leading-none">
                Plumb<span className="text-orange-500">Bix</span>
              </span>
              <span className="text-[10px] uppercase tracking-wider text-slate-300 font-semibold mt-0.5">
                Plumbing Solutions
              </span>
            </div>
          </a>

          {/* Center: Desktop Navigation - Visible on desktop, NO hamburger on desktop */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-slate-100 hover:text-orange-400 transition-colors tracking-wide relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange-500 hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Call Now & Get Free Estimate Buttons */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-md text-xs font-bold text-white border border-slate-600 hover:border-orange-500 hover:bg-white/5 transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-orange-400" />
              <span>Call Now</span>
            </a>

            <button
              onClick={() => onOpenEstimate()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-xs sm:text-sm font-bold text-white bg-orange-500 hover:bg-orange-600 active:bg-orange-700 shadow-md shadow-orange-950/30 transition-all hover:scale-[1.02] whitespace-nowrap cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Get Free Estimate</span>
            </button>

            {/* Mobile Hamburger toggle ONLY visible on small screens (< lg) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`h-0.5 w-full bg-white transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`h-0.5 w-full bg-white transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`h-0.5 w-full bg-white transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#081B33] border-t border-slate-800 px-4 pt-3 pb-6 mt-3 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-slate-200 hover:text-orange-400"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="flex items-center justify-center gap-2 py-2.5 rounded-md border border-slate-600 text-white font-semibold text-sm"
              >
                <Phone className="w-4 h-4 text-orange-400" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEstimate();
                }}
                className="w-full py-2.5 rounded-md bg-orange-500 text-white font-bold text-sm shadow-md"
              >
                Get Free Estimate
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
