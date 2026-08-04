import { useEffect, useRef, useState } from "react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Stack" },
  { id: "contact", label: "Contact" },
];

export const MotionEffects = () => {
  const progressRef = useRef(null);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    let frameId;

    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;

      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${Math.min(
          Math.max(progress, 0),
          1
        )})`;
      }
      frameId = undefined;
    };

    const handleScroll = () => {
      if (!frameId) frameId = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", handleScroll, { passive: true });

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-38% 0px -52%", threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) sectionObserver.observe(section);
    });

    return () => {
      if (frameId) window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", handleScroll);
      sectionObserver.disconnect();
    };
  }, []);

  const activeIndex = Math.max(
    sections.findIndex((section) => section.id === activeSection),
    0
  );

  return (
    <>
      <div className="scroll-progress" aria-hidden="true">
        <span ref={progressRef} />
      </div>
      <div className="section-indicator" aria-hidden="true">
        <span className="section-indicator-number">
          {String(activeIndex + 1).padStart(2, "0")}
        </span>
        <span className="section-indicator-track">
          <span
            style={{
              transform: `scaleY(${(activeIndex + 1) / sections.length})`,
            }}
          />
        </span>
        <span className="section-indicator-label">
          {sections[activeIndex].label}
        </span>
      </div>
    </>
  );
};
