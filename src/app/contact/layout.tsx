import type { Metadata } from "next";

const title = "Contact Us";
const description =
  "Get in touch with BharatTitan for web & app development, automation systems, AI agents and custom software. Based in Noida, India — response within 12-24 hours.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title: `${title} | BharatTitan`, description, url: "/contact" },
  twitter: { title: `${title} | BharatTitan`, description },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
