import { Dispatch, SetStateAction } from 'react'
import { Hexagon } from '../svg/Hexagon'
import { ArrowLeft, ArrowRight, Hexagon as HexagonIcon } from 'lucide-react'
import { sections } from './Sections'

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
        <div className="relative flex h-full w-full flex-col items-center bg-gray-100 text-gray-800">
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
            <div className="z-10 flex h-full w-full items-center justify-center px-2 py-2">
                <button onClick={prevSlide}>
                    <ArrowLeft color="#85A98F" size={40} />
                </button>
                <div className="flex w-full flex-col items-center justify-center px-2 py-3 md:px-10">
                    {sections[currentIndex].content}
                </div>
                <button onClick={nextSlide}>
                    <ArrowRight color="#85A98F" size={40} />
                </button>
            </div>
        </div>
    )
}
