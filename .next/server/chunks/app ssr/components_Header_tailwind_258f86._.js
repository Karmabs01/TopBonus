module.exports = {

"[project]/components/Header_tailwind/Navigation_tw.tsx (ecmascript, app ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {

__turbopack_esm__({
    "Navigation": ()=>Navigation
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js (ecmascript, app ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js (ecmascript, app ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js (ecmascript, app ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js (ecmascript, app ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$headlessui$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@headlessui/react/dist/headlessui.esm.js (ecmascript, app ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@heroicons/react/24/outline/esm/index.js (ecmascript, app ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
;
const Navigation = ({ navLinks, onLinkClick })=>{
    // Получите функцию перевода
    const { t } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__["useTranslation"]();
    const [isLoading, setIsLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$28$ecmascript$29$__["useState"](false);
    const [openSubMenu, setOpenSubMenu] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$28$ecmascript$29$__["useState"](null);
    const [windowWidth, setWindowWidth] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$28$ecmascript$29$__["useState"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        // Теперь можно безопасно использовать window
        setWindowWidth(window.innerWidth);
        const handleResize = ()=>{
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return ()=>{
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    const pathname = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$28$ecmascript$29$__["usePathname"]();
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["Fragment"], {
        children: navLinks.map((link)=>{
            const isActive = pathname === link.href;
            const hasSubMenu = link.subMenu && link.subMenu.length > 0;
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$headlessui$2e$esm$2e$js__$28$ecmascript$29$__["Popover"], {
                className: "relative",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$headlessui$2e$esm$2e$js__$28$ecmascript$29$__["PopoverButton"], {
                        className: "inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 text-white w-full",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                            children: link.label
                        }, void 0, false, {
                            fileName: "<[project]/components/Header_tailwind/Navigation_tw.tsx>",
                            lineNumber: 64,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/components/Header_tailwind/Navigation_tw.tsx>",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$headlessui$2e$esm$2e$js__$28$ecmascript$29$__["PopoverPanel"], {
                        transition: true,
                        className: "absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in ",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "w-screen max-w-md flex-auto overflow-hidden rounded-3xl text-sm shadow-lg lg:max-w-3xl submenu-all",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "grid grid-cols-1 gap-x-1 pt-4 lg:grid-cols-2",
                                    children: link.subMenu.map((subLink)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "group relative flex gap-x-2 rounded-lg px-4 group-menu-item",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "mt-1 flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-indigo-500",
                                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$index$2e$js__$28$ecmascript$29$__["SquaresPlusIcon"], {
                                                        "aria-hidden": "true",
                                                        className: "h-6 w-6 text-white "
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/Header_tailwind/Navigation_tw.tsx>",
                                                        lineNumber: 77,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/Header_tailwind/Navigation_tw.tsx>",
                                                    lineNumber: 76,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                            href: subLink.href,
                                                            className: "font-semibold text-gray-900",
                                                            children: [
                                                                subLink.label,
                                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                    className: "absolute inset-0"
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/components/Header_tailwind/Navigation_tw.tsx>",
                                                                    lineNumber: 83,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "<[project]/components/Header_tailwind/Navigation_tw.tsx>",
                                                            lineNumber: 81,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                            className: "mt-1 text-sm text-gray-600",
                                                            children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, labore!"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/Header_tailwind/Navigation_tw.tsx>",
                                                            lineNumber: 85,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/components/Header_tailwind/Navigation_tw.tsx>",
                                                    lineNumber: 80,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, subLink.label, true, {
                                            fileName: "<[project]/components/Header_tailwind/Navigation_tw.tsx>",
                                            lineNumber: 75,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "<[project]/components/Header_tailwind/Navigation_tw.tsx>",
                                    lineNumber: 73,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "bg-my px-8 py-2",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "flex items-center gap-x-2",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                                    className: "text-sm font-semibold leading-6 text-white",
                                                    children: "Try Your Luck!"
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/Header_tailwind/Navigation_tw.tsx>",
                                                    lineNumber: 92,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "rounded-full bg-orange text-xs font-semibold text-white",
                                                    children: "New"
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/Header_tailwind/Navigation_tw.tsx>",
                                                    lineNumber: 93,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/components/Header_tailwind/Navigation_tw.tsx>",
                                            lineNumber: 91,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                            className: "mt-1 text-sm leading-6 text-white",
                                            children: "Feeling lucky? Discover random casino brands and test your fortune!"
                                        }, void 0, false, {
                                            fileName: "<[project]/components/Header_tailwind/Navigation_tw.tsx>",
                                            lineNumber: 95,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/components/Header_tailwind/Navigation_tw.tsx>",
                                    lineNumber: 90,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/components/Header_tailwind/Navigation_tw.tsx>",
                            lineNumber: 72,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/components/Header_tailwind/Navigation_tw.tsx>",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this)
                ]
            }, link.label, true, {
                fileName: "<[project]/components/Header_tailwind/Navigation_tw.tsx>",
                lineNumber: 61,
                columnNumber: 11
            }, this);
        })
    }, void 0, false);
};
;

})()),
"[project]/components/Header_tailwind/index.jsx (ecmascript, app ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {

__turbopack_esm__({
    "Header_tailwind": ()=>Header_tailwind
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js (ecmascript, app ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js (ecmascript, app ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$core$2f$index$2e$mjs__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/swr/dist/core/index.mjs (ecmascript, app ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js (ecmascript, app ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$i18n$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/i18n.js (ecmascript, app ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header_tailwind$2f$Navigation_tw$2e$tsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Header_tailwind/Navigation_tw.tsx (ecmascript, app ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js (ecmascript, app ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$logo3$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$logo3$2e$png__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/public/logo3.png.mjs/(IMAGE)/[project]/public/logo3.png (static) (structured image object, ecmascript, app ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageSwitcher$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/switcher/LanguageSwitcher.jsx (ecmascript, app ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$BrandsSwitcher$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/switcher/BrandsSwitcher.jsx (ecmascript, app ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js (ecmascript, app ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$header$2f$MenuPages$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/header/MenuPages/index.js (ecmascript, app ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getUser$2f$getUser$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/getUser/getUser.jsx (ecmascript, app ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$header$2f$NavItems$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/header/NavItems/index.js (ecmascript, app ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$header$2f$MenuLanguages$2f$index$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/header/MenuLanguages/index.jsx (ecmascript, app ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Badge$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/Badge/index.js (ecmascript, app ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getUser$2f$updateGeo$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/getUser/updateGeo.jsx (ecmascript, app ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$geo$2d$identifier$2f$index$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/geo-identifier/index.jsx (ecmascript, app ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modal$2f$index$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/modal/index.jsx (ecmascript, app ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$KeitaroIframe$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/KeitaroIframe.jsx (ecmascript, app ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getBrands$2f$getBrands2$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/getBrands/getBrands2.jsx (ecmascript, app ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/switcher/LanguageContext.jsx (ecmascript, app ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$analytics$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@vercel/analytics/dist/index.mjs (ecmascript, app ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$header$2f$Marque$2f$index$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/header/Marque/index.jsx (ecmascript, app ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$headlessui$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@headlessui/react/dist/headlessui.esm.js (ecmascript, app ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@heroicons/react/24/outline/esm/index.js (ecmascript, app ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$20$2f$solid$2f$esm$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@heroicons/react/20/solid/esm/index.js (ecmascript, app ssr)");
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
;
;
const Header_tailwind = ()=>{
    const { t } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__["useTranslation"]();
    const items = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$header$2f$NavItems$2f$index$2e$js__$28$ecmascript$29$__["navItems"](t);
    const [isLoading, setIsLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$28$ecmascript$29$__["useState"](true);
    const [user, setUser] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$28$ecmascript$29$__["useState"](null);
    const userNavigation = [
        {
            name: "My Profile",
            href: "/personal"
        },
        {
            name: "My Wallet",
            href: "/personal"
        },
        // { name: 'Fortune wheel', href: '/fortune' },
        {
            name: "Card Shop",
            href: "/shop"
        }
    ];
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
        urlParams = new URLSearchParams(); // Пустой объект для серверной стороны
    }
    const [load, setLoad] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$28$ecmascript$29$__["useState"](false);
    const [keywordValue, setKeywordValue] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$28$ecmascript$29$__["useState"](null);
    const idUserParam = urlParams.get("keyword");
    const ad_campaign = urlParams.get("ad_campaign_id");
    const userData = keywordValue !== null ? keywordValue : idUserParam;
    const [dataUser, setDataUser] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$28$ecmascript$29$__["useState"]();
    const [d, setD] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$28$ecmascript$29$__["useState"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
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
    /////////////////////////////////////
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
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
    //////////////////////////////////////////////////
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        const handleMessage = (event)=>{
            if (event.origin !== "https://topbon.us") {
            // console.error(
            //   "Received message from an unauthorized origin:",
            //   event.origin
            // );
            // return;
            }
            // console.log("Raw data from iframe:", event.data);
            const jsonData = event.data;
            setD(typeof jsonData === "string" ? jsonData : "");
        };
        window.addEventListener("message", handleMessage);
        return ()=>{
            window.removeEventListener("message", handleMessage);
        };
    }, []);
    const { language } = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$28$ecmascript$29$__["useLanguage"]();
    const [brands, setBrands] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$28$ecmascript$29$__["useState"]([]);
    const { data, error } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$core$2f$index$2e$mjs__$28$ecmascript$29$__["default"]([
        "brands",
        language
    ], ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getBrands$2f$getBrands2$2e$jsx__$28$ecmascript$29$__["getBrands"](language), {
        initialData: brands
    });
    const [links, setLinks] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$28$ecmascript$29$__["useState"]([]); // Инициализируем пустым массивом
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        if (data) {
            setBrands(data); // Обновляем состояние brands данными из запроса
            setLinks(data.map((brand)=>brand.GoBig)); // Обновляем состояние links на основе данных
        }
    }, [
        data
    ]);
    const [mobileMenuOpen, setMobileMenuOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$28$ecmascript$29$__["useState"](false);
    const [showResponsiveDialog, setShowResponsiveDialog] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$28$ecmascript$29$__["useState"](false);
    const [showBasicModal, setShowBasicModal] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$28$ecmascript$29$__["useState"](false);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        const interval = setInterval(()=>{
            if (!showResponsiveDialog) {
                setShowBasicModal(true);
            }
        }, 20000);
        return ()=>clearInterval(interval);
    }, [
        showResponsiveDialog
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$header$2f$Marque$2f$index$2e$jsx__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "<[project]/components/Header_tailwind/index.jsx>",
                lineNumber: 229,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("header", {
                className: "",
                children: [
                    load ? dataUser.geo_approve === null || dataUser.geo_approve === "" ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$geo$2d$identifier$2f$index$2e$jsx__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "<[project]/components/Header_tailwind/index.jsx>",
                        lineNumber: 233,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {}, void 0, false, {
                        fileName: "<[project]/components/Header_tailwind/index.jsx>",
                        lineNumber: 235,
                        columnNumber: 11
                    }, this) : "",
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "main__container",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("nav", {
                                "aria-label": "Global",
                                className: "mx-auto max-w-7xl flex items-center sm:justify-between px-2 sm:px-6 lg:px-8",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "flex lg:hidden",
                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                                            type: "button",
                                            onClick: ()=>setMobileMenuOpen(true),
                                            className: "-m-2.5 inline-flex items-center justify-start rounded-md p-2.5 text-white",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                    className: "sr-only",
                                                    children: "Burger btn"
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                    lineNumber: 251,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$index$2e$js__$28$ecmascript$29$__["Bars3Icon"], {
                                                    "aria-hidden": "true",
                                                    className: "h-6 w-6"
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                    lineNumber: 252,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                            lineNumber: 246,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                        lineNumber: 245,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "flex flex-shrink-0 items-center h-20 ml-2 md:ml-10 lg:ml-0 justify-center",
                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                            href: "/",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__["default"], {
                                                src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$logo3$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$logo3$2e$png__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                                alt: "logo",
                                                width: 150,
                                                loading: "lazy"
                                            }, void 0, false, {
                                                fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                lineNumber: 257,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                            lineNumber: 256,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                        lineNumber: 255,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "hidden xl:flex flex items-center justify-center",
                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header_tailwind$2f$Navigation_tw$2e$tsx__$28$ecmascript$29$__["Navigation"], {
                                            navLinks: items.map((item)=>({
                                                    ...item,
                                                    label: item.label
                                                }))
                                        }, void 0, false, {
                                            fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                            lineNumber: 261,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                        lineNumber: 260,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "absolute right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                type: "button",
                                                className: "hidden md:flex relative rounded-full p-1 text-white hover:text-gray-400 transition-colors duration-300 ease-in-ou mr-5",
                                                children: load ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                                    href: `/personal`,
                                                    className: " flex justify-center items-center text-xl",
                                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$index$2e$js__$28$ecmascript$29$__["CurrencyDollarIcon"], {
                                                                "aria-hidden": "true",
                                                                className: "h-8 w-8 text-white transition-colors duration-300 ease-in-out hover:text-gray-400 mr-2"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                                lineNumber: 279,
                                                                columnNumber: 21
                                                            }, this),
                                                            `${dataUser.balance}$`
                                                        ]
                                                    }, void 0, true)
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                    lineNumber: 274,
                                                    columnNumber: 17
                                                }, this) : ""
                                            }, void 0, false, {
                                                fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                lineNumber: 269,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                                href: `/fortune`,
                                                className: "hidden md:flex",
                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                    type: "button",
                                                    className: "relative rounded-full p-1 text-white hover:text-gray-400 transition-colors duration-300 ease-in-ou mr-5",
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                            className: "absolute -inset-1.5"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                            lineNumber: 295,
                                                            columnNumber: 17
                                                        }, this),
                                                        load ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Badge$2f$index$2e$js__$28$ecmascript$29$__["default"], {
                                                            badgeContent: `${dataUser.tickets}`,
                                                            color: "primary",
                                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["Fragment"], {
                                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$index$2e$js__$28$ecmascript$29$__["TicketIcon"], {
                                                                    "aria-hidden": "true",
                                                                    className: "h-8 w-8 text-white transition-colors duration-300 ease-in-out hover:text-gray-400"
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                                    lineNumber: 299,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false)
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                            lineNumber: 297,
                                                            columnNumber: 19
                                                        }, this) : ""
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                    lineNumber: 291,
                                                    columnNumber: 15
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                lineNumber: 290,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__["I18nextProvider"], {
                                                i18n: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$i18n$2e$js__$28$ecmascript$29$__["default"],
                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$header$2f$MenuLanguages$2f$index$2e$jsx__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                    fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                    lineNumber: 312,
                                                    columnNumber: 15
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                lineNumber: 311,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$headlessui$2e$esm$2e$js__$28$ecmascript$29$__["Menu"], {
                                                as: "div",
                                                className: "relative ml-3 hidden md:inline",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$headlessui$2e$esm$2e$js__$28$ecmascript$29$__["MenuButton"], {
                                                            className: "relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 avatar-new",
                                                            children: [
                                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                    className: "absolute -inset-1.5"
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                                    lineNumber: 318,
                                                                    columnNumber: 19
                                                                }, this),
                                                                load ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                    className: "h-12 w-12 rounded-full text-4xl flex items-center justify-center text-blue-600"
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                                    lineNumber: 320,
                                                                    columnNumber: 21
                                                                }, this) : ""
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                            lineNumber: 317,
                                                            columnNumber: 17
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                        lineNumber: 316,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$headlessui$2e$esm$2e$js__$28$ecmascript$29$__["MenuItems"], {
                                                        transition: true,
                                                        className: "absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in submenu-x",
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$headlessui$2e$esm$2e$js__$28$ecmascript$29$__["MenuItem"], {
                                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                                                    href: `/personal`,
                                                                    className: "block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 flex items-center",
                                                                    children: [
                                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$index$2e$js__$28$ecmascript$29$__["WalletIcon"], {
                                                                            "aria-hidden": "true",
                                                                            className: "h-6 w-6 text-white transition-colors duration-300 ease-in-out mr-2"
                                                                        }, void 0, false, {
                                                                            fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                                            lineNumber: 337,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        t("My wallet")
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                                    lineNumber: 333,
                                                                    columnNumber: 19
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                                lineNumber: 332,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$headlessui$2e$esm$2e$js__$28$ecmascript$29$__["MenuItem"], {
                                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                                                    href: `/fortune`,
                                                                    className: "block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 flex items-center",
                                                                    children: [
                                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$index$2e$js__$28$ecmascript$29$__["TicketIcon"], {
                                                                            "aria-hidden": "true",
                                                                            className: "h-6 w-6 text-white transition-colors duration-300 ease-in-out mr-2"
                                                                        }, void 0, false, {
                                                                            fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                                            lineNumber: 350,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        load ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                            className: "",
                                                                            children: [
                                                                                t("Fortune wheel"),
                                                                                " ",
                                                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                                    children: user.tickets
                                                                                }, void 0, false, {
                                                                                    fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                                                    lineNumber: 356,
                                                                                    columnNumber: 46
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                                            lineNumber: 355,
                                                                            columnNumber: 23
                                                                        }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                            className: "",
                                                                            children: t("Fortune wheel")
                                                                        }, void 0, false, {
                                                                            fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                                            lineNumber: 359,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                                    lineNumber: 346,
                                                                    columnNumber: 19
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                                lineNumber: 345,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$headlessui$2e$esm$2e$js__$28$ecmascript$29$__["MenuItem"], {
                                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                                                    href: `/shop`,
                                                                    className: "block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 flex items-center ",
                                                                    children: [
                                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$index$2e$js__$28$ecmascript$29$__["ShoppingBagIcon"], {
                                                                            "aria-hidden": "true",
                                                                            className: "h-6 w-6 text-white transition-colors duration-300 ease-in-out mr-2"
                                                                        }, void 0, false, {
                                                                            fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                                            lineNumber: 368,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        t("Cards shop")
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                                    lineNumber: 364,
                                                                    columnNumber: 19
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                                lineNumber: 363,
                                                                columnNumber: 17
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                        lineNumber: 328,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                lineNumber: 315,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                        lineNumber: 268,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                lineNumber: 241,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$headlessui$2e$esm$2e$js__$28$ecmascript$29$__["Dialog"], {
                                open: mobileMenuOpen,
                                onClose: setMobileMenuOpen,
                                className: "lg:hidden",
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$headlessui$2e$esm$2e$js__$28$ecmascript$29$__["DialogPanel"], {
                                    className: "fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-indigo-600 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                                    href: "/",
                                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__["default"], {
                                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$logo3$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$logo3$2e$png__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                                        alt: "logo",
                                                        width: 150,
                                                        loading: "lazy"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                        lineNumber: 388,
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                    lineNumber: 387,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                    type: "button",
                                                    onClick: ()=>setMobileMenuOpen(false),
                                                    className: "-m-2.5 rounded-md p-2.5 text-white",
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                            className: "sr-only",
                                                            children: "Close menu"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                            lineNumber: 395,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$index$2e$js__$28$ecmascript$29$__["XMarkIcon"], {
                                                            "aria-hidden": "true",
                                                            className: "h-6 w-6"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                            lineNumber: 396,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                    lineNumber: 390,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                            lineNumber: 386,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "mt-6 flow-root",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "-my-6 divide-y divide-gray-500/10",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "space-y-2 py-6",
                                                        children: items.map((item)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$headlessui$2e$esm$2e$js__$28$ecmascript$29$__["Disclosure"], {
                                                                as: "div",
                                                                className: "-mx-3",
                                                                children: [
                                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$headlessui$2e$esm$2e$js__$28$ecmascript$29$__["DisclosureButton"], {
                                                                        className: "group flex w-full items-center rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-indigo-400",
                                                                        children: [
                                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                                className: "flex mr-2 h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12",
                                                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$index$2e$js__$28$ecmascript$29$__["TicketIcon"], {
                                                                                    "aria-hidden": "true",
                                                                                    className: "h-6 w-6"
                                                                                }, void 0, false, {
                                                                                    fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                                                    lineNumber: 406,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                                                lineNumber: 405,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            item.label,
                                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$20$2f$solid$2f$esm$2f$index$2e$js__$28$ecmascript$29$__["ChevronDownIcon"], {
                                                                                "aria-hidden": "true",
                                                                                className: "ml-2 h-5 w-5 flex-none group-data-[open]:rotate-180"
                                                                            }, void 0, false, {
                                                                                fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                                                lineNumber: 409,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                                        lineNumber: 404,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$headlessui$2e$esm$2e$js__$28$ecmascript$29$__["DisclosurePanel"], {
                                                                        className: "mt-2 space-y-2",
                                                                        children: item.subMenu.map((tab)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$headlessui$2e$esm$2e$js__$28$ecmascript$29$__["DisclosureButton"], {
                                                                                as: "a",
                                                                                href: tab.href,
                                                                                className: "block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-indigo-400",
                                                                                children: tab.label
                                                                            }, tab.label, false, {
                                                                                fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                                                lineNumber: 417,
                                                                                columnNumber: 27
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                                        lineNumber: 415,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, item.label, true, {
                                                                fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                                lineNumber: 403,
                                                                columnNumber: 21
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                        lineNumber: 401,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "py-6 border-t border-gray-200 pb-3 pt-4",
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                className: "flex items-center px-4 mb-5",
                                                                children: [
                                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                        className: "flex-shrink-0 relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
                                                                        children: load ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                            className: "h-12 w-12 rounded-full text-4xl flex items-center justify-center text-blue-600",
                                                                            children: dataUser.login[0]
                                                                        }, void 0, false, {
                                                                            fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                                            lineNumber: 434,
                                                                            columnNumber: 25
                                                                        }, this) : ""
                                                                    }, void 0, false, {
                                                                        fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                                        lineNumber: 432,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                        className: "ml-3",
                                                                        children: [
                                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                                className: "text-base font-medium text-white",
                                                                                children: load ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                                    className: "text-lg font-semibold text-gray-50",
                                                                                    children: dataUser.login
                                                                                }, void 0, false, {
                                                                                    fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                                                    lineNumber: 444,
                                                                                    columnNumber: 27
                                                                                }, this) : "Username"
                                                                            }, void 0, false, {
                                                                                fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                                                lineNumber: 442,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                                className: "text-sm font-medium text-gray-50",
                                                                                children: "Any description"
                                                                            }, void 0, false, {
                                                                                fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                                                lineNumber: 451,
                                                                                columnNumber: 23
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                                        lineNumber: 441,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                                        type: "button",
                                                                        className: "relative ml-auto flex-shrink-0 rounded-full p-1 text-white hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
                                                                        children: [
                                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                                className: "absolute -inset-1.5"
                                                                            }, void 0, false, {
                                                                                fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                                                lineNumber: 459,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                                className: "sr-only",
                                                                                children: "View notifications"
                                                                            }, void 0, false, {
                                                                                fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                                                lineNumber: 460,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                                                                href: `/fortune`,
                                                                                className: "block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 flex items-center",
                                                                                children: load ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Badge$2f$index$2e$js__$28$ecmascript$29$__["default"], {
                                                                                    badgeContent: `${dataUser.tickets}`,
                                                                                    color: "primary",
                                                                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["Fragment"], {
                                                                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$index$2e$js__$28$ecmascript$29$__["TicketIcon"], {
                                                                                            "aria-hidden": "true",
                                                                                            className: "h-8 w-8 text-white transition-colors duration-300 ease-in-out hover:text-gray-400"
                                                                                        }, void 0, false, {
                                                                                            fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                                                            lineNumber: 471,
                                                                                            columnNumber: 31
                                                                                        }, this)
                                                                                    }, void 0, false)
                                                                                }, void 0, false, {
                                                                                    fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                                                    lineNumber: 466,
                                                                                    columnNumber: 27
                                                                                }, this) : ""
                                                                            }, void 0, false, {
                                                                                fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                                                lineNumber: 461,
                                                                                columnNumber: 23
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                                        lineNumber: 455,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                                lineNumber: 431,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$headlessui$2e$esm$2e$js__$28$ecmascript$29$__["Disclosure"], {
                                                                as: "div",
                                                                className: "-mx-3",
                                                                children: userNavigation.map((item)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$headlessui$2e$esm$2e$js__$28$ecmascript$29$__["DisclosureButton"], {
                                                                        as: "a",
                                                                        href: item.href,
                                                                        className: "group flex w-full items-center rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-indigo-400",
                                                                        children: [
                                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                                className: "flex mr-2 h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12",
                                                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$index$2e$js__$28$ecmascript$29$__["TicketIcon"], {
                                                                                    "aria-hidden": "true",
                                                                                    className: "h-6 w-6"
                                                                                }, void 0, false, {
                                                                                    fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                                                    lineNumber: 493,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                                                lineNumber: 492,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            item.name
                                                                        ]
                                                                    }, item.name, true, {
                                                                        fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                                        lineNumber: 486,
                                                                        columnNumber: 23
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                                lineNumber: 484,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                className: "flex flex-row items-center justify-center",
                                                                children: [
                                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                        className: "w-full",
                                                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$BrandsSwitcher$2e$jsx__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                                                    fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                                                    lineNumber: 503,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                                    className: "block text-sm font-medium leading-6 text-gray-900 text-center w-full text-white"
                                                                                }, void 0, false, {
                                                                                    fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                                                    lineNumber: 504,
                                                                                    columnNumber: 25
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                                            lineNumber: 502,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                                        lineNumber: 501,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                        className: "w-full",
                                                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageSwitcher$2e$jsx__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                                                    fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                                                    lineNumber: 509,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                                    className: "block text-sm font-medium leading-6 text-gray-900 w-full text-center text-white"
                                                                                }, void 0, false, {
                                                                                    fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                                                    lineNumber: 510,
                                                                                    columnNumber: 25
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                                            lineNumber: 508,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                                        lineNumber: 507,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                                lineNumber: 500,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                        lineNumber: 430,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                                lineNumber: 400,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                            lineNumber: 399,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                    lineNumber: 385,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/components/Header_tailwind/index.jsx>",
                                lineNumber: 380,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/components/Header_tailwind/index.jsx>",
                        lineNumber: 240,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/components/Header_tailwind/index.jsx>",
                lineNumber: 230,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true);
};
;

})()),

};

//# sourceMappingURL=components_Header_tailwind_258f86._.js.map