module.exports = {

"[turbopack]/dev/client/hmr-client.ts (ecmascript, loader, app ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname }) => (() => {

__turbopack_export_value__((__turbopack_import__) => {
    return Promise.all(["server/chunks/app ssr/[turbopack]_dev_client_hmr-client_ts_4da98e._.js"].map((chunk) => __turbopack_load__(chunk))).then(() => {
        return __turbopack_require__("[turbopack]/dev/client/hmr-client.ts (ecmascript, manifest chunk, app ssr)");
    }).then((chunks) => {
        return Promise.all(chunks.map((chunk) => __turbopack_load__(chunk)));
    }).then(() => {
        return __turbopack_import__("[turbopack]/dev/client/hmr-client.ts (ecmascript, app ssr)");
    });
});

})()),

};