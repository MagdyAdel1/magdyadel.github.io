import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { experienceData } from '../../data/experience';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="05. Experience"
          title="Professional Work & Technical Training"
          description="Software development experience maintaining web platforms and structured software testing academy training."
        />

        <div className="max-w-4xl space-y-8">
          {experienceData.map((item, index) => (
            <div
              key={item.company}
              className={`p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden ${
                index === 1 ? 'opacity-90' : ''
              }`}
            >
              {/* Left Accent Bar */}
              <div
                className={`absolute top-0 left-0 bottom-0 w-1.5 ${
                  index === 0 ? 'bg-emerald-500' : 'bg-slate-400 dark:bg-slate-700'
                }`}
              />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {item.role}
                    </h3>
                    <span className="text-slate-400 dark:text-slate-600">&bull;</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold text-lg">
                      {item.company}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 mt-1 text-xs text-slate-500 dark:text-slate-400 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {item.badge && (
                  <span className="self-start sm:self-center px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Responsibilities */}
              <ul className="mt-4 space-y-2.5 text-sm text-slate-600 dark:text-slate-300">
                {item.responsibilities.map((resp, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
