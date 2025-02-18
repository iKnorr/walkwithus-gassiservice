import { ArrowLeft, ArrowRight } from 'lucide-react'
import React from 'react'

export const InfoMain = () => {
    return (
        <div className="flex h-full w-full items-center justify-center bg-slate-300 px-2 py-2">
            <ArrowLeft color="gray" size={40} />
            <div className="flex h-full w-full flex-col items-center justify-stretch px-2 py-6">
                <h2 className="mb-4 text-center text-2xl font-bold">
                    About Us
                </h2>
                <p className="text-center">
                    {`Walk with us! ist mein liebevoller GassiService mit dem ich meine Leidenschaft zum Beruf gemacht habe.`}
                </p>
                <p className="mt-4 text-center">{`'us' das bin ich, Heike und meine Hunde`}</p>
            </div>
            <ArrowRight color="gray" size={40} />
        </div>
    )
}
