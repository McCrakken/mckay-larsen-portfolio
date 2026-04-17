import {useState, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import * as React from "react";

const links = [
  {label: 'Case Studies', href: '/case-studies'},
  {label: 'Work', href: '/#work'},
  {label: 'Skills', href: '/#skills'},
  {label: 'About', href: '/#about'},
  {label: 'Contact', href: '/#contact'},
];

const hashLinks = links
  .filter(l => l.href.startsWith('/#'))
  .map(l => l.href.replace('/#', ''));

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      const timer = setTimeout(() => setActiveSection(null), 0);
      return () => clearTimeout(timer);
    }

    const NAV_HEIGHT = 64; // px, matches h-16

    const onScroll = () => {
      const scrollY = window.scrollY + NAV_HEIGHT + 8;
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;

      if (atBottom) {
        setActiveSection(hashLinks[hashLinks.length - 1]);
        return;
      }

      // Find the last section whose top is at or above the current scroll position
      let current: string | null = null;
      for (const id of hashLinks) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top + window.scrollY <= scrollY) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', onScroll, {passive: true});
    onScroll(); // set initial state

    return () => window.removeEventListener('scroll', onScroll);
  }, [location.pathname]);

  const handleHashLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#') && location.pathname === '/') {
      e.preventDefault();
      const id = href.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({behavior: 'smooth'});
      }
    }
  };

  const isActive = (href: string) => {
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '');
      return location.pathname === '/' && activeSection === id;
    }
    return location.pathname === href || location.pathname.startsWith(href + '/');
  };

  const linkClass = (href: string) =>
    isActive(href)
      ? 'text-sm font-medium text-accent transition-colors'
      : 'text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-accent transition-colors';

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur border-b border-slate-200 dark:border-slate-800">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Name */}
        <Link
          to="/"
          className="font-display text-xl font-semibold text-slate-900 dark:text-white tracking-tight hover:text-accent transition-colors"
        >
          McKay Larsen
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href} className="relative flex flex-col items-center">
              <Link
                to={l.href}
                onClick={(e) => handleHashLink(e, l.href)}
                className={linkClass(l.href)}
              >
                {l.label}
              </Link>
              {isActive(l.href) && (
                <span className="absolute -bottom-4.5 left-0 right-0 h-0.5 bg-accent rounded-full" />
              )}
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <ul className="md:hidden px-6 pb-4 flex flex-col gap-4 border-t border-slate-200 dark:border-slate-800 pt-4">
          {links.map((l) => (
            <li key={l.href} className="flex items-center gap-2">
              {isActive(l.href) && (
                <span className="w-0.5 h-4 bg-accent rounded-full shrink-0" />
              )}
              <Link
                to={l.href}
                className={linkClass(l.href)}
                onClick={(e) => {
                  setOpen(false);
                  handleHashLink(e, l.href);
                }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}