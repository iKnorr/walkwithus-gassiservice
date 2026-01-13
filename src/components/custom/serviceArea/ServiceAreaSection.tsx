'use client'

import React from 'react'
import { MapPin } from 'lucide-react'
import { ServiceAreaMap } from './ServiceAreaMap'
import { SERVICE_AREAS } from './serviceAreaData'

export const ServiceAreaSection = () => {
    return (
        <section
            id="service-area"
            className="w-full bg-gray-100 px-6 py-12 md:py-20"
        >
            <div className="mx-auto max-w-6xl">
                <h2 className="mb-4 text-center text-4xl font-medium italic md:mb-6 md:text-7xl">
                    Unser Einsatzgebiet
                </h2>
                <p className="mb-8 text-center text-lg text-gray-700 md:text-xl">
                    Wir sind in diesen Münchner Stadtteilen für euch unterwegs
                </p>

                <ServiceAreaMap />

                <div className="mt-8 flex flex-wrap justify-center gap-4 md:gap-8">
                    {SERVICE_AREAS.map((area) => (
                        <div
                            key={area.id}
                            className="flex items-center gap-3 rounded-lg bg-white px-4 py-3 shadow-sm"
                        >
                            <div
                                className="h-4 w-4 rounded-full"
                                style={{ backgroundColor: area.color }}
                            />
                            <div>
                                <span className="font-semibold">
                                    {area.name}
                                </span>
                                <p className="text-sm text-gray-600">
                                    {area.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <p className="mb-4 text-gray-700">
                        Wohnst du in einem dieser Gebiete? Wir freuen uns auf
                        deinen Vierbeiner!
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 rounded-md bg-green px-8 py-3 text-lg text-white transition-colors hover:bg-green/90"
                    >
                        <MapPin size={20} />
                        Termin anfragen
                    </a>
                </div>
            </div>
        </section>
    )
}
