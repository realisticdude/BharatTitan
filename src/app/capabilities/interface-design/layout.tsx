import type { Metadata } from "next";

const title = "Interface Design";
const description =
  "BharatTitan crafts clean, high-performance UI with futuristic aesthetics for elite digital experiences.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/capabilities/interface-design" },
  openGraph: { title: `${title} | BharatTitan`, description, url: "/capabilities/interface-design" },
  twitter: { title: `${title} | BharatTitan`, description },
};

export default function InterfaceDesignLayout({ children }: { children: React.ReactNode }) {
  return children;
}
