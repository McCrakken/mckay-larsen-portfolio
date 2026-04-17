import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';
import type {CaseStudy} from '../../../types';
import {SectionDivider} from "./components/SectionDivider.tsx";
import {SectionBlock} from "./components/SectionBlock.tsx";
import {SectionHeading} from "./components/SectionHeader.tsx";
import {Tag} from "./components/Tag.tsx";
import {fadeUp, stagger} from "./utils.ts";
import {Callout} from "./components/Callout.tsx";
import Nav from "../../../components/Nav.tsx";
import Footer from "../../../components/Footer.tsx";

interface CaseStudyPageProps {
  caseStudy: CaseStudy;
}
// ── Main component ────────────────────────────────────────────────────────────

export default function CaseStudyPage({caseStudy}: CaseStudyPageProps) {
  const {
    title,
    tags,
    summary,
    problem,
    role,
    challenges,
    approach,
    implementationHighlights,
    outcomeAndImpact,
    keyTakeaways,
  } = caseStudy;

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 font-sans">
      <Nav />

      {/* ── Back nav ── */}
      <div className="max-w-3xl mx-auto px-6 pt-8">
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-accent dark:hover:text-accent transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Case Studies
        </Link>
      </div>

      <motion.article
        className="max-w-3xl mx-auto px-6 py-16"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        {/* ── Hero ── */}
        <motion.header variants={fadeUp} className="mb-12">
          <div className="flex flex-wrap gap-2 mb-5">
            {tags.map((tag) => (
              <Tag key={tag} label={tag}/>
            ))}
          </div>
          <h1
            className="font-display text-5xl md:text-6xl text-slate-900 dark:text-white leading-[1.05] tracking-tight mb-6">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 leading-relaxed">
            {summary}
          </p>
        </motion.header>
        <SectionDivider/>

        {/* ── Problem ── */}
        <SectionBlock section={problem} title={'The Problem'}/>
        <SectionDivider/>

        {/* ── My Role ── */}
        <SectionBlock section={role} title={'My Role'}/>
        <SectionDivider/>

        {/* ── Key Challenges ── */}
        <motion.section variants={fadeUp}>
          <SectionHeading>Key Challenges</SectionHeading>
          <motion.div
            className="flex flex-col gap-4 mt-6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{once: true}}
          >
            {challenges.map((challenge, i) => (
              <Callout callout={challenge} key={i} />
            ))}
          </motion.div>
        </motion.section>

        <SectionDivider/>

        {/* ── Approach & Key Decisions ── */}
        <motion.section variants={fadeUp}>
          <SectionHeading>Approach &amp; Key Decisions</SectionHeading>
          {approach.map(section => {
            return <SectionBlock section={section} title={section.title} />
          })}
        </motion.section>

        <SectionDivider/>

        {/* ── Implementation Highlights ── */}
        <motion.section variants={fadeUp}>
          <SectionHeading>Implementation Highlights</SectionHeading>
          <ul className="mt-4 flex flex-col gap-3">
            {implementationHighlights.map((highlight, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 shrink-0 w-2 h-2 rounded-full bg-accent"/>
                <span className="text-base md:text-lg leading-relaxed">{highlight}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        <SectionDivider/>

        {/* ── Outcome & Impact ── */}
        <motion.section variants={fadeUp}>
          <SectionHeading>Outcome &amp; Impact</SectionHeading>
          <p className="text-base md:text-lg leading-relaxed">{outcomeAndImpact}</p>
        </motion.section>

        <SectionDivider/>

        {/* ── Key Takeaways ── */}
        <motion.section variants={fadeUp}>
          <SectionHeading>Key Takeaways</SectionHeading>
          <ul className="mt-4 flex flex-col gap-3">
            {keyTakeaways.map((takeaway, i) => (
              <li
                key={i}
                className="flex items-start gap-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 px-5 py-4"
              >
                <span className="font-display text-accent text-xl leading-none mt-0.5 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-base leading-relaxed">{takeaway}</span>
              </li>
            ))}
          </ul>
        </motion.section>
      </motion.article>
      <Footer />
    </div>
  );
}