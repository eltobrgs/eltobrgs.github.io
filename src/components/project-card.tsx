
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="relative w-full h-48 sm:h-56">
          <Image
            src={project.imageUrl}
            alt={project.name}
            layout="fill"
            objectFit="cover"
            data-ai-hint={project.imageHint || "project code"}
          />
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
        <CardFooter className="mt-auto">
          <Link href={project.repoUrl} passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className="w-full">
              <Button variant="outline" className="w-full">
                <Github className="mr-2 h-4 w-4" /> Ver Repositório
              </Button>
            </a>
          </Link>
          {project.liveUrl && (
            <Link href={project.liveUrl} passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer" className="w-full ml-2">
                <Button className="w-full">
                  <ExternalLink className="mr-2 h-4 w-4" /> Ver Online
                </Button>
              </a>
            </Link>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
