/* empty css                                    */
import { c as createComponent, a as createAstro, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_Bpyf8DWs.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_Ccaw54AA.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  const projects = {
    serious: [
      {
        title: "Deep Learning Research",
        description: "Research project on natural language processing",
        github: "https://github.com/username/project"
      }
    ],
    fun: [
      {
        title: "Personal Blog",
        description: "My personal blog built with Astro",
        github: "https://github.com/username/blog"
      }
    ]
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Projects | neuralnets" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-4 mt-12"> <h1 class="font-playfair text-3xl mb-6 font-bold">Projects</h1> <section class="mb-16"> <h2 class="font-playfair text-2xl mb-2 font-bold">Main Projects</h2> <div class="grid gap-8 max-w-2xl"> ${projects.serious.map((project) => renderTemplate`<article class="border-b border-gray-200 pb-8"> <h3 class="font-playfair text-xl mb-2"> <a${addAttribute(project.github, "href")} target="_blank" rel="noopener noreferrer" class="hover:text-gray-600"> ${project.title} ↗
</a> </h3> <p class="text-gray-600">${project.description}</p> </article>`)} </div> </section> <section> <h2 class="font-playfair text-2xl mb-2 font-bold">Side Projects</h2> <div class="grid gap-8 max-w-2xl"> ${projects.fun.map((project) => renderTemplate`<article class="border-b border-gray-200 pb-8"> <h3 class="font-playfair text-xl mb-2"> <a${addAttribute(project.github, "href")} target="_blank" rel="noopener noreferrer" class="hover:text-gray-600"> ${project.title} ↗
</a> </h3> <p class="text-gray-600">${project.description}</p> </article>`)} </div> </section> </main> ` })}`;
}, "D:/Blogging/myblog/src/pages/projects.astro", undefined);

const $$file = "D:/Blogging/myblog/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
