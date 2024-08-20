(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app/components_switcher_9f4142._.js", {

"[project]/components/switcher/LanguageContext.jsx (ecmascript, app)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "LanguageProvider": ()=>LanguageProvider,
    "useLanguage": ()=>useLanguage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, app)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, app)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature();
"use client";
;
const LanguageContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["createContext"]();
const useLanguage = ()=>{
    _s();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useContext"](LanguageContext);
};
_s(useLanguage, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
const LanguageProvider = (param)=>{
    let { children } = param;
    _s1();
    const [language, setLanguage] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]('all');
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        // Эта проверка гарантирует, что код внутри useEffect будет выполняться только в браузере
        if (typeof window !== 'undefined') {
            const storedLanguage = localStorage.getItem('country_brands');
            if (storedLanguage) {
                setLanguage(storedLanguage);
            }
        }
    }, []);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](LanguageContext.Provider, {
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
_s1(LanguageProvider, "jnb8oJ3KX51Kt+1RlssgMEut52s=");
_c = LanguageProvider;
var _c;
__turbopack_refresh__.register(_c, "LanguageProvider");

})()),
"[project]/components/switcher/LanguageSwitcher.jsx (ecmascript, app)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, app)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, app)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$core$2f$index$2e$mjs__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/swr/dist/core/index.mjs (ecmascript, app)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js (ecmascript, app)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Loader.jsx (ecmascript, app)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
const LanguageSwitcher = ()=>{
    _s();
    const { t, i18n } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__["useTranslation"]();
    const { data: selectedLanguage, error } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$core$2f$index$2e$mjs__$28$ecmascript$29$__["default"]("selectedLanguage", ()=>i18n.language);
    const [isLoading, setIsLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    // Define language options for different partners and the default list
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
    // Define partner-specific language options
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
    // Select the correct language options based on the source
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
        case "partner1045_b1":
            newLng = availableLanguagesCLD_VIP;
            break;
        default:
            newLng = availableLanguages;
            break;
    }
    if (error) return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
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
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$core$2f$index$2e$mjs__$28$ecmascript$29$__["mutate"]("selectedLanguage", lng, false);
            await i18n.changeLanguage(lng);
        } catch (error) {
            console.error("Ошибка при смене языка:", error);
        } finally{
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                    className: "ml-4 mr-4",
                    children: t("Website language")
                }, void 0, false, {
                    fileName: "<[project]/components/switcher/LanguageSwitcher.jsx>",
                    lineNumber: 125,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: `language-switcher ml-3 flex flex-col`,
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("select", {
                            className: `desktop-lang ${selectedLanguage}`,
                            value: selectedLanguage,
                            onChange: (e)=>{
                                const selected = newLng.find((lang)=>lang.code === e.target.value);
                                if (selected) {
                                    changeLanguage(selected.code);
                                } else {
                                    changeLanguage("en"); // Default to "World" if no match
                                }
                            },
                            children: newLng.map((language)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("option", {
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
                        isLoading && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2e$jsx__$28$ecmascript$29$__["default"], {}, void 0, false, {
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
_s(LanguageSwitcher, "jytrUSJoL/s5VtlYk0JzSv2E0aA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$core$2f$index$2e$mjs__$28$ecmascript$29$__["default"]
    ];
});
_c = LanguageSwitcher;
const __TURBOPACK__default__export__ = LanguageSwitcher;
var _c;
__turbopack_refresh__.register(_c, "LanguageSwitcher");

})()),
"[project]/components/switcher/BrandsSwitcher.jsx (ecmascript, app)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, app)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, app)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Loader.jsx (ecmascript, app)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/switcher/LanguageContext.jsx (ecmascript, app)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
const BrandsSwitcher = ()=>{
    _s();
    const [isLoading, setIsLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const { language, setLanguage } = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$28$ecmascript$29$__["useLanguage"](); // Используй состояние и функцию из контекста
    const ipData = async ()=>{
        try {
            const response = await fetch("https://ipapi.co/json");
            const data = await response.json();
            if (data.country) {
                setLanguage(data.country.toLowerCase()); // Используй setLanguage из контекста
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
            code: "all",
            label: "All",
            flag: "🌍"
        },
        {
            code: "at",
            label: "Austria",
            flag: "🇦🇹"
        },
        {
            code: "au",
            label: "Australia",
            flag: "🇦🇺"
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
            label: "Czech Republic",
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
            code: "es",
            label: "Spain",
            flag: "🇪🇸"
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
            code: "gb",
            label: "United Kingdom",
            flag: "🇬🇧"
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
            code: "pt",
            label: "Portugal",
            flag: "🇵🇹"
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
    } else if (item === "partner1045_b1") {
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
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: `language-switcher ml-3 flex flex-col`,
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("select", {
                className: `desktop-lang ${language}`,
                value: lng,
                onChange: (e)=>{
                    const selected = newLng.find((lang)=>lang.code === e.target.value);
                    if (selected) {
                        changeLanguage(selected.code);
                    }
                },
                children: newLng.map((language)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("option", {
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
                        lineNumber: 194,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "<[project]/components/switcher/BrandsSwitcher.jsx>",
                lineNumber: 183,
                columnNumber: 7
            }, this),
            isLoading && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2e$jsx__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "<[project]/components/switcher/BrandsSwitcher.jsx>",
                lineNumber: 204,
                columnNumber: 21
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/components/switcher/BrandsSwitcher.jsx>",
        lineNumber: 182,
        columnNumber: 5
    }, this);
};
_s(BrandsSwitcher, "DfqLkduspkp4nnbSoiAm0g02qFE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = BrandsSwitcher;
const __TURBOPACK__default__export__ = BrandsSwitcher;
var _c;
__turbopack_refresh__.register(_c, "BrandsSwitcher");
 // "use client";
 // import { useState, useEffect } from "react";
 // import Loader from "@/components/Loader";
 // import { useLanguage } from "./LanguageContext";
 // const BrandsSwitcher = () => {
 //   const [isLoading, setIsLoading] = useState(false);
 //   const { language, setLanguage } = useLanguage(); // Используй состояние и функцию из контекста
 //   const ipData = async () => {
 //     try {
 //       const response = await fetch(
 //         "https://ipapi.co/json/?key=YD0x5VtXrPJkOcFQMjEyQgqjfM6jUcwS4J54b3DI8ztyrFpHzW"
 //       );
 //       const data = await response.json();
 //       if (data.country) {
 //         setLanguage(data.country.toLowerCase()); // Используй setLanguage из контекста
 //         if (typeof window !== "undefined") {
 //           localStorage.setItem("country_brands", data.country.toLowerCase());
 //         }
 //       }
 //     } catch (error) {
 //       console.error("Ошибка при запросе к API:", error);
 //       setLanguage("all"); 
 //     }
 //   };
 //   useEffect(() => {
 //     const savedLanguage = localStorage.getItem("country_brands");
 //     if (!savedLanguage) {
 //       ipData();
 //     }
 //   }, []);
 //   const changeLanguage = (lng) => {
 //     setIsLoading(true);
 //     setLanguage(lng);
 //     localStorage.setItem("country_brands", lng);
 //     setIsLoading(false);
 //   };
 //   const availableLanguages = [
 //     { code: "au", label: "Australia", flag: "🇦🇺" },
 //     { code: "at", label: "Austria", flag: "🇦🇹" },
 //     { code: "be", label: "Belgium", flag: "🇧🇪" },
 //     { code: "bg", label: "Bulgaria", flag: "🇧🇬" },
 //     { code: "ca", label: "Canada", flag: "🇨🇦" },
 //     { code: "cz", label: "Czech", flag: "🇨🇿" },
 //     { code: "dk", label: "Denmark", flag: "🇩🇰" },
 //     { code: "fi", label: "Finland", flag: "🇫🇮" },
 //     { code: "fr", label: "France", flag: "🇫🇷" },
 //     { code: "de", label: "Germany", flag: "🇩🇪" },
 //     { code: "gr", label: "Greece", flag: "🇬🇷" },
 //     { code: "hu", label: "Hungary", flag: "🇭🇺" },
 //     { code: "ie", label: "Ireland", flag: "🇮🇪" },
 //     { code: "it", label: "Italy", flag: "🇮🇹" },
 //     { code: "nl", label: "Netherlands", flag: "🇳🇱" },
 //     { code: "nz", label: "New Zealand", flag: "🇳🇿" },
 //     { code: "no", label: "Norway", flag: "🇳🇴" },
 //     { code: "pl", label: "Poland", flag: "🇵🇱" },
 //     { code: "pt", label: "Portugal", flag: "🇵🇹" },
 //     { code: "sk", label: "Slovakia", flag: "🇸🇰" },
 //     { code: "es", label: "Spain", flag: "🇪🇸" },
 //     { code: "se", label: "Sweden", flag: "🇸🇪" },
 //     { code: "ch", label: "Switzerland", flag: "🇨🇭" },
 //     { code: "tr", label: "Turkey", flag: "🇹🇷" },
 //     { code: "gb", label: "United Kingdom", flag: "🇬🇧" },
 //     { code: "all", label: "World", flag: "🌍" },
 //   ];
 //   const availableLanguages1039 = [
 //     { code: "au", label: "Australia", flag: "🇦🇺" },
 //     { code: "at", label: "Austria", flag: "🇦🇹" },
 //     { code: "be", label: "Belgium", flag: "🇧🇪" },
 //     { code: "bg", label: "Bulgaria", flag: "🇧🇬" },
 //     { code: "ca", label: "Canada", flag: "🇨🇦" },
 //     { code: "cz", label: "Czech", flag: "🇨🇿" },
 //     { code: "dk", label: "Denmark", flag: "🇩🇰" },
 //     { code: "fi", label: "Finland", flag: "🇫🇮" },
 //     { code: "fr", label: "France", flag: "🇫🇷" },
 //     { code: "de", label: "Germany", flag: "🇩🇪" },
 //     { code: "gr", label: "Greece", flag: "🇬🇷" },
 //     { code: "hu", label: "Hungary", flag: "🇭🇺" },
 //     { code: "ie", label: "Ireland", flag: "🇮🇪" },
 //     { code: "it", label: "Italy", flag: "🇮🇹" },
 //     { code: "nl", label: "Netherlands", flag: "🇳🇱" },
 //     { code: "nz", label: "New Zealand", flag: "🇳🇿" },
 //     { code: "no", label: "Norway", flag: "🇳🇴" },
 //     { code: "pl", label: "Poland", flag: "🇵🇱" },
 //     { code: "pt", label: "Portugal", flag: "🇵🇹" },
 //     { code: "sk", label: "Slovakia", flag: "🇸🇰" },
 //     { code: "es", label: "Spain", flag: "🇪🇸" },
 //     { code: "se", label: "Sweden", flag: "🇸🇪" },
 //     { code: "ch", label: "Switzerland", flag: "🇨🇭" },
 //     { code: "tr", label: "Turkey", flag: "🇹🇷" },
 //     { code: "gb", label: "United Kingdom", flag: "🇬🇧" },
 //     { code: "all", label: "World", flag: "🌍" },
 //   ];
 //   const availableLanguages1043 = [
 //     { code: "ca", label: "Canada", flag: "🇨🇦" },
 //     { code: "us", label: "United States", flag: "🇺🇸" },
 //   ];
 //   const availableLanguages1044 = [
 //     { code: "au", label: "Australia", flag: "🇦🇺" },
 //     { code: "at", label: "Austria", flag: "🇦🇹" },
 //     { code: "be", label: "Belgium", flag: "🇧🇪" },
 //     { code: "ca", label: "Canada", flag: "🇨🇦" },
 //     { code: "ch", label: "Switzerland", flag: "🇨🇭" },
 //     { code: "nl", label: "Netherlands", flag: "🇳🇱" },
 //     { code: "de", label: "Germany", flag: "🇩🇪" },
 //     { code: "cz", label: "The Czech Republic", flag: "🇨🇿" },
 //     { code: "fi", label: "Finland", flag: "🇫🇮" },
 //     { code: "gb", label: "Great Britain", flag: "🇬🇧" },
 //     { code: "ie", label: "Ireland", flag: "🇮🇪" },
 //     { code: "it", label: "Italy", flag: "🇮🇹" },
 //     { code: "nz", label: "New Zealand", flag: "🇳🇿" },
 //     { code: "no", label: "Norway", flag: "🇳🇴" },
 //     // { code: "pl", label: "Poland", flag: "🇵🇱" },
 //     { code: "za", label: "South Africa", flag: "🇿🇦" },
 //     { code: "se", label: "Sweden", flag: "🇸🇪" },
 //     { code: "us", label: "USA", flag: "🇺🇸" },
 //     { code: "all", label: "World", flag: "🌍" },
 //   ];
 //   let item;
 //   if (typeof window !== "undefined") {
 //     item = localStorage.getItem("source");
 //   }
 //   let newLng;
 //   if (item === "partner1039") {
 //     newLng = availableLanguages1039;
 //   } else if (item === "partner1043") {
 //     newLng = availableLanguages1043;
 //   } else if (item === "partner1044") {
 //     newLng = availableLanguages1044;
 //   } else {
 //     newLng = availableLanguages;
 //   }
 //   return (
 //     <div className={`language-switcher ml-3 flex flex-col`}>
 //       <select
 //         className={`desktop-lang ${language}`}
 //         value={language}
 //         onChange={(e) => {
 //           const selected = newLng.find(
 //             (lang) => lang.code === e.target.value
 //           );
 //           if (selected) {
 //             changeLanguage(selected.code);
 //           }
 //         }}
 //       >
 //         {newLng.map((language) => (
 //           <option
 //             key={language.code}
 //             value={language.code}
 //             style={{ fontSize: "20px" }}
 //           >
 //             {language.flag} {language.label}
 //           </option>
 //         ))}
 //       </select>
 //       {isLoading && <Loader />}
 //     </div>
 //   );
 // };
 // export default BrandsSwitcher;

})()),
}]);

//# sourceMappingURL=components_switcher_9f4142._.js.map