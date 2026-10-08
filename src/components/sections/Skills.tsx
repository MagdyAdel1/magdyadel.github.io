import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Badge } from '../common/Badge';
import { skillCategories } from '../../data/skills';
import { 
  Server, 
  Code2, 
  Database, 
  ShieldCheck, 
  Container, 
  Boxes, 
  Wrench,
  Sparkles
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const categoryIcons: Record<string, React.ReactNode> = {
    backend: <Server className="w-5 h-5 text-emerald-500" />,
    languages: <Code2 className="w-5 h-5 text-sky-500" />,
    databases: <Database className="w-5 h-5 text-indigo-500" />,
    security: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
    devops: <Container className="w-5 h-5 text-amber-500" />,
    architecture: <Boxes className="w-5 h-5 text-teal-400" />,
    tools: <Wrench className="w-5 h-5 text-slate-400" />
  };

  const categories = Object.entries(skillCategories);

  const displayedCategories = activeFilter === 'all'
    ? categories
    : categories.filter(([key]) => key === activeFilter);

  return (
    <section id="skills" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="02. Technical Skills"
          title="Technologies & Engineering Competencies"
          description="A curated view of my technical skills across backend architecture, databases, security, and cloud infrastructure."
        />

        {/* Filter Tabs for quick scanning */}
        <div className="mb-10 flex flex-wrap gap-2 items-center">
          <button
            type="button"
            onClick={() => setActiveFilter('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
              activeFilter === 'all'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/30'
            }`}
          >
            All Categories ({categories.length})
          </button>
          {categories.map(([key, category]) => (
            <button
              key={key}
              type="button"
              onClick={() => setActiveFilter(key)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                activeFilter === key
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/30'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map(([key, category]) => (
            <div
              key={key}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800/80 hover:border-emerald-500/40 dark:hover:border-emerald-500/40 shadow-sm transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 group-hover:scale-105 transition-transform">
                    {categoryIcons[key] || <Sparkles className="w-5 h-5 text-emerald-500" />}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white text-base">
                      {category.title}
                    </h3>
                    <span className="font-mono text-[11px] text-slate-400 dark:text-slate-500">
                      {category.skills.length} competencies
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant={key === 'backend' ? 'brand' : key === 'languages' ? 'accent' : 'default'}
                      size="md"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500 font-mono">
                <span>Verified in projects</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/60" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
