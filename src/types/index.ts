export interface Profile {
  name: string;
  role: string;
  location: string;
  summary: string;
  positioning: string;
  email: string;
  github: string;
  linkedin: string;
  cvUrl: string;
  languages: {
    language: string;
    level: string;
  }[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export interface FeaturedProject {
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  keyConcepts: string[];
  architectureComponents: {
    name: string;
    description: string;
    tech: string;
  }[];
  githubUrl: string;
  demoUrl?: string | null;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: 'Microservices & Distributed' | 'Backend & APIs' | 'Systems & Algorithms' | 'Machine Learning & CV' | 'Security & Cryptography';
  githubUrl: string;
  demoUrl?: string | null;
  badge?: string;
  algorithms?: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  responsibilities: string[];
  badge?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  grade?: string;
  details: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
}
