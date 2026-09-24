import React from 'react';
import { X, CheckCircle, MapPin, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onRequestQuote: (projectTitle: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onRequestQuote,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        <div className="relative h-64 bg-slate-900">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#081B33] via-transparent to-transparent" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-black/90 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-400 block mb-1">
              Case Study Details
            </span>
            <h3 className="font-heading font-extrabold text-2xl text-white">
              {project.title}
            </h3>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-4 text-xs text-slate-500 pb-3 border-b border-slate-100">
            <div className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-orange-500" />
              <span>{project.location}</span>
            </div>
            <span>·</span>
            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>Turnaround: {project.completionTime}</span>
            </div>
          </div>

          <p className="text-sm text-slate-700 leading-relaxed font-body">
            {project.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
            <div>
              <span className="font-bold text-red-700 block mb-1">
                The Initial Challenge:
              </span>
              <p className="text-slate-600 leading-relaxed">
                {project.beforeNotes}
              </p>
            </div>
            <div>
              <span className="font-bold text-emerald-700 block mb-1">
                The Permanent Fix:
              </span>
              <p className="text-slate-600 leading-relaxed">
                {project.afterNotes}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 rounded-lg bg-orange-50 border border-orange-200">
            <div>
              <span className="text-xs font-bold text-orange-950 uppercase tracking-wider block">
                Key Performance Metric
              </span>
              <span className="font-heading font-black text-2xl text-orange-600">
                {project.highlightStat}
              </span>
              <span className="text-xs text-slate-600 ml-2">
                {project.highlightLabel}
              </span>
            </div>
            <ShieldCheck className="w-8 h-8 text-orange-500" />
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-md border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onRequestQuote(project.title);
              }}
              className="px-6 py-2.5 rounded-md bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold shadow-md transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <span>Get Free Estimate on Similar Work</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
