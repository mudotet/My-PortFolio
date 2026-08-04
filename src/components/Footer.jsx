import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative z-10 bg-secondary px-4 py-8">
      <div className="section-shell flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs font-bold uppercase tracking-wide text-black">
          &copy; {new Date().getFullYear()} Phan Thanh Tu. Designed and built in
          Ha Noi.
        </p>
        <a
          href="#hero"
          className="neo-icon-button bg-card"
          aria-label="Back to top"
        >
          <ArrowUp size={22} strokeWidth={3} />
        </a>
      </div>
    </footer>
  );
};
