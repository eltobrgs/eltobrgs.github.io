
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import type { Project } from '@/types';
import ProjectDetailsModal from './project-details-modal';
import { useState, useEffect } from 'react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const allImages = project.images ? [project.imageUrl, ...project.images] : [project.imageUrl];

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const startSlideshow = () => {
      timer = setInterval(nextImage, 2000); // Change image every 2 seconds when hovering
    };
    const stopSlideshow = () => {
      if (timer) clearInterval(timer);
      setCurrentImageIndex(0); // Reset to first image when not hovering
    };

    const imageContainer = document.getElementById(`project-image-${project.name}`);
    if (imageContainer) {
      imageContainer.addEventListener('mouseenter', startSlideshow);
      imageContainer.addEventListener('mouseleave', stopSlideshow);
    }

    return () => {
      if (timer) clearInterval(timer);
      if (imageContainer) {
        imageContainer.removeEventListener('mouseenter', startSlideshow);
        imageContainer.removeEventListener('mouseleave', stopSlideshow);
      }
    };
  }, [project.name, allImages.length]);

  const cardContent = (
    <Card
      className="h-full flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      onClick={handleOpenModal}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleOpenModal()}
    >
      <div 
        id={`project-image-${project.name}`}
        className="relative w-full h-48 sm:h-56 overflow-hidden"
      >
        {allImages.map((image, index) => (
          <Image
            key={image}
            src={image}
            alt={`${project.name} - Image ${index + 1}`}
            layout="fill"
            objectFit="cover"
            data-ai-hint={project.imageHint || "project code"}
            className={`absolute top-0 left-0 transition-opacity duration-500 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{project.name}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground h-20 overflow-hidden text-ellipsis">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="mb-1">
          <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-1">Tecnologias:</h4>
          <div className="flex flex-wrap gap-1">
            {project.technologies.slice(0, 4).map((tech) => ( // Show limited techs, full list in modal
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="outline" className="text-xs">
                + {project.technologies.length - 4} mais
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="mt-auto grid grid-cols-2 gap-2">
        {project.frontendRepoUrl && project.backendRepoUrl ? (
          <>
            <Link href={project.frontendRepoUrl} passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer" className="w-full" onClick={(e) => e.stopPropagation()}>
                <Button variant="outline" className="w-full">
                  <Github className="mr-2 h-4 w-4" /> Frontend
                </Button>
              </a>
            </Link>
            <Link href={project.backendRepoUrl} passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer" className="w-full" onClick={(e) => e.stopPropagation()}>
                <Button variant="outline" className="w-full">
                  <Github className="mr-2 h-4 w-4" /> Backend
                </Button>
              </a>
            </Link>
          </>
        ) : project.repoUrl ? (
          <Link href={project.repoUrl} passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className="w-full" onClick={(e) => e.stopPropagation()}>
              <Button variant="outline" className="w-full col-span-1"> {/* Adjusted col-span */}
                <Github className="mr-2 h-4 w-4" /> Repositório
              </Button>
            </a>
          </Link>
        ) : (
          <Button variant="outline" className="w-full col-span-1" disabled> {/* Adjusted col-span */}
            <Github className="mr-2 h-4 w-4" /> Indisponível
          </Button>
        )}

        {/* Second button: Live URL or fills the space if only one repo button */}
        {project.liveUrl ? (
            <Link href={project.liveUrl} passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer" className="w-full" onClick={(e) => e.stopPropagation()}>
                <Button className="w-full col-span-1">  {/* Ensure it takes one column */}
                  <ExternalLink className="mr-2 h-4 w-4" /> Ver Online
                </Button>
              </a>
            </Link>
          ) : (
            (!(project.frontendRepoUrl && project.backendRepoUrl) && project.repoUrl) ? (
                <span className="col-span-1"></span> // Empty span to maintain grid structure if only one repo button and no live URL
            ) : (project.frontendRepoUrl && project.backendRepoUrl) ? (
                 <span className="col-span-1"></span> // Empty span if two repo buttons and no live URL
            ) : (
                <Button className="w-full col-span-1" disabled> {/* Ensure it takes one column */}
                    <ExternalLink className="mr-2 h-4 w-4" /> Sem Link
                </Button>
            )
          )
        }
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
      <ProjectDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={project}
      />
    </>
  );
}
