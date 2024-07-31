"use client";


export default function Banner_small() {

    return (
        <>
            <div>
                <div className="main__container">
                    <div className="flex flex-col justify-center items-center bg-indigo-600 mt-10 rounded-md">
                        <h1 className="text-lg leading-6 text-white pt-5">

                            What is your choise for today?
                        </h1>
                        <div className="flex items-center justify-between gap-x-12 px-6 py-2.5 sm:px-3.5 rounded-md mt-5 pb-5">

                            <div className="h-20 w-20  bg-gray-100 rounded-full "></div>
                            <div className="h-20 w-20 bg-gray-100 rounded-full "></div>
                            <div className="h-20 w-20  bg-gray-100 rounded-full "></div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
