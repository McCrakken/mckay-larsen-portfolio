export function Tag({label}: { label: string }) {
  return (
    <span
      className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
      {label}
    </span>
  );
}