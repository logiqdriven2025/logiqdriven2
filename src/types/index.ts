export interface NavItem {
  title: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface Feature {
  title: string;
  description: string;
  metrics: string[];
  icon: string;
  image: string;
}

export interface Integration {
  name: string;
  description: string;
  category: string;
  icon: string;
  image: string;
}

export interface AISolution {
  title: string;
  description: string;
  features: string[];
  icon: string;
  image: string;
}
