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
    role: {
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
    approach: [
      {
        title: '1. Risk-Based Prioritization',
        sections: [
          {
            title: 'Instead of addressing vulnerabilities linearly, I grouped them by:',
            elements: [
              'Severity (exploitability, exposure)',
              'Surface area (public vs internal)',
              'Dependency vs application-level issues',
            ]
          },
          {
            title: 'This allowed us to:',
            elements: [
              'Eliminate high-risk vulnerabilities early',
              'Reduce overall exposure quickly'
            ]
          }
        ]
      },
      {
        title: '2. Incremental Refactoring Over Big Bang Rewrite',
        description: 'A full rewrite would have been safer in theory—but unrealistic.',
        sections: [
          {
            title: 'Instead:',
            elements: [
              'Identified high-risk modules (auth, data handling)',
              'Refactored them incrementally into more modular patterns',
              'Introduced clearer boundaries between components',
            ]
          },
        ],
        code: `// Before: Fragile, tightly coupled authentication
@Component({ ... })
export class HeaderComponent {
  login() {
    this.http.post('/auth', { user: this.u, pass: this.p })
      .subscribe(res => localStorage.setItem('token', res.token));
  }
}

// After: Centralized, audited Auth Service with Secure Storage
@Injectable({ providedIn: 'root' })
export class AuthService {
  login(creds: Credentials): Observable<User> {
    return this.http.post<AuthResponse>('/auth/v2/login', creds).pipe(
      map(res => this.secureSession.initialize(res)),
      catchError(err => this.auditLog.error('auth_failed', err))
    );
  }
}`,
        language: 'typescript',
        summary: 'This transition to a service-based architecture allowed us to apply security fixes in one place rather than across dozens of components.'
      },
    ],
    implementationHighlights:
      [
        'Integrated automated vulnerability scanning (Snyk) into the CI/CD pipeline to catch issues before they reach production.',
        'Established a custom Content Security Policy (CSP) and automated security header injection, mitigating common XSS and clickjacking vectors.',
        'Created a standardized, audited library of UI components for data handling, ensuring consistent input sanitization and output encoding.',
        'Developed a staged dependency upgrade strategy that allowed for updating critical packages without causing widespread regressions.',
      ],
    outcomeAndImpact:
      'The hardening initiative reduced total vulnerabilities from 600+ to zero high/medium risks in less than four months. This successful remediation allowed the company to pass a rigorous external security audit from a Fortune 500 partner, unblocking a multi-year contract and directly enabling the product’s entry into the enterprise market.',
    keyTakeaways:
      [
        'Security must be a first-class citizen in the development lifecycle, not an afterthought or a one-time "hardening" phase.',
        'Prioritizing based on exploitability and business impact is essential when dealing with massive technical debt.',
        'Infrastructure and architectural clarity are often the best defense against security risks in legacy systems.',
      ],
  }
;

export default function AngularAdminPortalHardening() {
  return <CaseStudyPage caseStudy={angularAdminPortalHardening}/>;
}