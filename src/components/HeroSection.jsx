import {
  ArrowRight,
  BriefcaseBusiness,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import portrait from "../assets/img/me_img.jpeg";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/mudotet", icon: Github },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/t%C3%BA-phan-203970327/",
    icon: Linkedin,
  },
  { label: "Email", href: "mailto:mudotet@gmail.com", icon: Mail },
];

const proofPoints = [
  { value: "3rd Place", label: "Codex Community Hackathon 2026" },
  { value: "IELTS 7.0", label: "IDP English credential" },
  { value: "CS50x", label: "Harvard certificate" },
];

const displayName = "Phan Thanh Tu";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative z-10 flex min-h-dvh items-center px-4 pb-16 pt-28"
    >
      <div className="section-shell">
        <div className="grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center xl:gap-20">
          <div className="min-w-0 max-w-3xl text-left">
            <div className="eyebrow opacity-0 animate-fade-in">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              Software Engineer · Ha Noi, Viet Nam
            </div>
            <h1 className="mt-8">
              <span
                className="hero-name block text-lg font-semibold tracking-[0.12em] text-foreground/75 md:text-xl"
                aria-label={displayName}
              >
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
              <span className="mt-3 block opacity-0 animate-fade-in-delay-2">
                <span className="text-gradient block text-[clamp(3.35rem,5.6vw,4.7rem)] font-semibold leading-[0.88] tracking-[-0.07em]">
                  Backend systems
                </span>
                <span className="mt-1 block text-[clamp(3.35rem,5.6vw,4.7rem)] font-semibold leading-[0.88] tracking-[-0.07em]">
                  built to last.
                </span>
              </span>
            </h1>
            <p className="mt-8 max-w-[62ch] text-base leading-8 text-muted-foreground opacity-0 animate-fade-in-delay-3 md:text-lg">
              I build dependable APIs, authentication systems, payment flows,
              and AI-assisted products with Java, Spring Boot, NestJS, FastAPI,
              PostgreSQL, Redis, and Docker.
            </p>

            <div className="mt-8 flex flex-col gap-3 opacity-0 animate-fade-in-delay-4 sm:flex-row">
              <a href="#projects" className="cosmic-button">
                View case studies
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/CV_PhanThanhTu_Sofware_Engineer_Intern.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary"
              >
                View resume
                <FileText className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-border pt-5 opacity-0 animate-fade-in-delay-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition hover:text-primary"
                  >
                    <Icon className="h-4 w-4" />
                    {link.label}
                  </a>
                );
              })}
            </div>

            <dl className="mt-7 grid gap-5 border-y border-border py-5 opacity-0 animate-fade-in-delay-4 sm:grid-cols-3 sm:gap-0">
              {proofPoints.map((point, index) => (
                <div
                  key={point.value}
                  className={index ? "sm:border-l sm:border-border sm:pl-5" : ""}
                >
                  <dt className="text-lg font-bold text-foreground">
                    {point.value}
                  </dt>
                  <dd className="mt-1 text-xs leading-5 text-muted-foreground">
                    {point.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-[30rem] opacity-0 animate-fade-in-delay-3 lg:mr-0 lg:max-w-[25rem] xl:max-w-[28rem]">
            <div
              className="absolute -left-5 top-12 h-28 w-28 border-l-2 border-t-2 border-primary/55"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-5 -right-5 h-36 w-36 bg-primary/10"
              aria-hidden="true"
            />
            <figure className="relative overflow-hidden rounded-[2rem_0.75rem_2rem_0.75rem] border border-border bg-card p-2 shadow-[0_28px_80px_hsl(var(--foreground)/0.14)]">
              <div className="overflow-hidden rounded-[1.5rem_0.5rem_1.5rem_0.5rem] bg-secondary">
                <img
                  src={portrait}
                  alt="Portrait of Phan Thanh Tu smiling by the sea"
                  width="768"
                  height="1024"
                  fetchPriority="high"
                  className="aspect-[4/5] w-full object-cover object-[50%_44%] saturate-[0.88] contrast-[1.03]"
                />
              </div>
              <figcaption className="flex flex-col items-start justify-between gap-3 px-3 py-4 sm:flex-row sm:items-center sm:gap-4 sm:px-4">
                <div className="text-left">
                  <p className="font-bold text-foreground">Phan Thanh Tu</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Backend-focused Software Engineer
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-2 text-xs font-semibold text-primary">
                  <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_0_4px_hsl(var(--primary)/0.12)]" />
                  Open to work
                </div>
              </figcaption>
            </figure>

            <div className="absolute -left-6 bottom-24 hidden max-w-48 items-center gap-3 rounded-md border border-border bg-card/95 p-4 text-left shadow-[0_18px_45px_hsl(var(--foreground)/0.12)] backdrop-blur sm:flex">
              <BriefcaseBusiness className="h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Current focus
                </p>
                <p className="mt-1 text-sm font-bold">Backend &amp; AI products</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
