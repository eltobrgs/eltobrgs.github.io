
import { siteConfig } from '@/data/site-config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-20 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground">
          &copy; {currentYear} {siteConfig.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
