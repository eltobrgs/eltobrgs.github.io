
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
import { Github, ExternalLink as ExternalLinkIcon } from "lucide-react";
import type { Project } from "@/types";

interface ProjectDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

export default function ProjectDetailsModal({ isOpen, onClose, project }: ProjectDetailsModalProps) {
  if (!project || !project.isCollection) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl md:max-w-3xl max-h-[90vh] flex flex-col">
        <DialogHeader className="pr-6">
          <DialogTitle className="text-2xl">{project.collectionTitle || `Detalhes: ${project.name}`}</DialogTitle>
          <DialogDescription className="pt-2 text-sm">
            {project.description}
          </DialogDescription>
        </DialogHeader>
        
        {project.collectionItems && project.collectionItems.length > 0 && (
          <ScrollArea className="flex-grow mt-4 pr-4 max-h-[calc(90vh-250px)]"> {/* Adjusted max-h */}
            <div className="space-y-4">
              {project.collectionItems.map((item, index) => (
                <div key={index} className="p-4 border rounded-lg bg-card shadow">
                  <h4 className="font-semibold text-lg text-primary">{item.name}</h4>
                  {item.description && (
                    <p className="text-sm text-muted-foreground mt-1 mb-2">
                      {item.description}
                    </p>
                  )}
                  {item.repoUrl && ( // If individual repo URLs are provided for sub-items
                    <Link href={item.repoUrl} passHref legacyBehavior>
                      <a target="_blank" rel="noopener noreferrer" className="inline-block">
                        <Button variant="link" size="sm" className="p-0 h-auto text-xs text-primary hover:underline">
                          <Github className="mr-1 h-3 w-3" /> Ver sub-projeto
                        </Button>
                      </a>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>
        )}
        
        <DialogFooter className="mt-6 sm:mt-8 pt-4 border-t">
          <div className="flex-grow text-left">
            {project.collectionSeeMoreText && (
              <p className="text-xs text-muted-foreground">
                {project.collectionSeeMoreText}
              </p>
            )}
          </div>
          {project.repoUrl && (
            <Link href={project.repoUrl} passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full sm:w-auto">
                  <Github className="mr-2 h-4 w-4" /> Repositório Principal
                </Button>
              </a>
            </Link>
          )}
          <Button variant="secondary" onClick={onClose} className="w-full sm:w-auto mt-2 sm:mt-0">
            Fechar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

