'use client'

import { FAQ } from '../custom/faq/FAQ'
import { ServiceAreaSection } from '../custom/serviceArea/ServiceAreaSection'
import {
    AboutSection,
    InstagramSection,
    TariffsSection,
    ComingSoonSection,
    ContactSection,
} from './sections'

export const MainSection = () => {
    return (
        <div className="flex w-full flex-col items-center">
            <AboutSection />
            <InstagramSection />
            <TariffsSection />
            <ServiceAreaSection />
            <ComingSoonSection />
            <FAQ />
            <ContactSection />
        </div>
    )
}
