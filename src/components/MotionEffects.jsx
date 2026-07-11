import { useEffect, useRef, useState } from "react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Stack" },
  { id: "projects", label: "Work" },
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

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const parallaxElements = [...document.querySelectorAll("[data-parallax]")];
    const cleanupParallax = [];

    if (!reduceMotion && finePointer) {
      parallaxElements.forEach((element) => {
        const maxTilt = element.dataset.parallax === "hero" ? 4 : 2.5;

        const handlePointerMove = (event) => {
          const rect = element.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width;
          const y = (event.clientY - rect.top) / rect.height;

          element.style.setProperty("--tilt-x", `${(0.5 - y) * maxTilt * 2}deg`);
          element.style.setProperty("--tilt-y", `${(x - 0.5) * maxTilt * 2}deg`);
          element.style.setProperty("--shine-x", `${x * 240 - 120}%`);
        };

        const resetPointer = () => {
          element.style.setProperty("--tilt-x", "0deg");
          element.style.setProperty("--tilt-y", "0deg");
          element.style.setProperty("--shine-x", "-140%");
        };

        element.addEventListener("pointermove", handlePointerMove);
        element.addEventListener("pointerleave", resetPointer);
        cleanupParallax.push(() => {
          element.removeEventListener("pointermove", handlePointerMove);
          element.removeEventListener("pointerleave", resetPointer);
        });
      });
    }

    return () => {
      if (frameId) window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", handleScroll);
      sectionObserver.disconnect();
      cleanupParallax.forEach((cleanup) => cleanup());
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
