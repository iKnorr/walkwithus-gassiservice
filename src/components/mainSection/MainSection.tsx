'use client'

import { FAQ } from '../custom/faq/FAQ'
import {
    AboutSection,
    GallerySection,
    TariffsSection,
    ComingSoonSection,
    ContactSection,
} from './sections'

export const MainSection = () => {
    return (
        <div className="flex w-full flex-col items-center">
            <AboutSection />
            <GallerySection />
            <TariffsSection />
            <ComingSoonSection />
            <FAQ />
            <ContactSection />
        </div>
    )
}
