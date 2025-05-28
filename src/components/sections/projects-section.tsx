
"use client";

import { siteConfig } from '@/data/site-config';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/project-card';

export default function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      className="py-16 sm:py-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 tracking-tight">
        🚀 Meus <span className="text-primary">Projetos</span>
      </h2>
      {siteConfig.projects.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground">
          Nenhum projeto para exibir no momento. Volte em breve!
        </p>
      )}
    </motion.section>
  );
}
