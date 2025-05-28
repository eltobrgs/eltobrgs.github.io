
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
      repoUrl: "https://github.com/eltobrgs/ugym-react", // Por favor, verifique se este é o link correto do repositório
      liveUrl: "https://ugym-react.vercel.app",
      imageUrl: "https://placehold.co/600x400.png",
      imageHint: "fitness app"
    },
    {
      name: "RFSmart Platform Frontend",
      description: "Aplicação web moderna (React 19, TypeScript, Vite) para a plataforma de cursos online RFSmart. Backend robusto com tecnologias similares ao UGym.",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "React Router DOM", "Framer Motion"],
      repoUrl: "https://github.com/eltobrgs/RFSmart-FrontEnd", // Por favor, verifique se este é o link correto do repositório
      liveUrl: "https://front-end-rf-smart-react.vercel.app",
      imageUrl: "https://placehold.co/600x400.png",
      imageHint: "e-learning dashboard"
    },
    {
      name: "UGym Landing Page",
      description: "Landing page promocional para o aplicativo UGym, construída com foco em design responsivo e otimizada para conversão.",
      technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
      repoUrl: "https://github.com/eltobrgs/LandingPageUgym",
      liveUrl: "https://eltobrgs.github.io/LandingPageUgym/",
      imageUrl: "https://placehold.co/600x400.png",
      imageHint: "website landing page"
    },
    {
      name: "Coleção de Projetos Spring Boot",
      description: "Repositório agregando diversos projetos iniciais e exemplos práticos desenvolvidos com Spring Boot e Java, demonstrando diferentes funcionalidades do framework.",
      technologies: ["Java", "Spring Boot", "Maven", "Spring MVC", "Spring Data JPA", "Spring Security"],
      repoUrl: "https://github.com/eltobrgs/springboot-starter-projects",
      imageUrl: "https://placehold.co/600x400.png",
      imageHint: "java code API",
      isCollection: true,
      collectionTitle: "Projetos Exemplo com Spring Boot",
      collectionItems: [
        { name: "API RESTful Básica", description: "Estrutura fundamental para uma API REST, incluindo controllers, services e exemplos de endpoints CRUD. Ideal para iniciar o desenvolvimento de backends." },
        { name: "Aplicação Web com Spring MVC e Thymeleaf", description: "Demonstração de como construir aplicações web tradicionais com renderização no lado do servidor, utilizando Spring MVC para o backend e Thymeleaf para as views." },
        { name: "Segurança com Spring Security", description: "Implementação de mecanismos de autenticação e autorização, protegendo endpoints e recursos da aplicação contra acesso não autorizado." },
        { name: "Acesso a Dados com Spring Data JPA", description: "Exemplo de integração com bancos de dados relacionais (como H2, PostgreSQL) utilizando Spring Data JPA e Hibernate para facilitar a persistência de dados." },
        { name: "Microsserviço com Spring Cloud (Conceitual)", description: "Abordagem conceitual para desenvolvimento de microsserviços, podendo incluir service discovery (Eureka/Consul), configuration server, e API Gateway." }
      ],
      collectionSeeMoreText: "Os itens acima são exemplos ilustrativos. Explore o repositório principal no GitHub para ver todos os projetos, códigos-fonte e documentações detalhadas."
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
      icon: "MessageSquareText" // Changed from MessageSquare for better representation
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
