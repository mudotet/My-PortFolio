import { cn } from "../lib/utills";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed z-40 w-full transition-all duration-300",
        isScrolled
          ? "border-b border-border bg-background/90 py-3 backdrop-blur-xl"
          : "py-5"
      )}
      aria-label="Primary navigation"
    >
      <div className="container flex items-center justify-between">
        <a
          className="group flex items-center text-left text-lg font-bold text-primary"
          href="#hero"
        >
          <span className="mr-3 inline-flex h-9 w-9 items-center justify-center rounded-[0.65rem_0.2rem_0.65rem_0.2rem] bg-primary text-sm text-primary-foreground transition-transform duration-300 group-hover:-rotate-3">
            PT
          </span>
          <span className="relative z-10 leading-tight">
            <span className="block text-foreground">Phan Thanh Tu</span>
            <span className="block font-mono text-[0.65rem] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Backend engineer
            </span>
          </span>
        </a>
        <div className="flex items-center gap-2">
          <div className="mr-2 hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                href={item.href}
                key={item.href}
                className="text-sm font-medium text-foreground/70 transition-colors duration-300 hover:text-primary"
              >
                {item.name}
              </a>
            ))}
          </div>
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="z-50 rounded-md border border-border bg-card p-2 text-foreground transition hover:border-primary md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <div
          className={cn(
            "fixed inset-0 z-50 flex items-center justify-center bg-background/96 backdrop-blur-md transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute right-6 top-6 rounded-md border border-border bg-card p-3 shadow-lg transition hover:border-primary"
            aria-label="Close menu"
          >
            <X size={28} className="text-primary" />
          </button>
          <div className="flex min-w-[70vw] flex-col items-center gap-6 rounded-2xl border border-border bg-card px-10 py-10 shadow-xl">
            {navItems.map((item) => (
              <a
                href={item.href}
                key={item.href}
                className="text-lg font-semibold text-foreground/90 hover:text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
