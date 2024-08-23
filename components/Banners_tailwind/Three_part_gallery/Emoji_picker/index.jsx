"use client";
import Link from "next/link";
import Image from "next/image";
import img from "@/public/newimages/facmob.png";

export default function Banner_small() {
  return (
    <>
      <div className="emojis">
        <div className="main__container">
          <div className="flex justify-between items-center face-mob">
            <h3 className="text-lg leading-6 ">
              What is your choise <span>for today?</span>
            </h3>
            <div className="mob-none">
              <Image src={img} alt={img} width={583} height={329} />
            </div>
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
