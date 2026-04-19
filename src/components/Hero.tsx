import {motion, type Variants} from 'framer-motion';

const techTags = ['TypeScript', 'React', 'React Native', 'Node.js', 'AWS'];

const container: Variants = {
  hidden: {opacity: 0},
  show: {
    opacity: 1,
    transition: {staggerChildren: 0.15},
  },
};

const item: Variants = {
  hidden: {opacity: 0, y: 24},
  show: {opacity: 1, y: 0, transition: {duration: 0.5, ease: 'easeOut'}},
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[90vh] flex items-center justify-center px-6 py-24"
    >
      <motion.div
        className="max-w-3xl w-full flex flex-col items-start gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={item}
          className="text-sm font-medium text-accent tracking-widest uppercase"
        >
          Senior Software Engineer
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-6xl md:text-7xl text-slate-900 dark:text-white leading-[1.05] tracking-tight"
        >
          McKay Larsen
        </motion.h1>

        <motion.p
          variants={item}
          className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed"
        >
          Less friction, more flow: Building software with the mind in mind.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-2">
          {techTags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.div variants={item} className="flex gap-4 mt-2">
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg bg-accent hover:bg-accent-dark text-white text-sm font-semibold transition-colors shadow-sm"
          >
            Get in touch
          </a>
          <a
            href="#work"
            className="px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:border-accent hover:text-accent transition-colors"
          >
            See my work
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}