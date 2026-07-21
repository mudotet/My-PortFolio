import {
  Award,
  BookOpen,
  BriefcaseBusiness,
  Eye,
  GraduationCap,
} from "lucide-react";
import cs50Certificate from "../assets/certificate/CS50x.pdf";
import geminiCertificate from "../assets/certificate/Gemini_Certificate_Student.pdf";
import ieltsCertificate from "../assets/certificate/IELTS-CERTIFICATE.pdf";
import goCertificate from "../assets/certificate/golang_basic certificate.pdf";
import sqlCertificate from "../assets/certificate/java_basic certificate.pdf";

const credentials = [
  {
    issuer: "IDP Education",
    title: "IELTS Academic",
    highlight: "7.0",
    subtitle: "Overall Band Score · CEFR C1",
    color: "#d71920",
    file: ieltsCertificate,
  },
  {
    issuer: "Harvard University",
    title: "CS50x",
    highlight: "CS50",
    subtitle: "Introduction to Computer Science",
    color: "#a51c30",
    file: cs50Certificate,
  },
  {
    issuer: "Google for Education",
    title: "Gemini Certified Student",
    highlight: "Gemini",
    subtitle: "Google AI · University",
    color: "#4285f4",
    file: geminiCertificate,
  },
  {
    issuer: "HackerRank",
    title: "SQL (Advanced)",
    highlight: "SQL",
    subtitle: "Skill Certification",
    color: "#00a968",
    file: sqlCertificate,
  },
  {
    issuer: "HackerRank",
    title: "Go (Basic)",
    highlight: "Go",
    subtitle: "Skill Certification",
    color: "#00add8",
    file: goCertificate,
  },
];

export const AboutSection = ({ onOpenResume, onPreview }) => {
  return (
    <section id="about" className="relative z-10 px-4 py-24">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:items-start">
          <div data-reveal className="max-w-2xl text-left">
            <p className="eyebrow">
              <BriefcaseBusiness className="h-3.5 w-3.5 text-primary" />
              About
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
              Building with purpose.
            </h2>
            <p className="mt-6 text-lg leading-8 text-foreground/80">
              I am Phan Thanh Tu, a software engineer who enjoys turning
              practical problems into dependable backend systems and useful AI
              products.
            </p>
            <p className="mt-4 leading-8 text-muted-foreground">
              My work spans API design, authentication, data infrastructure,
              payment flows, and AI-assisted experiences. Teaching programming
              has also shaped how I communicate technical ideas and collaborate
              with people at different levels of experience.
            </p>
            <button
              type="button"
              aria-haspopup="dialog"
              onClick={onOpenResume}
              className="mt-8 inline-flex items-center gap-2 rounded-md border border-primary px-4 py-3 text-sm font-semibold text-primary transition hover:bg-primary/10"
            >
              <BookOpen className="h-4 w-4" />
              View CV
            </button>
          </div>

          <div data-reveal className="surface-panel p-6 text-left">
            <div className="flex items-center gap-3">
              <div className="rounded-md bg-primary/10 p-3 text-primary">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground">
                  Education
                </p>
                <h3 className="text-lg font-bold">
                  Ha Noi University of Mining and Geology
                </h3>
              </div>
            </div>
            <dl className="mt-6 divide-y divide-border border-y border-border">
              <div className="grid grid-cols-[1fr_auto] gap-4 py-4">
                <div>
                  <dt className="font-semibold">IT Engineering</dt>
                  <dd className="mt-1 text-sm text-muted-foreground">
                    Bachelor&apos;s degree
                  </dd>
                </div>
                <dd className="text-sm font-semibold text-primary">Jan 2027</dd>
              </div>
              <div className="grid grid-cols-[1fr_auto] gap-4 py-4">
                <div>
                  <dt className="font-semibold">Academic scholarship</dt>
                  <dd className="mt-1 text-sm text-muted-foreground">
                    Merit-based award
                  </dd>
                </div>
                <dd className="text-sm font-semibold text-primary">3.67/4.0</dd>
              </div>
              <div className="grid grid-cols-[1fr_auto] gap-4 py-4">
                <div>
                  <dt className="font-semibold">Java Basic</dt>
                  <dd className="mt-1 text-sm text-muted-foreground">
                    HackerRank certificate
                  </dd>
                </div>
                <dd className="text-sm font-semibold text-primary">Verified</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-16">
          <div data-reveal className="flex flex-col gap-3 text-left sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">
                <Award className="h-3.5 w-3.5 text-primary" />
                Credentials
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
                Recognized credentials.
              </h2>
            </div>
            <p className="max-w-xl leading-7 text-muted-foreground">
              Verified achievements across English, computer science, AI, and
              backend engineering.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {credentials.map((credential, index) => (
              <button
                key={credential.title}
                type="button"
                data-reveal
                style={{
                  "--credential-color": credential.color,
                  "--reveal-delay": `${index * 70}ms`,
                }}
                className="credential-card group"
                aria-haspopup="dialog"
                aria-label={`View ${credential.title} certificate from ${credential.issuer}`}
                onClick={() => onPreview(credential)}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="credential-issuer">{credential.issuer}</p>
                    <p className="mt-1 text-3xl font-black text-foreground">
                      {credential.highlight}
                    </p>
                  </div>
                  <Eye className="h-5 w-5 text-muted-foreground transition group-hover:text-primary" />
                </div>
                <div className="mt-10 flex items-end justify-between gap-4 border-t border-border pt-5">
                  <div>
                    <p className="text-xl font-black text-foreground">
                      {credential.title}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-muted-foreground">
                      {credential.subtitle}
                    </p>
                  </div>
                  <span className="shrink-0 text-sm font-semibold text-primary">
                    Preview
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};
