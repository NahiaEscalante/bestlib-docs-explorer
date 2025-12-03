import { DocsLayout } from "@/components/DocsLayout";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";

export default function InteractiveScatter() {
  return (
    <DocsLayout>
      <Breadcrumb
        items={[
          { label: "Examples", href: "/examples" },
          { label: "Interactive Scatter" },
        ]}
      />

      <h1 className="text-4xl font-bold mb-6 text-foreground">
        Interactive Scatter
      </h1>

      <p className="text-lg text-muted-foreground mb-8">
        This example demonstrates how to build an interactive scatter plot using
        BESTLIB. You can drag to select points, and hover to inspect values.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-foreground">
        Example Code
      </h2>

      <CodeBlock
        language="python"
        filename="interactive_scatter.py"
        code={`from BESTLIB.layouts.reactive import ReactiveMatrixLayout
import pandas as pd

df = pd.read_csv("iris.csv")

layout = ReactiveMatrixLayout("S")

layout.map_scatter(
    "S",
    df,
    x_col="sepal_length",
    y_col="sepal_width",
    color_col="species",
    title="Interactive Scatter"
)

layout.display()`}
      />

      <h2 className="text-2xl font-semibold mt-12 mb-4 text-foreground">
        What Happens Behind the Scenes?
      </h2>

      <ul className="list-disc list-inside text-foreground space-y-2">
        <li>The scatter plot is rendered using D3.js.</li>
        <li>Brush gestures are captured in JavaScript.</li>
        <li>Selections are sent to Python through BESTLIB’s CommManager.</li>
        <li>ReactiveMatrixLayout updates its SelectionModel.</li>
        <li>D3 redraws the selected points with highlighting.</li>
      </ul>
    </DocsLayout>
  );
}
