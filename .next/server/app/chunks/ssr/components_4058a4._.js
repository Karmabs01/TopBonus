(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/components_4058a4._.js", {

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
}]);

//# sourceMappingURL=components_4058a4._.js.map