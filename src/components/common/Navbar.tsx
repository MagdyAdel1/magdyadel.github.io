import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, Terminal } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { profileData } from '../../data/profile';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Featured', href: '#featured-project' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['about', 'skills', 'featured-project', 'projects', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-[#070A0F]/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-sm shadow-black/5'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Brand */}
          <a
            href="#"
            className="flex items-center gap-2.5 font-bold text-lg sm:text-xl tracking-tight text-slate-900 dark:text-white group"
          >
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 group-hover:scale-105 transition-transform">
              <Terminal className="w-5 h-5 text-emerald-500" />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
              <span className="font-semibold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                {profileData.name}
              </span>
              <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-normal">
                backend.java
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Actions: Theme Toggle & CV Download Button */}
          <div className="hidden sm:flex items-center gap-3">
            <ThemeToggle />
            <a
              href={profileData.cvUrl}
              download="Magdy_Adel_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-medium font-mono text-white bg-emerald-600 hover:bg-emerald-500 dark:bg-emerald-600 dark:hover:bg-emerald-500 rounded-lg shadow-sm hover:shadow transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            >
              <FileDown className="w-4 h-4" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#070A0F]/95 backdrop-blur-lg px-4 pt-2 pb-6 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-emerald-500 dark:hover:text-emerald-400"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
            <a
              href={profileData.cvUrl}
              download="Magdy_Adel_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-mono font-medium text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow"
            >
              <FileDown className="w-4 h-4" />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
