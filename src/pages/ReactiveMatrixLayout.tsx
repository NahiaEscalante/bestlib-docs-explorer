import { DocsLayout } from "@/components/DocsLayout";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";
import { Card } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

const ReactiveMatrixLayout = () => {
  return (
    <DocsLayout>
      <Breadcrumb
        items={[
          { label: "Layouts", href: "/layouts" },
          { label: "ReactiveMatrixLayout" },
        ]}
      />

      <h1 className="text-4xl font-bold mb-6 text-foreground">
        ReactiveMatrixLayout
      </h1>

      <p className="text-lg text-muted-foreground mb-8">
        BESTLIB’s reactive layout enables automatic coordination between 
        charts. Selecting data in one view instantly updates all linked views.
      </p>

      {/* Concept */}
      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-12">
        What Makes It Reactive?
      </h2>

      <p className="text-foreground mb-4">
        ReactiveMatrixLayout integrates BESTLIB’s SelectionModel and 
        ReactiveEngine. When a user brushes or clicks in one chart, the 
        new state propagates across all related charts.
      </p>

      <Card className="my-6 p-4 border-l-4 border-l-primary">
        <div className="flex gap-3">
          <AlertCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-foreground mb-1">
              Automatic Linking
            </p>
            <p className="text-sm text-muted-foreground">
              No manual event handlers needed. Linking happens internally 
              through the ReactiveEngine.
            </p>
          </div>
        </div>
      </Card>

      {/* Example */}
      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-12">
        Example: Linked Scatter + Histogram
      </h2>

      <CodeBlock
        code={`from BESTLIB.reactive import ReactiveMatrixLayout
import pandas as pd

df = pd.read_csv("iris.csv")

layout = ReactiveMatrixLayout("SH\\nHB")

layout.add_scatter('S', df, x_col='sepal_length', y_col='sepal_width', interactive=True)
layout.add_histogram('H', df, col='petal_length', interactive=True)
layout.add_barchart('B', df, category_col='species', value_col='petal_length')

layout.display()`}
        language="python"
        filename="reactive_example.py"
      />

      {/* How it works */}
      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-12">
        How It Works Internally
      </h2>

      <ul className="space-y-2 text-foreground list-disc list-inside mb-6">
        <li>User selects points in chart "S"</li>
        <li>JavaScript emits a <code>select</code> event</li>
        <li>CommManager sends it to Python</li>
        <li>SelectionModel updates the selected rows</li>
        <li>ReactiveEngine regenerates specs for all linked charts</li>
        <li>JavaScript updates the visualizations automatically</li>
      </ul>
    </DocsLayout>
  );
};

export default ReactiveMatrixLayout;
