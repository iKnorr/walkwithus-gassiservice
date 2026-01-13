import Image from 'next/image'

const dogImages = [
    { src: '/images/dogs-1.webp', alt: 'Dogs having fun 1' },
    { src: '/images/dogs-9.webp', alt: 'Dogs having fun 2' },
    { src: '/images/dogs-6.webp', alt: 'Dogs having fun 3' },
    { src: '/images/dogs-8.webp', alt: 'Dogs having fun 4' },
]

export const GallerySection = () => {
    return (
        <section className="w-full bg-white px-6 py-8 md:py-12">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                {dogImages.map((img) => (
                    <div key={img.src} className="relative aspect-[2/3] w-full">
                        <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className="rounded-lg object-cover"
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}
