import React from 'react';
import { ArrowDown, FileDown, Github, Linkedin, Mail, MapPin, Server, ShieldCheck, Database } from 'lucide-react';
import { profileData } from '../../data/profile';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Decorative Tech Grid / Glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-40 dark:opacity-20">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[250px] bg-sky-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Introductions & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-600 dark:text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Backend Engineering Roles</span>
              <span className="text-slate-400 dark:text-slate-600">|</span>
              <span className="flex items-center gap-1 text-slate-600 dark:text-slate-300">
                <MapPin className="w-3 h-3 text-emerald-500" />
                {profileData.location}
              </span>
            </div>

            {/* Main Title & Role */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-cyan-400">{profileData.name}</span>
              </h1>
              <p className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-700 dark:text-slate-200">
                Java Back-End Developer
              </p>
            </div>

            {/* Professional Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              {profileData.summary}
            </p>

            {/* CTAs & Socials */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              {/* Primary CTA */}
              <a
                href="#featured-project"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-sm hover:shadow-md transition-all group"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              {/* Secondary CTA */}
              <a
                href={profileData.cvUrl}
                download="Magdy_Adel_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900/80 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700/80 rounded-lg shadow-sm hover:border-emerald-500/40 transition-all"
              >
                <FileDown className="w-4 h-4 text-emerald-500" />
                <span>Download CV</span>
              </a>

              {/* GitHub Placeholder */}
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile (Placeholder)"
                title="GitHub Profile"
                className="p-3 text-slate-600 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 bg-white dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700/80 rounded-lg hover:border-emerald-500/40 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>

              {/* LinkedIn Placeholder */}
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile (Placeholder)"
                title="LinkedIn Profile"
                className="p-3 text-slate-600 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 bg-white dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700/80 rounded-lg hover:border-emerald-500/40 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              {/* Mail Contact */}
              <a
                href={`mailto:${profileData.email}`}
                aria-label="Send direct email"
                title={`Email: ${profileData.email}`}
                className="p-3 text-slate-600 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 bg-white dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700/80 rounded-lg hover:border-emerald-500/40 transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* Core Competencies Quick Summary */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Spring Boot & Cloud
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                RESTful APIs & Microservices
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Kafka & Redis
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                PostgreSQL & Docker
              </span>
            </div>
          </div>

          {/* Right Column: Technical System Architecture Card / Code Snippet */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-slate-900 text-slate-200 border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs">
              {/* Terminal Window Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div className="text-[11px] text-slate-400 font-mono">
                  MagdyAdelApplication.java
                </div>
                <div className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  JVM 21
                </div>
              </div>

              {/* Code Snippet */}
              <div className="p-5 space-y-3 leading-relaxed select-text">
                <div className="text-slate-400">
                  <span className="text-purple-400">@SpringBootApplication</span>
                  <br />
                  <span className="text-purple-400">@EnableDiscoveryClient</span>
                </div>
                <div className="text-slate-100">
                  <span className="text-blue-400">public class</span> <span className="text-amber-300">BackendProfileService</span> &#123;
                </div>
                <div className="pl-4 space-y-1.5 text-slate-300">
                  <div>
                    <span className="text-blue-400">private final</span> <span className="text-emerald-400">Developer</span> dev = <span className="text-blue-400">new</span> <span className="text-emerald-400">Developer</span>(
                  </div>
                  <div className="pl-4 text-emerald-300">
                    "{profileData.name}", <span className="text-sky-300">"{profileData.role}"</span>
                  </div>
                  <div>);</div>
                  <div className="pt-2 text-slate-400">
                    <span className="text-purple-400">@EventListener</span>(ApplicationReadyEvent.<span className="text-blue-300">class</span>)
                  </div>
                  <div>
                    <span className="text-blue-400">public void</span> <span className="text-amber-300">initService</span>() &#123;
                  </div>
                  <div className="pl-4 text-slate-400">
                    log.<span className="text-sky-300">info</span>(<span className="text-emerald-300">"Target: Scalable & Reliable Distributed APIs"</span>);
                  </div>
                  <div>&#125;</div>
                </div>
                <div>&#125;</div>
              </div>

              {/* Live Architecture Status Indicators */}
              <div className="p-4 bg-slate-950/60 border-t border-slate-800/80 grid grid-cols-3 gap-2 text-center text-[11px]">
                <div className="p-2 rounded bg-slate-900/80 border border-slate-800 flex flex-col items-center gap-1">
                  <Server className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-slate-300 font-semibold">Microservices</span>
                  <span className="text-[9px] text-emerald-400">Spring Cloud</span>
                </div>
                <div className="p-2 rounded bg-slate-900/80 border border-slate-800 flex flex-col items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                  <span className="text-slate-300 font-semibold">Security</span>
                  <span className="text-[9px] text-sky-400">JWT / Keycloak</span>
                </div>
                <div className="p-2 rounded bg-slate-900/80 border border-slate-800 flex flex-col items-center gap-1">
                  <Database className="w-3.5 h-3.5 text-purple-400" />
                  <span className="text-slate-300 font-semibold">Pipelines</span>
                  <span className="text-[9px] text-purple-400">Kafka & Redis</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
