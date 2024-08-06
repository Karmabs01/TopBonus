(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/_4b2cba._.js", {

"[project]/node_modules/next/dist/server/api-utils/index.js (ecmascript, rsc)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getCookieParser: null,
    sendStatusCode: null,
    redirect: null,
    checkIsOnDemandRevalidate: null,
    COOKIE_NAME_PRERENDER_BYPASS: null,
    COOKIE_NAME_PRERENDER_DATA: null,
    RESPONSE_LIMIT_DEFAULT: null,
    SYMBOL_PREVIEW_DATA: null,
    SYMBOL_CLEARED_COOKIES: null,
    clearPreviewData: null,
    ApiError: null,
    sendError: null,
    setLazyProp: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getCookieParser: function() {
        return getCookieParser;
    },
    sendStatusCode: function() {
        return sendStatusCode;
    },
    redirect: function() {
        return redirect;
    },
    checkIsOnDemandRevalidate: function() {
        return checkIsOnDemandRevalidate;
    },
    COOKIE_NAME_PRERENDER_BYPASS: function() {
        return COOKIE_NAME_PRERENDER_BYPASS;
    },
    COOKIE_NAME_PRERENDER_DATA: function() {
        return COOKIE_NAME_PRERENDER_DATA;
    },
    RESPONSE_LIMIT_DEFAULT: function() {
        return RESPONSE_LIMIT_DEFAULT;
    },
    SYMBOL_PREVIEW_DATA: function() {
        return SYMBOL_PREVIEW_DATA;
    },
    SYMBOL_CLEARED_COOKIES: function() {
        return SYMBOL_CLEARED_COOKIES;
    },
    clearPreviewData: function() {
        return clearPreviewData;
    },
    ApiError: function() {
        return ApiError;
    },
    sendError: function() {
        return sendError;
    },
    setLazyProp: function() {
        return setLazyProp;
    }
});
const _headers = __turbopack_require__("[project]/node_modules/next/dist/server/web/spec-extension/adapters/headers.js (ecmascript, rsc)");
const _constants = __turbopack_require__("[project]/node_modules/next/dist/lib/constants.js (ecmascript, rsc)");
function getCookieParser(headers) {
    return function parseCookie() {
        const { cookie } = headers;
        if (!cookie) {
            return {};
        }
        const { parse: parseCookieFn } = __turbopack_require__("[project]/node_modules/next/dist/compiled/cookie/index.js (ecmascript, rsc)");
        return parseCookieFn(Array.isArray(cookie) ? cookie.join("; ") : cookie);
    };
}
function sendStatusCode(res, statusCode) {
    res.statusCode = statusCode;
    return res;
}
function redirect(res, statusOrUrl, url) {
    if (typeof statusOrUrl === "string") {
        url = statusOrUrl;
        statusOrUrl = 307;
    }
    if (typeof statusOrUrl !== "number" || typeof url !== "string") {
        throw new Error(`Invalid redirect arguments. Please use a single argument URL, e.g. res.redirect('/destination') or use a status code and URL, e.g. res.redirect(307, '/destination').`);
    }
    res.writeHead(statusOrUrl, {
        Location: url
    });
    res.write(url);
    res.end();
    return res;
}
function checkIsOnDemandRevalidate(req, previewProps) {
    const headers = _headers.HeadersAdapter.from(req.headers);
    const previewModeId = headers.get(_constants.PRERENDER_REVALIDATE_HEADER);
    const isOnDemandRevalidate = previewModeId === previewProps.previewModeId;
    const revalidateOnlyGenerated = headers.has(_constants.PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER);
    return {
        isOnDemandRevalidate,
        revalidateOnlyGenerated
    };
}
const COOKIE_NAME_PRERENDER_BYPASS = `__prerender_bypass`;
const COOKIE_NAME_PRERENDER_DATA = `__next_preview_data`;
const RESPONSE_LIMIT_DEFAULT = 4 * 1024 * 1024;
const SYMBOL_PREVIEW_DATA = Symbol(COOKIE_NAME_PRERENDER_DATA);
const SYMBOL_CLEARED_COOKIES = Symbol(COOKIE_NAME_PRERENDER_BYPASS);
function clearPreviewData(res, options = {}) {
    if (SYMBOL_CLEARED_COOKIES in res) {
        return res;
    }
    const { serialize } = __turbopack_require__("[project]/node_modules/next/dist/compiled/cookie/index.js (ecmascript, rsc)");
    const previous = res.getHeader("Set-Cookie");
    res.setHeader(`Set-Cookie`, [
        ...typeof previous === "string" ? [
            previous
        ] : Array.isArray(previous) ? previous : [],
        serialize(COOKIE_NAME_PRERENDER_BYPASS, "", {
            expires: new Date(0),
            httpOnly: true,
            sameSite: process.env.NODE_ENV !== "development" ? "none" : "lax",
            secure: process.env.NODE_ENV !== "development",
            path: "/",
            ...options.path !== undefined ? {
                path: options.path
            } : undefined
        }),
        serialize(COOKIE_NAME_PRERENDER_DATA, "", {
            expires: new Date(0),
            httpOnly: true,
            sameSite: process.env.NODE_ENV !== "development" ? "none" : "lax",
            secure: process.env.NODE_ENV !== "development",
            path: "/",
            ...options.path !== undefined ? {
                path: options.path
            } : undefined
        })
    ]);
    Object.defineProperty(res, SYMBOL_CLEARED_COOKIES, {
        value: true,
        enumerable: false
    });
    return res;
}
class ApiError extends Error {
    constructor(statusCode, message){
        super(message);
        this.statusCode = statusCode;
    }
}
function sendError(res, statusCode, message) {
    res.statusCode = statusCode;
    res.statusMessage = message;
    res.end(message);
}
function setLazyProp({ req }, prop, getter) {
    const opts = {
        configurable: true,
        enumerable: true
    };
    const optsReset = {
        ...opts,
        writable: true
    };
    Object.defineProperty(req, prop, {
        ...opts,
        get: ()=>{
            const value = getter();
            Object.defineProperty(req, prop, {
                ...optsReset,
                value
            });
            return value;
        },
        set: (value)=>{
            Object.defineProperty(req, prop, {
                ...optsReset,
                value
            });
        }
    });
}

}.call(this) }),
"[project]/node_modules/next/dist/server/api-utils/node.js (ecmascript, rsc)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    tryGetPreviewData: null,
    parseBody: null,
    apiResolver: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    tryGetPreviewData: function() {
        return tryGetPreviewData;
    },
    parseBody: function() {
        return parseBody;
    },
    apiResolver: function() {
        return apiResolver;
    }
});
const _ = __turbopack_require__("[project]/node_modules/next/dist/server/api-utils/index.js (ecmascript, rsc)");
const _bytes = _interop_require_default(__turbopack_require__("[project]/node_modules/next/dist/compiled/bytes/index.js (ecmascript, rsc)"));
const _etag = __turbopack_require__("[project]/node_modules/next/dist/server/lib/etag.js (ecmascript, rsc)");
const _sendpayload = __turbopack_require__("[project]/node_modules/next/dist/server/send-payload/index.js (ecmascript, rsc)");
const _stream = __turbopack_external_require__("stream");
const _contenttype = __turbopack_require__("[project]/node_modules/next/dist/compiled/content-type/index.js (ecmascript, rsc)");
const _iserror = _interop_require_default(__turbopack_require__("[project]/node_modules/next/dist/lib/is-error.js (ecmascript, rsc)"));
const _utils = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/utils.js (ecmascript, rsc)");
const _interopdefault = __turbopack_require__("[project]/node_modules/next/dist/lib/interop-default.js (ecmascript, rsc)");
const _index = __turbopack_require__("[project]/node_modules/next/dist/server/api-utils/index.js (ecmascript, rsc)");
const _tracer = __turbopack_require__("[project]/node_modules/next/dist/server/lib/trace/tracer.js (ecmascript, rsc)");
const _constants = __turbopack_require__("[project]/node_modules/next/dist/server/lib/trace/constants.js (ecmascript, rsc)");
const _cookies = __turbopack_require__("[project]/node_modules/next/dist/server/web/spec-extension/cookies.js (ecmascript, rsc)");
const _headers = __turbopack_require__("[project]/node_modules/next/dist/server/web/spec-extension/adapters/headers.js (ecmascript, rsc)");
const _constants1 = __turbopack_require__("[project]/node_modules/next/dist/lib/constants.js (ecmascript, rsc)");
const _invokerequest = __turbopack_require__("[project]/node_modules/next/dist/server/lib/server-ipc/invoke-request.js (ecmascript, rsc)");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function tryGetPreviewData(req, res, options) {
    var _cookies_get, _cookies_get1;
    if (options && (0, _.checkIsOnDemandRevalidate)(req, options).isOnDemandRevalidate) {
        return false;
    }
    if (_index.SYMBOL_PREVIEW_DATA in req) {
        return req[_index.SYMBOL_PREVIEW_DATA];
    }
    const headers = _headers.HeadersAdapter.from(req.headers);
    const cookies = new _cookies.RequestCookies(headers);
    const previewModeId = (_cookies_get = cookies.get(_index.COOKIE_NAME_PRERENDER_BYPASS)) == null ? void 0 : _cookies_get.value;
    const tokenPreviewData = (_cookies_get1 = cookies.get(_index.COOKIE_NAME_PRERENDER_DATA)) == null ? void 0 : _cookies_get1.value;
    if (previewModeId && !tokenPreviewData && previewModeId === options.previewModeId) {
        const data = {};
        Object.defineProperty(req, _index.SYMBOL_PREVIEW_DATA, {
            value: data,
            enumerable: false
        });
        return data;
    }
    if (!previewModeId && !tokenPreviewData) {
        return false;
    }
    if (!previewModeId || !tokenPreviewData) {
        (0, _index.clearPreviewData)(res);
        return false;
    }
    if (previewModeId !== options.previewModeId) {
        (0, _index.clearPreviewData)(res);
        return false;
    }
    let encryptedPreviewData;
    try {
        const jsonwebtoken = __turbopack_require__("[project]/node_modules/next/dist/compiled/jsonwebtoken/index.js (ecmascript, rsc)");
        encryptedPreviewData = jsonwebtoken.verify(tokenPreviewData, options.previewModeSigningKey);
    } catch  {
        (0, _index.clearPreviewData)(res);
        return false;
    }
    const { decryptWithSecret } = __turbopack_require__("[project]/node_modules/next/dist/server/crypto-utils.js (ecmascript, rsc)");
    const decryptedPreviewData = decryptWithSecret(Buffer.from(options.previewModeEncryptionKey), encryptedPreviewData.data);
    try {
        const data = JSON.parse(decryptedPreviewData);
        Object.defineProperty(req, _index.SYMBOL_PREVIEW_DATA, {
            value: data,
            enumerable: false
        });
        return data;
    } catch  {
        return false;
    }
}
function parseJson(str) {
    if (str.length === 0) {
        return {};
    }
    try {
        return JSON.parse(str);
    } catch (e) {
        throw new _index.ApiError(400, "Invalid JSON");
    }
}
async function parseBody(req, limit) {
    let contentType;
    try {
        contentType = (0, _contenttype.parse)(req.headers["content-type"] || "text/plain");
    } catch  {
        contentType = (0, _contenttype.parse)("text/plain");
    }
    const { type, parameters } = contentType;
    const encoding = parameters.charset || "utf-8";
    let buffer;
    try {
        const getRawBody = __turbopack_require__("[project]/node_modules/next/dist/compiled/raw-body/index.js (ecmascript, rsc)");
        buffer = await getRawBody(req, {
            encoding,
            limit
        });
    } catch (e) {
        if ((0, _iserror.default)(e) && e.type === "entity.too.large") {
            throw new _index.ApiError(413, `Body exceeded ${limit} limit`);
        } else {
            throw new _index.ApiError(400, "Invalid body");
        }
    }
    const body = buffer.toString();
    if (type === "application/json" || type === "application/ld+json") {
        return parseJson(body);
    } else if (type === "application/x-www-form-urlencoded") {
        const qs = __turbopack_external_require__("querystring");
        return qs.decode(body);
    } else {
        return body;
    }
}
function getMaxContentLength(responseLimit) {
    if (responseLimit && typeof responseLimit !== "boolean") {
        return _bytes.default.parse(responseLimit);
    }
    return _index.RESPONSE_LIMIT_DEFAULT;
}
function sendData(req, res, body) {
    if (body === null || body === undefined) {
        res.end();
        return;
    }
    if (res.statusCode === 204 || res.statusCode === 304) {
        res.removeHeader("Content-Type");
        res.removeHeader("Content-Length");
        res.removeHeader("Transfer-Encoding");
        if (process.env.NODE_ENV === "development" && body) {
            console.warn(`A body was attempted to be set with a 204 statusCode for ${req.url}, this is invalid and the body was ignored.\n` + `See more info here https://nextjs.org/docs/messages/invalid-api-status-body`);
        }
        res.end();
        return;
    }
    const contentType = res.getHeader("Content-Type");
    if (body instanceof _stream.Stream) {
        if (!contentType) {
            res.setHeader("Content-Type", "application/octet-stream");
        }
        body.pipe(res);
        return;
    }
    const isJSONLike = [
        "object",
        "number",
        "boolean"
    ].includes(typeof body);
    const stringifiedBody = isJSONLike ? JSON.stringify(body) : body;
    const etag = (0, _etag.generateETag)(stringifiedBody);
    if ((0, _sendpayload.sendEtagResponse)(req, res, etag)) {
        return;
    }
    if (Buffer.isBuffer(body)) {
        if (!contentType) {
            res.setHeader("Content-Type", "application/octet-stream");
        }
        res.setHeader("Content-Length", body.length);
        res.end(body);
        return;
    }
    if (isJSONLike) {
        res.setHeader("Content-Type", "application/json; charset=utf-8");
    }
    res.setHeader("Content-Length", Buffer.byteLength(stringifiedBody));
    res.end(stringifiedBody);
}
function sendJson(res, jsonBody) {
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.send(JSON.stringify(jsonBody));
}
function isValidData(str) {
    return typeof str === "string" && str.length >= 16;
}
function setDraftMode(res, options) {
    if (!isValidData(options.previewModeId)) {
        throw new Error("invariant: invalid previewModeId");
    }
    const expires = options.enable ? undefined : new Date(0);
    const { serialize } = __turbopack_require__("[project]/node_modules/next/dist/compiled/cookie/index.js (ecmascript, rsc)");
    const previous = res.getHeader("Set-Cookie");
    res.setHeader(`Set-Cookie`, [
        ...typeof previous === "string" ? [
            previous
        ] : Array.isArray(previous) ? previous : [],
        serialize(_index.COOKIE_NAME_PRERENDER_BYPASS, options.previewModeId, {
            httpOnly: true,
            sameSite: process.env.NODE_ENV !== "development" ? "none" : "lax",
            secure: process.env.NODE_ENV !== "development",
            path: "/",
            expires
        })
    ]);
    return res;
}
function setPreviewData(res, data, options) {
    if (!isValidData(options.previewModeId)) {
        throw new Error("invariant: invalid previewModeId");
    }
    if (!isValidData(options.previewModeEncryptionKey)) {
        throw new Error("invariant: invalid previewModeEncryptionKey");
    }
    if (!isValidData(options.previewModeSigningKey)) {
        throw new Error("invariant: invalid previewModeSigningKey");
    }
    const jsonwebtoken = __turbopack_require__("[project]/node_modules/next/dist/compiled/jsonwebtoken/index.js (ecmascript, rsc)");
    const { encryptWithSecret } = __turbopack_require__("[project]/node_modules/next/dist/server/crypto-utils.js (ecmascript, rsc)");
    const payload = jsonwebtoken.sign({
        data: encryptWithSecret(Buffer.from(options.previewModeEncryptionKey), JSON.stringify(data))
    }, options.previewModeSigningKey, {
        algorithm: "HS256",
        ...options.maxAge !== undefined ? {
            expiresIn: options.maxAge
        } : undefined
    });
    if (payload.length > 2048) {
        throw new Error(`Preview data is limited to 2KB currently, reduce how much data you are storing as preview data to continue`);
    }
    const { serialize } = __turbopack_require__("[project]/node_modules/next/dist/compiled/cookie/index.js (ecmascript, rsc)");
    const previous = res.getHeader("Set-Cookie");
    res.setHeader(`Set-Cookie`, [
        ...typeof previous === "string" ? [
            previous
        ] : Array.isArray(previous) ? previous : [],
        serialize(_index.COOKIE_NAME_PRERENDER_BYPASS, options.previewModeId, {
            httpOnly: true,
            sameSite: process.env.NODE_ENV !== "development" ? "none" : "lax",
            secure: process.env.NODE_ENV !== "development",
            path: "/",
            ...options.maxAge !== undefined ? {
                maxAge: options.maxAge
            } : undefined,
            ...options.path !== undefined ? {
                path: options.path
            } : undefined
        }),
        serialize(_index.COOKIE_NAME_PRERENDER_DATA, payload, {
            httpOnly: true,
            sameSite: process.env.NODE_ENV !== "development" ? "none" : "lax",
            secure: process.env.NODE_ENV !== "development",
            path: "/",
            ...options.maxAge !== undefined ? {
                maxAge: options.maxAge
            } : undefined,
            ...options.path !== undefined ? {
                path: options.path
            } : undefined
        })
    ]);
    return res;
}
async function revalidate(urlPath, opts, req, context) {
    if (typeof urlPath !== "string" || !urlPath.startsWith("/")) {
        throw new Error(`Invalid urlPath provided to revalidate(), must be a path e.g. /blog/post-1, received ${urlPath}`);
    }
    const revalidateHeaders = {
        [_constants1.PRERENDER_REVALIDATE_HEADER]: context.previewModeId,
        ...opts.unstable_onlyGenerated ? {
            [_constants1.PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER]: "1"
        } : {}
    };
    const allowedRevalidateHeaderKeys = [
        ...context.allowedRevalidateHeaderKeys || [],
        ...context.trustHostHeader ? [
            "cookie",
            "x-vercel-protection-bypass"
        ] : []
    ];
    for (const key of Object.keys(req.headers)){
        if (allowedRevalidateHeaderKeys.includes(key)) {
            revalidateHeaders[key] = req.headers[key];
        }
    }
    try {
        if (context.trustHostHeader) {
            const res = await fetch(`https://${req.headers.host}${urlPath}`, {
                method: "HEAD",
                headers: revalidateHeaders
            });
            const cacheHeader = res.headers.get("x-vercel-cache") || res.headers.get("x-nextjs-cache");
            if ((cacheHeader == null ? void 0 : cacheHeader.toUpperCase()) !== "REVALIDATED" && !(res.status === 404 && opts.unstable_onlyGenerated)) {
                throw new Error(`Invalid response ${res.status}`);
            }
        } else if (context.revalidate) {
            const ipcPort = process.env.__NEXT_PRIVATE_ROUTER_IPC_PORT;
            if (ipcPort) {
                const ipcKey = process.env.__NEXT_PRIVATE_ROUTER_IPC_KEY;
                const res = await (0, _invokerequest.invokeRequest)(`http://${context.hostname}:${ipcPort}?key=${ipcKey}&method=revalidate&args=${encodeURIComponent(JSON.stringify([
                    {
                        urlPath,
                        revalidateHeaders,
                        opts
                    }
                ]))}`, {
                    method: "GET",
                    headers: {}
                });
                const chunks = [];
                for await (const chunk of res){
                    if (chunk) {
                        chunks.push(chunk);
                    }
                }
                const body = Buffer.concat(chunks).toString();
                const result = JSON.parse(body);
                if (result.err) {
                    throw new Error(result.err.message);
                }
                return;
            }
            await context.revalidate({
                urlPath,
                revalidateHeaders,
                opts
            });
        } else {
            throw new Error(`Invariant: required internal revalidate method not passed to api-utils`);
        }
    } catch (err) {
        throw new Error(`Failed to revalidate ${urlPath}: ${(0, _iserror.default)(err) ? err.message : err}`);
    }
}
async function apiResolver(req, res, query, resolverModule, apiContext, propagateError, dev, page) {
    const apiReq = req;
    const apiRes = res;
    try {
        var _config_api, _config_api1, _config_api2, _getTracer_getRootSpanAttributes;
        if (!resolverModule) {
            res.statusCode = 404;
            res.end("Not Found");
            return;
        }
        const config = resolverModule.config || {};
        const bodyParser = ((_config_api = config.api) == null ? void 0 : _config_api.bodyParser) !== false;
        const responseLimit = ((_config_api1 = config.api) == null ? void 0 : _config_api1.responseLimit) ?? true;
        const externalResolver = ((_config_api2 = config.api) == null ? void 0 : _config_api2.externalResolver) || false;
        (0, _index.setLazyProp)({
            req: apiReq
        }, "cookies", (0, _index.getCookieParser)(req.headers));
        apiReq.query = query;
        (0, _index.setLazyProp)({
            req: apiReq
        }, "previewData", ()=>tryGetPreviewData(req, res, apiContext));
        (0, _index.setLazyProp)({
            req: apiReq
        }, "preview", ()=>apiReq.previewData !== false ? true : undefined);
        (0, _index.setLazyProp)({
            req: apiReq
        }, "draftMode", ()=>apiReq.preview);
        if (bodyParser && !apiReq.body) {
            apiReq.body = await parseBody(apiReq, config.api && config.api.bodyParser && config.api.bodyParser.sizeLimit ? config.api.bodyParser.sizeLimit : "1mb");
        }
        let contentLength = 0;
        const maxContentLength = getMaxContentLength(responseLimit);
        const writeData = apiRes.write;
        const endResponse = apiRes.end;
        apiRes.write = (...args)=>{
            contentLength += Buffer.byteLength(args[0] || "");
            return writeData.apply(apiRes, args);
        };
        apiRes.end = (...args)=>{
            if (args.length && typeof args[0] !== "function") {
                contentLength += Buffer.byteLength(args[0] || "");
            }
            if (responseLimit && contentLength >= maxContentLength) {
                console.warn(`API response for ${req.url} exceeds ${_bytes.default.format(maxContentLength)}. API Routes are meant to respond quickly. https://nextjs.org/docs/messages/api-routes-response-size-limit`);
            }
            return endResponse.apply(apiRes, args);
        };
        apiRes.status = (statusCode)=>(0, _index.sendStatusCode)(apiRes, statusCode);
        apiRes.send = (data)=>sendData(apiReq, apiRes, data);
        apiRes.json = (data)=>sendJson(apiRes, data);
        apiRes.redirect = (statusOrUrl, url)=>(0, _index.redirect)(apiRes, statusOrUrl, url);
        apiRes.setDraftMode = (options = {
            enable: true
        })=>setDraftMode(apiRes, Object.assign({}, apiContext, options));
        apiRes.setPreviewData = (data, options = {})=>setPreviewData(apiRes, data, Object.assign({}, apiContext, options));
        apiRes.clearPreviewData = (options = {})=>(0, _index.clearPreviewData)(apiRes, options);
        apiRes.revalidate = (urlPath, opts)=>revalidate(urlPath, opts || {}, req, apiContext);
        const resolver = (0, _interopdefault.interopDefault)(resolverModule);
        let wasPiped = false;
        if ("TURBOPACK compile-time truthy", 1) {
            res.once("pipe", ()=>wasPiped = true);
        }
        (_getTracer_getRootSpanAttributes = (0, _tracer.getTracer)().getRootSpanAttributes()) == null ? void 0 : _getTracer_getRootSpanAttributes.set("next.route", page);
        const apiRouteResult = await (0, _tracer.getTracer)().trace(_constants.NodeSpan.runHandler, {
            spanName: `executing api route (pages) ${page}`
        }, ()=>resolver(req, res));
        if ("TURBOPACK compile-time truthy", 1) {
            if (typeof apiRouteResult !== "undefined") {
                if (apiRouteResult instanceof Response) {
                    throw new Error('API route returned a Response object in the Node.js runtime, this is not supported. Please use `runtime: "edge"` instead: https://nextjs.org/docs/api-routes/edge-api-routes');
                }
                console.warn(`API handler should not return a value, received ${typeof apiRouteResult}.`);
            }
            if (!externalResolver && !(0, _utils.isResSent)(res) && !wasPiped) {
                console.warn(`API resolved without sending a response for ${req.url}, this may result in stalled requests.`);
            }
        }
    } catch (err) {
        if (err instanceof _index.ApiError) {
            (0, _index.sendError)(apiRes, err.statusCode, err.message);
        } else {
            if (dev) {
                if ((0, _iserror.default)(err)) {
                    err.page = page;
                }
                throw err;
            }
            console.error(err);
            if (propagateError) {
                throw err;
            }
            (0, _index.sendError)(apiRes, 500, "Internal Server Error");
        }
    }
}

}.call(this) }),
"[project]/node_modules/next/dist/server/lib/incremental-cache/utils.js (ecmascript, rsc)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getDerivedTags", {
    enumerable: true,
    get: function() {
        return getDerivedTags;
    }
});
const getDerivedTags = (tags)=>{
    const derivedTags = [
        "/"
    ];
    for (const tag of tags || []){
        if (tag.startsWith("/")) {
            const pathnameParts = tag.split("/");
            for(let i = 1; i < pathnameParts.length + 1; i++){
                const curPathname = pathnameParts.slice(0, i).join("/");
                if (curPathname) {
                    derivedTags.push(curPathname);
                    if (!derivedTags.includes(curPathname)) {
                        derivedTags.push(curPathname);
                    }
                }
            }
        } else if (!derivedTags.includes(tag)) {
            derivedTags.push(tag);
        }
    }
    return derivedTags;
};

}.call(this) }),
"[project]/node_modules/next/dist/server/lib/incremental-cache/fetch-cache.js (ecmascript, rsc)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FetchCache;
    }
});
const _lrucache = _interop_require_default(__turbopack_require__("[project]/node_modules/next/dist/compiled/lru-cache/index.js (ecmascript, rsc)"));
const _approuterheaders = __turbopack_require__("[project]/node_modules/next/dist/client/components/app-router-headers.js (ecmascript, rsc)");
const _constants = __turbopack_require__("[project]/node_modules/next/dist/lib/constants.js (ecmascript, rsc)");
const _utils = __turbopack_require__("[project]/node_modules/next/dist/server/lib/incremental-cache/utils.js (ecmascript, rsc)");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let memoryCache;
let rateLimitedUntil = 0;
class FetchCache {
    static isAvailable(ctx) {
        return !!(ctx._requestHeaders["x-vercel-sc-host"] || process.env.SUSPENSE_CACHE_URL);
    }
    constructor(ctx){
        this.debug = !!process.env.NEXT_PRIVATE_DEBUG_CACHE;
        this.headers = {};
        this.revalidatedTags = ctx.revalidatedTags;
        this.headers["Content-Type"] = "application/json";
        if (_approuterheaders.FETCH_CACHE_HEADER in ctx._requestHeaders) {
            const newHeaders = JSON.parse(ctx._requestHeaders[_approuterheaders.FETCH_CACHE_HEADER]);
            for(const k in newHeaders){
                this.headers[k] = newHeaders[k];
            }
            delete ctx._requestHeaders[_approuterheaders.FETCH_CACHE_HEADER];
        }
        const scHost = ctx._requestHeaders["x-vercel-sc-host"] || process.env.SUSPENSE_CACHE_URL;
        const scBasePath = ctx._requestHeaders["x-vercel-sc-basepath"] || process.env.SUSPENSE_CACHE_BASEPATH;
        if (process.env.SUSPENSE_CACHE_AUTH_TOKEN) {
            this.headers["Authorization"] = `Bearer ${process.env.SUSPENSE_CACHE_AUTH_TOKEN}`;
        }
        if (scHost) {
            this.cacheEndpoint = `https://${scHost}${scBasePath || ""}`;
            if (this.debug) {
                console.log("using cache endpoint", this.cacheEndpoint);
            }
        } else if (this.debug) {
            console.log("no cache endpoint available");
        }
        if (ctx.maxMemoryCacheSize) {
            if (!memoryCache) {
                if (this.debug) {
                    console.log("using memory store for fetch cache");
                }
                memoryCache = new _lrucache.default({
                    max: ctx.maxMemoryCacheSize,
                    length ({ value }) {
                        var _JSON_stringify;
                        if (!value) {
                            return 25;
                        } else if (value.kind === "REDIRECT") {
                            return JSON.stringify(value.props).length;
                        } else if (value.kind === "IMAGE") {
                            throw new Error("invariant image should not be incremental-cache");
                        } else if (value.kind === "FETCH") {
                            return JSON.stringify(value.data || "").length;
                        } else if (value.kind === "ROUTE") {
                            return value.body.length;
                        }
                        return value.html.length + (((_JSON_stringify = JSON.stringify(value.pageData)) == null ? void 0 : _JSON_stringify.length) || 0);
                    }
                });
            }
        } else {
            if (this.debug) {
                console.log("not using memory store for fetch cache");
            }
        }
    }
    async revalidateTag(tag) {
        if (this.debug) {
            console.log("revalidateTag", tag);
        }
        if (Date.now() < rateLimitedUntil) {
            if (this.debug) {
                console.log("rate limited ", rateLimitedUntil);
            }
            return;
        }
        try {
            const res = await fetch(`${this.cacheEndpoint}/v1/suspense-cache/revalidate?tags=${tag}`, {
                method: "POST",
                headers: this.headers,
                next: {
                    internal: true
                }
            });
            if (res.status === 429) {
                const retryAfter = res.headers.get("retry-after") || "60000";
                rateLimitedUntil = Date.now() + parseInt(retryAfter);
            }
            if (!res.ok) {
                throw new Error(`Request failed with status ${res.status}.`);
            }
        } catch (err) {
            console.warn(`Failed to revalidate tag ${tag}`, err);
        }
    }
    async get(key, fetchCache, fetchUrl, fetchIdx) {
        var _data_value;
        if (!fetchCache) return null;
        if (Date.now() < rateLimitedUntil) {
            if (this.debug) {
                console.log("rate limited");
            }
            return null;
        }
        let data = memoryCache == null ? void 0 : memoryCache.get(key);
        if (Date.now() - ((data == null ? void 0 : data.lastModified) || 0) > 2000) {
            data = undefined;
        }
        if (!data && this.cacheEndpoint) {
            try {
                const start = Date.now();
                const fetchParams = {
                    internal: true,
                    fetchType: "cache-get",
                    fetchUrl: fetchUrl,
                    fetchIdx
                };
                const res = await fetch(`${this.cacheEndpoint}/v1/suspense-cache/${key}`, {
                    method: "GET",
                    headers: {
                        ...this.headers,
                        "X-Vercel-Cache-Item-Name": fetchUrl
                    },
                    next: fetchParams
                });
                if (res.status === 429) {
                    const retryAfter = res.headers.get("retry-after") || "60000";
                    rateLimitedUntil = Date.now() + parseInt(retryAfter);
                }
                if (res.status === 404) {
                    if (this.debug) {
                        console.log(`no fetch cache entry for ${key}, duration: ${Date.now() - start}ms`);
                    }
                    return null;
                }
                if (!res.ok) {
                    console.error(await res.text());
                    throw new Error(`invalid response from cache ${res.status}`);
                }
                const cached = await res.json();
                if (!cached || cached.kind !== "FETCH") {
                    this.debug && console.log({
                        cached
                    });
                    throw new Error(`invalid cache value`);
                }
                const cacheState = res.headers.get("x-vercel-cache-state");
                const age = res.headers.get("age");
                data = {
                    value: cached,
                    lastModified: cacheState !== "fresh" ? Date.now() - _constants.CACHE_ONE_YEAR : Date.now() - parseInt(age || "0", 10) * 1000
                };
                if (this.debug) {
                    console.log(`got fetch cache entry for ${key}, duration: ${Date.now() - start}ms, size: ${Object.keys(cached).length}, cache-state: ${cacheState}`);
                }
                if (data) {
                    memoryCache == null ? void 0 : memoryCache.set(key, data);
                }
            } catch (err) {
                if (this.debug) {
                    console.error(`Failed to get from fetch-cache`, err);
                }
            }
        }
        if ((data == null ? void 0 : (_data_value = data.value) == null ? void 0 : _data_value.kind) === "FETCH") {
            const innerData = data.value.data;
            const derivedTags = (0, _utils.getDerivedTags)(innerData.tags || []);
            if (derivedTags.some((tag)=>{
                return this.revalidatedTags.includes(tag);
            })) {
                data = undefined;
            }
        }
        return data || null;
    }
    async set(key, data, fetchCache, fetchUrl, fetchIdx) {
        if (!fetchCache) return;
        if (Date.now() < rateLimitedUntil) {
            if (this.debug) {
                console.log("rate limited");
            }
            return;
        }
        memoryCache == null ? void 0 : memoryCache.set(key, {
            value: data,
            lastModified: Date.now()
        });
        if (this.cacheEndpoint) {
            try {
                const start = Date.now();
                if (data !== null && "revalidate" in data) {
                    this.headers["x-vercel-revalidate"] = data.revalidate.toString();
                }
                if (!this.headers["x-vercel-revalidate"] && data !== null && "data" in data) {
                    this.headers["x-vercel-cache-control"] = data.data.headers["cache-control"];
                }
                const body = JSON.stringify(data);
                const headers = {
                    ...this.headers
                };
                if (data !== null && "data" in data && data.data.tags) {
                    headers["x-vercel-cache-tags"] = data.data.tags.join(",");
                }
                if (this.debug) {
                    console.log("set cache", key, {
                        tags: headers["x-vercel-cache-tags"]
                    });
                }
                const fetchParams = {
                    internal: true,
                    fetchType: "cache-set",
                    fetchUrl,
                    fetchIdx
                };
                const res = await fetch(`${this.cacheEndpoint}/v1/suspense-cache/${key}`, {
                    method: "POST",
                    headers: {
                        ...headers,
                        "X-Vercel-Cache-Item-Name": fetchUrl || ""
                    },
                    body: body,
                    next: fetchParams
                });
                if (res.status === 429) {
                    const retryAfter = res.headers.get("retry-after") || "60000";
                    rateLimitedUntil = Date.now() + parseInt(retryAfter);
                }
                if (!res.ok) {
                    this.debug && console.log(await res.text());
                    throw new Error(`invalid response ${res.status}`);
                }
                if (this.debug) {
                    console.log(`successfully set to fetch-cache for ${key}, duration: ${Date.now() - start}ms, size: ${body.length}`);
                }
            } catch (err) {
                if (this.debug) {
                    console.error(`Failed to update fetch cache`, err);
                }
            }
        }
        return;
    }
}

}.call(this) }),
"[project]/node_modules/next/dist/server/lib/incremental-cache/file-system-cache.js (ecmascript, rsc)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FileSystemCache;
    }
});
const _lrucache = _interop_require_default(__turbopack_require__("[project]/node_modules/next/dist/compiled/lru-cache/index.js (ecmascript, rsc)"));
const _path = _interop_require_default(__turbopack_require__("[project]/node_modules/next/dist/shared/lib/isomorphic/path.js (ecmascript, rsc)"));
const _utils = __turbopack_require__("[project]/node_modules/next/dist/server/lib/incremental-cache/utils.js (ecmascript, rsc)");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let memoryCache;
let tagsManifest;
class FileSystemCache {
    constructor(ctx){
        this.fs = ctx.fs;
        this.flushToDisk = ctx.flushToDisk;
        this.serverDistDir = ctx.serverDistDir;
        this.appDir = !!ctx._appDir;
        this.revalidatedTags = ctx.revalidatedTags;
        if (ctx.maxMemoryCacheSize && !memoryCache) {
            memoryCache = new _lrucache.default({
                max: ctx.maxMemoryCacheSize,
                length ({ value }) {
                    var _JSON_stringify;
                    if (!value) {
                        return 25;
                    } else if (value.kind === "REDIRECT") {
                        return JSON.stringify(value.props).length;
                    } else if (value.kind === "IMAGE") {
                        throw new Error("invariant image should not be incremental-cache");
                    } else if (value.kind === "FETCH") {
                        return JSON.stringify(value.data || "").length;
                    } else if (value.kind === "ROUTE") {
                        return value.body.length;
                    }
                    return value.html.length + (((_JSON_stringify = JSON.stringify(value.pageData)) == null ? void 0 : _JSON_stringify.length) || 0);
                }
            });
        }
        if (this.serverDistDir && this.fs) {
            this.tagsManifestPath = _path.default.join(this.serverDistDir, "..", "cache", "fetch-cache", "tags-manifest.json");
            this.loadTagsManifest();
        }
    }
    loadTagsManifest() {
        if (!this.tagsManifestPath || !this.fs || tagsManifest) return;
        try {
            tagsManifest = JSON.parse(this.fs.readFileSync(this.tagsManifestPath).toString("utf8"));
        } catch (err) {
            tagsManifest = {
                version: 1,
                items: {}
            };
        }
    }
    async setTags(key, tags) {
        this.loadTagsManifest();
        if (!tagsManifest || !this.tagsManifestPath) {
            return;
        }
        for (const tag of tags){
            const data = tagsManifest.items[tag] || {
                keys: []
            };
            if (!data.keys.includes(key)) {
                data.keys.push(key);
            }
            tagsManifest.items[tag] = data;
        }
        try {
            await this.fs.mkdir(_path.default.dirname(this.tagsManifestPath));
            await this.fs.writeFile(this.tagsManifestPath, JSON.stringify(tagsManifest || {}));
        } catch (err) {
            console.warn("Failed to update tags manifest.", err);
        }
    }
    async revalidateTag(tag) {
        this.loadTagsManifest();
        if (!tagsManifest || !this.tagsManifestPath) {
            return;
        }
        const data = tagsManifest.items[tag] || {
            keys: []
        };
        data.revalidatedAt = Date.now();
        tagsManifest.items[tag] = data;
        try {
            await this.fs.mkdir(_path.default.dirname(this.tagsManifestPath));
            await this.fs.writeFile(this.tagsManifestPath, JSON.stringify(tagsManifest || {}));
        } catch (err) {
            console.warn("Failed to update tags manifest.", err);
        }
    }
    async get(key, fetchCache) {
        var _data_value, _data_value1, _data_value2;
        let data = memoryCache == null ? void 0 : memoryCache.get(key);
        if (!data && process.env.NEXT_RUNTIME !== "edge") {
            try {
                const { filePath } = await this.getFsPath({
                    pathname: `${key}.body`,
                    appDir: true
                });
                const fileData = await this.fs.readFile(filePath);
                const { mtime } = await this.fs.stat(filePath);
                const meta = JSON.parse((await this.fs.readFile(filePath.replace(/\.body$/, ".meta"))).toString("utf8"));
                const cacheEntry = {
                    lastModified: mtime.getTime(),
                    value: {
                        kind: "ROUTE",
                        body: fileData,
                        headers: meta.headers,
                        status: meta.status
                    }
                };
                return cacheEntry;
            } catch (_) {}
            try {
                const { filePath, isAppPath } = await this.getFsPath({
                    pathname: fetchCache ? key : `${key}.html`,
                    fetchCache
                });
                const fileData = (await this.fs.readFile(filePath)).toString("utf-8");
                const { mtime } = await this.fs.stat(filePath);
                if (fetchCache) {
                    const lastModified = mtime.getTime();
                    const parsedData = JSON.parse(fileData);
                    data = {
                        lastModified,
                        value: parsedData
                    };
                } else {
                    const pageData = isAppPath ? (await this.fs.readFile((await this.getFsPath({
                        pathname: `${key}.rsc`,
                        appDir: true
                    })).filePath)).toString("utf8") : JSON.parse((await this.fs.readFile((await this.getFsPath({
                        pathname: `${key}.json`,
                        appDir: false
                    })).filePath)).toString("utf8"));
                    let meta = {};
                    if (isAppPath) {
                        try {
                            meta = JSON.parse((await this.fs.readFile(filePath.replace(/\.html$/, ".meta"))).toString("utf-8"));
                        } catch (_) {}
                    }
                    data = {
                        lastModified: mtime.getTime(),
                        value: {
                            kind: "PAGE",
                            html: fileData,
                            pageData,
                            headers: meta.headers,
                            status: meta.status
                        }
                    };
                }
                if (data) {
                    memoryCache == null ? void 0 : memoryCache.set(key, data);
                }
            } catch (_) {}
        }
        let cacheTags;
        if ((data == null ? void 0 : (_data_value = data.value) == null ? void 0 : _data_value.kind) === "PAGE") {
            var _data_value_headers;
            const tagsHeader = (_data_value_headers = data.value.headers) == null ? void 0 : _data_value_headers["x-next-cache-tags"];
            if (typeof tagsHeader === "string") {
                cacheTags = tagsHeader.split(",");
            }
        }
        if ((data == null ? void 0 : (_data_value1 = data.value) == null ? void 0 : _data_value1.kind) === "PAGE" && (cacheTags == null ? void 0 : cacheTags.length)) {
            this.loadTagsManifest();
            const derivedTags = (0, _utils.getDerivedTags)(cacheTags || []);
            const isStale = derivedTags.some((tag)=>{
                var _tagsManifest_items_tag;
                return ((_tagsManifest_items_tag = tagsManifest == null ? void 0 : tagsManifest.items[tag]) == null ? void 0 : _tagsManifest_items_tag.revalidatedAt) && (tagsManifest == null ? void 0 : tagsManifest.items[tag].revalidatedAt) >= ((data == null ? void 0 : data.lastModified) || Date.now());
            });
            if (isStale) {
                data.lastModified = -1;
            }
        }
        if (data && (data == null ? void 0 : (_data_value2 = data.value) == null ? void 0 : _data_value2.kind) === "FETCH") {
            this.loadTagsManifest();
            const innerData = data.value.data;
            const derivedTags = (0, _utils.getDerivedTags)(innerData.tags || []);
            const wasRevalidated = derivedTags.some((tag)=>{
                var _tagsManifest_items_tag;
                if (this.revalidatedTags.includes(tag)) {
                    return true;
                }
                return ((_tagsManifest_items_tag = tagsManifest == null ? void 0 : tagsManifest.items[tag]) == null ? void 0 : _tagsManifest_items_tag.revalidatedAt) && (tagsManifest == null ? void 0 : tagsManifest.items[tag].revalidatedAt) >= ((data == null ? void 0 : data.lastModified) || Date.now());
            });
            if (wasRevalidated) {
                data = undefined;
            }
        }
        return data || null;
    }
    async set(key, data) {
        memoryCache == null ? void 0 : memoryCache.set(key, {
            value: data,
            lastModified: Date.now()
        });
        if (!this.flushToDisk) return;
        if ((data == null ? void 0 : data.kind) === "ROUTE") {
            const { filePath } = await this.getFsPath({
                pathname: `${key}.body`,
                appDir: true
            });
            await this.fs.mkdir(_path.default.dirname(filePath));
            await this.fs.writeFile(filePath, data.body);
            await this.fs.writeFile(filePath.replace(/\.body$/, ".meta"), JSON.stringify({
                headers: data.headers,
                status: data.status
            }));
            return;
        }
        if ((data == null ? void 0 : data.kind) === "PAGE") {
            const isAppPath = typeof data.pageData === "string";
            const { filePath: htmlPath } = await this.getFsPath({
                pathname: `${key}.html`,
                appDir: isAppPath
            });
            await this.fs.mkdir(_path.default.dirname(htmlPath));
            await this.fs.writeFile(htmlPath, data.html);
            await this.fs.writeFile((await this.getFsPath({
                pathname: `${key}.${isAppPath ? "rsc" : "json"}`,
                appDir: isAppPath
            })).filePath, isAppPath ? data.pageData : JSON.stringify(data.pageData));
            if (data.headers || data.status) {
                await this.fs.writeFile(htmlPath.replace(/\.html$/, ".meta"), JSON.stringify({
                    headers: data.headers,
                    status: data.status
                }));
            }
        } else if ((data == null ? void 0 : data.kind) === "FETCH") {
            const { filePath } = await this.getFsPath({
                pathname: key,
                fetchCache: true
            });
            await this.fs.mkdir(_path.default.dirname(filePath));
            await this.fs.writeFile(filePath, JSON.stringify(data));
            await this.setTags(key, data.data.tags || []);
        }
    }
    async getFsPath({ pathname, appDir, fetchCache }) {
        if (fetchCache) {
            return {
                filePath: _path.default.join(this.serverDistDir, "..", "cache", "fetch-cache", pathname),
                isAppPath: false
            };
        }
        let isAppPath = false;
        let filePath = _path.default.join(this.serverDistDir, "pages", pathname);
        if (!this.appDir || appDir === false) return {
            filePath,
            isAppPath
        };
        try {
            await this.fs.readFile(filePath);
            return {
                filePath,
                isAppPath
            };
        } catch (err) {
            return {
                filePath: _path.default.join(this.serverDistDir, "app", pathname),
                isAppPath: true
            };
        }
    }
}

}.call(this) }),
"[project]/node_modules/next/dist/server/lib/incremental-cache/index.js (ecmascript, rsc)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    CacheHandler: null,
    IncrementalCache: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    CacheHandler: function() {
        return CacheHandler;
    },
    IncrementalCache: function() {
        return IncrementalCache;
    }
});
const _filesystemcache = _interop_require_default(__turbopack_require__("[project]/node_modules/next/dist/server/lib/incremental-cache/file-system-cache.js (ecmascript, rsc)"));
const _path = _interop_require_default(__turbopack_require__("[project]/node_modules/next/dist/shared/lib/isomorphic/path.js (ecmascript, rsc)"));
const _normalizepagepath = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/page-path/normalize-page-path.js (ecmascript, rsc)");
const _fetchcache = _interop_require_default(__turbopack_require__("[project]/node_modules/next/dist/server/lib/incremental-cache/fetch-cache.js (ecmascript, rsc)"));
const _base64arraybuffer = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/base64-arraybuffer.js (ecmascript, rsc)");
const _encodedecode = __turbopack_require__("[project]/node_modules/next/dist/server/stream-utils/encode-decode.js (ecmascript, rsc)");
const _constants = __turbopack_require__("[project]/node_modules/next/dist/lib/constants.js (ecmascript, rsc)");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function toRoute(pathname) {
    return pathname.replace(/\/$/, "").replace(/\/index$/, "") || "/";
}
class CacheHandler {
    constructor(_ctx){}
    async get(_key, _fetchCache, _fetchUrl, _fetchIdx) {
        return {};
    }
    async set(_key, _data, _fetchCache, _fetchUrl, _fetchIdx) {}
    async revalidateTag(_tag) {}
}
class IncrementalCache {
    constructor({ fs, dev, appDir, flushToDisk, fetchCache, minimalMode, serverDistDir, requestHeaders, requestProtocol, maxMemoryCacheSize, getPrerenderManifest, fetchCacheKeyPrefix, CurCacheHandler, allowedRevalidateHeaderKeys }){
        var _this_prerenderManifest, _this_prerenderManifest_preview, _this_prerenderManifest1, _this_prerenderManifest_preview1;
        const debug = !!process.env.NEXT_PRIVATE_DEBUG_CACHE;
        if (!CurCacheHandler) {
            if (fs && serverDistDir) {
                if (debug) {
                    console.log("using filesystem cache handler");
                }
                CurCacheHandler = _filesystemcache.default;
            }
            if (_fetchcache.default.isAvailable({
                _requestHeaders: requestHeaders
            }) && minimalMode && fetchCache) {
                if (debug) {
                    console.log("using fetch cache handler");
                }
                CurCacheHandler = _fetchcache.default;
            }
        } else if (debug) {
            console.log("using custom cache handler", CurCacheHandler.name);
        }
        if (process.env.__NEXT_TEST_MAX_ISR_CACHE) {
            maxMemoryCacheSize = parseInt(process.env.__NEXT_TEST_MAX_ISR_CACHE, 10);
        }
        this.dev = dev;
        this.minimalMode = minimalMode;
        this.requestHeaders = requestHeaders;
        this.requestProtocol = requestProtocol;
        this.allowedRevalidateHeaderKeys = allowedRevalidateHeaderKeys;
        this.prerenderManifest = getPrerenderManifest();
        this.fetchCacheKeyPrefix = fetchCacheKeyPrefix;
        let revalidatedTags = [];
        if (requestHeaders[_constants.PRERENDER_REVALIDATE_HEADER] === ((_this_prerenderManifest = this.prerenderManifest) == null ? void 0 : (_this_prerenderManifest_preview = _this_prerenderManifest.preview) == null ? void 0 : _this_prerenderManifest_preview.previewModeId)) {
            this.isOnDemandRevalidate = true;
        }
        if (minimalMode && typeof requestHeaders["x-next-revalidated-tags"] === "string" && requestHeaders["x-next-revalidate-tag-token"] === ((_this_prerenderManifest1 = this.prerenderManifest) == null ? void 0 : (_this_prerenderManifest_preview1 = _this_prerenderManifest1.preview) == null ? void 0 : _this_prerenderManifest_preview1.previewModeId)) {
            revalidatedTags = requestHeaders["x-next-revalidated-tags"].split(",");
        }
        if (CurCacheHandler) {
            this.cacheHandler = new CurCacheHandler({
                dev,
                fs,
                flushToDisk,
                serverDistDir,
                revalidatedTags,
                maxMemoryCacheSize,
                _appDir: !!appDir,
                _requestHeaders: requestHeaders,
                fetchCacheKeyPrefix
            });
        }
    }
    calculateRevalidate(pathname, fromTime, dev) {
        if (dev) return new Date().getTime() - 1000;
        const { initialRevalidateSeconds } = this.prerenderManifest.routes[toRoute(pathname)] || {
            initialRevalidateSeconds: 1
        };
        const revalidateAfter = typeof initialRevalidateSeconds === "number" ? initialRevalidateSeconds * 1000 + fromTime : initialRevalidateSeconds;
        return revalidateAfter;
    }
    _getPathname(pathname, fetchCache) {
        return fetchCache ? pathname : (0, _normalizepagepath.normalizePagePath)(pathname);
    }
    async revalidateTag(tag) {
        var _this_cacheHandler;
        return (_this_cacheHandler = this.cacheHandler) == null ? void 0 : _this_cacheHandler.revalidateTag == null ? void 0 : _this_cacheHandler.revalidateTag(tag);
    }
    async fetchCacheKey(url, init = {}) {
        const MAIN_KEY_PREFIX = "v3";
        let cacheKey;
        const bodyChunks = [];
        if (init.body) {
            if (typeof init.body.getReader === "function") {
                const readableBody = init.body;
                const reader = readableBody.getReader();
                let arrayBuffer = new Uint8Array();
                function processValue({ done, value }) {
                    if (done) {
                        return;
                    }
                    if (value) {
                        try {
                            bodyChunks.push(typeof value === "string" ? value : (0, _base64arraybuffer.encode)(value));
                            const curBuffer = typeof value === "string" ? (0, _encodedecode.encodeText)(value) : new Uint8Array(value);
                            const prevBuffer = arrayBuffer;
                            arrayBuffer = new Uint8Array(prevBuffer.byteLength + curBuffer.byteLength);
                            arrayBuffer.set(prevBuffer);
                            arrayBuffer.set(curBuffer, prevBuffer.byteLength);
                        } catch (err) {
                            console.error(err);
                        }
                    }
                    reader.read().then(processValue);
                }
                await reader.read().then(processValue);
                init._ogBody = arrayBuffer;
            } else if (typeof init.body.keys === "function") {
                const formData = init.body;
                init._ogBody = init.body;
                for (const key of new Set([
                    ...formData.keys()
                ])){
                    const values = formData.getAll(key);
                    bodyChunks.push(`${key}=${(await Promise.all(values.map(async (val)=>{
                        if (typeof val === "string") {
                            return val;
                        } else {
                            return await val.text();
                        }
                    }))).join(",")}`);
                }
            } else if (typeof init.body.arrayBuffer === "function") {
                const blob = init.body;
                const arrayBuffer = await blob.arrayBuffer();
                bodyChunks.push((0, _base64arraybuffer.encode)(await init.body.arrayBuffer()));
                init._ogBody = new Blob([
                    arrayBuffer
                ], {
                    type: blob.type
                });
            } else if (typeof init.body === "string") {
                bodyChunks.push(init.body);
                init._ogBody = init.body;
            }
        }
        const cacheString = JSON.stringify([
            MAIN_KEY_PREFIX,
            this.fetchCacheKeyPrefix || "",
            url,
            init.method,
            typeof (init.headers || {}).keys === "function" ? Object.fromEntries(init.headers) : init.headers,
            init.mode,
            init.redirect,
            init.credentials,
            init.referrer,
            init.referrerPolicy,
            init.integrity,
            init.cache,
            bodyChunks
        ]);
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        } else {
            const crypto1 = __turbopack_external_require__("crypto");
            cacheKey = crypto1.createHash("sha256").update(cacheString).digest("hex");
        }
        return cacheKey;
    }
    async get(pathname, fetchCache, revalidate, fetchUrl, fetchIdx) {
        var _this_cacheHandler, _cacheData_value, _this_prerenderManifest_routes_toRoute;
        if (this.dev && (!fetchCache || this.requestHeaders["cache-control"] === "no-cache")) {
            return null;
        }
        pathname = this._getPathname(pathname, fetchCache);
        let entry = null;
        const cacheData = await ((_this_cacheHandler = this.cacheHandler) == null ? void 0 : _this_cacheHandler.get(pathname, fetchCache, fetchUrl, fetchIdx));
        if ((cacheData == null ? void 0 : (_cacheData_value = cacheData.value) == null ? void 0 : _cacheData_value.kind) === "FETCH") {
            revalidate = revalidate || cacheData.value.revalidate;
            const age = Math.round((Date.now() - (cacheData.lastModified || 0)) / 1000);
            const isStale = age > revalidate;
            const data = cacheData.value.data;
            return {
                isStale: isStale,
                value: {
                    kind: "FETCH",
                    data,
                    revalidate: revalidate
                },
                revalidateAfter: Date.now() + revalidate * 1000
            };
        }
        const curRevalidate = (_this_prerenderManifest_routes_toRoute = this.prerenderManifest.routes[toRoute(pathname)]) == null ? void 0 : _this_prerenderManifest_routes_toRoute.initialRevalidateSeconds;
        let isStale;
        let revalidateAfter;
        if ((cacheData == null ? void 0 : cacheData.lastModified) === -1) {
            isStale = -1;
            revalidateAfter = -1 * _constants.CACHE_ONE_YEAR;
        } else {
            revalidateAfter = this.calculateRevalidate(pathname, (cacheData == null ? void 0 : cacheData.lastModified) || Date.now(), this.dev && !fetchCache);
            isStale = revalidateAfter !== false && revalidateAfter < Date.now() ? true : undefined;
        }
        if (cacheData) {
            entry = {
                isStale,
                curRevalidate,
                revalidateAfter,
                value: cacheData.value
            };
        }
        if (!cacheData && this.prerenderManifest.notFoundRoutes.includes(pathname)) {
            entry = {
                isStale,
                value: null,
                curRevalidate,
                revalidateAfter
            };
            this.set(pathname, entry.value, curRevalidate, fetchCache, fetchUrl, fetchIdx);
        }
        return entry;
    }
    async set(pathname, data, revalidateSeconds, fetchCache, fetchUrl, fetchIdx) {
        if (this.dev && !fetchCache) return;
        if (fetchCache && JSON.stringify(data).length > 2 * 1024 * 1024) {
            if (this.dev) {
                throw new Error(`fetch for over 2MB of data can not be cached`);
            }
            return;
        }
        pathname = this._getPathname(pathname, fetchCache);
        try {
            var _this_cacheHandler;
            if (typeof revalidateSeconds !== "undefined" && !fetchCache) {
                this.prerenderManifest.routes[pathname] = {
                    dataRoute: _path.default.posix.join("/_next/data", `${(0, _normalizepagepath.normalizePagePath)(pathname)}.json`),
                    srcRoute: null,
                    initialRevalidateSeconds: revalidateSeconds
                };
            }
            await ((_this_cacheHandler = this.cacheHandler) == null ? void 0 : _this_cacheHandler.set(pathname, data, fetchCache, fetchUrl, fetchIdx));
        } catch (error) {
            console.warn("Failed to update prerender cache for", pathname, error);
        }
    }
}

}.call(this) }),
"[project]/node_modules/next/dist/server/lib/server-ipc/utils.js (ecmascript, rsc)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    forbiddenHeaders: null,
    filterReqHeaders: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    forbiddenHeaders: function() {
        return forbiddenHeaders;
    },
    filterReqHeaders: function() {
        return filterReqHeaders;
    }
});
const forbiddenHeaders = [
    "accept-encoding",
    "keepalive",
    "content-encoding",
    "transfer-encoding",
    "connection"
];
const filterReqHeaders = (headers)=>{
    for (const [key, value] of Object.entries(headers)){
        if (forbiddenHeaders.includes(key) || !(Array.isArray(value) || typeof value === "string")) {
            delete headers[key];
        }
    }
    return headers;
};

}.call(this) }),
"[project]/node_modules/next/dist/server/lib/server-ipc/invoke-request.js (ecmascript, rsc)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "invokeRequest", {
    enumerable: true,
    get: function() {
        return invokeRequest;
    }
});
const _utils = __turbopack_require__("[project]/node_modules/next/dist/server/lib/server-ipc/utils.js (ecmascript, rsc)");
const invokeRequest = async (targetUrl, requestInit, readableBody)=>{
    const invokeHeaders = (0, _utils.filterReqHeaders)({
        ...requestInit.headers
    });
    const invokeRes = await new Promise((resolveInvoke, rejectInvoke)=>{
        const http = __turbopack_external_require__("http");
        try {
            const parsedTargetUrl = new URL(targetUrl);
            parsedTargetUrl.hostname = "127.0.0.1";
            const invokeReq = http.request(parsedTargetUrl.toString(), {
                headers: invokeHeaders,
                method: requestInit.method
            }, (res)=>{
                resolveInvoke(res);
            });
            invokeReq.on("error", (err)=>{
                rejectInvoke(err);
            });
            if (requestInit.method !== "GET" && requestInit.method !== "HEAD") {
                if (readableBody) {
                    readableBody.pipe(invokeReq);
                    readableBody.on("close", ()=>{
                        invokeReq.end();
                    });
                }
            } else {
                invokeReq.end();
            }
        } catch (err) {
            rejectInvoke(err);
        }
    });
    return invokeRes;
};

}.call(this) }),
"[project]/components/header/MenuPages/index.js (ecmascript, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>AccountMenu
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/Box/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Avatar$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/Avatar/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Menu$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/Menu/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/MenuItem/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemIcon$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/ListItemIcon/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Divider$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/Divider/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/IconButton/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Tooltip$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/Tooltip/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$CurrencyExchangeOutlined$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/icons-material/CurrencyExchangeOutlined.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$AccountBalanceWalletOutlined$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/icons-material/AccountBalanceWalletOutlined.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$ShoppingBagOutlined$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/icons-material/ShoppingBagOutlined.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/Button/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Badge$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/Badge/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getUser$2f$getUser$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/getUser/getUser.jsx (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/styles/index.js (ecmascript, rsc)");
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
;
;
;
;
;
;
;
;
function AccountMenu({ userId, t }) {
    const [anchorEl, setAnchorEl] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__.useState(null);
    const [d, setD] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](null);
    const open = Boolean(anchorEl);
    const handleClick = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleClose = ()=>{
        setAnchorEl(null);
    };
    const [userData, setUserData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        if (!userId) return;
        const fetchData = async ()=>{
            try {
                const data = await __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getUser$2f$getUser$2e$jsx__$28$ecmascript$29$__["getUserData"](userId);
                setUserData(data);
            } catch (error) {
                console.error("Ошибка при получении данных пользователя:", error);
            }
        };
        fetchData();
        if (d && typeof d === 'string' && d.includes("Json")) {
            fetchData();
        }
    }, [
        userId,
        d
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        const handleMessage = (event)=>{
            if (event.origin !== "https://topbon.us") {
                return;
            }
            const jsonData = event.data;
            setD(typeof jsonData === 'string' ? jsonData : "");
        };
        window.addEventListener("message", handleMessage);
        return ()=>{
            window.removeEventListener("message", handleMessage);
        };
    }, []);
    return userData ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__.Fragment, {
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$index$2e$js__$28$ecmascript$29$__["default"], {
                sx: {
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center"
                },
                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](CustomBadge, {
                    badgeContent: userData.tickets,
                    color: "secondary",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Tooltip$2f$index$2e$js__$28$ecmascript$29$__["default"], {
                        title: t("Account menu"),
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$index$2e$js__$28$ecmascript$29$__["default"], {
                            onClick: handleClick,
                            size: "small",
                            sx: {
                                ml: 2
                            },
                            "aria-controls": open ? "account-menu" : undefined,
                            "aria-haspopup": "true",
                            "aria-expanded": open ? "true" : undefined,
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](CustomAvatar, {
                                sx: {
                                    width: 32,
                                    height: 32
                                },
                                children: userData.login.charAt(0).toUpperCase()
                            }, void 0, false, {
                                fileName: "<[project]/components/header/MenuPages/index.js>",
                                lineNumber: 86,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/components/header/MenuPages/index.js>",
                            lineNumber: 78,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/components/header/MenuPages/index.js>",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/components/header/MenuPages/index.js>",
                    lineNumber: 76,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/components/header/MenuPages/index.js>",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Menu$2f$index$2e$js__$28$ecmascript$29$__["default"], {
                anchorEl: anchorEl,
                id: "account-menu",
                open: open,
                onClose: handleClose,
                PaperProps: {
                    elevation: 0,
                    sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1
                        },
                        "&::before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: "background.paper",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0
                        }
                    }
                },
                transformOrigin: {
                    horizontal: "right",
                    vertical: "top"
                },
                anchorOrigin: {
                    horizontal: "right",
                    vertical: "bottom"
                },
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "w-full flex items-center user__balance",
                        onClick: handleClose,
                        children: [
                            t("Your balance:"),
                            " ",
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                className: "p-2 ml-2",
                                children: [
                                    userData.balance,
                                    "$"
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/components/header/MenuPages/index.js>",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/components/header/MenuPages/index.js>",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$index$2e$js__$28$ecmascript$29$__["default"], {
                        onClick: handleClose,
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Badge$2f$index$2e$js__$28$ecmascript$29$__["default"], {
                            badgeContent: userData.tickets,
                            color: "primary",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                className: "flex items-center w-full",
                                href: `/fortune`,
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemIcon$2f$index$2e$js__$28$ecmascript$29$__["default"], {
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$CurrencyExchangeOutlined$2e$js__$28$ecmascript$29$__["default"], {
                                            sx: {
                                                width: 20,
                                                height: 20
                                            },
                                            className: "mr-1"
                                        }, void 0, false, {
                                            fileName: "<[project]/components/header/MenuPages/index.js>",
                                            lineNumber: 138,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/components/header/MenuPages/index.js>",
                                        lineNumber: 137,
                                        columnNumber: 15
                                    }, this),
                                    t("Fortune wheel")
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/components/header/MenuPages/index.js>",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/components/header/MenuPages/index.js>",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/components/header/MenuPages/index.js>",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$index$2e$js__$28$ecmascript$29$__["default"], {
                        onClick: handleClose,
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                            className: "flex items-center w-full",
                            href: `/personal`,
                            children: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemIcon$2f$index$2e$js__$28$ecmascript$29$__["default"], {
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$AccountBalanceWalletOutlined$2e$js__$28$ecmascript$29$__["default"], {
                                        sx: {
                                            width: 20,
                                            height: 20
                                        },
                                        className: "mr-1"
                                    }, void 0, false, {
                                        fileName: "<[project]/components/header/MenuPages/index.js>",
                                        lineNumber: 153,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/components/header/MenuPages/index.js>",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, this),
                                t("My wallet")
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/components/header/MenuPages/index.js>",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/components/header/MenuPages/index.js>",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$index$2e$js__$28$ecmascript$29$__["default"], {
                        onClick: handleClose,
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                            className: "flex items-center w-full",
                            href: `/shop`,
                            children: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemIcon$2f$index$2e$js__$28$ecmascript$29$__["default"], {
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$ShoppingBagOutlined$2e$js__$28$ecmascript$29$__["default"], {
                                        sx: {
                                            width: 20,
                                            height: 20
                                        },
                                        className: "mr-1"
                                    }, void 0, false, {
                                        fileName: "<[project]/components/header/MenuPages/index.js>",
                                        lineNumber: 167,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/components/header/MenuPages/index.js>",
                                    lineNumber: 166,
                                    columnNumber: 13
                                }, this),
                                t("Cards Shop")
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/components/header/MenuPages/index.js>",
                            lineNumber: 162,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/components/header/MenuPages/index.js>",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Divider$2f$index$2e$js__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "<[project]/components/header/MenuPages/index.js>",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/components/header/MenuPages/index.js>",
                lineNumber: 93,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/components/header/MenuPages/index.js>",
        lineNumber: 74,
        columnNumber: 5
    }, this) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {}, void 0, false, {
        fileName: "<[project]/components/header/MenuPages/index.js>",
        lineNumber: 179,
        columnNumber: 5
    }, this);
}
const CustomAvatar = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$index$2e$js__$28$ecmascript$29$__["styled"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Avatar$2f$index$2e$js__$28$ecmascript$29$__["default"])(({ theme })=>({
        background: "#DCEBFC",
        width: "44px !important",
        height: "44px !important",
        color: "#1B5DB2",
        fontWeight: "700",
        fontSize: "21px"
    }));
const CustomBadge = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$index$2e$js__$28$ecmascript$29$__["styled"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Badge$2f$index$2e$js__$28$ecmascript$29$__["default"])(({ theme })=>({
        "& .MuiBadge-badge": {
            top: "15px",
            right: "5px",
            background: "#07B963",
            fontWeight: "700",
            fontSize: "11px"
        }
    }));

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
"[project]/node_modules/next/dist/compiled/process/browser.js (ecmascript, rsc)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

(function() {
    var e = {
        229: function(e) {
            var t = e.exports = {};
            var r;
            var n;
            function defaultSetTimout() {
                throw new Error("setTimeout has not been defined");
            }
            function defaultClearTimeout() {
                throw new Error("clearTimeout has not been defined");
            }
            (function() {
                try {
                    if (typeof setTimeout === "function") {
                        r = setTimeout;
                    } else {
                        r = defaultSetTimout;
                    }
                } catch (e) {
                    r = defaultSetTimout;
                }
                try {
                    if (typeof clearTimeout === "function") {
                        n = clearTimeout;
                    } else {
                        n = defaultClearTimeout;
                    }
                } catch (e) {
                    n = defaultClearTimeout;
                }
            })();
            function runTimeout(e) {
                if (r === setTimeout) {
                    return setTimeout(e, 0);
                }
                if ((r === defaultSetTimout || !r) && setTimeout) {
                    r = setTimeout;
                    return setTimeout(e, 0);
                }
                try {
                    return r(e, 0);
                } catch (t) {
                    try {
                        return r.call(null, e, 0);
                    } catch (t) {
                        return r.call(this, e, 0);
                    }
                }
            }
            function runClearTimeout(e) {
                if (n === clearTimeout) {
                    return clearTimeout(e);
                }
                if ((n === defaultClearTimeout || !n) && clearTimeout) {
                    n = clearTimeout;
                    return clearTimeout(e);
                }
                try {
                    return n(e);
                } catch (t) {
                    try {
                        return n.call(null, e);
                    } catch (t) {
                        return n.call(this, e);
                    }
                }
            }
            var i = [];
            var o = false;
            var u;
            var a = -1;
            function cleanUpNextTick() {
                if (!o || !u) {
                    return;
                }
                o = false;
                if (u.length) {
                    i = u.concat(i);
                } else {
                    a = -1;
                }
                if (i.length) {
                    drainQueue();
                }
            }
            function drainQueue() {
                if (o) {
                    return;
                }
                var e = runTimeout(cleanUpNextTick);
                o = true;
                var t = i.length;
                while(t){
                    u = i;
                    i = [];
                    while(++a < t){
                        if (u) {
                            u[a].run();
                        }
                    }
                    a = -1;
                    t = i.length;
                }
                u = null;
                o = false;
                runClearTimeout(e);
            }
            t.nextTick = function(e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1) {
                    for(var r = 1; r < arguments.length; r++){
                        t[r - 1] = arguments[r];
                    }
                }
                i.push(new Item(e, t));
                if (i.length === 1 && !o) {
                    runTimeout(drainQueue);
                }
            };
            function Item(e, t) {
                this.fun = e;
                this.array = t;
            }
            Item.prototype.run = function() {
                this.fun.apply(null, this.array);
            };
            t.title = "browser";
            t.browser = true;
            t.env = {};
            t.argv = [];
            t.version = "";
            t.versions = {};
            function noop() {}
            t.on = noop;
            t.addListener = noop;
            t.once = noop;
            t.off = noop;
            t.removeListener = noop;
            t.removeAllListeners = noop;
            t.emit = noop;
            t.prependListener = noop;
            t.prependOnceListener = noop;
            t.listeners = function(e) {
                return [];
            };
            t.binding = function(e) {
                throw new Error("process.binding is not supported");
            };
            t.cwd = function() {
                return "/";
            };
            t.chdir = function(e) {
                throw new Error("process.chdir is not supported");
            };
            t.umask = function() {
                return 0;
            };
        }
    };
    var t = {};
    function __nccwpck_require__(r) {
        var n = t[r];
        if (n !== undefined) {
            return n.exports;
        }
        var i = t[r] = {
            exports: {}
        };
        var o = true;
        try {
            e[r](i, i.exports, __nccwpck_require__);
            o = false;
        } finally{
            if (o) delete t[r];
        }
        return i.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var r = __nccwpck_require__(229);
    module.exports = r;
})();

}.call(this) }),
"[project]/node_modules/next/dist/compiled/react/cjs/react.development.js (ecmascript, rsc)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use strict';
if ("TURBOPACK compile-time truthy", 1) {
    (function() {
        'use strict';
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === 'function') {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var ReactVersion = '18.3.0-canary-9377e1010-20230712';
        var REACT_ELEMENT_TYPE = Symbol.for('react.element');
        var REACT_PORTAL_TYPE = Symbol.for('react.portal');
        var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
        var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
        var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
        var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
        var REACT_CONTEXT_TYPE = Symbol.for('react.context');
        var REACT_SERVER_CONTEXT_TYPE = Symbol.for('react.server_context');
        var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
        var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
        var REACT_MEMO_TYPE = Symbol.for('react.memo');
        var REACT_LAZY_TYPE = Symbol.for('react.lazy');
        var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
        var REACT_CACHE_TYPE = Symbol.for('react.cache');
        var REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED = Symbol.for('react.default_value');
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = '@@iterator';
        function getIteratorFn(maybeIterable) {
            if (maybeIterable === null || typeof maybeIterable !== 'object') {
                return null;
            }
            var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
            if (typeof maybeIterator === 'function') {
                return maybeIterator;
            }
            return null;
        }
        var ReactCurrentDispatcher$1 = {
            current: null
        };
        var ReactCurrentCache = {
            current: null
        };
        var ReactCurrentBatchConfig = {
            transition: null
        };
        var ReactCurrentActQueue = {
            current: null,
            isBatchingLegacy: false,
            didScheduleLegacyUpdate: false,
            didUsePromise: false
        };
        var ReactCurrentOwner = {
            current: null
        };
        var ReactDebugCurrentFrame$1 = {};
        var currentExtraStackFrame = null;
        function setExtraStackFrame(stack) {
            {
                currentExtraStackFrame = stack;
            }
        }
        {
            ReactDebugCurrentFrame$1.setExtraStackFrame = function(stack) {
                {
                    currentExtraStackFrame = stack;
                }
            };
            ReactDebugCurrentFrame$1.getCurrentStack = null;
            ReactDebugCurrentFrame$1.getStackAddendum = function() {
                var stack = '';
                if (currentExtraStackFrame) {
                    stack += currentExtraStackFrame;
                }
                var impl = ReactDebugCurrentFrame$1.getCurrentStack;
                if (impl) {
                    stack += impl() || '';
                }
                return stack;
            };
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var ContextRegistry$1 = {};
        var ReactSharedInternals = {
            ReactCurrentDispatcher: ReactCurrentDispatcher$1,
            ReactCurrentCache: ReactCurrentCache,
            ReactCurrentBatchConfig: ReactCurrentBatchConfig,
            ReactCurrentOwner: ReactCurrentOwner
        };
        {
            ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame$1;
            ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
        }
        {
            ReactSharedInternals.ContextRegistry = ContextRegistry$1;
        }
        function warn(format) {
            {
                {
                    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                        args[_key - 1] = arguments[_key];
                    }
                    printWarning('warn', format, args);
                }
            }
        }
        function error(format) {
            {
                {
                    for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++){
                        args[_key2 - 1] = arguments[_key2];
                    }
                    printWarning('error', format, args);
                }
            }
        }
        function printWarning(level, format, args) {
            {
                var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
                var stack = ReactDebugCurrentFrame.getStackAddendum();
                if (stack !== '') {
                    format += '%s';
                    args = args.concat([
                        stack
                    ]);
                }
                var argsWithFormat = args.map(function(item) {
                    return String(item);
                });
                argsWithFormat.unshift('Warning: ' + format);
                Function.prototype.apply.call(console[level], console, argsWithFormat);
            }
        }
        var didWarnStateUpdateForUnmountedComponent = {};
        function warnNoop(publicInstance, callerName) {
            {
                var _constructor = publicInstance.constructor;
                var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
                var warningKey = componentName + "." + callerName;
                if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
                    return;
                }
                error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
                didWarnStateUpdateForUnmountedComponent[warningKey] = true;
            }
        }
        var ReactNoopUpdateQueue = {
            isMounted: function(publicInstance) {
                return false;
            },
            enqueueForceUpdate: function(publicInstance, callback, callerName) {
                warnNoop(publicInstance, 'forceUpdate');
            },
            enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
                warnNoop(publicInstance, 'replaceState');
            },
            enqueueSetState: function(publicInstance, partialState, callback, callerName) {
                warnNoop(publicInstance, 'setState');
            }
        };
        var assign = Object.assign;
        var emptyObject = {};
        {
            Object.freeze(emptyObject);
        }
        function Component(props, context, updater) {
            this.props = props;
            this.context = context;
            this.refs = emptyObject;
            this.updater = updater || ReactNoopUpdateQueue;
        }
        Component.prototype.isReactComponent = {};
        Component.prototype.setState = function(partialState, callback) {
            if (typeof partialState !== 'object' && typeof partialState !== 'function' && partialState != null) {
                throw new Error('setState(...): takes an object of state variables to update or a ' + 'function which returns an object of state variables.');
            }
            this.updater.enqueueSetState(this, partialState, callback, 'setState');
        };
        Component.prototype.forceUpdate = function(callback) {
            this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
        };
        {
            var deprecatedAPIs = {
                isMounted: [
                    'isMounted',
                    'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'
                ],
                replaceState: [
                    'replaceState',
                    'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).'
                ]
            };
            var defineDeprecationWarning = function(methodName, info) {
                Object.defineProperty(Component.prototype, methodName, {
                    get: function() {
                        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
                        return undefined;
                    }
                });
            };
            for(var fnName in deprecatedAPIs){
                if (deprecatedAPIs.hasOwnProperty(fnName)) {
                    defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
                }
            }
        }
        function ComponentDummy() {}
        ComponentDummy.prototype = Component.prototype;
        function PureComponent(props, context, updater) {
            this.props = props;
            this.context = context;
            this.refs = emptyObject;
            this.updater = updater || ReactNoopUpdateQueue;
        }
        var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
        pureComponentPrototype.constructor = PureComponent;
        assign(pureComponentPrototype, Component.prototype);
        pureComponentPrototype.isPureReactComponent = true;
        function createRef() {
            var refObject = {
                current: null
            };
            {
                Object.seal(refObject);
            }
            return refObject;
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
            return isArrayImpl(a);
        }
        function typeName(value) {
            {
                var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
                var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
                return type;
            }
        }
        function willCoercionThrow(value) {
            {
                try {
                    testStringCoercion(value);
                    return false;
                } catch (e) {
                    return true;
                }
            }
        }
        function testStringCoercion(value) {
            return '' + value;
        }
        function checkKeyStringCoercion(value) {
            {
                if (willCoercionThrow(value)) {
                    error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));
                    return testStringCoercion(value);
                }
            }
        }
        function getWrappedName(outerType, innerType, wrapperName) {
            var displayName = outerType.displayName;
            if (displayName) {
                return displayName;
            }
            var functionName = innerType.displayName || innerType.name || '';
            return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
            return type.displayName || 'Context';
        }
        function getComponentNameFromType(type) {
            if (type == null) {
                return null;
            }
            {
                if (typeof type.tag === 'number') {
                    error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
                }
            }
            if (typeof type === 'function') {
                return type.displayName || type.name || null;
            }
            if (typeof type === 'string') {
                return type;
            }
            switch(type){
                case REACT_FRAGMENT_TYPE:
                    return 'Fragment';
                case REACT_PORTAL_TYPE:
                    return 'Portal';
                case REACT_PROFILER_TYPE:
                    return 'Profiler';
                case REACT_STRICT_MODE_TYPE:
                    return 'StrictMode';
                case REACT_SUSPENSE_TYPE:
                    return 'Suspense';
                case REACT_SUSPENSE_LIST_TYPE:
                    return 'SuspenseList';
                case REACT_CACHE_TYPE:
                    {
                        return 'Cache';
                    }
            }
            if (typeof type === 'object') {
                switch(type.$$typeof){
                    case REACT_CONTEXT_TYPE:
                        var context = type;
                        return getContextName(context) + '.Consumer';
                    case REACT_PROVIDER_TYPE:
                        var provider = type;
                        return getContextName(provider._context) + '.Provider';
                    case REACT_FORWARD_REF_TYPE:
                        return getWrappedName(type, type.render, 'ForwardRef');
                    case REACT_MEMO_TYPE:
                        var outerName = type.displayName || null;
                        if (outerName !== null) {
                            return outerName;
                        }
                        return getComponentNameFromType(type.type) || 'Memo';
                    case REACT_LAZY_TYPE:
                        {
                            var lazyComponent = type;
                            var payload = lazyComponent._payload;
                            var init = lazyComponent._init;
                            try {
                                return getComponentNameFromType(init(payload));
                            } catch (x) {
                                return null;
                            }
                        }
                    case REACT_SERVER_CONTEXT_TYPE:
                        {
                            var context2 = type;
                            return (context2.displayName || context2._globalName) + '.Provider';
                        }
                }
            }
            return null;
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var RESERVED_PROPS = {
            key: true,
            ref: true,
            __self: true,
            __source: true
        };
        var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
        {
            didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
            {
                if (hasOwnProperty.call(config, 'ref')) {
                    var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
                    if (getter && getter.isReactWarning) {
                        return false;
                    }
                }
            }
            return config.ref !== undefined;
        }
        function hasValidKey(config) {
            {
                if (hasOwnProperty.call(config, 'key')) {
                    var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
                    if (getter && getter.isReactWarning) {
                        return false;
                    }
                }
            }
            return config.key !== undefined;
        }
        function defineKeyPropWarningGetter(props, displayName) {
            var warnAboutAccessingKey = function() {
                {
                    if (!specialPropKeyWarningShown) {
                        specialPropKeyWarningShown = true;
                        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
                    }
                }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, 'key', {
                get: warnAboutAccessingKey,
                configurable: true
            });
        }
        function defineRefPropWarningGetter(props, displayName) {
            var warnAboutAccessingRef = function() {
                {
                    if (!specialPropRefWarningShown) {
                        specialPropRefWarningShown = true;
                        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
                    }
                }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, 'ref', {
                get: warnAboutAccessingRef,
                configurable: true
            });
        }
        function warnIfStringRefCannotBeAutoConverted(config) {
            {
                if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
                    var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
                    if (!didWarnAboutStringRefs[componentName]) {
                        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                        didWarnAboutStringRefs[componentName] = true;
                    }
                }
            }
        }
        function ReactElement(type, key, ref, self, source, owner, props) {
            var element = {
                $$typeof: REACT_ELEMENT_TYPE,
                type: type,
                key: key,
                ref: ref,
                props: props,
                _owner: owner
            };
            {
                element._store = {};
                Object.defineProperty(element._store, 'validated', {
                    configurable: false,
                    enumerable: false,
                    writable: true,
                    value: false
                });
                Object.defineProperty(element, '_self', {
                    configurable: false,
                    enumerable: false,
                    writable: false,
                    value: self
                });
                Object.defineProperty(element, '_source', {
                    configurable: false,
                    enumerable: false,
                    writable: false,
                    value: source
                });
                if (Object.freeze) {
                    Object.freeze(element.props);
                    Object.freeze(element);
                }
            }
            return element;
        }
        function createElement$1(type, config, children) {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            var self = null;
            var source = null;
            if (config != null) {
                if (hasValidRef(config)) {
                    ref = config.ref;
                    {
                        warnIfStringRefCannotBeAutoConverted(config);
                    }
                }
                if (hasValidKey(config)) {
                    {
                        checkKeyStringCoercion(config.key);
                    }
                    key = '' + config.key;
                }
                self = config.__self === undefined ? null : config.__self;
                source = config.__source === undefined ? null : config.__source;
                for(propName in config){
                    if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                        props[propName] = config[propName];
                    }
                }
            }
            var childrenLength = arguments.length - 2;
            if (childrenLength === 1) {
                props.children = children;
            } else if (childrenLength > 1) {
                var childArray = Array(childrenLength);
                for(var i = 0; i < childrenLength; i++){
                    childArray[i] = arguments[i + 2];
                }
                {
                    if (Object.freeze) {
                        Object.freeze(childArray);
                    }
                }
                props.children = childArray;
            }
            if (type && type.defaultProps) {
                var defaultProps = type.defaultProps;
                for(propName in defaultProps){
                    if (props[propName] === undefined) {
                        props[propName] = defaultProps[propName];
                    }
                }
            }
            {
                if (key || ref) {
                    var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
                    if (key) {
                        defineKeyPropWarningGetter(props, displayName);
                    }
                    if (ref) {
                        defineRefPropWarningGetter(props, displayName);
                    }
                }
            }
            return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
        }
        function cloneAndReplaceKey(oldElement, newKey) {
            var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
            return newElement;
        }
        function cloneElement$1(element, config, children) {
            if (element === null || element === undefined) {
                throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
            }
            var propName;
            var props = assign({}, element.props);
            var key = element.key;
            var ref = element.ref;
            var self = element._self;
            var source = element._source;
            var owner = element._owner;
            if (config != null) {
                if (hasValidRef(config)) {
                    ref = config.ref;
                    owner = ReactCurrentOwner.current;
                }
                if (hasValidKey(config)) {
                    {
                        checkKeyStringCoercion(config.key);
                    }
                    key = '' + config.key;
                }
                var defaultProps;
                if (element.type && element.type.defaultProps) {
                    defaultProps = element.type.defaultProps;
                }
                for(propName in config){
                    if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                        if (config[propName] === undefined && defaultProps !== undefined) {
                            props[propName] = defaultProps[propName];
                        } else {
                            props[propName] = config[propName];
                        }
                    }
                }
            }
            var childrenLength = arguments.length - 2;
            if (childrenLength === 1) {
                props.children = children;
            } else if (childrenLength > 1) {
                var childArray = Array(childrenLength);
                for(var i = 0; i < childrenLength; i++){
                    childArray[i] = arguments[i + 2];
                }
                props.children = childArray;
            }
            return ReactElement(element.type, key, ref, self, source, owner, props);
        }
        function isValidElement(object) {
            return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        var SEPARATOR = '.';
        var SUBSEPARATOR = ':';
        function escape(key) {
            var escapeRegex = /[=:]/g;
            var escaperLookup = {
                '=': '=0',
                ':': '=2'
            };
            var escapedString = key.replace(escapeRegex, function(match) {
                return escaperLookup[match];
            });
            return '$' + escapedString;
        }
        var didWarnAboutMaps = false;
        var userProvidedKeyEscapeRegex = /\/+/g;
        function escapeUserProvidedKey(text) {
            return text.replace(userProvidedKeyEscapeRegex, '$&/');
        }
        function getElementKey(element, index) {
            if (typeof element === 'object' && element !== null && element.key != null) {
                {
                    checkKeyStringCoercion(element.key);
                }
                return escape('' + element.key);
            }
            return index.toString(36);
        }
        function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
            var type = typeof children;
            if (type === 'undefined' || type === 'boolean') {
                children = null;
            }
            var invokeCallback = false;
            if (children === null) {
                invokeCallback = true;
            } else {
                switch(type){
                    case 'string':
                    case 'number':
                        invokeCallback = true;
                        break;
                    case 'object':
                        switch(children.$$typeof){
                            case REACT_ELEMENT_TYPE:
                            case REACT_PORTAL_TYPE:
                                invokeCallback = true;
                        }
                }
            }
            if (invokeCallback) {
                var _child = children;
                var mappedChild = callback(_child);
                var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
                if (isArray(mappedChild)) {
                    var escapedChildKey = '';
                    if (childKey != null) {
                        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
                    }
                    mapIntoArray(mappedChild, array, escapedChildKey, '', function(c) {
                        return c;
                    });
                } else if (mappedChild != null) {
                    if (isValidElement(mappedChild)) {
                        {
                            if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
                                checkKeyStringCoercion(mappedChild.key);
                            }
                        }
                        mappedChild = cloneAndReplaceKey(mappedChild, escapedPrefix + (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
                    }
                    array.push(mappedChild);
                }
                return 1;
            }
            var child;
            var nextName;
            var subtreeCount = 0;
            var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;
            if (isArray(children)) {
                for(var i = 0; i < children.length; i++){
                    child = children[i];
                    nextName = nextNamePrefix + getElementKey(child, i);
                    subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
                }
            } else {
                var iteratorFn = getIteratorFn(children);
                if (typeof iteratorFn === 'function') {
                    var iterableChildren = children;
                    {
                        if (iteratorFn === iterableChildren.entries) {
                            if (!didWarnAboutMaps) {
                                warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
                            }
                            didWarnAboutMaps = true;
                        }
                    }
                    var iterator = iteratorFn.call(iterableChildren);
                    var step;
                    var ii = 0;
                    while(!(step = iterator.next()).done){
                        child = step.value;
                        nextName = nextNamePrefix + getElementKey(child, ii++);
                        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
                    }
                } else if (type === 'object') {
                    var childrenString = String(children);
                    throw new Error("Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). " + 'If you meant to render a collection of children, use an array ' + 'instead.');
                }
            }
            return subtreeCount;
        }
        function mapChildren(children, func, context) {
            if (children == null) {
                return children;
            }
            var result = [];
            var count = 0;
            mapIntoArray(children, result, '', '', function(child) {
                return func.call(context, child, count++);
            });
            return result;
        }
        function countChildren(children) {
            var n = 0;
            mapChildren(children, function() {
                n++;
            });
            return n;
        }
        function forEachChildren(children, forEachFunc, forEachContext) {
            mapChildren(children, function() {
                forEachFunc.apply(this, arguments);
            }, forEachContext);
        }
        function toArray(children) {
            return mapChildren(children, function(child) {
                return child;
            }) || [];
        }
        function onlyChild(children) {
            if (!isValidElement(children)) {
                throw new Error('React.Children.only expected to receive a single React element child.');
            }
            return children;
        }
        function createContext(defaultValue) {
            var context = {
                $$typeof: REACT_CONTEXT_TYPE,
                _currentValue: defaultValue,
                _currentValue2: defaultValue,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null
            };
            context.Provider = {
                $$typeof: REACT_PROVIDER_TYPE,
                _context: context
            };
            var hasWarnedAboutUsingNestedContextConsumers = false;
            var hasWarnedAboutUsingConsumerProvider = false;
            var hasWarnedAboutDisplayNameOnConsumer = false;
            {
                var Consumer = {
                    $$typeof: REACT_CONTEXT_TYPE,
                    _context: context
                };
                Object.defineProperties(Consumer, {
                    Provider: {
                        get: function() {
                            if (!hasWarnedAboutUsingConsumerProvider) {
                                hasWarnedAboutUsingConsumerProvider = true;
                                error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
                            }
                            return context.Provider;
                        },
                        set: function(_Provider) {
                            context.Provider = _Provider;
                        }
                    },
                    _currentValue: {
                        get: function() {
                            return context._currentValue;
                        },
                        set: function(_currentValue) {
                            context._currentValue = _currentValue;
                        }
                    },
                    _currentValue2: {
                        get: function() {
                            return context._currentValue2;
                        },
                        set: function(_currentValue2) {
                            context._currentValue2 = _currentValue2;
                        }
                    },
                    _threadCount: {
                        get: function() {
                            return context._threadCount;
                        },
                        set: function(_threadCount) {
                            context._threadCount = _threadCount;
                        }
                    },
                    Consumer: {
                        get: function() {
                            if (!hasWarnedAboutUsingNestedContextConsumers) {
                                hasWarnedAboutUsingNestedContextConsumers = true;
                                error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
                            }
                            return context.Consumer;
                        }
                    },
                    displayName: {
                        get: function() {
                            return context.displayName;
                        },
                        set: function(displayName) {
                            if (!hasWarnedAboutDisplayNameOnConsumer) {
                                warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);
                                hasWarnedAboutDisplayNameOnConsumer = true;
                            }
                        }
                    }
                });
                context.Consumer = Consumer;
            }
            {
                context._currentRenderer = null;
                context._currentRenderer2 = null;
            }
            return context;
        }
        var Uninitialized = -1;
        var Pending = 0;
        var Resolved = 1;
        var Rejected = 2;
        function lazyInitializer(payload) {
            if (payload._status === Uninitialized) {
                var ctor = payload._result;
                var thenable = ctor();
                thenable.then(function(moduleObject) {
                    if (payload._status === Pending || payload._status === Uninitialized) {
                        var resolved = payload;
                        resolved._status = Resolved;
                        resolved._result = moduleObject;
                    }
                }, function(error) {
                    if (payload._status === Pending || payload._status === Uninitialized) {
                        var rejected = payload;
                        rejected._status = Rejected;
                        rejected._result = error;
                    }
                });
                if (payload._status === Uninitialized) {
                    var pending = payload;
                    pending._status = Pending;
                    pending._result = thenable;
                }
            }
            if (payload._status === Resolved) {
                var moduleObject = payload._result;
                {
                    if (moduleObject === undefined) {
                        error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + 'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))\n\n" + 'Did you accidentally put curly braces around the import?', moduleObject);
                    }
                }
                {
                    if (!('default' in moduleObject)) {
                        error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + 'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
                    }
                }
                return moduleObject.default;
            } else {
                throw payload._result;
            }
        }
        function lazy(ctor) {
            var payload = {
                _status: Uninitialized,
                _result: ctor
            };
            var lazyType = {
                $$typeof: REACT_LAZY_TYPE,
                _payload: payload,
                _init: lazyInitializer
            };
            {
                var defaultProps;
                var propTypes;
                Object.defineProperties(lazyType, {
                    defaultProps: {
                        configurable: true,
                        get: function() {
                            return defaultProps;
                        },
                        set: function(newDefaultProps) {
                            error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
                            defaultProps = newDefaultProps;
                            Object.defineProperty(lazyType, 'defaultProps', {
                                enumerable: true
                            });
                        }
                    },
                    propTypes: {
                        configurable: true,
                        get: function() {
                            return propTypes;
                        },
                        set: function(newPropTypes) {
                            error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
                            propTypes = newPropTypes;
                            Object.defineProperty(lazyType, 'propTypes', {
                                enumerable: true
                            });
                        }
                    }
                });
            }
            return lazyType;
        }
        function forwardRef(render) {
            {
                if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
                    error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
                } else if (typeof render !== 'function') {
                    error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
                } else {
                    if (render.length !== 0 && render.length !== 2) {
                        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
                    }
                }
                if (render != null) {
                    if (render.defaultProps != null || render.propTypes != null) {
                        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
                    }
                }
            }
            var elementType = {
                $$typeof: REACT_FORWARD_REF_TYPE,
                render: render
            };
            {
                var ownName;
                Object.defineProperty(elementType, 'displayName', {
                    enumerable: false,
                    configurable: true,
                    get: function() {
                        return ownName;
                    },
                    set: function(name) {
                        ownName = name;
                        if (!render.name && !render.displayName) {
                            render.displayName = name;
                        }
                    }
                });
            }
            return elementType;
        }
        var REACT_CLIENT_REFERENCE$1 = Symbol.for('react.client.reference');
        function isValidElementType(type) {
            if (typeof type === 'string' || typeof type === 'function') {
                return true;
            }
            if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
                return true;
            }
            if (typeof type === 'object' && type !== null) {
                if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE$1 || type.getModuleId !== undefined) {
                    return true;
                }
            }
            return false;
        }
        function memo(type, compare) {
            {
                if (!isValidElementType(type)) {
                    error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
                }
            }
            var elementType = {
                $$typeof: REACT_MEMO_TYPE,
                type: type,
                compare: compare === undefined ? null : compare
            };
            {
                var ownName;
                Object.defineProperty(elementType, 'displayName', {
                    enumerable: false,
                    configurable: true,
                    get: function() {
                        return ownName;
                    },
                    set: function(name) {
                        ownName = name;
                        if (!type.name && !type.displayName) {
                            type.displayName = name;
                        }
                    }
                });
            }
            return elementType;
        }
        var UNTERMINATED = 0;
        var TERMINATED = 1;
        var ERRORED = 2;
        function createCacheRoot() {
            return new WeakMap();
        }
        function createCacheNode() {
            return {
                s: UNTERMINATED,
                v: undefined,
                o: null,
                p: null
            };
        }
        function cache(fn) {
            return function() {
                var dispatcher = ReactCurrentCache.current;
                if (!dispatcher) {
                    return fn.apply(null, arguments);
                }
                var fnMap = dispatcher.getCacheForType(createCacheRoot);
                var fnNode = fnMap.get(fn);
                var cacheNode;
                if (fnNode === undefined) {
                    cacheNode = createCacheNode();
                    fnMap.set(fn, cacheNode);
                } else {
                    cacheNode = fnNode;
                }
                for(var i = 0, l = arguments.length; i < l; i++){
                    var arg = arguments[i];
                    if (typeof arg === 'function' || typeof arg === 'object' && arg !== null) {
                        var objectCache = cacheNode.o;
                        if (objectCache === null) {
                            cacheNode.o = objectCache = new WeakMap();
                        }
                        var objectNode = objectCache.get(arg);
                        if (objectNode === undefined) {
                            cacheNode = createCacheNode();
                            objectCache.set(arg, cacheNode);
                        } else {
                            cacheNode = objectNode;
                        }
                    } else {
                        var primitiveCache = cacheNode.p;
                        if (primitiveCache === null) {
                            cacheNode.p = primitiveCache = new Map();
                        }
                        var primitiveNode = primitiveCache.get(arg);
                        if (primitiveNode === undefined) {
                            cacheNode = createCacheNode();
                            primitiveCache.set(arg, cacheNode);
                        } else {
                            cacheNode = primitiveNode;
                        }
                    }
                }
                if (cacheNode.s === TERMINATED) {
                    return cacheNode.v;
                }
                if (cacheNode.s === ERRORED) {
                    throw cacheNode.v;
                }
                try {
                    var result = fn.apply(null, arguments);
                    var terminatedNode = cacheNode;
                    terminatedNode.s = TERMINATED;
                    terminatedNode.v = result;
                    return result;
                } catch (error) {
                    var erroredNode = cacheNode;
                    erroredNode.s = ERRORED;
                    erroredNode.v = error;
                    throw error;
                }
            };
        }
        function resolveDispatcher() {
            var dispatcher = ReactCurrentDispatcher$1.current;
            {
                if (dispatcher === null) {
                    error('Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for' + ' one of the following reasons:\n' + '1. You might have mismatching versions of React and the renderer (such as React DOM)\n' + '2. You might be breaking the Rules of Hooks\n' + '3. You might have more than one copy of React in the same app\n' + 'See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.');
                }
            }
            return dispatcher;
        }
        function useContext(Context) {
            var dispatcher = resolveDispatcher();
            {
                if (Context._context !== undefined) {
                    var realContext = Context._context;
                    if (realContext.Consumer === Context) {
                        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
                    } else if (realContext.Provider === Context) {
                        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
                    }
                }
            }
            return dispatcher.useContext(Context);
        }
        function useState(initialState) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useState(initialState);
        }
        function useReducer(reducer, initialArg, init) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useReducer(reducer, initialArg, init);
        }
        function useRef(initialValue) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useRef(initialValue);
        }
        function useEffect(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useEffect(create, deps);
        }
        function useInsertionEffect(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useInsertionEffect(create, deps);
        }
        function useLayoutEffect(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useLayoutEffect(create, deps);
        }
        function useCallback(callback, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useCallback(callback, deps);
        }
        function useMemo(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useMemo(create, deps);
        }
        function useImperativeHandle(ref, create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useImperativeHandle(ref, create, deps);
        }
        function useDebugValue(value, formatterFn) {
            {
                var dispatcher = resolveDispatcher();
                return dispatcher.useDebugValue(value, formatterFn);
            }
        }
        function useTransition() {
            var dispatcher = resolveDispatcher();
            return dispatcher.useTransition();
        }
        function useDeferredValue(value) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useDeferredValue(value);
        }
        function useId() {
            var dispatcher = resolveDispatcher();
            return dispatcher.useId();
        }
        function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
        }
        function useCacheRefresh() {
            var dispatcher = resolveDispatcher();
            return dispatcher.useCacheRefresh();
        }
        function use(usable) {
            var dispatcher = resolveDispatcher();
            return dispatcher.use(usable);
        }
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {}
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
            {
                if (disabledDepth === 0) {
                    prevLog = console.log;
                    prevInfo = console.info;
                    prevWarn = console.warn;
                    prevError = console.error;
                    prevGroup = console.group;
                    prevGroupCollapsed = console.groupCollapsed;
                    prevGroupEnd = console.groupEnd;
                    var props = {
                        configurable: true,
                        enumerable: true,
                        value: disabledLog,
                        writable: true
                    };
                    Object.defineProperties(console, {
                        info: props,
                        log: props,
                        warn: props,
                        error: props,
                        group: props,
                        groupCollapsed: props,
                        groupEnd: props
                    });
                }
                disabledDepth++;
            }
        }
        function reenableLogs() {
            {
                disabledDepth--;
                if (disabledDepth === 0) {
                    var props = {
                        configurable: true,
                        enumerable: true,
                        writable: true
                    };
                    Object.defineProperties(console, {
                        log: assign({}, props, {
                            value: prevLog
                        }),
                        info: assign({}, props, {
                            value: prevInfo
                        }),
                        warn: assign({}, props, {
                            value: prevWarn
                        }),
                        error: assign({}, props, {
                            value: prevError
                        }),
                        group: assign({}, props, {
                            value: prevGroup
                        }),
                        groupCollapsed: assign({}, props, {
                            value: prevGroupCollapsed
                        }),
                        groupEnd: assign({}, props, {
                            value: prevGroupEnd
                        })
                    });
                }
                if (disabledDepth < 0) {
                    error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
                }
            }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
            {
                if (prefix === undefined) {
                    try {
                        throw Error();
                    } catch (x) {
                        var match = x.stack.trim().match(/\n( *(at )?)/);
                        prefix = match && match[1] || '';
                    }
                }
                return '\n' + prefix + name;
            }
        }
        var reentry = false;
        var componentFrameCache;
        {
            var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
            componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
            if (!fn || reentry) {
                return '';
            }
            {
                var frame = componentFrameCache.get(fn);
                if (frame !== undefined) {
                    return frame;
                }
            }
            var control;
            reentry = true;
            var previousPrepareStackTrace = Error.prepareStackTrace;
            Error.prepareStackTrace = undefined;
            var previousDispatcher;
            {
                previousDispatcher = ReactCurrentDispatcher.current;
                ReactCurrentDispatcher.current = null;
                disableLogs();
            }
            try {
                if (construct) {
                    var Fake = function() {
                        throw Error();
                    };
                    Object.defineProperty(Fake.prototype, 'props', {
                        set: function() {
                            throw Error();
                        }
                    });
                    if (typeof Reflect === 'object' && Reflect.construct) {
                        try {
                            Reflect.construct(Fake, []);
                        } catch (x) {
                            control = x;
                        }
                        Reflect.construct(fn, [], Fake);
                    } else {
                        try {
                            Fake.call();
                        } catch (x) {
                            control = x;
                        }
                        fn.call(Fake.prototype);
                    }
                } else {
                    try {
                        throw Error();
                    } catch (x) {
                        control = x;
                    }
                    var maybePromise = fn();
                    if (maybePromise && typeof maybePromise.catch === 'function') {
                        maybePromise.catch(function() {});
                    }
                }
            } catch (sample) {
                if (sample && control && typeof sample.stack === 'string') {
                    var sampleLines = sample.stack.split('\n');
                    var controlLines = control.stack.split('\n');
                    var s = sampleLines.length - 1;
                    var c = controlLines.length - 1;
                    while(s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]){
                        c--;
                    }
                    for(; s >= 1 && c >= 0; s--, c--){
                        if (sampleLines[s] !== controlLines[c]) {
                            if (s !== 1 || c !== 1) {
                                do {
                                    s--;
                                    c--;
                                    if (c < 0 || sampleLines[s] !== controlLines[c]) {
                                        var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');
                                        if (fn.displayName && _frame.includes('<anonymous>')) {
                                            _frame = _frame.replace('<anonymous>', fn.displayName);
                                        }
                                        {
                                            if (typeof fn === 'function') {
                                                componentFrameCache.set(fn, _frame);
                                            }
                                        }
                                        return _frame;
                                    }
                                }while (s >= 1 && c >= 0)
                            }
                            break;
                        }
                    }
                }
            } finally{
                reentry = false;
                {
                    ReactCurrentDispatcher.current = previousDispatcher;
                    reenableLogs();
                }
                Error.prepareStackTrace = previousPrepareStackTrace;
            }
            var name = fn ? fn.displayName || fn.name : '';
            var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
            {
                if (typeof fn === 'function') {
                    componentFrameCache.set(fn, syntheticFrame);
                }
            }
            return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
            {
                return describeNativeComponentFrame(fn, false);
            }
        }
        function shouldConstruct(Component) {
            var prototype = Component.prototype;
            return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
            if (type == null) {
                return '';
            }
            if (typeof type === 'function') {
                {
                    return describeNativeComponentFrame(type, shouldConstruct(type));
                }
            }
            if (typeof type === 'string') {
                return describeBuiltInComponentFrame(type);
            }
            switch(type){
                case REACT_SUSPENSE_TYPE:
                    return describeBuiltInComponentFrame('Suspense');
                case REACT_SUSPENSE_LIST_TYPE:
                    return describeBuiltInComponentFrame('SuspenseList');
            }
            if (typeof type === 'object') {
                switch(type.$$typeof){
                    case REACT_FORWARD_REF_TYPE:
                        return describeFunctionComponentFrame(type.render);
                    case REACT_MEMO_TYPE:
                        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
                    case REACT_LAZY_TYPE:
                        {
                            var lazyComponent = type;
                            var payload = lazyComponent._payload;
                            var init = lazyComponent._init;
                            try {
                                return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                            } catch (x) {}
                        }
                }
            }
            return '';
        }
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement$1(element) {
            {
                if (element) {
                    var owner = element._owner;
                    var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                    ReactDebugCurrentFrame.setExtraStackFrame(stack);
                } else {
                    ReactDebugCurrentFrame.setExtraStackFrame(null);
                }
            }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
            {
                var has = Function.call.bind(hasOwnProperty);
                for(var typeSpecName in typeSpecs){
                    if (has(typeSpecs, typeSpecName)) {
                        var error$1 = void 0;
                        try {
                            if (typeof typeSpecs[typeSpecName] !== 'function') {
                                var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                                err.name = 'Invariant Violation';
                                throw err;
                            }
                            error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
                        } catch (ex) {
                            error$1 = ex;
                        }
                        if (error$1 && !(error$1 instanceof Error)) {
                            setCurrentlyValidatingElement$1(element);
                            error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);
                            setCurrentlyValidatingElement$1(null);
                        }
                        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                            loggedTypeFailures[error$1.message] = true;
                            setCurrentlyValidatingElement$1(element);
                            error('Failed %s type: %s', location, error$1.message);
                            setCurrentlyValidatingElement$1(null);
                        }
                    }
                }
            }
        }
        var REACT_CLIENT_REFERENCE = Symbol.for('react.client.reference');
        function setCurrentlyValidatingElement(element) {
            {
                if (element) {
                    var owner = element._owner;
                    var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                    setExtraStackFrame(stack);
                } else {
                    setExtraStackFrame(null);
                }
            }
        }
        var propTypesMisspellWarningShown;
        {
            propTypesMisspellWarningShown = false;
        }
        function getDeclarationErrorAddendum() {
            if (ReactCurrentOwner.current) {
                var name = getComponentNameFromType(ReactCurrentOwner.current.type);
                if (name) {
                    return '\n\nCheck the render method of `' + name + '`.';
                }
            }
            return '';
        }
        function getSourceInfoErrorAddendum(source) {
            if (source !== undefined) {
                var fileName = source.fileName.replace(/^.*[\\\/]/, '');
                var lineNumber = source.lineNumber;
                return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
            }
            return '';
        }
        function getSourceInfoErrorAddendumForProps(elementProps) {
            if (elementProps !== null && elementProps !== undefined) {
                return getSourceInfoErrorAddendum(elementProps.__source);
            }
            return '';
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
            var info = getDeclarationErrorAddendum();
            if (!info) {
                var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
                if (parentName) {
                    info = "\n\nCheck the top-level render call using <" + parentName + ">.";
                }
            }
            return info;
        }
        function validateExplicitKey(element, parentType) {
            if (!element._store || element._store.validated || element.key != null) {
                return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
                return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = '';
            if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
                childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
            }
            {
                setCurrentlyValidatingElement(element);
                error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
                setCurrentlyValidatingElement(null);
            }
        }
        function validateChildKeys(node, parentType) {
            if (typeof node !== 'object' || !node) {
                return;
            }
            if (node.$$typeof === REACT_CLIENT_REFERENCE) ;
            else if (isArray(node)) {
                for(var i = 0; i < node.length; i++){
                    var child = node[i];
                    if (isValidElement(child)) {
                        validateExplicitKey(child, parentType);
                    }
                }
            } else if (isValidElement(node)) {
                if (node._store) {
                    node._store.validated = true;
                }
            } else {
                var iteratorFn = getIteratorFn(node);
                if (typeof iteratorFn === 'function') {
                    if (iteratorFn !== node.entries) {
                        var iterator = iteratorFn.call(node);
                        var step;
                        while(!(step = iterator.next()).done){
                            if (isValidElement(step.value)) {
                                validateExplicitKey(step.value, parentType);
                            }
                        }
                    }
                }
            }
        }
        function validatePropTypes(element) {
            {
                var type = element.type;
                if (type === null || type === undefined || typeof type === 'string') {
                    return;
                }
                if (type.$$typeof === REACT_CLIENT_REFERENCE) {
                    return;
                }
                var propTypes;
                if (typeof type === 'function') {
                    propTypes = type.propTypes;
                } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MEMO_TYPE)) {
                    propTypes = type.propTypes;
                } else {
                    return;
                }
                if (propTypes) {
                    var name = getComponentNameFromType(type);
                    checkPropTypes(propTypes, element.props, 'prop', name, element);
                } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
                    propTypesMisspellWarningShown = true;
                    var _name = getComponentNameFromType(type);
                    error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
                }
                if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
                    error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
                }
            }
        }
        function validateFragmentProps(fragment) {
            {
                var keys = Object.keys(fragment.props);
                for(var i = 0; i < keys.length; i++){
                    var key = keys[i];
                    if (key !== 'children' && key !== 'key') {
                        setCurrentlyValidatingElement(fragment);
                        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
                        setCurrentlyValidatingElement(null);
                        break;
                    }
                }
                if (fragment.ref !== null) {
                    setCurrentlyValidatingElement(fragment);
                    error('Invalid attribute `ref` supplied to `React.Fragment`.');
                    setCurrentlyValidatingElement(null);
                }
            }
        }
        function createElementWithValidation(type, props, children) {
            var validType = isValidElementType(type);
            if (!validType) {
                var info = '';
                if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
                    info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
                }
                var sourceInfo = getSourceInfoErrorAddendumForProps(props);
                if (sourceInfo) {
                    info += sourceInfo;
                } else {
                    info += getDeclarationErrorAddendum();
                }
                var typeString;
                if (type === null) {
                    typeString = 'null';
                } else if (isArray(type)) {
                    typeString = 'array';
                } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
                    typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
                    info = ' Did you accidentally export a JSX literal instead of a component?';
                } else {
                    typeString = typeof type;
                }
                {
                    error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
                }
            }
            var element = createElement$1.apply(this, arguments);
            if (element == null) {
                return element;
            }
            if (validType) {
                for(var i = 2; i < arguments.length; i++){
                    validateChildKeys(arguments[i], type);
                }
            }
            if (type === REACT_FRAGMENT_TYPE) {
                validateFragmentProps(element);
            } else {
                validatePropTypes(element);
            }
            return element;
        }
        var didWarnAboutDeprecatedCreateFactory = false;
        function createFactoryWithValidation(type) {
            var validatedFactory = createElementWithValidation.bind(null, type);
            validatedFactory.type = type;
            {
                if (!didWarnAboutDeprecatedCreateFactory) {
                    didWarnAboutDeprecatedCreateFactory = true;
                    warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
                }
                Object.defineProperty(validatedFactory, 'type', {
                    enumerable: false,
                    get: function() {
                        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
                        Object.defineProperty(this, 'type', {
                            value: type
                        });
                        return type;
                    }
                });
            }
            return validatedFactory;
        }
        function cloneElementWithValidation(element, props, children) {
            var newElement = cloneElement$1.apply(this, arguments);
            for(var i = 2; i < arguments.length; i++){
                validateChildKeys(arguments[i], newElement.type);
            }
            validatePropTypes(newElement);
            return newElement;
        }
        var ContextRegistry = ReactSharedInternals.ContextRegistry;
        function createServerContext(globalName, defaultValue) {
            var wasDefined = true;
            if (!ContextRegistry[globalName]) {
                wasDefined = false;
                var _context = {
                    $$typeof: REACT_SERVER_CONTEXT_TYPE,
                    _currentValue: defaultValue,
                    _currentValue2: defaultValue,
                    _defaultValue: defaultValue,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null,
                    _globalName: globalName
                };
                _context.Provider = {
                    $$typeof: REACT_PROVIDER_TYPE,
                    _context: _context
                };
                {
                    var hasWarnedAboutUsingConsumer;
                    _context._currentRenderer = null;
                    _context._currentRenderer2 = null;
                    Object.defineProperties(_context, {
                        Consumer: {
                            get: function() {
                                if (!hasWarnedAboutUsingConsumer) {
                                    error('Consumer pattern is not supported by ReactServerContext');
                                    hasWarnedAboutUsingConsumer = true;
                                }
                                return null;
                            }
                        }
                    });
                }
                ContextRegistry[globalName] = _context;
            }
            var context = ContextRegistry[globalName];
            if (context._defaultValue === REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED) {
                context._defaultValue = defaultValue;
                if (context._currentValue === REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED) {
                    context._currentValue = defaultValue;
                }
                if (context._currentValue2 === REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED) {
                    context._currentValue2 = defaultValue;
                }
            } else if (wasDefined) {
                throw new Error("ServerContext: " + globalName + " already defined");
            }
            return context;
        }
        function startTransition(scope, options) {
            var prevTransition = ReactCurrentBatchConfig.transition;
            ReactCurrentBatchConfig.transition = {};
            var currentTransition = ReactCurrentBatchConfig.transition;
            {
                ReactCurrentBatchConfig.transition._updatedFibers = new Set();
            }
            try {
                scope();
            } finally{
                ReactCurrentBatchConfig.transition = prevTransition;
                {
                    if (prevTransition === null && currentTransition._updatedFibers) {
                        var updatedFibersCount = currentTransition._updatedFibers.size;
                        currentTransition._updatedFibers.clear();
                        if (updatedFibersCount > 10) {
                            warn('Detected a large number of updates inside startTransition. ' + 'If this is due to a subscription please re-write it to use React provided hooks. ' + 'Otherwise concurrent mode guarantees are off the table.');
                        }
                    }
                }
            }
        }
        var didWarnAboutMessageChannel = false;
        var enqueueTaskImpl = null;
        function enqueueTask(task) {
            if (enqueueTaskImpl === null) {
                try {
                    var requireString = ('require' + Math.random()).slice(0, 7);
                    var nodeRequire = module && module[requireString];
                    enqueueTaskImpl = nodeRequire.call(module, 'timers').setImmediate;
                } catch (_err) {
                    enqueueTaskImpl = function(callback) {
                        {
                            if (didWarnAboutMessageChannel === false) {
                                didWarnAboutMessageChannel = true;
                                if (typeof MessageChannel === 'undefined') {
                                    error('This browser does not have a MessageChannel implementation, ' + 'so enqueuing tasks via await act(async () => ...) will fail. ' + 'Please file an issue at https://github.com/facebook/react/issues ' + 'if you encounter this warning.');
                                }
                            }
                        }
                        var channel = new MessageChannel();
                        channel.port1.onmessage = callback;
                        channel.port2.postMessage(undefined);
                    };
                }
            }
            return enqueueTaskImpl(task);
        }
        var actScopeDepth = 0;
        var didWarnNoAwaitAct = false;
        function act(callback) {
            {
                var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
                var prevActQueue = ReactCurrentActQueue.current;
                var prevActScopeDepth = actScopeDepth;
                actScopeDepth++;
                var queue = ReactCurrentActQueue.current = prevActQueue !== null ? prevActQueue : [];
                ReactCurrentActQueue.isBatchingLegacy = true;
                var result;
                var didAwaitActCall = false;
                try {
                    ReactCurrentActQueue.didScheduleLegacyUpdate = false;
                    result = callback();
                    var didScheduleLegacyUpdate = ReactCurrentActQueue.didScheduleLegacyUpdate;
                    if (!prevIsBatchingLegacy && didScheduleLegacyUpdate) {
                        flushActQueue(queue);
                    }
                    ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
                } catch (error) {
                    ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
                    popActScope(prevActQueue, prevActScopeDepth);
                    throw error;
                }
                if (result !== null && typeof result === 'object' && typeof result.then === 'function') {
                    var thenable = result;
                    queueSeveralMicrotasks(function() {
                        if (!didAwaitActCall && !didWarnNoAwaitAct) {
                            didWarnNoAwaitAct = true;
                            error('You called act(async () => ...) without await. ' + 'This could lead to unexpected testing behaviour, ' + 'interleaving multiple act calls and mixing their ' + 'scopes. ' + 'You should - await act(async () => ...);');
                        }
                    });
                    return {
                        then: function(resolve, reject) {
                            didAwaitActCall = true;
                            thenable.then(function(returnValue) {
                                popActScope(prevActQueue, prevActScopeDepth);
                                if (prevActScopeDepth === 0) {
                                    try {
                                        flushActQueue(queue);
                                        enqueueTask(function() {
                                            return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                                        });
                                    } catch (error) {
                                        reject(error);
                                    }
                                } else {
                                    resolve(returnValue);
                                }
                            }, function(error) {
                                popActScope(prevActQueue, prevActScopeDepth);
                                reject(error);
                            });
                        }
                    };
                } else {
                    var returnValue = result;
                    popActScope(prevActQueue, prevActScopeDepth);
                    if (prevActScopeDepth === 0) {
                        flushActQueue(queue);
                        if (queue.length !== 0) {
                            queueSeveralMicrotasks(function() {
                                if (!didAwaitActCall && !didWarnNoAwaitAct) {
                                    didWarnNoAwaitAct = true;
                                    error('A component suspended inside an `act` scope, but the ' + '`act` call was not awaited. When testing React ' + 'components that depend on asynchronous data, you must ' + 'await the result:\n\n' + 'await act(() => ...)');
                                }
                            });
                        }
                        ReactCurrentActQueue.current = null;
                    }
                    return {
                        then: function(resolve, reject) {
                            didAwaitActCall = true;
                            if (prevActScopeDepth === 0) {
                                ReactCurrentActQueue.current = queue;
                                enqueueTask(function() {
                                    return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                                });
                            } else {
                                resolve(returnValue);
                            }
                        }
                    };
                }
            }
        }
        function popActScope(prevActQueue, prevActScopeDepth) {
            {
                if (prevActScopeDepth !== actScopeDepth - 1) {
                    error('You seem to have overlapping act() calls, this is not supported. ' + 'Be sure to await previous act() calls before making a new one. ');
                }
                actScopeDepth = prevActScopeDepth;
            }
        }
        function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
            {
                var queue = ReactCurrentActQueue.current;
                if (queue !== null) {
                    if (queue.length !== 0) {
                        try {
                            flushActQueue(queue);
                            enqueueTask(function() {
                                return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                            });
                        } catch (error) {
                            reject(error);
                        }
                    } else {
                        ReactCurrentActQueue.current = null;
                        resolve(returnValue);
                    }
                } else {
                    resolve(returnValue);
                }
            }
        }
        var isFlushing = false;
        function flushActQueue(queue) {
            {
                if (!isFlushing) {
                    isFlushing = true;
                    var i = 0;
                    try {
                        for(; i < queue.length; i++){
                            var callback = queue[i];
                            do {
                                ReactCurrentActQueue.didUsePromise = false;
                                var continuation = callback(false);
                                if (continuation !== null) {
                                    if (ReactCurrentActQueue.didUsePromise) {
                                        queue[i] = callback;
                                        queue.splice(0, i);
                                        return;
                                    }
                                    callback = continuation;
                                } else {
                                    break;
                                }
                            }while (true)
                        }
                        queue.length = 0;
                    } catch (error) {
                        queue.splice(0, i + 1);
                        throw error;
                    } finally{
                        isFlushing = false;
                    }
                }
            }
        }
        var queueSeveralMicrotasks = typeof queueMicrotask === 'function' ? function(callback) {
            queueMicrotask(function() {
                return queueMicrotask(callback);
            });
        } : enqueueTask;
        var createElement = createElementWithValidation;
        var cloneElement = cloneElementWithValidation;
        var createFactory = createFactoryWithValidation;
        var Children = {
            map: mapChildren,
            forEach: forEachChildren,
            count: countChildren,
            toArray: toArray,
            only: onlyChild
        };
        exports.Children = Children;
        exports.Component = Component;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.Profiler = REACT_PROFILER_TYPE;
        exports.PureComponent = PureComponent;
        exports.StrictMode = REACT_STRICT_MODE_TYPE;
        exports.Suspense = REACT_SUSPENSE_TYPE;
        exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
        exports.cache = cache;
        exports.cloneElement = cloneElement;
        exports.createContext = createContext;
        exports.createElement = createElement;
        exports.createFactory = createFactory;
        exports.createRef = createRef;
        exports.createServerContext = createServerContext;
        exports.forwardRef = forwardRef;
        exports.isValidElement = isValidElement;
        exports.lazy = lazy;
        exports.memo = memo;
        exports.startTransition = startTransition;
        exports.unstable_act = act;
        exports.unstable_useCacheRefresh = useCacheRefresh;
        exports.use = use;
        exports.useCallback = useCallback;
        exports.useContext = useContext;
        exports.useDebugValue = useDebugValue;
        exports.useDeferredValue = useDeferredValue;
        exports.useEffect = useEffect;
        exports.useId = useId;
        exports.useImperativeHandle = useImperativeHandle;
        exports.useInsertionEffect = useInsertionEffect;
        exports.useLayoutEffect = useLayoutEffect;
        exports.useMemo = useMemo;
        exports.useReducer = useReducer;
        exports.useRef = useRef;
        exports.useState = useState;
        exports.useSyncExternalStore = useSyncExternalStore;
        exports.useTransition = useTransition;
        exports.version = ReactVersion;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === 'function') {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
    })();
}

}.call(this) }),
"[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, rsc)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_require__("[project]/node_modules/next/dist/compiled/react/cjs/react.development.js (ecmascript, rsc)");
}

}.call(this) }),
"[project]/node_modules/next/dist/compiled/react/cjs/react.shared-subset.development.js (ecmascript, rsc)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

'use strict';
if ("TURBOPACK compile-time truthy", 1) {
    (function() {
        'use strict';
        var ReactCurrentDispatcher$1 = {
            current: null
        };
        var ReactCurrentCache = {
            current: null
        };
        var ReactCurrentBatchConfig = {
            transition: null
        };
        var ReactCurrentActQueue = {
            current: null,
            isBatchingLegacy: false,
            didScheduleLegacyUpdate: false,
            didUsePromise: false
        };
        var ReactCurrentOwner = {
            current: null
        };
        var ReactDebugCurrentFrame$1 = {};
        var currentExtraStackFrame = null;
        function setExtraStackFrame(stack) {
            {
                currentExtraStackFrame = stack;
            }
        }
        {
            ReactDebugCurrentFrame$1.setExtraStackFrame = function(stack) {
                {
                    currentExtraStackFrame = stack;
                }
            };
            ReactDebugCurrentFrame$1.getCurrentStack = null;
            ReactDebugCurrentFrame$1.getStackAddendum = function() {
                var stack = '';
                if (currentExtraStackFrame) {
                    stack += currentExtraStackFrame;
                }
                var impl = ReactDebugCurrentFrame$1.getCurrentStack;
                if (impl) {
                    stack += impl() || '';
                }
                return stack;
            };
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var ContextRegistry$1 = {};
        var ReactSharedInternals = {
            ReactCurrentDispatcher: ReactCurrentDispatcher$1,
            ReactCurrentCache: ReactCurrentCache,
            ReactCurrentBatchConfig: ReactCurrentBatchConfig,
            ReactCurrentOwner: ReactCurrentOwner
        };
        {
            ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame$1;
            ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
        }
        {
            ReactSharedInternals.ContextRegistry = ContextRegistry$1;
        }
        function warn(format) {
            {
                {
                    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                        args[_key - 1] = arguments[_key];
                    }
                    printWarning('warn', format, args);
                }
            }
        }
        function error(format) {
            {
                {
                    for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++){
                        args[_key2 - 1] = arguments[_key2];
                    }
                    printWarning('error', format, args);
                }
            }
        }
        function printWarning(level, format, args) {
            {
                var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
                var stack = ReactDebugCurrentFrame.getStackAddendum();
                if (stack !== '') {
                    format += '%s';
                    args = args.concat([
                        stack
                    ]);
                }
                var argsWithFormat = args.map(function(item) {
                    return String(item);
                });
                argsWithFormat.unshift('Warning: ' + format);
                Function.prototype.apply.call(console[level], console, argsWithFormat);
            }
        }
        var assign = Object.assign;
        function createFetchCache() {
            return new Map();
        }
        var simpleCacheKey = '["GET",[],null,"follow",null,null,null,null]';
        function generateCacheKey(request) {
            return JSON.stringify([
                request.method,
                Array.from(request.headers.entries()),
                request.mode,
                request.redirect,
                request.credentials,
                request.referrer,
                request.referrerPolicy,
                request.integrity
            ]);
        }
        {
            if (typeof fetch === 'function') {
                var originalFetch = fetch;
                var cachedFetch = function fetch1(resource, options) {
                    var dispatcher = ReactCurrentCache.current;
                    if (!dispatcher) {
                        return originalFetch(resource, options);
                    }
                    if (options && options.signal && options.signal !== dispatcher.getCacheSignal()) {
                        return originalFetch(resource, options);
                    }
                    var url;
                    var cacheKey;
                    if (typeof resource === 'string' && !options) {
                        cacheKey = simpleCacheKey;
                        url = resource;
                    } else {
                        var request = typeof resource === 'string' || resource instanceof URL ? new Request(resource, options) : resource;
                        if (request.method !== 'GET' && request.method !== 'HEAD' || request.keepalive) {
                            return originalFetch(resource, options);
                        }
                        cacheKey = generateCacheKey(request);
                        url = request.url;
                    }
                    var cache = dispatcher.getCacheForType(createFetchCache);
                    var cacheEntries = cache.get(url);
                    var match;
                    if (cacheEntries === undefined) {
                        match = originalFetch(resource, options);
                        cache.set(url, [
                            cacheKey,
                            match
                        ]);
                    } else {
                        for(var i = 0, l = cacheEntries.length; i < l; i += 2){
                            var key = cacheEntries[i];
                            var value = cacheEntries[i + 1];
                            if (key === cacheKey) {
                                match = value;
                                return match.then(function(response) {
                                    return response.clone();
                                });
                            }
                        }
                        match = originalFetch(resource, options);
                        cacheEntries.push(cacheKey, match);
                    }
                    return match.then(function(response) {
                        return response.clone();
                    });
                };
                assign(cachedFetch, originalFetch);
                try {
                    fetch = cachedFetch;
                } catch (error1) {
                    try {
                        globalThis.fetch = cachedFetch;
                    } catch (error2) {
                        warn('React was unable to patch the fetch() function in this environment. ' + 'Suspensey APIs might not work correctly as a result.');
                    }
                }
            }
        }
        var ReactVersion = '18.3.0-canary-9377e1010-20230712';
        var REACT_ELEMENT_TYPE = Symbol.for('react.element');
        var REACT_PORTAL_TYPE = Symbol.for('react.portal');
        var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
        var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
        var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
        var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
        var REACT_CONTEXT_TYPE = Symbol.for('react.context');
        var REACT_SERVER_CONTEXT_TYPE = Symbol.for('react.server_context');
        var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
        var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
        var REACT_MEMO_TYPE = Symbol.for('react.memo');
        var REACT_LAZY_TYPE = Symbol.for('react.lazy');
        var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
        var REACT_CACHE_TYPE = Symbol.for('react.cache');
        var REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED = Symbol.for('react.default_value');
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = '@@iterator';
        function getIteratorFn(maybeIterable) {
            if (maybeIterable === null || typeof maybeIterable !== 'object') {
                return null;
            }
            var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
            if (typeof maybeIterator === 'function') {
                return maybeIterator;
            }
            return null;
        }
        var didWarnStateUpdateForUnmountedComponent = {};
        function warnNoop(publicInstance, callerName) {
            {
                var _constructor = publicInstance.constructor;
                var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
                var warningKey = componentName + "." + callerName;
                if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
                    return;
                }
                error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
                didWarnStateUpdateForUnmountedComponent[warningKey] = true;
            }
        }
        var ReactNoopUpdateQueue = {
            isMounted: function(publicInstance) {
                return false;
            },
            enqueueForceUpdate: function(publicInstance, callback, callerName) {
                warnNoop(publicInstance, 'forceUpdate');
            },
            enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
                warnNoop(publicInstance, 'replaceState');
            },
            enqueueSetState: function(publicInstance, partialState, callback, callerName) {
                warnNoop(publicInstance, 'setState');
            }
        };
        var emptyObject = {};
        {
            Object.freeze(emptyObject);
        }
        function Component(props, context, updater) {
            this.props = props;
            this.context = context;
            this.refs = emptyObject;
            this.updater = updater || ReactNoopUpdateQueue;
        }
        Component.prototype.isReactComponent = {};
        Component.prototype.setState = function(partialState, callback) {
            if (typeof partialState !== 'object' && typeof partialState !== 'function' && partialState != null) {
                throw new Error('setState(...): takes an object of state variables to update or a ' + 'function which returns an object of state variables.');
            }
            this.updater.enqueueSetState(this, partialState, callback, 'setState');
        };
        Component.prototype.forceUpdate = function(callback) {
            this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
        };
        {
            var deprecatedAPIs = {
                isMounted: [
                    'isMounted',
                    'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'
                ],
                replaceState: [
                    'replaceState',
                    'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).'
                ]
            };
            var defineDeprecationWarning = function(methodName, info) {
                Object.defineProperty(Component.prototype, methodName, {
                    get: function() {
                        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
                        return undefined;
                    }
                });
            };
            for(var fnName in deprecatedAPIs){
                if (deprecatedAPIs.hasOwnProperty(fnName)) {
                    defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
                }
            }
        }
        function ComponentDummy() {}
        ComponentDummy.prototype = Component.prototype;
        function PureComponent(props, context, updater) {
            this.props = props;
            this.context = context;
            this.refs = emptyObject;
            this.updater = updater || ReactNoopUpdateQueue;
        }
        var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
        pureComponentPrototype.constructor = PureComponent;
        assign(pureComponentPrototype, Component.prototype);
        pureComponentPrototype.isPureReactComponent = true;
        function createRef() {
            var refObject = {
                current: null
            };
            {
                Object.seal(refObject);
            }
            return refObject;
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
            return isArrayImpl(a);
        }
        function typeName(value) {
            {
                var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
                var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
                return type;
            }
        }
        function willCoercionThrow(value) {
            {
                try {
                    testStringCoercion(value);
                    return false;
                } catch (e) {
                    return true;
                }
            }
        }
        function testStringCoercion(value) {
            return '' + value;
        }
        function checkKeyStringCoercion(value) {
            {
                if (willCoercionThrow(value)) {
                    error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));
                    return testStringCoercion(value);
                }
            }
        }
        function getWrappedName(outerType, innerType, wrapperName) {
            var displayName = outerType.displayName;
            if (displayName) {
                return displayName;
            }
            var functionName = innerType.displayName || innerType.name || '';
            return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
            return type.displayName || 'Context';
        }
        function getComponentNameFromType(type) {
            if (type == null) {
                return null;
            }
            {
                if (typeof type.tag === 'number') {
                    error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
                }
            }
            if (typeof type === 'function') {
                return type.displayName || type.name || null;
            }
            if (typeof type === 'string') {
                return type;
            }
            switch(type){
                case REACT_FRAGMENT_TYPE:
                    return 'Fragment';
                case REACT_PORTAL_TYPE:
                    return 'Portal';
                case REACT_PROFILER_TYPE:
                    return 'Profiler';
                case REACT_STRICT_MODE_TYPE:
                    return 'StrictMode';
                case REACT_SUSPENSE_TYPE:
                    return 'Suspense';
                case REACT_SUSPENSE_LIST_TYPE:
                    return 'SuspenseList';
                case REACT_CACHE_TYPE:
                    {
                        return 'Cache';
                    }
            }
            if (typeof type === 'object') {
                switch(type.$$typeof){
                    case REACT_CONTEXT_TYPE:
                        var context = type;
                        return getContextName(context) + '.Consumer';
                    case REACT_PROVIDER_TYPE:
                        var provider = type;
                        return getContextName(provider._context) + '.Provider';
                    case REACT_FORWARD_REF_TYPE:
                        return getWrappedName(type, type.render, 'ForwardRef');
                    case REACT_MEMO_TYPE:
                        var outerName = type.displayName || null;
                        if (outerName !== null) {
                            return outerName;
                        }
                        return getComponentNameFromType(type.type) || 'Memo';
                    case REACT_LAZY_TYPE:
                        {
                            var lazyComponent = type;
                            var payload = lazyComponent._payload;
                            var init = lazyComponent._init;
                            try {
                                return getComponentNameFromType(init(payload));
                            } catch (x) {
                                return null;
                            }
                        }
                    case REACT_SERVER_CONTEXT_TYPE:
                        {
                            var context2 = type;
                            return (context2.displayName || context2._globalName) + '.Provider';
                        }
                }
            }
            return null;
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var RESERVED_PROPS = {
            key: true,
            ref: true,
            __self: true,
            __source: true
        };
        var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
        {
            didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
            {
                if (hasOwnProperty.call(config, 'ref')) {
                    var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
                    if (getter && getter.isReactWarning) {
                        return false;
                    }
                }
            }
            return config.ref !== undefined;
        }
        function hasValidKey(config) {
            {
                if (hasOwnProperty.call(config, 'key')) {
                    var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
                    if (getter && getter.isReactWarning) {
                        return false;
                    }
                }
            }
            return config.key !== undefined;
        }
        function defineKeyPropWarningGetter(props, displayName) {
            var warnAboutAccessingKey = function() {
                {
                    if (!specialPropKeyWarningShown) {
                        specialPropKeyWarningShown = true;
                        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
                    }
                }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, 'key', {
                get: warnAboutAccessingKey,
                configurable: true
            });
        }
        function defineRefPropWarningGetter(props, displayName) {
            var warnAboutAccessingRef = function() {
                {
                    if (!specialPropRefWarningShown) {
                        specialPropRefWarningShown = true;
                        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
                    }
                }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, 'ref', {
                get: warnAboutAccessingRef,
                configurable: true
            });
        }
        function warnIfStringRefCannotBeAutoConverted(config) {
            {
                if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
                    var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
                    if (!didWarnAboutStringRefs[componentName]) {
                        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                        didWarnAboutStringRefs[componentName] = true;
                    }
                }
            }
        }
        function ReactElement(type, key, ref, self, source, owner, props) {
            var element = {
                $$typeof: REACT_ELEMENT_TYPE,
                type: type,
                key: key,
                ref: ref,
                props: props,
                _owner: owner
            };
            {
                element._store = {};
                Object.defineProperty(element._store, 'validated', {
                    configurable: false,
                    enumerable: false,
                    writable: true,
                    value: false
                });
                Object.defineProperty(element, '_self', {
                    configurable: false,
                    enumerable: false,
                    writable: false,
                    value: self
                });
                Object.defineProperty(element, '_source', {
                    configurable: false,
                    enumerable: false,
                    writable: false,
                    value: source
                });
                if (Object.freeze) {
                    Object.freeze(element.props);
                    Object.freeze(element);
                }
            }
            return element;
        }
        function createElement$1(type, config, children) {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            var self = null;
            var source = null;
            if (config != null) {
                if (hasValidRef(config)) {
                    ref = config.ref;
                    {
                        warnIfStringRefCannotBeAutoConverted(config);
                    }
                }
                if (hasValidKey(config)) {
                    {
                        checkKeyStringCoercion(config.key);
                    }
                    key = '' + config.key;
                }
                self = config.__self === undefined ? null : config.__self;
                source = config.__source === undefined ? null : config.__source;
                for(propName in config){
                    if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                        props[propName] = config[propName];
                    }
                }
            }
            var childrenLength = arguments.length - 2;
            if (childrenLength === 1) {
                props.children = children;
            } else if (childrenLength > 1) {
                var childArray = Array(childrenLength);
                for(var i = 0; i < childrenLength; i++){
                    childArray[i] = arguments[i + 2];
                }
                {
                    if (Object.freeze) {
                        Object.freeze(childArray);
                    }
                }
                props.children = childArray;
            }
            if (type && type.defaultProps) {
                var defaultProps = type.defaultProps;
                for(propName in defaultProps){
                    if (props[propName] === undefined) {
                        props[propName] = defaultProps[propName];
                    }
                }
            }
            {
                if (key || ref) {
                    var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
                    if (key) {
                        defineKeyPropWarningGetter(props, displayName);
                    }
                    if (ref) {
                        defineRefPropWarningGetter(props, displayName);
                    }
                }
            }
            return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
        }
        function cloneAndReplaceKey(oldElement, newKey) {
            var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
            return newElement;
        }
        function cloneElement$1(element, config, children) {
            if (element === null || element === undefined) {
                throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
            }
            var propName;
            var props = assign({}, element.props);
            var key = element.key;
            var ref = element.ref;
            var self = element._self;
            var source = element._source;
            var owner = element._owner;
            if (config != null) {
                if (hasValidRef(config)) {
                    ref = config.ref;
                    owner = ReactCurrentOwner.current;
                }
                if (hasValidKey(config)) {
                    {
                        checkKeyStringCoercion(config.key);
                    }
                    key = '' + config.key;
                }
                var defaultProps;
                if (element.type && element.type.defaultProps) {
                    defaultProps = element.type.defaultProps;
                }
                for(propName in config){
                    if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                        if (config[propName] === undefined && defaultProps !== undefined) {
                            props[propName] = defaultProps[propName];
                        } else {
                            props[propName] = config[propName];
                        }
                    }
                }
            }
            var childrenLength = arguments.length - 2;
            if (childrenLength === 1) {
                props.children = children;
            } else if (childrenLength > 1) {
                var childArray = Array(childrenLength);
                for(var i = 0; i < childrenLength; i++){
                    childArray[i] = arguments[i + 2];
                }
                props.children = childArray;
            }
            return ReactElement(element.type, key, ref, self, source, owner, props);
        }
        function isValidElement(object) {
            return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        var SEPARATOR = '.';
        var SUBSEPARATOR = ':';
        function escape(key) {
            var escapeRegex = /[=:]/g;
            var escaperLookup = {
                '=': '=0',
                ':': '=2'
            };
            var escapedString = key.replace(escapeRegex, function(match) {
                return escaperLookup[match];
            });
            return '$' + escapedString;
        }
        var didWarnAboutMaps = false;
        var userProvidedKeyEscapeRegex = /\/+/g;
        function escapeUserProvidedKey(text) {
            return text.replace(userProvidedKeyEscapeRegex, '$&/');
        }
        function getElementKey(element, index) {
            if (typeof element === 'object' && element !== null && element.key != null) {
                {
                    checkKeyStringCoercion(element.key);
                }
                return escape('' + element.key);
            }
            return index.toString(36);
        }
        function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
            var type = typeof children;
            if (type === 'undefined' || type === 'boolean') {
                children = null;
            }
            var invokeCallback = false;
            if (children === null) {
                invokeCallback = true;
            } else {
                switch(type){
                    case 'string':
                    case 'number':
                        invokeCallback = true;
                        break;
                    case 'object':
                        switch(children.$$typeof){
                            case REACT_ELEMENT_TYPE:
                            case REACT_PORTAL_TYPE:
                                invokeCallback = true;
                        }
                }
            }
            if (invokeCallback) {
                var _child = children;
                var mappedChild = callback(_child);
                var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
                if (isArray(mappedChild)) {
                    var escapedChildKey = '';
                    if (childKey != null) {
                        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
                    }
                    mapIntoArray(mappedChild, array, escapedChildKey, '', function(c) {
                        return c;
                    });
                } else if (mappedChild != null) {
                    if (isValidElement(mappedChild)) {
                        {
                            if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
                                checkKeyStringCoercion(mappedChild.key);
                            }
                        }
                        mappedChild = cloneAndReplaceKey(mappedChild, escapedPrefix + (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
                    }
                    array.push(mappedChild);
                }
                return 1;
            }
            var child;
            var nextName;
            var subtreeCount = 0;
            var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;
            if (isArray(children)) {
                for(var i = 0; i < children.length; i++){
                    child = children[i];
                    nextName = nextNamePrefix + getElementKey(child, i);
                    subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
                }
            } else {
                var iteratorFn = getIteratorFn(children);
                if (typeof iteratorFn === 'function') {
                    var iterableChildren = children;
                    {
                        if (iteratorFn === iterableChildren.entries) {
                            if (!didWarnAboutMaps) {
                                warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
                            }
                            didWarnAboutMaps = true;
                        }
                    }
                    var iterator = iteratorFn.call(iterableChildren);
                    var step;
                    var ii = 0;
                    while(!(step = iterator.next()).done){
                        child = step.value;
                        nextName = nextNamePrefix + getElementKey(child, ii++);
                        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
                    }
                } else if (type === 'object') {
                    var childrenString = String(children);
                    throw new Error("Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). " + 'If you meant to render a collection of children, use an array ' + 'instead.');
                }
            }
            return subtreeCount;
        }
        function mapChildren(children, func, context) {
            if (children == null) {
                return children;
            }
            var result = [];
            var count = 0;
            mapIntoArray(children, result, '', '', function(child) {
                return func.call(context, child, count++);
            });
            return result;
        }
        function countChildren(children) {
            var n = 0;
            mapChildren(children, function() {
                n++;
            });
            return n;
        }
        function forEachChildren(children, forEachFunc, forEachContext) {
            mapChildren(children, function() {
                forEachFunc.apply(this, arguments);
            }, forEachContext);
        }
        function toArray(children) {
            return mapChildren(children, function(child) {
                return child;
            }) || [];
        }
        function onlyChild(children) {
            if (!isValidElement(children)) {
                throw new Error('React.Children.only expected to receive a single React element child.');
            }
            return children;
        }
        var Uninitialized = -1;
        var Pending = 0;
        var Resolved = 1;
        var Rejected = 2;
        function lazyInitializer(payload) {
            if (payload._status === Uninitialized) {
                var ctor = payload._result;
                var thenable = ctor();
                thenable.then(function(moduleObject) {
                    if (payload._status === Pending || payload._status === Uninitialized) {
                        var resolved = payload;
                        resolved._status = Resolved;
                        resolved._result = moduleObject;
                    }
                }, function(error) {
                    if (payload._status === Pending || payload._status === Uninitialized) {
                        var rejected = payload;
                        rejected._status = Rejected;
                        rejected._result = error;
                    }
                });
                if (payload._status === Uninitialized) {
                    var pending = payload;
                    pending._status = Pending;
                    pending._result = thenable;
                }
            }
            if (payload._status === Resolved) {
                var moduleObject = payload._result;
                {
                    if (moduleObject === undefined) {
                        error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + 'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))\n\n" + 'Did you accidentally put curly braces around the import?', moduleObject);
                    }
                }
                {
                    if (!('default' in moduleObject)) {
                        error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + 'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
                    }
                }
                return moduleObject.default;
            } else {
                throw payload._result;
            }
        }
        function lazy(ctor) {
            var payload = {
                _status: Uninitialized,
                _result: ctor
            };
            var lazyType = {
                $$typeof: REACT_LAZY_TYPE,
                _payload: payload,
                _init: lazyInitializer
            };
            {
                var defaultProps;
                var propTypes;
                Object.defineProperties(lazyType, {
                    defaultProps: {
                        configurable: true,
                        get: function() {
                            return defaultProps;
                        },
                        set: function(newDefaultProps) {
                            error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
                            defaultProps = newDefaultProps;
                            Object.defineProperty(lazyType, 'defaultProps', {
                                enumerable: true
                            });
                        }
                    },
                    propTypes: {
                        configurable: true,
                        get: function() {
                            return propTypes;
                        },
                        set: function(newPropTypes) {
                            error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
                            propTypes = newPropTypes;
                            Object.defineProperty(lazyType, 'propTypes', {
                                enumerable: true
                            });
                        }
                    }
                });
            }
            return lazyType;
        }
        function forwardRef(render) {
            {
                if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
                    error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
                } else if (typeof render !== 'function') {
                    error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
                } else {
                    if (render.length !== 0 && render.length !== 2) {
                        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
                    }
                }
                if (render != null) {
                    if (render.defaultProps != null || render.propTypes != null) {
                        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
                    }
                }
            }
            var elementType = {
                $$typeof: REACT_FORWARD_REF_TYPE,
                render: render
            };
            {
                var ownName;
                Object.defineProperty(elementType, 'displayName', {
                    enumerable: false,
                    configurable: true,
                    get: function() {
                        return ownName;
                    },
                    set: function(name) {
                        ownName = name;
                        if (!render.name && !render.displayName) {
                            render.displayName = name;
                        }
                    }
                });
            }
            return elementType;
        }
        var REACT_CLIENT_REFERENCE$1 = Symbol.for('react.client.reference');
        function isValidElementType(type) {
            if (typeof type === 'string' || typeof type === 'function') {
                return true;
            }
            if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
                return true;
            }
            if (typeof type === 'object' && type !== null) {
                if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE$1 || type.getModuleId !== undefined) {
                    return true;
                }
            }
            return false;
        }
        function memo(type, compare) {
            {
                if (!isValidElementType(type)) {
                    error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
                }
            }
            var elementType = {
                $$typeof: REACT_MEMO_TYPE,
                type: type,
                compare: compare === undefined ? null : compare
            };
            {
                var ownName;
                Object.defineProperty(elementType, 'displayName', {
                    enumerable: false,
                    configurable: true,
                    get: function() {
                        return ownName;
                    },
                    set: function(name) {
                        ownName = name;
                        if (!type.name && !type.displayName) {
                            type.displayName = name;
                        }
                    }
                });
            }
            return elementType;
        }
        var UNTERMINATED = 0;
        var TERMINATED = 1;
        var ERRORED = 2;
        function createCacheRoot() {
            return new WeakMap();
        }
        function createCacheNode() {
            return {
                s: UNTERMINATED,
                v: undefined,
                o: null,
                p: null
            };
        }
        function cache(fn) {
            return function() {
                var dispatcher = ReactCurrentCache.current;
                if (!dispatcher) {
                    return fn.apply(null, arguments);
                }
                var fnMap = dispatcher.getCacheForType(createCacheRoot);
                var fnNode = fnMap.get(fn);
                var cacheNode;
                if (fnNode === undefined) {
                    cacheNode = createCacheNode();
                    fnMap.set(fn, cacheNode);
                } else {
                    cacheNode = fnNode;
                }
                for(var i = 0, l = arguments.length; i < l; i++){
                    var arg = arguments[i];
                    if (typeof arg === 'function' || typeof arg === 'object' && arg !== null) {
                        var objectCache = cacheNode.o;
                        if (objectCache === null) {
                            cacheNode.o = objectCache = new WeakMap();
                        }
                        var objectNode = objectCache.get(arg);
                        if (objectNode === undefined) {
                            cacheNode = createCacheNode();
                            objectCache.set(arg, cacheNode);
                        } else {
                            cacheNode = objectNode;
                        }
                    } else {
                        var primitiveCache = cacheNode.p;
                        if (primitiveCache === null) {
                            cacheNode.p = primitiveCache = new Map();
                        }
                        var primitiveNode = primitiveCache.get(arg);
                        if (primitiveNode === undefined) {
                            cacheNode = createCacheNode();
                            primitiveCache.set(arg, cacheNode);
                        } else {
                            cacheNode = primitiveNode;
                        }
                    }
                }
                if (cacheNode.s === TERMINATED) {
                    return cacheNode.v;
                }
                if (cacheNode.s === ERRORED) {
                    throw cacheNode.v;
                }
                try {
                    var result = fn.apply(null, arguments);
                    var terminatedNode = cacheNode;
                    terminatedNode.s = TERMINATED;
                    terminatedNode.v = result;
                    return result;
                } catch (error) {
                    var erroredNode = cacheNode;
                    erroredNode.s = ERRORED;
                    erroredNode.v = error;
                    throw error;
                }
            };
        }
        function resolveDispatcher() {
            var dispatcher = ReactCurrentDispatcher$1.current;
            {
                if (dispatcher === null) {
                    error('Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for' + ' one of the following reasons:\n' + '1. You might have mismatching versions of React and the renderer (such as React DOM)\n' + '2. You might be breaking the Rules of Hooks\n' + '3. You might have more than one copy of React in the same app\n' + 'See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.');
                }
            }
            return dispatcher;
        }
        function useContext(Context) {
            var dispatcher = resolveDispatcher();
            {
                if (Context._context !== undefined) {
                    var realContext = Context._context;
                    if (realContext.Consumer === Context) {
                        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
                    } else if (realContext.Provider === Context) {
                        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
                    }
                }
            }
            return dispatcher.useContext(Context);
        }
        function useCallback(callback, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useCallback(callback, deps);
        }
        function useMemo(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useMemo(create, deps);
        }
        function useDebugValue(value, formatterFn) {
            {
                var dispatcher = resolveDispatcher();
                return dispatcher.useDebugValue(value, formatterFn);
            }
        }
        function useId() {
            var dispatcher = resolveDispatcher();
            return dispatcher.useId();
        }
        function use(usable) {
            var dispatcher = resolveDispatcher();
            return dispatcher.use(usable);
        }
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {}
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
            {
                if (disabledDepth === 0) {
                    prevLog = console.log;
                    prevInfo = console.info;
                    prevWarn = console.warn;
                    prevError = console.error;
                    prevGroup = console.group;
                    prevGroupCollapsed = console.groupCollapsed;
                    prevGroupEnd = console.groupEnd;
                    var props = {
                        configurable: true,
                        enumerable: true,
                        value: disabledLog,
                        writable: true
                    };
                    Object.defineProperties(console, {
                        info: props,
                        log: props,
                        warn: props,
                        error: props,
                        group: props,
                        groupCollapsed: props,
                        groupEnd: props
                    });
                }
                disabledDepth++;
            }
        }
        function reenableLogs() {
            {
                disabledDepth--;
                if (disabledDepth === 0) {
                    var props = {
                        configurable: true,
                        enumerable: true,
                        writable: true
                    };
                    Object.defineProperties(console, {
                        log: assign({}, props, {
                            value: prevLog
                        }),
                        info: assign({}, props, {
                            value: prevInfo
                        }),
                        warn: assign({}, props, {
                            value: prevWarn
                        }),
                        error: assign({}, props, {
                            value: prevError
                        }),
                        group: assign({}, props, {
                            value: prevGroup
                        }),
                        groupCollapsed: assign({}, props, {
                            value: prevGroupCollapsed
                        }),
                        groupEnd: assign({}, props, {
                            value: prevGroupEnd
                        })
                    });
                }
                if (disabledDepth < 0) {
                    error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
                }
            }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
            {
                if (prefix === undefined) {
                    try {
                        throw Error();
                    } catch (x) {
                        var match = x.stack.trim().match(/\n( *(at )?)/);
                        prefix = match && match[1] || '';
                    }
                }
                return '\n' + prefix + name;
            }
        }
        var reentry = false;
        var componentFrameCache;
        {
            var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
            componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
            if (!fn || reentry) {
                return '';
            }
            {
                var frame = componentFrameCache.get(fn);
                if (frame !== undefined) {
                    return frame;
                }
            }
            var control;
            reentry = true;
            var previousPrepareStackTrace = Error.prepareStackTrace;
            Error.prepareStackTrace = undefined;
            var previousDispatcher;
            {
                previousDispatcher = ReactCurrentDispatcher.current;
                ReactCurrentDispatcher.current = null;
                disableLogs();
            }
            try {
                if (construct) {
                    var Fake = function() {
                        throw Error();
                    };
                    Object.defineProperty(Fake.prototype, 'props', {
                        set: function() {
                            throw Error();
                        }
                    });
                    if (typeof Reflect === 'object' && Reflect.construct) {
                        try {
                            Reflect.construct(Fake, []);
                        } catch (x) {
                            control = x;
                        }
                        Reflect.construct(fn, [], Fake);
                    } else {
                        try {
                            Fake.call();
                        } catch (x) {
                            control = x;
                        }
                        fn.call(Fake.prototype);
                    }
                } else {
                    try {
                        throw Error();
                    } catch (x) {
                        control = x;
                    }
                    var maybePromise = fn();
                    if (maybePromise && typeof maybePromise.catch === 'function') {
                        maybePromise.catch(function() {});
                    }
                }
            } catch (sample) {
                if (sample && control && typeof sample.stack === 'string') {
                    var sampleLines = sample.stack.split('\n');
                    var controlLines = control.stack.split('\n');
                    var s = sampleLines.length - 1;
                    var c = controlLines.length - 1;
                    while(s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]){
                        c--;
                    }
                    for(; s >= 1 && c >= 0; s--, c--){
                        if (sampleLines[s] !== controlLines[c]) {
                            if (s !== 1 || c !== 1) {
                                do {
                                    s--;
                                    c--;
                                    if (c < 0 || sampleLines[s] !== controlLines[c]) {
                                        var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');
                                        if (fn.displayName && _frame.includes('<anonymous>')) {
                                            _frame = _frame.replace('<anonymous>', fn.displayName);
                                        }
                                        {
                                            if (typeof fn === 'function') {
                                                componentFrameCache.set(fn, _frame);
                                            }
                                        }
                                        return _frame;
                                    }
                                }while (s >= 1 && c >= 0)
                            }
                            break;
                        }
                    }
                }
            } finally{
                reentry = false;
                {
                    ReactCurrentDispatcher.current = previousDispatcher;
                    reenableLogs();
                }
                Error.prepareStackTrace = previousPrepareStackTrace;
            }
            var name = fn ? fn.displayName || fn.name : '';
            var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
            {
                if (typeof fn === 'function') {
                    componentFrameCache.set(fn, syntheticFrame);
                }
            }
            return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
            {
                return describeNativeComponentFrame(fn, false);
            }
        }
        function shouldConstruct(Component) {
            var prototype = Component.prototype;
            return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
            if (type == null) {
                return '';
            }
            if (typeof type === 'function') {
                {
                    return describeNativeComponentFrame(type, shouldConstruct(type));
                }
            }
            if (typeof type === 'string') {
                return describeBuiltInComponentFrame(type);
            }
            switch(type){
                case REACT_SUSPENSE_TYPE:
                    return describeBuiltInComponentFrame('Suspense');
                case REACT_SUSPENSE_LIST_TYPE:
                    return describeBuiltInComponentFrame('SuspenseList');
            }
            if (typeof type === 'object') {
                switch(type.$$typeof){
                    case REACT_FORWARD_REF_TYPE:
                        return describeFunctionComponentFrame(type.render);
                    case REACT_MEMO_TYPE:
                        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
                    case REACT_LAZY_TYPE:
                        {
                            var lazyComponent = type;
                            var payload = lazyComponent._payload;
                            var init = lazyComponent._init;
                            try {
                                return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                            } catch (x) {}
                        }
                }
            }
            return '';
        }
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement$1(element) {
            {
                if (element) {
                    var owner = element._owner;
                    var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                    ReactDebugCurrentFrame.setExtraStackFrame(stack);
                } else {
                    ReactDebugCurrentFrame.setExtraStackFrame(null);
                }
            }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
            {
                var has = Function.call.bind(hasOwnProperty);
                for(var typeSpecName in typeSpecs){
                    if (has(typeSpecs, typeSpecName)) {
                        var error$1 = void 0;
                        try {
                            if (typeof typeSpecs[typeSpecName] !== 'function') {
                                var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                                err.name = 'Invariant Violation';
                                throw err;
                            }
                            error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
                        } catch (ex) {
                            error$1 = ex;
                        }
                        if (error$1 && !(error$1 instanceof Error)) {
                            setCurrentlyValidatingElement$1(element);
                            error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);
                            setCurrentlyValidatingElement$1(null);
                        }
                        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                            loggedTypeFailures[error$1.message] = true;
                            setCurrentlyValidatingElement$1(element);
                            error('Failed %s type: %s', location, error$1.message);
                            setCurrentlyValidatingElement$1(null);
                        }
                    }
                }
            }
        }
        var REACT_CLIENT_REFERENCE = Symbol.for('react.client.reference');
        function setCurrentlyValidatingElement(element) {
            {
                if (element) {
                    var owner = element._owner;
                    var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                    setExtraStackFrame(stack);
                } else {
                    setExtraStackFrame(null);
                }
            }
        }
        var propTypesMisspellWarningShown;
        {
            propTypesMisspellWarningShown = false;
        }
        function getDeclarationErrorAddendum() {
            if (ReactCurrentOwner.current) {
                var name = getComponentNameFromType(ReactCurrentOwner.current.type);
                if (name) {
                    return '\n\nCheck the render method of `' + name + '`.';
                }
            }
            return '';
        }
        function getSourceInfoErrorAddendum(source) {
            if (source !== undefined) {
                var fileName = source.fileName.replace(/^.*[\\\/]/, '');
                var lineNumber = source.lineNumber;
                return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
            }
            return '';
        }
        function getSourceInfoErrorAddendumForProps(elementProps) {
            if (elementProps !== null && elementProps !== undefined) {
                return getSourceInfoErrorAddendum(elementProps.__source);
            }
            return '';
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
            var info = getDeclarationErrorAddendum();
            if (!info) {
                var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
                if (parentName) {
                    info = "\n\nCheck the top-level render call using <" + parentName + ">.";
                }
            }
            return info;
        }
        function validateExplicitKey(element, parentType) {
            if (!element._store || element._store.validated || element.key != null) {
                return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
                return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = '';
            if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
                childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
            }
            {
                setCurrentlyValidatingElement(element);
                error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
                setCurrentlyValidatingElement(null);
            }
        }
        function validateChildKeys(node, parentType) {
            if (typeof node !== 'object' || !node) {
                return;
            }
            if (node.$$typeof === REACT_CLIENT_REFERENCE) ;
            else if (isArray(node)) {
                for(var i = 0; i < node.length; i++){
                    var child = node[i];
                    if (isValidElement(child)) {
                        validateExplicitKey(child, parentType);
                    }
                }
            } else if (isValidElement(node)) {
                if (node._store) {
                    node._store.validated = true;
                }
            } else {
                var iteratorFn = getIteratorFn(node);
                if (typeof iteratorFn === 'function') {
                    if (iteratorFn !== node.entries) {
                        var iterator = iteratorFn.call(node);
                        var step;
                        while(!(step = iterator.next()).done){
                            if (isValidElement(step.value)) {
                                validateExplicitKey(step.value, parentType);
                            }
                        }
                    }
                }
            }
        }
        function validatePropTypes(element) {
            {
                var type = element.type;
                if (type === null || type === undefined || typeof type === 'string') {
                    return;
                }
                if (type.$$typeof === REACT_CLIENT_REFERENCE) {
                    return;
                }
                var propTypes;
                if (typeof type === 'function') {
                    propTypes = type.propTypes;
                } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MEMO_TYPE)) {
                    propTypes = type.propTypes;
                } else {
                    return;
                }
                if (propTypes) {
                    var name = getComponentNameFromType(type);
                    checkPropTypes(propTypes, element.props, 'prop', name, element);
                } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
                    propTypesMisspellWarningShown = true;
                    var _name = getComponentNameFromType(type);
                    error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
                }
                if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
                    error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
                }
            }
        }
        function validateFragmentProps(fragment) {
            {
                var keys = Object.keys(fragment.props);
                for(var i = 0; i < keys.length; i++){
                    var key = keys[i];
                    if (key !== 'children' && key !== 'key') {
                        setCurrentlyValidatingElement(fragment);
                        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
                        setCurrentlyValidatingElement(null);
                        break;
                    }
                }
                if (fragment.ref !== null) {
                    setCurrentlyValidatingElement(fragment);
                    error('Invalid attribute `ref` supplied to `React.Fragment`.');
                    setCurrentlyValidatingElement(null);
                }
            }
        }
        function createElementWithValidation(type, props, children) {
            var validType = isValidElementType(type);
            if (!validType) {
                var info = '';
                if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
                    info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
                }
                var sourceInfo = getSourceInfoErrorAddendumForProps(props);
                if (sourceInfo) {
                    info += sourceInfo;
                } else {
                    info += getDeclarationErrorAddendum();
                }
                var typeString;
                if (type === null) {
                    typeString = 'null';
                } else if (isArray(type)) {
                    typeString = 'array';
                } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
                    typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
                    info = ' Did you accidentally export a JSX literal instead of a component?';
                } else {
                    typeString = typeof type;
                }
                {
                    error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
                }
            }
            var element = createElement$1.apply(this, arguments);
            if (element == null) {
                return element;
            }
            if (validType) {
                for(var i = 2; i < arguments.length; i++){
                    validateChildKeys(arguments[i], type);
                }
            }
            if (type === REACT_FRAGMENT_TYPE) {
                validateFragmentProps(element);
            } else {
                validatePropTypes(element);
            }
            return element;
        }
        function cloneElementWithValidation(element, props, children) {
            var newElement = cloneElement$1.apply(this, arguments);
            for(var i = 2; i < arguments.length; i++){
                validateChildKeys(arguments[i], newElement.type);
            }
            validatePropTypes(newElement);
            return newElement;
        }
        var ContextRegistry = ReactSharedInternals.ContextRegistry;
        function createServerContext(globalName, defaultValue) {
            var wasDefined = true;
            if (!ContextRegistry[globalName]) {
                wasDefined = false;
                var _context = {
                    $$typeof: REACT_SERVER_CONTEXT_TYPE,
                    _currentValue: defaultValue,
                    _currentValue2: defaultValue,
                    _defaultValue: defaultValue,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null,
                    _globalName: globalName
                };
                _context.Provider = {
                    $$typeof: REACT_PROVIDER_TYPE,
                    _context: _context
                };
                {
                    var hasWarnedAboutUsingConsumer;
                    _context._currentRenderer = null;
                    _context._currentRenderer2 = null;
                    Object.defineProperties(_context, {
                        Consumer: {
                            get: function() {
                                if (!hasWarnedAboutUsingConsumer) {
                                    error('Consumer pattern is not supported by ReactServerContext');
                                    hasWarnedAboutUsingConsumer = true;
                                }
                                return null;
                            }
                        }
                    });
                }
                ContextRegistry[globalName] = _context;
            }
            var context = ContextRegistry[globalName];
            if (context._defaultValue === REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED) {
                context._defaultValue = defaultValue;
                if (context._currentValue === REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED) {
                    context._currentValue = defaultValue;
                }
                if (context._currentValue2 === REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED) {
                    context._currentValue2 = defaultValue;
                }
            } else if (wasDefined) {
                throw new Error("ServerContext: " + globalName + " already defined");
            }
            return context;
        }
        function startTransition(scope, options) {
            var prevTransition = ReactCurrentBatchConfig.transition;
            ReactCurrentBatchConfig.transition = {};
            var currentTransition = ReactCurrentBatchConfig.transition;
            {
                ReactCurrentBatchConfig.transition._updatedFibers = new Set();
            }
            try {
                scope();
            } finally{
                ReactCurrentBatchConfig.transition = prevTransition;
                {
                    if (prevTransition === null && currentTransition._updatedFibers) {
                        var updatedFibersCount = currentTransition._updatedFibers.size;
                        currentTransition._updatedFibers.clear();
                        if (updatedFibersCount > 10) {
                            warn('Detected a large number of updates inside startTransition. ' + 'If this is due to a subscription please re-write it to use React provided hooks. ' + 'Otherwise concurrent mode guarantees are off the table.');
                        }
                    }
                }
            }
        }
        var createElement = createElementWithValidation;
        var cloneElement = cloneElementWithValidation;
        var Children = {
            map: mapChildren,
            forEach: forEachChildren,
            count: countChildren,
            toArray: toArray,
            only: onlyChild
        };
        exports.Children = Children;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.Profiler = REACT_PROFILER_TYPE;
        exports.StrictMode = REACT_STRICT_MODE_TYPE;
        exports.Suspense = REACT_SUSPENSE_TYPE;
        exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
        exports.cache = cache;
        exports.cloneElement = cloneElement;
        exports.createElement = createElement;
        exports.createRef = createRef;
        exports.createServerContext = createServerContext;
        exports.forwardRef = forwardRef;
        exports.isValidElement = isValidElement;
        exports.lazy = lazy;
        exports.memo = memo;
        exports.startTransition = startTransition;
        exports.use = use;
        exports.useCallback = useCallback;
        exports.useContext = useContext;
        exports.useDebugValue = useDebugValue;
        exports.useId = useId;
        exports.useMemo = useMemo;
        exports.version = ReactVersion;
    })();
}

}.call(this) }),
"[project]/node_modules/next/dist/compiled/react/react.shared-subset.js (ecmascript, rsc)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_require__("[project]/node_modules/next/dist/compiled/react/cjs/react.shared-subset.development.js (ecmascript, rsc)");
}

}.call(this) }),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js (ecmascript, rsc)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

'use strict';
if ("TURBOPACK compile-time truthy", 1) {
    (function() {
        'use strict';
        var React = __turbopack_require__("[project]/node_modules/next/dist/compiled/react/react.shared-subset.js (ecmascript, rsc)");
        var REACT_ELEMENT_TYPE = Symbol.for('react.element');
        var REACT_PORTAL_TYPE = Symbol.for('react.portal');
        var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
        var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
        var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
        var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
        var REACT_CONTEXT_TYPE = Symbol.for('react.context');
        var REACT_SERVER_CONTEXT_TYPE = Symbol.for('react.server_context');
        var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
        var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
        var REACT_MEMO_TYPE = Symbol.for('react.memo');
        var REACT_LAZY_TYPE = Symbol.for('react.lazy');
        var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
        var REACT_CACHE_TYPE = Symbol.for('react.cache');
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = '@@iterator';
        function getIteratorFn(maybeIterable) {
            if (maybeIterable === null || typeof maybeIterable !== 'object') {
                return null;
            }
            var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
            if (typeof maybeIterator === 'function') {
                return maybeIterator;
            }
            return null;
        }
        var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
            {
                {
                    for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++){
                        args[_key2 - 1] = arguments[_key2];
                    }
                    printWarning('error', format, args);
                }
            }
        }
        function printWarning(level, format, args) {
            {
                var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
                var stack = ReactDebugCurrentFrame.getStackAddendum();
                if (stack !== '') {
                    format += '%s';
                    args = args.concat([
                        stack
                    ]);
                }
                var argsWithFormat = args.map(function(item) {
                    return String(item);
                });
                argsWithFormat.unshift('Warning: ' + format);
                Function.prototype.apply.call(console[level], console, argsWithFormat);
            }
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_CLIENT_REFERENCE$1 = Symbol.for('react.client.reference');
        function isValidElementType(type) {
            if (typeof type === 'string' || typeof type === 'function') {
                return true;
            }
            if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
                return true;
            }
            if (typeof type === 'object' && type !== null) {
                if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE$1 || type.getModuleId !== undefined) {
                    return true;
                }
            }
            return false;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
            var displayName = outerType.displayName;
            if (displayName) {
                return displayName;
            }
            var functionName = innerType.displayName || innerType.name || '';
            return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
            return type.displayName || 'Context';
        }
        function getComponentNameFromType(type) {
            if (type == null) {
                return null;
            }
            {
                if (typeof type.tag === 'number') {
                    error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
                }
            }
            if (typeof type === 'function') {
                return type.displayName || type.name || null;
            }
            if (typeof type === 'string') {
                return type;
            }
            switch(type){
                case REACT_FRAGMENT_TYPE:
                    return 'Fragment';
                case REACT_PORTAL_TYPE:
                    return 'Portal';
                case REACT_PROFILER_TYPE:
                    return 'Profiler';
                case REACT_STRICT_MODE_TYPE:
                    return 'StrictMode';
                case REACT_SUSPENSE_TYPE:
                    return 'Suspense';
                case REACT_SUSPENSE_LIST_TYPE:
                    return 'SuspenseList';
                case REACT_CACHE_TYPE:
                    {
                        return 'Cache';
                    }
            }
            if (typeof type === 'object') {
                switch(type.$$typeof){
                    case REACT_CONTEXT_TYPE:
                        var context = type;
                        return getContextName(context) + '.Consumer';
                    case REACT_PROVIDER_TYPE:
                        var provider = type;
                        return getContextName(provider._context) + '.Provider';
                    case REACT_FORWARD_REF_TYPE:
                        return getWrappedName(type, type.render, 'ForwardRef');
                    case REACT_MEMO_TYPE:
                        var outerName = type.displayName || null;
                        if (outerName !== null) {
                            return outerName;
                        }
                        return getComponentNameFromType(type.type) || 'Memo';
                    case REACT_LAZY_TYPE:
                        {
                            var lazyComponent = type;
                            var payload = lazyComponent._payload;
                            var init = lazyComponent._init;
                            try {
                                return getComponentNameFromType(init(payload));
                            } catch (x) {
                                return null;
                            }
                        }
                    case REACT_SERVER_CONTEXT_TYPE:
                        {
                            var context2 = type;
                            return (context2.displayName || context2._globalName) + '.Provider';
                        }
                }
            }
            return null;
        }
        var assign = Object.assign;
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {}
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
            {
                if (disabledDepth === 0) {
                    prevLog = console.log;
                    prevInfo = console.info;
                    prevWarn = console.warn;
                    prevError = console.error;
                    prevGroup = console.group;
                    prevGroupCollapsed = console.groupCollapsed;
                    prevGroupEnd = console.groupEnd;
                    var props = {
                        configurable: true,
                        enumerable: true,
                        value: disabledLog,
                        writable: true
                    };
                    Object.defineProperties(console, {
                        info: props,
                        log: props,
                        warn: props,
                        error: props,
                        group: props,
                        groupCollapsed: props,
                        groupEnd: props
                    });
                }
                disabledDepth++;
            }
        }
        function reenableLogs() {
            {
                disabledDepth--;
                if (disabledDepth === 0) {
                    var props = {
                        configurable: true,
                        enumerable: true,
                        writable: true
                    };
                    Object.defineProperties(console, {
                        log: assign({}, props, {
                            value: prevLog
                        }),
                        info: assign({}, props, {
                            value: prevInfo
                        }),
                        warn: assign({}, props, {
                            value: prevWarn
                        }),
                        error: assign({}, props, {
                            value: prevError
                        }),
                        group: assign({}, props, {
                            value: prevGroup
                        }),
                        groupCollapsed: assign({}, props, {
                            value: prevGroupCollapsed
                        }),
                        groupEnd: assign({}, props, {
                            value: prevGroupEnd
                        })
                    });
                }
                if (disabledDepth < 0) {
                    error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
                }
            }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
            {
                if (prefix === undefined) {
                    try {
                        throw Error();
                    } catch (x) {
                        var match = x.stack.trim().match(/\n( *(at )?)/);
                        prefix = match && match[1] || '';
                    }
                }
                return '\n' + prefix + name;
            }
        }
        var reentry = false;
        var componentFrameCache;
        {
            var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
            componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
            if (!fn || reentry) {
                return '';
            }
            {
                var frame = componentFrameCache.get(fn);
                if (frame !== undefined) {
                    return frame;
                }
            }
            var control;
            reentry = true;
            var previousPrepareStackTrace = Error.prepareStackTrace;
            Error.prepareStackTrace = undefined;
            var previousDispatcher;
            {
                previousDispatcher = ReactCurrentDispatcher.current;
                ReactCurrentDispatcher.current = null;
                disableLogs();
            }
            try {
                if (construct) {
                    var Fake = function() {
                        throw Error();
                    };
                    Object.defineProperty(Fake.prototype, 'props', {
                        set: function() {
                            throw Error();
                        }
                    });
                    if (typeof Reflect === 'object' && Reflect.construct) {
                        try {
                            Reflect.construct(Fake, []);
                        } catch (x) {
                            control = x;
                        }
                        Reflect.construct(fn, [], Fake);
                    } else {
                        try {
                            Fake.call();
                        } catch (x) {
                            control = x;
                        }
                        fn.call(Fake.prototype);
                    }
                } else {
                    try {
                        throw Error();
                    } catch (x) {
                        control = x;
                    }
                    var maybePromise = fn();
                    if (maybePromise && typeof maybePromise.catch === 'function') {
                        maybePromise.catch(function() {});
                    }
                }
            } catch (sample) {
                if (sample && control && typeof sample.stack === 'string') {
                    var sampleLines = sample.stack.split('\n');
                    var controlLines = control.stack.split('\n');
                    var s = sampleLines.length - 1;
                    var c = controlLines.length - 1;
                    while(s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]){
                        c--;
                    }
                    for(; s >= 1 && c >= 0; s--, c--){
                        if (sampleLines[s] !== controlLines[c]) {
                            if (s !== 1 || c !== 1) {
                                do {
                                    s--;
                                    c--;
                                    if (c < 0 || sampleLines[s] !== controlLines[c]) {
                                        var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');
                                        if (fn.displayName && _frame.includes('<anonymous>')) {
                                            _frame = _frame.replace('<anonymous>', fn.displayName);
                                        }
                                        {
                                            if (typeof fn === 'function') {
                                                componentFrameCache.set(fn, _frame);
                                            }
                                        }
                                        return _frame;
                                    }
                                }while (s >= 1 && c >= 0)
                            }
                            break;
                        }
                    }
                }
            } finally{
                reentry = false;
                {
                    ReactCurrentDispatcher.current = previousDispatcher;
                    reenableLogs();
                }
                Error.prepareStackTrace = previousPrepareStackTrace;
            }
            var name = fn ? fn.displayName || fn.name : '';
            var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
            {
                if (typeof fn === 'function') {
                    componentFrameCache.set(fn, syntheticFrame);
                }
            }
            return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
            {
                return describeNativeComponentFrame(fn, false);
            }
        }
        function shouldConstruct(Component) {
            var prototype = Component.prototype;
            return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
            if (type == null) {
                return '';
            }
            if (typeof type === 'function') {
                {
                    return describeNativeComponentFrame(type, shouldConstruct(type));
                }
            }
            if (typeof type === 'string') {
                return describeBuiltInComponentFrame(type);
            }
            switch(type){
                case REACT_SUSPENSE_TYPE:
                    return describeBuiltInComponentFrame('Suspense');
                case REACT_SUSPENSE_LIST_TYPE:
                    return describeBuiltInComponentFrame('SuspenseList');
            }
            if (typeof type === 'object') {
                switch(type.$$typeof){
                    case REACT_FORWARD_REF_TYPE:
                        return describeFunctionComponentFrame(type.render);
                    case REACT_MEMO_TYPE:
                        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
                    case REACT_LAZY_TYPE:
                        {
                            var lazyComponent = type;
                            var payload = lazyComponent._payload;
                            var init = lazyComponent._init;
                            try {
                                return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                            } catch (x) {}
                        }
                }
            }
            return '';
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement$1(element) {
            {
                if (element) {
                    var owner = element._owner;
                    var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                    ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
                } else {
                    ReactDebugCurrentFrame$1.setExtraStackFrame(null);
                }
            }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
            {
                var has = Function.call.bind(hasOwnProperty);
                for(var typeSpecName in typeSpecs){
                    if (has(typeSpecs, typeSpecName)) {
                        var error$1 = void 0;
                        try {
                            if (typeof typeSpecs[typeSpecName] !== 'function') {
                                var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                                err.name = 'Invariant Violation';
                                throw err;
                            }
                            error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
                        } catch (ex) {
                            error$1 = ex;
                        }
                        if (error$1 && !(error$1 instanceof Error)) {
                            setCurrentlyValidatingElement$1(element);
                            error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);
                            setCurrentlyValidatingElement$1(null);
                        }
                        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                            loggedTypeFailures[error$1.message] = true;
                            setCurrentlyValidatingElement$1(element);
                            error('Failed %s type: %s', location, error$1.message);
                            setCurrentlyValidatingElement$1(null);
                        }
                    }
                }
            }
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
            return isArrayImpl(a);
        }
        function typeName(value) {
            {
                var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
                var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
                return type;
            }
        }
        function willCoercionThrow(value) {
            {
                try {
                    testStringCoercion(value);
                    return false;
                } catch (e) {
                    return true;
                }
            }
        }
        function testStringCoercion(value) {
            return '' + value;
        }
        function checkKeyStringCoercion(value) {
            {
                if (willCoercionThrow(value)) {
                    error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));
                    return testStringCoercion(value);
                }
            }
        }
        var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
        var RESERVED_PROPS = {
            key: true,
            ref: true,
            __self: true,
            __source: true
        };
        var specialPropKeyWarningShown;
        var specialPropRefWarningShown;
        var didWarnAboutStringRefs;
        {
            didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
            {
                if (hasOwnProperty.call(config, 'ref')) {
                    var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
                    if (getter && getter.isReactWarning) {
                        return false;
                    }
                }
            }
            return config.ref !== undefined;
        }
        function hasValidKey(config) {
            {
                if (hasOwnProperty.call(config, 'key')) {
                    var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
                    if (getter && getter.isReactWarning) {
                        return false;
                    }
                }
            }
            return config.key !== undefined;
        }
        function warnIfStringRefCannotBeAutoConverted(config, self) {
            {
                if (typeof config.ref === 'string' && ReactCurrentOwner$1.current && self && ReactCurrentOwner$1.current.stateNode !== self) {
                    var componentName = getComponentNameFromType(ReactCurrentOwner$1.current.type);
                    if (!didWarnAboutStringRefs[componentName]) {
                        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner$1.current.type), config.ref);
                        didWarnAboutStringRefs[componentName] = true;
                    }
                }
            }
        }
        function defineKeyPropWarningGetter(props, displayName) {
            {
                var warnAboutAccessingKey = function() {
                    if (!specialPropKeyWarningShown) {
                        specialPropKeyWarningShown = true;
                        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
                    }
                };
                warnAboutAccessingKey.isReactWarning = true;
                Object.defineProperty(props, 'key', {
                    get: warnAboutAccessingKey,
                    configurable: true
                });
            }
        }
        function defineRefPropWarningGetter(props, displayName) {
            {
                var warnAboutAccessingRef = function() {
                    if (!specialPropRefWarningShown) {
                        specialPropRefWarningShown = true;
                        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
                    }
                };
                warnAboutAccessingRef.isReactWarning = true;
                Object.defineProperty(props, 'ref', {
                    get: warnAboutAccessingRef,
                    configurable: true
                });
            }
        }
        function ReactElement(type, key, ref, self, source, owner, props) {
            var element = {
                $$typeof: REACT_ELEMENT_TYPE,
                type: type,
                key: key,
                ref: ref,
                props: props,
                _owner: owner
            };
            {
                element._store = {};
                Object.defineProperty(element._store, 'validated', {
                    configurable: false,
                    enumerable: false,
                    writable: true,
                    value: false
                });
                Object.defineProperty(element, '_self', {
                    configurable: false,
                    enumerable: false,
                    writable: false,
                    value: self
                });
                Object.defineProperty(element, '_source', {
                    configurable: false,
                    enumerable: false,
                    writable: false,
                    value: source
                });
                if (Object.freeze) {
                    Object.freeze(element.props);
                    Object.freeze(element);
                }
            }
            return element;
        }
        function jsxDEV$1(type, config, maybeKey, source, self) {
            {
                var propName;
                var props = {};
                var key = null;
                var ref = null;
                if (maybeKey !== undefined) {
                    {
                        checkKeyStringCoercion(maybeKey);
                    }
                    key = '' + maybeKey;
                }
                if (hasValidKey(config)) {
                    {
                        checkKeyStringCoercion(config.key);
                    }
                    key = '' + config.key;
                }
                if (hasValidRef(config)) {
                    ref = config.ref;
                    warnIfStringRefCannotBeAutoConverted(config, self);
                }
                for(propName in config){
                    if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                        props[propName] = config[propName];
                    }
                }
                if (type && type.defaultProps) {
                    var defaultProps = type.defaultProps;
                    for(propName in defaultProps){
                        if (props[propName] === undefined) {
                            props[propName] = defaultProps[propName];
                        }
                    }
                }
                if (key || ref) {
                    var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
                    if (key) {
                        defineKeyPropWarningGetter(props, displayName);
                    }
                    if (ref) {
                        defineRefPropWarningGetter(props, displayName);
                    }
                }
                return ReactElement(type, key, ref, self, source, ReactCurrentOwner$1.current, props);
            }
        }
        var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        var REACT_CLIENT_REFERENCE = Symbol.for('react.client.reference');
        function setCurrentlyValidatingElement(element) {
            {
                if (element) {
                    var owner = element._owner;
                    var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                    ReactDebugCurrentFrame.setExtraStackFrame(stack);
                } else {
                    ReactDebugCurrentFrame.setExtraStackFrame(null);
                }
            }
        }
        var propTypesMisspellWarningShown;
        {
            propTypesMisspellWarningShown = false;
        }
        function isValidElement(object) {
            {
                return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
            }
        }
        function getDeclarationErrorAddendum() {
            {
                if (ReactCurrentOwner.current) {
                    var name = getComponentNameFromType(ReactCurrentOwner.current.type);
                    if (name) {
                        return '\n\nCheck the render method of `' + name + '`.';
                    }
                }
                return '';
            }
        }
        function getSourceInfoErrorAddendum(source) {
            {
                if (source !== undefined) {
                    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
                    var lineNumber = source.lineNumber;
                    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
                }
                return '';
            }
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
            {
                var info = getDeclarationErrorAddendum();
                if (!info) {
                    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
                    if (parentName) {
                        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
                    }
                }
                return info;
            }
        }
        function validateExplicitKey(element, parentType) {
            {
                if (!element._store || element._store.validated || element.key != null) {
                    return;
                }
                element._store.validated = true;
                var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
                if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
                    return;
                }
                ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
                var childOwner = '';
                if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
                    childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
                }
                setCurrentlyValidatingElement(element);
                error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
                setCurrentlyValidatingElement(null);
            }
        }
        function validateChildKeys(node, parentType) {
            {
                if (typeof node !== 'object' || !node) {
                    return;
                }
                if (node.$$typeof === REACT_CLIENT_REFERENCE) ;
                else if (isArray(node)) {
                    for(var i = 0; i < node.length; i++){
                        var child = node[i];
                        if (isValidElement(child)) {
                            validateExplicitKey(child, parentType);
                        }
                    }
                } else if (isValidElement(node)) {
                    if (node._store) {
                        node._store.validated = true;
                    }
                } else {
                    var iteratorFn = getIteratorFn(node);
                    if (typeof iteratorFn === 'function') {
                        if (iteratorFn !== node.entries) {
                            var iterator = iteratorFn.call(node);
                            var step;
                            while(!(step = iterator.next()).done){
                                if (isValidElement(step.value)) {
                                    validateExplicitKey(step.value, parentType);
                                }
                            }
                        }
                    }
                }
            }
        }
        function validatePropTypes(element) {
            {
                var type = element.type;
                if (type === null || type === undefined || typeof type === 'string') {
                    return;
                }
                if (type.$$typeof === REACT_CLIENT_REFERENCE) {
                    return;
                }
                var propTypes;
                if (typeof type === 'function') {
                    propTypes = type.propTypes;
                } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MEMO_TYPE)) {
                    propTypes = type.propTypes;
                } else {
                    return;
                }
                if (propTypes) {
                    var name = getComponentNameFromType(type);
                    checkPropTypes(propTypes, element.props, 'prop', name, element);
                } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
                    propTypesMisspellWarningShown = true;
                    var _name = getComponentNameFromType(type);
                    error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
                }
                if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
                    error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
                }
            }
        }
        function validateFragmentProps(fragment) {
            {
                var keys = Object.keys(fragment.props);
                for(var i = 0; i < keys.length; i++){
                    var key = keys[i];
                    if (key !== 'children' && key !== 'key') {
                        setCurrentlyValidatingElement(fragment);
                        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
                        setCurrentlyValidatingElement(null);
                        break;
                    }
                }
                if (fragment.ref !== null) {
                    setCurrentlyValidatingElement(fragment);
                    error('Invalid attribute `ref` supplied to `React.Fragment`.');
                    setCurrentlyValidatingElement(null);
                }
            }
        }
        var didWarnAboutKeySpread = {};
        function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
            {
                var validType = isValidElementType(type);
                if (!validType) {
                    var info = '';
                    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
                        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
                    }
                    var sourceInfo = getSourceInfoErrorAddendum(source);
                    if (sourceInfo) {
                        info += sourceInfo;
                    } else {
                        info += getDeclarationErrorAddendum();
                    }
                    var typeString;
                    if (type === null) {
                        typeString = 'null';
                    } else if (isArray(type)) {
                        typeString = 'array';
                    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
                        typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
                        info = ' Did you accidentally export a JSX literal instead of a component?';
                    } else {
                        typeString = typeof type;
                    }
                    error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
                }
                var element = jsxDEV$1(type, props, key, source, self);
                if (element == null) {
                    return element;
                }
                if (validType) {
                    var children = props.children;
                    if (children !== undefined) {
                        if (isStaticChildren) {
                            if (isArray(children)) {
                                for(var i = 0; i < children.length; i++){
                                    validateChildKeys(children[i], type);
                                }
                                if (Object.freeze) {
                                    Object.freeze(children);
                                }
                            } else {
                                error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
                            }
                        } else {
                            validateChildKeys(children, type);
                        }
                    }
                }
                if (hasOwnProperty.call(props, 'key')) {
                    var componentName = getComponentNameFromType(type);
                    var keys = Object.keys(props).filter(function(k) {
                        return k !== 'key';
                    });
                    var beforeExample = keys.length > 0 ? '{key: someKey, ' + keys.join(': ..., ') + ': ...}' : '{key: someKey}';
                    if (!didWarnAboutKeySpread[componentName + beforeExample]) {
                        var afterExample = keys.length > 0 ? '{' + keys.join(': ..., ') + ': ...}' : '{}';
                        error('A props object containing a "key" prop is being spread into JSX:\n' + '  let props = %s;\n' + '  <%s {...props} />\n' + 'React keys must be passed directly to JSX without using spread:\n' + '  let props = %s;\n' + '  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);
                        didWarnAboutKeySpread[componentName + beforeExample] = true;
                    }
                }
                if (type === REACT_FRAGMENT_TYPE) {
                    validateFragmentProps(element);
                } else {
                    validatePropTypes(element);
                }
                return element;
            }
        }
        var jsxDEV = jsxWithValidation;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.jsxDEV = jsxDEV;
    })();
}

}.call(this) }),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, rsc)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_require__("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js (ecmascript, rsc)");
}

}.call(this) }),
"[project]/node_modules/next/dist/compiled/react-dom/cjs/react-dom-server-rendering-stub.development.js (ecmascript, rsc)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use strict';
if ("TURBOPACK compile-time truthy", 1) {
    (function() {
        'use strict';
        var ReactVersion = '18.3.0-canary-9377e1010-20230712';
        var Internals = {
            usingClientEntryPoint: false,
            Events: null,
            Dispatcher: {
                current: null
            }
        };
        var Dispatcher = Internals.Dispatcher;
        function prefetchDNS(href) {
            var passedOptionArg;
            {
                if (arguments[1] !== undefined) {
                    passedOptionArg = arguments[1];
                }
            }
            var dispatcher = Dispatcher.current;
            if (dispatcher) {
                {
                    if (passedOptionArg !== undefined) {
                        dispatcher.prefetchDNS(href, passedOptionArg);
                    } else {
                        dispatcher.prefetchDNS(href);
                    }
                }
            }
        }
        function preconnect(href, options) {
            var dispatcher = Dispatcher.current;
            if (dispatcher) {
                dispatcher.preconnect(href, options);
            }
        }
        function preload(href, options) {
            var dispatcher = Dispatcher.current;
            if (dispatcher) {
                dispatcher.preload(href, options);
            }
        }
        function preinit(href, options) {
            var dispatcher = Dispatcher.current;
            if (dispatcher) {
                dispatcher.preinit(href, options);
            }
        }
        function useFormStatus() {
            {
                throw new Error('Not implemented.');
            }
        }
        function createPortal() {
            throw new Error('createPortal was called on the server. Portals are not currently' + ' supported on the server. Update your program to conditionally call' + ' createPortal on the client only.');
        }
        function flushSync() {
            throw new Error('flushSync was called on the server. This is likely caused by a' + ' function being called during render or in module scope that was' + ' intended to be called from an effect or event handler. Update your' + ' to not call flushSync no the server.');
        }
        function batchedUpdates(fn, a) {
            return fn(a);
        }
        exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Internals;
        exports.createPortal = createPortal;
        exports.experimental_useFormStatus = useFormStatus;
        exports.flushSync = flushSync;
        exports.preconnect = preconnect;
        exports.prefetchDNS = prefetchDNS;
        exports.preinit = preinit;
        exports.preload = preload;
        exports.unstable_batchedUpdates = batchedUpdates;
        exports.version = ReactVersion;
    })();
}

}.call(this) }),
"[project]/node_modules/next/dist/compiled/react-dom/server-rendering-stub.js (ecmascript, rsc)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_require__("[project]/node_modules/next/dist/compiled/react-dom/cjs/react-dom-server-rendering-stub.development.js (ecmascript, rsc)");
}

}.call(this) }),
"[project]/node_modules/next/dist/compiled/react-server-dom-webpack/cjs/react-server-dom-webpack-server.edge.development.js (ecmascript, rsc)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use strict';
if ("TURBOPACK compile-time truthy", 1) {
    (function() {
        'use strict';
        var React = __turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, rsc)");
        var ReactDOM = __turbopack_require__("[project]/node_modules/next/dist/compiled/react-dom/server-rendering-stub.js (ecmascript, rsc)");
        var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
            {
                {
                    for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++){
                        args[_key2 - 1] = arguments[_key2];
                    }
                    printWarning('error', format, args);
                }
            }
        }
        function printWarning(level, format, args) {
            {
                var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
                var stack = ReactDebugCurrentFrame.getStackAddendum();
                if (stack !== '') {
                    format += '%s';
                    args = args.concat([
                        stack
                    ]);
                }
                var argsWithFormat = args.map(function(item) {
                    return String(item);
                });
                argsWithFormat.unshift('Warning: ' + format);
                Function.prototype.apply.call(console[level], console, argsWithFormat);
            }
        }
        function scheduleWork(callback) {
            setTimeout(callback, 0);
        }
        var VIEW_SIZE = 512;
        var currentView = null;
        var writtenBytes = 0;
        function beginWriting(destination) {
            currentView = new Uint8Array(VIEW_SIZE);
            writtenBytes = 0;
        }
        function writeChunk(destination, chunk) {
            if (chunk.byteLength === 0) {
                return;
            }
            if (chunk.byteLength > VIEW_SIZE) {
                {
                    if (precomputedChunkSet.has(chunk)) {
                        error('A large precomputed chunk was passed to writeChunk without being copied.' + ' Large chunks get enqueued directly and are not copied. This is incompatible with precomputed chunks because you cannot enqueue the same precomputed chunk twice.' + ' Use "cloneChunk" to make a copy of this large precomputed chunk before writing it. This is a bug in React.');
                    }
                }
                if (writtenBytes > 0) {
                    destination.enqueue(new Uint8Array(currentView.buffer, 0, writtenBytes));
                    currentView = new Uint8Array(VIEW_SIZE);
                    writtenBytes = 0;
                }
                destination.enqueue(chunk);
                return;
            }
            var bytesToWrite = chunk;
            var allowableBytes = currentView.length - writtenBytes;
            if (allowableBytes < bytesToWrite.byteLength) {
                if (allowableBytes === 0) {
                    destination.enqueue(currentView);
                } else {
                    currentView.set(bytesToWrite.subarray(0, allowableBytes), writtenBytes);
                    destination.enqueue(currentView);
                    bytesToWrite = bytesToWrite.subarray(allowableBytes);
                }
                currentView = new Uint8Array(VIEW_SIZE);
                writtenBytes = 0;
            }
            currentView.set(bytesToWrite, writtenBytes);
            writtenBytes += bytesToWrite.byteLength;
        }
        function writeChunkAndReturn(destination, chunk) {
            writeChunk(destination, chunk);
            return true;
        }
        function completeWriting(destination) {
            if (currentView && writtenBytes > 0) {
                destination.enqueue(new Uint8Array(currentView.buffer, 0, writtenBytes));
                currentView = null;
                writtenBytes = 0;
            }
        }
        function close$1(destination) {
            destination.close();
        }
        var textEncoder = new TextEncoder();
        function stringToChunk(content) {
            return textEncoder.encode(content);
        }
        var precomputedChunkSet = new Set();
        function byteLengthOfChunk(chunk) {
            return chunk.byteLength;
        }
        function closeWithError(destination, error) {
            if (typeof destination.error === 'function') {
                destination.error(error);
            } else {
                destination.close();
            }
        }
        var CLIENT_REFERENCE_TAG = Symbol.for('react.client.reference');
        var SERVER_REFERENCE_TAG = Symbol.for('react.server.reference');
        function isClientReference(reference) {
            return reference.$$typeof === CLIENT_REFERENCE_TAG;
        }
        function isServerReference(reference) {
            return reference.$$typeof === SERVER_REFERENCE_TAG;
        }
        function registerClientReference(proxyImplementation, id, exportName) {
            return registerClientReferenceImpl(proxyImplementation, id + '#' + exportName, false);
        }
        function registerClientReferenceImpl(proxyImplementation, id, async) {
            return Object.defineProperties(proxyImplementation, {
                $$typeof: {
                    value: CLIENT_REFERENCE_TAG
                },
                $$id: {
                    value: id
                },
                $$async: {
                    value: async
                }
            });
        }
        var FunctionBind = Function.prototype.bind;
        var ArraySlice = Array.prototype.slice;
        function bind() {
            var newFn = FunctionBind.apply(this, arguments);
            if (this.$$typeof === SERVER_REFERENCE_TAG) {
                var args = ArraySlice.call(arguments, 1);
                newFn.$$typeof = SERVER_REFERENCE_TAG;
                newFn.$$id = this.$$id;
                newFn.$$bound = this.$$bound ? this.$$bound.concat(args) : args;
            }
            return newFn;
        }
        function registerServerReference(reference, id, exportName) {
            return Object.defineProperties(reference, {
                $$typeof: {
                    value: SERVER_REFERENCE_TAG
                },
                $$id: {
                    value: exportName === null ? id : id + '#' + exportName
                },
                $$bound: {
                    value: null
                },
                bind: {
                    value: bind
                }
            });
        }
        var PROMISE_PROTOTYPE = Promise.prototype;
        var deepProxyHandlers = {
            get: function(target, name, receiver) {
                switch(name){
                    case '$$typeof':
                        return target.$$typeof;
                    case '$$id':
                        return target.$$id;
                    case '$$async':
                        return target.$$async;
                    case 'name':
                        return target.name;
                    case 'displayName':
                        return undefined;
                    case 'defaultProps':
                        return undefined;
                    case 'toJSON':
                        return undefined;
                    case Symbol.toPrimitive:
                        return Object.prototype[Symbol.toPrimitive];
                    case 'Provider':
                        throw new Error("Cannot render a Client Context Provider on the Server. " + "Instead, you can export a Client Component wrapper " + "that itself renders a Client Context Provider.");
                }
                var expression = String(target.name) + '.' + String(name);
                throw new Error("Cannot access " + expression + " on the server. " + 'You cannot dot into a client module from a server component. ' + 'You can only pass the imported name through.');
            },
            set: function() {
                throw new Error('Cannot assign to a client module from a server module.');
            }
        };
        var proxyHandlers = {
            get: function(target, name, receiver) {
                switch(name){
                    case '$$typeof':
                        return target.$$typeof;
                    case '$$id':
                        return target.$$id;
                    case '$$async':
                        return target.$$async;
                    case 'name':
                        return target.name;
                    case 'defaultProps':
                        return undefined;
                    case 'toJSON':
                        return undefined;
                    case Symbol.toPrimitive:
                        return Object.prototype[Symbol.toPrimitive];
                    case '__esModule':
                        var moduleId = target.$$id;
                        target.default = registerClientReferenceImpl(function() {
                            throw new Error("Attempted to call the default export of " + moduleId + " from the server " + "but it's on the client. It's not possible to invoke a client function from " + "the server, it can only be rendered as a Component or passed to props of a " + "Client Component.");
                        }, target.$$id + '#', target.$$async);
                        return true;
                    case 'then':
                        if (target.then) {
                            return target.then;
                        }
                        if (!target.$$async) {
                            var clientReference = registerClientReferenceImpl({}, target.$$id, true);
                            var proxy = new Proxy(clientReference, proxyHandlers);
                            target.status = 'fulfilled';
                            target.value = proxy;
                            var then = target.then = registerClientReferenceImpl(function then(resolve, reject) {
                                return Promise.resolve(resolve(proxy));
                            }, target.$$id + '#then', false);
                            return then;
                        } else {
                            return undefined;
                        }
                }
                var cachedReference = target[name];
                if (!cachedReference) {
                    var reference = registerClientReferenceImpl(function() {
                        throw new Error("Attempted to call " + String(name) + "() from the server but " + String(name) + " is on the client. " + "It's not possible to invoke a client function from the server, it can " + "only be rendered as a Component or passed to props of a Client Component.");
                    }, target.$$id + '#' + name, target.$$async);
                    Object.defineProperty(reference, 'name', {
                        value: name
                    });
                    cachedReference = target[name] = new Proxy(reference, deepProxyHandlers);
                }
                return cachedReference;
            },
            getPrototypeOf: function(target) {
                return PROMISE_PROTOTYPE;
            },
            set: function() {
                throw new Error('Cannot assign to a client module from a server module.');
            }
        };
        function createClientModuleProxy(moduleId) {
            var clientReference = registerClientReferenceImpl({}, moduleId, false);
            return new Proxy(clientReference, proxyHandlers);
        }
        function getClientReferenceKey(reference) {
            return reference.$$async ? reference.$$id + '#async' : reference.$$id;
        }
        function resolveClientReferenceMetadata(config, clientReference) {
            var modulePath = clientReference.$$id;
            var name = '';
            var resolvedModuleData = config[modulePath];
            if (resolvedModuleData) {
                name = resolvedModuleData.name;
            } else {
                var idx = modulePath.lastIndexOf('#');
                if (idx !== -1) {
                    name = modulePath.slice(idx + 1);
                    resolvedModuleData = config[modulePath.slice(0, idx)];
                }
                if (!resolvedModuleData) {
                    throw new Error('Could not find the module "' + modulePath + '" in the React Client Manifest. ' + 'This is probably a bug in the React Server Components bundler.');
                }
            }
            return {
                id: resolvedModuleData.id,
                chunks: resolvedModuleData.chunks,
                name: name,
                async: !!clientReference.$$async
            };
        }
        function getServerReferenceId(config, serverReference) {
            return serverReference.$$id;
        }
        function getServerReferenceBoundArguments(config, serverReference) {
            return serverReference.$$bound;
        }
        var ReactDOMSharedInternals = ReactDOM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        var ReactDOMFlightServerDispatcher = {
            prefetchDNS: prefetchDNS,
            preconnect: preconnect,
            preload: preload,
            preinit: preinit
        };
        function prefetchDNS(href, options) {
            {
                if (typeof href === 'string') {
                    var request = resolveRequest();
                    if (request) {
                        var hints = getHints(request);
                        var key = 'D' + href;
                        if (hints.has(key)) {
                            return;
                        }
                        hints.add(key);
                        if (options) {
                            emitHint(request, 'D', [
                                href,
                                options
                            ]);
                        } else {
                            emitHint(request, 'D', href);
                        }
                    }
                }
            }
        }
        function preconnect(href, options) {
            {
                if (typeof href === 'string') {
                    var request = resolveRequest();
                    if (request) {
                        var hints = getHints(request);
                        var crossOrigin = options == null || typeof options.crossOrigin !== 'string' ? null : options.crossOrigin === 'use-credentials' ? 'use-credentials' : '';
                        var key = "C" + (crossOrigin === null ? 'null' : crossOrigin) + "|" + href;
                        if (hints.has(key)) {
                            return;
                        }
                        hints.add(key);
                        if (options) {
                            emitHint(request, 'C', [
                                href,
                                options
                            ]);
                        } else {
                            emitHint(request, 'C', href);
                        }
                    }
                }
            }
        }
        function preload(href, options) {
            {
                if (typeof href === 'string') {
                    var request = resolveRequest();
                    if (request) {
                        var hints = getHints(request);
                        var key = 'L' + href;
                        if (hints.has(key)) {
                            return;
                        }
                        hints.add(key);
                        emitHint(request, 'L', [
                            href,
                            options
                        ]);
                    }
                }
            }
        }
        function preinit(href, options) {
            {
                if (typeof href === 'string') {
                    var request = resolveRequest();
                    if (request) {
                        var hints = getHints(request);
                        var key = 'I' + href;
                        if (hints.has(key)) {
                            return;
                        }
                        hints.add(key);
                        emitHint(request, 'I', [
                            href,
                            options
                        ]);
                    }
                }
            }
        }
        var ReactDOMCurrentDispatcher = ReactDOMSharedInternals.Dispatcher;
        function prepareHostDispatcher() {
            ReactDOMCurrentDispatcher.current = ReactDOMFlightServerDispatcher;
        }
        function createHints() {
            return new Set();
        }
        var supportsRequestStorage = typeof AsyncLocalStorage === 'function';
        var requestStorage = supportsRequestStorage ? new AsyncLocalStorage() : null;
        var REACT_ELEMENT_TYPE = Symbol.for('react.element');
        var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
        var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
        var REACT_SERVER_CONTEXT_TYPE = Symbol.for('react.server_context');
        var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
        var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
        var REACT_MEMO_TYPE = Symbol.for('react.memo');
        var REACT_LAZY_TYPE = Symbol.for('react.lazy');
        var REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED = Symbol.for('react.default_value');
        var REACT_MEMO_CACHE_SENTINEL = Symbol.for('react.memo_cache_sentinel');
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = '@@iterator';
        function getIteratorFn(maybeIterable) {
            if (maybeIterable === null || typeof maybeIterable !== 'object') {
                return null;
            }
            var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
            if (typeof maybeIterator === 'function') {
                return maybeIterator;
            }
            return null;
        }
        var rendererSigil;
        {
            rendererSigil = {};
        }
        var rootContextSnapshot = null;
        var currentActiveSnapshot = null;
        function popNode(prev) {
            {
                prev.context._currentValue = prev.parentValue;
            }
        }
        function pushNode(next) {
            {
                next.context._currentValue = next.value;
            }
        }
        function popToNearestCommonAncestor(prev, next) {
            if (prev === next) ;
            else {
                popNode(prev);
                var parentPrev = prev.parent;
                var parentNext = next.parent;
                if (parentPrev === null) {
                    if (parentNext !== null) {
                        throw new Error('The stacks must reach the root at the same time. This is a bug in React.');
                    }
                } else {
                    if (parentNext === null) {
                        throw new Error('The stacks must reach the root at the same time. This is a bug in React.');
                    }
                    popToNearestCommonAncestor(parentPrev, parentNext);
                    pushNode(next);
                }
            }
        }
        function popAllPrevious(prev) {
            popNode(prev);
            var parentPrev = prev.parent;
            if (parentPrev !== null) {
                popAllPrevious(parentPrev);
            }
        }
        function pushAllNext(next) {
            var parentNext = next.parent;
            if (parentNext !== null) {
                pushAllNext(parentNext);
            }
            pushNode(next);
        }
        function popPreviousToCommonLevel(prev, next) {
            popNode(prev);
            var parentPrev = prev.parent;
            if (parentPrev === null) {
                throw new Error('The depth must equal at least at zero before reaching the root. This is a bug in React.');
            }
            if (parentPrev.depth === next.depth) {
                popToNearestCommonAncestor(parentPrev, next);
            } else {
                popPreviousToCommonLevel(parentPrev, next);
            }
        }
        function popNextToCommonLevel(prev, next) {
            var parentNext = next.parent;
            if (parentNext === null) {
                throw new Error('The depth must equal at least at zero before reaching the root. This is a bug in React.');
            }
            if (prev.depth === parentNext.depth) {
                popToNearestCommonAncestor(prev, parentNext);
            } else {
                popNextToCommonLevel(prev, parentNext);
            }
            pushNode(next);
        }
        function switchContext(newSnapshot) {
            var prev = currentActiveSnapshot;
            var next = newSnapshot;
            if (prev !== next) {
                if (prev === null) {
                    pushAllNext(next);
                } else if (next === null) {
                    popAllPrevious(prev);
                } else if (prev.depth === next.depth) {
                    popToNearestCommonAncestor(prev, next);
                } else if (prev.depth > next.depth) {
                    popPreviousToCommonLevel(prev, next);
                } else {
                    popNextToCommonLevel(prev, next);
                }
                currentActiveSnapshot = next;
            }
        }
        function pushProvider(context, nextValue) {
            var prevValue;
            {
                prevValue = context._currentValue;
                context._currentValue = nextValue;
                {
                    if (context._currentRenderer !== undefined && context._currentRenderer !== null && context._currentRenderer !== rendererSigil) {
                        error('Detected multiple renderers concurrently rendering the ' + 'same context provider. This is currently unsupported.');
                    }
                    context._currentRenderer = rendererSigil;
                }
            }
            var prevNode = currentActiveSnapshot;
            var newNode = {
                parent: prevNode,
                depth: prevNode === null ? 0 : prevNode.depth + 1,
                context: context,
                parentValue: prevValue,
                value: nextValue
            };
            currentActiveSnapshot = newNode;
            return newNode;
        }
        function popProvider() {
            var prevSnapshot = currentActiveSnapshot;
            if (prevSnapshot === null) {
                throw new Error('Tried to pop a Context at the root of the app. This is a bug in React.');
            }
            {
                var value = prevSnapshot.parentValue;
                if (value === REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED) {
                    prevSnapshot.context._currentValue = prevSnapshot.context._defaultValue;
                } else {
                    prevSnapshot.context._currentValue = value;
                }
            }
            return currentActiveSnapshot = prevSnapshot.parent;
        }
        function getActiveContext() {
            return currentActiveSnapshot;
        }
        function readContext$1(context) {
            var value = context._currentValue;
            return value;
        }
        var SuspenseException = new Error("Suspense Exception: This is not a real error! It's an implementation " + 'detail of `use` to interrupt the current render. You must either ' + 'rethrow it immediately, or move the `use` call outside of the ' + '`try/catch` block. Capturing without rethrowing will lead to ' + 'unexpected behavior.\n\n' + 'To handle async errors, wrap your component in an error boundary, or ' + "call the promise's `.catch` method and pass the result to `use`");
        function createThenableState() {
            return [];
        }
        function noop() {}
        function trackUsedThenable(thenableState, thenable, index) {
            var previous = thenableState[index];
            if (previous === undefined) {
                thenableState.push(thenable);
            } else {
                if (previous !== thenable) {
                    thenable.then(noop, noop);
                    thenable = previous;
                }
            }
            switch(thenable.status){
                case 'fulfilled':
                    {
                        var fulfilledValue = thenable.value;
                        return fulfilledValue;
                    }
                case 'rejected':
                    {
                        var rejectedError = thenable.reason;
                        throw rejectedError;
                    }
                default:
                    {
                        if (typeof thenable.status === 'string') ;
                        else {
                            var pendingThenable = thenable;
                            pendingThenable.status = 'pending';
                            pendingThenable.then(function(fulfilledValue) {
                                if (thenable.status === 'pending') {
                                    var fulfilledThenable = thenable;
                                    fulfilledThenable.status = 'fulfilled';
                                    fulfilledThenable.value = fulfilledValue;
                                }
                            }, function(error) {
                                if (thenable.status === 'pending') {
                                    var rejectedThenable = thenable;
                                    rejectedThenable.status = 'rejected';
                                    rejectedThenable.reason = error;
                                }
                            });
                            switch(thenable.status){
                                case 'fulfilled':
                                    {
                                        var fulfilledThenable = thenable;
                                        return fulfilledThenable.value;
                                    }
                                case 'rejected':
                                    {
                                        var rejectedThenable = thenable;
                                        throw rejectedThenable.reason;
                                    }
                            }
                        }
                        suspendedThenable = thenable;
                        throw SuspenseException;
                    }
            }
        }
        var suspendedThenable = null;
        function getSuspendedThenable() {
            if (suspendedThenable === null) {
                throw new Error('Expected a suspended thenable. This is a bug in React. Please file ' + 'an issue.');
            }
            var thenable = suspendedThenable;
            suspendedThenable = null;
            return thenable;
        }
        var currentRequest$1 = null;
        var thenableIndexCounter = 0;
        var thenableState = null;
        function prepareToUseHooksForRequest(request) {
            currentRequest$1 = request;
        }
        function resetHooksForRequest() {
            currentRequest$1 = null;
        }
        function prepareToUseHooksForComponent(prevThenableState) {
            thenableIndexCounter = 0;
            thenableState = prevThenableState;
        }
        function getThenableStateAfterSuspending() {
            var state = thenableState;
            thenableState = null;
            return state;
        }
        function readContext(context) {
            {
                if (context.$$typeof !== REACT_SERVER_CONTEXT_TYPE) {
                    if (isClientReference(context)) {
                        error('Cannot read a Client Context from a Server Component.');
                    } else {
                        error('Only createServerContext is supported in Server Components.');
                    }
                }
                if (currentRequest$1 === null) {
                    error('Context can only be read while React is rendering. ' + 'In classes, you can read it in the render method or getDerivedStateFromProps. ' + 'In function components, you can read it directly in the function body, but not ' + 'inside Hooks like useReducer() or useMemo().');
                }
            }
            return readContext$1(context);
        }
        var HooksDispatcher = {
            useMemo: function(nextCreate) {
                return nextCreate();
            },
            useCallback: function(callback) {
                return callback;
            },
            useDebugValue: function() {},
            useDeferredValue: unsupportedHook,
            useTransition: unsupportedHook,
            readContext: readContext,
            useContext: readContext,
            useReducer: unsupportedHook,
            useRef: unsupportedHook,
            useState: unsupportedHook,
            useInsertionEffect: unsupportedHook,
            useLayoutEffect: unsupportedHook,
            useImperativeHandle: unsupportedHook,
            useEffect: unsupportedHook,
            useId: useId,
            useSyncExternalStore: unsupportedHook,
            useCacheRefresh: function() {
                return unsupportedRefresh;
            },
            useMemoCache: function(size) {
                var data = new Array(size);
                for(var i = 0; i < size; i++){
                    data[i] = REACT_MEMO_CACHE_SENTINEL;
                }
                return data;
            },
            use: use
        };
        function unsupportedHook() {
            throw new Error('This Hook is not supported in Server Components.');
        }
        function unsupportedRefresh() {
            throw new Error('Refreshing the cache is not supported in Server Components.');
        }
        function useId() {
            if (currentRequest$1 === null) {
                throw new Error('useId can only be used while React is rendering');
            }
            var id = currentRequest$1.identifierCount++;
            return ':' + currentRequest$1.identifierPrefix + 'S' + id.toString(32) + ':';
        }
        function use(usable) {
            if (usable !== null && typeof usable === 'object' || typeof usable === 'function') {
                if (typeof usable.then === 'function') {
                    var thenable = usable;
                    var index = thenableIndexCounter;
                    thenableIndexCounter += 1;
                    if (thenableState === null) {
                        thenableState = createThenableState();
                    }
                    return trackUsedThenable(thenableState, thenable, index);
                } else if (usable.$$typeof === REACT_SERVER_CONTEXT_TYPE) {
                    var context = usable;
                    return readContext(context);
                }
            }
            {
                if (isClientReference(usable)) {
                    error('Cannot use() an already resolved Client Reference.');
                }
            }
            throw new Error('An unsupported type was passed to use(): ' + String(usable));
        }
        function createSignal() {
            return new AbortController().signal;
        }
        function resolveCache() {
            var request = resolveRequest();
            if (request) {
                return getCache(request);
            }
            return new Map();
        }
        var DefaultCacheDispatcher = {
            getCacheSignal: function() {
                var cache = resolveCache();
                var entry = cache.get(createSignal);
                if (entry === undefined) {
                    entry = createSignal();
                    cache.set(createSignal, entry);
                }
                return entry;
            },
            getCacheForType: function(resourceType) {
                var cache = resolveCache();
                var entry = cache.get(resourceType);
                if (entry === undefined) {
                    entry = resourceType();
                    cache.set(resourceType, entry);
                }
                return entry;
            }
        };
        var isArrayImpl = Array.isArray;
        function isArray(a) {
            return isArrayImpl(a);
        }
        var jsxPropsParents = new WeakMap();
        var jsxChildrenParents = new WeakMap();
        function isObjectPrototype(object) {
            if (!object) {
                return false;
            }
            var ObjectPrototype = Object.prototype;
            if (object === ObjectPrototype) {
                return true;
            }
            if (Object.getPrototypeOf(object)) {
                return false;
            }
            var names = Object.getOwnPropertyNames(object);
            for(var i = 0; i < names.length; i++){
                if (!(names[i] in ObjectPrototype)) {
                    return false;
                }
            }
            return true;
        }
        function isSimpleObject(object) {
            if (!isObjectPrototype(Object.getPrototypeOf(object))) {
                return false;
            }
            var names = Object.getOwnPropertyNames(object);
            for(var i = 0; i < names.length; i++){
                var descriptor = Object.getOwnPropertyDescriptor(object, names[i]);
                if (!descriptor) {
                    return false;
                }
                if (!descriptor.enumerable) {
                    if ((names[i] === 'key' || names[i] === 'ref') && typeof descriptor.get === 'function') {
                        continue;
                    }
                    return false;
                }
            }
            return true;
        }
        function objectName(object) {
            var name = Object.prototype.toString.call(object);
            return name.replace(/^\[object (.*)\]$/, function(m, p0) {
                return p0;
            });
        }
        function describeKeyForErrorMessage(key) {
            var encodedKey = JSON.stringify(key);
            return '"' + key + '"' === encodedKey ? key : encodedKey;
        }
        function describeValueForErrorMessage(value) {
            switch(typeof value){
                case 'string':
                    {
                        return JSON.stringify(value.length <= 10 ? value : value.slice(0, 10) + '...');
                    }
                case 'object':
                    {
                        if (isArray(value)) {
                            return '[...]';
                        }
                        var name = objectName(value);
                        if (name === 'Object') {
                            return '{...}';
                        }
                        return name;
                    }
                case 'function':
                    return 'function';
                default:
                    return String(value);
            }
        }
        function describeElementType(type) {
            if (typeof type === 'string') {
                return type;
            }
            switch(type){
                case REACT_SUSPENSE_TYPE:
                    return 'Suspense';
                case REACT_SUSPENSE_LIST_TYPE:
                    return 'SuspenseList';
            }
            if (typeof type === 'object') {
                switch(type.$$typeof){
                    case REACT_FORWARD_REF_TYPE:
                        return describeElementType(type.render);
                    case REACT_MEMO_TYPE:
                        return describeElementType(type.type);
                    case REACT_LAZY_TYPE:
                        {
                            var lazyComponent = type;
                            var payload = lazyComponent._payload;
                            var init = lazyComponent._init;
                            try {
                                return describeElementType(init(payload));
                            } catch (x) {}
                        }
                }
            }
            return '';
        }
        function describeObjectForErrorMessage(objectOrArray, expandedName) {
            var objKind = objectName(objectOrArray);
            if (objKind !== 'Object' && objKind !== 'Array') {
                return objKind;
            }
            var str = '';
            var start = -1;
            var length = 0;
            if (isArray(objectOrArray)) {
                if (jsxChildrenParents.has(objectOrArray)) {
                    var type = jsxChildrenParents.get(objectOrArray);
                    str = '<' + describeElementType(type) + '>';
                    var array = objectOrArray;
                    for(var i = 0; i < array.length; i++){
                        var value = array[i];
                        var substr = void 0;
                        if (typeof value === 'string') {
                            substr = value;
                        } else if (typeof value === 'object' && value !== null) {
                            substr = '{' + describeObjectForErrorMessage(value) + '}';
                        } else {
                            substr = '{' + describeValueForErrorMessage(value) + '}';
                        }
                        if ('' + i === expandedName) {
                            start = str.length;
                            length = substr.length;
                            str += substr;
                        } else if (substr.length < 15 && str.length + substr.length < 40) {
                            str += substr;
                        } else {
                            str += '{...}';
                        }
                    }
                    str += '</' + describeElementType(type) + '>';
                } else {
                    str = '[';
                    var _array = objectOrArray;
                    for(var _i = 0; _i < _array.length; _i++){
                        if (_i > 0) {
                            str += ', ';
                        }
                        var _value = _array[_i];
                        var _substr = void 0;
                        if (typeof _value === 'object' && _value !== null) {
                            _substr = describeObjectForErrorMessage(_value);
                        } else {
                            _substr = describeValueForErrorMessage(_value);
                        }
                        if ('' + _i === expandedName) {
                            start = str.length;
                            length = _substr.length;
                            str += _substr;
                        } else if (_substr.length < 10 && str.length + _substr.length < 40) {
                            str += _substr;
                        } else {
                            str += '...';
                        }
                    }
                    str += ']';
                }
            } else {
                if (objectOrArray.$$typeof === REACT_ELEMENT_TYPE) {
                    str = '<' + describeElementType(objectOrArray.type) + '/>';
                } else if (jsxPropsParents.has(objectOrArray)) {
                    var _type = jsxPropsParents.get(objectOrArray);
                    str = '<' + (describeElementType(_type) || '...');
                    var object = objectOrArray;
                    var names = Object.keys(object);
                    for(var _i2 = 0; _i2 < names.length; _i2++){
                        str += ' ';
                        var name = names[_i2];
                        str += describeKeyForErrorMessage(name) + '=';
                        var _value2 = object[name];
                        var _substr2 = void 0;
                        if (name === expandedName && typeof _value2 === 'object' && _value2 !== null) {
                            _substr2 = describeObjectForErrorMessage(_value2);
                        } else {
                            _substr2 = describeValueForErrorMessage(_value2);
                        }
                        if (typeof _value2 !== 'string') {
                            _substr2 = '{' + _substr2 + '}';
                        }
                        if (name === expandedName) {
                            start = str.length;
                            length = _substr2.length;
                            str += _substr2;
                        } else if (_substr2.length < 10 && str.length + _substr2.length < 40) {
                            str += _substr2;
                        } else {
                            str += '...';
                        }
                    }
                    str += '>';
                } else {
                    str = '{';
                    var _object = objectOrArray;
                    var _names = Object.keys(_object);
                    for(var _i3 = 0; _i3 < _names.length; _i3++){
                        if (_i3 > 0) {
                            str += ', ';
                        }
                        var _name = _names[_i3];
                        str += describeKeyForErrorMessage(_name) + ': ';
                        var _value3 = _object[_name];
                        var _substr3 = void 0;
                        if (typeof _value3 === 'object' && _value3 !== null) {
                            _substr3 = describeObjectForErrorMessage(_value3);
                        } else {
                            _substr3 = describeValueForErrorMessage(_value3);
                        }
                        if (_name === expandedName) {
                            start = str.length;
                            length = _substr3.length;
                            str += _substr3;
                        } else if (_substr3.length < 10 && str.length + _substr3.length < 40) {
                            str += _substr3;
                        } else {
                            str += '...';
                        }
                    }
                    str += '}';
                }
            }
            if (expandedName === undefined) {
                return str;
            }
            if (start > -1 && length > 0) {
                var highlight = ' '.repeat(start) + '^'.repeat(length);
                return '\n  ' + str + '\n  ' + highlight;
            }
            return '\n  ' + str;
        }
        var ContextRegistry = ReactSharedInternals.ContextRegistry;
        function getOrCreateServerContext(globalName) {
            if (!ContextRegistry[globalName]) {
                ContextRegistry[globalName] = React.createServerContext(globalName, REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED);
            }
            return ContextRegistry[globalName];
        }
        var stringify = JSON.stringify;
        var PENDING$1 = 0;
        var COMPLETED = 1;
        var ABORTED = 3;
        var ERRORED$1 = 4;
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var ReactCurrentCache = ReactSharedInternals.ReactCurrentCache;
        function defaultErrorHandler(error) {
            console['error'](error);
        }
        var OPEN = 0;
        var CLOSING = 1;
        var CLOSED = 2;
        function createRequest(model, bundlerConfig, onError, context, identifierPrefix) {
            if (ReactCurrentCache.current !== null && ReactCurrentCache.current !== DefaultCacheDispatcher) {
                throw new Error('Currently React only supports one RSC renderer at a time.');
            }
            prepareHostDispatcher();
            ReactCurrentCache.current = DefaultCacheDispatcher;
            var abortSet = new Set();
            var pingedTasks = [];
            var hints = createHints();
            var request = {
                status: OPEN,
                flushScheduled: false,
                fatalError: null,
                destination: null,
                bundlerConfig: bundlerConfig,
                cache: new Map(),
                nextChunkId: 0,
                pendingChunks: 0,
                hints: hints,
                abortableTasks: abortSet,
                pingedTasks: pingedTasks,
                completedImportChunks: [],
                completedHintChunks: [],
                completedRegularChunks: [],
                completedErrorChunks: [],
                writtenSymbols: new Map(),
                writtenClientReferences: new Map(),
                writtenServerReferences: new Map(),
                writtenProviders: new Map(),
                identifierPrefix: identifierPrefix || '',
                identifierCount: 1,
                onError: onError === undefined ? defaultErrorHandler : onError,
                toJSON: function(key, value) {
                    return resolveModelToJSON(request, this, key, value);
                }
            };
            request.pendingChunks++;
            var rootContext = createRootContext(context);
            var rootTask = createTask(request, model, rootContext, abortSet);
            pingedTasks.push(rootTask);
            return request;
        }
        var currentRequest = null;
        function resolveRequest() {
            if (currentRequest) return currentRequest;
            if (supportsRequestStorage) {
                var store = requestStorage.getStore();
                if (store) return store;
            }
            return null;
        }
        function createRootContext(reqContext) {
            return importServerContexts(reqContext);
        }
        var POP = {};
        function serializeThenable(request, thenable) {
            request.pendingChunks++;
            var newTask = createTask(request, null, getActiveContext(), request.abortableTasks);
            switch(thenable.status){
                case 'fulfilled':
                    {
                        newTask.model = thenable.value;
                        pingTask(request, newTask);
                        return newTask.id;
                    }
                case 'rejected':
                    {
                        var x = thenable.reason;
                        var digest = logRecoverableError(request, x);
                        {
                            var _getErrorMessageAndSt = getErrorMessageAndStackDev(x), message = _getErrorMessageAndSt.message, stack = _getErrorMessageAndSt.stack;
                            emitErrorChunkDev(request, newTask.id, digest, message, stack);
                        }
                        return newTask.id;
                    }
                default:
                    {
                        if (typeof thenable.status === 'string') {
                            break;
                        }
                        var pendingThenable = thenable;
                        pendingThenable.status = 'pending';
                        pendingThenable.then(function(fulfilledValue) {
                            if (thenable.status === 'pending') {
                                var fulfilledThenable = thenable;
                                fulfilledThenable.status = 'fulfilled';
                                fulfilledThenable.value = fulfilledValue;
                            }
                        }, function(error) {
                            if (thenable.status === 'pending') {
                                var rejectedThenable = thenable;
                                rejectedThenable.status = 'rejected';
                                rejectedThenable.reason = error;
                            }
                        });
                        break;
                    }
            }
            thenable.then(function(value) {
                newTask.model = value;
                pingTask(request, newTask);
            }, function(reason) {
                newTask.status = ERRORED$1;
                var digest = logRecoverableError(request, reason);
                {
                    var _getErrorMessageAndSt2 = getErrorMessageAndStackDev(reason), _message = _getErrorMessageAndSt2.message, _stack = _getErrorMessageAndSt2.stack;
                    emitErrorChunkDev(request, newTask.id, digest, _message, _stack);
                }
                if (request.destination !== null) {
                    flushCompletedChunks(request, request.destination);
                }
            });
            return newTask.id;
        }
        function emitHint(request, code, model) {
            emitHintChunk(request, code, model);
            enqueueFlush(request);
        }
        function getHints(request) {
            return request.hints;
        }
        function getCache(request) {
            return request.cache;
        }
        function readThenable(thenable) {
            if (thenable.status === 'fulfilled') {
                return thenable.value;
            } else if (thenable.status === 'rejected') {
                throw thenable.reason;
            }
            throw thenable;
        }
        function createLazyWrapperAroundWakeable(wakeable) {
            var thenable = wakeable;
            switch(thenable.status){
                case 'fulfilled':
                case 'rejected':
                    break;
                default:
                    {
                        if (typeof thenable.status === 'string') {
                            break;
                        }
                        var pendingThenable = thenable;
                        pendingThenable.status = 'pending';
                        pendingThenable.then(function(fulfilledValue) {
                            if (thenable.status === 'pending') {
                                var fulfilledThenable = thenable;
                                fulfilledThenable.status = 'fulfilled';
                                fulfilledThenable.value = fulfilledValue;
                            }
                        }, function(error) {
                            if (thenable.status === 'pending') {
                                var rejectedThenable = thenable;
                                rejectedThenable.status = 'rejected';
                                rejectedThenable.reason = error;
                            }
                        });
                        break;
                    }
            }
            var lazyType = {
                $$typeof: REACT_LAZY_TYPE,
                _payload: thenable,
                _init: readThenable
            };
            return lazyType;
        }
        function attemptResolveElement(request, type, key, ref, props, prevThenableState) {
            if (ref !== null && ref !== undefined) {
                throw new Error('Refs cannot be used in Server Components, nor passed to Client Components.');
            }
            {
                jsxPropsParents.set(props, type);
                if (typeof props.children === 'object' && props.children !== null) {
                    jsxChildrenParents.set(props.children, type);
                }
            }
            if (typeof type === 'function') {
                if (isClientReference(type)) {
                    return [
                        REACT_ELEMENT_TYPE,
                        type,
                        key,
                        props
                    ];
                }
                prepareToUseHooksForComponent(prevThenableState);
                var result = type(props);
                if (typeof result === 'object' && result !== null && typeof result.then === 'function') {
                    var thenable = result;
                    if (thenable.status === 'fulfilled') {
                        return thenable.value;
                    }
                    return createLazyWrapperAroundWakeable(result);
                }
                return result;
            } else if (typeof type === 'string') {
                return [
                    REACT_ELEMENT_TYPE,
                    type,
                    key,
                    props
                ];
            } else if (typeof type === 'symbol') {
                if (type === REACT_FRAGMENT_TYPE) {
                    return props.children;
                }
                return [
                    REACT_ELEMENT_TYPE,
                    type,
                    key,
                    props
                ];
            } else if (type != null && typeof type === 'object') {
                if (isClientReference(type)) {
                    return [
                        REACT_ELEMENT_TYPE,
                        type,
                        key,
                        props
                    ];
                }
                switch(type.$$typeof){
                    case REACT_LAZY_TYPE:
                        {
                            var payload = type._payload;
                            var init = type._init;
                            var wrappedType = init(payload);
                            return attemptResolveElement(request, wrappedType, key, ref, props, prevThenableState);
                        }
                    case REACT_FORWARD_REF_TYPE:
                        {
                            var render = type.render;
                            prepareToUseHooksForComponent(prevThenableState);
                            return render(props, undefined);
                        }
                    case REACT_MEMO_TYPE:
                        {
                            return attemptResolveElement(request, type.type, key, ref, props, prevThenableState);
                        }
                    case REACT_PROVIDER_TYPE:
                        {
                            pushProvider(type._context, props.value);
                            {
                                var extraKeys = Object.keys(props).filter(function(value) {
                                    if (value === 'children' || value === 'value') {
                                        return false;
                                    }
                                    return true;
                                });
                                if (extraKeys.length !== 0) {
                                    error('ServerContext can only have a value prop and children. Found: %s', JSON.stringify(extraKeys));
                                }
                            }
                            return [
                                REACT_ELEMENT_TYPE,
                                type,
                                key,
                                {
                                    value: props.value,
                                    children: props.children,
                                    __pop: POP
                                }
                            ];
                        }
                }
            }
            throw new Error("Unsupported Server Component type: " + describeValueForErrorMessage(type));
        }
        function pingTask(request, task) {
            var pingedTasks = request.pingedTasks;
            pingedTasks.push(task);
            if (pingedTasks.length === 1) {
                request.flushScheduled = request.destination !== null;
                scheduleWork(function() {
                    return performWork(request);
                });
            }
        }
        function createTask(request, model, context, abortSet) {
            var id = request.nextChunkId++;
            var task = {
                id: id,
                status: PENDING$1,
                model: model,
                context: context,
                ping: function() {
                    return pingTask(request, task);
                },
                thenableState: null
            };
            abortSet.add(task);
            return task;
        }
        function serializeByValueID(id) {
            return '$' + id.toString(16);
        }
        function serializeLazyID(id) {
            return '$L' + id.toString(16);
        }
        function serializePromiseID(id) {
            return '$@' + id.toString(16);
        }
        function serializeServerReferenceID(id) {
            return '$F' + id.toString(16);
        }
        function serializeSymbolReference(name) {
            return '$S' + name;
        }
        function serializeProviderReference(name) {
            return '$P' + name;
        }
        function serializeNumber(number) {
            if (Number.isFinite(number)) {
                if (number === 0 && 1 / number === -Infinity) {
                    return '$-0';
                } else {
                    return number;
                }
            } else {
                if (number === Infinity) {
                    return '$Infinity';
                } else if (number === -Infinity) {
                    return '$-Infinity';
                } else {
                    return '$NaN';
                }
            }
        }
        function serializeUndefined() {
            return '$undefined';
        }
        function serializeDateFromDateJSON(dateJSON) {
            return '$D' + dateJSON;
        }
        function serializeBigInt(n) {
            return '$n' + n.toString(10);
        }
        function serializeClientReference(request, parent, key, clientReference) {
            var clientReferenceKey = getClientReferenceKey(clientReference);
            var writtenClientReferences = request.writtenClientReferences;
            var existingId = writtenClientReferences.get(clientReferenceKey);
            if (existingId !== undefined) {
                if (parent[0] === REACT_ELEMENT_TYPE && key === '1') {
                    return serializeLazyID(existingId);
                }
                return serializeByValueID(existingId);
            }
            try {
                var clientReferenceMetadata = resolveClientReferenceMetadata(request.bundlerConfig, clientReference);
                request.pendingChunks++;
                var importId = request.nextChunkId++;
                emitImportChunk(request, importId, clientReferenceMetadata);
                writtenClientReferences.set(clientReferenceKey, importId);
                if (parent[0] === REACT_ELEMENT_TYPE && key === '1') {
                    return serializeLazyID(importId);
                }
                return serializeByValueID(importId);
            } catch (x) {
                request.pendingChunks++;
                var errorId = request.nextChunkId++;
                var digest = logRecoverableError(request, x);
                {
                    var _getErrorMessageAndSt3 = getErrorMessageAndStackDev(x), message = _getErrorMessageAndSt3.message, stack = _getErrorMessageAndSt3.stack;
                    emitErrorChunkDev(request, errorId, digest, message, stack);
                }
                return serializeByValueID(errorId);
            }
        }
        function outlineModel(request, value) {
            request.pendingChunks++;
            var outlinedId = request.nextChunkId++;
            var processedChunk = processModelChunk(request, outlinedId, value);
            request.completedRegularChunks.push(processedChunk);
            return outlinedId;
        }
        function serializeServerReference(request, parent, key, serverReference) {
            var writtenServerReferences = request.writtenServerReferences;
            var existingId = writtenServerReferences.get(serverReference);
            if (existingId !== undefined) {
                return serializeServerReferenceID(existingId);
            }
            var bound = getServerReferenceBoundArguments(request.bundlerConfig, serverReference);
            var serverReferenceMetadata = {
                id: getServerReferenceId(request.bundlerConfig, serverReference),
                bound: bound ? Promise.resolve(bound) : null
            };
            var metadataId = outlineModel(request, serverReferenceMetadata);
            writtenServerReferences.set(serverReference, metadataId);
            return serializeServerReferenceID(metadataId);
        }
        function serializeLargeTextString(request, text) {
            request.pendingChunks += 2;
            var textId = request.nextChunkId++;
            var textChunk = stringToChunk(text);
            var headerChunk = processTextHeader(request, textId, byteLengthOfChunk(textChunk));
            request.completedRegularChunks.push(headerChunk, textChunk);
            return serializeByValueID(textId);
        }
        function serializeMap(request, map) {
            var id = outlineModel(request, Array.from(map));
            return '$Q' + id.toString(16);
        }
        function serializeSet(request, set) {
            var id = outlineModel(request, Array.from(set));
            return '$W' + id.toString(16);
        }
        function escapeStringValue(value) {
            if (value[0] === '$') {
                return '$' + value;
            } else {
                return value;
            }
        }
        var insideContextProps = null;
        var isInsideContextValue = false;
        function resolveModelToJSON(request, parent, key, value) {
            {
                var originalValue = parent[key];
                if (typeof originalValue === 'object' && originalValue !== value && !(originalValue instanceof Date)) {
                    if (objectName(originalValue) !== 'Object') {
                        var jsxParentType = jsxChildrenParents.get(parent);
                        if (typeof jsxParentType === 'string') {
                            error('%s objects cannot be rendered as text children. Try formatting it using toString().%s', objectName(originalValue), describeObjectForErrorMessage(parent, key));
                        } else {
                            error('Only plain objects can be passed to Client Components from Server Components. ' + '%s objects are not supported.%s', objectName(originalValue), describeObjectForErrorMessage(parent, key));
                        }
                    } else {
                        error('Only plain objects can be passed to Client Components from Server Components. ' + 'Objects with toJSON methods are not supported. Convert it manually ' + 'to a simple value before passing it to props.%s', describeObjectForErrorMessage(parent, key));
                    }
                }
            }
            switch(value){
                case REACT_ELEMENT_TYPE:
                    return '$';
            }
            {
                if (parent[0] === REACT_ELEMENT_TYPE && parent[1] && parent[1].$$typeof === REACT_PROVIDER_TYPE && key === '3') {
                    insideContextProps = value;
                } else if (insideContextProps === parent && key === 'value') {
                    isInsideContextValue = true;
                } else if (insideContextProps === parent && key === 'children') {
                    isInsideContextValue = false;
                }
            }
            while(typeof value === 'object' && value !== null && (value.$$typeof === REACT_ELEMENT_TYPE || value.$$typeof === REACT_LAZY_TYPE)){
                {
                    if (isInsideContextValue) {
                        error('React elements are not allowed in ServerContext');
                    }
                }
                try {
                    switch(value.$$typeof){
                        case REACT_ELEMENT_TYPE:
                            {
                                var element = value;
                                value = attemptResolveElement(request, element.type, element.key, element.ref, element.props, null);
                                break;
                            }
                        case REACT_LAZY_TYPE:
                            {
                                var payload = value._payload;
                                var init = value._init;
                                value = init(payload);
                                break;
                            }
                    }
                } catch (thrownValue) {
                    var x = thrownValue === SuspenseException ? getSuspendedThenable() : thrownValue;
                    if (typeof x === 'object' && x !== null && typeof x.then === 'function') {
                        request.pendingChunks++;
                        var newTask = createTask(request, value, getActiveContext(), request.abortableTasks);
                        var ping = newTask.ping;
                        x.then(ping, ping);
                        newTask.thenableState = getThenableStateAfterSuspending();
                        return serializeLazyID(newTask.id);
                    } else {
                        request.pendingChunks++;
                        var errorId = request.nextChunkId++;
                        var digest = logRecoverableError(request, x);
                        {
                            var _getErrorMessageAndSt4 = getErrorMessageAndStackDev(x), message = _getErrorMessageAndSt4.message, stack = _getErrorMessageAndSt4.stack;
                            emitErrorChunkDev(request, errorId, digest, message, stack);
                        }
                        return serializeLazyID(errorId);
                    }
                }
            }
            if (value === null) {
                return null;
            }
            if (typeof value === 'object') {
                if (isClientReference(value)) {
                    return serializeClientReference(request, parent, key, value);
                } else if (typeof value.then === 'function') {
                    var promiseId = serializeThenable(request, value);
                    return serializePromiseID(promiseId);
                } else if (value.$$typeof === REACT_PROVIDER_TYPE) {
                    var providerKey = value._context._globalName;
                    var writtenProviders = request.writtenProviders;
                    var providerId = writtenProviders.get(key);
                    if (providerId === undefined) {
                        request.pendingChunks++;
                        providerId = request.nextChunkId++;
                        writtenProviders.set(providerKey, providerId);
                        emitProviderChunk(request, providerId, providerKey);
                    }
                    return serializeByValueID(providerId);
                } else if (value === POP) {
                    popProvider();
                    {
                        insideContextProps = null;
                        isInsideContextValue = false;
                    }
                    return undefined;
                }
                if (value instanceof Map) {
                    return serializeMap(request, value);
                }
                if (value instanceof Set) {
                    return serializeSet(request, value);
                }
                if (!isArray(value)) {
                    var iteratorFn = getIteratorFn(value);
                    if (iteratorFn) {
                        return Array.from(value);
                    }
                }
                {
                    if (value !== null && !isArray(value)) {
                        if (objectName(value) !== 'Object') {
                            error('Only plain objects can be passed to Client Components from Server Components. ' + '%s objects are not supported.%s', objectName(value), describeObjectForErrorMessage(parent, key));
                        } else if (!isSimpleObject(value)) {
                            error('Only plain objects can be passed to Client Components from Server Components. ' + 'Classes or other objects with methods are not supported.%s', describeObjectForErrorMessage(parent, key));
                        } else if (Object.getOwnPropertySymbols) {
                            var symbols = Object.getOwnPropertySymbols(value);
                            if (symbols.length > 0) {
                                error('Only plain objects can be passed to Client Components from Server Components. ' + 'Objects with symbol properties like %s are not supported.%s', symbols[0].description, describeObjectForErrorMessage(parent, key));
                            }
                        }
                    }
                }
                return value;
            }
            if (typeof value === 'string') {
                if (value[value.length - 1] === 'Z') {
                    var _originalValue = parent[key];
                    if (_originalValue instanceof Date) {
                        return serializeDateFromDateJSON(value);
                    }
                }
                if (value.length >= 1024) {
                    return serializeLargeTextString(request, value);
                }
                return escapeStringValue(value);
            }
            if (typeof value === 'boolean') {
                return value;
            }
            if (typeof value === 'number') {
                return serializeNumber(value);
            }
            if (typeof value === 'undefined') {
                return serializeUndefined();
            }
            if (typeof value === 'function') {
                if (isClientReference(value)) {
                    return serializeClientReference(request, parent, key, value);
                }
                if (isServerReference(value)) {
                    return serializeServerReference(request, parent, key, value);
                }
                if (/^on[A-Z]/.test(key)) {
                    throw new Error('Event handlers cannot be passed to Client Component props.' + describeObjectForErrorMessage(parent, key) + '\nIf you need interactivity, consider converting part of this to a Client Component.');
                } else {
                    throw new Error('Functions cannot be passed directly to Client Components ' + 'unless you explicitly expose it by marking it with "use server".' + describeObjectForErrorMessage(parent, key));
                }
            }
            if (typeof value === 'symbol') {
                var writtenSymbols = request.writtenSymbols;
                var existingId = writtenSymbols.get(value);
                if (existingId !== undefined) {
                    return serializeByValueID(existingId);
                }
                var name = value.description;
                if (Symbol.for(name) !== value) {
                    throw new Error('Only global symbols received from Symbol.for(...) can be passed to Client Components. ' + ("The symbol Symbol.for(" + value.description + ") cannot be found among global symbols.") + describeObjectForErrorMessage(parent, key));
                }
                request.pendingChunks++;
                var symbolId = request.nextChunkId++;
                emitSymbolChunk(request, symbolId, name);
                writtenSymbols.set(value, symbolId);
                return serializeByValueID(symbolId);
            }
            if (typeof value === 'bigint') {
                return serializeBigInt(value);
            }
            throw new Error("Type " + typeof value + " is not supported in Client Component props." + describeObjectForErrorMessage(parent, key));
        }
        function logRecoverableError(request, error) {
            var onError = request.onError;
            var errorDigest = onError(error);
            if (errorDigest != null && typeof errorDigest !== 'string') {
                throw new Error("onError returned something with a type other than \"string\". onError should return a string and may return null or undefined but must not return anything else. It received something of type \"" + typeof errorDigest + "\" instead");
            }
            return errorDigest || '';
        }
        function getErrorMessageAndStackDev(error) {
            {
                var message;
                var stack = '';
                try {
                    if (error instanceof Error) {
                        message = String(error.message);
                        stack = String(error.stack);
                    } else {
                        message = 'Error: ' + error;
                    }
                } catch (x) {
                    message = 'An error occurred but serializing the error message failed.';
                }
                return {
                    message: message,
                    stack: stack
                };
            }
        }
        function fatalError(request, error) {
            if (request.destination !== null) {
                request.status = CLOSED;
                closeWithError(request.destination, error);
            } else {
                request.status = CLOSING;
                request.fatalError = error;
            }
        }
        function emitErrorChunkProd(request, id, digest) {
            var processedChunk = processErrorChunkProd();
            request.completedErrorChunks.push(processedChunk);
        }
        function emitErrorChunkDev(request, id, digest, message, stack) {
            var processedChunk = processErrorChunkDev(request, id, digest, message, stack);
            request.completedErrorChunks.push(processedChunk);
        }
        function emitImportChunk(request, id, clientReferenceMetadata) {
            var processedChunk = processImportChunk(request, id, clientReferenceMetadata);
            request.completedImportChunks.push(processedChunk);
        }
        function emitHintChunk(request, code, model) {
            var processedChunk = processHintChunk(request, request.nextChunkId++, code, model);
            request.completedHintChunks.push(processedChunk);
        }
        function emitSymbolChunk(request, id, name) {
            var symbolReference = serializeSymbolReference(name);
            var processedChunk = processReferenceChunk(request, id, symbolReference);
            request.completedImportChunks.push(processedChunk);
        }
        function emitProviderChunk(request, id, contextName) {
            var contextReference = serializeProviderReference(contextName);
            var processedChunk = processReferenceChunk(request, id, contextReference);
            request.completedRegularChunks.push(processedChunk);
        }
        function retryTask(request, task) {
            if (task.status !== PENDING$1) {
                return;
            }
            switchContext(task.context);
            try {
                var value = task.model;
                if (typeof value === 'object' && value !== null && value.$$typeof === REACT_ELEMENT_TYPE) {
                    var element = value;
                    var prevThenableState = task.thenableState;
                    task.model = value;
                    value = attemptResolveElement(request, element.type, element.key, element.ref, element.props, prevThenableState);
                    task.thenableState = null;
                    while(typeof value === 'object' && value !== null && value.$$typeof === REACT_ELEMENT_TYPE){
                        var nextElement = value;
                        task.model = value;
                        value = attemptResolveElement(request, nextElement.type, nextElement.key, nextElement.ref, nextElement.props, null);
                    }
                }
                var processedChunk = processModelChunk(request, task.id, value);
                request.completedRegularChunks.push(processedChunk);
                request.abortableTasks.delete(task);
                task.status = COMPLETED;
            } catch (thrownValue) {
                var x = thrownValue === SuspenseException ? getSuspendedThenable() : thrownValue;
                if (typeof x === 'object' && x !== null && typeof x.then === 'function') {
                    var ping = task.ping;
                    x.then(ping, ping);
                    task.thenableState = getThenableStateAfterSuspending();
                    return;
                } else {
                    request.abortableTasks.delete(task);
                    task.status = ERRORED$1;
                    var digest = logRecoverableError(request, x);
                    {
                        var _getErrorMessageAndSt5 = getErrorMessageAndStackDev(x), message = _getErrorMessageAndSt5.message, stack = _getErrorMessageAndSt5.stack;
                        emitErrorChunkDev(request, task.id, digest, message, stack);
                    }
                }
            }
        }
        function performWork(request) {
            var prevDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = HooksDispatcher;
            var prevRequest = currentRequest;
            currentRequest = request;
            prepareToUseHooksForRequest(request);
            try {
                var pingedTasks = request.pingedTasks;
                request.pingedTasks = [];
                for(var i = 0; i < pingedTasks.length; i++){
                    var task = pingedTasks[i];
                    retryTask(request, task);
                }
                if (request.destination !== null) {
                    flushCompletedChunks(request, request.destination);
                }
            } catch (error) {
                logRecoverableError(request, error);
                fatalError(request, error);
            } finally{
                ReactCurrentDispatcher.current = prevDispatcher;
                resetHooksForRequest();
                currentRequest = prevRequest;
            }
        }
        function abortTask(task, request, errorId) {
            task.status = ABORTED;
            var ref = serializeByValueID(errorId);
            var processedChunk = processReferenceChunk(request, task.id, ref);
            request.completedErrorChunks.push(processedChunk);
        }
        function flushCompletedChunks(request, destination) {
            beginWriting();
            try {
                var importsChunks = request.completedImportChunks;
                var i = 0;
                for(; i < importsChunks.length; i++){
                    request.pendingChunks--;
                    var chunk = importsChunks[i];
                    var keepWriting = writeChunkAndReturn(destination, chunk);
                    if ("TURBOPACK compile-time falsy", 0) {
                        "TURBOPACK unreachable";
                    }
                }
                importsChunks.splice(0, i);
                var hintChunks = request.completedHintChunks;
                i = 0;
                for(; i < hintChunks.length; i++){
                    var _chunk = hintChunks[i];
                    var _keepWriting = writeChunkAndReturn(destination, _chunk);
                    if ("TURBOPACK compile-time falsy", 0) {
                        "TURBOPACK unreachable";
                    }
                }
                hintChunks.splice(0, i);
                var regularChunks = request.completedRegularChunks;
                i = 0;
                for(; i < regularChunks.length; i++){
                    request.pendingChunks--;
                    var _chunk2 = regularChunks[i];
                    var _keepWriting2 = writeChunkAndReturn(destination, _chunk2);
                    if ("TURBOPACK compile-time falsy", 0) {
                        "TURBOPACK unreachable";
                    }
                }
                regularChunks.splice(0, i);
                var errorChunks = request.completedErrorChunks;
                i = 0;
                for(; i < errorChunks.length; i++){
                    request.pendingChunks--;
                    var _chunk3 = errorChunks[i];
                    var _keepWriting3 = writeChunkAndReturn(destination, _chunk3);
                    if ("TURBOPACK compile-time falsy", 0) {
                        "TURBOPACK unreachable";
                    }
                }
                errorChunks.splice(0, i);
            } finally{
                request.flushScheduled = false;
                completeWriting(destination);
            }
            if (request.pendingChunks === 0) {
                close$1(destination);
            }
        }
        function startWork(request) {
            request.flushScheduled = request.destination !== null;
            if (supportsRequestStorage) {
                scheduleWork(function() {
                    return requestStorage.run(request, performWork, request);
                });
            } else {
                scheduleWork(function() {
                    return performWork(request);
                });
            }
        }
        function enqueueFlush(request) {
            if (request.flushScheduled === false && request.pingedTasks.length === 0 && request.destination !== null) {
                var destination = request.destination;
                request.flushScheduled = true;
                scheduleWork(function() {
                    return flushCompletedChunks(request, destination);
                });
            }
        }
        function startFlowing(request, destination) {
            if (request.status === CLOSING) {
                request.status = CLOSED;
                closeWithError(destination, request.fatalError);
                return;
            }
            if (request.status === CLOSED) {
                return;
            }
            if (request.destination !== null) {
                return;
            }
            request.destination = destination;
            try {
                flushCompletedChunks(request, destination);
            } catch (error) {
                logRecoverableError(request, error);
                fatalError(request, error);
            }
        }
        function abort(request, reason) {
            try {
                var abortableTasks = request.abortableTasks;
                if (abortableTasks.size > 0) {
                    var error = reason === undefined ? new Error('The render was aborted by the server without a reason.') : reason;
                    var digest = logRecoverableError(request, error);
                    request.pendingChunks++;
                    var errorId = request.nextChunkId++;
                    if ("TURBOPACK compile-time truthy", 1) {
                        var _getErrorMessageAndSt6 = getErrorMessageAndStackDev(error), message = _getErrorMessageAndSt6.message, stack = _getErrorMessageAndSt6.stack;
                        emitErrorChunkDev(request, errorId, digest, message, stack);
                    }
                    abortableTasks.forEach(function(task) {
                        return abortTask(task, request, errorId);
                    });
                    abortableTasks.clear();
                }
                if (request.destination !== null) {
                    flushCompletedChunks(request, request.destination);
                }
            } catch (error) {
                logRecoverableError(request, error);
                fatalError(request, error);
            }
        }
        function importServerContexts(contexts) {
            if (contexts) {
                var prevContext = getActiveContext();
                switchContext(rootContextSnapshot);
                for(var i = 0; i < contexts.length; i++){
                    var _contexts$i = contexts[i], name = _contexts$i[0], value = _contexts$i[1];
                    var context = getOrCreateServerContext(name);
                    pushProvider(context, value);
                }
                var importedContext = getActiveContext();
                switchContext(prevContext);
                return importedContext;
            }
            return rootContextSnapshot;
        }
        function serializeRowHeader(tag, id) {
            return id.toString(16) + ':' + tag;
        }
        function processErrorChunkProd(request, id, digest) {
            {
                throw new Error('processErrorChunkProd should never be called while in development mode. Use processErrorChunkDev instead. This is a bug in React.');
            }
        }
        function processErrorChunkDev(request, id, digest, message, stack) {
            var errorInfo = {
                digest: digest,
                message: message,
                stack: stack
            };
            var row = serializeRowHeader('E', id) + stringify(errorInfo) + '\n';
            return stringToChunk(row);
        }
        function processModelChunk(request, id, model) {
            var json = stringify(model, request.toJSON);
            var row = id.toString(16) + ':' + json + '\n';
            return stringToChunk(row);
        }
        function processReferenceChunk(request, id, reference) {
            var json = stringify(reference);
            var row = id.toString(16) + ':' + json + '\n';
            return stringToChunk(row);
        }
        function processImportChunk(request, id, clientReferenceMetadata) {
            var json = stringify(clientReferenceMetadata);
            var row = serializeRowHeader('I', id) + json + '\n';
            return stringToChunk(row);
        }
        function processHintChunk(request, id, code, model) {
            var json = stringify(model);
            var row = serializeRowHeader('H' + code, id) + json + '\n';
            return stringToChunk(row);
        }
        function processTextHeader(request, id, binaryLength) {
            var row = id.toString(16) + ':T' + binaryLength.toString(16) + ',';
            return stringToChunk(row);
        }
        function resolveServerReference(bundlerConfig, id) {
            var name = '';
            var resolvedModuleData = bundlerConfig[id];
            if (resolvedModuleData) {
                name = resolvedModuleData.name;
            } else {
                var idx = id.lastIndexOf('#');
                if (idx !== -1) {
                    name = id.slice(idx + 1);
                    resolvedModuleData = bundlerConfig[id.slice(0, idx)];
                }
                if (!resolvedModuleData) {
                    throw new Error('Could not find the module "' + id + '" in the React Server Manifest. ' + 'This is probably a bug in the React Server Components bundler.');
                }
            }
            return {
                id: resolvedModuleData.id,
                chunks: resolvedModuleData.chunks,
                name: name,
                async: false
            };
        }
        var chunkCache = new Map();
        function requireAsyncModule(id) {
            var promise = globalThis.__next_require__(id);
            if (typeof promise.then !== 'function') {
                return null;
            } else if (promise.status === 'fulfilled') {
                return null;
            } else {
                promise.then(function(value) {
                    var fulfilledThenable = promise;
                    fulfilledThenable.status = 'fulfilled';
                    fulfilledThenable.value = value;
                }, function(reason) {
                    var rejectedThenable = promise;
                    rejectedThenable.status = 'rejected';
                    rejectedThenable.reason = reason;
                });
                return promise;
            }
        }
        function ignoreReject() {}
        function preloadModule(metadata) {
            var chunks = metadata.chunks;
            var promises = [];
            for(var i = 0; i < chunks.length; i++){
                var chunkId = chunks[i];
                var entry = chunkCache.get(chunkId);
                if (entry === undefined) {
                    var thenable = globalThis.__next_chunk_load__(chunkId);
                    promises.push(thenable);
                    var resolve = chunkCache.set.bind(chunkCache, chunkId, null);
                    thenable.then(resolve, ignoreReject);
                    chunkCache.set(chunkId, thenable);
                } else if (entry !== null) {
                    promises.push(entry);
                }
            }
            if (metadata.async) {
                if (promises.length === 0) {
                    return requireAsyncModule(metadata.id);
                } else {
                    return Promise.all(promises).then(function() {
                        return requireAsyncModule(metadata.id);
                    });
                }
            } else if (promises.length > 0) {
                return Promise.all(promises);
            } else {
                return null;
            }
        }
        function requireModule(metadata) {
            var moduleExports = globalThis.__next_require__(metadata.id);
            if (metadata.async) {
                if (typeof moduleExports.then !== 'function') ;
                else if (moduleExports.status === 'fulfilled') {
                    moduleExports = moduleExports.value;
                } else {
                    throw moduleExports.reason;
                }
            }
            if (metadata.name === '*') {
                return moduleExports;
            }
            if (metadata.name === '') {
                return moduleExports.__esModule ? moduleExports.default : moduleExports;
            }
            return moduleExports[metadata.name];
        }
        var PENDING = 'pending';
        var BLOCKED = 'blocked';
        var RESOLVED_MODEL = 'resolved_model';
        var INITIALIZED = 'fulfilled';
        var ERRORED = 'rejected';
        function Chunk(status, value, reason, response) {
            this.status = status;
            this.value = value;
            this.reason = reason;
            this._response = response;
        }
        Chunk.prototype = Object.create(Promise.prototype);
        Chunk.prototype.then = function(resolve, reject) {
            var chunk = this;
            switch(chunk.status){
                case RESOLVED_MODEL:
                    initializeModelChunk(chunk);
                    break;
            }
            switch(chunk.status){
                case INITIALIZED:
                    resolve(chunk.value);
                    break;
                case PENDING:
                case BLOCKED:
                    if (resolve) {
                        if (chunk.value === null) {
                            chunk.value = [];
                        }
                        chunk.value.push(resolve);
                    }
                    if (reject) {
                        if (chunk.reason === null) {
                            chunk.reason = [];
                        }
                        chunk.reason.push(reject);
                    }
                    break;
                default:
                    reject(chunk.reason);
                    break;
            }
        };
        function getRoot(response) {
            var chunk = getChunk(response, 0);
            return chunk;
        }
        function createPendingChunk(response) {
            return new Chunk(PENDING, null, null, response);
        }
        function wakeChunk(listeners, value) {
            for(var i = 0; i < listeners.length; i++){
                var listener = listeners[i];
                listener(value);
            }
        }
        function triggerErrorOnChunk(chunk, error) {
            if (chunk.status !== PENDING && chunk.status !== BLOCKED) {
                return;
            }
            var listeners = chunk.reason;
            var erroredChunk = chunk;
            erroredChunk.status = ERRORED;
            erroredChunk.reason = error;
            if (listeners !== null) {
                wakeChunk(listeners, error);
            }
        }
        function createResolvedModelChunk(response, value) {
            return new Chunk(RESOLVED_MODEL, value, null, response);
        }
        function bindArgs$1(fn, args) {
            return fn.bind.apply(fn, [
                null
            ].concat(args));
        }
        function loadServerReference$1(response, id, bound, parentChunk, parentObject, key) {
            var serverReference = resolveServerReference(response._bundlerConfig, id);
            var preloadPromise = preloadModule(serverReference);
            var promise;
            if (bound) {
                promise = Promise.all([
                    bound,
                    preloadPromise
                ]).then(function(_ref) {
                    var args = _ref[0];
                    return bindArgs$1(requireModule(serverReference), args);
                });
            } else {
                if (preloadPromise) {
                    promise = Promise.resolve(preloadPromise).then(function() {
                        return requireModule(serverReference);
                    });
                } else {
                    return requireModule(serverReference);
                }
            }
            promise.then(createModelResolver(parentChunk, parentObject, key), createModelReject(parentChunk));
            return null;
        }
        var initializingChunk = null;
        var initializingChunkBlockedModel = null;
        function initializeModelChunk(chunk) {
            var prevChunk = initializingChunk;
            var prevBlocked = initializingChunkBlockedModel;
            initializingChunk = chunk;
            initializingChunkBlockedModel = null;
            try {
                var value = JSON.parse(chunk.value, chunk._response._fromJSON);
                if (initializingChunkBlockedModel !== null && initializingChunkBlockedModel.deps > 0) {
                    initializingChunkBlockedModel.value = value;
                    var blockedChunk = chunk;
                    blockedChunk.status = BLOCKED;
                    blockedChunk.value = null;
                    blockedChunk.reason = null;
                } else {
                    var initializedChunk = chunk;
                    initializedChunk.status = INITIALIZED;
                    initializedChunk.value = value;
                }
            } catch (error) {
                var erroredChunk = chunk;
                erroredChunk.status = ERRORED;
                erroredChunk.reason = error;
            } finally{
                initializingChunk = prevChunk;
                initializingChunkBlockedModel = prevBlocked;
            }
        }
        function reportGlobalError(response, error) {
            response._chunks.forEach(function(chunk) {
                if (chunk.status === PENDING) {
                    triggerErrorOnChunk(chunk, error);
                }
            });
        }
        function getChunk(response, id) {
            var chunks = response._chunks;
            var chunk = chunks.get(id);
            if (!chunk) {
                var prefix = response._prefix;
                var key = prefix + id;
                var backingEntry = response._formData.get(key);
                if (backingEntry != null) {
                    chunk = createResolvedModelChunk(response, backingEntry);
                } else {
                    chunk = createPendingChunk(response);
                }
                chunks.set(id, chunk);
            }
            return chunk;
        }
        function createModelResolver(chunk, parentObject, key) {
            var blocked;
            if (initializingChunkBlockedModel) {
                blocked = initializingChunkBlockedModel;
                blocked.deps++;
            } else {
                blocked = initializingChunkBlockedModel = {
                    deps: 1,
                    value: null
                };
            }
            return function(value) {
                parentObject[key] = value;
                blocked.deps--;
                if (blocked.deps === 0) {
                    if (chunk.status !== BLOCKED) {
                        return;
                    }
                    var resolveListeners = chunk.value;
                    var initializedChunk = chunk;
                    initializedChunk.status = INITIALIZED;
                    initializedChunk.value = blocked.value;
                    if (resolveListeners !== null) {
                        wakeChunk(resolveListeners, blocked.value);
                    }
                }
            };
        }
        function createModelReject(chunk) {
            return function(error) {
                return triggerErrorOnChunk(chunk, error);
            };
        }
        function getOutlinedModel(response, id) {
            var chunk = getChunk(response, id);
            if (chunk.status === RESOLVED_MODEL) {
                initializeModelChunk(chunk);
            }
            if (chunk.status !== INITIALIZED) {
                throw chunk.reason;
            }
            return chunk.value;
        }
        function parseModelString(response, parentObject, key, value) {
            if (value[0] === '$') {
                switch(value[1]){
                    case '$':
                        {
                            return value.slice(1);
                        }
                    case '@':
                        {
                            var id = parseInt(value.slice(2), 16);
                            var chunk = getChunk(response, id);
                            return chunk;
                        }
                    case 'S':
                        {
                            return Symbol.for(value.slice(2));
                        }
                    case 'F':
                        {
                            var _id = parseInt(value.slice(2), 16);
                            var metaData = getOutlinedModel(response, _id);
                            return loadServerReference$1(response, metaData.id, metaData.bound, initializingChunk, parentObject, key);
                        }
                    case 'Q':
                        {
                            var _id2 = parseInt(value.slice(2), 16);
                            var data = getOutlinedModel(response, _id2);
                            return new Map(data);
                        }
                    case 'W':
                        {
                            var _id3 = parseInt(value.slice(2), 16);
                            var _data = getOutlinedModel(response, _id3);
                            return new Set(_data);
                        }
                    case 'K':
                        {
                            var stringId = value.slice(2);
                            var formPrefix = response._prefix + stringId + '_';
                            var _data2 = new FormData();
                            var backingFormData = response._formData;
                            backingFormData.forEach(function(entry, entryKey) {
                                if (entryKey.startsWith(formPrefix)) {
                                    _data2.append(entryKey.slice(formPrefix.length), entry);
                                }
                            });
                            return _data2;
                        }
                    case 'I':
                        {
                            return Infinity;
                        }
                    case '-':
                        {
                            if (value === '$-0') {
                                return -0;
                            } else {
                                return -Infinity;
                            }
                        }
                    case 'N':
                        {
                            return NaN;
                        }
                    case 'u':
                        {
                            return undefined;
                        }
                    case 'D':
                        {
                            return new Date(Date.parse(value.slice(2)));
                        }
                    case 'n':
                        {
                            return BigInt(value.slice(2));
                        }
                    default:
                        {
                            var _id4 = parseInt(value.slice(1), 16);
                            var _chunk = getChunk(response, _id4);
                            switch(_chunk.status){
                                case RESOLVED_MODEL:
                                    initializeModelChunk(_chunk);
                                    break;
                            }
                            switch(_chunk.status){
                                case INITIALIZED:
                                    return _chunk.value;
                                case PENDING:
                                case BLOCKED:
                                    var parentChunk = initializingChunk;
                                    _chunk.then(createModelResolver(parentChunk, parentObject, key), createModelReject(parentChunk));
                                    return null;
                                default:
                                    throw _chunk.reason;
                            }
                        }
                }
            }
            return value;
        }
        function createResponse(bundlerConfig, formFieldPrefix) {
            var backingFormData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new FormData();
            var chunks = new Map();
            var response = {
                _bundlerConfig: bundlerConfig,
                _prefix: formFieldPrefix,
                _formData: backingFormData,
                _chunks: chunks,
                _fromJSON: function(key, value) {
                    if (typeof value === 'string') {
                        return parseModelString(response, this, key, value);
                    }
                    return value;
                }
            };
            return response;
        }
        function close(response) {
            reportGlobalError(response, new Error('Connection closed.'));
        }
        function bindArgs(fn, args) {
            return fn.bind.apply(fn, [
                null
            ].concat(args));
        }
        function loadServerReference(bundlerConfig, id, bound) {
            var serverReference = resolveServerReference(bundlerConfig, id);
            var preloadPromise = preloadModule(serverReference);
            if (bound) {
                return Promise.all([
                    bound,
                    preloadPromise
                ]).then(function(_ref) {
                    var args = _ref[0];
                    return bindArgs(requireModule(serverReference), args);
                });
            } else if (preloadPromise) {
                return Promise.resolve(preloadPromise).then(function() {
                    return requireModule(serverReference);
                });
            } else {
                return Promise.resolve(requireModule(serverReference));
            }
        }
        function decodeAction(body, serverManifest) {
            var formData = new FormData();
            var action = null;
            body.forEach(function(value, key) {
                if (!key.startsWith('$ACTION_')) {
                    formData.append(key, value);
                    return;
                }
                if (key.startsWith('$ACTION_REF_')) {
                    var formFieldPrefix = '$ACTION_' + key.slice(12) + ':';
                    var actionResponse = createResponse(serverManifest, formFieldPrefix, body);
                    close(actionResponse);
                    var refPromise = getRoot(actionResponse);
                    refPromise.then(function() {});
                    if (refPromise.status !== 'fulfilled') {
                        throw refPromise.reason;
                    }
                    var metaData = refPromise.value;
                    action = loadServerReference(serverManifest, metaData.id, metaData.bound);
                    return;
                }
                if (key.startsWith('$ACTION_ID_')) {
                    var id = key.slice(11);
                    action = loadServerReference(serverManifest, id, null);
                    return;
                }
            });
            if (action === null) {
                return null;
            }
            return action.then(function(fn) {
                return fn.bind(null, formData);
            });
        }
        function renderToReadableStream(model, webpackMap, options) {
            var request = createRequest(model, webpackMap, options ? options.onError : undefined, options ? options.context : undefined, options ? options.identifierPrefix : undefined);
            if (options && options.signal) {
                var signal = options.signal;
                if (signal.aborted) {
                    abort(request, signal.reason);
                } else {
                    var listener = function() {
                        abort(request, signal.reason);
                        signal.removeEventListener('abort', listener);
                    };
                    signal.addEventListener('abort', listener);
                }
            }
            var stream = new ReadableStream({
                type: 'bytes',
                start: function(controller) {
                    startWork(request);
                },
                pull: function(controller) {
                    startFlowing(request, controller);
                },
                cancel: function(reason) {}
            }, {
                highWaterMark: 0
            });
            return stream;
        }
        function decodeReply(body, webpackMap) {
            if (typeof body === 'string') {
                var form = new FormData();
                form.append('0', body);
                body = form;
            }
            var response = createResponse(webpackMap, '', body);
            close(response);
            return getRoot(response);
        }
        exports.createClientModuleProxy = createClientModuleProxy;
        exports.decodeAction = decodeAction;
        exports.decodeReply = decodeReply;
        exports.registerClientReference = registerClientReference;
        exports.registerServerReference = registerServerReference;
        exports.renderToReadableStream = renderToReadableStream;
    })();
}

}.call(this) }),
"[project]/node_modules/next/dist/compiled/react-server-dom-webpack/server.edge.js (ecmascript, rsc)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_require__("[project]/node_modules/next/dist/compiled/react-server-dom-webpack/cjs/react-server-dom-webpack-server.edge.development.js (ecmascript, rsc)");
}

}.call(this) }),
"[project]/node_modules/next/dist/server/app-render/get-segment-param.js (ecmascript, rsc)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getSegmentParam", {
    enumerable: true,
    get: function() {
        return getSegmentParam;
    }
});
const _interceptionroutes = __turbopack_require__("[project]/node_modules/next/dist/server/future/helpers/interception-routes.js (ecmascript, rsc)");
function getSegmentParam(segment) {
    const interceptionMarker = _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.find((marker)=>segment.startsWith(marker));
    if (interceptionMarker) {
        segment = segment.slice(interceptionMarker.length);
    }
    if (segment.startsWith("[[...") && segment.endsWith("]]")) {
        return {
            type: "optional-catchall",
            param: segment.slice(5, -2)
        };
    }
    if (segment.startsWith("[...") && segment.endsWith("]")) {
        return {
            type: "catchall",
            param: segment.slice(4, -1)
        };
    }
    if (segment.startsWith("[") && segment.endsWith("]")) {
        return {
            type: "dynamic",
            param: segment.slice(1, -1)
        };
    }
    return null;
}

}.call(this) }),
"[project]/node_modules/next/dist/server/app-render/flight-render-result.js (ecmascript, rsc)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "FlightRenderResult", {
    enumerable: true,
    get: function() {
        return FlightRenderResult;
    }
});
const _approuterheaders = __turbopack_require__("[project]/node_modules/next/dist/client/components/app-router-headers.js (ecmascript, rsc)");
const _renderresult = _interop_require_default(__turbopack_require__("[project]/node_modules/next/dist/server/render-result.js (ecmascript, rsc)"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class FlightRenderResult extends _renderresult.default {
    constructor(response){
        super(response, {
            contentType: _approuterheaders.RSC_CONTENT_TYPE_HEADER
        });
    }
}

}.call(this) }),
"[project]/node_modules/next/dist/server/app-render/action-handler.js (ecmascript, rsc)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "handleAction", {
    enumerable: true,
    get: function() {
        return handleAction;
    }
});
const _approuterheaders = __turbopack_require__("[project]/node_modules/next/dist/client/components/app-router-headers.js (ecmascript, rsc)");
const _notfound = __turbopack_require__("[project]/node_modules/next/dist/client/components/not-found.js (ecmascript, rsc)");
const _redirect = __turbopack_require__("[project]/node_modules/next/dist/client/components/redirect.js (ecmascript, rsc)");
const _renderresult = _interop_require_default(__turbopack_require__("[project]/node_modules/next/dist/server/render-result.js (ecmascript, rsc)"));
const _flightrenderresult = __turbopack_require__("[project]/node_modules/next/dist/server/app-render/flight-render-result.js (ecmascript, rsc)");
const _utils = __turbopack_require__("[project]/node_modules/next/dist/server/lib/server-ipc/utils.js (ecmascript, rsc)");
const _requestcookies = __turbopack_require__("[project]/node_modules/next/dist/server/web/spec-extension/adapters/request-cookies.js (ecmascript, rsc)");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function nodeToWebReadableStream(nodeReadable) {
    if ("TURBOPACK compile-time truthy", 1) {
        const { Readable } = __turbopack_external_require__("stream");
        if ("toWeb" in Readable && typeof Readable.toWeb === "function") {
            return Readable.toWeb(nodeReadable);
        }
        return new ReadableStream({
            start (controller) {
                nodeReadable.on("data", (chunk)=>{
                    controller.enqueue(chunk);
                });
                nodeReadable.on("end", ()=>{
                    controller.close();
                });
                nodeReadable.on("error", (error)=>{
                    controller.error(error);
                });
            }
        });
    } else {
        "TURBOPACK unreachable";
    }
}
function formDataFromSearchQueryString(query) {
    const searchParams = new URLSearchParams(query);
    const formData = new FormData();
    for (const [key, value] of searchParams){
        formData.append(key, value);
    }
    return formData;
}
function nodeHeadersToRecord(headers) {
    const record = {};
    for (const [key, value] of Object.entries(headers)){
        if (value !== undefined) {
            record[key] = Array.isArray(value) ? value.join(", ") : `${value}`;
        }
    }
    return record;
}
function getForwardedHeaders(req, res) {
    const requestHeaders = req.headers;
    const requestCookies = requestHeaders["cookie"] ?? "";
    const responseHeaders = res.getHeaders();
    const rawSetCookies = responseHeaders["set-cookie"];
    const setCookies = (Array.isArray(rawSetCookies) ? rawSetCookies : [
        rawSetCookies
    ]).map((setCookie)=>{
        const [cookie] = `${setCookie}`.split(";");
        return cookie;
    });
    const mergedHeaders = (0, _utils.filterReqHeaders)({
        ...nodeHeadersToRecord(requestHeaders),
        ...nodeHeadersToRecord(responseHeaders)
    });
    const mergedCookies = requestCookies.split("; ").concat(setCookies).join("; ");
    mergedHeaders["cookie"] = mergedCookies;
    delete mergedHeaders["transfer-encoding"];
    return new Headers(mergedHeaders);
}
function fetchIPv4v6(url, init, v6 = false) {
    const hostname = url.hostname;
    if (!v6 && hostname === "localhost") {
        url.hostname = "127.0.0.1";
    }
    return fetch(url, init).catch((err)=>{
        if (err.code === "ECONNREFUSED" && !v6) {
            return fetchIPv4v6(url, init, true);
        }
        throw err;
    });
}
async function addRevalidationHeader(res, { staticGenerationStore, requestStore }) {
    var _staticGenerationStore_revalidatedTags;
    await Promise.all(staticGenerationStore.pendingRevalidates || []);
    const isTagRevalidated = ((_staticGenerationStore_revalidatedTags = staticGenerationStore.revalidatedTags) == null ? void 0 : _staticGenerationStore_revalidatedTags.length) ? 1 : 0;
    const isCookieRevalidated = (0, _requestcookies.getModifiedCookieValues)(requestStore.mutableCookies).length ? 1 : 0;
    res.setHeader("x-action-revalidated", JSON.stringify([
        [],
        isTagRevalidated,
        isCookieRevalidated
    ]));
}
async function createRedirectRenderResult(req, res, redirectUrl, staticGenerationStore) {
    res.setHeader("x-action-redirect", redirectUrl);
    if (redirectUrl.startsWith("/")) {
        var _staticGenerationStore_incrementalCache;
        const forwardedHeaders = getForwardedHeaders(req, res);
        forwardedHeaders.set(_approuterheaders.RSC, "1");
        const host = req.headers["host"];
        const proto = ((_staticGenerationStore_incrementalCache = staticGenerationStore.incrementalCache) == null ? void 0 : _staticGenerationStore_incrementalCache.requestProtocol) || "https";
        const fetchUrl = new URL(`${proto}://${host}${redirectUrl}`);
        if (staticGenerationStore.revalidatedTags) {
            var _staticGenerationStore_incrementalCache1, _staticGenerationStore_incrementalCache_prerenderManifest, _staticGenerationStore_incrementalCache_prerenderManifest_preview;
            forwardedHeaders.set("x-next-revalidated-tags", staticGenerationStore.revalidatedTags.join(","));
            forwardedHeaders.set("x-next-revalidate-tag-token", ((_staticGenerationStore_incrementalCache1 = staticGenerationStore.incrementalCache) == null ? void 0 : (_staticGenerationStore_incrementalCache_prerenderManifest = _staticGenerationStore_incrementalCache1.prerenderManifest) == null ? void 0 : (_staticGenerationStore_incrementalCache_prerenderManifest_preview = _staticGenerationStore_incrementalCache_prerenderManifest.preview) == null ? void 0 : _staticGenerationStore_incrementalCache_prerenderManifest_preview.previewModeId) || "");
        }
        try {
            const headResponse = await fetchIPv4v6(fetchUrl, {
                method: "HEAD",
                headers: forwardedHeaders,
                next: {
                    internal: 1
                }
            });
            if (headResponse.headers.get("content-type") === _approuterheaders.RSC_CONTENT_TYPE_HEADER) {
                const response = await fetchIPv4v6(fetchUrl, {
                    method: "GET",
                    headers: forwardedHeaders,
                    next: {
                        internal: 1
                    }
                });
                for (const [key, value] of response.headers){
                    if (!_utils.forbiddenHeaders.includes(key)) {
                        res.setHeader(key, value);
                    }
                }
                return new _flightrenderresult.FlightRenderResult(response.body);
            }
        } catch (err) {
            console.error(`failed to get redirect response`, err);
        }
    }
    return new _renderresult.default(JSON.stringify({}));
}
async function handleAction({ req, res, ComponentMod, pathname, serverActionsManifest, generateFlight, staticGenerationStore, requestStore, serverActionsBodySizeLimit }) {
    let actionId = req.headers[_approuterheaders.ACTION.toLowerCase()];
    const contentType = req.headers["content-type"];
    const isURLEncodedAction = req.method === "POST" && contentType === "application/x-www-form-urlencoded";
    const isMultipartAction = req.method === "POST" && (contentType == null ? void 0 : contentType.startsWith("multipart/form-data"));
    const isFetchAction = actionId !== undefined && typeof actionId === "string" && req.method === "POST";
    if (isFetchAction || isURLEncodedAction || isMultipartAction) {
        let bound = [];
        const workerName = "app" + pathname;
        const serverModuleMap = new Proxy({}, {
            get: (_, id)=>{
                return {
                    id: serverActionsManifest[process.env.NEXT_RUNTIME === "edge" ? "edge" : "node"][id].workers[workerName],
                    name: id,
                    chunks: []
                };
            }
        });
        const { actionAsyncStorage } = ComponentMod;
        let actionResult;
        try {
            await actionAsyncStorage.run({
                isAction: true
            }, async ()=>{
                if ("TURBOPACK compile-time falsy", 0) {
                    "TURBOPACK unreachable";
                } else {
                    const { decodeReply, decodeReplyFromBusboy, decodeAction } = __turbopack_require__("[project]/node_modules/next/dist/compiled/react-server-dom-webpack/server.node.js (ecmascript, rsc)");
                    if (isMultipartAction) {
                        if (isFetchAction) {
                            const busboy = __turbopack_require__("[project]/node_modules/busboy/lib/index.js (ecmascript, rsc)");
                            const bb = busboy({
                                headers: req.headers
                            });
                            req.pipe(bb);
                            bound = await decodeReplyFromBusboy(bb, serverModuleMap);
                        } else {
                            const UndiciRequest = __turbopack_require__("[project]/node_modules/next/dist/compiled/undici/index.js (ecmascript, rsc)").Request;
                            const fakeRequest = new UndiciRequest("http://localhost", {
                                method: "POST",
                                headers: {
                                    "Content-Type": req.headers["content-type"]
                                },
                                body: nodeToWebReadableStream(req),
                                duplex: "half"
                            });
                            const formData = await fakeRequest.formData();
                            const action = await decodeAction(formData, serverModuleMap);
                            await action();
                            return;
                        }
                    } else {
                        const { parseBody } = __turbopack_require__("[project]/node_modules/next/dist/server/api-utils/node.js (ecmascript, rsc)");
                        let actionData;
                        try {
                            actionData = await parseBody(req, serverActionsBodySizeLimit ?? "1mb") || "";
                        } catch (e) {
                            if (e && e.statusCode === 413) {
                                e.message = e.message + "\nTo configure the body size limit for Server Actions, see: https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions#size-limitation";
                            }
                            throw e;
                        }
                        if (isURLEncodedAction) {
                            const formData = formDataFromSearchQueryString(actionData);
                            bound = await decodeReply(formData, serverModuleMap);
                        } else {
                            bound = await decodeReply(actionData, serverModuleMap);
                        }
                    }
                }
                const actionModId = serverActionsManifest[process.env.NEXT_RUNTIME === "edge" ? "edge" : "node"][actionId].workers[workerName];
                const actionHandler = ComponentMod.__next_app__.require(actionModId)[actionId];
                const returnVal = await actionHandler.apply(null, bound);
                if (isFetchAction) {
                    await addRevalidationHeader(res, {
                        staticGenerationStore,
                        requestStore
                    });
                    actionResult = await generateFlight({
                        actionResult: Promise.resolve(returnVal),
                        skipFlight: !staticGenerationStore.pathWasRevalidated
                    });
                }
            });
            return actionResult;
        } catch (err) {
            if ((0, _redirect.isRedirectError)(err)) {
                const redirectUrl = (0, _redirect.getURLFromRedirectError)(err);
                await addRevalidationHeader(res, {
                    staticGenerationStore,
                    requestStore
                });
                if (isFetchAction) {
                    return createRedirectRenderResult(req, res, redirectUrl, staticGenerationStore);
                }
                if (err.mutableCookies) {
                    const headers = new Headers();
                    if ((0, _requestcookies.appendMutableCookies)(headers, err.mutableCookies)) {
                        res.setHeader("set-cookie", Array.from(headers.values()));
                    }
                }
                res.setHeader("Location", redirectUrl);
                res.statusCode = 303;
                return new _renderresult.default("");
            } else if ((0, _notfound.isNotFoundError)(err)) {
                res.statusCode = 404;
                await addRevalidationHeader(res, {
                    staticGenerationStore,
                    requestStore
                });
                if (isFetchAction) {
                    const promise = Promise.reject(err);
                    try {
                        await promise;
                    } catch (_) {}
                    return generateFlight({
                        skipFlight: false,
                        actionResult: promise,
                        asNotFound: true
                    });
                }
                return "not-found";
            }
            if (isFetchAction) {
                res.statusCode = 500;
                await Promise.all(staticGenerationStore.pendingRevalidates || []);
                const promise = Promise.reject(err);
                try {
                    await promise;
                } catch (_) {}
                return generateFlight({
                    actionResult: promise,
                    skipFlight: !staticGenerationStore.pathWasRevalidated
                });
            }
            throw err;
        }
    }
}

}.call(this) }),
"[project]/node_modules/next/dist/server/app-render/create-flight-router-state-from-loader-tree.js (ecmascript, rsc)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    addSearchParamsIfPageSegment: null,
    createFlightRouterStateFromLoaderTree: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    addSearchParamsIfPageSegment: function() {
        return addSearchParamsIfPageSegment;
    },
    createFlightRouterStateFromLoaderTree: function() {
        return createFlightRouterStateFromLoaderTree;
    }
});
const _constants = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/constants.js (ecmascript, rsc)");
function addSearchParamsIfPageSegment(segment, searchParams) {
    const isPageSegment = segment === _constants.PAGE_SEGMENT_KEY;
    if (isPageSegment) {
        const stringifiedQuery = JSON.stringify(searchParams);
        return stringifiedQuery !== "{}" ? segment + "?" + stringifiedQuery : segment;
    }
    return segment;
}
function createFlightRouterStateFromLoaderTree([segment, parallelRoutes, { layout }], getDynamicParamFromSegment, searchParams, rootLayoutIncluded = false) {
    const dynamicParam = getDynamicParamFromSegment(segment);
    const treeSegment = dynamicParam ? dynamicParam.treeSegment : segment;
    const segmentTree = [
        addSearchParamsIfPageSegment(treeSegment, searchParams),
        {}
    ];
    if (!rootLayoutIncluded && typeof layout !== "undefined") {
        rootLayoutIncluded = true;
        segmentTree[4] = true;
    }
    segmentTree[1] = Object.keys(parallelRoutes).reduce((existingValue, currentValue)=>{
        existingValue[currentValue] = createFlightRouterStateFromLoaderTree(parallelRoutes[currentValue], getDynamicParamFromSegment, searchParams, rootLayoutIncluded);
        return existingValue;
    }, {});
    return segmentTree;
}

}.call(this) }),
"[project]/node_modules/next/dist/server/app-render/validate-url.js (ecmascript, rsc)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "validateURL", {
    enumerable: true,
    get: function() {
        return validateURL;
    }
});
const DUMMY_ORIGIN = "http://n";
const INVALID_URL_MESSAGE = "Invalid request URL";
function validateURL(url) {
    if (!url) {
        throw new Error(INVALID_URL_MESSAGE);
    }
    try {
        const parsed = new URL(url, DUMMY_ORIGIN);
        if (parsed.origin !== DUMMY_ORIGIN) {
            throw new Error(INVALID_URL_MESSAGE);
        }
        return url;
    } catch  {
        throw new Error(INVALID_URL_MESSAGE);
    }
}

}.call(this) }),
"[project]/node_modules/next/dist/server/app-render/types.js (ecmascript, rsc)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "flightRouterStateSchema", {
    enumerable: true,
    get: function() {
        return flightRouterStateSchema;
    }
});
const _zod = _interop_require_default(__turbopack_require__("[project]/node_modules/zod/lib/index.js (ecmascript, rsc)"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const dynamicParamTypesSchema = _zod.default.enum([
    "c",
    "oc",
    "d"
]);
const segmentSchema = _zod.default.union([
    _zod.default.string(),
    _zod.default.tuple([
        _zod.default.string(),
        _zod.default.string(),
        dynamicParamTypesSchema
    ])
]);
const flightRouterStateSchema = _zod.default.lazy(()=>{
    const parallelRoutesSchema = _zod.default.record(flightRouterStateSchema);
    const urlSchema = _zod.default.string().nullable().optional();
    const refreshSchema = _zod.default.literal("refetch").nullable().optional();
    const isRootLayoutSchema = _zod.default.boolean().optional();
    return _zod.default.union([
        _zod.default.tuple([
            segmentSchema,
            parallelRoutesSchema,
            urlSchema,
            refreshSchema,
            isRootLayoutSchema
        ]),
        _zod.default.tuple([
            segmentSchema,
            parallelRoutesSchema,
            urlSchema,
            refreshSchema
        ]),
        _zod.default.tuple([
            segmentSchema,
            parallelRoutesSchema,
            urlSchema
        ]),
        _zod.default.tuple([
            segmentSchema,
            parallelRoutesSchema
        ])
    ]);
});

}.call(this) }),
"[project]/node_modules/next/dist/server/app-render/parse-and-validate-flight-router-state.js (ecmascript, rsc)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "parseAndValidateFlightRouterState", {
    enumerable: true,
    get: function() {
        return parseAndValidateFlightRouterState;
    }
});
const _types = __turbopack_require__("[project]/node_modules/next/dist/server/app-render/types.js (ecmascript, rsc)");
function parseAndValidateFlightRouterState(stateHeader) {
    if (typeof stateHeader === "undefined") {
        return undefined;
    }
    if (Array.isArray(stateHeader)) {
        throw new Error("Multiple router state headers were sent. This is not allowed.");
    }
    if (stateHeader.length > 20 * 2000) {
        throw new Error("The router state header was too large.");
    }
    try {
        return _types.flightRouterStateSchema.parse(JSON.parse(decodeURIComponent(stateHeader)));
    } catch  {
        throw new Error("The router state header was sent but could not be parsed.");
    }
}

}.call(this) }),
"[project]/node_modules/next/dist/server/app-render/render-to-string.js (ecmascript, rsc)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "renderToString", {
    enumerable: true,
    get: function() {
        return renderToString;
    }
});
const _nodewebstreamshelper = __turbopack_require__("[project]/node_modules/next/dist/server/stream-utils/node-web-streams-helper.js (ecmascript, rsc)");
const _constants = __turbopack_require__("[project]/node_modules/next/dist/server/lib/trace/constants.js (ecmascript, rsc)");
const _tracer = __turbopack_require__("[project]/node_modules/next/dist/server/lib/trace/tracer.js (ecmascript, rsc)");
async function renderToString({ ReactDOMServer, element }) {
    return (0, _tracer.getTracer)().trace(_constants.AppRenderSpan.renderToString, async ()=>{
        const renderStream = await ReactDOMServer.renderToReadableStream(element);
        await renderStream.allReady;
        return (0, _nodewebstreamshelper.streamToString)(renderStream);
    });
}

}.call(this) }),
"[project]/node_modules/next/dist/server/app-render/get-script-nonce-from-header.js (ecmascript, rsc)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getScriptNonceFromHeader", {
    enumerable: true,
    get: function() {
        return getScriptNonceFromHeader;
    }
});
const _htmlescape = __turbopack_require__("[project]/node_modules/next/dist/server/htmlescape.js (ecmascript, rsc)");
function getScriptNonceFromHeader(cspHeaderValue) {
    var _directive_split_slice_map_find;
    const directives = cspHeaderValue.split(";").map((directive)=>directive.trim());
    const directive = directives.find((dir)=>dir.startsWith("script-src")) || directives.find((dir)=>dir.startsWith("default-src"));
    if (!directive) {
        return;
    }
    const nonce = (_directive_split_slice_map_find = directive.split(" ").slice(1).map((source)=>source.trim()).find((source)=>source.startsWith("'nonce-") && source.length > 8 && source.endsWith("'"))) == null ? void 0 : _directive_split_slice_map_find.slice(7, -1);
    if (!nonce) {
        return;
    }
    if (_htmlescape.ESCAPE_REGEX.test(nonce)) {
        throw new Error("Nonce value from Content-Security-Policy contained HTML escape characters.\nLearn more: https://nextjs.org/docs/messages/nonce-contained-invalid-characters");
    }
    return nonce;
}

}.call(this) }),
"[project]/node_modules/next/dist/server/app-render/get-preloadable-fonts.js (ecmascript, rsc)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getPreloadableFonts", {
    enumerable: true,
    get: function() {
        return getPreloadableFonts;
    }
});
function getPreloadableFonts(nextFontManifest, filePath, injectedFontPreloadTags) {
    if (!nextFontManifest || !filePath) {
        return null;
    }
    const filepathWithoutExtension = filePath.replace(/\.[^.]+$/, "");
    const fontFiles = new Set();
    let foundFontUsage = false;
    const preloadedFontFiles = nextFontManifest.app[filepathWithoutExtension];
    if (preloadedFontFiles) {
        foundFontUsage = true;
        for (const fontFile of preloadedFontFiles){
            if (!injectedFontPreloadTags.has(fontFile)) {
                fontFiles.add(fontFile);
                injectedFontPreloadTags.add(fontFile);
            }
        }
    }
    if (fontFiles.size) {
        return [
            ...fontFiles
        ].sort();
    } else if (foundFontUsage && injectedFontPreloadTags.size === 0) {
        return [];
    } else {
        return null;
    }
}

}.call(this) }),
"[project]/node_modules/next/dist/server/app-render/get-css-inlined-link-tags.js (ecmascript, rsc)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getCssInlinedLinkTags", {
    enumerable: true,
    get: function() {
        return getCssInlinedLinkTags;
    }
});
function getCssInlinedLinkTags(clientReferenceManifest, filePath, injectedCSS, collectNewCSSImports) {
    const filePathWithoutExt = filePath.replace(/\.[^.]+$/, "");
    const chunks = new Set();
    const entryCSSFiles = clientReferenceManifest.entryCSSFiles[filePathWithoutExt];
    if (entryCSSFiles) {
        for (const file of entryCSSFiles){
            if (!injectedCSS.has(file)) {
                if (collectNewCSSImports) {
                    injectedCSS.add(file);
                }
                chunks.add(file);
            }
        }
    }
    return [
        ...chunks
    ];
}

}.call(this) }),
"[project]/node_modules/next/dist/server/app-render/get-short-dynamic-param-type.js (ecmascript, rsc)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    dynamicParamTypes: null,
    getShortDynamicParamType: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    dynamicParamTypes: function() {
        return dynamicParamTypes;
    },
    getShortDynamicParamType: function() {
        return getShortDynamicParamType;
    }
});
const dynamicParamTypes = {
    catchall: "c",
    "optional-catchall": "oc",
    dynamic: "d"
};
function getShortDynamicParamType(type) {
    const short = dynamicParamTypes[type];
    if (!short) {
        throw new Error("Unknown dynamic param type");
    }
    return short;
}

}.call(this) }),
"[project]/node_modules/next/dist/server/app-render/create-error-handler.js (ecmascript, rsc)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createErrorHandler", {
    enumerable: true,
    get: function() {
        return createErrorHandler;
    }
});
const _hooksservercontext = __turbopack_require__("[project]/node_modules/next/dist/client/components/hooks-server-context.js (ecmascript, rsc)");
const _stringhash = _interop_require_default(__turbopack_require__("[project]/node_modules/next/dist/compiled/string-hash/index.js (ecmascript, rsc)"));
const _formatservererror = __turbopack_require__("[project]/node_modules/next/dist/lib/format-server-error.js (ecmascript, rsc)");
const _notfound = __turbopack_require__("[project]/node_modules/next/dist/client/components/not-found.js (ecmascript, rsc)");
const _redirect = __turbopack_require__("[project]/node_modules/next/dist/client/components/redirect.js (ecmascript, rsc)");
const _nossrerror = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/no-ssr-error.js (ecmascript, rsc)");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function createErrorHandler({ _source, dev, isNextExport, errorLogger, capturedErrors, allCapturedErrors }) {
    return (err)=>{
        var _err_message;
        if (allCapturedErrors) allCapturedErrors.push(err);
        if (err && (err.digest === _hooksservercontext.DYNAMIC_ERROR_CODE || (0, _notfound.isNotFoundError)(err) || err.digest === _nossrerror.NEXT_DYNAMIC_NO_SSR_CODE || (0, _redirect.isRedirectError)(err))) {
            return err.digest;
        }
        if (dev) {
            (0, _formatservererror.formatServerError)(err);
        }
        if (!(isNextExport && (err == null ? void 0 : (_err_message = err.message) == null ? void 0 : _err_message.includes("The specific message is omitted in production builds to avoid leaking sensitive details.")))) {
            if (errorLogger) {
                errorLogger(err).catch(()=>{});
            } else {
                if ("TURBOPACK compile-time truthy", 1) {
                    const { logAppDirError } = __turbopack_require__("[project]/node_modules/next/dist/server/dev/log-app-dir-error.js (ecmascript, rsc)");
                    logAppDirError(err);
                }
                if ("TURBOPACK compile-time falsy", 0) {
                    "TURBOPACK unreachable";
                }
            }
        }
        capturedErrors.push(err);
        return (0, _stringhash.default)(err.message + err.stack + (err.digest || "")).toString();
    };
}

}.call(this) }),
"[project]/node_modules/next/dist/server/app-render/preload-component.js (ecmascript, rsc)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "preloadComponent", {
    enumerable: true,
    get: function() {
        return preloadComponent;
    }
});
function preloadComponent(Component, props) {
    const prev = console.error;
    console.error = function(msg) {
        if (msg.startsWith("Warning: Invalid hook call.")) {} else {
            prev.apply(console, arguments);
        }
    };
    try {
        let result = Component(props);
        if (result && typeof result.then === "function") {
            result.then(()=>{}, ()=>{});
        }
        return function() {
            return result;
        };
    } catch (x) {} finally{
        console.error = prev;
    }
    return Component;
}

}.call(this) }),
"[project]/node_modules/next/dist/server/app-render/interop-default.js (ecmascript, rsc)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "interopDefault", {
    enumerable: true,
    get: function() {
        return interopDefault;
    }
});
function interopDefault(mod) {
    return mod.default || mod;
}

}.call(this) }),
"[project]/node_modules/next/dist/server/app-render/use-flight-response.js (ecmascript, rsc)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useFlightResponse", {
    enumerable: true,
    get: function() {
        return useFlightResponse;
    }
});
const _nodewebstreamshelper = __turbopack_require__("[project]/node_modules/next/dist/server/stream-utils/node-web-streams-helper.js (ecmascript, rsc)");
const _encodedecode = __turbopack_require__("[project]/node_modules/next/dist/server/stream-utils/encode-decode.js (ecmascript, rsc)");
const _htmlescape = __turbopack_require__("[project]/node_modules/next/dist/server/htmlescape.js (ecmascript, rsc)");
const isEdgeRuntime = process.env.NEXT_RUNTIME === "edge";
function useFlightResponse(writable, req, clientReferenceManifest, rscChunks, flightResponseRef, nonce) {
    if (flightResponseRef.current !== null) {
        return flightResponseRef.current;
    }
    const { createFromReadableStream } = __turbopack_require__("[project]/node_modules/next/dist/compiled/react-server-dom-webpack/client.edge.js (ecmascript, rsc)");
    const [renderStream, forwardStream] = (0, _nodewebstreamshelper.readableStreamTee)(req);
    const res = createFromReadableStream(renderStream, {
        moduleMap: isEdgeRuntime ? clientReferenceManifest.edgeSSRModuleMapping : clientReferenceManifest.ssrModuleMapping
    });
    flightResponseRef.current = res;
    let bootstrapped = false;
    const forwardReader = forwardStream.getReader();
    const writer = writable.getWriter();
    const startScriptTag = nonce ? `<script nonce=${JSON.stringify(nonce)}>` : "<script>";
    const textDecoder = new TextDecoder();
    function read() {
        forwardReader.read().then(({ done, value })=>{
            if (value) {
                rscChunks.push(value);
            }
            if (!bootstrapped) {
                bootstrapped = true;
                writer.write((0, _encodedecode.encodeText)(`${startScriptTag}(self.__next_f=self.__next_f||[]).push(${(0, _htmlescape.htmlEscapeJsonString)(JSON.stringify([
                    0
                ]))})</script>`));
            }
            if (done) {
                setTimeout(()=>{
                    flightResponseRef.current = null;
                });
                writer.close();
            } else {
                const responsePartial = (0, _encodedecode.decodeText)(value, textDecoder);
                const scripts = `${startScriptTag}self.__next_f.push(${(0, _htmlescape.htmlEscapeJsonString)(JSON.stringify([
                    1,
                    responsePartial
                ]))})</script>`;
                writer.write((0, _encodedecode.encodeText)(scripts));
                read();
            }
        });
    }
    read();
    return res;
}

}.call(this) }),
"[project]/node_modules/next/dist/server/app-render/create-server-components-renderer.js (ecmascript, rsc)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createServerComponentRenderer", {
    enumerable: true,
    get: function() {
        return createServerComponentRenderer;
    }
});
const _react = _interop_require_wildcard(__turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, rsc)"));
const _useflightresponse = __turbopack_require__("[project]/node_modules/next/dist/server/app-render/use-flight-response.js (ecmascript, rsc)");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function createServerComponentRenderer(ComponentToRender, ComponentMod, { transformStream, clientReferenceManifest, serverContexts, rscChunks }, serverComponentsErrorHandler, nonce) {
    if (ComponentMod.__next_app__) {
        globalThis.__next_require__ = ComponentMod.__next_app__.require;
        globalThis.__next_chunk_load__ = ComponentMod.__next_app__.loadChunk;
    }
    let RSCStream;
    const createRSCStream = (props)=>{
        if (!RSCStream) {
            RSCStream = ComponentMod.renderToReadableStream(_react.default.createElement(ComponentToRender, props), clientReferenceManifest.clientModules, {
                context: serverContexts,
                onError: serverComponentsErrorHandler
            });
        }
        return RSCStream;
    };
    const flightResponseRef = {
        current: null
    };
    const writable = transformStream.writable;
    return function ServerComponentWrapper(props) {
        const reqStream = createRSCStream(props);
        const response = (0, _useflightresponse.useFlightResponse)(writable, reqStream, clientReferenceManifest, rscChunks, flightResponseRef, nonce);
        return (0, _react.use)(response);
    };
}

}.call(this) }),
"[project]/node_modules/next/dist/server/app-render/app-render.js (ecmascript, rsc)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "renderToHTMLOrFlight", {
    enumerable: true,
    get: function() {
        return renderToHTMLOrFlight;
    }
});
const _react = _interop_require_default(__turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, rsc)"));
const _error = __turbopack_require__("[project]/node_modules/next/dist/client/components/error.js (ecmascript, rsc)");
const _createservercomponentsrenderer = __turbopack_require__("[project]/node_modules/next/dist/server/app-render/create-server-components-renderer.js (ecmascript, rsc)");
const _renderresult = _interop_require_default(__turbopack_require__("[project]/node_modules/next/dist/server/render-result.js (ecmascript, rsc)"));
const _nodewebstreamshelper = __turbopack_require__("[project]/node_modules/next/dist/server/stream-utils/node-web-streams-helper.js (ecmascript, rsc)");
const _matchsegments = __turbopack_require__("[project]/node_modules/next/dist/client/components/match-segments.js (ecmascript, rsc)");
const _serverinsertedhtml = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/server-inserted-html.js (ecmascript, rsc)");
const _internalutils = __turbopack_require__("[project]/node_modules/next/dist/server/internal-utils.js (ecmascript, rsc)");
const _approuterheaders = __turbopack_require__("[project]/node_modules/next/dist/client/components/app-router-headers.js (ecmascript, rsc)");
const _metadata = __turbopack_require__("[project]/node_modules/next/dist/lib/metadata/metadata.js (ecmascript, rsc)");
const _requestasyncstoragewrapper = __turbopack_require__("[project]/node_modules/next/dist/server/async-storage/request-async-storage-wrapper.js (ecmascript, rsc)");
const _staticgenerationasyncstoragewrapper = __turbopack_require__("[project]/node_modules/next/dist/server/async-storage/static-generation-async-storage-wrapper.js (ecmascript, rsc)");
const _clientreference = __turbopack_require__("[project]/node_modules/next/dist/lib/client-reference.js (ecmascript, rsc)");
const _appdirmodule = __turbopack_require__("[project]/node_modules/next/dist/server/lib/app-dir-module.js (ecmascript, rsc)");
const _notfound = __turbopack_require__("[project]/node_modules/next/dist/client/components/not-found.js (ecmascript, rsc)");
const _redirect = __turbopack_require__("[project]/node_modules/next/dist/client/components/redirect.js (ecmascript, rsc)");
const _patchfetch = __turbopack_require__("[project]/node_modules/next/dist/server/lib/patch-fetch.js (ecmascript, rsc)");
const _constants = __turbopack_require__("[project]/node_modules/next/dist/server/lib/trace/constants.js (ecmascript, rsc)");
const _tracer = __turbopack_require__("[project]/node_modules/next/dist/server/lib/trace/tracer.js (ecmascript, rsc)");
const _interopdefault = __turbopack_require__("[project]/node_modules/next/dist/server/app-render/interop-default.js (ecmascript, rsc)");
const _preloadcomponent = __turbopack_require__("[project]/node_modules/next/dist/server/app-render/preload-component.js (ecmascript, rsc)");
const _flightrenderresult = __turbopack_require__("[project]/node_modules/next/dist/server/app-render/flight-render-result.js (ecmascript, rsc)");
const _createerrorhandler = __turbopack_require__("[project]/node_modules/next/dist/server/app-render/create-error-handler.js (ecmascript, rsc)");
const _getshortdynamicparamtype = __turbopack_require__("[project]/node_modules/next/dist/server/app-render/get-short-dynamic-param-type.js (ecmascript, rsc)");
const _getsegmentparam = __turbopack_require__("[project]/node_modules/next/dist/server/app-render/get-segment-param.js (ecmascript, rsc)");
const _getcssinlinedlinktags = __turbopack_require__("[project]/node_modules/next/dist/server/app-render/get-css-inlined-link-tags.js (ecmascript, rsc)");
const _getpreloadablefonts = __turbopack_require__("[project]/node_modules/next/dist/server/app-render/get-preloadable-fonts.js (ecmascript, rsc)");
const _getscriptnoncefromheader = __turbopack_require__("[project]/node_modules/next/dist/server/app-render/get-script-nonce-from-header.js (ecmascript, rsc)");
const _rendertostring = __turbopack_require__("[project]/node_modules/next/dist/server/app-render/render-to-string.js (ecmascript, rsc)");
const _parseandvalidateflightrouterstate = __turbopack_require__("[project]/node_modules/next/dist/server/app-render/parse-and-validate-flight-router-state.js (ecmascript, rsc)");
const _validateurl = __turbopack_require__("[project]/node_modules/next/dist/server/app-render/validate-url.js (ecmascript, rsc)");
const _createflightrouterstatefromloadertree = __turbopack_require__("[project]/node_modules/next/dist/server/app-render/create-flight-router-state-from-loader-tree.js (ecmascript, rsc)");
const _actionhandler = __turbopack_require__("[project]/node_modules/next/dist/server/app-render/action-handler.js (ecmascript, rsc)");
const _nossrerror = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/no-ssr-error.js (ecmascript, rsc)");
const _log = __turbopack_require__("[project]/node_modules/next/dist/build/output/log.js (ecmascript, rsc)");
const _requestcookies = __turbopack_require__("[project]/node_modules/next/dist/server/web/spec-extension/adapters/request-cookies.js (ecmascript, rsc)");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function ErrorHtml({ children }) {
    return _react.default.createElement("html", {
        id: "__next_error__"
    }, _react.default.createElement("body", null, children));
}
function findMatchedComponent(loaderTree, componentType, depth, result) {
    const [, parallelRoutes, components] = loaderTree;
    const childKeys = Object.keys(parallelRoutes);
    result = components[componentType] || result;
    if (depth <= 0 || childKeys.length === 0) {
        return result;
    }
    for (const key of childKeys){
        const childTree = parallelRoutes[key];
        const matchedComponent = findMatchedComponent(childTree, componentType, depth - 1, result);
        if (matchedComponent) {
            return matchedComponent;
        }
    }
    return undefined;
}
function findDynamicParamFromRouterState(providedFlightRouterState, segment) {
    if (!providedFlightRouterState) {
        return null;
    }
    const treeSegment = providedFlightRouterState[0];
    if ((0, _matchsegments.canSegmentBeOverridden)(segment, treeSegment)) {
        if (!Array.isArray(treeSegment) || Array.isArray(segment)) {
            return null;
        }
        return {
            param: treeSegment[0],
            value: treeSegment[1],
            treeSegment: treeSegment,
            type: treeSegment[2]
        };
    }
    for (const parallelRouterState of Object.values(providedFlightRouterState[1])){
        const maybeDynamicParam = findDynamicParamFromRouterState(parallelRouterState, segment);
        if (maybeDynamicParam) {
            return maybeDynamicParam;
        }
    }
    return null;
}
function hasLoadingComponentInTree(tree) {
    const [, parallelRoutes, { loading }] = tree;
    if (loading) {
        return true;
    }
    return Object.values(parallelRoutes).some((parallelRoute)=>hasLoadingComponentInTree(parallelRoute));
}
async function renderToHTMLOrFlight(req, res, pagePath, query, renderOpts) {
    const isFlight = req.headers[_approuterheaders.RSC.toLowerCase()] !== undefined;
    const pathname = (0, _validateurl.validateURL)(req.url);
    const { buildManifest, subresourceIntegrityManifest, serverActionsManifest, ComponentMod, dev, nextFontManifest, supportsDynamicHTML, nextConfigOutput, serverActionsBodySizeLimit } = renderOpts;
    const appUsingSizeAdjust = !!(nextFontManifest == null ? void 0 : nextFontManifest.appUsingSizeAdjust);
    const clientReferenceManifest = renderOpts.clientReferenceManifest;
    const capturedErrors = [];
    const allCapturedErrors = [];
    const isNextExport = !!renderOpts.nextExport;
    const serverComponentsErrorHandler = (0, _createerrorhandler.createErrorHandler)({
        _source: "serverComponentsRenderer",
        dev,
        isNextExport,
        errorLogger: renderOpts.appDirDevErrorLogger,
        capturedErrors
    });
    const flightDataRendererErrorHandler = (0, _createerrorhandler.createErrorHandler)({
        _source: "flightDataRenderer",
        dev,
        isNextExport,
        errorLogger: renderOpts.appDirDevErrorLogger,
        capturedErrors
    });
    const htmlRendererErrorHandler = (0, _createerrorhandler.createErrorHandler)({
        _source: "htmlRenderer",
        dev,
        isNextExport,
        errorLogger: renderOpts.appDirDevErrorLogger,
        capturedErrors,
        allCapturedErrors
    });
    (0, _patchfetch.patchFetch)(ComponentMod);
    const generateStaticHTML = supportsDynamicHTML !== true;
    const staticGenerationAsyncStorage = ComponentMod.staticGenerationAsyncStorage;
    const requestAsyncStorage = ComponentMod.requestAsyncStorage;
    const staticGenerationBailout = ComponentMod.staticGenerationBailout;
    const wrappedRender = async ()=>{
        var _getTracer_getRootSpanAttributes, _staticGenerationStore_tags;
        const staticGenerationStore = staticGenerationAsyncStorage.getStore();
        if (!staticGenerationStore) {
            throw new Error(`Invariant: Render expects to have staticGenerationAsyncStorage, none found`);
        }
        staticGenerationStore.fetchMetrics = [];
        renderOpts.fetchMetrics = staticGenerationStore.fetchMetrics;
        const requestStore = requestAsyncStorage.getStore();
        if (!requestStore) {
            throw new Error(`Invariant: Render expects to have requestAsyncStorage, none found`);
        }
        query = {
            ...query
        };
        (0, _internalutils.stripInternalQueries)(query);
        const isPrefetch = req.headers[_approuterheaders.NEXT_ROUTER_PREFETCH.toLowerCase()] !== undefined;
        let providedFlightRouterState = isFlight ? (0, _parseandvalidateflightrouterstate.parseAndValidateFlightRouterState)(req.headers[_approuterheaders.NEXT_ROUTER_STATE_TREE.toLowerCase()]) : undefined;
        const loaderTree = ComponentMod.tree;
        const requestId = process.env.NEXT_RUNTIME === "edge" ? crypto.randomUUID() : __turbopack_require__("[project]/node_modules/next/dist/compiled/nanoid/index.cjs (ecmascript, rsc)").nanoid();
        const LayoutRouter = ComponentMod.LayoutRouter;
        const RenderFromTemplateContext = ComponentMod.RenderFromTemplateContext;
        const createSearchParamsBailoutProxy = ComponentMod.createSearchParamsBailoutProxy;
        const StaticGenerationSearchParamsBailoutProvider = ComponentMod.StaticGenerationSearchParamsBailoutProvider;
        const isStaticGeneration = staticGenerationStore.isStaticGeneration;
        const providedSearchParams = isStaticGeneration ? createSearchParamsBailoutProxy() : query;
        const searchParamsProps = {
            searchParams: providedSearchParams
        };
        const serverContexts = [
            [
                "WORKAROUND",
                null
            ]
        ];
        const pathParams = renderOpts.params;
        const getDynamicParamFromSegment = (segment)=>{
            const segmentParam = (0, _getsegmentparam.getSegmentParam)(segment);
            if (!segmentParam) {
                return null;
            }
            const key = segmentParam.param;
            let value = pathParams[key];
            if (value === "__NEXT_EMPTY_PARAM__") {
                value = undefined;
            }
            if (Array.isArray(value)) {
                value = value.map((i)=>encodeURIComponent(i));
            } else if (typeof value === "string") {
                value = encodeURIComponent(value);
            }
            if (!value) {
                if (segmentParam.type === "optional-catchall") {
                    const type = _getshortdynamicparamtype.dynamicParamTypes[segmentParam.type];
                    return {
                        param: key,
                        value: null,
                        type: type,
                        treeSegment: [
                            key,
                            "",
                            type
                        ]
                    };
                }
                return findDynamicParamFromRouterState(providedFlightRouterState, segment);
            }
            const type = (0, _getshortdynamicparamtype.getShortDynamicParamType)(segmentParam.type);
            return {
                param: key,
                value: value,
                treeSegment: [
                    key,
                    Array.isArray(value) ? value.join("/") : value,
                    type
                ],
                type: type
            };
        };
        let defaultRevalidate = false;
        const assetPrefix = renderOpts.assetPrefix || "";
        const getAssetQueryString = (addTimestamp)=>{
            const isDev = process.env.NODE_ENV === "development";
            let qs = "";
            if (isDev && addTimestamp) {
                qs += `?v=${Date.now()}`;
            }
            if (renderOpts.deploymentId) {
                qs += `${isDev ? "&" : "?"}dpl=${renderOpts.deploymentId}`;
            }
            return qs;
        };
        const createComponentAndStyles = async ({ filePath, getComponent, shouldPreload, injectedCSS })=>{
            const cssHrefs = (0, _getcssinlinedlinktags.getCssInlinedLinkTags)(clientReferenceManifest, filePath, injectedCSS);
            const styles = cssHrefs ? cssHrefs.map((href, index)=>{
                const fullHref = `${assetPrefix}/_next/${href}${getAssetQueryString(true)}`;
                const precedence = shouldPreload ? process.env.NODE_ENV === "development" ? "next_" + href : "next" : undefined;
                return _react.default.createElement("link", {
                    rel: "stylesheet",
                    href: fullHref,
                    precedence: precedence,
                    key: index
                });
            }) : null;
            const Comp = (0, _interopdefault.interopDefault)(await getComponent());
            return [
                Comp,
                styles
            ];
        };
        const getLayerAssets = ({ layoutOrPagePath, injectedCSS: injectedCSSWithCurrentLayout, injectedFontPreloadTags: injectedFontPreloadTagsWithCurrentLayout })=>{
            const stylesheets = layoutOrPagePath ? (0, _getcssinlinedlinktags.getCssInlinedLinkTags)(clientReferenceManifest, layoutOrPagePath, injectedCSSWithCurrentLayout, true) : [];
            const preloadedFontFiles = layoutOrPagePath ? (0, _getpreloadablefonts.getPreloadableFonts)(nextFontManifest, layoutOrPagePath, injectedFontPreloadTagsWithCurrentLayout) : null;
            if (preloadedFontFiles) {
                if (preloadedFontFiles.length) {
                    for(let i = 0; i < preloadedFontFiles.length; i++){
                        const fontFilename = preloadedFontFiles[i];
                        const ext = /\.(woff|woff2|eot|ttf|otf)$/.exec(fontFilename)[1];
                        const type = `font/${ext}`;
                        const href = `${assetPrefix}/_next/${fontFilename}`;
                        ComponentMod.preloadFont(href, type);
                    }
                } else {
                    try {
                        let url = new URL(assetPrefix);
                        ComponentMod.preconnect(url.origin, "anonymous");
                    } catch (error) {
                        ComponentMod.preconnect("/", "anonymous");
                    }
                }
            }
            const styles = stylesheets ? stylesheets.map((href, index)=>{
                const fullHref = `${assetPrefix}/_next/${href}${getAssetQueryString(true)}`;
                const precedence = process.env.NODE_ENV === "development" ? "next_" + href : "next";
                ComponentMod.preloadStyle(fullHref);
                return _react.default.createElement("link", {
                    rel: "stylesheet",
                    href: fullHref,
                    precedence: precedence,
                    key: index
                });
            }) : null;
            return styles;
        };
        const parseLoaderTree = (tree)=>{
            const [segment, parallelRoutes, components] = tree;
            const { layout } = components;
            let { page } = components;
            page = segment === "__DEFAULT__" ? components.defaultPage : page;
            const layoutOrPagePath = (layout == null ? void 0 : layout[1]) || (page == null ? void 0 : page[1]);
            return {
                page,
                segment,
                components,
                layoutOrPagePath,
                parallelRoutes
            };
        };
        const createComponentTree = async ({ createSegmentPath, loaderTree: tree, parentParams, firstItem, rootLayoutIncluded, injectedCSS, injectedFontPreloadTags, asNotFound })=>{
            const { page, layoutOrPagePath, segment, components, parallelRoutes } = parseLoaderTree(tree);
            const { layout, template, error, loading, "not-found": notFound } = components;
            const injectedCSSWithCurrentLayout = new Set(injectedCSS);
            const injectedFontPreloadTagsWithCurrentLayout = new Set(injectedFontPreloadTags);
            const styles = getLayerAssets({
                layoutOrPagePath,
                injectedCSS: injectedCSSWithCurrentLayout,
                injectedFontPreloadTags: injectedFontPreloadTagsWithCurrentLayout
            });
            const [Template, templateStyles] = template ? await createComponentAndStyles({
                filePath: template[1],
                getComponent: template[0],
                shouldPreload: true,
                injectedCSS: injectedCSSWithCurrentLayout
            }) : [
                _react.default.Fragment
            ];
            const [ErrorComponent, errorStyles] = error ? await createComponentAndStyles({
                filePath: error[1],
                getComponent: error[0],
                injectedCSS: injectedCSSWithCurrentLayout
            }) : [];
            const [Loading, loadingStyles] = loading ? await createComponentAndStyles({
                filePath: loading[1],
                getComponent: loading[0],
                injectedCSS: injectedCSSWithCurrentLayout
            }) : [];
            const isLayout = typeof layout !== "undefined";
            const isPage = typeof page !== "undefined";
            const [layoutOrPageMod] = await (0, _appdirmodule.getLayoutOrPageModule)(tree);
            const rootLayoutAtThisLevel = isLayout && !rootLayoutIncluded;
            const rootLayoutIncludedAtThisLevelOrAbove = rootLayoutIncluded || rootLayoutAtThisLevel;
            const [NotFound, notFoundStyles] = notFound ? await createComponentAndStyles({
                filePath: notFound[1],
                getComponent: notFound[0],
                injectedCSS: injectedCSSWithCurrentLayout
            }) : [];
            let dynamic = layoutOrPageMod == null ? void 0 : layoutOrPageMod.dynamic;
            if (nextConfigOutput === "export") {
                if (!dynamic || dynamic === "auto") {
                    dynamic = "error";
                } else if (dynamic === "force-dynamic") {
                    staticGenerationStore.forceDynamic = true;
                    staticGenerationStore.dynamicShouldError = true;
                    staticGenerationBailout(`output: export`, {
                        dynamic,
                        link: "https://nextjs.org/docs/advanced-features/static-html-export"
                    });
                }
            }
            if (typeof dynamic === "string") {
                if (dynamic === "error") {
                    staticGenerationStore.dynamicShouldError = true;
                } else if (dynamic === "force-dynamic") {
                    staticGenerationStore.forceDynamic = true;
                    staticGenerationBailout(`force-dynamic`, {
                        dynamic
                    });
                } else {
                    staticGenerationStore.dynamicShouldError = false;
                    if (dynamic === "force-static") {
                        staticGenerationStore.forceStatic = true;
                    } else {
                        staticGenerationStore.forceStatic = false;
                    }
                }
            }
            if (typeof (layoutOrPageMod == null ? void 0 : layoutOrPageMod.fetchCache) === "string") {
                staticGenerationStore.fetchCache = layoutOrPageMod == null ? void 0 : layoutOrPageMod.fetchCache;
            }
            if (typeof (layoutOrPageMod == null ? void 0 : layoutOrPageMod.revalidate) === "number") {
                defaultRevalidate = layoutOrPageMod.revalidate;
                if (typeof staticGenerationStore.revalidate === "undefined" || typeof staticGenerationStore.revalidate === "number" && staticGenerationStore.revalidate > defaultRevalidate) {
                    staticGenerationStore.revalidate = defaultRevalidate;
                }
                if (staticGenerationStore.isStaticGeneration && defaultRevalidate === 0) {
                    const { DynamicServerError } = ComponentMod.serverHooks;
                    const dynamicUsageDescription = `revalidate: 0 configured ${segment}`;
                    staticGenerationStore.dynamicUsageDescription = dynamicUsageDescription;
                    throw new DynamicServerError(dynamicUsageDescription);
                }
            }
            if (staticGenerationStore == null ? void 0 : staticGenerationStore.dynamicUsageErr) {
                throw staticGenerationStore.dynamicUsageErr;
            }
            let Component = layoutOrPageMod ? (0, _interopdefault.interopDefault)(layoutOrPageMod) : undefined;
            if (dev) {
                const { isValidElementType } = __turbopack_require__("[project]/node_modules/next/dist/compiled/react-is/index.js (ecmascript, rsc)");
                if ((isPage || typeof Component !== "undefined") && !isValidElementType(Component)) {
                    throw new Error(`The default export is not a React Component in page: "${pagePath}"`);
                }
                if (typeof ErrorComponent !== "undefined" && !isValidElementType(ErrorComponent)) {
                    throw new Error(`The default export of error is not a React Component in page: ${segment}`);
                }
                if (typeof Loading !== "undefined" && !isValidElementType(Loading)) {
                    throw new Error(`The default export of loading is not a React Component in ${segment}`);
                }
                if (typeof NotFound !== "undefined" && !isValidElementType(NotFound)) {
                    throw new Error(`The default export of notFound is not a React Component in ${segment}`);
                }
            }
            const segmentParam = getDynamicParamFromSegment(segment);
            const currentParams = segmentParam && segmentParam.value !== null ? {
                ...parentParams,
                [segmentParam.param]: segmentParam.value
            } : parentParams;
            const actualSegment = segmentParam ? segmentParam.treeSegment : segment;
            const parallelRouteMap = await Promise.all(Object.keys(parallelRoutes).map(async (parallelRouteKey)=>{
                const currentSegmentPath = firstItem ? [
                    parallelRouteKey
                ] : [
                    actualSegment,
                    parallelRouteKey
                ];
                const parallelRoute = parallelRoutes[parallelRouteKey];
                const childSegment = parallelRoute[0];
                const childSegmentParam = getDynamicParamFromSegment(childSegment);
                if (isPrefetch && (Loading || !hasLoadingComponentInTree(parallelRoute))) {
                    const childProp = {
                        current: null,
                        segment: (0, _createflightrouterstatefromloadertree.addSearchParamsIfPageSegment)(childSegmentParam ? childSegmentParam.treeSegment : childSegment, query)
                    };
                    return [
                        parallelRouteKey,
                        _react.default.createElement(LayoutRouter, {
                            parallelRouterKey: parallelRouteKey,
                            segmentPath: createSegmentPath(currentSegmentPath),
                            loading: Loading ? _react.default.createElement(Loading, null) : undefined,
                            loadingStyles: loadingStyles,
                            hasLoading: Boolean(Loading),
                            error: ErrorComponent,
                            errorStyles: errorStyles,
                            template: _react.default.createElement(Template, null, _react.default.createElement(RenderFromTemplateContext, null)),
                            templateStyles: templateStyles,
                            notFound: NotFound ? _react.default.createElement(NotFound, null) : undefined,
                            notFoundStyles: notFoundStyles,
                            childProp: childProp
                        })
                    ];
                }
                const { Component: ChildComponent, styles: childStyles } = await createComponentTree({
                    createSegmentPath: (child)=>{
                        return createSegmentPath([
                            ...currentSegmentPath,
                            ...child
                        ]);
                    },
                    loaderTree: parallelRoute,
                    parentParams: currentParams,
                    rootLayoutIncluded: rootLayoutIncludedAtThisLevelOrAbove,
                    injectedCSS: injectedCSSWithCurrentLayout,
                    injectedFontPreloadTags: injectedFontPreloadTagsWithCurrentLayout,
                    asNotFound
                });
                const childProp = {
                    current: _react.default.createElement(ChildComponent, null),
                    segment: (0, _createflightrouterstatefromloadertree.addSearchParamsIfPageSegment)(childSegmentParam ? childSegmentParam.treeSegment : childSegment, query)
                };
                const segmentPath = createSegmentPath(currentSegmentPath);
                return [
                    parallelRouteKey,
                    _react.default.createElement(LayoutRouter, {
                        parallelRouterKey: parallelRouteKey,
                        segmentPath: segmentPath,
                        error: ErrorComponent,
                        errorStyles: errorStyles,
                        loading: Loading ? _react.default.createElement(Loading, null) : undefined,
                        loadingStyles: loadingStyles,
                        hasLoading: Boolean(Loading),
                        template: _react.default.createElement(Template, null, _react.default.createElement(RenderFromTemplateContext, null)),
                        templateStyles: templateStyles,
                        notFound: NotFound ? _react.default.createElement(NotFound, null) : undefined,
                        notFoundStyles: notFoundStyles,
                        childProp: childProp,
                        styles: childStyles
                    })
                ];
            }));
            const parallelRouteComponents = parallelRouteMap.reduce((list, [parallelRouteKey, Comp])=>{
                list[parallelRouteKey] = Comp;
                return list;
            }, {});
            if (!Component) {
                return {
                    Component: ()=>_react.default.createElement(_react.default.Fragment, null, parallelRouteComponents.children),
                    styles
                };
            }
            const isClientComponent = (0, _clientreference.isClientReference)(layoutOrPageMod);
            let isLeaf = process.env.NODE_ENV === "production" ? !segment && !rootLayoutIncluded : !parallelRouteMap.length && segment === "__DEFAULT__";
            let notFoundComponent = {};
            if (NotFound && (asNotFound === "force" || asNotFound && isLeaf)) {
                notFoundComponent = {
                    children: _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("meta", {
                        name: "robots",
                        content: "noindex"
                    }), process.env.NODE_ENV === "development" && _react.default.createElement("meta", {
                        name: "next-error",
                        content: "not-found"
                    }), notFoundStyles, _react.default.createElement(NotFound, null))
                };
            }
            const props = {
                ...parallelRouteComponents,
                ...notFoundComponent,
                params: currentParams,
                ...(()=>{
                    if (isClientComponent && isStaticGeneration) {
                        return {};
                    }
                    if (isPage) {
                        return searchParamsProps;
                    }
                })()
            };
            if (!isClientComponent) {
                Component = await Promise.resolve().then(()=>(0, _preloadcomponent.preloadComponent)(Component, props));
            }
            return {
                Component: ()=>{
                    return _react.default.createElement(_react.default.Fragment, null, isPage && isClientComponent && isStaticGeneration ? _react.default.createElement(StaticGenerationSearchParamsBailoutProvider, {
                        propsForComponent: props,
                        Component: Component
                    }) : _react.default.createElement(Component, props), null);
                },
                styles
            };
        };
        const generateFlight = async (options)=>{
            const walkTreeWithFlightRouterState = async ({ createSegmentPath, loaderTreeToFilter, parentParams, isFirst, flightRouterState, parentRendered, rscPayloadHead, injectedCSS, injectedFontPreloadTags, rootLayoutIncluded, asNotFound })=>{
                const [segment, parallelRoutes, components] = loaderTreeToFilter;
                const parallelRoutesKeys = Object.keys(parallelRoutes);
                const { layout } = components;
                const isLayout = typeof layout !== "undefined";
                const rootLayoutAtThisLevel = isLayout && !rootLayoutIncluded;
                const rootLayoutIncludedAtThisLevelOrAbove = rootLayoutIncluded || rootLayoutAtThisLevel;
                const segmentParam = getDynamicParamFromSegment(segment);
                const currentParams = segmentParam && segmentParam.value !== null ? {
                    ...parentParams,
                    [segmentParam.param]: segmentParam.value
                } : parentParams;
                const actualSegment = (0, _createflightrouterstatefromloadertree.addSearchParamsIfPageSegment)(segmentParam ? segmentParam.treeSegment : segment, query);
                const renderComponentsOnThisLevel = !flightRouterState || !(0, _matchsegments.matchSegment)(actualSegment, flightRouterState[0]) || parallelRoutesKeys.length === 0 || flightRouterState[3] === "refetch";
                if (!parentRendered && renderComponentsOnThisLevel) {
                    const overriddenSegment = flightRouterState && (0, _matchsegments.canSegmentBeOverridden)(actualSegment, flightRouterState[0]) ? flightRouterState[0] : null;
                    return [
                        [
                            overriddenSegment ?? actualSegment,
                            (0, _createflightrouterstatefromloadertree.createFlightRouterStateFromLoaderTree)(loaderTreeToFilter, getDynamicParamFromSegment, query),
                            isPrefetch && !Boolean(components.loading) ? null : _react.default.createElement(async ()=>{
                                const { Component } = await createComponentTree({
                                    createSegmentPath,
                                    loaderTree: loaderTreeToFilter,
                                    parentParams: currentParams,
                                    firstItem: isFirst,
                                    injectedCSS,
                                    injectedFontPreloadTags,
                                    rootLayoutIncluded,
                                    asNotFound
                                });
                                return _react.default.createElement(Component, null);
                            }),
                            isPrefetch && !Boolean(components.loading) ? null : (()=>{
                                const { layoutOrPagePath } = parseLoaderTree(loaderTreeToFilter);
                                const styles = getLayerAssets({
                                    layoutOrPagePath,
                                    injectedCSS: new Set(injectedCSS),
                                    injectedFontPreloadTags: new Set(injectedFontPreloadTags)
                                });
                                return _react.default.createElement(_react.default.Fragment, null, styles, rscPayloadHead);
                            })()
                        ]
                    ];
                }
                const layoutPath = layout == null ? void 0 : layout[1];
                const injectedCSSWithCurrentLayout = new Set(injectedCSS);
                const injectedFontPreloadTagsWithCurrentLayout = new Set(injectedFontPreloadTags);
                if (layoutPath) {
                    (0, _getcssinlinedlinktags.getCssInlinedLinkTags)(clientReferenceManifest, layoutPath, injectedCSSWithCurrentLayout, true);
                    (0, _getpreloadablefonts.getPreloadableFonts)(nextFontManifest, layoutPath, injectedFontPreloadTagsWithCurrentLayout);
                }
                const paths = (await Promise.all(parallelRoutesKeys.map(async (parallelRouteKey)=>{
                    const parallelRoute = parallelRoutes[parallelRouteKey];
                    const currentSegmentPath = isFirst ? [
                        parallelRouteKey
                    ] : [
                        actualSegment,
                        parallelRouteKey
                    ];
                    const path = await walkTreeWithFlightRouterState({
                        createSegmentPath: (child)=>{
                            return createSegmentPath([
                                ...currentSegmentPath,
                                ...child
                            ]);
                        },
                        loaderTreeToFilter: parallelRoute,
                        parentParams: currentParams,
                        flightRouterState: flightRouterState && flightRouterState[1][parallelRouteKey],
                        parentRendered: parentRendered || renderComponentsOnThisLevel,
                        isFirst: false,
                        rscPayloadHead,
                        injectedCSS: injectedCSSWithCurrentLayout,
                        injectedFontPreloadTags: injectedFontPreloadTagsWithCurrentLayout,
                        rootLayoutIncluded: rootLayoutIncludedAtThisLevelOrAbove,
                        asNotFound
                    });
                    return path.map((item)=>{
                        if (item[0] === "__DEFAULT__" && flightRouterState && !!flightRouterState[1][parallelRouteKey][0] && flightRouterState[1][parallelRouteKey][3] !== "refetch") {
                            return null;
                        }
                        return [
                            actualSegment,
                            parallelRouteKey,
                            ...item
                        ];
                    }).filter(Boolean);
                }))).flat();
                return paths;
            };
            const flightData = (options == null ? void 0 : options.skipFlight) ? null : (await walkTreeWithFlightRouterState({
                createSegmentPath: (child)=>child,
                loaderTreeToFilter: loaderTree,
                parentParams: {},
                flightRouterState: providedFlightRouterState,
                isFirst: true,
                rscPayloadHead: _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_metadata.MetadataTree, {
                    key: requestId,
                    tree: loaderTree,
                    pathname: pathname,
                    searchParams: providedSearchParams,
                    getDynamicParamFromSegment: getDynamicParamFromSegment,
                    appUsingSizeAdjust: appUsingSizeAdjust
                })),
                injectedCSS: new Set(),
                injectedFontPreloadTags: new Set(),
                rootLayoutIncluded: false,
                asNotFound: pagePath === "/404" || (options == null ? void 0 : options.asNotFound)
            })).map((path)=>path.slice(1));
            const buildIdFlightDataPair = [
                renderOpts.buildId,
                flightData
            ];
            const readable = ComponentMod.renderToReadableStream(options ? [
                options.actionResult,
                buildIdFlightDataPair
            ] : buildIdFlightDataPair, clientReferenceManifest.clientModules, {
                context: serverContexts,
                onError: flightDataRendererErrorHandler
            }).pipeThrough((0, _nodewebstreamshelper.createBufferedTransformStream)());
            return new _flightrenderresult.FlightRenderResult(readable);
        };
        if (isFlight && !staticGenerationStore.isStaticGeneration) {
            return generateFlight();
        }
        const AppRouter = ComponentMod.AppRouter;
        const GlobalError = ComponentMod.GlobalError;
        const serverComponentsInlinedTransformStream = new TransformStream();
        const csp = req.headers["content-security-policy"];
        let nonce;
        if (csp && typeof csp === "string") {
            nonce = (0, _getscriptnoncefromheader.getScriptNonceFromHeader)(csp);
        }
        const serverComponentsRenderOpts = {
            transformStream: serverComponentsInlinedTransformStream,
            clientReferenceManifest,
            serverContexts,
            rscChunks: []
        };
        const validateRootLayout = dev ? {
            validateRootLayout: {
                assetPrefix: renderOpts.assetPrefix,
                getTree: ()=>(0, _createflightrouterstatefromloadertree.createFlightRouterStateFromLoaderTree)(loaderTree, getDynamicParamFromSegment, query)
            }
        } : {};
        async function getNotFound(tree, injectedCSS, requestPathname) {
            const depth = requestPathname.split("/").length - 2;
            const notFound = findMatchedComponent(tree, "not-found", depth);
            const [NotFound, notFoundStyles] = notFound ? await createComponentAndStyles({
                filePath: notFound[1],
                getComponent: notFound[0],
                injectedCSS
            }) : [];
            return [
                NotFound,
                notFoundStyles
            ];
        }
        async function getRootLayout(tree, injectedCSS, injectedFontPreloadTags) {
            const { layout } = tree[2];
            const layoutPath = layout == null ? void 0 : layout[1];
            const styles = getLayerAssets({
                layoutOrPagePath: layoutPath,
                injectedCSS: new Set(injectedCSS),
                injectedFontPreloadTags: new Set(injectedFontPreloadTags)
            });
            const rootLayoutModule = layout == null ? void 0 : layout[0];
            const RootLayout = rootLayoutModule ? (0, _interopdefault.interopDefault)(await rootLayoutModule()) : null;
            return [
                RootLayout,
                styles
            ];
        }
        const ServerComponentsRenderer = (0, _createservercomponentsrenderer.createServerComponentRenderer)(async (props)=>{
            const injectedCSS = new Set();
            const injectedFontPreloadTags = new Set();
            const { Component: ComponentTree, styles } = await createComponentTree({
                createSegmentPath: (child)=>child,
                loaderTree,
                parentParams: {},
                firstItem: true,
                injectedCSS,
                injectedFontPreloadTags,
                rootLayoutIncluded: false,
                asNotFound: props.asNotFound
            });
            const createMetadata = (tree, errorType)=>_react.default.createElement(_metadata.MetadataTree, {
                    key: requestId,
                    tree: tree,
                    errorType: errorType,
                    pathname: pathname,
                    searchParams: providedSearchParams,
                    getDynamicParamFromSegment: getDynamicParamFromSegment,
                    appUsingSizeAdjust: appUsingSizeAdjust
                });
            const initialTree = (0, _createflightrouterstatefromloadertree.createFlightRouterStateFromLoaderTree)(loaderTree, getDynamicParamFromSegment, query);
            return _react.default.createElement(_react.default.Fragment, null, styles, _react.default.createElement(AppRouter, {
                buildId: renderOpts.buildId,
                assetPrefix: assetPrefix,
                initialCanonicalUrl: pathname,
                initialTree: initialTree,
                initialHead: createMetadata(loaderTree, props.asNotFound ? "not-found" : undefined),
                globalErrorComponent: GlobalError
            }, _react.default.createElement(ComponentTree, null)));
        }, ComponentMod, serverComponentsRenderOpts, serverComponentsErrorHandler, nonce);
        const { HeadManagerContext } = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/head-manager-context.js (ecmascript, rsc)");
        const serverInsertedHTMLCallbacks = new Set();
        function InsertedHTML({ children }) {
            const addInsertedHtml = _react.default.useCallback((handler)=>{
                serverInsertedHTMLCallbacks.add(handler);
            }, []);
            return _react.default.createElement(HeadManagerContext.Provider, {
                value: {
                    appDir: true,
                    nonce
                }
            }, _react.default.createElement(_serverinsertedhtml.ServerInsertedHTMLContext.Provider, {
                value: addInsertedHtml
            }, children));
        }
        (_getTracer_getRootSpanAttributes = (0, _tracer.getTracer)().getRootSpanAttributes()) == null ? void 0 : _getTracer_getRootSpanAttributes.set("next.route", pagePath);
        const bodyResult = (0, _tracer.getTracer)().wrap(_constants.AppRenderSpan.getBodyResult, {
            spanName: `render route (app) ${pagePath}`,
            attributes: {
                "next.route": pagePath
            }
        }, async ({ asNotFound })=>{
            const polyfills = buildManifest.polyfillFiles.filter((polyfill)=>polyfill.endsWith(".js") && !polyfill.endsWith(".module.js")).map((polyfill)=>{
                return {
                    src: `${assetPrefix}/_next/${polyfill}${getAssetQueryString(false)}`,
                    integrity: subresourceIntegrityManifest == null ? void 0 : subresourceIntegrityManifest[polyfill]
                };
            });
            const content = _react.default.createElement(InsertedHTML, null, _react.default.createElement(ServerComponentsRenderer, {
                asNotFound: asNotFound
            }));
            let polyfillsFlushed = false;
            let flushedErrorMetaTagsUntilIndex = 0;
            const getServerInsertedHTML = (serverCapturedErrors)=>{
                const errorMetaTags = [];
                for(; flushedErrorMetaTagsUntilIndex < serverCapturedErrors.length; flushedErrorMetaTagsUntilIndex++){
                    const error = serverCapturedErrors[flushedErrorMetaTagsUntilIndex];
                    if ((0, _notfound.isNotFoundError)(error)) {
                        errorMetaTags.push(_react.default.createElement("meta", {
                            name: "robots",
                            content: "noindex",
                            key: error.digest
                        }), process.env.NODE_ENV === "development" ? _react.default.createElement("meta", {
                            name: "next-error",
                            content: "not-found",
                            key: "next-error"
                        }) : null);
                    } else if ((0, _redirect.isRedirectError)(error)) {
                        const redirectUrl = (0, _redirect.getURLFromRedirectError)(error);
                        if (redirectUrl) {
                            errorMetaTags.push(_react.default.createElement("meta", {
                                httpEquiv: "refresh",
                                content: `0;url=${redirectUrl}`,
                                key: error.digest
                            }));
                        }
                    }
                }
                const flushed = (0, _rendertostring.renderToString)({
                    ReactDOMServer: __turbopack_require__("[project]/node_modules/next/dist/compiled/react-dom/server.edge.js (ecmascript, rsc)"),
                    element: _react.default.createElement(_react.default.Fragment, null, Array.from(serverInsertedHTMLCallbacks).map((callback, index)=>_react.default.createElement(_react.default.Fragment, {
                            key: "_next_insert" + index
                        }, callback())), polyfillsFlushed ? null : polyfills == null ? void 0 : polyfills.map((polyfill)=>{
                        return _react.default.createElement("script", {
                            key: polyfill.src,
                            src: polyfill.src,
                            integrity: polyfill.integrity,
                            noModule: true,
                            nonce: nonce
                        });
                    }), errorMetaTags)
                });
                polyfillsFlushed = true;
                return flushed;
            };
            try {
                const renderStream = await (0, _nodewebstreamshelper.renderToInitialStream)({
                    ReactDOMServer: __turbopack_require__("[project]/node_modules/next/dist/compiled/react-dom/server.edge.js (ecmascript, rsc)"),
                    element: content,
                    streamOptions: {
                        onError: htmlRendererErrorHandler,
                        nonce,
                        bootstrapScripts: [
                            ...subresourceIntegrityManifest ? buildManifest.rootMainFiles.map((src)=>({
                                    src: `${assetPrefix}/_next/` + src + getAssetQueryString(false),
                                    integrity: subresourceIntegrityManifest[src]
                                })) : buildManifest.rootMainFiles.map((src)=>`${assetPrefix}/_next/` + src + getAssetQueryString(false))
                        ]
                    }
                });
                const result = await (0, _nodewebstreamshelper.continueFromInitialStream)(renderStream, {
                    dataStream: serverComponentsRenderOpts.transformStream.readable,
                    generateStaticHTML: staticGenerationStore.isStaticGeneration || generateStaticHTML,
                    getServerInsertedHTML: ()=>getServerInsertedHTML(allCapturedErrors),
                    serverInsertedHTMLToHead: true,
                    ...validateRootLayout
                });
                return result;
            } catch (err) {
                var _err_message;
                if (err.code === "NEXT_STATIC_GEN_BAILOUT" || ((_err_message = err.message) == null ? void 0 : _err_message.includes("https://nextjs.org/docs/advanced-features/static-html-export"))) {
                    throw err;
                }
                if (err.digest === _nossrerror.NEXT_DYNAMIC_NO_SSR_CODE) {
                    (0, _log.warn)(`Entire page ${pagePath} deopted into client-side rendering. https://nextjs.org/docs/messages/deopted-into-client-rendering`, pagePath);
                }
                if ((0, _notfound.isNotFoundError)(err)) {
                    res.statusCode = 404;
                }
                let hasRedirectError = false;
                if ((0, _redirect.isRedirectError)(err)) {
                    hasRedirectError = true;
                    res.statusCode = 307;
                    if (err.mutableCookies) {
                        const headers = new Headers();
                        if ((0, _requestcookies.appendMutableCookies)(headers, err.mutableCookies)) {
                            res.setHeader("set-cookie", Array.from(headers.values()));
                        }
                    }
                    res.setHeader("Location", (0, _redirect.getURLFromRedirectError)(err));
                }
                const is404 = res.statusCode === 404;
                const injectedCSS = new Set();
                const injectedFontPreloadTags = new Set();
                const [RootLayout, rootStyles] = await getRootLayout(loaderTree, injectedCSS, injectedFontPreloadTags);
                const [NotFound, notFoundStyles] = await getNotFound(loaderTree, injectedCSS, pathname);
                const serverErrorComponentsRenderOpts = {
                    ...serverComponentsRenderOpts,
                    rscChunks: [],
                    transformStream: is404 ? new TransformStream() : (0, _nodewebstreamshelper.cloneTransformStream)(serverComponentsRenderOpts.transformStream)
                };
                const errorType = is404 ? "not-found" : hasRedirectError ? "redirect" : undefined;
                const errorMeta = _react.default.createElement(_react.default.Fragment, null, res.statusCode >= 400 && _react.default.createElement("meta", {
                    name: "robots",
                    content: "noindex"
                }), process.env.NODE_ENV === "development" && _react.default.createElement("meta", {
                    name: "next-error",
                    content: "not-found"
                }));
                const ErrorPage = (0, _createservercomponentsrenderer.createServerComponentRenderer)(async ()=>{
                    const head = _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_metadata.MetadataTree, {
                        key: requestId,
                        tree: loaderTree,
                        pathname: pathname,
                        errorType: errorType,
                        searchParams: providedSearchParams,
                        getDynamicParamFromSegment: getDynamicParamFromSegment,
                        appUsingSizeAdjust: appUsingSizeAdjust
                    }), errorMeta);
                    const notFoundLoaderTree = is404 ? [
                        "__DEFAULT__",
                        {},
                        loaderTree[2]
                    ] : loaderTree;
                    const initialTree = (0, _createflightrouterstatefromloadertree.createFlightRouterStateFromLoaderTree)(notFoundLoaderTree, getDynamicParamFromSegment, query);
                    const GlobalNotFound = NotFound || _error.NotFound;
                    const ErrorLayout = RootLayout || ErrorHtml;
                    const notFoundElement = _react.default.createElement(ErrorLayout, {
                        params: {}
                    }, rootStyles, notFoundStyles, _react.default.createElement(GlobalNotFound, null));
                    return _react.default.createElement(AppRouter, {
                        buildId: renderOpts.buildId,
                        assetPrefix: assetPrefix,
                        initialCanonicalUrl: pathname,
                        initialTree: initialTree,
                        initialHead: head,
                        globalErrorComponent: GlobalError
                    }, is404 ? notFoundElement : _react.default.createElement(ErrorHtml, {
                        head: head
                    }));
                }, ComponentMod, serverErrorComponentsRenderOpts, serverComponentsErrorHandler, nonce);
                try {
                    const renderStream = await (0, _nodewebstreamshelper.renderToInitialStream)({
                        ReactDOMServer: __turbopack_require__("[project]/node_modules/next/dist/compiled/react-dom/server.edge.js (ecmascript, rsc)"),
                        element: _react.default.createElement(ErrorPage, null),
                        streamOptions: {
                            nonce,
                            bootstrapScripts: subresourceIntegrityManifest ? buildManifest.rootMainFiles.map((src)=>({
                                    src: `${assetPrefix}/_next/` + src + getAssetQueryString(false),
                                    integrity: subresourceIntegrityManifest[src]
                                })) : buildManifest.rootMainFiles.map((src)=>`${assetPrefix}/_next/` + src + getAssetQueryString(false))
                        }
                    });
                    return await (0, _nodewebstreamshelper.continueFromInitialStream)(renderStream, {
                        dataStream: serverErrorComponentsRenderOpts.transformStream.readable,
                        generateStaticHTML: staticGenerationStore.isStaticGeneration,
                        getServerInsertedHTML: ()=>getServerInsertedHTML([]),
                        serverInsertedHTMLToHead: true,
                        ...validateRootLayout
                    });
                } catch (finalErr) {
                    if (process.env.NODE_ENV !== "production" && (0, _notfound.isNotFoundError)(finalErr)) {
                        const bailOnNotFound = __turbopack_require__("[project]/node_modules/next/dist/client/components/dev-root-not-found-boundary.js (ecmascript, rsc)").bailOnNotFound;
                        bailOnNotFound();
                    }
                    throw finalErr;
                }
            }
        });
        const actionRequestResult = await (0, _actionhandler.handleAction)({
            req,
            res,
            ComponentMod,
            pathname: renderOpts.pathname,
            serverActionsManifest,
            generateFlight,
            staticGenerationStore,
            requestStore,
            serverActionsBodySizeLimit
        });
        if (actionRequestResult === "not-found") {
            return new _renderresult.default(await bodyResult({
                asNotFound: "force"
            }));
        } else if (actionRequestResult) {
            return actionRequestResult;
        }
        const renderResult = new _renderresult.default(await bodyResult({
            asNotFound: pagePath === "/404"
        }));
        if (staticGenerationStore.pendingRevalidates) {
            await Promise.all(staticGenerationStore.pendingRevalidates);
        }
        (0, _patchfetch.addImplicitTags)(staticGenerationStore);
        renderOpts.fetchTags = (_staticGenerationStore_tags = staticGenerationStore.tags) == null ? void 0 : _staticGenerationStore_tags.join(",");
        if (staticGenerationStore.isStaticGeneration) {
            const htmlResult = await (0, _nodewebstreamshelper.streamToBufferedResult)(renderResult);
            if (capturedErrors.length > 0) {
                throw capturedErrors[0];
            }
            const filteredFlightData = await (0, _nodewebstreamshelper.streamToBufferedResult)(await generateFlight());
            if (staticGenerationStore.forceStatic === false) {
                staticGenerationStore.revalidate = 0;
            }
            const extraRenderResultMeta = {
                pageData: filteredFlightData,
                revalidate: staticGenerationStore.revalidate ?? defaultRevalidate
            };
            if (extraRenderResultMeta.revalidate === 0) {
                extraRenderResultMeta.staticBailoutInfo = {
                    description: staticGenerationStore.dynamicUsageDescription,
                    stack: staticGenerationStore.dynamicUsageStack
                };
            }
            return new _renderresult.default(htmlResult, {
                ...extraRenderResultMeta
            });
        }
        return renderResult;
    };
    return _requestasyncstoragewrapper.RequestAsyncStorageWrapper.wrap(requestAsyncStorage, {
        req,
        res,
        renderOpts
    }, ()=>_staticgenerationasyncstoragewrapper.StaticGenerationAsyncStorageWrapper.wrap(staticGenerationAsyncStorage, {
            pathname: pagePath,
            renderOpts
        }, ()=>wrappedRender()));
}

}.call(this) }),
"[project]/node_modules/void-elements/index.js (ecmascript, rsc)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

module.exports = {
    "area": true,
    "base": true,
    "br": true,
    "col": true,
    "embed": true,
    "hr": true,
    "img": true,
    "input": true,
    "link": true,
    "meta": true,
    "param": true,
    "source": true,
    "track": true,
    "wbr": true
};

}.call(this) }),
"[project]/node_modules/next/dist/server/stream-utils/encode-decode.js (ecmascript, rsc)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    encodeText: null,
    decodeText: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    encodeText: function() {
        return encodeText;
    },
    decodeText: function() {
        return decodeText;
    }
});
function encodeText(input) {
    return new TextEncoder().encode(input);
}
function decodeText(input, textDecoder) {
    return textDecoder.decode(input, {
        stream: true
    });
}

}.call(this) }),
"[project]/node_modules/next/dist/server/stream-utils/node-web-streams-helper.js (ecmascript, rsc)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    streamToBufferedResult: null,
    cloneTransformStream: null,
    readableStreamTee: null,
    chainStreams: null,
    streamFromArray: null,
    streamToString: null,
    createBufferedTransformStream: null,
    createInsertedHTMLStream: null,
    renderToInitialStream: null,
    createDeferredSuffixStream: null,
    createInlineDataStream: null,
    createSuffixStream: null,
    createRootLayoutValidatorStream: null,
    continueFromInitialStream: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    streamToBufferedResult: function() {
        return streamToBufferedResult;
    },
    cloneTransformStream: function() {
        return cloneTransformStream;
    },
    readableStreamTee: function() {
        return readableStreamTee;
    },
    chainStreams: function() {
        return chainStreams;
    },
    streamFromArray: function() {
        return streamFromArray;
    },
    streamToString: function() {
        return streamToString;
    },
    createBufferedTransformStream: function() {
        return createBufferedTransformStream;
    },
    createInsertedHTMLStream: function() {
        return createInsertedHTMLStream;
    },
    renderToInitialStream: function() {
        return renderToInitialStream;
    },
    createDeferredSuffixStream: function() {
        return createDeferredSuffixStream;
    },
    createInlineDataStream: function() {
        return createInlineDataStream;
    },
    createSuffixStream: function() {
        return createSuffixStream;
    },
    createRootLayoutValidatorStream: function() {
        return createRootLayoutValidatorStream;
    },
    continueFromInitialStream: function() {
        return continueFromInitialStream;
    }
});
const _nonnullable = __turbopack_require__("[project]/node_modules/next/dist/lib/non-nullable.js (ecmascript, rsc)");
const _tracer = __turbopack_require__("[project]/node_modules/next/dist/server/lib/trace/tracer.js (ecmascript, rsc)");
const _constants = __turbopack_require__("[project]/node_modules/next/dist/server/lib/trace/constants.js (ecmascript, rsc)");
const _encodedecode = __turbopack_require__("[project]/node_modules/next/dist/server/stream-utils/encode-decode.js (ecmascript, rsc)");
const queueTask = process.env.NEXT_RUNTIME === "edge" ? globalThis.setTimeout : setImmediate;
const streamToBufferedResult = async (renderResult)=>{
    const renderChunks = [];
    const textDecoder = new TextDecoder();
    const writable = {
        write (chunk) {
            renderChunks.push((0, _encodedecode.decodeText)(chunk, textDecoder));
        },
        end () {},
        destroy () {}
    };
    await renderResult.pipe(writable);
    return renderChunks.join("");
};
function cloneTransformStream(source) {
    const sourceReader = source.readable.getReader();
    const clone = new TransformStream({
        async start (controller) {
            while(true){
                const { done, value } = await sourceReader.read();
                if (done) {
                    break;
                }
                controller.enqueue(value);
            }
        },
        transform () {}
    });
    return clone;
}
function readableStreamTee(readable) {
    const transformStream = new TransformStream();
    const transformStream2 = new TransformStream();
    const writer = transformStream.writable.getWriter();
    const writer2 = transformStream2.writable.getWriter();
    const reader = readable.getReader();
    function read() {
        reader.read().then(({ done, value })=>{
            if (done) {
                writer.close();
                writer2.close();
                return;
            }
            writer.write(value);
            writer2.write(value);
            read();
        });
    }
    read();
    return [
        transformStream.readable,
        transformStream2.readable
    ];
}
function chainStreams(streams) {
    const { readable, writable } = new TransformStream();
    let promise = Promise.resolve();
    for(let i = 0; i < streams.length; ++i){
        promise = promise.then(()=>streams[i].pipeTo(writable, {
                preventClose: i + 1 < streams.length
            }));
    }
    return readable;
}
function streamFromArray(strings) {
    const { readable, writable } = new TransformStream();
    const writer = writable.getWriter();
    strings.forEach((str)=>writer.write((0, _encodedecode.encodeText)(str)));
    writer.close();
    return readable;
}
async function streamToString(stream) {
    const reader = stream.getReader();
    const textDecoder = new TextDecoder();
    let bufferedString = "";
    while(true){
        const { done, value } = await reader.read();
        if (done) {
            return bufferedString;
        }
        bufferedString += (0, _encodedecode.decodeText)(value, textDecoder);
    }
}
function createBufferedTransformStream(transform = (v)=>v) {
    let bufferedString = "";
    let pendingFlush = null;
    const flushBuffer = (controller)=>{
        if (!pendingFlush) {
            pendingFlush = new Promise((resolve)=>{
                setTimeout(async ()=>{
                    const buffered = await transform(bufferedString);
                    controller.enqueue((0, _encodedecode.encodeText)(buffered));
                    bufferedString = "";
                    pendingFlush = null;
                    resolve();
                }, 0);
            });
        }
        return pendingFlush;
    };
    const textDecoder = new TextDecoder();
    return new TransformStream({
        transform (chunk, controller) {
            bufferedString += (0, _encodedecode.decodeText)(chunk, textDecoder);
            flushBuffer(controller);
        },
        flush () {
            if (pendingFlush) {
                return pendingFlush;
            }
        }
    });
}
function createInsertedHTMLStream(getServerInsertedHTML) {
    return new TransformStream({
        async transform (chunk, controller) {
            const insertedHTMLChunk = (0, _encodedecode.encodeText)(await getServerInsertedHTML());
            controller.enqueue(insertedHTMLChunk);
            controller.enqueue(chunk);
        }
    });
}
function renderToInitialStream({ ReactDOMServer, element, streamOptions }) {
    return (0, _tracer.getTracer)().trace(_constants.AppRenderSpan.renderToReadableStream, async ()=>ReactDOMServer.renderToReadableStream(element, streamOptions));
}
function createHeadInsertionTransformStream(insert) {
    let inserted = false;
    let freezing = false;
    const textDecoder = new TextDecoder();
    return new TransformStream({
        async transform (chunk, controller) {
            if (freezing) {
                controller.enqueue(chunk);
                return;
            }
            const insertion = await insert();
            if (inserted) {
                controller.enqueue((0, _encodedecode.encodeText)(insertion));
                controller.enqueue(chunk);
                freezing = true;
            } else {
                const content = (0, _encodedecode.decodeText)(chunk, textDecoder);
                const index = content.indexOf("</head>");
                if (index !== -1) {
                    const insertedHeadContent = content.slice(0, index) + insertion + content.slice(index);
                    controller.enqueue((0, _encodedecode.encodeText)(insertedHeadContent));
                    freezing = true;
                    inserted = true;
                }
            }
            if (!inserted) {
                controller.enqueue(chunk);
            } else {
                queueTask(()=>{
                    freezing = false;
                });
            }
        },
        async flush (controller) {
            const insertion = await insert();
            if (insertion) {
                controller.enqueue((0, _encodedecode.encodeText)(insertion));
            }
        }
    });
}
function createDeferredSuffixStream(suffix) {
    let suffixFlushed = false;
    let suffixFlushTask = null;
    return new TransformStream({
        transform (chunk, controller) {
            controller.enqueue(chunk);
            if (!suffixFlushed && suffix) {
                suffixFlushed = true;
                suffixFlushTask = new Promise((res)=>{
                    setTimeout(()=>{
                        controller.enqueue((0, _encodedecode.encodeText)(suffix));
                        res();
                    });
                });
            }
        },
        flush (controller) {
            if (suffixFlushTask) return suffixFlushTask;
            if (!suffixFlushed && suffix) {
                suffixFlushed = true;
                controller.enqueue((0, _encodedecode.encodeText)(suffix));
            }
        }
    });
}
function createInlineDataStream(dataStream) {
    let dataStreamFinished = null;
    return new TransformStream({
        transform (chunk, controller) {
            controller.enqueue(chunk);
            if (!dataStreamFinished) {
                const dataStreamReader = dataStream.getReader();
                dataStreamFinished = new Promise((res)=>setTimeout(async ()=>{
                        try {
                            while(true){
                                const { done, value } = await dataStreamReader.read();
                                if (done) {
                                    return res();
                                }
                                controller.enqueue(value);
                            }
                        } catch (err) {
                            controller.error(err);
                        }
                        res();
                    }, 0));
            }
        },
        flush () {
            if (dataStreamFinished) {
                return dataStreamFinished;
            }
        }
    });
}
function createSuffixStream(suffix) {
    let foundSuffix = false;
    const textDecoder = new TextDecoder();
    return new TransformStream({
        transform (chunk, controller) {
            if (!suffix || foundSuffix) {
                return controller.enqueue(chunk);
            }
            const content = (0, _encodedecode.decodeText)(chunk, textDecoder);
            if (content.endsWith(suffix)) {
                foundSuffix = true;
                const contentWithoutSuffix = content.slice(0, -suffix.length);
                controller.enqueue((0, _encodedecode.encodeText)(contentWithoutSuffix));
            } else {
                controller.enqueue(chunk);
            }
        },
        flush (controller) {
            if (suffix) {
                controller.enqueue((0, _encodedecode.encodeText)(suffix));
            }
        }
    });
}
function createRootLayoutValidatorStream(assetPrefix = "", getTree) {
    let foundHtml = false;
    let foundBody = false;
    const textDecoder = new TextDecoder();
    return new TransformStream({
        async transform (chunk, controller) {
            if (!foundHtml || !foundBody) {
                const content = (0, _encodedecode.decodeText)(chunk, textDecoder);
                if (!foundHtml && content.includes("<html")) {
                    foundHtml = true;
                }
                if (!foundBody && content.includes("<body")) {
                    foundBody = true;
                }
            }
            controller.enqueue(chunk);
        },
        flush (controller) {
            const missingTags = [
                foundHtml ? null : "html",
                foundBody ? null : "body"
            ].filter(_nonnullable.nonNullable);
            if (missingTags.length > 0) {
                controller.enqueue((0, _encodedecode.encodeText)(`<script>self.__next_root_layout_missing_tags_error=${JSON.stringify({
                    missingTags,
                    assetPrefix: assetPrefix ?? "",
                    tree: getTree()
                })}</script>`));
            }
        }
    });
}
async function continueFromInitialStream(renderStream, { suffix, dataStream, generateStaticHTML, getServerInsertedHTML, serverInsertedHTMLToHead, validateRootLayout }) {
    const closeTag = "</body></html>";
    const suffixUnclosed = suffix ? suffix.split(closeTag)[0] : null;
    if (generateStaticHTML) {
        await renderStream.allReady;
    }
    const transforms = [
        createBufferedTransformStream(),
        getServerInsertedHTML && !serverInsertedHTMLToHead ? createInsertedHTMLStream(getServerInsertedHTML) : null,
        suffixUnclosed != null ? createDeferredSuffixStream(suffixUnclosed) : null,
        dataStream ? createInlineDataStream(dataStream) : null,
        createSuffixStream(closeTag),
        createHeadInsertionTransformStream(async ()=>{
            const serverInsertedHTML = getServerInsertedHTML && serverInsertedHTMLToHead ? await getServerInsertedHTML() : "";
            return serverInsertedHTML;
        }),
        validateRootLayout ? createRootLayoutValidatorStream(validateRootLayout.assetPrefix, validateRootLayout.getTree) : null
    ].filter(_nonnullable.nonNullable);
    return transforms.reduce((readable, transform)=>readable.pipeThrough(transform), renderStream);
}

}.call(this) }),
"[project]/node_modules/next/dist/server/lib/trace/constants.js (ecmascript, rsc)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    NextVanillaSpanAllowlist: null,
    BaseServerSpan: null,
    LoadComponentsSpan: null,
    NextServerSpan: null,
    NextNodeServerSpan: null,
    StartServerSpan: null,
    RenderSpan: null,
    RouterSpan: null,
    AppRenderSpan: null,
    NodeSpan: null,
    AppRouteRouteHandlersSpan: null,
    ResolveMetadataSpan: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    NextVanillaSpanAllowlist: function() {
        return NextVanillaSpanAllowlist;
    },
    BaseServerSpan: function() {
        return BaseServerSpan;
    },
    LoadComponentsSpan: function() {
        return LoadComponentsSpan;
    },
    NextServerSpan: function() {
        return NextServerSpan;
    },
    NextNodeServerSpan: function() {
        return NextNodeServerSpan;
    },
    StartServerSpan: function() {
        return StartServerSpan;
    },
    RenderSpan: function() {
        return RenderSpan;
    },
    RouterSpan: function() {
        return RouterSpan;
    },
    AppRenderSpan: function() {
        return AppRenderSpan;
    },
    NodeSpan: function() {
        return NodeSpan;
    },
    AppRouteRouteHandlersSpan: function() {
        return AppRouteRouteHandlersSpan;
    },
    ResolveMetadataSpan: function() {
        return ResolveMetadataSpan;
    }
});
var BaseServerSpan;
(function(BaseServerSpan) {
    BaseServerSpan["handleRequest"] = "BaseServer.handleRequest";
    BaseServerSpan["run"] = "BaseServer.run";
    BaseServerSpan["pipe"] = "BaseServer.pipe";
    BaseServerSpan["getStaticHTML"] = "BaseServer.getStaticHTML";
    BaseServerSpan["render"] = "BaseServer.render";
    BaseServerSpan["renderToResponseWithComponents"] = "BaseServer.renderToResponseWithComponents";
    BaseServerSpan["renderToResponse"] = "BaseServer.renderToResponse";
    BaseServerSpan["renderToHTML"] = "BaseServer.renderToHTML";
    BaseServerSpan["renderError"] = "BaseServer.renderError";
    BaseServerSpan["renderErrorToResponse"] = "BaseServer.renderErrorToResponse";
    BaseServerSpan["renderErrorToHTML"] = "BaseServer.renderErrorToHTML";
    BaseServerSpan["render404"] = "BaseServer.render404";
})(BaseServerSpan || (BaseServerSpan = {}));
var LoadComponentsSpan;
(function(LoadComponentsSpan) {
    LoadComponentsSpan["loadDefaultErrorComponents"] = "LoadComponents.loadDefaultErrorComponents";
    LoadComponentsSpan["loadComponents"] = "LoadComponents.loadComponents";
})(LoadComponentsSpan || (LoadComponentsSpan = {}));
var NextServerSpan;
(function(NextServerSpan) {
    NextServerSpan["getRequestHandler"] = "NextServer.getRequestHandler";
    NextServerSpan["getServer"] = "NextServer.getServer";
    NextServerSpan["getServerRequestHandler"] = "NextServer.getServerRequestHandler";
    NextServerSpan["createServer"] = "createServer.createServer";
})(NextServerSpan || (NextServerSpan = {}));
var NextNodeServerSpan;
(function(NextNodeServerSpan) {
    NextNodeServerSpan["compression"] = "NextNodeServer.compression";
    NextNodeServerSpan["getBuildId"] = "NextNodeServer.getBuildId";
    NextNodeServerSpan["generateStaticRoutes"] = "NextNodeServer.generateStaticRoutes";
    NextNodeServerSpan["generateFsStaticRoutes"] = "NextNodeServer.generateFsStaticRoutes";
    NextNodeServerSpan["generatePublicRoutes"] = "NextNodeServer.generatePublicRoutes";
    NextNodeServerSpan["generateImageRoutes"] = "NextNodeServer.generateImageRoutes.route";
    NextNodeServerSpan["sendRenderResult"] = "NextNodeServer.sendRenderResult";
    NextNodeServerSpan["sendStatic"] = "NextNodeServer.sendStatic";
    NextNodeServerSpan["proxyRequest"] = "NextNodeServer.proxyRequest";
    NextNodeServerSpan["runApi"] = "NextNodeServer.runApi";
    NextNodeServerSpan["render"] = "NextNodeServer.render";
    NextNodeServerSpan["renderHTML"] = "NextNodeServer.renderHTML";
    NextNodeServerSpan["imageOptimizer"] = "NextNodeServer.imageOptimizer";
    NextNodeServerSpan["getPagePath"] = "NextNodeServer.getPagePath";
    NextNodeServerSpan["getRoutesManifest"] = "NextNodeServer.getRoutesManifest";
    NextNodeServerSpan["findPageComponents"] = "NextNodeServer.findPageComponents";
    NextNodeServerSpan["getFontManifest"] = "NextNodeServer.getFontManifest";
    NextNodeServerSpan["getServerComponentManifest"] = "NextNodeServer.getServerComponentManifest";
    NextNodeServerSpan["getRequestHandler"] = "NextNodeServer.getRequestHandler";
    NextNodeServerSpan["renderToHTML"] = "NextNodeServer.renderToHTML";
    NextNodeServerSpan["renderError"] = "NextNodeServer.renderError";
    NextNodeServerSpan["renderErrorToHTML"] = "NextNodeServer.renderErrorToHTML";
    NextNodeServerSpan["render404"] = "NextNodeServer.render404";
    NextNodeServerSpan["route"] = "route";
    NextNodeServerSpan["onProxyReq"] = "onProxyReq";
    NextNodeServerSpan["apiResolver"] = "apiResolver";
})(NextNodeServerSpan || (NextNodeServerSpan = {}));
var StartServerSpan;
(function(StartServerSpan) {
    StartServerSpan["startServer"] = "startServer.startServer";
})(StartServerSpan || (StartServerSpan = {}));
var RenderSpan;
(function(RenderSpan) {
    RenderSpan["getServerSideProps"] = "Render.getServerSideProps";
    RenderSpan["getStaticProps"] = "Render.getStaticProps";
    RenderSpan["renderToString"] = "Render.renderToString";
    RenderSpan["renderDocument"] = "Render.renderDocument";
    RenderSpan["createBodyResult"] = "Render.createBodyResult";
})(RenderSpan || (RenderSpan = {}));
var AppRenderSpan;
(function(AppRenderSpan) {
    AppRenderSpan["renderToString"] = "AppRender.renderToString";
    AppRenderSpan["renderToReadableStream"] = "AppRender.renderToReadableStream";
    AppRenderSpan["getBodyResult"] = "AppRender.getBodyResult";
    AppRenderSpan["fetch"] = "AppRender.fetch";
})(AppRenderSpan || (AppRenderSpan = {}));
var RouterSpan;
(function(RouterSpan) {
    RouterSpan["executeRoute"] = "Router.executeRoute";
})(RouterSpan || (RouterSpan = {}));
var NodeSpan;
(function(NodeSpan) {
    NodeSpan["runHandler"] = "Node.runHandler";
})(NodeSpan || (NodeSpan = {}));
var AppRouteRouteHandlersSpan;
(function(AppRouteRouteHandlersSpan) {
    AppRouteRouteHandlersSpan["runHandler"] = "AppRouteRouteHandlers.runHandler";
})(AppRouteRouteHandlersSpan || (AppRouteRouteHandlersSpan = {}));
var ResolveMetadataSpan;
(function(ResolveMetadataSpan) {
    ResolveMetadataSpan["generateMetadata"] = "ResolveMetadata.generateMetadata";
})(ResolveMetadataSpan || (ResolveMetadataSpan = {}));
const NextVanillaSpanAllowlist = [
    "BaseServer.handleRequest",
    "Render.getServerSideProps",
    "Render.getStaticProps",
    "AppRender.fetch",
    "AppRender.getBodyResult",
    "Render.renderDocument",
    "Node.runHandler",
    "AppRouteRouteHandlers.runHandler",
    "ResolveMetadata.generateMetadata"
];

}.call(this) }),
"[project]/node_modules/next/dist/server/lib/trace/tracer.js (ecmascript, rsc)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getTracer: null,
    SpanStatusCode: null,
    SpanKind: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getTracer: function() {
        return getTracer;
    },
    SpanStatusCode: function() {
        return SpanStatusCode;
    },
    SpanKind: function() {
        return SpanKind;
    }
});
const _constants = __turbopack_require__("[project]/node_modules/next/dist/server/lib/trace/constants.js (ecmascript, rsc)");
let api;
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    try {
        api = __turbopack_require__("[project]/node_modules/next/dist/compiled/@opentelemetry/api/index.js (ecmascript, rsc)");
    } catch (err) {
        api = __turbopack_require__("[project]/node_modules/next/dist/compiled/@opentelemetry/api/index.js (ecmascript, rsc)");
    }
}
const { context, trace, SpanStatusCode, SpanKind } = api;
const isPromise = (p)=>{
    return p !== null && typeof p === "object" && typeof p.then === "function";
};
const closeSpanWithError = (span, error)=>{
    if (error) {
        span.recordException(error);
    }
    span.setStatus({
        code: SpanStatusCode.ERROR,
        message: error == null ? void 0 : error.message
    });
    span.end();
};
const rootSpanAttributesStore = new Map();
const rootSpanIdKey = api.createContextKey("next.rootSpanId");
let lastSpanId = 0;
const getSpanId = ()=>lastSpanId++;
class NextTracerImpl {
    getTracerInstance() {
        return trace.getTracer("next.js", "0.0.1");
    }
    getContext() {
        return context;
    }
    getActiveScopeSpan() {
        return trace.getSpan(context == null ? void 0 : context.active());
    }
    trace(...args) {
        const [type, fnOrOptions, fnOrEmpty] = args;
        const { fn, options } = typeof fnOrOptions === "function" ? {
            fn: fnOrOptions,
            options: {}
        } : {
            fn: fnOrEmpty,
            options: {
                ...fnOrOptions
            }
        };
        if (!_constants.NextVanillaSpanAllowlist.includes(type) && process.env.NEXT_OTEL_VERBOSE !== "1" || options.hideSpan) {
            return fn();
        }
        const spanName = options.spanName ?? type;
        let spanContext = this.getSpanContext((options == null ? void 0 : options.parentSpan) ?? this.getActiveScopeSpan());
        let isRootSpan = false;
        if (!spanContext) {
            spanContext = api.ROOT_CONTEXT;
            isRootSpan = true;
        }
        const spanId = getSpanId();
        options.attributes = {
            "next.span_name": spanName,
            "next.span_type": type,
            ...options.attributes
        };
        return api.context.with(spanContext.setValue(rootSpanIdKey, spanId), ()=>this.getTracerInstance().startActiveSpan(spanName, options, (span)=>{
                const onCleanup = ()=>{
                    rootSpanAttributesStore.delete(spanId);
                };
                if (isRootSpan) {
                    rootSpanAttributesStore.set(spanId, new Map(Object.entries(options.attributes ?? {})));
                }
                try {
                    if (fn.length > 1) {
                        return fn(span, (err)=>closeSpanWithError(span, err));
                    }
                    const result = fn(span);
                    if (isPromise(result)) {
                        result.then(()=>span.end(), (err)=>closeSpanWithError(span, err)).finally(onCleanup);
                    } else {
                        span.end();
                        onCleanup();
                    }
                    return result;
                } catch (err) {
                    closeSpanWithError(span, err);
                    onCleanup();
                    throw err;
                }
            }));
    }
    wrap(...args) {
        const tracer = this;
        const [name, options, fn] = args.length === 3 ? args : [
            args[0],
            {},
            args[1]
        ];
        if (!_constants.NextVanillaSpanAllowlist.includes(name) && process.env.NEXT_OTEL_VERBOSE !== "1") {
            return fn;
        }
        return function() {
            let optionsObj = options;
            if (typeof optionsObj === "function" && typeof fn === "function") {
                optionsObj = optionsObj.apply(this, arguments);
            }
            const lastArgId = arguments.length - 1;
            const cb = arguments[lastArgId];
            if (typeof cb === "function") {
                const scopeBoundCb = tracer.getContext().bind(context.active(), cb);
                return tracer.trace(name, optionsObj, (_span, done)=>{
                    arguments[lastArgId] = function(err) {
                        done == null ? void 0 : done(err);
                        return scopeBoundCb.apply(this, arguments);
                    };
                    return fn.apply(this, arguments);
                });
            } else {
                return tracer.trace(name, optionsObj, ()=>fn.apply(this, arguments));
            }
        };
    }
    startSpan(...args) {
        const [type, options] = args;
        const spanContext = this.getSpanContext((options == null ? void 0 : options.parentSpan) ?? this.getActiveScopeSpan());
        return this.getTracerInstance().startSpan(type, options, spanContext);
    }
    getSpanContext(parentSpan) {
        const spanContext = parentSpan ? trace.setSpan(context.active(), parentSpan) : undefined;
        return spanContext;
    }
    getRootSpanAttributes() {
        const spanId = context.active().getValue(rootSpanIdKey);
        return rootSpanAttributesStore.get(spanId);
    }
}
const getTracer = (()=>{
    const tracer = new NextTracerImpl();
    return ()=>tracer;
})();

}.call(this) }),
"[project]/node_modules/next/dist/server/lib/app-dir-module.js (ecmascript, rsc)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getLayoutOrPageModule: null,
    getErrorOrLayoutModule: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getLayoutOrPageModule: function() {
        return getLayoutOrPageModule;
    },
    getErrorOrLayoutModule: function() {
        return getErrorOrLayoutModule;
    }
});
async function getLayoutOrPageModule(loaderTree) {
    const { layout, page, defaultPage } = loaderTree[2];
    const isLayout = typeof layout !== "undefined";
    const isPage = typeof page !== "undefined";
    const isDefaultPage = typeof defaultPage !== "undefined" && loaderTree[0] === "__DEFAULT__";
    let value = undefined;
    let modType = undefined;
    if (isLayout) {
        value = await layout[0]();
        modType = "layout";
    } else if (isPage) {
        value = await page[0]();
        modType = "page";
    } else if (isDefaultPage) {
        value = await defaultPage[0]();
        modType = "page";
    }
    return [
        value,
        modType
    ];
}
async function getErrorOrLayoutModule(loaderTree, errorType) {
    const { [errorType]: error, layout } = loaderTree[2];
    if (typeof error !== "undefined") {
        return await error[0]();
    } else if (typeof layout !== "undefined") {
        return await layout[0]();
    }
    return undefined;
}

}.call(this) }),
"[project]/node_modules/next/dist/server/lib/patch-fetch.js (ecmascript, rsc)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    addImplicitTags: null,
    patchFetch: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    addImplicitTags: function() {
        return addImplicitTags;
    },
    patchFetch: function() {
        return patchFetch;
    }
});
const _constants = __turbopack_require__("[project]/node_modules/next/dist/server/lib/trace/constants.js (ecmascript, rsc)");
const _tracer = __turbopack_require__("[project]/node_modules/next/dist/server/lib/trace/tracer.js (ecmascript, rsc)");
const _constants1 = __turbopack_require__("[project]/node_modules/next/dist/lib/constants.js (ecmascript, rsc)");
const isEdgeRuntime = process.env.NEXT_RUNTIME === "edge";
function addImplicitTags(staticGenerationStore) {
    const newTags = [];
    const pathname = staticGenerationStore == null ? void 0 : staticGenerationStore.originalPathname;
    if (!pathname) {
        return newTags;
    }
    if (!Array.isArray(staticGenerationStore.tags)) {
        staticGenerationStore.tags = [];
    }
    if (!staticGenerationStore.tags.includes(pathname)) {
        staticGenerationStore.tags.push(pathname);
    }
    newTags.push(pathname);
    return newTags;
}
function trackFetchMetric(staticGenerationStore, ctx) {
    if (!staticGenerationStore) return;
    if (!staticGenerationStore.fetchMetrics) {
        staticGenerationStore.fetchMetrics = [];
    }
    const dedupeFields = [
        "url",
        "status",
        "method"
    ];
    if (staticGenerationStore.fetchMetrics.some((metric)=>{
        return dedupeFields.every((field)=>metric[field] === ctx[field]);
    })) {
        return;
    }
    staticGenerationStore.fetchMetrics.push({
        url: ctx.url,
        cacheStatus: ctx.cacheStatus,
        status: ctx.status,
        method: ctx.method,
        start: ctx.start,
        end: Date.now(),
        idx: staticGenerationStore.nextFetchId || 0
    });
}
function patchFetch({ serverHooks, staticGenerationAsyncStorage }) {
    if (!globalThis._nextOriginalFetch) {
        globalThis._nextOriginalFetch = globalThis.fetch;
    }
    if (globalThis.fetch.__nextPatched) return;
    const { DynamicServerError } = serverHooks;
    const originFetch = globalThis._nextOriginalFetch;
    globalThis.fetch = async (input, init)=>{
        var _init_method;
        let url;
        try {
            url = new URL(input instanceof Request ? input.url : input);
            url.username = "";
            url.password = "";
        } catch  {
            url = undefined;
        }
        const fetchUrl = (url == null ? void 0 : url.href) ?? "";
        const fetchStart = Date.now();
        const method = (init == null ? void 0 : (_init_method = init.method) == null ? void 0 : _init_method.toUpperCase()) || "GET";
        return await (0, _tracer.getTracer)().trace(_constants.AppRenderSpan.fetch, {
            kind: _tracer.SpanKind.CLIENT,
            spanName: [
                "fetch",
                method,
                fetchUrl
            ].filter(Boolean).join(" "),
            attributes: {
                "http.url": fetchUrl,
                "http.method": method,
                "net.peer.name": url == null ? void 0 : url.hostname,
                "net.peer.port": (url == null ? void 0 : url.port) || undefined
            }
        }, async ()=>{
            var _ref, _getRequestMeta;
            const staticGenerationStore = staticGenerationAsyncStorage.getStore();
            const isRequestInput = input && typeof input === "object" && typeof input.method === "string";
            const getRequestMeta = (field)=>{
                let value = isRequestInput ? input[field] : null;
                return value || (init == null ? void 0 : init[field]);
            };
            if (!staticGenerationStore || ((_ref = init == null ? void 0 : init.next) == null ? void 0 : _ref.internal) || staticGenerationStore.isDraftMode) {
                return originFetch(input, init);
            }
            let revalidate = undefined;
            const getNextField = (field)=>{
                var _init_next, _init_next1, _input_next;
                return typeof (init == null ? void 0 : (_init_next = init.next) == null ? void 0 : _init_next[field]) !== "undefined" ? init == null ? void 0 : (_init_next1 = init.next) == null ? void 0 : _init_next1[field] : isRequestInput ? (_input_next = input.next) == null ? void 0 : _input_next[field] : undefined;
            };
            let curRevalidate = getNextField("revalidate");
            const tags = getNextField("tags") || [];
            if (Array.isArray(tags)) {
                if (!staticGenerationStore.tags) {
                    staticGenerationStore.tags = [];
                }
                for (const tag of tags){
                    if (!staticGenerationStore.tags.includes(tag)) {
                        staticGenerationStore.tags.push(tag);
                    }
                }
            }
            const implicitTags = addImplicitTags(staticGenerationStore);
            for (const tag of implicitTags || []){
                if (!tags.includes(tag)) {
                    tags.push(tag);
                }
            }
            const isOnlyCache = staticGenerationStore.fetchCache === "only-cache";
            const isForceCache = staticGenerationStore.fetchCache === "force-cache";
            const isDefaultCache = staticGenerationStore.fetchCache === "default-cache";
            const isDefaultNoStore = staticGenerationStore.fetchCache === "default-no-store";
            const isOnlyNoStore = staticGenerationStore.fetchCache === "only-no-store";
            const isForceNoStore = staticGenerationStore.fetchCache === "force-no-store";
            let _cache = getRequestMeta("cache");
            if (typeof _cache === "string" && typeof curRevalidate !== "undefined") {
                console.warn(`Warning: fetch for ${fetchUrl} on ${staticGenerationStore.pathname} specified "cache: ${_cache}" and "revalidate: ${curRevalidate}", only one should be specified.`);
                _cache = undefined;
            }
            if (_cache === "force-cache") {
                curRevalidate = false;
            }
            if ([
                "no-cache",
                "no-store"
            ].includes(_cache || "")) {
                curRevalidate = 0;
            }
            if (typeof curRevalidate === "number" || curRevalidate === false) {
                revalidate = curRevalidate;
            }
            let cacheReason = "";
            const _headers = getRequestMeta("headers");
            const initHeaders = typeof (_headers == null ? void 0 : _headers.get) === "function" ? _headers : new Headers(_headers || {});
            const hasUnCacheableHeader = initHeaders.get("authorization") || initHeaders.get("cookie");
            const isUnCacheableMethod = ![
                "get",
                "head"
            ].includes(((_getRequestMeta = getRequestMeta("method")) == null ? void 0 : _getRequestMeta.toLowerCase()) || "get");
            const autoNoCache = (hasUnCacheableHeader || isUnCacheableMethod) && staticGenerationStore.revalidate === 0;
            if (isForceNoStore) {
                revalidate = 0;
                cacheReason = "fetchCache = force-no-store";
            }
            if (isOnlyNoStore) {
                if (_cache === "force-cache" || revalidate === 0) {
                    throw new Error(`cache: 'force-cache' used on fetch for ${fetchUrl} with 'export const fetchCache = 'only-no-store'`);
                }
                revalidate = 0;
                cacheReason = "fetchCache = only-no-store";
            }
            if (isOnlyCache && _cache === "no-store") {
                throw new Error(`cache: 'no-store' used on fetch for ${fetchUrl} with 'export const fetchCache = 'only-cache'`);
            }
            if (isForceCache && (typeof curRevalidate === "undefined" || curRevalidate === 0)) {
                cacheReason = "fetchCache = force-cache";
                revalidate = false;
            }
            if (typeof revalidate === "undefined") {
                if (isDefaultCache) {
                    revalidate = false;
                    cacheReason = "fetchCache = default-cache";
                } else if (autoNoCache) {
                    revalidate = 0;
                    cacheReason = "auto no cache";
                } else if (isDefaultNoStore) {
                    revalidate = 0;
                    cacheReason = "fetchCache = default-no-store";
                } else {
                    cacheReason = "auto cache";
                    revalidate = typeof staticGenerationStore.revalidate === "boolean" || typeof staticGenerationStore.revalidate === "undefined" ? false : staticGenerationStore.revalidate;
                }
            } else if (!cacheReason) {
                cacheReason = `revalidate: ${revalidate}`;
            }
            if (!autoNoCache && (typeof staticGenerationStore.revalidate === "undefined" || typeof revalidate === "number" && (staticGenerationStore.revalidate === false || typeof staticGenerationStore.revalidate === "number" && revalidate < staticGenerationStore.revalidate))) {
                staticGenerationStore.revalidate = revalidate;
            }
            const isCacheableRevalidate = typeof revalidate === "number" && revalidate > 0 || revalidate === false;
            let cacheKey;
            if (staticGenerationStore.incrementalCache && isCacheableRevalidate) {
                try {
                    cacheKey = await staticGenerationStore.incrementalCache.fetchCacheKey(fetchUrl, isRequestInput ? input : init);
                } catch (err) {
                    console.error(`Failed to generate cache key for`, input);
                }
            }
            const requestInputFields = [
                "cache",
                "credentials",
                "headers",
                "integrity",
                "keepalive",
                "method",
                "mode",
                "redirect",
                "referrer",
                "referrerPolicy",
                "signal",
                "window",
                "duplex"
            ];
            if (isRequestInput) {
                const reqInput = input;
                const reqOptions = {
                    body: reqInput._ogBody || reqInput.body
                };
                for (const field of requestInputFields){
                    reqOptions[field] = reqInput[field];
                }
                input = new Request(reqInput.url, reqOptions);
            } else if (init) {
                const initialInit = init;
                init = {
                    body: init._ogBody || init.body
                };
                for (const field of requestInputFields){
                    init[field] = initialInit[field];
                }
            }
            const fetchIdx = staticGenerationStore.nextFetchId ?? 1;
            staticGenerationStore.nextFetchId = fetchIdx + 1;
            const normalizedRevalidate = typeof revalidate !== "number" ? _constants1.CACHE_ONE_YEAR : revalidate;
            const doOriginalFetch = async (isStale)=>{
                const clonedInit = {
                    ...init,
                    next: {
                        ...init == null ? void 0 : init.next,
                        fetchType: "origin",
                        fetchIdx
                    }
                };
                return originFetch(input, clonedInit).then(async (res)=>{
                    if (!isStale) {
                        trackFetchMetric(staticGenerationStore, {
                            start: fetchStart,
                            url: fetchUrl,
                            cacheReason,
                            cacheStatus: "miss",
                            status: res.status,
                            method: clonedInit.method || "GET"
                        });
                    }
                    if (res.status === 200 && staticGenerationStore.incrementalCache && cacheKey && isCacheableRevalidate) {
                        const bodyBuffer = Buffer.from(await res.arrayBuffer());
                        try {
                            await staticGenerationStore.incrementalCache.set(cacheKey, {
                                kind: "FETCH",
                                data: {
                                    headers: Object.fromEntries(res.headers.entries()),
                                    body: bodyBuffer.toString("base64"),
                                    status: res.status,
                                    tags,
                                    url: res.url
                                },
                                revalidate: normalizedRevalidate
                            }, revalidate, true, fetchUrl, fetchIdx);
                        } catch (err) {
                            console.warn(`Failed to set fetch cache`, input, err);
                        }
                        const response = new Response(bodyBuffer, {
                            headers: new Headers(res.headers),
                            status: res.status
                        });
                        Object.defineProperty(response, "url", {
                            value: res.url
                        });
                        return response;
                    }
                    return res;
                });
            };
            if (cacheKey && (staticGenerationStore == null ? void 0 : staticGenerationStore.incrementalCache)) {
                const entry = staticGenerationStore.isOnDemandRevalidate ? null : await staticGenerationStore.incrementalCache.get(cacheKey, true, revalidate, fetchUrl, fetchIdx);
                if ((entry == null ? void 0 : entry.value) && entry.value.kind === "FETCH") {
                    const currentTags = entry.value.data.tags;
                    if (!(staticGenerationStore.isRevalidate && entry.isStale)) {
                        if (entry.isStale) {
                            if (!staticGenerationStore.pendingRevalidates) {
                                staticGenerationStore.pendingRevalidates = [];
                            }
                            staticGenerationStore.pendingRevalidates.push(doOriginalFetch(true).catch(console.error));
                        } else if (tags && !tags.every((tag)=>{
                            return currentTags == null ? void 0 : currentTags.includes(tag);
                        })) {
                            var _staticGenerationStore_incrementalCache;
                            if (!entry.value.data.tags) {
                                entry.value.data.tags = [];
                            }
                            for (const tag of tags){
                                if (!entry.value.data.tags.includes(tag)) {
                                    entry.value.data.tags.push(tag);
                                }
                            }
                            (_staticGenerationStore_incrementalCache = staticGenerationStore.incrementalCache) == null ? void 0 : _staticGenerationStore_incrementalCache.set(cacheKey, entry.value, revalidate, true, fetchUrl, fetchIdx);
                        }
                        const resData = entry.value.data;
                        let decodedBody;
                        if ("TURBOPACK compile-time falsy", 0) {
                            "TURBOPACK unreachable";
                        } else {
                            decodedBody = Buffer.from(resData.body, "base64").subarray();
                        }
                        trackFetchMetric(staticGenerationStore, {
                            start: fetchStart,
                            url: fetchUrl,
                            cacheReason,
                            cacheStatus: "hit",
                            status: resData.status || 200,
                            method: (init == null ? void 0 : init.method) || "GET"
                        });
                        const response = new Response(decodedBody, {
                            headers: resData.headers,
                            status: resData.status
                        });
                        Object.defineProperty(response, "url", {
                            value: entry.value.data.url
                        });
                        return response;
                    }
                }
            }
            if (staticGenerationStore.isStaticGeneration) {
                if (init && typeof init === "object") {
                    const cache = init.cache;
                    if ("TURBOPACK compile-time falsy", 0) {
                        "TURBOPACK unreachable";
                    }
                    if (cache === "no-store") {
                        staticGenerationStore.revalidate = 0;
                        const dynamicUsageReason = `no-store fetch ${input}${staticGenerationStore.pathname ? ` ${staticGenerationStore.pathname}` : ""}`;
                        const err = new DynamicServerError(dynamicUsageReason);
                        staticGenerationStore.dynamicUsageErr = err;
                        staticGenerationStore.dynamicUsageStack = err.stack;
                        staticGenerationStore.dynamicUsageDescription = dynamicUsageReason;
                    }
                    const hasNextConfig = "next" in init;
                    const next = init.next || {};
                    if (typeof next.revalidate === "number" && (typeof staticGenerationStore.revalidate === "undefined" || typeof staticGenerationStore.revalidate === "number" && next.revalidate < staticGenerationStore.revalidate)) {
                        const forceDynamic = staticGenerationStore.forceDynamic;
                        if (!forceDynamic || next.revalidate !== 0) {
                            staticGenerationStore.revalidate = next.revalidate;
                        }
                        if (!forceDynamic && next.revalidate === 0) {
                            const dynamicUsageReason = `revalidate: ${next.revalidate} fetch ${input}${staticGenerationStore.pathname ? ` ${staticGenerationStore.pathname}` : ""}`;
                            const err = new DynamicServerError(dynamicUsageReason);
                            staticGenerationStore.dynamicUsageErr = err;
                            staticGenerationStore.dynamicUsageStack = err.stack;
                            staticGenerationStore.dynamicUsageDescription = dynamicUsageReason;
                        }
                    }
                    if (hasNextConfig) delete init.next;
                }
            }
            return doOriginalFetch();
        });
    };
    globalThis.fetch.__nextGetStaticStore = ()=>{
        return staticGenerationAsyncStorage;
    };
    globalThis.fetch.__nextPatched = true;
}

}.call(this) }),
"[project]/node_modules/next/dist/server/lib/etag.js (ecmascript, rsc)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    fnv1a52: null,
    generateETag: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    fnv1a52: function() {
        return fnv1a52;
    },
    generateETag: function() {
        return generateETag;
    }
});
const fnv1a52 = (str)=>{
    const len = str.length;
    let i = 0, t0 = 0, v0 = 0x2325, t1 = 0, v1 = 0x8422, t2 = 0, v2 = 0x9ce4, t3 = 0, v3 = 0xcbf2;
    while(i < len){
        v0 ^= str.charCodeAt(i++);
        t0 = v0 * 435;
        t1 = v1 * 435;
        t2 = v2 * 435;
        t3 = v3 * 435;
        t2 += v0 << 8;
        t3 += v1 << 8;
        t1 += t0 >>> 16;
        v0 = t0 & 65535;
        t2 += t1 >>> 16;
        v1 = t1 & 65535;
        v3 = t3 + (t2 >>> 16) & 65535;
        v2 = t2 & 65535;
    }
    return (v3 & 15) * 281474976710656 + v2 * 4294967296 + v1 * 65536 + (v0 ^ v3 >> 4);
};
const generateETag = (payload, weak = false)=>{
    const prefix = weak ? 'W/"' : '"';
    return prefix + fnv1a52(payload).toString(36) + payload.length.toString(36) + '"';
};

}.call(this) }),
"[project]/node_modules/next/dist/server/lib/node-fs-methods.js (ecmascript, rsc)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "nodeFs", {
    enumerable: true,
    get: function() {
        return nodeFs;
    }
});
const _fs = _interop_require_default(__turbopack_external_require__("fs"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const nodeFs = {
    readFile: (f)=>_fs.default.promises.readFile(f),
    readFileSync: (f)=>_fs.default.readFileSync(f),
    writeFile: (f, d)=>_fs.default.promises.writeFile(f, d),
    mkdir: (dir)=>_fs.default.promises.mkdir(dir, {
            recursive: true
        }),
    stat: (f)=>_fs.default.promises.stat(f)
};

}.call(this) }),
}]);

//# sourceMappingURL=_4b2cba._.js.map