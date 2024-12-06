import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://jpg-to-pdf-converter.com/',
      lastModified: new Date(),      
      priority: 1,
    },
    {
      url: 'https://jpg-to-pdf-converter.com/index.html',
      lastModified: new Date(),      
      priority: 0.9,
    },
    {
      url: 'https://jpg-to-pdf-converter.com/help.html',
      lastModified: new Date(),      
      priority: 0.8,
    },
    {
        url: 'https://jpg-to-pdf-converter.com/how-batch-convert-jpg-pdf.html',
        lastModified: new Date(),      
        priority: 0.8,
      },
      {
        url: 'https://jpg-to-pdf-converter.com/how-to-merge-jpg-to-pdf.html',
        lastModified: new Date(),      
        priority: 0.8,
      },
      {
        url: 'https://jpg-to-pdf-converter.com/how-to-export-scanned-jpg-to-pdf.html',
        lastModified: new Date(),      
        priority: 0.8,
      },
      {
        url: 'https://jpg-to-pdf-converter.com/jpg-vs-pdf.html',
        lastModified: new Date(),      
        priority: 0.8,
      },     
  ]
}