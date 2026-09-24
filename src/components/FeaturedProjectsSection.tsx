import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, CheckCircle, MapPin, Calendar, Layers } from 'lucide-react';
import { PROJECTS } from '../data/plumbingData';
import { ProjectItem } from '../types';

interface FeaturedProjectsProps {
  onOpenEstimate: (serviceContext?: string) => void;
  onSelectProject: (project: ProjectItem) => void;
}

export const FeaturedProjectsSection: React.FC<FeaturedProjectsProps> = ({
  onOpenEstimate,
  onSelectProject,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeBeforeAfter, setActiveBeforeAfter] = useState<Record<string, 'after' | 'before'>>({});

  const toggleView = (projectId: string, view: 'after' | 'before') => {
    setActiveBeforeAfter((prev) => ({ ...prev, [projectId]: view }));
  };

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column (Sticky Sidebar Header) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 self-start">
            <div className="text-xs uppercase tracking-widest font-bold text-orange-600 mb-2">
              Recent Case Studies
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#081B33] tracking-tight mb-4 font-heading">
              See the Quality <br />
              of Our Work
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-body leading-relaxed mb-8">
              Take a look at some of our recent plumbing projects across Texas, showcasing the master craftsmanship, attention to detail, and reliable long-term solutions we deliver every day.
            </p>

            {/* Category Filter Pills (Functional Buttons) */}
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                { id: 'all', label: 'All Projects' },
                { id: 'water-heaters', label: 'Water Heaters' },
                { id: 'drain-repair', label: 'Drain & Sewer' },
                { id: 'residential', label: 'Residential Repipes' },
                { id: 'commercial', label: 'Commercial' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-[#081B33] text-white shadow-sm'
                      : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => onOpenEstimate('Custom Project Evaluation')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md text-sm font-bold text-white bg-orange-500 hover:bg-orange-600 active:bg-orange-700 shadow-md shadow-orange-950/20 transition-all cursor-pointer"
            >
              <span>Get Free Estimate on Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Column: Project Cards List */}
          <div className="lg:col-span-8 space-y-8">
            {filteredProjects.map((project) => {
              const currentMode = activeBeforeAfter[project.id] || 'after';

              return (
                <div
                  key={project.id}
                  className="bg-white rounded-xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="p-6 sm:p-8">
                    {/* Project Header Info */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-orange-500" />
                        <span>{project.location}</span>
                        <span>·</span>
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>Completed in {project.completionTime}</span>
                      </div>

                      <div className="text-right">
                        <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                          {project.category.replace('-', ' ')}
                        </span>
                      </div>
                    </div>

                    <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#081B33] mb-3">
                      {project.title}
                    </h3>

                    <p className="text-sm text-slate-600 font-body leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Image Area with Interactive Before/After Toggle */}
                    <div className="relative rounded-lg overflow-hidden bg-slate-900 group aspect-[16/9] mb-6">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center group-hover:scale-101 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                      {/* Before / After Selector Bar */}
                      <div className="absolute top-4 left-4 flex items-center bg-[#081B33]/85 backdrop-blur-sm p-1 rounded-md border border-white/10 z-10">
                        <button
                          type="button"
                          onClick={() => toggleView(project.id, 'after')}
                          className={`px-3 py-1 text-xs font-semibold rounded transition-colors ${
                            currentMode === 'after'
                              ? 'bg-orange-500 text-white'
                              : 'text-slate-300 hover:text-white'
                          }`}
                        >
                          After (Completed)
                        </button>
                        <button
                          type="button"
                          onClick={() => toggleView(project.id, 'before')}
                          className={`px-3 py-1 text-xs font-semibold rounded transition-colors ${
                            currentMode === 'before'
                              ? 'bg-orange-500 text-white'
                              : 'text-slate-300 hover:text-white'
                          }`}
                        >
                          Before (Issue)
                        </button>
                      </div>

                      {/* Stat Callout Overlay */}
                      <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg border border-slate-200 text-right shadow-md">
                        <div className="text-lg font-black font-heading text-[#081B33] leading-none">
                          {project.highlightStat}
                        </div>
                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                          {project.highlightLabel}
                        </div>
                      </div>
                    </div>

                    {/* Before & After Notes Box */}
                    <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/70 text-xs sm:text-sm grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <span className="font-bold text-red-700 block mb-1">
                          Problem Encountered:
                        </span>
                        <p className="text-slate-600 leading-relaxed">
                          {project.beforeNotes}
                        </p>
                      </div>
                      <div>
                        <span className="font-bold text-emerald-700 block mb-1">
                          PlumbBix Solution:
                        </span>
                        <p className="text-slate-600 leading-relaxed">
                          {project.afterNotes}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Action */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#081B33] hover:text-orange-600 transition-colors"
                      >
                        <span>View Full Scope & Specs</span>
                        <ArrowUpRight className="w-4 h-4 text-orange-500" />
                      </button>

                      <button
                        onClick={() => onOpenEstimate(project.title)}
                        className="text-xs font-bold text-orange-600 hover:underline"
                      >
                        Request Similar Service
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
