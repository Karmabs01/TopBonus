"use client";
import React, { useEffect, useState } from "react";
import Brands_carousel from "../Brands_carousel";
import Counter from "./calc";
import "./styled.component.css";

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

  const categoryBrands = { key1: "Networks", key2: "1" };
  const target = "target-fw-jackpot";
  const creative = "NEW_JACKPOT";

  return (
    <>
      <div className="main__container">
        <div className="">
          <div className="flex flex-col items-center justify-center gap-x-6 banner-jack px-6 py-2.5 sm:px-3.5">
            <h3 className="text-xl sm:text-xl leading-6 text-white uppercase">
              HIT THE <span>JACKPOT!</span>
            </h3>
            {/* <p>$360 000</p> */}
            <p><Counter /></p>
          </div>
        </div>
      </div>
      <Brands_carousel creative={creative} target={target} categoryBrands={categoryBrands} />
    </>
  );
}
