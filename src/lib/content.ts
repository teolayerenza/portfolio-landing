export type Locale = "es" | "en";

export interface ProjectStatus {
  label: string;
}

export interface ProjectItem {
  slug: string;
  name: string;
  category: string;
  year: string;
  description: string;
  stack: string[];
  repoLabel: string;
  repoUrl?: string;
  demoLabel: string;
  demoUrl?: string;
  caseStudyLabel: string;
}

export interface ExperienceItem {
  title: string;
  org: string;
  period: string;
  bullets: string[];
  stack: string[];
}

export interface SkillGroup {
  name: string;
  items: string[];
}

export interface SiteContent {
  nav: { projects: string; skills: string; contact: string; getInTouch: string };
  hero: {
    greeting: string;
    name: string;
    role: string;
    tagline: string;
    ctaResume: string;
    ctaHire: string;
    hint: string;
  };
  quickFacts: {
    location: { label: string; value: string };
    remote: { label: string; value: string };
    freelance: { label: string; value: string };
  };
  about: {
    label: string;
    heading: string;
    body: string;
    videoLabel: string;
  };
  experience: {
    label: string;
    heading: string;
    items: ExperienceItem[];
  };
  projects: {
    label: string;
    heading: string;
    subheading: string;
    items: ProjectItem[];
  };
  skills: {
    label: string;
    heading: string;
    groups: SkillGroup[];
  };
  contact: {
    label: string;
    heading: string;
    body: string;
    emailCta: string;
  };
  footer: { rights: string };
}

