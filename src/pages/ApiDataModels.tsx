import { DocsLayout } from "@/components/DocsLayout";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";
import { Card } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

const ApiDataModels = () => {
  return (
    <DocsLayout>
      <Breadcrumb
        items={[
          { label: "API", href: "/api" },
          { label: "Data Models" },
        ]}
      />

      <h1 className="text-4xl font-bold mb-6 text-foreground">
        Data Models
      </h1>

      <p className="text-lg text-muted-foreground mb-8">
        BESTLIB standardizes data into a consistent structure before sending it
        to the JavaScript renderer. This section describes the exact data flow:
        from Pandas DataFrames → validated inputs → JSON-safe records →
        chart specifications (ChartSpecs) → final rendering in D3.js.
      </p>

      {/* SECTION: DATA PIPELINE OVERVIEW */}
      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-12">
        Data Pipeline Overview
      </h2>

      <p className="text-foreground mb-4">
        Every chart goes through a 3-stage pipeline:
      </p>

      <ul className="list-disc list-inside space-y-2 text-foreground">
        <li><strong>Validation</strong> — ensure required columns & correct types</li>
        <li><strong>Preparation</strong> — convert DataFrame → list of records</li>
        <li><strong>Transformation</strong> — normalize data for JSON (JS-safe)</li>
      </ul>

      <Card className="my-6 p-4 border-l-4 border-l-primary">
        <div className="flex gap-3">
          <AlertCircle className="h-5 w-5 text-primary mt-1" />
          <div>
            <p className="font-semibold text-foreground mb-1">
              Consistency Across All Charts
            </p>
            <p className="text-sm text-muted-foreground">
              BESTLIB ensures every chart receives data in the same structure,
              guaranteeing predictable rendering in D3.js.
            </p>
          </div>
        </div>
      </Card>

      {/* SECTION: VALIDATION */}
      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-16">
        Validation Layer
      </h2>

      <p className="text-foreground mb-4">
        Validation ensures the DataFrame contains the required columns for
        the specific chart type (e.g., x/y for scatter, category/value for bar).
      </p>

      <CodeBlock
        code={`from BESTLIB.data.validators import validate_scatter_data

validate_scatter_data(df, x_col="sepal_length", y_col="sepal_width")`}
        language="python"
        filename="validation.py"
      />

      <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4 mb-8">
        <li>Checks required column names</li>
        <li>Checks numeric types (scatter, histogram)</li>
        <li>Checks categorical columns (bar, radviz)</li>
        <li>Raises <code>DataError</code> if constraints fail</li>
      </ul>

      {/* SECTION: PREPARATORS */}
      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-16">
        Preparation Layer
      </h2>

      <p className="text-foreground mb-4">
        After validation, BESTLIB converts DataFrames into <strong>record lists</strong>,
        the format used in D3 visualizations.
      </p>

      <CodeBlock
        code={`from BESTLIB.data.preparators import prepare_scatter_data

records = prepare_scatter_data(
    df,
    x_col="sepal_length",
    y_col="sepal_width"
)

print(records[:2])
# [{'sepal_length': 5.1, 'sepal_width': 3.5}, ...]`}
        language="python"
        filename="preparation.py"
      />

      <p className="text-muted-foreground mt-4 mb-8">
        Preparators ensure consistent naming, clean values, and correct data shape.
      </p>

      {/* SECTION: TRANSFORMERS */}
      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-16">
        Transformation Layer
      </h2>

      <p className="text-foreground mb-4">
        Transformers convert Pandas/numpy types to JSON-safe Python types.
      </p>

      <CodeBlock
        code={`from BESTLIB.data.transformers import normalize_records

clean = normalize_records(records)
`}
        language="python"
        filename="transformers.py"
      />

      <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4 mb-8">
        <li>numpy.int64 → int</li>
        <li>numpy.float64 → float</li>
        <li>NaN → null</li>
        <li>Pandas Timestamp → ISO string</li>
      </ul>

      {/* SECTION: CHARTSPEC STRUCTURE */}
      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-16">
        ChartSpec (Final Data Model)
      </h2>

      <p className="text-foreground mb-4">
        After validation and preparation, each chart produces a <strong>ChartSpec</strong>,
        the JSON structure consumed by D3.js.
      </p>

      <CodeBlock
        code={`{
  "type": "scatter",
  "data": [
    { "sepal_length": 5.1, "sepal_width": 3.5, "color": "setosa" },
    ...
  ],
  "options": {
    "x": "sepal_length",
    "y": "sepal_width",
    "color": "species",
    "interactive": true
  }
}`}
        language="json"
        filename="chart_spec.json"
      />

      <Card className="my-6 p-4 border-l-4 border-l-primary">
        <div className="flex gap-3">
          <AlertCircle className="h-5 w-5 text-primary mt-1" />
          <div>
            <p className="font-semibold text-foreground mb-1">
              Python Builds the Spec — JS Renders It
            </p>
            <p className="text-sm text-muted-foreground">
              Every BESTLIB chart is defined in Python but rendered in JavaScript
              with D3.js, using this specification format.
            </p>
          </div>
        </div>
      </Card>

      {/* SECTION: FULL PIPELINE */}
      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-16">
        Full Pipeline Example
      </h2>

      <CodeBlock
        code={`from BESTLIB.data.validators import validate_bar_data
from BESTLIB.data.preparators import prepare_bar_data
from BESTLIB.data.transformers import normalize_records

validate_bar_data(df, category_col="species", value_col="count")
records = prepare_bar_data(df, category_col="species", value_col="count")
clean_records = normalize_records(records)

chart_spec = {
    "type": "bar",
    "data": clean_records,
    "options": { "category": "species", "value": "count" }
} 
`}
        language="python"
        filename="full_pipeline.py"
      />

      <p className="text-muted-foreground mt-6 mb-20">
        This is exactly what BESTLIB does internally when you call
        <code>layout.map_barchart()</code> or any other mapping function.
      </p>
    </DocsLayout>
  );
};

export default ApiDataModels;
