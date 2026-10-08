import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'brand' | 'accent' | 'outline' | 'subtle';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
}) => {
  const baseClasses = "inline-flex items-center font-mono font-medium rounded transition-colors";
  
  const sizeClasses = {
    sm: "text-xs px-2 py-0.5",
    md: "text-xs px-2.5 py-1"
  };

  const variantClasses = {
    default: "bg-slate-200 text-slate-800 dark:bg-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700/60",
    brand: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20",
    accent: "bg-sky-500/10 text-sky-700 dark:text-sky-400 border border-sky-500/20",
    outline: "border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 bg-transparent",
    subtle: "bg-slate-100 text-slate-600 dark:bg-slate-800/60 dark:text-slate-400 border border-slate-200 dark:border-slate-750"
  };

  return (
    <span className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
};
