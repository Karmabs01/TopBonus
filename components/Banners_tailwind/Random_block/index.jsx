"use client";
import { useState, useEffect, useRef } from "react";
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
  const elementRef = useRef(null);

  useEffect(() => {
    let url = "";
    switch (source) {
      case "partner1039":
        url = "https://link.reg2dep.business/topbonus_rnd39";
        break;
      case "partner1043":
        url = "https://link.reg2dep.business/topbonus_rnd43";
        break;
      case "partner1044":
        url = "https://link.reg2dep.business/topbonus_rnd44";
        break;
      case "CLD_VIP":
      case "partner1045_b1":
        url = "https://link.reg2dep.business/topbonus_rndcld";
        break;
      default:
        url = "https://link.reg2dep.business/topbonus_rnd";
    }
    setRedirectUrl(url);

    const savedUrl = localStorage.getItem("savedUrl");
    if (savedUrl) {
      setNewUrl(savedUrl);
    }
  }, [source]);

  useEffect(() => {
    const hash = window.location.hash;

    if (hash && elementRef.current) {
      const scrollToElement = () => {
        const id = hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const scrollAttempt = () => {
            const currentScrollY = window.scrollY;
            window.scrollTo({
              top: elementPosition,
              behavior: "smooth",
            });

            // Проверяем, достигнуто ли нужное положение
            requestAnimationFrame(() => {
              if (Math.abs(currentScrollY - elementPosition) > 1) {
                // Если не достигнуто, повторяем попытку
                scrollAttempt();
              }
            });
          };

          scrollAttempt();
        }
      };

      // Задержка для рендеринга других компонентов
      setTimeout(() => {
        scrollToElement();
      }, 2000); // Увеличьте значение задержки, если требуется больше времени для рендеринга
    }
  }, []);

  return (
    <>
      <div ref={elementRef} id="try-your-luck" className="">
        <div className="main__container">
          <div className="relative py-16 ptpt">
            <div className="mx-auto max-w-7xl lg:bg-transparent">
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
                      {t("TRY YOUR")} <span>{t("luck!")}</span>
                    </h2>
                    <p className="text-lg text-white">
                      {t("Feeling lucky? Click to unlock a cool, exclusive bonus—only available right now. Don't miss your chance!")}
                    </p>

                    <Link
                      href={`${redirectUrl}/${newUrl}&creative_id=Try_Your_Luck`}
                      target="_blank"
                      className="flex mlml"
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
