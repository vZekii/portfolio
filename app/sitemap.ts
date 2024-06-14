import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://vzekii.tech',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ]
}