import type { Metadata } from "next";

const title = "Terms of Service";
const description = "Read BharatTitan's terms of service governing the use of our website and services.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/terms-of-service" },
  openGraph: { title: `${title} | BharatTitan`, description, url: "/terms-of-service" },
  twitter: { title: `${title} | BharatTitan`, description },
};

export default function TermsOfServiceLayout({ children }: { children: React.ReactNode }) {
  return children;
}
