import {useRef} from 'react';
import {motion, useInView, type Variants} from 'framer-motion';
import {Link} from 'react-router-dom';
import {projects} from '../../data/projects';
import {Tag} from './template/components/Tag';
import {fadeUp, stagger} from './template/utils';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

const cardVariant: Variants = {
  hidden: {opacity: 0, y: 32},
  show: {opacity: 1, y: 0, transition: {duration: 0.5, ease: 'easeOut'}},
};

export default function CaseStudiesLanding() {
  const caseStudyProjects = projects.filter(p => p.caseStudyUrl);
  const listRef = useRef<HTMLDivElement>(null);
  const inView = useInView(listRef, {once: true, margin: '-80px'});

  return (
    <div className="min-h-screen">
      <Nav />

      <motion.main
        className="max-w-3xl mx-auto px-6 py-20"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <motion.header variants={fadeUp} className="mb-16">
          <h1 className="font-display text-5xl md:text-7xl text-slate-900 dark:text-white leading-[1.05] tracking-tight mb-6">
            Case Studies
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
            Deep dives into technical challenges, architectural decisions, and the reasoning behind the work.
          </p>
        </motion.header>

        {caseStudyProjects.length > 0 ? (
          <motion.div
            ref={listRef}
            className="space-y-8"
            variants={stagger}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            {caseStudyProjects.map((project) => (
              <motion.div key={project.id} variants={cardVariant}>
                <Link
                  to={project.caseStudyUrl!}
                  className="group block p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                    <div className="flex-1 space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map(tag => (
                          <Tag key={tag} label={tag} />
                        ))}
                      </div>
                      <h2 className="font-display text-3xl md:text-4xl text-slate-900 dark:text-white group-hover:text-accent transition-colors">
                        {project.title}
                      </h2>
                      <p className="text-lg text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                        {project.description[0]}
                      </p>
                    </div>
                    <div className="shrink-0 flex items-center gap-2 text-accent font-medium mt-2">
                      Read case study
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="group-hover:translate-x-1 transition-transform"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div variants={fadeUp} className="text-center py-20 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl">
            <p className="text-slate-500">More case studies coming soon.</p>
          </motion.div>
        )}
      </motion.main>

      <Footer />
    </div>
  );
}