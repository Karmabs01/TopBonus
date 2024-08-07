"use client";
import new_img from "../../../public/New.png";
import Image from "next/image";


export default function Banner_small() {

    return (
        <>
            <div>
                <div className="main__container">
                    <div className="">
                        <div className="flex items-center gap-x-6 bg-indigo-600 px-2 py-2.5 sm:px-3.5 rounded-md mt-10 flex-col sm:flex-row">
                            <div className="flex flex-row items-center">
                            <Image
                                src={new_img}
                                alt={new_img}
                                width={50}
                                height={50}
                                loading="lazy"
                            />
                            <h3 className="text-sm text-white ml-2">
                                Uncover the latest casinos and be among the first to play!
                            </h3>
                            </div>
                            <div className="flex flex-1 justify-end w-full mt-2 sm:mt-0">
                                <button type="button" className="bordered-button rounded-md w-full sm:w-32 bg-teal-600 px-4 py-2 text-md text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">

                                    Show more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
