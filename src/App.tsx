/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PartnerLogos } from './components/PartnerLogos';
import { CompanyIntro } from './components/CompanyIntro';
import { StatisticsSection } from './components/StatisticsSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { FeaturedProjectsSection } from './components/FeaturedProjectsSection';
import { ProcessSection } from './components/ProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { EstimateModal } from './components/EstimateModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ServiceItem, ProjectItem } from './types';
import { Phone, Calendar } from 'lucide-react';
import { COMPANY_INFO } from './data/plumbingData';

export default function App() {
  const [estimateModalOpen, setEstimateModalOpen] = useState(false);
  const [estimateContextService, setEstimateContextService] = useState<string | undefined>(undefined);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const handleOpenEstimate = (serviceContext?: string) => {
    setEstimateContextService(serviceContext);
    setEstimateModalOpen(true);
  };

  const handleCloseEstimate = () => {
    setEstimateModalOpen(false);
    setEstimateContextService(undefined);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-body selection:bg-orange-500 selection:text-white">
      {/* Main Transparent / Sticky Navigation */}
      <Navbar onOpenEstimate={handleOpenEstimate} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection onOpenEstimate={() => handleOpenEstimate('Emergency Plumbing')} />

        {/* Partner Logos Grayscale Strip */}
        <PartnerLogos />

        {/* Company Intro Section */}
        <CompanyIntro />

        {/* Statistics Section */}
        <StatisticsSection />

        {/* Services Bento & Grid Section */}
        <ServicesSection
          onSelectService={(service) => setSelectedService(service)}
          onOpenEstimate={handleOpenEstimate}
        />

        {/* Why Choose Us Section */}
        <WhyChooseUsSection />

        {/* Featured Projects & Case Studies */}
        <FeaturedProjectsSection
          onOpenEstimate={handleOpenEstimate}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* 4-Step Process Timeline */}
        <ProcessSection onOpenEstimate={() => handleOpenEstimate()} />

        {/* Verified Testimonials & Google Reviews */}
        <TestimonialsSection />

        {/* Accordion FAQ Section */}
        <FaqSection onOpenEstimate={() => handleOpenEstimate('General Question')} />

        {/* Large Orange CTA Banner with Service Van */}
        <CtaBanner onOpenEstimate={() => handleOpenEstimate('Same-Day Consultation')} />

        {/* Contact Section & Form */}
        <ContactSection preselectedService={estimateContextService} />
      </main>

      {/* Dark Navy Footer */}
      <Footer />

      {/* Interactive Modals */}
      <EstimateModal
        isOpen={estimateModalOpen}
        onClose={handleCloseEstimate}
        defaultService={estimateContextService}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookService={(serviceTitle) => handleOpenEstimate(serviceTitle)}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestQuote={(projectTitle) => handleOpenEstimate(`Case Study Quote: ${projectTitle}`)}
      />

      {/* Floating Mobile Quick Action Bar (Under 15% viewport height) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#081B33]/95 backdrop-blur-md border-t border-slate-700 py-2.5 px-4 flex items-center justify-between gap-3 shadow-2xl">
        <a
          href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
          className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-md bg-white text-[#081B33] text-xs font-bold shadow transition-transform active:scale-95"
        >
          <Phone className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
          <span>Call 24/7</span>
        </a>
        <button
          onClick={() => handleOpenEstimate()}
          className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-md bg-orange-500 text-white text-xs font-bold shadow transition-transform active:scale-95 cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Free Estimate</span>
        </button>
      </div>
    </div>
  );
}
