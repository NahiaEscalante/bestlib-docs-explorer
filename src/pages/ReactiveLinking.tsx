import { DocsLayout } from "@/components/DocsLayout";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";
import { Card } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

const ReactiveLinking = () => {
  return (
    <DocsLayout>
      <Breadcrumb
        items={[
          { label: "Layouts", href: "/layouts" },
          { label: "Reactive Linking" },
        ]}
      />

      <h1 className="text-4xl font-bold mb-6 text-foreground">
        Reactive Linking
      </h1>

      <p className="text-lg text-muted-foreground mb-8">
        Reactive linking lets multiple charts respond to a single selection. 
        This is essential for interactive dashboards, brushing workflows, 
        and multiview exploration.
      </p>

      {/* Why linking */}
      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-12">
        Why Reactive Linking?
      </h2>

      <p className="text-foreground mb-4">
        When a user selects data in one view, all connected charts automatically
        filter and update to reflect the same subset of data.
      </p>

      <Card className="my-6 p-4 border-l-4 border-l-primary">
        <div className="flex gap-3">
          <AlertCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-foreground mb-1">Key Benefit</p>
            <p className="text-sm text-muted-foreground">
              Perfect for linked scatter-histogram-barchart setups, correlation
              studies, and brushing workflows.
            </p>
          </div>
        </div>
      </Card>

      {/* Example */}
      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-12">
        Minimal Linking Example
      </h2>

      <CodeBlock
        code={`layout = ReactiveMatrixLayout("AB")

layout.add_scatter('A', df, x_col='a', y_col='b', interactive=True)
layout.add_histogram('B', df, col='b', interactive=True)

layout.display()`}
        language="python"
        filename="reactive_linking.py"
      />

      {/* How it works */}
      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-12">
        What Happens Behind the Scenes?
      </h2>

      <ul className="space-y-2 text-foreground list-disc list-inside mb-8">
        <li>JavaScript captures the brush or click</li>
        <li>Event is sent to Python through CommManager</li>
        <li>SelectionModel updates the active indices</li>
        <li>ReactiveEngine requests updated specs</li>
        <li>D3 redraws each chart with filtered data</li>
      </ul>
    </DocsLayout>
  );
};

export default ReactiveLinking;
