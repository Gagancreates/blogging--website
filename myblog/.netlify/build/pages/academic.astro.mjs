/* empty css                                    */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_Bpyf8DWs.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_Ccaw54AA.mjs';
export { renderers } from '../renderers.mjs';

const $$Academic = createComponent(($$result, $$props, $$slots) => {
  const materials = [
    {
      title: "Deep Learning Notes",
      description: "Comprehensive notes from my deep learning courses",
      url: "https://notion.site/your-note"
    },
    {
      title: "Algorithm Study Guide",
      description: "Personal notes on competitive programming algorithms",
      url: "https://notion.site/your-note"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Academic | neuralnets" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-4 mt-12"> <h1 class="font-zodiak text-4xl mb-8">Academic Material</h1> <div class="grid gap-8 max-w-2xl"> ${materials.map((material) => renderTemplate`<article class="border-b border-gray-200 pb-8"> <h2 class="font-zodiak text-2xl mb-2"> <a${addAttribute(material.url, "href")} target="_blank" rel="noopener noreferrer" class="hover:text-gray-600"> ${material.title} ↗
</a> </h2> <p class="text-gray-600">${material.description}</p> </article>`)} </div> </main> ` })}`;
}, "D:/Blogging/myblog/src/pages/academic.astro", undefined);

const $$file = "D:/Blogging/myblog/src/pages/academic.astro";
const $$url = "/academic";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Academic,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
