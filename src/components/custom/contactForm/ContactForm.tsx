'use client'

import React, { useState } from 'react'
import { Mail, Phone, Send } from 'lucide-react'
import { CONTACT } from '@/data/constants'

export const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    })
    const [status, setStatus] = useState<
        'idle' | 'sending' | 'success' | 'error'
    >('idle')

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('sending')

        try {
            // Using Web3Forms API
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    access_key: CONTACT.web3formsAccessKey,
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                    subject: `Neue Kontaktanfrage von ${formData.name}`,
                }),
            })

            const result = await response.json()

            if (result.success) {
                setStatus('success')
                setFormData({ name: '', email: '', phone: '', message: '' })

                // Reset success message after 5 seconds
                setTimeout(() => {
                    setStatus('idle')
                }, 5000)
            } else {
                setStatus('error')
            }
        } catch (error) {
            console.error('Form submission error:', error)
            setStatus('error')
        }
    }

    return (
        <div className="w-full">
            <div className="mb-8 flex flex-col items-center gap-4 text-xl">
                <div className="flex items-center gap-2">
                    <Mail />
                    <a
                        href={`mailto:${CONTACT.email}`}
                        className="underline hover:text-blue-600"
                    >
                        {CONTACT.email}
                    </a>
                </div>
                <div className="flex items-center gap-2">
                    <Phone />
                    <a
                        href={`tel:${CONTACT.phone}`}
                        className="underline hover:text-blue-600"
                    >
                        {CONTACT.phoneFormatted}
                    </a>
                </div>
            </div>

            {/* <div className="mx-auto max-w-2xl rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-4 text-2xl font-semibold">Kontaktformular</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label
                            htmlFor="name"
                            className="mb-1 block text-sm font-medium text-gray-700"
                        >
                            Name *
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-green focus:outline-none focus:ring-2 focus:ring-green"
                            placeholder="Ihr Name"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="mb-1 block text-sm font-medium text-gray-700"
                        >
                            E-Mail *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-green focus:outline-none focus:ring-2 focus:ring-green"
                            placeholder="ihre.email@beispiel.de"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="phone"
                            className="mb-1 block text-sm font-medium text-gray-700"
                        >
                            Telefon
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-green focus:outline-none focus:ring-2 focus:ring-green"
                            placeholder="+49 ..."
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="message"
                            className="mb-1 block text-sm font-medium text-gray-700"
                        >
                            Nachricht *
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-green focus:outline-none focus:ring-2 focus:ring-green"
                            placeholder="Ihre Nachricht an uns..."
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="flex w-full items-center justify-center gap-2 rounded-md bg-green px-6 py-3 text-white transition-colors hover:bg-green/90 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        {status === 'sending' ? (
                            'Senden...'
                        ) : (
                            <>
                                <Send size={20} />
                                Nachricht senden
                            </>
                        )}
                    </button>

                    {status === 'success' && (
                        <p className="text-center text-sm text-green">
                            Vielen Dank! Ihre Nachricht wurde geöffnet.
                        </p>
                    )}
                    {status === 'error' && (
                        <p className="text-center text-sm text-red-600">
                            Es gab ein Problem. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.
                        </p>
                    )}
                </form>

                <p className="mt-4 text-center text-xs text-gray-500">
                    * Pflichtfelder
                </p>
            </div> */}
        </div>
    )
}
