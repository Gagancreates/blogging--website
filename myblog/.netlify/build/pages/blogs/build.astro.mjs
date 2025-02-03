/* empty css                                       */
import { c as createComponent, a as createAstro, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_Bpyf8DWs.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_Ccaw54AA.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Build = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Build;
  const buildBlogs = [
    {
      title: "Building a Personal Website with Astro",
      description: "Step by step guide to create a modern portfolio site",
      url: "/blogs/build/personal-website"
    },
    {
      title: "Creating a REST API with Node.js",
      description: "Learn to build a scalable backend service",
      url: "/blogs/build/rest-api"
    },
    {
      title: "Full-Stack App with React and Firebase",
      description: "Build a real-time application from scratch",
      url: "/blogs/build/react-firebase"
    },
    {
      title: "CI/CD Pipeline with GitHub Actions",
      description: "Automate your deployment workflow",
      url: "/blogs/build/github-actions"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Build with Me | gagan" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-4 mt-12"> <h1 class="font-playfair text-3xl mb-4 font-bold">Build with Me</h1> <div class="grid gap-8 max-w-2xl"> ${buildBlogs.map((blog) => renderTemplate`<article class="border-b border-gray-200 pb-8"> <h2 class="font-playfair text-2xl mb-4"> <a${addAttribute(blog.url, "href")} class="hover:text-gray-600"> <u>${blog.title}</u> </a> </h2> <p class="font-playfair text-lg mb-4">${blog.description}</p> </article>`)} </div> </main> ` })}`;
}, "D:/Blogging/myblog/src/pages/blogs/build.astro", undefined);

const $$file = "D:/Blogging/myblog/src/pages/blogs/build.astro";
const $$url = "/blogs/build";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Build,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
