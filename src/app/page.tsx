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
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'Wo bietet ihr eure Dienstleistungen an?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Wir sind in München und den Isarauen tätig, wo wir regelmäßig durch die Wälder und entlang der Isar spazieren.',
                },
            },
            {
                '@type': 'Question',
                name: 'Wie lange dauert ein typischer Spaziergang?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Ein Standard-Spaziergang dauert etwa 2 bis 2,5 Stunden. Die genaue Dauer kann je nach Bedürfnissen deines Hundes angepasst werden.',
                },
            },
            {
                '@type': 'Question',
                name: 'Was passiert bei schlechtem Wetter?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Wir gehen bei jedem Wetter spazieren! Unsere Hunde sind wetterfest ausgerüstet, und wir passen die Route entsprechend an. Nur bei extremen Wetterbedingungen (z.B. Unwetter) sprechen wir eine alternative Lösung ab.',
                },
            },
            {
                '@type': 'Question',
                name: 'Können mehrere Hunde zusammen laufen?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Ja, soziale Spaziergänge mit mehreren Hunden sind möglich und sogar erwünscht! Wir achten darauf, dass alle Hunde gut miteinander harmonieren.',
                },
            },
            {
                '@type': 'Question',
                name: 'Mit welchen Hunderassen habt ihr Erfahrung?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Wir haben Erfahrung mit allen Rassen und Größen. Wichtig ist uns vor allem, dass dein Hund sozialverträglich ist und Spaß an gemeinsamen Ausflügen hat.',
                },
            },
            {
                '@type': 'Question',
                name: 'Wie kann ich einen Termin vereinbaren?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Kontaktiere uns einfach per E-Mail oder Telefon. Wir besprechen dann die Bedürfnisse deines Hundes und finden gemeinsam passende Termine.',
                },
            },
            {
                '@type': 'Question',
                name: 'Was ist der Unterschied zwischen der Platzgarantie und der 10er Karte?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Mit der Platzgarantie (41€ pro Runde) sicherst du dir einen festen Platz in unserem Programm. Die 10er Karte (490€) ist ideal für zeitlich flexible Hundebesitzer, die nicht regelmäßige Termine benötigen.',
                },
            },
        ],
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqSchema),
                }}
            />
            <Homeclient />
        </>
    )
}
