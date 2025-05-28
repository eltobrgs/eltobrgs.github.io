
"use client";

import * as React from "react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink as ExternalLinkIcon, ListTree, Code } from "lucide-react";
import type { Project, ProjectCollectionItem } from "@/types";

interface ProjectDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

export default function ProjectDetailsModal({ isOpen, onClose, project }: ProjectDetailsModalProps) {
  if (!project) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl md:max-w-3xl max-h-[90vh] flex flex-col">
        <DialogHeader className="pr-6">
          <DialogTitle className="text-2xl font-semibold">{project.name}</DialogTitle>
          {project.description && (
            <DialogDescription className="pt-2 text-sm text-muted-foreground">
              {project.description}
            </DialogDescription>
          )}
        </DialogHeader>
        
        <ScrollArea className="flex-grow mt-4 pr-4 max-h-[calc(90vh-280px)]"> {/* Adjusted max-h */}
          <div className="space-y-6">
            {project.technologies && project.technologies.length > 0 && (
              <div>
                <h4 className="text-lg font-medium mb-2 text-foreground flex items-center">
                  <Code className="mr-2 h-5 w-5 text-primary" />
                  Tecnologias Utilizadas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-sm px-3 py-1">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {project.isCollection && project.collectionItems && project.collectionItems.length > 0 && (
              <div>
                <h4 className="text-lg font-medium mb-3 text-foreground flex items-center">
                   <ListTree className="mr-2 h-5 w-5 text-primary" />
                  {project.collectionTitle || "Componentes do Projeto"}
                </h4>
                <div className="space-y-3">
                  {project.collectionItems.map((item, index) => (
                    <div key={index} className="p-3 border rounded-md bg-card/50 shadow-sm">
                      <h5 className="font-semibold text-md text-primary">{item.name}</h5>
                      {item.description && (
                        <p className="text-xs text-muted-foreground mt-1 mb-2">
                          {item.description}
                        </p>
                      )}
                      {item.repoUrl && (
                        <Link href={item.repoUrl} passHref legacyBehavior>
                          <a target="_blank" rel="noopener noreferrer" className="inline-block">
                            <Button variant="link" size="sm" className="p-0 h-auto text-xs text-primary hover:underline">
                              <Github className="mr-1 h-3 w-3" /> Ver repositório do componente
                            </Button>
                          </a>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
                {project.collectionSeeMoreText && (
                    <p className="text-xs text-muted-foreground mt-3">
                        {project.collectionSeeMoreText}
                    </p>
                )}
              </div>
            )}
          </div>
        </ScrollArea>
        
        <DialogFooter className="mt-6 sm:mt-8 pt-4 border-t gap-2 flex-wrap justify-center sm:justify-end">
          {project.liveUrl && (
            <Link href={project.liveUrl} passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button className="w-full">
                  <ExternalLinkIcon className="mr-2 h-4 w-4" /> Ver Online
                </Button>
              </a>
            </Link>
          )}
          {project.frontendRepoUrl && (
            <Link href={project.frontendRepoUrl} passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full">
                  <Github className="mr-2 h-4 w-4" /> Repositório Frontend
                </Button>
              </a>
            </Link>
          )}
          {project.backendRepoUrl && (
            <Link href={project.backendRepoUrl} passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full">
                  <Github className="mr-2 h-4 w-4" /> Repositório Backend
                </Button>
              </a>
            </Link>
          )}
          {project.repoUrl && !project.frontendRepoUrl && !project.backendRepoUrl && ( // Only show if no specific frontend/backend
            <Link href={project.repoUrl} passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full">
                  <Github className="mr-2 h-4 w-4" /> Repositório Principal
                </Button>
              </a>
            </Link>
          )}
          <Button variant="secondary" onClick={onClose} className="w-full sm:w-auto">
            Fechar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
