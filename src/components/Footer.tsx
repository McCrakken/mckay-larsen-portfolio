export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-slate-400 dark:text-slate-500">
        <span>© {new Date().getFullYear()} McKay Larsen. All rights reserved.</span>
        <span>
          Built with React, TypeScript &amp; Tailwind CSS
        </span>
      </div>
    </footer>
  );
}