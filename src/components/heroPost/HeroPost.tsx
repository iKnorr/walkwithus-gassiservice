import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export const HeroPost = () => {
    return (
        <section
            className="relative h-screen w-full overflow-hidden"
            aria-label="Hero section - Gassi-Service München"
        >
            {/* Background Image with Next.js Image optimization */}
            <Image
                src="/images/dogs-22.webp"
                alt="Happy dogs playing in nature - Walk with us Gassiservice München"
                fill
                priority
                quality={85}
                className="object-cover object-center"
                sizes="100vw"
            />

            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

            {/* Content */}
            <div className="relative flex h-full items-center justify-center px-6 py-20 md:px-24 md:py-28">
                <div className="flex max-w-4xl flex-col items-center space-y-6 text-center">
                    <div className="space-y-3">
                        <h1 className="animate-fadeIn text-4xl font-bold italic leading-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl">
                            Gassi-Service mit Herz in München.
                        </h1>
                        <p className="animate-fadeIn text-lg text-white drop-shadow-md sm:text-xl md:text-2xl">
                            Professionelle Hundebetreuung seit 2017
                        </p>
                    </div>

                    <Link
                        href="#contact"
                        className="group mt-4 inline-flex animate-fadeIn items-center justify-center rounded-lg bg-green px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-green/90 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-green/50"
                        aria-label="Kontaktformular öffnen"
                    >
                        Jetzt anfragen
                        <svg
                            className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    )
}
