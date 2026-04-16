import type {CaseStudySectionBlock} from "../../../../types";
import {motion} from "framer-motion";
import { SectionHeading } from "./SectionHeader";
import {fadeUp} from "../utils.ts";

export function SectionBlock({section, title}: {section: CaseStudySectionBlock, title: string}) {
  return (
    <motion.section variants={fadeUp} className="mb-0">
      <SectionHeading>{title}</SectionHeading>
      <p className="text-base md:text-lg leading-relaxed">{section.description}</p>
      {section.sections?.map(section => (
        <div key={section.title} className="mt-6">
          <p className="font-display text-lg md:text-2xl text-slate-900 dark:text-white leading-[1.05] tracking-tight mb-4">
            {section.title}
          </p>
          <ul className="list-disc list-inside mb-4">
            {section.elements.map(item => (
              <li key={item} className="text-base md:text-lg leading-relaxed">{item}</li>
            ))}
          </ul>
        </div>
      ))}
      <p className="text-base md:text-lg leading-relaxed">{section.summary}</p>
    </motion.section>
  )
}