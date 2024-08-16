(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/_1178d6._.js", {

"[project]/node_modules/@vercel/analytics/dist/react/index.mjs (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "Analytics": ()=>Analytics,
    "track": ()=>track
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
var name = "@vercel/analytics";
var version = "1.3.1";
var initQueue = ()=>{
    if (window.va) return;
    window.va = function a(...params) {
        (window.vaq = window.vaq || []).push(params);
    };
};
function isBrowser() {
    return typeof window !== "undefined";
}
function detectEnvironment() {
    try {
        const env = process.env.NODE_ENV;
        if (env === "development" || env === "test") {
            return "development";
        }
    } catch (e) {}
    return "production";
}
function setMode(mode = "auto") {
    if (mode === "auto") {
        window.vam = detectEnvironment();
        return;
    }
    window.vam = mode;
}
function getMode() {
    const mode = isBrowser() ? window.vam : detectEnvironment();
    return mode || "production";
}
function isProduction() {
    return getMode() === "production";
}
function isDevelopment() {
    return getMode() === "development";
}
function removeKey(key, { [key]: _, ...rest }) {
    return rest;
}
function parseProperties(properties, options) {
    if (!properties) return void 0;
    let props = properties;
    const errorProperties = [];
    for (const [key, value] of Object.entries(properties)){
        if (typeof value === "object" && value !== null) {
            if (options.strip) {
                props = removeKey(key, props);
            } else {
                errorProperties.push(key);
            }
        }
    }
    if (errorProperties.length > 0 && !options.strip) {
        throw Error(`The following properties are not valid: ${errorProperties.join(", ")}. Only strings, numbers, booleans, and null are allowed.`);
    }
    return props;
}
var DEV_SCRIPT_URL = "https://va.vercel-scripts.com/v1/script.debug.js";
var PROD_SCRIPT_URL = "/_vercel/insights/script.js";
function inject(props = {
    debug: true
}) {
    var _a;
    if (!isBrowser()) return;
    setMode(props.mode);
    initQueue();
    if (props.beforeSend) {
        (_a = window.va) == null ? void 0 : _a.call(window, "beforeSend", props.beforeSend);
    }
    const src = props.scriptSrc || (isDevelopment() ? DEV_SCRIPT_URL : PROD_SCRIPT_URL);
    if (document.head.querySelector(`script[src*="${src}"]`)) return;
    const script = document.createElement("script");
    script.src = src;
    script.defer = true;
    script.dataset.sdkn = name + (props.framework ? `/${props.framework}` : "");
    script.dataset.sdkv = version;
    if (props.disableAutoTrack) {
        script.dataset.disableAutoTrack = "1";
    }
    if (props.endpoint) {
        script.dataset.endpoint = props.endpoint;
    }
    if (props.dsn) {
        script.dataset.dsn = props.dsn;
    }
    script.onerror = ()=>{
        const errorMessage = isDevelopment() ? "Please check if any ad blockers are enabled and try again." : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
        console.log(`[Vercel Web Analytics] Failed to load script from ${src}. ${errorMessage}`);
    };
    if (isDevelopment() && props.debug === false) {
        script.dataset.debug = "false";
    }
    document.head.appendChild(script);
}
function track(name2, properties, options) {
    var _a, _b;
    if (!isBrowser()) {
        const msg = "[Vercel Web Analytics] Please import `track` from `@vercel/analytics/server` when using this function in a server environment";
        if (isProduction()) {
            console.warn(msg);
        } else {
            throw new Error(msg);
        }
        return;
    }
    if (!properties) {
        (_a = window.va) == null ? void 0 : _a.call(window, "event", {
            name: name2,
            options
        });
        return;
    }
    try {
        const props = parseProperties(properties, {
            strip: isProduction()
        });
        (_b = window.va) == null ? void 0 : _b.call(window, "event", {
            name: name2,
            data: props,
            options
        });
    } catch (err) {
        if (err instanceof Error && isDevelopment()) {
            console.error(err);
        }
    }
}
function pageview({ route, path }) {
    var _a;
    (_a = window.va) == null ? void 0 : _a.call(window, "pageview", {
        route,
        path
    });
}
function Analytics(props) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        inject({
            framework: props.framework || "react",
            ...props.route !== void 0 && {
                disableAutoTrack: true
            },
            ...props
        });
    }, []);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        if (props.route && props.path) {
            pageview({
                route: props.route,
                path: props.path
            });
        }
    }, [
        props.route,
        props.path
    ]);
    return null;
}
;

})()),
"[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
exports._ = exports._interop_require_default = _interop_require_default;
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

}.call(this) }),
"[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
exports._ = exports._interop_require_wildcard = _interop_require_wildcard;
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}

}.call(this) }),
"[project]/node_modules/@swc/helpers/cjs/_class_private_field_loose_base.cjs (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
exports._ = exports._class_private_field_loose_base = _class_private_field_loose_base;
function _class_private_field_loose_base(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
        throw new TypeError("attempted to use private field on non-instance");
    }
    return receiver;
}

}.call(this) }),
"[project]/node_modules/@swc/helpers/cjs/_class_private_field_loose_key.cjs (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
var id = 0;
exports._ = exports._class_private_field_loose_key = _class_private_field_loose_key;
function _class_private_field_loose_key(name) {
    return "__private_" + id++ + "_" + name;
}

}.call(this) }),
"[project]/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
exports._ = exports._tagged_template_literal_loose = _tagged_template_literal_loose;
function _tagged_template_literal_loose(strings, raw) {
    if (!raw) raw = strings.slice(0);
    strings.raw = raw;
    return strings;
}

}.call(this) }),
"[project]/node_modules/@swc/helpers/esm/_interop_require_default.js (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "_": ()=>_interop_require_default,
    "_interop_require_default": ()=>_interop_require_default
});
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
;

})()),
"[project]/node_modules/@swc/helpers/esm/_interop_require_wildcard.js (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "_": ()=>_interop_require_wildcard,
    "_interop_require_wildcard": ()=>_interop_require_wildcard
});
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
;

})()),
"[project]/node_modules/@swc/helpers/esm/_class_private_field_loose_base.js (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "_": ()=>_class_private_field_loose_base,
    "_class_private_field_loose_base": ()=>_class_private_field_loose_base
});
function _class_private_field_loose_base(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
        throw new TypeError("attempted to use private field on non-instance");
    }
    return receiver;
}
;

})()),
"[project]/node_modules/@swc/helpers/esm/_class_private_field_loose_key.js (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "_": ()=>_class_private_field_loose_key,
    "_class_private_field_loose_key": ()=>_class_private_field_loose_key
});
var id = 0;
function _class_private_field_loose_key(name) {
    return "__private_" + id++ + "_" + name;
}
;

})()),
"[project]/node_modules/@swc/helpers/esm/_tagged_template_literal_loose.js (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "_": ()=>_tagged_template_literal_loose,
    "_tagged_template_literal_loose": ()=>_tagged_template_literal_loose
});
function _tagged_template_literal_loose(strings, raw) {
    if (!raw) raw = strings.slice(0);
    strings.raw = raw;
    return strings;
}
;

})()),
"[project]/node_modules/@swc/helpers/esm/_class_extract_field_descriptor.js (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "_": ()=>_class_extract_field_descriptor,
    "_class_extract_field_descriptor": ()=>_class_extract_field_descriptor
});
function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to " + action + " private field on non-instance");
    return privateMap.get(receiver);
}
;

})()),
"[project]/node_modules/@swc/helpers/esm/_class_apply_descriptor_get.js (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "_": ()=>_class_apply_descriptor_get,
    "_class_apply_descriptor_get": ()=>_class_apply_descriptor_get
});
function _class_apply_descriptor_get(receiver, descriptor) {
    if (descriptor.get) return descriptor.get.call(receiver);
    return descriptor.value;
}
;

})()),
"[project]/node_modules/@swc/helpers/esm/_class_private_field_get.js (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "_": ()=>_class_private_field_get,
    "_class_private_field_get": ()=>_class_private_field_get
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_apply_descriptor_get$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@swc/helpers/esm/_class_apply_descriptor_get.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_extract_field_descriptor$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@swc/helpers/esm/_class_extract_field_descriptor.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function _class_private_field_get(receiver, privateMap) {
    var descriptor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_extract_field_descriptor$2e$js__$28$ecmascript$29$__["_class_extract_field_descriptor"](receiver, privateMap, "get");
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_apply_descriptor_get$2e$js__$28$ecmascript$29$__["_class_apply_descriptor_get"](receiver, descriptor);
}
;

})()),
"[project]/node_modules/@swc/helpers/esm/_check_private_redeclaration.js (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "_": ()=>_check_private_redeclaration,
    "_check_private_redeclaration": ()=>_check_private_redeclaration
});
function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}
;

})()),
"[project]/node_modules/@swc/helpers/esm/_class_private_field_init.js (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "_": ()=>_class_private_field_init,
    "_class_private_field_init": ()=>_class_private_field_init
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_check_private_redeclaration$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@swc/helpers/esm/_check_private_redeclaration.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function _class_private_field_init(obj, privateMap, value) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_check_private_redeclaration$2e$js__$28$ecmascript$29$__["_check_private_redeclaration"](obj, privateMap);
    privateMap.set(obj, value);
}
;

})()),
"[project]/node_modules/@swc/helpers/esm/_class_apply_descriptor_set.js (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "_": ()=>_class_apply_descriptor_set,
    "_class_apply_descriptor_set": ()=>_class_apply_descriptor_set
});
function _class_apply_descriptor_set(receiver, descriptor, value) {
    if (descriptor.set) descriptor.set.call(receiver, value);
    else {
        if (!descriptor.writable) {
            throw new TypeError("attempted to set read only private field");
        }
        descriptor.value = value;
    }
}
;

})()),
"[project]/node_modules/@swc/helpers/esm/_class_private_field_set.js (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "_": ()=>_class_private_field_set,
    "_class_private_field_set": ()=>_class_private_field_set
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_apply_descriptor_set$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@swc/helpers/esm/_class_apply_descriptor_set.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_extract_field_descriptor$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@swc/helpers/esm/_class_extract_field_descriptor.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function _class_private_field_set(receiver, privateMap, value) {
    var descriptor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_extract_field_descriptor$2e$js__$28$ecmascript$29$__["_class_extract_field_descriptor"](receiver, privateMap, "set");
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_apply_descriptor_set$2e$js__$28$ecmascript$29$__["_class_apply_descriptor_set"](receiver, descriptor, value);
    return value;
}
;

})()),
"[project]/node_modules/swr/_internal/dist/index.mjs (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "IS_REACT_LEGACY": ()=>IS_REACT_LEGACY,
    "IS_SERVER": ()=>IS_SERVER,
    "OBJECT": ()=>OBJECT,
    "SWRConfig": ()=>SWRConfig,
    "SWRGlobalState": ()=>SWRGlobalState,
    "UNDEFINED": ()=>UNDEFINED,
    "cache": ()=>cache,
    "compare": ()=>compare,
    "createCacheHelper": ()=>createCacheHelper,
    "defaultConfig": ()=>defaultConfig,
    "defaultConfigOptions": ()=>defaultConfigOptions,
    "getTimestamp": ()=>getTimestamp,
    "hasRequestAnimationFrame": ()=>hasRequestAnimationFrame,
    "initCache": ()=>initCache,
    "internalMutate": ()=>internalMutate,
    "isDocumentDefined": ()=>isDocumentDefined,
    "isFunction": ()=>isFunction,
    "isPromiseLike": ()=>isPromiseLike,
    "isUndefined": ()=>isUndefined,
    "isWindowDefined": ()=>isWindowDefined,
    "mergeConfigs": ()=>mergeConfigs,
    "mergeObjects": ()=>mergeObjects,
    "mutate": ()=>mutate,
    "noop": ()=>noop,
    "normalize": ()=>normalize,
    "preload": ()=>preload,
    "preset": ()=>preset,
    "rAF": ()=>rAF,
    "revalidateEvents": ()=>constants,
    "serialize": ()=>serialize,
    "slowConnection": ()=>slowConnection,
    "stableHash": ()=>stableHash,
    "subscribeCallback": ()=>subscribeCallback,
    "useIsomorphicLayoutEffect": ()=>useIsomorphicLayoutEffect,
    "useSWRConfig": ()=>useSWRConfig,
    "useStateWithDeps": ()=>useStateWithDeps,
    "withArgs": ()=>withArgs,
    "withMiddleware": ()=>withMiddleware
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const noop = ()=>{};
const UNDEFINED = noop();
const OBJECT = Object;
const isUndefined = (v)=>v === UNDEFINED;
const isFunction = (v)=>typeof v == 'function';
const mergeObjects = (a, b)=>({
        ...a,
        ...b
    });
