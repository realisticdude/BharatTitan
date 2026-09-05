import type { Metadata } from "next";

const title = "Cookie Policy";
const description = "Read BharatTitan's cookie policy to learn how we use cookies on our website.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/cookie-policy" },
  openGraph: { title: `${title} | BharatTitan`, description, url: "/cookie-policy" },
  twitter: { title: `${title} | BharatTitan`, description },
};

export default function CookiePolicyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
