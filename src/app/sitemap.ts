import type { MetadataRoute } from "next";

const BASE_URL = "https://www.bharattitan.com";

const routes = [
  "",
  "/about",
  "/services",
  "/products",
  "/contact",
  "/capabilities/engineering-systems",
  "/capabilities/intelligent-automation",
  "/capabilities/data-stream-processing",
  "/capabilities/interface-design",
  "/privacy-policy",
  "/terms-of-service",
  "/cookie-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));
}
