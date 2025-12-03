import { Link } from "react-router-dom";
import { Search, Github, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import bestlibLogo from "@/assets/bestlib_logo.png";

const navItems = [
  { label: "Charts", href: "/charts/index" },
  { label: "API Reference", href: "/api/python" }
];

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-sidebar">
      <nav className="flex h-14 items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src={bestlibLogo} alt="BESTLIB" className="h-20 w-32" />
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

      </nav>
    </header>
  );
};
