
import type { Project, TechCategory, ContactLink } from '@/types';

export const siteConfig = {
  name: "Elto Borges",
  url: "https://eltoborges.dev", // Replace with actual domain later
  ogImage: "https://eltoborges.dev/og.jpg", // Replace with actual OG image URL
  description: "Portfólio de Elto Borges, Desenvolvedor Full Stack.",
  links: {
    github: "https://github.com/eltobrgs",
    linkedin: "https://www.linkedin.com/in/elto-borges-5b90962a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram: "https://www.instagram.com/eltobrgs/",
    youtube: "https://www.youtube.com/@eltobrgs",
    whatsapp: "https://wa.link/w6d9rf",
    email: "mailto:eltobrgs@gmail.com",
  },
  hero: {
    title: "Hi!! I'm Elto Borges 🇧🇷💻",
    subtitleLines: [
      "🎓 Estudante no Instituto Federal do Piauí (IFPI) — Campus Picos",
      "📚 Ensino Médio Integrado em Tecnologia da Informação (3º ano)",
      "💡 Apaixonado por tecnologia, sempre buscando aprender mais e participar de projetos inovadores",
      "🤝 Aberto a colaborações, freelances e oportunidades de crescimento na área de desenvolvimento de software"
    ]
  },
  techStack: [
    {
      category: "Linguagens",
      technologies: ["Java", "JavaScript", "TypeScript", "Python", "C++"]
    },
    {
      category: "Backend",
      technologies: ["Spring", "Express", "Node.js", "Hono"]
    },
    {
      category: "Frontend",
      technologies: ["React", "Next.js", "Vite", "HTML", "CSS", "JavaScript"]
    },
    {
      category: "Banco de Dados",
      technologies: ["MongoDB", "PostgreSQL", "Supabase", "Firebase"]
    },
    {
      category: "Outros",
      technologies: ["Arduino", "Raspberry Pi", "IA", "Automação"]
    }
  ] as TechCategory[],
  projects: [
    {
      name: "Portfolio Genérico 1",
      description: "Um projeto demonstrativo construído com Next.js e Tailwind CSS para exibir habilidades de desenvolvimento web.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      repoUrl: "https://github.com/eltobrgs/sample-project-1",
      imageUrl: "https://placehold.co/600x400.png",
      imageHint: "modern website"
    },
    {
      name: "Aplicativo Mobile Fictício",
      description: "Um conceito de aplicativo mobile para gerenciamento de tarefas, focado em UI/UX e integração com backend.",
      technologies: ["React Native", "Firebase", "Node.js"],
      repoUrl: "https://github.com/eltobrgs/sample-project-2",
      imageUrl: "https://placehold.co/600x400.png",
      imageHint: "mobile app"
    },
    {
      name: "Ferramenta de Automação",
      description: "Uma ferramenta desenvolvida em Python para automatizar processos repetitivos e aumentar a produtividade.",
      technologies: ["Python", "Selenium", "SQLite"],
      repoUrl: "https://github.com/eltobrgs/sample-project-3",
      imageUrl: "https://placehold.co/600x400.png",
      imageHint: "automation tool"
    }
  ] as Project[],
  contactLinks: [
    {
      name: "Gmail",
      url: "mailto:eltobrgs@gmail.com",
      icon: "Mail"
    },
    {
      name: "WhatsApp",
      url: "https://wa.link/w6d9rf",
      icon: "MessageSquare"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/eltobrgs/",
      icon: "Instagram"
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@eltobrgs",
      icon: "Youtube"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/elto-borges-5b90962a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      icon: "Linkedin"
    },
    {
      name: "GitHub",
      url: "https://github.com/eltobrgs",
      icon: "Github"
    }
  ] as ContactLink[]
};
