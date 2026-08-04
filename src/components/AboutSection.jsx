import {
  Award,
  BookOpen,
  BriefcaseBusiness,
  Eye,
  GraduationCap,
} from "lucide-react";
import ieltsCertificate from "../assets/certificate/IELTS-CERTIFICATE.pdf";
import cs50Preview from "../assets/certificate/cs50_preview.jpg";
import geminiPreview from "../assets/certificate/gemini_preview.jpg";
import goPreview from "../assets/certificate/go_basic_preview.jpg";
import javaCertificate from "../assets/certificate/java_basic_certificate.png";
import sqlPreview from "../assets/certificate/sql_advanced_preview.jpg";

const credentials = [
  {
    issuer: "IDP Education",
    title: "IELTS Academic",
    highlight: "7.0",
    subtitle: "Overall Band Score · CEFR C1",
    tone: "credential-tone-primary",
    file: ieltsCertificate,
    aspectRatio: 0.707,
  },
  {
    issuer: "Harvard University",
    title: "CS50x",
    highlight: "CS50",
    subtitle: "Introduction to Computer Science",
    tone: "credential-tone-secondary",
    image: cs50Preview,
    aspectRatio: 1.294,
  },
  {
    issuer: "Google for Education",
    title: "Gemini Certified Student",
    highlight: "Gemini",
    subtitle: "Google AI · University",
    tone: "credential-tone-muted",
    image: geminiPreview,
    aspectRatio: 1.294,
  },
  {
    issuer: "HackerRank",
    title: "SQL (Advanced)",
    highlight: "SQL",
    subtitle: "Skill Certification",
    tone: "credential-tone-primary",
    image: sqlPreview,
    aspectRatio: 1.312,
  },
  {
    issuer: "HackerRank",
    title: "Go (Basic)",
    highlight: "Go",
    subtitle: "Skill Certification",
    tone: "credential-tone-secondary",
    image: goPreview,
    aspectRatio: 1.312,
  },
  {
    issuer: "HackerRank",
    title: "Java (Basic)",
    highlight: "Java",
    subtitle: "Skill Certification",
    tone: "credential-tone-muted",
    image: javaCertificate,
    aspectRatio: 1.333,
  },
];

export const AboutSection = ({ onOpenResume, onPreview }) => {
  return (
    <section id="about" className="relative z-10 border-b-8 border-black bg-muted px-4 py-24 md:py-28">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:items-start">
          <div data-reveal className="max-w-2xl text-left">
            <p className="eyebrow">
              <BriefcaseBusiness className="h-4 w-4 stroke-[3]" />
              About
            </p>
            <h2 className="mt-6 text-5xl font-black uppercase tracking-[-0.06em] md:text-7xl">
              Building with purpose.
            </h2>
            <p className="mt-7 max-w-[62ch] border-l-4 border-black pl-5 text-lg font-bold leading-8 text-black">
              I am Phan Thanh Tu, a software engineer who enjoys turning
              practical problems into dependable backend systems and useful AI
              products.
            </p>
            <p className="mt-4 max-w-[62ch] leading-8 text-black">
              My work spans API design, authentication, data infrastructure,
              payment flows, and AI-assisted experiences. Teaching programming
              has also shaped how I communicate technical ideas and collaborate
              with people at different levels of experience.
            </p>
            <button
              type="button"
              aria-haspopup="dialog"
              onClick={onOpenResume}
              className="neo-button mt-8"
            >
              <BookOpen className="h-4 w-4" />
              View CV
            </button>
          </div>

          <div data-reveal className="surface-panel p-6 text-left sm:p-8">
            <div className="flex items-center gap-3">
              <div className="border-3 border-black bg-secondary p-3 text-black shadow-neo-xs">
                <GraduationCap className="h-7 w-7 stroke-[3]" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-black">
                  Education
                </p>
                <h3 className="mt-1 text-xl font-black uppercase">
                  Ha Noi University of Mining and Geology
                </h3>
              </div>
            </div>
            <dl className="mt-7 border-3 border-black">
              <div className="grid grid-cols-[1fr_auto] gap-4 py-4">
                <div className="pl-4">
                  <dt className="font-bold">IT Engineering</dt>
                  <dd className="mt-1 text-sm text-black">
                    Bachelor&apos;s degree
                  </dd>
                </div>
                <dd className="mr-4 font-mono text-sm font-bold text-black">Jan 2027</dd>
              </div>
              <div className="grid grid-cols-[1fr_auto] gap-4 border-t-3 border-black bg-secondary py-4">
                <div className="pl-4">
                  <dt className="font-bold">Academic scholarship</dt>
                  <dd className="mt-1 text-sm text-black">
                    Merit-based award
                  </dd>
                </div>
                <dd className="mr-4 text-sm font-bold text-black">3.67/4.0</dd>
              </div>
              <div className="grid grid-cols-[1fr_auto] gap-4 border-t-3 border-black py-4">
                <div className="pl-4">
                  <dt className="font-bold">Java Basic</dt>
                  <dd className="mt-1 text-sm text-black">
                    HackerRank certificate
                  </dd>
                </div>
                <dd className="mr-4 font-mono text-sm font-bold text-black">Verified</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-16">
          <div data-reveal className="flex flex-col gap-3 text-left sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow rotate-1 bg-primary">
                <Award className="h-4 w-4 stroke-[3]" />
                Credentials
              </p>
              <h2 className="mt-6 text-5xl font-black uppercase tracking-[-0.06em] md:text-7xl">
                Recognized credentials.
              </h2>
            </div>
            <p className="max-w-xl border-l-4 border-black pl-4 leading-7 text-black">
              Verified achievements across English, computer science, AI, and
              backend engineering.
            </p>
          </div>

          <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {credentials.map((credential, index) => (
              <button
                key={credential.title}
                type="button"
                data-reveal
                style={{
                  "--reveal-delay": `${index * 70}ms`,
                }}
                className={`credential-card group ${credential.tone}`}
                aria-haspopup="dialog"
                aria-label={`View ${credential.title} certificate from ${credential.issuer}`}
                onClick={() => onPreview(credential)}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="credential-issuer">{credential.issuer}</p>
                    <p className="mt-1 text-3xl font-black text-black">
                      {credential.highlight}
                    </p>
                  </div>
                  <Eye className="h-6 w-6 stroke-[3] text-black" />
                </div>
                <div className="mt-10 flex items-end justify-between gap-4 border-t-3 border-black pt-5">
                  <div>
                    <p className="text-xl font-black uppercase text-black">
                      {credential.title}
                    </p>
                    <p className="mt-2 text-sm font-bold text-black">
                      {credential.subtitle}
                    </p>
                  </div>
                  <span className="shrink-0 border-2 border-black bg-secondary px-2 py-1 text-xs font-bold uppercase text-black">
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
