import { Mail, Phone } from 'lucide-react'

export const sections = [
    {
        title: 'About Us',
        content: (
            <>
                <h2 className="mb-4 text-center text-3xl font-bold">
                    Über uns
                </h2>
                <p className="text-center">Walk with us!</p>
                <p className="text-center">
                    Das ist mein liebevoller Gassiservice, mit dem ich vor
                    sieben Jahren meine Leidenschaft zum Beruf gemacht habe –
                    für mich gibt es nichts Schöneres als hündische
                    Gesellschaft.
                </p>
                <p className="text-center">{`„Us“ – das sind meine beiden Hündinnen Lotti und Stellar und ich. Gemeinsam lieben wir es, durch die Wälder rund um München und in den Isarauen zu streifen. Auf unseren abwechslungsreichen Ausflügen freuen wir uns immer
                    über neue vierbeinige Begleiter!`}</p>
            </>
        ),
    },
    {
        title: 'Contact',
        content: (
            <div className="flex flex-col items-center justify-center text-center">
                <h2 className="mb-4 text-center text-3xl font-bold">Kontakt</h2>
                <p>Wir freuen uns auf deine Nachricht!</p>
                <div className="mt-4 flex flex-col items-start justify-center gap-2">
                    <div className="flex gap-2">
                        <Mail />
                        <a href="mailto:kontakt@walkwithus.de">
                            walk-with-us@web.de
                        </a>
                    </div>
                    <div className="mt-2 flex gap-2">
                        <Phone />
                        <a href="tel:+49123456789">+49 172 4067926</a>
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: 'Coming Soon',
        content: (
            <>
                <h2 className="mb-6 text-center text-3xl font-extrabold text-gray-800">
                    Coming Soon
                </h2>
                <p className="mb-8 text-center text-lg">
                    Bald neu bei <strong>Walk with us</strong> – mit Herz,
                    Know-how und Pfotengefühl:
                </p>

                <div className="space-y-6">
                    <div className="flex items-start space-x-3">
                        {/* <PawPrint /> */}
                        <p>
                            <strong>Einzelstundentraining:</strong> Individuelle
                            Betreuung für dich und deinen Hund – abgestimmt auf
                            eure Bedürfnisse.
                        </p>
                    </div>

                    <div className="flex items-start space-x-3">
                        {/* <Search /> */}
                        <p>
                            <strong>Mantrailing:</strong> Gemeinsam auf
                            Spurensuche – artgerechte Auslastung für
                            Nasenarbeiter.
                        </p>
                    </div>

                    <div className="flex items-start space-x-3">
                        {/* <Dog /> */}
                        <p>
                            <strong>Social Walks:</strong> Geführte Spaziergänge
                            in der Gruppe – entspanntes Miteinander statt wildem
                            Durcheinander.
                        </p>
                    </div>

                    <div className="flex items-start space-x-3">
                        {/* <Bike /> */}
                        <p>
                            <strong>Lastenrad-Gewöhnung:</strong> Schritt für
                            Schritt zur sicheren Fahrt – stressfreie Einführung
                            ans Lastenrad.
                        </p>
                    </div>
                </div>
            </>
        ),
    },
    {
        title: 'Tariffs',
        content: (
            <div className="mx-auto max-w-xl px-4 py-8">
                <h2 className="mb-6 text-center text-3xl font-extrabold text-gray-800">
                    Tarife für Walks
                </h2>
                <p className="mb-8 text-center text-lg text-gray-600">
                    Regelmäßige Spaziergänge – abgestimmt auf deinen Bedarf.
                </p>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border p-4 text-center shadow-sm">
                        <p className="text-lg font-semibold text-gray-700">
                            1x / Woche
                        </p>
                        <p className="text-2xl font-bold text-gray-900">39 €</p>
                    </div>

                    <div className="rounded-2xl border p-4 text-center shadow-sm">
                        <p className="text-lg font-semibold text-gray-700">
                            2x / Woche
                        </p>
                        <p className="text-2xl font-bold text-gray-900">38 €</p>
                    </div>

                    <div className="rounded-2xl border p-4 text-center shadow-sm">
                        <p className="text-lg font-semibold text-gray-700">
                            3x / Woche
                        </p>
                        <p className="text-2xl font-bold text-gray-900">37 €</p>
                    </div>

                    <div className="rounded-2xl border p-4 text-center shadow-sm">
                        <p className="text-lg font-semibold text-gray-700">
                            4x / Woche
                        </p>
                        <p className="text-2xl font-bold text-gray-900">36 €</p>
                    </div>

                    <div className="rounded-2xl border p-4 text-center shadow-sm">
                        <p className="text-lg font-semibold text-gray-700">
                            5x / Woche
                        </p>
                        <p className="text-2xl font-bold text-gray-900">35 €</p>
                    </div>
                </div>
            </div>
        ),
    },
]
