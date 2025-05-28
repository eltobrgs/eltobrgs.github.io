
import type { LucideIcon } from 'lucide-react';

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  repoUrl: string;
  liveUrl?: string;
  imageUrl: string;
  imageHint?: string;
}

export interface TechCategory {
  category: string;
  technologies: string[];
}

export interface ContactLink {
  name: string;
  url: string;
  icon: keyof typeof import('lucide-react'); // Allows any Lucide icon name
}
