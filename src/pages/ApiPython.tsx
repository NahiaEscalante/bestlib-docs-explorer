import { DocsLayout } from "@/components/DocsLayout";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";
import { Card } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

const ApiPython = () => {
  return (
    <DocsLayout>
      <Breadcrumb
        items={[
          { label: "API", href: "/api" },
          { label: "Python API" },
        ]}
      />

      <h1 className="text-4xl font-bold mb-6 text-foreground">
        Python API Reference
      </h1>

      <p className="text-lg text-muted-foreground mb-8">
        The Python API is the entry point to BESTLIB. It provides lightweight
        layout classes, chart mapping functions, validation utilities, and
        the reactive engine for linked views.
      </p>

      {/* SECTION: LAYOUTS */}
      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-12">
        Layouts
      </h2>

      <p className="text-foreground mb-4">
        BESTLIB defines two main layout classes:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-4 text-foreground">
        <li><strong>MatrixLayout</strong> — static ASCII dashboards</li>
        <li><strong>ReactiveMatrixLayout</strong> — dashboards with linked interactions</li>
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-3 text-foreground">
        MatrixLayout
      </h3>

      <CodeBlock
        code={`from BESTLIB.layouts.matrix import MatrixLayout

layout = MatrixLayout(\"""
AB
AC
\""")`}
        language="python"
        filename="matrix_layout.py"
      />

      <p className="text-muted-foreground mt-3 mb-6">
        MatrixLayout parses ASCII text to create dashboard grids. Each unique 
        letter maps to a single chart block.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-3 text-foreground">
        ReactiveMatrixLayout
      </h3>

      <CodeBlock
        code={`from BESTLIB.layouts.reactive import ReactiveMatrixLayout

reactive = ReactiveMatrixLayout("AB")`}
        language="python"
        filename="reactive_layout.py"
      />

      <Card className="my-6 p-4 border-l-4 border-l-primary">
        <div className="flex gap-3">
          <AlertCircle className="h-5 w-5 text-primary mt-1" />
          <div>
            <p className="font-semibold text-foreground mb-1">
              Built-in Reactivity
            </p>
            <p className="text-sm text-muted-foreground">
              ReactiveMatrixLayout automatically wires SelectionModel and 
              ReactiveEngine to synchronize selections between charts.
            </p>
          </div>
        </div>
      </Card>

      {/* SECTION: CHART MAPPING */}
      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-16">
        Mapping Charts to Layouts
      </h2>

      <p className="text-foreground mb-4">
        BESTLIB provides wrapper methods to attach charts using a letter 
        identifier from the ASCII layout.
      </p>

      <CodeBlock
        code={`layout.map_scatter("A", df, x_col="x", y_col="y")
layout.map_histogram("B", df, col="value")
layout.map_barchart("C", df, category_col="type", value_col="count")`}
        language="python"
        filename="mapping_charts.py"
      />

      <p className="text-muted-foreground mt-3 mb-8">
        These wrappers construct the proper Chart classes internally and attach 
        them to the layout.
      </p>

      {/* SECTION: CHART BASE CLASS */}
      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-16">
        ChartBase (for advanced users)
      </h2>

      <p className="text-foreground mb-4">
        All charts inherit from <code>ChartBase</code>. This class handles:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-foreground">
        <li>data validation</li>
        <li>data preparation (df → records)</li>
        <li>specification building</li>
        <li>chart metadata</li>
      </ul>

      <CodeBlock
        code={`class ChartBase:
    chart_type = None

    def validate_data(self, data, **options):
        raise NotImplementedError

    def prepare_data(self, data, **options):
        raise NotImplementedError

    def get_spec(self):
        return {
            "type": self.chart_type,
            "data": self.data_records,
            "options": self.options
        }`}
        language="python"
        filename="chart_base.py"
      />

      {/* SECTION: DATA PIPELINE */}
      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-16">
        Data Validation & Preparation
      </h2>

      <p className="text-foreground mb-4">
        BESTLIB uses separate modules to validate and normalize incoming 
        DataFrames before passing them to the renderer.
      </p>

      <CodeBlock
        code={`from BESTLIB.data.validators import validate_scatter_data
from BESTLIB.data.preparators import prepare_scatter_data

validate_scatter_data(df, x_col="a", y_col="b")
records = prepare_scatter_data(df, x_col="a", y_col="b")`}
        language="python"
        filename="validation_pipeline.py"
      />

      <Card className="my-6 p-4 border-l-4 border-l-primary">
        <div className="flex gap-3">
          <AlertCircle className="h-5 w-5 text-primary mt-1" />
          <div>
            <p className="font-semibold text-foreground mb-1">
              Consistency Guaranteed
            </p>
            <p className="text-sm text-muted-foreground">
              All charts depend on the same validation + preparation 
              pipeline, ensuring predictable behavior.
            </p>
          </div>
        </div>
      </Card>

      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-16">
        Rendering Dashboards
      </h2>

      <p className="text-foreground mb-4">
        Use <code>.display()</code> to generate the dashboard cell with inline 
        HTML, JS assets, and chart specs.
      </p>

      <CodeBlock
        code={`layout.display()`}
        language="python"
        filename="display.py"
      />

      <p className="text-muted-foreground mt-3 mb-6">
        Rendering is done entirely in the browser via D3.js using the 
        generated specifications.
      </p>

      {/* SECTION: EVENTS */}
      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-16">
        Interactive Events (JS → Python)
      </h2>

      <p className="text-foreground mb-4">
        BESTLIB sends selection, hover, click and brush events through the 
        Jupyter Comm protocol:
      </p>

      <CodeBlock
        code={`{
  "type": "select",
  "payload": { "items": [1, 2, 3], "__view_letter__": "A" },
  "div_id": "matrix-12345"
}`}
        language="json"
        filename="event_message.json"
      />

      <p className="text-muted-foreground mt-4 mb-16">
        ReactiveMatrixLayout listens for these events and updates linked views
        automatically.
      </p>
    </DocsLayout>
  );
};

export default ApiPython;
