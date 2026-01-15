'use client'

import { Instagram } from 'lucide-react'
import { INSTAGRAM_EMBED, SOCIAL_MEDIA } from '@/data/constants'

export const InstagramSection = () => {
    const hasEmbedCode = INSTAGRAM_EMBED.code && INSTAGRAM_EMBED.code.trim() !== ''

    return (
        <section id="instagram" className="w-full bg-gray-50 px-6 py-12 md:py-16">
            <div className="mx-auto max-w-6xl">
                <h2 className="mb-4 text-center text-3xl font-bold text-[#5A6C57]">
                    Folge uns auf Instagram
                </h2>
                <p className="mb-8 text-center text-gray-600">
                    Tägliche Einblicke in unsere Gassi-Abenteuer
                </p>

                {hasEmbedCode ? (
                    <div
                        className="instagram-embed-container"
                        dangerouslySetInnerHTML={{ __html: INSTAGRAM_EMBED.code }}
                    />
                ) : (
                    <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-white p-12">
                        <Instagram className="mb-4 h-16 w-16 text-[#5A6C57]" />
                        <p className="mb-4 text-center text-gray-500">
                            Instagram Feed wird bald hier angezeigt
                        </p>
                        <a
                            href={SOCIAL_MEDIA.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-[#5A6C57] px-6 py-3 text-white transition-colors hover:bg-[#4a5c47]"
                        >
                            <Instagram className="h-5 w-5" />
                            @walkwithus_gassiservice
                        </a>
                    </div>
                )}
            </div>
        </section>
    )
}
