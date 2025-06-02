import Link from 'next/link'
import React from 'react'

export const HeroPost = () => {
    return (
        <section
            className=""
            style={{
                backgroundImage: "url('/images/dogs-22.webp')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="md:py-22 relative grid h-screen items-center gap-14 px-6 py-32 md:px-24 lg:gap-6 lg:py-28">
                <div className="flex flex-col items-center space-y-4">
                    <div className="mb-4 space-y-2">
                        <h1 className="animate-fadeIn text-center text-5xl italic text-white md:text-7xl">
                            Gassi-Service mit Herz in München.
                        </h1>
                    </div>

                    <div className="w-100">
                        <Link
                            href="#contact"
                            passHref
                            className="animate-fadeIn btn btn-primary text-center text-white hover:bg-gray-100 hover:text-gray-800"
                        >
                            Kontakt
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
