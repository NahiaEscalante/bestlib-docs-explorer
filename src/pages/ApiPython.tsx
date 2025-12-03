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
          { label: "APIs" },
        ]}
      />

      <h1 className="text-4xl font-bold mb-6 text-foreground">
        Python API Reference
      </h1>

      <p className="text-lg text-muted-foreground mb-8">
        La API de Python es el núcleo de BESTLIB. Desde aquí se procesan datos,
        se generan especificaciones para D3.js, se interpretan layouts ASCII,
        se coordinan vistas enlazadas y se maneja la comunicación reactiva con
        JavaScript dentro de Jupyter.
      </p>

      {/* LAYOUTS */}
      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-12">
        Layout (ReactiveMatrixLayout)
      </h2>

      <p className="text-foreground mb-4">
        BESTLIB utiliza layouts ASCII para definir dashboards. Cada letra es una
        celda que luego se mapea a un gráfico. El motor de layouts incluye:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-4 text-foreground">
        <li><strong>ReactiveMatrixLayout</strong> — sincroniza selecciones entre vistas mediante ReactiveEngine</li>
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-3 text-foreground">
        ReactiveMatrixLayout
      </h3>

      <CodeBlock
        code={`from BESTLIB.layouts import ReactiveMatrixLayout

reactive = ReactiveMatrixLayout("AB")`}
        language="python"
        filename="reactive_layout.py"
      />

      <Card className="my-6 p-4 border-l-4 border-l-primary">
        <div className="flex gap-3">
          <AlertCircle className="h-5 w-5 text-primary mt-1" />
          <div>
            <p className="font-semibold text-foreground mb-1">
              Sistema Reactivo
            </p>
            <p className="text-sm text-muted-foreground">
              Este layout crea un <code>SelectionModel</code> por instancia, usa 
              <code>ReactiveEngine</code> para propagar selecciones y <code>LinkManager</code> para
              mantener sincronizadas las vistas conectadas.
            </p>
          </div>
        </div>
      </Card>

     

      {/* CHARTBASE */}
      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-16">
        Sistema de Gráficos (ChartBase)
      </h2>

      <p className="text-foreground mb-4">
        Todos los gráficos heredan de <code>ChartBase</code>. Cada clase de gráfico define:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-foreground">
        <li>validación de columnas y tipos</li>
        <li>preparación de datos (DataFrame → dicts)</li>
        <li>generación de especificación D3.js</li>
        <li>nombre del renderizador JS (p. ej. <code>renderScatter</code>)</li>
      </ul>

      <CodeBlock
        code={`class ChartBase:
    chart_type = None

    def validate_data(self, data, **options):
        # validadores del módulo data.validators
        ...

    def prepare_data(self, data, **options):
        # normalización y transformación de pandas → dicts
        ...

    def get_spec(self):
        return {
            "type": self.chart_type,
            "data": self.data_records,
            "options": self.options
        }`}
        language="python"
        filename="chart_base.py"
      />

      {/* DATA PIPELINE */}
      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-16">
        Pipeline de Datos
      </h2>

      <p className="text-foreground mb-4">
        El módulo <strong>data/</strong> ejecuta validación, preparación y normalización antes de
        que los datos lleguen al renderizador.
      </p>

      <CodeBlock
        code={`from BESTLIB.data.validators import validate_scatter_data
from BESTLIB.data.preparators import prepare_scatter_data

validate_scatter_data(df, x_col="x", y_col="y")
records = prepare_scatter_data(df, x_col="x", y_col="y")`}
        language="python"
        filename="validation_pipeline.py"
      />

      <Card className="my-6 p-4 border-l-4 border-l-primary">
        <div className="flex gap-3">
          <AlertCircle className="h-5 w-5 text-primary mt-1" />
          <div>
            <p className="font-semibold text-foreground mb-1">
              Pipeline Unificado
            </p>
            <p className="text-sm text-muted-foreground">
              Todos los gráficos usan el mismo sistema: validadores ➝ preparadores ➝ normalización.
              Así garantizamos consistencia en todo el dashboard.
            </p>
          </div>
        </div>
      </Card>

      {/* DISPLAY */}
      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-16">
        Renderizado del Dashboard
      </h2>

      <p className="text-foreground mb-4">
        El método <code>.display()</code> genera HTML, inyecta D3.js, assets y construye
        el bundle JS con las especificaciones de cada gráfico.
      </p>

      <CodeBlock
        code={`layout.display()`}
        language="python"
        filename="display.py"
      />

      <p className="text-muted-foreground mt-3 mb-6">
        Internamente se usan <code>HTMLGenerator</code>, <code>JSBuilder</code> y <code>AssetManager</code>.
      </p>

      {/* EVENTS */}
      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-16">
        Eventos Interactivos (JS → Python)
      </h2>

      <p className="text-foreground mb-4">
        BESTLIB transmite selecciones, brushes, clics y hover mediante el Jupyter
        Comm Protocol, permitiendo reactividad y sincronización entre vistas.
      </p>

      <CodeBlock
        code={`{
  "type": "select",
  "payload": { 
    "items": [1, 5, 9], 
    "__view_letter__": "A" 
  },
  "div_id": "matrix-12345"
}`}
        language="json"
        filename="event_message.json"
      />

      <p className="text-muted-foreground mt-4 mb-16">
        <code>CommManager</code> recibe el mensaje, <code>EventManager</code> lo propaga y 
        <code>ReactiveEngine</code> actualiza las vistas enlazadas sin re-ejecutar la celda.
      </p>
    </DocsLayout>
  );
};

export default ApiPython;
