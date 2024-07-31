"use client";
import { useState, useEffect } from "react";
import useSWR from "swr";
import Loader from "../../../Loader";
import { shuffle } from "lodash";
import Image from "next/image";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import Card from "../../../slider/Card";
import { useLanguage } from "../../../switcher/LanguageContext";
import { getBrands } from "../../../getBrands/getBrands2";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";

// import "./styled.component.css"

export default function Popular_offers() {
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
            <div className="pt-5 mb-10">
                <div className="main__container">
                    {loading ? (
                        <Loader />
                    ) : (
                        cards2 && (
                            <div className="">
                                <div className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
                                    <h2 className="text-xl font-bold text-gray-900 text-center">Popular offers</h2>

                                    <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
                                        {brands.slice(0,6).map((rowData, index) => (
                                            <div key={index}>
                                                <div className="relative">
                                                    <div className="relative h-32 overflow-hidden bg-gray-300 rounded-lg flex align-center justify-center">
                                                        <Image
                                                            src={`/brands/${rowData.CasinoBrand}.png`}
                                                            alt={rowData.CasinoBrand}
                                                            width={100}
                                                            height={100}
                                                            loading="lazy"
                                                            className=" w-full object-contain object-center"
                                                        />
                                                    </div>
                                                    <div className="relative mt-4 text-center">
                                                        <h3 className="text-lg font-semibold text-gray-900">{rowData.CasinoBrand}</h3>
                                                        <p className="mt-1 text-sm text-gray-500 h-10">{rowData.OurOfferContent}</p>
                                                    </div>
                                                    <div className="absolute inset-x-0 top-0 flex h-32 items-end justify-end overflow-hidden rounded-lg p-4">
                                                        {/* <div
                                                            aria-hidden="true"
                                                            className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                                                        /> */}
                                                    </div>
                                                </div>
                                                <div className="mt-6">
                                                    <a
                                                        href={`${rowData.GoBig}/${newUrl}&creative_id=XXL_Top_New_Releases`}
                                                        className="relative flex items-center justify-center rounded-md border border-transparent bg-indigo-500 px-8 py-2 text-lg font-medium text-white hover:bg-indigo-600"
                                                    >
                                                        Play Now<span className="sr-only">, {rowData.CasinoBrand}</span>
                                                    </a>
                                                </div>
                                            </div>
                                        ))}
                                       
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>

        </>
    );
}
