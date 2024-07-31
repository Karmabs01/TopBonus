(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/components_Timer_jsx_312715._.js", {

"[project]/components/Timer.jsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
const Timer = ()=>{
    const [timeLeft, setTimeLeft] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](null);
    const { t } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$28$ecmascript$29$__["useTranslation"]();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        const storedStartDate = localStorage.getItem("startDate");
        let startDate;
        if (storedStartDate) {
            startDate = new Date(storedStartDate);
            const now = new Date();
            const timeDiff = now - startDate;
            if (timeDiff >= 48 * 60 * 60 * 1000) {
                startDate = new Date();
                localStorage.setItem("startDate", startDate);
            }
        } else {
            startDate = new Date();
            localStorage.setItem("startDate", startDate);
        }
        const updateTimer = ()=>{
            const now = new Date();
            const timeDiff = 48 * 60 * 60 * 1000 - (now - startDate);
            if (timeDiff <= 0) {
                setTimeLeft(null);
            } else {
                const hours = Math.floor(timeDiff / (1000 * 60 * 60));
                const minutes = Math.floor(timeDiff % (1000 * 60 * 60) / (1000 * 60));
                const seconds = Math.floor(timeDiff % (1000 * 60) / 1000);
                setTimeLeft({
                    hours: String(hours).padStart(2, "0"),
                    minutes: String(minutes).padStart(2, "0"),
                    seconds: String(seconds).padStart(2, "0")
                });
            }
        };
        const timerInterval = setInterval(updateTimer, 1000);
        updateTimer();
        return ()=>clearInterval(timerInterval);
    }, []);
    if (timeLeft === null) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
            children: "..."
        }, void 0, false, {
            fileName: "<[project]/components/Timer.jsx>",
            lineNumber: 59,
            columnNumber: 12
        }, this);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "timer",
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                children: t("Expires in:")
            }, void 0, false, {
                fileName: "<[project]/components/Timer.jsx>",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            " ",
            timeLeft.hours,
            ":",
            timeLeft.minutes,
            ":",
            timeLeft.seconds
        ]
    }, void 0, true, {
        fileName: "<[project]/components/Timer.jsx>",
        lineNumber: 63,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Timer;

})()),
}]);

//# sourceMappingURL=components_Timer_jsx_312715._.js.map