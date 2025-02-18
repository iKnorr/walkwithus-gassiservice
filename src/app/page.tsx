import Image from 'next/image'

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-between h-screen ">
            <main className="flex flex-col h-full w-full items-center">
                <div className="h-64 sm:h-96 w-full relative">
                    <Image
                        src="/images/dogs-2.jpg"
                        alt="Doggy logo"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="flex flex-col justify-center items-center py-2">
                    <Image
                        aria-hidden
                        src="/hexagon.svg"
                        alt="File icon"
                        width={30}
                        height={30}
                    />
                    <div className="flex justify-center items-center border-white border-b-2 border-dotted w-full">
                        <h1 className="text-4xl font-bold text-nowrap ">
                            Walk with us !
                        </h1>
                    </div>
                    <div className="flex justify-center items-center border-white border-b-2 border-dotted w-full">
                        <h1 className="text-2xl text-nowrap">Gassiservice</h1>
                    </div>
                    <div className="flex justify-center items-center px-4">
                        <h2 className="text-center text-1xl">
                            Liebevoller GassiService mit Hol- und BringService !
                        </h2>
                        <h2 className="text-center text-1xl">
                            Test test test und nochmal test
                        </h2>
                    </div>
                </div>
            </main>
            {/* <footer className="flex">
                <a
                    className="flex items-center"
                    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/file.svg"
                        alt="File icon"
                        width={16}
                        height={16}
                    />
                    Learn
                </a>
                <a
                    className=""
                    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/window.svg"
                        alt="Window icon"
                        width={16}
                        height={16}
                    />
                    @iKnorr
                </a>
                <a
                    className=""
                    href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/globe.svg"
                        alt="Globe icon"
                        width={16}
                        height={16}
                    />
                    Go to nextjs.org →
                </a>
            </footer> */}
        </div>
    )
}
