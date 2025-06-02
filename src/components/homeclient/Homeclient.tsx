'use client'

import React, { useEffect, useState } from 'react'
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from '../ui/carousel'
import Image from 'next/image'
import { Navbar } from '../custom/navbar/Navbar'
import Autoplay from 'embla-carousel-autoplay'
import { bannerItems } from '@/data/bannerItems'
import { Facebook, HexagonIcon, Instagram } from 'lucide-react'
import Link from 'next/link'
import { MainSection } from '../mainSection/MainSection'
import { Hexagon } from '../custom/svg/Hexagon'
import { HeroPost } from '../heroPost/HeroPost'
// import { InfoMain } from '../custom/info/InfoMain'

export const Homeclient = () => {
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
        <main className="flex flex-col justify-between">
            <HeroPost />
            {/* <Navbar setCurrentIndex={setCurrentIndex} /> */}
            {/* <section className="w-full bg-gray-100"> */}
            {/* <Carousel
                    opts={{
                        align: 'start',
                        loop: true,
                    }}
                    plugins={[
                        Autoplay({
                            delay: 5000,
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
                                        src={
                                            item?.image || '/images/dogs-1.webp'
                                        }
                                        alt={item.title}
                                        fill
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel> */}
            {/* </section> */}
            <MainSection />
            {/* <InfoMain
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
            /> */}
            <footer className="z-10 h-20 w-full border-t border-gray-200 bg-green text-white">
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
