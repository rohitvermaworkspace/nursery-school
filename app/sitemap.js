import { SITE } from '@/lib/seo'

export default function sitemap() {
  const routes = ['', '/about', '/programs', '/classes', '/gallery', '/blog', '/contact']

  return routes.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }))
}
