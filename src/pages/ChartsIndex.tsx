import { DocsLayout } from "@/components/DocsLayout";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Link } from "react-router-dom";
import scatterImg from "@/assets/scatter.png";
import barchartImg from "@/assets/barchart.png";
import histogramImg from "@/assets/histogram.png";
import boxplotImg from "@/assets/boxplot.png";

const charts = [
  { name: "Scatter Plot", href: "/charts/scatter", img: scatterImg },
  { name: "Bar Chart", href: "/charts/bar", img: barchartImg },
  { name: "Histogram", href: "/charts/histogram", img: histogramImg },
  { name: "Boxplot", href: "/charts/boxplot", img: boxplotImg },
];

export default function ChartsIndex() {
  return (
    <DocsLayout>
      <Breadcrumb items={[{ label: "Charts", href: "/charts" }]} />

      <h1 className="text-4xl font-bold mb-4 text-foreground">Charts</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Explore all chart types supported by BESTLIB. Each visualization is fully interactive and compatible with MatrixLayout and ReactiveMatrixLayout.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {charts.map((chart) => (
          <Link
            key={chart.name}
            to={chart.href}
            className="rounded-xl border border-neutral-700 bg-neutral-900 hover:bg-neutral-800 transition cursor-pointer p-4 block"
          >
            <img
              src={chart.img}
              alt={chart.name}
              className="w-full h-56 object-contain mb-4 opacity-90"
            />
            <h3 className="text-center text-foreground text-lg font-medium">
              {chart.name}
            </h3>
          </Link>
        ))}
      </div>
    </DocsLayout>
  );
}
