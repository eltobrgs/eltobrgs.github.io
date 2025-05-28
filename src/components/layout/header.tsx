
import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';
import { CodeXml } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <CodeXml className="h-6 w-6 text-primary" />
          <span className="font-bold sm:inline-block">
            EltoFolio
          </span>
        </Link>
        <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
          {/* Add navigation links here if needed in the future */}
        </nav>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