export const content: Record<Locale, SiteContent> = {
  es: {
    nav: {
      projects: "Proyectos",
      skills: "Skills",
      contact: "Contacto",
      getInTouch: "Contactame",
    },
    hero: {
      greeting: "Hola, soy",
      name: "Teo Layer",
      role: "Systems Engineering Student & Full-Stack Developer",
      tagline:
        "Construyo software funcional, escalable y bien estructurado. De la arquitectura al último detalle de la interfaz.",
      ctaResume: "Descargar CV",
      ctaHire: "Contactame",
      hint: "pasá el mouse por el stack",
    },
    quickFacts: {
      location: { label: "Ubicación", value: "Argentina · trabajo remoto" },
      remote: { label: "Disponibilidad", value: "Full-time remoto" },
      freelance: { label: "Freelance", value: "Disponible" },
    },
    about: {
      label: "Sobre mí",
      heading: "Ingeniería, diseño de sistemas y código que se sostiene solo.",
      body: "Estudiante avanzado de Ingeniería en Sistemas, con más de un año de experiencia construyendo proyectos propios de punta a punta. Diseño arquitecturas claras — UML, patrones como MVC, Repository, Observer y Singleton — y las llevo a código real, con foco en performance, tipado estricto y una experiencia de usuario cuidada.",
      videoLabel: "Presentación en video",
    },
    experience: {
      label: "Experiencia",
      heading: "Cómo llegué hasta acá.",
      items: [
        {
          title: "Full-Stack Developer — Proyecto independiente",
          org: "Dentaly Care Hub",
          period: "2025 — presente",
          bullets: [
            "Diseñé y construí un sistema de gestión odontológica completo, de punta a punta, sin equipo.",
            "Arquitectura por capas: Context API con 6 providers de dominio, service layer dedicado y Axios con interceptores JWT.",
            "Formularios type-safe con React Hook Form + Zod, y dashboards de KPIs en tiempo real con Recharts.",
          ],
          stack: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "Radix UI"],
        },
        {
          title: "Ingeniería en Sistemas",
          org: "Formación académica",
          period: "En curso",
          bullets: [
            "Análisis de Sistemas: diagramas UML (casos de uso, clases, secuencia) a partir de requisitos funcionales y no funcionales.",
            "Diseño de Sistemas: patrones MVC, Repository, Observer y Singleton aplicados a soluciones robustas.",
            "Bases de datos relacionales: modelado entidad-relación, SQL, normalización.",
          ],
          stack: ["Python", "C", "SQL", "UML"],
        },
      ],
    },
    projects: {
      label: "Proyectos",
      heading: "Trabajo que habla por sí solo.",
      subheading: "Calidad por sobre cantidad — cada proyecto acá tiene su historia completa.",
      items: [
        {
          slug: "dentaly",
          name: "Dentaly Care Hub",
          category: "Web Platform",
          year: "2025",
          description:
            "Sistema integral de gestión para consultorios odontológicos: pacientes, turnos, finanzas, inventario y un odontograma interactivo.",
          stack: ["React 18", "TypeScript", "Vite", "Context API", "Axios + JWT", "Tailwind", "Recharts"],
          repoLabel: "Ver repositorio",
          demoLabel: "Ver demo",
          caseStudyLabel: "Ver caso completo",
        },
      ],
    },
    skills: {
      label: "Skills",
      heading: "Stack y forma de trabajar.",
      groups: [
        { name: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Radix UI / shadcn"] },
        { name: "Backend & Data", items: ["Node.js", "Python", "SQL", "C"] },
        { name: "Mobile", items: ["Swift", "Kotlin"] },
        { name: "Metodologías", items: ["MVC", "Repository", "Observer", "Singleton", "UML"] },
      ],
    },
    contact: {
      label: "Contacto",
      heading: "Hablemos de tu próximo proyecto.",
      body: "Disponible para roles remotos full-time y trabajos freelance. Un email o un mensaje alcanza.",
      emailCta: "Escribime un email",
    },
    footer: { rights: "Todos los derechos reservados." },
  },
  en: {
    nav: {
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      getInTouch: "Get in touch",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Teo Layer",
      role: "Systems Engineering Student & Full-Stack Developer",
      tagline:
        "I build functional, scalable, well-structured software — from the architecture down to the last interface detail.",
      ctaResume: "Download Resume",
      ctaHire: "Get in touch",
      hint: "hover the stack",
    },
    quickFacts: {
      location: { label: "Location", value: "Argentina · working remotely" },
      remote: { label: "Availability", value: "Full-time remote" },
      freelance: { label: "Freelance", value: "Available" },
    },
    about: {
      label: "About me",
      heading: "Engineering, systems design, and code that holds up on its own.",
      body: "Advanced Systems Engineering student with over a year of experience building independent projects end to end. I design clear architectures — UML, patterns like MVC, Repository, Observer and Singleton — and turn them into real code, with a focus on performance, strict typing, and a carefully crafted user experience.",
      videoLabel: "Video introduction",
    },
    experience: {
      label: "Experience",
      heading: "How I got here.",
      items: [
        {
          title: "Full-Stack Developer — Independent project",
          org: "Dentaly Care Hub",
          period: "2025 — present",
          bullets: [
            "Designed and built a full dental practice management system end-to-end, solo.",
            "Layered architecture: Context API with 6 domain providers, a dedicated service layer, and Axios with JWT interceptors.",
            "Type-safe forms with React Hook Form + Zod, and real-time KPI dashboards with Recharts.",
          ],
          stack: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "Radix UI"],
        },
        {
          title: "Systems Engineering",
          org: "Academic background",
          period: "In progress",
          bullets: [
            "Systems Analysis: UML diagrams (use cases, class, sequence) derived from functional and non-functional requirements.",
            "Systems Design: MVC, Repository, Observer and Singleton patterns applied to robust solutions.",
            "Relational databases: entity-relationship modeling, SQL, normalization.",
          ],
          stack: ["Python", "C", "SQL", "UML"],
        },
      ],
    },
    projects: {
      label: "Projects",
      heading: "Work that speaks for itself.",
      subheading: "Quality over quantity — every project here has its full story.",
      items: [
        {
          slug: "dentaly",
          name: "Dentaly Care Hub",
          category: "Web Platform",
          year: "2025",
          description:
            "A full management system for dental practices: patients, appointments, finances, inventory, and an interactive odontogram.",
          stack: ["React 18", "TypeScript", "Vite", "Context API", "Axios + JWT", "Tailwind", "Recharts"],
          repoLabel: "View repository",
          demoLabel: "View demo",
          caseStudyLabel: "View full case study",
        },
      ],
    },
    skills: {
      label: "Skills",
      heading: "Stack and way of working.",
      groups: [
        { name: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Radix UI / shadcn"] },
        { name: "Backend & Data", items: ["Node.js", "Python", "SQL", "C"] },
        { name: "Mobile", items: ["Swift", "Kotlin"] },
        { name: "Methodologies", items: ["MVC", "Repository", "Observer", "Singleton", "UML"] },
      ],
    },
    contact: {
      label: "Contact",
      heading: "Let's talk about your next project.",
      body: "Available for full-time remote roles and freelance work. An email or a message is all it takes.",
      emailCta: "Send me an email",
    },
    footer: { rights: "All rights reserved." },
  },
};

