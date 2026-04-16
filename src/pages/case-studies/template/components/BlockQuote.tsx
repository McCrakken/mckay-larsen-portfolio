import {motion} from "framer-motion";
import {fadeUp} from "../utils.ts";

export function BlockQuote({quote}: {quote?: string}) {
  return (
    <motion.blockquote
      variants={fadeUp}
      className="border-l-4 border-slate-200 dark:border-slate-800 pl-4 text-slate-600 dark:text-slate-400"
    >
      {quote}
    </motion.blockquote>
  )
}