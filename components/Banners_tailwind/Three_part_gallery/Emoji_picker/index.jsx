"use client";
import Link from "next/link";
import Image from "next/image";
import img from "@/public/newimages/facmob.png";
import { useTranslation } from "react-i18next";

export default function Banner_small() {
  const { t } = useTranslation();

  return (
    <>
      <div className="emojis">
        <div className="main__container">
          <div className="flex justify-between items-center face-mob">
            <h3 className="text-lg leading-6 ">
              What is your choise <span>for today?</span>
            </h3>
            <div className="mob-none">
              <Image src={img} alt={img} width={400} height={150} />
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
