import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <main className="relative grid min-h-dvh place-items-center overflow-hidden bg-background px-6 text-foreground">
      <div className="ambient-grid pointer-events-none absolute inset-0 opacity-50" />
      <section className="relative z-10 max-w-2xl text-left">
        <p className="font-mono text-sm font-semibold tracking-[0.2em] text-primary">
          ERROR / 404
        </p>
        <h1 className="mt-5 text-6xl font-semibold leading-[0.9] tracking-[-0.06em] sm:text-8xl">
          This route ends here.
        </h1>
        <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">
          The page may have moved, or the address may be incomplete. The main
          portfolio is still online.
        </p>
        <Link to="/" className="cosmic-button mt-9">
          <ArrowLeft className="h-4 w-4" />
          Back to portfolio
        </Link>
      </section>
    </main>
  );
};
