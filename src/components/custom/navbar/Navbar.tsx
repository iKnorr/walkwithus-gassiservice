'use client'

import { useState, useEffect } from 'react'
import { Facebook, Instagram, Menu, PawPrint, X } from 'lucide-react'
import Link from 'next/link'
import { SITE, SOCIAL_MEDIA, COLORS, NAV_LINKS } from '@/data/constants'

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY
            setIsScrolled(scrollPosition > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const handleMenuClick = () => {
        setIsOpen(false)
    }
    return (
        <nav
            className={`fixed z-30 h-20 w-full items-center justify-center p-4 transition-all duration-300 ${
                isScrolled ? 'bg-green shadow-md' : 'bg-transparent'
            }`}
        >
            <div className="flex h-full w-full items-center justify-between text-white">
                <Link className="flex gap-2" href="/">
                    <PawPrint color="white" />
                    <h1 className="text-l font-semibold md:text-lg">
                        {SITE.name}
                    </h1>
                </Link>

                <div className="hidden space-x-6 text-lg md:flex">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="cursor-pointer font-light hover:text-gray-400 hover:underline"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <button className="md:hidden" onClick={handleClick}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {isOpen && (
                <div className="top-15 absolute right-0 z-20 mt-4 flex w-full flex-col items-center justify-center space-y-4 border-t border-gray-500 bg-gray-100 px-2 py-4 shadow-lg md:hidden">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="rounded-sm px-2 py-2 hover:bg-gray-500 hover:text-white"
                            onClick={handleMenuClick}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        target="_blank"
                        href={SOCIAL_MEDIA.instagram}
                        className="flex w-full items-center justify-center p-2"
                    >
                        <Instagram color={COLORS.instagram} />
                    </a>
                    <a
                        target="_blank"
                        href={SOCIAL_MEDIA.facebook}
                        className="flex w-full items-center justify-center p-2"
                    >
                        <Facebook color={COLORS.facebook} />
                    </a>
                </div>
            )}
        </nav>
    )
}
