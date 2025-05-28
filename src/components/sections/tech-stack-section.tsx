
"use client";

import { siteConfig } from '@/data/site-config';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Cpu, Database, Layers, TerminalSquare, Wrench } from 'lucide-react'; // Example icons

const categoryIcons: { [key: string]: React.ElementType } = {
  "Linguagens": TerminalSquare,
  "Backend": Layers,
  "Frontend": Cpu,
  "Banco de Dados": Database,
  "Outros": Wrench,
};

export default function TechStackSection() {
  return (
    <motion.section
      id="tech-stack"
      className="py-16 sm:py-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 tracking-tight">
        ⚙️ <span className="text-primary">Tecnologias</span> que Utilizo
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {siteConfig.techStack.map((categoryItem, index) => {
          const IconComponent = categoryIcons[categoryItem.category] || Wrench;
          return (
            <motion.div
              key={categoryItem.category}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <CardHeader className="flex flex-row items-center space-x-3">
                  <IconComponent className="h-6 w-6 text-primary" />
                  <CardTitle className="text-2xl font-semibold">{categoryItem.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {categoryItem.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-sm px-3 py-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
