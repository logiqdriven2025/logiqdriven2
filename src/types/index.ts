export interface NavItem {
  title: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export interface CaseStudy {
  title: string;
  client: string;
  description: string;
  results: string[];
  image: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface AISolution {
  title: string;
  description: string;
  features: string[];
  icon: string;
}