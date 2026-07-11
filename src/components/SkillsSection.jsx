import {
  BrainCircuit,
  Braces,
  Database,
  GitBranch,
  LockKeyhole,
  Server,
} from "lucide-react";
import {
  SiDocker,
  SiFastapi,
  SiGo,
  SiJavascript,
  SiJsonwebtokens,
  SiMysql,
  SiNestjs,
  SiOpenjdk,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiSpringboot,
  SiSpringsecurity,
  SiSwagger,
  SiTailwindcss,
} from "react-icons/si";

const techFlow = [
  { name: "Java", icon: SiOpenjdk, color: "#ED8B00" },
  { name: "Go", icon: SiGo, color: "#00ADD8" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "JavaScript", icon: SiJavascript, color: "#E5C300" },
  { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
  { name: "Spring Security", icon: SiSpringsecurity, color: "#6DB33F" },
  { name: "JWT", icon: SiJsonwebtokens, color: "#D63AFF" },
  { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Swagger", icon: SiSwagger, color: "#69B42D" },
  { name: "OpenAI Vision", icon: BrainCircuit, color: "#10A37F" },
  { name: "React", icon: SiReact, color: "#149ECA" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
];

const featuredTechNames = new Set([
  "Java",
  "Spring Boot",
  "NestJS",
  "FastAPI",
  "PostgreSQL",
  "Redis",
  "Docker",
  "React",
]);

const featuredTechs = techFlow.filter((tech) => featuredTechNames.has(tech.name));
const supportingTechs = techFlow.filter(
  (tech) => !featuredTechNames.has(tech.name)
);

const skillGroups = [
  {
    icon: Server,
    title: "Backend & API Engineering",
    summary:
      "RESTful services, clean request/response contracts, validation, exception handling, and service-layer design.",
    stack: ["Spring Boot", "Spring MVC", "NestJS", "FastAPI"],
    proof: "Used across FreeCode School, PathTech JSC, GuideLens AI, and Identity Services.",
  },
  {
    icon: LockKeyhole,
    title: "Authentication & Authorization",
    summary:
      "JWT access/refresh tokens, logout, token revocation, RBAC, permission checks, and protected endpoints.",
    stack: ["Spring Security", "BCrypt", "@PreAuthorize", "JWT"],
    proof: "Implemented in Identity Services and real-estate auction APIs.",
  },
  {
    icon: Database,
    title: "Data & Infrastructure",
    summary:
      "Relational schema work, caching, transactions, local deployment, and API documentation for team collaboration.",
    stack: ["MySQL", "PostgreSQL", "Redis", "Docker Compose", "Swagger"],
    proof: "Supported auction, reservation, bidding, and authentication workflows.",
  },
  {
    icon: BrainCircuit,
    title: "AI Integration",
    summary:
      "Image upload, inference APIs, coordinate extraction, and annotation generation from screenshots.",
    stack: ["OpenAI Vision", "Pillow", "FastAPI", "Docker"],
    proof: "GuideLens AI won 3rd Place at Codex Community Hackathon 2026.",
  },
  {
    icon: Braces,
    title: "Frontend Collaboration",
    summary:
      "React interfaces, API mapping, data-flow debugging, and responsive UI work for full-stack delivery.",
    stack: ["React", "JavaScript", "Tailwind CSS", "HTML/CSS"],
    proof: "Collaborated with frontend teams and shipped full-stack hackathon flows.",
  },
  {
    icon: GitBranch,
    title: "Developer Workflow",
    summary:
      "Version control, API testing, DTO mapping, documentation, and AI-assisted productivity tooling.",
    stack: ["Git", "GitHub", "Postman", "Maven", "MapStruct", "OpenAI Codex"],
    proof: "Used across professional projects, teaching, and independent development.",
  },
];

export const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="relative z-10 overflow-hidden bg-secondary/50 px-4 py-24"
    >
      <div className="section-shell">
        <div data-reveal className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div className="text-left">
            <p className="eyebrow">
              <Server className="h-3.5 w-3.5 text-primary" />
              Skills
            </p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Technical toolkit.
            </h2>
          </div>
          <p className="text-left leading-8 text-muted-foreground">
            My strongest stack is backend-heavy, with enough frontend fluency to
            integrate, debug, and ship complete product flows. The emphasis is
            on APIs, security, databases, and practical delivery.
          </p>
        </div>

        <div className="mt-12">
          <div className="mb-4 flex items-center justify-between gap-4 text-left">
            <h3 className="text-lg font-bold">Primary stack</h3>
            <span className="text-sm text-muted-foreground">
              Used across production work and projects
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
            {featuredTechs.map((tech, index) => (
              <div
                key={tech.name}
                data-reveal
                className="featured-tech group"
                style={{
                  "--tech-color": tech.color,
                  "--reveal-delay": `${index * 50}ms`,
                }}
              >
                <span className="featured-tech-icon">
                  <tech.icon className="h-9 w-9" aria-hidden="true" />
                </span>
                <span className="mt-4 text-sm font-bold text-foreground">
                  {tech.name}
                </span>
                <span className="mt-1 text-xs text-muted-foreground">
                  Core stack
                </span>
              </div>
            ))}
          </div>
        </div>

        <div data-reveal className="mt-8 overflow-hidden border-y border-border bg-card/55 py-3">
          <div className="tech-marquee flex min-w-max gap-3 px-3">
            {[...supportingTechs, ...supportingTechs].map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                aria-hidden={index >= supportingTechs.length ? "true" : undefined}
                className="group flex min-w-36 items-center gap-3 px-3 py-2 transition duration-300 hover:-translate-y-0.5"
              >
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md"
                  style={{
                    color: tech.color,
                    backgroundColor: `${tech.color}18`,
                  }}
                >
                  <tech.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="whitespace-nowrap text-sm font-semibold text-foreground/80 transition group-hover:text-foreground">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div data-reveal className="mt-16 flex items-center justify-between gap-4 text-left">
          <h3 className="text-xl font-bold">Capabilities</h3>
          <span className="text-sm text-muted-foreground">
            How the stack is applied
          </span>
        </div>

        <div className="mt-6 grid gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <div
                key={group.title}
                data-reveal
                style={{ "--reveal-delay": `${index * 70}ms` }}
                className="flex h-full flex-col border-t border-border px-1 pt-5 text-left transition duration-300 hover:border-primary"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-md bg-primary/10 p-3 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{group.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {group.summary}
                    </p>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-secondary px-2.5 py-1 text-xs font-semibold text-secondary-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-5 border-t border-border pt-4">
                  <p className="text-sm leading-6 text-muted-foreground">
                    {group.proof}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
