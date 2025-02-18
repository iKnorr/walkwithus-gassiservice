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
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import { Navbar } from '@/components/custom/navbar/Navbar'
import { InfoMain } from '@/components/custom/info/InfoMain'

export default function Home() {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on('select', () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <main className="flex h-screen flex-col justify-between bg-slate-300">
            <Navbar />
            <section className="w-full">
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
                                        src={item.image || '/images/dogs-1.jpg'}
                                        alt={item.title}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-white">
                                        <h2 className="mb-2 text-4xl font-bold">
                                            {item.title}
                                        </h2>
                                        <p className="text-xl">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    {/* <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" /> */}
                </Carousel>
            </section>
            <InfoMain />
            {/* <Carousel
                opts={{
                    align: 'start',
                    loop: true,
                }}
                setApi={setApi}
                className="flex flex-col items-center justify-center h-full bg-slate-300"
            >
                <CarouselContent className="flex h-full">
                    <CarouselItem className="h-full ">
                        <div className="container h-full px-6 ">
                            <h2 className="text-3xl font-bold text-center mb-4">
                                About Us
                            </h2>
                            <p className="text-center max-w-2xl mx-auto">
                                Walk With Us Gassiservice is dedicated to
                                providing professional, reliable, and loving
                                care for your dogs. Our experienced team ensures
                                your furry friends get the exercise and
                                attention they need while you're away.
                            </p>
                            <div className="flex w-full justify-center items-center">
                                <Button>Contact us</Button>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="container h-full px-4 bg-gray-400">
                            <h2 className="text-3xl font-bold text-center mb-4">
                                Contact Us
                            </h2>
                            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
                                <div className="flex items-center">
                                    <Phone className="mr-2" />
                                    <span>+49 123 456 7890</span>
                                </div>
                                <div className="flex items-center">
                                    <Mail className="mr-2" />
                                    <span>info@walkwithus.de</span>
                                </div>
                                <div className="flex items-center">
                                    <MapPin className="mr-2" />
                                    <span>München, Germany</span>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
            </Carousel> */}
            <footer className="border-t border-gray-500 bg-slate-300">
                <div className="container flex h-full items-center justify-between px-4 py-2">
                    <Link href="#" className="hover:text-primary">
                        <Facebook />
                    </Link>
                    <div className="text-xs text-gray-600">
                        © 2025 Walk with us - GassiService
                    </div>
                    <Link href="#" className="hover:text-primary">
                        <Instagram />
                    </Link>
                    {/* <div className="flex flex-col">
                        <div className="flex space-x-4">
                            <Link href="#" className="hover:text-primary">
                                <Facebook />
                            </Link>
                            <Link href="#" className="hover:text-primary">
                                <Instagram />
                            </Link>
                        </div>
                    </div> */}
                </div>
            </footer>
        </main>
    )
    // <div className="flex flex-col min-h-screen">
    //     <main className="flex-grow">
    //         <section className="relative w-full h-[400px] md:h-[500px]">
    //             <Carousel className="w-full h-full">
    //                 <CarouselContent>
    //                     <CarouselItem>
    //                         <div className="relative w-full h-full">
    //                             <Image
    //                                 src="/images/dogs-1.jpg"
    //                                 alt={`Dog walking image 1`}
    //                                 fill
    //                                 style={{ objectFit: 'cover' }}
    //                                 // onError={() =>
    //                                 //     console.log('Error loading image')
    //                                 // }
    //                             />
    //                         </div>
    //                     </CarouselItem>
    //                     <CarouselItem>
    //                         <div className="relative w-full h-full">
    //                             <Image
    //                                 src="/images/dogs-2.jpg"
    //                                 alt={`Dog walking image 2`}
    //                                 fill
    //                                 style={{ objectFit: 'cover' }}
    //                                 // onError={() =>
    //                                 //     console.log('Error loading image')
    //                                 // }
    //                             />
    //                         </div>
    //                     </CarouselItem>
    //                     <CarouselItem>
    //                         <div className="relative w-full h-full">
    //                             <Image
    //                                 src="/images/dogs-3.jpg"
    //                                 alt={`Dog walking image 2`}
    //                                 fill
    //                                 style={{ objectFit: 'cover' }}
    //                                 // onError={() =>
    //                                 //     console.log('Error loading image')
    //                                 // }
    //                             />
    //                         </div>
    //                     </CarouselItem>
    //                 </CarouselContent>
    //                 <CarouselPrevious />
    //                 <CarouselNext />
    //             </Carousel>
    //         </section>
    //         {/* </div> */}
    //         <div className="flex flex-col justify-center items-center py-2">
    //             <Image
    //                 aria-hidden
    //                 src="/hexagon.svg"
    //                 alt="File icon"
    //                 width={30}
    //                 height={30}
    //             />
    //             <div className="flex justify-center items-center border-white border-b-2 border-dotted w-full">
    //                 <h1 className="text-4xl font-bold text-nowrap ">
    //                     Walk with us !
    //                 </h1>
    //             </div>
    //             <div className="flex justify-center items-center border-white border-b-2 border-dotted w-full">
    //                 <h1 className="text-2xl text-nowrap">Gassiservice</h1>
    //             </div>
    //             <div className="flex justify-center items-center px-4">
    //                 <h2 className="text-center text-1xl">
    //                     Liebevoller GassiService mit Hol- und BringService !
    //                 </h2>
    //                 <h2 className="text-center text-1xl">
    //                     Test test test und nochmal test
    //                 </h2>
    //             </div>
    //         </div>
    //     </main>
    //     {/* <footer className="flex">
    //         <a
    //             className="flex items-center"
    //             href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //         >
    //             <Image
    //                 aria-hidden
    //                 src="/file.svg"
    //                 alt="File icon"
    //                 width={16}
    //                 height={16}
    //             />
    //             Learn
    //         </a>
    //         <a
    //             className=""
    //             href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //         >
    //             <Image
    //                 aria-hidden
    //                 src="/window.svg"
    //                 alt="Window icon"
    //                 width={16}
    //                 height={16}
    //             />
    //             @iKnorr
    //         </a>
    //         <a
    //             className=""
    //             href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //         >
    //             <Image
    //                 aria-hidden
    //                 src="/globe.svg"
    //                 alt="Globe icon"
    //                 width={16}
    //                 height={16}
    //             />
    //             Go to nextjs.org →
    //         </a>
    //     </footer> */}
    // </div>
}
