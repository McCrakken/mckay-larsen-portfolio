import type { Project } from '../types';

export const projects: Project[] = [
    {
        id: 'koin',
        title: 'Koin Payment App',
        badge: { label: 'Mobile · Fintech', variant: 'blue' },
        description: [
            'Built a cross-platform mobile payment app from the ground up using React Native, targeting iOS and Android simultaneously.',
            'Implemented secure wallet flows, transaction history, and real-time balance updates integrated with a Node.js/AWS backend.',
            'Collaborated closely with product and design to ship v1 on schedule, iterating rapidly with continuous delivery via GitLab CI/CD.',
        ],
        tags: ['React Native', 'TypeScript', 'Node.js', 'AWS', 'GitLab CI/CD'],
    },
    {
        id: 'opentext-mfa',
        title: 'OpenText MFA Platform',
        badge: { label: 'Web App · Identity', variant: 'green' },
        description: [
            'Engineered a multi-factor authentication platform UI in React used by enterprise customers to manage identity workflows.',
            'Led the front-end architecture for the admin console, enabling configuration of SMS, TOTP, and push-notification auth flows.',
            'Contributed to a shared component library adopted across multiple OpenText product teams.',
        ],
        tags: ['React', 'TypeScript', 'Component Library', 'Enterprise SaaS'],
    },
    {
        id: 'angular-hardening',
        title: 'Angular Admin Portal Hardening',
        badge: { label: 'Security · Angular', variant: 'orange' },
        description: [
            'Identified and eliminated 600+ security vulnerabilities across a legacy Angular admin portal using automated scanning and manual audit.',
            'Refactored critical authentication and authorization modules to align with OWASP best practices.',
            'Reduced attack surface significantly, enabling the product to pass third-party security audits required for enterprise clients.',
        ],
        tags: ['Angular', 'TypeScript', 'Security', 'OWASP', 'Refactoring'],
        caseStudyUrl: '/case-studies/koin/angular-portal-hardening',
    },
    {
        id: 'educator-platform',
        title: 'Teacher2Teacher - Educator Resource Platform',
        badge: { label: 'Full Stack · Capstone', variant: 'purple' },
        description: [
            'Designed and built a full-stack resource sharing platform as a capstone project, enabling teachers to create, distribute, and discover resources.',
            'Used React for the SPA front end and Firebase (Firestore + Auth) for real-time data sync and authentication.',
            'Implemented role-based access control distinguishing teacher and student views, with live progress dashboards.',
        ],
        tags: ['React', 'TypeScript', 'Firebase', 'Firestore', 'Role-Based Auth'],
    },
];