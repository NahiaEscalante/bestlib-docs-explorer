import React from "react";
import { CodeBlock } from "@/components/CodeBlock";

const ApiJavascript = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-4xl font-bold text-foreground">JavaScript API</h1>

      <p className="text-muted-foreground text-lg">
        BESTLIB utiliza un bundle JavaScript (<strong>matrix.js</strong>) que maneja el
        renderizado de visualizaciones con D3.js y la comunicación bidireccional con
        Python mediante el <strong>Jupyter Comm Protocol</strong>.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Comunicación</h2>
      <p className="text-muted-foreground">
        El frontend se comunica con Python usando <code>sendEvent()</code> y
        <code>getComm()</code>. Cada dashboard se identifica con un{" "}
        <code>divId</code> único.
      </p>

      <CodeBlock
        language="js"
        code={`// Enviar un evento hacia Python
sendEvent(divId, 'select', {
  items: selectedItems,
  __view_letter__: 'A',
  __graph_type__: 'scatter'
});

// Crear u obtener el canal de comunicación
const comm = getComm(divId);
comm.send({ type: 'custom', payload: { foo: 1 } });`}
      />

      <h2 className="text-2xl font-semibold text-foreground mt-8">Renderizado</h2>
      <p className="text-muted-foreground">
        BESTLIB utiliza funciones internas para renderizar cada tipo de gráfico:
        <code>renderScatter()</code>, <code>renderBar()</code>,{" "}
        <code>renderHistogram()</code>, etc.
      </p>

      <CodeBlock
        language="js"
        code={`// Renderizar un dashboard
render(divId, asciiLayout, mapping);

// Renderizar un gráfico específico
renderScatter({
  type: 'scatter',
  data: [...],
  options: { x: 'sepal_length', y: 'sepal_width' }
});`}
      />

      <h2 className="text-2xl font-semibold text-foreground mt-8">Eventos Disponibles</h2>
      <ul className="list-disc ml-6 text-muted-foreground">
        <li>select — selección por brush o click</li>
        <li>click — click en un elemento</li>
        <li>hover — cuando el usuario pasa el mouse</li>
        <li>brush — selección con área</li>
      </ul>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Ejemplo Completo</h2>

      <CodeBlock
        language="js"
        code={`// Listener de brush en un scatter plot
brush.on('brush end', function(event) {
  const selected = d3
    .selectAll('circle')
    .filter(d => isBrushed(brush.extent(), d));

  const items = selected.data().map(d => d._original_row);

  sendEvent(divId, 'select', {
    items,
    __view_letter__: 'A',
    __graph_type__: 'scatter'
  });
});`}
      />

      <p className="text-muted-foreground">
        Con estos métodos, el frontend puede comunicarse con Python, actualizar
        visualizaciones en tiempo real y responder a interacciones del usuario.
      </p>
    </div>
  );
};

export default ApiJavascript;
