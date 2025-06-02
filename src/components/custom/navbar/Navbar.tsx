'use client'

import { Dispatch, SetStateAction, useState } from 'react'
import { Facebook, Instagram, Menu, PawPrint, X } from 'lucide-react'
import Link from 'next/link'

interface NavbarProps {
    setCurrentIndex?: Dispatch<SetStateAction<number>>
}

export const Navbar = ({ setCurrentIndex }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const handleClickAbout = () => {
        // setCurrentIndex(0)
        setIsOpen(false)
    }
    const handleClickContact = () => {
        // setCurrentIndex(1)
        setIsOpen(false)
    }
    const handleClickServices = () => {
        // setCurrentIndex(2)
        setIsOpen(false)
    }
    const handleClickTariffs = () => {
        // setCurrentIndex(3)
        setIsOpen(false)
    }
    return (
        <nav className="fixed z-30 h-20 w-full items-center justify-center bg-green p-4 shadow-md">
            <div className="flex h-full w-full items-center justify-between text-white">
                <Link className="flex gap-2" href="/">
                    <PawPrint color="white" />
                    <h1 className="text-l font-semibold md:text-lg">
                        Walk with us - GassiService
                    </h1>
                </Link>

                <div className="hidden space-x-6 text-lg md:flex">
                    <a
                        href="#about"
                        className="cursor-pointer font-light hover:text-gray-400 hover:underline"
                        onClick={handleClickAbout}
                    >
                        Über uns
                    </a>
                    <a
                        href="#contact"
                        className="cursor-pointer font-light hover:text-gray-400 hover:underline"
                        onClick={handleClickContact}
                    >
                        Kontakt
                    </a>
                    <a
                        href="#comingSoon"
                        className="cursor-pointer font-light hover:text-gray-400 hover:underline"
                        onClick={handleClickServices}
                    >
                        Coming Soon
                    </a>
                    <a
                        href="#tariffs"
                        className="cursor-pointer font-light hover:text-gray-400 hover:underline"
                        onClick={handleClickTariffs}
                    >
                        Tarife
                    </a>
                </div>

                <button className="md:hidden" onClick={handleClick}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {isOpen && (
                <div className="top-15 absolute right-0 z-20 mt-4 flex w-full flex-col items-center justify-center space-y-4 border-t border-gray-500 bg-gray-100 px-2 py-4 shadow-lg md:hidden">
                    <a
                        href="#about"
                        className="rounded-sm px-2 py-2 hover:bg-gray-500 hover:text-white"
                        onClick={handleClickAbout}
                    >
                        Über uns
                    </a>
                    <a
                        href="#contact"
                        className="rounded-sm px-2 py-2 hover:bg-gray-500 hover:text-white"
                        onClick={handleClickContact}
                    >
                        Kontakt
                    </a>
                    <a
                        href="#comingSoon"
                        className="rounded-sm px-2 py-2 hover:bg-gray-500 hover:text-white"
                        onClick={handleClickServices}
                    >
                        Coming Soon
                    </a>
                    <a
                        href="#tariffs"
                        className="rounded-sm px-2 py-2 hover:bg-gray-500 hover:text-white"
                        onClick={handleClickTariffs}
                    >
                        Tarife
                    </a>
                    <a
                        target="_blank"
                        href="https://www.instagram.com/walkwithus_gassiservice/?hl=en"
                        className="flex w-full items-center justify-center p-2"
                    >
                        <Instagram color="#5B6B57" />
                    </a>
                    <a
                        target="_blank"
                        href="https://www.instagram.com/walkwithus_gassiservice/?hl=en"
                        className="flex w-full items-center justify-center p-2"
                    >
                        <Facebook color="#5B6B57" />
                    </a>
                </div>
            )}
        </nav>
    )
}
