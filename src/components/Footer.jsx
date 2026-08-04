import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative z-10 bg-secondary px-4 py-8">
      <div className="section-shell flex flex-wrap items-center justify-between gap-4">
        <p className="font-mono text-xs font-bold uppercase tracking-wide text-black">
          &copy; {new Date().getFullYear()} Phan Thanh Tu. Designed and built in
          Ha Noi.
        </p>
        <a
          href="#hero"
          className="inline-flex h-12 w-12 items-center justify-center border-3 border-black bg-card text-black shadow-neo-xs transition duration-100 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
          aria-label="Back to top"
        >
          <ArrowUp size={22} strokeWidth={3} />
        </a>
      </div>
    </footer>
  );
};
