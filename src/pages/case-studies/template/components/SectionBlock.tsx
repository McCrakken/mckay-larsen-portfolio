import type {CaseStudySectionBlock} from "../../../../types";
import {motion} from "framer-motion";
import { SectionHeading } from "./SectionHeader";
import {fadeUp} from "../utils.ts";

export function SectionBlock({section, title}: {section: CaseStudySectionBlock, title?: string}) {
  return (
    <motion.section variants={fadeUp} className="mb-0">
      <SectionHeading>{title}</SectionHeading>
      <p className="text-base md:text-lg leading-relaxed">{section.description}</p>
      {section.sections?.map(section => (
        <div key={section.title} className="mt-6">
          <p className="font-display text-lg md:text-2xl text-slate-900 dark:text-white leading-[1.05] tracking-tight mb-4">
            {section.title}
          </p>
          <ul className="list-disc list-outside ml-6 mb-4">
            {section.elements.map(item => (
              <li key={item} className="text-base md:text-lg leading-relaxed mb-2">{item}</li>
            ))}
          </ul>
        </div>
      ))}
      {section.code && (
        <div className="mt-8 mb-8 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
          <div className="flex items-center justify-between px-4 py-2 bg-slate-200/50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
            <span className="text-xs font-mono text-slate-500">{section.language || 'code'}</span>
          </div>
          <pre className="p-4 overflow-x-auto text-sm font-mono leading-relaxed text-slate-800 dark:text-slate-200">
            <code>{section.code}</code>
          </pre>
        </div>
      )}
      {section.imageUrl && (
        <figure className="mt-8 mb-8">
          <img
            src={section.imageUrl}
            alt={section.imageAlt || ''}
            className="rounded-xl border border-slate-200 dark:border-slate-800 shadow-lg w-full h-auto"
          />
          {section.imageAlt && (
            <figcaption className="mt-3 text-center text-sm text-slate-500 italic">
              {section.imageAlt}
            </figcaption>
          )}
        </figure>
      )}
      <p className="text-base md:text-lg leading-relaxed">{section.summary}</p>
    </motion.section>
  )
}