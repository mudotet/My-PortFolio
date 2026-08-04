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
    title: "GuideLens AI",
    label: "Hackathon product",
    date: "June 2026",
    icon: BrainCircuit,
    featured: true,
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
    id: 2,
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
    <section id="projects" className="relative z-10 border-b-8 border-black px-4 py-24 md:py-28">
      <div className="section-shell">
        <div data-reveal className="grid gap-8 text-left lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <p className="eyebrow bg-primary">
              <Boxes className="h-4 w-4 stroke-[3]" />
              Projects
            </p>
            <h2 className="mt-6 text-5xl font-black uppercase tracking-[-0.06em] md:text-7xl">
              Selected work.
            </h2>
          </div>
          <p className="max-w-2xl border-l-4 border-black pl-5 text-lg leading-8 text-black">
            A selection of products and systems I have helped shape, with the
            focus on the problem, my contribution, and the outcome.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                data-reveal
                style={{ transitionDelay: `${Math.min(index * 20, 120)}ms` }}
                className={`project-motion-shell h-full ${project.featured ? "lg:col-span-3" : ""}`}
              >
                <article
                  className={`project-card-motion h-full overflow-hidden text-left ${
                    project.featured
                      ? "project-card-featured grid lg:grid-cols-[0.88fr_1.12fr]"
                      : "flex flex-col"
                  }`}
                >
                  <div className={`project-visual relative overflow-hidden p-5 ${project.featured ? "min-h-80 lg:min-h-full" : "min-h-72 pb-24"}`}>
                    <div className="flex items-center justify-between gap-3">
                      <span className="border-3 border-black bg-card px-3 py-1 font-mono text-xs font-bold uppercase text-black shadow-neo-xs">
                        {project.label}
                      </span>
                      <span className="border-3 border-black bg-black px-3 py-1 font-mono text-xs font-bold uppercase text-white">
                        {project.date}
                      </span>
                    </div>

                    <div className={project.featured ? "mt-12 grid gap-4 sm:grid-cols-4" : "mt-10 grid grid-cols-2 gap-3"}>
                      {project.flow.map((item, flowIndex) => (
                        <div key={item} className="flex min-w-0 items-center gap-3">
                          <div className="flow-node flex min-h-20 min-w-0 flex-1 flex-col justify-between border-3 border-black bg-card p-3 text-left shadow-neo-xs transition duration-100">
                            <span className="font-mono text-[0.65rem] font-bold">{String(flowIndex + 1).padStart(2, "0")}</span>
                            <p className="mt-2 text-xs font-black uppercase leading-4 text-black">{item}</p>
                          </div>
                          {project.featured && flowIndex < project.flow.length - 1 && (
                            <div className="flow-line hidden w-5 xl:block" aria-hidden="true" />
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="absolute bottom-5 left-5 rotate-3 border-4 border-black bg-primary p-3 text-black shadow-neo-sm">
                      <Icon className="h-7 w-7 stroke-[3]" />
                    </div>
                  </div>

                  <div className={`flex flex-1 flex-col ${project.featured ? "p-7 sm:p-9" : "p-6"}`}>
                    <div className="mb-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="border-2 border-black bg-muted px-2.5 py-1 text-xs font-bold text-black">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className={`${project.featured ? "text-4xl md:text-5xl" : "text-2xl"} font-black uppercase`}>
                      {project.title}
                    </h3>

                    <div className={`mt-7 ${project.featured ? "grid gap-6 sm:grid-cols-3" : "space-y-5"}`}>
                      <div>
                        <div className="mb-2 flex items-center gap-2 border-b-3 border-black pb-2 text-xs font-bold uppercase">
                          <LockKeyhole className="h-4 w-4 stroke-[3]" />
                          Problem
                        </div>
                        <p className="text-sm leading-6 text-black">{project.problem}</p>
                      </div>
                      <div>
                        <div className="mb-2 flex items-center gap-2 border-b-3 border-black pb-2 text-xs font-bold uppercase">
                          <ExternalLink className="h-4 w-4 stroke-[3]" />
                          Approach
                        </div>
                        <p className="text-sm leading-6 text-black">{project.solution}</p>
                      </div>
                      <div>
                        <div className="mb-2 flex items-center gap-2 border-b-3 border-black pb-2 text-xs font-bold uppercase">
                          <BadgeCheck className="h-4 w-4 stroke-[3]" />
                          Impact
                        </div>
                        <ul className="space-y-2">
                          {project.impact.map((item) => (
                            <li key={item} className="flex gap-2 text-sm leading-6 text-black">
                              <span className="mt-2 h-2 w-2 shrink-0 border-2 border-black bg-primary" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-auto pt-7">
                      {project.liveUrl ? (
                        <a href={project.liveUrl} target="_blank" rel="noreferrer" className="neo-button w-fit">
                          Live demo
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      ) : project.githubUrl ? (
                        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="neo-button-secondary w-fit">
                          Source code
                          <Github className="h-4 w-4" />
                        </a>
                      ) : (
                        <span className="inline-flex border-2 border-black bg-secondary px-3 py-2 font-mono text-xs font-bold uppercase text-black">
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

        <div data-reveal className="mt-14 text-center">
          <a href="https://github.com/mudotet" target="_blank" rel="noreferrer" className="neo-button mx-auto w-fit">
            Check my GitHub
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
