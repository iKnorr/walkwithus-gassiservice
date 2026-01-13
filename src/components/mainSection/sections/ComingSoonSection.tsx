import Image from 'next/image'

const comingSoonServices = [
    {
        id: 'training',
        imageSrc: '/images/training-icon.webp',
        title: 'Einzelstundentraining',
        description:
            'Individuelle Betreuung für dich und deinen Hund – abgestimmt auf eure Bedürfnisse.',
    },
    {
        id: 'mantrailing',
        imageSrc: '/images/mantrailing-icon.webp',
        title: 'Mantrailing',
        description:
            'Gemeinsam auf Spurensuche – artgerechte Auslastung für Nasenarbeiter.',
    },
    {
        id: 'social-walks',
        imageSrc: '/images/social-walks-icon.webp',
        title: 'Social Walks',
        description:
            'Geführte Spaziergänge in der Gruppe – entspanntes Miteinander statt wildem Durcheinander.',
    },
    {
        id: 'bike-training',
        imageSrc: '/images/bike-training-icon.webp',
        title: 'Lastenrad-Gewöhnung',
        description:
            'Schritt für Schritt zur sicheren Fahrt – stressfreie Einführung ans Lastenrad.',
    },
]

export const ComingSoonSection = () => {
    return (
        <section
            id="comingSoon"
            className="flex w-full flex-col items-center bg-white px-6 py-12 md:px-10 md:py-20"
        >
            <h2 className="mb-4 text-4xl font-medium italic md:mb-6 md:text-7xl">
                Coming Soon
            </h2>
            <p className="mb-10 text-center text-lg text-gray-700 md:text-xl">
                Bald neu bei <strong>Walk with us</strong> – mit Herz,
                Know-how und Pfotengefühl
            </p>
            <div className="grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {comingSoonServices.map((service) => (
                    <div
                        key={service.id}
                        className="group flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                        <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-green/10">
                            <Image
                                src={service.imageSrc}
                                alt={service.title}
                                width={64}
                                height={64}
                                className="object-contain"
                            />
                        </div>
                        <h3 className="mb-3 text-xl font-semibold text-gray-800">
                            {service.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-gray-600">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}
