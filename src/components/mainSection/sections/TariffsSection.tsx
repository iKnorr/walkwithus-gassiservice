import { PRICING } from '@/data/constants'

export const TariffsSection = () => {
    return (
        <section
            id="tariffs"
            className="w-full bg-green px-6 py-12 text-center md:py-20"
        >
            <h2 className="mb-4 text-4xl font-medium italic text-white md:mb-6 md:text-7xl">
                Tarife für Walks
            </h2>
            <p className="mb-6 text-xl text-white">
                Regelmäßige Spaziergänge – abgestimmt auf deinen Bedarf.
            </p>
            <div className="flex w-full flex-wrap items-center justify-center gap-10">
                <div className="w-[300px] rounded-2xl border bg-gray-100 p-4 text-center shadow-sm">
                    <p className="text-lg font-semibold">
                        Pro Hund und Runde
                    </p>
                    <p className="text-2xl font-bold">
                        {PRICING.perWalk.price} {PRICING.perWalk.currency}
                    </p>
                    <p className="text-sm text-gray-600">
                        {PRICING.perWalk.description}
                    </p>
                </div>

                <div className="w-[300px] rounded-2xl border bg-gray-100 p-4 text-center shadow-sm">
                    <p className="text-lg font-semibold">10 er Karte</p>
                    <p className="text-2xl font-bold">
                        {PRICING.tenWalkTicket.price}{' '}
                        {PRICING.tenWalkTicket.currency}
                    </p>
                    <p className="text-sm text-gray-600">
                        {PRICING.tenWalkTicket.description}
                    </p>
                </div>
            </div>
            <div className="mt-8 text-center">
                <a
                    href="#contact"
                    className="inline-block rounded-md bg-white px-8 py-3 text-lg text-green transition-colors hover:bg-gray-100"
                >
                    Beratungsgespräch vereinbaren
                </a>
            </div>
        </section>
    )
}
