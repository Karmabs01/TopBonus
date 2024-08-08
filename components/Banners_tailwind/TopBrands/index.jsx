"use client";
import { useState, useEffect } from "react";
import useSWR from "swr";
import Loader from "../../Loader";
import { shuffle } from "lodash";
import Image from "next/image";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import Card from "../../slider/Card";
import { useLanguage } from "../../switcher/LanguageContext";
import { getBrands } from "../../getBrands/getBrands2";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";

import "./styled.component.css"

export default function TopBrands() {
    const [newUrl, setNewUrl] = useState("");
    const [source, setSource] = useState("");
    const [loading, setLoading] = useState(true);
    const [brands, setBrands] = useState([]);
    const [currentBrandIndex, setCurrentBrandIndex] = useState(0);
    const [fade, setFade] = useState(true); // State to manage fade effect
    const { language } = useLanguage();
    const { t } = useTranslation();

    const settings = {
        infinite: true,
        speed: 500,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    dots: false,
                }
            }
        ]
    };

    useEffect(() => {
        // Обновляем URL, удаляем параметры и устанавливаем source на основе localStorage
        const currentUrl = window.location.href;
        const indexOfQuestionMark = currentUrl.indexOf("?");
        const newUrl2 =
            indexOfQuestionMark !== -1
                ? currentUrl.substring(0, indexOfQuestionMark)
                : currentUrl;
        window.history.replaceState({}, document.title, newUrl2);

        // Работа с URL и localStorage для определения source
        const urlObj = new URL(currentUrl);
        const searchParams = new URLSearchParams(urlObj.search);
        searchParams.delete("brand");
        const currentKeyword = searchParams.get("keyword");

        const partners = ["partner1039", "partner1043", "partner1044", "CLD_VIP"];

        function setPartnerSource(keyword) {
            const partner = partners.find((p) => keyword.includes(p));
            if (partner) {
                localStorage.setItem("source", partner);
                setSource(partner);
                searchParams.set("source", partner);
            } else {
                setSource("0");
                // Получаем текущий источник и проверяем, не является ли он одним из допустимых партнеров
                const sourceFound = localStorage.getItem("source");
                if (!partners.includes(sourceFound)) {
                    localStorage.setItem("source", "0");
                    searchParams.set("source", "0");
                }
            }
        }

        if (currentKeyword) {
            setPartnerSource(currentKeyword);
        }

        const ad_campaign = localStorage.getItem("ad_campaign_id");

        const savedUrl = localStorage.getItem("savedUrl");
        if (savedUrl) {
            setNewUrl(savedUrl);
        }
    }, [language]);

    const categoryBrands = { key1: "Segment2", key2: "Premium" };
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
            setLoading(false);
        }
    }, [data, categoryBrands.key1, categoryBrands.key2]);

    const shuffledBrands = shuffle(brands);
    const cards2 = shuffledBrands.slice(0, 6).map((brand) => ({
        key: uuidv4(),
        content: (
            <Card
                imagen={`/brands/${brand.CasinoBrand}.png`}
                link={brand.GoBig}
                bonus={brand.OurOfferContent}
            />
        ),
    }));

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false); // Start fade-out
            setTimeout(() => {
                setCurrentBrandIndex((prevIndex) => (prevIndex + 1) % brands.length);
                setFade(true); // Start fade-in
            }, 500); // Duration of fade-out effect
        }, 5000000); // Change brand every 5 seconds

        return () => clearInterval(interval);
    }, [brands.length]);

    console.log("BRANDS", brands);

    return (
        <>
            <div className="topbr-tw pt-5 mb-10">
                <div className="main__container">
                    {loading ? (
                        <Loader />
                    ) : (
                        cards2 && (
                            <div className="flex flex-col md:flex-row lg:space-y-0 lg:items-stretch">
                                <div className="slider-left w-full md:w-2/3 mb-10 md:mb-2">
                                    <Slider {...settings}>
                                        {brands.length > 0 &&
                                            brands.map((rowData, index) => (
                                                <div
                                                    key={index}
                                                    className="background overflow-hidden bg-indigo-600 py-5 rounded-xl h-full flex flex-col justify-between"
                                                >
                                                    <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col">
                                                        <div className="mx-auto max-w-2xl lg:mx-0 flex flex-row">
                                                            <div className="basis-2/3">
                                                                <h1 className="text-2xl font-semibold tracking-tight text-white md:text-4xl">
                                                                    {rowData.CasinoBrand}
                                                                </h1>
                                                                <h5 className="mt-2 sm:mt-6 text-md leading-8 text-gray-300 font-normal sm:text-lg">
                                                                    {rowData.OurOfferContent}
                                                                </h5>
                                                                <div className="flex sm:mt-4">
                                                                    <Link
                                                                        className=""
                                                                        href={`${rowData.GoBig}/${newUrl}&creative_id=XXL_Top_New_Releases`}
                                                                        target="_blank"
                                                                    >
                                                                        <button
                                                                            type="button"
                                                                            className="bordered-button mt-2 sm:mt-10 rounded-md bg-teal-600 px-2 sm:px-10 py-1 sm:py-3 text-md sm:text-lg text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                                        >
                                                                            {t("Play Now")}
                                                                        </button>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <div className="basis-1/3 flex justify-center items-center">
                                                                <Image
                                                                    src={`/brands/${rowData.CasinoBrand}.png`}
                                                                    alt={rowData.CasinoBrand}
                                                                    width={300}
                                                                    height={100}
                                                                    loading="lazy"
                                                                    className="target-top-new-releases"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                    </Slider>
                                </div>
                                <div className="banner-right w-full h-full md:w-1/3 flex justify-center md:justify-end">
                                    {brands.length > 0 && (
                                        <div className="djinn overflow-hidden bg-blue-600 py-5 rounded-xl flex flex-col justify-between">
                                            <div className=" mx-auto max-w-7xl px-6 lg:px-8 flex justify-center items-end h-64">
                                                <div className="mx-auto max-w-2xl lg:mx-0 self-end w-full">
                                                    <div className="flex flex-col items-center">
                                                        <h2 className="text-3xl font-bold tracking-tight text-white text-center">
                                                            Your Bonus is Ready
                                                        </h2>
                                                        <p className="text-md font-light leading-8 text-gray-300 text-center">
                                                            Click below to claim your magical reward!
                                                        </p>
                                                    </div>
                                                    <div className="flex justify-center mt-2">
                                                        <button
                                                            type="button"
                                                            className=" rounded-md bg-teal-600 px-4 py-2 text-md text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                        >
                                                            Bonus Ready
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>

        </>
    );
}
