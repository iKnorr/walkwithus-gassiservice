import React from 'react'
import { Facebook, Instagram } from 'lucide-react'
import Link from 'next/link'
import { MainSection } from '../mainSection/MainSection'
import { HeroPost } from '../heroPost/HeroPost'

export const Homeclient = () => {
    return (
        <main className="flex flex-col justify-between">
            <HeroPost />

            <MainSection />
            <footer className="z-10 w-full border-t border-gray-200 bg-green text-white">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row">
                    {/* Left: Social Icons */}
                    <div className="flex items-center gap-4">
                        <Link
                            target="_blank"
                            href="https://www.facebook.com/walkwithusgassiservice"
                            className="transition-colors hover:text-primary"
                        >
                            <Facebook />
                        </Link>
                        <Link
                            target="_blank"
                            href="https://www.instagram.com/walkwithus_gassiservice/?hl=en"
                            className="transition-colors hover:text-primary"
                        >
                            <Instagram />
                        </Link>
                    </div>

                    {/* Center: Quick Links */}
                    <div className="flex flex-col items-center gap-1 text-sm sm:flex-row sm:gap-4">
                        <Link
                            href="/"
                            className="transition-colors hover:text-primary"
                        >
                            Über uns
                        </Link>
                        <Link
                            href="#contact"
                            className="transition-colors hover:text-primary"
                        >
                            Kontakt
                        </Link>
                        <Link
                            href="#tariffs"
                            className="transition-colors hover:text-primary"
                        >
                            Tarife
                        </Link>
                        <Link
                            href="#comingSoon"
                            className="transition-colors hover:text-primary"
                        >
                            Coming Soon
                        </Link>
                    </div>

                    {/* Right: Copyright */}
                    <div className="text-center text-xs sm:text-right sm:text-sm">
                        © 2025 Walk with us - GassiService
                    </div>
                </div>
            </footer>
        </main>
    )
}
