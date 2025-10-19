import { metadata as rootMetadata } from './layout'
import { Homeclient } from '@/components/homeclient/Homeclient'
import { Metadata } from 'next'

const SITE_URL = 'https://www.walkwithus-gassiservice.com'
const OG_IMAGE = '/images/dogs-1.webp'

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: rootMetadata.title ?? 'Walk with us | GassiService',
    description:
        'Professioneller Gassiservice in München. Liebevolle Spaziergänge und zuverlässige Hundebetreuung für deinen Vierbeiner.',
    keywords: rootMetadata.keywords,
    robots: rootMetadata.robots,
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
}

export default function Home() {
    return <Homeclient />
}
