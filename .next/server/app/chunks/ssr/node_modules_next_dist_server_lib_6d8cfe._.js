(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/components_76e6c7._.js", {

"[project]/components/Banners_tailwind/Three_part_gallery/Hottest_titles/index.jsx (ecmascript, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>Popular_offers
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$core$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/swr/core/dist/index.mjs (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Loader.jsx (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2f$shuffle$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/lodash/shuffle.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/uuid/dist/esm-node/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slider$2f$Card$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/slider/Card.jsx (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/switcher/LanguageContext.jsx (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getBrands$2f$getBrands2$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/getBrands/getBrands2.jsx (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$slick$2f$lib$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-slick/lib/index.js (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
function Popular_offers() {
    const [newUrl, setNewUrl] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("");
    const [source, setSource] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("");
    const [loading, setLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](true);
    const [brands, setBrands] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]([]);
    const [currentBrandIndex, setCurrentBrandIndex] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](0);
    const [fade, setFade] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](true);
    const { language } = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$28$ecmascript$29$__["useLanguage"]();
    const { t } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__["useTranslation"]();
    const settings = {
        infinite: true,
        speed: 500,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        const currentUrl = window.location.href;
        const indexOfQuestionMark = currentUrl.indexOf("?");
        const newUrl2 = indexOfQuestionMark !== -1 ? currentUrl.substring(0, indexOfQuestionMark) : currentUrl;
        window.history.replaceState({}, document.title, newUrl2);
        const urlObj = new URL(currentUrl);
        const searchParams = new URLSearchParams(urlObj.search);
        searchParams.delete("brand");
        const currentKeyword = searchParams.get("keyword");
        const partners = [
            "partner1039",
            "partner1043",
            "partner1044",
            "CLD_VIP"
        ];
        function setPartnerSource(keyword) {
            const partner = partners.find((p)=>keyword.includes(p));
            if (partner) {
                localStorage.setItem("source", partner);
                setSource(partner);
                searchParams.set("source", partner);
            } else {
                setSource("0");
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
    }, [
        language
    ]);
    const categoryBrands = {
        key1: "Segment2",
        key2: "Premium"
    };
    const { data, error } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$core$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["default"]([
        "brands",
        language
    ], ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getBrands$2f$getBrands2$2e$jsx__$28$ecmascript$29$__["getBrands"](language), {
        initialData: brands
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        if (data) {
            const filteredData = data.filter((rowData)=>rowData[categoryBrands.key1] === categoryBrands.key2);
            console.log("FILTER", filteredData);
            setBrands(filteredData);
            setLoading(false);
        }
    }, [
        data,
        categoryBrands.key1,
        categoryBrands.key2
    ]);
    const shuffledBrands = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2f$shuffle$2e$js__$28$ecmascript$29$__["default"](brands);
    const cards2 = shuffledBrands.slice(0, 6).map((brand)=>({
            key: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$index$2e$js__$28$ecmascript$29$__["v4"](),
            content: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slider$2f$Card$2e$jsx__$28$ecmascript$29$__["default"], {
                imagen: `/brands/${brand.CasinoBrand}.png`,
                link: brand.GoBig,
                bonus: brand.OurOfferContent
            }, void 0, false, {
                fileName: "<[project]/components/Banners_tailwind/Three_part_gallery/Hottest_titles/index.jsx>",
                lineNumber: 104,
                columnNumber: 13
            }, this)
        }));
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        const interval = setInterval(()=>{
            setFade(false);
            setTimeout(()=>{
                setCurrentBrandIndex((prevIndex)=>(prevIndex + 1) % brands.length);
                setFade(true);
            }, 500);
        }, 5000000);
        return ()=>clearInterval(interval);
    }, [
        brands.length
    ]);
    console.log("BRANDS", brands);
    const projects = [
        {
            name: 'Graph API',
            initials: 'GA',
            href: '#',
            members: 16,
            bgColor: 'bg-pink-600'
        },
        {
            name: 'Component Design',
            initials: 'CD',
            href: '#',
            members: 12,
            bgColor: 'bg-purple-600'
        },
        {
            name: 'Templates',
            initials: 'T',
            href: '#',
            members: 16,
            bgColor: 'bg-yellow-500'
        },
        {
            name: 'React Components',
            initials: 'RC',
            href: '#',
            members: 8,
            bgColor: 'bg-green-500'
        }
    ];
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["Fragment"], {
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "topbr-tw pt-32 xl:pt-5 mb-10 mt-10",
            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "main__container",
                children: loading ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2e$jsx__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "<[project]/components/Banners_tailwind/Three_part_gallery/Hottest_titles/index.jsx>",
                    lineNumber: 139,
                    columnNumber: 25
                }, this) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h3", {
                            children: "5 hottest casinos"
                        }, void 0, false, {
                            fileName: "<[project]/components/Banners_tailwind/Three_part_gallery/Hottest_titles/index.jsx>",
                            lineNumber: 142,
                            columnNumber: 29
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                            className: "mt-5",
                            children: "Discover the 5 hottest casino brands trending right now!"
                        }, void 0, false, {
                            fileName: "<[project]/components/Banners_tailwind/Three_part_gallery/Hottest_titles/index.jsx>",
                            lineNumber: 143,
                            columnNumber: 29
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("ul", {
                            role: "list",
                            className: "mt-3 grid grid-cols-1 gap-5 sm:gap-6",
                            children: brands.slice(0, 5).map((rowData, index)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                    className: "",
                                    href: `${rowData.GoBig}/${newUrl}&creative_id=XXL_Top_New_Releases`,
                                    target: "_blank",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("li", {
                                        className: "col-span-1 flex rounded-md shadow-sm",
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__["default"], {
                                                src: `/brands/${rowData.CasinoBrand}.png`,
                                                alt: rowData.CasinoBrand,
                                                width: 80,
                                                height: 80,
                                                loading: "lazy",
                                                className: "bg-gray-300"
                                            }, void 0, false, {
                                                fileName: "<[project]/components/Banners_tailwind/Three_part_gallery/Hottest_titles/index.jsx>",
                                                lineNumber: 153,
                                                columnNumber: 45
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white",
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "flex-1 truncate px-4 py-2 text-sm",
                                                        children: [
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                                href: `${rowData.GoBig}/${newUrl}&creative_id=XXL_Top_New_Releases`,
                                                                className: "font-medium text-gray-900 hover:text-gray-600",
                                                                children: rowData.CasinoBrand
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/Banners_tailwind/Three_part_gallery/Hottest_titles/index.jsx>",
                                                                lineNumber: 163,
                                                                columnNumber: 53
                                                            }, this),
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                className: "text-gray-500 text-sm",
                                                                children: [
                                                                    " ",
                                                                    rowData.OurOfferContent
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "<[project]/components/Banners_tailwind/Three_part_gallery/Hottest_titles/index.jsx>",
                                                                lineNumber: 166,
                                                                columnNumber: 53
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/components/Banners_tailwind/Three_part_gallery/Hottest_titles/index.jsx>",
                                                        lineNumber: 162,
                                                        columnNumber: 49
                                                    }, this),
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "flex-shrink-0 pr-2",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                            type: "button",
                                                            className: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                className: "sr-only",
                                                                children: "Open options"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/Banners_tailwind/Three_part_gallery/Hottest_titles/index.jsx>",
                                                                lineNumber: 173,
                                                                columnNumber: 57
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/Banners_tailwind/Three_part_gallery/Hottest_titles/index.jsx>",
                                                            lineNumber: 169,
                                                            columnNumber: 53
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/Banners_tailwind/Three_part_gallery/Hottest_titles/index.jsx>",
                                                        lineNumber: 168,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/components/Banners_tailwind/Three_part_gallery/Hottest_titles/index.jsx>",
                                                lineNumber: 161,
                                                columnNumber: 45
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "<[project]/components/Banners_tailwind/Three_part_gallery/Hottest_titles/index.jsx>",
                                        lineNumber: 152,
                                        columnNumber: 41
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/components/Banners_tailwind/Three_part_gallery/Hottest_titles/index.jsx>",
                                    lineNumber: 146,
                                    columnNumber: 37
                                }, this))
                        }, void 0, false, {
                            fileName: "<[project]/components/Banners_tailwind/Three_part_gallery/Hottest_titles/index.jsx>",
                            lineNumber: 144,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/components/Banners_tailwind/Three_part_gallery/Hottest_titles/index.jsx>",
                    lineNumber: 141,
                    columnNumber: 25
                }, this)
            }, void 0, false, {
                fileName: "<[project]/components/Banners_tailwind/Three_part_gallery/Hottest_titles/index.jsx>",
                lineNumber: 137,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "<[project]/components/Banners_tailwind/Three_part_gallery/Hottest_titles/index.jsx>",
            lineNumber: 136,
            columnNumber: 13
        }, this)
    }, void 0, false);
}

})()),
"[project]/components/switcher/LanguageContext.jsx (ecmascript, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "LanguageProvider": ()=>LanguageProvider,
    "useLanguage": ()=>useLanguage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
const LanguageContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["createContext"]();
const useLanguage = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useContext"](LanguageContext);
const LanguageProvider = ({ children })=>{
    const [language, setLanguage] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]('all');
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        if (typeof window !== 'undefined') {
            const storedLanguage = localStorage.getItem('country_brands');
            if (storedLanguage) {
                setLanguage(storedLanguage);
            }
        }
    }, []);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](LanguageContext.Provider, {
        value: {
            language,
            setLanguage
        },
        children: children
    }, void 0, false, {
        fileName: "<[project]/components/switcher/LanguageContext.jsx>",
        lineNumber: 21,
        columnNumber: 5
    }, this);
};

})()),
"[project]/components/switcher/BrandsSwitcher.jsx (ecmascript, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Loader.jsx (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/switcher/LanguageContext.jsx (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
const BrandsSwitcher = ()=>{
    const [isLoading, setIsLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const { language, setLanguage } = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$28$ecmascript$29$__["useLanguage"]();
    const ipData = async ()=>{
        try {
            const response = await fetch("https://ipapi.co/json/?key=YD0x5VtXrPJkOcFQMjEyQgqjfM6jUcwS4J54b3DI8ztyrFpHzW");
            const data = await response.json();
            if (data.country) {
                setLanguage(data.country.toLowerCase());
                if (typeof window !== "undefined") {
                    localStorage.setItem("country_brands", data.country.toLowerCase());
                }
            }
        } catch (error) {
            console.error("Ошибка при запросе к API:", error);
            setLanguage("all");
        }
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        const savedLanguage = localStorage.getItem("country_brands");
        if (!savedLanguage) {
            ipData();
        }
    }, []);
    const changeLanguage = (lng)=>{
        setIsLoading(true);
        setLanguage(lng);
        localStorage.setItem("country_brands", lng);
        setIsLoading(false);
        window.location.reload();
    };
    const availableLanguages = [
        {
            code: "au",
            label: "Australia",
            flag: "🇦🇺"
        },
        {
            code: "ca",
            label: "Canada",
            flag: "🇨🇦"
        },
        {
            code: "de",
            label: "Germany",
            flag: "🇩🇪"
        },
        {
            code: "ie",
            label: "Ireland",
            flag: "🇮🇪"
        },
        {
            code: "nz",
            label: "New Zealand",
            flag: "🇳🇿"
        },
        {
            code: "no",
            label: "Norway",
            flag: "🇳🇴"
        },
        {
            code: "fi",
            label: "Finland",
            flag: "🇫🇮"
        },
        {
            code: "at",
            label: "Austria",
            flag: "🇦🇹"
        },
        {
            code: "ch",
            label: "Switzerland",
            flag: "🇨🇭"
        },
        {
            code: "dk",
            label: "Denmark",
            flag: "🇩🇰"
        },
        {
            code: "fr",
            label: "France",
            flag: "🇫🇷"
        },
        {
            code: "it",
            label: "Italy",
            flag: "🇮🇹"
        },
        {
            code: "pl",
            label: "Poland",
            flag: "🇵🇱"
        },
        {
            code: "se",
            label: "Sweden",
            flag: "🇸🇪"
        },
        {
            code: "cz",
            label: "Czech",
            flag: "🇨🇿"
        },
        {
            code: "sk",
            label: "Slovakia",
            flag: "🇸🇰"
        },
        {
            code: "be",
            label: "Belgium",
            flag: "🇧🇪"
        },
        {
            code: "gr",
            label: "Greece",
            flag: "🇬🇷"
        },
        {
            code: "nl",
            label: "Netherlands",
            flag: "🇳🇱"
        },
        {
            code: "hu",
            label: "Hungary",
            flag: "🇭🇺"
        },
        {
            code: "bg",
            label: "Bulgaria",
            flag: "🇧🇬"
        },
        {
            code: "all",
            label: "World",
            flag: "🌍"
        }
    ];
    const availableLanguages1039 = [
        {
            code: "au",
            label: "Australia",
            flag: "🇦🇺"
        },
        {
            code: "at",
            label: "Austria",
            flag: "🇦🇹"
        },
        {
            code: "be",
            label: "Belgium",
            flag: "🇧🇪"
        },
        {
            code: "bg",
            label: "Bulgaria",
            flag: "🇧🇬"
        },
        {
            code: "ca",
            label: "Canada",
            flag: "🇨🇦"
        },
        {
            code: "cz",
            label: "Czech",
            flag: "🇨🇿"
        },
        {
            code: "dk",
            label: "Denmark",
            flag: "🇩🇰"
        },
        {
            code: "fi",
            label: "Finland",
            flag: "🇫🇮"
        },
        {
            code: "fr",
            label: "France",
            flag: "🇫🇷"
        },
        {
            code: "de",
            label: "Germany",
            flag: "🇩🇪"
        },
        {
            code: "gr",
            label: "Greece",
            flag: "🇬🇷"
        },
        {
            code: "hu",
            label: "Hungary",
            flag: "🇭🇺"
        },
        {
            code: "ie",
            label: "Ireland",
            flag: "🇮🇪"
        },
        {
            code: "it",
            label: "Italy",
            flag: "🇮🇹"
        },
        {
            code: "nl",
            label: "Netherlands",
            flag: "🇳🇱"
        },
        {
            code: "nz",
            label: "New Zealand",
            flag: "🇳🇿"
        },
        {
            code: "no",
            label: "Norway",
            flag: "🇳🇴"
        },
        {
            code: "pl",
            label: "Poland",
            flag: "🇵🇱"
        },
        {
            code: "pt",
            label: "Portugal",
            flag: "🇵🇹"
        },
        {
            code: "sk",
            label: "Slovakia",
            flag: "🇸🇰"
        },
        {
            code: "es",
            label: "Spain",
            flag: "🇪🇸"
        },
        {
            code: "se",
            label: "Sweden",
            flag: "🇸🇪"
        },
        {
            code: "ch",
            label: "Switzerland",
            flag: "🇨🇭"
        },
        {
            code: "tr",
            label: "Turkey",
            flag: "🇹🇷"
        },
        {
            code: "gb",
            label: "United Kingdom",
            flag: "🇬🇧"
        },
        {
            code: "all",
            label: "World",
            flag: "🌍"
        }
    ];
    const availableLanguages1043 = [
        {
            code: "ca",
            label: "Canada",
            flag: "🇨🇦"
        },
        {
            code: "us",
            label: "United States",
            flag: "🇺🇸"
        },
        {
            code: "all",
            label: "World",
            flag: "🌍"
        }
    ];
    const availableLanguages1044 = [
        {
            code: "au",
            label: "Australia",
            flag: "🇦🇺"
        },
        {
            code: "at",
            label: "Austria",
            flag: "🇦🇹"
        },
        {
            code: "be",
            label: "Belgium",
            flag: "🇧🇪"
        },
        {
            code: "ca",
            label: "Canada",
            flag: "🇨🇦"
        },
        {
            code: "cz",
            label: "The Czech Republic",
            flag: "🇨🇿"
        },
        {
            code: "dk",
            label: "Denmark",
            flag: "🇩🇰"
        },
        {
            code: "fi",
            label: "Finland",
            flag: "🇫🇮"
        },
        {
            code: "fr",
            label: "France",
            flag: "🇫🇷"
        },
        {
            code: "de",
            label: "Germany",
            flag: "🇩🇪"
        },
        {
            code: "gb",
            label: "Great Britain",
            flag: "🇬🇧"
        },
        {
            code: "gr",
            label: "Greece",
            flag: "🇬🇷"
        },
        {
            code: "ie",
            label: "Ireland",
            flag: "🇮🇪"
        },
        {
            code: "it",
            label: "Italy",
            flag: "🇮🇹"
        },
        {
            code: "nl",
            label: "Netherlands",
            flag: "🇳🇱"
        },
        {
            code: "no",
            label: "Norway",
            flag: "🇳🇴"
        },
        {
            code: "nz",
            label: "New Zealand",
            flag: "🇳🇿"
        },
        {
            code: "pl",
            label: "Poland",
            flag: "🇵🇱"
        },
        {
            code: "se",
            label: "Sweden",
            flag: "🇸🇪"
        },
        {
            code: "za",
            label: "South Africa",
            flag: "🇿🇦"
        },
        {
            code: "ch",
            label: "Switzerland",
            flag: "🇨🇭"
        },
        {
            code: "us",
            label: "USA",
            flag: "🇺🇸"
        },
        {
            code: "all",
            label: "World",
            flag: "🌍"
        }
    ];
    const availableLanguagesCLD_VIP = [
        {
            code: "au",
            label: "Australia",
            flag: "🇦🇺"
        },
        {
            code: "at",
            label: "Austria",
            flag: "🇦🇹"
        },
        {
            code: "be",
            label: "Belgium",
            flag: "🇧🇪"
        },
        {
            code: "ca",
            label: "Canada",
            flag: "🇨🇦"
        },
        {
            code: "ch",
            label: "Switzerland",
            flag: "🇨🇭"
        },
        {
            code: "cz",
            label: "The Czech Republic",
            flag: "🇨🇿"
        },
        {
            code: "de",
            label: "Germany",
            flag: "🇩🇪"
        },
        {
            code: "dk",
            label: "Denmark",
            flag: "🇩🇰"
        },
        {
            code: "fi",
            label: "Finland",
            flag: "🇫🇮"
        },
        {
            code: "fr",
            label: "France",
            flag: "🇫🇷"
        },
        {
            code: "gr",
            label: "Greece",
            flag: "🇬🇷"
        },
        {
            code: "hu",
            label: "Hungary",
            flag: "🇭🇺"
        },
        {
            code: "ie",
            label: "Ireland",
            flag: "🇮🇪"
        },
        {
            code: "it",
            label: "Italy",
            flag: "🇮🇹"
        },
        {
            code: "no",
            label: "Norway",
            flag: "🇳🇴"
        },
        {
            code: "nz",
            label: "New Zealand",
            flag: "🇳🇿"
        },
        {
            code: "pl",
            label: "Poland",
            flag: "🇵🇱"
        },
        {
            code: "se",
            label: "Sweden",
            flag: "🇸🇪"
        },
        {
            code: "sk",
            label: "Slovakia",
            flag: "🇸🇰"
        },
        {
            code: "all",
            label: "World",
            flag: "🌍"
        }
    ];
    let item;
    if (typeof window !== "undefined") {
        item = localStorage.getItem("source");
    }
    let newLng;
    if (item === "partner1039") {
        newLng = availableLanguages1039;
    } else if (item === "partner1043") {
        newLng = availableLanguages1043;
    } else if (item === "partner1044") {
        newLng = availableLanguages1044;
    } else if (item === "CLD_VIP") {
        newLng = availableLanguagesCLD_VIP;
    } else {
        newLng = availableLanguages;
    }
    const [lng, setLng] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("all");
    const fetchBrands = (language, newLng)=>{
        const matchedLanguage = newLng.find((lng)=>lng.code === language);
        setLng(matchedLanguage ? matchedLanguage.code : "all");
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        fetchBrands(language, newLng);
    }, [
        language,
        newLng
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: `language-switcher ml-3 flex flex-col`,
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("select", {
                className: `desktop-lang ${language}`,
                value: lng,
                onChange: (e)=>{
                    const selected = newLng.find((lang)=>lang.code === e.target.value);
                    if (selected) {
                        changeLanguage(selected.code);
                    }
                },
                children: newLng.map((language)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("option", {
                        value: language.code,
                        style: {
                            fontSize: "20px"
                        },
                        children: [
                            language.flag,
                            " ",
                            language.label
                        ]
                    }, language.code, true, {
                        fileName: "<[project]/components/switcher/BrandsSwitcher.jsx>",
                        lineNumber: 188,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "<[project]/components/switcher/BrandsSwitcher.jsx>",
                lineNumber: 177,
                columnNumber: 7
            }, this),
            isLoading && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2e$jsx__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "<[project]/components/switcher/BrandsSwitcher.jsx>",
                lineNumber: 198,
                columnNumber: 21
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/components/switcher/BrandsSwitcher.jsx>",
        lineNumber: 176,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = BrandsSwitcher;

})()),
"[project]/components/switcher/LanguageSwitcher.jsx (ecmascript, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$core$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/swr/core/dist/index.mjs (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Loader.jsx (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
const LanguageSwitcher = ()=>{
    const { t, i18n } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__["useTranslation"]();
    const { data: selectedLanguage, error } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$core$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["default"]("selectedLanguage", ()=>i18n.language);
    const [isLoading, setIsLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const availableLanguages = [
        {
            code: "au",
            label: "Australia",
            flag: "🇦🇺"
        },
        {
            code: "ca",
            label: "Canada",
            flag: "🇨🇦"
        },
        {
            code: "de",
            label: "Germany",
            flag: "🇩🇪"
        },
        {
            code: "ie",
            label: "Ireland",
            flag: "🇮🇪"
        },
        {
            code: "nz",
            label: "New Zealand",
            flag: "🇳🇿"
        },
        {
            code: "no",
            label: "Norway",
            flag: "🇳🇴"
        },
        {
            code: "fi",
            label: "Finland",
            flag: "🇫🇮"
        },
        {
            code: "at",
            label: "Austria",
            flag: "🇦🇹"
        },
        {
            code: "ch",
            label: "Switzerland",
            flag: "🇨🇭"
        },
        {
            code: "dk",
            label: "Denmark",
            flag: "🇩🇰"
        },
        {
            code: "fr",
            label: "France",
            flag: "🇫🇷"
        },
        {
            code: "it",
            label: "Italy",
            flag: "🇮🇹"
        },
        {
            code: "pl",
            label: "Poland",
            flag: "🇵🇱"
        },
        {
            code: "se",
            label: "Sweden",
            flag: "🇸🇪"
        },
        {
            code: "cz",
            label: "Czech",
            flag: "🇨🇿"
        },
        {
            code: "sk",
            label: "Slovakia",
            flag: "🇸🇰"
        },
        {
            code: "be",
            label: "Belgium",
            flag: "🇧🇪"
        },
        {
            code: "gr",
            label: "Greece",
            flag: "🇬🇷"
        },
        {
            code: "nl",
            label: "Netherlands",
            flag: "🇳🇱"
        },
        {
            code: "hu",
            label: "Hungary",
            flag: "🇭🇺"
        },
        {
            code: "bg",
            label: "Bulgaria",
            flag: "🇧🇬"
        },
        {
            code: "all",
            label: "World",
            flag: "🌍"
        }
    ];
    const availableLanguages1039 = availableLanguages;
    const availableLanguages1043 = [
        {
            code: "all",
            label: "English",
            flag: "🌍"
        }
    ];
    const availableLanguages1044 = [
        {
            code: "cz",
            label: "Czech Republic",
            flag: "🇨🇿"
        },
        {
            code: "dk",
            label: "Denmark",
            flag: "🇩🇰"
        },
        {
            code: "fi",
            label: "Finland",
            flag: "🇫🇮"
        },
        {
            code: "fr",
            label: "France",
            flag: "🇫🇷"
        },
        {
            code: "de",
            label: "Germany",
            flag: "🇩🇪"
        },
        {
            code: "gr",
            label: "Greece",
            flag: "🇬🇷"
        },
        {
            code: "it",
            label: "Italy",
            flag: "🇮🇹"
        },
        {
            code: "nl",
            label: "Netherlands",
            flag: "🇳🇱"
        },
        {
            code: "no",
            label: "Norway",
            flag: "🇳🇴"
        },
        {
            code: "pl",
            label: "Poland",
            flag: "🇵🇱"
        },
        {
            code: "se",
            label: "Sweden",
            flag: "🇸🇪"
        },
        {
            code: "all",
            label: "English",
            flag: "🌍"
        }
    ];
    const availableLanguagesCLD_VIP = [
        {
            code: "au",
            label: "Australia",
            flag: "🇦🇺"
        },
        {
            code: "at",
            label: "Austria",
            flag: "🇦🇹"
        },
        {
            code: "be",
            label: "Belgium",
            flag: "🇧🇪"
        },
        {
            code: "ca",
            label: "Canada",
            flag: "🇨🇦"
        },
        {
            code: "ch",
            label: "Switzerland",
            flag: "🇨🇭"
        },
        {
            code: "cz",
            label: "The Czech Republic",
            flag: "🇨🇿"
        },
        {
            code: "de",
            label: "Germany",
            flag: "🇩🇪"
        },
        {
            code: "dk",
            label: "Denmark",
            flag: "🇩🇰"
        },
        {
            code: "fi",
            label: "Finland",
            flag: "🇫🇮"
        },
        {
            code: "fr",
            label: "France",
            flag: "🇫🇷"
        },
        {
            code: "gr",
            label: "Greece",
            flag: "🇬🇷"
        },
        {
            code: "hu",
            label: "Hungary",
            flag: "🇭🇺"
        },
        {
            code: "ie",
            label: "Ireland",
            flag: "🇮🇪"
        },
        {
            code: "it",
            label: "Italy",
            flag: "🇮🇹"
        },
        {
            code: "no",
            label: "Norway",
            flag: "🇳🇴"
        },
        {
            code: "nz",
            label: "New Zealand",
            flag: "🇳🇿"
        },
        {
            code: "pl",
            label: "Poland",
            flag: "🇵🇱"
        },
        {
            code: "se",
            label: "Sweden",
            flag: "🇸🇪"
        },
        {
            code: "sk",
            label: "Slovakia",
            flag: "🇸🇰"
        },
        {
            code: "all",
            label: "World",
            flag: "🌍"
        }
    ];
    let source;
    if (typeof window !== "undefined") {
        source = localStorage.getItem("source");
    }
    let newLng;
    switch(source){
        case "partner1039":
            newLng = availableLanguages1039;
            break;
        case "partner1043":
            newLng = availableLanguages1043;
            break;
        case "partner1044":
            newLng = availableLanguages1044;
            break;
        case "CLD_VIP":
            newLng = availableLanguagesCLD_VIP;
            break;
        default:
            newLng = availableLanguages;
            break;
    }
    if (error) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        children: "Failed to load"
    }, void 0, false, {
        fileName: "<[project]/components/switcher/LanguageSwitcher.jsx>",
        lineNumber: 107,
        columnNumber: 21
    }, this);
    const changeLanguage = async (lng)=>{
        setIsLoading(true);
        localStorage.setItem("country", lng);
        try {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$core$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["mutate"]("selectedLanguage", lng, false);
            await i18n.changeLanguage(lng);
        } catch (error) {
            console.error("Ошибка при смене языка:", error);
        } finally{
            setIsLoading(false);
        }
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
            children: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                    className: "ml-4 mr-4",
                    children: t("Website language")
                }, void 0, false, {
                    fileName: "<[project]/components/switcher/LanguageSwitcher.jsx>",
                    lineNumber: 125,
                    columnNumber: 9
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: `language-switcher ml-3 flex flex-col`,
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("select", {
                            className: `desktop-lang ${selectedLanguage}`,
                            value: selectedLanguage,
                            onChange: (e)=>{
                                const selected = newLng.find((lang)=>lang.code === e.target.value);
                                if (selected) {
                                    changeLanguage(selected.code);
                                } else {
                                    changeLanguage("en");
                                }
                            },
                            children: newLng.map((language)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("option", {
                                    value: language.code,
                                    style: {
                                        fontSize: "20px"
                                    },
                                    children: [
                                        language.flag,
                                        " ",
                                        language.label
                                    ]
                                }, language.code, true, {
                                    fileName: "<[project]/components/switcher/LanguageSwitcher.jsx>",
                                    lineNumber: 142,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "<[project]/components/switcher/LanguageSwitcher.jsx>",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this),
                        isLoading && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2e$jsx__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "<[project]/components/switcher/LanguageSwitcher.jsx>",
                            lineNumber: 151,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/components/switcher/LanguageSwitcher.jsx>",
                    lineNumber: 126,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/components/switcher/LanguageSwitcher.jsx>",
            lineNumber: 124,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/components/switcher/LanguageSwitcher.jsx>",
        lineNumber: 123,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = LanguageSwitcher;

})()),
"[project]/components/getBrands/languages.jsx (ecmascript, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "availableLanguages": ()=>availableLanguages,
    "availableLanguages1039": ()=>availableLanguages1039,
    "availableLanguages1043": ()=>availableLanguages1043,
    "availableLanguages1044": ()=>availableLanguages1044,
    "availableLanguagesCLD_VIP": ()=>availableLanguagesCLD_VIP
});
const availableLanguages = [
    {
        code: "au",
        label: "Australia",
        flag: "🇦🇺"
    },
    {
        code: "ca",
        label: "Canada",
        flag: "🇨🇦"
    },
    {
        code: "de",
        label: "Germany",
        flag: "🇩🇪"
    },
    {
        code: "ie",
        label: "Ireland",
        flag: "🇮🇪"
    },
    {
        code: "nz",
        label: "New Zealand",
        flag: "🇳🇿"
    },
    {
        code: "no",
        label: "Norway",
        flag: "🇳🇴"
    },
    {
        code: "fi",
        label: "Finland",
        flag: "🇫🇮"
    },
    {
        code: "at",
        label: "Austria",
        flag: "🇦🇹"
    },
    {
        code: "ch",
        label: "Switzerland",
        flag: "🇨🇭"
    },
    {
        code: "dk",
        label: "Denmark",
        flag: "🇩🇰"
    },
    {
        code: "fr",
        label: "France",
        flag: "🇫🇷"
    },
    {
        code: "it",
        label: "Italy",
        flag: "🇮🇹"
    },
    {
        code: "pl",
        label: "Poland",
        flag: "🇵🇱"
    },
    {
        code: "se",
        label: "Sweden",
        flag: "🇸🇪"
    },
    {
        code: "cz",
        label: "Czech",
        flag: "🇨🇿"
    },
    {
        code: "sk",
        label: "Slovakia",
        flag: "🇸🇰"
    },
    {
        code: "be",
        label: "Belgium",
        flag: "🇧🇪"
    },
    {
        code: "gr",
        label: "Greece",
        flag: "🇬🇷"
    },
    {
        code: "nl",
        label: "Netherlands",
        flag: "🇳🇱"
    },
    {
        code: "hu",
        label: "Hungary",
        flag: "🇭🇺"
    },
    {
        code: "bg",
        label: "Bulgaria",
        flag: "🇧🇬"
    },
    {
        code: "all",
        label: "World",
        flag: "🌍"
    }
];
const availableLanguages1039 = [
    {
        code: "au",
        label: "Australia",
        flag: "🇦🇺"
    },
    {
        code: "at",
        label: "Austria",
        flag: "🇦🇹"
    },
    {
        code: "be",
        label: "Belgium",
        flag: "🇧🇪"
    },
    {
        code: "bg",
        label: "Bulgaria",
        flag: "🇧🇬"
    },
    {
        code: "ca",
        label: "Canada",
        flag: "🇨🇦"
    },
    {
        code: "cz",
        label: "Czech",
        flag: "🇨🇿"
    },
    {
        code: "dk",
        label: "Denmark",
        flag: "🇩🇰"
    },
    {
        code: "fi",
        label: "Finland",
        flag: "🇫🇮"
    },
    {
        code: "fr",
        label: "France",
        flag: "🇫🇷"
    },
    {
        code: "de",
        label: "Germany",
        flag: "🇩🇪"
    },
    {
        code: "gr",
        label: "Greece",
        flag: "🇬🇷"
    },
    {
        code: "hu",
        label: "Hungary",
        flag: "🇭🇺"
    },
    {
        code: "ie",
        label: "Ireland",
        flag: "🇮🇪"
    },
    {
        code: "it",
        label: "Italy",
        flag: "🇮🇹"
    },
    {
        code: "nl",
        label: "Netherlands",
        flag: "🇳🇱"
    },
    {
        code: "nz",
        label: "New Zealand",
        flag: "🇳🇿"
    },
    {
        code: "no",
        label: "Norway",
        flag: "🇳🇴"
    },
    {
        code: "pl",
        label: "Poland",
        flag: "🇵🇱"
    },
    {
        code: "pt",
        label: "Portugal",
        flag: "🇵🇹"
    },
    {
        code: "sk",
        label: "Slovakia",
        flag: "🇸🇰"
    },
    {
        code: "es",
        label: "Spain",
        flag: "🇪🇸"
    },
    {
        code: "se",
        label: "Sweden",
        flag: "🇸🇪"
    },
    {
        code: "ch",
        label: "Switzerland",
        flag: "🇨🇭"
    },
    {
        code: "tr",
        label: "Turkey",
        flag: "🇹🇷"
    },
    {
        code: "gb",
        label: "United Kingdom",
        flag: "🇬🇧"
    },
    {
        code: "all",
        label: "World",
        flag: "🌍"
    }
];
const availableLanguages1043 = [
    {
        code: "ca",
        label: "Canada",
        flag: "🇨🇦"
    },
    {
        code: "us",
        label: "United States",
        flag: "🇺🇸"
    }
];
const availableLanguages1044 = [
    {
        code: "au",
        label: "Australia",
        flag: "🇦🇺"
    },
    {
        code: "at",
        label: "Austria",
        flag: "🇦🇹"
    },
    {
        code: "be",
        label: "Belgium",
        flag: "🇧🇪"
    },
    {
        code: "ca",
        label: "Canada",
        flag: "🇨🇦"
    },
    {
        code: "ch",
        label: "Switzerland",
        flag: "🇨🇭"
    },
    {
        code: "nl",
        label: "Netherlands",
        flag: "🇳🇱"
    },
    {
        code: "de",
        label: "Germany",
        flag: "🇩🇪"
    },
    {
        code: "gr",
        label: "Greece",
        flag: "🇬🇷"
    },
    {
        code: "cz",
        label: "The Czech Republic",
        flag: "🇨🇿"
    },
    {
        code: "fi",
        label: "Finland",
        flag: "🇫🇮"
    },
    {
        code: "gb",
        label: "Great Britain",
        flag: "🇬🇧"
    },
    {
        code: "ie",
        label: "Ireland",
        flag: "🇮🇪"
    },
    {
        code: "it",
        label: "Italy",
        flag: "🇮🇹"
    },
    {
        code: "nz",
        label: "New Zealand",
        flag: "🇳🇿"
    },
    {
        code: "no",
        label: "Norway",
        flag: "🇳🇴"
    },
    {
        code: "pl",
        label: "Poland",
        flag: "🇵🇱"
    },
    {
        code: "za",
        label: "South Africa",
        flag: "🇿🇦"
    },
    {
        code: "se",
        label: "Sweden",
        flag: "🇸🇪"
    },
    {
        code: "us",
        label: "USA",
        flag: "🇺🇸"
    },
    {
        code: "all",
        label: "World",
        flag: "🌍"
    }
];
const availableLanguagesCLD_VIP = [
    {
        code: "au",
        label: "Australia",
        flag: "🇦🇺"
    },
    {
        code: "at",
        label: "Austria",
        flag: "🇦🇹"
    },
    {
        code: "be",
        label: "Belgium",
        flag: "🇧🇪"
    },
    {
        code: "ca",
        label: "Canada",
        flag: "🇨🇦"
    },
    {
        code: "ch",
        label: "Switzerland",
        flag: "🇨🇭"
    },
    {
        code: "cz",
        label: "The Czech Republic",
        flag: "🇨🇿"
    },
    {
        code: "de",
        label: "Germany",
        flag: "🇩🇪"
    },
    {
        code: "dk",
        label: "Denmark",
        flag: "🇩🇰"
    },
    {
        code: "fi",
        label: "Finland",
        flag: "🇫🇮"
    },
    {
        code: "fr",
        label: "France",
        flag: "🇫🇷"
    },
    {
        code: "gr",
        label: "Greece",
        flag: "🇬🇷"
    },
    {
        code: "hu",
        label: "Hungary",
        flag: "🇭🇺"
    },
    {
        code: "ie",
        label: "Ireland",
        flag: "🇮🇪"
    },
    {
        code: "it",
        label: "Italy",
        flag: "🇮🇹"
    },
    {
        code: "no",
        label: "Norway",
        flag: "🇳🇴"
    },
    {
        code: "nz",
        label: "New Zealand",
        flag: "🇳🇿"
    },
    {
        code: "pl",
        label: "Poland",
        flag: "🇵🇱"
    },
    {
        code: "se",
        label: "Sweden",
        flag: "🇸🇪"
    },
    {
        code: "sk",
        label: "Slovakia",
        flag: "🇸🇰"
    },
    {
        code: "all",
        label: "World",
        flag: "🌍"
    }
];

})()),
"[project]/components/getBrands/getBrands2.jsx (ecmascript, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "getBrands": ()=>getBrands
});
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getBrands$2f$languages$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/getBrands/languages.jsx (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const getBrands = async (lng)=>{
    const apiAll = "https://bonusnumber1.com/api/brandsNew/read.php";
    const api1039 = "https://bonusnumber1.com/api/brandsNew2/read.php";
    const api1043 = "https://bonusnumber1.com/api/brandsNew3/read.php";
    const api1044 = "https://bonusnumber1.com/api/brandsNew4/read.php";
    const apiCLD_VIP = "https://bonusnumber1.com/api/brandsNew5/read.php";
    const partners = {
        partner1039: {
            url: api1039,
            languages: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getBrands$2f$languages$2e$jsx__$28$ecmascript$29$__["availableLanguages1039"]
        },
        partner1043: {
            url: api1043,
            languages: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getBrands$2f$languages$2e$jsx__$28$ecmascript$29$__["availableLanguages1043"]
        },
        partner1044: {
            url: api1044,
            languages: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getBrands$2f$languages$2e$jsx__$28$ecmascript$29$__["availableLanguages1044"]
        },
        CLD_VIP: {
            url: apiCLD_VIP,
            languages: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getBrands$2f$languages$2e$jsx__$28$ecmascript$29$__["availableLanguagesCLD_VIP"]
        },
        default: {
            url: apiAll,
            languages: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getBrands$2f$languages$2e$jsx__$28$ecmascript$29$__["availableLanguages"]
        }
    };
    const source = localStorage.getItem("source") || "default";
    const { url, languages } = partners[source];
    let supportedLanguage = languages.find((language)=>language.code.toUpperCase() === lng.toUpperCase());
    if (!supportedLanguage) {
        supportedLanguage = {
            code: "all"
        };
    }
    try {
        const res = await fetch(url);
        if (!res.ok) {
            console.error("Failed to fetch data:", res.status);
            return [];
        }
        const responseData = await res.json();
        const filteredData = responseData.brandsNew.filter((rowData)=>(rowData.GEO === supportedLanguage.code.toUpperCase() || supportedLanguage.code === "ALL") && rowData["CurrentStatus"] === "Ongoing" && ![
                "Mirax (FS)",
                "Katsubet (FS)",
                "7Bit (FS)"
            ].includes(rowData["CasinoBrand"]));
        return filteredData;
    } catch (error) {
        console.error("An error occurred:", error);
        return [];
    }
};

})()),
"[project]/components/Brands_home/AllBrands.jsx (ecmascript, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>AllBrands
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$slick$2f$lib$2f$index$2e$js__$28$ecmascript$2c$__chunks$29$__ = __turbopack_import__("[project]/node_modules/react-slick/lib/index.js (ecmascript, chunks, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$core$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/swr/core/dist/index.mjs (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getBrands$2f$getBrands2$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/getBrands/getBrands2.jsx (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FilterLoader$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/FilterLoader.jsx (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$index$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/phosphor-react/dist/index.esm.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/switcher/LanguageContext.jsx (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/shared/lib/app-dynamic.js (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
"TURBOPACK { transition: next-client-chunks }";
;
"use client";
;
;
;
;
;
;
;
;
;
;
;
const LazySlider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$28$ecmascript$29$__["default"](null, {
    loadableGenerated: {
        modules: [
            JSON.stringify({
                id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$slick$2f$lib$2f$index$2e$js__$28$ecmascript$2c$__chunks$29$__["default"],
                chunks: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$slick$2f$lib$2f$index$2e$js__$28$ecmascript$2c$__chunks$29$__["chunks"]
            })
        ]
    },
    ssr: false,
    loading: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
            children: "Download..."
        }, void 0, false, {
            fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
            lineNumber: 25,
            columnNumber: 18
        }, this)
});
;
;
function AllBrands({ creative, isLoader, segment, value, target, brands }) {
    const { t } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__["useTranslation"]();
    const itemsPerPage = 4;
    const itemsPerPage2 = 4;
    const [visibleBrands, setVisibleBrands] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](itemsPerPage);
    const [visibleBrands2, setVisibleBrands2] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](itemsPerPage2);
    const [hasMoreBrands, setHasMoreBrands] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const [openPlusesId, setOpenPlusesId] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](null);
    const [openWithdrawalId, setOpenWithdrawalId] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](null);
    const [openDepositsId, setOpenDepositsId] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](null);
    const [openCountriesId, setOpenCountriesId] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](null);
    const [filteredBrands, setFilteredBrands] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]([]);
    const [topBrands, setTopBrands] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]([]);
    const [br, setBr] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](brands || []);
    const { language } = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$28$ecmascript$29$__["useLanguage"]();
    const categoryBrandsAll = {
        key1: segment,
        key2: value
    };
    const categoryBrands = {
        key1: "Video",
        key2: "1"
    };
    const [visible, setVisible] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const { data, error } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$core$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["default"]([
        "brands",
        language
    ], ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getBrands$2f$getBrands2$2e$jsx__$28$ecmascript$29$__["getBrands"](language), {
        initialData: brands
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        if (data) {
            setVisible(true);
            const filteredData = data.filter((rowData)=>rowData[categoryBrandsAll.key1] === categoryBrandsAll.key2);
            const topData = data.filter((rowData)=>rowData[categoryBrands.key1] === categoryBrands.key2);
            setTopBrands(topData);
            setFilteredBrands(filteredData);
        }
    }, [
        data,
        categoryBrandsAll.key1,
        categoryBrandsAll.key2,
        categoryBrands.key1,
        categoryBrands.key2
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        setHasMoreBrands(visibleBrands < filteredBrands.length);
    }, [
        visibleBrands,
        filteredBrands.length
    ]);
    const loadMoreBrands = ()=>{
        setVisibleBrands((prevVisibleBrands)=>prevVisibleBrands + itemsPerPage);
        setVisibleBrands2((prevVisibleBrands)=>prevVisibleBrands + itemsPerPage2);
    };
    const [newUrl, setNewUrl] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("");
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        const savedUrl = localStorage.getItem("savedUrl");
        if (savedUrl) {
            setNewUrl(savedUrl);
        }
    }, []);
    const [randomBrands, setRandomBrands] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]([]);
    const [randomBrands2, setRandomBrands2] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]([]);
    const [brandsGenerated, setBrandsGenerated] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        const generateRandomBrands = ()=>{
            if (!brandsGenerated && filteredBrands.length > 0) {
                const shuffledBrands = [
                    ...filteredBrands
                ].sort(()=>Math.random() - 0.5);
                const shuffledBrands2 = [
                    ...topBrands
                ].sort(()=>Math.random() - 0.5);
                setRandomBrands(shuffledBrands);
                setRandomBrands2(shuffledBrands2);
                setBrandsGenerated(true);
            }
        };
        generateRandomBrands();
    }, [
        brandsGenerated,
        filteredBrands
    ]);
    const vis = randomBrands.length > 0 ? randomBrands : filteredBrands;
    const vis2 = randomBrands2.length > 0 ? randomBrands2 : topBrands;
    const [isMobile, setIsMobile] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        setIsMobile(window.innerWidth < 768);
        const handleResize = ()=>{
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener("resize", handleResize);
        return ()=>{
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };
    const handlePlusesClick = (brandId)=>{
        setOpenPlusesId((prevId)=>prevId === brandId ? null : brandId);
    };
    const handleWithdrawalClick = (brandId)=>{
        setOpenWithdrawalId((prevId)=>prevId === brandId ? null : brandId);
    };
    const handleDepositsClick = (brandId)=>{
        setOpenDepositsId((prevId)=>prevId === brandId ? null : brandId);
    };
    const handleCountriesClick = (brandId)=>{
        setOpenCountriesId((prevId)=>prevId === brandId ? null : brandId);
    };
    console.log("BRANDS", vis, vis2);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["Fragment"], {
        children: isLoader ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FilterLoader$2e$jsx__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
            lineNumber: 182,
            columnNumber: 9
        }, this) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "flex flex-wrap justify-between awesome",
            children: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "flex flex-col px-0 py-6 basis-[75%]",
                    children: [
                        visible && vis.slice(0, visibleBrands).map((brand)=>{
                            const advantages = brand.advantages !== null ? brand.advantages.split(",").map((advantage)=>({
                                    advantage: advantage.trim()
                                })) : "";
                            const deposits = brand.DepositMethods !== null ? brand.DepositMethods.split(",").map((deposit)=>({
                                    deposit: deposit.trim()
                                })) : "";
                            const withdrawals = brand.WithdrawalMethods !== null ? brand.WithdrawalMethods.split(",").map((withdrawal)=>({
                                    withdrawal: withdrawal.trim()
                                })) : "";
                            const restricted = brand.RestrictedCountries !== null ? brand.RestrictedCountries.split(",").map((restrict)=>({
                                    restrict: restrict.trim()
                                })) : "";
                            const isPlusesOpen = openPlusesId === brand.id_brand;
                            const isWithdrawalOpen = openWithdrawalId === brand.id_brand;
                            const isDepositsOpen = openDepositsId === brand.id_brand;
                            const isCountriesOpen = openCountriesId === brand.id_brand;
                            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "p-3 flex justify-between flex-wrap mb-2 card-brand-filtered w-full",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "flex flex-col basis-[63%]",
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex ml-1 mb-3"
                                            }, void 0, false, {
                                                fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                                lineNumber: 224,
                                                columnNumber: 23
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex mb-1",
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["Gift"], {
                                                        className: "mr-1",
                                                        size: 24
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                                        lineNumber: 226,
                                                        columnNumber: 25
                                                    }, this),
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: " flex items-center review-bonus",
                                                        children: brand.OurOfferContent
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                                        lineNumber: 227,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                                lineNumber: 225,
                                                columnNumber: 23
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "mb-2 withdrawal withdrawal-limits flex items-center",
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["Handshake"], {
                                                        className: "mr-1 mb-1",
                                                        size: 24
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                                        lineNumber: 232,
                                                        columnNumber: 25
                                                    }, this),
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "title mr-2",
                                                        children: t("Withdrawal Limits:")
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                                        lineNumber: 234,
                                                        columnNumber: 25
                                                    }, this),
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "items-center",
                                                        children: brand.WithdrawalLimits
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                                        lineNumber: 237,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                                lineNumber: 231,
                                                columnNumber: 23
                                            }, this),
                                            advantages && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                onClick: ()=>handlePlusesClick(brand.id_brand),
                                                className: "pluses custom-list-item mb-1",
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "title flex items-center",
                                                        children: [
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["ShieldPlus"], {
                                                                size: 24
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                                                lineNumber: 247,
                                                                columnNumber: 29
                                                            }, this),
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                className: "mt-1 ml-2",
                                                                children: t("Advantages")
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                                                lineNumber: 248,
                                                                columnNumber: 29
                                                            }, this),
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["CaretDown"], {
                                                                className: "ml-auto",
                                                                size: 20
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                                                lineNumber: 249,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                                        lineNumber: 246,
                                                        columnNumber: 27
                                                    }, this),
                                                    isPlusesOpen && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "items-center ml-3",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("ul", {
                                                            className: "review-pros",
                                                            children: advantages.map((advantage, index)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("li", {
                                                                    className: "review-pros-item",
                                                                    children: advantage.advantage
                                                                }, index, false, {
                                                                    fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                                                    lineNumber: 255,
                                                                    columnNumber: 35
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                                            lineNumber: 253,
                                                            columnNumber: 31
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                                        lineNumber: 252,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                                lineNumber: 242,
                                                columnNumber: 25
                                            }, this),
                                            deposits && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                onClick: ()=>handleDepositsClick(brand.id_brand),
                                                className: "withdrawal custom-list-item mb-1",
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "title flex items-center",
                                                        children: [
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["CurrencyCircleDollar"], {
                                                                size: 24
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                                                lineNumber: 271,
                                                                columnNumber: 29
                                                            }, this),
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                className: "mt-1 ml-2",
                                                                children: t("Payment Methods")
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                                                lineNumber: 272,
                                                                columnNumber: 29
                                                            }, this),
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["CaretDown"], {
                                                                className: "ml-auto",
                                                                size: 20
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                                                lineNumber: 275,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                                        lineNumber: 270,
                                                        columnNumber: 27
                                                    }, this),
                                                    isDepositsOpen && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "withdrawal flex mt-2",
                                                        children: deposits.map((deposit, index)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                className: "depimg flex items-center justify-center mr-1 mb-1 flex-wrap",
                                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__["default"], {
                                                                    width: 60,
                                                                    height: 38,
                                                                    src: `/payments/${deposit.deposit}.png`,
                                                                    alt: `${deposit.deposit}`,
                                                                    loading: "lazy"
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                                                    lineNumber: 284,
                                                                    columnNumber: 35
                                                                }, this)
                                                            }, index, false, {
                                                                fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                                                lineNumber: 280,
                                                                columnNumber: 33
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                                        lineNumber: 278,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                                lineNumber: 266,
                                                columnNumber: 25
                                            }, this),
                                            withdrawals && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                onClick: ()=>handleWithdrawalClick(brand.id_brand),
                                                className: "withdrawal custom-list-item mb-1",
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "title flex items-center",
                                                        children: [
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["GameController"], {
                                                                size: 24
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                                                lineNumber: 303,
                                                                columnNumber: 29
                                                            }, this),
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                className: "mt-1 ml-2",
                                                                children: t("Game Providers")
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                                                lineNumber: 304,
                                                                columnNumber: 29
                                                            }, this),
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["CaretDown"], {
                                                                className: "ml-auto",
                                                                size: 20
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                                                lineNumber: 307,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                                        lineNumber: 302,
                                                        columnNumber: 27
                                                    }, this),
                                                    isWithdrawalOpen && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "withdrawal flex mt-2",
                                                        children: withdrawals.map((withdrawal, index)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                className: "depimg flex items-center justify-center mr-1 mb-1 flex-wrap",
                                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__["default"], {
                                                                    width: 60,
                                                                    height: 38,
                                                                    src: `/providers/${withdrawal.withdrawal}.png`,
                                                                    alt: `${withdrawal.withdrawal}`,
                                                                    loading: "lazy"
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                                                    lineNumber: 316,
                                                                    columnNumber: 35
                                                                }, this)
                                                            }, index, false, {
                                                                fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                                                lineNumber: 312,
                                                                columnNumber: 33
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                                        lineNumber: 310,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                                lineNumber: 298,
                                                columnNumber: 25
                                            }, this),
                                            restricted && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                onClick: ()=>handleCountriesClick(brand.id_brand),
                                                className: "withdrawal custom-list-item mb-1",
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "title flex items-center",
                                                        children: [
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["Prohibit"], {
                                                                size: 24
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                                                lineNumber: 335,
                                                                columnNumber: 29
                                                            }, this),
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                className: "mt-1 ml-2",
                                                                children: t("Restricted Countries")
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                                                lineNumber: 336,
                                                                columnNumber: 29
                                                            }, this),
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["CaretDown"], {
                                                                className: "ml-auto",
                                                                size: 20
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                                                lineNumber: 339,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                                        lineNumber: 334,
                                                        columnNumber: 27
                                                    }, this),
                                                    isCountriesOpen && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "withdrawal",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                            className: "countries flex flex-wrap justify-between mt-1",
                                                            children: restricted.map((restrict, index)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                    className: "basis-[49%] pl-1 mb-2 flex",
                                                                    children: [
                                                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["MinusCircle"], {
                                                                            color: "#dd3333",
                                                                            size: 18
                                                                        }, void 0, false, {
                                                                            fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                                                            lineNumber: 349,
                                                                            columnNumber: 37
                                                                        }, this),
                                                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                            children: restrict.restrict
                                                                        }, void 0, false, {
                                                                            fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                                                            lineNumber: 350,
                                                                            columnNumber: 37
                                                                        }, this)
                                                                    ]
                                                                }, index, true, {
                                                                    fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                                                    lineNumber: 345,
                                                                    columnNumber: 35
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                                            lineNumber: 343,
                                                            columnNumber: 31
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                                        lineNumber: 342,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                                lineNumber: 330,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                        lineNumber: 223,
                                        columnNumber: 21
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "basis-[36%]",
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "brandImage p-3",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                                    href: `${brand.GoBig}/${newUrl}&creative_id=XXL_${creative}`,
                                                    className: `${target}`,
                                                    target: "_blank",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__["default"], {
                                                        className: `${target}`,
                                                        src: `/brands/${brand.CasinoBrand}.png`,
                                                        alt: `/brands/${brand.CasinoBrand}.png`,
                                                        width: 250,
                                                        height: 125,
                                                        loading: "lazy"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                                        lineNumber: 367,
                                                        columnNumber: 27
                                                    }, this)
                                                }, brand.id_brand, false, {
                                                    fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                                    lineNumber: 361,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                                lineNumber: 360,
                                                columnNumber: 23
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "buttons ml-auto flex items-center",
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "flex flex-col items-center w-full p-4 howUse mt-2 mb-2",
                                                        children: [
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                className: "text-center",
                                                                children: t("How to get bonus?")
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                                                lineNumber: 380,
                                                                columnNumber: 27
                                                            }, this),
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                className: "text-center m-0 text-slate-500",
                                                                children: t("Activate bonus in your casino account")
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                                                lineNumber: 383,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                                        lineNumber: 379,
                                                        columnNumber: 25
                                                    }, this),
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                                        className: `btn btn-primary mt-0 text-center flex justify-center items-center ${target}`,
                                                        href: `${brand.GoBig}/${newUrl}&creative_id=XXL_${creative}`,
                                                        target: "_blank",
                                                        children: [
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["Play"], {
                                                                className: "mr-2",
                                                                size: 24
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                                                lineNumber: 392,
                                                                columnNumber: 27
                                                            }, this),
                                                            " ",
                                                            t("Play Now")
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                                        lineNumber: 387,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                                lineNumber: 378,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                        lineNumber: 359,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, brand.id_brand, true, {
                                fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                lineNumber: 219,
                                columnNumber: 19
                            }, this);
                        }),
                        hasMoreBrands && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                            className: "btn-primary btn-more text-lg max-w-sm p-3 ml-auto mr-auto mt-4 font-semibold text-white flex justify-center items-center",
                            onClick: loadMoreBrands,
                            children: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["DotsThreeCircle"], {
                                    className: "mr-1",
                                    size: 24
                                }, void 0, false, {
                                    fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                    lineNumber: 405,
                                    columnNumber: 17
                                }, this),
                                t("Load More Brands")
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                            lineNumber: 401,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                    lineNumber: 185,
                    columnNumber: 11
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "flex flex-col basis-[24%] py-6",
                    children: !isMobile ? vis2.slice(0, visibleBrands2).map((item)=>{
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "card-brand-banner mb-2 flex flex-col items-center pb-3",
                            children: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "brandImage p-3",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                        className: "flex justify-center flex-col items-center target-listing-brands",
                                        href: `${item.GoBig}/${newUrl}&creative_id=XXL_Listing_Brands`,
                                        target: "_blank",
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__["default"], {
                                                src: `/brands/${item.CasinoBrand}.png`,
                                                alt: `/brands/${item.CasinoBrand}.png`,
                                                width: 200,
                                                height: 80,
                                                loading: "lazy",
                                                className: "target-listing-brands"
                                            }, void 0, false, {
                                                fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                                lineNumber: 425,
                                                columnNumber: 25
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "p-3 text-center flex items-center review-bonus",
                                                children: item.OurOfferContent
                                            }, void 0, false, {
                                                fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                                lineNumber: 433,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, item.id_brand, true, {
                                        fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                        lineNumber: 419,
                                        columnNumber: 23
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                    lineNumber: 418,
                                    columnNumber: 21
                                }, this),
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                    className: "btn btn-primary btn-new target-listing-brands",
                                    href: `${item.GoBig}/${newUrl}&creative_id=XXL_Listing_Brands`,
                                    target: "_blank",
                                    children: t("Play Now")
                                }, item.id_brand, false, {
                                    fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                    lineNumber: 438,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, item.id_brand, true, {
                            fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                            lineNumber: 414,
                            columnNumber: 19
                        }, this);
                    }) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](LazySlider, {
                        ...settings,
                        children: vis2.map((item)=>{
                            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "card-brand-banner mb-2 flex flex-col items-center pb-3",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "brandImage p-3",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                            className: "flex justify-center flex-col items-center target-listing-brands",
                                            href: `${item.GoBig}/${newUrl}`,
                                            target: "_blank",
                                            children: [
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__["default"], {
                                                    className: "target-listing-brands",
                                                    src: `/brands/${item.CasinoBrand}.png`,
                                                    alt: `/brands/${item.CasinoBrand}.png`,
                                                    width: 200,
                                                    height: 80,
                                                    loading: "lazy"
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                                    lineNumber: 464,
                                                    columnNumber: 27
                                                }, this),
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "p-3 text-center flex items-center review-bonus",
                                                    children: item.OurOfferContent
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                                    lineNumber: 472,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, item.id_brand, true, {
                                            fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                            lineNumber: 458,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                        lineNumber: 457,
                                        columnNumber: 23
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                        className: "btn btn-primary btn-new target-listing-brands",
                                        href: `${item.GoBig}/${newUrl}`,
                                        target: "_blank",
                                        children: t("Play Now")
                                    }, item.id_brand, false, {
                                        fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                        lineNumber: 477,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, item.id_brand, true, {
                                fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                                lineNumber: 453,
                                columnNumber: 21
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                        lineNumber: 450,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
                    lineNumber: 410,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/components/Brands_home/AllBrands.jsx>",
            lineNumber: 184,
            columnNumber: 9
        }, this)
    }, void 0, false);
}

})()),
"[project]/components/Brands_home/Navigate.jsx (ecmascript, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$index$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/phosphor-react/dist/index.esm.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
const useNavigateBrands = ()=>{
    const { t } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__["useTranslation"]();
    return [
        {
            currentTab: 1,
            currentCategories: 25,
            currentText: "All_Brands",
            segment: "CurrentStatus",
            value: "Ongoing",
            target: "target-all-brands",
            currentText2: t("All Brands"),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["SquareLogo"], {
                className: "mr-2 pb-1",
                size: 32
            }, void 0, false, {
                fileName: "<[project]/components/Brands_home/Navigate.jsx>",
                lineNumber: 23,
                columnNumber: 13
            }, this)
        },
        {
            currentTab: 5,
            currentCategories: 187,
            currentText: "New_Arrivals",
            segment: "Segment2",
            value: "Sandbox",
            target: "target-new-arrivals",
            currentText2: t("New Arrivals"),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["DribbbleLogo"], {
                className: "mr-2 pb-1",
                size: 32
            }, void 0, false, {
                fileName: "<[project]/components/Brands_home/Navigate.jsx>",
                lineNumber: 33,
                columnNumber: 13
            }, this)
        },
        {
            currentTab: 2,
            currentCategories: 26,
            currentText: "Recommended_Brands",
            segment: "Segment2",
            value: "Premium",
            target: "target-recommended-brands",
            currentText2: t("Recommended Brands"),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["Medal"], {
                className: "mr-2 pb-1",
                size: 32
            }, void 0, false, {
                fileName: "<[project]/components/Brands_home/Navigate.jsx>",
                lineNumber: 43,
                columnNumber: 13
            }, this)
        },
        {
            currentTab: 3,
            currentCategories: 24,
            currentText: "Quick_Sign-Up_Brands",
            segment: "QuickSignUp",
            value: "1",
            target: "target-quick-sign-up-brands",
            currentText2: t("Quick Sign-Up"),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["Crown"], {
                className: "mr-2 pb-1",
                size: 32
            }, void 0, false, {
                fileName: "<[project]/components/Brands_home/Navigate.jsx>",
                lineNumber: 53,
                columnNumber: 13
            }, this)
        },
        {
            currentTab: 4,
            currentCategories: 19,
            currentText: "Hottest_Deals",
            segment: "Hottest",
            value: "1",
            target: "target-hottest-deals",
            currentText2: t("Hottest Deals"),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["Fire"], {
                className: "mr-2 pb-1",
                size: 32
            }, void 0, false, {
                fileName: "<[project]/components/Brands_home/Navigate.jsx>",
                lineNumber: 63,
                columnNumber: 13
            }, this)
        }
    ];
};
const __TURBOPACK__default__export__ = useNavigateBrands;

})()),
"[project]/components/Brands_home/FilteredHome.jsx (ecmascript, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Brands_home$2f$Navigate$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Brands_home/Navigate.jsx (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Brands_home$2f$AllBrands$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Brands_home/AllBrands.jsx (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/switcher/LanguageContext.jsx (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
;
;
const FilteredHome = ()=>{
    const { t } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__["useTranslation"]();
    const { language } = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$28$ecmascript$29$__["useLanguage"]();
    const [isLoader, setIsLoader] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const [currentTab, setCurrentTab] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](1);
    const navigateBrands = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Brands_home$2f$Navigate$2e$jsx__$28$ecmascript$29$__["default"]();
    const handleTabChange = (tabNumber)=>{
        setCurrentTab(tabNumber);
        setIsLoader(true);
        setTimeout(()=>{
            setIsLoader(false);
        }, 500);
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "pt-10 pb-10",
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "main__container",
            children: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h2", {
                    className: "",
                    children: t("Catalog of all 2024 Online Casino Bonuses Offered")
                }, void 0, false, {
                    fileName: "<[project]/components/Brands_home/FilteredHome.jsx>",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                    className: "mt-3 pb-4",
                    children: t("Seeking online casino bonuses and promotions? Explore our current database featuring numerous casino bonus offers for your selection.")
                }, void 0, false, {
                    fileName: "<[project]/components/Brands_home/FilteredHome.jsx>",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "bg-white rounded-lg",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("nav", {
                        "aria-label": "Tabs",
                        className: "isolate flex divide-x divide-gray-700 rounded-lg shadow overflow-x-auto",
                        children: navigateBrands.map((item)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$28$ecmascript$29$__["default"](currentTab === item.currentTab ? 'text-blue-600 underline decoration-2 underline-offset-8 bg-blue-500/10' : 'text-gray-500 hover:text-gray-700', 'group relative flex-1 overflow-hidden px-4 py-4 text-center text-sm font-medium hover:bg-blue-500/10 focus:z-10 flex justify-center flex-row items-center p-2 min-w-40 transition-colors duration-300 ease-in-out'),
                                onClick: ()=>handleTabChange(item.currentTab),
                                children: [
                                    item.icon,
                                    item.currentText2
                                ]
                            }, item.currentTab, true, {
                                fileName: "<[project]/components/Brands_home/FilteredHome.jsx>",
                                lineNumber: 40,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "<[project]/components/Brands_home/FilteredHome.jsx>",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/components/Brands_home/FilteredHome.jsx>",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "main other-custom-bonuses filter-brands",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "overlay-filter",
                        children: navigateBrands.map((item)=>{
                            return currentTab === item.currentTab && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Brands_home$2f$AllBrands$2e$jsx__$28$ecmascript$29$__["default"], {
                                creative: item.currentText,
                                isLoader: isLoader,
                                segment: item.segment,
                                value: item.value,
                                target: item.target
                            }, `${item.currentTab}-${language}`, false, {
                                fileName: "<[project]/components/Brands_home/FilteredHome.jsx>",
                                lineNumber: 64,
                                columnNumber: 19
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "<[project]/components/Brands_home/FilteredHome.jsx>",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/components/Brands_home/FilteredHome.jsx>",
                    lineNumber: 59,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/components/Brands_home/FilteredHome.jsx>",
            lineNumber: 30,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/components/Brands_home/FilteredHome.jsx>",
        lineNumber: 28,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = FilteredHome;

})()),
"[project]/components/Banners_tailwind/Three_part_gallery/Emoji_picker/index.jsx (ecmascript, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>Banner_small
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
function Banner_small() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["Fragment"], {
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "main__container",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "flex flex-col justify-center items-center bg-indigo-600 mt-10 rounded-md",
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h1", {
                            className: "text-lg leading-6 text-white pt-5",
                            children: "What is your choise for today?"
                        }, void 0, false, {
                            fileName: "<[project]/components/Banners_tailwind/Three_part_gallery/Emoji_picker/index.jsx>",
                            lineNumber: 11,
                            columnNumber: 25
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "flex items-center justify-between gap-x-12 px-6 py-2.5 sm:px-3.5 rounded-md mt-5 pb-5",
                            children: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "h-20 w-20  bg-gray-100 rounded-full "
                                }, void 0, false, {
                                    fileName: "<[project]/components/Banners_tailwind/Three_part_gallery/Emoji_picker/index.jsx>",
                                    lineNumber: 17,
                                    columnNumber: 29
                                }, this),
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "h-20 w-20 bg-gray-100 rounded-full "
                                }, void 0, false, {
                                    fileName: "<[project]/components/Banners_tailwind/Three_part_gallery/Emoji_picker/index.jsx>",
                                    lineNumber: 18,
                                    columnNumber: 29
                                }, this),
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "h-20 w-20  bg-gray-100 rounded-full "
                                }, void 0, false, {
                                    fileName: "<[project]/components/Banners_tailwind/Three_part_gallery/Emoji_picker/index.jsx>",
                                    lineNumber: 19,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/components/Banners_tailwind/Three_part_gallery/Emoji_picker/index.jsx>",
                            lineNumber: 15,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/components/Banners_tailwind/Three_part_gallery/Emoji_picker/index.jsx>",
                    lineNumber: 10,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "<[project]/components/Banners_tailwind/Three_part_gallery/Emoji_picker/index.jsx>",
                lineNumber: 9,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "<[project]/components/Banners_tailwind/Three_part_gallery/Emoji_picker/index.jsx>",
            lineNumber: 8,
            columnNumber: 13
        }, this)
    }, void 0, false);
}

})()),
"[project]/components/getUser/getUser.jsx (ecmascript, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "getUserData": ()=>getUserData
});
const getUserData = async (userId)=>{
    try {
        const res = await fetch(`https://bonusnumber1.com/api/user/read_one.php?id=${userId}`);
        if (res.ok) {
            const responseData = await res.json();
            return responseData;
        } else {
            console.error("Failed to fetch data:", res.status);
            return null;
        }
    } catch (error) {
        console.error("An error occurred:", error);
        return null;
    }
};

})()),
"[project]/components/getUser/updateGeo.jsx (ecmascript, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "updateGeo": ()=>updateGeo
});
const updateGeo = async (userId, country)=>{
    const url = 'https://bonusnumber1.com/api/user/update_geo.php';
    const data = {
        id: userId,
        country: country
    };
    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const responseData = await response.json();
        console.log('ГЕО успешно обновлено:', responseData);
    } catch (error) {
        console.error('Ошибка при обновлении ГЕО:', error);
    }
};

})()),
"[project]/components/geo-identifier/index.jsx (ecmascript, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>ResponsiveDialog
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/Button/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Dialog$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/Dialog/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogActions$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/DialogActions/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogContent$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/DialogContent/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogContentText$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/DialogContentText/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogTitle$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/DialogTitle/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$useMediaQuery$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/useMediaQuery/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/styles/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getUser$2f$updateGeo$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/getUser/updateGeo.jsx (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$select$2f$dist$2f$react$2d$select$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-select/dist/react-select.esm.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$select$2d$country$2d$list$2f$country$2d$list$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-select-country-list/country-list.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$country$2d$flag$2f$dist$2f$react$2d$country$2d$flag$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-country-flag/dist/react-country-flag.esm.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Loader.jsx (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function getCountryOptions() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$select$2d$country$2d$list$2f$country$2d$list$2e$js__$28$ecmascript$29$__["default"]().getData().map((option)=>({
            ...option,
            label: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                style: {
                    display: "flex",
                    alignItems: "center"
                },
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$country$2d$flag$2f$dist$2f$react$2d$country$2d$flag$2e$esm$2e$js__$28$ecmascript$29$__["default"], {
                        countryCode: option.value,
                        svg: true,
                        style: {
                            marginRight: 8,
                            width: "2em",
                            height: "1em"
                        }
                    }, void 0, false, {
                        fileName: "<[project]/components/geo-identifier/index.jsx>",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this),
                    option.label,
                    " (",
                    option.value,
                    ")"
                ]
            }, void 0, true, {
                fileName: "<[project]/components/geo-identifier/index.jsx>",
                lineNumber: 24,
                columnNumber: 9
            }, this)
        }));
}
function ResponsiveDialog() {
    const [open, setOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__.useState(false);
    const [loading, setLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__.useState(false);
    const theme = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$index$2e$js__$28$ecmascript$29$__["useTheme"]();
    const fullScreen = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$useMediaQuery$2f$index$2e$js__$28$ecmascript$29$__["default"](theme.breakpoints.down("md"));
    const { t } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__["useTranslation"]();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__.useEffect(()=>{
        setOpen(true);
    }, []);
    const [userData, setUserData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__.useState(null);
    const initialCountryCode = localStorage.getItem("country_data");
    const options = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__.useMemo(()=>getCountryOptions(), []);
    const initialValue = options.find((option)=>option.value === initialCountryCode);
    const [value, setValue] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__.useState(initialValue);
    const changeHandler = (value)=>{
        setValue(value);
        console.log(value);
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__.useEffect(()=>{
        const storedData = localStorage.getItem("userData");
        if (storedData) {
            setUserData(JSON.parse(storedData));
        }
    }, []);
    const handleClose = ()=>{
        setOpen(false);
    };
    const handleYes = async ()=>{
        const an = value && value !== "N/A" && value !== "" ? value : localStorage.getItem("country_data");
        setOpen(false);
        setLoading(true);
        if (userData.geo_approve === null || userData.geo_approve === "") {
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getUser$2f$updateGeo$2e$jsx__$28$ecmascript$29$__["updateGeo"](localStorage.getItem("user_id"), an.value);
                localStorage.setItem("country_brands", an.value);
                console.log("====", an);
                window.location.reload();
            } catch (error) {
                console.error("Failed to update geo:", error);
            } finally{
                setLoading(false);
            }
        } else {
            setLoading(false);
        }
    };
    const [show, setShow] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__.useState(true);
    const handleNo = ()=>{
        setShow(!show);
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__.Fragment, {
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Dialog$2f$index$2e$js__$28$ecmascript$29$__["default"], {
            fullScreen: fullScreen,
            open: open,
            onClose: handleClose,
            "aria-labelledby": "responsive-dialog-title",
            className: "modal-country",
            children: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogTitle$2f$index$2e$js__$28$ecmascript$29$__["default"], {
                    id: "responsive-dialog-title",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("strong", {
                        className: "title-brands",
                        children: `${t("Are you from")} ${localStorage.getItem("country_name")}?`
                    }, void 0, false, {
                        fileName: "<[project]/components/geo-identifier/index.jsx>",
                        lineNumber: 110,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/components/geo-identifier/index.jsx>",
                    lineNumber: 109,
                    columnNumber: 9
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogContent$2f$index$2e$js__$28$ecmascript$29$__["default"], {
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogContentText$2f$index$2e$js__$28$ecmascript$29$__["default"], {
                        children: t("Not right? Pick your actual country of residence from the list below to see the relevant offers!")
                    }, void 0, false, {
                        fileName: "<[project]/components/geo-identifier/index.jsx>",
                        lineNumber: 115,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/components/geo-identifier/index.jsx>",
                    lineNumber: 114,
                    columnNumber: 9
                }, this),
                show && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogActions$2f$index$2e$js__$28$ecmascript$29$__["default"], {
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$index$2e$js__$28$ecmascript$29$__["default"], {
                            className: "btn btn-secondary",
                            onClick: handleNo,
                            children: t("Choose my Country")
                        }, void 0, false, {
                            fileName: "<[project]/components/geo-identifier/index.jsx>",
                            lineNumber: 121,
                            columnNumber: 13
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$index$2e$js__$28$ecmascript$29$__["default"], {
                            className: "btn btn-primary",
                            onClick: handleYes,
                            autoFocus: true,
                            children: t("Yes")
                        }, void 0, false, {
                            fileName: "<[project]/components/geo-identifier/index.jsx>",
                            lineNumber: 123,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/components/geo-identifier/index.jsx>",
                    lineNumber: 120,
                    columnNumber: 11
                }, this),
                !show && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogActions$2f$index$2e$js__$28$ecmascript$29$__["default"], {
                    className: "flex items-center",
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$select$2f$dist$2f$react$2d$select$2e$esm$2e$js__$28$ecmascript$29$__["default"], {
                            className: "RRR",
                            options: options,
                            value: value,
                            onChange: changeHandler,
                            getOptionLabel: (option)=>option.label,
                            getOptionValue: (option)=>option.value
                        }, void 0, false, {
                            fileName: "<[project]/components/geo-identifier/index.jsx>",
                            lineNumber: 130,
                            columnNumber: 13
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$index$2e$js__$28$ecmascript$29$__["default"], {
                            className: "btn btn-primary",
                            onClick: handleYes,
                            autoFocus: true,
                            children: t("Confirm")
                        }, void 0, false, {
                            fileName: "<[project]/components/geo-identifier/index.jsx>",
                            lineNumber: 138,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/components/geo-identifier/index.jsx>",
                    lineNumber: 129,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/components/geo-identifier/index.jsx>",
            lineNumber: 102,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/components/geo-identifier/index.jsx>",
        lineNumber: 101,
        columnNumber: 5
    }, this);
}

})()),
"[project]/components/modal/index.jsx (ecmascript, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>BasicModal
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/Box/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/Button/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/Typography/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Modal$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/Modal/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$whl2$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$whl2$2e$png__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/public/whl2.png.mjs/(IMAGE)/[project]/public/whl2.png (static) (structured image object, ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$index$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/phosphor-react/dist/index.esm.js (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
;
;
;
;
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4
};
function BasicModal() {
    const [open, setOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__.useState(true);
    const handleOpen = ()=>setOpen(true);
    const handleClose = ()=>setOpen(false);
    const { t } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__["useTranslation"]();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Modal$2f$index$2e$js__$28$ecmascript$29$__["default"], {
            open: open,
            onClose: handleClose,
            "aria-labelledby": "modal-modal-title",
            "aria-describedby": "modal-modal-description",
            className: "p-0 modal-brands",
            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$index$2e$js__$28$ecmascript$29$__["default"], {
                sx: style,
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["XSquare"], {
                        className: "ml-auto mr-1 mt-1 cursor-pointer",
                        onClick: handleClose,
                        size: 32
                    }, void 0, false, {
                        fileName: "<[project]/components/modal/index.jsx>",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "p-3 pb-10 relative",
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$index$2e$js__$28$ecmascript$29$__["default"], {
                                className: "title-brands",
                                id: "modal-modal-title",
                                variant: "h6",
                                component: "h2",
                                children: t("Unlock Up To $20: Deposit Now With Your Registered Brands")
                            }, void 0, false, {
                                fileName: "<[project]/components/modal/index.jsx>",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$index$2e$js__$28$ecmascript$29$__["default"], {
                                id: "modal-modal-description",
                                className: "mb-3",
                                sx: {
                                    mt: 2
                                },
                                children: t("Select from the list of registered brands to complete your first deposit and receive up to $20 in rewards. Take advantage of this special offer now!")
                            }, void 0, false, {
                                fileName: "<[project]/components/modal/index.jsx>",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                onClick: handleClose,
                                className: "btn btn-primary mt-3",
                                href: `/brands`,
                                children: t("Show Brands")
                            }, void 0, false, {
                                fileName: "<[project]/components/modal/index.jsx>",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/components/modal/index.jsx>",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__["default"], {
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$whl2$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$whl2$2e$png__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                        width: 384,
                        height: 203,
                        alt: "wheel"
                    }, void 0, false, {
                        fileName: "<[project]/components/modal/index.jsx>",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/components/modal/index.jsx>",
                lineNumber: 40,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "<[project]/components/modal/index.jsx>",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/components/modal/index.jsx>",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}

})()),
"[project]/components/Header_tailwind/index.jsx (ecmascript, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "Header_tailwind": ()=>Header_tailwind
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$core$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/swr/core/dist/index.mjs (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$i18n$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/i18n.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navigation$2e$tsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Navigation.tsx (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$logo3$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$logo3$2e$png__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/public/logo3.png.mjs/(IMAGE)/[project]/public/logo3.png (static) (structured image object, ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageSwitcher$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/switcher/LanguageSwitcher.jsx (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$BrandsSwitcher$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/switcher/BrandsSwitcher.jsx (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$header$2f$MenuPages$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/header/MenuPages/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getUser$2f$getUser$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/getUser/getUser.jsx (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$header$2f$NavItems$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/header/NavItems/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$header$2f$MenuLanguages$2f$index$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/header/MenuLanguages/index.jsx (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$CurrencyExchangeOutlined$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/icons-material/CurrencyExchangeOutlined.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$AccountBalanceWalletOutlined$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/icons-material/AccountBalanceWalletOutlined.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$ShoppingBagOutlined$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/icons-material/ShoppingBagOutlined.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Badge$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/Badge/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getUser$2f$updateGeo$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/getUser/updateGeo.jsx (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$geo$2d$identifier$2f$index$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/geo-identifier/index.jsx (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modal$2f$index$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/modal/index.jsx (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$KeitaroIframe$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/KeitaroIframe.jsx (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getBrands$2f$getBrands2$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/getBrands/getBrands2.jsx (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/switcher/LanguageContext.jsx (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$analytics$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@vercel/analytics/dist/index.mjs (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const Header_tailwind = ()=>{
    const { t } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__["useTranslation"]();
    const items = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$header$2f$NavItems$2f$index$2e$js__$28$ecmascript$29$__["navItems"](t);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const toggleMobileMenu = ()=>{
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const closeMobileMenu = ()=>{
        setIsMobileMenuOpen(false);
    };
    const [isLoading, setIsLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](true);
    const [user, setUser] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](null);
    const getParamsFromUrl = ()=>{
        let params = new URLSearchParams(window.location.search);
        if (!params.has("keyword")) {
            const hash = window.location.hash;
            if (hash.includes("?")) {
                params = new URLSearchParams(hash.split("?")[1]);
            }
        }
        return params;
    };
    let urlParams;
    if (typeof window !== "undefined") {
        urlParams = getParamsFromUrl();
    } else {
        urlParams = new URLSearchParams();
    }
    const [load, setLoad] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const [keywordValue, setKeywordValue] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](null);
    const idUserParam = urlParams.get("keyword");
    const ad_campaign = urlParams.get("ad_campaign_id");
    const userData = keywordValue !== null ? keywordValue : idUserParam;
    const [dataUser, setDataUser] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]();
    const [d, setD] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        if (ad_campaign !== null) {
            localStorage.setItem("ad_campaign_id", ad_campaign);
        }
        async function updateUserData(data) {
            localStorage.setItem("user_id", data);
            const partners = [
                "partner1039",
                "partner1043",
                "partner1044",
                "CLD_VIP"
            ];
            partners.forEach((partner)=>{
                if (data.includes(partner)) {
                    localStorage.setItem("source", partner);
                }
            });
            setUser(data);
            const dataUser = await __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getUser$2f$getUser$2e$jsx__$28$ecmascript$29$__["getUserData"](data);
            if (dataUser) {
                localStorage.setItem("userData", JSON.stringify(dataUser));
                setDataUser(dataUser);
                setLoad(true);
            }
            if (d && typeof d === "string" && d.includes("Json")) {
                const dataUser = await __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getUser$2f$getUser$2e$jsx__$28$ecmascript$29$__["getUserData"](data);
                if (dataUser) {
                    setDataUser(dataUser);
                    setLoad(true);
                }
            }
        }
        if (idUserParam !== null) {
            updateUserData(idUserParam);
        } else if (keywordValue !== null) {
            updateUserData(keywordValue);
        } else if (typeof window !== "undefined") {
            const keyword = localStorage.getItem("savedUrl");
            if (keyword) {
                const pairs = keyword.split("&");
                const keywordPair = pairs.find((pair)=>pair.startsWith("?keyword="));
                if (keywordPair) {
                    const keywordValue2 = keywordPair.split("=")[1];
                    updateUserData(keywordValue2);
                    setKeywordValue(userData);
                    setIsLoading(true);
                }
            }
        }
    }, [
        d
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        const currentUrl = window.location.href;
        const urlObj = new URL(currentUrl);
        const searchParams = new URLSearchParams(urlObj.search);
        const indexOfQuestionMark = currentUrl.indexOf("?");
        const newUrl2 = indexOfQuestionMark !== -1 ? currentUrl.substring(0, indexOfQuestionMark) : currentUrl;
        window.history.replaceState({}, document.title, newUrl2);
        const newUrlWithSource = "?" + (searchParams.toString() ? searchParams.toString() + "&" : `keyword=${localStorage.getItem("user_id")}&`) + `source=${localStorage.getItem("source")}` + `&ad_campaign_id=${localStorage.getItem("ad_campaign_id")}`;
        if (newUrlWithSource.includes("keyword")) {
            localStorage.setItem("savedUrl", newUrlWithSource);
            localStorage.setItem("token", "give");
        }
        const tokenGive = localStorage.getItem("token");
        if (tokenGive !== "give") {
            localStorage.setItem("savedUrl", newUrlWithSource);
        }
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        const handleMessage = (event)=>{
            if (event.origin !== "https://topbon.us") {}
            const jsonData = event.data;
            setD(typeof jsonData === "string" ? jsonData : "");
        };
        window.addEventListener("message", handleMessage);
        return ()=>{
            window.removeEventListener("message", handleMessage);
        };
    }, []);
    const { language } = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$28$ecmascript$29$__["useLanguage"]();
    const [brands, setBrands] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]([]);
    const { data, error } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$core$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["default"]([
        "brands",
        language
    ], ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getBrands$2f$getBrands2$2e$jsx__$28$ecmascript$29$__["getBrands"](language), {
        initialData: brands
    });
    const [links, setLinks] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]([]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        if (data) {
            setBrands(data);
            setLinks(data.map((brand)=>brand.GoBig));
        }
    }, [
        data
    ]);
    const [showResponsiveDialog, setShowResponsiveDialog] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const [showBasicModal, setShowBasicModal] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        const interval = setInterval(()=>{
            if (!showResponsiveDialog) {
                setShowBasicModal(true);
            }
        }, 20000);
        return ()=>clearInterval(interval);
    }, [
        showResponsiveDialog
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("header", {
        className: "header",
        children: [
            load ? dataUser.geo_approve === null || dataUser.geo_approve === "" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$geo$2d$identifier$2f$index$2e$jsx__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "<[project]/components/Header_tailwind/index.jsx>",
                lineNumber: 220,
                columnNumber: 11
            }, this) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {}, void 0, false, {
                fileName: "<[project]/components/Header_tailwind/index.jsx>",
                lineNumber: 222,
                columnNumber: 11
            }, this) : "",
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "header__bg",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "header__container ",
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "logo flex items-center",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                href: "/",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__["default"], {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$logo3$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$logo3$2e$png__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                    alt: "logo",
                                    width: 150,
                                    loading: "lazy"
                                }, void 0, false, {
                                    fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                    lineNumber: 233,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                lineNumber: 232,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/components/Header_tailwind/index.jsx>",
                            lineNumber: 231,
                            columnNumber: 11
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "account-items ml-auto flex items-center",
                            children: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "flex flex-col",
                                    children: load ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Badge$2f$index$2e$js__$28$ecmascript$29$__["default"], {
                                        badgeContent: `${dataUser.balance}$`,
                                        color: "secondary",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                            href: `/personal`,
                                            className: "balance flex",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$AccountBalanceWalletOutlined$2e$js__$28$ecmascript$29$__["default"], {
                                                        className: "mr-2",
                                                        size: 18
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                        lineNumber: 243,
                                                        columnNumber: 23
                                                    }, this),
                                                    " ",
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                        children: t("My Wallet")
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                        lineNumber: 247,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                            lineNumber: 241,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                        lineNumber: 240,
                                        columnNumber: 17
                                    }, this) : ""
                                }, void 0, false, {
                                    fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                    lineNumber: 238,
                                    columnNumber: 13
                                }, this),
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "flex flex-col ml-8",
                                    children: load ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Badge$2f$index$2e$js__$28$ecmascript$29$__["default"], {
                                        badgeContent: `${dataUser.tickets}`,
                                        color: "primary",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                            href: `/fortune`,
                                            className: "spins flex",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$CurrencyExchangeOutlined$2e$js__$28$ecmascript$29$__["default"], {
                                                        className: "mr-2",
                                                        size: 18
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                        lineNumber: 260,
                                                        columnNumber: 23
                                                    }, this),
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                        children: t("Fortune Wheel")
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                        lineNumber: 264,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                            lineNumber: 258,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                        lineNumber: 257,
                                        columnNumber: 17
                                    }, this) : ""
                                }, void 0, false, {
                                    fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                    lineNumber: 255,
                                    columnNumber: 13
                                }, this),
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "flex flex-col ml-8",
                                    children: load && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                        href: `/shop`,
                                        className: "cards-shop flex",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$ShoppingBagOutlined$2e$js__$28$ecmascript$29$__["default"], {
                                                    className: "mr-2",
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                    lineNumber: 276,
                                                    columnNumber: 21
                                                }, this),
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                    children: t("Cards Shop")
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                    lineNumber: 277,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                        lineNumber: 274,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                    lineNumber: 272,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/components/Header_tailwind/index.jsx>",
                            lineNumber: 237,
                            columnNumber: 11
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__["I18nextProvider"], {
                            i18n: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$i18n$2e$js__$28$ecmascript$29$__["default"],
                            children: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$header$2f$MenuLanguages$2f$index$2e$jsx__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                    lineNumber: 285,
                                    columnNumber: 13
                                }, this),
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "d-none",
                                    children: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "somelng",
                                            children: [
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageSwitcher$2e$jsx__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                    fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                    lineNumber: 288,
                                                    columnNumber: 17
                                                }, this),
                                                " "
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                            lineNumber: 287,
                                            columnNumber: 15
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$BrandsSwitcher$2e$jsx__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                            lineNumber: 290,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                    lineNumber: 286,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/components/Header_tailwind/index.jsx>",
                            lineNumber: 284,
                            columnNumber: 11
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$header$2f$MenuPages$2f$index$2e$js__$28$ecmascript$29$__["default"], {
                            userId: user,
                            t: t
                        }, void 0, false, {
                            fileName: "<[project]/components/Header_tailwind/index.jsx>",
                            lineNumber: 294,
                            columnNumber: 11
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "mobile-none",
                            children: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                                    className: `burger-icon ${isMobileMenuOpen ? "open" : ""}`,
                                    onClick: toggleMobileMenu,
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "burger-lines",
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "line line1"
                                            }, void 0, false, {
                                                fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                lineNumber: 302,
                                                columnNumber: 17
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "line line2"
                                            }, void 0, false, {
                                                fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                lineNumber: 303,
                                                columnNumber: 17
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "line line3"
                                            }, void 0, false, {
                                                fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                lineNumber: 304,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                        lineNumber: 301,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                    lineNumber: 297,
                                    columnNumber: 13
                                }, this),
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "menu-mobile",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: `mobile-menu ${isMobileMenuOpen ? "open" : ""}`,
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navigation$2e$tsx__$28$ecmascript$29$__["Navigation"], {
                                            navLinks: items.map((item)=>({
                                                    ...item,
                                                    label: item.label
                                                })),
                                            onLinkClick: closeMobileMenu
                                        }, void 0, false, {
                                            fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                            lineNumber: 309,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                        lineNumber: 308,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                    lineNumber: 307,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/components/Header_tailwind/index.jsx>",
                            lineNumber: 296,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/components/Header_tailwind/index.jsx>",
                    lineNumber: 230,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/components/Header_tailwind/index.jsx>",
                lineNumber: 229,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "header__container menu-desctop",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navigation$2e$tsx__$28$ecmascript$29$__["Navigation"], {
                    navLinks: items.map((item)=>({
                            ...item,
                            label: item.label
                        }))
                }, void 0, false, {
                    fileName: "<[project]/components/Header_tailwind/index.jsx>",
                    lineNumber: 322,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/components/Header_tailwind/index.jsx>",
                lineNumber: 321,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/components/Header_tailwind/index.jsx>",
        lineNumber: 217,
        columnNumber: 5
    }, this);
};
;

})()),
"[project]/components/Banners_tailwind/TopBrands/index.jsx (ecmascript, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>TopBrands
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$core$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/swr/core/dist/index.mjs (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Loader.jsx (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2f$shuffle$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/lodash/shuffle.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/uuid/dist/esm-node/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slider$2f$Card$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/slider/Card.jsx (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/switcher/LanguageContext.jsx (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getBrands$2f$getBrands2$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/getBrands/getBrands2.jsx (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$slick$2f$lib$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-slick/lib/index.js (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function TopBrands() {
    const [newUrl, setNewUrl] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("");
    const [source, setSource] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("");
    const [loading, setLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](true);
    const [brands, setBrands] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]([]);
    const [currentBrandIndex, setCurrentBrandIndex] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](0);
    const [fade, setFade] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](true);
    const { language } = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$28$ecmascript$29$__["useLanguage"]();
    const { t } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__["useTranslation"]();
    const settings = {
        infinite: true,
        speed: 500,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        const currentUrl = window.location.href;
        const indexOfQuestionMark = currentUrl.indexOf("?");
        const newUrl2 = indexOfQuestionMark !== -1 ? currentUrl.substring(0, indexOfQuestionMark) : currentUrl;
        window.history.replaceState({}, document.title, newUrl2);
        const urlObj = new URL(currentUrl);
        const searchParams = new URLSearchParams(urlObj.search);
        searchParams.delete("brand");
        const currentKeyword = searchParams.get("keyword");
        const partners = [
            "partner1039",
            "partner1043",
            "partner1044",
            "CLD_VIP"
        ];
        function setPartnerSource(keyword) {
            const partner = partners.find((p)=>keyword.includes(p));
            if (partner) {
                localStorage.setItem("source", partner);
                setSource(partner);
                searchParams.set("source", partner);
            } else {
                setSource("0");
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
    }, [
        language
    ]);
    const categoryBrands = {
        key1: "Segment2",
        key2: "Premium"
    };
    const { data, error } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$core$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["default"]([
        "brands",
        language
    ], ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getBrands$2f$getBrands2$2e$jsx__$28$ecmascript$29$__["getBrands"](language), {
        initialData: brands
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        if (data) {
            const filteredData = data.filter((rowData)=>rowData[categoryBrands.key1] === categoryBrands.key2);
            console.log("FILTER", filteredData);
            setBrands(filteredData);
            setLoading(false);
        }
    }, [
        data,
        categoryBrands.key1,
        categoryBrands.key2
    ]);
    const shuffledBrands = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2f$shuffle$2e$js__$28$ecmascript$29$__["default"](brands);
    const cards2 = shuffledBrands.slice(0, 6).map((brand)=>({
            key: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$index$2e$js__$28$ecmascript$29$__["v4"](),
            content: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slider$2f$Card$2e$jsx__$28$ecmascript$29$__["default"], {
                imagen: `/brands/${brand.CasinoBrand}.png`,
                link: brand.GoBig,
                bonus: brand.OurOfferContent
            }, void 0, false, {
                fileName: "<[project]/components/Banners_tailwind/TopBrands/index.jsx>",
                lineNumber: 104,
                columnNumber: 13
            }, this)
        }));
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        const interval = setInterval(()=>{
            setFade(false);
            setTimeout(()=>{
                setCurrentBrandIndex((prevIndex)=>(prevIndex + 1) % brands.length);
                setFade(true);
            }, 500);
        }, 5000000);
        return ()=>clearInterval(interval);
    }, [
        brands.length
    ]);
    console.log("BRANDS", brands);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["Fragment"], {
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "topbr-tw pt-32 xl:pt-5 mb-10",
            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "main__container",
                children: loading ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2e$jsx__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "<[project]/components/Banners_tailwind/TopBrands/index.jsx>",
                    lineNumber: 131,
                    columnNumber: 25
                }, this) : cards2 && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "flex flex-col md:flex-row lg:space-y-0 lg:items-stretch",
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "slider-left w-full md:w-2/3",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$slick$2f$lib$2f$index$2e$js__$28$ecmascript$29$__["default"], {
                                ...settings,
                                children: brands.length > 0 && brands.map((rowData, index)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "background overflow-hidden bg-indigo-600 py-10 rounded-xl h-full flex flex-col justify-between",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "mx-auto max-w-7xl px-6 lg:px-8 flex flex-col",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "mx-auto max-w-2xl lg:mx-0 flex flex-row",
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "basis-2/3",
                                                        children: [
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h1", {
                                                                className: "text-4xl font-semibold tracking-tight text-white ",
                                                                children: rowData.CasinoBrand
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/Banners_tailwind/TopBrands/index.jsx>",
                                                                lineNumber: 146,
                                                                columnNumber: 65
                                                            }, this),
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h5", {
                                                                className: "mt-6 text-lg leading-8 text-gray-300 font-normal",
                                                                children: rowData.OurOfferContent
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/Banners_tailwind/TopBrands/index.jsx>",
                                                                lineNumber: 149,
                                                                columnNumber: 65
                                                            }, this),
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                className: "flex mt-4",
                                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                                                    className: "",
                                                                    href: `${rowData.GoBig}/${newUrl}&creative_id=XXL_Top_New_Releases`,
                                                                    target: "_blank",
                                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                                        type: "button",
                                                                        className: "bordered-button mt-10 rounded-md bg-teal-600 px-10 py-3 text-lg text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                                                                        children: t("Play Now")
                                                                    }, void 0, false, {
                                                                        fileName: "<[project]/components/Banners_tailwind/TopBrands/index.jsx>",
                                                                        lineNumber: 158,
                                                                        columnNumber: 73
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/components/Banners_tailwind/TopBrands/index.jsx>",
                                                                    lineNumber: 153,
                                                                    columnNumber: 69
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/Banners_tailwind/TopBrands/index.jsx>",
                                                                lineNumber: 152,
                                                                columnNumber: 65
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/components/Banners_tailwind/TopBrands/index.jsx>",
                                                        lineNumber: 145,
                                                        columnNumber: 61
                                                    }, this),
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "basis-1/3 flex justify-center items-center",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__["default"], {
                                                            src: `/brands/${rowData.CasinoBrand}.png`,
                                                            alt: rowData.CasinoBrand,
                                                            width: 300,
                                                            height: 100,
                                                            loading: "lazy",
                                                            className: "target-top-new-releases"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/Banners_tailwind/TopBrands/index.jsx>",
                                                            lineNumber: 168,
                                                            columnNumber: 65
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/Banners_tailwind/TopBrands/index.jsx>",
                                                        lineNumber: 167,
                                                        columnNumber: 61
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/components/Banners_tailwind/TopBrands/index.jsx>",
                                                lineNumber: 144,
                                                columnNumber: 57
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/components/Banners_tailwind/TopBrands/index.jsx>",
                                            lineNumber: 143,
                                            columnNumber: 53
                                        }, this)
                                    }, index, false, {
                                        fileName: "<[project]/components/Banners_tailwind/TopBrands/index.jsx>",
                                        lineNumber: 139,
                                        columnNumber: 49
                                    }, this))
                            }, void 0, false, {
                                fileName: "<[project]/components/Banners_tailwind/TopBrands/index.jsx>",
                                lineNumber: 136,
                                columnNumber: 37
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/components/Banners_tailwind/TopBrands/index.jsx>",
                            lineNumber: 135,
                            columnNumber: 33
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "banner-right w-full h-full md:w-1/3 flex justify-center md:justify-end",
                            children: brands.length > 0 && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "djinn overflow-hidden bg-blue-600 py-5 rounded-xl flex flex-col justify-between",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: " mx-auto max-w-7xl px-6 lg:px-8 flex justify-center items-end h-64",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "mx-auto max-w-2xl lg:mx-0 self-end w-full",
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex flex-col items-center",
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h2", {
                                                        className: "text-3xl font-bold tracking-tight text-white text-center",
                                                        children: "Your Bonus is Ready"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/Banners_tailwind/TopBrands/index.jsx>",
                                                        lineNumber: 189,
                                                        columnNumber: 57
                                                    }, this),
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                        className: "text-md font-light leading-8 text-gray-300 text-center",
                                                        children: "Click below to claim your magical reward!"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/Banners_tailwind/TopBrands/index.jsx>",
                                                        lineNumber: 192,
                                                        columnNumber: 57
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/components/Banners_tailwind/TopBrands/index.jsx>",
                                                lineNumber: 188,
                                                columnNumber: 53
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex justify-center mt-2",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                    type: "button",
                                                    className: " rounded-md bg-teal-600 px-4 py-2 text-md text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                                                    children: "Bonus Ready"
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/Banners_tailwind/TopBrands/index.jsx>",
                                                    lineNumber: 197,
                                                    columnNumber: 57
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/components/Banners_tailwind/TopBrands/index.jsx>",
                                                lineNumber: 196,
                                                columnNumber: 53
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/components/Banners_tailwind/TopBrands/index.jsx>",
                                        lineNumber: 187,
                                        columnNumber: 49
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/components/Banners_tailwind/TopBrands/index.jsx>",
                                    lineNumber: 186,
                                    columnNumber: 45
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/components/Banners_tailwind/TopBrands/index.jsx>",
                                lineNumber: 185,
                                columnNumber: 41
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/components/Banners_tailwind/TopBrands/index.jsx>",
                            lineNumber: 183,
                            columnNumber: 33
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/components/Banners_tailwind/TopBrands/index.jsx>",
                    lineNumber: 134,
                    columnNumber: 29
                }, this)
            }, void 0, false, {
                fileName: "<[project]/components/Banners_tailwind/TopBrands/index.jsx>",
                lineNumber: 129,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "<[project]/components/Banners_tailwind/TopBrands/index.jsx>",
            lineNumber: 128,
            columnNumber: 13
        }, this)
    }, void 0, false);
}

})()),
"[project]/components/Banners_tailwind/Banner_small/index.jsx (ecmascript, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>Banner_small
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$New$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$New$2e$png__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/public/New.png.mjs/(IMAGE)/[project]/public/New.png (static) (structured image object, ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
function Banner_small() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["Fragment"], {
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "main__container",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "flex items-center gap-x-6 bg-indigo-600 px-6 py-2.5 sm:px-3.5 rounded-md mt-10",
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__["default"], {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$New$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$New$2e$png__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                alt: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$New$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$New$2e$png__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                width: 50,
                                height: 50,
                                loading: "lazy",
                                className: "target-top-new-releases"
                            }, void 0, false, {
                                fileName: "<[project]/components/Banners_tailwind/Banner_small/index.jsx>",
                                lineNumber: 14,
                                columnNumber: 29
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                className: "text-sm leading-6 text-white",
                                children: "Uncover the latest casinos and be among the first to play!"
                            }, void 0, false, {
                                fileName: "<[project]/components/Banners_tailwind/Banner_small/index.jsx>",
                                lineNumber: 22,
                                columnNumber: 29
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "flex flex-1 justify-end",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                                    type: "button",
                                    className: "bordered-button rounded-md bg-teal-600 px-4 py-2 text-md text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                                    children: "Show more"
                                }, void 0, false, {
                                    fileName: "<[project]/components/Banners_tailwind/Banner_small/index.jsx>",
                                    lineNumber: 27,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/components/Banners_tailwind/Banner_small/index.jsx>",
                                lineNumber: 26,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/components/Banners_tailwind/Banner_small/index.jsx>",
                        lineNumber: 13,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/components/Banners_tailwind/Banner_small/index.jsx>",
                    lineNumber: 12,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "<[project]/components/Banners_tailwind/Banner_small/index.jsx>",
                lineNumber: 11,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "<[project]/components/Banners_tailwind/Banner_small/index.jsx>",
            lineNumber: 10,
            columnNumber: 13
        }, this)
    }, void 0, false);
}

})()),
"[project]/components/Banners_tailwind/Brands_carousel/index.jsx (ecmascript, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>Brand_carousel
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$core$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/swr/core/dist/index.mjs (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Loader.jsx (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/switcher/LanguageContext.jsx (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getBrands$2f$getBrands2$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/getBrands/getBrands2.jsx (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$slick$2f$lib$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-slick/lib/index.js (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
;
;
;
;
;
;
function Brand_carousel() {
    const [newUrl, setNewUrl] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("");
    const [source, setSource] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("");
    const [loading, setLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](true);
    const [brands, setBrands] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]([]);
    const [currentBrandIndex, setCurrentBrandIndex] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](0);
    const [fade, setFade] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](true);
    const { language } = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$28$ecmascript$29$__["useLanguage"]();
    const { t } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__["useTranslation"]();
    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        const currentUrl = window.location.href;
        const indexOfQuestionMark = currentUrl.indexOf("?");
        const newUrl2 = indexOfQuestionMark !== -1 ? currentUrl.substring(0, indexOfQuestionMark) : currentUrl;
        window.history.replaceState({}, document.title, newUrl2);
        const urlObj = new URL(currentUrl);
        const searchParams = new URLSearchParams(urlObj.search);
        searchParams.delete("brand");
        const currentKeyword = searchParams.get("keyword");
        const partners = [
            "partner1039",
            "partner1043",
            "partner1044",
            "CLD_VIP"
        ];
        function setPartnerSource(keyword) {
            const partner = partners.find((p)=>keyword.includes(p));
            if (partner) {
                localStorage.setItem("source", partner);
                setSource(partner);
                searchParams.set("source", partner);
            } else {
                setSource("0");
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
    }, [
        language
    ]);
    const categoryBrands = {
        key1: "Segment2",
        key2: "Sandbox"
    };
    const { data, error } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$core$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["default"]([
        "brands",
        language
    ], ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getBrands$2f$getBrands2$2e$jsx__$28$ecmascript$29$__["getBrands"](language), {
        initialData: brands
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        if (data) {
            const filteredData = data.filter((rowData)=>rowData[categoryBrands.key1] === categoryBrands.key2);
            console.log("FILTER", filteredData);
            setBrands(filteredData);
            setLoading(false);
        }
    }, [
        data,
        categoryBrands.key1,
        categoryBrands.key2
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        const interval = setInterval(()=>{
            setFade(false);
            setTimeout(()=>{
                setCurrentBrandIndex((prevIndex)=>(prevIndex + 1) % brands.length);
                setFade(true);
            }, 500);
        }, 5000000);
        return ()=>clearInterval(interval);
    }, [
        brands.length
    ]);
    console.log("BRANDS", brands);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["Fragment"], {
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "mt-10 mb-10",
            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "main__container",
                children: loading ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2e$jsx__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "<[project]/components/Banners_tailwind/Brands_carousel/index.jsx>",
                    lineNumber: 144,
                    columnNumber: 25
                }, this) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "w-full brand_carousel rounded-md",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$slick$2f$lib$2f$index$2e$js__$28$ecmascript$29$__["default"], {
                            ...settings,
                            children: brands.length > 0 && brands.map((rowData, index)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "overflow-hidden  py-10 rounded-xl flex flex-col justify-between",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "mx-auto max-w-7xl px-6 lg:px-8 flex flex-col",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "mx-auto max-w-2xl lg:mx-0 flex flex-row",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                                    className: "",
                                                    href: `${rowData.GoBig}/${newUrl}&creative_id=XXL_Top_New_Releases`,
                                                    target: "_blank",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__["default"], {
                                                        src: `/brands/${rowData.CasinoBrand}.png`,
                                                        alt: rowData.CasinoBrand,
                                                        width: 300,
                                                        height: 100,
                                                        loading: "lazy",
                                                        className: "target-top-new-releases"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/Banners_tailwind/Brands_carousel/index.jsx>",
                                                        lineNumber: 164,
                                                        columnNumber: 65
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/Banners_tailwind/Brands_carousel/index.jsx>",
                                                    lineNumber: 158,
                                                    columnNumber: 61
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/components/Banners_tailwind/Brands_carousel/index.jsx>",
                                                lineNumber: 157,
                                                columnNumber: 57
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/components/Banners_tailwind/Brands_carousel/index.jsx>",
                                            lineNumber: 156,
                                            columnNumber: 53
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/components/Banners_tailwind/Brands_carousel/index.jsx>",
                                        lineNumber: 155,
                                        columnNumber: 49
                                    }, this)
                                }, index, false, {
                                    fileName: "<[project]/components/Banners_tailwind/Brands_carousel/index.jsx>",
                                    lineNumber: 151,
                                    columnNumber: 45
                                }, this))
                        }, void 0, false, {
                            fileName: "<[project]/components/Banners_tailwind/Brands_carousel/index.jsx>",
                            lineNumber: 148,
                            columnNumber: 33
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/components/Banners_tailwind/Brands_carousel/index.jsx>",
                        lineNumber: 147,
                        columnNumber: 29
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/components/Banners_tailwind/Brands_carousel/index.jsx>",
                    lineNumber: 146,
                    columnNumber: 25
                }, this)
            }, void 0, false, {
                fileName: "<[project]/components/Banners_tailwind/Brands_carousel/index.jsx>",
                lineNumber: 142,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "<[project]/components/Banners_tailwind/Brands_carousel/index.jsx>",
            lineNumber: 141,
            columnNumber: 13
        }, this)
    }, void 0, false);
}

})()),
"[project]/components/Banners_tailwind/Jackpot_banner/index.jsx (ecmascript, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>Jackpot_banner
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
function Jackpot_banner() {
    const [currentValue, setCurrentValue] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](0);
    const targetValue = 2924899349;
    const duration = 3000;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        const startTime = performance.now();
        const updateCounter = (time)=>{
            const elapsedTime = time - startTime;
            if (elapsedTime < duration) {
                setCurrentValue(Math.floor(targetValue * (elapsedTime / duration)));
                requestAnimationFrame(updateCounter);
            } else {
                setCurrentValue(targetValue);
            }
        };
        requestAnimationFrame(updateCounter);
    }, [
        targetValue,
        duration
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["Fragment"], {
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "main__container",
            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "flex flex-col items-center justify-center gap-x-6 bg-indigo-600 px-6 py-2.5 sm:px-3.5 rounded-md",
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h1", {
                            className: "text-xl sm:text-xl leading-6 text-white uppercase",
                            children: "Jackpot"
                        }, void 0, false, {
                            fileName: "<[project]/components/Banners_tailwind/Jackpot_banner/index.jsx>",
                            lineNumber: 32,
                            columnNumber: 25
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h1", {
                            className: "counter text-xl leading-6 text-white uppercase mt-1",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "flex items-center justify-center",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "text-3xl font-bold text-white",
                                    children: [
                                        "$",
                                        currentValue.toLocaleString()
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/components/Banners_tailwind/Jackpot_banner/index.jsx>",
                                    lineNumber: 37,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/components/Banners_tailwind/Jackpot_banner/index.jsx>",
                                lineNumber: 36,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/components/Banners_tailwind/Jackpot_banner/index.jsx>",
                            lineNumber: 35,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/components/Banners_tailwind/Jackpot_banner/index.jsx>",
                    lineNumber: 30,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "<[project]/components/Banners_tailwind/Jackpot_banner/index.jsx>",
                lineNumber: 29,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "<[project]/components/Banners_tailwind/Jackpot_banner/index.jsx>",
            lineNumber: 28,
            columnNumber: 13
        }, this)
    }, void 0, false);
}

})()),
"[project]/components/Banners_tailwind/Double_banners/index.jsx (ecmascript, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>Double_banners
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$core$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/swr/core/dist/index.mjs (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Loader.jsx (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2f$shuffle$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/lodash/shuffle.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/uuid/dist/esm-node/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slider$2f$Card$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/slider/Card.jsx (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/switcher/LanguageContext.jsx (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getBrands$2f$getBrands2$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/getBrands/getBrands2.jsx (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
function Double_banners() {
    const [newUrl, setNewUrl] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("");
    const [source, setSource] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("");
    const [loading, setLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](true);
    const [brands, setBrands] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]([]);
    const [brands2, setBrands2] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]([]);
    const [currentBrandIndex, setCurrentBrandIndex] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](0);
    const [fade, setFade] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](true);
    const { language } = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$28$ecmascript$29$__["useLanguage"]();
    const { t } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__["useTranslation"]();
    const settings = {
        infinite: true,
        speed: 500,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        const currentUrl = window.location.href;
        const indexOfQuestionMark = currentUrl.indexOf("?");
        const newUrl2 = indexOfQuestionMark !== -1 ? currentUrl.substring(0, indexOfQuestionMark) : currentUrl;
        window.history.replaceState({}, document.title, newUrl2);
        const urlObj = new URL(currentUrl);
        const searchParams = new URLSearchParams(urlObj.search);
        searchParams.delete("brand");
        const currentKeyword = searchParams.get("keyword");
        const partners = [
            "partner1039",
            "partner1043",
            "partner1044",
            "CLD_VIP"
        ];
        function setPartnerSource(keyword) {
            const partner = partners.find((p)=>keyword.includes(p));
            if (partner) {
                localStorage.setItem("source", partner);
                setSource(partner);
                searchParams.set("source", partner);
            } else {
                setSource("0");
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
    }, [
        language
    ]);
    const categoryBrands = {
        key1: "Segment2",
        key2: "Premium"
    };
    const categoryBrands2 = {
        key1: "High_hybrid",
        key2: "1"
    };
    const { data, error } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$core$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["default"]([
        "brands",
        language
    ], ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getBrands$2f$getBrands2$2e$jsx__$28$ecmascript$29$__["getBrands"](language), {
        initialData: brands
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        if (data) {
            const filteredData = data.filter((rowData)=>rowData[categoryBrands.key1] === categoryBrands.key2);
            console.log("FILTER", filteredData);
            setBrands(filteredData);
            setLoading(false);
        }
    }, [
        data,
        categoryBrands.key1,
        categoryBrands.key2
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        if (data) {
            const filteredData2 = data.filter((rowData)=>rowData[categoryBrands2.key1] === categoryBrands2.key2);
            console.log("FILTER2", filteredData2);
            setBrands2(filteredData2);
            setLoading(false);
            console.log("DATA:", data);
        }
    }, [
        data,
        categoryBrands2.key1,
        categoryBrands2.key2
    ]);
    const shuffledBrands = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2f$shuffle$2e$js__$28$ecmascript$29$__["default"](brands);
    const cards2 = shuffledBrands.slice(0, 6).map((brand)=>({
            key: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$index$2e$js__$28$ecmascript$29$__["v4"](),
            content: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slider$2f$Card$2e$jsx__$28$ecmascript$29$__["default"], {
                imagen: `/brands/${brand.CasinoBrand}.png`,
                link: brand.GoBig,
                bonus: brand.OurOfferContent
            }, void 0, false, {
                fileName: "<[project]/components/Banners_tailwind/Double_banners/index.jsx>",
                lineNumber: 117,
                columnNumber: 13
            }, this)
        }));
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        const interval = setInterval(()=>{
            setFade(false);
            setTimeout(()=>{
                setCurrentBrandIndex((prevIndex)=>(prevIndex + 1) % brands.length);
                setFade(true);
            }, 500);
        }, 5000000);
        return ()=>clearInterval(interval);
    }, [
        brands.length
    ]);
    console.log("BRANDS", brands);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["Fragment"], {
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "double_banners pt-5 mb-10",
            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "main__container",
                children: loading ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2e$jsx__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "<[project]/components/Banners_tailwind/Double_banners/index.jsx>",
                    lineNumber: 144,
                    columnNumber: 25
                }, this) : cards2 && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "flex flex-col md:flex-row lg:space-y-0 lg:items-stretch mb-10",
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "md:w-1/2 mr-2",
                            children: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "overflow-hidden bg-indigo-600 py-5 rounded-xl h-full flex flex-col justify-between items-center",
                                    children: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h1", {
                                            className: "text-white uppercase",
                                            children: "Biggest Jackpots"
                                        }, void 0, false, {
                                            fileName: "<[project]/components/Banners_tailwind/Double_banners/index.jsx>",
                                            lineNumber: 152,
                                            columnNumber: 41
                                        }, this),
                                        brands.length > 0 ? brands.slice(0, 1).map((rowData, index)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex mt-4 px-6 lg:px-8 justify-center",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                                    className: "",
                                                    href: `${rowData.GoBig}/${newUrl}&creative_id=XXL_Top_New_Releases`,
                                                    target: "_blank",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                        type: "button",
                                                        className: "bordered-button rounded-md bg-teal-600 px-10 py-3 text-lg text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                                                        children: t("Play Now")
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/Banners_tailwind/Double_banners/index.jsx>",
                                                        lineNumber: 162,
                                                        columnNumber: 57
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/Banners_tailwind/Double_banners/index.jsx>",
                                                    lineNumber: 157,
                                                    columnNumber: 53
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/components/Banners_tailwind/Double_banners/index.jsx>",
                                                lineNumber: 156,
                                                columnNumber: 49
                                            }, this)) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "flex px-6 lg:px-8 justify-center text-white font-black",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                children: " NO AVAILABLE BRANDS"
                                            }, void 0, false, {
                                                fileName: "<[project]/components/Banners_tailwind/Double_banners/index.jsx>",
                                                lineNumber: 173,
                                                columnNumber: 49
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/components/Banners_tailwind/Double_banners/index.jsx>",
                                            lineNumber: 172,
                                            columnNumber: 45
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/components/Banners_tailwind/Double_banners/index.jsx>",
                                    lineNumber: 149,
                                    columnNumber: 33
                                }, this),
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                    className: "mt-10",
                                    children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis necessitatibus numquam excepturi, quae veritatis quia maxime quod nostrum aliquid earum."
                                }, void 0, false, {
                                    fileName: "<[project]/components/Banners_tailwind/Double_banners/index.jsx>",
                                    lineNumber: 179,
                                    columnNumber: 37
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/components/Banners_tailwind/Double_banners/index.jsx>",
                            lineNumber: 148,
                            columnNumber: 33
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "md:w-1/2 ml-2",
                            children: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "overflow-hidden bg-indigo-600 py-5 rounded-xl h-full flex flex-col justify-between items-center",
                                    children: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h1", {
                                            className: "text-white uppercase",
                                            children: "Top Tournaments"
                                        }, void 0, false, {
                                            fileName: "<[project]/components/Banners_tailwind/Double_banners/index.jsx>",
                                            lineNumber: 185,
                                            columnNumber: 41
                                        }, this),
                                        brands2.length > 0 ? brands2.slice(0, 1).map((rowData, index)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex mt-4 px-6 lg:px-8 justify-center",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                                    className: "",
                                                    href: `${rowData.GoBig}/${newUrl}&creative_id=XXL_Top_New_Releases`,
                                                    target: "_blank",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                        type: "button",
                                                        className: "bordered-button mt-10 rounded-md bg-teal-600 px-10 py-3 text-lg text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                                                        children: t("Play Now")
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/Banners_tailwind/Double_banners/index.jsx>",
                                                        lineNumber: 195,
                                                        columnNumber: 57
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/Banners_tailwind/Double_banners/index.jsx>",
                                                    lineNumber: 190,
                                                    columnNumber: 53
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/components/Banners_tailwind/Double_banners/index.jsx>",
                                                lineNumber: 189,
                                                columnNumber: 49
                                            }, this)) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "flex mt-4 px-6 lg:px-8 justify-center text-white font-black",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                children: " NO AVAILABLE BRANDS"
                                            }, void 0, false, {
                                                fileName: "<[project]/components/Banners_tailwind/Double_banners/index.jsx>",
                                                lineNumber: 206,
                                                columnNumber: 49
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/components/Banners_tailwind/Double_banners/index.jsx>",
                                            lineNumber: 205,
                                            columnNumber: 45
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/components/Banners_tailwind/Double_banners/index.jsx>",
                                    lineNumber: 182,
                                    columnNumber: 37
                                }, this),
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                    className: "mt-10",
                                    children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis necessitatibus numquam excepturi, quae veritatis quia maxime quod nostrum aliquid earum."
                                }, void 0, false, {
                                    fileName: "<[project]/components/Banners_tailwind/Double_banners/index.jsx>",
                                    lineNumber: 212,
                                    columnNumber: 37
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/components/Banners_tailwind/Double_banners/index.jsx>",
                            lineNumber: 181,
                            columnNumber: 33
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/components/Banners_tailwind/Double_banners/index.jsx>",
                    lineNumber: 147,
                    columnNumber: 29
                }, this)
            }, void 0, false, {
                fileName: "<[project]/components/Banners_tailwind/Double_banners/index.jsx>",
                lineNumber: 142,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "<[project]/components/Banners_tailwind/Double_banners/index.jsx>",
            lineNumber: 141,
            columnNumber: 13
        }, this)
    }, void 0, false);
}

})()),
"[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx (ecmascript, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>Brands_double_carousel
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$core$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/swr/core/dist/index.mjs (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Loader.jsx (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2f$shuffle$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/lodash/shuffle.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/uuid/dist/esm-node/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slider$2f$Card$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/slider/Card.jsx (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/switcher/LanguageContext.jsx (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getBrands$2f$getBrands2$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/getBrands/getBrands2.jsx (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
function Brands_double_carousel() {
    const [newUrl, setNewUrl] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("");
    const [source, setSource] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("");
    const [loading, setLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](true);
    const [brands, setBrands] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]([]);
    const [currentBrandIndex, setCurrentBrandIndex] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](0);
    const [fade, setFade] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](true);
    const { language } = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$28$ecmascript$29$__["useLanguage"]();
    const { t } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__["useTranslation"]();
    const settings = {
        infinite: true,
        speed: 500,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        const currentUrl = window.location.href;
        const indexOfQuestionMark = currentUrl.indexOf("?");
        const newUrl2 = indexOfQuestionMark !== -1 ? currentUrl.substring(0, indexOfQuestionMark) : currentUrl;
        window.history.replaceState({}, document.title, newUrl2);
        const urlObj = new URL(currentUrl);
        const searchParams = new URLSearchParams(urlObj.search);
        searchParams.delete("brand");
        const currentKeyword = searchParams.get("keyword");
        const partners = [
            "partner1039",
            "partner1043",
            "partner1044",
            "CLD_VIP"
        ];
        function setPartnerSource(keyword) {
            const partner = partners.find((p)=>keyword.includes(p));
            if (partner) {
                localStorage.setItem("source", partner);
                setSource(partner);
                searchParams.set("source", partner);
            } else {
                setSource("0");
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
    }, [
        language
    ]);
    const categoryBrands = {
        key1: "Segment2",
        key2: "Sandbox"
    };
    const { data, error } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$core$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["default"]([
        "brands",
        language
    ], ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getBrands$2f$getBrands2$2e$jsx__$28$ecmascript$29$__["getBrands"](language), {
        initialData: brands
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        if (data) {
            const filteredData = data.filter((rowData)=>rowData[categoryBrands.key1] === categoryBrands.key2);
            console.log("FILTER", filteredData);
            setBrands(filteredData);
            setLoading(false);
        }
    }, [
        data,
        categoryBrands.key1,
        categoryBrands.key2
    ]);
    const shuffledBrands = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2f$shuffle$2e$js__$28$ecmascript$29$__["default"](brands);
    const cards2 = shuffledBrands.slice(0, 6).map((brand)=>({
            key: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$index$2e$js__$28$ecmascript$29$__["v4"](),
            content: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slider$2f$Card$2e$jsx__$28$ecmascript$29$__["default"], {
                imagen: `/brands/${brand.CasinoBrand}.png`,
                link: brand.GoBig,
                bonus: brand.OurOfferContent
            }, void 0, false, {
                fileName: "<[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx>",
                lineNumber: 102,
                columnNumber: 13
            }, this)
        }));
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        const interval = setInterval(()=>{
            setFade(false);
            setTimeout(()=>{
                setCurrentBrandIndex((prevIndex)=>(prevIndex + 1) % brands.length);
                setFade(true);
            }, 500);
        }, 5000000);
        return ()=>clearInterval(interval);
    }, [
        brands.length
    ]);
    console.log("BRANDS", brands);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["Fragment"], {
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "brands_rows pt-10",
            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "main__container",
                children: loading ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2e$jsx__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "<[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx>",
                    lineNumber: 129,
                    columnNumber: 25
                }, this) : cards2 && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "flex flex-col md:flex-row lg:space-y-0 lg:items-stretch",
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "w-full md:w-1/2 mr-2",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "mx-auto max-w-2xl pb-5 pt-5 md:pt-20 sm:pb-5 lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:pt-32",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "",
                                    children: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                            className: "mt-4 text-4xl font-bold tracking-tight text-gray-900",
                                            children: "All in the Details"
                                        }, void 0, false, {
                                            fileName: "<[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx>",
                                            lineNumber: 136,
                                            columnNumber: 45
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                            className: "mt-4 text-gray-500",
                                            children: "We've obsessed over every detail of this handcrafted journal to bring you the best materials for daily use."
                                        }, void 0, false, {
                                            fileName: "<[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx>",
                                            lineNumber: 137,
                                            columnNumber: 45
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx>",
                                    lineNumber: 135,
                                    columnNumber: 41
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx>",
                                lineNumber: 134,
                                columnNumber: 37
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx>",
                            lineNumber: 133,
                            columnNumber: 33
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: " md:w-1/2 ml-2",
                            children: brands.length > 0 && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "background overflow-hidden rounded-xl h-full flex justify-center items-end",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "wrap",
                                    children: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "items-wrap",
                                            children: [
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "items marquee",
                                                    children: brands.map((rowData, index)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                            className: "item",
                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                                                className: "",
                                                                href: `${rowData.GoBig}/${newUrl}&creative_id=XXL_Top_New_Releases`,
                                                                target: "_blank",
                                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__["default"], {
                                                                    src: `/brands/${rowData.CasinoBrand}.png`,
                                                                    alt: rowData.CasinoBrand,
                                                                    width: 300,
                                                                    height: 100,
                                                                    loading: "lazy",
                                                                    className: "target-top-new-releases"
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx>",
                                                                    lineNumber: 161,
                                                                    columnNumber: 65
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx>",
                                                                lineNumber: 155,
                                                                columnNumber: 65
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx>",
                                                            lineNumber: 154,
                                                            columnNumber: 61
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx>",
                                                    lineNumber: 151,
                                                    columnNumber: 53
                                                }, this),
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    "aria-hidden": "true",
                                                    class: "items marquee",
                                                    children: brands.map((rowData, index)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                            className: "item",
                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                                                className: "",
                                                                href: `${rowData.GoBig}/${newUrl}&creative_id=XXL_Top_New_Releases`,
                                                                target: "_blank",
                                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__["default"], {
                                                                    src: `/brands/${rowData.CasinoBrand}.png`,
                                                                    alt: rowData.CasinoBrand,
                                                                    width: 300,
                                                                    height: 100,
                                                                    loading: "lazy",
                                                                    className: "target-top-new-releases"
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx>",
                                                                    lineNumber: 184,
                                                                    columnNumber: 65
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx>",
                                                                lineNumber: 178,
                                                                columnNumber: 66
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx>",
                                                            lineNumber: 177,
                                                            columnNumber: 61
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx>",
                                                    lineNumber: 174,
                                                    columnNumber: 53
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx>",
                                            lineNumber: 150,
                                            columnNumber: 49
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            class: "items-wrap",
                                            children: [
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    class: "items marquee reverce",
                                                    children: brands.map((rowData, index)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                            className: "item",
                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                                                className: "",
                                                                href: `${rowData.GoBig}/${newUrl}&creative_id=XXL_Top_New_Releases`,
                                                                target: "_blank",
                                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__["default"], {
                                                                    src: `/brands/${rowData.CasinoBrand}.png`,
                                                                    alt: rowData.CasinoBrand,
                                                                    width: 300,
                                                                    height: 100,
                                                                    loading: "lazy",
                                                                    className: "target-top-new-releases"
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx>",
                                                                    lineNumber: 209,
                                                                    columnNumber: 65
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx>",
                                                                lineNumber: 203,
                                                                columnNumber: 66
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx>",
                                                            lineNumber: 202,
                                                            columnNumber: 61
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx>",
                                                    lineNumber: 199,
                                                    columnNumber: 53
                                                }, this),
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    "aria-hidden": "true",
                                                    class: "items marquee reverce",
                                                    children: brands.map((rowData, index)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                            className: "item",
                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                                                className: "",
                                                                href: `${rowData.GoBig}/${newUrl}&creative_id=XXL_Top_New_Releases`,
                                                                target: "_blank",
                                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__["default"], {
                                                                    src: `/brands/${rowData.CasinoBrand}.png`,
                                                                    alt: rowData.CasinoBrand,
                                                                    width: 300,
                                                                    height: 100,
                                                                    loading: "lazy",
                                                                    className: "target-top-new-releases"
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx>",
                                                                    lineNumber: 232,
                                                                    columnNumber: 65
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx>",
                                                                lineNumber: 226,
                                                                columnNumber: 66
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx>",
                                                            lineNumber: 225,
                                                            columnNumber: 61
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx>",
                                                    lineNumber: 222,
                                                    columnNumber: 53
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx>",
                                            lineNumber: 198,
                                            columnNumber: 49
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx>",
                                    lineNumber: 149,
                                    columnNumber: 45
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx>",
                                lineNumber: 146,
                                columnNumber: 41
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx>",
                            lineNumber: 144,
                            columnNumber: 33
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx>",
                    lineNumber: 132,
                    columnNumber: 29
                }, this)
            }, void 0, false, {
                fileName: "<[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx>",
                lineNumber: 127,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "<[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx>",
            lineNumber: 126,
            columnNumber: 13
        }, this)
    }, void 0, false);
}

})()),
"[project]/components/Banners_tailwind/Random_block/index.jsx (ecmascript, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>Random_block
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$core$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/swr/core/dist/index.mjs (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Loader.jsx (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2f$shuffle$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/lodash/shuffle.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/uuid/dist/esm-node/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slider$2f$Card$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/slider/Card.jsx (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/switcher/LanguageContext.jsx (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getBrands$2f$getBrands2$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/getBrands/getBrands2.jsx (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
;
;
;
;
;
function Random_block() {
    const [newUrl, setNewUrl] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("");
    const [source, setSource] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("");
    const [loading, setLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](true);
    const [brands, setBrands] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]([]);
    const [currentBrandIndex, setCurrentBrandIndex] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](0);
    const [fade, setFade] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](true);
    const { language } = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$28$ecmascript$29$__["useLanguage"]();
    const { t } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__["useTranslation"]();
    const settings = {
        infinite: true,
        speed: 500,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        const currentUrl = window.location.href;
        const indexOfQuestionMark = currentUrl.indexOf("?");
        const newUrl2 = indexOfQuestionMark !== -1 ? currentUrl.substring(0, indexOfQuestionMark) : currentUrl;
        window.history.replaceState({}, document.title, newUrl2);
        const urlObj = new URL(currentUrl);
        const searchParams = new URLSearchParams(urlObj.search);
        searchParams.delete("brand");
        const currentKeyword = searchParams.get("keyword");
        const partners = [
            "partner1039",
            "partner1043",
            "partner1044",
            "CLD_VIP"
        ];
        function setPartnerSource(keyword) {
            const partner = partners.find((p)=>keyword.includes(p));
            if (partner) {
                localStorage.setItem("source", partner);
                setSource(partner);
                searchParams.set("source", partner);
            } else {
                setSource("0");
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
    }, [
        language
    ]);
    const categoryBrands = {
        key1: "Segment2",
        key2: "Premium"
    };
    const { data, error } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$core$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["default"]([
        "brands",
        language
    ], ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getBrands$2f$getBrands2$2e$jsx__$28$ecmascript$29$__["getBrands"](language), {
        initialData: brands
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        if (data) {
            const filteredData = data.filter((rowData)=>rowData[categoryBrands.key1] === categoryBrands.key2);
            console.log("FILTER", filteredData);
            setBrands(filteredData);
            setLoading(false);
        }
    }, [
        data,
        categoryBrands.key1,
        categoryBrands.key2
    ]);
    const shuffledBrands = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2f$shuffle$2e$js__$28$ecmascript$29$__["default"](brands);
    const cards2 = shuffledBrands.slice(0, 6).map((brand)=>({
            key: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$index$2e$js__$28$ecmascript$29$__["v4"](),
            content: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slider$2f$Card$2e$jsx__$28$ecmascript$29$__["default"], {
                imagen: `/brands/${brand.CasinoBrand}.png`,
                link: brand.GoBig,
                bonus: brand.OurOfferContent
            }, void 0, false, {
                fileName: "<[project]/components/Banners_tailwind/Random_block/index.jsx>",
                lineNumber: 99,
                columnNumber: 13
            }, this)
        }));
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        const interval = setInterval(()=>{
            setFade(false);
            setTimeout(()=>{
                setCurrentBrandIndex((prevIndex)=>(prevIndex + 1) % brands.length);
                setFade(true);
            }, 500);
        }, 5000000);
        return ()=>clearInterval(interval);
    }, [
        brands.length
    ]);
    console.log("BRANDS", brands);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["Fragment"], {
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "pt-5 mb-10",
            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "main__container",
                children: loading ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2e$jsx__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "<[project]/components/Banners_tailwind/Random_block/index.jsx>",
                    lineNumber: 126,
                    columnNumber: 25
                }, this) : cards2 && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    class: "relative py-16",
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                            class: "absolute inset-x-0 top-0 hidden h-1/2 bg-gray-100 lg:block",
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "<[project]/components/Banners_tailwind/Random_block/index.jsx>",
                            lineNumber: 130,
                            columnNumber: 29
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                            class: "mx-auto max-w-7xl bg-indigo-600 lg:bg-transparent lg:px-8",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                class: "lg:grid lg:grid-cols-12",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        class: "relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16",
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                class: "absolute inset-x-0 h-1/2 bg-gray-100 lg:hidden",
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "<[project]/components/Banners_tailwind/Random_block/index.jsx>",
                                                lineNumber: 134,
                                                columnNumber: 35
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                class: "mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:p-0",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    class: "aspect-h-6 aspect-w-10 sm:aspect-h-1 sm:aspect-w-2 lg:aspect-w-1",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("img", {
                                                        class: "rounded-3xl object-cover object-center shadow-2xl bg-teal-600",
                                                        src: "#",
                                                        alt: ""
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/Banners_tailwind/Random_block/index.jsx>",
                                                        lineNumber: 137,
                                                        columnNumber: 39
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/Banners_tailwind/Random_block/index.jsx>",
                                                    lineNumber: 136,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/components/Banners_tailwind/Random_block/index.jsx>",
                                                lineNumber: 135,
                                                columnNumber: 35
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/components/Banners_tailwind/Random_block/index.jsx>",
                                        lineNumber: 133,
                                        columnNumber: 33
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        class: "relative bg-indigo-600 lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl",
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                class: "absolute inset-0 hidden overflow-hidden rounded-3xl lg:block",
                                                "aria-hidden": "true",
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("svg", {
                                                        class: "absolute bottom-full left-full -translate-x-2/3 translate-y-1/3 transform xl:bottom-auto xl:top-0 xl:translate-y-0",
                                                        width: "404",
                                                        height: "384",
                                                        fill: "none",
                                                        viewBox: "0 0 404 384",
                                                        "aria-hidden": "true",
                                                        children: [
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("defs", {
                                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("pattern", {
                                                                    id: "64e643ad-2176-4f86-b3d7-f2c5da3b6a6d",
                                                                    x: "0",
                                                                    y: "0",
                                                                    width: "20",
                                                                    height: "20",
                                                                    patternUnits: "userSpaceOnUse",
                                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("rect", {
                                                                        x: "0",
                                                                        y: "0",
                                                                        width: "4",
                                                                        height: "4",
                                                                        class: "text-indigo-500",
                                                                        fill: "currentColor"
                                                                    }, void 0, false, {
                                                                        fileName: "<[project]/components/Banners_tailwind/Random_block/index.jsx>",
                                                                        lineNumber: 147,
                                                                        columnNumber: 43
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/components/Banners_tailwind/Random_block/index.jsx>",
                                                                    lineNumber: 146,
                                                                    columnNumber: 41
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/Banners_tailwind/Random_block/index.jsx>",
                                                                lineNumber: 145,
                                                                columnNumber: 39
                                                            }, this),
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("rect", {
                                                                width: "404",
                                                                height: "384",
                                                                fill: "url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/Banners_tailwind/Random_block/index.jsx>",
                                                                lineNumber: 150,
                                                                columnNumber: 39
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/components/Banners_tailwind/Random_block/index.jsx>",
                                                        lineNumber: 144,
                                                        columnNumber: 37
                                                    }, this),
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("svg", {
                                                        class: "absolute top-full -translate-x-1/3 -translate-y-1/3 transform xl:-translate-y-1/2",
                                                        width: "404",
                                                        height: "384",
                                                        fill: "none",
                                                        viewBox: "0 0 404 384",
                                                        "aria-hidden": "true",
                                                        children: [
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("defs", {
                                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("pattern", {
                                                                    id: "64e643ad-2176-4f86-b3d7-f2c5da3b6a6d",
                                                                    x: "0",
                                                                    y: "0",
                                                                    width: "20",
                                                                    height: "20",
                                                                    patternUnits: "userSpaceOnUse",
                                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("rect", {
                                                                        x: "0",
                                                                        y: "0",
                                                                        width: "4",
                                                                        height: "4",
                                                                        class: "text-indigo-500",
                                                                        fill: "currentColor"
                                                                    }, void 0, false, {
                                                                        fileName: "<[project]/components/Banners_tailwind/Random_block/index.jsx>",
                                                                        lineNumber: 155,
                                                                        columnNumber: 43
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/components/Banners_tailwind/Random_block/index.jsx>",
                                                                    lineNumber: 154,
                                                                    columnNumber: 41
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/Banners_tailwind/Random_block/index.jsx>",
                                                                lineNumber: 153,
                                                                columnNumber: 39
                                                            }, this),
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("rect", {
                                                                width: "404",
                                                                height: "384",
                                                                fill: "url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/Banners_tailwind/Random_block/index.jsx>",
                                                                lineNumber: 158,
                                                                columnNumber: 39
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/components/Banners_tailwind/Random_block/index.jsx>",
                                                        lineNumber: 152,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/components/Banners_tailwind/Random_block/index.jsx>",
                                                lineNumber: 143,
                                                columnNumber: 35
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                class: "relative mx-auto max-w-md space-y-6 px-6 py-12 sm:max-w-3xl sm:py-16 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0",
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h2", {
                                                        class: "text-3xl font-bold tracking-tight text-white",
                                                        id: "join-heading",
                                                        children: "Lorem, ipsum."
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/Banners_tailwind/Random_block/index.jsx>",
                                                        lineNumber: 162,
                                                        columnNumber: 37
                                                    }, this),
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                        class: "text-lg text-white",
                                                        children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eveniet numquam nam incidunt, asperiores quo. Perspiciatis exercitationem alias voluptatum modi."
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/Banners_tailwind/Random_block/index.jsx>",
                                                        lineNumber: 163,
                                                        columnNumber: 37
                                                    }, this),
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                        class: "block w-full rounded-md border border-transparent bg-white px-5 py-3 text-center text-base font-medium text-indigo-700 shadow-md hover:bg-gray-50 sm:inline-block sm:w-auto",
                                                        href: "#",
                                                        children: "Try Your Luck!"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/Banners_tailwind/Random_block/index.jsx>",
                                                        lineNumber: 164,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/components/Banners_tailwind/Random_block/index.jsx>",
                                                lineNumber: 161,
                                                columnNumber: 35
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/components/Banners_tailwind/Random_block/index.jsx>",
                                        lineNumber: 142,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/components/Banners_tailwind/Random_block/index.jsx>",
                                lineNumber: 132,
                                columnNumber: 31
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/components/Banners_tailwind/Random_block/index.jsx>",
                            lineNumber: 131,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/components/Banners_tailwind/Random_block/index.jsx>",
                    lineNumber: 129,
                    columnNumber: 29
                }, this)
            }, void 0, false, {
                fileName: "<[project]/components/Banners_tailwind/Random_block/index.jsx>",
                lineNumber: 124,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "<[project]/components/Banners_tailwind/Random_block/index.jsx>",
            lineNumber: 123,
            columnNumber: 13
        }, this)
    }, void 0, false);
}

})()),
"[project]/components/Banners_tailwind/Fortune_wheel_banner/index.jsx (ecmascript, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>Banner_small
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
function Banner_small() {
    const { t } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__["useTranslation"]();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["Fragment"], {
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "main__container",
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "background overflow-hidden bg-indigo-600 py-10 rounded-xl h-full ",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "mx-auto max-w-7xl px-6 lg:px-8 flex flex-col",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "mx-auto max-w-2xl lg:mx-0 flex flex-row",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    children: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h1", {
                                            className: "text-4xl font-semibold tracking-tight text-white mt-10 uppercase",
                                            children: "Fortune wheel brands"
                                        }, void 0, false, {
                                            fileName: "<[project]/components/Banners_tailwind/Fortune_wheel_banner/index.jsx>",
                                            lineNumber: 19,
                                            columnNumber: 37
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h5", {
                                            className: "mt-6 text-lg leading-8 text-gray-300 font-normal",
                                            children: "Pick a brand below, make first deposit and win real cash"
                                        }, void 0, false, {
                                            fileName: "<[project]/components/Banners_tailwind/Fortune_wheel_banner/index.jsx>",
                                            lineNumber: 22,
                                            columnNumber: 37
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "flex mt-4",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                                className: "",
                                                href: "#",
                                                target: "_blank",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                    type: "button",
                                                    className: "bordered-button mt-10 rounded-md bg-teal-600 px-10 py-3 text-lg text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                                                    children: "Spin the Roulette"
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/Banners_tailwind/Fortune_wheel_banner/index.jsx>",
                                                    lineNumber: 31,
                                                    columnNumber: 45
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/components/Banners_tailwind/Fortune_wheel_banner/index.jsx>",
                                                lineNumber: 26,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/components/Banners_tailwind/Fortune_wheel_banner/index.jsx>",
                                            lineNumber: 25,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/components/Banners_tailwind/Fortune_wheel_banner/index.jsx>",
                                    lineNumber: 18,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/components/Banners_tailwind/Fortune_wheel_banner/index.jsx>",
                                lineNumber: 17,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/components/Banners_tailwind/Fortune_wheel_banner/index.jsx>",
                            lineNumber: 16,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/components/Banners_tailwind/Fortune_wheel_banner/index.jsx>",
                        lineNumber: 13,
                        columnNumber: 21
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                        className: "text-center mt-2",
                        children: "To qualify for withdrawals, ensure your first deposit is at least €25 or the equivalent in other currencies and was made after requesting a withdrawal."
                    }, void 0, false, {
                        fileName: "<[project]/components/Banners_tailwind/Fortune_wheel_banner/index.jsx>",
                        lineNumber: 44,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/components/Banners_tailwind/Fortune_wheel_banner/index.jsx>",
                lineNumber: 12,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "<[project]/components/Banners_tailwind/Fortune_wheel_banner/index.jsx>",
            lineNumber: 11,
            columnNumber: 13
        }, this)
    }, void 0, false);
}

})()),
}]);

//# sourceMappingURL=components_76e6c7._.js.map