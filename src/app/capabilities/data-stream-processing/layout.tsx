import type { Metadata } from "next";

const title = "Data Stream Processing";
const description =
  "BharatTitan builds real-time data pipelines with optimized flow for reliable, high-throughput processing.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/capabilities/data-stream-processing" },
  openGraph: { title: `${title} | BharatTitan`, description, url: "/capabilities/data-stream-processing" },
  twitter: { title: `${title} | BharatTitan`, description },
};

export default function DataStreamProcessingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
