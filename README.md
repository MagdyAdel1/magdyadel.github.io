# Magdy Adel — Developer Portfolio

A modern, responsive, and performance-optimized personal developer portfolio showcasing production-ready backend systems, microservices architectures, and technical background. Built for **Magdy Adel** — Java Back-End Developer & Pre-Master’s student in Computer Science based in Cairo, Egypt.

---

## 🌟 Overview

This portfolio communicates practical experience in designing and building reliable backend services, RESTful APIs, distributed microservices, event streaming, and secure authentication systems.

The codebase adheres strictly to clean code standards, separation of concerns, and reusable component-driven architecture. All portfolio content is decoupled into strongly-typed data structures, allowing seamless updates without touching core UI components.

---

## 🚀 Key Features

- **Primary Featured Project Architecture Deep-Dive (`TripTrekker`)**:
  - Detailed architectural breakdown of an event-driven travel booking platform (Flights & Hotels).
  - Microservices component analysis (Spring Cloud Gateway, Eureka, Keycloak OAuth2/OIDC, isolated domain microservices, PostgreSQL per service).
  - High-throughput asynchronous event-driven pipelines (Apache Kafka) & distributed caching (Redis).
  - Centralized log aggregation with the ELK Stack.
  - Interactive System Topology diagram and Problem/Solution engineering analysis.
- **Categorized Project Showcase**:
  - Dynamic filtering across *Microservices & Distributed*, *Backend & APIs*, *Systems & Algorithms*, *Machine Learning & CV*, and *Security & Cryptography*.
  - Clean project cards highlighting tech stack badges, search algorithms, and verified credentials.
- **Strict, Non-Fabricated Technical Profile**:
  - Categorized skill taxonomy across 7 distinct domains (Backend, Programming Languages, Databases, Security, DevOps, Architecture & Design, Tools).
  - No misleading percentage bars or fabricated metrics.
- **Dark & Light Mode**:
  - Developer-first midnight dark mode default with seamless system preference fallback and local storage persistence.
- **User Experience & Accessibility**:
  - Interactive copy-to-clipboard email button with animated toast confirmation.
  - One-click CV download button referencing the bundled PDF (`public/Magdy_Adel_CV.pdf`).
  - Active section spy and smooth scrolling navigation.
  - Fully responsive drawer navigation on mobile and tablet devices.
- **SEO & Social Metadata**:
  - Meta descriptions, Open Graph protocol tags, Twitter cards, and semantic HTML5 hierarchy.

---

## 🛠️ Tech Stack

### Core Frontend Stack
- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

### Featured Engineering Skills Represented
- **Backend**: Java, Spring Boot, Spring MVC, Spring Security, Spring Data JPA, Hibernate, Spring Cloud, Eureka, API Gateway, RESTful APIs, Microservices, JWT, OAuth2, JUnit, Mockito
- **Programming Languages**: Java, C#, Python, C++
- **Databases**: PostgreSQL, MySQL, Oracle, MongoDB
- **Security & Identity**: Spring Security, JWT, OAuth2, Keycloak
- **DevOps & Infrastructure**: Linux, Docker, Docker Compose, Git, GitHub Actions, Docker Hub, Redis, Kafka, ELK Stack, Maven
- **Architecture & Design**: OOP, SOLID, Design Patterns, Layered Architecture, Exception Handling, Generics, Collections, Data Structures & Algorithms
- **Tools**: Postman, IntelliJ IDEA, GitHub

---

## 📂 Project Structure

