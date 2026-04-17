import CaseStudyPage from './CaseStudyPage.tsx';
import type {CaseStudy} from '../../../types';

const data: CaseStudy = {
  id: 'example-case-study',
  title: 'Example Case Study',
  tags: ['React', 'TypeScript', 'AWS'],
  summary:
    'A short, punchy sentence that captures the essence of the work and hooks the reader immediately.',
  problem: {
    description: 'Describe what was broken, slow, expensive, or missing. Make the reader understand why this mattered to the business or users.',
    sections: [
      {
        title: 'Problem Overview',
        elements: [
          'Identify the main issue that needed to be addressed.',
          'Explain the impact on users or business operations.',
        ],
      },
    ],
    summary: 'Summarize the key points of the problem section for quick reference.',
  },
  role: {
    description: 'Explain your title, team size, and the specific responsibilities you owned end-to-end on this project.',
    sections: [
      {
        title: 'Role Overview',
        elements: [
          'Describe your role within the team.',
          'Highlight your key contributions and impact.',
        ],
      },
    ],
    summary: 'Summarize the key points of the role section for quick reference.',
  },
  challenges: [
    {
      title: 'Challenge One',
      breakdown: {
        title: 'Challenge Breakdown',
        elements: [
          'Describe the first technical or organizational hurdle you had to clear.',
          'Explain why it was difficult and what made it unique.',
        ],
      },
      highlight: {
        title: 'Key Insight',
        text: 'The most important takeaway or resolution from this challenge.',
      },
    },
    {
      title: 'Challenge Two',
      breakdown: {
        title: 'Challenge Breakdown',
        elements: [
          'Another distinct obstacle — keep each challenge focused on a single theme.',
          'Describe what you did to overcome it.',
        ],
      },
      highlight: {
        title: 'Key Insight',
        text: 'The most important takeaway or resolution from this challenge.',
      },
    },
  ],
  approach: [
    {
      title: 'Strategic Approach',
      description:
        'Walk through the reasoning behind your architectural or strategic choices. What options did you weigh, and why did you go the direction you did?',
      sections: [
        {
          title: 'Approach Details',
          elements: [
            'Describe the first major step or decision in your approach.',
            'Explain a key tradeoff you navigated.',
          ],
        },
      ],
      summary: 'Summarize the overall approach and why it was the right choice.',
    },
  ],
  implementationHighlights: [
    'A concrete technical achievement worth calling out.',
    'Another noteworthy implementation detail or pattern you introduced.',
    'A third highlight — metrics, performance wins, and tooling improvements all work well here.',
  ],
  outcomeAndImpact:
    'Quantify the result wherever possible — latency reduced by X%, churn dropped, revenue grew. Then add any qualitative impact on team culture or process.',
  keyTakeaways: [
    'The single most important lesson you would carry into the next project.',
    'A secondary insight about people, process, or technology.',
    'Anything else that crystallized for you through this experience.',
  ],
};

export default function ExampleCaseStudy() {
  return <CaseStudyPage caseStudy={data}/>;
}