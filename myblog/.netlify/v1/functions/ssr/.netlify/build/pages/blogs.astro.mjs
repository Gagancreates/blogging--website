/* empty css                                    */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_Bpyf8DWs.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_Ccaw54AA.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const categories = [
    {
      title: "Build with Me",
      description: "Follow along as I build and document interesting projects",
      url: "/blogs/build"
    },
    {
      title: "Machine Learning",
      description: "Deep dives into ML concepts, implementations, and applications",
      url: "/blogs/ml"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blogs | gagan" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-4 mt-12"> <h1 class="font-['Playfair_Display'] font-medium text-4xl mb-8">Blogs</h1> <div class="grid gap-8 max-w-2xl"> ${categories.map((category) => renderTemplate`<article class="border-b border-gray-200 pb-8"> <h2 class="font-['Playfair_Display'] font-medium text-2xl mb-2"> <a${addAttribute(category.url, "href")} class="hover:text-gray-600"> ${category.title} </a> </h2> <p class="font-helvetica font-bold text-gray-600">${category.description}</p> </article>`)} </div> </main> ` })}`;
}, "D:/Blogging/myblog/src/pages/blogs/index.astro", undefined);

const $$file = "D:/Blogging/myblog/src/pages/blogs/index.astro";
const $$url = "/blogs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
