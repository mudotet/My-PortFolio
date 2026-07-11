import {
  BriefcaseBusiness,
  CalendarDays,
  Presentation,
  Trophy,
} from "lucide-react";

const experiences = [
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
      className="relative z-10 bg-secondary/45 px-4 py-24"
    >
      <div className="section-shell">
        <div data-reveal className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div className="text-left">
            <p className="eyebrow">
              <BriefcaseBusiness className="h-3.5 w-3.5 text-primary" />
              Experience
            </p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Work in practice.
            </h2>
          </div>
          <p className="max-w-2xl text-left leading-8 text-muted-foreground">
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
                style={{ "--reveal-delay": `${index * 70}ms` }}
                className="experience-entry grid gap-6 py-8 lg:grid-cols-[0.38fr_1.62fr] lg:gap-12"
              >
                <div className="text-left">
                  <p className="text-sm font-bold text-primary">
                    {experience.period}
                  </p>
                  <p className="mt-2 font-semibold text-foreground">
                    {experience.organization}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-2 rounded-md bg-primary/8 px-2.5 py-1 text-xs font-semibold text-primary">
                    <Icon className="h-3.5 w-3.5" />
                    {experience.signal}
                  </span>
                </div>

                <div className="text-left">
                  <h3 className="text-xl font-bold md:text-2xl">
                    {experience.role}
                  </h3>
                  <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">
                    {experience.summary}
                  </p>
                  <ul className="mt-5 grid gap-3 md:grid-cols-3">
                    {experience.contributions.map((contribution) => (
                      <li
                        key={contribution}
                        className="border-l-2 border-border pl-3 text-sm leading-6 text-muted-foreground transition hover:border-primary"
                      >
                        {contribution}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {experience.stack.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-border bg-background/75 px-2.5 py-1 text-xs font-semibold text-secondary-foreground"
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