const isPromiseLike = (x)=>isFunction(x.then);
const table = new WeakMap();
let counter = 0;
const stableHash = (arg)=>{
    const type = typeof arg;
    const constructor = arg && arg.constructor;
    const isDate = constructor == Date;
    let result;
    let index;
    if (OBJECT(arg) === arg && !isDate && constructor != RegExp) {
        result = table.get(arg);
        if (result) return result;
        result = ++counter + '~';
        table.set(arg, result);
        if (constructor == Array) {
            result = '@';
            for(index = 0; index < arg.length; index++){
                result += stableHash(arg[index]) + ',';
            }
            table.set(arg, result);
        }
        if (constructor == OBJECT) {
            result = '#';
            const keys = OBJECT.keys(arg).sort();
            while(!isUndefined(index = keys.pop())){
                if (!isUndefined(arg[index])) {
                    result += index + ':' + stableHash(arg[index]) + ',';
                }
            }
            table.set(arg, result);
        }
    } else {
        result = isDate ? arg.toJSON() : type == 'symbol' ? arg.toString() : type == 'string' ? JSON.stringify(arg) : '' + arg;
    }
    return result;
};
const SWRGlobalState = new WeakMap();
const EMPTY_CACHE = {};
const INITIAL_CACHE = {};
const STR_UNDEFINED = 'undefined';
const isWindowDefined = typeof window != STR_UNDEFINED;
const isDocumentDefined = typeof document != STR_UNDEFINED;
const hasRequestAnimationFrame = ()=>isWindowDefined && typeof window['requestAnimationFrame'] != STR_UNDEFINED;
const createCacheHelper = (cache, key)=>{
    const state = SWRGlobalState.get(cache);
    return [
        ()=>!isUndefined(key) && cache.get(key) || EMPTY_CACHE,
        (info)=>{
            if (!isUndefined(key)) {
                const prev = cache.get(key);
                if (!(key in INITIAL_CACHE)) {
                    INITIAL_CACHE[key] = prev;
                }
                state[5](key, mergeObjects(prev, info), prev || EMPTY_CACHE);
            }
        },
        state[6],
        ()=>{
            if (!isUndefined(key)) {
                if (key in INITIAL_CACHE) return INITIAL_CACHE[key];
            }
            return !isUndefined(key) && cache.get(key) || EMPTY_CACHE;
        }
    ];
};
let online = true;
const isOnline = ()=>online;
const [onWindowEvent, offWindowEvent] = isWindowDefined && window.addEventListener ? [
    window.addEventListener.bind(window),
    window.removeEventListener.bind(window)
] : [
    noop,
    noop
];
const isVisible = ()=>{
    const visibilityState = isDocumentDefined && document.visibilityState;
    return isUndefined(visibilityState) || visibilityState !== 'hidden';
};
const initFocus = (callback)=>{
    if (isDocumentDefined) {
        document.addEventListener('visibilitychange', callback);
    }
    onWindowEvent('focus', callback);
    return ()=>{
        if (isDocumentDefined) {
            document.removeEventListener('visibilitychange', callback);
        }
        offWindowEvent('focus', callback);
    };
};
const initReconnect = (callback)=>{
    const onOnline = ()=>{
        online = true;
        callback();
    };
    const onOffline = ()=>{
        online = false;
    };
    onWindowEvent('online', onOnline);
    onWindowEvent('offline', onOffline);
    return ()=>{
        offWindowEvent('online', onOnline);
        offWindowEvent('offline', onOffline);
    };
};
const preset = {
    isOnline,
    isVisible
};
const defaultConfigOptions = {
    initFocus,
    initReconnect
};
const IS_REACT_LEGACY = !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["default"].useId;
const IS_SERVER = !isWindowDefined || 'Deno' in window;
const rAF = (f)=>hasRequestAnimationFrame() ? window['requestAnimationFrame'](f) : setTimeout(f, 1);
const useIsomorphicLayoutEffect = IS_SERVER ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useLayoutEffect"];
const navigatorConnection = typeof navigator !== 'undefined' && navigator.connection;
const slowConnection = !IS_SERVER && navigatorConnection && ([
    'slow-2g',
    '2g'
].includes(navigatorConnection.effectiveType) || navigatorConnection.saveData);
const serialize = (key)=>{
    if (isFunction(key)) {
        try {
            key = key();
        } catch (err) {
            key = '';
        }
    }
    const args = key;
    key = typeof key == 'string' ? key : (Array.isArray(key) ? key.length : key) ? stableHash(key) : '';
    return [
        key,
        args
    ];
};
let __timestamp = 0;
const getTimestamp = ()=>++__timestamp;
const FOCUS_EVENT = 0;
const RECONNECT_EVENT = 1;
const MUTATE_EVENT = 2;
const ERROR_REVALIDATE_EVENT = 3;
var constants = {
    __proto__: null,
    ERROR_REVALIDATE_EVENT: ERROR_REVALIDATE_EVENT,
    FOCUS_EVENT: FOCUS_EVENT,
    MUTATE_EVENT: MUTATE_EVENT,
    RECONNECT_EVENT: RECONNECT_EVENT
};
async function internalMutate(...args) {
    const [cache, _key, _data, _opts] = args;
    const options = mergeObjects({
        populateCache: true,
        throwOnError: true
    }, typeof _opts === 'boolean' ? {
        revalidate: _opts
    } : _opts || {});
    let populateCache = options.populateCache;
    const rollbackOnErrorOption = options.rollbackOnError;
    let optimisticData = options.optimisticData;
    const revalidate = options.revalidate !== false;
    const rollbackOnError = (error)=>{
        return typeof rollbackOnErrorOption === 'function' ? rollbackOnErrorOption(error) : rollbackOnErrorOption !== false;
    };
    const throwOnError = options.throwOnError;
    if (isFunction(_key)) {
        const keyFilter = _key;
        const matchedKeys = [];
        const it = cache.keys();
        for (const key of it){
            if (!/^\$(inf|sub)\$/.test(key) && keyFilter(cache.get(key)._k)) {
                matchedKeys.push(key);
            }
        }
        return Promise.all(matchedKeys.map(mutateByKey));
    }
    return mutateByKey(_key);
    async function mutateByKey(_k) {
        const [key] = serialize(_k);
        if (!key) return;
        const [get, set] = createCacheHelper(cache, key);
        const [EVENT_REVALIDATORS, MUTATION, FETCH, PRELOAD] = SWRGlobalState.get(cache);
        const revalidators = EVENT_REVALIDATORS[key];
        const startRevalidate = ()=>{
            if (revalidate) {
                delete FETCH[key];
                delete PRELOAD[key];
                if (revalidators && revalidators[0]) {
                    return revalidators[0](MUTATE_EVENT).then(()=>get().data);
                }
            }
            return get().data;
        };
        if (args.length < 3) {
            return startRevalidate();
        }
        let data = _data;
        let error;
        const beforeMutationTs = getTimestamp();
        MUTATION[key] = [
            beforeMutationTs,
            0
        ];
        const hasOptimisticData = !isUndefined(optimisticData);
        const state = get();
        const displayedData = state.data;
        const currentData = state._c;
        const committedData = isUndefined(currentData) ? displayedData : currentData;
        if (hasOptimisticData) {
            optimisticData = isFunction(optimisticData) ? optimisticData(committedData, displayedData) : optimisticData;
            set({
                data: optimisticData,
                _c: committedData
            });
        }
        if (isFunction(data)) {
            try {
                data = data(committedData);
            } catch (err) {
                error = err;
            }
        }
        if (data && isPromiseLike(data)) {
            data = await data.catch((err)=>{
                error = err;
            });
            if (beforeMutationTs !== MUTATION[key][0]) {
                if (error) throw error;
                return data;
            } else if (error && hasOptimisticData && rollbackOnError(error)) {
                populateCache = true;
                data = committedData;
                set({
                    data,
                    _c: UNDEFINED
                });
            }
        }
        if (populateCache) {
            if (!error) {
                if (isFunction(populateCache)) {
                    data = populateCache(data, committedData);
                }
                set({
                    data,
                    error: UNDEFINED,
                    _c: UNDEFINED
                });
            }
        }
        MUTATION[key][1] = getTimestamp();
        const res = await startRevalidate();
        set({
            _c: UNDEFINED
        });
        if (error) {
            if (throwOnError) throw error;
            return;
        }
        return populateCache ? res : data;
    }
}
const revalidateAllKeys = (revalidators, type)=>{
    for(const key in revalidators){
        if (revalidators[key][0]) revalidators[key][0](type);
    }
};
const initCache = (provider, options)=>{
    if (!SWRGlobalState.has(provider)) {
        const opts = mergeObjects(defaultConfigOptions, options);
        const EVENT_REVALIDATORS = {};
        const mutate = internalMutate.bind(UNDEFINED, provider);
        let unmount = noop;
        const subscriptions = {};
        const subscribe = (key, callback)=>{
            const subs = subscriptions[key] || [];
            subscriptions[key] = subs;
            subs.push(callback);
            return ()=>subs.splice(subs.indexOf(callback), 1);
        };
        const setter = (key, value, prev)=>{
            provider.set(key, value);
            const subs = subscriptions[key];
            if (subs) {
                for (const fn of subs){
                    fn(value, prev);
                }
            }
        };
        const initProvider = ()=>{
            if (!SWRGlobalState.has(provider)) {
                SWRGlobalState.set(provider, [
                    EVENT_REVALIDATORS,
                    {},
                    {},
                    {},
                    mutate,
                    setter,
                    subscribe
                ]);
                if (!IS_SERVER) {
                    const releaseFocus = opts.initFocus(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, FOCUS_EVENT)));
                    const releaseReconnect = opts.initReconnect(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, RECONNECT_EVENT)));
                    unmount = ()=>{
                        releaseFocus && releaseFocus();
                        releaseReconnect && releaseReconnect();
                        SWRGlobalState.delete(provider);
                    };
                }
            }
        };
        initProvider();
        return [
            provider,
            mutate,
            initProvider,
            unmount
        ];
    }
    return [
        provider,
        SWRGlobalState.get(provider)[4]
    ];
};
const onErrorRetry = (_, __, config, revalidate, opts)=>{
    const maxRetryCount = config.errorRetryCount;
    const currentRetryCount = opts.retryCount;
    const timeout = ~~((Math.random() + 0.5) * (1 << (currentRetryCount < 8 ? currentRetryCount : 8))) * config.errorRetryInterval;
    if (!isUndefined(maxRetryCount) && currentRetryCount > maxRetryCount) {
        return;
    }
    setTimeout(revalidate, timeout, opts);
};
const compare = (currentData, newData)=>stableHash(currentData) == stableHash(newData);
const [cache, mutate] = initCache(new Map());
const defaultConfig = mergeObjects({
    onLoadingSlow: noop,
    onSuccess: noop,
    onError: noop,
    onErrorRetry,
    onDiscarded: noop,
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    revalidateIfStale: true,
    shouldRetryOnError: true,
    errorRetryInterval: slowConnection ? 10000 : 5000,
    focusThrottleInterval: 5 * 1000,
    dedupingInterval: 2 * 1000,
    loadingTimeout: slowConnection ? 5000 : 3000,
    compare,
    isPaused: ()=>false,
    cache,
    mutate,
    fallback: {}
}, preset);
const mergeConfigs = (a, b)=>{
    const v = mergeObjects(a, b);
    if (b) {
        const { use: u1, fallback: f1 } = a;
        const { use: u2, fallback: f2 } = b;
        if (u1 && u2) {
            v.use = u1.concat(u2);
        }
        if (f1 && f2) {
            v.fallback = mergeObjects(f1, f2);
        }
    }
    return v;
};
const SWRConfigContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["createContext"]({});
const SWRConfig = (props)=>{
    const { value } = props;
    const parentConfig = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useContext"](SWRConfigContext);
    const isFunctionalConfig = isFunction(value);
    const config = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useMemo"](()=>isFunctionalConfig ? value(parentConfig) : value, [
        isFunctionalConfig,
        parentConfig,
        value
    ]);
    const extendedConfig = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useMemo"](()=>isFunctionalConfig ? config : mergeConfigs(parentConfig, config), [
        isFunctionalConfig,
        parentConfig,
        config
    ]);
    const provider = config && config.provider;
    const cacheContextRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useRef"](UNDEFINED);
    if (provider && !cacheContextRef.current) {
        cacheContextRef.current = initCache(provider(extendedConfig.cache || cache), config);
    }
    const cacheContext = cacheContextRef.current;
    if (cacheContext) {
        extendedConfig.cache = cacheContext[0];
        extendedConfig.mutate = cacheContext[1];
    }
    useIsomorphicLayoutEffect(()=>{
        if (cacheContext) {
            cacheContext[2] && cacheContext[2]();
            return cacheContext[3];
        }
    }, []);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["createElement"](SWRConfigContext.Provider, mergeObjects(props, {
        value: extendedConfig
    }));
};
const enableDevtools = isWindowDefined && window.__SWR_DEVTOOLS_USE__;
const use = enableDevtools ? window.__SWR_DEVTOOLS_USE__ : [];
const setupDevTools = ()=>{
    if (enableDevtools) {
        window.__SWR_DEVTOOLS_REACT__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["default"];
    }
};
const normalize = (args)=>{
    return isFunction(args[1]) ? [
        args[0],
        args[1],
        args[2] || {}
    ] : [
        args[0],
        null,
        (args[1] === null ? args[2] : args[1]) || {}
    ];
};
const useSWRConfig = ()=>{
    return mergeObjects(defaultConfig, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useContext"](SWRConfigContext));
};
const preload = (key_, fetcher)=>{
    const [key, fnArg] = serialize(key_);
    const [, , , PRELOAD] = SWRGlobalState.get(cache);
    if (PRELOAD[key]) return PRELOAD[key];
    const req = fetcher(fnArg);
    PRELOAD[key] = req;
    return req;
};
const middleware = (useSWRNext)=>(key_, fetcher_, config)=>{
        const fetcher = fetcher_ && ((...args)=>{
            const [key] = serialize(key_);
            const [, , , PRELOAD] = SWRGlobalState.get(cache);
            const req = PRELOAD[key];
            if (isUndefined(req)) return fetcher_(...args);
            delete PRELOAD[key];
            return req;
        });
        return useSWRNext(key_, fetcher, config);
    };
const BUILT_IN_MIDDLEWARE = use.concat(middleware);
const withArgs = (hook)=>{
    return function useSWRArgs(...args) {
        const fallbackConfig = useSWRConfig();
        const [key, fn, _config] = normalize(args);
        const config = mergeConfigs(fallbackConfig, _config);
        let next = hook;
        const { use } = config;
        const middleware = (use || []).concat(BUILT_IN_MIDDLEWARE);
        for(let i = middleware.length; i--;){
            next = middleware[i](next);
        }
        return next(key, fn || config.fetcher || null, config);
    };
};
const useStateWithDeps = (state)=>{
    const rerender = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]({})[1];
    const unmountedRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useRef"](false);
    const stateRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useRef"](state);
    const stateDependenciesRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useRef"]({
        data: false,
        error: false,
        isValidating: false
    });
    const setState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useCallback"]((payload)=>{
        let shouldRerender = false;
        const currentState = stateRef.current;
        for(const _ in payload){
            const k = _;
            if (currentState[k] !== payload[k]) {
                currentState[k] = payload[k];
                if (stateDependenciesRef.current[k]) {
                    shouldRerender = true;
                }
            }
        }
        if (shouldRerender && !unmountedRef.current) {
            if (IS_REACT_LEGACY) {
                rerender({});
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["default"].startTransition(()=>rerender({}));
            }
        }
    }, [
        rerender
    ]);
    useIsomorphicLayoutEffect(()=>{
        unmountedRef.current = false;
        return ()=>{
            unmountedRef.current = true;
        };
    });
    return [
        stateRef,
        stateDependenciesRef.current,
        setState
    ];
};
const subscribeCallback = (key, callbacks, callback)=>{
    const keyedRevalidators = callbacks[key] || (callbacks[key] = []);
    keyedRevalidators.push(callback);
    return ()=>{
        const index = keyedRevalidators.indexOf(callback);
        if (index >= 0) {
            keyedRevalidators[index] = keyedRevalidators[keyedRevalidators.length - 1];
            keyedRevalidators.pop();
        }
    };
};
const withMiddleware = (useSWR, middleware)=>{
    return (...args)=>{
        const [key, fn, config] = normalize(args);
        const uses = (config.use || []).concat(middleware);
        return useSWR(key, fn, {
            ...config,
            use: uses
        });
    };
};
setupDevTools();
;

})()),
"[project]/node_modules/swr/core/dist/index.mjs (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "SWRConfig": ()=>SWRConfig,
    "default": ()=>useSWR,
    "mutate": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$_internal$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["mutate"],
    "preload": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$_internal$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["preload"],
    "unstable_serialize": ()=>unstable_serialize,
    "useSWRConfig": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$_internal$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["useSWRConfig"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/use-sync-external-store/shim/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$_internal$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/swr/_internal/dist/index.mjs (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
const unstable_serialize = (key)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$_internal$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["serialize"](key)[0];
const use = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["default"].use || ((promise)=>{
    if (promise.status === 'pending') {
        throw promise;
    } else if (promise.status === 'fulfilled') {
        return promise.value;
    } else if (promise.status === 'rejected') {
        throw promise.reason;
    } else {
        promise.status = 'pending';
        promise.then((v)=>{
            promise.status = 'fulfilled';
            promise.value = v;
        }, (e)=>{
            promise.status = 'rejected';
            promise.reason = e;
        });
        throw promise;
    }
});
const WITH_DEDUPE = {
    dedupe: true
};
const useSWRHandler = (_key, fetcher, config)=>{
    const { cache, compare, suspense, fallbackData, revalidateOnMount, revalidateIfStale, refreshInterval, refreshWhenHidden, refreshWhenOffline, keepPreviousData } = config;
    const [EVENT_REVALIDATORS, MUTATION, FETCH, PRELOAD] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$_internal$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["SWRGlobalState"].get(cache);
    const [key, fnArg] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$_internal$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["serialize"](_key);
    const initialMountedRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useRef"](false);
    const unmountedRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useRef"](false);
    const keyRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useRef"](key);
    const fetcherRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useRef"](fetcher);
    const configRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useRef"](config);
    const getConfig = ()=>configRef.current;
    const isActive = ()=>getConfig().isVisible() && getConfig().isOnline();
    const [getCache, setCache, subscribeCache, getInitialCache] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$_internal$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["createCacheHelper"](cache, key);
    const stateDependencies = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useRef"]({}).current;
    const fallback = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$_internal$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["isUndefined"](fallbackData) ? config.fallback[key] : fallbackData;
    const isEqual = (prev, current)=>{
        for(const _ in stateDependencies){
            const t = _;
            if (t === 'data') {
                if (!compare(prev[t], current[t])) {
                    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$_internal$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["isUndefined"](prev[t])) {
                        return false;
                    }
                    if (!compare(returnedData, current[t])) {
                        return false;
                    }
                }
            } else {
                if (current[t] !== prev[t]) {
                    return false;
                }
            }
        }
        return true;
    };
    const getSnapshot = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useMemo"](()=>{
        const shouldStartRequest = (()=>{
            if (!key) return false;
            if (!fetcher) return false;
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$_internal$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["isUndefined"](revalidateOnMount)) return revalidateOnMount;
            if (getConfig().isPaused()) return false;
            if (suspense) return false;
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$_internal$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["isUndefined"](revalidateIfStale)) return revalidateIfStale;
            return true;
        })();
        const getSelectedCache = (state)=>{
            const snapshot = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$_internal$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["mergeObjects"](state);
            delete snapshot._k;
            if (!shouldStartRequest) {
                return snapshot;
            }
            return {
                isValidating: true,
                isLoading: true,
                ...snapshot
            };
        };
        const cachedData = getCache();
        const initialData = getInitialCache();
        const clientSnapshot = getSelectedCache(cachedData);
        const serverSnapshot = cachedData === initialData ? clientSnapshot : getSelectedCache(initialData);
        let memorizedSnapshot = clientSnapshot;
        return [
            ()=>{
                const newSnapshot = getSelectedCache(getCache());
                const compareResult = isEqual(newSnapshot, memorizedSnapshot);
                if (compareResult) {
                    memorizedSnapshot.data = newSnapshot.data;
                    memorizedSnapshot.isLoading = newSnapshot.isLoading;
                    memorizedSnapshot.isValidating = newSnapshot.isValidating;
                    memorizedSnapshot.error = newSnapshot.error;
                    return memorizedSnapshot;
                } else {
                    memorizedSnapshot = newSnapshot;
                    return newSnapshot;
                }
            },
            ()=>serverSnapshot
        ];
    }, [
        cache,
        key
    ]);
    const cached = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$index$2e$js__$28$ecmascript$29$__["useSyncExternalStore"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useCallback"]((callback)=>subscribeCache(key, (current, prev)=>{
            if (!isEqual(prev, current)) callback();
        }), [
        cache,
        key
    ]), getSnapshot[0], getSnapshot[1]);
    const isInitialMount = !initialMountedRef.current;
    const hasRevalidator = EVENT_REVALIDATORS[key] && EVENT_REVALIDATORS[key].length > 0;
    const cachedData = cached.data;
    const data = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$_internal$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["isUndefined"](cachedData) ? fallback : cachedData;
    const error = cached.error;
    const laggyDataRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useRef"](data);
    const returnedData = keepPreviousData ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$_internal$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["isUndefined"](cachedData) ? laggyDataRef.current : cachedData : data;
    const shouldDoInitialRevalidation = (()=>{
        if (hasRevalidator && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$_internal$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["isUndefined"](error)) return false;
        if (isInitialMount && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$_internal$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["isUndefined"](revalidateOnMount)) return revalidateOnMount;
        if (getConfig().isPaused()) return false;
        if (suspense) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$_internal$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["isUndefined"](data) ? false : revalidateIfStale;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$_internal$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["isUndefined"](data) || revalidateIfStale;
    })();
    const defaultValidatingState = !!(key && fetcher && isInitialMount && shouldDoInitialRevalidation);
    const isValidating = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$_internal$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["isUndefined"](cached.isValidating) ? defaultValidatingState : cached.isValidating;
    const isLoading = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$_internal$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["isUndefined"](cached.isLoading) ? defaultValidatingState : cached.isLoading;
    const revalidate = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useCallback"](async (revalidateOpts)=>{
        const currentFetcher = fetcherRef.current;
        if (!key || !currentFetcher || unmountedRef.current || getConfig().isPaused()) {
            return false;
        }
        let newData;
        let startAt;
        let loading = true;
        const opts = revalidateOpts || {};
        const shouldStartNewRequest = !FETCH[key] || !opts.dedupe;
        const callbackSafeguard = ()=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$_internal$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["IS_REACT_LEGACY"]) {
                return !unmountedRef.current && key === keyRef.current && initialMountedRef.current;
            }
            return key === keyRef.current;
        };
        const finalState = {
            isValidating: false,
            isLoading: false
        };
        const finishRequestAndUpdateState = ()=>{
            setCache(finalState);
        };
        const cleanupState = ()=>{
            const requestInfo = FETCH[key];
            if (requestInfo && requestInfo[1] === startAt) {
                delete FETCH[key];
            }
        };
        const initialState = {
            isValidating: true
        };
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$_internal$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["isUndefined"](getCache().data)) {
            initialState.isLoading = true;
        }
        try {
            if (shouldStartNewRequest) {
                setCache(initialState);
                if (config.loadingTimeout && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$_internal$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["isUndefined"](getCache().data)) {
                    setTimeout(()=>{
                        if (loading && callbackSafeguard()) {
                            getConfig().onLoadingSlow(key, config);
                        }
                    }, config.loadingTimeout);
                }
                FETCH[key] = [
                    currentFetcher(fnArg),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$_internal$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["getTimestamp"]()
                ];
            }
            [newData, startAt] = FETCH[key];
            newData = await newData;
            if (shouldStartNewRequest) {
                setTimeout(cleanupState, config.dedupingInterval);
            }
            if (!FETCH[key] || FETCH[key][1] !== startAt) {
                if (shouldStartNewRequest) {
                    if (callbackSafeguard()) {
                        getConfig().onDiscarded(key);
                    }
                }
                return false;
            }
            finalState.error = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$_internal$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["UNDEFINED"];
            const mutationInfo = MUTATION[key];
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$_internal$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["isUndefined"](mutationInfo) && (startAt <= mutationInfo[0] || startAt <= mutationInfo[1] || mutationInfo[1] === 0)) {
                finishRequestAndUpdateState();
                if (shouldStartNewRequest) {
                    if (callbackSafeguard()) {
                        getConfig().onDiscarded(key);
                    }
                }
                return false;
            }
            const cacheData = getCache().data;
            finalState.data = compare(cacheData, newData) ? cacheData : newData;
            if (shouldStartNewRequest) {
                if (callbackSafeguard()) {
                    getConfig().onSuccess(newData, key, config);
                }
            }
        } catch (err) {
            cleanupState();
            const currentConfig = getConfig();
            const { shouldRetryOnError } = currentConfig;
            if (!currentConfig.isPaused()) {
                finalState.error = err;
                if (shouldStartNewRequest && callbackSafeguard()) {
                    currentConfig.onError(err, key, currentConfig);
                    if (shouldRetryOnError === true || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$_internal$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["isFunction"](shouldRetryOnError) && shouldRetryOnError(err)) {
                        if (isActive()) {
                            currentConfig.onErrorRetry(err, key, currentConfig, (_opts)=>{
                                const revalidators = EVENT_REVALIDATORS[key];
                                if (revalidators && revalidators[0]) {
                                    revalidators[0](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$_internal$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["revalidateEvents"].ERROR_REVALIDATE_EVENT, _opts);
                                }
                            }, {
                                retryCount: (opts.retryCount || 0) + 1,
                                dedupe: true
                            });
                        }
                    }
                }
            }
        }
        loading = false;
        finishRequestAndUpdateState();
        return true;
    }, [
        key,
        cache
    ]);
    const boundMutate = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useCallback"]((...args)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$_internal$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["internalMutate"](cache, keyRef.current, ...args);
    }, []);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$_internal$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["useIsomorphicLayoutEffect"](()=>{
        fetcherRef.current = fetcher;
        configRef.current = config;
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$_internal$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["isUndefined"](cachedData)) {
            laggyDataRef.current = cachedData;
        }
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$_internal$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["useIsomorphicLayoutEffect"](()=>{
        if (!key) return;
        const softRevalidate = revalidate.bind(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$_internal$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["UNDEFINED"], WITH_DEDUPE);
        let nextFocusRevalidatedAt = 0;
        const onRevalidate = (type, opts = {})=>{
            if (type == __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$_internal$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["revalidateEvents"].FOCUS_EVENT) {
                const now = Date.now();
                if (getConfig().revalidateOnFocus && now > nextFocusRevalidatedAt && isActive()) {
                    nextFocusRevalidatedAt = now + getConfig().focusThrottleInterval;
                    softRevalidate();
                }
            } else if (type == __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$_internal$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["revalidateEvents"].RECONNECT_EVENT) {
                if (getConfig().revalidateOnReconnect && isActive()) {
                    softRevalidate();
                }
            } else if (type == __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$_internal$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["revalidateEvents"].MUTATE_EVENT) {
                return revalidate();
            } else if (type == __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$_internal$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["revalidateEvents"].ERROR_REVALIDATE_EVENT) {
                return revalidate(opts);
            }
            return;
        };
        const unsubEvents = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$_internal$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["subscribeCallback"](key, EVENT_REVALIDATORS, onRevalidate);
        unmountedRef.current = false;
        keyRef.current = key;
        initialMountedRef.current = true;
        setCache({
            _k: fnArg
        });
        if (shouldDoInitialRevalidation) {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$_internal$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["isUndefined"](data) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$_internal$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["IS_SERVER"]) {
                softRevalidate();
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$_internal$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["rAF"](softRevalidate);
            }
        }
        return ()=>{
            unmountedRef.current = true;
            unsubEvents();
        };
    }, [
        key
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$_internal$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["useIsomorphicLayoutEffect"](()=>{
        let timer;
        function next() {
            const interval = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$_internal$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["isFunction"](refreshInterval) ? refreshInterval(getCache().data) : refreshInterval;
            if (interval && timer !== -1) {
                timer = setTimeout(execute, interval);
            }
        }
        function execute() {
            if (!getCache().error && (refreshWhenHidden || getConfig().isVisible()) && (refreshWhenOffline || getConfig().isOnline())) {
                revalidate(WITH_DEDUPE).then(next);
            } else {
                next();
            }
        }
        next();
        return ()=>{
            if (timer) {
                clearTimeout(timer);
                timer = -1;
            }
        };
    }, [
        refreshInterval,
        refreshWhenHidden,
        refreshWhenOffline,
        key
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useDebugValue"](returnedData);
    if (suspense && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$_internal$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["isUndefined"](data) && key) {
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$_internal$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["IS_REACT_LEGACY"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$_internal$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["IS_SERVER"]) {
            throw new Error('Fallback data is required when using suspense in SSR.');
        }
        fetcherRef.current = fetcher;
        configRef.current = config;
        unmountedRef.current = false;
        const req = PRELOAD[key];
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$_internal$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["isUndefined"](req)) {
            const promise = boundMutate(req);
            use(promise);
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$_internal$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["isUndefined"](error)) {
            const promise = revalidate(WITH_DEDUPE);
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$_internal$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["isUndefined"](returnedData)) {
                promise.status = 'fulfilled';
                promise.value = true;
            }
            use(promise);
        } else {
            throw error;
        }
    }
    return {
        mutate: boundMutate,
        get data () {
            stateDependencies.data = true;
            return returnedData;
        },
        get error () {
            stateDependencies.error = true;
            return error;
        },
        get isValidating () {
            stateDependencies.isValidating = true;
            return isValidating;
        },
        get isLoading () {
            stateDependencies.isLoading = true;
            return isLoading;
        }
    };
};
const SWRConfig = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$_internal$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["OBJECT"].defineProperty(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$_internal$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["SWRConfig"], 'defaultValue', {
    value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$_internal$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["defaultConfig"]
});
const useSWR = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$_internal$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["withArgs"](useSWRHandler);
;

})()),
"[project]/node_modules/@vercel/analytics/dist/index.mjs (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "DEV_SCRIPT_URL": ()=>DEV_SCRIPT_URL,
    "PROD_SCRIPT_URL": ()=>PROD_SCRIPT_URL,
    "default": ()=>generic_default,
    "inject": ()=>inject,
    "pageview": ()=>pageview,
    "track": ()=>track
});
var name = "@vercel/analytics";
var version = "1.3.1";
var initQueue = ()=>{
    if (window.va) return;
    window.va = function a(...params) {
        (window.vaq = window.vaq || []).push(params);
    };
};
function isBrowser() {
    return typeof window !== "undefined";
}
function detectEnvironment() {
    try {
        const env = process.env.NODE_ENV;
        if (env === "development" || env === "test") {
            return "development";
        }
    } catch (e) {}
    return "production";
}
function setMode(mode = "auto") {
    if (mode === "auto") {
        window.vam = detectEnvironment();
        return;
    }
    window.vam = mode;
}
function getMode() {
    const mode = isBrowser() ? window.vam : detectEnvironment();
    return mode || "production";
}
function isProduction() {
    return getMode() === "production";
}
function isDevelopment() {
    return getMode() === "development";
}
function removeKey(key, { [key]: _, ...rest }) {
    return rest;
}
function parseProperties(properties, options) {
    if (!properties) return void 0;
    let props = properties;
    const errorProperties = [];
    for (const [key, value] of Object.entries(properties)){
        if (typeof value === "object" && value !== null) {
            if (options.strip) {
                props = removeKey(key, props);
            } else {
                errorProperties.push(key);
            }
        }
    }
    if (errorProperties.length > 0 && !options.strip) {
        throw Error(`The following properties are not valid: ${errorProperties.join(", ")}. Only strings, numbers, booleans, and null are allowed.`);
    }
    return props;
}
var DEV_SCRIPT_URL = "https://va.vercel-scripts.com/v1/script.debug.js";
var PROD_SCRIPT_URL = "/_vercel/insights/script.js";
function inject(props = {
    debug: true
}) {
    var _a;
    if (!isBrowser()) return;
    setMode(props.mode);
    initQueue();
    if (props.beforeSend) {
        (_a = window.va) == null ? void 0 : _a.call(window, "beforeSend", props.beforeSend);
    }
    const src = props.scriptSrc || (isDevelopment() ? DEV_SCRIPT_URL : PROD_SCRIPT_URL);
    if (document.head.querySelector(`script[src*="${src}"]`)) return;
    const script = document.createElement("script");
    script.src = src;
    script.defer = true;
    script.dataset.sdkn = name + (props.framework ? `/${props.framework}` : "");
    script.dataset.sdkv = version;
    if (props.disableAutoTrack) {
        script.dataset.disableAutoTrack = "1";
    }
    if (props.endpoint) {
        script.dataset.endpoint = props.endpoint;
    }
    if (props.dsn) {
        script.dataset.dsn = props.dsn;
    }
    script.onerror = ()=>{
        const errorMessage = isDevelopment() ? "Please check if any ad blockers are enabled and try again." : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
        console.log(`[Vercel Web Analytics] Failed to load script from ${src}. ${errorMessage}`);
    };
    if (isDevelopment() && props.debug === false) {
        script.dataset.debug = "false";
    }
    document.head.appendChild(script);
}
function track(name2, properties, options) {
    var _a, _b;
    if (!isBrowser()) {
        const msg = "[Vercel Web Analytics] Please import `track` from `@vercel/analytics/server` when using this function in a server environment";
        if (isProduction()) {
            console.warn(msg);
        } else {
            throw new Error(msg);
        }
        return;
    }
    if (!properties) {
        (_a = window.va) == null ? void 0 : _a.call(window, "event", {
            name: name2,
            options
        });
        return;
    }
    try {
        const props = parseProperties(properties, {
            strip: isProduction()
        });
        (_b = window.va) == null ? void 0 : _b.call(window, "event", {
            name: name2,
            data: props,
            options
        });
    } catch (err) {
        if (err instanceof Error && isDevelopment()) {
            console.error(err);
        }
    }
}
function pageview({ route, path }) {
    var _a;
    (_a = window.va) == null ? void 0 : _a.call(window, "pageview", {
        route,
        path
    });
}
var generic_default = {
    inject,
    track
};
;

})()),
}]);

//# sourceMappingURL=_1178d6._.js.map