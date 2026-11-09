import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  BookOpen,
  BrainCircuit,
  ChevronDown,
  CreditCard,
  Database,
  ExternalLink,
  GraduationCap,
  Github,
  LockKeyhole,
  Network,
  ShieldCheck,
  Users,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "GuideLens AI",
    label: "Hackathon product",
    date: "June 2026",
    icon: BrainCircuit,
    featured: true,
    summary: "Screenshot-based UI guidance, built with a 3-person team at the Codex Community Hackathon.",
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
    id: 5,
    title: "Auto Offices",
    label: "AI marketing workspace",
    date: "Live website",
    icon: Users,
    summary: "A live pixel-art marketing office where 13 AI roles turn briefs into plans and drafts with human approval.",
    problem:
      "Solo creators and small teams need help turning a marketing brief into a plan and draft without losing control of the work.",
    solution:
      "Built a pixel-art marketing office around 13 AI roles, with the user acting as CEO. The workflow centers on reviewing plans, coordinating specialist tasks, and approving drafts.",
    impact: [
      "Organized marketing roles across 7 departments in an interactive office.",
      "Kept plan confirmation and draft review under human control, without automatic publishing or ad spending.",
      "Created Vietnamese and English experiences for team chat and marketing workflows.",
    ],
    flow: ["Brief", "Plan review", "Agent tasks", "Draft review"],
    tags: ["Next.js", "React", "Phaser", "AI Agents", "Human Approval"],
    liveUrl: "https://autooffice.space/",
    liveLabel: "Visit website",
  },
  {
    id: 6,
    title: "E-commerce Microservices",
    label: "Backend learning project",
    date: "Microservices",
    icon: Network,
    summary: "An event-driven Spring system for orders and inventory, with service-owned data and failure handling.",
    problem:
      "Independent order and product services need to coordinate prices, stock, and failures while keeping ownership of their own data.",
    solution:
      "Built a Spring Boot system combining HTTP price lookups with Kafka order and inventory events, separate PostgreSQL databases, Eureka discovery, and a Keycloak-secured API gateway.",
    impact: [
      "Practiced Redis caching, Redisson coordination, database row locks, and duplicate-event handling for inventory updates.",
      "Added Kafka retry and dead-letter routing for failed event processing.",
      "Connected structured Order Service logs to Elasticsearch, Logstash, and Kibana for inspection.",
    ],
    flow: ["Create order", "Kafka event", "Stock update", "Order status"],
    tags: ["Spring Boot", "Kafka", "Redis", "Java", "PostgreSQL", "Eureka", "Keycloak", "ELK"],
    githubUrl: "https://github.com/mudotet/ecommerce-microservices",
  },
  {
    id: 7,
    title: "Order Workspace",
    label: "Full-stack learning project",
    date: "Data & SQL",
    icon: Database,
    summary: "An order-management workspace for practicing database pagination, query tuning, and relational design.",
    problem:
      "Order, inventory, and return workflows need bounded reads and useful summaries as relational datasets grow.",
    solution:
      "Built a Spring Boot and React workspace to practice database pagination, SQL aggregates, DTO projections, and normalized relationships with stored order-price snapshots and line totals.",
    impact: [
      "Used database-level pagination with deterministic sorting and validated page sizes.",
      "Exported returns with keyset pagination in 500-row batches and bulk relationship lookups.",
      "Explored query tuning and normalization trade-offs across admin, customer, and shipper workflows.",
    ],
    flow: ["Filter", "Paged query", "DTO projection", "Table / CSV"],
    tags: ["Java", "Spring Boot", "MySQL", "Spring Data JPA", "React", "SQL Optimization"],
    githubUrl: "https://github.com/mudotet/order_services",
  },
  {
    id: 8,
    title: "Personal Blog",
    label: "Independent project",
    date: "Live website",
    icon: BookOpen,
    summary: "My engineering notes and projects, with an owner-only publishing studio and an interactive Three.js identity.",
    problem:
      "I wanted a personal space for engineering notes and projects, with a way to edit and publish articles without changing code.",
    solution:
      "Built a Next.js blog with a searchable article archive, topic filters, and an owner-only publishing studio backed by Supabase. Three.js scenes and a pixel-art room give the site a personal identity.",
    impact: [
      "Separated private drafts from published snapshots through an explicit publishing workflow.",
      "Added a visual editor, image uploads, draft recovery, and editable site content.",
      "Supported responsive layouts, light and dark themes, and reduced-motion preferences.",
    ],
    flow: ["Write", "Save draft", "Publish", "Read & search"],
    tags: ["Next.js", "TypeScript", "Supabase", "Three.js", "Tailwind CSS"],
    liveUrl: "https://www.tusblog.site/",
    liveLabel: "Visit blog",
  },
  {
    id: 2,
    title: "HUMG Regulation AI",
    label: "Live AI product",
    date: "30 users",
    icon: GraduationCap,
    summary: "Vietnamese natural-language search for university regulations, with source-backed PDF answers.",
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
    summary: "Backend services for listings, reservations, bidding, and Stripe payment workflows at PathTech JSC.",
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
    summary: "A reusable Spring authentication service covering JWT lifecycle, roles, permissions, and API validation.",
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
            Eight projects across AI, backend engineering, and the web.
            Scan the highlights or open a case study for the technical details.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 items-start gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                data-reveal
                style={{ transitionDelay: `${Math.min(index * 20, 120)}ms` }}
                className={`project-motion-shell min-w-0 ${project.featured ? "md:col-span-2" : ""}`}
              >
                <article className={`project-card-motion overflow-hidden text-left ${project.featured ? "project-card-featured" : ""}`}>
                  <div className="project-card-heading flex items-start gap-3 border-b-3 border-black p-4 sm:p-5">
                    <Icon className="mt-0.5 h-6 w-6 shrink-0 stroke-[2.5]" aria-hidden="true" />
                    <div className="min-w-0 flex-1">
                      <p className="font-mono text-[0.65rem] font-bold uppercase tracking-wide">
                        {project.label}
                      </p>
                      <h3 className="mt-1 break-words text-xl font-black leading-tight sm:text-2xl">
                        {project.title}
                      </h3>
                    </div>
                    {project.featured && (
                      <span className="hidden shrink-0 rotate-3 border-2 border-black bg-card px-2 py-1 font-mono text-xs font-bold sm:block">
                        3rd Place
                      </span>
                    )}
                  </div>

                  <div className="p-4 sm:p-5">
                    <p className="max-w-[65ch] text-sm leading-6">{project.summary}</p>
                    <p className="mt-3 flex gap-2 text-sm font-bold leading-5">
                      <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                      {project.impact[0]}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5" aria-label="Key technologies">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="border-2 border-black bg-muted px-2 py-0.5 text-xs font-bold">
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-1 py-1 text-xs font-bold" aria-label={`${project.tags.length - 3} more technologies in the case study`}>
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                    <div className="mt-4 flex min-h-11 flex-wrap items-center justify-between gap-x-4 gap-y-2">
                      <span className="font-mono text-xs font-bold uppercase">{project.date}</span>
                      {project.liveUrl ? (
                        <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`${project.liveLabel || "Live demo"}: ${project.title}`} className="project-link">
                          {project.liveLabel || "Live demo"}
                          <ExternalLink className="h-4 w-4" aria-hidden="true" />
                        </a>
                      ) : project.githubUrl ? (
                        <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`Source code: ${project.title}`} className="project-link">
                          Source code
                          <Github className="h-4 w-4" aria-hidden="true" />
                        </a>
                      ) : null}
                    </div>
                  </div>

                  <details className="project-details border-t-3 border-black" name="project-case-study">
                    <summary className="flex min-h-12 cursor-pointer items-center justify-between gap-3 bg-muted px-4 py-3 text-sm font-bold sm:px-5">
                      <span>Case study<span className="sr-only">: {project.title}</span></span>
                      <ChevronDown className="project-details-chevron h-4 w-4 shrink-0" aria-hidden="true" />
                    </summary>
                    <div className="space-y-5 border-t-3 border-black p-4 sm:p-5">
                      <ol aria-label="System flow" className="grid grid-cols-2 gap-2">
                        {project.flow.map((item, flowIndex) => (
                          <li key={item} className="border-2 border-black bg-secondary p-2 font-mono text-xs font-bold">
                            <span className="mr-2 opacity-60">{String(flowIndex + 1).padStart(2, "0")}</span>
                            {item}
                          </li>
                        ))}
                      </ol>
                      <div>
                        <h4 className="mb-2 flex items-center gap-2 text-xs font-bold uppercase">
                          <LockKeyhole className="h-4 w-4" aria-hidden="true" /> Problem
                        </h4>
                        <p className="text-sm leading-6">{project.problem}</p>
                      </div>
                      <div>
                        <h4 className="mb-2 text-xs font-bold uppercase">Approach</h4>
                        <p className="text-sm leading-6">{project.solution}</p>
                      </div>
                      <div>
                        <h4 className="mb-2 text-xs font-bold uppercase">Impact</h4>
                        <ul className="list-disc space-y-2 pl-4 text-sm leading-6">
                          {project.impact.map((item) => <li key={item}>{item}</li>)}
                        </ul>
                      </div>
                      <p className="text-xs leading-5"><span className="font-bold">Full stack: </span>{project.tags.join(" · ")}</p>
                    </div>
                  </details>
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
