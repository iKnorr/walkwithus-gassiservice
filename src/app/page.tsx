'use client'

import Autoplay from 'embla-carousel-autoplay'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel'
import { type CarouselApi } from '@/components/ui/carousel'
import { bannerItems } from '@/data/bannerItems'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Facebook, Instagram } from 'lucide-react'
import Link from 'next/link'
import { Navbar } from '@/components/custom/navbar/Navbar'
import { InfoMain } from '@/components/custom/info/InfoMain'

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [api, setApi] = useState<CarouselApi>()

    useEffect(() => {
        if (!api) {
            return
        }

        // setCount(api.scrollSnapList().length)
        // setCurrent(api.selectedScrollSnap() + 1)

        // api.on('select', () => {
        //     setCurrent(api.selectedScrollSnap() + 1)
        // })
    }, [api])

    return (
        <main className="flex h-screen flex-col justify-between bg-gray-100">
            <Navbar setCurrentIndex={setCurrentIndex} />
            <section className="h-full w-full p-4">
                <Carousel
                    opts={{
                        align: 'start',
                        loop: true,
                    }}
                    plugins={[
                        Autoplay({
                            delay: 8000,
                        }),
                    ]}
                    setApi={setApi}
                    className="w-full"
                >
                    <CarouselContent>
                        {bannerItems.map((item, index) => (
                            <CarouselItem key={index} className="h-full">
                                <div className="relative h-[300px] w-full md:h-[400px]">
                                    <Image
                                        priority
                                        className="h-full w-full object-cover"
                                        src={item.image || '/images/dogs-1.jpg'}
                                        alt={item.title}
                                        fill
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </section>
            <InfoMain
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
            />
            <footer className="z-10 w-full border-t border-gray-200 bg-green text-white">
                <div className="flex h-full w-full items-center justify-between px-4 py-2">
                    <Link
                        target="_blank"
                        href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2Fwalkwithusgassiservice%2F"
                        className="hover:text-primary"
                    >
                        <Facebook />
                    </Link>
                    <div className="text-xs">
                        © 2025 Walk with us - GassiService
                    </div>
                    <Link
                        target="_blank"
                        href="https://www.instagram.com/walkwithus_gassiservice/?hl=en"
                        className="hover:text-primary"
                    >
                        <Instagram />
                    </Link>
                </div>
            </footer>
        </main>
    )
}
