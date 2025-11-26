import { DocsLayout } from "@/components/DocsLayout";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";
import { Card } from "@/components/ui/card";

const ApiPython = () => {
  return (
    <DocsLayout>
      <Breadcrumb items={[{ label: "API Reference", href: "/api" }, { label: "Python API" }]} />
      
      <h1 className="text-4xl font-bold mb-6 text-foreground">Python API Reference</h1>
      
      <p className="text-lg text-muted-foreground mb-8">
        Complete reference documentation for BESTLIB's Python API.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-8">MatrixLayout</h2>
      
      <p className="text-foreground mb-4">
        A flexible layout container for organizing multiple visualizations in a grid.
      </p>

      <CodeBlock
        code={`class MatrixLayout(rows: int, cols: int, **kwargs)`}
        language="python"
      />

      <Card className="p-6 bg-card border border-border my-6">
        <h3 className="font-semibold text-foreground mb-4">Parameters:</h3>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 pr-4 text-foreground">Parameter</th>
              <th className="text-left py-2 pr-4 text-foreground">Type</th>
              <th className="text-left py-2 text-foreground">Description</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr className="border-b border-border">
              <td className="py-2 pr-4"><code className="text-primary">rows</code></td>
              <td className="py-2 pr-4">int</td>
              <td className="py-2">Number of rows in the grid layout</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-2 pr-4"><code className="text-primary">cols</code></td>
              <td className="py-2 pr-4">int</td>
              <td className="py-2">Number of columns in the grid layout</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-2 pr-4"><code className="text-primary">width</code></td>
              <td className="py-2 pr-4">int, optional</td>
              <td className="py-2">Total width in pixels (default: 800)</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-2 pr-4"><code className="text-primary">height</code></td>
              <td className="py-2 pr-4">int, optional</td>
              <td className="py-2">Total height in pixels (default: 600)</td>
            </tr>
            <tr>
              <td className="py-2 pr-4"><code className="text-primary">spacing</code></td>
              <td className="py-2 pr-4">int, optional</td>
              <td className="py-2">Spacing between charts in pixels (default: 10)</td>
            </tr>
          </tbody>
        </table>
      </Card>

      <h3 className="text-xl font-semibold mb-3 text-foreground mt-8">Methods</h3>

      <div className="space-y-6">
        <Card className="p-6 bg-card border border-border">
          <h4 className="font-semibold text-foreground mb-2">
            <code className="text-primary">add_chart(chart, row, col, rowspan=1, colspan=1)</code>
          </h4>
          <p className="text-muted-foreground mb-4">
            Add a chart to the layout at the specified position.
          </p>
          <h5 className="font-semibold text-foreground text-sm mb-2">Parameters:</h5>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><code className="text-primary">chart</code> (Chart) - The chart object to add</li>
            <li><code className="text-primary">row</code> (int) - Row index (0-based)</li>
            <li><code className="text-primary">col</code> (int) - Column index (0-based)</li>
            <li><code className="text-primary">rowspan</code> (int, optional) - Number of rows to span</li>
            <li><code className="text-primary">colspan</code> (int, optional) - Number of columns to span</li>
          </ul>
          <h5 className="font-semibold text-foreground text-sm mb-2 mt-4">Returns:</h5>
          <p className="text-sm text-muted-foreground">None</p>
        </Card>

        <Card className="p-6 bg-card border border-border">
          <h4 className="font-semibold text-foreground mb-2">
            <code className="text-primary">remove_chart(row, col)</code>
          </h4>
          <p className="text-muted-foreground mb-4">
            Remove a chart from the specified position.
          </p>
          <h5 className="font-semibold text-foreground text-sm mb-2">Parameters:</h5>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><code className="text-primary">row</code> (int) - Row index</li>
            <li><code className="text-primary">col</code> (int) - Column index</li>
          </ul>
        </Card>

        <Card className="p-6 bg-card border border-border">
          <h4 className="font-semibold text-foreground mb-2">
            <code className="text-primary">show()</code>
          </h4>
          <p className="text-muted-foreground mb-4">
            Display the layout with all charts.
          </p>
          <h5 className="font-semibold text-foreground text-sm mb-2">Returns:</h5>
          <p className="text-sm text-muted-foreground">None</p>
        </Card>

        <Card className="p-6 bg-card border border-border">
          <h4 className="font-semibold text-foreground mb-2">
            <code className="text-primary">save_html(filename, **kwargs)</code>
          </h4>
          <p className="text-muted-foreground mb-4">
            Export the layout to an HTML file.
          </p>
          <h5 className="font-semibold text-foreground text-sm mb-2">Parameters:</h5>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><code className="text-primary">filename</code> (str) - Output file path</li>
            <li><code className="text-primary">title</code> (str, optional) - Page title</li>
            <li><code className="text-primary">include_css</code> (bool, optional) - Include CSS (default: True)</li>
            <li><code className="text-primary">include_js</code> (bool, optional) - Include JavaScript (default: True)</li>
          </ul>
        </Card>
      </div>

      <h3 className="text-xl font-semibold mb-3 text-foreground mt-12">Example Usage</h3>

      <CodeBlock
        code={`import bestlib as bl
import pandas as pd

# Create layout
layout = bl.MatrixLayout(rows=2, cols=2, width=1000, height=800)

# Load data
data = pd.read_csv('data.csv')

# Create charts
scatter = bl.ScatterPlot(data, x='x', y='y')
histogram = bl.Histogram(data, x='x')

# Add charts to layout
layout.add_chart(scatter, row=0, col=0)
layout.add_chart(histogram, row=0, col=1, colspan=2)

# Display
layout.show()

# Or save to file
layout.save_html('dashboard.html', title='My Dashboard')`}
        filename="matrix_layout_example.py"
      />

      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-12">ReactiveMatrixLayout</h2>
      
      <p className="text-foreground mb-4">
        An enhanced layout with automatic reactive linking between charts.
      </p>

      <CodeBlock
        code={`class ReactiveMatrixLayout(rows: int, cols: int, **kwargs)`}
        language="python"
      />

      <p className="text-foreground mb-4">
        Inherits all methods from <code className="px-1.5 py-0.5 rounded bg-code-background text-primary font-mono text-sm">MatrixLayout</code> with additional reactive features.
      </p>

      <h3 className="text-xl font-semibold mb-3 text-foreground mt-8">Additional Methods</h3>

      <Card className="p-6 bg-card border border-border">
        <h4 className="font-semibold text-foreground mb-2">
          <code className="text-primary">enable_linking(**kwargs)</code>
        </h4>
        <p className="text-muted-foreground mb-4">
          Enable reactive linking between all charts in the layout.
        </p>
        <h5 className="font-semibold text-foreground text-sm mb-2">Parameters:</h5>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><code className="text-primary">mode</code> (str, optional) - Selection mode: 'rectangle', 'lasso', or 'both' (default: 'rectangle')</li>
          <li><code className="text-primary">highlight_color</code> (str, optional) - Color for highlighted selections</li>
          <li><code className="text-primary">selection_opacity</code> (float, optional) - Opacity for selected points (default: 1.0)</li>
          <li><code className="text-primary">non_selection_opacity</code> (float, optional) - Opacity for non-selected points (default: 0.2)</li>
          <li><code className="text-primary">progressive</code> (bool, optional) - Enable progressive rendering (default: False)</li>
        </ul>
      </Card>

      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-12">ScatterPlot</h2>
      
      <p className="text-foreground mb-4">
        Create interactive scatter plot visualizations.
      </p>

      <CodeBlock
        code={`class ScatterPlot(data, x, y, **kwargs)`}
        language="python"
      />

      <Card className="p-6 bg-card border border-border my-6">
        <h3 className="font-semibold text-foreground mb-4">Parameters:</h3>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 pr-4 text-foreground">Parameter</th>
              <th className="text-left py-2 pr-4 text-foreground">Type</th>
              <th className="text-left py-2 text-foreground">Description</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr className="border-b border-border">
              <td className="py-2 pr-4"><code className="text-primary">data</code></td>
              <td className="py-2 pr-4">DataFrame</td>
              <td className="py-2">Pandas DataFrame containing the data</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-2 pr-4"><code className="text-primary">x</code></td>
              <td className="py-2 pr-4">str</td>
              <td className="py-2">Column name for x-axis values</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-2 pr-4"><code className="text-primary">y</code></td>
              <td className="py-2 pr-4">str</td>
              <td className="py-2">Column name for y-axis values</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-2 pr-4"><code className="text-primary">color</code></td>
              <td className="py-2 pr-4">str, optional</td>
              <td className="py-2">Column name for color encoding</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-2 pr-4"><code className="text-primary">size</code></td>
              <td className="py-2 pr-4">str/int, optional</td>
              <td className="py-2">Column name or fixed size for points</td>
            </tr>
            <tr>
              <td className="py-2 pr-4"><code className="text-primary">title</code></td>
              <td className="py-2 pr-4">str, optional</td>
              <td className="py-2">Chart title</td>
            </tr>
          </tbody>
        </table>
      </Card>

      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-12">See Also</h2>
      
      <ul className="space-y-2 text-foreground">
        <li>
          <a href="/api/javascript" className="text-primary hover:underline">
            JavaScript API Reference
          </a>
        </li>
        <li>
          <a href="/api/models" className="text-primary hover:underline">
            Data Models Reference
          </a>
        </li>
        <li>
          <a href="/examples" className="text-primary hover:underline">
            Code Examples
          </a>
        </li>
      </ul>
    </DocsLayout>
  );
};

export default ApiPython;
