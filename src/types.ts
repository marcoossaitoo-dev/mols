export interface MetricScores {
  performance: number;
  accessibility: number;
  bestPractices: number;
  seo: number;
  lcp: string;
  fcp: string;
  cls: string;
  tbt: string;
  tti: string;
  speedIndex: string;
}

export const projectCategories = [
  'Sites',
  'Sistemas',
  'Landing Pages',
  'Produtos próprios',
  'Demonstrativo'
] as const;

export type ProjectCategory = typeof projectCategories[number];
export type ProjectFilter = 'Todos' | ProjectCategory;

export const projectFilters: ProjectFilter[] = ['Todos', ...projectCategories];

export interface Project {
  id: string;
  name: string;
  category: ProjectCategory[];
  description: string;
  fullDescription: string;
  tags: string[];
  features: string[];
  client: string;
  year: string;
  darkTheme: boolean;
  accentColor: string;
  url?: string;
  imageUrl?: string;
  metrics?: {
    desktop: MetricScores;
    mobile: MetricScores;
  };
  techStack?: { name: string; description: string; }[];
  transformation?: {
    before: string[];
    after: string[];
    stats: { label: string; value: string; }[];
  };
  intelligence: {
    advantages: string[];
  };
}

export interface TeamMember {
  name: string;
  role: string;
  email: string;
  phone: string;
  phoneFormatted: string;
}

export interface Solution {
  title: string;
  description: string;
  iconName: string;
}
