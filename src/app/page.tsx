import { Homeclient } from '@/components/homeclient/Homeclient'
import { Metadata } from 'next'

const baseDomainUrl = 'https://www.walkwithus-gassiservice.com'

export const metadata: Metadata = {
    title: 'Walk with us | GassiService',
    description:
        'Professioneller und liebevoller Gassi-Service in deiner Nähe. Buche jetzt bei Walk with us – deinem zuverlässigen Hundeservice!',
    openGraph: {
        title: 'Walk with us | GassiService',
        description:
            'Professioneller und liebevoller Gassi-Service in deiner Nähe.',
        url: baseDomainUrl,
        siteName: 'Walk with us',
        images: [
            {
                url: `${baseDomainUrl}/images/dogs-1.webp`,
                width: 1200,
                height: 630,
                alt: 'Glücklicher Hund beim Spaziergang mit Walk with us',
            },
        ],
        type: 'website',
        locale: 'de_DE',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Walk with us | GassiService',
        description:
            'Professioneller und liebevoller Gassi-Service in deiner Nähe.',
        images: [`${baseDomainUrl}/images/dogs-1.webp`],
    },
}

export default function Home() {
    return <Homeclient />
}
