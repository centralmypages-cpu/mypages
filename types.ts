export interface GeneratedContent {
  headline: string;
  subheadline: string;
  ctaText: string;
  benefits: string[];
}

export enum PricingTier {
  FREE = 'Starter',
  PRO = 'Professional',
  ENTERPRISE = 'Business'
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}