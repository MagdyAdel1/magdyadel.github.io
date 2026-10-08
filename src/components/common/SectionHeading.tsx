import React from 'react';

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  description,
  align = 'left'
}) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center max-w-2xl mx-auto' : 'max-w-3xl'}`}>
      <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
        <span className="text-emerald-500/60 dark:text-emerald-400/60">//</span>
        <span>{label}</span>
      </div>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
