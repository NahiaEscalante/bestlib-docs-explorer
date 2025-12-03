import { DocsLayout } from "@/components/DocsLayout";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";

const ScatterPlot = () => {
  return (
    <DocsLayout>
      <Breadcrumb
        items={[
          { label: "Charts", href: "/charts/index" },
          { label: "Scatter Plot" },
        ]}
      />

      <h1 className="text-4xl font-bold mb-6 text-foreground">
        Scatter Plot
      </h1>

      <p className="text-lg text-muted-foreground mb-8">
        Create interactive scatter plots with BESTLIB. Scatter plots are perfect for 
        visualizing relationships between two continuous variables and can be linked 
        with other charts through ReactiveMatrixLayout.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-12">
        Example: Interactive Scatter Plot
      </h2>

      <CodeBlock
        code={`from BESTLIB.reactive import ReactiveMatrixLayout, SelectionModel
import pandas as pd

# Preparar datos
df_main = pd.DataFrame({
    'x': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    'y': [2, 4, 3, 5, 6, 8, 7, 9, 10, 11],
    'category': ['A', 'A', 'B', 'B', 'A', 'B', 'A', 'B', 'A', 'B'],
    'value': [10, 20, 15, 25, 30, 35, 28, 40, 32, 45]
})

# Crear SelectionModel y ReactiveMatrixLayout
selection_scatter = SelectionModel()

layout_scatter = ReactiveMatrixLayout("S", selection_model=selection_scatter)

layout_scatter.set_data(df_main)

layout_scatter.add_scatter(
    "S",
    x_col="x",
    y_col="y",
    category_col="category",
    xLabel="X",
    yLabel="Y",
    interactive=True,
    pointRadius=4
)

layout_scatter.display()

print("Scatter Plot renderizado")`}
        language="python"
        filename="scatter_plot.py"
      />

      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-12">
        Parameters
      </h2>

      <ul className="space-y-2 text-foreground list-disc list-inside mb-6">
        <li><code className="bg-neutral-800 px-2 py-1 rounded">x_col</code>: Column name for x-axis values</li>
        <li><code className="bg-neutral-800 px-2 py-1 rounded">y_col</code>: Column name for y-axis values</li>
        <li><code className="bg-neutral-800 px-2 py-1 rounded">category_col</code>: Optional column for color coding points by category</li>
        <li><code className="bg-neutral-800 px-2 py-1 rounded">xLabel</code>: Label for x-axis</li>
        <li><code className="bg-neutral-800 px-2 py-1 rounded">yLabel</code>: Label for y-axis</li>
        <li><code className="bg-neutral-800 px-2 py-1 rounded">interactive</code>: Enable brush/selection interactions</li>
        <li><code className="bg-neutral-800 px-2 py-1 rounded">pointRadius</code>: Size of the scatter points</li>
      </ul>
    </DocsLayout>
  );
};

export default ScatterPlot;
