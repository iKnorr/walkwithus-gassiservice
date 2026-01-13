'use client'

import { HexagonIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Hexagon } from '../custom/svg/Hexagon'
import { ContactForm } from '../custom/contactForm/ContactForm'
import { FAQ } from '../custom/faq/FAQ'
import { PRICING } from '@/data/constants'

const dogImages = [
    { src: '/images/dogs-1.webp', alt: 'Dogs having fun 1' },
    { src: '/images/dogs-9.webp', alt: 'Dogs having fun 2' },
    { src: '/images/dogs-6.webp', alt: 'Dogs having fun 3' },
    { src: '/images/dogs-8.webp', alt: 'Dogs having fun 4' },
]

const comingSoonServices = [
    {
        imageSrc: '/images/training-icon.webp',
        title: 'Einzelstundentraining',
        description:
            'Individuelle Betreuung für dich und deinen Hund – abgestimmt auf eure Bedürfnisse.',
    },
    {
        imageSrc: '/images/mantrailing-icon.webp',
        title: 'Mantrailing',
        description:
            'Gemeinsam auf Spurensuche – artgerechte Auslastung für Nasenarbeiter.',
    },
    {
        imageSrc: '/images/social-walks-icon.webp',
        title: 'Social Walks',
        description:
            'Geführte Spaziergänge in der Gruppe – entspanntes Miteinander statt wildem Durcheinander.',
    },
    {
        imageSrc: '/images/bike-training-icon.webp',
        title: 'Lastenrad-Gewöhnung',
        description:
            'Schritt für Schritt zur sicheren Fahrt – stressfreie Einführung ans Lastenrad.',
    },
]

export const MainSection = () => {
    return (
        <div className="flex w-full flex-col items-center">
            {/* ABOUT US */}
            <section
                id="about"
                className="relative flex flex-col items-center justify-center bg-gray-100 px-6 py-12 text-center md:px-40 md:py-40"
            >
                <div className="absolute top-[-20px] z-10">
                    <HexagonIcon
                        className=""
                        color="#5B6B57"
                        strokeWidth={3}
                        size={30}
                    />
                </div>
                <div className="absolute right-auto top-[-35px]">
                    <Hexagon />
                </div>
                <div className="z-10">
                    <h1 className="mb-4 text-4xl font-medium italic md:mb-8 md:text-7xl">
                        Willkommen bei Walk with us 🐾
                    </h1>
                    <p className="mb-2 text-xl">
                        Das ist mein liebevoller Gassiservice, mit dem ich vor
                        sieben Jahren meine Leidenschaft zum Beruf gemacht habe
                        – für mich gibt es nichts Schöneres als hündische
                        Gesellschaft.
                    </p>
                    <p className="text-xl">
                        &ldquo;Us&rdquo; – das sind meine beiden Hündinnen Lotti
                        und Stellar und ich. Gemeinsam lieben wir es, durch die
                        Wälder rund um München und in den Isarauen zu streifen.
                        Auf unseren abwechslungsreichen Ausflügen freuen wir uns
                        immer über neue vierbeinige Begleiter!
                    </p>
                    <div className="mt-8">
                        <a
                            href="#contact"
                            className="inline-block rounded-md bg-green px-8 py-3 text-lg text-white transition-colors hover:bg-green/90"
                        >
                            Jetzt Kontakt aufnehmen
                        </a>
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section className="w-full bg-white px-6 py-8 md:py-12">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                    {dogImages.map((img) => (
                        <div key={img.src} className="relative aspect-[2/3] w-full">
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="rounded-lg object-cover"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* TARIFFS */}
            <section
                id="tariffs"
                className="w-full bg-green px-6 py-12 text-center md:py-20"
            >
                <h2 className="mb-4 text-4xl font-medium italic text-white md:mb-6 md:text-7xl">
                    Tarife für Walks
                </h2>
                <p className="mb-6 text-xl text-white">
                    Regelmäßige Spaziergänge – abgestimmt auf deinen Bedarf.
                </p>
                <div className="flex w-full flex-wrap items-center justify-center gap-10">
                    <div className="w-[300px] rounded-2xl border bg-gray-100 p-4 text-center shadow-sm">
                        <p className="text-lg font-semibold">
                            Pro Hund und Runde
                        </p>
                        <p className="text-2xl font-bold">
                            {PRICING.perWalk.price} {PRICING.perWalk.currency}
                        </p>
                        <p className="text-sm text-gray-600">
                            {PRICING.perWalk.description}
                        </p>
                    </div>

                    <div className="w-[300px] rounded-2xl border bg-gray-100 p-4 text-center shadow-sm">
                        <p className="text-lg font-semibold">10 er Karte</p>
                        <p className="text-2xl font-bold">
                            {PRICING.tenWalkTicket.price}{' '}
                            {PRICING.tenWalkTicket.currency}
                        </p>
                        <p className="text-sm text-gray-600">
                            {PRICING.tenWalkTicket.description}
                        </p>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <a
                        href="#contact"
                        className="inline-block rounded-md bg-white px-8 py-3 text-lg text-green transition-colors hover:bg-gray-100"
                    >
                        Beratungsgespräch vereinbaren
                    </a>
                </div>
            </section>

            {/* COMING SOON */}
            <section
                id="comingSoon"
                className="flex w-full flex-col items-center bg-white px-6 py-12 md:px-10 md:py-20"
            >
                <h2 className="mb-4 text-4xl font-medium italic md:mb-6 md:text-7xl">
                    Coming Soon
                </h2>
                <p className="mb-10 text-center text-lg text-gray-700 md:text-xl">
                    Bald neu bei <strong>Walk with us</strong> – mit Herz,
                    Know-how und Pfotengefühl
                </p>
                <div className="grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {comingSoonServices.map((service) => (
                        <div
                            key={service.title}
                            className="group flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        >
                            <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-green/10">
                                <Image
                                    src={service.imageSrc}
                                    alt={service.title}
                                    width={64}
                                    height={64}
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="mb-3 text-xl font-semibold text-gray-800">
                                {service.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-gray-600">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ */}
            <FAQ />

            {/* CONTACT */}
            <section
                id="contact"
                className="w-full bg-white px-6 py-16 text-center md:py-24"
            >
                <h2 className="mb-4 text-4xl font-medium italic md:mb-6 md:text-7xl">
                    Kontakt
                </h2>
                <p className="mb-6 text-xl">
                    Wir freuen uns auf deine Nachricht!
                </p>
                <ContactForm />
            </section>
        </div>
    )
}
