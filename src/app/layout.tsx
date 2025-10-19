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
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html className="scroll-smooth" lang="de" dir="ltr">
            <body className={`${barlow.className}`}>
                <Navbar />
                <div className="min-h-screen">{children}</div>
            </body>
        </html>
    )
}
