import type { Metadata } from "next";

const title = "Intelligent Automation";
const description =
  "BharatTitan reduces manual workflows with smart integrations, n8n automation and AI-driven process optimization.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/capabilities/intelligent-automation" },
  openGraph: { title: `${title} | BharatTitan`, description, url: "/capabilities/intelligent-automation" },
  twitter: { title: `${title} | BharatTitan`, description },
};

export default function IntelligentAutomationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
