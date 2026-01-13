'use client'

import { ContactForm } from '../../custom/contactForm/ContactForm'

export const ContactSection = () => {
    return (
        <section
            id="contact"
            className="w-full bg-white px-6 py-16 text-center md:py-24"
        >
            <h2 className="mb-4 text-4xl font-medium italic md:mb-6 md:text-7xl">
                Kontakt
            </h2>
            <p className="mb-6 text-xl">
                Wir freuen uns auf deine Nachricht!
            </p>
            <ContactForm />
        </section>
    )
}
