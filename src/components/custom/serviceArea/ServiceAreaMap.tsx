'use client'

import React, { useEffect, useState, useCallback } from 'react'
import { APIProvider, Map, useMap } from '@vis.gl/react-google-maps'
import {
    SERVICE_AREAS,
    MAP_CENTER,
    DEFAULT_ZOOM,
    type ServiceArea,
} from './serviceAreaData'

interface PolygonProps {
    area: ServiceArea
    isActive: boolean
    onHover: (id: string | null) => void
}

const ServiceAreaPolygon = ({ area, isActive, onHover }: PolygonProps) => {
    const map = useMap()
    const [polygon, setPolygon] = useState<google.maps.Polygon | null>(null)

    useEffect(() => {
        if (!map) return

        const newPolygon = new google.maps.Polygon({
            paths: area.coordinates,
            strokeColor: area.color,
            strokeOpacity: 1,
            strokeWeight: 2,
            fillColor: area.color,
            fillOpacity: isActive ? 0.5 : 0.35,
            map: map,
        })

        newPolygon.addListener('mouseover', () => onHover(area.id))
        newPolygon.addListener('mouseout', () => onHover(null))

        setPolygon(newPolygon)

        return () => {
            newPolygon.setMap(null)
        }
    }, [map, area, onHover])

    useEffect(() => {
        if (!polygon) return
        polygon.setOptions({ fillOpacity: isActive ? 0.5 : 0.35 })
    }, [polygon, isActive])

    return null
}

const MapContent = () => {
    const [activeArea, setActiveArea] = useState<string | null>(null)

    const handleHover = useCallback((id: string | null) => {
        setActiveArea(id)
    }, [])

    return (
        <>
            {SERVICE_AREAS.map((area) => (
                <ServiceAreaPolygon
                    key={area.id}
                    area={area}
                    isActive={activeArea === area.id}
                    onHover={handleHover}
                />
            ))}
        </>
    )
}

export const ServiceAreaMap = () => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

    if (!apiKey) {
        return (
            <div className="flex h-[400px] w-full items-center justify-center rounded-lg bg-gray-200 md:h-[500px]">
                <p className="text-gray-500">
                    Google Maps API Key wird benötigt
                </p>
            </div>
        )
    }

    return (
        <div className="w-full overflow-hidden rounded-lg shadow-md">
            <APIProvider apiKey={apiKey}>
                <Map
                    defaultCenter={MAP_CENTER}
                    defaultZoom={DEFAULT_ZOOM}
                    gestureHandling="cooperative"
                    disableDefaultUI={false}
                    mapTypeControl={false}
                    streetViewControl={false}
                    fullscreenControl={true}
                    zoomControl={true}
                    className="h-[400px] w-full md:h-[500px]"
                    mapId="service-area-map"
                >
                    <MapContent />
                </Map>
            </APIProvider>
        </div>
    )
}
