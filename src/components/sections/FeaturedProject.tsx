import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Badge } from '../common/Badge';
import { featuredProject } from '../../data/projects';
import { 
  Github, 
  Layers, 
  Server, 
  Network, 
  CheckCircle2, 
  AlertCircle,
  Cpu,
  Info
} from 'lucide-react';

export const FeaturedProjectSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'problem-solution' | 'topology'>('architecture');

  return (
    <section id="featured-project" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-100/40 dark:bg-slate-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="03. Primary Featured Project"
          title={featuredProject.title}
          description={featuredProject.subtitle}
        />

        {/* Featured Project Card Wrapper */}
        <div className="rounded-3xl bg-white dark:bg-[#0D121F] border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
          
          {/* Header Banner */}
          <div className="p-6 sm:p-8 lg:p-10 border-b border-slate-200 dark:border-slate-800/80 bg-gradient-to-r from-emerald-500/5 via-sky-500/5 to-transparent">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-3 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-600 dark:text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Primary Backend Architecture Project</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                  {featuredProject.title} — {featuredProject.subtitle}
                </h3>
                <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {featuredProject.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap lg:flex-col items-stretch gap-3 shrink-0">
                <a
                  href={featuredProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-sm transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>View on GitHub</span>
                </a>
                <div className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 cursor-default">
                  <Info className="w-3.5 h-3.5 text-slate-400" />
                  <span>Local Docker Compose / No Live URL</span>
                </div>
              </div>
            </div>

            {/* Technologies Badges */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 dark:border-slate-800/80">
              <span className="block font-mono text-xs text-slate-400 uppercase tracking-wider mb-3">
                Core Tech Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {featuredProject.technologies.map((tech) => (
                  <Badge key={tech} variant="brand" size="md">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Nav Tabs for Deep-Dive */}
          <div className="flex border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#090D17] px-6 sm:px-8">
            <button
              type="button"
              onClick={() => setActiveTab('architecture')}
              className={`py-3.5 px-4 text-xs sm:text-sm font-mono font-medium border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === 'architecture'
                  ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400'
                  : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Microservices Breakdown</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('topology')}
              className={`py-3.5 px-4 text-xs sm:text-sm font-mono font-medium border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === 'topology'
                  ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400'
                  : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Network className="w-4 h-4" />
              <span>System Topology Diagram</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('problem-solution')}
              className={`py-3.5 px-4 text-xs sm:text-sm font-mono font-medium border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === 'problem-solution'
                  ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400'
                  : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>Problem & Engineering Solution</span>
            </button>
          </div>

          {/* Tab Content 1: Microservices Components */}
          {activeTab === 'architecture' && (
            <div className="p-6 sm:p-8 lg:p-10 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {featuredProject.architectureComponents.map((comp) => (
                  <div
                    key={comp.name}
                    className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 hover:border-emerald-500/30 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-sm text-slate-900 dark:text-white">
                          {comp.name}
                        </span>
                        <Server className="w-4 h-4 text-emerald-500 shrink-0" />
                      </div>
                      <span className="inline-block px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-medium mb-3">
                        {comp.tech}
                      </span>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {comp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Key Concepts Grid */}
              <div className="p-6 rounded-2xl bg-slate-950 text-slate-200 border border-slate-800">
                <h4 className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-semibold mb-4">
                  Backend Architecture & Design Principles Applied
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                  {featuredProject.keyConcepts.map((concept) => (
                    <div key={concept} className="flex items-center gap-2 p-2.5 rounded bg-slate-900/80 border border-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="text-slate-300 font-medium">{concept}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab Content 2: Topology Visualizer */}
          {activeTab === 'topology' && (
            <div className="p-6 sm:p-8 lg:p-10 space-y-6">
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs overflow-x-auto">
                <div className="min-w-[680px] space-y-6">
                  
                  {/* Layer 1: Client & Ingress */}
                  <div className="flex items-center justify-center">
                    <div className="px-6 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-center">
                      <span className="text-slate-400 block text-[10px]">CLIENTS</span>
                      <span className="text-white font-bold">Web / Mobile / REST Consumers</span>
                    </div>
                  </div>

                  <div className="flex justify-center text-emerald-400 text-sm">
                    &darr; HTTPS (JSON REST)
                  </div>

                  {/* Layer 2: Gateway & Auth */}
                  <div className="grid grid-cols-2 gap-4 max-w-xl mx-auto">
                    <div className="p-3.5 rounded-lg bg-emerald-950/40 border border-emerald-500/40 text-center">
                      <span className="text-emerald-400 font-semibold block">Spring Cloud Gateway</span>
                      <span className="text-[11px] text-slate-400">Reverse Proxy & Dynamic Routing</span>
                    </div>
                    <div className="p-3.5 rounded-lg bg-sky-950/40 border border-sky-500/40 text-center">
                      <span className="text-sky-400 font-semibold block">Keycloak IAM</span>
                      <span className="text-[11px] text-slate-400">OAuth2 / OpenID Connect (JWT)</span>
                    </div>
                  </div>

                  <div className="flex justify-center text-slate-400 text-sm">
                    &darr; Service Discovery via Eureka
                  </div>

                  {/* Layer 3: Domain Microservices */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="p-4 rounded-lg bg-slate-900 border border-slate-700 text-center">
                      <span className="text-emerald-400 font-bold block">Flight Service</span>
                      <span className="text-[11px] text-slate-400 block">Spring Boot &bull; JPA</span>
                      <span className="text-[10px] text-indigo-400 mt-1 block">PostgreSQL (Flights)</span>
                    </div>

                    <div className="p-4 rounded-lg bg-slate-900 border border-slate-700 text-center">
                      <span className="text-emerald-400 font-bold block">Hotel Service</span>
                      <span className="text-[11px] text-slate-400 block">Spring Boot &bull; JPA</span>
                      <span className="text-[10px] text-indigo-400 mt-1 block">PostgreSQL (Hotels)</span>
                    </div>

                    <div className="p-4 rounded-lg bg-slate-900 border border-slate-700 text-center">
                      <span className="text-emerald-400 font-bold block">Booking & Order Service</span>
                      <span className="text-[11px] text-slate-400 block">Spring Boot &bull; JPA</span>
                      <span className="text-[10px] text-indigo-400 mt-1 block">PostgreSQL (Bookings)</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center px-12 text-purple-400 text-xs">
                    <span>&darr; High-Speed Cache</span>
                    <span>&harr; Async Event Pipeline &harr;</span>
                    <span>&darr; Log Streaming</span>
                  </div>

                  {/* Layer 4: Infrastructure & Observability */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="p-3.5 rounded-lg bg-rose-950/30 border border-rose-500/30 text-center">
                      <span className="text-rose-400 font-bold block">Redis Cache</span>
                      <span className="text-[10px] text-slate-400">Inventory caching & Rate limits</span>
                    </div>

                    <div className="p-3.5 rounded-lg bg-purple-950/30 border border-purple-500/30 text-center">
                      <span className="text-purple-400 font-bold block">Apache Kafka</span>
                      <span className="text-[10px] text-slate-400">Booking Events & Notification Topics</span>
                    </div>

                    <div className="p-3.5 rounded-lg bg-amber-950/30 border border-amber-500/30 text-center">
                      <span className="text-amber-400 font-bold block">ELK Stack</span>
                      <span className="text-[10px] text-slate-400">Elasticsearch, Logstash, Kibana</span>
                    </div>
                  </div>

                </div>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono text-center">
                All microservices and backing services are containerized via Docker and orchestrated with Docker Compose.
              </p>
            </div>
          )}

          {/* Tab Content 3: Problem & Solution */}
          {activeTab === 'problem-solution' && (
            <div className="p-6 sm:p-8 lg:p-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Problem */}
                <div className="p-6 rounded-2xl bg-rose-500/5 border border-rose-500/20 space-y-3">
                  <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-semibold text-base">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>The Architectural Problem</span>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {featuredProject.problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold text-base">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <span>The Engineering Solution</span>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {featuredProject.solution}
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
