import type { Metadata } from 'next'
import { Barlow } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/custom/navbar/Navbar'

const barlow = Barlow({
    weight: ['100', '200', '300', '400', '500', '600', '700'],
    subsets: ['latin'],
})

export const metadata: Metadata = {
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
    ],
    robots: {
        index: true,
        follow: true,
    },
    icons: {
        icon: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
    openGraph: {
        title: 'Walk with us | GassiService',
        description:
            'Professioneller und liebevoller Gassi-Service in deiner Nähe.',
        url: 'https://walkwithus-gassiservice.com',
        siteName: 'Walk with Us - GassiService',
        images: [
            {
                url: 'https://walkwithus-gassiservice.com/images/dogs-1.jpg',
                width: 1200,
                height: 630,
                alt: 'Happy dog walking with us',
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
        images: ['https://walkwithus-gassiservice.com/images/dogs-1.jpg'],
    },
    alternates: {
        canonical: 'https://walkwithus-gassiservice.com',
    },
    other: {
        'msapplication-config': '/browserconfig.xml',
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
