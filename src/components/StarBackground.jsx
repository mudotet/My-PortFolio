export const StarBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="ambient-grid absolute inset-0 opacity-45" />
      <div className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-primary/45 to-transparent" />
      <div className="absolute inset-x-0 top-20 h-56 bg-linear-to-b from-primary/5 to-transparent" />
      <div className="ambient-sweep absolute inset-x-0 top-0 h-px" />
    </div>
  );
};
