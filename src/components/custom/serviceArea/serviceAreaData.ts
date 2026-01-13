export interface ServiceArea {
    id: string
    name: string
    description: string
    coordinates: google.maps.LatLngLiteral[]
    color: string
}

export const SERVICE_AREAS: ServiceArea[] = [
    {
        id: 'haidhausen',
        name: 'Haidhausen',
        description: 'Unser Hauptgebiet - ideal für Spaziergänge entlang der Isar',
        coordinates: [
            { lat: 48.1380, lng: 11.5850 },
            { lat: 48.1380, lng: 11.6050 },
            { lat: 48.1350, lng: 11.6150 },
            { lat: 48.1280, lng: 11.6150 },
            { lat: 48.1200, lng: 11.6050 },
            { lat: 48.1200, lng: 11.5850 },
            { lat: 48.1280, lng: 11.5800 },
        ],
        color: '#5A6C57',
    },
    {
        id: 'berg-am-laim',
        name: 'Berg am Laim',
        description: 'Erweitertes Servicegebiet mit tollen Grünflächen',
        coordinates: [
            { lat: 48.1350, lng: 11.6150 },
            { lat: 48.1350, lng: 11.6450 },
            { lat: 48.1280, lng: 11.6550 },
            { lat: 48.1150, lng: 11.6550 },
            { lat: 48.1080, lng: 11.6450 },
            { lat: 48.1080, lng: 11.6150 },
            { lat: 48.1200, lng: 11.6050 },
            { lat: 48.1280, lng: 11.6150 },
        ],
        color: '#7A8C77',
    },
]

export const MAP_CENTER = { lat: 48.125, lng: 11.615 }
export const DEFAULT_ZOOM = 13
