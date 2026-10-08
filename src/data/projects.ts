import { FeaturedProject, Project } from '../types';

export const featuredProject: FeaturedProject = {
  title: "TripTrekker",
  subtitle: "Microservices Travel Booking System (Flights & Hotels)",
  description: "A distributed, microservices-based travel booking system designed to manage concurrent flight and hotel reservations with high resilience, asynchronous event processing, secure token-based authentication, and centralized monitoring.",
  problem: "Traditional monolithic booking applications suffer from tight coupling, single points of failure during booking spikes, and difficulties in scaling inventory services independently while maintaining eventual consistency across payment and reservation workflows.",
  solution: "Architected a decoupled microservices ecosystem utilizing Spring Cloud for dynamic service discovery and gateway routing, Apache Kafka for event-driven asynchronous reservation notifications, Redis for high-speed caching and rate-limiting, Keycloak for unified identity management, and ELK Stack for centralized observability.",
  technologies: [
    "Java",
    "Spring Boot",
    "Spring Cloud",
    "Spring Testing",
    "Kafka",
    "Redis",
    "Keycloak",
    "PostgreSQL",
    "Docker",
    "GitHub Actions",
    "ELK Stack"
  ],
  keyConcepts: [
    "Event-Driven Architecture (Kafka)",
    "API Gateway & Service Discovery (Eureka)",
    "Distributed Caching & Invalidation (Redis)",
    "OAuth2 / OpenID Connect (Keycloak)",
    "Database-per-Service (PostgreSQL)",
    "Centralized Log Aggregation (ELK Stack)",
    "Containerized Deployment (Docker & Compose)",
    "Automated CI/CD Workflows (GitHub Actions)"
  ],
  architectureComponents: [
    {
      name: "API Gateway & Routing",
      tech: "Spring Cloud Gateway & Eureka",
      description: "Single entry point for client traffic providing reverse proxying, dynamic route resolution, load balancing, and rate limiting."
    },
    {
      name: "Authentication & Authorization",
      tech: "Keycloak & Spring Security",
      description: "Centralized IAM server issuing verified JWT tokens, enforcing fine-grained role-based access control across all downstream services."
    },
    {
      name: "Flight & Hotel Services",
      tech: "Spring Boot & Spring Data JPA",
      description: "Independent domain microservices encapsulating catalog queries, availability checks, and booking transactional lifecycles."
    },
    {
      name: "Event Broker & Asynchronous Messaging",
      tech: "Apache Kafka",
      description: "Decouples booking creation from downstream processing (notifications, invoicing, inventory sync) to prevent latency bottlenecks."
    },
    {
      name: "Distributed Caching",
      tech: "Redis",
      description: "Caches high-frequency search results and flight/hotel schedules to significantly reduce relational database load."
    },
    {
      name: "Persistence Layer",
      tech: "PostgreSQL (Isolated DBs)",
      description: "Adheres to Database-per-Service pattern ensuring loose coupling and domain boundary integrity."
    },
    {
      name: "Observability & Monitoring",
      tech: "ELK Stack (Elasticsearch, Logstash, Kibana)",
      description: "Ingests structured logs across all microservice containers for rapid tracing and distributed debugging."
    }
  ],
  githubUrl: "https://github.com/MagdyAdel1/triptrekker", // Placeholder: replace with repository URL
  demoUrl: null // No live demo currently hosted; local Docker Compose setup provided
};

export const otherProjects: Project[] = [
  {
    id: "budget-blitz",
    title: "BudgetBlitz",
    description: "Microservices-style expense tracking system handling user budgets and categories with manual authentication and ELK-based logging.",
    category: "Microservices & Distributed",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Spring Testing",
      "Kafka",
      "Redis",
      "PostgreSQL",
      "Docker",
      "GitHub Actions",
      "ELK Stack"
    ],
    githubUrl: "https://github.com/MagdyAdel1/budget-blitz", // Placeholder
    demoUrl: null
  },
  {
    id: "school-management",
    title: "School Management System",
    description: "Backend RESTful API for managing students, teachers, and courses with CRUD operations, authentication, and CI/CD integration.",
    category: "Backend & APIs",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Spring Testing",
      "MySQL",
      "Docker",
      "GitHub Actions",
      "ELK Stack"
    ],
    githubUrl: "https://github.com/MagdyAdel1/school-management-system", // Placeholder
    demoUrl: null
  },
  {
    id: "3d-reconstruction",
    title: "3D Reconstruction for Human Body",
    badge: "Graduation Project — Grade: Excellent",
    description: "Deep-learning project that reconstructs 3D human body shapes from a single RGB image. Completed as university graduation project with an Excellent grade.",
    category: "Machine Learning & CV",
    technologies: [
      "Python",
      "PyTorch",
      "OpenCV",
      "NumPy"
    ],
    githubUrl: "https://github.com/MagdyAdel1/3d-human-body-reconstruction", // Placeholder
    demoUrl: null
  },
  {
    id: "mo-chess",
    title: "MO Chess",
    description: "Console-based chess game for two players demonstrating object-oriented programming principles, custom board state evaluation, and design patterns.",
    category: "Systems & Algorithms",
    technologies: [
      "Java",
      "OOP",
      "Design Patterns",
      "Exception Handling",
      "Regex API",
      "Collections",
      "Generics"
    ],
    githubUrl: "https://github.com/MagdyAdel1/mo-chess", // Placeholder
    demoUrl: null
  },
  {
    id: "maze-runner",
    title: "Maze Runner",
    description: "Maze-solving application implementing multiple AI/search algorithms with comparative pathfinding performance analysis.",
    category: "Systems & Algorithms",
    algorithms: [
      "Breadth-First Search (BFS)",
      "Depth-First Search (DFS)",
      "A* Search",
      "Dijkstra's Algorithm",
      "Best-First Search"
    ],
    technologies: [
      "C++"
    ],
    githubUrl: "https://github.com/MagdyAdel1/maze-runner", // Placeholder
    demoUrl: null
  },
  {
    id: "security-package",
    title: "SecurityPackage",
    description: "C# project implementing cryptographic encryption algorithms such as AES and DES from scratch to demonstrate practical cryptography and byte-level operations.",
    category: "Security & Cryptography",
    technologies: [
      "C#"
    ],
    githubUrl: "https://github.com/MagdyAdel1/security-package", // Placeholder
    demoUrl: null
  }
];
