// Contact Information
export const CONTACT = {
    email: 'heike@walkwithus-gassiservice.com',
    phone: '+491724067926',
    phoneFormatted: '+49 172 4067926',
    // TODO: Get your free access key from https://web3forms.com
    // Register with heike@walkwithus-gassiservice.com and replace 'YOUR_ACCESS_KEY_HERE'
    web3formsAccessKey: '1c280bea-e0a7-42dc-8d97-11b5cdc88039',
} as const

// Social Media Links
export const SOCIAL_MEDIA = {
    instagram: 'https://www.instagram.com/walkwithus_gassiservice/?hl=en',
    facebook: 'https://www.facebook.com/walkwithusgassiservice',
} as const

// Website Information
export const SITE = {
    name: 'Walk with us - GassiService',
    url: 'https://www.walkwithus-gassiservice.com',
    tagline: 'Gassi-Service mit Herz in München.',
    description:
        'Professioneller Gassiservice in München. Liebevolle Spaziergänge und zuverlässige Hundebetreuung für deinen Vierbeiner.',
} as const

// Pricing Information
export const PRICING = {
    perWalk: {
        price: 41,
        currency: '€',
        description: 'Mit Platzgarantie',
    },
    tenWalkTicket: {
        price: 490,
        currency: '€',
        description: 'Für zeitlich Flexible',
    },
} as const

// Navigation Links
export const NAV_LINKS = [
    { href: '#about', label: 'Über uns' },
    { href: '#tariffs', label: 'Tarife' },
    { href: '#service-area', label: 'Einsatzgebiet' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Kontakt' },
] as const

// Legal Links
export const LEGAL_LINKS = [
    { href: '/impressum', label: 'Impressum' },
    { href: '/datenschutz', label: 'Datenschutz' },
] as const

// Brand Colors
export const COLORS = {
    green: '#5A6C57',
    instagram: '#5B6B57',
    facebook: '#5B6B57',
} as const
