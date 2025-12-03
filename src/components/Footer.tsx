import { Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-sidebar mt-16">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2025 BESTLIB Documentation v1.0.0
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <a href="/license" className="text-muted-foreground hover:text-primary transition-colors">
              MIT License
            </a>
            <a href="/about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
          </div>

          <a
            href="https://github.com/NahiaEscalante/bestlib"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
