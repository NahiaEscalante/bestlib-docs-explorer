import { DocsLayout } from "@/components/DocsLayout";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";

export default function LinkedViews() {
  return (
    <DocsLayout>
      <Breadcrumb
        items={[
          { label: "Examples", href: "/examples" },
          { label: "Linked Views" },
        ]}
      />

      <h1 className="text-4xl font-bold mb-6 text-foreground">
        Linked Views
      </h1>

      <p className="text-lg text-muted-foreground mb-8">
        Linked Views allow interactions in one visualization to update other
        charts automatically. This example demonstrates scatter-to-histogram
        linking using BESTLIB’s reactive engine.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-foreground">
        Example Code
      </h2>

      <CodeBlock
        language="python"
        filename="linked_views.py"
        code={`from BESTLIB.layouts.reactive import ReactiveMatrixLayout
import pandas as pd

df = pd.read_csv("iris.csv")

layout = ReactiveMatrixLayout("AB")

# Main scatter plot
layout.map_scatter(
    "A",
    df,
    x_col="sepal_length",
    y_col="sepal_width",
    color_col="species",
    title="Scatter (Interactive)"
)

# Histogram linked to the scatter selections
layout.map_histogram(
    "B",
    df,
    col="petal_length",
    bins=20,
    title="Histogram (Linked)"
)

layout.display()`}
      />

      <h2 className="text-2xl font-semibold mt-12 mb-4 text-foreground">
        How Linked Views Work
      </h2>

      <ul className="list-disc list-inside text-foreground space-y-2">
        <li>JavaScript captures the brush or click selection in view A.</li>
        <li>The selected indices are sent to Python using the CommManager.</li>
        <li>ReactiveMatrixLayout updates its internal SelectionModel.</li>
        <li>ReactiveEngine requests updated specs for all linked views.</li>
        <li>D3 redraws the histogram using the filtered data.</li>
      </ul>
    </DocsLayout>
  );
}
