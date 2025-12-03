import { DocsLayout } from "@/components/DocsLayout";
import { Breadcrumb } from "@/components/Breadcrumb";

const charts = [
  {
    name: "Scatter Plot",
    href: "/charts/scatter",
    img: "/gallery-icons/scatter.svg",
  },
  {
    name: "Histogram",
    href: "/charts/histogram",
    img: "/gallery-icons/histogram.svg",
  },
  {
    name: "Bar Chart",
    href: "/charts/bar",
    img: "/gallery-icons/bar.svg",
  },
  {
    name: "Boxplot",
    href: "/charts/boxplot",
    img: "/gallery-icons/boxplot.svg",
  },
  {
    name: "Radviz",
    href: "/charts/radviz",
    img: "/gallery-icons/radviz.svg",
  },
  {
    name: "Parallel Coordinates",
    href: "/charts/parallel-coordinates",
    img: "/gallery-icons/parallel.svg",
  },
];

export default function ChartsIndex() {
  return (
    <DocsLayout>
      <Breadcrumb
        items={[
          { label: "Charts", href: "/charts" },
        ]}
      />

      <h1 className="text-4xl font-bold mb-4 text-foreground">Charts</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Explore all chart types supported by BESTLIB. Each visualization is fully interactive and compatible with MatrixLayout and ReactiveMatrixLayout.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {charts.map((chart) => (
          <a
            key={chart.name}
            href={chart.href}
            className="rounded-xl border border-neutral-700 bg-neutral-900 hover:bg-neutral-800 transition cursor-pointer p-4 block"
          >
            <img
              src={chart.img}
              alt={chart.name}
              className="w-full h-32 object-contain mb-4 opacity-90"
            />
            <h3 className="text-center text-foreground text-lg font-medium">
              {chart.name}
            </h3>
          </a>
        ))}
      </div>
    </DocsLayout>
  );
}
