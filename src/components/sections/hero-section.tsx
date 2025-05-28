
"use client";

import { siteConfig } from '@/data/site-config';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <motion.section
      id="about"
      className="py-16 sm:py-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-1 flex justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="https://placehold.co/300x300.png"
              alt="Elto Borges"
              width={300}
              height={300}
              className="rounded-full shadow-lg border-4 border-primary"
              data-ai-hint="profile picture"
            />
          </motion.div>
        </div>
        <div className="md:col-span-2">
          <Card className="shadow-xl bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
                {siteConfig.hero.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-lg text-card-foreground">
              {siteConfig.hero.subtitleLines.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.section>
  );
}
