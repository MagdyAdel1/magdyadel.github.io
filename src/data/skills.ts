import { SkillCategory } from '../types';

export const skillCategories: Record<string, SkillCategory> = {
  backend: {
    title: "Backend Development",
    description: "Core server-side engineering, enterprise frameworks, and microservices ecosystem.",
    skills: [
      "Spring Boot",
      "Spring MVC",
      "Spring Data JPA",
      "Hibernate",
      "Spring Cloud",
      "Eureka",
      "API Gateway",
      "RESTful APIs",
      "Microservices",
      "JUnit",
      "Mockito"
    ]
  },
  languages: {
    title: "Programming Languages",
    description: "Strong foundation in typed object-oriented and systems programming languages.",
    skills: [
      "Java",
      "C#",
      "Python",
      "C++"
    ]
  },
  databases: {
    title: "Databases",
    description: "Relational database modeling, query design, and document stores.",
    skills: [
      "PostgreSQL",
      "MySQL",
      "Oracle",
      "MongoDB"
    ]
  },
  security: {
    title: "Security & Identity",
    description: "Authentication protocols, authorization frameworks, and identity providers.",
    skills: [
      "Spring Security",
      "JWT",
      "OAuth2",
      "Keycloak"
    ]
  },
  devops: {
    title: "DevOps & Infrastructure",
    description: "Containerization, event brokers, distributed caching, and CI/CD pipelines.",
    skills: [
      "Linux",
      "Docker",
      "Docker Compose",
      "Git",
      "GitHub Actions",
      "Docker Hub",
      "Redis",
      "Kafka",
      "ELK Stack",
      "Maven"
    ]
  },
  architecture: {
    title: "Architecture & Design",
    description: "Software engineering principles, patterns, and clean structural practices.",
    skills: [
      "OOP",
      "SOLID",
      "Design Patterns",
      "Layered Architecture",
      "Exception Handling",
      "Generics",
      "Collections",
      "Data Structures & Algorithms"
    ]
  },
  tools: {
    title: "Tools & Environment",
    description: "Daily development tooling, API verification, and version control.",
    skills: [
      "Postman",
      "IntelliJ IDEA",
      "GitHub"
    ]
  }
};
