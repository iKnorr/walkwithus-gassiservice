import { Dispatch, SetStateAction, useState } from 'react'
import { Instagram, Menu, PawPrint, X } from 'lucide-react'
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
    }
    const handleClickContact = () => {
        setCurrentIndex(1)
    }
    const handleClickServices = () => {
        setCurrentIndex(2)
    }
    return (
        <nav className="relative w-full bg-neutral-600 p-4 shadow-md">
            <div className="flex w-full items-center justify-between text-white">
                <a
                    target="_blank"
                    href="https://www.instagram.com/walkwithus_gassiservice/?hl=en"
                    className="flex items-center justify-center"
                >
                    <PawPrint color="white" />
                </a>
                <h1 className="text-l font-semibold">
                    Walk with us - GassiService
                </h1>

                <div className="hidden space-x-6 md:flex">
                    <Link
                        href="/"
                        className="cursor-pointer hover:text-gray-400"
                    >
                        Home
                    </Link>
                    <a
                        href="#"
                        className="cursor-pointer hover:text-gray-400"
                        onClick={handleClickAbout}
                    >
                        About
                    </a>
                    <a
                        href="#"
                        className="cursor-pointer hover:text-gray-400"
                        onClick={handleClickContact}
                    >
                        Contact
                    </a>
                    <a
                        href="#"
                        className="cursor-pointer hover:text-gray-400"
                        onClick={handleClickServices}
                    >
                        Services
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
                    >
                        Home
                    </a>
                    <a
                        href="#"
                        className="rounded-sm px-2 py-2 hover:bg-gray-500 hover:text-white"
                        onClick={handleClickAbout}
                    >
                        About
                    </a>
                    <a
                        href="#"
                        className="rounded-sm px-2 py-2 hover:bg-gray-500 hover:text-white"
                        onClick={handleClickContact}
                    >
                        Contact
                    </a>
                    <a
                        href="#"
                        className="rounded-sm px-2 py-2 hover:bg-gray-500 hover:text-white"
                        onClick={handleClickServices}
                    >
                        Services
                    </a>
                    <a
                        target="_blank"
                        href="https://www.instagram.com/walkwithus_gassiservice/?hl=en"
                        className="flex w-full items-center justify-center p-2"
                    >
                        <Instagram />
                    </a>
                </div>
            )}
        </nav>
    )
}
