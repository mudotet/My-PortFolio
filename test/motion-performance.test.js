import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const source = (path) => readFile(new URL(path, import.meta.url), "utf8");

test("post-welcome content keeps layered reveals within smooth timing budgets", async () => {
  const [main, home, hero, css, ...sections] = await Promise.all([
    source("../src/main.jsx"),
    source("../src/pages/Home.jsx"),
    source("../src/components/HeroSection.jsx"),
    source("../src/index.css"),
    source("../src/components/AboutSection.jsx"),
    source("../src/components/ProjectsSection.jsx"),
    source("../src/components/ExperienceSection.jsx"),
    source("../src/components/SkillsSection.jsx"),
    source("../src/components/ContactSection.jsx"),
  ]);

  assert.match(
    main,
    /classList\.add\(['"]reveal-ready['"]\)[\s\S]*createRoot/
  );
  assert.match(home, /IntersectionObserver/);
  assert.match(home, /rootMargin:\s*["']0px 0px -14% 0px["']/);
  assert.doesNotMatch(home, /classList\.add\(['"]reveal-ready['"]\)/);
  assert.match(hero, /hero-character/);
  assert.match(hero, /\$\{40 \+ index \* 16\}ms/);
  assert.match(css, /--animate-fade-in:\s*fade-in 180ms cubic-bezier/);
  assert.doesNotMatch(css, /fade-in[^;]*steps/);

  const revealRule = css.match(
    /\.reveal-ready \[data-reveal\] \{([\s\S]*?)\n\}/
  )?.[1] ?? "";
  assert.match(revealRule, /opacity:\s*0/);
  assert.match(revealRule, /translate3d/);
  assert.match(revealRule, /280ms/);
  assert.doesNotMatch(revealRule, /steps|transition-delay/);

  assert.deepEqual(
    sections.map((section) => section.match(/data-reveal/g)?.length ?? 0),
    [4, 3, 2, 5, 3]
  );

  const staggerSteps = sections.flatMap((section) =>
    [...section.matchAll(/index \* (\d+)/g)].map((match) => Number(match[1]))
  );
  assert.ok(staggerSteps.length > 0);
  assert.ok(staggerSteps.every((step) => step <= 20));
  assert.equal(
    sections.join("\n").match(/Math\.min\(index \* 20, 120\)/g)?.length,
    5
  );
});
