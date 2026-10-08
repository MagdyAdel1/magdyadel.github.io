import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { educationData } from '../../data/education';
import { certificationsData } from '../../data/certifications';
import { GraduationCap, Award, CheckCircle2 } from 'lucide-react';

export const EducationAndCertifications: React.FC = () => {
  return (
    <section id="education" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="06. Education & Certifications"
          title="Academic Background & Professional Certifications"
          description="Formal academic degrees in Computer Science from Ain Shams University and verified specialized technical certifications."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Education Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-lg">
              <GraduationCap className="w-5 h-5 text-emerald-500" />
              <span>Academic Degrees</span>
            </div>

            <div className="space-y-4">
              {educationData.map((item) => (
                <div
                  key={item.degree}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3"
                >
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-base">
                        {item.degree}
                      </h4>
                      <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                        {item.institution}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700 shrink-0">
                      {item.period}
                    </span>
                  </div>

                  {item.grade && (
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                      <span>Cumulative Grade:</span>
                      <span>{item.grade}</span>
                    </div>
                  )}

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-lg">
              <Award className="w-5 h-5 text-emerald-500" />
              <span>Technical Certifications & Specializations</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certificationsData.map((cert) => (
                <div
                  key={cert.title}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800/80 hover:border-emerald-500/30 shadow-sm transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-semibold text-slate-900 dark:text-white text-sm leading-snug">
                        {cert.title}
                      </h4>
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    </div>
                    <div className="inline-block px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-mono text-xs">
                      {cert.issuer}
                    </div>
                  </div>

                  <div className="mt-4 pt-2 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>Verified Credential</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