export interface CaseStudy {
  backLabel: string;
  challengeLabel: string;
  challenge: string;
  usersLabel: string;
  users: string;
  architectureLabel: string;
  architecture: string;
  decisionsLabel: string;
  decisions: string[];
  linksLabel: string;
}

export const caseStudies: Record<string, Record<Locale, CaseStudy>> = {
  dentaly: {
    es: {
      backLabel: "← Volver a proyectos",
      challengeLabel: "El desafío",
      challenge:
        "Los consultorios odontológicos chicos suelen manejar turnos, pacientes, finanzas e inventario en planillas sueltas o sistemas genéricos que no reflejan cómo trabaja realmente una clínica dental. Dentaly Care Hub nace para unificar toda esa operación en un solo sistema, con un odontograma interactivo como pieza central — algo que ningún software genérico ofrece de forma nativa.",
      usersLabel: "Usuario final",
      users:
        "Recepcionistas que gestionan la agenda diaria y odontólogos que necesitan ver el historial clínico y el estado dental de cada paciente de un vistazo, sin perder tiempo buscando información dispersa.",
      architectureLabel: "Arquitectura",
      architecture:
        "El proyecto está organizado en capas: una capa de presentación en React 18 con TypeScript, una capa de estado global con Context API dividida en 6 providers de dominio (pacientes, turnos, finanzas, inventario, autenticación y UI), una capa de servicios que aísla toda la lógica de negocio y comunicación HTTP, y Axios con interceptores para el manejo transparente de autenticación JWT en cada request.",
      decisionsLabel: "Decisiones técnicas clave",
      decisions: [
        "Context API en vez de Redux: la separación en 6 providers de dominio evita el problema de un store monolítico y mantiene cada slice de estado testeable de forma aislada, sin la sobrecarga de configuración de Redux para un proyecto de este tamaño.",
        "React Hook Form + Zod: validación de formularios type-safe compartiendo un único schema entre el formulario y el tipo de TypeScript, eliminando duplicación entre validación y tipado.",
        "Odontograma interactivo: componente construido a medida para representar el estado de cada pieza dental, con estado independiente por paciente y sincronización con la capa de servicios.",
        "Recharts para los dashboards de KPIs: balance entre curva de aprendizaje baja y suficiente flexibilidad para gráficos de facturación e inventario en tiempo real.",
      ],
      linksLabel: "Enlaces",
    },
    en: {
      backLabel: "← Back to projects",
      challengeLabel: "The challenge",
      challenge:
        "Small dental practices often manage appointments, patients, finances, and inventory across loose spreadsheets or generic software that doesn't reflect how a dental clinic actually works. Dentaly Care Hub unifies that entire operation into a single system, with an interactive odontogram as its centerpiece — something no generic software offers natively.",
      usersLabel: "End user",
      users:
        "Receptionists managing the daily schedule, and dentists who need to see a patient's clinical history and dental status at a glance, without hunting for scattered information.",
      architectureLabel: "Architecture",
      architecture:
        "The project is organized in layers: a presentation layer in React 18 with TypeScript, a global state layer using Context API split into 6 domain providers (patients, appointments, finance, inventory, auth, and UI), a service layer that isolates all business logic and HTTP communication, and Axios with interceptors for transparent JWT auth handling on every request.",
      decisionsLabel: "Key technical decisions",
      decisions: [
        "Context API over Redux: splitting into 6 domain providers avoids a monolithic store and keeps each state slice testable in isolation, without Redux's configuration overhead for a project this size.",
        "React Hook Form + Zod: type-safe form validation sharing a single schema between the form and the TypeScript type, eliminating duplication between validation and typing.",
        "Interactive odontogram: a custom-built component representing each tooth's status, with independent per-patient state synced through the service layer.",
        "Recharts for KPI dashboards: a balance between a low learning curve and enough flexibility for real-time billing and inventory charts.",
      ],
      linksLabel: "Links",
    },
  },
};

export const EMAIL = "teolayer@gmail.com";
export const LINKEDIN_URL = "https://www.linkedin.com/";
export const GITHUB_URL = "https://github.com/";
