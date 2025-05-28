
import HeroSection from "@/components/sections/hero-section";
import TechStackSection from "@/components/sections/tech-stack-section";
import ProjectsSection from "@/components/sections/projects-section";
import ContactSection from "@/components/sections/contact-section";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex flex-col space-y-12 md:space-y-12">
      <HeroSection />
      <Separator className="my-8 md:my-12" />
      <TechStackSection />
      <Separator className="my-8 md:my-12" />
      <ProjectsSection />
      <Separator className="my-8 md:my-12" />
      <ContactSection />
    </div>
  );
}
