"use client";
import "./styled.component.css";
import new_img from "../../public/New.png";
import Image from "next/image";


export default function BannerString() {

    return (
        <>
            <div>
                <div className="main__container">
                    <div className="">
                        <div className="flex items-center gap-x-6 bg-indigo-600 px-6 py-2.5 sm:px-3.5 rounded-md mt-10">
                            <Image
                                src={new_img}
                                alt={new_img}
                                width={50}
                                height={50}
                                loading="lazy"
                                className="target-top-new-releases"
                            />
                            <h3 className="text-sm leading-6 text-white">

                                Uncover the latest casinos and be among the first to play!
                            </h3>
                            <div className="flex flex-1 justify-end">
                                <button type="button" className="bordered-button rounded-md bg-teal-600 px-4 py-2 text-md text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">

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
