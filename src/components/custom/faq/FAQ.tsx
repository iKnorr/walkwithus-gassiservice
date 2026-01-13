'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
    question: string
    answer: string
}

const faqData: FAQItem[] = [
    {
        question: 'Wo bietet ihr eure Dienstleistungen an?',
        answer: 'Wir sind in München und den Isarauen tätig, wo wir regelmäßig durch die Wälder und entlang der Isar spazieren.',
    },
    {
        question: 'Wie lange dauert ein typischer Spaziergang?',
        answer: 'Ein Standard-Spaziergang dauert etwa 2 bis 2,5 Stunden.',
    },
    {
        question: 'Was passiert bei schlechtem Wetter?',
        answer: 'Wir gehen bei jedem Wetter spazieren! Unsere Hunde sind wetterfest ausgerüstet, und wir passen die Route entsprechend an. Nur bei extremen Wetterbedingungen (z.B. Unwetter) sprechen wir eine alternative Lösung ab.',
    },
    {
        question: 'Können mehrere Hunde zusammen laufen?',
        answer: 'Ja, soziale Spaziergänge mit mehreren Hunden sind möglich und sogar erwünscht! Wir achten darauf, dass alle Hunde gut miteinander harmonieren.',
    },
    {
        question: 'Mit welchen Hunderassen habt ihr Erfahrung?',
        answer: 'Wir haben Erfahrung mit allen Rassen und Größen. Wichtig ist uns vor allem, dass dein Hund sozialverträglich ist und Spaß an gemeinsamen Ausflügen hat.',
    },
    {
        question: 'Wie kann ich einen Termin vereinbaren?',
        answer: 'Kontaktiere uns einfach per E-Mail oder Telefon. Wir besprechen dann die Bedürfnisse deines Hundes und finden gemeinsam passende Termine.',
    },
    {
        question:
            'Was ist der Unterschied zwischen der Platzgarantie und der 10er Karte?',
        answer: 'Mit der Platzgarantie (41€ pro Runde) sicherst du dir einen festen Platz in unserem Programm. Die 10er Karte (490€) ist ideal für zeitlich flexible Hundebesitzer, die nicht regelmäßige Termine benötigen.',
    },
]

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section id="faq" className="w-full bg-gray-100 px-6 py-12 md:py-20">
            <div className="mx-auto max-w-3xl">
                <h2 className="mb-8 text-center text-4xl font-medium italic md:text-7xl">
                    Häufig gestellte Fragen
                </h2>
                <div className="space-y-4">
                    {faqData.map((faq, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-lg border border-gray-200 bg-gray-50"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-gray-100"
                                aria-expanded={openIndex === index}
                                aria-controls={`faq-answer-${index}`}
                            >
                                <span className="pr-4 text-lg font-semibold">
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`flex-shrink-0 transition-transform duration-200 ${
                                        openIndex === index ? 'rotate-180' : ''
                                    }`}
                                    size={24}
                                />
                            </button>
                            <div
                                id={`faq-answer-${index}`}
                                className={`overflow-hidden transition-all duration-200 ${
                                    openIndex === index
                                        ? 'max-h-96 opacity-100'
                                        : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className="border-t border-gray-200 p-4 text-gray-700">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
