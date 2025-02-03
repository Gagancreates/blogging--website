/* empty css                                    */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_Bpyf8DWs.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_Ccaw54AA.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const projects = {
    main: [
      {
        title: "Main Project 1",
        description: "To be filled",
        github: "#"
      }
    ],
    side: [
      {
        title: "Side Project 1",
        description: "To be filled",
        github: "#"
      }
    ]
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Projects | gagan" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-4 mt-12"> <h1 class="font-playfair text-3xl mb-12 font-bold">Projects</h1> <section class="mb-16" id="main"> <h2 class="font-playfair text-2xl mb-6">Main Projects</h2> <div class="grid gap-8 max-w-2xl"> ${projects.main.map((project) => renderTemplate`<article class="border-b border-gray-200 pb-8"> <h3 class="font-playfair text-xl mb-4"> <a${addAttribute(project.github, "href")} target="_blank" rel="noopener noreferrer" class="hover:text-gray-600"> ${project.title} ↗
</a> </h3> <p class="font-helvetica font-bold text-gray-600">${project.description}</p> </article>`)} </div> </section> <section id="side"> <h2 class="font-playfair text-2xl mb-6">Side Projects</h2> <div class="grid gap-8 max-w-2xl"> ${projects.side.map((project) => renderTemplate`<article class="border-b border-gray-200 pb-8"> <h3 class="font-playfair text-xl mb-2"> <a${addAttribute(project.github, "href")} target="_blank" rel="noopener noreferrer" class="hover:text-gray-600"> ${project.title} ↗
</a> </h3> <p class="font-playfair text-lg mb-4">${project.description}</p> </article>`)} </div> </section> </main> ` })}`;
}, "D:/Blogging/myblog/src/pages/projects/index.astro", undefined);

const $$file = "D:/Blogging/myblog/src/pages/projects/index.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
