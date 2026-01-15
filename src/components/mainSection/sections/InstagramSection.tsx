'use client'

import { useEffect } from 'react'
import Script from 'next/script'

declare global {
    interface Window {
        eapps?: {
            initWidgets: () => void
        }
    }
}

const ELFSIGHT_APP_ID = '9b0b0c71-e429-4edf-8c3b-6c8c0342106e'

export const InstagramSection = () => {
    useEffect(() => {
        // Re-initialize Elfsight widget if script already loaded
        if (window.eapps) {
            window.eapps.initWidgets()
        }
    }, [])

    return (
        <section id="instagram" className="w-full bg-gray-50 px-6 py-12 md:py-16">
            <div className="mx-auto max-w-6xl">
                <h2 className="mb-4 text-center text-3xl font-bold text-[#5A6C57]">
                    Folge uns auf Instagram
                </h2>
                <p className="mb-8 text-center text-gray-600">
                    Tägliche Einblicke in unsere Gassi-Abenteuer
                </p>

                <Script
                    src="https://static.elfsight.com/platform/platform.js"
                    strategy="lazyOnload"
                />
                <div
                    className={`elfsight-app-${ELFSIGHT_APP_ID}`}
                    data-elfsight-app-lazy
                />
            </div>
        </section>
    )
}
