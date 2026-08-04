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
  { name: "Java", icon: SiOpenjdk },
  { name: "Go", icon: SiGo },
  { name: "Python", icon: SiPython },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Spring Boot", icon: SiSpringboot },
  { name: "Spring Security", icon: SiSpringsecurity },
  { name: "JWT", icon: SiJsonwebtokens },
  { name: "NestJS", icon: SiNestjs },
  { name: "FastAPI", icon: SiFastapi },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MySQL", icon: SiMysql },
  { name: "Redis", icon: SiRedis },
  { name: "Docker", icon: SiDocker },
  { name: "Swagger", icon: SiSwagger },
  { name: "OpenAI Vision", icon: BrainCircuit },
  { name: "React", icon: SiReact },
  { name: "Tailwind CSS", icon: SiTailwindcss },
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
      className="relative z-10 overflow-hidden border-b-8 border-black bg-black px-4 py-24 text-white md:py-28"
    >
      <div className="section-shell">
        <div data-reveal className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div className="text-left">
            <p className="eyebrow">
              <Server className="h-4 w-4 stroke-[3] text-black" />
              Skills
            </p>
            <h2 className="mt-6 text-5xl font-black uppercase tracking-[-0.06em] text-white md:text-7xl">
              Technical toolkit.
            </h2>
          </div>
          <p className="border-l-4 border-white pl-5 text-left text-lg leading-8 text-white">
            My strongest stack is backend-heavy, with enough frontend fluency to
            integrate, debug, and ship complete product flows. The emphasis is
            on APIs, security, databases, and practical delivery.
          </p>
        </div>

        <div className="mt-12">
          <div className="mb-5 flex items-center justify-between gap-4 text-left">
            <h3 className="text-2xl font-black uppercase text-white">Primary stack</h3>
            <span className="text-xs font-bold uppercase text-white">
              Used across production work and projects
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
            {featuredTechs.map((tech, index) => (
              <div
                key={tech.name}
                data-reveal
                className="featured-tech group"
                style={{ "--reveal-delay": `${index * 50}ms` }}
              >
                <span className="featured-tech-icon">
                  <tech.icon className="h-9 w-9" aria-hidden="true" />
                </span>
                <span className="mt-4 text-sm font-black uppercase text-black">
                  {tech.name}
                </span>
                <span className="mt-1 text-xs font-bold uppercase text-black">
                  Core stack
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          data-reveal
          tabIndex={0}
          aria-label="Supporting technologies. Animation pauses while focused."
          className="tech-conveyor mt-10 overflow-hidden border-4 border-white bg-primary py-3 shadow-neo-inverse"
        >
          <div className="tech-marquee flex min-w-max gap-3 px-3">
            {[...supportingTechs, ...supportingTechs].map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                aria-hidden={index >= supportingTechs.length ? "true" : undefined}
                className="group flex min-w-40 items-center gap-3 border-3 border-black bg-card px-3 py-2 text-black shadow-neo-xs transition duration-100 hover:-translate-y-0.5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-black bg-secondary text-black">
                  <tech.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="whitespace-nowrap text-sm font-black uppercase text-black">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div data-reveal className="mt-16 flex items-center justify-between gap-4 text-left">
          <h3 className="text-2xl font-black uppercase text-white">Capabilities</h3>
          <span className="text-xs font-bold uppercase text-white">
            How the stack is applied
          </span>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <div
                key={group.title}
                data-reveal
                style={{ "--reveal-delay": `${index * 70}ms` }}
                className="surface-panel flex h-full flex-col p-6 text-left text-black shadow-neo-inverse transition duration-100 hover:-translate-y-1 hover:shadow-neo-inverse-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="border-3 border-black bg-primary p-3 text-black shadow-neo-xs">
                    <Icon className="h-6 w-6 stroke-[3]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black uppercase">{group.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-black">
                      {group.summary}
                    </p>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.stack.map((item) => (
                    <span
                      key={item}
                      className="border-2 border-black bg-muted px-2.5 py-1 text-xs font-bold text-black"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-5 border-t-3 border-black pt-4">
                  <p className="text-sm leading-6 text-black">
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
