import { Dispatch, SetStateAction, useState } from 'react'
import { Facebook, Instagram, Menu, PawPrint, X } from 'lucide-react'
import Link from 'next/link'

interface NavbarProps {
    setCurrentIndex: Dispatch<SetStateAction<number>>
}

export const Navbar = ({ setCurrentIndex }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const handleClickAbout = () => {
        setCurrentIndex(0)
        setIsOpen(false)
    }
    const handleClickContact = () => {
        setCurrentIndex(1)
        setIsOpen(false)
    }
    const handleClickServices = () => {
        setCurrentIndex(2)
        setIsOpen(false)
    }
    const handleClickTariffs = () => {
        setCurrentIndex(3)
        setIsOpen(false)
    }
    return (
        <nav className="relative w-full bg-green p-4 shadow-md">
            <div className="flex w-full items-center justify-between text-white">
                <div className="flex gap-2">
                    <PawPrint color="white" />
                    <h1 className="text-l font-semibold">
                        Walk with us - GassiService
                    </h1>
                </div>

                <div className="hidden space-x-6 md:flex">
                    <Link
                        href="/"
                        className="cursor-pointer hover:text-gray-400"
                    >
                        Startseite
                    </Link>
                    <a
                        href="#"
                        className="cursor-pointer hover:text-gray-400"
                        onClick={handleClickAbout}
                    >
                        Über uns
                    </a>
                    <a
                        href="#"
                        className="cursor-pointer hover:text-gray-400"
                        onClick={handleClickContact}
                    >
                        Kontakt
                    </a>
                    <a
                        href="#"
                        className="cursor-pointer hover:text-gray-400"
                        onClick={handleClickServices}
                    >
                        Coming Soon
                    </a>
                    <a
                        href="#"
                        className="cursor-pointer hover:text-gray-400"
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
                <div className="absolute right-0 top-10 z-20 mt-4 flex w-full flex-col items-center justify-center space-y-4 border-t border-gray-500 bg-gray-100 px-2 py-4 shadow-lg md:hidden">
                    <a
                        href="#"
                        className="rounded-sm px-2 py-2 hover:bg-gray-500 hover:text-white"
                        onClick={() => setIsOpen(false)}
                    >
                        Startseite
                    </a>
                    <a
                        href="#"
                        className="rounded-sm px-2 py-2 hover:bg-gray-500 hover:text-white"
                        onClick={handleClickAbout}
                    >
                        Über uns
                    </a>
                    <a
                        href="#"
                        className="rounded-sm px-2 py-2 hover:bg-gray-500 hover:text-white"
                        onClick={handleClickContact}
                    >
                        Kontakt
                    </a>
                    <a
                        href="#"
                        className="rounded-sm px-2 py-2 hover:bg-gray-500 hover:text-white"
                        onClick={handleClickServices}
                    >
                        Coming Soon
                    </a>
                    <a
                        href="#"
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
