import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { Project } from '../types';

const badgeColors: Record<string, string> = {
  blue: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  green: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
  orange: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300',
  purple: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
};

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  const { title, description, badge, tags, link, caseStudyUrl } = project;

  return (
    <motion.article
      whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0,0,0,0.10)' }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="flex flex-col gap-4 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
    >
      {/* Badge */}
      <span
        className={`self-start px-2.5 py-0.5 rounded-full text-xs font-semibold ${badgeColors[badge.variant]}`}
      >
        {badge.label}
      </span>

      {/* Title */}
      <h3 className="font-display text-xl text-slate-900 dark:text-white">
        {title}
      </h3>

      {/* Description bullets */}
      <ul className="flex flex-col gap-2 flex-1">
        {description.map((point, i) => (
          <li key={i} className="flex gap-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#378ADD] shrink-0" />
            {point}
          </li>
        ))}
      </ul>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-xs rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Optional links */}
      <div className="flex items-center gap-4">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-[#378ADD] hover:underline"
          >
            View project →
          </a>
        )}
        {caseStudyUrl && (
          <Link
            to={caseStudyUrl}
            className="text-xs font-medium text-accent hover:underline"
          >
            Read case study →
          </Link>
        )}
      </div>
    </motion.article>
  );
}