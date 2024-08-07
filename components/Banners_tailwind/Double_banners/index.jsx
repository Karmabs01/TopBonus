"use client";
import { useState, useEffect } from "react";
import useSWR from "swr";
import Loader from "../../Loader";
import { shuffle } from "lodash";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import Card from "../../slider/Card";
import { useLanguage } from "../../switcher/LanguageContext";
import { getBrands } from "../../getBrands/getBrands2";
import { useTranslation } from "react-i18next";
import "./styled.component.css"

export default function Double_banners() {
    const [newUrl, setNewUrl] = useState("");
    const [source, setSource] = useState("");
    const [loading, setLoading] = useState(true);
    const [brands, setBrands] = useState([]);
    const [brands2, setBrands2] = useState([]);
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
    const categoryBrands2 = { key1: "High_hybrid", key2: "1" };


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

    useEffect(() => {
        if (data) {
            const filteredData2 = data.filter(
                (rowData) => rowData[categoryBrands2.key1] === categoryBrands2.key2
            );
            console.log("FILTER2", filteredData2);
            setBrands2(filteredData2);
            setLoading(false);
            console.log("DATA:", data)
        }
    }, [data, categoryBrands2.key1, categoryBrands2.key2]);

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
            <div className="double_banners pt-5 mb-10">
                <div className="main__container">
                    {loading ? (
                        <Loader />
                    ) : (
                        cards2 && (
                            <div className="flex flex-col md:flex-row lg:space-y-0 lg:items-stretch mb-10">
                                <div className="md:w-1/2 mr-2">
                                <div
                                        className="overflow-hidden bg-indigo-600 py-5 rounded-xl h-full flex flex-col justify-between items-center"
                                    >
                                        <h1 className="text-white uppercase">Biggest Jackpots</h1>
                                        {brands.length > 0 ? (
                                            brands.slice(0, 1).map((rowData, index) => (

                                                <div className="flex mt-4 px-6 lg:px-8 justify-center">
                                                    <Link
                                                        className=""
                                                        href={`${rowData.GoBig}/${newUrl}&creative_id=XXL_Top_New_Releases`}
                                                        target="_blank"
                                                    >
                                                        <button
                                                            type="button"
                                                            className="bordered-button rounded-md bg-teal-600 px-10 py-3 text-lg text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                        >
                                                            {t("Play Now")}
                                                        </button>
                                                    </Link>
                                                </div>
                                            ))) : (

                                            <div className="flex px-6 lg:px-8 justify-center text-white font-black">
                                                <p> NO AVAILABLE BRANDS</p>
                                            </div>
                                        )
                                        }
                                    </div>

                                    <p className="mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis necessitatibus numquam excepturi, quae veritatis quia maxime quod nostrum aliquid earum.</p>
                                </div>
                                <div className="md:w-1/2 ml-2">
                                    <div
                                        className="overflow-hidden bg-indigo-600 py-5 rounded-xl h-full flex flex-col justify-between items-center"
                                    >
                                        <h1 className="text-white uppercase">Top Tournaments</h1>
                                        {brands2.length > 0 ? (
                                            brands2.slice(0, 1).map((rowData, index) => (

                                                <div className="flex mt-4 px-6 lg:px-8 justify-center">
                                                    <Link
                                                        className=""
                                                        href={`${rowData.GoBig}/${newUrl}&creative_id=XXL_Top_New_Releases`}
                                                        target="_blank"
                                                    >
                                                        <button
                                                            type="button"
                                                            className="bordered-button mt-10 rounded-md bg-teal-600 px-10 py-3 text-lg text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                        >
                                                            {t("Play Now")}
                                                        </button>
                                                    </Link>
                                                </div>
                                            ))) : (

                                            <div className="flex mt-4 px-6 lg:px-8 justify-center text-white font-black">
                                                <p> NO AVAILABLE BRANDS</p>
                                            </div>
                                        )
                                        }
                                    </div>

                                    <p className="mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis necessitatibus numquam excepturi, quae veritatis quia maxime quod nostrum aliquid earum.</p>

                                </div>

                            </div>
                        )
                    )}
                </div>
            </div>

        </>
    );
}