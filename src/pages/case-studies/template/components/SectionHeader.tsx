export function SectionHeading({children}: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-3xl md:text-4xl text-slate-900 dark:text-white mb-4 leading-snug">
      {children}
    </h2>
  );
}