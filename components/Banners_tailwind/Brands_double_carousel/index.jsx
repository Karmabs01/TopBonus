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
import "./styled.component.css"

export default function Brands_double_carousel() {
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
            <div className="brands_rows pt-10">
                <div className="main__container">
                    {loading ? (
                        <Loader />
                    ) : (
                        cards2 && (
                            <div className="flex flex-col md:flex-row lg:space-y-0 lg:items-stretch">
                                <div className="w-full md:w-1/2 mr-2">
                                    <div className="mx-auto max-w-2xl pb-5 pt-5 md:pt-20 sm:pb-5 lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:pt-32">
                                        <div className="">
                                            <p className="mt-4 text-4xl font-bold tracking-tight text-gray-900">All in the Details</p>
                                            <p className="mt-4 text-gray-500">
                                                We've obsessed over every detail of this handcrafted journal to bring you the best materials for daily
                                                use.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className=" md:w-1/2 ml-2">
                                    {brands.length > 0 &&
                                        <div
                                            className="background overflow-hidden rounded-xl h-full flex justify-center items-end"
                                        >
                                            <div className="wrap">
                                                <div className="items-wrap">
                                                    <div className="items marquee">
                                                        {brands.map((rowData, index) => (

                                                            <div className="item">
                                                                <Link
                                                                className=""
                                                                href={`${rowData.GoBig}/${newUrl}&creative_id=XXL_Top_New_Releases`}
                                                                target="_blank"
                                                            >

                                                                <Image
                                                                    src={`/brands/${rowData.CasinoBrand}.png`}
                                                                    alt={rowData.CasinoBrand}
                                                                    width={300}
                                                                    height={100}
                                                                    loading="lazy"
                                                                    className="target-top-new-releases"
                                                                />
                                                            </Link>
                                                            </div>

                                                        ))}
                                                    </div>
                                                    <div aria-hidden="true" class="items marquee">
                                                        {brands.map((rowData, index) => (

                                                            <div className="item">
                                                                 <Link
                                                                className=""
                                                                href={`${rowData.GoBig}/${newUrl}&creative_id=XXL_Top_New_Releases`}
                                                                target="_blank"
                                                            >

                                                                <Image
                                                                    src={`/brands/${rowData.CasinoBrand}.png`}
                                                                    alt={rowData.CasinoBrand}
                                                                    width={300}
                                                                    height={100}
                                                                    loading="lazy"
                                                                    className="target-top-new-releases"
                                                                />
                                                            </Link>
                                                            </div>

                                                        ))}
                                                    </div>
                                                </div>
                                                <div class="items-wrap">
                                                    <div class="items marquee reverce">
                                                        {brands.map((rowData, index) => (

                                                            <div className="item">
                                                                 <Link
                                                                className=""
                                                                href={`${rowData.GoBig}/${newUrl}&creative_id=XXL_Top_New_Releases`}
                                                                target="_blank"
                                                            >

                                                                <Image
                                                                    src={`/brands/${rowData.CasinoBrand}.png`}
                                                                    alt={rowData.CasinoBrand}
                                                                    width={300}
                                                                    height={100}
                                                                    loading="lazy"
                                                                    className="target-top-new-releases"
                                                                />
                                                            </Link>
                                                            </div>

                                                        ))}
                                                    </div>
                                                    <div aria-hidden="true" class="items marquee reverce">
                                                        {brands.map((rowData, index) => (

                                                            <div className="item">
                                                                 <Link
                                                                className=""
                                                                href={`${rowData.GoBig}/${newUrl}&creative_id=XXL_Top_New_Releases`}
                                                                target="_blank"
                                                            >

                                                                <Image
                                                                    src={`/brands/${rowData.CasinoBrand}.png`}
                                                                    alt={rowData.CasinoBrand}
                                                                    width={300}
                                                                    height={100}
                                                                    loading="lazy"
                                                                    className="target-top-new-releases"
                                                                />
                                                            </Link>
                                                            </div>

                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    }
                                </div>

                            </div>
                        )
                    )}
                </div>
            </div>

        </>
    );
}
