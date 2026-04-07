module.exports = [
"[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/openmaic_lti/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "chunks/1a128__pnpm_0d64a6c6._.js",
  "chunks/[root-of-the-server]__afb46f6e._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/openmaic_lti/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript)");
    });
});
}),
];