"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Banner_small() {
    const { t } = useTranslation();

    return (
        <>
            <div className="mt-10">
                <div className="main__container">
                    <div
                        className="background overflow-hidden bg-indigo-600 py-10 rounded-xl h-full "
                    >
                        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col">
                            <div className="mx-auto max-w-2xl lg:mx-0 flex flex-row">
                                <div >
                                    <h1 className="text-4xl font-semibold tracking-tight text-white mt-10 uppercase">
                                        Fortune wheel brands
                                    </h1>
                                    <h5 className="mt-6 text-lg leading-8 text-gray-300 font-normal">
                                        Pick a brand below, make first deposit and win real cash
                                    </h5>
                                    <div className="flex mt-4">
                                        <Link
                                            className=""
                                            href="#"
                                            target="_blank"
                                        >
                                            <button
                                                type="button"
                                                className="bordered-button mt-10 rounded-md bg-teal-600 px-10 py-3 text-lg text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            >
                                                Spin the Roulette
                                            </button>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <p className="text-center mt-2">To qualify for withdrawals, ensure your first deposit is at least €25 or the equivalent in other currencies and was made after requesting a withdrawal.</p>
                </div>
            </div>

        </>
    );
}
