import type { Metadata } from "next";

const title = "Privacy Policy";
const description = "Read BharatTitan's privacy policy to learn how we collect, use and protect your data.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/privacy-policy" },
  openGraph: { title: `${title} | BharatTitan`, description, url: "/privacy-policy" },
  twitter: { title: `${title} | BharatTitan`, description },
};

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
