import { useEffect, useState } from "react";
import { MotionEffects } from "../components/MotionEffects";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { PdfDialog } from "../components/PdfDialog";
import { ExperienceSection } from "../components/ExperienceSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { WelcomeSequence } from "../components/WelcomeSequence";
import resumeFile from "../assets/resume/PHAN_THANH_TU_CV_SOFTWARE_ENGINEER_GENERAL.pdf";
import resumePreviewImage from "../assets/resume/PHAN_THANH_TU_CV_SOFTWARE_ENGINEER_GENERAL-preview.png";

const resumePreview = {
  issuer: "Resume",
  title: "Phan Thanh Tu · Software Engineer",
  file: resumeFile,
  image: resumePreviewImage,
  aspectRatio: 0.773,
};

export const Home = () => {
  const [pdfPreview, setPdfPreview] = useState(null);

  useEffect(() => {
    const root = document.documentElement;
    const elements = document.querySelectorAll("[data-reveal]");

    root.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px" }
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      root.classList.remove("reveal-ready");
    };
  }, []);

  const openResume = () => setPdfPreview(resumePreview);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <WelcomeSequence />
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <MotionEffects />
      <StarBackground />
      <Navbar />
      <main id="main-content">
        <HeroSection onOpenResume={openResume} />
        <AboutSection onOpenResume={openResume} onPreview={setPdfPreview} />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <PdfDialog preview={pdfPreview} onClose={() => setPdfPreview(null)} />
      <Footer />
    </div>
  );
};
