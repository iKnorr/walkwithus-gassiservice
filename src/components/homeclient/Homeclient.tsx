'use client'

import React from 'react'
import { Facebook, Instagram } from 'lucide-react'
import Link from 'next/link'
import { MainSection } from '../mainSection/MainSection'
import { HeroPost } from '../heroPost/HeroPost'

export const Homeclient = () => {
    return (
        <main className="flex flex-col justify-between">
            <HeroPost />

            <MainSection />
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
