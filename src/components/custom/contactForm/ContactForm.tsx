'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Send } from 'lucide-react'
import { CONTACT } from '@/data/constants'

// Sanitize input to prevent XSS
const sanitizeInput = (input: string): string => {
    return input
        .replace(/[<>]/g, '') // Remove angle brackets
        .trim()
}

// Validation functions
const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

const isValidPhone = (phone: string): boolean => {
    if (!phone) return true // Phone is optional
    // German phone numbers: +49, 0049, or starting with 0
    // Allows formats like: +49 172 1234567, 0172 1234567, +49(0)172-1234567
    const phoneRegex = /^(\+49|0049|0)[\s\-()\/]*[\d\s\-()\/]{8,15}$/
    return phoneRegex.test(phone.replace(/\s/g, ' ').trim())
}

interface FormErrors {
    name?: string
    email?: string
    phone?: string
    message?: string
}

export const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    })
    const [errors, setErrors] = useState<FormErrors>({})
    const [status, setStatus] = useState<
        'idle' | 'sending' | 'success' | 'error'
    >('idle')
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    // Cleanup timeout on unmount to prevent memory leak
    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [])

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {}

        if (!formData.name.trim() || formData.name.trim().length < 2) {
            newErrors.name = 'Bitte geben Sie einen gültigen Namen ein (min. 2 Zeichen)'
        }

        if (!formData.email.trim() || !isValidEmail(formData.email)) {
            newErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein'
        }

        if (!isValidPhone(formData.phone)) {
            newErrors.phone = 'Bitte geben Sie eine gültige Telefonnummer ein'
        }

        if (!formData.message.trim() || formData.message.trim().length < 10) {
            newErrors.message = 'Bitte geben Sie eine Nachricht ein (min. 10 Zeichen)'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
        // Clear error when user starts typing
        if (errors[name as keyof FormErrors]) {
            setErrors({ ...errors, [name]: undefined })
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!validateForm()) {
            return
        }

        setStatus('sending')

        // Sanitize all inputs before sending
        const sanitizedData = {
            name: sanitizeInput(formData.name),
            email: sanitizeInput(formData.email),
            phone: sanitizeInput(formData.phone),
            message: sanitizeInput(formData.message),
        }

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
                    name: sanitizedData.name,
                    email: sanitizedData.email,
                    phone: sanitizedData.phone,
                    message: sanitizedData.message,
                    subject: `Neue Kontaktanfrage von ${sanitizedData.name}`,
                }),
            })

            const result = await response.json()

            if (result.success) {
                setStatus('success')
                setFormData({ name: '', email: '', phone: '', message: '' })

                // Reset success message after 5 seconds
                timeoutRef.current = setTimeout(() => {
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
            <div className="mx-auto max-w-2xl rounded-lg bg-white p-6 shadow-md">
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
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 ${
                                errors.name
                                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                                    : 'border-gray-300 focus:border-green focus:ring-green'
                            }`}
                            placeholder="Ihr Name"
                            aria-invalid={!!errors.name}
                            aria-describedby={errors.name ? 'name-error' : undefined}
                        />
                        {errors.name && (
                            <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
                                {errors.name}
                            </p>
                        )}
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
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 ${
                                errors.email
                                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                                    : 'border-gray-300 focus:border-green focus:ring-green'
                            }`}
                            placeholder="ihre.email@beispiel.de"
                            aria-invalid={!!errors.email}
                            aria-describedby={errors.email ? 'email-error' : undefined}
                        />
                        {errors.email && (
                            <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                                {errors.email}
                            </p>
                        )}
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
                            className={`w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 ${
                                errors.phone
                                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                                    : 'border-gray-300 focus:border-green focus:ring-green'
                            }`}
                            placeholder="+49 ..."
                            aria-invalid={!!errors.phone}
                            aria-describedby={errors.phone ? 'phone-error' : undefined}
                        />
                        {errors.phone && (
                            <p id="phone-error" className="mt-1 text-sm text-red-600" role="alert">
                                {errors.phone}
                            </p>
                        )}
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
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            className={`w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 ${
                                errors.message
                                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                                    : 'border-gray-300 focus:border-green focus:ring-green'
                            }`}
                            placeholder="Ihre Nachricht an uns..."
                            aria-invalid={!!errors.message}
                            aria-describedby={errors.message ? 'message-error' : undefined}
                        />
                        {errors.message && (
                            <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">
                                {errors.message}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="flex w-full items-center justify-center gap-2 rounded-md bg-green px-6 py-3 text-white transition-colors hover:bg-green/90 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                        {status === 'sending' ? (
                            <>
                                <svg
                                    className="h-5 w-5 animate-spin"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    />
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    />
                                </svg>
                                <span>Wird gesendet...</span>
                            </>
                        ) : (
                            <>
                                <Send size={20} />
                                Nachricht senden
                            </>
                        )}
                    </button>

                    {status === 'success' && (
                        <p className="text-center text-sm text-green">
                            Vielen Dank! Ihre Nachricht wurde gesendet.
                        </p>
                    )}
                    {status === 'error' && (
                        <p className="text-center text-sm text-red-600">
                            Es gab ein Problem. Bitte versuchen Sie es erneut
                            oder kontaktieren Sie uns direkt.
                        </p>
                    )}
                </form>

                <p className="mt-4 text-center text-xs text-gray-500">
                    * Pflichtfelder
                </p>
            </div>
        </div>
    )
}
