
import type { LucideIcon } from 'lucide-react';

export interface ProjectCollectionItem {
  name: string;
  description?: string;
  repoUrl?: string; // Link para o sub-projeto/diretório específico, se aplicável
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  repoUrl: string;
  liveUrl?: string;
  imageUrl: string;
  imageHint?: string;

  // Para coleções de projetos que abrem um modal
  isCollection?: boolean;
  collectionTitle?: string;
  collectionItems?: ProjectCollectionItem[];
  collectionSeeMoreText?: string;
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
