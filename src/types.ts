export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
  responseTime: string;
  warranty: string;
  badge?: string;
  popularIssues: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'residential' | 'commercial' | 'water-heaters' | 'drain-repair';
  location: string;
  completionTime: string;
  description: string;
  beforeNotes: string;
  afterNotes: string;
  image: string;
  highlightStat: string;
  highlightLabel: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  service: string;
  date: string;
  quote: string;
  verified: boolean;
  avatarText: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface BenefitItem {
  number: string;
  title: string;
  description: string;
  badge: string;
}
