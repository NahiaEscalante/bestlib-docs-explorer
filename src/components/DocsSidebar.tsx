import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarSection {
  title: string;
  items: { label: string; href: string }[];
}

const sidebarSections: SidebarSection[] = [
  {
    title: "Getting Started",
    items: [
      { label: "Quick Start", href: "/quick-start" },
      { label: "Core Concepts", href: "/core-concepts" },
    ],
  },
  {
    title: "Layouts",
    items: [
      { label: "ReactiveMatrixLayout", href: "/layouts/reactive" },
      { label: "Reactive Linking", href: "/layouts/reactive-linking" },
    ],
  },
  {
    title: "Charts",
    items: [
      { label: "Index", href: "/charts/index" },
      { label: "Scatter Plot", href: "/charts/scatter" },
      { label: "Histogram", href: "/charts/histogram" },
      { label: "Bar Chart", href: "/charts/bar" },  
      { label: "Boxplot", href: "/charts/boxplot" },
    ],
  },
   {
    title: "Examples",
    items: [
      { label: "Interactive Scatter", href: "/examples/scatter" },
      { label: "Linked Charts", href: "/examples/linked" },
    ],
  },

  {
    title: "API Reference",
    items: [
      { label: "APIs", href: "/api/python" },
      { label: "Data Models", href: "/api/models" },
    ],
  },

 
];

export const DocsSidebar = () => {
  const location = useLocation();
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(
    Object.fromEntries(sidebarSections.map((s) => [s.title, true]))
  );

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <aside className="fixed left-0 top-14 bottom-0 w-64 border-r border-border bg-sidebar overflow-y-auto">
      <nav className="p-4 space-y-1">
        {sidebarSections.map((section) => (
          <div key={section.title}>
            <button
              onClick={() => toggleSection(section.title)}
              className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              <span>{section.title}</span>
              {openSections[section.title] ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </button>
            
            {openSections[section.title] && (
              <div className="ml-3 space-y-1 border-l border-border">
                {section.items.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={cn(
                      "block pl-4 py-1.5 text-sm transition-colors",
                      location.pathname === item.href
                        ? "text-primary border-l-2 border-primary -ml-[1px]"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};
