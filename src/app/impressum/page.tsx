import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Impressum | Walk with us - GassiService',
    description:
        'Impressum und rechtliche Informationen von Walk with us - GassiService',
    robots: 'noindex, nofollow',
}

export default function ImpressumPage() {
    return (
        <div className="min-h-screen bg-white pt-24">
            <div className="mx-auto max-w-4xl px-6 py-12">
                <h1 className="mb-8 text-4xl font-bold">Impressum</h1>

                <section className="mb-8">
                    <h2 className="mb-4 text-2xl font-semibold">
                        Angaben gemäß § 5 TMG
                    </h2>
                    <p className="mb-2">Walk with us - GassiService</p>
                    <p className="mb-2">Heike Knorr</p>
                    <p className="mb-2">Schluesselbergstrasse 33</p>
                    <p className="mb-2">81673 München</p>
                </section>

                <section className="mb-8">
                    <h2 className="mb-4 text-2xl font-semibold">Kontakt</h2>
                    <p className="mb-2">
                        Telefon:{' '}
                        <a
                            href="tel:+491724067926"
                            className="text-blue-600 hover:underline"
                        >
                            +49 172 4067926
                        </a>
                    </p>
                    <p className="mb-2">
                        E-Mail:{' '}
                        <a
                            href="mailto:heike@walkwithus-gassiservice.com"
                            className="text-blue-600 hover:underline"
                        >
                            heike@walkwithus-gassiservice.com
                        </a>
                    </p>
                </section>

                {/* <section className="mb-8">
                    <h2 className="mb-4 text-2xl font-semibold">
                        Umsatzsteuer-ID
                    </h2>
                    <p>
                        Umsatzsteuer-Identifikationsnummer gemäß §27 a
                        Umsatzsteuergesetz:
                    </p>
                    <p>[Ihre USt-IdNr.]</p>
                </section> */}

                <section className="mb-8">
                    <h2 className="mb-4 text-2xl font-semibold">
                        Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
                    </h2>
                    <p className="mb-2">Heike Knorr</p>
                    <p className="mb-2">Schluesselbergstrasse 33</p>
                    <p className="mb-2">81673 München</p>
                </section>

                <section className="mb-8">
                    <h2 className="mb-4 text-2xl font-semibold">
                        EU-Streitschlichtung
                    </h2>
                    <p className="mb-4">
                        Die Europäische Kommission stellt eine Plattform zur
                        Online-Streitbeilegung (OS) bereit:
                    </p>
                    <a
                        href="https://ec.europa.eu/consumers/odr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        https://ec.europa.eu/consumers/odr
                    </a>
                    <p className="mt-4">
                        Unsere E-Mail-Adresse finden Sie oben im Impressum.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="mb-4 text-2xl font-semibold">
                        Verbraucherstreitbeilegung / Universalschlichtungsstelle
                    </h2>
                    <p>
                        Wir sind nicht bereit oder verpflichtet, an
                        Streitbeilegungsverfahren vor einer
                        Verbraucherschlichtungsstelle teilzunehmen.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="mb-4 text-2xl font-semibold">
                        Haftung für Inhalte
                    </h2>
                    <p className="mb-4">
                        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für
                        eigene Inhalte auf diesen Seiten nach den allgemeinen
                        Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
                        als Diensteanbieter jedoch nicht verpflichtet,
                        übermittelte oder gespeicherte fremde Informationen zu
                        überwachen oder nach Umständen zu forschen, die auf eine
                        rechtswidrige Tätigkeit hinweisen.
                    </p>
                    <p>
                        Verpflichtungen zur Entfernung oder Sperrung der Nutzung
                        von Informationen nach den allgemeinen Gesetzen bleiben
                        hiervon unberührt. Eine diesbezügliche Haftung ist
                        jedoch erst ab dem Zeitpunkt der Kenntnis einer
                        konkreten Rechtsverletzung möglich. Bei Bekanntwerden
                        von entsprechenden Rechtsverletzungen werden wir diese
                        Inhalte umgehend entfernen.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="mb-4 text-2xl font-semibold">
                        Haftung für Links
                    </h2>
                    <p className="mb-4">
                        Unser Angebot enthält Links zu externen Websites
                        Dritter, auf deren Inhalte wir keinen Einfluss haben.
                        Deshalb können wir für diese fremden Inhalte auch keine
                        Gewähr übernehmen. Für die Inhalte der verlinkten Seiten
                        ist stets der jeweilige Anbieter oder Betreiber der
                        Seiten verantwortlich. Die verlinkten Seiten wurden zum
                        Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
                        überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                        Verlinkung nicht erkennbar.
                    </p>
                    <p>
                        Eine permanente inhaltliche Kontrolle der verlinkten
                        Seiten ist jedoch ohne konkrete Anhaltspunkte einer
                        Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
                        Rechtsverletzungen werden wir derartige Links umgehend
                        entfernen.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="mb-4 text-2xl font-semibold">
                        Urheberrecht
                    </h2>
                    <p className="mb-4">
                        Die durch die Seitenbetreiber erstellten Inhalte und
                        Werke auf diesen Seiten unterliegen dem deutschen
                        Urheberrecht. Die Vervielfältigung, Bearbeitung,
                        Verbreitung und jede Art der Verwertung außerhalb der
                        Grenzen des Urheberrechtes bedürfen der schriftlichen
                        Zustimmung des jeweiligen Autors bzw. Erstellers.
                        Downloads und Kopien dieser Seite sind nur für den
                        privaten, nicht kommerziellen Gebrauch gestattet.
                    </p>
                    <p>
                        Soweit die Inhalte auf dieser Seite nicht vom Betreiber
                        erstellt wurden, werden die Urheberrechte Dritter
                        beachtet. Insbesondere werden Inhalte Dritter als solche
                        gekennzeichnet. Sollten Sie trotzdem auf eine
                        Urheberrechtsverletzung aufmerksam werden, bitten wir um
                        einen entsprechenden Hinweis. Bei Bekanntwerden von
                        Rechtsverletzungen werden wir derartige Inhalte umgehend
                        entfernen.
                    </p>
                </section>

                <div className="mt-12 border-t pt-8">
                    <Link href="/" className="text-blue-600 hover:underline">
                        Zurück zur Startseite
                    </Link>
                </div>
            </div>
        </div>
    )
}
