import React from 'react';
import { Github, Linkedin, Mail, MapPin, ArrowUp } from 'lucide-react';
import { profileData } from '../../data/profile';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-slate-100/50 dark:bg-[#070A0F] py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Col 1: Bio */}
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg text-slate-900 dark:text-white">
                {profileData.name}
              </span>
              <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400">
                // {profileData.role}
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-sm">
              Focusing on reliable Spring Boot REST APIs, microservices architectures, and distributed systems.
            </p>
            <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>{profileData.location}</span>
            </div>
          </div>

          {/* Col 2: Social Links */}
          <div className="flex md:justify-center items-center gap-4">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500/30 transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500/30 transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profileData.email}`}
              aria-label="Send Email"
              className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500/30 transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Col 3: Copyright & Back to Top */}
          <div className="flex flex-col md:items-end justify-between gap-4">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
            <p className="text-xs text-slate-500 dark:text-slate-500 font-mono">
              &copy; {new Date().getFullYear()} {profileData.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
