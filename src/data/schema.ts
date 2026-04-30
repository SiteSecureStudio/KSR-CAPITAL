const SITE_URL = 'https://ksrcapital.my'

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness', 'RealEstateAgent'],
  '@id': `${SITE_URL}/#organization`,
  name: 'KSR Capital Sdn Bhd',
  alternateName: 'KSR Capital',
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/brand assests/KSR Capital logo design.png`,
  },
  description:
    'A premier Malaysian property firm specialising in industrial and commercial land development, strata property management, CLQ setup, pickleball courts, and wedding hall operations across Malaysia. Incorporated 8 March 2007 (SSM 764906-W).',
  foundingDate: '2007-03-08',
  legalName: 'KSR Capital Sdn Bhd',
  taxID: '764906-W',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'No. 26510, Lot 10234, Mukim Gombak, Jalan Batu Caves',
    addressLocality: 'Batu Caves',
    addressRegion: 'Selangor',
    postalCode: '68100',
    addressCountry: 'MY',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 3.2375,
    longitude: 101.6839,
  },
  telephone: '+60361867032',
  faxNumber: '+60361866241',
  email: 'ksrcapitalsb@gmail.com',
  areaServed: [
    { '@type': 'City', name: 'Kuala Lumpur' },
    { '@type': 'State', name: 'Selangor' },
    { '@type': 'Country', name: 'Malaysia' },
  ],
  knowsAbout: [
    'Industrial Land Development',
    'Commercial Land Development',
    'Strata Property Management',
    'CLQ Setup and Administration',
    'Pickleball Court Development',
    'Event Venue Operations',
    'Malaysian Real Estate',
  ],
  sameAs: [],
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: 'KSR Capital Sdn Bhd',
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en-MY',
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  }
}

export function propertySchema(property: {
  slug: string
  name: string
  location: string
  story: string
  type: string
  tag: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: property.name,
    description: property.story,
    url: `${SITE_URL}/portfolio/${property.slug}`,
    locationCreated: {
      '@type': 'Place',
      name: property.location,
      address: {
        '@type': 'PostalAddress',
        addressLocality: property.location,
        addressCountry: 'MY',
      },
    },
    category: property.type,
    provider: { '@id': `${SITE_URL}/#organization` },
  }
}
