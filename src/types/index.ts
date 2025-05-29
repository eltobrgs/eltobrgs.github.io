
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
  repoUrl?: string; // Link para o repositório principal, se houver apenas um ou como fallback
  frontendRepoUrl?: string; // Link para o repositório frontend, se aplicável
  backendRepoUrl?: string; // Link para o repositório backend, se aplicável
  liveUrl?: string;
  imageUrl: string;
  imageHint?: string;
  images?: string[]; // Array of additional project images for the slider

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
