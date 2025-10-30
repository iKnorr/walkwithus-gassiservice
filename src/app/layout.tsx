import type { Metadata } from 'next'
import { Barlow } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/custom/navbar/Navbar'

const barlow = Barlow({
    weight: ['100', '200', '300', '400', '500', '600', '700'],
    subsets: ['latin'],
})

const SITE_URL = 'https://www.walkwithus-gassiservice.com'
const OG_IMAGE = '/images/dogs-1.webp'

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: 'Walk with us | GassiService',
    description:
        'Professioneller Gassiservice in Deutschland. Zuverlässige und liebevolle Betreuung für deine Vierbeiner.',
    applicationName: 'Walk with Us',
    authors: [{ name: 'Walk with Us Team' }],
    keywords: [
        'dog walking',
        'GassiService',
        'dog walker',
        'pet care',
        'Walk with Us',
        'Hundebetreuung München',
        'Hundedienst München',
    ],
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-snippet': -1,
            'max-image-preview': 'large',
        },
    },
    icons: {
        icon: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
    openGraph: {
        title: 'Walk with us | GassiService',
        description:
            'Professioneller und liebevoller Gassi-Service in deiner Nähe.',
        url: SITE_URL,
        siteName: 'Walk with Us - GassiService',
        images: [
            {
                url: OG_IMAGE,
                width: 1200,
                height: 630,
                alt: 'Glücklicher Hund beim Spaziergang mit Walk with us',
            },
        ],
        locale: 'de_DE',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Walk with us | GassiService',
        description:
            'Professioneller und liebevoller Gassi-Service in deiner Nähe.',
        images: [OG_IMAGE],
    },
    alternates: {
        canonical: SITE_URL,
    },
    verification: {
        google: '1ub0w0ddAs9HMbBMH2ivTtDI4neehwgXabfasClXd0Y',
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const localBusinessSchema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': `${SITE_URL}/#localbusiness`,
        name: 'Walk with us - GassiService',
        description:
            'Professioneller Gassiservice in München. Liebevolle Spaziergänge und zuverlässige Hundebetreuung für deinen Vierbeiner.',
        url: SITE_URL,
        telephone: '+491724067926',
        email: 'walk-with-us@web.de',
        priceRange: '€€',
        image: `${SITE_URL}${OG_IMAGE}`,
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'München',
            addressRegion: 'Bayern',
            addressCountry: 'DE',
        },
        areaServed: {
            '@type': 'City',
            name: 'München',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: '48.1351',
            longitude: '11.5820',
        },
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00',
        },
        sameAs: [],
    }

    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: 'Walk with us - GassiService',
        url: SITE_URL,
        logo: `${SITE_URL}/favicon.ico`,
        description: 'Gassi-Service mit Herz in München.',
        email: 'walk-with-us@web.de',
        telephone: '+491724067926',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'München',
            addressRegion: 'Bayern',
            addressCountry: 'DE',
        },
    }

    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `${SITE_URL}/#service`,
        serviceType: 'Gassi-Service / Dog Walking',
        provider: {
            '@id': `${SITE_URL}/#organization`,
        },
        areaServed: {
            '@type': 'City',
            name: 'München',
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Gassi-Service Angebote',
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Einzelner Spaziergang',
                        description:
                            'Professioneller Gassi-Service mit Platzgarantie',
                    },
                    price: '41',
                    priceCurrency: 'EUR',
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: '10er-Ticket',
                        description: '10 Spaziergänge für zeitlich Flexible',
                    },
                    price: '490',
                    priceCurrency: 'EUR',
                },
            ],
        },
    }

    return (
        <html className="scroll-smooth" lang="de" dir="ltr">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(localBusinessSchema),
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(organizationSchema),
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(serviceSchema),
                    }}
                />
            </head>
            <body className={`${barlow.className}`}>
                <Navbar />
                <div className="min-h-screen">{children}</div>
            </body>
        </html>
    )
}
