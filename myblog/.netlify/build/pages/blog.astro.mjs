/* empty css                                    */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_Bpyf8DWs.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_Ccaw54AA.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const posts = [
    {
      title: "Sample Technical Blog",
      description: "A deep dive into deep learning concepts",
      date: "2024-04-10",
      url: "/blog/sample-technical-blog",
      type: "technical"
    },
    {
      title: "Getting Started with Algorithms",
      description: "Guide to competitive programming basics",
      date: "2024-04-09",
      url: "https://notion.site/your-note",
      type: "guide",
      external: true
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog | Gagan" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-4 mt-12"> <h1 class="font-zodiak text-4xl mb-8">Blog</h1> <div class="grid gap-8 max-w-2xl"> ${posts.map((post) => renderTemplate`<article class="border-b border-gray-200 pb-8"> <h2 class="font-zodiak text-2xl mb-2"> ${post.external ? renderTemplate`<a${addAttribute(post.url, "href")} target="_blank" rel="noopener noreferrer" class="hover:text-gray-600"> ${post.title} ↗
</a>` : renderTemplate`<a${addAttribute(post.url, "href")} class="hover:text-gray-600"> ${post.title} </a>`} </h2> <p class="text-gray-600 mb-2">${post.description}</p> <div class="text-sm text-gray-500"> <span>${post.date}</span> <span class="mx-2">•</span> <span class="capitalize">${post.type}</span> </div> </article>`)} </div> </main> ` })}`;
}, "D:/Blogging/myblog/src/pages/blog/index.astro", undefined);

const $$file = "D:/Blogging/myblog/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
