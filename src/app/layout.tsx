import type { Metadata } from 'next'
import { Barlow } from 'next/font/google'
import './globals.css'

const barlow = Barlow({
    weight: ['100', '200', '300', '400', '500', '600', '700'],
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Walk with us | GassiService',
    description: 'Walk with us | GassiService | Dogwalking',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="de">
            <body className={`${barlow.className}`}>{children}</body>
        </html>
    )
}
