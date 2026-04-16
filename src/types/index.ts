export type BadgeVariant = 'blue' | 'green' | 'orange' | 'purple';

export interface Badge {
    label: string;
    variant: BadgeVariant;
}

export interface Project {
    id: string;
    title: string;
    description: string[];
    badge: Badge;
    tags: string[];
    link?: string;
}

export interface CaseStudyCallout {
    title: string;
    breakdown: CaseStudySection;
    highlight: CaseStudyCalloutHighlight;
}

export interface CaseStudyCalloutHighlight {
    title: string;
    text?: string;
}

export interface CaseStudySection {
    title: string;
    elements: string[];
}

export interface CaseStudySectionBlock {
    description: string;
    sections?: CaseStudySection[];
    summary?: string;
}

export interface CaseStudy {
    id: string;
    // Hero
    title: string;
    tags: string[];
    summary: string;
    // Sections
    problem: CaseStudySectionBlock;
    role: CaseStudySectionBlock;
    challenges: CaseStudyCallout[];
    approach: string;
    implementationHighlights: string[];
    outcomeAndImpact: string;
    keyTakeaways: string[];
}