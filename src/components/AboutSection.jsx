import {
  Award,
  BookOpen,
  BriefcaseBusiness,
  ExternalLink,
  GraduationCap,
} from "lucide-react";

export const AboutSection = () => {
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
            <a
              href="/CV_PhanThanhTu_Sofware_Engineer_Intern.pdf"
              className="mt-8 inline-flex items-center gap-2 rounded-md border border-primary px-4 py-3 text-sm font-semibold text-primary transition hover:bg-primary/10"
            >
              <BookOpen className="h-4 w-4" />
              View CV
            </a>
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
              External proof of English proficiency and computer science
              foundations.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-[0.86fr_1.14fr]">
            <a
              data-reveal
              href="https://drive.google.com/file/d/1j4uye_QR5KcdsJd9S9wPH7O_LYotB9ni/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="credential-card credential-ielts group"
              aria-label="View IELTS 7.0 certificate from IDP Education"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-[#d71920] dark:text-[#ff858a]">
                    IDP EDUCATION
                  </p>
                  <p className="mt-1 text-3xl font-black text-foreground">IELTS</p>
                </div>
                <ExternalLink className="h-5 w-5 text-muted-foreground transition group-hover:text-primary" />
              </div>
              <div className="mt-10 flex items-end justify-between gap-4 border-t border-border pt-5">
                <div>
                  <p className="text-5xl font-black text-foreground">7.0</p>
                  <p className="mt-1 text-sm font-semibold text-muted-foreground">
                    Overall Band Score
                  </p>
                </div>
                <span className="text-sm font-semibold text-primary">
                  View credential
                </span>
              </div>
            </a>

            <a
              data-reveal
              style={{ "--reveal-delay": "100ms" }}
              href="https://certificates.cs50.io/c24e4e3b-87d1-49b7-afb1-79a9426b6054.pdf?size=letter"
              target="_blank"
              rel="noreferrer"
              className="credential-card credential-cs50 group"
              aria-label="View CS50x certificate from Harvard University"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-[#a51c30] dark:text-[#f08b9a]">
                    HARVARD UNIVERSITY
                  </p>
                  <p className="mt-1 text-3xl font-black text-foreground">CS50</p>
                </div>
                <ExternalLink className="h-5 w-5 text-muted-foreground transition group-hover:text-primary" />
              </div>
              <div className="mt-10 flex items-end justify-between gap-4 border-t border-border pt-5">
                <div>
                  <p className="text-3xl font-black text-foreground">CS50x</p>
                  <p className="mt-2 text-sm font-semibold text-muted-foreground">
                    Introduction to Computer Science
                  </p>
                </div>
                <span className="shrink-0 text-sm font-semibold text-primary">
                  View credential
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
