(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/components_TopBrands_index_jsx_d62b83._.js", {

"[project]/components/TopBrands/index.jsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>TopBrands
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$core$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/swr/core/dist/index.mjs (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Loader.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2f$shuffle$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/lodash/shuffle.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/uuid/dist/esm-node/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slider$2f$Card$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/slider/Card.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slider$2f$Carousel$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/slider/Carousel.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$coins_banner2$2e$jpg$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$coins_banner2$2e$jpg__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/public/coins_banner2.jpg.mjs/(IMAGE)/[project]/public/coins_banner2.jpg (static) (structured image object, ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/switcher/LanguageContext.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getBrands$2f$getBrands2$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/getBrands/getBrands2.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Timer$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Timer.jsx (ecmascript, ssr)");
(()=>{
    const e = new Error("Cannot find module './Brands_home/UserBrands'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
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
function TopBrands() {
    const [newUrl, setNewUrl] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("");
    const [source, setSource] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("");
    const [loading, setLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](true);
    const [brands, setBrands] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]([]);
    const [currentBrandIndex, setCurrentBrandIndex] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](0);
    const [fade, setFade] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](true);
    const { language } = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$28$ecmascript$29$__["useLanguage"]();
    const { t } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__["useTranslation"]();
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
                fileName: "<[project]/components/TopBrands/index.jsx>",
                lineNumber: 97,
                columnNumber: 7
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
            className: "topbr",
            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "main__container",
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Timer$2e$jsx__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "<[project]/components/TopBrands/index.jsx>",
                        lineNumber: 123,
                        columnNumber: 11
                    }, this),
                    loading ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2e$jsx__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "<[project]/components/TopBrands/index.jsx>",
                        lineNumber: 125,
                        columnNumber: 13
                    }, this) : cards2 && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "flex justify-between items-center",
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "slidertop",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slider$2f$Carousel$2e$jsx__$28$ecmascript$29$__["default"], {
                                    className: "carmob",
                                    cards: cards2,
                                    height: "500px",
                                    width: "100%",
                                    margin: "0 auto",
                                    offset: 200,
                                    showArrows: false
                                }, void 0, false, {
                                    fileName: "<[project]/components/TopBrands/index.jsx>",
                                    lineNumber: 130,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/components/TopBrands/index.jsx>",
                                lineNumber: 129,
                                columnNumber: 17
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "secondbanner flex items-center justify-center",
                                children: brands.length > 0 && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: `card-second-banner mb-2 flex flex-col items-center pb-3 transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`,
                                    children: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "brandImage p-3",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                                className: "flex justify-center flex-col items-center target-top-new-releases",
                                                href: `${brands[currentBrandIndex].GoBig}/${newUrl}&creative_id=XXL_Top_New_Releases`,
                                                target: "_blank",
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__["default"], {
                                                        src: `/brands/${brands[currentBrandIndex].CasinoBrand}.png`,
                                                        alt: brands[currentBrandIndex].CasinoBrand,
                                                        width: 200,
                                                        height: 80,
                                                        loading: "lazy",
                                                        className: "target-top-new-releases"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/TopBrands/index.jsx>",
                                                        lineNumber: 152,
                                                        columnNumber: 27
                                                    }, this),
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "p-3 text-center flex items-center review-bonus",
                                                        children: brands[currentBrandIndex].OurOfferContent
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/TopBrands/index.jsx>",
                                                        lineNumber: 160,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/components/TopBrands/index.jsx>",
                                                lineNumber: 147,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/components/TopBrands/index.jsx>",
                                            lineNumber: 146,
                                            columnNumber: 23
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                            className: "btn btn-primary btn-new target-top-new-releases",
                                            href: `${brands[currentBrandIndex].GoBig}/${newUrl}&creative_id=XXL_Top_New_Releases`,
                                            target: "_blank",
                                            children: t("Play Now")
                                        }, void 0, false, {
                                            fileName: "<[project]/components/TopBrands/index.jsx>",
                                            lineNumber: 165,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, brands[currentBrandIndex].id_brand, true, {
                                    fileName: "<[project]/components/TopBrands/index.jsx>",
                                    lineNumber: 142,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/components/TopBrands/index.jsx>",
                                lineNumber: 140,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/components/TopBrands/index.jsx>",
                        lineNumber: 128,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/components/TopBrands/index.jsx>",
                lineNumber: 122,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "<[project]/components/TopBrands/index.jsx>",
            lineNumber: 121,
            columnNumber: 7
        }, this)
    }, void 0, false);
}

})()),
}]);

//# sourceMappingURL=components_TopBrands_index_jsx_d62b83._.js.map