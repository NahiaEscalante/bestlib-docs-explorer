import { DocsLayout } from "@/components/DocsLayout";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";
import { Card } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

const QuickStart = () => {
  return (
    <DocsLayout>
      <Breadcrumb items={[{ label: "Getting Started", href: "/getting-started" }, { label: "Quick Start" }]} />
      
      <h1 className="text-4xl font-bold mb-6 text-foreground">Quick Start Guide</h1>
      
      <p className="text-lg text-muted-foreground mb-8">
        Get up and running with BESTLIB in minutes. This guide will walk you through installation
        and creating your first visualization.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-8">Installation</h2>
      
      <p className="text-foreground mb-4">
        Install BESTLIB using pip:
      </p>

      <CodeBlock
        code="pip install bestlib"
        language="bash"
      />

      <p className="text-foreground mb-4">
        For development installations with additional dependencies:
      </p>

      <CodeBlock
        code="pip install bestlib[dev]"
        language="bash"
      />

      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-12">Your First Visualization</h2>
      
      <p className="text-foreground mb-4">
        Create a simple scatter plot with interactive features:
      </p>

      <CodeBlock
        code={`import bestlib as bl
import pandas as pd

# Load sample data
data = pd.read_csv('iris.csv')

# Create a scatter plot
scatter = bl.ScatterPlot(
    data=data,
    x='sepal_length',
    y='sepal_width',
    color='species'
)

# Display the chart
scatter.show()`}
        filename="simple_scatter.py"
      />

      <Card className="my-6 p-4 border-l-4 border-l-primary">
        <div className="flex gap-3">
          <AlertCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-foreground mb-1">Interactive by Default</p>
            <p className="text-sm text-muted-foreground">
              All BESTLIB charts are interactive by default. You can pan, zoom, and select data points
              without any additional configuration.
            </p>
          </div>
        </div>
      </Card>

      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-12">Creating a Multi-Chart Layout</h2>
      
      <p className="text-foreground mb-4">
        BESTLIB's MatrixLayout makes it easy to create complex dashboards with multiple linked visualizations:
      </p>

      <CodeBlock
        code={`import bestlib as bl
import pandas as pd

# Load data
data = pd.read_csv('iris.csv')

# Create a 2x2 layout
layout = bl.MatrixLayout(rows=2, cols=2)

# Create multiple charts
scatter = bl.ScatterPlot(data, x='sepal_length', y='sepal_width', color='species')
histogram = bl.Histogram(data, x='petal_length', bins=20)
radviz = bl.Radviz(data, features=['sepal_length', 'sepal_width', 'petal_length'], color='species')
parallel = bl.ParallelCoordinates(data, dimensions=['sepal_length', 'sepal_width', 'petal_length'])

# Add charts to layout
layout.add_chart(scatter, row=0, col=0)
layout.add_chart(histogram, row=0, col=1)
layout.add_chart(radviz, row=1, col=0)
layout.add_chart(parallel, row=1, col=1)

# Display the layout
layout.show()`}
        filename="multi_chart_layout.py"
      />

      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-12">Enabling Reactive Linking</h2>
      
      <p className="text-foreground mb-4">
        One of BESTLIB's most powerful features is reactive linking between charts. When you select
        data in one chart, the selection automatically propagates to all linked charts:
      </p>

      <CodeBlock
        code={`import bestlib as bl
import pandas as pd

# Load data
data = pd.read_csv('iris.csv')

# Create a reactive layout
layout = bl.ReactiveMatrixLayout(rows=2, cols=2)

# Create charts
scatter = bl.ScatterPlot(data, x='sepal_length', y='sepal_width')
histogram = bl.Histogram(data, x='petal_length')

# Add charts
layout.add_chart(scatter, row=0, col=0)
layout.add_chart(histogram, row=0, col=1)

# Enable reactive linking
layout.enable_linking()

# Now selections in one chart will highlight in all others!
layout.show()`}
        filename="reactive_linking.py"
      />

      <Card className="my-6 p-4 border-l-4 border-l-primary">
        <div className="flex gap-3">
          <AlertCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-foreground mb-1">Automatic Synchronization</p>
            <p className="text-sm text-muted-foreground">
              ReactiveMatrixLayout automatically manages data synchronization between charts.
              No manual event handling required!
            </p>
          </div>
        </div>
      </Card>

      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-12">Next Steps</h2>
      
      <p className="text-foreground mb-4">
        Now that you've created your first BESTLIB visualizations, explore these resources:
      </p>

      <ul className="space-y-2 text-foreground list-disc list-inside mb-8">
        <li><a href="/tutorials" className="text-primary hover:underline">Browse Tutorials</a> - Learn advanced techniques</li>
        <li><a href="/examples" className="text-primary hover:underline">View Examples</a> - See complete working examples</li>
        <li><a href="/api" className="text-primary hover:underline">API Reference</a> - Detailed API documentation</li>
        <li><a href="/deployment" className="text-primary hover:underline">Deployment Guide</a> - Deploy your visualizations</li>
      </ul>
    </DocsLayout>
  );
};

export default QuickStart;
