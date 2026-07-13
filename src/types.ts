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

export interface Project {
  id: string;
  name: string;
  category: 'Sites' | 'Sistemas' | 'Landing Pages' | 'Produtos próprios';
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
