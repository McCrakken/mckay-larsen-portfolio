import {useState} from 'react';

const links = [
  {label: 'Work', href: '#work'},
  {label: 'Skills', href: '#skills'},
  {label: 'About', href: '#about'},
  {label: 'Contact', href: '#contact'},
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur border-b border-slate-200 dark:border-slate-800">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Name */}
        <a
          href="#hero"
          className="font-display text-xl font-semibold text-slate-900 dark:text-white tracking-tight hover:text-accent transition-colors"
        >
          McKay Larsen
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-accent transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-md text-slate-600 dark:text-slate-400 hover:text-accent transition-colors"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"/>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <ul className="md:hidden px-6 pb-4 flex flex-col gap-4 border-t border-slate-200 dark:border-slate-800 pt-4">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-accent transition-colors"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}