"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import banner from "@/public/newimages/bannerRandom.png";
import Image from "next/image";
import "./styled.component.css";

export default function Random_block() {
  const [newUrl, setNewUrl] = useState("");
  const [source, setSource] = useState("");

  const [redirectUrl, setRedirectUrl] = useState("");

  const { t } = useTranslation();

  useEffect(() => {
    let url = "";
    switch (source) {
      case "partner1039":
        url = "https://info.topbon.us/partner_aurnd";
        break;
      case "partner1043":
        url = "https://info.topbon.us/rnd1043";
        break;
      case "partner1044":
        url = "https://info.topbon.us/rnd1044";
        break;
      case "CLD_VIP":
        url = "https://link.bo-nus.com/rnd_cld";
        break;
      default:
        url = "https://info.topbon.us/aurnd";
    }
    setRedirectUrl(url);
  }, [source]);

  return (
    <>
      <div className="pt-5 mb-10">
        <div className="main__container">
     
            <div className="relative py-16">
              <div className="mx-auto max-w-7xl lg:bg-transparent ">
                <div className="lg:grid lg:grid-cols-12">
                  <div className="relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16 abs-banner">
                    <Image
                      src={banner}
                      alt="banner"
                      width={405}
                      height={405}
                      loading="lazy"
                    />
                  </div>

                  <div className="relative bg-random lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl">
                    <div className="relative mx-auto max-w-md space-y-6 px-6 py-12 sm:max-w-3xl sm:py-16 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0">
                      <h2
                        className="text-3xl font-bold tracking-tight text-white random-title"
                        id="join-heading"
                      >
                        BONUS BET <span> casino</span>
                      </h2>
                      <p className="text-lg text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ea eveniet numquam nam incidunt, asperiores quo.
                        Perspiciatis exercitationem alias voluptatum modi.
                      </p>

                      <Link
                        href={`${redirectUrl}/${newUrl}&creative_id=XXL_Try_Your_Luck`}
                        target="_blank"
                        className="flex"
                      >
                        <div className="btn btn-new">
                          <p>{t("Try Your Luck!")}</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      
        </div>
      </div>
    </>
  );
}
