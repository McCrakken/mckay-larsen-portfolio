import { useRef } from 'react';
import {motion, useInView, type Variants} from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Work() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="work" className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <p className="text-sm font-medium text-[#378ADD] tracking-widest uppercase mb-2">
            Selected Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-slate-900 dark:text-white">
            Projects
          </h2>
        </div>

        {/* Grid */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={cardVariant}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}