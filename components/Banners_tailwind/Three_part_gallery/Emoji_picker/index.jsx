"use client";
import Link from "next/link";

export default function Banner_small() {
  return (
    <>
      <div className="emojis">
        <div className="main__container">
          <div className="flex justify-between items-center">
            <h3 className="text-lg leading-6 ">
              What is your choise <span>for today?</span>
            </h3>
            <div className="flex items-center justify-start btns-ch">
              <div className="h-20 w-20 btn-choose">
                <Link href="#" target="_blank">
                  Choose
                </Link>
              </div>
              <div className="h-20 w-20 btn-choose">
                <Link href="#" target="_blank">
                  Choose
                </Link>
              </div>
              <div className="h-20 w-20 btn-choose">
                <Link href="#" target="_blank">
                  Choose
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
