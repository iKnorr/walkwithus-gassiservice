import { useState } from 'react'
import { Menu, PawPrint, X } from 'lucide-react'

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    return (
        <nav className="relative w-full bg-slate-300 p-4 shadow-md">
            <div className="flex w-full items-center justify-between">
                <div className="flex gap-2">
                    <PawPrint />
                    <h1 className="text-l font-semibold">
                        Walk with us - GassiService
                    </h1>
                </div>

                <div className="hidden space-x-6 md:flex">
                    <a href="#" className="cursor-pointer hover:text-gray-400">
                        Home
                    </a>
                    <a href="#" className="cursor-pointer hover:text-gray-400">
                        About
                    </a>
                    <a href="#" className="cursor-pointer hover:text-gray-400">
                        Contact
                    </a>
                    <a href="#" className="cursor-pointer hover:text-gray-400">
                        Gallery
                    </a>
                </div>

                <button className="md:hidden" onClick={handleClick}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {isOpen && (
                <div className="absolute right-0 top-10 z-10 mt-4 flex w-full flex-col space-y-4 border-t border-gray-500 bg-slate-300 px-2 py-4 shadow-lg md:hidden">
                    <a
                        href="#"
                        className="rounded-sm px-2 py-2 hover:bg-gray-500 hover:text-white"
                    >
                        Home
                    </a>
                    <a
                        href="#"
                        className="rounded-sm px-2 py-2 hover:bg-gray-500 hover:text-white"
                    >
                        About
                    </a>
                    <a
                        href="#"
                        className="rounded-sm px-2 py-2 hover:bg-gray-500 hover:text-white"
                    >
                        Contact
                    </a>
                    <a
                        href="#"
                        className="rounded-sm px-2 py-2 hover:bg-gray-500 hover:text-white"
                    >
                        Gallery
                    </a>
                </div>
            )}
        </nav>
    )
}
