import { useRef } from 'react';
import {motion, useInView, type Variants} from 'framer-motion';

const skillGroups = [
  {
    label: 'Frontend',
    skills: ['TypeScript', 'JavaScript ES6+', 'React', 'React Native', 'Angular', 'Tailwind CSS', 'Framer Motion', 'HTML5 / CSS3'],
  },
  {
    label: 'Backend & Cloud',
    skills: ['Node.js', 'AWS', 'Firebase', 'Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB', 'REST / GraphQL'],
  },
  {
    label: 'Tooling & Testing',
    skills: ['Git', 'GitHub Actions', 'GitLab CI/CD', 'Vite', 'Jest', 'React Testing Library', 'ESLint', 'Prettier'],
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: 'easeOut' },
  }),
};

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="text-sm font-medium text-accent tracking-widest uppercase mb-2">
            Capabilities
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-slate-900 dark:text-white">
            Skills
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
            >
              <h3 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}