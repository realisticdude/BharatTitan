import type { Metadata } from "next";

const title = "Engineering Systems";
const description =
  "Scalable, cloud-native, secure-by-design backend architecture built by BharatTitan to grow with your business.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/capabilities/engineering-systems" },
  openGraph: { title: `${title} | BharatTitan`, description, url: "/capabilities/engineering-systems" },
  twitter: { title: `${title} | BharatTitan`, description },
};

export default function EngineeringSystemsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
