import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Badge } from '../common/Badge';
import { otherProjects } from '../../data/projects';
import { Project } from '../../types';
import { Github, Award } from 'lucide-react';

export const OtherProjects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Microservices & Distributed',
    'Backend & APIs',
    'Systems & Algorithms',
    'Machine Learning & CV',
    'Security & Cryptography'
  ];

  const filteredProjects = selectedCategory === 'All'
    ? otherProjects
    : otherProjects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="04. Other Key Projects"
          title="Engineered Systems & Implementations"
          description="A collection of backend systems, data structures, algorithms, cryptography, and computer vision projects."
        />

        {/* Filter Categories */}
        <div className="mb-10 flex flex-wrap gap-2 items-center">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project: Project) => (
            <div
              key={project.id}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800/80 hover:border-emerald-500/40 dark:hover:border-emerald-500/40 shadow-sm transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Top Row: Category & Badges */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-medium">
                    {project.category}
                  </span>
                  {project.badge && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                      <Award className="w-3 h-3" />
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Algorithms List if present */}
                {project.algorithms && (
                  <div className="mb-4 p-3 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-xs">
                    <span className="block font-mono text-[11px] text-slate-400 mb-1.5 font-medium">
                      Implemented Search Algorithms:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.algorithms.map((algo) => (
                        <span key={algo} className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                          {algo}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="default" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono font-medium text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
                <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
                  // verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
