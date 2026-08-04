import {
  BriefcaseBusiness,
  CalendarDays,
  ExternalLink,
  Github,
  Landmark,
  Presentation,
  Trophy,
} from "lucide-react";

const experiences = [
  {
    period: "July 2026",
    organization: "AI Innovation Challenge · LonelyStone",
    role: "Team Leader · Full-stack Developer",
    signal: "Smart Government",
    icon: Landmark,
    summary:
      "Led a 3-person team to build CivicPath AI, a smart-government platform that helps citizens prepare birth-registration applications with guided AI support.",
    contributions: [
      "Built Vietnamese text and voice intake with structured fact extraction, multi-case classification, and dynamic document checklists.",
      "Combined deterministic validation with AI explanations, legal references, form autofill, and downloadable PDF previews.",
      "Shipped a protected officer dashboard and deployed Next.js on Vercel, FastAPI on Render, and PostgreSQL on Neon.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "OpenAI API",
      "Neon Postgres",
      "SQLAlchemy",
      "ReportLab",
    ],
    links: [
      {
        label: "Live demo",
        href: "https://ai-guided-public-service-procedures.vercel.app/",
        icon: ExternalLink,
      },
      {
        label: "GitHub",
        href: "https://github.com/mudotet/AI-guided-public-service-procedures-Lonely-Stone-",
        icon: Github,
      },
    ],
  },
  {
    period: "June 2026",
    organization: "Codex Community Hackathon",
    role: "Team Lead",
    signal: "3rd Place",
    icon: Trophy,
    summary:
      "Led a 3-person team from product idea to a working AI-assisted interface guidance system.",
    contributions: [
      "Built FastAPI endpoints for image upload, AI inference, and annotation generation.",
      "Integrated OpenAI Vision and Pillow for coordinate-based UI guidance.",
      "Containerized frontend and backend services with Docker Compose.",
    ],
    stack: ["FastAPI", "OpenAI Vision", "Pillow", "Docker Compose"],
  },
  {
    period: "Jan 2026 - Apr 2026",
    organization: "PathTech JSC",
    role: "Full-stack Developer",
    signal: "Product delivery",
    icon: BriefcaseBusiness,
    summary:
      "Contributed to a real-estate auction platform with protected workflows and online payments.",
    contributions: [
      "Developed listing, reservation, bidding, and transaction APIs with NestJS.",
      "Implemented JWT authentication, role-based access, PostgreSQL, and Redis flows.",
      "Integrated Stripe Payment Intents and webhook-based payment handling.",
    ],
    stack: ["NestJS", "PostgreSQL", "Redis", "Stripe", "JWT"],
  },
  {
    period: "Jan 2025 - Present",
    organization: "Teky Academy",
    role: "Programming Lecturer",
    signal: "Ongoing",
    icon: Presentation,
    summary:
      "Teach programming foundations while helping learners build confidence through practical exercises.",
    contributions: [
      "Teach Java, object-oriented programming, algorithms, and web fundamentals.",
      "Translate technical concepts into structured, approachable lessons.",
      "Guide students through debugging and project-based problem solving.",
    ],
    stack: ["Java", "OOP", "Algorithms", "Web Fundamentals"],
  },
  {
    period: "Jul 2024 - Dec 2024",
    organization: "FreeCode School",
    role: "Backend Developer",
    signal: "API foundations",
    icon: CalendarDays,
    summary:
      "Built and integrated Spring-based services for everyday application workflows.",
    contributions: [
      "Developed CRUD APIs with Spring Boot, Spring MVC, and Spring Data JPA.",
      "Added validation, global exception handling, and standardized JSON responses.",
      "Supported frontend integration and cross-layer debugging.",
    ],
    stack: ["Java", "Spring Boot", "Spring MVC", "Spring Data JPA"],
  },
];

export const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="relative z-10 border-b-8 border-black bg-secondary px-4 py-24 md:py-28"
    >
      <div className="section-shell">
        <div data-reveal className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div className="text-left">
            <p className="eyebrow">
              <BriefcaseBusiness className="h-4 w-4 stroke-[3]" />
              Experience
            </p>
            <h2 className="mt-6 text-5xl font-black uppercase tracking-[-0.06em] md:text-7xl">
              Work in practice.
            </h2>
          </div>
          <p className="max-w-2xl border-l-4 border-black pl-5 text-left text-lg leading-8 text-black">
            A progression from backend foundations to production workflows,
            technical leadership, and teaching.
          </p>
        </div>

        <div className="experience-list mt-14">
          {experiences.map((experience, index) => {
            const Icon = experience.icon;
            return (
              <article
                key={`${experience.organization}-${experience.period}`}
                data-reveal
                style={{ transitionDelay: `${Math.min(index * 20, 120)}ms` }}
                className="experience-entry grid gap-6 px-6 py-8 sm:px-8 lg:grid-cols-[0.38fr_1.62fr] lg:gap-12"
              >
                <div className="text-left">
                  <p className="font-mono text-sm font-bold uppercase text-black">
                    {experience.period}
                  </p>
                  <p className="mt-2 font-black uppercase text-black">
                    {experience.organization}
                  </p>
                  <span className="mt-4 inline-flex rotate-1 items-center gap-2 border-2 border-black bg-primary px-2.5 py-1 font-mono text-xs font-bold uppercase text-black shadow-neo-xs">
                    <Icon className="h-4 w-4 stroke-[3]" />
                    {experience.signal}
                  </span>
                </div>

                <div className="text-left">
                  <h3 className="text-2xl font-black uppercase md:text-3xl">
                    {experience.role}
                  </h3>
                  <p className="mt-4 max-w-3xl leading-7 text-black">
                    {experience.summary}
                  </p>
                  {experience.links && (
                    <div className="mt-4 flex flex-wrap gap-3">
                      {experience.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex min-h-11 items-center gap-2 border-2 border-black bg-muted px-3 py-2 text-sm font-black text-black shadow-neo-xs transition duration-100 hover:-translate-y-0.5"
                        >
                          <link.icon className="h-4 w-4" aria-hidden="true" />
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                  <ul className="mt-6 grid gap-3 md:grid-cols-3">
                    {experience.contributions.map((contribution) => (
                      <li
                        key={contribution}
                        className="border-3 border-black bg-background p-3 text-sm leading-6 text-black transition duration-100 hover:-translate-y-0.5 hover:bg-muted"
                      >
                        {contribution}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {experience.stack.map((technology) => (
                      <span
                        key={technology}
                        className="border-2 border-black bg-secondary px-2.5 py-1 text-xs font-bold text-black"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
