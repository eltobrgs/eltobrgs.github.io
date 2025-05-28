
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
      technologies: ["Spring", "Express", "Node.js", "Hono", "Prisma"]
    },
    {
      category: "Frontend",
      technologies: ["React", "Next.js", "Vite", "HTML", "CSS", "JavaScript", "Tailwind CSS", "Framer Motion"]
    },
    {
      category: "Banco de Dados",
      technologies: ["MongoDB", "PostgreSQL", "Supabase", "Firebase"]
    },
    {
      category: "Outros",
      technologies: ["Arduino", "Raspberry Pi", "IA", "Automação", "JWT", "Git"]
    }
  ] as TechCategory[],
  projects: [
    {
      name: "UGym Fitness App",
      description: "Aplicativo de fitness completo (React, TypeScript) para Alunos, Personal Trainers e Academias. Backend com Prisma, Express, políticas de segurança, hash de senha e token JWT.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Prisma", "Express", "Node.js", "JWT"],
      liveUrl: "https://ugym-react.vercel.app",
      imageUrl: "https://placehold.co/600x400.png",
      imageHint: "fitness app"
    },
    {
      name: "RFSmart Platform",
      description: "Plataforma de cursos online com frontend moderno (React, TypeScript, Vite) e backend robusto (Node.js, Express, Prisma). Repositórios: Frontend - https://github.com/eltobrgs/FrontEnd-RFSmartReact, Backend - https://github.com/eltobrgs/BackEnd-RFSmart.",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "React Router DOM", "Framer Motion", "Node.js", "Express", "Prisma", "JWT"],
      frontendRepoUrl: "https://github.com/eltobrgs/FrontEnd-RFSmartReact",
      backendRepoUrl: "https://github.com/eltobrgs/BackEnd-RFSmart",
      liveUrl: "https://front-end-rf-smart-react.vercel.app",
      imageUrl: "https://placehold.co/600x400.png",
      imageHint: "e-learning platform"
    },
    {
      name: "UGym Landing Page",
      description: "Landing page promocional para o aplicativo UGym, construída com foco em design responsivo e otimizada para conversão.",
      technologies: ["Next.js", "Tailwind CSS"],
      repoUrl: "https://github.com/eltobrgs/LandingPageUgym",
      liveUrl: "https://eltobrgs.github.io/LandingPageUgym/",
      imageUrl: "https://placehold.co/600x400.png",
      imageHint: "website landing page"
    },
    {
      name: "Sistema de Gerenciamento de Biblioteca",
      description: "Sistema de gerenciamento de biblioteca com frontend em HTML, Bootstrap CSS, e backend com Spring Boot, conectado ao banco de dados MongoDB.",
      technologies: ["Java", "Spring Boot", "MongoDB", "Thymeleaf", "HTML", "Bootstrap CSS", "Maven"],
      repoUrl: "https://github.com/eltobrgs/SpringBoot-sistemabiblioteca",
      imageUrl: "https://placehold.co/600x400.png",
      imageHint: "library management system",
      isCollection: false,
    },
    {
      name: "MedicSystem - Gerenciador de Clínica",
      description: "Gerenciador de clínica médica que organiza documentos, cadastra médicos/pacientes e agenda consultas. Frontend (React, TS) e Backend (Node.js, Prisma).",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Node.js", "Express", "Prisma", "JWT", "Framer Motion"],
      frontendRepoUrl: "https://github.com/eltobrgs/FrontEnd-MedicSystem",
      backendRepoUrl: "https://github.com/eltobrgs/BackEnd-MedicSystem",
      imageUrl: "https://placehold.co/600x400.png",
      imageHint: "clinic management app",
      isCollection: true,
      collectionTitle: "Repositórios e Componentes do MedicSystem",
      collectionItems: [
        {
          name: "Frontend (React, TypeScript)",
          description: "Interface do usuário para o MedicSystem, desenvolvida com React, TypeScript e Vite.",
          repoUrl: "https://github.com/eltobrgs/FrontEnd-MedicSystem"
        },
        {
          name: "Backend (Node.js, Prisma)",
          description: "API RESTful e lógica de negócios para o MedicSystem, utilizando Node.js, Express e Prisma.",
          repoUrl: "https://github.com/eltobrgs/BackEnd-MedicSystem"
        }
      ],
      collectionSeeMoreText: "Explore os componentes frontend e backend do MedicSystem."
    },
    {
      name: "Explorador Interativo do Sistema Digestivo",
      description: "Projeto educativo sobre o sistema digestivo, incluindo quiz interativo e esquema 3D. Desenvolvido com Next.js, TypeScript e Tailwind CSS para um trabalho escolar.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      repoUrl: "https://github.com/eltobrgs/SistemaDigestivoInterativo",
      liveUrl: "https://eltobrgs.github.io/SistemaDigestivoInterativo/",
      imageUrl: "https://placehold.co/600x400.png",
      imageHint: "digestive system anatomy",
      isCollection: false,
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
      icon: "MessageSquareText"
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
