"use client";
import banner from "@/public/newimages/minibanner.png";
import Image from "next/image";
import "./styled.component.css";

export default function Banner_small() {
  return (
    <>
      <div>
        <div className="main__container">
          <div className="">
            <div className="flex items-center px-2 py-2.5 sm:px-3.5 rounded-md mt-10 flex-col sm:flex-row new-brands">
              <div className="flex flex-row items-center">
                <Image
                  src={banner}
                  alt={banner}
                  width={310}
                  height={310}
                  loading="lazy"
                  className="absolute minibanner"
                />
                <p className="text-sm text-white ml-2">
                  Uncover the latest casinos and be among the{" "}
                  <span>first to play!</span>
                </p>
              </div>
              <div className="flex ml-auto mt-2 sm:mt-0 show-more">
                <button className="btn btn-secondary">Show more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
