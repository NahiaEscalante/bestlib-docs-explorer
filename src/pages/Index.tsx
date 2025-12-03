import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap, Package } from "lucide-react";
import bestlibLogo from "@/assets/bestlib_logo.png";
import { DocsLayout } from "@/components/DocsLayout";
const Index = () => {
  return (
    <DocsLayout>
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="container mx-auto px-6 py-24 text-center">
          <img src={bestlibLogo} alt="BESTLIB" className="h-48 w-80 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-6 text-foreground">
            BESTLIB Documentation
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A powerful visualization library for creating interactive, linked charts with reactive layouts.
            Perfect for data exploration and analysis.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link to="/quick-start">
              <Button size="lg" className="gap-2">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/examples">
              <Button size="lg" variant="outline">
                View Examples
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Why BESTLIB?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border border-border bg-card">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Reactive Linking</h3>
              <p className="text-muted-foreground">
                Connect multiple visualizations with automatic data synchronization and interactive selection propagation.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Flexible Layouts</h3>
              <p className="text-muted-foreground">
                Create complex multi-panel layouts with MatrixLayout and ReactiveMatrixLayout components.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Rich Chart Types</h3>
              <p className="text-muted-foreground">
                Support for scatter plots, histograms, radviz, parallel coordinates, and more visualization types.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Example */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            Quick Example
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="rounded-lg border border-code-border bg-code-background p-6">
              <pre className="text-sm font-mono text-foreground overflow-x-auto">
                <code>{`import bestlib as bl

# Create a reactive matrix layout
layout = bl.ReactiveMatrixLayout(2, 2)

# Add linked charts
scatter = bl.ScatterPlot(data, x='sepal_length', y='sepal_width')
histogram = bl.Histogram(data, x='petal_length')

# Enable reactive linking
layout.add_chart(scatter, 0, 0)
layout.add_chart(histogram, 0, 1)
layout.enable_linking()

# Display
layout.show()`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Ready to get started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Explore our comprehensive documentation and examples.
          </p>
          <Link to="/quick-start">
            <Button size="lg" className="gap-2">
              Read the Documentation
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-sidebar">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2025 BESTLIB Documentation v1.0.0
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link to="/license" className="text-muted-foreground hover:text-primary transition-colors">
                MIT License
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              
            </div>
          </div>
          
        </div>
        
      </footer>
    </div>
    </DocsLayout>

  );
};

export default Index;
