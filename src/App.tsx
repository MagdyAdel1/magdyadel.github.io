import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/common/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { FeaturedProjectSection } from './components/sections/FeaturedProject';
import { OtherProjects } from './components/sections/OtherProjects';
import { Experience } from './components/sections/Experience';
import { EducationAndCertifications } from './components/sections/Education';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/common/Footer';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-[#070A0F] dark:text-slate-100 transition-colors duration-200">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <About />
          <Skills />
          <FeaturedProjectSection />
          <OtherProjects />
          <Experience />
          <EducationAndCertifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
