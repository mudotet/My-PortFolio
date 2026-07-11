import { cn } from "../lib/utills";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

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
          ? "border-b border-border bg-background/86 py-3 shadow-sm backdrop-blur-md"
          : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="flex items-center text-left text-lg font-bold text-primary"
          href="#hero"
        >
          <span className="mr-3 inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary text-sm text-primary-foreground">
            PT
          </span>
          <span className="relative z-10 leading-tight">
            <span className="block text-foreground">Phan Thanh Tu</span>
            <span className="block text-xs font-semibold text-muted-foreground">
              Software Engineer
            </span>
          </span>
        </a>
        <div className="hidden md:flex space-x-6">
          {navItems.map((item, key) => (
            <a
              href={item.href}
              key={key}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="z-50 rounded-md border border-border bg-card p-2 text-foreground md:hidden"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
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
            aria-label="Close Menu"
          >
            <X size={28} className="text-primary" />
          </button>
          <nav className="flex min-w-[70vw] flex-col items-center gap-6 rounded-lg border border-border bg-card px-10 py-10 shadow-xl">
            {navItems.map((item, key) => (
              <a
                href={item.href}
                key={key}
                className="text-lg font-semibold text-foreground/90 hover:text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </nav>
  );
};
