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

const comingSoonImages = [
    {
        src: '/images/dog-training.webp',
        alt: 'individual dog training',
    },
    {
        src: '/images/mantrailing.webp',
        alt: 'mantrailing dog training',
    },
    {
        src: '/images/social-walks.webp',
        alt: 'social dog walks',
    },
    {
        src: '/images/dog-bike-training.webp',
        alt: 'dog bike training',
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
                        „Us" – das sind meine beiden Hündinnen Lotti und Stellar
                        und ich. Gemeinsam lieben wir es, durch die Wälder rund
                        um München und in den Isarauen zu streifen. Auf unseren
                        abwechslungsreichen Ausflügen freuen wir uns immer über
                        neue vierbeinige Begleiter!
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
                    {dogImages.map((img, i) => (
                        <div key={i} className="relative aspect-[2/3] w-full">
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
                            {PRICING.tenWalkTicket.price} {PRICING.tenWalkTicket.currency}
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
                className="flex w-full flex-col items-center gap-10 bg-white px-10 py-12 md:py-20"
            >
                <h2 className="mb-4 text-4xl font-medium italic md:mb-6 md:text-7xl">
                    Coming Soon
                </h2>
                <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-4">
                    {comingSoonImages?.map((image, index) => (
                        <div
                            key={index}
                            className="relative aspect-[2/3] w-full"
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="rounded-lg object-cover"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ */}
            <FAQ />

            {/* CONTACT */}
            <section
                id="contact"
                className="w-full bg-gray-100 px-6 py-16 text-center md:py-24"
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
