import { DocsLayout } from "@/components/DocsLayout";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";
import { Card } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

const QuickStart = () => {
  return (
    <DocsLayout>
      <Breadcrumb
        items={[
          { label: "Getting Started", href: "/getting-started" },
          { label: "Quick Start" },
        ]}
      />

      <h1 className="text-4xl font-bold mb-6 text-foreground">
        Quick Start Guide
      </h1>

      <p className="text-lg text-muted-foreground mb-8">
        Learn the essentials of BESTLIB: installation, generating your first
        visualization, and building an ASCII-based dashboard powered by
        D3.js and Python specifications.
      </p>

      {/* INSTALLATION */}
      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-10">
        Installation
      </h2>

      <p className="text-foreground mb-4">
        Install BESTLIB directly from pip:
      </p>

      <CodeBlock code="!pip install pybestlib" language="bash" />

      <Card className="my-6 p-4 border-l-4 border-l-primary">
        <div className="flex gap-3">
          <AlertCircle className="h-5 w-5 text-primary mt-0.5" />
          <div>
            <p className="font-semibold text-foreground mb-1">Environment Support</p>
            <p className="text-sm text-muted-foreground">
              BESTLIB is compatible with Jupyter Notebook, JupyterLab and Google Colab,
              using the Jupyter Comm Protocol for JS ↔ Python communication.
            </p>
          </div>
        </div>
      </Card>

      {/* FIRST VISUALIZATION */}
      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-14">
        Your First Visualization
      </h2>

      <p className="text-foreground mb-4">
        BESTLIB uses ASCII layouts and wrapper functions from the legacy API for simplicity.
        Here's how to create a basic BarChart:
      </p>

      <CodeBlock
        code={`import pandas as pd
from BESTLIB.layouts.matrix import MatrixLayout

df = pd.DataFrame({
    'category': ['A', 'B', 'C'],
    'value': [10, 20, 15]
})

layout = MatrixLayout("A")

layout.map_barchart(
    'A',
    df,
    category_col='category',
    value_col='value',
    xLabel='Category',
    yLabel='Value'
)

layout.display()`}
        filename="first_visualization.py"
      />

      <Card className="my-6 p-4 border-l-4 border-l-primary">
        <div className="flex gap-3">
          <AlertCircle className="h-5 w-5 text-primary mt-0.5" />
          <div>
            <p className="font-semibold text-foreground mb-1">
              Behind the Scenes
            </p>
            <p className="text-sm text-muted-foreground">
              BESTLIB converts your DataFrame into dictionaries, validates input,
              generates a D3.js specification, injects HTML, and renders automatically.
            </p>
          </div>
        </div>
      </Card>

      {/* MATRIX LAYOUT */}
      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-14">
        Building an ASCII Dashboard
      </h2>

      <p className="text-foreground mb-4">
        MatrixLayout lets you define dashboards entirely using ASCII text.
        Each letter corresponds to a view that can contain a chart:
      </p>

      <CodeBlock
        code={`import pandas as pd
from BESTLIB.layouts.matrix import MatrixLayout

df = pd.read_csv('iris.csv')

layout = MatrixLayout(\"""
AB
CD
\""")

layout.map_scatter('A', df, x_col='sepal_length', y_col='sepal_width')
layout.map_histogram('B', df, col='petal_length', bins=20)
layout.map_radviz('C', df, features=['sepal_length','sepal_width','petal_length'])
layout.map_parallel('D', df, dimensions=['sepal_length','sepal_width','petal_length'])

layout.display()`}
        filename="ascii_dashboard.py"
      />

      <Card className="my-6 p-4 border-l-4 border-l-primary">
        <div className="flex gap-3">
          <AlertCircle className="h-5 w-5 text-primary mt-0.5" />
          <div>
            <p className="font-semibold text-foreground mb-1">
              ASCII Layout Engine
            </p>
            <p className="text-sm text-muted-foreground">
              The LayoutEngine parses layouts like "AB\\nCD", converts them to grid
              structures, validates block groups and prepares the dashboard for rendering.
            </p>
          </div>
        </div>
      </Card>

      {/* REACTIVE LINKING */}
      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-14">
        Enabling Reactive Linking
      </h2>

      <p className="text-foreground mb-4">
        BESTLIB’s reactive engine synchronizes selections across linked views.
        ReactiveMatrixLayout activates SelectionModel + ReactiveEngine automatically.
      </p>

      <CodeBlock
        code={`import pandas as pd
from BESTLIB.layouts.reactive import ReactiveMatrixLayout

df = pd.read_csv('iris.csv')

layout = ReactiveMatrixLayout(\"AB\")

layout.map_scatter('A', df, x_col='sepal_length', y_col='sepal_width')
layout.map_histogram('B', df, col='sepal_length')

layout.display()  # Selections now sync automatically`}
        filename="reactive_linking.py"
      />

      <Card className="my-6 p-4 border-l-4 border-l-primary">
        <div className="flex gap-3">
          <AlertCircle className="h-5 w-5 text-primary mt-0.5" />
          <div>
            <p className="font-semibold text-foreground mb-1">
              How It Works
            </p>
            <p className="text-sm text-muted-foreground">
              Selection events are captured in JavaScript, sent through the CommManager
              to Python, processed by the ReactiveEngine, and rendered back into the dashboard.
            </p>
          </div>
        </div>
      </Card>

      {/* NEXT STEPS */}
      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-14">
        Next Steps
      </h2>

      <p className="text-foreground mb-3">
        Explore more of BESTLIB’s capabilities:
      </p>

      <ul className="space-y-2 text-foreground list-disc list-inside mb-10">
        <li>
          <a href="/charts" className="text-primary hover:underline">
            Chart Catalog
          </a>{" "}
          — 30+ interactive chart types.
        </li>
        <li>
          <a href="/layouts" className="text-primary hover:underline">
            Layout System
          </a>{" "}
          — full ASCII layout features.
        </li>
        <li>
          <a href="/reactive" className="text-primary hover:underline">
            Reactive Engine
          </a>{" "}
          — linking, propagation & SelectionModel.
        </li>
        <li>
          <a href="/api" className="text-primary hover:underline">
            API Reference
          </a>{" "}
          — all classes, modules & methods.
        </li>
      </ul>
    </DocsLayout>
  );
};

export default QuickStart;
