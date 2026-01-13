import { HexagonIcon } from 'lucide-react'
import { Hexagon } from '../../custom/svg/Hexagon'

export const AboutSection = () => {
    return (
        <section
            id="about"
            className="relative flex flex-col items-center justify-center bg-gray-100 px-6 py-12 text-center md:px-40 md:py-40"
        >
            <div className="absolute top-[-20px] z-10">
                <HexagonIcon
                    className=""
                    color="#5B6B57"
                    strokeWidth={3}
                    size={30}
                />
            </div>
            <div className="absolute right-auto top-[-35px]">
                <Hexagon />
            </div>
            <div className="z-10">
                <h1 className="mb-4 text-4xl font-medium italic md:mb-8 md:text-7xl">
                    Willkommen bei Walk with us 🐾
                </h1>
                <p className="mb-2 text-xl">
                    Das ist mein liebevoller Gassiservice, mit dem ich vor
                    sieben Jahren meine Leidenschaft zum Beruf gemacht habe
                    – für mich gibt es nichts Schöneres als hündische
                    Gesellschaft.
                </p>
                <p className="text-xl">
                    &ldquo;Us&rdquo; – das sind meine beiden Hündinnen Lotti
                    und Stellar und ich. Gemeinsam lieben wir es, durch die
                    Wälder rund um München und in den Isarauen zu streifen.
                    Auf unseren abwechslungsreichen Ausflügen freuen wir uns
                    immer über neue vierbeinige Begleiter!
                </p>
                <div className="mt-8">
                    <a
                        href="#contact"
                        className="inline-block rounded-md bg-green px-8 py-3 text-lg text-white transition-colors hover:bg-green/90"
                    >
                        Jetzt Kontakt aufnehmen
                    </a>
                </div>
            </div>
        </section>
    )
}
