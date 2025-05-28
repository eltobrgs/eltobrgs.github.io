
"use client";

import { siteConfig } from '@/data/site-config';
import { motion } from 'framer-motion';
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { ContactLink } from '@/types';

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="py-16 sm:py-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <Card className="shadow-xl max-w-2xl mx-auto bg-card/80 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl sm:text-4xl font-bold tracking-tight">
            👤 Entre em <span className="text-primary">Contato</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground mb-8">
            Sinta-se à vontade para entrar em contato ou me seguir nas redes sociais!
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {siteConfig.contactLinks.map((link: ContactLink, index: number) => {
              const IconComponent = LucideIcons[link.icon] as LucideIcons.LucideIcon;
              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link href={link.url} passHref legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full justify-start py-6 text-base">
                        {IconComponent && <IconComponent className="mr-3 h-5 w-5 text-primary" />}
                        {link.name}
                      </Button>
                    </a>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </motion.section>
  );
}
