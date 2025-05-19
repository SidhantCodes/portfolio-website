import { type MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.sidhantmishra.tech/",
      lastModified: new Date().toISOString(),
    },
  ];
}
