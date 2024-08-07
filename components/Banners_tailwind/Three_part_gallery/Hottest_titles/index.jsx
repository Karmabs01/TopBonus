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

    const projects = [
        { name: 'Graph API', initials: 'GA', href: '#', members: 16, bgColor: 'bg-pink-600' },
        { name: 'Component Design', initials: 'CD', href: '#', members: 12, bgColor: 'bg-purple-600' },
        { name: 'Templates', initials: 'T', href: '#', members: 16, bgColor: 'bg-yellow-500' },
        { name: 'React Components', initials: 'RC', href: '#', members: 8, bgColor: 'bg-green-500' },
    ]


    return (
        <>
            <div className="topbr-tw mb-10 mt-10">
                <div className="main__container">
                    {loading ? (
                        <Loader />
                    ) : (
                        <div>
                            <h3>5 hottest casinos</h3>
                            <p className="mt-5">Discover the 5 hottest casino brands trending right now!</p>
                            <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:gap-6">
                                {brands.slice(0,5).map((rowData, index) => (
                                    <Link
                                        className=""
                                        href={`${rowData.GoBig}/${newUrl}&creative_id=XXL_Top_New_Releases`}
                                        target="_blank"
                                    >

                                        <li key={index} className="col-span-1 flex rounded-md shadow-sm">
                                            <Image
                                                src={`/brands/${rowData.CasinoBrand}.png`}
                                                alt={rowData.CasinoBrand}
                                                width={80}
                                                height={80}
                                                loading="lazy"
                                                className="bg-gray-300"
                                            />
                                            <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
                                                <div className="flex-1 truncate px-4 py-2 text-sm">
                                                    <a href={`${rowData.GoBig}/${newUrl}&creative_id=XXL_Top_New_Releases`} className="font-medium text-gray-900 hover:text-gray-600">
                                                        {rowData.CasinoBrand}
                                                    </a>
                                                    <p className="text-gray-500 text-sm"> {rowData.OurOfferContent}</p>
                                                </div>
                                                <div className="flex-shrink-0 pr-2">
                                                    <button
                                                        type="button"
                                                        className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                    >
                                                        <span className="sr-only">Open options</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </li>
                                    </Link>

                                ))}

                            </ul>
                        </div>
                    )}
                </div>
            </div>

        </>
    );
}