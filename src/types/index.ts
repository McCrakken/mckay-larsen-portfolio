export type BadgeVariant = 'blue' | 'green' | 'orange' | 'purple';

export interface Badge {
    label: string;
    variant: BadgeVariant;
}

export interface Project {
    id: string;
    title: string;
    description: string[];  // bullet points
    badge: Badge;
    tags: string[];
    link?: string;
}