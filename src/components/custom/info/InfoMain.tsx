import { Dispatch, SetStateAction } from 'react'
import { Hexagon } from '../svg/Hexagon'
import {
    ArrowLeft,
    ArrowRight,
    Hexagon as HexagonIcon,
    Mail,
    Phone,
} from 'lucide-react'

const sections = [
    {
        title: 'About Us',
        content: (
            <>
                <h2 className="mb-4 text-center text-2xl font-bold text-white">
                    About Us
                </h2>
                <p className="text-center text-white">
                    `Walk with us! ist mein liebevoller GassiService mit dem ich
                    meine Leidenschaft zum Beruf gemacht habe.`
                </p>
            </>
        ),
    },
    {
        title: 'Contact',
        content: (
            <div className="flex flex-col items-center justify-center text-center text-white">
                <h2 className="mb-4 text-center text-2xl font-bold text-white">
                    Kontakt
                </h2>
                <p>Wir freuen uns auf deine Nachricht!</p>
                <div className="mt-4 flex flex-col items-start justify-center gap-2">
                    <div className="flex gap-2">
                        <Mail />
                        <a href="mailto:kontakt@walkwithus.de">
                            kontakt@walkwithus.de
                        </a>
                    </div>
                    <div className="mt-2 flex gap-2">
                        <Phone />
                        <a href="tel:+49123456789">+49 123 456 789</a>
                    </div>
                </div>
                {/* <p className="mt-2">
                    Erreiche uns jederzeit für Anfragen, Buchungen oder einfach
                    nur, um Hallo zu sagen!
                </p> */}
            </div>
        ),
    },
    {
        title: 'Services',
        content: (
            <>
                <h2 className="mb-4 text-center text-2xl font-bold text-white">
                    Services
                </h2>
                <p className="text-center text-white">
                    Wir bieten individuelle Gassi-Dienste an, perfekt abgestimmt
                    auf die Bedürfnisse deines Hundes.
                </p>
            </>
        ),
    },
]

interface InfoMainProps {
    currentIndex: number
    setCurrentIndex: Dispatch<SetStateAction<number>>
}

export const InfoMain = ({ currentIndex, setCurrentIndex }: InfoMainProps) => {
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sections.length)
    }

    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + sections.length) % sections.length
        )
    }

    return (
        <div className="relative flex h-full w-full flex-col items-center bg-neutral-600 px-2 py-2">
            <div className="absolute top-[-20px] z-10">
                <HexagonIcon
                    className=""
                    color="white"
                    strokeWidth={2}
                    size={30}
                />
            </div>
            <div className="absolute right-auto top-[-35px]">
                <Hexagon />
            </div>
            <div className="z-10 flex h-full w-full items-center justify-center px-2 py-4">
                <button onClick={prevSlide}>
                    <ArrowLeft color="white" size={40} />
                </button>
                <div className="flex h-full w-full flex-col items-center justify-start px-2 py-4">
                    {sections[currentIndex].content}
                </div>
                <button onClick={nextSlide}>
                    <ArrowRight color="white" size={40} />
                </button>
            </div>
        </div>
    )
}
