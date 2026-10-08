import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { profileData } from '../../data/profile';
import { GraduationCap, MapPin, Languages, CheckCircle2, Layers } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="01. About Me"
          title="Background & Engineering Focus"
          description="A dedicated backend developer balancing rigorous academic research with hands-on enterprise software engineering."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
            <p>
              I am a <strong className="text-slate-900 dark:text-white font-semibold">Back-End Developer</strong> and <strong className="text-slate-900 dark:text-white font-semibold">Pre-Master’s student in Computer Science</strong> based in {profileData.location}. My work is centered around the Java and Spring Boot ecosystem, with an emphasis on building dependable backend services, clean REST APIs, and event-driven microservices architectures.
            </p>

            <p>
              My technical journey is grounded in solid computer science fundamentals from my BSc at Ain Shams University (graduated with a <span className="font-semibold text-emerald-600 dark:text-emerald-400">Very Good</span> grade). I am currently furthering my theoretical and system design depth through my Pre-Master’s degree in Computer Science.
            </p>

            <p>
              I take pride in writing structured, testable, and maintainable software that adheres to OOP and SOLID principles. Beyond application code, I actively incorporate containerization with Docker, asynchronous messaging with Kafka, caching with Redis, centralized logging with the ELK Stack, and automated CI/CD pipelines into my engineering workflow.
            </p>

            {/* Core Values / Engineering Mindset */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 font-normal text-sm">
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Clean, layered architecture and strong separation of concerns</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Thorough testing coverage with JUnit and Mockito</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Stateless security with JWT and Keycloak OAuth2</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Continuous technical learning & graduate CS research</span>
              </div>
            </div>
          </div>

          {/* Quick Info & Stats Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Academic Snapshot Card */}
            <div className="p-6 rounded-xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-3 text-slate-900 dark:text-white font-semibold text-base mb-4">
                <GraduationCap className="w-5 h-5 text-emerald-500" />
                <span>Academic Credentials</span>
              </div>
              <div className="space-y-4 text-sm">
                <div>
                  <div className="flex justify-between items-baseline">
                    <span className="font-medium text-slate-800 dark:text-slate-200">Pre-Master's in Computer Science</span>
                    <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-medium">2025 – Present</span>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">Ain Shams University</p>
                </div>
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80">
                  <div className="flex justify-between items-baseline">
                    <span className="font-medium text-slate-800 dark:text-slate-200">BSc in Computer Science</span>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">2018 – 2022</span>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">Ain Shams University &bull; Grade: <span className="font-semibold text-emerald-600 dark:text-emerald-400">Very Good</span></p>
                </div>
              </div>
            </div>

            {/* Location & Languages Card */}
            <div className="p-6 rounded-xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div>
                <div className="flex items-center gap-2 text-slate-900 dark:text-white font-semibold text-base mb-2">
                  <MapPin className="w-4 h-4 text-emerald-500" />
                  <span>Location</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {profileData.location} (Open to remote and on-site opportunities)
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white font-semibold text-base mb-3">
                  <Languages className="w-4 h-4 text-emerald-500" />
                  <span>Languages</span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {profileData.languages.map((lang) => (
                    <div key={lang.language} className="p-2.5 rounded bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60">
                      <span className="block font-medium text-slate-800 dark:text-slate-200 text-xs">{lang.language}</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white font-semibold text-base mb-2">
                  <Layers className="w-4 h-4 text-emerald-500" />
                  <span>Primary Focus</span>
                </div>
                <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400">
                  Java &bull; Spring Boot &bull; Microservices &bull; Distributed Systems
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
