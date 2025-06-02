'use client'

import { HexagonIcon, Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Hexagon } from '../custom/svg/Hexagon'

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
        <main className="flex w-full flex-col items-center">
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
                        „Us“ – das sind meine beiden Hündinnen Lotti und Stellar
                        und ich. Gemeinsam lieben wir es, durch die Wälder rund
                        um München und in den Isarauen zu streifen. Auf unseren
                        abwechslungsreichen Ausflügen freuen wir uns immer über
                        neue vierbeinige Begleiter!
                    </p>
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
                <div className="mx-auto grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-2">
                    {[39, 38, 37, 36, 35].map((price, i) => (
                        <div
                            key={price}
                            className="rounded-2xl border bg-gray-100 p-4 shadow-sm"
                        >
                            <p className="text-lg font-semibold">
                                {i + 1}x / Woche
                            </p>
                            <p className="text-2xl font-bold">{price} €</p>
                        </div>
                    ))}
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
                <div className="flex flex-col items-center gap-4 text-xl">
                    <div className="flex items-center gap-2">
                        <Mail />
                        <a
                            href="mailto:walk-with-us@web.de"
                            className="underline hover:text-blue-600"
                        >
                            walk-with-us@web.de
                        </a>
                    </div>
                    <div className="flex items-center gap-2">
                        <Phone />
                        <a
                            href="tel:+491724067926"
                            className="underline hover:text-blue-600"
                        >
                            +49 172 4067926
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}
