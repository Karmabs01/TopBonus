"use client";
import React, { useEffect, useState } from 'react';


export default function Jackpot_banner() {
    const [currentValue, setCurrentValue] = useState(0);
    const targetValue = 2924899349; 
    const duration = 3000;

    useEffect(() => {
        const startTime = performance.now();

        const updateCounter = (time) => {
            const elapsedTime = time - startTime;
            if (elapsedTime < duration) {
                setCurrentValue(Math.floor(targetValue * (elapsedTime / duration)));
                requestAnimationFrame(updateCounter);
            } else {
                setCurrentValue(targetValue);
            }
        };

        requestAnimationFrame(updateCounter);
    }, [targetValue, duration]);

    return (
        <>
            <div className="main__container">
                <div className="">
                    <div className="flex flex-col items-center justify-center gap-x-6 bg-indigo-600 px-6 py-2.5 sm:px-3.5 rounded-md">

                        <h1 className="text-xl sm:text-xl leading-6 text-white uppercase">
                            Jackpot
                        </h1>
                        <h1 className="counter text-xl leading-6 text-white uppercase mt-1">
                            <div className="flex items-center justify-center">
                                <div className="text-3xl font-bold text-white">
                                    ${currentValue.toLocaleString()}
                                </div>
                            </div>
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
}
