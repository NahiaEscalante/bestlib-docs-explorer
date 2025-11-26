import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { DocsSidebar } from "./DocsSidebar";
import { Footer } from "./Footer";

interface DocsLayoutProps {
  children: ReactNode;
}

export const DocsLayout = ({ children }: DocsLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-14 flex">
        <DocsSidebar />
        <main className="flex-1 ml-64">
          <div className="container max-w-4xl mx-auto px-6 py-8">
            {children}
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
};
