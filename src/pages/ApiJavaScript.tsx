import { DocsLayout } from "@/components/DocsLayout";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";
import { Card } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

const ApiJavaScript = () => {
  return (
    <DocsLayout>
      <Breadcrumb
        items={[
          { label: "API", href: "/api" },
          { label: "JavaScript API" },
        ]}
      />

      <h1 className="text-4xl font-bold mb-6 text-foreground">
        JavaScript API
      </h1>

      <p className="text-lg text-muted-foreground mb-8">
        The JavaScript runtime powers BESTLIB’s rendering and interactivity.
        It receives chart specifications from Python, renders them using D3.js,
        and sends interaction events (brush, click, hover) back to Python
        through Jupyter’s Comm protocol.
      </p>

      {/* SECTION: RENDER FUNCTION */}
      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-12">
        The <code>render()</code> Function
      </h2>

      <p className="text-foreground mb-4">
        This is the entry point of the JS rendering pipeline. BESTLIB injects 
        the following call automatically after generating the HTML widget:
      </p>

      <CodeBlock
        code={`render(divId, asciiLayout, chartSpecs);`}
        language="javascript"
        filename="render_call.js"
      />

      <p className="text-muted-foreground mt-4 mb-6">
        <strong>divId</strong> — unique HTML container ID  
        <br />
        <strong>asciiLayout</strong> — parsed ASCII grid  
        <br />
        <strong>chartSpecs</strong> — dictionary of chart specifications generated in Python  
      </p>

      <h3 className="text-xl font-semibold mb-3 text-foreground mt-10">
        Implementation Overview
      </h3>

      <CodeBlock
        code={`function render(divId, asciiLayout, mapping) {
    const container = document.getElementById(divId);

    // Parse ASCII → grid structure
    const grid = LayoutParser.parse(asciiLayout);

    // For each letter in the grid, render its chart
    for (const [letter, spec] of Object.entries(mapping)) {
        ChartRenderer.renderChart(
            container,
            grid.blocks[letter],
            spec
        );
    }
}`}
        language="javascript"
        filename="matrix_render.js"
      />

      <Card className="my-6 p-4 border-l-4 border-l-primary">
        <div className="flex gap-3">
          <AlertCircle className="h-5 w-5 text-primary mt-1" />
          <div>
            <p className="font-semibold text-foreground mb-1">
              Declarative Rendering
            </p>
            <p className="text-sm text-muted-foreground">
              JavaScript never computes data. All data preparation happens in 
              Python. JS simply receives specs and renders them with D3.
            </p>
          </div>
        </div>
      </Card>

      {/* SECTION: CHART RENDERER */}
      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-16">
        ChartRenderer API
      </h2>

      <p className="text-foreground mb-4">
        Each chart has a D3-based renderer. BESTLIB exposes a unified interface:
      </p>

      <CodeBlock
        code={`ChartRenderer.renderChart(container, blockInfo, spec);`}
        language="javascript"
        filename="chart_renderer.js"
      />

      <p className="text-muted-foreground mt-4">
        <strong>container</strong> — parent DOM node  
        <br />
        <strong>blockInfo</strong> — coordinates + dimensions derived from ASCII layout  
        <br />
        <strong>spec</strong> — chart specification built in Python  
      </p>

      <h3 className="text-xl font-semibold mb-3 text-foreground mt-10">
        Example: scatter chart renderer
      </h3>

      <CodeBlock
        code={`function renderScatter(svg, data, options) {
    const x = d3.scaleLinear()
        .domain(d3.extent(data, d => d[options.x]))
        .range([padding, width - padding]);

    const y = d3.scaleLinear()
        .domain(d3.extent(data, d => d[options.y]))
        .range([height - padding, padding]);

    svg.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", d => x(d[options.x]))
        .attr("cy", d => y(d[options.y]))
        .attr("r", 4)
        .attr("fill", options.color || "#6C5CE7");
}`}
        language="javascript"
        filename="scatter_renderer.js"
      />

      {/* SECTION: COMMUNICATION */}
      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-16">
        JS → Python Communication
      </h2>

      <p className="text-foreground mb-4">
        Interaction events are sent from JavaScript to Python using BESTLIB’s
        <strong> CommManager</strong>. This is the core of reactive linking.
      </p>

      <CodeBlock
        code={`CommManager.send({
    type: "select",
    div_id: widgetDivId,
    payload: {
        items: selectedIndices,
        __view_letter__: chartLetter
    }
});`}
        language="javascript"
        filename="send_event.js"
      />

      <Card className="my-6 p-4 border-l-4 border-l-primary">
        <div className="flex gap-3">
          <AlertCircle className="h-5 w-5 text-primary mt-1" />
          <div>
            <p className="font-semibold text-foreground mb-1">Event Types</p>
            <p className="text-sm text-muted-foreground">
              BESTLIB supports <strong>select</strong>, <strong>brush</strong>, 
              <strong>click</strong> and <strong>hover</strong> events.    
              All events include their originating view letter.
            </p>
          </div>
        </div>
      </Card>

      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-16">
        Python → JS Updates
      </h2>

      <p className="text-foreground mb-4">
        When a reactive update occurs, Python sends an updated spec back to
        JavaScript:
      </p>

      <CodeBlock
        code={`CommManager.registerHandler("update", (payload) => {
    const { letter, newSpec } = payload;
    ChartRenderer.updateChart(letter, newSpec);
});`}
        language="javascript"
        filename="update_handler.js"
      />

      <p className="text-muted-foreground mt-4 mb-16">
        This mechanism is used by <strong>ReactiveEngine</strong> to update
        linked views dynamically.
      </p>
    </DocsLayout>
  );
};

export default ApiJavaScript;
