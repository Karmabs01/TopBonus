"use client";

import { useState, useEffect, useRef } from "react";
import useSWR from "swr";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";
import { getBrands } from "@/components/getBrands/getBrands2";
import { useLanguage } from "@/components/switcher/LanguageContext";
import { useTranslation } from "react-i18next";

const NewArrivals = () => {
  const { t } = useTranslation();
  const [newUrl, setNewUrl] = useState("");
  const elementRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const { language } = useLanguage();
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    const savedUrl = localStorage.getItem("savedUrl");

    // Установка новой ссылки в состояние
    if (savedUrl) {
      setNewUrl(savedUrl);
    }
  }, []);

  const categoryBrands = { key1: "Segment2", key2: "Sandbox" };

  const { data, error } = useSWR(
    ["brands", language],
    () => getBrands(language),
    { initialData: brands }
  );

  useEffect(() => {
    if (data) {
      const filteredData = data.filter(
        (rowData) => rowData[categoryBrands.key1] === categoryBrands.key2
      );
      console.log("FILTER", filteredData);
      setBrands(filteredData);
    }
  }, [data, categoryBrands.key1, categoryBrands.key2]);

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
      }, 1500); // Увеличьте значение задержки, если требуется больше времени для рендеринга
    }
  }, []);

  return (
    <div ref={elementRef} id="real-block" className="bl-sand">
      <div className="main__container block-sandbox">
        <h2>{t("Top New Releases")}</h2>
        {brands.length > 3 ? (
          <Slider {...settings}>
            {brands.map((item) => (
              <div
                className="card-second-banner mb-2 flex flex-col items-center pb-3"
                key={item.id_brand}
              >
                <div className="brandImage p-3">
                  <Link
                    className="flex justify-center flex-col items-center target-top-new-releases"
                    href={`${item.GoBig}/${newUrl}&creative_id=XXL_Top_New_Releases`}
                    target="_blank"
                  >
                    <Image
                      src={`/brands/${item.CasinoBrand}.png`}
                      alt={item.CasinoBrand}
                      width={200}
                      height={80}
                      loading="lazy"
                      className="target-top-new-releases"
                    />
                    <div className="p-3 text-center flex items-center review-bonus">
                      {item.OurOfferContent}
                    </div>
                  </Link>
                </div>
                <Link
                  className="btn btn-primary btn-new target-top-new-releases"
                  href={`${item.GoBig}/${newUrl}&creative_id=XXL_Top_New_Releases`}
                  target="_blank"
                >
                  {t("Play Now")}
                </Link>
              </div>
            ))}
          </Slider>
        ) : (
          <>
            {brands.map((item) => (
              <div
                className="card-second-banner mb-2 flex flex-col items-center pb-3"
                key={item.id_brand}
              >
                <div className="brandImage p-3">
                  <Link
                    className="flex justify-center flex-col items-center target-top-new-releases"
                    href={`${item.GoBig}/${newUrl}&creative_id=XXL_Top_New_Releases`}
                    target="_blank"
                  >
                    <Image
                      src={`/brands/${item.CasinoBrand}.png`}
                      alt={item.CasinoBrand}
                      width={200}
                      height={80}
                      loading="lazy"
                      className="target-top-new-releases"
                    />
                    <div className="p-3 text-center flex items-center review-bonus">
                      {item.OurOfferContent}
                    </div>
                  </Link>
                </div>
                <Link
                  className="btn btn-primary btn-new target-top-new-releases"
                  href={`${item.GoBig}/${newUrl}&creative_id=XXL_Top_New_Releases`}
                  target="_blank"
                >
                  {t("Play Now")}
                </Link>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default NewArrivals;
