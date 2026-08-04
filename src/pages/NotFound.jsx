import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <main className="relative grid min-h-dvh place-items-center overflow-hidden bg-primary px-6 text-black">
      <div className="ambient-grid pointer-events-none absolute inset-0" />
      <section className="surface-panel relative z-10 max-w-2xl -rotate-1 p-8 text-left sm:p-12">
        <p className="inline-flex border-3 border-black bg-secondary px-3 py-1 font-mono text-sm font-bold tracking-[0.2em] text-black shadow-neo-xs">
          ERROR / 404
        </p>
        <h1 className="mt-7 text-6xl font-black uppercase leading-[0.85] tracking-[-0.07em] sm:text-8xl">
          This route ends here.
        </h1>
        <p className="mt-7 max-w-xl border-l-4 border-black pl-5 text-lg leading-8 text-black">
          The page may have moved, or the address may be incomplete. The main
          portfolio is still online.
        </p>
        <Link to="/" className="neo-button mt-9">
          <ArrowLeft className="h-4 w-4" />
          Back to portfolio
        </Link>
      </section>
    </main>
  );
};
