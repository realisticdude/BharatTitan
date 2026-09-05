import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";
import { InitialLoaderWrapper } from "@/components/InitialLoaderWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const SITE_NAME = "BharatTitan";
const SITE_DESCRIPTION =
  "Forging the future of Indian technology with elite digital solutions and premium innovation.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bharattitan.com"),
  title: {
    default: "BharatTitan | Elite Digital Systems",
    template: "%s | BharatTitan",
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: "BharatTitan | Elite Digital Systems",
    description: SITE_DESCRIPTION,
    url: "/",
    locale: "en_IN",
    images: [
      {
        url: "/company-logo.png",
        alt: "BharatTitan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@BharatTitan",
    title: "BharatTitan | Elite Digital Systems",
    description: SITE_DESCRIPTION,
    images: ["/company-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (!theme && supportDarkMode) theme = 'dark';
                  if (!theme) theme = 'dark';
                  document.documentElement.className = theme;
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${orbitron.variable} antialiased bg-background text-foreground font-sans`}
      >
        <InitialLoaderWrapper>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <Chatbot />
        </InitialLoaderWrapper>
      </body>
    </html>
  );
}
