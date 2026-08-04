export const StarBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="ambient-grid absolute inset-0" />
      <div className="halftone-patch absolute -right-20 top-28 h-72 w-72 rotate-6" />
      <div className="absolute -left-10 top-[42rem] h-36 w-36 rotate-12 border-4 border-black bg-muted shadow-neo-md" />
    </div>
  );
};
