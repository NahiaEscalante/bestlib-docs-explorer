import { Link } from "react-router-dom";
import { Search, Github, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import bestlibLogo from "@/assets/bestlib-logo.png";

const navItems = [
  { label: "Plot Types", href: "/plot-types" },
  { label: "User Guide", href: "/user-guide" },
  { label: "Tutorials", href: "/tutorials" },
  { label: "Examples", href: "/examples" },
  { label: "API Reference", href: "/api" },
  { label: "Contribute", href: "/contribute" },
  { label: "Releases", href: "/releases" },
];

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-sidebar">
      <nav className="flex h-14 items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src={bestlibLogo} alt="BESTLIB" className="h-8 w-8" />
            <span className="text-lg font-semibold text-foreground tracking-tight">BESTLIB</span>
          </Link>
          
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Moon className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Github className="h-4 w-4" />
          </Button>
        </div>
      </nav>
    </header>
  );
};
