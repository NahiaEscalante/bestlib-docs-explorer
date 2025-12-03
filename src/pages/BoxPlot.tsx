import { DocsLayout } from "@/components/DocsLayout";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";

const BoxPlot = () => {
  return (
    <DocsLayout>
      <Breadcrumb
        items={[
          { label: "Charts", href: "/charts/index" },
          { label: "Boxplot" },
        ]}
      />

      <h1 className="text-4xl font-bold mb-6 text-foreground">
        Boxplot
      </h1>

      <p className="text-lg text-muted-foreground mb-8">
        Create boxplots to visualize the distribution of data across different categories. 
        Boxplots show quartiles, median, and outliers, making them perfect for comparing 
        distributions and can be linked with other charts through ReactiveMatrixLayout.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-12">
        Example: Boxplot by Category
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

selection_box = SelectionModel()

layout_box = ReactiveMatrixLayout("X", selection_model=selection_box)

layout_box.set_data(df_main)

layout_box.add_boxplot(
    "X",
    column="value",
    category_col="category",
    xLabel="Categoría",
    yLabel="Valor"
)

layout_box.display()

print("Boxplot renderizado")`}
        language="python"
        filename="boxplot.py"
      />

      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-12">
        Parameters
      </h2>

      <ul className="space-y-2 text-foreground list-disc list-inside mb-6">
        <li><code className="bg-neutral-800 px-2 py-1 rounded">column</code>: Column name for the values to plot</li>
        <li><code className="bg-neutral-800 px-2 py-1 rounded">category_col</code>: Column name for grouping categories</li>
        <li><code className="bg-neutral-800 px-2 py-1 rounded">xLabel</code>: Label for x-axis</li>
        <li><code className="bg-neutral-800 px-2 py-1 rounded">yLabel</code>: Label for y-axis</li>
      </ul>
    </DocsLayout>
  );
};

export default BoxPlot;
