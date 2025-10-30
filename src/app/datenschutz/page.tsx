import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Datenschutzerklärung | Walk with us - GassiService',
    description: 'Datenschutzerklärung von Walk with us - GassiService',
    robots: 'noindex, nofollow',
}

export default function DatenschutzPage() {
    return (
        <div className="min-h-screen bg-white pt-24">
            <div className="mx-auto max-w-4xl px-6 py-12">
                <h1 className="mb-8 text-4xl font-bold">
                    Datenschutzerklärung
                </h1>

                <section className="mb-8">
                    <h2 className="mb-4 text-2xl font-semibold">
                        1. Datenschutz auf einen Blick
                    </h2>

                    <h3 className="mb-3 text-xl font-semibold">
                        Allgemeine Hinweise
                    </h3>
                    <p className="mb-4">
                        Die folgenden Hinweise geben einen einfachen Überblick
                        darüber, was mit Ihren personenbezogenen Daten passiert,
                        wenn Sie diese Website besuchen. Personenbezogene Daten
                        sind alle Daten, mit denen Sie persönlich identifiziert
                        werden können. Ausführliche Informationen zum Thema
                        Datenschutz entnehmen Sie unserer unter diesem Text
                        aufgeführten Datenschutzerklärung.
                    </p>

                    <h3 className="mb-3 text-xl font-semibold">
                        Datenerfassung auf dieser Website
                    </h3>
                    <p className="mb-4">
                        <strong>
                            Wer ist verantwortlich für die Datenerfassung auf
                            dieser Website?
                        </strong>
                    </p>
                    <p className="mb-4">
                        Die Datenverarbeitung auf dieser Website erfolgt durch
                        den Websitebetreiber. Dessen Kontaktdaten können Sie dem
                        Impressum dieser Website entnehmen.
                    </p>

                    <p className="mb-4">
                        <strong>Wie erfassen wir Ihre Daten?</strong>
                    </p>
                    <p className="mb-4">
                        Ihre Daten werden zum einen dadurch erhoben, dass Sie
                        uns diese mitteilen. Hierbei kann es sich z.B. um Daten
                        handeln, die Sie in ein Kontaktformular eingeben.
                    </p>
                    <p className="mb-4">
                        Andere Daten werden automatisch oder nach Ihrer
                        Einwilligung beim Besuch der Website durch unsere
                        IT-Systeme erfasst. Das sind vor allem technische Daten
                        (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des
                        Seitenaufrufs). Die Erfassung dieser Daten erfolgt
                        automatisch, sobald Sie diese Website betreten.
                    </p>

                    <p className="mb-4">
                        <strong>Wofür nutzen wir Ihre Daten?</strong>
                    </p>
                    <p className="mb-4">
                        Ein Teil der Daten wird erhoben, um eine fehlerfreie
                        Bereitstellung der Website zu gewährleisten. Andere
                        Daten können zur Analyse Ihres Nutzerverhaltens
                        verwendet werden.
                    </p>

                    <p className="mb-4">
                        <strong>
                            Welche Rechte haben Sie bezüglich Ihrer Daten?
                        </strong>
                    </p>
                    <p className="mb-4">
                        Sie haben jederzeit das Recht, unentgeltlich Auskunft
                        über Herkunft, Empfänger und Zweck Ihrer gespeicherten
                        personenbezogenen Daten zu erhalten. Sie haben außerdem
                        ein Recht, die Berichtigung oder Löschung dieser Daten
                        zu verlangen. Wenn Sie eine Einwilligung zur
                        Datenverarbeitung erteilt haben, können Sie diese
                        Einwilligung jederzeit für die Zukunft widerrufen.
                        Außerdem haben Sie das Recht, unter bestimmten Umständen
                        die Einschränkung der Verarbeitung Ihrer
                        personenbezogenen Daten zu verlangen. Des Weiteren steht
                        Ihnen ein Beschwerderecht bei der zuständigen
                        Aufsichtsbehörde zu.
                    </p>
                    <p className="mb-4">
                        Hierzu sowie zu weiteren Fragen zum Thema Datenschutz
                        können Sie sich jederzeit an uns wenden.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="mb-4 text-2xl font-semibold">2. Hosting</h2>

                    <h3 className="mb-3 text-xl font-semibold">
                        Externes Hosting
                    </h3>
                    <p className="mb-4">
                        Diese Website wird bei einem externen Dienstleister
                        gehostet (Hoster). Die personenbezogenen Daten, die auf
                        dieser Website erfasst werden, werden auf den Servern
                        des Hosters gespeichert. Hierbei kann es sich v.a. um
                        IP-Adressen, Kontaktanfragen, Meta- und
                        Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen,
                        Websitezugriffe und sonstige Daten, die über eine
                        Website generiert werden, handeln.
                    </p>
                    <p className="mb-4">
                        Der Einsatz des Hosters erfolgt zum Zwecke der
                        Vertragserfüllung gegenüber unseren potenziellen und
                        bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im
                        Interesse einer sicheren, schnellen und effizienten
                        Bereitstellung unseres Online-Angebots durch einen
                        professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="mb-4 text-2xl font-semibold">
                        3. Allgemeine Hinweise und Pflichtinformationen
                    </h2>

                    <h3 className="mb-3 text-xl font-semibold">Datenschutz</h3>
                    <p className="mb-4">
                        Die Betreiber dieser Seiten nehmen den Schutz Ihrer
                        persönlichen Daten sehr ernst. Wir behandeln Ihre
                        personenbezogenen Daten vertraulich und entsprechend den
                        gesetzlichen Datenschutzvorschriften sowie dieser
                        Datenschutzerklärung.
                    </p>
                    <p className="mb-4">
                        Wenn Sie diese Website benutzen, werden verschiedene
                        personenbezogene Daten erhoben. Personenbezogene Daten
                        sind Daten, mit denen Sie persönlich identifiziert
                        werden können. Die vorliegende Datenschutzerklärung
                        erläutert, welche Daten wir erheben und wofür wir sie
                        nutzen. Sie erläutert auch, wie und zu welchem Zweck das
                        geschieht.
                    </p>
                    <p className="mb-4">
                        Wir weisen darauf hin, dass die Datenübertragung im
                        Internet (z.B. bei der Kommunikation per E-Mail)
                        Sicherheitslücken aufweisen kann. Ein lückenloser Schutz
                        der Daten vor dem Zugriff durch Dritte ist nicht
                        möglich.
                    </p>

                    <h3 className="mb-3 text-xl font-semibold">
                        Hinweis zur verantwortlichen Stelle
                    </h3>
                    <p className="mb-4">
                        Die verantwortliche Stelle für die Datenverarbeitung auf
                        dieser Website ist:
                    </p>
                    <p className="mb-2">Walk with us - GassiService</p>
                    <p className="mb-2">Heike Knorr</p>
                    <p className="mb-2">Schluesselbergstrasse 33</p>
                    <p className="mb-2">81673 München</p>
                    <p className="mb-2">
                        Telefon:{' '}
                        <a
                            href="tel:+491724067926"
                            className="text-blue-600 hover:underline"
                        >
                            +49 172 4067926
                        </a>
                    </p>
                    <p className="mb-4">
                        E-Mail:{' '}
                        <a
                            href="mailto:walk-with-us@web.de"
                            className="text-blue-600 hover:underline"
                        >
                            walk-with-us@web.de
                        </a>
                    </p>
                    <p className="mb-4">
                        Verantwortliche Stelle ist die natürliche oder
                        juristische Person, die allein oder gemeinsam mit
                        anderen über die Zwecke und Mittel der Verarbeitung von
                        personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o.
                        Ä.) entscheidet.
                    </p>

                    <h3 className="mb-3 text-xl font-semibold">
                        Speicherdauer
                    </h3>
                    <p className="mb-4">
                        Soweit innerhalb dieser Datenschutzerklärung keine
                        speziellere Speicherdauer genannt wurde, verbleiben Ihre
                        personenbezogenen Daten bei uns, bis der Zweck für die
                        Datenverarbeitung entfällt. Wenn Sie ein berechtigtes
                        Löschersuchen geltend machen oder eine Einwilligung zur
                        Datenverarbeitung widerrufen, werden Ihre Daten
                        gelöscht, sofern wir keine anderen rechtlich zulässigen
                        Gründe für die Speicherung Ihrer personenbezogenen Daten
                        haben (z.B. steuer- oder handelsrechtliche
                        Aufbewahrungsfristen); im letztgenannten Fall erfolgt
                        die Löschung nach Fortfall dieser Gründe.
                    </p>

                    <h3 className="mb-3 text-xl font-semibold">
                        Widerruf Ihrer Einwilligung zur Datenverarbeitung
                    </h3>
                    <p className="mb-4">
                        Viele Datenverarbeitungsvorgänge sind nur mit Ihrer
                        ausdrücklichen Einwilligung möglich. Sie können eine
                        bereits erteilte Einwilligung jederzeit widerrufen. Die
                        Rechtmäßigkeit der bis zum Widerruf erfolgten
                        Datenverarbeitung bleibt vom Widerruf unberührt.
                    </p>

                    <h3 className="mb-3 text-xl font-semibold">
                        Auskunft, Löschung und Berichtigung
                    </h3>
                    <p className="mb-4">
                        Sie haben im Rahmen der geltenden gesetzlichen
                        Bestimmungen jederzeit das Recht auf unentgeltliche
                        Auskunft über Ihre gespeicherten personenbezogenen
                        Daten, deren Herkunft und Empfänger und den Zweck der
                        Datenverarbeitung und ggf. ein Recht auf Berichtigung
                        oder Löschung dieser Daten. Hierzu sowie zu weiteren
                        Fragen zum Thema personenbezogene Daten können Sie sich
                        jederzeit an uns wenden.
                    </p>

                    <h3 className="mb-3 text-xl font-semibold">
                        Recht auf Einschränkung der Verarbeitung
                    </h3>
                    <p className="mb-4">
                        Sie haben das Recht, die Einschränkung der Verarbeitung
                        Ihrer personenbezogenen Daten zu verlangen. Hierzu
                        können Sie sich jederzeit an uns wenden. Das Recht auf
                        Einschränkung der Verarbeitung besteht in folgenden
                        Fällen:
                    </p>
                    <ul className="mb-4 ml-6 list-disc space-y-2">
                        <li>
                            Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
                            personenbezogenen Daten bestreiten, benötigen wir in
                            der Regel Zeit, um dies zu überprüfen. Für die Dauer
                            der Prüfung haben Sie das Recht, die Einschränkung
                            der Verarbeitung Ihrer personenbezogenen Daten zu
                            verlangen.
                        </li>
                        <li>
                            Wenn die Verarbeitung Ihrer personenbezogenen Daten
                            unrechtmäßig geschah/geschieht, können Sie statt der
                            Löschung die Einschränkung der Datenverarbeitung
                            verlangen.
                        </li>
                        <li>
                            Wenn wir Ihre personenbezogenen Daten nicht mehr
                            benötigen, Sie sie jedoch zur Ausübung, Verteidigung
                            oder Geltendmachung von Rechtsansprüchen benötigen,
                            haben Sie das Recht, statt der Löschung die
                            Einschränkung der Verarbeitung Ihrer
                            personenbezogenen Daten zu verlangen.
                        </li>
                        <li>
                            Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO
                            eingelegt haben, muss eine Abwägung zwischen Ihren
                            und unseren Interessen vorgenommen werden. Solange
                            noch nicht feststeht, wessen Interessen überwiegen,
                            haben Sie das Recht, die Einschränkung der
                            Verarbeitung Ihrer personenbezogenen Daten zu
                            verlangen.
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="mb-4 text-2xl font-semibold">
                        4. Datenerfassung auf dieser Website
                    </h2>

                    <h3 className="mb-3 text-xl font-semibold">
                        Kontaktformular
                    </h3>
                    <p className="mb-4">
                        Wenn Sie uns per Kontaktformular Anfragen zukommen
                        lassen, werden Ihre Angaben aus dem Anfrageformular
                        inklusive der von Ihnen dort angegebenen Kontaktdaten
                        zwecks Bearbeitung der Anfrage und für den Fall von
                        Anschlussfragen bei uns gespeichert. Diese Daten geben
                        wir nicht ohne Ihre Einwilligung weiter.
                    </p>
                    <p className="mb-4">
                        Die Verarbeitung dieser Daten erfolgt auf Grundlage von
                        Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der
                        Erfüllung eines Vertrags zusammenhängt oder zur
                        Durchführung vorvertraglicher Maßnahmen erforderlich
                        ist. In allen übrigen Fällen beruht die Verarbeitung auf
                        unserem berechtigten Interesse an der effektiven
                        Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs.
                        1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs.
                        1 lit. a DSGVO) sofern diese abgefragt wurde.
                    </p>
                    <p className="mb-4">
                        Die von Ihnen im Kontaktformular eingegebenen Daten
                        verbleiben bei uns, bis Sie uns zur Löschung auffordern,
                        Ihre Einwilligung zur Speicherung widerrufen oder der
                        Zweck für die Datenspeicherung entfällt (z.B. nach
                        abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende
                        gesetzliche Bestimmungen – insbesondere
                        Aufbewahrungsfristen – bleiben unberührt.
                    </p>

                    <h3 className="mb-3 text-xl font-semibold">
                        Anfrage per E-Mail, Telefon oder Telefax
                    </h3>
                    <p className="mb-4">
                        Wenn Sie uns per E-Mail, Telefon oder Telefax
                        kontaktieren, wird Ihre Anfrage inklusive aller daraus
                        hervorgehenden personenbezogenen Daten (Name, Anfrage)
                        zum Zwecke der Bearbeitung Ihres Anliegens bei uns
                        gespeichert und verarbeitet. Diese Daten geben wir nicht
                        ohne Ihre Einwilligung weiter.
                    </p>
                    <p className="mb-4">
                        Die Verarbeitung dieser Daten erfolgt auf Grundlage von
                        Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der
                        Erfüllung eines Vertrags zusammenhängt oder zur
                        Durchführung vorvertraglicher Maßnahmen erforderlich
                        ist. In allen übrigen Fällen beruht die Verarbeitung auf
                        unserem berechtigten Interesse an der effektiven
                        Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs.
                        1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs.
                        1 lit. a DSGVO) sofern diese abgefragt wurde.
                    </p>
                    <p className="mb-4">
                        Die von Ihnen an uns per Kontaktanfragen übersandten
                        Daten verbleiben bei uns, bis Sie uns zur Löschung
                        auffordern, Ihre Einwilligung zur Speicherung widerrufen
                        oder der Zweck für die Datenspeicherung entfällt (z.B.
                        nach abgeschlossener Bearbeitung Ihres Anliegens).
                        Zwingende gesetzliche Bestimmungen – insbesondere
                        gesetzliche Aufbewahrungsfristen – bleiben unberührt.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="mb-4 text-2xl font-semibold">
                        5. Soziale Medien
                    </h2>

                    <h3 className="mb-3 text-xl font-semibold">
                        Social-Media-Links
                    </h3>
                    <p className="mb-4">
                        Wir verlinken auf unserer Website zu unseren Präsenzen
                        in sozialen Netzwerken (Facebook, Instagram). Durch das
                        Anklicken dieser Links werden Sie zu den jeweiligen
                        Plattformen weitergeleitet. Für die Verarbeitung Ihrer
                        Daten auf diesen Plattformen sind die jeweiligen
                        Betreiber verantwortlich. Bitte informieren Sie sich
                        dort über die entsprechenden Datenschutzbestimmungen.
                    </p>
                </section>

                <div className="mt-12 border-t pt-8">
                    <p className="mb-4 text-sm text-gray-600">
                        Stand:{' '}
                        {new Date().toLocaleDateString('de-DE', {
                            year: 'numeric',
                            month: 'long',
                        })}
                    </p>
                    <Link href="/" className="text-blue-600 hover:underline">
                        Zurück zur Startseite
                    </Link>
                </div>
            </div>
        </div>
    )
}
