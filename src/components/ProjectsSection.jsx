import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  BrainCircuit,
  CreditCard,
  ExternalLink,
  GraduationCap,
  Github,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "HUMG Regulation AI",
    label: "Live AI product",
    date: "30 users",
    icon: GraduationCap,
    problem:
      "HUMG students spend too much time scanning long PDF regulations, while simple keyword search can miss wording with the same meaning.",
    solution:
      "Built an AI assistant that accepts natural Vietnamese questions, retrieves relevant regulation passages, and shows source references for verification.",
    impact: [
      "Deployed as a live product and currently used by 30 users.",
      "Made university regulations searchable through natural-language questions.",
      "Returned source-backed PDF passages so students can verify each result.",
    ],
    flow: ["Question", "Semantic Search", "PDF Evidence", "Answer"],
    tags: ["Next.js", "AI Retrieval", "PDF Search", "Vercel"],
    liveUrl: "https://humg-ai-server-beryl.vercel.app/",
  },
  {
    id: 2,
    title: "GuideLens AI",
    label: "Hackathon product",
    date: "June 2026",
    icon: BrainCircuit,
    problem:
      "Users often get stuck when a screenshot or unfamiliar UI does not clearly show the next action.",
    solution:
      "Led a 3-person team building APIs for image upload, OpenAI Vision inference, and coordinate-based annotation generation.",
    impact: [
      "Won 3rd Place at Codex Community Hackathon 2026.",
      "Generated UI guidance from screenshots with OpenAI Vision and Pillow.",
      "Containerized frontend and backend services with Docker Compose.",
    ],
    flow: ["Screenshot", "Vision API", "Coordinates", "Guidance"],
    tags: ["FastAPI", "OpenAI Vision", "Pillow", "Docker Compose"],
  },
  {
    id: 3,
    title: "Real-estate Auction Platform",
    label: "Professional case study",
    date: "PathTech JSC",
    icon: CreditCard,
    problem:
      "Auction products need protected user flows, reliable listing/reservation APIs, and secure payment processing.",
    solution:
      "Developed backend services with NestJS, PostgreSQL, Redis, JWT authorization, Stripe Payment Intents, and webhook handlers.",
    impact: [
      "Implemented protected REST APIs for listings, reservations, and bidding.",
      "Added role-based authorization for critical platform actions.",
      "Integrated secure online transaction workflows with Stripe webhooks.",
    ],
    flow: ["Listing", "Reservation", "Bidding", "Payment"],
    tags: ["NestJS", "PostgreSQL", "Redis", "Stripe", "JWT"],
  },
  {
    id: 4,
    title: "Identity Services",
    label: "Public source project",
    date: "Backend system",
    icon: ShieldCheck,
    problem:
      "Applications need a reusable authentication service that handles login, token lifecycle, permissions, and API errors safely.",
    solution:
      "Built a Spring Boot authentication service with MySQL, Spring Security, JWT, BCrypt, DTO mapping, and global exception handling.",
    impact: [
      "Supported access tokens, refresh tokens, token revocation, and logout.",
      "Designed role-based and permission-based authorization with @PreAuthorize.",
      "Standardized validation and unauthorized responses with AuthenticationEntryPoint.",
    ],
    flow: ["Login", "JWT", "RBAC", "Protected API"],
    tags: ["Java", "Spring Boot", "MySQL", "Spring Security", "JWT"],
    githubUrl: "https://github.com/mudotet/identity_services",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="relative z-10 px-4 py-24">
      <div className="section-shell">
        <div data-reveal className="grid gap-6 text-left lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <p className="eyebrow">
              <Boxes className="h-3.5 w-3.5 text-primary" />
              Projects
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
              Selected work.
            </h2>
          </div>
          <p className="max-w-2xl leading-8 text-muted-foreground">
            A selection of products and systems I have helped shape, with the
            focus on the problem, my contribution, and the outcome.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                data-reveal
                data-parallax="card"
                style={{ "--reveal-delay": `${index * 80}ms` }}
                className={`project-motion-shell h-full ${
                  index === 0 || index === 3
                    ? "lg:col-span-7"
                    : "lg:col-span-5"
                }`}
              >
                <article className="project-card-motion surface-panel group flex h-full flex-col overflow-hidden text-left">
                  <div className="project-visual relative min-h-72 overflow-hidden p-5 pb-20 sm:min-h-56 sm:pb-5">
                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-md border border-border bg-card/80 px-3 py-1 text-xs font-semibold text-muted-foreground">
                        {project.label}
                      </span>
                      <span className="rounded-md bg-foreground px-3 py-1 text-xs font-semibold text-background dark:bg-background dark:text-foreground">
                        {project.date}
                      </span>
                    </div>
                    <div className="mt-10 grid grid-cols-2 gap-3 sm:flex sm:items-center sm:justify-center">
                      {project.flow.map((item, index) => (
                        <div key={item} className="flex items-center gap-3">
                          <div className="rounded-md border border-border bg-card/90 px-3 py-3 text-center shadow-sm">
                            <p className="text-xs font-semibold text-muted-foreground">
                              {item}
                            </p>
                          </div>
                          {index < project.flow.length - 1 && (
                            <div className="flow-line hidden h-px w-8 sm:block" />
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="absolute bottom-5 left-5 rounded-md bg-primary p-3 text-primary-foreground shadow-lg">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-secondary px-2.5 py-1 text-xs font-semibold text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold">{project.title}</h3>

                  <div className="mt-5 space-y-4">
                    <div>
                      <div className="mb-2 flex items-center gap-2 text-sm font-bold text-primary">
                        <LockKeyhole className="h-4 w-4" />
                        Problem
                      </div>
                      <p className="text-sm leading-6 text-muted-foreground">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <div className="mb-2 flex items-center gap-2 text-sm font-bold text-primary">
                        <ExternalLink className="h-4 w-4" />
                        Approach
                      </div>
                      <p className="text-sm leading-6 text-muted-foreground">
                        {project.solution}
                      </p>
                    </div>
                    <div>
                      <div className="mb-2 flex items-center gap-2 text-sm font-bold text-primary">
                        <BadgeCheck className="h-4 w-4" />
                        Impact
                      </div>
                      <ul className="space-y-2">
                        {project.impact.map((item) => (
                          <li
                            key={item}
                            className="flex gap-2 text-sm leading-6 text-muted-foreground"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-6">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-accent"
                      >
                        Live demo
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    ) : project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-accent"
                      >
                        Source code
                        <Github className="h-4 w-4" />
                      </a>
                    ) : (
                      <span className="text-sm font-semibold text-muted-foreground">
                        Case study from work experience
                      </span>
                    )}
                  </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>

        <div data-reveal className="mt-12 text-center">
          <a
            href="https://github.com/mudotet"
            target="_blank"
            rel="noreferrer"
            className="cosmic-button mx-auto w-fit"
          >
            Check my GitHub
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
