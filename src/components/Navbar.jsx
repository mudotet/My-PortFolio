import { cn } from "../lib/utills";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
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
        "fixed z-40 w-full border-b-4 border-black transition-all duration-100",
        isScrolled
          ? "bg-background py-2 shadow-neo-bottom"
          : "bg-secondary py-3"
      )}
      aria-label="Primary navigation"
    >
      <div className="container flex items-center justify-between">
        <a
          className="group flex items-center text-left text-lg font-black text-black"
          href="#hero"
        >
          <span className="mr-3 inline-flex h-10 w-10 items-center justify-center border-3 border-black bg-primary text-sm font-black text-black shadow-neo-xs transition-transform duration-100 group-hover:-rotate-3">
            PT
          </span>
          <span className="relative z-10 leading-tight">
            <span className="block text-black">Phan Thanh Tu</span>
            <span className="block text-[0.65rem] font-bold uppercase tracking-[0.14em] text-black">
              Backend engineer
            </span>
          </span>
        </a>
        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                href={item.href}
                key={item.href}
                className="inline-flex min-h-11 items-center border-2 border-transparent px-2 py-1 text-xs font-black uppercase tracking-wide text-black transition duration-100 hover:border-black hover:bg-primary"
              >
                {item.name}
              </a>
            ))}
          </div>
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="neo-icon-button z-50 bg-primary md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-muted md:hidden">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="neo-icon-button absolute right-6 top-6 bg-primary"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
            <div className="flex min-w-[78vw] -rotate-1 flex-col items-stretch gap-3 border-4 border-black bg-card px-6 py-8 shadow-neo-lg sm:min-w-[28rem]">
              {navItems.map((item) => (
                <a
                  href={item.href}
                  key={item.href}
                  className="border-3 border-black bg-background px-5 py-3 text-left text-xl font-black uppercase text-black transition duration-100 hover:translate-x-1 hover:bg-secondary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
