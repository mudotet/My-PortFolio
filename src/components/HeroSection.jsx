import {
  ArrowDown,
  ArrowRight,
  Boxes,
  BrainCircuit,
  Database,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Server,
  ShieldCheck,
} from "lucide-react";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/mudotet", icon: Github },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/t%C3%BA-phan-203970327/",
    icon: Linkedin,
  },
];

const displayName = "Phan Thanh Tu";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative z-10 flex min-h-[92vh] items-center px-4 pb-16 pt-28"
    >
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
          <div className="max-w-3xl text-left">
            <div className="eyebrow opacity-0 animate-fade-in">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              Software Engineer · Ha Noi, Viet Nam
            </div>
            <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
              <span className="hero-name block" aria-label={displayName}>
                {Array.from(displayName).map((character, index) => (
                  <span
                    key={`${character}-${index}`}
                    aria-hidden="true"
                    className="hero-character"
                    style={{ "--character-delay": `${180 + index * 45}ms` }}
                  >
                    {character === " " ? "\u00A0" : character}
                  </span>
                ))}
              </span>
              <span className="block opacity-0 animate-fade-in-delay-2">
                <span className="kinetic-headline text-gradient">
                  Backend systems. AI products.
                </span>
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground opacity-0 animate-fade-in-delay-3 md:text-lg">
              I build RESTful services, authentication systems, payment flows,
              and AI-assisted workflows with Java, Spring Boot, NestJS, FastAPI,
              PostgreSQL, Redis, and Docker.
            </p>

            <div className="mt-8 flex flex-col gap-3 opacity-0 animate-fade-in-delay-4 sm:flex-row">
              <a href="#projects" className="cosmic-button">
                View case studies
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary"
              >
                Contact me
                <Mail className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-3 opacity-0 animate-fade-in-delay-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className="inline-flex items-center gap-2 rounded-md border border-border bg-background/70 px-3 py-2 text-sm text-muted-foreground transition hover:border-primary hover:text-primary"
                  >
                    <Icon className="h-4 w-4" />
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="opacity-0 animate-fade-in-delay-3">
            <div className="hero-system" data-parallax="hero" aria-hidden="true">
              <div className="hero-system-grid" />
              <div className="system-axis system-axis-horizontal" />
              <div className="system-axis system-axis-vertical" />

              <span className="data-packet packet-horizontal-one" />
              <span className="data-packet packet-horizontal-two" />
              <span className="data-packet packet-vertical-one" />
              <span className="data-packet packet-vertical-two" />

              <div className="system-node system-node-auth">
                <span className="system-node-icon">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <strong>AUTH</strong>
                <small>JWT · RBAC</small>
              </div>

              <div className="system-node system-node-data">
                <span className="system-node-icon">
                  <Database className="h-5 w-5" />
                </span>
                <strong>DATA</strong>
                <small>SQL · Redis</small>
              </div>

              <div className="system-core">
                <Server className="h-7 w-7" />
                <strong>API CORE</strong>
                <small>secure · scalable</small>
              </div>

              <div className="system-node system-node-ai">
                <span className="system-node-icon">
                  <BrainCircuit className="h-5 w-5" />
                </span>
                <strong>AI</strong>
                <small>Vision · RAG</small>
              </div>

              <div className="system-node system-node-deploy">
                <span className="system-node-icon">
                  <Boxes className="h-5 w-5" />
                </span>
                <strong>DEPLOY</strong>
                <small>Docker · Cloud</small>
              </div>

              <div className="system-status">
                <span /> system online
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center text-sm text-muted-foreground transition hover:text-primary md:flex"
        aria-label="Scroll to about section"
      >
        <span className="mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  );
};
