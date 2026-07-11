import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-border bg-card px-4 py-8">
      <div className="section-shell flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Phan Thanh Tu. Personal portfolio,
          built with care.
        </p>
        <a
          href="#hero"
          className="rounded-md border border-border bg-background p-2 text-primary transition-colors hover:border-primary hover:bg-primary/10"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};
