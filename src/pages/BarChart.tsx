import { DocsLayout } from "@/components/DocsLayout";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";

const BarChart = () => {
  return (
    <DocsLayout>
      <Breadcrumb
        items={[
          { label: "Charts", href: "/charts/index" },
          { label: "Bar Chart" },
        ]}
      />

      <h1 className="text-4xl font-bold mb-6 text-foreground">
        Bar Chart
      </h1>

      <p className="text-lg text-muted-foreground mb-8">
        Create bar charts to visualize categorical data. Bar charts are ideal for 
        comparing values across different categories and can be linked with other 
        visualizations through ReactiveMatrixLayout.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-12">
        Example: Bar Chart with Aggregated Data
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

# Preparar datos para bar chart
bar_data = df_main.groupby('category')['value'].mean().reset_index()
bar_data.columns = ['category', 'mean_value']

selection_bar = SelectionModel()

layout_bar = ReactiveMatrixLayout("B", selection_model=selection_bar)

layout_bar.set_data(bar_data)

layout_bar.add_barchart(
    "B",
    category_col="category",
    value_col="mean_value",
    xLabel="Categoría",
    yLabel="Valor Promedio"
)

layout_bar.display()

print("Bar Chart renderizado")`}
        language="python"
        filename="bar_chart.py"
      />

      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-12">
        Parameters
      </h2>

      <ul className="space-y-2 text-foreground list-disc list-inside mb-6">
        <li><code className="bg-neutral-800 px-2 py-1 rounded">category_col</code>: Column name for categories (x-axis)</li>
        <li><code className="bg-neutral-800 px-2 py-1 rounded">value_col</code>: Column name for bar heights (y-axis)</li>
        <li><code className="bg-neutral-800 px-2 py-1 rounded">xLabel</code>: Label for x-axis</li>
        <li><code className="bg-neutral-800 px-2 py-1 rounded">yLabel</code>: Label for y-axis</li>
      </ul>
    </DocsLayout>
  );
};

export default BarChart;
