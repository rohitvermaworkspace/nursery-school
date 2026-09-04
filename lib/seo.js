export const SITE = {
  name: 'LittleSprouts Kindergarten',
  shortName: 'LittleSprouts',
  tagline: 'Bright Minds, Bright Futures',
  url: 'https://rohitvermaworkspace.github.io/nursery-school',
  description:
    'LittleSprouts Kindergarten offers safe, nurturing play school, pre-K and kindergarten programs in Kidstown, CA. Book a tour and see why families love learning here.',
  phone: '+1-800-123-4567',
  phoneDisplay: '1 800 123 4567',
  email: 'info@littlesprouts.example',
  address: {
    street: '123 Happy Street',
    city: 'Kidstown',
    region: 'CA',
    postalCode: '90210',
    country: 'US',
  },
  social: {
    facebook: 'https://facebook.com/littlesproutskindergarten',
    instagram: 'https://instagram.com/littlesproutskindergarten',
    youtube: 'https://youtube.com/@littlesproutskindergarten',
    linkedin: 'https://linkedin.com/company/littlesproutskindergarten',
  },
}

/**
 * Builds a consistent Next.js Metadata object for every page — canonical
 * URL, Open Graph, and Twitter card all derived from one title/description
 * pair so every route stays consistent without repeating boilerplate.
 */
export function buildMetadata({ title, description, path = '/' }) {
  const url = `${SITE.url}${path}`
  const fullTitle = title === SITE.name ? title : `${title} | ${SITE.shortName}`

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE.name,
      type: 'website',
      images: [{ url: `${SITE.url}/og-image.png`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
  }
}

/** JSON-LD structured data for a childcare/preschool local business. */
export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ChildCare',
    name: SITE.name,
    alternateName: SITE.shortName,
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    sameAs: Object.values(SITE.social),
  }
}
