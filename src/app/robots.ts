import { MetadataRoute } from 'next'

// 静态导出模式必需配置
export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/private/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://exscite.net/sitemap.xml',
    host: 'https://exscite.net',
  }
}
