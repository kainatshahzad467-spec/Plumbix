import React, { useState } from 'react';
import { Star, CheckCircle, ShieldCheck, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/plumbingData';

export const TestimonialsSection: React.FC = () => {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  const featuredReview = TESTIMONIALS[activeReviewIndex];

  return (
    <section id="reviews" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-1.5 text-xs uppercase tracking-widest font-bold text-orange-600 mb-2">
            <Star className="w-3.5 h-3.5 fill-orange-500 text-orange-500" />
            <span>Verified Customer Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#081B33] tracking-tight font-heading mb-4">
            Trusted by Thousands of Homeowners
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-body">
            See why homeowners and businesses across Texas continue to choose PlumbBix for reliable plumbing repairs and transparent, honest service.
          </p>
        </div>

        {/* Featured Testimonial Layout (Matching reference design composition) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          {/* Left: Metric Pillars Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-6">
            {/* Top Large Stat Box */}
            <div className="col-span-2 p-8 rounded-2xl bg-slate-50 border border-slate-200/90 relative flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider font-bold text-slate-500">
                  Total Track Record
                </span>
                <span className="text-[11px] font-bold text-white bg-[#081B33] px-2.5 py-1 rounded">
                  Completed Jobs
                </span>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-black font-heading text-[#081B33] tracking-tight mb-2">
                  15,840+
                </div>
                <p className="text-sm text-slate-600 font-body">
                  Projects successfully completed with zero safety incidents and 100% code adherence.
                </p>
              </div>
            </div>

            {/* Bottom Left Stat Box */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase tracking-wider font-bold text-slate-500">
                  Experience
                </span>
                <span className="text-[10px] font-bold text-white bg-slate-800 px-2 py-0.5 rounded">
                  Established
                </span>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black font-heading text-[#081B33]">
                  26+
                </div>
                <div className="text-xs text-slate-500 font-body mt-1">
                  Years of Local Mastery
                </div>
              </div>
            </div>

            {/* Bottom Right Stat Box */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase tracking-wider font-bold text-slate-500">
                  Google Score
                </span>
                <span className="text-[10px] font-bold text-white bg-emerald-700 px-2 py-0.5 rounded">
                  Verified 5-Star
                </span>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black font-heading text-[#081B33] flex items-center gap-1">
                  4.9 <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                </div>
                <div className="text-xs text-slate-500 font-body mt-1">
                  Based on 1,420+ Reviews
                </div>
              </div>
            </div>
          </div>

          {/* Right: Featured Testimonial Card (Plumbing Orange #F97316 matching reference) */}
          <div className="lg:col-span-6 rounded-2xl bg-orange-500 p-8 sm:p-10 text-white flex flex-col justify-between relative shadow-xl shadow-orange-950/20">
            <div>
              {/* Star Rating & Google badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-1.5">
                  {[...Array(featuredReview.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-white text-white" />
                  ))}
                  <span className="ml-2 font-black text-sm text-white/90">
                    5.0 / 5.0
                  </span>
                </div>

                <div className="flex items-center gap-1.5 bg-black/15 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                  <span className="font-bold text-white">Google</span>
                  <span className="text-white/80">Review</span>
                </div>
              </div>

              {/* Quote Body */}
              <blockquote className="text-lg sm:text-xl font-medium leading-relaxed mb-8 text-white font-body">
                "{featuredReview.quote}"
              </blockquote>
            </div>

            {/* Reviewer Bio & Controls */}
            <div className="pt-6 border-t border-white/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/20 border-2 border-white text-white font-heading font-black text-base flex items-center justify-center">
                  {featuredReview.avatarText}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-white">
                    {featuredReview.name}
                  </h3>
                  <p className="text-xs text-orange-100 flex items-center gap-1">
                    <span>{featuredReview.location}</span>
                    <span>·</span>
                    <span className="font-medium text-white/90">{featuredReview.service}</span>
                  </p>
                </div>
              </div>

              {/* Carousel Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    setActiveReviewIndex((prev) =>
                      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
                    )
                  }
                  className="w-9 h-9 rounded-full bg-white/20 hover:bg-white text-white hover:text-orange-600 flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() =>
                    setActiveReviewIndex((prev) =>
                      prev === TESTIMONIALS.length - 1 ? 0 : prev + 1
                    )
                  }
                  className="w-9 h-9 rounded-full bg-white/20 hover:bg-white text-white hover:text-orange-600 flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.slice(1).map((review) => (
            <div
              key={review.id}
              className="p-6 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">{review.date}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-body mb-4">
                  "{review.quote}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-[#081B33] block">{review.name}</span>
                  <span className="text-slate-500 text-[11px]">{review.location}</span>
                </div>
                <span className="text-emerald-700 font-semibold flex items-center gap-1 text-[11px]">
                  <CheckCircle className="w-3 h-3" />
                  Verified Homeowner
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
