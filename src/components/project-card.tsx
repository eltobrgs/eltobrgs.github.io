
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Layers } from 'lucide-react'; // Added Layers for "Ver Detalhes"
import type { Project } from '@/types';
import ProjectDetailsModal from './project-details-modal'; // New import
import { useState } from 'react'; // New import

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    if (project.isCollection) {
      setIsModalOpen(true);
    }
  };

  const cardContent = (
    <Card 
      className="h-full flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
      onClick={project.isCollection ? handleOpenModal : undefined} // Make card clickable for collections
      role={project.isCollection ? "button" : undefined}
      tabIndex={project.isCollection ? 0 : undefined}
      onKeyDown={project.isCollection ? (e) => (e.key === 'Enter' || e.key === ' ') && handleOpenModal() : undefined}
    >
      <div className="relative w-full h-48 sm:h-56">
        <Image
          src={project.imageUrl}
          alt={project.name}
          layout="fill"
          objectFit="cover"
          data-ai-hint={project.imageHint || "project code"}
        />
         {project.isCollection && (
          <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 text-xs font-semibold rounded-md shadow-md">
            Coleção
          </div>
        )}
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{project.name}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground h-20 overflow-hidden text-ellipsis">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="mb-4">
          <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-1">Tecnologias:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="mt-auto grid grid-cols-2 gap-2">
        <Link href={project.repoUrl} passHref legacyBehavior>
          <a target="_blank" rel="noopener noreferrer" className="w-full" onClick={(e) => e.stopPropagation()}>
            <Button variant="outline" className="w-full">
              <Github className="mr-2 h-4 w-4" /> Ver Repositório
            </Button>
          </a>
        </Link>
        {project.isCollection ? (
          <Button className="w-full" onClick={(e) => { e.stopPropagation(); handleOpenModal(); }}>
            <Layers className="mr-2 h-4 w-4" /> Ver Detalhes
          </Button>
        ) : project.liveUrl ? (
          <Link href={project.liveUrl} passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className="w-full" onClick={(e) => e.stopPropagation()}>
              <Button className="w-full">
                <ExternalLink className="mr-2 h-4 w-4" /> Ver Online
              </Button>
            </a>
          </Link>
        ) : (
          <Button className="w-full" disabled>
            <ExternalLink className="mr-2 h-4 w-4" /> Sem Link
          </Button>
        )}
      </CardFooter>
    </Card>
  );

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        {cardContent}
      </motion.div>
      {project.isCollection && (
        <ProjectDetailsModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          project={project}
        />
      )}
    </>
  );
}
