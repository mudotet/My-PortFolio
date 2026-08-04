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

export const HeroSection = ({ onOpenResume }) => {
  return (
    <section
      id="hero"
      className="relative z-10 flex min-h-dvh items-center border-b-8 border-black px-4 pb-20 pt-32"
    >
      <div className="section-shell">
        <div className="grid gap-14 lg:grid-cols-[1.18fr_0.82fr] lg:items-center xl:gap-20">
          <div className="min-w-0 max-w-3xl text-left">
            <div className="eyebrow opacity-0 animate-fade-in">
              <MapPin className="h-4 w-4 stroke-[3]" />
              Software Engineer · Ha Noi, Viet Nam
            </div>
            <h1 className="mt-9 uppercase">
              <span
                className="hero-name block text-sm font-bold uppercase tracking-[0.18em] text-black md:text-base"
                aria-label={displayName}
              >
                {Array.from(displayName).map((character, index) => (
                  <span
                    key={`${character}-${index}`}
                    aria-hidden="true"
                    className="hero-character"
                    style={{ "--character-delay": `${40 + index * 16}ms` }}
                  >
                    {character === " " ? "\u00A0" : character}
                  </span>
                ))}
              </span>
              <span className="mt-4 block opacity-0 animate-fade-in-delay-2">
                <span className="block w-fit max-w-full -rotate-1 border-4 border-black bg-primary px-3 py-2 text-[clamp(2.35rem,7.2vw,6.8rem)] font-black leading-[0.82] tracking-[-0.075em] shadow-neo-md sm:px-5">
                  Backend systems
                </span>
                <span className="display-outline mt-4 block rotate-1 text-[clamp(2.75rem,7.2vw,6.8rem)] font-black leading-[0.82] tracking-[-0.075em]">
                  built to last.
                </span>
              </span>
            </h1>
            <p className="mt-9 max-w-[62ch] border-l-4 border-black bg-card px-5 py-4 text-base font-bold leading-7 text-black opacity-0 shadow-neo-sm animate-fade-in-delay-3 md:text-lg">
              I build dependable APIs, authentication systems, payment flows,
              and AI-assisted products with Java, Spring Boot, NestJS, FastAPI,
              PostgreSQL, Redis, and Docker.
            </p>

            <div className="mt-9 flex flex-col gap-4 opacity-0 animate-fade-in-delay-4 sm:flex-row">
              <a href="#projects" className="neo-button">
                View case studies
                <ArrowRight className="h-4 w-4" />
              </a>
              <button
                type="button"
                aria-haspopup="dialog"
                onClick={onOpenResume}
                className="neo-button-secondary"
              >
                View resume
                <FileText className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-3 opacity-0 animate-fade-in-delay-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className="inline-flex min-h-11 items-center gap-2 border-2 border-black bg-card px-3 py-2 text-sm font-black text-black shadow-neo-xs transition duration-100 hover:-translate-y-0.5 hover:bg-secondary"
                  >
                    <Icon className="h-4 w-4" />
                    {link.label}
                  </a>
                );
              })}
            </div>

            <dl className="mt-7 grid border-4 border-black bg-card opacity-0 shadow-neo-md animate-fade-in-delay-4 sm:grid-cols-3">
              {proofPoints.map((point, index) => (
                <div
                  key={point.value}
                  className={`p-4 ${index ? "border-t-4 border-black sm:border-l-4 sm:border-t-0" : ""}`}
                >
                  <dt className="text-lg font-black text-black">
                    {point.value}
                  </dt>
                  <dd className="mt-1 text-xs font-bold leading-5 text-black">
                    {point.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-[30rem] opacity-0 animate-fade-in-delay-3 lg:mr-0 lg:max-w-[25rem] xl:max-w-[28rem]">
            <div
              className="absolute -left-5 top-12 h-28 w-28 -rotate-6 border-4 border-black bg-muted shadow-neo-md"
              aria-hidden="true"
            />
            <div
              className="halftone-patch absolute -bottom-8 -right-8 h-40 w-40 border-4 border-black bg-secondary opacity-100"
              aria-hidden="true"
            />
            <figure className="relative rotate-1 overflow-hidden border-4 border-black bg-card p-2 shadow-neo-lg transition duration-100 hover:rotate-0">
              <div className="overflow-hidden border-3 border-black bg-secondary">
                <img
                  src={portrait}
                  alt="Portrait of Phan Thanh Tu smiling by the sea"
                  width="768"
                  height="1024"
                  fetchPriority="high"
                  className="aspect-[4/5] w-full object-cover object-[50%_44%] saturate-[1.08] contrast-[1.05]"
                />
              </div>
              <figcaption className="flex flex-col items-start justify-between gap-3 px-3 py-4 sm:flex-row sm:items-center sm:gap-4 sm:px-4">
                <div className="text-left">
                  <p className="font-black uppercase text-black">Phan Thanh Tu</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wide text-black">
                    Backend-focused Software Engineer
                  </p>
                </div>
                <div className="flex shrink-0 -rotate-2 items-center gap-2 border-3 border-black bg-secondary px-2 py-1 font-mono text-xs font-bold uppercase text-black">
                  <span className="h-2 w-2 rounded-full bg-black" />
                  Open to work
                </div>
              </figcaption>
            </figure>

            <div className="absolute -left-8 bottom-24 hidden max-w-48 -rotate-2 items-center gap-3 border-4 border-black bg-primary p-4 text-left shadow-neo-md sm:flex">
              <BriefcaseBusiness className="h-5 w-5 shrink-0 stroke-[3]" />
              <div>
                <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.14em] text-black">
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
