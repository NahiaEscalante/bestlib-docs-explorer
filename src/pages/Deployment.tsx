import { DocsLayout } from "@/components/DocsLayout";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";
import { Card } from "@/components/ui/card";
import { AlertCircle, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Deployment = () => {
  return (
    <DocsLayout>
      <Breadcrumb items={[{ label: "Deployment" }]} />
      
      <h1 className="text-4xl font-bold mb-6 text-foreground">Deployment Guide</h1>
      
      <p className="text-lg text-muted-foreground mb-8">
        Complete instructions for installing, configuring, and deploying BESTLIB in various environments.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-8">System Requirements</h2>
      
      <Card className="p-6 bg-card border border-border mb-8">
        <h3 className="font-semibold text-foreground mb-4">Minimum Requirements:</h3>
        <ul className="space-y-2 text-foreground">
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <span><strong>Python:</strong> 3.8 or higher</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <span><strong>pip:</strong> 20.0 or higher</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <span><strong>Memory:</strong> 512 MB RAM minimum (2GB recommended)</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <span><strong>Disk Space:</strong> 100 MB for installation</span>
          </li>
        </ul>
      </Card>

      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-12">Installation via pip</h2>
      
      <p className="text-foreground mb-4">
        The simplest way to install BESTLIB is using pip:
      </p>

      <CodeBlock
        code="pip install bestlib"
        language="bash"
      />

      <p className="text-foreground mb-4 mt-6">
        For a specific version:
      </p>

      <CodeBlock
        code="pip install bestlib==1.0.0"
        language="bash"
      />

      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-12">Development Installation</h2>
      
      <p className="text-foreground mb-4">
        Install BESTLIB with development dependencies for contributing:
      </p>

      <CodeBlock
        code={`# Clone the repository
git clone https://github.com/bestlib/bestlib.git
cd bestlib

# Create a virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\\Scripts\\activate

# Install in development mode
pip install -e .[dev]

# Run tests
pytest tests/`}
        language="bash"
      />

      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-12">Installation via npm (JavaScript)</h2>
      
      <p className="text-foreground mb-4">
        For web applications, install the JavaScript version:
      </p>

      <CodeBlock
        code="npm install bestlib-js"
        language="bash"
      />

      <p className="text-foreground mb-4 mt-6">
        Then import in your JavaScript code:
      </p>

      <CodeBlock
        code={`import * as bl from 'bestlib-js';

// Create a scatter plot
const scatter = new bl.ScatterPlot({
  data: myData,
  x: 'column1',
  y: 'column2',
  container: '#chart-div'
});

scatter.render();`}
        language="javascript"
      />

      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-12">Jupyter Notebook Integration</h2>
      
      <p className="text-foreground mb-4">
        BESTLIB works seamlessly in Jupyter notebooks:
      </p>

      <CodeBlock
        code={`# Install Jupyter extension
pip install bestlib[jupyter]

# In your notebook:
import bestlib as bl

# Enable inline rendering
bl.enable_notebook()

# Create and display charts
scatter = bl.ScatterPlot(data, x='x', y='y')
scatter.show()  # Displays inline in notebook`}
        language="python"
        filename="notebook_setup.py"
      />

      <Card className="my-6 p-4 border-l-4 border-l-primary">
        <div className="flex gap-3">
          <AlertCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-foreground mb-1">JupyterLab Support</p>
            <p className="text-sm text-muted-foreground">
              For JupyterLab, you may need to install the extension:
              <code className="block mt-2 px-2 py-1 rounded bg-code-background text-primary font-mono text-xs">
                jupyter labextension install @bestlib/jupyterlab-extension
              </code>
            </p>
          </div>
        </div>
      </Card>

      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-12">Web Framework Integration</h2>
      
      <h3 className="text-xl font-semibold mb-3 text-foreground mt-8">Flask Application</h3>

      <CodeBlock
        code={`from flask import Flask, render_template
import bestlib as bl
import pandas as pd

app = Flask(__name__)

@app.route('/')
def dashboard():
    # Load data
    data = pd.read_csv('data.csv')
    
    # Create layout
    layout = bl.ReactiveMatrixLayout(2, 2)
    
    # Add charts...
    scatter = bl.ScatterPlot(data, x='x', y='y')
    layout.add_chart(scatter, 0, 0)
    
    # Export to HTML
    html = layout.to_html()
    return render_template('dashboard.html', chart_html=html)

if __name__ == '__main__':
    app.run(debug=True)`}
        language="python"
        filename="flask_app.py"
      />

      <h3 className="text-xl font-semibold mb-3 text-foreground mt-8">Django Application</h3>

      <CodeBlock
        code={`# views.py
from django.shortcuts import render
import bestlib as bl
import pandas as pd

def dashboard_view(request):
    # Load data
    data = pd.read_csv('data.csv')
    
    # Create visualization
    layout = bl.ReactiveMatrixLayout(2, 2)
    scatter = bl.ScatterPlot(data, x='x', y='y')
    layout.add_chart(scatter, 0, 0)
    
    # Generate HTML
    context = {
        'chart_html': layout.to_html()
    }
    return render(request, 'dashboard.html', context)`}
        language="python"
        filename="django_views.py"
      />

      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-12">Static Site Deployment</h2>
      
      <p className="text-foreground mb-4">
        Export your visualizations as standalone HTML files:
      </p>

      <CodeBlock
        code={`import bestlib as bl
import pandas as pd

# Create your visualization
data = pd.read_csv('data.csv')
layout = bl.ReactiveMatrixLayout(2, 2)

scatter = bl.ScatterPlot(data, x='x', y='y')
hist = bl.Histogram(data, x='x')

layout.add_chart(scatter, 0, 0)
layout.add_chart(hist, 0, 1)
layout.enable_linking()

# Export to standalone HTML
layout.save_html(
    'dashboard.html',
    title='My Dashboard',
    include_css=True,
    include_js=True
)

print("Dashboard saved to dashboard.html")`}
        language="python"
        filename="export_static.py"
      />

      <p className="text-foreground mb-4 mt-6">
        Deploy the generated HTML file to any static hosting service:
      </p>

      <ul className="space-y-2 text-foreground list-disc list-inside mb-6">
        <li><strong>GitHub Pages:</strong> Push to gh-pages branch</li>
        <li><strong>Netlify:</strong> Drag and drop the HTML file</li>
        <li><strong>Vercel:</strong> Deploy via CLI or web interface</li>
        <li><strong>AWS S3:</strong> Upload to S3 bucket with static hosting enabled</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-12">Configuration</h2>
      
      <p className="text-foreground mb-4">
        Create a configuration file for custom settings:
      </p>

      <CodeBlock
        code={`# bestlib_config.py
BESTLIB_CONFIG = {
    'default_theme': 'dark',
    'default_renderer': 'canvas',  # or 'svg', 'webgl'
    'max_points': 10000,
    'animation_duration': 300,
    'color_palette': 'viridis',
    'font_family': 'Inter, sans-serif'
}

# Use in your code
import bestlib as bl
bl.config.update(BESTLIB_CONFIG)`}
        language="python"
        filename="bestlib_config.py"
      />

      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-12">Docker Deployment</h2>
      
      <p className="text-foreground mb-4">
        Deploy BESTLIB applications using Docker:
      </p>

      <CodeBlock
        code={`FROM python:3.9-slim

WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application
COPY . .

# Expose port
EXPOSE 5000

# Run application
CMD ["python", "app.py"]`}
        language="dockerfile"
        filename="Dockerfile"
      />

      <p className="text-foreground mb-4 mt-6">
        Build and run:
      </p>

      <CodeBlock
        code={`# Build image
docker build -t bestlib-app .

# Run container
docker run -p 5000:5000 bestlib-app`}
        language="bash"
      />

      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-12">Production Considerations</h2>
      
      <Card className="p-6 bg-card border border-border">
        <h3 className="font-semibold text-foreground mb-4">Best Practices:</h3>
        <ul className="space-y-3 text-foreground">
          <li><strong>Caching:</strong> Enable caching for data processing and rendering</li>
          <li><strong>Data Sampling:</strong> Use downsampling for large datasets in production</li>
          <li><strong>Error Handling:</strong> Implement proper error handling and logging</li>
          <li><strong>Security:</strong> Validate and sanitize user inputs</li>
          <li><strong>Performance:</strong> Monitor memory usage and optimize queries</li>
          <li><strong>CDN:</strong> Use CDN for serving JavaScript and CSS assets</li>
        </ul>
      </Card>

      <h2 className="text-2xl font-semibold mb-4 text-foreground mt-12">Troubleshooting</h2>
      
      <p className="text-foreground mb-4">
        Common installation issues and solutions:
      </p>

      <div className="space-y-4">
        <Card className="p-4 bg-card border border-border">
          <h4 className="font-semibold text-foreground mb-2">Import Error: No module named 'bestlib'</h4>
          <p className="text-sm text-muted-foreground mb-2">
            Ensure you're using the correct Python environment where BESTLIB is installed.
          </p>
          <CodeBlock
            code="pip show bestlib  # Check if installed
pip install --upgrade bestlib  # Reinstall if needed"
            language="bash"
          />
        </Card>

        <Card className="p-4 bg-card border border-border">
          <h4 className="font-semibold text-foreground mb-2">Rendering Issues in Jupyter</h4>
          <p className="text-sm text-muted-foreground mb-2">
            Try enabling the notebook extension and restarting the kernel:
          </p>
          <CodeBlock
            code="jupyter nbextension enable --py bestlib"
            language="bash"
          />
        </Card>
      </div>

      <p className="text-foreground mt-8">
        For more troubleshooting help, see the <Link to="/troubleshooting" className="text-primary hover:underline">Troubleshooting Guide</Link>.
      </p>
    </DocsLayout>
  );
};

export default Deployment;
