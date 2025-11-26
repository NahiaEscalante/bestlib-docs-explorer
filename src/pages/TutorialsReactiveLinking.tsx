import { DocsLayout } from "@/components/DocsLayout";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TutorialsReactiveLinking = () => {
  return (
    <DocsLayout>
      <Breadcrumb
        items={[
          { label: "Tutorials", href: "/tutorials" },
          { label: "Reactive Linking" }
        ]}
      />
      
      <h1 className="text-4xl font-bold mb-6 text-foreground">
        Reactive Linking Between Charts
      </h1>
      
      <p className="text-lg text-muted-foreground mb-8">
        Learn how to create powerful linked visualizations where selections and interactions
        in one chart automatically propagate to related charts.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-8">Overview</h2>
      
      <p className="text-foreground mb-4">
        Reactive linking is one of BESTLIB's most powerful features. It allows you to create
        coordinated multiple views where user interactions in one visualization are automatically
        reflected in all linked visualizations.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-12">Basic Reactive Layout</h2>
      
      <p className="text-foreground mb-4">
        The simplest way to enable reactive linking is to use <code className="px-1.5 py-0.5 rounded bg-code-background text-primary font-mono text-sm">ReactiveMatrixLayout</code>:
      </p>

      <CodeBlock
        code={`import bestlib as bl
import pandas as pd
import numpy as np

# Generate sample data
np.random.seed(42)
n = 200
data = pd.DataFrame({
    'x': np.random.randn(n),
    'y': np.random.randn(n),
    'z': np.random.randn(n),
    'category': np.random.choice(['A', 'B', 'C'], n)
})

# Create reactive layout
layout = bl.ReactiveMatrixLayout(rows=2, cols=2)

# Create visualizations
scatter_xy = bl.ScatterPlot(data, x='x', y='y', color='category')
scatter_xz = bl.ScatterPlot(data, x='x', y='z', color='category')
hist_x = bl.Histogram(data, x='x', bins=30)
hist_y = bl.Histogram(data, x='y', bins=30)

# Add to layout
layout.add_chart(scatter_xy, row=0, col=0)
layout.add_chart(scatter_xz, row=0, col=1)
layout.add_chart(hist_x, row=1, col=0)
layout.add_chart(hist_y, row=1, col=1)

# Enable reactive linking
layout.enable_linking()

# Display
layout.show()`}
        filename="basic_reactive_linking.py"
      />

      <Card className="my-8 p-6 bg-card border border-border">
        <h3 className="font-semibold text-foreground mb-3">Expected Output:</h3>
        <p className="text-muted-foreground text-sm mb-4">
          A 2×2 grid of charts. When you select points by clicking and dragging in the top-left
          scatter plot, those points are automatically highlighted in all other charts.
        </p>
        <div className="bg-code-background border border-code-border rounded p-4 text-center text-muted-foreground">
          [Interactive visualization with 4 linked charts would appear here]
        </div>
      </Card>

      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-12">How Reactive Linking Works</h2>
      
      <p className="text-foreground mb-4">
        When you call <code className="px-1.5 py-0.5 rounded bg-code-background text-primary font-mono text-sm">layout.enable_linking()</code>,
        BESTLIB creates a shared selection model that all charts subscribe to:
      </p>

      <ol className="space-y-3 text-foreground list-decimal list-inside mb-6">
        <li><strong>Selection Event:</strong> User selects data points in Chart A</li>
        <li><strong>Model Update:</strong> Selection model is updated with selected indices</li>
        <li><strong>Broadcast:</strong> Model broadcasts the update to all subscribed charts</li>
        <li><strong>Visual Update:</strong> Charts B, C, D highlight the corresponding data points</li>
      </ol>

      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-12">Advanced: Custom Selection Logic</h2>
      
      <p className="text-foreground mb-4">
        You can customize how selections are applied using selection predicates:
      </p>

      <CodeBlock
        code={`import bestlib as bl
import pandas as pd

# Load data
data = pd.read_csv('sales_data.csv')

# Create reactive layout
layout = bl.ReactiveMatrixLayout(rows=1, cols=2)

# Create charts
sales_scatter = bl.ScatterPlot(data, x='advertising', y='sales', color='region')
sales_hist = bl.Histogram(data, x='sales', bins=20)

# Add charts
layout.add_chart(sales_scatter, 0, 0)
layout.add_chart(sales_hist, 0, 1)

# Enable linking with custom selection behavior
layout.enable_linking(
    mode='lasso',  # Use lasso selection instead of rectangle
    highlight_color='#6EC1C8',  # Custom highlight color
    opacity=0.3  # Dimmed non-selected points
)

layout.show()`}
        filename="custom_selection.py"
      />

      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-12">Performance Considerations</h2>
      
      <p className="text-foreground mb-4">
        For large datasets, consider these optimization strategies:
      </p>

      <CodeBlock
        code={`# Use data downsampling for large datasets
layout = bl.ReactiveMatrixLayout(
    rows=2,
    cols=2,
    downsample=True,  # Enable automatic downsampling
    max_points=10000  # Limit to 10k points per chart
)

# Use progressive rendering
layout.enable_linking(
    progressive=True,  # Update charts progressively
    debounce_ms=50    # Debounce selection updates
)`}
        filename="performance_optimization.py"
      />

      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-12">Complete Example</h2>
      
      <p className="text-foreground mb-4">
        Here's a complete example showing reactive linking with the Iris dataset:
      </p>

      <CodeBlock
        code={`import bestlib as bl
import pandas as pd
from sklearn.datasets import load_iris

# Load Iris dataset
iris = load_iris()
data = pd.DataFrame(
    iris.data,
    columns=['sepal_length', 'sepal_width', 'petal_length', 'petal_width']
)
data['species'] = iris.target_names[iris.target]

# Create a comprehensive reactive dashboard
layout = bl.ReactiveMatrixLayout(rows=2, cols=3)

# Row 1: Scatter plots
scatter_sepal = bl.ScatterPlot(
    data,
    x='sepal_length',
    y='sepal_width',
    color='species',
    title='Sepal Dimensions'
)

scatter_petal = bl.ScatterPlot(
    data,
    x='petal_length',
    y='petal_width',
    color='species',
    title='Petal Dimensions'
)

radviz = bl.Radviz(
    data,
    features=['sepal_length', 'sepal_width', 'petal_length', 'petal_width'],
    color='species',
    title='Radviz Projection'
)

# Row 2: Histograms and parallel coordinates
hist_sepal = bl.Histogram(
    data,
    x='sepal_length',
    bins=15,
    title='Sepal Length Distribution'
)

hist_petal = bl.Histogram(
    data,
    x='petal_length',
    bins=15,
    title='Petal Length Distribution'
)

parallel = bl.ParallelCoordinates(
    data,
    dimensions=['sepal_length', 'sepal_width', 'petal_length', 'petal_width'],
    color='species',
    title='Parallel Coordinates'
)

# Add all charts to layout
layout.add_chart(scatter_sepal, 0, 0)
layout.add_chart(scatter_petal, 0, 1)
layout.add_chart(radviz, 0, 2)
layout.add_chart(hist_sepal, 1, 0)
layout.add_chart(hist_petal, 1, 1)
layout.add_chart(parallel, 1, 2)

# Enable reactive linking across all charts
layout.enable_linking(
    mode='lasso',
    highlight_color='#6EC1C8',
    selection_opacity=1.0,
    non_selection_opacity=0.2
)

# Display the interactive dashboard
layout.show()`}
        filename="iris_reactive_dashboard.py"
      />

      <Card className="my-8 p-6 bg-card border border-border">
        <h3 className="font-semibold text-foreground mb-3">Try it yourself:</h3>
        <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
          <li>Click and drag in any scatter plot to select points</li>
          <li>Watch as the selection highlights in all other views</li>
          <li>Try different selection tools (rectangle, lasso, box)</li>
          <li>Double-click to clear the selection</li>
        </ol>
      </Card>

      <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
        <Link to="/tutorials">
          <Button variant="outline" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Tutorials
          </Button>
        </Link>
        <Link to="/examples/linked">
          <Button variant="outline" className="gap-2">
            View Examples
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </DocsLayout>
  );
};

export default TutorialsReactiveLinking;
