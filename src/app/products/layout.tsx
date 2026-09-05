import type { Metadata } from "next";

const title = "Products";
const description =
  "Discover BharatTitan's product arsenal — high-performance systems and platforms engineered for scalability, automation and elite digital experiences.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/products" },
  openGraph: { title: `${title} | BharatTitan`, description, url: "/products" },
  twitter: { title: `${title} | BharatTitan`, description },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
