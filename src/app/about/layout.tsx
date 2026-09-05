import type { Metadata } from "next";

const title = "About Us";
const description =
  "BharatTitan is an elite digital force engineering scalable, high-performance web systems, automation and AI tools for startups and enterprises across India and beyond.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: { title: `${title} | BharatTitan`, description, url: "/about" },
  twitter: { title: `${title} | BharatTitan`, description },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
