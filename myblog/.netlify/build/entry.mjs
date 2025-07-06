import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_lC7nPr3P.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/academic.astro.mjs');
const _page2 = () => import('./pages/blog.astro.mjs');
const _page3 = () => import('./pages/blog.astro2.mjs');
const _page4 = () => import('./pages/blogs/build.astro.mjs');
const _page5 = () => import('./pages/blogs.astro.mjs');
const _page6 = () => import('./pages/project.astro.mjs');
const _page7 = () => import('./pages/project.astro2.mjs');
const _page8 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/academic.astro", _page1],
    ["src/pages/blog/index.astro", _page2],
    ["src/pages/blog.astro", _page3],
    ["src/pages/blogs/build.astro", _page4],
    ["src/pages/blogs/index.astro", _page5],
    ["src/pages/project/index.astro", _page6],
    ["src/pages/project.astro", _page7],
    ["src/pages/index.astro", _page8]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "d0d0b95b-e006-4aae-8a08-6cf819ab7aca"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
