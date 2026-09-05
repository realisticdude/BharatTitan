import type { Metadata } from "next";

const title = "Services";
const description =
  "Explore BharatTitan's services: web & app development, workflow automation, AI agents, API integrations and process optimization for startups and businesses.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services" },
  openGraph: { title: `${title} | BharatTitan`, description, url: "/services" },
  twitter: { title: `${title} | BharatTitan`, description },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
