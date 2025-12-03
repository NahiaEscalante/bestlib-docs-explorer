import { DocsLayout } from "@/components/DocsLayout";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";
import { Card } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

const CoreConcepts = () => {
  return (
    <DocsLayout>
      <Breadcrumb
        items={[
          { label: "Getting Started", href: "/getting-started" },
          { label: "Core Concepts" },
        ]}
      />

      <h1 className="text-4xl font-bold mb-6 text-foreground">
        Core Concepts
      </h1>

      <p className="text-lg text-muted-foreground mb-8">
        Understand the fundamental ideas behind BESTLIB: how layouts work, how 
        charts are defined, how data flows through the system, and how Python 
        and JavaScript communicate to create fully interactive visualizations.
      </p>

      {/* SECTION 1 */}
      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-12">
        1. ASCII Layouts
      </h2>
      <p className="text-foreground mb-4">
        BESTLIB dashboards are built using text-based layout definitions. Each
        letter represents a view. Repeating letters allocate more space to a 
        specific chart.
      </p>

      <CodeBlock
        code={`AB
AC`}
        language="txt"
        filename="layout.txt"
      />

      <Card className="my-6 p-4 border-l-4 border-l-primary">
        <div className="flex gap-3">
          <AlertCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-foreground mb-1">
              Why ASCII Layouts?
            </p>
            <p className="text-sm text-muted-foreground">
              They allow you to design dashboards visually without HTML. 
              BESTLIB’s LayoutEngine parses and validates them automatically.
            </p>
          </div>
        </div>
      </Card>

      {/* SECTION 2 */}
      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-12">
        2. Chart Objects
      </h2>

      <p className="text-foreground mb-4">
        Every chart in BESTLIB is a Python class derived from{" "}
        <code>ChartBase</code>. These objects validate data, prepare it, 
        and generate a D3-compatible specification.
      </p>

      <CodeBlock
        code={`class ScatterChart(ChartBase):
    chart_type = "scatter"

    def validate_data(self, df, x_col, y_col):
        # uses validators to ensure the data is correct
        ...

    def prepare_data(self, df, x_col, y_col):
        # convert DataFrame → list of dicts
        ...

    def get_spec(self):
        return {
            "type": "scatter",
            "data": self.data,
            "options": self.options
        }`}
        language="python"
        filename="scatter_chart.py"
      />

      {/* SECTION 3 */}
      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-12">
        3. Data Preparation Pipeline
      </h2>

      <p className="text-foreground mb-4">
        Raw data is validated, normalized and transformed before reaching the
        frontend. This ensures that all charts receive clean, consistent inputs.
      </p>

      <ul className="space-y-2 text-foreground list-disc list-inside mb-6">
        <li><strong>validators.py:</strong> checks columns, types and structure</li>
        <li><strong>preparators.py:</strong> formats data per chart type</li>
        <li><strong>transformers.py:</strong> ensures JSON-safe structures</li>
      </ul>

      <CodeBlock
        code={`from BESTLIB.data import validators, preparators

validators.validate_scatter_data(df, x_col="x", y_col="y")
data = preparators.prepare_scatter_data(df, x_col="x", y_col="y")`}
        language="python"
        filename="data_pipeline.py"
      />

      {/* SECTION 4 */}
      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-12">
        4. Chart Specifications (Specs)
      </h2>

      <p className="text-foreground mb-4">
        Charts do not render in Python. Instead, BESTLIB generates a{" "}
        <strong>ChartSpec</strong>, which D3.js interprets in the browser.
      </p>

      <CodeBlock
        code={`{
  "type": "scatter",
  "data": [...],
  "options": { "x": "age", "y": "height", "color": "species" }
}`}
        language="json"
        filename="scatter_spec.json"
      />

      {/* SECTION 5 */}
      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-12">
        5. Render Pipeline
      </h2>

      <p className="text-foreground mb-4">
        The rendering process bridges Python and JavaScript with full
        interactivity:
      </p>

      <ul className="space-y-2 text-foreground list-disc list-inside">
        <li>Python builds HTML & inline JS using HTMLGenerator + JSBuilder</li>
        <li>The browser loads D3.js and BESTLIB’s <code>matrix.js</code></li>
        <li>JavaScript executes <code>render()</code> with the layout + specs</li>
        <li>D3.js draws the charts and attaches event listeners</li>
      </ul>

      {/* SECTION 6 */}
      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-12">
        6. Interactive Events
      </h2>

      <p className="text-foreground mb-4">
        User interactions—like clicking, brushing or hovering—are captured by 
        JavaScript and sent back to Python using Jupyter’s Comm Protocol.
      </p>

      <CodeBlock
        code={`{
  "type": "select",
  "div_id": "matrix-1234",
  "payload": { "items": [1, 2, 3], "__view_letter__": "A" }
}`}
        language="json"
        filename="event_message.json"
      />

      {/* SECTION 7 */}
      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-12">
        7. Reactive Engine
      </h2>

      <p className="text-foreground mb-4">
        BESTLIB’s reactive system enables linked views: selecting data in one
        chart updates all related charts automatically.
      </p>

      <CodeBlock
        code={`layout = ReactiveMatrixLayout("SH\\nHB")

layout.add_scatter('S', df, x_col='x', y_col='y', interactive=True)
layout.add_histogram('H', df, col='y', interactive=True)

# Automatic linking and propagation
layout.display()`}
        language="python"
        filename="reactive_engine.py"
      />

      <Card className="my-6 p-4 border-l-4 border-l-primary">
        <div className="flex gap-3">
          <AlertCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-foreground mb-1">
              Automatic Propagation
            </p>
            <p className="text-sm text-muted-foreground">
              BESTLIB handles synchronization internally. No manual event 
              handling is needed—linked charts update instantly.
            </p>
          </div>
        </div>
      </Card>

      {/* FINAL SECTION */}
      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-12">
        Summary
      </h2>

      <p className="text-foreground mb-8">
        BESTLIB combines ASCII layouts, chart objects, data processing, chart 
        specifications and a strong reactive layer to deliver clean, expressive 
        and interactive dashboards inside Jupyter environments.
      </p>
    </DocsLayout>
  );
};

export default CoreConcepts;
