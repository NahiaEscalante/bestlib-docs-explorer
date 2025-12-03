import { DocsLayout } from "@/components/DocsLayout";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";

const Histogram = () => {
  return (
    <DocsLayout>
      <Breadcrumb
        items={[
          { label: "Charts", href: "/charts/index" },
          { label: "Histogram" },
        ]}
      />

      <h1 className="text-4xl font-bold mb-6 text-foreground">
        Histogram
      </h1>

      <p className="text-lg text-muted-foreground mb-8">
        Create histograms to visualize the distribution of continuous data. Histograms 
        show the frequency of values within specified bins and can be linked with other 
        charts through ReactiveMatrixLayout.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-12">
        Example: Histogram with Custom Bins
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

selection_hist = SelectionModel()

layout_hist = ReactiveMatrixLayout("H", selection_model=selection_hist)

layout_hist.set_data(df_main)

layout_hist.add_histogram(
    "H",
    column="value",
    bins=30,
    xLabel="Valor",
    yLabel="Frecuencia"
)

layout_hist.display()

print("Histogram renderizado")`}
        language="python"
        filename="histogram.py"
      />

      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-12">
        Parameters
      </h2>

      <ul className="space-y-2 text-foreground list-disc list-inside mb-6">
        <li><code className="bg-neutral-800 px-2 py-1 rounded">column</code>: Column name to create histogram from</li>
        <li><code className="bg-neutral-800 px-2 py-1 rounded">bins</code>: Number of bins for the histogram</li>
        <li><code className="bg-neutral-800 px-2 py-1 rounded">xLabel</code>: Label for x-axis</li>
        <li><code className="bg-neutral-800 px-2 py-1 rounded">yLabel</code>: Label for y-axis</li>
      </ul>
    </DocsLayout>
  );
};

export default Histogram;