```text
├── public/
│   └── Magdy_Adel_CV.pdf       # Downloadable CV asset
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Badge.tsx           # Reusable badge component
│   │   │   ├── Footer.tsx          # Responsive footer with social links
│   │   │   ├── Navbar.tsx          # Sticky navigation with mobile drawer & scroll spy
│   │   │   ├── SectionHeading.tsx  # Monospace technical section header
│   │   │   ├── ThemeToggle.tsx     # Light/Dark mode switcher
│   │   │   └── Toast.tsx           # Clipboard feedback toast
│   │   └── sections/
│   │       ├── About.tsx           # Academic & engineering background
│   │       ├── Contact.tsx         # Direct contact, email copy, and message client
│   │       ├── Education.tsx       # Ain Shams degrees & verified certifications
│   │       ├── Experience.tsx      # PioneersDX & Valeo Testing Academy
│   │       ├── FeaturedProject.tsx # TripTrekker deep-dive & architecture topology
│   │       ├── Hero.tsx            # Terminal preview, CTAs, and quick competencies
│   │       ├── OtherProjects.tsx   # Categorized cards & algorithm list
│   │       └── Skills.tsx          # 7-category filtered skill badges
│   ├── context/
│   │   └── ThemeContext.tsx    # Theme provider & persistence hook
│   ├── data/
│   │   ├── certifications.ts   # Exact certifications & issuers
│   │   ├── education.ts        # Degree programs & grades
│   │   ├── experience.ts       # Professional roles & responsibilities
│   │   ├── profile.ts          # Core profile metadata, email, and social links
│   │   ├── projects.ts         # TripTrekker spec & other project details
│   │   └── skills.ts           # Categorized technologies
│   ├── types/
│   │   └── index.ts            # TypeScript domain interfaces
│   ├── App.tsx                 # Root layout composition
│   ├── index.css               # Tailwind directives & smooth-scroll styling
│   └── main.tsx                # Application mounting point
├── index.html                  # HTML5 template with SEO & Open Graph meta tags
├── package.json                # Project dependencies and npm scripts
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Tailwind CSS theme extensions
├── tsconfig.json               # TypeScript compiler configuration
├── tsconfig.node.json          # Vite node TypeScript configuration
└── vite.config.ts              # Vite configuration
```

---

## 💻 Running Locally

### Prerequisites
- Node.js (version `>= 18.0.0` or `>= 20.0.0`)
- npm (version `>= 9.0.0`)

### Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/magdy-adel-portfolio.git
   cd magdy-adel-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:3000` (or the port specified in terminal output).

---

## 🔨 Production Build

To build the project for production:

```bash
npm run build
```

This command runs `tsc -b` (TypeScript type check) followed by `vite build`. The production bundle will be generated in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

---

## 🌐 Deployment Instructions

### Deploy to GitHub Pages
1. In `vite.config.ts`, add the `base` property matching your repository name:
   ```ts
   export default defineConfig({
     base: '/repository-name/', // e.g., '/magdy-adel-portfolio/'
     plugins: [react()],
   });
   ```
2. Build the project:
   ```bash
   npm run build
   ```
3. Push the `dist` directory or configure a GitHub Actions workflow to publish the `dist` folder to the `gh-pages` branch.

### Deploy to Vercel
1. Install the Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project root and follow the prompts.
3. Build command: `npm run build`
4. Output directory: `dist`

### Deploy to Netlify
1. Connect the GitHub repository in the Netlify dashboard.
2. Build command: `npm run build`
3. Publish directory: `dist`

---

## ✏️ Customization Checklist

To personalize the portfolio before publishing, review and update the following configuration files:

1. **Profile Data** (`src/data/profile.ts`):
   - Replace `github: "https://github.com/your-username"` with your actual GitHub username.
   - Replace `linkedin: "https://linkedin.com/in/your-profile"` with your actual LinkedIn profile handle.
2. **Project Repositories** (`src/data/projects.ts`):
   - Update `githubUrl` fields for `TripTrekker`, `BudgetBlitz`, `School Management System`, `MO Chess`, `Maze Runner`, `SecurityPackage`, and `3D Reconstruction for Human Body`.
3. **Curriculum Vitae (PDF)** (`public/Magdy_Adel_CV.pdf`):
   - Replace `public/Magdy_Adel_CV.pdf` with updated versions of your resume when needed. The file is linked directly to the "Download CV" button.
4. **Domain & SEO URL** (`index.html`):
   - Update `og:url` with your production deployment URL.

---

## 📬 Contact & Inquiries

- **Name**: Magdy Adel
- **Location**: Cairo, Egypt
- **Email**: [magdy.adel25.ma@gmail.com](mailto:magdy.adel25.ma@gmail.com)
- **Role**: Java Back-End Developer / Pre-Master's Student in Computer Science
