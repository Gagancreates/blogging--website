import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_Dn-nq_XF.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/blogs/education-needs-change.astro.mjs');
const _page2 = () => import('./pages/blogs/how-i-use-claude-code.astro.mjs');
const _page3 = () => import('./pages/blogs/i-built-a-startup-at-18.astro.mjs');
const _page4 = () => import('./pages/blogs/indexold.astro.mjs');
const _page5 = () => import('./pages/blogs/rnns.astro.mjs');
const _page6 = () => import('./pages/blogs.astro.mjs');
const _page7 = () => import('./pages/indexold.astro.mjs');
const _page8 = () => import('./pages/notes/3rd_sem/dsa/unit1.astro.mjs');
const _page9 = () => import('./pages/notes/3rd_sem/dsa/unit2.astro.mjs');
const _page10 = () => import('./pages/notes/3rd_sem/dsa/unit3.astro.mjs');
const _page11 = () => import('./pages/notes/3rd_sem/dsa/unit4.astro.mjs');
const _page12 = () => import('./pages/notes.astro.mjs');
const _page13 = () => import('./pages/project.astro.mjs');
const _page14 = () => import('./pages/project.astro2.mjs');
const _page15 = () => import('./pages/projectold.astro.mjs');
const _page16 = () => import('./pages/projects.astro.mjs');
const _page17 = () => import('./pages/research.astro.mjs');
const _page18 = () => import('./pages/work.astro.mjs');
const _page19 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/blogs/education-needs-change.astro", _page1],
    ["src/pages/blogs/how-i-use-claude-code.astro", _page2],
    ["src/pages/blogs/i-built-a-startup-at-18.astro", _page3],
    ["src/pages/blogs/indexold.astro", _page4],
    ["src/pages/blogs/RNNs.astro", _page5],
    ["src/pages/blogs/index.astro", _page6],
    ["src/pages/indexold.astro", _page7],
    ["src/pages/notes/3rd_sem/dsa/unit1.astro", _page8],
    ["src/pages/notes/3rd_sem/dsa/unit2.astro", _page9],
    ["src/pages/notes/3rd_sem/dsa/unit3.astro", _page10],
    ["src/pages/notes/3rd_sem/dsa/unit4.astro", _page11],
    ["src/pages/notes/index.astro", _page12],
    ["src/pages/project/index.astro", _page13],
    ["src/pages/project.astro", _page14],
    ["src/pages/projectold.astro", _page15],
    ["src/pages/projects.astro", _page16],
    ["src/pages/research.astro", _page17],
    ["src/pages/work.astro", _page18],
    ["src/pages/index.astro", _page19]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "aeb9708a-4634-4a4a-b2a0-e5cd94b8e8a4"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
