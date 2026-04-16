import CaseStudyPage from '../template/CaseStudyPage.tsx';
import type {CaseStudy} from '../../../types';

const angularAdminPortalHardening: CaseStudy = {
    id: 'koin-angular-admin-portal-hardening',
    title: 'Hardening a Legacy Angular Admin Portal',
    tags: ['Security', 'Angular', 'Compliance', 'TypeScript', 'Refactoring'],
    summary:
      'Reduced over 600 security vulnerabilities in a legacy Angular application, transforming it into a compliant, maintainable system capable of passing enterprise security audits.',
    problem: {
      description: 'The existing Angular-based admin portal had accumulated significant technical debt over time, resulting in a large number of security vulnerabilities identified through automated scanning and internal audits.',
      sections: [
        {
          title: 'These issues included:',
          elements: [
            'Outdated dependencies with known exploits',
            'Inconsistent authentication and authorization patterns',
            'Weak input validation and exposure to common OWASP risks',
            'A tightly coupled architecture that made safe updates difficult'
          ]
        },
        {
          title: 'Beyond technical risk, this created a business problem:',
          elements: [
            'The product could not pass required security audits',
            'This blocked enterprise adoption and increased compliance risk'
          ]
        }
      ],
      summary: 'The challenge was not just fixing individual issues—it was systematically reducing risk across the entire application without breaking functionality.'
    },
    role:{
      description: 'I led the effort to remediate vulnerabilities and modernize the frontend architecture.',
      sections: [
        {
          title: 'My responsibilities included:',
          elements: [
            'Auditing and prioritizing vulnerabilities',
            'Planning and executing dependency upgrades',
            'Refactoring critical areas of the application',
            'Aligning implementation with security best practices (OWASP)',
            'Ensuring the application remained stable throughout the process',
          ]
        },
      ],
      summary: 'This required balancing security, speed, and system stability under ongoing development pressure.'
    },
    challenges:
      [
        {
          title: '1. Volume and Prioritization',
          breakdown: {
            title: 'With 600+ vulnerabilities, not all issues were equal:',
            elements: [
              'Some were low-risk but noisy',
              'Others posed real exploitation risks',
            ],
          },
          highlight: {
            title: 'The challenge was:',
            text: 'How do you prioritize fixes in a way that meaningfully reduces risk quickly?',
          },
        },
        {
          title: '2. Fragile Legacy Architecture',
          breakdown: {
            title: 'The application was not originally designed with modularity in mind.',
            elements: [
              'Changes in one area could introduce regressions elsewhere',
              'Tight coupling made isolated fixes difficult',
            ],
          },
          highlight: {
            title: 'The meant:',
            text: 'Fixing vulnerabilities often required structural refactoring, not just patches',
          },
        },
        {
          title: '3. Dependency Hell',
          breakdown: {
            title: 'Many vulnerabilities stemmed from outdated packages.',
            elements: [
              'Upgrading dependencies introduced breaking changes',
              'Some packages had cascading compatibility issues',
            ],
          },
          highlight: {
            title: 'This required careful coordination and staged upgrades.',
          },
        },
        {
          title: '4. Maintaining Delivery Velocity',
          breakdown: {
            title: 'This work happened alongside ongoing product development.',
            elements: [
              'Couldn’t freeze feature delivery',
              'Needed to avoid blocking the team',
            ],
          },
          highlight: {
            title: 'So the solution had to:',
            text: 'Integrate into existing workflows, not disrupt them',
          },
        },
      ],
    approach:
      'Walk through the reasoning behind your architectural or strategic choices. What options did you weigh, and why did you go the direction you did?',
    implementationHighlights:
      [
        'A concrete technical achievement worth calling out.',
        'Another noteworthy implementation detail or pattern you introduced.',
        'A third highlight — metrics, performance wins, and tooling improvements all work well here.',
      ],
    outcomeAndImpact:
      'Quantify the result wherever possible — latency reduced by X%, churn dropped, revenue grew. Then add any qualitative impact on team culture or process.',
    keyTakeaways:
      [
        'The single most important lesson you would carry into the next project.',
        'A secondary insight about people, process, or technology.',
        'Anything else that crystallized for you through this experience.',
      ],
  }
;

export default function AngularAdminPortalHardening() {
  return <CaseStudyPage caseStudy={angularAdminPortalHardening}/>;
}