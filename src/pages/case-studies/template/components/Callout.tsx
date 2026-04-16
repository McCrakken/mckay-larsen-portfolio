import type {CaseStudyCallout} from "../../../../types";
import {motion} from "framer-motion";
import {fadeUp} from "../utils.ts";
import {BlockQuote} from "./BlockQuote.tsx";

export function Callout({callout, key}: {callout: CaseStudyCallout, key?: number}) {
  return (
    <motion.div
      key={key}
      variants={fadeUp}
      className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-6"
    >
      <h3 className="font-semibold text-slate-900 dark:text-white text-lg mb-2">
        {callout.title}
      </h3>
      <p className="leading-relaxed mb-2">{callout.breakdown.title}</p>
      <ul className="list-disc list-inside">
        {callout.breakdown.elements.map((element, index) => (
          <li key={index} className="mb-2">
            {element}
          </li>
        ))}
      </ul>
      <p className="leading-relaxed mt-3 mb-1">{callout.highlight.title}</p>
      {callout.highlight?.text && (
        <BlockQuote quote={callout.highlight.text} />
      )}
    </motion.div>
  )
}