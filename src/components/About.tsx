import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="about" className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="text-sm font-medium text-accent tracking-widest uppercase mb-2">
            Background
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-slate-900 dark:text-white">
            About
          </h2>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
        >
          {/* Left: Bio */}
          <div className="flex flex-col gap-4 text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              I'm a software engineer with <strong className="text-slate-800 dark:text-slate-200">8+ years of experience</strong> building
              production web and mobile applications. I specialize in the React ecosystem — React,
              React Native, and TypeScript — and I've shipped across fintech, identity security, and
              enterprise SaaS domains.
            </p>
            <p>
              Most recently at <strong className="text-slate-800 dark:text-slate-200">Koin</strong> (Las Vegas) I built a cross-platform
              mobile payment app and led a security hardening effort that eliminated 600+ vulnerabilities
              in a legacy Angular admin portal.
            </p>
            <p>
              I hold an active <strong className="text-slate-800 dark:text-slate-200">Nevada Gaming Control Board license</strong>{' '}
              (#R4210330), a requirement for software engineers working in the regulated gaming
              industry.
            </p>
          </div>

          {/* Right: Psychology Angle callout */}
          <div className="rounded-2xl border border-accent/30 bg-accent/5 dark:bg-accent/10 p-6 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🧠</span>
              <h3 className="font-display text-xl text-slate-900 dark:text-white">
                The Psychology Angle
              </h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              I hold a dual BS in <strong className="text-slate-800 dark:text-slate-200">Software Engineering</strong> (Utah Valley University)
              and <strong className="text-slate-800 dark:text-slate-200">Psychology</strong> (Southern Utah University). That combination is
              intentional — I apply behavioral science to UX decisions, bridging how systems are
              built with how people actually use them.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              I'm a published researcher on the behavioral and motivational predictors of
              procrastination — work that directly informs how I think about friction, onboarding,
              and engagement in product design.
            </p>
            <a
              href="https://doi.org/10.24839/2325-7342.JN28.1.52"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Read the published paper
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}